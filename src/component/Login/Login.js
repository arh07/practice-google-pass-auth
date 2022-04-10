import React from 'react';
import FbFirebase from '../../Hooks/fbfirebase';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signWithGoogle } = useFirebase();
    const { fbLogIn } = FbFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: 20 }}>
                <button onClick={signWithGoogle}>Google Sign in</button>
                <button onClick={fbLogIn}> facebook sign in</button>

            </div>
            <form>
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;