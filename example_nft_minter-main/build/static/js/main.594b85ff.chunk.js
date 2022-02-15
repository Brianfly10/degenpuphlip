(this.webpackJsonpfrontend_base_dapp =
  this.webpackJsonpfrontend_base_dapp || []).push([
  [0],
  {
    217: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]'
      );
    },
    243: function (e, t) {},
    266: function (e, t) {},
    268: function (e, t) {},
    345: function (e, t) {},
    347: function (e, t) {},
    380: function (e, t) {},
    385: function (e, t) {},
    387: function (e, t) {},
    394: function (e, t) {},
    407: function (e, t) {},
    430: function (e, t) {},
    439: function (e, t) {},
    441: function (e, t) {},
    511: function (e, t, n) {},
    512: function (e, t, n) {},
    513: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        i,
        r,
        s,
        o,
        u,
        p,
        c,
        l,
        d,
        y,
        b,
        m,
        f = n(1),
        x = n(83),
        h = n.n(x),
        g = n(117),
        j = n(16),
        O = n(56),
        w = n(18),
        T = n.n(w),
        v = n(67),
        C = n(66),
        M = n.n(C),
        k = n(216),
        A = n.n(k),
        _ = n(217),
        S = n(68),
        E = n(218),
        I = n(15),
        N = {
          loading: !1,
          account: null,
          smartContract: null,
          web3: null,
          errorMsg: "",
        },
        U = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : N,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "CONNECTION_REQUEST":
              return Object(I.a)(Object(I.a)({}, N), {}, { loading: !0 });
            case "CONNECTION_SUCCESS":
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                {
                  loading: !1,
                  account: t.payload.account,
                  smartContract: t.payload.smartContract,
                  web3: t.payload.web3,
                }
              );
            case "CONNECTION_FAILED":
              return Object(I.a)(
                Object(I.a)({}, N),
                {},
                { loading: !1, errorMsg: t.payload }
              );
            case "UPDATE_ACCOUNT":
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                { account: t.payload.account }
              );
            default:
              return e;
          }
        },
        F = {
          loading: !1,
          name: "",
          totalSupply: 0,
          cost: 0,
          error: !1,
          errorMsg: "",
        },
        D = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : F,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "CHECK_DATA_REQUEST":
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                { loading: !0, error: !1, errorMsg: "" }
              );
            case "CHECK_DATA_SUCCESS":
              return Object(I.a)(
                Object(I.a)({}, e),
                {},
                {
                  loading: !1,
                  name: t.payload.name,
                  totalSupply: t.payload.totalSupply,
                  cost: t.payload.cost,
                  error: !1,
                  errorMsg: "",
                }
              );
            case "CHECK_DATA_FAILED":
              return Object(I.a)(
                Object(I.a)({}, F),
                {},
                { loading: !1, error: !0, errorMsg: t.payload }
              );
            default:
              return e;
          }
        },
        z = Object(S.b)({ blockchain: U, data: D }),
        B = [E.a],
        P = Object(S.c)(S.a.apply(void 0, B)),
        R = Object(S.d)(z, P),
        W = function (e) {
          return { type: "CHECK_DATA_FAILED", payload: e };
        },
        L = function (e) {
          return (function () {
            var e = Object(v.a)(
              T.a.mark(function e(t) {
                var n, a, i;
                return T.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t({ type: "CHECK_DATA_REQUEST" }),
                            (e.prev = 1),
                            (e.next = 4),
                            R.getState()
                              .blockchain.smartContract.methods.name()
                              .call()
                          );
                        case 4:
                          return (
                            (n = e.sent),
                            (e.next = 7),
                            R.getState()
                              .blockchain.smartContract.methods.totalSupply()
                              .call()
                          );
                        case 7:
                          return (
                            (a = e.sent),
                            (e.next = 10),
                            R.getState()
                              .blockchain.smartContract.methods.cost()
                              .call()
                          );
                        case 10:
                          (i = e.sent),
                            t({
                              type: "CHECK_DATA_SUCCESS",
                              payload: { name: n, totalSupply: a, cost: i },
                            }),
                            (e.next = 18);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(1)),
                            console.log(e.t0),
                            t(W("Could not load data from contract."));
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 14]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        H = function (e) {
          return { type: "CONNECTION_FAILED", payload: e };
        },
        K = function (e) {
          return (function () {
            var t = Object(v.a)(
              T.a.mark(function t(n) {
                return T.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        n({ type: "UPDATE_ACCOUNT", payload: { account: e } }),
                          n(L());
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Q = n(17),
        q = Q.a.div(
          a ||
            (a = Object(j.a)([
              "\n  background-color: var(--dark-grey);\n  background-image: ",
              ";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n",
            ])),
          function (e) {
            var t = e.image;
            return t ? "url(".concat(t, ")") : "none";
          }
        ),
        J = Q.a.div(
          i || (i = Object(j.a)(["\n  height: 8px;\n  width: 8px;\n"]))
        ),
        Y = Q.a.div(
          r || (r = Object(j.a)(["\n  height: 16px;\n  width: 16px;\n"]))
        ),
        G = Q.a.div(
          s || (s = Object(j.a)(["\n  height: 24px;\n  width: 24px;\n"]))
        ),
        V =
          (Q.a.div(
            o || (o = Object(j.a)(["\n  height: 32px;\n  width: 32px;\n"]))
          ),
          Q.a.div(
            u ||
              (u = Object(j.a)([
                "\n  display: flex;\n  flex: ",
                ";\n  flex-direction: ",
                ";\n  justify-content: ",
                ";\n  align-items: ",
                ";\n  background-color: ",
                ";\n  width: 100%;\n  background-image: ",
                ";\n  background-size: cover;\n  background-position: center;\n",
              ])),
            function (e) {
              var t = e.flex;
              return t || 0;
            },
            function (e) {
              var t = e.fd;
              return t || "column";
            },
            function (e) {
              var t = e.jc;
              return t || "flex-start";
            },
            function (e) {
              var t = e.ai;
              return t || "flex-start";
            },
            function (e) {
              return e.test ? "pink" : "none";
            },
            function (e) {
              var t = e.image;
              return t ? "url(".concat(t, ")") : "none";
            }
          )),
        X = Q.a.p(
          p ||
            (p = Object(j.a)([
              "\n  color: var(--white);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n",
            ]))
        ),
        Z =
          (Q.a.p(
            c ||
              (c = Object(j.a)([
                "\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n",
              ]))
          ),
          Q.a.p(
            l ||
              (l = Object(j.a)([
                "\n  color: var(--white);\n  font-size: 12px;\n  line-height: 1.6;\n",
              ]))
          )),
        $ =
          (Q.a.div(
            d || (d = Object(j.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))
          ),
          n.p + "static/media/1.00beed9c.png"),
        ee = n(7),
        te = Q.a.button(
          y ||
            (y = Object(j.a)([
              "\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  padding: 10px;\n  font-weight: bold;\n  color: #000000;\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n",
            ]))
        ),
        ne = Q.a.div(
          b ||
            (b = Object(j.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n",
            ]))
        ),
        ae = Q.a.img(
          m ||
            (m = Object(j.a)([
              "\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 350px;\n    height: 350px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n",
            ]))
        );
      var ie = function () {
          var e = Object(O.b)(),
            t = Object(O.c)(function (e) {
              return e.blockchain;
            }),
            n = Object(O.c)(function (e) {
              return e.data;
            }),
            a = Object(f.useState)("Maybe it's your lucky day."),
            i = Object(g.a)(a, 2),
            r = i[0],
            s = i[1],
            o = Object(f.useState)(!1),
            u = Object(g.a)(o, 2),
            p = u[0],
            c = u[1],
            l = function () {
              "" !== t.account && null !== t.smartContract && e(L(t.account));
            };
          return (
            Object(f.useEffect)(
              function () {
                l();
              },
              [t.account]
            ),
            Object(ee.jsx)(q, {
              style: { backgroundColor: "var(--black)" },
              children: Object(ee.jsxs)(V, {
                flex: 1,
                ai: "center",
                style: { padding: 24 },
                children: [
                  Object(ee.jsx)(X, {
                    style: {
                      textAlign: "center",
                      fontSize: 28,
                      fontWeight: "bold",
                    },
                    children: "Mint a Degen Sanctuary Pup",
                  }),
                  Object(ee.jsx)(G, {}),
                  Object(ee.jsxs)(ne, {
                    flex: 1,
                    style: { padding: 24 },
                    children: [
                      Object(ee.jsxs)(V, {
                        flex: 1,
                        jc: "center",
                        ai: "center",
                        children: [
                          Object(ee.jsx)(ae, { alt: "example", src: $ }),
                          Object(ee.jsx)(G, {}),
                          Object(ee.jsxs)(X, {
                            style: {
                              textAlign: "center",
                              fontSize: 35,
                              fontWeight: "bold",
                            },
                            children: [n.totalSupply, "/1000"],
                          }),
                        ],
                      }),
                      Object(ee.jsx)(G, {}),
                      Object(ee.jsx)(V, {
                        flex: 1,
                        jc: "center",
                        ai: "center",
                        style: { backgroundColor: "#383838", padding: 24 },
                        children:
                          1e3 == Number(n.totalSupply)
                            ? Object(ee.jsxs)(ee.Fragment, {
                                children: [
                                  Object(ee.jsx)(X, {
                                    style: { textAlign: "center" },
                                    children: "The sale has ended.",
                                  }),
                                  Object(ee.jsx)(Y, {}),
                                  Object(ee.jsxs)(Z, {
                                    style: { textAlign: "center" },
                                    children: [
                                      "You can still find Degen Sanctuary Pups on",
                                      " ",
                                      Object(ee.jsx)("a", {
                                        target: "_blank",
                                        href: "https://opensea.io/collection/nerdy-coder-clones",
                                        children: "Opensea.io",
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : Object(ee.jsxs)(ee.Fragment, {
                                children: [
                                  Object(ee.jsx)(X, {
                                    style: { textAlign: "center" },
                                    children: "1 NCC costs 100 MATIC.",
                                  }),
                                  Object(ee.jsx)(J, {}),
                                  Object(ee.jsx)(Z, {
                                    style: { textAlign: "center" },
                                    children: "Excluding gas fee.",
                                  }),
                                  Object(ee.jsx)(Y, {}),
                                  Object(ee.jsx)(Z, {
                                    style: { textAlign: "center" },
                                    children: r,
                                  }),
                                  Object(ee.jsx)(G, {}),
                                  "" === t.account || null === t.smartContract
                                    ? Object(ee.jsxs)(V, {
                                        ai: "center",
                                        jc: "center",
                                        children: [
                                          Object(ee.jsx)(Z, {
                                            style: { textAlign: "center" },
                                            children:
                                              "Connect to the Polygon network",
                                          }),
                                          Object(ee.jsx)(Y, {}),
                                          Object(ee.jsx)(te, {
                                            onClick: function (t) {
                                              t.preventDefault(),
                                                e(
                                                  (function () {
                                                    var e = Object(v.a)(
                                                      T.a.mark(function e(t) {
                                                        var n, a, i, r, s;
                                                        return T.a.wrap(
                                                          function (e) {
                                                            for (;;)
                                                              switch (
                                                                (e.prev =
                                                                  e.next)
                                                              ) {
                                                                case 0:
                                                                  if (
                                                                    (t({
                                                                      type: "CONNECTION_REQUEST",
                                                                    }),
                                                                    (n =
                                                                      window),
                                                                    !(a =
                                                                      n.ethereum) ||
                                                                      !a.isMetaMask)
                                                                  ) {
                                                                    e.next = 21;
                                                                    break;
                                                                  }
                                                                  return (
                                                                    M.a.setProvider(
                                                                      a
                                                                    ),
                                                                    (i =
                                                                      new A.a(
                                                                        a
                                                                      )),
                                                                    (e.prev = 6),
                                                                    (e.next = 9),
                                                                    a.request({
                                                                      method:
                                                                        "eth_requestAccounts",
                                                                    })
                                                                  );
                                                                case 9:
                                                                  return (
                                                                    (r =
                                                                      e.sent),
                                                                    (e.next = 12),
                                                                    a.request({
                                                                      method:
                                                                        "net_version",
                                                                    })
                                                                  );
                                                                case 12:
                                                                  137 == e.sent
                                                                    ? ((s =
                                                                        new M.a(
                                                                          _,
                                                                          "0x827acb09a2dc20e39c9aad7f7190d9bc53534192"
                                                                        )),
                                                                      t({
                                                                        type: "CONNECTION_SUCCESS",
                                                                        payload:
                                                                          {
                                                                            account:
                                                                              r[0],
                                                                            smartContract:
                                                                              s,
                                                                            web3: i,
                                                                          },
                                                                      }),
                                                                      a.on(
                                                                        "accountsChanged",
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          t(
                                                                            K(
                                                                              e[0]
                                                                            )
                                                                          );
                                                                        }
                                                                      ),
                                                                      a.on(
                                                                        "chainChanged",
                                                                        function () {
                                                                          window.location.reload();
                                                                        }
                                                                      ))
                                                                    : t(
                                                                        H(
                                                                          "Change network to Polygon."
                                                                        )
                                                                      ),
                                                                    (e.next = 19);
                                                                  break;
                                                                case 16:
                                                                  (e.prev = 16),
                                                                    (e.t0 =
                                                                      e.catch(
                                                                        6
                                                                      )),
                                                                    t(
                                                                      H(
                                                                        "Something went wrong."
                                                                      )
                                                                    );
                                                                case 19:
                                                                  e.next = 22;
                                                                  break;
                                                                case 21:
                                                                  t(
                                                                    H(
                                                                      "Install Metamask."
                                                                    )
                                                                  );
                                                                case 22:
                                                                case "end":
                                                                  return e.stop();
                                                              }
                                                          },
                                                          e,
                                                          null,
                                                          [[6, 16]]
                                                        );
                                                      })
                                                    );
                                                    return function (t) {
                                                      return e.apply(
                                                        this,
                                                        arguments
                                                      );
                                                    };
                                                  })()
                                                ),
                                                l();
                                            },
                                            children: "CONNECT",
                                          }),
                                          "" !== t.errorMsg
                                            ? Object(ee.jsxs)(ee.Fragment, {
                                                children: [
                                                  Object(ee.jsx)(Y, {}),
                                                  Object(ee.jsx)(Z, {
                                                    style: {
                                                      textAlign: "center",
                                                    },
                                                    children: t.errorMsg,
                                                  }),
                                                ],
                                              })
                                            : null,
                                        ],
                                      })
                                    : Object(ee.jsx)(V, {
                                        ai: "center",
                                        jc: "center",
                                        fd: "row",
                                        children: Object(ee.jsx)(te, {
                                          disabled: p ? 1 : 0,
                                          onClick: function (n) {
                                            var a;
                                            n.preventDefault(),
                                              (a = 1) <= 0 ||
                                                (s(
                                                  "Minting your Degen Sanctuary Pup..."
                                                ),
                                                c(!0),
                                                t.smartContract.methods
                                                  .mint(t.account, a)
                                                  .send({
                                                    gasLimit: "285000",
                                                    to: "0x827acb09a2dc20e39c9aad7f7190d9bc53534192",
                                                    from: t.account,
                                                    value: t.web3.utils.toWei(
                                                      (100 * a).toString(),
                                                      "ether"
                                                    ),
                                                  })
                                                  .once("error", function (e) {
                                                    console.log(e),
                                                      s(
                                                        "Sorry, something went wrong please try again later."
                                                      ),
                                                      c(!1);
                                                  })
                                                  .then(function (n) {
                                                    s(
                                                      "WOW, you now own a Degen Sanctuary Pup. go visit Opensea.io to view it."
                                                    ),
                                                      c(!1),
                                                      e(L(t.account));
                                                  })),
                                              l();
                                          },
                                          children: p ? "BUSY" : "BUY 1",
                                        }),
                                      }),
                                ],
                              }),
                      }),
                    ],
                  }),
                  Object(ee.jsx)(Y, {}),
                  Object(ee.jsxs)(V, {
                    jc: "center",
                    ai: "center",
                    style: { width: "70%" },
                    children: [
                      Object(ee.jsx)(Z, {
                        style: { textAlign: "center", fontSize: 9 },
                        children:
                          "Please make sure you are connected to the right network (Polygon Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action.",
                      }),
                      Object(ee.jsx)(Y, {}),
                      Object(ee.jsx)(Z, {
                        style: { textAlign: "center", fontSize: 9 },
                        children:
                          "We have set the gas limit to 285000 for the contract to successfully mint your NFT. We recommend that you don't change the gas limit.",
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        re = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 517))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  i = t.getFCP,
                  r = t.getLCP,
                  s = t.getTTFB;
                n(e), a(e), i(e), r(e), s(e);
              });
        };
      n(511), n(512);
      h.a.render(
        Object(ee.jsx)(O.a, { store: R, children: Object(ee.jsx)(ie, {}) }),
        document.getElementById("root")
      ),
        re();
    },
  },
  [[513, 1, 2]],
]);
//# sourceMappingURL=main.594b85ff.chunk.js.map
