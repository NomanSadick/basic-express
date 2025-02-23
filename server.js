const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

const port = 8000;


function validateUser(req, res, next) {
    res.locals.validated = true;
    console.log("Validated Ran");
    next();
}

app.use("/", validateUser);


// app.use("/admin",validateUser);
app.get("/", (req, res, next) => {
    res.send("<h1>Main Page</h1>")
    console.log("2", res.locals.validated);
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
