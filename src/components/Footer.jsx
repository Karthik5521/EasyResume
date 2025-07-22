import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        padding: '1rem 0',
        marginTop: '4rem',
        borderTop: '1px solid #2e2e2e',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          margin: 0,
          color: '#aaa',
          fontSize: '0.85rem',
          letterSpacing: '0.3px',
        }}
      >
        Developed by{' '}
        <a
          href="https://karthikmajjiga.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#4da6ff',
            fontWeight: '500',
            textDecoration: 'none',
          }}
          onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
          onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
        >
          Karthik Majjiga
        </a>
      </p>
    </footer>
  );
};

export default Footer;
