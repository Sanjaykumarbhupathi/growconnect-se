import React from 'react'
import './contact.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer/Footer';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
  
    const { name, email, message } = e.target.elements;
  
    try {
      const response = await fetch('http://localhost:5001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
      });
  
      if (response.ok) {
        setFormStatus('Message sent!');
        name.value = '';
        email.value = '';
        message.value = '';
      } else {
        setFormStatus('Error sending message');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('Error sending message');
    }
  };
  return (
    <><Navbar/>
    <div className='contactpage'><div className="container mt-5">
      <form onSubmit={onSubmit}>
        <h2 className="mb-3">Contact Form</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" type="text" id="message" required />
        </div>
        <button className="btn btn-success" type="submit">

          {formStatus}
        </button>
        <br />
        <br />
        <br />
      </form>
    </div></div><Footer/></>
  )
}
export default Contact