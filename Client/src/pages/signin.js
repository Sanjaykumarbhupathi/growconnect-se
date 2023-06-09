import { useState } from 'react';
import { FaAlignLeft, FaBorderNone, FaEye, FaEyeSlash,FaHome } from 'react-icons/fa';
import farmerIcon from './icons/farmer.png';
import customerIcon from './icons/consumer.png';
import adminIcon from './icons/admin.png';
import supplierIcon from './icons/seller.png';
import defaultIcon from './icons/user.png';
import { useNavigate } from 'react-router-dom';
import './signin.css';
import Signup from './signup';
import { Link } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [icon, setIcon] = useState(defaultIcon);
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setUserType(event.target.value);
    switch (event.target.value) {
      case 'farmer':
        setIcon(farmerIcon);
        break;
      case 'customer':
        setIcon(customerIcon);
        break;
      case 'admin':
        setIcon(adminIcon);
        break;
      case 'supplier':
        setIcon(supplierIcon);
        break;
      default:
        setIcon(defaultIcon);
        break;
    }
  };
  
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (event) => {
    // alert("Helllllooooo")
    event.preventDefault();
  // Add sign-in logic here
  const formData ={
    email:email,
    password:password,
  }
  try {
    const response = await fetch('http://localhost:5001/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);
    if(response.ok){
      const userType=data.type;
      if(userType==='farmer'){
        navigate('/Fdashboard');
      }
      else if(userType==='customer'){
        navigate('/Cdashboard');
      }
      else if(userType==='admin'){
        navigate('/Adashboard');
      }
      else{
        navigate('/Sdashboard');
      }
    }
  } catch (error) {
    console.error(error);
  }
  };

  return (
    <>
      <div style={{alignItems:FaAlignLeft, textDecoration:FaBorderNone, }}>
      <button className='backhome'><Link to={'/'} ><FaHome/></Link></button>

      </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
    <h2>Sign in</h2>
    
  </div>
      <form onSubmit={handleSubmit}>
      <div>
        {icon && <img src={icon} alt={userType} />}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <div className="password-input-container">
          <input type={passwordShown ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordShown ? (
            <FaEyeSlash className="password-icon" onClick={togglePasswordVisibility} />
          ) : (
            <FaEye className="password-icon" onClick={togglePasswordVisibility} />
          )}
        </div>
        </div>
      <div>
        <label>Are you a:</label>
        <label>
          <input type="radio" name="userType" value="farmer" checked={userType === 'farmer'} onChange={handleRadioChange} />
          Farmer
        </label>
        <label>
          <input type="radio" name="userType" value="customer" checked={userType === 'customer'} onChange={handleRadioChange} />
          Customer
        </label>
        <label>
          <input type="radio" name="userType" value="admin" checked={userType === 'admin'} onChange={handleRadioChange} />
          Admin
        </label>
        <label>
          <input type="radio" name="userType" value="supplier" checked={userType === 'supplier'} onChange={handleRadioChange} />
          Supplier
        </label>
      </div>

      <button type="submit">Sign In</button>
      <h6>Don't Have an account? <a href="./signup">Create one</a></h6>
      <br />
    </form></>
  );
}

export default Signin;
