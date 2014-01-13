LDBB.BucketKeyRoute = Ember.Route.extend({
    model: function(key) {
        return this.store.find('key', key.key_id);
    }
});