const Confirmation = require("../models/Confirmation");

const getIndex = (req, res) => {
  const locals = {
    name: "Mariia",
    age: 1,
  };

  res.render("index", { locals });
};

const insertConfirmation = async (req, res) => {
  try {
    const confirmPerson = {
      confirmation: req.body.sim,
      name: req.body.name,
    };

    await Confirmation.create(confirmPerson);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getIndex,
  insertConfirmation,
};
