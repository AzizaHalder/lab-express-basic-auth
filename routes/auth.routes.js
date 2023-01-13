const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res) => {
  console.log(req.body);
  const { email, passwordHash } = req.body;

  bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      return bcrypt.hash(passwordHash, salt);
    })
    .then((hashedPassword) => {
      console.log(hashedPassword);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
