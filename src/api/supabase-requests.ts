import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_URL;
const supabaseUrl = "https://armuswmvcqlzahflhgoi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFybXVzd212Y3FsemFoZmxoZ29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyODAxOTQsImV4cCI6MjAzNDg1NjE5NH0.O51bcHwBsMCn1VwpO9IoE9ZPMHgqdKMojE1UZx8UuKc";
export const supabase = createClient(supabaseUrl!, supabaseKey!);
