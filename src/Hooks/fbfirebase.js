import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { useState } from "react";

import app from "../Firebase/firebase.init";

const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();

const FbFirebase = () => {
    const [user, setUser] = useState();

    const fbLogIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
    }

    return {
        user,
        fbLogIn
    }
}

export default FbFirebase;




