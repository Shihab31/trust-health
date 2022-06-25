import initialize from "../firebase/initialize";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

initialize();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return {
        user,
        signInWithGoogle,
        error
    }
}

export default useFirebase;