import {Photo} from './Photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: Int16Array;
    gender: string;
    created: Date;
    lastActive: string;
    photoURL: string;
    city: string;
    country: string;
    interests ?: string;
    introduction?: string;
    lookingFor?:string;
    photos?:Photo[];
}
