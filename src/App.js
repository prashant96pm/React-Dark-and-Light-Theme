import React, { useState } from "react";
import "./styles.css";
import data from "./data";
import Post from "./Post";

function App() {
  // Task-1: Create a mechanism for toggling "light-theme" and "dark-theme" classes.
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div>
        <nav className="nav-bar"
          <h1>Home</h1>
          <button className="btn" onClick={toggleTheme}>
            Toggle Theme
          </button>
          <br />
        </nav>
      </div>
      <div>
        {data.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
}

export default App;
