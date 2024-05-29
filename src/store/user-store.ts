import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  accessToken: string;
}

interface UserState {
  user: User | null;
  setCredentials: (user: User) => void;
  removeCredentials: () => void;
}

const userStoreSlice: StateCreator<UserState> = (set) => ({
  user: null,
  setCredentials: (user) => set({ user }),
  removeCredentials: () => set({ user: null }),
});

const persistedUserStore = persist<UserState>(userStoreSlice, {
  name: "user",
});

export const useUserStore = create(persistedUserStore);
