import { create } from "zustand";

interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: true }),
    onOpen: () => set({ isOpen: false }),
}));

export default useLoginModal;