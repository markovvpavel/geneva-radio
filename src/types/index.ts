// App
export type Locale = "en" | "fr";
export type Theme = "light" | "dark";

export type WithChildren = {
  children: React.ReactNode;
};

export type WithClassName = {
  className: string;
};

export type WithClick = {
  onClick: () => void;
};

// Data
export type Banner = { poster: string; url: string };
export type Song = { name: string; url: string };

// Player
export type PlaybackMode = "regular" | "shuffle";
export type PlaybackState = "play" | "pause";
export type Playlist = Song[];
export interface CurrentSong {
  duration: string;
  index: number;
  progress: number;
  time: string;
}
