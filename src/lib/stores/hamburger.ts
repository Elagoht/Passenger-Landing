import { create } from "zustand"

interface HamburgerStore {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

const hamburgerStore = create<HamburgerStore>((set) => ({
  isOpen: false,

  toggle: () => set((state) => ({ isOpen: !state.isOpen })),

  close: () => set({ isOpen: false })
}))

export default hamburgerStore