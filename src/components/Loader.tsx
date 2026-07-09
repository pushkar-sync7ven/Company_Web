import { useEffect, useRef, useState } from "react";

interface LoaderProps {
  onFinish: () => void;
}

const LOADER_SHOWN_KEY = "sync7ven-loader-shown";
const MAX_LOADER_DURATION_MS = 5000;
const VIDEO_END_TIME = 4.43;
const FADE_OUT_DURATION_MS = 500;

export default function Loader({ onFinish }: LoaderProps) {
  const [hide, setHide] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedFadeOut = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const triggerFadeOut = () => {
      if (hasStartedFadeOut.current) return;
      hasStartedFadeOut.current = true;

      video.pause();
      setHide(true);

      setTimeout(() => {
        sessionStorage.setItem(LOADER_SHOWN_KEY, "true");
        onFinish();
      }, FADE_OUT_DURATION_MS);
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= VIDEO_END_TIME) {
        triggerFadeOut();
      }
    };

    const handleFallbackTimeout = () => {
      triggerFadeOut();
    };

    const timeoutId = window.setTimeout(handleFallbackTimeout, MAX_LOADER_DURATION_MS);

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      window.clearTimeout(timeoutId);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#0b0e15" }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="metadata"
        aria-label="SYNC7VEN logo animation"
        className="max-w-full max-h-full object-contain"
      >
        <source src="/Logo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
