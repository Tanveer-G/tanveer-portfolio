import { NextRequest, NextResponse } from 'next/server';

// Configuration – set these in your environment variables
const ANALYTICS_ENDPOINT = 'https://getanalyzr.vercel.app/api/events'; // Adjust if needed
const ANALYTICS_API_KEY = process.env.ANALYTICS_API_KEY; // Optional, if required

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming event
    const body = await request.json();
    const { name, props } = body;

    // Basic validation
    if (!name || !props) {
      return NextResponse.json(
        { error: 'Missing name or props' },
        { status: 400 }
      );
    }

    // Forward to the external analytics service
    const response = await fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${ANALYTICS_API_KEY}`,
      },
      body: JSON.stringify({
        event: name,
        properties: props,
        timestamp: new Date().toISOString(),
        // You can also add additional metadata like user agent, IP, etc.
        // Be careful with privacy and PII.
      }),
    });

    if (!response.ok) {
      // Log server-side but don't expose error to client
      console.error('Analytics forward failed:', await response.text());
      return NextResponse.json(
        { error: 'Failed to forward analytics' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: handle preflight requests if needed
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}