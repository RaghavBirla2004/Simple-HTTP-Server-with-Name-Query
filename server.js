
let http = require("http")
let url = require("url")


let server = http.createServer((req,res)=>{
   let name = url.parse(req.url, true)
 if(name.pathname=="/about"){
    
    res.end("Your name is " +name.query.name)
 }
})

server.listen(3000)