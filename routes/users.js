"use strict";

const express = require('express');
const router  = express.Router();

const dataHelpers = require('../lib/users-data-helpers');

module.exports = (knex) => {
  router.get("/", (req, res) => {
    let user = {};
    knex
      .select("*")
      .from("users")
      .where({id: 1})
      .then((result) => {
        let templateVars = {
          name: result[0].name,
          email: result[0].email,
          avatar: result[0].avatar_url
        }
        console.log(templateVars);
        res.render("user_page", templateVars);
    });
  });


  router.get("/:id", (req, res) => {
    let user = {};
    knex
      .select("*")
      .from("users")
      .where({id: req.params.id})
      .then((result) => {
        let templateVars = {
          name: result[0].name,
          email: result[0].email,
          avatar: result[0].avatar_url
        }
        console.log(templateVars);
        res.render("user_page", templateVars);
    });
  });

  return router;
}
