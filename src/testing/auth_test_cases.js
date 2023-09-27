const login = require('../services/firebase_login');
const register = require('../services/firebase_register');

const prompt = require('prompt-sync')();



function startApp(){
    console.log("Welcome to ESG Project - \n");
    const email = prompt("Enter you emmail id - ");
    const password = prompt("Enter your password - ");
    console.log("1. Register- \n");
    console.log("2. Login- \n");
    console.log("3. Exit")
    const choice = prompt("Enter your choice - ")
    if(choice == 1){
        userRegsiter(email, password);
    }
    else if (choice == 2) {
        userLogin(email, password);
    
    } else {
        console.log("Enter valid choice")
    }


}

function userLogin(email, password) {
    login(
        {
            email: email,
            password: password
        }, 
        (error, result) => {

            if(error){
                console.log(error);
            }

            if(result){
                console.log("user logined", result.email);
            } else {
                console.log("user not logined");
            }
        }
    )
}

function userRegsiter(email, password) {
    register(
        {
            email: email,
            password: password
        }, 
        (error, result) => {

            if(error){
                console.log(error);
            }

            if(result){
                console.log("user regsitered", result.email);
            } else {
                console.log("user not registered");
            }
        }
    )
}

  
module.exports = startApp;