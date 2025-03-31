// src/controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../db');

async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al autenticar al usuario' });
    }
}

const createUser = async (req, res) => {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await findUserByUsername(username);
    if (existingUser) {
        return res.status(400).json({ message: 'Usuario ya existe' });
    }

    // Crear el nuevo usuario
    const newUser = await createUser(username, password);

    // Devolver respuesta de éxito
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
    // Iniciar servidor
    app.listen(3000, () => {
        console.log('Servidor en el puerto 3000');
    });
}

module.exports = {
    login,
    createUser
};
