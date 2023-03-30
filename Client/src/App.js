import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Teams from './pages/team';
import Contact from './pages/contact';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Preloader from './components/preloader/preloader';
import Fdashboard from './Fdashboard/Fdashboard';
import Cdashboard from './Cdashboard/Cdashboard';
import Adashboard from './Adashboard/Adashboard';
import Sdashboard from './Sdashboard/Sdashboard';
import Addproducts from './Fdashboard/pages/Addproducts';
import Viewproducts from './Fdashboard/pages/viewproducts';
import FTransactions from './Fdashboard/pages/FTransactions';
import Viewpesticides from './Fdashboard/pages/ViewPesticides';

//GrowConnect

function App() {
	const [isLoading, setIsLoading] = useState(true);
  
	useEffect(() => {
	  // Simulate loading process
	  setTimeout(() => setIsLoading(false), 1500);
	}, []);
  
	return (
	  <>
		{isLoading ? <Preloader /> : (
		  <>
			<Router>
			  {/* <Navbar /> */}
			  <Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/team' element={<Teams />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/Fdashboard' element={<Fdashboard />} />
				<Route path='/Cdashboard' element={<Cdashboard />} />
				<Route path='/Sdashboard' element={<Sdashboard />} />
				<Route path='/Adashboard' element={<Adashboard />} />
				<Route path='/Fdashboard/Addproducts' element={<Addproducts/>}/>
				<Route path='/Fdashboard/ViewProducts' element={<Viewproducts/>}/>
				<Route path='/Fdashboard/FTransactions' element={<FTransactions/>}/>
				<Route path='/Fdashboard/Viewpesticides' element={<Viewpesticides/>}/>


			  </Routes>
			</Router>
		  </>
		)}
	  </>
	);
  }
  
  export default App;
  