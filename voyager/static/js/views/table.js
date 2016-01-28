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

function selectionHighlight(target, comparison) {
	if (comparison) {
		$(target).each(function() {
			target_string = $.trim($(this).text());
			if (target_string == comparison) {
				$(this).addClass("span-selected");
			}
		});
	}
}

function dataSelector(data) {
	var processed = data;
	if (selections['year']) {
		processed = _.groupBy(processed, 'year')[selections['year']]
		// console.log(temp);
	}

	if (selections['major']) {
		processed = _.groupBy(processed, 'major')[selections['major']]
		// console.log(temp);
	}

	if (selections['type']) {
		processed = _.groupBy(processed, 'type')[selections['type']]
		// console.log(temp);
	}

	return processed;

}

function companyLogo() {
	$(".member-company").each(function() {
		var target = $(this).text().split(" ")[1].toLowerCase() + "-picture";
		$(this).closest('td').prev('td').find('div').addClass(target)
	});
}

var selections = {}


var TableView = Backbone.View.extend({
	render: function(data, sorted, target) {
		var template = _.template($("#table-template").html())({ members : data});
		this.$el.html(template);
		if (sorted) {
			blackBottom("#table-container", target);
		}
		selectionHighlight(".year-span", selections['year']);
		selectionHighlight(".major-span", selections['major']);
		selectionHighlight(".type-span", selections['type']);
		companyLogo();
	},

	events : {
		"click th" : "sort",
		"click .year-span" : "byYear",
		"click .major-span" : "byMajor",
		"click .type-span" : "byType"
	},

	sort: function(ev){

		sorted = true;
		target_string = $.trim($(ev.target).text());
		if (this.$el[0].id == "table-container") {
			data = sorter(data, target_string)
			this.render(data, sorted, target_string);
		} else {
			data_2014 = sorter(data_2014, target_string);
			this.render(data_2014, sorted, target_string);
		}
	},

	byYear: function(ev) {
		// console.log("something");
		target_string = $.trim($(ev.target).text());
		if (target_string == selections['year']) {
			selections['year'] = null
 		} else {
 			selections['year'] = target_string
 		}

 		console.log(selections);
 		this.render(dataSelector(data));
	},

	byMajor: function(ev) {
		target_string = $.trim($(ev.target).text());
		if (target_string == selections['major']) {
			selections['major'] = null
 		} else {
 			selections['major'] = target_string
 		}

 		this.render(dataSelector(data));

	},

	byType: function(ev) {
		target_string = $.trim($(ev.target).text());
		if (target_string == selections['type']) {
			selections['type'] = null
 		} else {
 			selections['type'] = target_string
 		}

 		this.render(dataSelector(data));

	}
});