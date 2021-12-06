import React, { useState } from "react";

// text is a variable and when we update value, we can update value with setText Function

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };
  const handleLowerCase = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  };
  const handleCapitalization = () => {
    let arr = text.toLowerCase().split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newStr = arr.join(" ");
    setText(newStr);
  };
  const handleOnChange = (event) => setText(event.target.value);
  // we can't update state like normal variable in react
  // text='Hello world'; // wrong way to change the text
  // setText("New Text"); // correct way to update
  return (
    <>
      <div className="p-2 container mx-auto my-10 flex flex-col justify-center w-1/2">
        <div className="relative">
          <textarea id="message" name="message" value={text} onChange={handleOnChange} placeholder={props.heading} className="w-full h-56 bg-gray-900 bg-opacity-80 rounded py-2 border-solid border-2 border-transparent focus:border-indigo-400 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <div className="flex flex-row justify-center">
          {/* <button className="duration-300 mx-2 hover:bg-gray-900 text-gray-400 items-center bg-transparent hover:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:border-indigo-900 border-2 border-solid hover:border-2 border-gray-900 rounded text-base mt-4" onClick={handleUpperClick}>Count Spaces</button> */}
          <button className="duration-300 mx-2 hover:bg-gray-900 text-gray-400 items-center bg-transparent hover:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:border-indigo-900 border-2 border-solid hover:border-2 border-gray-900 rounded text-base mt-4" onClick={handleUpperCase}>
            Convert to Upper Case
          </button>
          <button className="duration-300 mx-2 hover:bg-gray-900 text-gray-400 items-center bg-transparent hover:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:border-indigo-900 border-2 border-solid hover:border-2 border-gray-900 rounded text-base mt-4" onClick={handleLowerCase}>
            Convert to Lower Case
          </button>
          <button className="duration-300 mx-2 hover:bg-gray-900 text-gray-400 items-center bg-transparent hover:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:border-indigo-900 border-2 border-solid hover:border-2 border-gray-900 rounded text-base mt-4" onClick={handleCapitalization}>
            Capitalization
          </button>
        </div>
      </div>
      <div className="bg-gray-900 w-full h-14 fixed bottom-0 flex flex-row justify-center items-center text-gray-500">
        <p className="mx-2.5">{text.split(" ").length}&nbsp; Words</p>
        <p className="mx-2.5">|</p>
        <p className="mx-2.5">{text.length}&nbsp; Characters</p>
        <p className="mx-2.5">|</p>
        <p className="mx-2.5">{(0.008 * text.split(" ").length-0.008).toFixed(3)}&nbsp; Minutes to Read</p>
      </div>
    </>
  );
}
