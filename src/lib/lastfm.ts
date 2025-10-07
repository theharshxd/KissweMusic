const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME;
const BASE_URL = "https://ws.audioscrobbler.com/2.0";

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

interface LastFMUser {
  playcount: string;
  name: string;
  url: string;
  registered: {
    unixtime: string;
  };
}

interface LastFMStats {
  user: LastFMUser;
  recentTracks?: LastFMTrack[];
  topArtist?: LastFMTopArtist;
  topTracks?: LastFMTrack[];
  weeklyPlaycount?: string;
}

// Add specific interfaces for API responses
interface LastFMRecentTrack {
  name: string;
  artist: {
    "#text": string;
  };
  url: string;
  "@attr"?: {
    nowplaying: "true" | "false";
  };
}

interface LastFMTopTrack {
  name: string;
  artist: {
    name: string;
  };
  url: string;
  playcount: string;
}

async function getRecentTrack(): Promise<LastFMTrack | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
    );

    if (!response.ok) {
      throw new Error(`LastFM API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.recenttracks?.track[0] || null;
  } catch (error) {
    console.error("Error fetching recent track:", error);
    return null;
  }
}

async function getTopArtist(): Promise<LastFMTopArtist | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/?method=user.gettopartists&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1&period=overall`
    );

    if (!response.ok) {
      throw new Error(`LastFM API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.topartists?.artist[0] || null;
  } catch (error) {
    console.error("Error fetching top artist:", error);
    return null;
  }
}

export async function getLastFMStats(): Promise<LastFMStats | null> {
  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    console.error("LastFM API key or username not configured");
    return null;
  }

  try {
    const [userInfo, recentTracks, topArtists, topTracks, weeklyChart] = await Promise.all([
      fetch(
        `${BASE_URL}/?method=user.getinfo&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json`
      ).then((res) => res.json()),
      fetch(
        `${BASE_URL}/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=3`
      ).then((res) => res.json()),
      fetch(
        `${BASE_URL}/?method=user.gettopartists&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1&period=overall`
      ).then((res) => res.json()),
      fetch(
        `${BASE_URL}/?method=user.gettoptracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1&period=overall`
      ).then((res) => res.json()),
      fetch(
        `${BASE_URL}/?method=user.getweeklytrackchart&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json`
      ).then((res) => res.json()),
    ]);

    const recentTracksList = recentTracks?.recenttracks?.track?.map((track: LastFMRecentTrack) => ({
      name: track.name,
      artist: track.artist,
      url: track.url,
      "@attr": track["@attr"],
    }));
    const topArtist = topArtists?.topartists?.artist?.[0];
    const topTracksList = topTracks?.toptracks?.track?.map((track: LastFMTopTrack) => ({
      name: track.name,
      artist: track.artist,
      url: track.url,
      playcount: track.playcount,
    }));
    const weeklyPlaycount = weeklyChart?.weeklytrackchart?.["@attr"]?.total;

    return {
      user: userInfo.user,
      recentTracks: recentTracksList,
      topArtist: topArtist ? {
        name: topArtist.name,
        playcount: topArtist.playcount,
        url: topArtist.url,
      } : undefined,
      topTracks: topTracksList,
      weeklyPlaycount,
    };
  } catch (error) {
    console.error("Error fetching LastFM stats:", error);
    return null;
  }
}