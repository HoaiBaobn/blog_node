const Blog = require("../models/Blog");
const {
    mongoosetoObject,
    multipleMongoosetoObject,
} = require("../../util/mongoose");

class MeControllers {
    //[GET], /me/stored/blog
    storedBlog(req, res, next) {
        Blog.find({})
            .then((blog) => {
                res.render("me/stored-blog", {
                    blog: multipleMongoosetoObject(blog),
                });
            })
            .catch((error) => next(error));
    }
}

module.exports = new MeControllers();
