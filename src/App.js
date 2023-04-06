import React from 'react';
import Router from "./Router"

const App = () => {
  console.log(process.env.REACT_APP_API_URL)
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
};

export default App;