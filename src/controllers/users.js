import { User } from "../models/models";

export const listUsers = async (req, res) => {
    try {
      await User.sync();
      const users = await User.findAll();
      res.status(200).json({
        data: users
      })
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send(`Error al mostrar los usuarios.`);
    }
  };