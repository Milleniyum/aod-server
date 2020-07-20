var db = require("./models");

module.exports = function (app) {
  app.get("/api/server", function (req, res) {
    res.status(200).send("Server Online");
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
