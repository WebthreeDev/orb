(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [13], {
        695: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "default", (function() {
                return ve
            }));
            var r = t(8),
                c = t(50),
                a = t(0),
                i = t(2),
                s = t(37),
                u = t(172),
                o = t(177),
                j = t(3),
                b = t.n(j),
                l = t(12),
                d = t(20),
                f = t(64),
                O = t(5),
                p = t.n(O),
                x = t(693),
                h = t(670),
                m = t(13),
                g = t(31),
                v = t(38),
                w = t(71),
                k = t(669),
                y = t(131),
                z = function() {
                    var e = Object(a.useState)([]),
                        n = Object(d.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        c = Object(f.m)().account,
                        i = Object(y.a)().fastRefresh;
                    return Object(a.useEffect)((function() {
                        c && function() {
                            var e = Object(l.a)(b.a.mark((function e() {
                                var n, t, a;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = k.a.map((function(e) {
                                                return {
                                                    address: Object(v.d)(),
                                                    name: "pendingGETH",
                                                    params: [e.pid, c]
                                                }
                                            })), e.next = 3, Object(g.a)(w, n);
                                        case 3:
                                            t = e.sent, a = k.a.map((function(e, n) {
                                                return Object(m.a)(Object(m.a)({}, e), {}, {
                                                    balance: new p.a(t[n])
                                                })
                                            })), r(a);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                    }), [c, i]), t
                },
                S = t(671),
                E = t(679),
                G = function(e) {
                    var n = e.value,
                        t = e.decimals,
                        c = e.fontSize,
                        i = void 0 === c ? "40px" : c,
                        u = e.prefix,
                        o = Object(E.useCountUp)({
                            start: 0,
                            end: n,
                            duration: 1,
                            separator: ",",
                            decimals: void 0 !== t ? t : n < 0 ? 4 : n > 1e5 ? 0 : 3
                        }),
                        j = o.countUp,
                        b = o.update,
                        l = Object(a.useRef)(b);
                    return Object(a.useEffect)((function() {
                        l.current(n)
                    }), [n, l]), Object(r.jsxs)(s.z, {
                        bold: !0,
                        fontSize: i,
                        children: [u, j]
                    })
                },
                T = function(e) {
                    var n = e.earningsSum,
                        t = Object(u.a)();
                    return Object(f.m)().account ? Object(r.jsx)(G, {
                        value: n
                    }) : Object(r.jsx)(s.d, {
                        size: "sm",
                        style: {
                            height: "2rem"
                        },
                        children: t(298, "Locked")
                    })
                },
                B = function(e) {
                    var n = e.cakeBalance,
                        t = Object(u.a)();
                    return Object(f.m)().account ? Object(r.jsx)(G, {
                        value: n,
                        fontSize: "24px"
                    }) : Object(r.jsx)(s.d, {
                        size: "sm",
                        style: {
                            height: "2rem"
                        },
                        children: t(298, "Locked")
                    })
                },
                C = t(109),
                R = t(268),
                N = t(84),
                Q = t(672),
                F = function(e) {
                    var n = Object(a.useState)(new p.a(0)),
                        t = Object(d.a)(n, 2),
                        r = t[0],
                        c = t[1],
                        i = Object(f.m)(),
                        s = i.account,
                        u = i.ethereum,
                        o = Object(y.a)().fastRefresh;
                    return Object(a.useEffect)((function() {
                        s && u && function() {
                            var n = Object(l.a)(b.a.mark((function n() {
                                var t;
                                return b.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Object(Q.b)(u, e, s);
                                        case 2:
                                            t = n.sent, c(new p.a(t));
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }()()
                    }), [s, u, e, o]), r
                },
                I = function() {
                    var e = Object(a.useState)([]),
                        n = Object(d.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        c = Object(f.m)().account,
                        i = Object(y.a)().fastRefresh;
                    return Object(a.useEffect)((function() {
                        c && function() {
                            var e = Object(l.a)(b.a.mark((function e() {
                                var n, t;
                                return b.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = k.a.map((function(e) {
                                                return {
                                                    address: Object(v.d)(),
                                                    name: "pendingGETH",
                                                    params: [e.pid, c]
                                                }
                                            })), e.next = 3, Object(g.a)(w, n);
                                        case 3:
                                            t = e.sent, r(t);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()()
                    }), [c, i]), t
                },
                L = t(660);

            function $() {
                var e = Object(c.a)(["\n  ", " {\n    display: block;\n  }\n  display: none;\n"]);
                return $ = function() {
                    return e
                }, e
            }

            function A() {
                var e = Object(c.a)(["\n  margin-top: 24px;\n  // background: grey;\n"]);
                return A = function() {
                    return e
                }, e
            }

            function D() {
                var e = Object(c.a)(["\n  color: ", ";\n  font-size: 1rem;\n  font-weight: 700;\n"]);
                return D = function() {
                    return e
                }, e
            }

            function H() {
                var e = Object(c.a)(["\n  margin-bottom: 16px;\n"]);
                return H = function() {
                    return e
                }, e
            }

            function P() {
                var e = Object(c.a)(["\n  //margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  min-width: 18rem;\n"]);
                return P = function() {
                    return e
                }, e
            }

            function V() {
                var e = Object(c.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  height: 25.5rem;\n  border-radius: 8px;\n"]);
                return V = function() {
                    return e
                }, e
            }
            var W = Object(i.e)(s.h)(V()),
                J = i.e.div(P()),
                M = i.e.img(H()),
                U = i.e.div(D(), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                Y = i.e.div(A()),
                q = Object(i.e)(x.a.div)($(), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                K = function() {
                    var e = Object(a.useState)(!1),
                        n = Object(d.a)(e, 2),
                        t = n[0],
                        c = n[1],
                        i = Object(f.m)().account,
                        o = Object(u.a)(),
                        j = z(),
                        O = Object(L.a)(F(Object(v.a)())),
                        x = Object(C.g)().toNumber(),
                        m = I().reduce((function(e, n) {
                            return e + new p.a(n).div(new p.a(10).pow(18)).toNumber()
                        }), 0),
                        g = j.filter((function(e) {
                            return e.balance.toNumber() > 0
                        })),
                        w = Object(h.a)(g.map((function(e) {
                            return e.pid
                        }))).onReward,
                        k = Object(a.useCallback)(Object(l.a)(b.a.mark((function e() {
                            return b.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c(!0), e.prev = 1, e.next = 4, w();
                                    case 4:
                                        e.next = 8;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1);
                                    case 8:
                                        return e.prev = 8, c(!1), e.finish(8);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6, 8, 11]
                            ])
                        }))), [w]);
                    return Object(r.jsx)(W, {
                        children: Object(r.jsxs)(s.i, {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                justifyContent: "space-evenly"
                            },
                            children: [Object(r.jsx)(s.n, {
                                size: "lg",
                                mb: "24px",
                                children: o(542, "Farms & Staking")
                            }), Object(r.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [Object(r.jsxs)(q, {
                                    initial: {
                                        scale: .9
                                    },
                                    animate: {
                                        scale: 1.1
                                    },
                                    transition: {
                                        ease: "linear",
                                        duration: 2,
                                        repeat: 1 / 0,
                                        repeatType: "reverse"
                                    },
                                    children: [Object(r.jsx)(M, {
                                        src: "/images/GETh.png",
                                        alt: "ORBITRIUM logo",
                                        width: 104,
                                        height: 64
                                    }), " "]
                                }), Object(r.jsxs)("div", {
                                    style: {
                                        height: "7rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    },
                                    children: [Object(r.jsxs)(J, {
                                        children: [Object(r.jsxs)("div", {
                                            children: [Object(r.jsx)(s.z, {
                                                children: o(544, "ORBITRIUM to Harvest")
                                            }), Object(r.jsxs)(U, {
                                                children: ["$", (x * m).toFixed(2)]
                                            })]
                                        }), Object(r.jsx)(T, {
                                            earningsSum: m
                                        })]
                                    }), Object(r.jsxs)(J, {
                                        children: [Object(r.jsxs)("div", {
                                            children: [Object(r.jsx)(s.z, {
                                                children: o(546, "GETh in Wallet")
                                            }), Object(r.jsxs)(U, {
                                                children: ["$", (x * O).toFixed(2)]
                                            })]
                                        }), Object(r.jsx)(B, {
                                            cakeBalance: O
                                        })]
                                    })]
                                })]
                            }), Object(r.jsxs)(Y, {
                                children: [" ", i ? Object(r.jsx)(s.d, {
                                    id: "harvest-all",
                                    disabled: g.length <= 0 || t,
                                    onClick: k,
                                    fullWidth: !0,
                                    children: t ? o(548, "Collecting ORBITRIUM") : o(999, "Harvest all (".concat(g.length, ")"))
                                }) : Object(r.jsx)(S.a, {
                                    fullWidth: !0
                                })]
                            })]
                        })
                    })
                },
                X = t(667);

            function Z() {
                var e = Object(c.a)(["\n  ", " {\n    display: block;\n  }\n  display: none;\n"]);
                return Z = function() {
                    return e
                }, e
            }

            function _() {
                var e = Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function ee() {
                var e = Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 8px;\n"]);
                return ee = function() {
                    return e
                }, e
            }
            var ne = Object(i.e)(s.h)(ee()),
                te = i.e.div(_()),
                re = i.e.div(Z(), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                ce = function() {
                    var e = Object(u.a)(),
                        n = function() {
                            var e = Object(y.a)().slowRefresh,
                                n = Object(a.useState)(),
                                t = Object(d.a)(n, 2),
                                r = t[0],
                                c = t[1];
                            return Object(a.useEffect)((function() {
                                function e() {
                                    return (e = Object(l.a)(b.a.mark((function e() {
                                        var n, t;
                                        return b.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return n = Object(N.a)(R, Object(v.a)()), e.next = 3, n.methods.totalSupply().call();
                                                case 3:
                                                    t = e.sent, c(new p.a(t));
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))).apply(this, arguments)
                                }! function() {
                                    e.apply(this, arguments)
                                }()
                            }), [e]), r
                        }(),
                        t = function(e) {
                            var n = Object(a.useState)(new p.a(0)),
                                t = Object(d.a)(n, 2),
                                r = t[0],
                                c = t[1],
                                i = Object(y.a)().slowRefresh;
                            return Object(a.useEffect)((function() {
                                ! function() {
                                    var e = Object(l.a)(b.a.mark((function e() {
                                        var n, t;
                                        return b.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return n = Object(N.a)(R, Object(v.a)()), e.next = 3, n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                                case 3:
                                                    t = e.sent, c(new p.a(t));
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }()()
                            }), [e, i]), r
                        }(Object(v.a)()),
                        c = Object(C.d)(),
                        i = Object(C.g)(),
                        o = n ? n.minus(t) : new X.a(0),
                        j = Object(L.a)(o),
                        f = i.times(o),
                        O = 0;
                    return c && c[0] && c[0].eggPerBlock && (O = new X.a(c[0].eggPerBlock).div(new X.a(10).pow(18)).toNumber()), Object(r.jsxs)(ne, {
                        children: [Object(r.jsxs)(s.i, {
                            children: [Object(r.jsx)(s.n, {
                                size: "lg",
                                mb: "24px",
                                children: e(534, "GETh Stats")
                            }), Object(r.jsxs)("div", {
                                style: {
                                    width: "18rem"
                                },
                                children: [Object(r.jsxs)(te, {
                                    children: [Object(r.jsx)(s.z, {
                                        fontSize: "14px",
                                        children: e(10005, "Market Cap")
                                    }), Object(r.jsx)(G, {
                                        fontSize: "14px",
                                        value: Object(L.a)(f),
                                        decimals: 0,
                                        prefix: "$"
                                    })]
                                }), Object(r.jsxs)(te, {
                                    children: [Object(r.jsx)(s.z, {
                                        fontSize: "14px",
                                        children: e(536, "Total Minted")
                                    }), n && Object(r.jsx)(G, {
                                        fontSize: "14px",
                                        value: Object(L.a)(n),
                                        decimals: 0
                                    })]
                                }), Object(r.jsxs)(te, {
                                    children: [Object(r.jsx)(s.z, {
                                        fontSize: "14px",
                                        children: e(538, "Total Burned")
                                    }), Object(r.jsx)(G, {
                                        fontSize: "14px",
                                        value: Object(L.a)(t),
                                        decimals: 0
                                    })]
                                }), Object(r.jsxs)(te, {
                                    children: [Object(r.jsx)(s.z, {
                                        fontSize: "14px",
                                        children: e(10004, "Circulating Supply")
                                    }), j && Object(r.jsx)(G, {
                                        fontSize: "14px",
                                        value: j,
                                        decimals: 0
                                    })]
                                }), Object(r.jsxs)(te, {
                                    children: [Object(r.jsx)(s.z, {
                                        fontSize: "14px",
                                        children: e(540, "New ORBITRIUM/block")
                                    }), Object(r.jsx)(s.z, {
                                        bold: !0,
                                        fontSize: "14px",
                                        children: O
                                    })]
                                })]
                            })]
                        }), Object(r.jsx)(re, {
                            children: Object(r.jsx)("img", {
                                src: "/images/hexa.png",
                                alt: "hexa",
                                style: {
                                    width: "5rem",
                                    position: "absolute",
                                    right: "1rem",
                                    bottom: "1rem"
                                }
                            })
                        })]
                    })
                };

            function ae() {
                var e = Object(c.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  border-radius: 8px;\n"]);
                return ae = function() {
                    return e
                }, e
            }
            var ie = Object(i.e)(s.h)(ae()),
                se = function() {
                    var e = Object(u.a)(),
                        n = Object(C.h)();
                    return Object(r.jsx)(ie, {
                        children: Object(r.jsxs)(s.i, {
                            children: [Object(r.jsx)(s.n, {
                                size: "lg",
                                mb: "24px",
                                children: e(999, "Total Value Locked (TVL)")
                            }), Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsx)(s.z, {
                                    color: "textSubtle",
                                    children: e(999, "Across all Farms and Pools")
                                }), Object(r.jsx)(G, {
                                    value: n.toNumber(),
                                    prefix: "$",
                                    decimals: 2
                                })]
                            })]
                        })
                    })
                },
                ue = t(690);

            function oe() {
                var e = Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);
                return oe = function() {
                    return e
                }, e
            }

            function je() {
                var e = Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 8px;\n"]);
                return je = function() {
                    return e
                }, e
            }
            var be = Object(i.e)(s.h)(je()),
                le = (i.e.div(oe()), function() {
                    var e = Object(u.a)();
                    return Object(r.jsx)(be, {
                        children: Object(r.jsxs)(s.i, {
                            children: [Object(r.jsx)(s.n, {
                                size: "lg",
                                mb: "24px",
                                children: e(10003, "BLOG")
                            }), Object(r.jsx)(ue.a, {
                                dataSource: {
                                    sourceType: "profile",
                                    screenName: "VOLTINUAI"
                                },
                                options: {
                                    height: "300",
                                    chrome: "noheader, nofooter",
                                    width: "400"
                                }
                            })]
                        })
                    })
                });

            function de() {
                var e = Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ", " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);
                return de = function() {
                    return e
                }, e
            }

            function fe() {
                var e = Object(c.a)(["\n  background: -webkit-linear-gradient(#8e9eab, #eef2f3);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 4rem;\n  font-weight: bolder;\n"]);
                return fe = function() {
                    return e
                }, e
            }

            function Oe() {
                var e = Object(c.a)(["\n  background: -webkit-linear-gradient(#f12711, #f5af19);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-size: 4rem;\n  font-weight: bolder;\n  font-family: 'Bungee Inline', cursive;\n"]);
                return Oe = function() {
                    return e
                }, e
            }

            function pe() {
                var e = Object(c.a)(["\n  align-items: center;\n  background-image: url('/images/egg/man.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  ", " {\n    padding-top: 116px;\n  }\n  padding-top: 30px;\n  text-align: center;\n\n  ", " {\n    background-image: url('/images/egg/man.png'), url('/images/egg/red.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"]);
                return pe = function() {
                    return e
                }, e
            }
            var xe = i.e.div(pe(), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                he = Object(i.e)(s.n)(Oe()),
                me = i.e.span(fe()),
                ge = Object(i.e)(s.b)(de(), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                })),
                ve = function() {
                    Object(u.a)();
                    return Object(r.jsxs)(o.a, {
                        children: [Object(r.jsxs)(xe, {
                            children: [Object(r.jsxs)(he, {
                                as: "h1",
                                size: "xl",
                                mb: "24px",
                                color: "primary1",
                                children: ["VOLT", Object(r.jsx)(me, {
                                    children: "AI"
                                })]
                            }), Object(r.jsx)(s.z, {
                                color: "primary1"
                            })]
                        }), Object(r.jsx)("div", {
                            children: Object(r.jsxs)(ge, {
                                children: [Object(r.jsx)(K, {}), Object(r.jsx)(le, {}), Object(r.jsx)(ce, {}), Object(r.jsx)(se, {})]
                            })
                        })]
                    })
                }
        }
    }
]);
//# sourceMappingURL=13.5f2140c3.chunk.js.map