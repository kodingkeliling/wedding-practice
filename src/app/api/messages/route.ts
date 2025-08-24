import { NextRequest, NextResponse } from 'next/server';

const SPREADSHEET_API_URL = process.env.NEXT_PUBLIC_SPREADSHEET_API_URL || 'https://script.google.com/macros/s/AKfycbxC9TDCUaBS9xybpn-4sfr_UKl92lbGRdh3YHLF9CjA5wnz_0SVNMPKgQ30aGiCqBlxvA/exec';

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching messages from:', SPREADSHEET_API_URL);
    
    const response = await fetch(SPREADSHEET_API_URL, {
      method: 'GET',
      headers: {
        'Accept-Language': 'id-ID',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
      redirect: 'follow', // Follow redirects
      cache: 'no-store', // Disable Next.js caching
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Received data:', data);
    
    // Filter out invalid messages
    if (data.data && Array.isArray(data.data)) {
      const validMessages = data.data.filter((message: any) => {
        // Check if message has valid data
        const hasValidName = message.name && message.name.trim() !== '' && message.name !== 'test';
        const hasValidContent = message.content && message.content.trim() !== '' && message.content !== 'test';
        const hasValidDate = message.createdAt && 
                           message.createdAt !== 'test' && 
                           !isNaN(new Date(message.createdAt).getTime());
        const hasValidId = message.id && message.id.trim() !== '' && message.id !== 'test';
        
        // Additional check for test data patterns
        const isNotTestData = !(message.name === 'test' && message.content === 'test' && message.createdAt === 'test');
        
        const isValid = hasValidName && hasValidContent && hasValidDate && hasValidId && isNotTestData;
        
        if (!isValid) {
          console.log('Filtered out invalid message:', message);
        }
        
        return isValid;
      });
      
      console.log(`Filtered ${data.data.length - validMessages.length} invalid messages`);
      data.data = validMessages;
    }
    
    // Add cache control headers to prevent caching
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error fetching messages from Google Apps Script:', error);
    
    // Return empty data structure if there's an error
    return NextResponse.json({
      data: []
    });
  }
}
