import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <div style={styles.contactDetails}>
        <p><strong>Phone:</strong> +94912260419</p>
        <p><strong>Email:</strong> b&bmart@gmail.com</p>
        <p><strong>Address:</strong> Millwaththa, Batapola</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  contactDetails: {
    textAlign: 'center',
    fontSize: '18px',
    lineHeight: '1.6'
  }
};

export default ContactPage;
