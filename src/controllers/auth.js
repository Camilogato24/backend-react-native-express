import { connectToDatabase } from "../connection/database";
import { User, Task } from "../models/models";
import bcrypt from "bcrypt";
import { sequelize } from "../connection/database";
export const login = (req, res) => {
  res.send("Login Success!!!");
};

export const register = async (req, res) => {
  const { password, username, email } = req.body;
  try {
    const user = await User.findOne({where: {username: username}})
    if(user) {
      return res.status(400).json({
        msg: `Ya existe un usuario con el nombre ${username} `
      })
    }
    const hashedPass = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPass });
    console.log("usuario registrado correctamente", username);
    res.status(200).json({
      msg: `Usuario ${username} registrado exitosamente`
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: `Ha ocurrido un problema al crear el usuario`,
      error
    })
  }
};
