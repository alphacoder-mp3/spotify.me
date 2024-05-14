'use client';
import { useEffect } from 'react';
import { Song } from '@/types';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import MediaItem from '@/components/MediaItem';
import LikeButton from '@/components/LikeButton';
import useOnPlay from '@/hooks/useOnPlay';
// import Image from 'next/image';

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs.
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song, idx) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="text-neutral-400 hover:invisible"> {idx + 1}</div>
          {/* <Image
            src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
            alt="player"
            width="20"
            height="20"
          /> */}
          <div className="flex-1">
            <MediaItem
              onClick={(id: string) => {
                onPlay(id);
              }}
              data={song}
            />
          </div>
          <div>
            <LikeButton songId={song.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
