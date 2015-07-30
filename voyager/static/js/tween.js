function companyAnimation() {
	$(".company-overlay").mouseenter(function() {
		TweenMax.to(this, 0.5, {
			opacity: "0"
		});
	});
	$(".company-overlay").mouseleave(function() {
		TweenMax.to(this, 0.5, {
			opacity: "0.3"
		});
	});
};

function buttonAnimation(selector) {
	selectedTarget = $("meta[name=title").attr("content");

	$(selector).mouseenter(function() {
		if (!$(this).is(selectedTarget)) {
			TweenMax.to(this, 0.2, {
				backgroundColor: "white",
				color: "black"
			});
		};
	});

	$(selector).mouseleave(function() {
		if (!$(this).is(selectedTarget)) {
			TweenMax.to(this, 0.2, {
				backgroundColor: "black",
				color: "white"
			});
		};
	});
};

function buttonFocus() {
	shadeTarget = $("meta[name=title").attr("content");
	TweenMax.to($(shadeTarget), 0.2, {
		backgroundColor: "white",
		color: "black"
	});
}

companyAnimation();
buttonAnimation(".about-selector");
buttonFocus();
buttonAnimation(".navbar-selector");