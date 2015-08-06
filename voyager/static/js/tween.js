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

function navbarLaunch() {
    target = $(".navbar-span-list");
    wholeNavbarTarget = $(".navbar")
    target.mouseenter(function() {
        TweenMax.to(wholeNavbarTarget, 0.2, {
            width: "12%"
        });
        TweenMax.to(wholeNavbarTarget, 0.3, {
            delay: 0.2,
            height: "100%"
        });
        TweenMax.to($(".navbar-container"), 0.3, {
            delay: 0.4,
            display: "block"
        });
        TweenMax.to(this, 0.3, {
            opacity: 0,
            display: "none"
        });
    });

    wholeNavbarTarget.mouseleave(function() {
        TweenMax.to(this, 0.2, {
            width: "0%"
        });
        TweenMax.to(this, 0.3, {
            delay: 0.2,
            height: "0%"
        });
        TweenMax.to($(".navbar-container"), 0, {
            display: "none"
        });
        TweenMax.to($(".navbar-container"), 0, {
            delay: 0.4,
            display: "none"
        });
        TweenMax.to(target, 0.5, {
            opacity: 1,
            display: "block"
        });
    });
}


var lastScrollTop = 0;
$(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        TweenMax.to($(".navbar"), 0.4, {
            opacity: 0
        });
    } else {
        TweenMax.to($(".navbar"), 0.4, {
            opacity: 1
        });
    }
    lastScrollTop = st;
});

// console.log(window.innerHeight);
$(".member-picture").css("width", function() {
    return window.innerHeight / 3 + "px";
})
$(".member-picture").css("height", function() {
    return window.innerHeight / 3 + "px";
})




companyAnimation();
buttonAnimation(".about-selector");
buttonFocus();
buttonAnimation(".navbar-selector");
navbarLaunch();