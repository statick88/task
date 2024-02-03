import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const FacebookLoginButton = () => {
  const handleFacebookLogin = async () => {
    const { user, error } = await supabase.auth.signIn({
      provider: 'facebook',
    });
    if (error) {
      console.error('Error signing in with Facebook:', error.message);
    }
  };

  return (
    <button onClick={handleFacebookLogin}>Login with Facebook</button>
  );
};

export default FacebookLoginButton;
