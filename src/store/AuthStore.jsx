import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
    loginGoogle: async () => {
        await supabase.auth.signInWithOAuth({ provider: 'google' });
    },
    logoutGoogle: async () => {
        await supabase.auth.singOut();
    }
}));