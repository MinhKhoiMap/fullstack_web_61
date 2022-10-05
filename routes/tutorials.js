import { Router } from "express";
import tutorialsModel from "../DAL/models/tutorialsModel";

const tutorialsRoute = Router();
var tutorialsModell = new tutorialsModel();

// R
tutorialsRoute.get("", (req, res) => {
  tutorialsModell
    .getAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

tutorialsRoute.get("/findByTitle", (req, res) => {
  let title = req.query.title;
  console.log("title", title);
  tutorialsModell
    .findByTitle(title)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

// C
tutorialsRoute.post("", (req, res) => {
  let newTutorials = req.body;
  console.log(newTutorials);
  tutorialsModell
    .create(newTutorials)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

// U
tutorialsRoute.put("", (req, res) => {
  let tutorial = req.body;
  console.log("update", tutorial);
  tutorialsModell
    .update(tutorial)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

// D

tutorialsRoute.delete("/:id", (req, res) => {
  let id = req.params.id;
  console.log("params id nè", id);
  tutorialsModell
    .delete(id)
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});

tutorialsRoute.delete("/deleteAll", (req, res) => {
  tutorialsModell
    .deleteAll()
    .then((data) => res.json(data))
    .catch((err) => {
      throw err;
    });
});

export default tutorialsRoute;
