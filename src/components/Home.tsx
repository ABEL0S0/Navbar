import React from 'react'
import NavBar from './Navbar/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <div style={styles.container}>
      </div>
    </div>
  );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};

export default Home;
