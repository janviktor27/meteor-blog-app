Blog = new Mongo.Collection('blog');
Comment = new Mongo.Collection('comment');
PrivateMessage = new Mongo.Collection('PrivateMessage');
PrivateChannel = new Mongo.Collection('PrivateChannel');

// FS COLLECTIONS

ProfilePhoto = new FS.Collection('ProfilePhoto', {
  filter: {
    maxSize: 1048576, // in bytes
    allow: {
      contentTypes: ['image/*','video/*'],
      extensions: ['png','jpg','jpeg','gif']
    }
  },
  stores: [new FS.Store.GridFS('ProfilePhoto')]
});

// Posts Photos
PostPhoto = new FS.Collection('PostPhoto', {
  filter: {
    maxSize: 1048576, // in bytes
    allow: {
      contentTypes: ['image/*','video/*'],
      extensions: ['png','jpg','jpeg','gif']
    }
  },
  stores: [new FS.Store.GridFS('PostPhoto')]
});

UserImage = new Mongo.Collection('UserImage');

// ALLOW UPLOAD

ProfilePhoto.allow({
  insert: function(userId,doc){
    return true;
  },
  update: function(userId,doc,fields,modifier){
    return true;
  },
  download: function(userId, fileObj){
    return true;
  }
});

PostPhoto.allow({
  insert: function(doc){
    return true;
  },
  update: function(doc,fields,modifier){
    return true;
  },
  download: function(fileObj){
    return true;
  }
});
