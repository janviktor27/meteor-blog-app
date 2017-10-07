var myLogoutFunc = ()=> {
  Router.go('/');
}

AccountsTemplates.configure({
  focusFirstInput: true,
  confirmPassword: false,
  onLogoutHook: myLogoutFunc
});

AccountsTemplates.addFields([
  {
    _id: 'firstname',
    type: 'text',
    displayName: 'First Name',
    required: true
  },{
    _id: 'lastname',
    type: 'text',
    displayName: 'Last Name',
    required: true
  }
]);
