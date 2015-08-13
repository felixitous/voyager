var navbar = new NavbarView();
navbar.render();

renderTarget = $("meta[name=title]").attr("content");
if (renderTarget == "#navbar-careers") {
	var table = new TableView();
	table.render(data);
}

if (renderTarget == "#navbar-home") {
	var carousel = new CarouselView();
	carousel.render("#instagram-template");
}


