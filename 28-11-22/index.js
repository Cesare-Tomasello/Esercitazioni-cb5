const express = require("express"); //importo modulo express
const app = express(); //assegno express alla const app
const calc_module = require("./src/calc_module"); //importo modulo calc

app.use(express.static("public")); //rendo visibile a tutti i client la cartella public

app.listen(3000, () => {
  console.log("Server avviato sulla porta 3000");
}); //server avviato

app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

app.get("/calcolatrice", function (req, res) {
  console.log(req.query);
  let par1 = req.query.param1;
  let par2 = req.query.param2;
  let par3 = req.query.param3;
  let result;
  switch (par3) {
    case "somma":
      result = calc_module.somma(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "sottrazione":
      result = calc_module.sottrazione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "moltiplicazione":
      result = calc_module.moltiplicazione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "divisione":
      result = calc_module.divisione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "modulo":
      result = calc_module.modulo(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    default:
      console.log("Error");
  }
});

app.get("/somma", function (req, res) {
  let p1 = req.query.par1;
  let p2 = req.query.par2;
  res.send("GET request to the homepage");
});
