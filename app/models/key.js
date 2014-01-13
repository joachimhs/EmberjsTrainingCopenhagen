LDBB.Key = DS.Model.extend({
    bucketName: DS.attr('string'),
    keyName: DS.attr('string'),
    value: DS.attr('string'),

    modalId: function() {
        return (this.get('id') + "_editModal").replace(/ /g, '_');
    }.property('id')
});