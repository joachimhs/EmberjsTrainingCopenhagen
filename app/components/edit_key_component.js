LDBB.EditKeyComponent = Ember.Component.extend({
    classNames: ['modal', 'fade'],

    actions: {
        saveKey: function() {
            console.log('saveKey');
            var key = this.get('item');
            var elementId = this.get('elementId');

            if (key) {
                key.save().then(function(data) {
                    console.log('hiding modal');
                    $("#" + elementId).modal('hide');
                });
            }
        }
    }
});