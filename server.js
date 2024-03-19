import express from "express"

const app = express()

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("Server is ready")
})

const jokes = [
    {
        "id": 1,
        "title": "The Shy Joke",
        "content": "Why was the math book sad? Because it had too many problems."
    },
    {
        "id": 2,
        "title": "The Fast Food Joke",
        "content": "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
        "id": 3,
        "title": "The Computer Joke",
        "content": "Why did the computer go to therapy? Because it had too many bytes!"
    },
    {
        "id": 4,
        "title": "The Coffee Joke",
        "content": "Why did the coffee file a police report? It got mugged."
    }
]

app.get('/api/v1/jokes', (req, res) => {
    res.send(jokes)

});