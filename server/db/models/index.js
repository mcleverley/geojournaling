const Content = require('./Content.js');
const History = require('./History.js');
const Thread = require('./Thread.js');
const User = require('./User.js');

User.hasMany(Content);
Thread.hasMany(Content);

User.belongsToMany(Content, { through: History });
Content.belongsToMany(User, { through: History });

module.exports = { Content, History, Thread, User };
