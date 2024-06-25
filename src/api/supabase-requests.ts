import { createClient } from "@supabase/supabase-js";
const VITE_SUPABASE_URL = "https://tznitsqvfdhgdbmvfbos.supabase.co";
const VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6bml0c3F2ZmRoZ2RibXZmYm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzMzg4MTEsImV4cCI6MjAzNDkxNDgxMX0._aKbvZfgHURB64MXHdStBHksDA5V8XvP6vg6otpkB1k";
export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);
