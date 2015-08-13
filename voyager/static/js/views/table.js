var TableView = Backbone.View.extend({
	el: "#table-container",
	render: function(data) {
		console.log("going here")
		var template = _.template($("#table-template").html())({ members : data});
		this.$el.html(template);
	}
});