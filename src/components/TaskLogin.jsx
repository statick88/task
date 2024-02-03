// TaskLogin.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

const TaskLogin = ({ supabase }) => {
  const handleFacebookLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        provider: 'facebook',
      });

      if (error) {
        throw error;
      }

      console.log('User signed in with Facebook:', user);
    } catch (error) {
      console.error('Error signing in with Facebook:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
};

TaskLogin.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskLogin;
