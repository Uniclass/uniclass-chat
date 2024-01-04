import { FC } from 'react';
type ChatRoomDetailProps = {
    dataBaseApiUrl: string;
    authToken: string;
    roomId: string;
    sideMenuOpen: boolean;
    setSideMenuOpen: (value: boolean) => void;
};
export declare const ChatRoomDetail: FC<ChatRoomDetailProps>;
export {};
