import React from "react";
//import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div className="grid grid-row-2 h-screen  w-screen grid-flow-col gap-4 ">
      {children}
    </div>
    //bg-gradient-to-r from-slate-50 to-slate-600
  );
};

// Layout.propTypes = {}

export default Layout;
