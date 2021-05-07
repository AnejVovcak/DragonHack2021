const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use("/static", express.static('./static/'));
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function (request, response) {
    response.sendFile(__dirname+"/static/zacetnaStran.html")
})

app.post("/", function(request,response){
    response.redirect("/streznik1")
})

app.post("/streznik1", function(request,response){
    console.log(request.body)
    response.sendFile(__dirname+"/static/loby.html")
})

app.get("/streznik1", function(request,response){
    //console.log(request.body)
    response.sendFile(__dirname+"/static/loby.html")
})

app.listen(3000, function () {
    console.log("Server zagnan na portu 3000")
})