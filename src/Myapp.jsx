import React from 'react'

function Myapp() {
  
    
    const body = document.body;
    const loginBox = document.querySelector(".login-box");
    const h1 = document.getElementsByTagName("h1")[0];
    const inputs = document.querySelectorAll("input");
    const loginButton = document.getElementById("login-button");
    const h2 = document.getElementsByTagName("h2")[0];
    
    const switchTheme =() => {
      loginBox.classList.toggle("dark-mode");
      body.classList.toggle("dark-mode");
      h1.classList.toggle("dark-mode");
      inputs.forEach(input => {
        input.classList.toggle("dark-mode");
      });
      loginButton.classList.toggle("dark-mode");
      h2.classList.toggle("dark-mode");
        
  };
  return (
    
    <div>
       <div>
        
  <div className="login-box">
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" id="login-input" />
      <input type="password" placeholder="Password" id="login-input" />
      <button type="submit" id="login-button">Login</button>
    </form>
  </div>
  <div className="theme-toggle">
    <h2 />
    <label className="switch">
      <input type="checkbox" onclick="switchTheme()" />
      <span className="slider" />
    </label>
  </div>
</div>

    </div>
  )
}

export default Myapp