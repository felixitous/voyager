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

function navbarAppear() {
    TweenMax.to(wholeNavbarTarget, 0.2, {
        height: window.innerHeight
    });
    TweenMax.to(wholeNavbarTarget, 0.3, {
        delay: 0.2,
        width: "180px"
    });
    TweenMax.to($(".navbar-container"), 0, {
        delay: 0.3,
        display: "block"
    });
    TweenMax.to($(".navbar-container"), 0.3, {
        delay: 0.4,
        opacity: 1
    });

    TweenMax.to(this, 0.3, {
        opacity: 0,
        display: "none"
    });
}

function navbarDisappear() {
    TweenMax.to(this, 0.2, {
        width: "40px"
    });
    TweenMax.to(this, 0.3, {
        delay: 0.2,
        height: "40px"
    });
    TweenMax.to($(".navbar-container"), 0, {
        opacity: 0,
        display: "none"
    });
    TweenMax.to(target, 0.5, {
        opacity: 1,
        display: "block"
    });

    /* Making sure the width shrinks to the right size */
    TweenMax.to(this, 0, {
        delay: 0.3,
        width: "40px"
    });
    TweenMax.to(".navbar-container", 0, {
        delay: 0.3,
        display: "none"
    });
}

function navbarLaunch() {
    target = $(".navbar-span-list");
    wholeNavbarTarget = $(".navbar")
    target.mouseenter(navbarAppear);
    wholeNavbarTarget.mouseleave(navbarDisappear);
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