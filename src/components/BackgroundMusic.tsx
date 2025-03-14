import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/jazz.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Set volume to 50%

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed top-6 right-6 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
      title={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? <Pause className="w-6 h-6 text-indigo-600" /> : <Play className="w-6 h-6 text-indigo-600" />}
    </button>
  );
};
