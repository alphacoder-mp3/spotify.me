import { create } from 'zustand';

interface PlayerStore {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const usePlayer = create<PlayerStore>(set => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => set({ ids: [], activeId: undefined }),
  isPlaying: false,
  setIsPlaying: (playing: boolean) => set({ isPlaying: playing }),
}));

export default usePlayer;
