"use client";

import { useEffect, useState } from "react";
import { Disc3, Crown, TrendingUp, Calendar, History } from "lucide-react";
import Link from "next/link";

interface LastFMTrack {
  name: string;
  artist: {
    "#text": string;
  };
  url: string;
  "@attr"?: {
    nowplaying: "true" | "false";
  };
  playcount?: string;
}

interface LastFMTopArtist {
  name: string;
  playcount: string;
  url: string;
}

interface LastFMStats {
  user: {
    playcount: string;
    name: string;
    url: string;
  };
  recentTracks?: LastFMTrack[];
  topArtist?: LastFMTopArtist;
  topTracks?: LastFMTrack[];
  weeklyPlaycount?: string;
}

export function LastFMStats() {
  const [stats, setStats] = useState<LastFMStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/lastfm");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching LastFM stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
    // Refresh every minute to check for currently playing track
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-full overflow-clip rounded-md border border-border bg-card">
      <div className="w-full bg-muted/5 px-6 py-3 border-b border-border">
        <h3 className="text-sm font-medium text-center line-clamp-1">
          Music Stats
        </h3>
      </div>
      <div className="p-6 w-full grow">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Disc3 className="size-8 animate-pulse text-muted-foreground" />
          </div>
        ) : stats ? (
          <div className="space-y-6">
            {/* Main Stats Row */}
            {stats.weeklyPlaycount && (
              <div className="p-4 rounded-md bg-muted/5 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="size-5 text-muted-foreground" />
                  <p className="font-medium text-lg">This Week</p>
                </div>
                <p className="font-mono font-bold text-3xl sm:text-4xl tracking-tight">
                  {parseInt(stats.weeklyPlaycount).toLocaleString()}
                </p>
              </div>
            )}

            {/* Top Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.topArtist && (
                <div className="p-4 rounded-md bg-muted/5 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="size-5 text-muted-foreground" />
                    <p className="font-medium text-lg">Top Artist</p>
                  </div>
                  <Link
                    href={stats.topArtist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <p className="font-medium text-lg sm:text-xl line-clamp-1 group-hover:text-primary transition-colors">
                      {stats.topArtist.name}
                    </p>
                    <p className="text-muted-foreground font-mono text-sm">
                      {parseInt(stats.topArtist.playcount).toLocaleString()} plays
                    </p>
                  </Link>
                </div>
              )}

              {stats.topTracks && stats.topTracks.length > 0 && (
                <div className="p-4 rounded-md bg-muted/5 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="size-5 text-muted-foreground" />
                    <p className="font-medium text-lg">Top Track</p>
                  </div>
                  <Link
                    href={stats.topTracks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <p className="font-medium text-lg sm:text-xl line-clamp-1 group-hover:text-primary transition-colors">
                      {stats.topTracks[0].name}
                      <span className="text-muted-foreground font-mono text-sm ml-2">
                        ({parseInt(stats.topTracks[0].playcount || "0").toLocaleString()} plays)
                      </span>
                    </p>
                    <p className="text-muted-foreground text-sm line-clamp-1">
                      {stats.topTracks[0].artist["#text"]}
                    </p>
                    <p className="text-muted-foreground font-mono text-sm mt-1">
                      Total Scrobbles: {parseInt(stats.user.playcount).toLocaleString()}
                    </p>
                  </Link>
                </div>
              )}
            </div>

            {/* Recent Tracks */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <History className="size-5 text-muted-foreground" />
                <p className="font-medium text-lg">Recent Tracks</p>
              </div>
              {stats.recentTracks?.map((track, index) => (
                <Link
                  key={index}
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center gap-4 p-3 rounded-md bg-muted/5 border border-border hover:border-primary/20 transition-colors">
                    <Disc3 className={`size-5 ${track["@attr"]?.nowplaying === "true" ? "animate-spin text-primary" : "text-muted-foreground"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-base sm:text-lg line-clamp-1 group-hover:text-primary transition-colors">
                        {track.name}
                        {track.playcount && (
                          <span className="text-muted-foreground font-mono text-sm ml-2">
                            ({parseInt(track.playcount).toLocaleString()} plays)
                          </span>
                        )}
                      </p>
                      <p className="text-muted-foreground text-sm line-clamp-1">
                        {track.artist["#text"]}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Failed to load</p>
        )}
      </div>
    </div>
  );
} 