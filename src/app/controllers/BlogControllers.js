const Blog = require("../models/Blog");

const { mongoosetoObject } = require("../../util/mongoose");
class BlogControllers {
    show(req, res) {
        Blog.findOne({ slug: req.params.slug })
            .then((blog) => {
                res.render("blogs/show", { blog: mongoosetoObject(blog) }); //view truyen blog qua view
            })
            .catch((error) => next(error));
    }

    //Get create blogs
    create(req, res) {
        res.render("blogs/create");
    }

    //Get create blogs
    store(req, res, next) {
        //res.json(req.body);
        const blogs = new Blog(req.body);
        blogs.save().then(() => res.redirect("/"));
    }
}

module.exports = new BlogControllers();
