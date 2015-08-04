var CarouselView = Backbone.View.extend({
	el: "#instagram-container",
	render: function() {
		var template = _.template($("#instagram-template").html());
		this.$el.html(template);
	},
	events: {
		'click .arrow-wrapper-right' : 'nextSlide',
		'click .arrow-wrapper-left' : 'nextSlide'
	},

	nextSlide: function(ev) {
		var value = $(ev.currentTarget).data('value');
		var target = "#" + value + "-template"
		var template = _.template($(target).html());
		this.$el.html(template);
	}
});
