var request = (app)=>{ console.log("importing");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  app.get("/", (req, res)=>{res.sendFile(__dirname + "/../public/index.html");});

  app.get("/api", (req, res)=>{

    var obj = JSON.stringify({poop: "poop"});
    res.send(obj);});
};

module.exports = request;
