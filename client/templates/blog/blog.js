Meteor.subscribe('blogPosts');
Meteor.subscribe('postComments');

Template.blog.helpers({
  blogs: function() {
    return Blog.find({}, {sort: {createdAt: -1 }});
  },
  comments: function() {
    return Comment.find({blogId: this._id});
  }
});
