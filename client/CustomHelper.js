Template.registerHelper('getProfilePhoto', function(userId) {
  Meteor.subscribe('userImages', userId);
  const url = UserImage.findOne({});
  console.log(url.imageId);
  // return url;
  return ProfilePhoto.find({ _id: url.imageId})

});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('LLLL');
});

Template.registerHelper('getFullName', function(senderId) {
  const user = Meteor.users.findOne({_id: senderId});
  const fullname = user.profile.firstname + ' ' + user.profile.lastname;
  return fullname;
});
