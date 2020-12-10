const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const blog = new Schema(
    {
        name: { type: String },
        description: { type: String },
        img: { type: String },
        slug: { type: String, slug: "name", unique: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("blog", blog);
