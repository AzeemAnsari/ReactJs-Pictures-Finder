import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto">
      <p className="lead text-center small mt-4 mb-2">
        &copy; 2020 -{' '}
        <a
          href="https://azeemansari.me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#212529' }}
        >
          Azeem Ansari
        </a>
      </p>
    </footer>
  );
};

export default Footer;
