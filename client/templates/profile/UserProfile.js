Template.UserProfile.events({
  'submit .profilePicture': function(e) {
    e.preventDefault();

    const photoInput = $('#photoInput').get(0).files[0];

    if(photoInput) {
      fsFile = new FS.File(photoInput);
      ProfilePhoto.insert(fsFile, function(err, result){
        if(err){
          throw new Meteor.Error(err);
        }else{
          const imageLoc = 'cfs/files/ProfilePhoto/'+result._id;
          const imageId = result._id;
          // console.log(result._id);
          // Insert to UserImage Collection
          Meteor.call('uploadProfilePhoto', imageLoc,imageId);

          Router.go('/');
        }
      });
    }
  }
});
