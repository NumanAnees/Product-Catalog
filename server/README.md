# Associations
- One-to-One
- One-to-Many
- Many-to-Many 
- The HasOne association
- The BelongsTo association
- The HasMany association
- The BelongsToMany Association

<hr>

## One-to-One
- Run migrations and seeds for User. 
- Create Task table and in Task.js file of model folder define associations.
```
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Task;
};
```
- Now define the associations for the user.js.
```
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task, {
      foreignKey: 'userId',
    })
  };
  return User;
};
```
- Last step is to change the files of migration folder.
```
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};
```

<hr>

## Query Example:

```
const OneToMany = async(req,res) =>{
const data = await Users.findAll({
attributes:['name','email'], //will show only name and email of users
include:[
{
  model: Tasks,
  as: 'taskDetail',
  attributes:['title',['name','postname']]
}
], 
where:{id:8}

})
res.json(data);
}

```
