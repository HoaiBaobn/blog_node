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

    //Get create blogs save data on server
    store(req, res, next) {
        //res.json(req.body);
        const blogs = new Blog(req.body);
        blogs.save().then(() => res.redirect("/"));
    }

    //Get blogs/:id/edit
    edit(req, res, next) {
        Blog.findById(req.params.id)
            .then((blog) =>
                res.render("blogs/edit", {
                    blog: mongoosetoObject(blog),
                })
            )
            .catch(next);
    }

    update(req, res, next) {
        Blog.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/blogs"))
            .catch(next);
    }

    //[DELETE], /courses/:id/
    delete(req, res, next) {
        Blog.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
}

module.exports = new BlogControllers();
