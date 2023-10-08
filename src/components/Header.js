import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#ececec',
  };
  const titleStyle = {
    fontSize: '6rem',
    fontWeight: '600',
    marginBottom: '2rem',
    textTransform: 'lowercase',
    textAlign: 'center',
    textShadow: '0 4px 5px #999',
  };
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>
        todos
      </h1>
    </header>
  );
};

export default Header;
