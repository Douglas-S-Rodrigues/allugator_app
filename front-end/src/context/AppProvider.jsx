import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function AppProvider({ children }) {

  const [emailUser, setEmailUser] = useState('');
  const [nameUser, setNameUser] = useState('');

  const contextValue = useMemo(() => ({
    emailUser,
    nameUser,
    setEmailUser,
    setNameUser,
  }), [
    emailUser,
    nameUser,
  ]);

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;