import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://umoiqpsvrnfyqgdzxcjm.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtb2lxcHN2cm5meXFnZHp4Y2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0NDAzNzgsImV4cCI6MjA3MzAxNjM3OH0.fLwtrQJOOWh3_DevTdvrRlB3AgcY5UWBJnGDAX2OUcI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)