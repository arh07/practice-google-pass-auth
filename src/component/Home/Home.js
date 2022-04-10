import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>this is home</h1>
            <h3>User Name : {user ? user.displayName : 'None'}</h3>
        </div>
    );
};

export default Home;