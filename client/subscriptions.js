// client: start a parties subscription
Meteor.subscribe("feedlists");

// client: return array of Parties this client can read
return Feedlists.find().fetch(); // synchronous!