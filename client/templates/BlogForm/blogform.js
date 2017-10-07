Template.BlogForm.events({
  'submit .addBlogForm': function(e) {
    e.preventDefault();

    const target = e.target;
    const contentText = target.contentText.value;
    const mediaInput = $('#mediaInput').get(0).files[0];

    if(mediaInput){
      // POST WITH PHOTO
      fsFile = new FS.File(mediaInput);
      PostPhoto.insert(fsFile, function(err, result){
        if(err){
          throw new Meteor.Error(err);
        }else{
          const imageLoc = 'cfs/files/PostPhoto/'+result._id;
          // Insert to UserImage Collection
          Meteor.call('insertPostWithPhoto', contentText,imageLoc);
        }
      });
    }else{
      // POST WITHOUT PHOTO
      console.log('empty');
      // Insert Post
      Meteor.call('insertBlogPost', contentText);
    }
    e.target.reset();
  }
});
