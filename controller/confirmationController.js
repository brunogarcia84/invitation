const Confirmation = require("../models/Confirmation");

const getConfirmation = async (req, res) => {
  try {
    const getAllConfirmation = await Confirmation.find();

    res.json({
      name: getAllConfirmation,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getConfirmation,
};
