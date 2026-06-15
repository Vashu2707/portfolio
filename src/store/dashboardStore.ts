import { create } from 'zustand';

export type Page = 'dashboard' | 'profile' | 'projects' | 'skills' | 'resume' | 'contact' | 'blogs';

interface DashboardState {
  activeTile: number;
  soundsEnabled: boolean;
  currentPage: Page;
  reducedMotion: boolean;
  setActiveTile: (tile: number) => void;
  setSoundsEnabled: (enabled: boolean) => void;
  setCurrentPage: (page: Page) => void;
  setReducedMotion: (reduced: boolean) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  activeTile: 0,
  soundsEnabled: true,
  currentPage: 'dashboard',
  reducedMotion: false,
  setActiveTile: (tile: number) => set({ activeTile: tile }),
  setSoundsEnabled: (enabled: boolean) => set({ soundsEnabled: enabled }),
  setCurrentPage: (page: Page) => set({ currentPage: page }),
  setReducedMotion: (reduced: boolean) => set({ reducedMotion: reduced }),
}));
