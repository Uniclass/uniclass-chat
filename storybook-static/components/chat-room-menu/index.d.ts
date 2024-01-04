import { FC } from 'react';
type ChatRoomMenuProps = {
    roomMenuOpen: boolean;
    setRoomMenuOpen: (bool: boolean) => void;
    chatRoom: ChatRoom[];
    selectedTab: number;
    setSelectedTab: (index: number) => void;
    userProfiles: any[];
};
export declare const ChatRoomMenu: FC<ChatRoomMenuProps>;
export {};
