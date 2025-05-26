import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mxigcfzpkryzdeibwzkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14aWdjZnpwa3J5emRlaWJ3emtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMjg3NzQsImV4cCI6MjA2MzcwNDc3NH0.YNCbFg66JPQvNvseas5EwNg7ktVMDL88NI4ZX3mTlnk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
