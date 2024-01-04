import { FC } from 'react';
type ChatRoomProps = {
    roomId: string;
    userId: string;
    dataBaseApiUrl: string;
    authToken: string;
    currentRoom: ChatRoom;
    socketStatus: boolean;
    roomMenuOpen: boolean;
    setRoomMenuOpen: (bool: boolean) => void;
    sideMenuOpen: boolean;
    setSideMenuOpen: (bool: boolean) => void;
};
export declare const ChatRoom: FC<ChatRoomProps>;
export {};
