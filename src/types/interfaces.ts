import { Session, User, WeakPassword } from "@supabase/supabase-js";

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserDataFromSupabase {
  user: User | null;
  session: Session | null;
  weakPassword?: WeakPassword | undefined;
}

export interface Program {
  coach: string;
  tagline: string;
  description: string;
  price: number;
  formattedPrice: string;
  numberOfSessions: number;
  image?: string; 
}
