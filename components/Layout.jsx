import React from "react";
//import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div className="grid grid-row-2 h-screen bg-gradient-to-r from-slate-50 to-slate-600 w-screen grid-flow-col gap-4 scro">
      {children}
    </div>
  );
};

// Layout.propTypes = {}

export default Layout;
