import { NextResponse } from 'next/server';

// Handle GET for Download Test (Sends 2MB of data)
export async function GET() {
  const size = 2 * 1024 * 1024; // 2MB
  const buffer = Buffer.alloc(size, '0');
  
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': size.toString(),
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}

// Handle POST for Upload Test (Receives data)
export async function POST(req: Request) {
  try {
    // Read the incoming payload to measure upload time
    await req.arrayBuffer();
    
    return NextResponse.json({ success: true }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
