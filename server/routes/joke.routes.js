const Jokecontroller = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes", Jokecontroller.findAllJokes);
    app.get("/api/jokes/:id", Jokecontroller.findOneJoke);
    app.post("/api/jokes/new", Jokecontroller.createJoke);
    app.put("/api/jokes/update/:id", Jokecontroller.updateJoke);
    app.delete("/api/jokes/delete/:id", Jokecontroller.deleteJoke);
}