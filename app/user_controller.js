LDBB.UserController = Ember.Controller.extend({
    username: null,

    init: function() {
        this._super();

        console.log('INIT');

        var controller = this;
        navigator.id.watch({
            loggedInUser: null,
            onlogin: function(assertion) {
                $.ajax({
                    type: 'POST',
                    url: '/auth/login',
                    data: {assertion: assertion},
                    success: function(res, status, xhr) {
                        console.log('SUCCESS');
                        if (res.username) {
                            controller.set('username', res.username);
                        }
                    },
                    error: function(xhr, status, err) {
                        console.log('ERROR');
                    }
                });

            },

            onlogout: function() {
                console.log('LOG OUT');
                controller.set('username', null);
            }
        })
    },

    isLoggedIn: function() {
        return this.get('username') != null;
    }.property('username')
});