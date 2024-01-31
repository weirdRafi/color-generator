import React, { useEffect, useState } from 'react';

const Copyright = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentYear(new Date().getFullYear());
        }, 60000); // Update every minute (adjust as needed)
    
        return () => clearInterval(intervalId); // Clear interval on component unmount
      }, []);
    return (
        
            <footer>
                <p className='text-center font-bold'>&copy; {currentYear} All rights reserved by Rafi</p>
            </footer>
       
    );
};

export default Copyright;