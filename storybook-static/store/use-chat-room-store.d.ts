import { UseBoundStore, StoreApi } from 'zustand';
type StoreState = {
    chatRoom: any[];
    rooms: Record<string, any[]>;
    isLoading: boolean;
    error: Error | null;
};
type StoreActions = {
    fetchChatRoom: (dataBaseApiUrl: string, authToken: string) => void;
};
export declare const useChatRoomStore: UseBoundStore<StoreApi<StoreState & StoreActions>>;
export {};
