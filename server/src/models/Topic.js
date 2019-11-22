module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define('Topic', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
    });

    return Topic;
};