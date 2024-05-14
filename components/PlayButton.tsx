import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
interface PlayButtonProps {
  ifActiveSong: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ ifActiveSong }) => {
  return (
    <button
      className={
        !ifActiveSong
          ? 'transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110'
          : ''
      }
    >
      {!ifActiveSong ? (
        <FaPlay className="text-black" />
      ) : (
        <Image
          src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
          alt="player"
          width="20"
          height="20"
        />
      )}
    </button>
  );
};

export default PlayButton;
