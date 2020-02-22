import React from 'react'

const Navbar = () => {
  return (
    <div id='navbar'>
      <div>this will be a navbar</div>
      <div>
        <ul>
          <li>about me</li>
          <li>projects</li>
        </ul>
      </div>
      <div id='social'>
        social media
        <div>
          <a href='https://www.linkedin.com/in/enya-bf/'>
            <ion-icon size='large' name='logo-linkedin'></ion-icon>
          </a>
        </div>
        <div>
          <a href='https://github.com/Afrogrrrl'>
            <ion-icon size='large' name='logo-github'></ion-icon>
          </a>
        </div>
        <div>
          <a href='https://twitter.com/latechnica1'>
            <ion-icon size='large' name='logo-twitter'></ion-icon>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
