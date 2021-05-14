// ---------------------------------------------
//                   IMPORTS
// ---------------------------------------------
const express = require('express');
const app = express();
// insta 
var Instagram  = require('instagram-web-api'); 
// ---------------------------------------------------
//    var
// ---------------------------------------------------
 
const { username, password  } = {
    username: 'write_your_username_here',
    password: 'write_your_password_here'
}

const junior = new Instagram({ username, password })

// ---------------------------------------------------
//    instaApi   
// ---------------------------------------------------
 
async function instaApi(){

  // login
  await junior.login(); 
  return await junior.getProfile()

}

// ---------------------------------------------
//          app.get
// ---------------------------------------------
app.get('/', async function (req, res) {  
    res.json(await instaApi()) 
}); 
// ---------------------------------------------
//                server 
// ---------------------------------------------
app.listen(5000);