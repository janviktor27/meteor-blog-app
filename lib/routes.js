Router.configure({
  layoutTemplate: 'main'
});

Router.map(function() {
  this.route('blog', {
    path: '/',
    template: 'blog'
  });

  this.route('login', {
    path: '/login',
    template: 'UserLogin'
  });

  this.route('profile', {
    path: '/profile',
    template: 'UserProfile'
  });

  this.route('pm', {
    path: '/pm',
    template: 'PrivateChat'
  });

});
