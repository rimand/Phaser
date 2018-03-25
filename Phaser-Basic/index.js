let express = require("express");
let app = express();

 app.use(express.static('public'));

app.get('/',(req,res) => {
    console.log("GET");
    res.sendFile("public/index.html",{root:__dirname});
})

app.listen(3000,() => {
    console.log("Server Start.....");
})