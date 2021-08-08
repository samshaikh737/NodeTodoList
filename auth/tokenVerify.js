const userToken = require("../db/models/userToken");

const verifyUserByToken = async (req, res, next) => {

    const token = req.params?.token;
    const checkUserToken = await userToken.findOne({ "token": token });
    if (!checkUserToken) return res.status(400).send({ "error": "Token Not Found" });

    next()
}

module.exports = verifyUserByToken;