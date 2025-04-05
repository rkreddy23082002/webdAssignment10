import { hashPassword, comparePassword } from "../../utils/bcryptutils.js";
import User from "../../model/user.js";
import { validatePassword } from "../../utils/validationUtils.js";

const editUser = async (req, res) => {
  const { email, password, fullName, updatedPassword } = req.body;
  const user = await User.findOne({ email });
  const isPasswordValid = await comparePassword(password, user.password);
  if (isPasswordValid && user) {
    user.fullName = fullName;

    const error = validatePassword(updatedPassword);
    if (error) {
      return res.status(400).json({ error });
    }

    user.password = await hashPassword(updatedPassword);
    await user.save();
  } else {
    return res.status(403).json({ error: "Invalid password" });
  }
  return res.status(200).json({ user, message: "User updated successfully" });
};

export default editUser;
