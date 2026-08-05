import { c as createClient } from "./index-BCpTDnyP.mjs";
const supabaseUrl = "https://kaytrcgzgyrgwzxhgniw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheXRyY2d6Z3lyZ3d6eGhnbml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MzczMTksImV4cCI6MjA5NjUxMzMxOX0.7wOqn5UxgkovFPH-1zwcMpzTnss18ejuzSaDiBGj0ks";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export {
  supabase as s
};
