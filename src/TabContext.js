import React from 'react';

export default React.createContext({
    tabs: [],
    addTab: (t) => {},
    tabIndex: 0,
    changeActiveTab: (i) => {}
  });