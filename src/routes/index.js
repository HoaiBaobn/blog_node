const newsRouter = require("./news");
const meRouter = require("./me");
const blogsRouter = require("./blogs");
const SiteRouter = require("./site");

function route(app) {
    app.use("/news", newsRouter);
    app.use("/blogs", blogsRouter);
    app.use("/me", meRouter);
    app.use("/", SiteRouter);
}

module.exports = route;
