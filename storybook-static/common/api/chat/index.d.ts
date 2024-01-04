declare const fetchChatRoom: (dataBaseApiUrl: string, authToken: string) => Promise<ChatRoom[]>;
declare const fetchChatMessage: (dataBaseApiUrl: string, authToken: string, room_id: string, ts_st: string, ts_en: string) => Promise<ChatMessage[]>;
declare const sendChatMessage: (dataBaseApiUrl: string, authToken: string, body: ChatMessage, room_id: string) => Promise<ChatMessage>;
declare const getAuthToken: (dataBaseApiUrl: string, authToken: string) => Promise<string>;
declare const fetchUserProfileList: (dataBaseApiUrl: string, authToken: string, room_id: string) => Promise<RoomAttendan[]>;
declare const fetchUserProfile: (dataBaseApiUrl: string, authToken: string, user_id: string) => Promise<any>;
declare const fetchChatRoomDetail: (dataBaseApiUrl: string, authToken: string, room_id: string) => Promise<any>;
export { fetchChatRoom, fetchChatMessage, sendChatMessage, getAuthToken, fetchUserProfileList, fetchUserProfile, fetchChatRoomDetail };
