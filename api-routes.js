require("dotenv").config();
var db = require("./models");

function verifyUser(req, res, next) {
  const username = req.query.username || req.body.username;
  const password = req.query.password || req.body.password;
  if (username === process.env.USERNAME && password === process.env.PASSWORD) return next();
  return res.status(401).end();
};

module.exports = function (app) {
  app.post("/api/login", verifyUser, function (req, res) {
    res.status(200).send("Logged In");
  });

  app.get("/api/server", function (req, res) {
    res.status(200).send("Server Online");
  });

  app.get("/api/responses", verifyUser, function (req, res) {
    db.Questionnaire.findAll({ active: true })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  app.post("/api/answers", function (req, res) {
    //Change empty strings to null values
    for (key in req.body) {
      if (!req.body[key]) req.body[key] = null;
    }

    db.Questionnaire.create(req.body)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

};
