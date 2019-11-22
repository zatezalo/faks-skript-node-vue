module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Posts',
                key: 'id'
            }
        },
        description: DataTypes.STRING,
    });

    return Comment;
};