const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Recipe = require("./models/Recipe");

const app = express();

// // support parsing of application/json type post data
app.use(bodyParser.json());

// //support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// /////////////////////////////////////////////  ROUTES  /////////////////////////////////////////
app.get("/api/recipes", (req, res) => {
  Recipe.find((err, foundArticles) => {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
    console.log(foundArticles);
  });
});

app.post("/api/recipes", (req, res) => {
  console.log(req.body);
  const recipe = new Recipe({
    name: req.body.name
  });
  recipe.save(function(err) {
    if (!err) {
      res.redirect("/api/recipes");
    } else {
      console.log(err);
    }
  });
});

app
  .route("/api/recipe/:id")

  .get((req, res) => {
    Recipe.findById(req.params.id, (err, foundRecipe) => {
      if (foundRecipe) {
        res.send(foundRecipe);
      } else {
        res.send("No recipe with the specified id was found");
      }
    });
  })

  .patch((req, res) => {
    Recipe.update({ _id: req.params.id }, { $set: req.body }, err => {
      if (!err) {
        res.send("Successfuly updated the recipe");
      } else {
        res.send(err);
      }
    });
  })

  .delete((req, res) => {
    Recipe.findByIdAndRemove(req.params.id, err => {
      if (!err) {
        res.send("Successfuly removed the recipe");
      } else {
        res.send(err);
      }
    });
  });

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

// app.use("/static", express.static("client/src"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Listen on port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
