function sorter(data, target_string) {
	switch (target_string) {
		case "Name":
			data = _.sortBy(data, 'name');
			break;
		case "Company":
			data = _.sortBy(data, 'company');
			break;
		case "Position":
			data = _.sortBy(data, 'position');
			break;
		case "Location":
			data = _.sortBy(data, 'city');
			break;
	}
	return data;
}

function blackBottom(target, comparison) {
	console.log(target);
	$("th", target).each(function() {
		$(this).removeClass("black-bottom");
		target_string = $.trim($(this).text());
		console.log(target_string);
		if (target_string == comparison) {

			$(this).addClass("black-bottom");
		};
	});
}

var TableView = Backbone.View.extend({
	render: function(data, sorted, target) {
		var template = _.template($("#table-template").html())({ members : data});
		this.$el.html(template);
		if (sorted) {
			if (this.$el[0].id == "table-container-2015") {
				blackBottom("#table-container-2015", target);
			} else {
				blackBottom("#table-container-2014", target);

			}
		}
	},

	events : {
		"click th" : "sort"
	},

	sort: function(ev){

		sorted = true;
		target_string = $.trim($(ev.target).text());
		if (this.$el[0].id == "table-container-2015") {
			data = sorter(data, target_string)
			this.render(data, sorted, target_string);
		} else {
			data_2014 = sorter(data_2014, target_string);
			this.render(data_2014, sorted, target_string);
		}
	}
});