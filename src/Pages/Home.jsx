import React, { useEffect } from 'react';

const Home = () => {


    useEffect(() => {
        document.title = 'Lonely Planet';
        return () => {
          document.title = 'Title';
        };
      }, []);

    return (
        <div>
            <h1 className="text-black text-6xl">Eta home</h1>
            
        </div>
    );
};

export default Home;