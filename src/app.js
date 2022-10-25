const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

// {weather: "YamunaNagar"}
app.get("/", (req, res)=>{
    res.render('index');
});
app.get("/about", (req, res)=>{
    res.render('about');
});
app.get("*", (req, res)=>{
    res.render('404error');
});

app.listen(port, ()=>{
    console.log(`connected on: ${port}`);
}); 