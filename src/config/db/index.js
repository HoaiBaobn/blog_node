const mongoose = require("mongoose");
async function connect() {
    try {
        await mongoose.connect(process.env.MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("connect success");
    } catch (error) {
        console.log("connect faile");
    }
}

module.exports = { connect };
