import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Knock knock ? WHo is there</h2>
            <p>{user ? user.displayName : 'Ghost'}</p>

        </div>
    );
};

export default Products;