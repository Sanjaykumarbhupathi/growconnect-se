import { useState } from 'react';
import farmerIcon from './icons/farmer.png';
import customerIcon from './icons/consumer.png';
import adminIcon from './icons/admin.png';
import supplierIcon from './icons/seller.png';
import defaultIcon from './icons/user.png';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
	const [FirstName, setFirstName] = useState('');
	const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [Phoneno, setPhoneno] = useState('');
  const [userType, setUserType] = useState('');
  const [icon, setIcon] = useState(defaultIcon);

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
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData ={
      email:email,
      password:password,
      name:FirstName+" "+LastName,
      mobile:Phoneno,
      role:userType
    }
    try {
      const response = await fetch('http://localhost:5001/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      console.log(response);
      if(response.ok){

        if(userType==='farmer'){
          navigate('/Fdashboard');
        }
        else if(userType==='customer'){
          navigate('/Cdashboard');
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
      <h2>Sign Up</h2>
       </div>
       <form onSubmit={handleSubmit}>
        <div>
          {icon && <img src={icon} alt={userType} />}
        </div>
        <div>
          <br/>
          <label>User type:</label>
          <label>
            <input type="radio" name="userType" value="farmer" checked={userType === 'farmer'} onChange={handleRadioChange} />
            Farmer
          </label>
          <label>
            <input type="radio" name="userType" value="customer" checked={userType === 'customer'} onChange={handleRadioChange} />
            Customer
          </label>
          <label>
            <input type="radio" name="userType" value="supplier" checked={userType === 'supplier'} onChange={handleRadioChange} />
            Supplier
          </label>
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>ConfirmPassword:</label>
          <input type="password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} />
        </div>
        <div>
          <label>Phone No:</label>
          <input type="text" value={Phoneno} onChange={(e) => setPhoneno(e.target.value)} />
        </div>
       

        <button type="submit">Sign Up</button>
      </form></>
  );
}

export default Signup;
