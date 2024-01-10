import { FC } from 'react';

export declare const ChatApp: FC<ChatAppProps>;

declare type ChatAppProps = {
    socketApiUrl: string;
    dataBaseApiUrl: string;
    authToken: string;
    userId: string;
};

export { }
