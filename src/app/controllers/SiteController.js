const Blog = require("../models/Blog");
const { multipleMongoosetoObject } = require("../../util/mongoose");
class SiteControllers {
    //[GET]
    index(req, res, next) {
        Blog.find({})
            .then((blogs) => {
                res.render("home", {
                    blogs: multipleMongoosetoObject(blogs),
                });
            })
            .catch(next);
    }

    //[GET],search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteControllers();
