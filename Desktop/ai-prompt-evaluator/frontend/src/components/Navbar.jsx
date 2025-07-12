import React from 'react';

const Navbar = ({ isAuthenticated, onLogout, setView }) => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}> Prompt Evaluator</h2>
      <div style={styles.links}>
        {isAuthenticated ? (
          <>
            <button onClick={() => setView('submit')} style={styles.btn}>Home</button>
            <button onClick={() => setView('history')} style={styles.btn}>History</button>
            <button onClick={onLogout} style={styles.btn}>Logout</button>
          </>
        ) : (
          <button onClick={() => setView('login')} style={styles.btn}>Login</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#333',
    padding: '10px 20px',
    color: '#fff'
  },
  logo: {
    margin: 0
  },
  links: {
    display: 'flex',
    gap: '10px'
  },
  btn: {
    background: '#fff',
    color: '#333',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    borderRadius: '4px'
  }
};

export default Navbar;
