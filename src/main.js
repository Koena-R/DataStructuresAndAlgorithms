// const http = require("http");
import * as http from 'http'; 
import Stack from "../src/stack.js";

const server = http.createServer((req,res)=>{
    const stack = new Stack();
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello, World");
});



server.listen(3000,'127.0.0.1',()=>{
    console.log("Server Listening on port 3000");
});