// const http = require("http");
// const fs = require("fs");
// const hostname = '127.0.0.1';
// const port = 3000;
// var router = require('./style.css');

// const home = fs.readFileSync('./index.html');
// const about = fs.readFileSync('./about.html');
// const product = fs.readFileSync('./product.html');
// const contact = fs.readFileSync('./contact.html');
// const style =  fs.readFileSync("./style.css");
// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('content-type','text/html');
//     res.setHeader('content-type','text/css');
//     res.end(home)
// })

// server.listen(port,hostname,()=>{
//     console.log(`server is listening on ${hostname}${port}`)

// })
const fabric={...document.querySelectorAll('fabric')};
const nxtbtn = {...document.querySelectorAll('.nxt-btn')};
const prebtn = {...document.querySelectorAll('.pre-btn')};

fabric.forEach((item,i)=>{
    let fabricDimensions = item.getBoundingClientRect();
    let fabricwidth = fabricDimensions.width;
    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft += fabricwidth;
    })
    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft -= fabricwidth;
    }) 
})
