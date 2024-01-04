import { UseBoundStore, StoreApi } from 'zustand';
type StoreState = {
    rooms: Record<string, ChatMessage[]>;
    profile: RoomAttendan[];
    socket: WebSocket | null;
    socketStatus: boolean;
    sending: boolean;
};
type StoreActions = {
    connectWebSocket: (dataBaseApiUrl: string, socketApiUrl: string, authToken: string) => void;
    disconnectWebSocket: () => void;
    sendMessage: (dataBaseApiUrl: string, authToken: string, data: ChatMessage, room_id: string) => void;
    fetchChatMessage: (dataBaseApiUrl: string, authToken: string, room_id: string, ts_st: string, ts_en: string) => void;
    fetchUserProfile: (dataBaseApiUrl: string, authToken: string, room_Id: string) => void;
};
export declare const useChatStore: UseBoundStore<StoreApi<StoreState & StoreActions>>;
export {};
