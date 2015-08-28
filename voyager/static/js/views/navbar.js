var NavbarView = Backbone.View.extend({
	el: "#navbar-container",
	render: function() {
		var template = _.template( $("#navbar-template").html());
		this.$el.html(template);
	},

	events: {
		'click #navbar-about' : 'aboutRender',
		'click #navbar-home' : 'homeRender',
		'click #navbar-careers' : 'careerRender',
		'click #navbar-services' : 'serviceRender',
		'click #navbar-recruiting' : 'recruitRender'
	},

	aboutRender: function(ev) {
		window.location.href = window.location.origin + '/about';
	},

	homeRender: function(ev) {
		window.location.href = window.location.origin;
	},

	careerRender: function(ev) {
		window.location.href = window.location.origin + '/careers';
	},

	serviceRender: function(ev) {
		window.location.href = window.location.origin + '/services';
	},

	recruitRender: function(ev) {
		window.location.href = window.location.origin + '/recruiting';
	}

});
