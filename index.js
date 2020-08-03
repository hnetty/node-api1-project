const express = require('express');

const server = express();

server.use(express.json());

let people = [
    {name: "Harper", id: 1, bio: "The programmer"},
    {name: "Rick", id: 2, bio: "The principal"},
    {name: "Jen", id: 3, bio: "The Life Giver"}
]


const port = 8000;

server.post("/api/users", (req, res) => {
    const user = req.body;

    users.push(user);

    res.status(201).json(users);
});

server.get("/api/users", (req, res) => {
    res.status(200).json(people);
});

server.get("/api/users/:id", (req, res) => {
    res.status(200).json(people.id);
})

server.delete("/api/users/:id", (req, res) => {
    const unique = req.params.id

    people = people.filter( p => p.unique !== id);

    res.status(204).end();
})

server.put("/api/users/:id", (req, res) => {
    const individual = req.body;

    individual.id = shortid.generate();

    people.put(individual);

    res.status(201).json(people);
})

server.listen(port, () => console.log("server is  working!!"));