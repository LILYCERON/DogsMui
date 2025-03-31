const { DataTypes, UUIDV4 } = require('sequelize');

// Exportamos una función que define el modelo
module.exports = (sequelize) => {
    // Definir el modelo de Usuario
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Asegura que el nombre de usuario sea único
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
