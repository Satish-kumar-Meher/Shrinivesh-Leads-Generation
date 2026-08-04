import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
// We use VITE_ prefix so they are accessible on the client side
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://kaytrcgzgyrgwzxhgniw.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
