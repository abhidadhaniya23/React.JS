import React from "react";
// import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
          <span className="ml-3 text-xl">{props.title}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-white">First Link</a>
          <a className="mr-5 hover:text-white">Second Link</a>
          <a className="mr-5 hover:text-white">Third Link</a>
          <a className="mr-5 hover:text-white">Fourth Link</a> */}
        </nav>
        <a href="https://web-developer-abhi.herokuapp.com/" rel="noreferrer" target="_blank" className="duration-300 inline-flex items-center hover:bg-indigo-800 hover:bg-opacity-20 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 border-solid border-2 border-indigo-500 rounded text-base mt-4 md:mt-0">
          {props.button}
        </a>
      </div>
    </header>
  );
}

// Navbar.PropTypes = {
//   title: PropTypes.string,
//   button: PropTypes.string,
// };

Navbar.defaultProps = {
  title: "Hello", 
  button: "world"
};
