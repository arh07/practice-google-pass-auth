import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../Firebase/firebase.init";



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState();

    // Sign In start

    const signWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
    }

    // sign in end

    // SignOut Start
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    // Sign out end
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return {
        user,
        signWithGoogle,
        handleSignOut
    }
}
export default useFirebase;