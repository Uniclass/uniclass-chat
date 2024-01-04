import { FC } from 'react';
type ChatAppProps = {
    socketApiUrl: string;
    dataBaseApiUrl: string;
    authToken: string;
    userId: string;
};
export declare const ChatApp: FC<ChatAppProps>;
export {};
