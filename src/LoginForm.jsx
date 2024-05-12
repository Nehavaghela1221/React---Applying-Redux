import React, { useState } from 'react';
import styles from './LoginForm.module.css'; // Import CSS Module

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Simulate successful login
    setUsername('');
    setPassword('');
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <label htmlFor="username" className={styles.label}>
        Username:
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className={styles.input}
      />
      <label htmlFor="password" className={styles.label}>
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.submitButton}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
