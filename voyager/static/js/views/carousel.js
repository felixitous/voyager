var CarouselView = Backbone.View.extend({
    el: ".current-carousel",
    render: function(target) {
        var template = _.template($(target).html());
        this.$el.html(template);
    },
    events: {
        'click .arrow-wrapper-right': 'nextSlideRight',
        'click .arrow-wrapper-left': 'nextSlideLeft'
    },

    nextSlideRight: function(ev) {
        console.log("going here");
        var value = $(ev.currentTarget).data('value');
        var target = "#" + value + "-template";
        $(".carousel-divs").removeClass('current-carousel').addClass("retired");
        $("<div class=\"carousel-divs current-carousel\"></div>").appendTo(".carousel-display");
    	var view_target = this;
        TweenMax.to($(".retired"), 1, {
            left: "-" + window.innerWidth,
            onComplete: function() {view_target.remove()}
        });
        TweenMax.fromTo($(".current-carousel"), 1, {
            left: window.innerWidth
        }, {
            left: 0
        });

        var carousel = new CarouselView();
        carousel.render(target);
    },

    nextSlideLeft: function(ev) {
        var value = $(ev.currentTarget).data('value');
        var target = "#" + value + "-template";
        $(".carousel-divs").removeClass('current-carousel').addClass("retired");
        $("<div class=\"carousel-divs current-carousel\"></div>").prependTo(".carousel-display");
    	var view_target = this;
        TweenMax.to($(".retired"), 1, {
            left: window.innerWidth,
            onComplete: function() {view_target.remove()}
        });
        TweenMax.fromTo($(".current-carousel"), 1, {
            left: "-" + window.innerWidth
        }, {
            left: 0
        });

        var carousel = new CarouselView();
        carousel.render(target);

    }
});