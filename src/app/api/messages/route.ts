import { NextRequest, NextResponse } from 'next/server';

const SPREADSHEET_API_URL = process.env.NEXT_PUBLIC_SPREADSHEET_API_URL || 'https://script.google.com/macros/s/AKfycbxC9TDCUaBS9xybpn-4sfr_UKl92lbGRdh3YHLF9CjA5wnz_0SVNMPKgQ30aGiCqBlxvA/exec';

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching messages from:', SPREADSHEET_API_URL);
    
    // Add timestamp to Google Apps Script URL to bypass any caching
    const timestamp = Date.now();
    const urlWithCacheBust = `${SPREADSHEET_API_URL}${SPREADSHEET_API_URL.includes('?') ? '&' : '?'}t=${timestamp}`;
    
    const response = await fetch(urlWithCacheBust, {
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
    
    // Filter out invalid messages with looser criteria
    if (data.data && Array.isArray(data.data)) {
      const validMessages = data.data.filter((message: any) => {
        // Basic validation - only filter out completely invalid messages
        const hasId = message.id && message.id.trim() !== '';
        const hasName = message.name && message.name.trim() !== '';
        const hasContent = message.content && message.content.trim() !== '';
        
        // Only filter out messages that are completely empty or have test data
        const isNotTestData = !(message.name === 'test' && message.content === 'test');
        const isNotCompletelyEmpty = hasId && hasName && hasContent;
        
        const isValid = isNotCompletelyEmpty && isNotTestData;
        
        if (!isValid) {
          console.log('Filtered out invalid message:', message);
        }
        
        return isValid;
      });
      
      console.log(`Filtered ${data.data.length - validMessages.length} invalid messages`);
      console.log(`Returning ${validMessages.length} valid messages`);
      data.data = validMessages;
    }
    
    // Add aggressive cache control headers to prevent Vercel caching
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'Vary': '*',
        'Last-Modified': new Date().toUTCString(),
        'ETag': `"${Date.now()}"`,
        'X-Vercel-Cache': 'BYPASS',
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
