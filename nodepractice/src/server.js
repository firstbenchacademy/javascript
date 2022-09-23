import express from 'express'

let app = express();

app.get("/hello", (req, resp) => {
    resp.send("Hello World !!");
});

app.listen(3000, () => {
    console.log("Server is listening on port : 3000");
});