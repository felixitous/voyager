function companyAnimation() {
    $(".company-overlay").mouseenter(function() {
        TweenMax.to(this, 0.3, {
            opacity: "0"
        });
    });
    $(".company-overlay").mouseleave(function() {
        TweenMax.to(this, 0.3, {
            opacity: "0.2"
        });
    });
};

function buttonAnimation(selector) {
    selectedTarget = $("meta[name=title]").attr("content");

    $(selector).mouseenter(function() {
        if (!$(this).is(selectedTarget)) {
            TweenMax.to(this, 0.2, {
                backgroundColor: "white",
                color: "#282828 "
            });
        };
    });

    $(selector).mouseleave(function() {
        if (!$(this).is(selectedTarget)) {
            TweenMax.to(this, 0.2, {
                backgroundColor: "#282828",
                color: "white"
            });
        };
    });
};

function buttonFocus() {
    shadeTarget = $("meta[name=title]").attr("content");
    TweenMax.to($(shadeTarget), 0.2, {
        backgroundColor: "white",
        color: "#282828"
    });
}

function navbarAppear() {
    TweenMax.to(wholeNavbarTarget, 0.2, {
        height: "450px"
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


// var lastScrollTop = 0;
// $(window).scroll(function(event) {
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop) {
//         TweenMax.to($(".navbar"), 0.4, {
//             opacity: 0
//         });
//     } else {
//         TweenMax.to($(".navbar"), 0.4, {
//             opacity: 1
//         });
//     }
//     lastScrollTop = st;
// });

// console.log(window.innerHeight);
function homeGridPictureResize(target, divisor) {
    $(target).css("width", function() {
        return window.innerHeight / divisor + "px";
    })
    $(target).css("height", function() {
        return window.innerHeight / divisor + "px";
    })
    $(".picture-frame").css("width", window.innerHeight);
    $(".text-frame").css("height", window.innerHeight);
    // $(".text-frame").css("line-height", window.innerHeight + "px");
    $(".text-frame").css("width", window.innerWidth - window.innerHeight);
    if (window.innerWidth < 1130) {
        $(".picture-frame").css("width", window.innerHeight * 0.666667);
        $(".text-frame").css("width", window.innerWidth - window.innerHeight * 0.666667);
    }
    if (window.innerWidth < 798) {
        $(".picture-frame").css("width", window.innerHeight * 0.333334);
        $(".text-frame").css("width", window.innerWidth - window.innerHeight * 0.333334);
    }
}

function companyGridPictureResize(target, divisor) {
    var square_height = Math.floor($(".member-display").innerWidth() / divisor) + "px";
    // console.log($(".member-display").innerWidth())
    $(target).css("width", square_height)
    $(target).css("height", square_height)
    $(".logo-frame").css("height", square_height)
    $(".text-frame-logo").css("height", function() {
        return window.innerHeight - $(".member-display").innerWidth() / divisor;
    });
}

function aboutDescription() {
    $(".about-frame").each(function() {
        text_height = $(".about-wrapper", this).height();
        if (text_height) {
            $(".about-wrapper", this).css("margin-top", function() {
                margin_top = ($(".about-frame").height() - text_height) / 2;
                if (margin_top < 0) {
                    return 0
                }
                return margin_top + "px";
            });
        };
    });
}


homeGridPictureResize(".grid-picture", 3);
companyGridPictureResize(".grid-member-picture", 5);
aboutDescription();

$(window).resize(function() {
    homeGridPictureResize(".grid-picture", 3);
    companyGridPictureResize(".grid-member-picture", 5);
    aboutDescription();
    // alert("something");
});

function sideDisplay(target_id) {
    var current = $(".current");
    TweenMax.to(".current", 0.2, {
        backgroundColor: "gray",
        borderWidth: "0px"

    });
    current.removeClass("current");
    TweenMax.to(target_id, 0.2, {
        backgroundColor: "white",
        borderWidth: "2px"
    });
    $(target_id).addClass("current")
}

function inRange(min, target, max) {
    return min <= target && target < max;
}

function sideDisplayLogic() {
    var target_value = $(window).scrollTop();
    var window_height = window.innerHeight;
    if (target_value < window_height) {
        // alert("something")
        sideDisplay("#side-home");
    } else if (inRange(window_height, target_value, window_height * 2)) {
        sideDisplay("#side-clients");
    } else if (inRange(window_height * 2, target_value, window_height * 3)) {
        sideDisplay("#side-members");
    } else if (inRange(window_height * 3, target_value, window_height * 4)) {
        sideDisplay("#side-business");
    } else {
        sideDisplay("#side-redirect");
    }
}

$(".topleft").click(function() {
    window.location.href = window.location.origin + '/services';
});
$(".topright").click(function() {
    window.location.href = window.location.origin + '/about';
});
$(".bottomleft").click(function() {
    window.location.href = window.location.origin + '/apply';
});
$(".bottomright").click(function() {
    window.location.href = window.location.origin + '/about';
});


function scrollLock() {
    var target_value = $(window).scrollTop();
    var window_height = window.innerHeight;
    if (target_value < window_height) {
        // alert(last_scroll - target_value);
        sideDisplay("#side-home");
    } else if (inRange(window_height, target_value, window_height * 2)) {
        sideDisplay("#side-clients");
    } else if (inRange(window_height * 2, target_value, window_height * 3)) {
        sideDisplay("#side-members");
    } else if (inRange(window_height * 3, target_value, window_height * 4)) {
        sideDisplay("#side-business");
    } else {
        sideDisplay("#side-redirect");
    }
}


function sideNavLaunch() {
    sideDisplayLogic();
    $(window).scroll(function() {
        sideDisplayLogic();
        // scrollLock();
    });

    $("#side-home").click(function() {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: 0
            },
            ease: Power2.easeOut
        });
    });

    $("#side-clients").click(function() {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: window.innerHeight
            },
            ease: Power2.easeOut
        });
    });

    $("#side-members").click(function() {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: window.innerHeight * 2
            },
            ease: Power2.easeOut
        });
    });

    $("#side-business").click(function() {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: window.innerHeight * 3
            },
            ease: Power2.easeOut
        });
    });

    $("#side-redirect").click(function() {
        TweenMax.to(window, 1, {
            scrollTo: {
                y: window.innerHeight * 4
            },
            ease: Power2.easeOut
        });
    });

}


$(".executive-member").css("width", function() {
    // return $(".page-container").width() / 3 - 60;
    return 324
});

$(".executive-picture").css("height", function() {
    return $(".executive-member").width();
});

$(".company").css("width", function() {
    return $(".company-container").width() / 6 - 24;
});

$(".company").css("height", function() {
    return $(".company-container").width() / 6 - 24;
});

$(".services-box").css("width", function() {
    target_width = $(".services-box-container").width() / 3 - 50;
    if (target_width < 282) {
        return 291;
    } else {
        return target_width;
    };
});

$("#apply-form").submit(function(event) {
    // alert("fuck");
    TweenMax.to(".response-alert", 0.4, {
        display: "block",
        opacity: 1
    });

    // TweenMax.to(".response-alert", 0.1, {
    //     display: "none",
    //     delay: 0.7,
    //     opacity: 0
    // });
    // event.preventDefault();
    return
});

$("#contact-form").submit(function(event) {
    // alert("fuck");
    TweenMax.to(".response-alert", 0.4, {
        display: "block",
        opacity: 1
    });

    // TweenMax.to(".response-alert", 0.1, {
    //     display: "none",
    //     delay: 0.7,
    //     opacity: 0
    // });
    // event.preventDefault();
    return
});


function redirectHover() {
    $(".redirect-title-box").mouseenter(function() {
        TweenMax.to($(".redirect-overlay", this), 0.2, {
            opacity: 0
        });
    });

    $(".redirect-title-box").mouseleave(function() {
        TweenMax.to($(".redirect-overlay", this), 0.2, {
            opacity: 0.3
        });
    });
}


function executiveDescriptionDisplay() {
    $(".executive-member").mouseenter(function() {
        TweenMax.to($(".executive-description", this), 0.1, {
            opacity: 1,
            display: "block"
        });

        TweenMax.to($(".background-overlay"), 0.1, {
            display: "block",
            opacity: 0.3
        });

        TweenMax.to(this, 0, {
            zIndex: 4
        });



    });
    $(".executive-member").mouseleave(function() {
        TweenMax.to($(".executive-description", this), 0, {
            opacity: 0,
            display: "none"
        });

        TweenMax.to($(".background-overlay"), 0, {
            display: "none",
            opacity: 0
        });
        TweenMax.to(this, 0, {
            zIndex: 1
        });
    });

    $(window).scroll(function() {
        TweenMax.to($(".background-overlay"), 0, {
            display: "none",
            opacity: 0
        });
        TweenMax.to($(".executive-description"), 0, {
            opacity: 0,
            display: "none"
        });
    });
}

function loadScreen() {
    $(".load-screen").click(function() {
        TweenMax.to(".load-screen", 0.2, {
            opacity: 0,
            display: "none"
        });
    });

    $(window).load(function() {
        TweenMax.to(".load-screen", 0.2, {
            opacity: 0,
            display: "none"
        });
    });
}

function mainPageAnimation() {
    $(window).load(function() {
        // alert("aoweijfaowiejf");
        TweenMax.fromTo(".title-container", 1, {
            opacity: 0,
            display: "none"
        }, {
            opacity: 1,
            display: "block",
            delay: 0.2
        });
    });
}

function applicationButton() {
    if (window.innerWidth < 650) {
        TweenMax.to(".application-portal", 0.2, {
            width: "300px"
        });
    } else {
       TweenMax.to(".application-portal", 0.2, {
           width: "500px"
       }); 
    }
    $(".application-portal").click(function() {
        window.location.href = "https://voyager-consulting.workable.com/jobs/115040";
    });

    $(".application-portal").mouseenter(function() {
        TweenMax.to(this, 0.5, {
            backgroundColor: "black",
            color: "white"
        });
    });

    $(".application-portal").mouseleave(function() {
        TweenMax.to(this, 0.5, {
            backgroundColor: "white",
            color: "black"
        });
    });

}


$(window).resize(function() {
    applicationButton();
});

$(".savan-picture").click(function() {
    window.location.href = '/savanpatel'
});

$(".felix-picture").click(function() {
    window.location.href = '/felixliu'
});

$(".ted-picture").click(function() {
    window.location.href = '/tedxiao'
});

$(".philmon-picture").click(function() {
    window.location.href = '/philmontanuri'
});

$(".olivia-picture").click(function() {
    window.location.href = '/oliviagu'
});

// scrollLock();
loadScreen();
applicationButton();
mainPageAnimation();
redirectHover();
companyAnimation();
executiveDescriptionDisplay();
// buttonAnimation(".about-selector");
buttonFocus();
buttonAnimation(".navbar-selector");
navbarLaunch();
sideNavLaunch();