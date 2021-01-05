const Blog = require("../models/Blog");
const {
    mongoosetoObject,
    multipleMongoosetoObject,
} = require("../../util/mongoose");

class MeController {
    //[GET], /me/stored/blog
    // storeBlogs(req, res) {
    //     res.render("search");
    // }

    storeBlogs(req, res, next) {
        Blog.find({})
            .then((blog) => {
                res.render("me/stored-blog", {
                    blog: multipleMongoosetoObject(blog),
                });
            })
            .catch((error) => next(error));
    }
}

module.exports = new MeController();
