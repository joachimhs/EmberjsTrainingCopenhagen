var bucketsController;
var bucketController;

module("LDBB.BucketsController Test", {
    setup: function() {

        Ember.run(function() {
            bucketsController = LDBB.__container__.lookup("controller:buckets");
            bucketController = LDBB.__container__.lookup("controller:bucket");
        });

    },

    teardown: function() {
    }
});


test("Test that QUnit is working as expected", function() {
    ok( 1 == "1", "QUnit Test Passed!" );
});

test("Test that buckets controller is not null", function() {
    ok (bucketsController != null, "Buckets controller is not null");

    $(".list-group:first a:first").click();

    ok (bucketController != null, "Bucket controller is not null");

    console.log(bucketController.get('model'));
    console.log(bucketController.get('model.id'));
    ok (bucketController.get('model.id') === "Autopulver", "Correct bucket in BucketController");
});