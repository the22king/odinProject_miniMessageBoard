const {messages} = require("./indexController")

const getForm = (req, res) => {
    res.render("form")
};

const addMessage = (req, res) => {
    const messageUser = req.body.author;
    const messageText = req.body.messageText;
    messages.push({ text: messageText, user: messageUser, added: new Date() });

    res.redirect("/")
}

module.exports = {getForm, addMessage};