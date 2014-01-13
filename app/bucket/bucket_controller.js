LDBB.BucketController = Ember.ObjectController.extend({
    sortProperties: ['keyName'],
    sortAscending: true,

    actions: {
        createKey: function() {
            this.set('showCreateKey', true);
        },

        saveKey: function() {
            var bucketName = this.get('id');
            var newKeyName = this.get('newKeyName');

            var newKey = this.store.createRecord('key', {
                id:  bucketName + newKeyName,
                bucketName: bucketName,
                keyName: newKeyName
            });

            var bucket = this.get('model');
            newKey.save().then(function(data) {
                bucket.reload();
            });

            //this.get('keys').pushObject(newKey);


            this.set('newKeyName', null);
            this.set('showCreateKey', false);
        },

        cancelKey: function() {
            this.set('newKeyName', null);
            this.set('showCreateKey', false);
        },

        editKey: function(key) {
            console.log(key.get('modalId'));
            $("#" + key.get('modalId')).modal('show');
        }
    }
});