// server: publish all room documents
Meteor.publish("all-feeds", function () {
  return Feeds.find(); // everything
});

// server: publish all messages for a given room
Meteor.publish("items", function (feedId) {
  return Items.find({feed: feedId});
});

// server: publish the set of parties the logged-in user can see.
Meteor.publish("feedlists", function () {
  return Feedlists.find({$or: [{subscribed: this.userId}]});
});