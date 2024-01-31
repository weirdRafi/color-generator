import React, { useEffect, useState } from 'react';
import randomColor from 'randomcolor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Copyright from './Copyright';
const App = () => {
  const [backgroundColor, setBackgroundColor] = useState(randomColor());

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [backgroundColor]);
  // console.log(backgroundColor);

  const handleGenerateRandomColor = () => {
    setBackgroundColor(randomColor());
  };
  const handleClick = () => {
    navigator.clipboard.writeText(backgroundColor)
      .then(() => {
        console.log('Text copied to clipboard!');
        // Optionally display a success message to the user
        toast.success("Color copied to clipboard!")
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        // Handle errors gracefully, e.g., inform the user
      });
  };

  return (

    <div>
      <div className='h-screen gap-y-5 flex items-center justify-center flex-col'>
        <div onClick={handleClick} >
          <div title='Click to Copy the color code' className='text-5xl text-black'>
            {backgroundColor}
          </div>
          <ToastContainer />
        </div>
        <button className='text-black border  font-bold py-2 px-4 rounded transition duration-300 ease-in-out' onClick={handleGenerateRandomColor}>Generate Random Color</button>
      </div>

      <Copyright></Copyright>
      
    </div>
  );
};

export default App;