export default (sequelize, DataTypes) => {
    const Pet = sequelize.define("Pet", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
        },
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Owner", // Table name
                key: "id",       // Primary key of the Owner model
            },
        },
    });
    return Pet;
};
