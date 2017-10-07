Meteor.methods({
  'insertBlogPost': function(contentText) {
    if(!Meteor.user()){
      throw new Meteor.Error('Not Authorize');
    }

    const userId = Meteor.userId();
    Blog.insert({
      userId: userId,
      textContent: contentText,
      createdAt: new Date()
    });
  },
  'insertPostWithPhoto': function(contentText,imageLoc) {
    if(!Meteor.user()){
      throw new Meteor.Error('Not Authorize');
    }

    const userId = Meteor.userId();
    Blog.insert({
      userId: userId,
      textContent: contentText,
      postPhoto: imageLoc,
      createdAt: new Date()
    });
  },
  'insertPostComments': function(commentContent,blogId) {
    if(!Meteor.user()){
      throw new Meteor.Error('Not Authorize');
    }

    const userId = Meteor.userId();
    Comment.insert({
      blogId: blogId,
      userId: userId,
      commentContent: commentContent,
      createdAt: new Date()
    });
  },
  'uploadProfilePhoto': function(imageLoc,imageId) {
    if(!Meteor.user()){
      throw new Meteor.Error('Not Authorize');
    }
    const userId = Meteor.userId();

    UserImage.insert({
      userId: userId,
      imageLoc: imageLoc,
      imageId: imageId,
      uploadedAt: new Date()
    });
  },
  'CreatePrivateChannel': function(activeChat) {
    if(!Meteor.user()){
      throw new Meteor.Error('Not Authorize');
    }
    const userId = Meteor.userId();
    var checkChannel = PrivateChannel.find({$or: [{ userOne: userId, userTwo: activeChat },{ userOne: activeChat, userTwo: userId }] }).count();
    if(checkChannel == 0){
      PrivateChannel.insert({
        userOne: userId,
        userTwo: activeChat,
        createdAt: new Date()
      });
    }
  },
  'SendMessage': function(messageInput,PrivateChannelId) {
    if(!Meteor.user()){
      throw new Meteor.Error('Not Authorize');
    }
    const userId = Meteor.userId();

    PrivateMessage.insert({
      senderId: userId,
      ChannelID: PrivateChannelId,
      message: messageInput,
      createdAt: new Date()
    });
  }
});
