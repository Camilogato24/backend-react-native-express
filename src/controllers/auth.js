import { User } from "../models/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { password, username } = req.body;
  try {
    const user = await User.findOne({where: {username: username}})
    if(!user) {
      return res.status(400).json({
        msg: `No existe el usuario ${username} `
      })
    }
    const validatePass = await bcrypt.compare(password, user.password);
    if(!validatePass) {
      return res.status(400).json({
        msg: `Has olvidado tu contraseña?, contraseña incorrecta. `
      })
    }

    const token = jwt.sign({ username: username }, 'VQ54u361L!aJnIKoY*S', { expiresIn: '1h' });
   
    res.status(200).json({token})
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: `Ha ocurrido un problema al iniciar sesión`,
      error
    })
  }
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
