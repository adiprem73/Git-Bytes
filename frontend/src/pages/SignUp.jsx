import React from 'react';
import '../SignUp.css';  
import Navbar from '../components/Navbar';

const SignUp = () => {
  return (
    
   <>
   <Navbar/>
    <div className="signup-container">
       
       <div className="signup-card">
         <div className="signup-form">
           <h2>Create Account</h2>
           <p className="subtitle">Join WebSecScan and secure your website</p>
           <form>
             <input type="text" placeholder="Full Name" required />
             <input type="email" placeholder="Email Address" required />
             <input type="password" placeholder="Password" required />
             <button type="submit">Sign Up</button>
           </form>
           <p className="redirect">Already have an account? <a href="/login">Log In</a></p>
         </div>
         <div className="signup-image">
           <img src=".\sign_up1.jpg" alt="Cyber Shield" />
         </div>
       </div>
     </div>
   </>
  );
};

export default SignUp;
