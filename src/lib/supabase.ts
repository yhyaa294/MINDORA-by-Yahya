import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables for Supabase connection
// These are public keys safe for client-side usage
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase URL or Key is missing in environment variables!");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

console.log('Supabase Client Initialized ✅');
