import qs from "querystring";
import axios from "axios";

interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  issued_at: number;
}

interface SpotifyArtist {
  name: string;
  id: string;
}

interface SpotifyAlbum {
  id: string;
  name: string;
  release_date: string;
  total_tracks: number;
  images: { height: number; width: number; url: string }[];
}

interface SpotifySearchResults {
  id: string;
  href: string;
  items: SpotifyTrack[];
  limit: number;
  next: string | null;
  offset: number;
  total: number;
  previous: string | null;
}

interface SpotifyTrack {
  id: string;
  popularity: number;
  name: string;
  duration_ms: number;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  url?: string;
  preview_url?: string;
}

interface Song {
  id: string;
  name: string;
  releaseYear: string;
  artist: string;
  album: string;
  albumArtUrl: string;
  duration: string;
  tempo: number;
  key: string;
  previewUrl?: string | null;
  createdAt?: Date | string;
}

let __token: SpotifyToken | null = null;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const fetchAccessToken = async (): Promise<SpotifyToken> => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    throw new Error("Missing Spotify client credentials");
  }

  const base64EncodedString = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const { data } = await axios({
    url: TOKEN_ENDPOINT,
    method: "POST",
    headers: {
      Authorization: `Basic ${base64EncodedString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      grant_type: "client_credentials",
    }),
  });

  return {
    ...data,
    issued_at: Date.now(),
    expires_in: data.expires_in * 1000,
  } as SpotifyToken;
};

const tokenIsValid = (token: SpotifyToken): boolean => {
  return Date.now() < token.issued_at + token.expires_in;
};

const getSpotifyToken = async (): Promise<SpotifyToken> => {
  if (!__token || !tokenIsValid(__token)) {
    const newToken = await fetchAccessToken();
    __token = newToken;
    return newToken;
  }
  return __token;
};

// Format

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = (millis % 60000) / 1000;
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds.toFixed(0);
};

const pitchToKey = (key) => {
  switch (key) {
    case 0:
      return "C";
    case 1:
      return "C#";
    case 2:
      return "D";
    case 3:
      return "D#";
    case 4:
      return "E";
    case 5:
      return "F";
    case 6:
      return "F#";
    case 7:
      return "G";
    case 8:
      return "G#";
    case 9:
      return "A";
    case 10:
      return "A#";
    case 11:
      return "B";
    case -1:
      return "";
    default:
      break;
  }
};

const formatSong = async (
  spotifyTrack: SpotifyTrack,
  isSearch = false
): Promise<Song> => {
  // If we are in a search, we want the smallest album art thumbnail
  let albumArtUrl: string;
  if (isSearch) {
    albumArtUrl =
      spotifyTrack.album.images[spotifyTrack.album.images.length - 2].url;
  } else {
    albumArtUrl = spotifyTrack.album.images[0].url;
  }

  const meta = await getTrackMeta(spotifyTrack.id);
  console.log(meta, "meta");

  return {
    id: spotifyTrack.id,
    name: spotifyTrack.name,
    releaseYear: spotifyTrack.album.release_date.substr(0, 4),
    artist: spotifyTrack.artists[0].name,
    album: spotifyTrack.album.name,
    albumArtUrl,
    tempo: meta.tempo.toFixed(0),
    key: pitchToKey(meta.key),
    duration: millisToMinutesAndSeconds(spotifyTrack.duration_ms),
    previewUrl: spotifyTrack.preview_url,
  };
};

const formatSpotifySearchResults = async (
  results: SpotifySearchResults
): Promise<Song[]> => {
  if (!results || !results.items) {
    return [];
  }
  const items = results.items.map((item) => formatSong(item, true));
  return Promise.all(items);
};

// Search Track

export const searchTrack = async (query: string) => {
  const token = await getSpotifyToken();
  const searchTerm = query.replace(" ", "%20");
  const { data } = await axios({
    url: `https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=5`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });

  return formatSpotifySearchResults(data.tracks);
};

export const getTrackMeta = async (id: string) => {
  const token = await getSpotifyToken();
  const { data } = await axios({
    url: `	https://api.spotify.com/v1/audio-features/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });

  return {
    ...data,
  };
};
