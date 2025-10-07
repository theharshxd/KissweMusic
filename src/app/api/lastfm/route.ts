import { getLastFMStats } from "@/lib/lastfm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stats = await getLastFMStats();
    
    if (!stats) {
      return new NextResponse(JSON.stringify({ error: "Failed to fetch LastFM stats" }), {
        status: 500,
      });
    }

    return NextResponse.json(stats);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
} 