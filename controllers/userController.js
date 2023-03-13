import UserSchema from "../models/userModel.js";

export const userController = {
  // get user
  async getUser(req, res) {
    try {
      const user = await UserSchema.findById(req.params.id).select("-password");
      // .populate("-password");
      if (!user) return res.status(404).json({ msg: "User not found" });
      res.json({ user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // Update User
  async updateUser(req, res) {
    try {
      const { firstname, middlename, lastname, dob, occupation, company } =
        req.body;
      if (!firstname)
        return res.status(4001).json({ msg: "Please Add Your Firstname" });

      await UserSchema.findOneAndUpdate(
        { _id: req.body._id },
        {
          firstname,
          middlename,
          lastname,
          dob,
          occupation,
          company,
        }
      );
      res.json({ msg: "Update Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  //  Delete user
  async deleteUser(req, res) {
    try {
      const {
        firstname,
        middlename,
        lastname,
        dob,
        occupation,
        company,
        password,
      } = req.body;

      await UserSchema.findOneAndDelete(
        { _id: req.body._id },
        {
          firstname,
          middlename,
          lastname,
          dob,
          occupation,
          company,
          password,
        }
      );
      res.json({ msg: "Delete Success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
