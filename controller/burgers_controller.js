var orm = require("../config/orm")
module.exports = function(app){
app.get("/all",function(req,res){
    orm.selectAll("burgers",function(data){
        res.json(data);
    })
    // res.send("Test");
})
app.get("/",function(req,res){
    
    orm.selectAll("burgers",function(data){
        res.render("index",{burgers: data});
        
    })
    
})

app.post("/save",function(req,res){
    console.log("This is our thing")
    console.log(req.body);
    // res.render("index");
    orm.insertOne("burgers",["burger_name","devoured"],[req.body.burger_name,false],function(data){
        res.json(data);
    })
})
}

