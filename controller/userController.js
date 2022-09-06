const users = require("../user.json");

exports.getUser = (req, res) => {
    try {
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

exports.getRandomUser = (req,res) => {
    const user = users[Math.floor(Math.random() * users.length)];
    res.json(user);
}

exports.saveUser = (req, res) => {
    try {
        users.push(req.body);
        res.json("User Save Successfully");
    } catch (error) {
        console.log(error);
    }
}

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const newData = users.find((user) => user._id == id);
    if (
        req.body.name &&
        req.body.gender &&
        req.body.contact &&
        req.body.address &&
        req.body.picture
    ) {
        newData.name = req.body.name;
        newData.gender = req.body.gender;
        newData.contact = req.body.contact;
        newData.address = req.body.address;
        newData.picture = req.body.picture;
        res.json(newData);
    } else {
        res.send("Data information is not complete");
    }
    
    
}

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const newData = users.filter((user) => user._id != id);
    res.json(newData);
};