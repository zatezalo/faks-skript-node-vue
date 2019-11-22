module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        topicId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Topics',
                key: 'id'
            }
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
    });

    return Post;
};