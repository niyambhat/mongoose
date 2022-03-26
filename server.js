const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./config/db')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//Mongo Connect
connectDB();

//Promises test

//Conventional asynchronus coding
const posts = [{title:"Post One", body:"This is post one"}, {title:"Post Two", body:"This is post 2"}]
function getPosts(){
    const myGreeting =()=>{console.log("Hello World")}
    setTimeout(
        ()=>{
            let output = '';
            posts.forEach((value) => {
                console.log(value.title);
            });
        }
        , 3000);
}

function createPosts(post, callback){
 setTimeout(()=>{
     posts.push(post);
     callback();
}, 1000);   
}

createPosts({title:"Post three", body:"This is post three"},getPosts );
