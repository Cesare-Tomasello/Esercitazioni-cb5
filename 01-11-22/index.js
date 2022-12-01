const express = require("express");
const { readFileSync, writeFileSync } = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server avviato sulla port 3000");
});

app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

app.get("/attori", function (req, res) {
  // Prima si deve leggere tutto il file
  const attori_json = readFileSync("./src/registi.json", "utf8");
  // Poi si trasforma in JSON
  const attori = JSON.parse(attori_json);
  // Faccio un map solo per prendere i dati che ci interessano
  const arr_attori = attori.map((data) => {
    const { id, nome, cognome } = data;
    return { id, nome, cognome };
  });
  res.json(arr_attori);
});

app.get("/attore", function (req, res) {
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status().write("Manca un ID!");
  }

  // Legge tutto il file e lo trasforma in JSON
  const attori_json = readFileSync("./src/registi.json", "utf8");
  const attori = JSON.parse(attori_json);

  //Con il find trova l'attore che cerchiamo
  const attributo = attori.find((attore) => {
    return attore.id == id_attore;
  });
  res.json(attributo);
});

app.post("/attore", function (req, res) {
  const attori_json = readFileSync("./src/registi.json", "utf8");
  const attori = JSON.parse(attori_json);

  const nuovo_attore = {
    id: attori.length == 0 ? 1 : attori[attori.length - 1].id + 1,
    nome: req.body.nome == undefined ? "" : req.body.nome,
    cognome: req.body.cognome == undefined ? "" : req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  attori.push(nuovo_attore);
  console.log(attori);

  writeFileSync("./src/registi.json", JSON.stringify(attori));
  res.status(200).json({ messaggio: "stringa attore creato" });
});

app.delete("/attore", function (req, res) {
  if (req.body.id == undefined) {
    res.status(400).send("Parametro id mancante");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico");
  }

  const id_da_cancellare = req.body.id;

  const attori_json = readFileSync("./src/registi.json", "utf8");
  const attori = JSON.parse(attori_json);

  const array_deleted = attori.filter((attore) => {
    return attore.id != id_da_cancellare;
  });

  writeFileSync("./src/registi.json", JSON.stringify(array_deleted));
  res.json(array_deleted);
});
