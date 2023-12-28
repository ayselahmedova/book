import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signup from '../../../pages/SignUpPage/signup.module.scss';
import app from '../../../firebase/firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';

const AuthForm = ({ buttonName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth(app);

    try {
      if (buttonName === 'Login') {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
      } else {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredentials.user, { displayName: username });
        navigate('/');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {buttonName === 'Sign Up' && (
        <div className={signup.form_group}>
          <label>Username</label>
          <input
            type="text"
            className={signup.form_input}
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}
      <div className={signup.form_group}>
        <label>Email</label>
        <input
          type="email"
          className={signup.form_input}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={signup.form_group}>
        <label>Password</label>
        <input
          type="password"
          className={signup.form_input}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={signup.form_group}>
        <input type="submit" className="primary_button" value={buttonName} />
      </div>
    </form>
  );
};

export default AuthForm;
