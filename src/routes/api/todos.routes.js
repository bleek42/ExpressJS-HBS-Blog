const { Router } = require("express");
const axios = require("axios");

const User = require("../../models");

const todosRoute = Router();

todosRoute.get("/api/todos/search", async (req, res) => {
    console.log(req.query); // ? http://localhost:4000/api/todos/search?q=${req.query}
    console.log(req, res)
    try {
        const todos = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );

        if (!todos) {
            res.status(400).send("could not GET todos...");
        }

        res.status(200).json(todos);
    } 
    catch (err) {
        console.log('error', err);
        res.status(200)
    }
});

todosRoute.post('/api/todos/new', async(req, res) => {
    console.log(req.body)
})
