(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    6601: () => {},
    6423: (a, e, t) => {
      Promise.resolve().then(t.t.bind(t, 9593, 23)),
        Promise.resolve().then(t.bind(t, 8726)),
        Promise.resolve().then(t.t.bind(t, 2399, 23)),
        Promise.resolve().then(t.bind(t, 7899)),
        Promise.resolve().then(t.bind(t, 9819)),
        Promise.resolve().then(t.bind(t, 4236)),
        Promise.resolve().then(t.bind(t, 7056));
    },
    3235: (a, e, t) => {
      "use strict";
      t.d(e, { Z: () => d });
      var i = t(7437),
        n = t(8733),
        o = t(9805),
        r = t(4724),
        l = t(2265),
        s = t(6546),
        c = t.n(s);
      function d(a) {
        let {
            children: e,
            delay: t = 0.25,
            duration: s = 0.5,
            scaleOnHover: d = !1,
            width: v = "100%",
          } = a,
          g = (0, l.useRef)(null),
          f = (0, n.Y)(g, { once: !0 }),
          _ = (0, o._)();
        return (
          (0, l.useEffect)(() => {
            f && _.start("visible");
          }, [f]),
          (0, i.jsx)("div", {
            ref: g,
            style: {
              position: "relative",
              width: v,
              overflow: "hidden",
              height: "100%",
            },
            className: "".concat(d && c().scaleOnHover),
            children: (0, i.jsx)(r.E.div, {
              style: {
                position: "relative",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              variants: {
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              },
              initial: "hidden",
              animate: _,
              transition: { duration: s, delay: t },
              children: e,
            }),
          })
        );
      }
    },
    7899: (a, e, t) => {
      "use strict";
      t.d(e, { default: () => c });
      var i = t(7437),
        n = t(2265),
        o = t(1910),
        r = t(6322),
        l = t(5442),
        s = t(1303);
      function c(a) {
        let { children: e } = a,
          t = l.Q.Mainnet,
          c = (0, n.useMemo)(() => [], [t]);
        return (0, i.jsx)(o.U, {
          endpoint: "".concat(
            "https://solana-mainnet.core.chainstack.com/3c60ad087debfc232f4e2e247719e356"
          ),
          children: (0, i.jsx)(r.n, {
            wallets: c,
            autoConnect: !0,
            children: (0, i.jsx)(s.s, { children: e }),
          }),
        });
      }
      t(8508);
    },
    9819: (a, e, t) => {
      "use strict";
      t.d(e, { default: () => h });
      var i = t(7437),
        n = t(1711),
        o = t.n(n);
      let r = { src: "./images/footer.5621c5c7.webp" },
        l = { src: "./images/footer-heart.f8660406.webp" },
        s = { src: "./images/footer-telegram.e774c487.png" },
        c = { src: "./images/footer-twitter.15fd53a8.png" },
        d = { src: "./images/footer-dexscreener.d0a7f147.png" };
      var v = t(7138),
        g = t(3235),
        f = t(6648),
        _ = t(8948);
      function h() {
        return (0, i.jsx)("footer", {
          className: "".concat(o().footerContainer),
          style: {
            backgroundImage: "url(".concat(r.src, ")"),
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
          children: (0, i.jsx)(g.Z, {
            duration: 0.4,
            delay: 0.1,
            children: (0, i.jsxs)("div", {
              className: o().footerContent,
              children: [
                (0, i.jsx)(f.default, {
                  src: _.Z.src,
                  className: o().footerJoiWording,
                  alt: "joiWording",
                  width: 30,
                  height: 30,
                }),
                (0, i.jsx)("div", {
                  className: o().footerHeartContainer,
                  children: (0, i.jsx)(f.default, {
                    src: l.src,
                    alt: "footerHeart",
                    width: 80,
                    height: 80,
                  }),
                }),
                (0, i.jsx)("div", { className: o().footerSocialDivider }),
                (0, i.jsxs)("div", {
                  className: o().footerSocialsContainer,
                  children: [
                    (0, i.jsx)(v.default, {
                      href: "https://x.com/MyJoi_Ai",
                      target: "_blank",
                      children: (0, i.jsx)(f.default, {
                        src: c.src,
                        alt: "footerTwitter",
                        width: 30,
                        height: 30,
                      }),
                    }),
                  ],
                }),
                "Copyright of Wallace Corp. All Rights Reserved.",
              ],
            }),
          }),
        });
      }
    },
    4236: (a, e, t) => {
      "use strict";
      t.d(e, { default: () => p });
      var i,
        n,
        o = t(7437),
        r = t(3154),
        l = t.n(r),
        s = t(7138),
        c = t(2265),
        d = t(8097),
        v = t.n(d);
      function g(a) {
        return (0, o.jsx)("div", {
          className: v().itemPillContainer,
          style: {
            backgroundColor: (null == a ? void 0 : a.backgroundColor)
              ? a.backgroundColor
              : "white",
            color: (null == a ? void 0 : a.color) ? a.color : "#121212",
            fontSize: (null == a ? void 0 : a.fontSize) ? a.fontSize : "1rem",
          },
          children: null == a ? void 0 : a.title.toLowerCase(),
        });
      }
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (a) {
              for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var i in t)
                  ({}).hasOwnProperty.call(t, i) && (a[i] = t[i]);
              }
              return a;
            }).apply(null, arguments);
      }
      let _ = function (a) {
        return c.createElement(
          "svg",
          f(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
            },
            a
          ),
          i ||
            (i = c.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1",
              clipRule: "evenodd",
            }))
        );
      };
      function h() {
        return (h = Object.assign
          ? Object.assign.bind()
          : function (a) {
              for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var i in t)
                  ({}).hasOwnProperty.call(t, i) && (a[i] = t[i]);
              }
              return a;
            }).apply(null, arguments);
      }
      let u = function (a) {
        return c.createElement(
          "svg",
          h(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
            },
            a
          ),
          n ||
            (n = c.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "m6 6 12 12m0-12L6 18",
            }))
        );
      };
      var m = t(6463),
        B = t(8948),
        b = t(6648);
      function p() {
        let [a, e] = (0, c.useState)(0),
          [t, i] = (0, c.useState)(0),
          [n, r] = (0, c.useState)(0),
          d = (0, m.useSelectedLayoutSegment)(),
          [v, f] = (0, c.useState)(!1),
          h = () => {
            e(window.scrollY);
          };
        (0, c.useEffect)(
          () => (
            window.addEventListener("scroll", h),
            () => {
              window.removeEventListener("scroll", h);
            }
          )
        ),
          (0, c.useEffect)(() => {
            let e = a / 150;
            e < 2 && (i(e), r(0.1 * e));
          }, [a]);
        let p = [
          { title: "Twitter", link: "https://x.com/MyJoi_Ai", newTab: !0 },
        ];
        return (0, o.jsxs)("div", {
          className: l().navigationBarOverallContainer,
          style: {
            background: "rgba(0, 0, 0, ".concat(t, ")"),
            boxShadow: "rgb(0 0 0 / ".concat(n, ") 0px 0px 20px 6px"),
          },
          children: [
            (0, o.jsxs)("div", {
              className: ""
                .concat(l().navigationBarContainer, " ")
                .concat(v && l().navigationBarContainerOpen),
              children: [
                (0, o.jsxs)("div", {
                  className: l().navigationBarContent,
                  children: [
                    (0, o.jsx)(s.default, {
                      href: "/",
                      className: l().navigationBarLogo,
                      children: (0, o.jsx)(b.default, {
                        src: B.Z.src,
                        className: l().navigationBarLogoIcon,
                        alt: "joiWording",
                        width: 30,
                        height: 30,
                        priority: !0,
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className: l().navigationBarLinksContainer,
                      children: p.map((a, e) =>
                        a.disabled
                          ? (0, o.jsxs)(
                              "div",
                              {
                                className: ""
                                  .concat(l().navigationBarLinksItem, " ")
                                  .concat(l().navigationBarLinksItemDisabled),
                                children: [
                                  a.title,
                                  (0, o.jsx)(g, {
                                    title: "soon",
                                    backgroundColor: "#7d839866",
                                    color: "#7d8398",
                                    fontSize: "13px",
                                  }),
                                ],
                              },
                              e
                            )
                          : (0, o.jsx)(
                              s.default,
                              {
                                className: "".concat(
                                  l().navigationBarLinksItem
                                ),
                                href: a.link,
                                target: a.newTab ? "_blank" : void 0,
                                children: a.title,
                              },
                              a.link
                            )
                      ),
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: l().navigationBarContainerMobile,
                  children: (0, o.jsx)("div", {
                    className: l().navigationBarMenuButtonContainer,
                    onClick: () => f(!v),
                    children: v
                      ? (0, o.jsx)(u, { color: "#fefefe" })
                      : (0, o.jsx)(_, { color: "#fefefe" }),
                  }),
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: ""
                .concat(l().navigationBarModalContainerMobile, " ")
                .concat(v && l().navigationBarModalContainerMobileOpen),
              children: p.map((a, e) =>
                a.disabled
                  ? (0, o.jsxs)(
                      "div",
                      {
                        className: ""
                          .concat(l().navigationBarModalItemMobile, " ")
                          .concat(l().navigationBarModalItemMobileDisabled),
                        children: [
                          a.title,
                          (0, o.jsx)(g, {
                            title: "soon",
                            backgroundColor: "#fe7c011a",
                            color: "#fe7c01",
                            fontSize: "0.7rem",
                          }),
                        ],
                      },
                      e
                    )
                  : (0, o.jsx)(
                      s.default,
                      {
                        className: ""
                          .concat(l().navigationBarModalItemMobile, "  ")
                          .concat(
                            d === a.title.toLowerCase() &&
                              l().navigationBarModalItemMobileActive
                          ),
                        href: a.link,
                        target: a.newTab ? "_blank" : void 0,
                        onClick: () => f(!1),
                        children: a.title,
                      },
                      a.link
                    )
              ),
            }),
          ],
        });
      }
    },
    7056: (a, e, t) => {
      "use strict";
      t.d(e, { default: () => n });
      var i = t(2265);
      let n = () => (
        (0, i.useEffect)(() => {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "instant" });
          }, 0);
        }, []),
        null
      );
    },
    2399: () => {},
    6546: (a) => {
      a.exports = {
        scaleOnHover: "Animation_scaleOnHover__9UjZG",
        appear: "Animation_appear__r29nP",
      };
    },
    1711: (a) => {
      a.exports = {
        footerContainer: "footer_footerContainer__tv6GM",
        footerContent: "footer_footerContent__2XI0P",
        footerJoiWording: "footer_footerJoiWording__8XCEz",
        footerHeartContainer: "footer_footerHeartContainer__RE8f5",
        footerSocialDivider: "footer_footerSocialDivider__E6xwM",
        footerSocialsContainer: "footer_footerSocialsContainer__M3evc",
        appear: "footer_appear__A56EZ",
      };
    },
    8097: (a) => {
      a.exports = {
        itemPillContainer: "ItemPill_itemPillContainer__2LEUa",
        appear: "ItemPill_appear__zNywP",
      };
    },
    3154: (a) => {
      a.exports = {
        navigationBarOverallContainer:
          "NavigationBar_navigationBarOverallContainer__zhQ4z",
        navigationBarContainer: "NavigationBar_navigationBarContainer__3gipB",
        navigationBarContent: "NavigationBar_navigationBarContent__l5oZO",
        campaignNavigationBarLogoIcon:
          "NavigationBar_campaignNavigationBarLogoIcon__7DGfM",
        navigationBarLogo: "NavigationBar_navigationBarLogo__rvNiG",
        navigationBarLogoIcon: "NavigationBar_navigationBarLogoIcon__8_B7u",
        navigationBarLinksContainer:
          "NavigationBar_navigationBarLinksContainer__enMyR",
        navigationBarLinksItem: "NavigationBar_navigationBarLinksItem__GTeF6",
        navigationBarLinksItemIcon:
          "NavigationBar_navigationBarLinksItemIcon__ba2eF",
        navigationBarLinksItemDisabled:
          "NavigationBar_navigationBarLinksItemDisabled__ETuie",
        navigationBarLinksItemActive:
          "NavigationBar_navigationBarLinksItemActive__6reEE",
        navigationBarRight: "NavigationBar_navigationBarRight__vk5zr",
        navigationBarConnectWallet:
          "NavigationBar_navigationBarConnectWallet__gBKzz",
        navigationBarModalContainerMobile:
          "NavigationBar_navigationBarModalContainerMobile__woV2_",
        navigationBarContainerMobile:
          "NavigationBar_navigationBarContainerMobile__zcJ1i",
        navigationBarMenuButtonContainer:
          "NavigationBar_navigationBarMenuButtonContainer__8raI9",
        navigationBarContainerOpen:
          "NavigationBar_navigationBarContainerOpen__Xubs1",
        navigationBarModalContainerMobileOpen:
          "NavigationBar_navigationBarModalContainerMobileOpen__cRJnZ",
        navigationBarWalletContainerMobile:
          "NavigationBar_navigationBarWalletContainerMobile__xfyMT",
        navigationBarModalItemMobile:
          "NavigationBar_navigationBarModalItemMobile__WGcqP",
        navigationBarModalItemMobileDisabled:
          "NavigationBar_navigationBarModalItemMobileDisabled__4lJja",
        navigationBarModalItemMobileActive:
          "NavigationBar_navigationBarModalItemMobileActive__J9GTF",
        appear: "NavigationBar_appear__m1NPD",
      };
    },
    8948: (a, e, t) => {
      "use strict";
      t.d(e, { Z: () => i });
      let i = {
        src: "./images/joi-wording.95176bd4.webp",
        height: 642,
        width: 1746,
        blurDataURL:
          "data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAACJQrK9aKclDuR8eqO1mN67fIPLvrZYAFZQOCBWAAAAkAIAnQEqCAADAAJAOCWwAnS6AfgAgCsFpVXz6AAA/uz3TrYxIWS81D+fzju0YzDUpJGXQ7b/8xXtf8pQqULHPT/Jvzzf/JpbVNcUG6+4w/+DfyAAAAA=",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
  },
  (a) => {
    var e = (e) => a((a.s = e));
    a.O(0, [154, 522, 814, 648, 726, 626, 110, 803, 130, 215, 744], () =>
      e(6423)
    ),
      (_N_E = a.O());
  },
]);
