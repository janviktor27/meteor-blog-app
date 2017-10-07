Template.CommentForm.events({
  'submit .addCommentForm': function(e) {
    e.preventDefault();

    const target = e.target;
    const commentContent = target.commentContent.value;
    // Insert
    const blogId = this._id;
    Meteor.call('insertPostComments', commentContent,blogId);
    // empty fields
    e.target.reset();
  }
})
