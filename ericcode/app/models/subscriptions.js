// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// user schema
var SubscriptionSchema = new Schema({
	//email: 	{type: String, required: true}
	email: 		String
});

//return the model
module.exports = mongoose.model('Subscriptions', SubscriptionSchema);
//module.exports = mongoose.model('Subscribers', SubscriptionSchema);
