window.googletag = window.googletag || {
    cmd: []
}, function (n, t, i, r) {
    function v(n, t) {
        return n.indexOf(t) >= 0
    }
    function et(n) {
        k && console.log(n)
    }
    function ot() {
        n("#return-to-innocence").click(function () {
            n.cookie("notheme", 1);
            i.reload()
        })
    }
    function y(i) {
        if (i.IsFallbackAd)
            return !1;
        const r = n(t).width();
        if (typeof i.Size != "undefined" && r < i.Size[0])
            return et(i.Name + " won't be displayed due to screen width. " + JSON.stringify({
                    screenWidth: r,
                    adWidth: i.Size[0],
                    adLength: i.Size[1]
                })), !1;
        if (r <= 1265) {
            if (i.Name === "DoubleClickWebThemeTopBanner")
                return !0;
            if (i.Name === "DoubleClickWebThemeBanner")
                return !1
        } else {
            if (i.Name === "DoubleClickWebThemeTopBanner")
                return !1;
            if (i.Name === "DoubleClickWebThemeBanner")
                return !0
        }
        return !0
    }
    function p(t, i) {
        const e = n("<div>", {
            id: t.Slot
        });
        i.append(e).show();
        r.cmd.push(function () {
            if (r.display(t.Slot), t.Name in u) {
                const n = u[t.Name];
                f.refresh([n])
            }
        })
    }
    function ht() {
        f.disableInitialLoad();
        t.Criteo.events.push(function () {
            const n = s === "true" ? ut : ft;
            t.Criteo.SetLineItemRanges("0..3:0.01;3..8:0.05;8..20:0.50;20..30:1.00");
            t.Criteo.RequestBids(n, st, 1e3)
        })
    }
    function ct(i) {
        function y(n) {
            return ("0" + parseInt(n, 10).toString(16)).slice(-2)
        }
        function h(n) {
            return typeof n == "undefined" ? "" : (n = n.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i), !n || n.length !== 4) ? "" : y(n[1]) + y(n[2]) + y(n[3])
        }
        function w(i) {
            const u = "/1024435/",
            f = "/138586269/";
            if (typeof i != "undefined") {
                let r = i.slot.getAdUnitPath();
                const s = r.startsWith(f);
                if (r.startsWith(u) || s) {
                    const a = s ? f : u;
                    if (r = r.substr(a.length), r === "desktop_web_interstitial" && typeof e != "undefined" && typeof o == "undefined" && (o = !1, i.isEmpty && t.open(e, "_self")), r === "mobile_web_interstitial" && typeof e != "undefined" && typeof o == "undefined" && (o = !1, i.isEmpty && t.open(e, "_self")), r === "desktop_web_tema" && !i.isEmpty) {
                        n(".ad-doubleclickwebthemebanner").removeClass("web-top-ad-not-loaded");
                        return
                    }
                    if (r === "desktop_web_tema_top" && !i.isEmpty) {
                        n(".ad-doubleclickwebthemebanner").removeClass("web-top-ad-not-loaded");
                        return
                    }
                    if (r === "desktop_web_masthead" && !i.isEmpty) {
                        if (i.size[1] === 90) {
                            n(".ad-doubleclickwebmastheadfortr").removeClass("web-top-ad-not-loaded");
                            n(".ad-doubleclickwebmastheadfortr").addClass("web-top-ad-728-loaded");
                            return
                        }
                        n(".ad-doubleclickwebmastheadfortr").removeClass("web-top-ad-not-loaded");
                        return
                    }
                    if (r === "desktop_web_masthead_for_nontr" && !i.isEmpty) {
                        if (i.size[1] === 90) {
                            n(".ad-doubleclickwebmastheadfornontr").removeClass("web-top-ad-not-loaded");
                            n(".ad-doubleclickwebmastheadfornontr").addClass("web-top-ad-728-loaded");
                            return
                        }
                        n(".ad-doubleclickwebmastheadfornontr").removeClass("web-top-ad-not-loaded");
                        return
                    }
                    const v = 32,
                    h = 90;
                    if (r === "desktop_image_top" && !i.isEmpty) {
                        const r = i.size[1] + v * 2;
                        n("header").css("height", r + "px");
                        n("#under-top-ad").css("height", i.size[1] + "px");
                        n("#content").css("height", n(t).height() - (r + h) + "px");
                        return
                    }
                    if (r === "desktop_image_side" && !i.isEmpty) {
                        n("#under-side-ad").css("width", i.size[0] + "px");
                        n("#under-side-ad").css("height", i.size[1] + "px");
                        return
                    }
                    const y = 28;
                    if (r === "mobile_image_top" && !i.isEmpty) {
                        const r = i.size[1] + y * 2;
                        n("header").css("height", r + "px");
                        n("#under-mobile-top-ad").css("height", i.size[1] + "px");
                        n("#content").css("height", n(t).height() - (r + h) + "px");
                        return
                    }
                    if (r === "mobile_image_bottom" && !i.isEmpty) {
                        n("#under-mobile-bottom-ad").css("width", i.size[0] + "px");
                        n("#under-mobile-bottom-ad").css("height", i.size[1] + "px");
                        return
                    }
                    r in l && n(l[r]).show();
                    r !== "mobile_web_bottom_sticky" || i.isEmpty || (n("#mobile-sticky")[0].style.display = "flex", n("#site-footer")[0].style.marginBottom = i.size[1].toString() + "px");
                    r !== "mobile_web_top" || i.isEmpty || i.size[1] > 100 && n(".ad-doubleclickmobiletopfortr").css("height", "auto");
                    r !== "mobile_web_top_for_nontr" || i.isEmpty || i.size[1] > 100 && n(".ad-doubleclickmobiletopfornontr").css("height", "auto");
                    r in c && n(c[r]).removeClass("mobile-inread-ad-not-loaded")
                }
            }
        }
        function p() {
            for (const n in t.netadcfg) {
                const i = t.netadcfg[n];
                v(rt, i) && f.setTargeting("netkeys_" + i, [n.substr(1)])
            }
        }
        function b(n) {
            function s(n) {
                if (t in u) {
                    r.cmd.push(function () {
                        u[t] = r.defineSlot(i, n, f).addService(r.pubads()).setCollapseEmptyDiv(!0)
                    });
                    return
                }
                r.cmd.push(function () {
                    r.defineSlot(i, n, f).addService(r.pubads()).setCollapseEmptyDiv(!0)
                })
            }
            function h() {
                if (t in u) {
                    r.cmd.push(function () {
                        u[t] = r.defineOutOfPageSlot(i, f).addService(r.pubads()).setCollapseEmptyDiv(!0)
                    });
                    return
                }
                r.cmd.push(function () {
                    r.defineOutOfPageSlot(i, f).addService(r.pubads()).setCollapseEmptyDiv(!0, !0)
                })
            }
            function c() {
                if (t in u) {
                    r.cmd.push(function () {
                        u[t] = r.defineSlot(i, [e, o], f).addService(r.pubads()).setCollapseEmptyDiv(!0)
                    });
                    return
                }
                r.cmd.push(function () {
                    r.defineSlot(i, [e, o], f).addService(r.pubads()).setCollapseEmptyDiv(!0, !0)
                })
            }
            const e = n.Size[0],
            o = n.Size[1],
            i = n.NetworkIdentifier,
            t = n.Name,
            f = n.Slot;
            t in a ? s(a[t]) : v(it, t) ? h() : c()
        }
        i.each(function (t, i) {
            b(n(i).data("info"))
        });
        const k = typeof ek$i.topic == "undefined" ? 0 : ek$i.topic.id;
        r.cmd.push(function () {
            f = r.pubads();
            f.addEventListener("slotRenderEnded", w);
            const i = n("#ad-theme").data("is-channel"),
            u = s === "true" ? n("#mobile-index").data("caption") : n("#left-index").data("caption"),
            e = {
                bodytextcolor: h(n("#hidden-body-text-color").css("background-color")),
                boxcolor: h(n("#hidden-box-color").css("background-color")),
                mutedcolor: h(n("#hidden-muted-color").css("background-color")),
                Eksisozluk_Baslik: [k],
                Eksisozluk_Kanal: n("#hidden-channels").text().trim().split(","),
                intopiclinkcolor: h(n("#hidden-intopic-link-color").css("background-color")),
                textcolor: h(n("#hidden-text-color").css("background-color")),
                linkcolor: h(n("#hidden-link-color").css("background-color")),
                entryfooterinfocolor: h(n("#hidden-entry-footer-info-color").css("background-color")),
                Eksisozluk_Anasayfa: n('meta[name="homepage"]').attr("content"),
                seylerembedstyle: n("#hidden-eksiseyler-embed-style").data("style"),
                isAdultContent: n("meta[name='sensitivecontent']").length > 0 ? "true" : "false",
                titlekeywords: n("#title").length > 0 ? n("#title").data("title").toString().split(" ") : "",
                UserRank: n('meta[name="user-rank"]').attr("content"),
                IsRequestFormTR: n('meta[name="is-user-country-tr"]').attr("content"),
                channel: typeof u != "undefined" ? u : "none",
                "kanal-tema": typeof i != "undefined" && i === "True" ? "1" : "0"
            };
            for (const n in e)
                f.setTargeting(n, e[n]);
            t.netadcfg ? p() : t.setTimeout(function () {
                p()
            }, 350);
            ht();
            t.setTimeout(function () {
                f.refresh()
            }, 750);
            r.enableServices()
        })
    }
    function lt() {
        const t = n(b);
        ct(t);
        t.each(function (t, i) {
            const r = n(i),
            u = r.data("info");
            if (!y(u)) {
                r.hide();
                return
            }
            u.IsLazyLoad || p(u, r)
        })
    }
    function h(n) {
        const t = n.data("info");
        if (t && t.IsLazyLoad) {
            if (!y(t)) {
                n.hide();
                return
            }
            n.hasClass("loaded") || (p(t, n), n.addClass("loaded"))
        }
    }
    function at() {
        const r = n(".bottom-ads");
        if (!(r.length < 1)) {
            const f = n(t).scrollTop(),
            e = 120,
            u = n("#sticky-anchor"),
            i = n("#sticky-ad"),
            o = 300,
            s = 325,
            c = u.offset().top - e;
            if (f > c) {
                i.addClass("stick-ad");
                u.height(i.outerHeight());
                r.offset().top - i.offset().top - o >= s && h(n(".ad-doubleclickwebsidesticky"));
                const t = r.offset().top - (f + o + e);
                t < 0 && (i[0].style.marginTop = (t - 25).toString() + "px");
                t >= 0 && (i[0].style.marginTop = "0px")
            } else
                i.removeClass("stick-ad"), u.height(0)
        }
    }
    function vt() {
        const i = n("#mobile-sticky");
        if (i.length !== 0 && !i.hasClass("loaded"))
            n(t).scrollTop() >= 100 && (h(n(".ad-doubleclickmobilesticky")), i.addClass("loaded"))
    }
    function yt() {
        const u = n(".bottom-ads");
        if (!(u.length < 1)) {
            const f = n(t).scrollTop(),
            i = n("#sticky-anchor"),
            r = n("#sticky-criteo"),
            e = i.offset().top - 120;
            f > e ? (r.addClass("stick-criteo"), i.height(r.outerHeight())) : (r.removeClass("stick-criteo"), i.height(0))
        }
    }
    function pt() {
        const u = n(t).scrollTop(),
        r = n(t).height(),
        i = n(".ad-doubleclickwebbottom"),
        f = s === "true" ? 5 * r / 2 : 3 * r / 2;
        i.length > 0 && i.offset().top - f < u && (i.length === 0 || i.hasClass("loaded") || (h(i), i.addClass("loaded")))
    }
    function wt() {
        n(t).scroll(at);
        n(t).scroll(vt);
        n(t).scroll(yt);
        n(t).scroll(pt)
    }
    function bt() {
        n("a").click(function (i) {
            if (!i.isDefaultPrevented()) {
                const r = i.currentTarget;
                if (!i.metaKey && !i.ctrlKey && r.target === "" && r.href !== "" && r.id !== "top-registration-link" && r.id !== "top-login-link") {
                    const u = s === "true" ? n(".ad-mobilewebinterstitial") : n(".ad-doubleclickwebinterstital");
                    if (u.length !== 0) {
                        const f = n("#overlay"),
                        c = n("#interstitial-close-link-source");
                        if (c.length === 0) {
                            const t = n("<div/>", {
                                id: "interstitial-close-link-source",
                                "data-link": i.currentTarget.href
                            });
                            e = i.currentTarget.href;
                            n(f).after(t);
                            i.preventDefault();
                            u.length >= 1 && h(u)
                        }
                        t.setTimeout(function () {
                            typeof u[0].children[0].children[0].children[0] == "undefined" && typeof o == "undefined" && t.open(e, "_self")
                        }, 1e3)
                    }
                }
            }
        })
    }
    function kt() {
        n("#mobile-sticky-closer").click(function () {
            n("#mobile-sticky")[0].style.display = "none";
            n("#site-footer")[0].style.marginBottom = "0px"
        })
    }
    function w() {
        t.googletag && r.apiReady ? (ot(), lt(), kt(), t.setTimeout(function () {
                bt();
                wt()
            }, 100)) : t.setTimeout(function () {
            w()
        }, 20)
    }
    t.Criteo = t.Criteo || {};
    t.Criteo.events = t.Criteo.events || [];
    const b = ".ad-double-click",
    k = i.search.indexOf("adlog") > -1;
    let d,
    g,
    f,
    nt,
    tt,
    e,
    o;
    const s = n('meta[data-is-mobile="true"]').attr("data-is-mobile"),
    u = {
        DoubleClickWebInterstital: nt,
        MobileWebInterstitial: tt,
        DoubleClickWebSideSticky: d,
        DoubleClickMobileSticky: g
    },
    c = {
        mobile_web_index_inread_first: ".ad-doubleclickmobileindexinreadfirst",
        mobile_web_index_inread_second: ".ad-doubleclickmobileindexinreadsecond",
        mobile_web_entry_inread_second: ".ad-doubleclickmobileentryinreadsecond",
        mobile_web_entry_inread_first_renovation: ".ad-doubleclickmobileentryinreadfirst",
        mobile_web_entry_inread_third: ".ad-doubleclickmobileentryinreadthird"
    },
    l = {
        desktop_web_sponsored_title: "#sponsored-index-item-first",
        desktop_web_sponsored_title_2: "#sponsored-index-item-second",
        desktop_web_sponsored_title_3: "#sponsored-index-item-third",
        desktop_web_sponsored_title_4: "#sponsored-index-item-fourth",
        desktop_web_sponsored_title_5: "#sponsored-index-item-fifth",
        mobile_web_sponsored_title: "#sponsored-index-item-mobile-first",
        mobile_web_sponsored_title_2: "#sponsored-index-item-mobile-second",
        mobile_web_sponsored_title_3: "#sponsored-index-item-mobile-third",
        mobile_web_sponsored_title_4: "#sponsored-index-item-mobile-fourth",
        mobile_web_sponsored_title_5: "#sponsored-index-item-mobile-fifth",
        desktop_web_sponsored_entry: "#web-sponsored-entry",
        mobile_web_sponsored_entry: "#mobile-sponsored-entry"
    },
    a = {
        DoubleClickWebMastheadForTR: [[728, 90], [300, 250], [970, 250], [970, 90], "fluid"],
        DoubleClickWebMastheadForNonTR: [[970, 250], [728, 90], [970, 90], "fluid"],
        DoubleClickWebBottom: [[970, 250], [728, 90], [970, 90], "fluid"],
        DoubleClickWebSideSticky: [[300, 250], [250, 250], "fluid", [200, 200]],
        DoubleClickMobileTopForTR: [[320, 50], "fluid", [320, 100]],
        DoubleClickMobileTopForNonTR: [[320, 50], "fluid", [320, 100]],
        DoubleClickWebSide: [[300, 600], [250, 250], "fluid", [200, 200], [120, 600], [300, 250], [160, 600]],
        DoubleClickMobileIndexInreadFirst: [[300, 250], [336, 280], [250, 250], "fluid", [200, 200]],
        DoubleClickMobileIndexInreadSecond: [[300, 250], [336, 280], [250, 250], "fluid", [200, 200]],
        DoubleClickMobileEntryInreadSecond: [[300, 250], [336, 280], [250, 250], "fluid", [200, 200]],
        DoubleClickMobile300x250: [[300, 250], [336, 280], [250, 250], "fluid", [200, 200], [320, 480]],
        DoubleClickMobileEntryInreadFirst: [[250, 250], [336, 280], "fluid", [200, 200], [300, 250]],
        DoubleClickMobileEntryInreadThird: [[250, 250], [336, 280], "fluid", [200, 200], [300, 250]],
        DoubleClickMobileSticky: [[320, 50], [320, 100]],
        DoubleClickWebImageTop: [[728, 90], [970, 90], [970, 250]],
        DoubleClickWebImageSide: [[300, 600], [250, 250], [200, 200], [120, 600], [300, 250], [160, 600]],
        DoubleClickMobileImageTop: [[320, 50], [320, 100], [320, 142], [414, 129]],
        DoubleClickMobileImageBottom: [[320, 50], [320, 100], [320, 142], [336, 280], [414, 129], [414, 345]]
    },
    it = ["DoubleClickWebInterstital", "DoubleClickWebSponsoredIndexItemFirst", "DoubleClickWebSponsoredIndexItemSecond", "DoubleClickWebSponsoredIndexItemThird", "DoubleClickWebSponsoredIndexItemFourth", "DoubleClickWebSponsoredIndexItemFifth", "DoubleClickMobileSponsoredIndexItemFirst", "DoubleClickMobileSponsoredIndexItemSecond", "DoubleClickMobileSponsoredIndexItemThird", "DoubleClickMobileSponsoredIndexItemFourth", "DoubleClickMobileSponsoredIndexItemFifth", "DoubleClickWebSponsoredEntry", "DoubleClickWebHomePageSponsoredEntry", "DoubleClickMobileSponsoredEntry", "DoubleClickMobileHomePageSponsoredEntry", "MobileWebInterstitial", "DoubleClickWebAffiliate645x35Top", "DoubleClickMobileAffiliate320x35Top", "DoubleClickWebAffiliateEntry", "DoubleClickMobileAffiliateEntry", "DoubleClickWebCountDown", "DoubleClickMobileHomePageSponsoredEntrySecond", "DoubleClickWebHomePageSponsoredEntrySecond", "DoubleClickWebThemeImpressionCounter", "DoubleClickMobileThemeImpressionCounter", "DoubleClickMobileChannelHomePageSponsoredEntry", "DoubleClickWebChannelHomePageSponsoredEntry"],
    rt = ["302", "313", "314", "317", "318", "319", "320", "321"],
    ut = {
        placements: [{
                slotid: "div-gpt-ad-1507285907658-5",
                zoneid: 1356433
            }, {
                slotid: "div-gpt-ad-1507285907658-4",
                zoneid: 1356434
            }, {
                slotid: "div-gpt-ad-1507804122876-2",
                zoneid: 1356435
            }, {
                slotid: "div-gpt-ad-1507285907658-7",
                zoneid: 1356432
            }, {
                slotid: "div-gpt-ad-1577357574325-1",
                zoneid: 1335663
            }, {
                slotid: "div-gpt-ad-1507285907658-3",
                zoneid: 1356428
            }, {
                slotid: "div-gpt-ad-1520256710483-1",
                zoneid: 1356428
            }, {
                slotid: "div-gpt-ad-1586109666686-0",
                zoneid: 1506301
            }
        ]
    },
    ft = {
        placements: [{
                slotid: "div-gpt-ad-1507285907658-0",
                zoneid: 1356430
            }, {
                slotid: "div-gpt-ad-1507285907658-1",
                zoneid: 1356427
            }, {
                slotid: "div-gpt-ad-1520256710483-0",
                zoneid: 1356430
            }, {
                slotid: "div-gpt-ad-1577357574325-0",
                zoneid: 1377140
            }, {
                slotid: "div-gpt-ad-1507285907658-2",
                zoneid: 1356425
            }, {
                slotid: "div-gpt-ad-1506505242517-0",
                zoneid: 1356426
            }
        ]
    };
    const st = function () {
        r.cmd.push(function () {
            t.Criteo.SetDFPKeyValueTargeting()
        })
    };
    n(document).ready(function () {
        w()
    })
}
(jQuery, window, location, window.googletag), function (n) {
    function t(n) {
        return n.match(/[@#a-zA-ZşığüöçŞİĞÜÖÇ0-9]/)
    }
    n(document).ready(function () {
        n(document).on("keypress", function (n) {
            const i = ek$i.getSearchBox(),
            r = String.fromCharCode(n.which),
            u = document.activeElement,
            f = !u || u !== document.body;
            return n.metaKey || n.ctrlKey || !t(r) || f || i.val().length > 0 ? !0 : (i.val(r).focus().setCaretPos(1), !1)
        })
    })
}
(jQuery), function (n, t, i) {
    function u(t) {
        t.bind("input.autocomplete propertychange.autocomplete", function () {
            n(this).trigger("keydown.autocomplete", {
                keycode: 0
            })
        })
    }
    function f(t) {
        t.element.on("focus", function () {
            if (!t.element.prop("ignoreFocus")) {
                const i = n(this).val();
                i.length > 0 && t.search(i)
            }
        })
    }
    function e(n) {
        u(n.element);
        f(n)
    }
    function r(t, i, r, u) {
        const f = t.term.trim();
        if (f === "") {
            i();
            return
        }
        if (f in r) {
            i(r[f]);
            return
        }
        n.getJSON(u, t, function (n) {
            r[f] = n;
            i(n)
        })
    }
    (function () {
        n.widget("ek$i.baseAutoComplete", n.ui.autocomplete, {
            _init: function () {
                e(this)
            },
            options: {
                messages: {
                    noResults: "",
                    results: function () {}
                }
            }
        })
    })(),
    function () {
        const u = {};
        let r;
        n.widget("ek$i.queryAutoComplete", n.ek$i.baseAutoComplete, {
            _renderMenu: function (i, r) {
                const u = this;
                r = r[0];
                t.ios && n(".ui-autocomplete").off("menufocus hover mouseover mouseenter");
                const f = n("#search-box-ad").length !== 0;
                if (f) {
                    const t = n("#search-box-ad").data("placeholder"),
                    r = n("#search-box-ad")[0].style.color;
                    n("<li>").append(n("<div>", {
                            style: "color:" + r
                        }).text(t)).appendTo(i).data("ui-autocomplete-item", {
                        label: t,
                        value: t,
                        category: "ads"
                    });
                    n("<li>", {
                        style: "position: absolute;right: 0;margin-top: -32px;z-index:9999;"
                    }).append(n("<div>", {
                            style: "color:#888888;"
                        }).text("sponsorlu")).appendTo(i).data("ui-autocomplete-item", {
                        label: "sponsorlu",
                        value: "sponsorlu",
                        category: "ads"
                    })
                }
                if (r.Titles.length === 0 && r.Nicks.length === 0) {
                    u._renderItemData(i, {
                        label: "(buna yakın bir şey yok)",
                        value: u.term
                    });
                    return
                }
                n.each(r.Titles, function (n, t) {
                    u._renderItemData(i, {
                        label: t,
                        value: t,
                        category: "titles"
                    })
                });
                n.each(r.Nicks, function (n, t) {
                    u._renderItemData(i, {
                        label: `@${t}`,
                        value: `@${t}`,
                        category: "nicks"
                    })
                })
            },
            options: {
                source: function (f, e) {
                    function s(n, t) {
                        t !== i && (t.abort(), n.pending -= 1)
                    }
                    const o = f.term.trim();
                    if (o === "") {
                        r = s(this, r);
                        e();
                        return
                    }
                    if (o in u) {
                        e([u[o]]);
                        return
                    }
                    const h = `${t.baseUrl}autocomplete/query?q=${encodeURIComponent(o)}`;
                    s(this, r);
                    r = n.getJSON(h, function (n, t, f) {
                        u[o] = n;
                        f === r && (e([n]), r = i)
                    })
                },
                select: function (t, i) {
                    if (i.item.category === "ads") {
                        const t = n("#search-box-ad");
                        return t.length === 0 ? void 0 : (window.open(t[0].href, "_blank"), !1)
                    }
                    i.item && n(t.target).val(i.item.value);
                    n(t.target.form).submit()
                },
                delay: 200,
                minLength: 0
            }
        })
    }
    (),
    function () {
        const u = {};
        n.widget("ek$i.nickAutoComplete", n.ek$i.baseAutoComplete, {
            options: {
                applyNickPrefix: !1,
                source: function (n, f) {
                    this.options.title !== i && (n.title = this.options.title);
                    r(n, f, u, `${t.baseUrl}autocomplete/nick`)
                },
                title: i
            },
            _renderItem: function (t, i) {
                const r = this;
                return r.options.applyNickPrefix && (i.label = `@${i.label}`, i.value = `@${i.value}`),
                n.ui.autocomplete.prototype._renderItem.apply(this, [t, i])
            }
        })
    }
    (),
    function () {
        const i = {};
        n.widget("ek$i.titleAutoComplete", n.ek$i.baseAutoComplete, {
            options: {
                source: function (n, u) {
                    r(n, u, i, `${t.baseUrl}autocomplete/title`)
                }
            }
        })
    }
    (),
    function () {
        const i = {};
        n.widget("ek$i.videoAutoComplete", n.ek$i.baseAutoComplete, {
            options: {
                source: function (n, u) {
                    r(n, u, i, `${t.baseUrl}video/matchvideosbytitle`)
                }
            },
            _renderItem: function (t, i) {
                i.value = i.Title;
                i.label = i.Title;
                const r = n("<img/>").attr("src", i.ThumbUri),
                u = n("<a>").append(r).append(i.Title),
                f = n("<li>").addClass("video-item").append(u);
                return f.appendTo(t)
            }
        })
    }
    ();
    n(document).ready(function () {
        n(".nickpicker").each(function () {
            const t = n(this),
            i = {};
            t.parents("#advanced-search-form").length > 0 && n.extend(i, {
                appendTo: "#advanced-search-form"
            });
            t.nickAutoComplete(i)
        });
        n(".title-autocomplete").titleAutoComplete({
            browseOnSelection: !1
        })
    })
}
(jQuery, window.ek$i), function (n) {
    n(document).ready(function () {
        n(".toast-bottom-wrapper .toast-close").on("click", function (t) {
            t.preventDefault();
            const r = n(this),
            i = r.closest(".toast-bottom-wrapper"),
            u = i.data("containerName");
            i.hide();
            n.cookie(u, "yes", {
                expires: 365
            })
        });
        n(".toast-bottom-wrapper .accept-cookies").on("click", function (t) {
            t.preventDefault();
            const r = n(this),
            i = r.closest(".toast-bottom-wrapper"),
            u = i.data("containerName");
            i.hide();
            n.cookie(u, "yes", {
                expires: 365
            })
        })
    })
}
(jQuery), function (n, t) {
    const r = "beforeunload",
    i = "drwatson_data";
    n.fn.trackChanges = function () {
        return this.each(function () {
            const u = n(this),
            f = u.val();
            u.data(i, f).closest("form").submit(function () {
                n(t).unbind(r)
            });
            n(t).bind(r, function () {
                const n = u.val();
                if (n.length !== 0 && u.data(i).trim() !== n.trim()) {
                    u.focus();
                    const t = `dr. watson: aman yazdıkların boşa gitmesin!

${n.substr(0,30)}${n.length<30?"...":""}
`;
                    if (document.all && event)
                        event.returnValue = t;
                    else
                        return t
                }
            })
        })
    };
    n.fn.resetDrWatson = function () {
        return this.each(function () {
            const t = n(this);
            t.data(i, t.val())
        })
    };
    n(document).ready(function () {
        n(".track-changes").trackChanges()
    })
}
(jQuery, window), function (n) {
    const i = ".dropdown-toggle",
    t = ".dropdown-menu";
    n.fn.dropdown = function () {
        return this.each(function () {
            const u = n(this),
            r = u.find(i),
            f = u.find(t);
            if (r.length !== 0)
                for (let i = 0; i < r.length; i++) {
                    n(r[i]).toggles(n(f[i]), {
                        keepInViewPort: !0
                    });
                    n(f[i]).find("li > a").on("click", function () {
                        ek$i.toggles.toggle(n(this).closest(t))
                    })
                }
        })
    };
    n(document).ready(function () {
        n(".dropdown:not(:has(>a.toggles))").dropdown()
    })
}
(jQuery), function (n) {
    const t = {
        onFileDropped: function () {}
    };
    n.fn.dropZone = function (i) {
        return i = n.extend({}, t, i),
        this.each(function () {
            const t = n(this),
            r = n.proxy(i.onFileDropped, t);
            t.addClass("dropzone");
            t.on("dragover", function (n) {
                n.preventDefault();
                n.stopPropagation()
            });
            t.on("dragenter", function (n) {
                t.addClass("drag-enter");
                n.preventDefault();
                n.stopPropagation()
            });
            t.on("dragleave", function () {
                t.removeClass("drag-enter")
            });
            t.on("drop", function (n) {
                t.removeClass("drag-enter");
                n.preventDefault();
                r(n)
            })
        })
    }
}
(jQuery), function (n) {
    n(function () {
        n("section.dynamic > h2 > a").click(function (t) {
            const r = n(t.target),
            u = r.parent(),
            f = u.parent(),
            e = f.children().not(u),
            i = f.find(".dynamic-content");
            if (i.length === 0 || i.data("loaded"))
                return e.toggle("fast"), !1;
            const o = r.attr("href");
            return i.html(ek$i.tickHtml),
            e.show("fast"),
            n.get(o).done(function (n) {
                i.html(n || "(yok bişii pek)").data("loaded", !0)
            }).fail(function () {
                i.empty().hide()
            }),
            !1
        })
    })
}
(jQuery), function (n) {
    function t(t) {
        const s = n("html").hasClass("no-touch");
        if (s) {
            const h = n("body").hasClass("theme-enabled");
            if (h) {
                const u = n("header").height() + 20,
                f = n("#yeni-reklam");
                let e = u;
                if (f.is(":visible") && (e = f.position().top + f.height()), n(window).width() >= i) {
                    t.css("top", `${u}px`);
                    return
                }
                const o = n(window).scrollTop();
                if (o < r) {
                    const n = e - o;
                    t.css("top", `${n}px`)
                } else
                    t.css("top", `${u}px`)
            }
        }
    }
    const i = 1265,
    r = 275;
    n(document).ready(function () {
        const i = n("#index-section");
        n(window).on("scroll", function () {
            t(i)
        });
        n(window).on("resize", function () {
            t(i)
        });
        t(i)
    })
}
(jQuery), function (n) {
    n(document).on("submit", ".disable-on-submit", function () {
        n(this).find("input[type=submit], input[type=button], button").prop("disabled", !0)
    })
}
(jQuery), function (n) {
    function t(n) {
        const f = n.find(".fromDateSelector").val(),
        e = n.find(".fromTimeSelector").val(),
        o = n.find(".toDateSelector").val(),
        s = n.find(".toTimeSelector").val(),
        t = e.match(/(\d{2}):(\d{2})/),
        i = s.match(/(\d{2}):(\d{2})/),
        r = new Date(f),
        u = new Date(o);
        r.setHours(t[1], t[2]);
        u.setHours(i[1], i[2]);
        n.find("input[name=fromDate]").val(r.toISOString());
        n.find("input[name=toDate]").val(u.toISOString())
    }
    n.fn.setCaretPos = function (t) {
        return n.each(this, function (n, i) {
            if (i.setSelectionRange)
                i.setSelectionRange(t, t);
            else if (i.createTextRange) {
                const n = i.createTextRange();
                n.collapse(!0);
                n.moveEnd("character", t);
                n.moveStart("character", t);
                n.select()
            }
        })
    };
    n.fn.setupScheduleSelectors = function () {
        return this.each(function () {
            const i = n(this);
            if (i.prop("tagName") === "FORM")
                i.on("submit", function () {
                    t(n(this))
                })
        })
    };
    n(document).ready(function () {
        n("input[type=text]").attr({
            autocapitalize: "off",
            autocorrect: "off"
        })
    })
}
(jQuery), function (n) {
    function t() {
        const t = n('meta[name="viewport"]');
        if (t !== null) {
            t.attr("content", "width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0");
            n(document).on("gesturestart", function () {
                t.attr("content", "width=device-width, minimum-scale=0.25, maximum-scale=1.6")
            })
        }
    }
    ek$i.isIos && n(t)
}
(jQuery), function (n) {
    n(document).ready(function () {
        function r() {
            e.blur();
            t.removeClass("open")
        }
        function u() {
            const i = t.hasClass("open");
            if (i)
                return r(), !1;
            ek$i.getSearchBox().queryAutoComplete("close");
            t.addClass("open");
            const n = ek$i.getSearchBox().val();
            return f.val(n).focus(),
            n.length > 0 && ek$i.quickIndexAvailable && t.submit(),
            !1
        }
        function s(u) {
            if (t.hasClass("open")) {
                const f = n(u.target);
                f.is(t) || f.is(i) || f.closest(t).length > 0 || f.is("a.ui-corner-all") || r()
            }
        }
        const t = n("#advanced-search-form"),
        i = n("#a3-toggle"),
        f = n("input[type=text]", t).first(),
        e = n("input", t),
        o = n("a.close", t);
        i.on("click", u).on("keypress", function (n) {
            if (n.which === ek$i.KEY.RETURN)
                return u(), !1
        });
        o.on("click", function () {
            t.removeClass("open")
        });
        n(document).on(ek$i.documentClickEvent, s)
    })
}
(jQuery), function (n) {
    ek$i.getSummary = function (t, i) {
        i = i || 100;
        let r;
        if (t instanceof n) {
            if (t.length === 0)
                return "";
            r = t.text()
        } else if (typeof t == "string")
            r = t;
        else
            return "";
        return r.length > i && (r = r.substring(0, i).trim(), r = `${r.replace(/\s{2,}/g," ").replace(/[^a-z0-9]+$/i,"")}…`),
        r
    }
}
(jQuery), function (n) {
    n.fn.extend({
        insertAtCaret: function (n) {
            return this.each(function () {
                if (document.selection) {
                    this.focus();
                    const t = document.selection.createRange();
                    t.text = n;
                    this.focus()
                } else if (this.selectionStart || this.selectionStart == "0") {
                    const t = this.selectionStart,
                    i = this.selectionEnd,
                    r = this.scrollTop;
                    this.value = this.value.substring(0, t) + n + this.value.substring(i, this.value.length);
                    this.focus();
                    this.selectionStart = t + n.length;
                    this.selectionEnd = t + n.length;
                    this.scrollTop = r
                } else
                    this.value += n, this.focus()
            }),
            this
        }
    })
}
(jQuery), function (n) {
    n(document).ready(function () {
        function i(n) {
            return n ? r : u
        }
        const t = "toggle-enabled",
        r = "disable-",
        u = "enable-";
        n(".toggle-link").click(function () {
            const r = n(this);
            let u = r.hasClass(t);
            const f = i(u),
            o = r.data(`${f}url`),
            s = r.data(`${f}post-data`),
            e = r.data(`${f}success-text`);
            return n.post(o, s).done(function () {
                e && ek$i.success(e);
                u = !u;
                const n = i(u),
                f = r.data(`${n}caption`);
                r.text(f);
                r.toggleClass(t, u)
            }),
            !1
        })
    })
}
(jQuery), function (n) {
    function t() {
        n("#top-navigation .more a").toggles(n("#sub-navigation"), {
            keepInViewPort: !0
        })
    }
    function i() {
        n("#top-login-link").on("click", function () {
            const t = n(this),
            i = t.attr("href");
            i.indexOf("?returnUrl") > -1 || location.href.indexOf("giris?returnUrl") > -1 || t.attr("href", `${i}?returnUrl=${encodeURIComponent(location.href)}`)
        })
    }
    function r() {
        n(".display-preference").click(function (t) {
            t.preventDefault();
            n.ajax({
                url: n(this).attr("href"),
                type: "POST",
                success: function () {
                    location.reload()
                },
                error: function () {
                    ek$i.error("birtakım hatalar oldu.")
                }
            })
        })
    }
    n.extend(ek$i, {
        getSearchBox: function () {
            return n("#search-textbox")
        }
    });
    n(document).ready(function () {
        ek$i.getSearchBox().queryAutoComplete({
            appendTo: "body",
            position: {
                my: "left top+3%"
            }
        });
        t();
        i();
        r()
    })
}
(jQuery), function (n) {
    function t() {
        const t = n("#topic-channel-suggestions-toggle");
        t.click(function () {
            const i = n("#topic-channel-suggestions-container");
            if (i.is(":visible")) {
                i.hide();
                return
            }
            i.show().html(ek$i.tickHtml).load(t.data("url"))
        })
    }
    function i() {
        function u(t) {
            const r = 1,
            u = -1,
            f = i.find("span#positive.passive"),
            e = i.find("span#negative.passive");
            e.off("click").click(function () {
                t(n(this), u)
            });
            f.off("click").click(function () {
                t(n(this), r)
            })
        }
        function f(t, i) {
            r = t;
            const o = t.parents("li").data("channel-name");
            t[0].classList[1] !== "active" && n.post(e, {
                id: ek$i.topic.id,
                channelName: o,
                suggestion: i
            }, function (n) {
                const t = n.success ? "success" : "error";
                if (n.success) {
                    const n = r.parents("li").find("span.vote.active");
                    n.length !== 0 && (n[0].className = "vote passive");
                    r[0].className = "vote active";
                    u(f)
                }
                ek$i.addResponse(n.message, t)
            })
        }
        const i = n("#topic-channel-suggestion-menu"),
        e = i.data("post-url");
        let r;
        t();
        u(f)
    }
    function r() {
        const t = n("#open-suggest-ui-link");
        t.click(function () {
            const r = n("#channel-suggest-panel");
            if (t.data("loaded")) {
                r.toggle();
                return
            }
            r.html(ek$i.tickHtml).load(t.data("url"), function () {
                i();
                t.data("loaded", !0)
            })
        })
    }
    n(r)
}
(jQuery), function (n, t) {
    function i() {
        n("#videos .popped-player").remove()
    }
    function u(t) {
        t.find("li a, .big-thumb a").on("click", function () {
            i();
            const r = n(this),
            t = n("<div>", {
                "class": "popped-player"
            }),
            u = n("<a>", {
                "class": "close",
                text: "×",
                title: "kapat"
            }),
            f = ek$i.getBlockLoadingElement("yükleniyor"),
            e = r.data("href");
            u.on("click", i);
            return t.append(u).append(f),
            r.closest("div").append(t),
            n.get(e, function (n, r) {
                if (ek$i.trackInteractionEvent("video", "play", e), r !== "success") {
                    i();
                    ek$i.error("videoya bir şeyler olmuş. yükleyemiyoruz.");
                    return
                }
                f.remove();
                t.append(n)
            }),
            !1
        })
    }
    function r(t) {
        n("#schedule-video").videoAutoComplete({
            select: function (n, i) {
                t.find("input[name=videoId]").val(i.item.Id)
            }
        })
    }
    function f(n) {
        if (n.length !== 0) {
            u(n);
            n.find(".show-others").on("click", function () {
                n.find("#other-videos").toggle()
            })
        }
    }
    function e(i) {
        i.length !== 0 && n.each(i, function (i, r) {
            const u = n(r);
            u.on("click.clickToPlay", function () {
                u.parent().addClass("click-to-play-clicked");
                const n = u.data("videouri"),
                i = u.data("playerid");
                n !== t && u.replaceWith(`<iframe id="${i}" src="${n}" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`)
            })
        })
    }
    ek$i.video = {
        setupNewTopicVideoForm: function () {
            const t = n("#new-topic-video-form");
            r(t);
            t.setupScheduleSelectors()
        },
        setupNewSplashVideoForm: function () {
            const t = n("#new-splash-video-form");
            r(t);
            t.setupScheduleSelectors()
        },
        setupEditTopicVideoForm: function () {
            n("#edit-topic-video-form").setupScheduleSelectors()
        },
        setupEditSplashVideoForm: function () {
            n("#edit-splash-video-form").setupScheduleSelectors()
        }
    };
    n(document).ready(function () {
        f(n("#videos"));
        e(n(".click-to-play"))
    })
}
(jQuery), function (n) {
    n(function () {
        n(".nick-list form").submit(function () {
            const t = n(this),
            i = t.find("button");
            return i.prop("disabled", !0),
            n.post(t.prop("action"), t.serialize()).done(function () {
                ek$i.success("başarıyla oldu!");
                t.parents("li").slideUp(function () {
                    n(this).remove()
                })
            }).always(function () {
                i.prop("disabled", !1)
            }),
            !1
        })
    })
}
(jQuery)
