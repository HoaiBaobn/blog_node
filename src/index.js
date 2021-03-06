require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

//NIERzNW7qh9TAsGB

const route = require("./routes");

const db = require("./config/db");

// connect to DB

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.use(methodOverride("_method"));

app.use(morgan("combined"));

app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//routes init
route(app);

app.listen(port, () => {
    console.log(`${port}`);
});
