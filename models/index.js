var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/daytripper');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Place, Hotel, ThingsToDo, Restaurant;
var Schema = mongoose.Schema;

var placeSchema = new Schema({
	name: String,
	address: String,
	city: String,
	phone: String,
	location: [Number, Number]
});

var hotelSchema = new Schema({
	place: [placeSchema],
	num_stars: Number,
	amenities: String
});

var thingsToDoSchema = new Schema({
	place: [placeSchema],
	age_range: String
});

var restaurantSchema = new Schema({
	place: [placeSchema],
	cuisine: String,
	price: Number
});

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingToDo = mongoose.model('ThingToDo', thingsToDoSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	'Place': Place,
	'Hotel': Hotel,
	'ThingToDo': ThingToDo,
	'Restaurant': Restaurant
};