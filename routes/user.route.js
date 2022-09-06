const express =  require('express');
const { getUser, getRandomUser, saveUser, updateUser, deleteUser } =  require('../controller/userController.js');

const router = express.Router();

router.get("/all", getUser);
router.get("/random", getRandomUser);
router.post("/save",saveUser);
router.patch("/update/:id",updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;