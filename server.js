const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

// Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/views');

// Ahora configuremos el motor de visualización para que express sepa que estamos usando ejs en lugar de otro motor de jade
app.set('view engine', 'ejs');




//rutas

app.get("/", function(req, res) {
    //vistas
    res.render("index");
});

app.post("/results", function(req, res) {
    //vistas
    let info = req.body;
    console.log(info);
    res.render("results", info = info);
});






app.listen(port, () => console.log(`Listening on port: ${port}`));