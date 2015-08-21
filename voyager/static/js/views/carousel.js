var CarouselView = Backbone.View.extend({
    initialize: function(options) {
        this.options = options || {};

        // this.el = this.options.target;
    },
    // el: this.options,
    render: function(target) {
        // console.log(target);
        var template = _.template($(target).html());
        // $(this.options.target).html(template);
        this.$el.html(template);

    },
    events: {
        'click .arrow-wrapper-right': 'nextSlideRight',
        'click .arrow-wrapper-left': 'nextSlideLeft'
    },

    nextSlideRight: function(ev) {
        var value = $(ev.currentTarget).data('value');
        var nextSlide = "." + value + "-carousel";
        console.log(this.options.target);
        TweenMax.fromTo($(this.options.target), 1, {
        	zIndex: 1
            // onComplete: function() {
            //     view_target.remove()
            // }
        }, {
        	left: "-" + window.innerWidth,
        	zIndex: 1
        });

        TweenMax.fromTo($(nextSlide), 1, {
            left: window.innerWidth,
            zIndex: 1
        }, {
            left: 0,
            zIndex: 1
        });
    },

    nextSlideLeft: function(ev) {
        var value = $(ev.currentTarget).data('value');
        var nextSlide = "." + value + "-carousel";
        TweenMax.fromTo($(this.options.target), 1, {
        	zIndex: 1
        }, {
            left: window.innerWidth,
            zIndex: 1
        });

        TweenMax.fromTo($(nextSlide), 1, {
            left: "-" + window.innerWidth,
            zIndex: 1
        }, {
            left: 0,
            zIndex: 1
        });
    }
});