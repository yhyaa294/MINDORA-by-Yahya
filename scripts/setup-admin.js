const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase Environment Variables!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupAdmin() {
  console.log('🚀 Starting Admin Setup...');

  // 1. Insert Admin User
  const { data, error } = await supabase
    .from('students')
    .insert([
      { 
        email: 'admin@mindora.app', 
        full_name: 'Admin Mindora', 
        school_class: 'Counselor', 
        role: 'counselor' 
      }
    ])
    .select();

  if (error) {
    console.error('❌ Error inserting admin:', error.message);
    if (error.code === '42P01') {
        console.error("⚠️ Table 'students' might not exist. Please create it first.");
    }
  } else {
    console.log('✅ Admin User Created Successfully:', data);
  }

  console.log('✨ Setup Complete!');
}

setupAdmin();
