import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import app from '../config/firebase'

const auth = getAuth(app);

async function register(data, callback) {
    createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
        const user = userCredential.user;
        if(user){
            // registered
            callback(null, user)

        } else {
            // error handling
            callback("User not register", null)
        }
    }).catch((err) => {
        // error handling
        callback(err.message, null)
        console.log(err);
    })
}

export default register;
