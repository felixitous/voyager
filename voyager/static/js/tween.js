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

function buttonAnimation() {
	$(".about-selector").mouseenter(function() {
		TweenMax.to(this, 0.2, {
			backgroundColor: "white",
			color: "black"
		});
	});
	$(".about-selector").mouseleave(function() {
		TweenMax.to(this, 0.2, {
			backgroundColor: "black",
			color: "white"
		});
	});
};

companyAnimation();
buttonAnimation();