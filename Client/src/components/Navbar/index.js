import React, { useState } from 'react';
import { FaAlignLeft } from 'react-icons/fa';
import './Navbar.css'
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleTranslate = (language) => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=4bf8150619mshd02d48927e56ec7p193462jsnb8b9dbdaf2dc&q=${document.documentElement.innerHTML}&target=${language}`;

    fetch(url, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        document.documentElement.innerHTML = data.data.translations[0].translatedText;
      })
      .catch(error => console.log(error));
  };
return (
	<>
	<Nav>
		<NavLink to='/Home'style={FaAlignLeft}>
		<img src='./logo.png' alt='logo' style={{marginLeft:10}}/>
        </NavLink>
		<Bars />

		<NavMenu>
		<NavLink to='/Home'>
			Home
		</NavLink>
		<NavLink to='/about'>
			About
		</NavLink>
		<NavLink to='/team' >
			Team
		</NavLink>
		<NavLink to='/contact' >
			Contact
		</NavLink>
		<li className="dropdown">
          <span className="dropdown">Translate</span>
          <div className="dropdown-content">
            <button onClick={() => handleTranslate('te')}>Telugu</button><br/>
            <button onClick={() => handleTranslate('ta')}>Tamil</button><br/>
            <button onClick={() => handleTranslate('ur')}>Urdu</button><br/>
            <button onClick={() => handleTranslate('hi')}>Hindi</button>
          </div>
        </li>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavBtn>
		
	</Nav>
	</>
);
};

export default Navbar;
