var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	articles: [
		{
			type: Schema.Types.ObjectId,
      ref: "Article",
      unique: true
		}
	]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;