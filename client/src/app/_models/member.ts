import{Photo} from './photo'

export interface Member {
    id: number;
    username: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    interduction: string;
    lookingFor: string;
    intests: string;
    city: string;
    country: string;
    photos: Photo[];
  }
  
