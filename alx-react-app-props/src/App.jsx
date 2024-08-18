import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Hello World</h1>
    </>
  );
}
function App() {
    return (
        <div className="App">
            <WelcomeMessage />
        </div>
    );
}
function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
function App() {
    return (
        <div className="App">
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
    );
}
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <Counter />
    </div>
  );
}

import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}

import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return <UserDetails />;
}

import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './UserContext'; // Adjust the import path if necessary

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>
      <ProfilePage />
    </UserProvider>
  );
}







export default App;
