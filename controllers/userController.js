import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const addUser = async (req, res) => {
  const user = new User(req.body);

  try {
    const newUser = await user.save();
    res.json(newUser).status(201);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
