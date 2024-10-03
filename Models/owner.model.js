export default (sequelize, DataTypes) => {
    const Owner = sequelize.define("Owner", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
        },
    });
    return Owner;
};
