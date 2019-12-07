const Sequelize = require('sequelize');
const bcryptSevice = require('#services/bcrypt.service');

const sequelize = require('#config/database');

const hooks = {
	beforeCreate(user) {
		user.password = bcryptSevice.password(user);
	},
};

const tableName = 'users';

const User = sequelize.define('User', {

    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATE,
    password: DataTypes.STRING
  }, {});

User.prototype.toJSON = function () {
	const values = Object.assign({}, this.get());
	delete values.password;
	return values;
};

module.exports = User;
