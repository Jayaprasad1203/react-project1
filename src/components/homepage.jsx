import React from 'react';
import medicineImage from './pharmacy.jpg'; // Adjust the path as necessary

const Home1 = () => {
  // Define your styles as JavaScript objects
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333', // Dark gray background color
    color: '#fff' // White text color for better contrast
  };

  const homepageStyle = {
    textAlign: 'center',
    marginBottom: '40px'
  };

  const navigationStyle = {
    marginBottom: '20px',
    padding: '10px 0',
    borderBottom: '2px solid #555' // Subtle border for the navigation
  };

  const navigationListStyle = {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center'
  };

  const navigationItemStyle = {
    margin: '0 15px',
    fontSize: '18px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  const linkHoverStyle = {
    color: '#f0f0f0',
    textDecoration: 'underline'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    backgroundColor: '#444',
    padding: '20px',
    borderRadius: '8px'
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '10px',
    width: '250px',
    borderRadius: '4px',
    border: '1px solid #666',
    backgroundColor: '#fff',
    color: '#333',
    fontSize: '16px'
  };

  const inputFocusStyle = {
    outline: 'none',
    borderColor: '#007BFF', // Highlight color on focus
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)'
  };

  const placeholderStyle = {
    color: '#999'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    margin: '20px 0',
    borderRadius: '8px'
  };

  const sectionStyle = {
    padding: '20px',
    backgroundColor: '#444',
    width: '100%',
    marginBottom: '10px',
    borderRadius: '8px'
  };

  return (
    <div style={appStyle}>
      <div style={homepageStyle} id="home">
        <h1>Welcome to the Pharmacy Management System</h1>
        <p>Your go-to solution for managing pharmacy operations efficiently.</p>
        <nav style={navigationStyle}>
          <ul style={navigationListStyle}>
            <li style={navigationItemStyle}>
              <a href="#home" style={linkStyle} onMouseOver={e => e.currentTarget.style = linkHoverStyle} onMouseOut={e => e.currentTarget.style = linkStyle}>Home</a>
            </li>
            <li style={navigationItemStyle}>
              <a href="#dashboard" style={linkStyle} onMouseOver={e => e.currentTarget.style = linkHoverStyle} onMouseOut={e => e.currentTarget.style = linkStyle}>Dashboard</a>
            </li>
            <li style={navigationItemStyle}>
              <a href="#inventory" style={linkStyle} onMouseOver={e => e.currentTarget.style = linkHoverStyle} onMouseOut={e => e.currentTarget.style = linkStyle}>Inventory</a>
            </li>
            <li style={navigationItemStyle}>
              <a href="#orders" style={linkStyle} onMouseOver={e => e.currentTarget.style = linkHoverStyle} onMouseOut={e => e.currentTarget.style = linkStyle}>Orders</a>
            </li>
            <li style={navigationItemStyle}>
              <a href="#patients" style={linkStyle} onMouseOver={e => e.currentTarget.style = linkHoverStyle} onMouseOut={e => e.currentTarget.style = linkStyle}>Patients</a>
            </li>
          </ul>
        </nav>
      </div>

      <img src={medicineImage} alt="Medicine" style={imageStyle} />

      {/* Navigation Sections */}
      <section id="dashboard" style={sectionStyle}>
        {/* Content for Dashboard can be added here */}
      </section>

      <section id="inventory" style={sectionStyle}>
        {/* Content for Inventory can be added here */}
      </section>

      <section id="orders" style={sectionStyle}>
        {/* Content for Orders can be added here */}
      </section>

      <section id="patients" style={sectionStyle}>
        {/* Content for Patients can be added here */}
      </section>

      <div style={homepageStyle}>
        <h3>MEDICINE</h3>
        <form style={formStyle}>
          <input 
            type="text" 
            placeholder="Name" 
            required 
            style={inputStyle} 
            onFocus={e => e.target.style = {...inputStyle, ...inputFocusStyle}} 
            onBlur={e => e.target.style = inputStyle} 
          />
          <h3>REGION</h3>
          <input 
            type="text" 
            placeholder="Name" 
            required 
            style={inputStyle} 
            onFocus={e => e.target.style = {...inputStyle, ...inputFocusStyle}} 
            onBlur={e => e.target.style = inputStyle} 
          />
        </form>
      </div>
    </div>
  );
};

export default Home1;
