import app from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app);

async function login(data, callback) {
    signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
        const user = userCredential.user;
        if(user){
            // user logined
            callback(null, user);
        } else {
            // error handling
            callback("User not found", null);
        }
    }).catch((err) => {
        // error handling
        callback(err.message, null);
        console.log(err);

    });
    
}

export default login;