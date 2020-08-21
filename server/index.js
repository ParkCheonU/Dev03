const express = require("express");
const sequelize = require('./models/index').sequelize;
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router");
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

sequelize.sync();

app.get("/", (req, res) => {
    res.status(302).json({ message: "Hello World" });
})

app.use("api", apiRouter);

app.use((err, req, res, next) => {
    res.status(404).json({
        message: err.message,
    });
});

app.listen(port, () => {
    console.log("app listening on port 8080!");
});

module.exports = app;
