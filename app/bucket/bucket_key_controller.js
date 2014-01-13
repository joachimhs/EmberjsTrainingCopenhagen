LDBB.BucketKeyController = Ember.ObjectController.extend({
    actions: {
        editKey: function(key) {
            //this.set('doEditKey', true);
            $("#" + this.get('model.modalId')).modal('show');
        },

        saveKey: function(key) {
            key.save();

            this.set('doEditKey', false);
        },

        cancelKey: function(key) {
            key.rollback();

            this.set('doEditKey', false);
        }

    }
});