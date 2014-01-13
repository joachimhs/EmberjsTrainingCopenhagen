LDBB.HeaderController = Ember.Controller.extend({
    needs: ['user'],

    actions: {
        doLogIn: function() {
            navigator.id.request();
        },

        doLogOut: function() {
            navigator.id.logout();
        }
    }
});