Meteor.publish('blogPosts', function() {
  return Blog.find({}, {sort: {createdAt: -1 }});
});

Meteor.publish('postComments', function() {
  return Comment.find({}, {sort: { createdAt: -1 }});
});

Meteor.publish('userImages', function(userId) {
  return UserImage.find({userId: userId});
});

Meteor.publish('userList', function () {
  return Meteor.users.find({});
});

Meteor.publish('PrivateMessage', function () {
  return PrivateMessage.find({}, {sort: { createdAt: -1 }});
});

Meteor.publish('PrivateChannel', function () {
  return PrivateChannel.find({});
});
