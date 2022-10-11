import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function AppProvider({ children }) {

  const contextValue = useMemo(() => ({

  }), [
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