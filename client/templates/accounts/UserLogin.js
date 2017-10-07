Template.UserLogin.events({
  'click #at-btn': ()=> {
    if(Meteor.userId()){
      Router.go('/')
    }
  }
});
