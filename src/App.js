
import React, { createContext, useState , useContext } from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
   
    const contextValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
const MyButton = styled.button`
  display: inline-block;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  background-color: #af781b;
  
`;
const MyComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black' , color: theme === 'light' ? 'black' : 'white'  }} > <center>
          <MyButton  onClick={toggleTheme}>Dark/Light</MyButton></center>
            <LoginForm/>
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <MyComponent />
        </ThemeProvider>
    );
};

export default App;
