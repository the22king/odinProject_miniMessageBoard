const {messages} = require("./indexController")


const messageController = (req, res) => {
    const id = req.params.id;
    const message = messages[id];
    res.render("message", {message:message});
}

module.exports = {messageController};