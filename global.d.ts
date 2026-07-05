// global.d.ts
import { ChatMessage } from './chat'; // if you defined ChatMessage elsewhere

declare global {
    namespace NodeJS {
        interface Global {
            chatStorage: { [roomid: string]: ChatMessage[] };
        }
    }
}
export {};