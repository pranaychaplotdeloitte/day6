// src/ContactUs.js
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you could send the data to your server or API
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
          <label>Name:</label>
          <input type="text" {...register('name')} />
          <br /> 
        
        
          <label>Email:</label>
          <input type="email" {...register('email')} />
        
            <br /> 
        
          <label>Message:</label>
          <textarea {...register('message')} />
        
            <br />

            <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
