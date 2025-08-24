import { NextRequest, NextResponse } from 'next/server';
import { CommentFormData } from '@/types';

const SPREADSHEET_API_URL = process.env.NEXT_PUBLIC_SPREADSHEET_API_URL || 'https://script.google.com/macros/s/AKfycbxC9TDCUaBS9xybpn-4sfr_UKl92lbGRdh3YHLF9CjA5wnz_0SVNMPKgQ30aGiCqBlxvA/exec';

export async function POST(request: NextRequest) {
  try {
    const body: any = await request.json();
    console.log('Received request body:', body);

    // Check if this is an RSVP submission
    if (body.action === 'rsvp') {
      const rsvpData = body.data;

      // Validate the RSVP data
      if (!rsvpData.name || !rsvpData.message || !rsvpData.attendance) {
        return NextResponse.json(
          { error: 'Missing required fields for RSVP' },
          { status: 400 }
        );
      }

      console.log('Sending RSVP to Google Apps Script:', SPREADSHEET_API_URL);

      // Send to Google Apps Script
      const response = await fetch(SPREADSHEET_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'id-ID',
        },
        body: JSON.stringify({
          action: 'rsvp',
          data: {
            name: rsvpData.name,
            message: rsvpData.message,
            attendance: rsvpData.attendance,
          }
        }),
      });

      console.log('Google Apps Script response status:', response.status);

      if (!response.ok) {
        console.error('Google Apps Script error:', response.status, response.statusText);
        throw new Error(`Google Apps Script error: ${response.status}`);
      }

      const result = await response.json();
      console.log('RSVP submitted to Google Apps Script:', result);

      // Extract the actual message data from the Google Apps Script response
      const messageData = result.data || result;

      return NextResponse.json(
        {
          success: true,
          message: 'RSVP submitted successfully',
          data: messageData
        },
        { status: 200 }
      );
    }

    // Handle regular comment submission (fallback)
    const commentData: CommentFormData = body;

    // Validate the request body
    if (!commentData.name || !commentData.message || !commentData.attendance) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Received comment submission:', commentData);

    return NextResponse.json(
      {
        success: true,
        message: 'Comment submitted successfully',
        data: {
          id: `msg_${Date.now()}`,
          name: commentData.name,
          content: commentData.message,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing comment submission:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // This endpoint could be used to fetch comments if needed
    return NextResponse.json(
      { message: 'Comments API endpoint' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in GET /api/comments:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
