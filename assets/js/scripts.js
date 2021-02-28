/*!
 * ICOCrypto v1.6.0 by Softnio.
 **/
var NioApp = function(a, e, l) {
    "use strict";
    var i = {
            AppInfo: {
                name: "ICOCrypto",
                package: "1.6.0",
                version: "1.0.2",
                author: "Softnio"
            }
        },
        s = {
            docReady: [],
            docReadyDefer: [],
            winLoad: [],
            winLoadDefer: []
        };

    function t(e) {
        e = void 0 === e ? a : e, s.docReady.concat(s.docReadyDefer).forEach(function(a) {
            a(e)
        })
    }

    function o(e) {
        e = "object" == typeof e ? a : e, s.winLoad.concat(s.winLoadDefer).forEach(function(a) {
            a(e)
        })
    }
    return a(l).ready(t), a(e).on("load", o), i.components = s, i.docReady = t, i.winLoad = o, i
}(jQuery, window, document);
NioApp = function(a, e, l, i) {
    "use strict";
    var s = e(l),
        t = e(i),
        o = e("body"),
        n = e(".header-main"),
        d = l.location.href,
        c = n.innerHeight() - 2,
        r = d.split("#");
    return e.fn.exists = function() {
        return this.length > 0
    }, a.Win = {}, a.Win.height = e(l).height(), a.Win.width = e(l).width(), a.getStatus = {}, a.getStatus.isRTL = !(!o.hasClass("has-rtl") && "rtl" !== o.attr("dir")), a.getStatus.isTouch = "ontouchstart" in i.documentElement, a.getStatus.isMobile = !!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i), a.getStatus.asMobile = a.Win.width < 768, s.on("resize", function() {
        a.Win.height = e(l).height(), a.Win.width = e(l).width(), a.getStatus.asMobile = a.Win.width < 768
    }), a.Util = {}, a.Util.classInit = function() {
        var i = function() {
            !0 === a.getStatus.asMobile ? o.addClass("as-mobile") : o.removeClass("as-mobile")
        };
        !0 === a.getStatus.isTouch ? o.addClass("has-touch") : o.addClass("no-touch"), i(), "rtl" === o.attr("dir") && (o.addClass("has-rtl"), a.getStatus.isRTL = !0), e(l).on("resize", i)
    }, a.components.docReady.push(a.Util.classInit), a.Util.preLoader = function() {
        var a = e(".preloader"),
            l = e(".spinner");
        a.exists() && (o.addClass("page-loaded"), l.fadeOut(300), a.delay(600).fadeOut(300))
    }, a.components.winLoad.push(a.Util.preLoader), a.Util.backTop = function() {
        var a = e(".backtop");
        if (a.exists()) {
            s.scrollTop() > 800 ? a.fadeIn("slow") : a.fadeOut("slow"), a.on("click", function(a) {
                e("body,html").stop().animate({
                    scrollTop: 0
                }, 1500, "easeInOutExpo"), a.preventDefault()
            })
        }
    }, a.components.docReady.push(a.Util.backTop), a.Util.browser = function() {
        var a = -1 !== navigator.userAgent.indexOf("Chrome") ? 1 : 0,
            e = -1 !== navigator.userAgent.indexOf("Firefox") ? 1 : 0,
            s = -1 !== navigator.userAgent.indexOf("Safari"),
            t = -1 !== navigator.userAgent.indexOf("MSIE") || i.documentMode ? 1 : 0,
            n = !t && !!l.StyleMedia,
            d = navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR") ? 1 : 0;
        a ? o.addClass("chrome") : e ? o.addClass("firefox") : t ? o.addClass("ie") : n ? o.addClass("edge") : d ? o.addClass("opera") : s && o.addClass("safari")
    }, a.components.winLoad.push(a.Util.browser), a.Util.headerSticky = function() {
        var a = e(".is-sticky"),
            l = {
                hasFixed: function() {
                    if (a.exists()) {
                        var e = a.offset();
                        s.on("scroll", function() {
                            s.scrollTop() > e.top ? a.hasClass("has-fixed") || a.addClass("has-fixed") : a.hasClass("has-fixed") && a.removeClass("has-fixed")
                        })
                    }
                },
                hasShrink: function() {
                    a.hasClass("is-shrink") && (c = n.height() + 16 - 2)
                }
            };
        l.hasFixed(), l.hasShrink(), s.on("resize", function() {
            c = a.hasClass("is-shrink") ? n.height() + 16 - 2 : n.innerHeight() - 2
        })
    }, a.components.docReady.push(a.Util.headerSticky), a.Util.imageBG = function() {
        var a = e(".bg-image");
        a.exists() && a.each(function() {
            var a = e(this),
                l = a.parent(),
                i = a.data("overlay"),
                s = a.data("opacity"),
                t = a.children("img").attr("src"),
                o = !(void 0 === i || !i) && i,
                n = !(void 0 === s || !s) && s;
            void 0 !== t && "" !== t && (l.hasClass("has-bg-image") || l.addClass("has-bg-image"), o ? a.hasClass("overlay-" + o) || (a.addClass("overlay"), a.addClass("overlay-" + o)) : a.hasClass("overlay-fall") || a.addClass("overlay-fall"), n && a.addClass("overlay-opacity-" + n), a.css("background-image", 'url("' + t + '")').addClass("bg-image-loaded"))
        })
    }, a.components.docReady.push(a.Util.imageBG), a.Util.Ovm = function() {
        var a = e(".nk-ovm"),
            l = e(".nk-ovm[class*=mask]");
        a.exists() && a.each(function() {
            e(this).parent().hasClass("has-ovm") || e(this).parent().addClass("has-ovm")
        }), l.exists() && l.each(function() {
            e(this).parent().hasClass("has-mask") || e(this).parent().addClass("has-mask")
        })
    }, a.components.docReady.push(a.Util.Ovm), a.Util.progressBar = function() {
        var l = e("[data-percent]"),
            i = e("[data-point]");
        l.exists() && l.each(function() {
            e(this).css("width", e(this).data("percent") + "%")
        }), i.exists() && i.each(function() {
            e(this).css("left", e(this).data("point") + "%")
        }), i.exists() && !0 === a.getStatus.isRTL && i.each(function() {
            e(this).css("right", e(this).data("point") + "%"), e(this).css("left", "auto")
        })
    }, a.components.docReady.push(a.Util.progressBar), a.Util.inputAnimate = function() {
        var a = e(".input-line");
        a.exists() && a.each(function() {
            var a = e(this),
                l = a.val(),
                i = "input-focused";
            l && a.parent().addClass(i), a.on("focus", function() {
                e(this).parent().addClass(i)
            }), a.on("blur", function() {
                e(this).parent().removeClass(i), e(this).val() && e(this).parent().addClass(i)
            })
        })
    }, a.components.docReady.push(a.Util.inputAnimate), a.Util.toggler = function() {
        var a = ".toggle-tigger";
        e(a).exists() && t.on("click", a, function(l) {
            var i = e(this);
            e(a).not(i).removeClass("active"), e(".toggle-class").not(i.parent().children()).removeClass("active"), i.toggleClass("active").parent().find(".toggle-class").toggleClass("active"), l.preventDefault()
        }), t.on("click", "body", function(l) {
            var i = e(a),
                s = e(".toggle-class");
            s.is(l.target) || 0 !== s.has(l.target).length || i.is(l.target) || 0 !== i.has(l.target).length || (s.removeClass("active"), i.removeClass("active"))
        })
    }, a.components.docReady.push(a.Util.toggler), a.Util.accordionActive = function() {
        var a = e(".accordion-item"),
            l = e(".accordion-title");
        a.exists() && a.each(function() {
            var a = e(this);
            a.find(".accordion-title").hasClass("collapsed") ? a.removeClass("current") : a.addClass("current")
        }), l.exists() && l.on("click", function() {
            var a = e(this);
            a.parent().siblings().removeClass("current"), a.parent().addClass("current")
        })
    }, a.components.docReady.push(a.Util.accordionActive), a.Util.scrollAnimation = function() {
        var a = e(".animated");
        e().waypoint && a.exists() && a.each(function() {
            var a = e(this),
                l = a.data("animate"),
                i = a.data("duration"),
                s = a.data("delay");
            a.waypoint(function() {
                a.addClass("animated " + l).css("visibility", "visible"), i && a.css("animation-duration", i + "s"), s && a.css("animation-delay", s + "s")
            }, {
                offset: "95%"
            })
        })
    }, a.components.winLoad.push(a.Util.scrollAnimation), a.MainMenu = function() {
        var a = e(".navbar-toggle"),
            l = e(".header-navbar"),
            i = e(".header-navbar-classic"),
            o = e(".menu-toggle"),
            c = e(".menu-link"),
            m = {
                Overlay: function() {
                    l.exists() && l.append('<div class="header-navbar-overlay"></div>')
                },
                navToggle: function() {
                    a.exists() && a.on("click", function(a) {
                        var l = e(this),
                            s = l.data("menu-toggle");
                        l.toggleClass("active"), i.exists() ? e("#" + s).slideToggle().toggleClass("menu-shown") : e("#" + s).parent().toggleClass("menu-shown"), a.preventDefault()
                    })
                },
                navClose: function() {
                    e(".header-navbar-overlay").on("click", function() {
                        a.removeClass("active"), l.removeClass("menu-shown")
                    }), t.on("click", "body", function(e) {
                        !o.is(e.target) && 0 === o.has(e.target).length && !n.is(e.target) && 0 === n.has(e.target).length && s.width() < 992 && (a.removeClass("active"), i.find(".header-menu").slideUp(), l.removeClass("menu-shown"))
                    })
                },
                menuToggle: function() {
                    o.exists() && o.on("click", function(a) {
                        var l = e(this).parent();
                        s.width() < 992 && (l.children(".menu-drop").slideToggle(400), l.siblings().children(".menu-drop").slideUp(400), l.toggleClass("open-nav"), l.siblings().removeClass("open-nav")), a.preventDefault()
                    })
                },
                mobileNav: function() {
                    s.width() < 992 ? l.delay(500).addClass("menu-mobile") : (l.delay(500).removeClass("menu-mobile"), l.removeClass("menu-shown"))
                },
                currentPage: function() {
                    c.exists() && c.each(function() {
                        d === this.href && "" !== r[1] && e(this).closest("li").addClass("active").parent().closest("li").addClass("active")
                    })
                }
            };
        m.Overlay(), m.navToggle(), m.navClose(), m.menuToggle(), m.mobileNav(), m.currentPage(), s.on("resize", function() {
            m.mobileNav()
        })
    }, a.components.docReady.push(a.MainMenu), a.OnePageScroll = function() {
        e('a.menu-link[href*="#"]:not([href="#"])').on("click", function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var a = this.hash,
                    l = !!this.hash.slice(1) && e("[name=" + this.hash.slice(1) + "]"),
                    i = a.length ? e(a) : l;
                if (i.length) return e(".navbar-toggle").removeClass("active"), e(".header-navbar").removeClass("menu-shown"), e("html, body").delay(150).animate({
                    scrollTop: i.offset().top - c
                }, 1e3, "easeInOutExpo"), !1
            }
        })
    }, a.components.docReady.push(a.OnePageScroll), a.scrollAct = function() {
        o.scrollspy({
            target: "#header-menu",
            offset: c + 2
        })
    }, a.components.docReady.push(a.scrollAct), a.Plugins = {}, a.Plugins.countdown = function() {
        var a = e(".countdown");
        a.exists() && a.each(function() {
            var a = e(this),
                l = a.attr("data-date"),
                i = a.data("day-text") ? a.data("day-text") : "Days",
                s = a.data("hour-text") ? a.data("hour-text") : "Hours",
                t = a.data("min-text") ? a.data("min-text") : "Min",
                o = a.data("sec-text") ? a.data("sec-text") : "Sec";
            a.countdown(l).on("update.countdown", function(a) {
                e(this).html(a.strftime('<div class="countdown-item"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">' + i + '</span></div><div class="countdown-item"><span class="countdown-time">%H</span><span class="countdown-text">' + s + '</span></div><div class="countdown-item"><span class="countdown-time">%M</span><span class="countdown-text">' + t + '</span></div><div class="countdown-item"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">' + o + "</span></div>"))
            })
        })
    }, a.components.docReady.push(a.Plugins.countdown), a.Plugins.carousel = function() {
        var l = e(".has-carousel");

        function i(a) {
            var l = e(a);
            !l.hasClass("blank-added") && s.width() > 575 ? (l.trigger("add.owl.carousel", ['<div class="item-blank"></div>']), l.addClass("blank-added").removeClass("blank-removed"), l.trigger("refresh.owl.carousel")) : !l.hasClass("blank-removed") && s.width() < 576 && l.hasClass("blank-added") && (l.trigger("remove.owl.carousel", -1), l.addClass("blank-removed").removeClass("blank-added"), l.trigger("refresh.owl.carousel"))
        }
        l.exists() && l.each(function() {
            var l = e(this),
                t = l.data("items") ? l.data("items") : 4,
                o = l.data("items-tab-l") ? l.data("items-tab-l") : t > 3 ? t - 1 : t,
                n = l.data("items-tab-p") ? l.data("items-tab-p") : o > 2 ? o - 1 : o,
                d = l.data("items-mobile") ? l.data("items-mobile") : n > 1 ? n - 1 : n,
                c = l.data("items-mobile-s") ? l.data("items-mobile-s") : d,
                r = l.data("timeout") ? l.data("timeout") : 6e3,
                m = !!l.data("auto") && l.data("auto"),
                h = !!l.data("loop") && l.data("loop"),
                g = !!l.data("dots") && l.data("dots"),
                v = !!l.data("navs") && l.data("navs"),
                p = !!l.data("center") && l.data("center"),
                u = l.data("margin") ? l.data("margin") : 30;
            t <= 1 && (t = o = n = d = 1), l.addClass("owl-carousel").owlCarousel({
                navText: ["<em class='ti ti-angle-left'></em>", "<em class='ti ti-angle-right'></em>"],
                items: t,
                loop: h,
                nav: v,
                dots: g,
                margin: u,
                center: p,
                autoplay: m,
                autoplayTimeout: r,
                autoplaySpeed: 600,
                rtl: a.getStatus.isRTL,
                responsive: {
                    0: {
                        items: c
                    },
                    576: {
                        items: d
                    },
                    768: {
                        items: n
                    },
                    992: {
                        items: o
                    },
                    1200: {
                        items: t
                    }
                },
                onInitialized: function() {
                    e().waypoint && Waypoint.refreshAll()
                }
            }), !0 === l.data("blank") && (i(l), s.on("resize", function() {
                i(l)
            }))
        })
    }, a.components.docReady.push(a.Plugins.carousel), a.Plugins.select2 = function() {
        var a = e(".select");
        a.exists() && a.each(function() {
            var a = e(this),
                l = a.data("select2-theme") ? a.data("select2-theme") : "bordered",
                i = a.data("select2-placehold") ? a.data("select2-placehold") : "Select an option";
            a.select2({
                placeholder: i,
                theme: "default select-" + l
            })
        })
    }, a.components.winLoad.push(a.promoPanel), a.Plugins.validform = function() {
        var a = e(".form-validate");
        if (!e().validate) return console.log("jQuery Form Validate not Defined."), !0;
        a.exists() && a.each(function() {
            var a = e(this);
            a.validate(), a.find(".select").on("change", function() {
                e(this).valid()
            })
        })
    }, a.components.docReady.push(a.Plugins.validform), a.Plugins.submitform = function() {
        var a = e(".nk-form-submit");
        if (!e().validate && !e().ajaxSubmit) return console.log("jQuery Form and Form Validate not Defined."), !0;
        a.exists() && a.each(function() {
            var a = e(this),
                l = a.find(".form-results");
            a.validate({
                ignore: [],
                invalidHandler: function() {
                    l.slideUp(400)
                },
                submitHandler: function(a) {
                    l.slideUp(400), e(a).ajaxSubmit({
                        target: l,
                        dataType: "json",
                        success: function(i) {
                            var s = "error" === i.result ? "alert-danger" : "alert-success";
                            l.removeClass("alert-danger alert-success").addClass("alert " + s).html(i.message).slideDown(400), "error" !== i.result && e(a).clearForm().find("input").removeClass("input-focused")
                        }
                    })
                }
            }), a.find(".select").on("change", function() {
                e(this).valid()
            })
        })
    }, a.components.docReady.push(a.Plugins.submitform), a.Plugins.parallax = function() {
        var a = e("[data-parallax]");
        a.exists() && a.each(function() {
            var a = e(this);
            !0 === a.data("parallax") && (a.addClass("plx-bg"), a.parent().addClass("has-plx"))
        })
    }, a.components.docReady.push(a.Plugins.parallax), a.Plugins.popup = function() {
        var a = e(".content-popup"),
            l = e(".video-popup"),
            i = e(".image-popup"),
            s = {
                content_popup: function() {
                    a.exists() && a.each(function() {
                        e(this).magnificPopup({
                            type: "inline",
                            preloader: !0,
                            removalDelay: 400,
                            mainClass: "mfp-fade content-popup"
                        })
                    })
                },
                video_popup: function() {
                    l.exists() && l.each(function() {
                        e(this).magnificPopup({
                            type: "iframe",
                            removalDelay: 160,
                            preloader: !0,
                            fixedContentPos: !1,
                            callbacks: {
                                beforeOpen: function() {
                                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                                }
                            }
                        })
                    })
                },
                image_popup: function() {
                    i.exists() && i.each(function() {
                        e(this).magnificPopup({
                            type: "image",
                            mainClass: "mfp-fade image-popup"
                        })
                    })
                }
            };
        s.content_popup(), s.video_popup(), s.image_popup()
    }, a.components.docReady.push(a.Plugins.popup), a.Plugins.particles = function() {
        var a = e(".particles-bg");
        a.exists() && a.each(function() {
            var a = e(this),
                l = a.attr("id"),
                i = a.data("default-color") ? a.data("default-color") : "#fff",
                s = a.data("shape-stroke-color") ? a.data("shape-stroke-color") : "#fff",
                t = a.data("line-linked-color") ? a.data("line-linked-color") : "#fff";
            particlesJS(l, {
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: !0,
                            value_area: 800
                        }
                    },
                    color: {
                        value: i
                    },
                    shape: {
                        type: "circle",
                        opacity: .1,
                        stroke: {
                            width: 0,
                            color: s
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: .1,
                        random: !1,
                        anim: {
                            enable: !1,
                            speed: 1,
                            opacity_min: .12,
                            sync: !1
                        }
                    },
                    size: {
                        value: 6,
                        random: !0,
                        anim: {
                            enable: !1,
                            speed: 40,
                            size_min: .08,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: !0,
                        distance: 150,
                        color: t,
                        opacity: .2,
                        width: 1.3
                    },
                    move: {
                        enable: !0,
                        speed: 6,
                        direction: "none",
                        random: !1,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: !0,
                            mode: "repulse"
                        },
                        onclick: {
                            enable: !0,
                            mode: "push"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            })
        })
    }, a.components.docReady.push(a.Plugins.particles), a.Plugins.scrollify = function() {
        e(".mode-fullscreen").exists() && (e.scrollify({
            section: ".section-full",
            interstitialSection: "",
            scrollSpeed: 1100,
            scrollbars: !0,
            updateHash: !1,
            touchScroll: !0,
            setHeights: !0,
            offset: 0,
            afterResize: function() {
                e.scrollify({
                    setHeights: !0
                })
            },
            before: function() {
                e(".section-full").removeClass("section-active section-rendered"), e.scrollify.current().addClass("section-active"), setTimeout(function() {
                    e(".section-full").removeClass("animate-start"), e.scrollify.current().addClass("animate-start")
                }, 900)
            },
            afterRender: function() {
                e.scrollify.current().addClass("section-active section-rendered"), setTimeout(function() {
                    e.scrollify.current().addClass("animate-start")
                }, 900)
            }
        }), e(".section-content").css("padding-top", c / 2))
    }, a.components.docReady.push(a.Plugins.scrollify), a.Util.wordSplit = function() {
        var a = e(".word-split"),
            l = e(".element-wrap"),
            i = e(".animate");
        a.exists() && a.each(function() {
            var a = e(this),
                l = a.text().split(" "),
                i = "",
                s = a.data("delay") > 0 ? a.data("delay") : 1;
            e.each(l, function(a, e) {
                i += '<div class="word-x"><span style="transition-delay: ' + s + 's">' + e + " </span></div>"
            }), a.html(i)
        }), l.exists() && l.each(function() {
            var a = e(this),
                l = a.html(),
                i = a.data("delay") > 0 ? a.data("delay") : 1;
            a.html('<div class="element-x"><span style="transition-delay: ' + i + 's">' + l + " </span></div>")
        }), i.exists() && i.each(function() {
            var a = e(this),
                l = a.data("delay") > 0 ? a.data("delay") : 1;
            a.hasClass("key") ? a.css("animation-delay", l + "s") : a.css("transition-delay", l + "s")
        })
    }, a.components.winLoad.push(a.Util.wordSplit), a
}(NioApp, jQuery, window, document);
/* END @iO */