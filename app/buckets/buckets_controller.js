LDBB.BucketsController = Ember.ArrayController.extend({
    sortProperties: ['id'],
    sortAscending: true,

    actions: {
        createBucket: function() {
            var newBucketName = this.get('newBucketName');

            this.set('showCreateBucket', true);
        },

        saveBucket: function() {
            var newBucketName = this.get('newBucketName');

            if (newBucketName && newBucketName.length > 2) {
                var newBucket = this.store.createRecord('bucket', {
                    id: newBucketName
                });

                newBucket.save();

                this.set('newBucketName', null);

                this.set('showCreateBucket', false);
            }
        },

        cancelBucket: function() {

            this.set('newBucketName', null);
            this.set('showCreateBucket', false);
        }
    }
});