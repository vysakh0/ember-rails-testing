
module("Integration Tests ", {
  setup: function() {
    App.reset();
  },
  teardown: function () {
    $.mockjaxClear();
  }
});

test("front page for non-signed in users", function() {
  visit("/");
  andThen(function() {
    equal(find("h2.welcome").length, 1, "Welcome title");
  });
});
