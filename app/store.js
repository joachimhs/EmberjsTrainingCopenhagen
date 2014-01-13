DS.RESTAdapter.reopen({
    namespace: 'json'
});

LDBB.Store = DS.Store.extend({
    adapter: 'DS.RESTAdapter'
});

LDBB.KeySerializer = DS.RESTSerializer.extend({

});