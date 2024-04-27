import React, { useEffect } from 'react';

const Addspot = () => {
    useEffect(() => {
        document.title = 'Add Plan';
        return () => {
          document.title = 'Title';
        };
      }, []);
    return (
        <div>
            <h2 className="text-6xl">add spot</h2>
        </div>
    );
};

export default Addspot;