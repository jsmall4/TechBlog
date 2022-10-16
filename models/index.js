const Blog = require("./blog");
const User = require("./user");
const Comment = require("./comment");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Hi

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

// User.belongsToMany(Blog, {
//   foreignKey: "user_id",
// });

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

module.exports = { User, Blog, Comment };
