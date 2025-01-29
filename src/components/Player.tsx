import {
  createContext,
  RefObject,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Logo } from "./Logo";
import { motion } from "motion/react";
import { songs } from "@/app/data";
import { formatTime, shuffleArray } from "@/utils";
import { ArrowLeftIcon } from "./Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "./Icons/ArrowRightIcon";
import {
  CurrentSong,
  PlaybackMode,
  PlaybackState,
  Playlist,
  Song,
} from "@/types";
import { useKeyDown } from "@/hooks/useKeyDown";
import clsx from "clsx";

interface PlayerContext {
  currentSong: CurrentSong;
  playbackMode: PlaybackMode;
  playbackState: PlaybackState;
  player: RefObject<HTMLAudioElement>;
  playlist: Song[];
  onPlay: () => void;
  onPause: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  togglePlaybackMode: () => void;
  togglePlaybackState: () => void;
  setCurrentSong: React.Dispatch<SetStateAction<CurrentSong>>;
  setPlaybackMode: React.Dispatch<SetStateAction<PlaybackMode>>;
  setPlaybackState: React.Dispatch<SetStateAction<PlaybackState>>;
  setPlaylist: React.Dispatch<SetStateAction<Playlist>>;
}

const PlayerContext = createContext<PlayerContext>({} as PlayerContext);

export const Player = () => {
  const player = useRef<HTMLAudioElement>(null);

  const [playbackMode, setPlaybackMode] = useState<PlaybackMode>("shuffle");
  const [playbackState, setPlaybackState] = useState<PlaybackState>("pause");
  const [playlist, setPlaylist] = useState<Playlist>(songs);
  const [currentSong, setCurrentSong] = useState<CurrentSong>({
    duration: "00:00",
    index: 0,
    progress: 0,
    time: "00:00",
  });

  const onNextTrack = useCallback(() => {
    let index: number;

    if (currentSong.index < playlist.length - 1) index = currentSong.index + 1;
    else if (currentSong.index === playlist.length - 1) index = 0;

    setCurrentSong((s) => ({ ...s, index }));
  }, [currentSong, playlist]);

  const onPrevTrack = useCallback(() => {
    let index: number;

    if (currentSong.index === 0) index = playlist.length - 1;
    else if (currentSong.index <= playlist.length - 1)
      index = currentSong.index - 1;

    setCurrentSong((s) => ({ ...s, index }));
  }, [currentSong, playlist]);

  const onPlay = useCallback(() => setPlaybackState("play"), []);

  const onPause = useCallback(() => setPlaybackState("pause"), []);

  const togglePlaybackMode = useCallback(
    () =>
      playbackMode === "regular"
        ? setPlaybackMode("shuffle")
        : setPlaybackMode("regular"),
    [playbackMode]
  );

  const togglePlaybackState = useCallback(
    () =>
      playbackState === "pause"
        ? setPlaybackState("play")
        : setPlaybackState("pause"),
    [playbackState]
  );

  useEffect(() => {
    if (!player.current) return;

    switch (playbackState) {
      case "pause":
        player.current.pause();
        break;
      case "play":
        player.current.play();
        break;
    }
  }, [currentSong.index, playbackState, player, playlist]);

  useEffect(() => {
    switch (playbackMode) {
      case "regular":
        setPlaylist(songs);
        break;
      case "shuffle":
        setPlaylist(shuffleArray(songs));
        break;
    }
  }, [playbackMode]);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        playbackMode,
        playbackState,
        player,
        playlist,
        onPlay,
        onPause,
        onNextTrack,
        onPrevTrack,
        togglePlaybackMode,
        togglePlaybackState,
        setCurrentSong,
        setPlaybackMode,
        setPlaybackState,
        setPlaylist,
      }}
    >
      <div className="w-[300px] md:w-[360px] flex flex-col items-center justify-center space-y-10 md:space-y-12 bg-_white/40 px-4 pb-14 md:pb-20 pt-2 md:pt-6 rounded-lg">
        <audio
          ref={player}
          playsInline
          src={playlist[currentSong.index].url}
          onEnded={onNextTrack}
        />

        <LogoButton />
        <PlayingNow />
        <ProgressBar />
        <ControlPanel />
      </div>
    </PlayerContext.Provider>
  );
};

const PlayingNow = () => {
  const { currentSong, playlist } = useContext(PlayerContext);
  const { index } = currentSong;

  return (
    <div
      className={clsx(
        "w-full flex flex-col justify-center items-center h-[80px]",
        "text-_black"
      )}
    >
      <span className="uppercase text-[1rem] text-center font-bold">
        Now Playing:
      </span>
      <span className="uppercase text-[1rem] text-center break-words">
        {playlist[index].name}
      </span>
    </div>
  );
};

const LogoButton = () => {
  const { togglePlaybackState } = useContext(PlayerContext);

  return (
    <motion.div
      className="cursor-pointer"
      whileTap={{ opacity: 0.6, scale: 0.8 }}
      onClick={togglePlaybackState}
    >
      <Logo theme={"dark"} />
    </motion.div>
  );
};

const ProgressBar = () => {
  const progressBar = useRef<HTMLDivElement>(null);

  const { currentSong, player, playlist, setCurrentSong } =
    useContext(PlayerContext);

  const setCurrentDuration = useCallback(
    (duration: string) => setCurrentSong((s) => ({ ...s, duration })),
    []
  );

  const setCurrentTime = useCallback(
    (time: string) => setCurrentSong((s) => ({ ...s, time })),
    []
  );

  const setProgress = useCallback(
    (progress: number) => setCurrentSong((s) => ({ ...s, progress })),
    []
  );

  useEffect(() => {
    if (!player.current) return;

    const handler = () => {
      setProgress(
        (player.current!.currentTime / player.current!.duration) * 100 || 0
      );
      setCurrentTime(formatTime(player.current!.currentTime || 0));
      setCurrentDuration(formatTime(player.current!.duration || 0));
    };

    player.current!.addEventListener("timeupdate", handler);

    return () => {
      player.current!.removeEventListener("timeupdate", handler);
    };
  }, [player, currentSong.index, playlist]);

  const rewind = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBar.current || !player.current) return;

    const rect = progressBar.current.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const newProgress = (clickPosition / rect.width) * 100;
    const newTime = (newProgress / 100) * player.current.duration;

    player.current.currentTime = newTime;
    setProgress(newProgress);
  };

  return (
    <div className="flex">
      <div className="h-[30px] w-[60px] flex justify-center items-center">
        <span className={clsx("h-fit w-fit", "text-_black")}>
          {currentSong.time}
        </span>
      </div>
      <div
        className={clsx(
          "h-[30px] w-[180px] md:w-[200px] cursor-pointer select-none",
          "bg-_black/30"
        )}
        onClick={rewind}
        ref={progressBar}
      >
        <motion.div
          className={clsx("h-full", "bg-_black")}
          animate={{ width: `${currentSong.progress}%` }}
          initial={{ width: 0 }}
        />
      </div>
      <div className="h-[30px] w-[60px] flex justify-center items-center">
        <span className={clsx("h-fit w-fit", "text-_black")}>
          {currentSong.duration}
        </span>
      </div>
    </div>
  );
};

const ControlPanel = () => {
  const {
    playbackMode,
    player,
    onNextTrack,
    onPrevTrack,
    onPlay,
    onPause,
    togglePlaybackMode,
    togglePlaybackState,
  } = useContext(PlayerContext);

  useEffect(() => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("nexttrack", onNextTrack);
      navigator.mediaSession.setActionHandler("previoustrack", onPrevTrack);
      navigator.mediaSession.setActionHandler("play", onPlay);
      navigator.mediaSession.setActionHandler("pause", onPause);
    }

    return () => {
      if ("mediaSession" in navigator) {
        navigator.mediaSession.setActionHandler("nexttrack", null);
        navigator.mediaSession.setActionHandler("previoustrack", null);
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
      }
    };
  }, [onNextTrack, onPrevTrack, onPlay, onPause]);

  useKeyDown(" ", togglePlaybackState);

  useKeyDown("ArrowRight", () => {
    const { current } = player;

    const currentTime = current?.currentTime;
    const duration = current?.duration;

    if (current && currentTime && duration) {
      const newTime = Math.min(currentTime + 15, duration);
      current.currentTime = newTime;
    }
  });

  useKeyDown("ArrowLeft", () => {
    const { current } = player;

    const currentTime = current?.currentTime;
    const duration = current?.duration;

    if (current && currentTime && duration) {
      const newTime = Math.max(currentTime - 15, 0);
      current.currentTime = newTime;
    }
  });

  return (
    <div className="flex w-[240px] justify-between items-center">
      <ArrowLeftIcon
        className={clsx("h-[24px] cursor-pointer select-none", "text-_black")}
        onClick={onPrevTrack}
      />
      <div
        className={clsx(
          "backdrop-blur-md h-[30px] px-4 flex justify-center items-center rounded-lg cursor-pointer select-none",
          playbackMode === "shuffle" && "bg-_black !text-_white",
          playbackMode === "regular" && "text-_white bg-_black/30"
        )}
        onClick={togglePlaybackMode}
      >
        <span>{playbackMode === "shuffle" ? "Unshuffle" : "Shuffle"}</span>
      </div>
      <ArrowRightIcon
        className={clsx("h-[24px] cursor-pointer select-none", "text-_black")}
        onClick={onNextTrack}
      />
    </div>
  );
};
