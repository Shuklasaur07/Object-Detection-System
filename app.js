var sub=document.getElementById('sbt');
var username=document.getElementById('uname');
var pass=document.getElementById('pass');
sub.addEventListener('click',()=>{
    // e.preventDefault();
    if(username.value==='admin' && pass.value==='admin@123'){
        window.location.href = 'http://127.0.0.1:5500/main.html'
        sessionStorage.setItem('isLogin', "Authorized");
    }
    else
    alert("Yoh have Entered the wrong username or password") 
    console.log("helloo");

})

// database through radis
const key = 'myKey';
const value = 'Hello Redis';

// Set a key-value pair in Redis
fetch(`http://localhost:6379/set?key=${key}&value=${value}`, { method: 'POST' })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output: { result: "OK" }
  });

// Retrieve the value of a key from Redis
fetch(`http://localhost:6379/get?key=${key}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output: { result: "Hello Redis" }
  });
