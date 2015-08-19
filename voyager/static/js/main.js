var navbar = new NavbarView();
navbar.render();

renderTarget = $("meta[name=title]").attr("content");
if (renderTarget == "#navbar-careers") {
	var table = new TableView();
	table.render(data);
}

if (renderTarget == "#navbar-home") {
	// carousel2.remove();

	// var carousel3 = new CarouselView();
	// carousel3.render("#valve-template");
	// carousel3.remove();

	// var carousel4 = new CarouselView();
	// carousel4.render("#amazon-template");
	// carousel4.remove();

	var carousel = new CarouselView();
	carousel.render("#instagram-template");


}


