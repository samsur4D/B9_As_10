import React, { useEffect } from 'react';

const Mylist = () => {
    useEffect(() => {
        document.title = 'Your List';
        return () => {
          document.title = 'Title';
        };
      }, []);
    return (
        <div>
            <h2>my list</h2>
        </div>
    );
};

export default Mylist;