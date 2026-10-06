"use client";

import React, { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = (window.scrollY / scrollHeight) * 100;
        setProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-300 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(0,242,254,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
