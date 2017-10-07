var postSignUp = (userId, info)=> {
  console.log(userId);
  console.log(info);
  if(Meteor.users.find().count() === 1){
    Roles.addUsersToRoles(userId, ['admin']);
  }else{
    Roles.addUsersToRoles(userId, ['contributor']);
  }
}

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});

// Accounts.onCreateUser(function(options,user){
//   user.profile = user.profile || {}
//
//   return user;
// });
