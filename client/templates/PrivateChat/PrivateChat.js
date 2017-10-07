Meteor.subscribe('userList');
Meteor.subscribe('PrivateMessage');
Meteor.subscribe('PrivateChannel');

Session.setDefault('ActiveChat', undefined);

Template.PrivateChat.helpers({
  listUsers: function() {
    return Meteor.users.find({ _id: { $ne: Meteor.userId()}});
  },
  isActive: function() {
    if(Session.get('ActiveChat') == undefined){
      return true;
    } return false;
  },
  DisplayMessage: function(){
    if(Session.get('PrivateChannelId') != undefined){
      return PrivateMessage.find({ChannelID: Session.get('PrivateChannelId')}, { sort: { createdAt: 1 }});
    }
  }

});

Template.PrivateChat.events({
  'click .user-row': function() {
    Session.set('ActiveChat', this._id);
    var activeChat = Session.get('ActiveChat')
      // Generate Channel
      var checkChannel = PrivateChannel.find({$or: [{ userOne: Meteor.userId(), userTwo: activeChat },{ userOne: activeChat, userTwo: Meteor.userId() }] }).count();
      if(checkChannel == 0){
        Meteor.call('CreatePrivateChannel', activeChat);
      }
      // SOLVE THIS NEXT TIME
      var getChannel = PrivateChannel.findOne({$or: [{ userOne: Meteor.userId(), userTwo: activeChat },{ userOne: activeChat, userTwo: Meteor.userId() }] });
      Session.set('PrivateChannelId', getChannel._id);
      // FOR NOW DOUBLE CLICK MUNA
  },
  'submit .sendMessage': function(e) {
    e.preventDefault();
    const target = e.target;
    const messageInput = target.messageInput.value;
    var activeChat = Session.get('ActiveChat');
    var PrivateChannelId = Session.get('PrivateChannelId');
    if(activeChat != undefined && PrivateChannelId != undefined){
      Meteor.call('SendMessage', messageInput,PrivateChannelId);
    // Scroll down
    $('.panel-body').stop().animate({scrollTop: $('.panel-body')[0].scrollHeight}, 1000);
    e.target.reset();
    }else{ console.log('ActiveChat '+ activeChat + 'ChannelID' + PrivateChannelId) }
  }
});
