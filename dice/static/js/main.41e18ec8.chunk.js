(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        191: function(e, t, n) {
            e.exports = n.p + "static/media/Diceroll.869fdc37.wav"
        },
        310: function(e, t, n) {
            e.exports = n.p + "static/media/ethereum.7c199546.svg"
        },
        311: function(e, t, n) {
            e.exports = n.p + "static/media/binance.214fb488.svg"
        },
        312: function(e, t, n) {
            e.exports = n.p + "static/media/polygon.1087d3d6.svg"
        },
        313: function(e, t, n) {
            e.exports = n.p + "static/media/optimism.6ba88f89.jpg"
        },
        314: function(e, t, n) {
            e.exports = n.p + "static/media/gnosis.dc5772f3.svg"
        },
        315: function(e, t, n) {
            e.exports = n.p + "static/media/avalanche.4e9df24e.svg"
        },
        321: function(e, t, n) {
            e.exports = n.p + "static/media/logo.f1fbf05d.png"
        },
        322: function(e, t, n) {
            e.exports = n.p + "static/media/busd.8705fd81.svg"
        },
        323: function(e, t, n) {
            e.exports = n.p + "static/media/audit2.0ad41aec.png"
        },
        325: function(e, t, n) {
            e.exports = n.p + "static/media/buttonClick.1db22fdc.wav"
        },
        326: function(e, t, n) {
            e.exports = n.p + "static/media/loss.14eb1331.wav"
        },
        327: function(e, t, n) {
            e.exports = n.p + "static/media/win.5da034f0.wav"
        },
        328: function(e, t, n) {
            e.exports = n.p + "static/media/walletConnect.8ec0ff12.svg"
        },
        329: function(e, t, n) {
            e.exports = n.p + "static/media/meta.925c6160.svg"
        },
        330: function(e, t, n) {
            e.exports = n.p + "static/media/Casino.2ba7ce15.mp3"
        },
        356: function(e, t, n) {
            e.exports = n(717)
        },
        362: function(e, t, n) {},
        366: function(e, t, n) {},
        380: function(e, t) {},
        384: function(e, t) {},
        386: function(e, t) {},
        390: function(e, t) {},
        414: function(e, t) {},
        416: function(e, t) {},
        425: function(e, t) {},
        427: function(e, t) {},
        437: function(e, t) {},
        439: function(e, t) {},
        555: function(e, t) {},
        557: function(e, t) {},
        564: function(e, t) {},
        565: function(e, t) {},
        590: function(e, t) {},
        597: function(e, t) {},
        658: function(e, t) {},
        683: function(e, t, n) {},
        684: function(e, t, n) {},
        697: function(e, t, n) {
            e.exports = n.p + "static/media/coinbase.132b85da.svg"
        },
        717: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(1),
                i = n.n(a),
                r = n(71),
                s = n.n(r),
                u = (n(362), n(11)),
                l = n.n(u),
                o = n(28),
                c = n(193),
                p = n(8),
                m = n(86),
                y = n.n(m),
                d = (n(204), n(366), n(48)),
                b = n.n(d),
                f = "0x22d8CE3eDE82C0dcF14bC9BbaB1F08506a309efD",
                x = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "have",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "want",
                        type: "address"
                    }],
                    name: "OnlyCoordinatorCanFulfill",
                    type: "error"
                }, {
                    inputs: [],
                    name: "VRFv2SubscriptionManagerAddress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "betDown",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "betUp",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "betValue",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "busdAddress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "claimWinnings",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "fundChainlinkSubscription",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getBets",
                    outputs: [{
                        components: [{
                            internalType: "uint256",
                            name: "requestId",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "bet",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "dice1Result",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "dice2Result",
                            type: "uint256"
                        }, {
                            internalType: "bool",
                            name: "isWon",
                            type: "bool"
                        }, {
                            internalType: "uint256",
                            name: "createdTime",
                            type: "uint256"
                        }],
                        internalType: "struct DiceRoller.Bet[]",
                        name: "",
                        type: "tuple[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getMaxBetAmount",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getResult",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_address",
                        type: "address"
                    }],
                    name: "getResultByAddress",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getRoundStatus",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_address",
                        type: "address"
                    }],
                    name: "getRoundStatusByAddress",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getTotalFees",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getVRFsubscriptionBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "injectBNB",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "injectBUSD",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "maxBetPercentage",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "minBetAmount",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "minerAddress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "minerFees",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "minerWalletBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "pauseContract",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "paused",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "playerCurrentResult1",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "playerCurrentResult2",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "playerTotalBets",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "playerTotalLost",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "playerTotalWinnings",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "requestId",
                        type: "uint256"
                    }, {
                        internalType: "uint256[]",
                        name: "randomWords",
                        type: "uint256[]"
                    }],
                    name: "rawFulfillRandomWords",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "requesterAddress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "roundStatus",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "s_randomWords",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "s_requestId",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_maxBetPercentage",
                        type: "uint256"
                    }],
                    name: "setMaxBetPercentage",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_minerFees",
                        type: "uint256"
                    }],
                    name: "setMinerFees",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint64",
                        name: "_setSubscriptionId",
                        type: "uint64"
                    }],
                    name: "setSubscriptionId",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalBets",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalBetsLost",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalBetsWon",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalWinnings",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "unclaimedWinning",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "unpauseContract",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "userBet",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "userBets",
                    outputs: [{
                        internalType: "uint256",
                        name: "requestId",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "bet",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "dice1Result",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "dice2Result",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "isWon",
                        type: "bool"
                    }, {
                        internalType: "uint256",
                        name: "createdTime",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "userLostBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdrawBNB",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdrawBUSD",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }],
                w = (n(682), n(683), n(684), n(309), n(142)),
                v = n(42),
                g = n(50),
                T = n(760),
                h = n(757),
                E = n(310),
                k = n.n(E),
                O = n(311),
                M = n.n(O),
                N = n(312),
                j = n.n(N),
                S = n(313),
                B = n.n(S),
                R = n(314),
                C = n.n(R),
                A = n(315),
                W = n.n(A),
                I = [{
                    icon: k.a,
                    name: "Rinkeby",
                    chain: 4,
                    disabled: !1
                }, {
                    icon: M.a,
                    name: "Binance Testnet",
                    chain: 97,
                    disabled: !1
                }, {
                    icon: j.a,
                    name: "Polygon (Matic) Network",
                    chain: 97,
                    disabled: !0
                }, {
                    icon: B.a,
                    name: "Optimism",
                    chain: 97,
                    disabled: !0
                }, {
                    icon: C.a,
                    name: "Gnosis Chain",
                    chain: 97,
                    disabled: !0
                }, {
                    icon: W.a,
                    name: "Avalanche Mainnet",
                    chain: 97,
                    disabled: !0
                }],
                D = function(e) {
                    if (e) return e.length < 1 ? e : b.a.utils.fromWei(e, "ether")
                },
                F = n(316),
                P = n(118),
                _ = n(317),
                U = 12e3,
                L = {
                    56: "https://bsc-dataseed.binance.org/"
                },
                V = new _.a({
                    url: "https://mainnet.infura.io/v3/".concat("84842078b09946638c03157f83405213"),
                    appName: "",
                    supportedChainIds: [56]
                }),
                H = new P.a({
                    rpc: L,
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: !0,
                    pollingInterval: U
                }),
                q = new F.a({
                    supportedChainIds: [56]
                });
            var Y = n(321),
                z = n.n(Y),
                $ = n(761),
                K = n(753),
                J = {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: 600,
                    width: "100%",
                    bgcolor: "transparent",
                    p: 2,
                    zIndex: 2e5
                };

            function G(e) {
                var t = e.open,
                    n = e.setOpen,
                    i = function() {
                        n(!1)
                    };
                return a.createElement("div", null, a.createElement(h.a, {
                    open: t,
                    onClose: i,
                    closeAfterTransition: !0,
                    disableAutoFocus: !0,
                    BackdropComponent: $.a,
                    BackdropProps: {
                        timeout: 500
                    }
                }, a.createElement(K.a, {
                    in: t
                }, a.createElement(T.a, {
                    sx: J
                }, a.createElement("div", {
                    className: "rounded-xl overflow-hidden relative"
                }, a.createElement("div", {
                    className: "btn   text-white"
                }, a.createElement("div", {
                    className: "flex px-4 py-2.5 items-center justify-between border-b border-white"
                }, a.createElement("h1", {
                    className: "font-bold text-xl "
                }, "Payout Rules"), a.createElement("button", {
                    className: " ",
                    onClick: i
                }, a.createElement(v.e, null))), a.createElement("div", {
                    className: "p-4 py-6 max-h-[400px] overflow-y-auto example"
                }, a.createElement("ul", {
                    className: "pl-6"
                }, X.map(function(e, t) {
                    return a.createElement("li", {
                        key: t,
                        className: " list-disc "
                    }, a.createElement("p", {
                        className: "text-xs sm:text-sm text-left font-medium mb-2"
                    }, e))
                }), a.createElement("li", {
                    className: "mt-6"
                }, a.createElement("p", null, "For example from player $100 bet, if he wins he gets $180 and $20 sent to miner TVL and if he loses $90 goes to bet pool and $10% goes to TVL"))), a.createElement("h1", {
                    className: " font-bold mt-6 mb-2"
                }, "Advantages Of The Players"), a.createElement("ul", {
                    className: "pl-6 list-disc"
                }, a.createElement("li", null, a.createElement("p", {
                    className: "text-xs sm:text-sm text-left font-medium mb-2"
                }, "You don't need to enter your identity")), a.createElement("li", null, a.createElement("p", {
                    className: "text-xs sm:text-sm text-left font-medium mb-2"
                }, "Instant deposits and withdrawals")), a.createElement("li", null, a.createElement("p", {
                    className: "text-xs sm:text-sm text-left font-medium mb-2"
                }, "100% \u201cRTP\u201d return to the player, unlike casinos and other miner games, the algorithm will give 100% back of the total played")), a.createElement("li", null, a.createElement("p", {
                    className: "text-xs sm:text-sm text-left font-medium mb-2"
                }, "Only 10% will go to the miner to support TVL")))), a.createElement("div", {
                    className: "flex px-4 py-2 items-center justify-between border-t border-white"
                }, a.createElement("button", {
                    onClick: i,
                    className: "btn px-6 rounded-lg py-1.5 border border-white text-sm block max-w-max ml-auto "
                }, "Close"))))))))
            }
            var X = [a.createElement("div", null, a.createElement("span", {
                    className: "block"
                }, " The Dice roller is powered by Chainlink VRF "), a.createElement("a", {
                    href: "https://docs.chain.link/docs/chainlink-vrf/",
                    className: "text-blue-800"
                }, "https://docs.chain.link/docs/chainlink-vrf/"), a.createElement("span", {
                    className: "block"
                }, "Two random numbers are generated based on Chainlink VRF randomiser and considered as dice rolled results."), a.createElement("span", {
                    className: "mt-4 inline-block"
                }, "So if 1 number is 3 and another number is 5 we add up 3+5 and consider final result as 8")), a.createElement("span", null, "Player decides to Bet Up or Bet down predicting if the final result will be above 7 or below 7"), a.createElement("span", null, "If user Bets Up predicting the final rolled result will be more than 7 and if the final result comes more than 7 then he wins or otherwise loses the bet."), a.createElement("span", null, "The player can bet max 20% of dice game contract in BUSD"), a.createElement("span", null, " ", "The winner gets 2x of the bet amount - 10% of the winning is sent to miner TVL to keep the pool healthy"), a.createElement("span", null, "If user loses, 10% of the bet amount is sent to miner TVL to keep the pool healthy and remaining goes to Dice contract.")],
                Z = function(e) {
                    var t = e.loadWeb3,
                        n = Object(g.c)(),
                        r = n.account,
                        s = (n.library, n.chainId),
                        u = (n.connector, n.deactivate),
                        l = Object(a.useState)(56),
                        o = Object(p.a)(l, 2),
                        c = (o[0], o[1], Object(a.useState)(!1)),
                        m = Object(p.a)(c, 2),
                        y = m[0],
                        d = m[1],
                        b = i.a.useState(!1),
                        f = Object(p.a)(b, 2),
                        x = (f[0], f[1], Object(a.useState)(!1)),
                        T = Object(p.a)(x, 2),
                        h = T[0],
                        E = T[1],
                        k = Object(a.useState)({}),
                        O = Object(p.a)(k, 2),
                        M = O[0],
                        N = O[1],
                        j = function() {
                            d(function(e) {
                                return !e
                            })
                        },
                        S = Object.keys(M).length > 0;
                    console.log(S), Object(a.useEffect)(function() {
                        ! function() {
                            if (s) {
                                var e = I.filter(function(e) {
                                    return e.chain === s
                                });
                                0 !== e.length ? N(e[0]) : N(I[0]), console.log(I.filter(function(e) {
                                    return e.chain === s
                                }))
                            }
                        }()
                    }, [s]);
                    return i.a.createElement("div", {
                        className: "relative"
                    }, i.a.createElement("div", {
                        className: "container"
                    }, i.a.createElement("div", {
                        className: "flex items-center justify-between"
                    }, i.a.createElement("div", {
                        className: " grid grid-flow-col items-center justify-center gap-1"
                    }, i.a.createElement("img", {
                        src: z.a,
                        className: " w-[120px] sm:w-[160px]",
                        alt: ""
                    }), i.a.createElement("em", {
                        className: " font-extrabold text-sm sm:text-xl font-sarif"
                    }, "")), i.a.createElement("div", {
                        className: "md:block hidden"
                    }, i.a.createElement("ul", {
                        className: "flex items-center"
                    }, i.a.createElement("button", {
                        className: " text-base",
                        onClick: function() {
                            return E(function(e) {
                                return !e
                            })
                        }
                    }, "How It Works"), i.a.createElement("a", {
                        href: "https://watermelonbusd.com/",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn py-2 px-6 ml-4 text-sm font-medium"
                    }, "WatermelonBUSD"), i.a.createElement("button", {
                        className: "rev-btn py-2 px-6 ml-4 text-sm font-medium",
                        onClick: function() {
                            r ? (u(), window.localStorage.clear(), window.location.reload()) : t()
                        }
                    }, r ? r.slice(0, 8) + "..." + r.slice(r.length - 5) : "Connect Wallet"))), i.a.createElement("button", {
                        className: "btn text-2xl block md:hidden",
                        onClick: j
                    }, i.a.createElement(w.b, null)), i.a.createElement("div", {
                        className: " md:hidden ".concat(y ? "right-0 " : "right-full", " transition-all duration-300 fixed min-h-screen flex items-center justify-center top-0 z-10 w-full")
                    }, i.a.createElement("button", {
                        className: " absolute top-10 right-10 text-2xl",
                        onClick: j
                    }, i.a.createElement(v.e, null)), i.a.createElement("ul", {
                        className: "flex flex-col justify-center items-center"
                    }, i.a.createElement("button", {
                        className: "  text-base block",
                        onClick: function() {
                            return E(function(e) {
                                return !e
                            })
                        }
                    }, "How It Works"), i.a.createElement("br", null), i.a.createElement("a", {
                        href: "https://watermelonbusd.com/",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn py-2 px-6 ml-4 text-sm font-medium"
                    }, "Miner Site"), i.a.createElement("br", null), i.a.createElement("button", {
                        className: " btn py-2 px-6 ml-4 text-sm font-medium block",
                        onClick: t
                    }, r ? r.slice(0, 8) + "..." + r.slice(r.length - 5) : "Connect Wallet"))))), i.a.createElement(G, {
                        open: h,
                        setOpen: E
                    }))
                },
                Q = n(322),
                ee = n.n(Q),
                te = n(756),
                ne = function(e) {
                    var t = e.allBets;
                    /* return i.a.createElement("div", {
                        className: " py-20 mb-10 "
                    }, i.a.createElement("div", {
                        className: "container grid grid-cols-1 gap-8"
                    }, i.a.createElement("div", null, i.a.createElement("h2", {
                        className: " text-xl font-bold mb-4"
                    }, "MY LATEST BETS"), i.a.createElement("div", {
                        className: "overflow-x-auto table-component"
                    }, i.a.createElement("table", {
                        className: "w-full min-w-[800px]"
                    }, i.a.createElement("thead", {
                        className: "btn text-left"
                    }, i.a.createElement("tr", null, i.a.createElement("th", {
                        className: "p-2 text-center"
                    }, "Sr No"), i.a.createElement("th", {
                        className: "p-2 text-center"
                    }, "Bet Amount"), i.a.createElement("th", {
                        className: "p-2 text-center"
                    }, "Bet"), i.a.createElement("th", {
                        className: "p-2 text-center"
                    }, "Dice"), i.a.createElement("th", {
                        className: "p-2 text-center"
                    }, "Result"), i.a.createElement("th", {
                        className: "p-2 text-center"
                    }, "Time"))), i.a.createElement("tbody", null, t.length > 0 ? t.slice(0, 10).map(function(e, t) {
                        return i.a.createElement("tr", {
                            key: t,
                            className: "".concat(t % 2 === 0 ? "bg-[#111721]" : "bg-[#191F2B]", " text-white")
                        }, i.a.createElement("td", {
                            className: "p-2 text-center"
                        }, t + 1), i.a.createElement("td", {
                            className: "p-2 text-center"
                        }, i.a.createElement("p", {
                            className: "font-medium text-sm"
                        }, i.a.createElement("span", null, b.a.utils.fromWei(e[1], "ether")), " ", i.a.createElement("span", null, "BUSD"))), i.a.createElement("td", {
                            className: "p-2 text-center font-medium text-sm"
                        }, 1 === Number(e[2]) ? "UP" : 0 === Number(e[2]) ? "DOWN" : "Not Defined"), i.a.createElement("td", null, i.a.createElement("div", {
                            className: "grid grid-flow-col items-center justify-center"
                        }, i.a.createElement(y.a, {
                            numDice: 1,
                            rollTime: 2,
                            defaultRoll: e[3],
                            disableIndividual: !0,
                            faceColor: "#105710",
                            dotColor: "#fff",
                            dieSize: 30
                        }), i.a.createElement(y.a, {
                            numDice: 1,
                            rollTime: 2,
                            defaultRoll: e[4],
                            disableIndividual: !0,
                            faceColor: "#105710",
                            dotColor: "#fff",
                            dieSize: 30
                        }))), i.a.createElement("td", {
                            className: "p-2 text-center uppercase font-medium text-sm"
                        }, " ", !0 === e[5] ? i.a.createElement("span", {
                            className: "text-green-500"
                        }, "Won") : !1 === e[5] ? i.a.createElement("span", {
                            className: "text-red-500"
                        }, "LOST") : "Not Defined"), i.a.createElement("td", {
                            className: "p-2 text-center"
                        }, i.a.createElement("span", null, i.a.createElement(te.a, {
                            date: 1e3 * Number(e[6]),
                            locale: "en-US"
                        })), " "))
                    }) : i.a.createElement("tr", null, i.a.createElement("td", {
                        className: "",
                        colSpan: 6
                    }, i.a.createElement("p", {
                        className: "text-center py-6"
                    }, "NOT FOUND"))))))))) */
                },
                ae = (n(693), n(16)),
                ie = n.n(ae),
                re = n(324),
                se = n(323),
                ue = n.n(se),
                le = function() {
                    return i.a.createElement("div", {
                        className: ""
                    }, i.a.createElement("p", {
                        className: "pt-3 text-3xl"
                    }, ""), i.a.createElement("div", {
                        className: "flex justify-center my-10"
                    }, i.a.createElement("a", {
                        href: "#",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "mr-auto  inline-block max-w-max mx-auto"
                    }, i.a.createElement("img", {
                        src: ue.a,
                        alt: "",
                        className: "w-full md:max-w-[200px] "
                    }))), i.a.createElement("div", {
                        className: "flex flex-wrap md:grid  md:grid-flow-col justify-center items-center "
                    }, oe.map(function(e, t) {
                        return i.a.createElement("a", {
                            className: "flex  items-center text-[22px]",
                            key: t,
                            href: e.link,
                            target: "_blank",
                            rel: "noreferrer"
                        }, i.a.createElement("span", {
                            className: "block mr-2"
                        }, e.icon), i.a.createElement("p", null, e.text), t !== oe.length - 1 && i.a.createElement("p", {
                            className: "mx-2"
                        }, "||"))
                    })))
                },
                oe = [{
                    text: "Twitter",
                    icon: i.a.createElement(v.f, null),
                    link: "https://twitter.com/watermelonbusd"
                }, {
                    text: "Telegram",
                    icon: i.a.createElement(v.d, null),
                    link: "https://t.me/wmlnbusdgroup"
                }, {
                    text: "Bscscan",
                    icon: i.a.createElement(re.a, null),
                    link: "https://bscscan.com/address/0x22d8CE3eDE82C0dcF14bC9BbaB1F08506a309efD"
                }],
                ce = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                pe = [{
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "success",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "from",
                        type: "address"
                    }, {
                        name: "to",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        name: "success",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        name: "to",
                        type: "address"
                    }, {
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "success",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "",
                        type: "address"
                    }, {
                        name: "",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }],
                me = function(e) {
                    if (e) return e.length < 1 ? e : b.a.utils.fromWei(e, "ether")
                },
                ye = function(e, t, n) {
                    try {
                        return {
                            ok: !0,
                            contract: new e.eth.Contract(t, n)
                        }
                    } catch (a) {
                        return console.log(a), {
                            ok: !1,
                            contract: null
                        }
                    }
                },
                de = function(e) {
                    var t = ye(e, x, f),
                        n = t.ok,
                        a = t.contract;
                    if (!n) return !1;
                    try {
                        return a.methods.paused().call()
                    } catch (i) {
                        return console.log(i), !1
                    }
                },
                be = function() {
                    var e = Object(o.a)(l.a.mark(function e(t) {
                        var n, a, i, r, s, u, c, p;
                        return l.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ye(t, pe, ce);
                                case 2:
                                    if (n = e.sent, a = n.ok, i = n.contract, a) {
                                        e.next = 8;
                                        break
                                    }
                                    return ie.a.error("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"), e.abrupt("return");
                                case 8:
                                    return r = ie.a.loading("Please Wait Transaction is processing"), e.next = 11, t.eth.getAccounts();
                                case 11:
                                    return s = e.sent, e.next = 14, i.methods.balanceOf(s[0]).call();
                                case 14:
                                    if (u = e.sent, !(+(u = me(u)) <= 0)) {
                                        e.next = 19;
                                        break
                                    }
                                    return ie.a.error("You dont have sufficient balance.", {
                                        id: r
                                    }), e.abrupt("return");
                                case 19:
                                    return e.next = 21, i.methods.allowance(s[0], f).call();
                                case 21:
                                    return c = e.sent, e.next = 24, i.methods.totalSupply().call();
                                case 24:
                                    p = e.sent, console.log(c, p), ie.a.loading("Please allow our dice roller to use your token", {
                                        id: r
                                    }), i.methods.approve(f, p).send({
                                        from: s[0]
                                    }).on("transactionHash", function() {
                                        ie.a.loading("Please wait to get confirmation of the transaction from blockchain", {
                                            id: r
                                        })
                                    }).on("confirmation", function(e) {
                                        console.log("CONFIRMATION", e)
                                    }).on("receipt", function() {
                                        var e = Object(o.a)(l.a.mark(function e(t) {
                                            return l.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        ie.a.success("Transaction has been confirmed", {
                                                            id: r
                                                        });
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e)
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).on("error", function(e, t) {
                                        4001 === e.code ? ie.a.error("Transaction Rejected", {
                                            id: r
                                        }) : ie.a.error("Transaction Failed", {
                                            id: r
                                        })
                                    });
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                fe = n(325),
                xe = n.n(fe),
                we = n(326),
                ve = n.n(we),
                ge = n(327),
                Te = n.n(ge),
                he = n(191),
                Ee = n.n(he),
                ke = function(e) {
                    var t = e.diceRef,
                        n = e.score,
                        r = e.setScore,
                        s = e.score2,
                        u = e.setScore2,
                        l = e.mint,
                        o = e.loading,
                        c = e.account,
                        m = e.loadWeb3,
                        y = e.stake,
                        d = e.unStake,
                        b = e.totalBets,
                        f = e.totalStakesValue,
                        x = e.userStakes,
                        w = e.allBets,
                        v = e.won,
                        g = e.balance,
                        T = e.diceRef2,
                        h = e.transactionOngoing,
                        E = e.setTransactionOngoing,
                        k = e.apr,
                        O = e.claimWinnings,
                        M = e.totalWinnings,
                        N = e.unClaimedWinnings,
                        j = (e.referralEarnings, e.maxBetAmount),
                        S = e.claimedWinning,
                        B = (e.claimReferral, Object(a.useState)("")),
                        R = Object(p.a)(B, 2),
                        C = R[0],
                        A = R[1],
                        W = Object(a.useState)(0),
                        I = Object(p.a)(W, 2),
                        D = I[0],
                        F = I[1],
                        P = Object(a.useState)(0),
                        _ = Object(p.a)(P, 2),
                        U = _[0],
                        L = _[1],
                        V = Object(a.useState)({}),
                        H = Object(p.a)(V, 2),
                        q = H[0];
                    H[1];
                    return i.a.createElement("div", null, i.a.createElement(Z, {
                        loadWeb3: m,
                        account: c
                    }), i.a.createElement("div", {
                        className: "container min-h-screen "
                    }, i.a.createElement(Oe, {
                        diceRef: t,
                        score: n,
                        setScore: r,
                        score2: s,
                        setScore2: u,
                        mint: l,
                        loading: o,
                        diceInput: C,
                        setDiceInput: A,
                        diceInputHandler: function(e) {
                            A(e.target.value)
                        },
                        stakeInput: D,
                        setStakeInput: F,
                        stakeInputHandler: function(e) {
                            F(e.target.value)
                        },
                        stake: y,
                        unStakeInput: U,
                        setUnStakeInput: L,
                        unStakeInputHandler: function(e) {
                            L(e.target.value)
                        },
                        unStake: d,
                        totalBets: b,
                        totalStakesValue: f,
                        userStakes: x,
                        won: v,
                        balance: g,
                        diceRef2: T,
                        transactionOngoing: h,
                        setTransactionOngoing: E,
                        apr: k,
                        apiData: q,
                        totalWinnings: M,
                        unClaimedWinnings: N,
                        claimWinnings: O,
                        maxBetAmount: j,
                        claimedWinning: S,
                        loadWeb3: m
                    })), i.a.createElement(ne, {
                        allBets: w
                    }), i.a.createElement(le, null))
                },
                Oe = function(e) {
                    var t = e.diceRef,
                        n = (e.score, e.setScore),
                        r = e.score2,
                        s = e.setScore2,
                        u = e.mint,
                        c = e.loading,
                        m = e.diceInput,
                        d = e.setDiceInput,
                        b = e.diceInputHandler,
                        w = e.totalBets,
                        v = e.won,
                        T = (e.balance, e.diceRef2),
                        h = e.transactionOngoing,
                        E = e.setTransactionOngoing,
                        k = (e.apr, e.apiData),
                        O = e.totalWinnings,
                        M = e.unClaimedWinnings,
                        N = e.claimWinnings,
                        j = e.maxBetAmount,
                        S = (e.claimedWinning, e.loadWeb3),
                        B = Object(g.c)(),
                        R = B.library,
                        C = B.account,
                        A = Object(a.useState)(0),
                        W = Object(p.a)(A, 2),
                        I = W[0],
                        F = W[1],
                        P = Object(a.useState)(0),
                        _ = Object(p.a)(P, 2),
                        U = _[0],
                        L = _[1],
                        V = Object(a.useState)(Math.floor(1 + 5 * Math.random())),
                        H = Object(p.a)(V, 2),
                        q = H[0],
                        Y = (H[1], Object(a.useState)(0)),
                        z = Object(p.a)(Y, 2),
                        $ = z[0],
                        K = z[1];
                    "".concat(window.location.origin, "/").concat(C);
                    Object(a.useEffect)(function() {
                        var e = function() {
                                var e = Object(o.a)(l.a.mark(function e() {
                                    var t, n, a, i, r, s, u;
                                    return l.a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = ye(R, pe, ce), t.ok, n = t.contract, a = ye(R, x, f), i = a.ok, r = a.contract, n) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 4:
                                                return e.next = 6, n.methods.allowance(C, f).call();
                                            case 6:
                                                if (s = e.sent, F(s), i) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 10:
                                                return e.next = 12, r.methods.getMaxBetAmount().call();
                                            case 12:
                                                u = e.sent, K(D(u));
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            t = setInterval(function() {
                                e()
                            }, 2e3);
                        return function() {
                            clearInterval(t)
                        }
                    }, [R, C]), Object(a.useEffect)(function() {
                        (function() {
                            var e = Object(o.a)(l.a.mark(function e() {
                                var t, n, a;
                                return l.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = ye(R, pe, ce), t.ok, n = t.contract) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return e.next = 5, n.methods.balanceOf(C).call();
                                        case 5:
                                            a = e.sent, L(D(a));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }, [R, C]);
                    var J = new Audio(xe.a),
                        G = new Audio(ve.a),
                        X = new Audio(Te.a);
                    return i.a.createElement("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 py-10  gap-8"
                    }, i.a.createElement("div", {
                        className: " py-10"
                    }, i.a.createElement("div", {
                        className: "card"
                    }, i.a.createElement("div", {
                        className: " p-2 mb-4"
                    }, i.a.createElement("p", {
                        className: " text-center  font-bold text-xl sm:text-2xl mb-2"
                    }, "Total Bets"), i.a.createElement("p", {
                        className: "text-center font-medium text-sm md:text-xl mb-4"
                    }, w || k.total_bets, " BUSD")), i.a.createElement("div", {
                        className: "flex  items-center justify-center"
                    }, i.a.createElement("div", null, i.a.createElement("div", {
                        className: "".concat(c ? "block" : "hidden")
                    }, i.a.createElement(y.a, {
                        numDice: 2,
                        rollTime: 1,
                        defaultRoll: q,
                        disableIndividual: !0,
                        ref: t,
                        faceColor: "#105710",
                        dotColor: "#fff",
                        dieSize: 75,
                        rollDone: function(e) {
                            !1 === c && n(0)
                        }
                    })), i.a.createElement("div", {
                        className: "".concat(c ? "hidden" : "block")
                    }, i.a.createElement(y.a, {
                        numDice: 2,
                        rollTime: 1,
                        disableIndividual: !0,
                        ref: T,
                        faceColor: "#105710",
                        dotColor: "#fff",
                        dieSize: 75,
                        rollDone: function(e) {
                            s(e), E(!1), v ? X.play() : G.play()
                        }
                    })))), i.a.createElement("p", {
                        className: "text-center mt-6 font-medium"
                    }, h ? "Rolling in progress..." : r ? i.a.createElement("span", null, "Result : ", r, " ", v ? "WON" : "LOST") : "Bet 7 Up or 7 Down to start the round"), i.a.createElement("br", null), i.a.createElement("br", null), i.a.createElement("p", {
                        className: "text-center  font-bold text-xl md:text-2xl mb-2"
                    }, "Max allowed Bet"), i.a.createElement("p", {
                        className: "text-center font-medium text-base md:text-xl mb-4"
                    }, C ? i.a.createElement("span", null, j, " BUSD") : "Connect Wallet "), i.a.createElement("div", {
                        className: " mt-10"
                    }, i.a.createElement(Me, {
                        value: m,
                        handler: b,
                        balance: U,
                        setValue: d
                    })), i.a.createElement("div", {
                        className: " grid grid-cols-1 md:grid-cols-none  md:grid-flow-col items-center justify-center  gap-6 mt-10"
                    }, +I > 0 ? i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
                        className: "btn  md:w-auto w-full px-6 py-2 text-sm md:text-base font-medium ",
                        onClick: Object(o.a)(l.a.mark(function e() {
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, J.play();
                                    case 2:
                                        if (!(+$ < m)) {
                                            e.next = 5;
                                            break
                                        }
                                        return ie.a.error("Max allowed bet is ".concat($, "  BUSD")), e.abrupt("return");
                                    case 5:
                                        return e.next = 7, de(R);
                                    case 7:
                                        if (!e.sent) {
                                            e.next = 11;
                                            break
                                        }
                                        return ie.a.error("Contract is Paused"), e.abrupt("return");
                                    case 11:
                                        u(m, "betUp");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))
                    }, "BET 7 UP"), i.a.createElement("button", {
                        className: " btn  px-6 py-2 text-sm md:text-base font-medium ",
                        onClick: Object(o.a)(l.a.mark(function e() {
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, J.play();
                                    case 2:
                                        if (!(+$ < m)) {
                                            e.next = 5;
                                            break
                                        }
                                        return ie.a.error("Max allowed bet is ".concat($, " BUSD")), e.abrupt("return");
                                    case 5:
                                        return e.next = 7, de(R);
                                    case 7:
                                        if (!e.sent) {
                                            e.next = 11;
                                            break
                                        }
                                        return ie.a.error("Contract is Paused"), e.abrupt("return");
                                    case 11:
                                        u(m, "betDown");
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))
                    }, "BET 7 DOWN")) : i.a.createElement("button", {
                        className: " btn  px-6 py-2 text-sm md:text-base font-medium ",
                        onClick: Object(o.a)(l.a.mark(function e() {
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (C) {
                                            e.next = 3;
                                            break
                                        }
                                        return S(), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, de(R);
                                    case 5:
                                        if (!e.sent) {
                                            e.next = 9;
                                            break
                                        }
                                        return ie.a.error("Contract is Paused"), e.abrupt("return");
                                    case 9:
                                        if (!(+I > 0)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 11:
                                        be(R);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))
                    }, "Approve")))), i.a.createElement("div", {
                        className: "py-10 h-full flex flex-col"
                    }, i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                        className: "card"
                    }, i.a.createElement("div", {
                        className: " p-2 mb-4"
                    }, i.a.createElement("p", {
                        className: "text-center  font-bold text-xl sm:text-2xl  mb-2"
                    }, "Total Winnings"), i.a.createElement("p", {
                        className: "text-center font-medium text-base md:text-xl mb-4"
                    }, O, " BUSD")), i.a.createElement("div", {
                        className: ""
                    }, i.a.createElement("p", {
                        className: "text-center  font-bold text-xl sm:text-2xl  mb-2"
                    }, "My Unclaimed Winnings"), i.a.createElement("p", {
                        className: "text-center font-medium text-base md:text-xl mb-4"
                    }, M, " BUSD"), i.a.createElement("div", {
                        className: " mt-10"
                    }, i.a.createElement("button", {
                        className: "btn  px-6 py-2 text-sm md:text-base font-medium block mx-auto  ",
                        onClick: Object(o.a)(l.a.mark(function e() {
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, de(R);
                                    case 2:
                                        if (!e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        return ie.a.error("Contract is Paused"), e.abrupt("return");
                                    case 6:
                                        N();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))
                    }, "Claim NOW")))))))
                },
                Me = function(e) {
                    var t = e.value,
                        n = e.handler,
                        a = e.balance,
                        r = e.setValue;
                    return i.a.createElement("div", {
                        className: "max-w-md mx-auto "
                    }, i.a.createElement("div", {
                        className: "flex items-center justify-between text-sm mb-2"
                    }, i.a.createElement("p", null, "Pay"), i.a.createElement("p", null, "Available: ", Number(a).toFixed(2), " ", i.a.createElement("span", {
                        className: " cursor-pointer",
                        onClick: function() {
                            return r(a)
                        }
                    }, "MAX"))), i.a.createElement("div", {
                        className: " bg-transparent relative border border-gray-500 overflow-hidden rounded-md"
                    }, i.a.createElement("input", {
                        type: "number",
                        className: " bg-transparent py-3 px-4 focus:outline-none w-full h-full text-right",
                        placeholder: "Enter Bet Amount",
                        value: t,
                        onChange: n
                    }), i.a.createElement("div", {
                        className: "absolute top-1/2 -translate-y-1/2 text-sm font-medium left-2 flex items-center"
                    }, i.a.createElement("div", {
                        className: "bg-black rounded-full h-6 w-6 mr-1  flex items-center justify-center"
                    }, i.a.createElement("img", {
                        src: ee.a,
                        alt: "",
                        className: "w-3"
                    })), i.a.createElement("p", null, "BUSD"))))
                },
                Ne = n(328),
                je = n.n(Ne),
                Se = n(329),
                Be = n.n(Se),
                Re = (n(697), {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: 400,
                    width: "90%",
                    bgcolor: "white",
                    boxShadow: 24,
                    p: 2,
                    borderRadius: 4
                });

            function Ce(e) {
                var t = e.open,
                    n = (e.setOpen, e.handleClose),
                    i = (e.handleOpen, e.connect),
                    r = [{
                        name: "Metamask",
                        logo: Be.a,
                        description: "Connect with the provider in your Browser",
                        handler: function() {
                            return console.log("CONNECT TO METAMASK")
                        },
                        connecter: q
                    }, {
                        name: "WalletConnect",
                        logo: je.a,
                        description: "Scan with WalletConnect to connect",
                        handler: function() {
                            return console.log("CONNECT TO WalletConnect")
                        },
                        connecter: H
                    }];
                return a.createElement("div", null, a.createElement(h.a, {
                    open: t,
                    onClose: n,
                    "aria-labelledby": "modal-modal-title",
                    "aria-describedby": "modal-modal-description"
                }, a.createElement(T.a, {
                    sx: Re
                }, r.map(function(e, t) {
                    return a.createElement(a.Fragment, {
                        key: t
                    }, a.createElement("button", {
                        className: "  block w-full text-black py-4 md:py-6 hover:bg-gray-100 rounded-md transition-all duration-300",
                        key: t,
                        onClick: function() {
                            return i(e.connecter, e.name)
                        }
                    }, a.createElement("img", {
                        src: e.logo,
                        alt: "",
                        className: " w-8 md:w-12 mx-auto"
                    }), a.createElement("h2", {
                        className: " font-bold text-lg md:text-xl mt-4 mb-2"
                    }, e.name), a.createElement("p", {
                        className: "text-sm md:text-base text-gray-500 "
                    }, e.description)), t + 1 !== r.length && a.createElement("hr", null))
                }))))
            }
            var Ae = n(758),
                We = n(755),
                Ie = i.a.forwardRef(function(e, t) {
                    return i.a.createElement(We.a, Object.assign({
                        elevation: 6,
                        ref: t,
                        variant: "filled"
                    }, e))
                }),
                De = function(e) {
                    var t = e.open,
                        n = e.setOpen,
                        a = e.severity,
                        r = void 0 === a ? "error" : a,
                        s = e.msg,
                        u = void 0 === s ? " Please Connect to Mainnet" : s,
                        l = function(e, t) {
                            "clickaway" !== t && n(!1)
                        };
                    return i.a.createElement(Ae.a, {
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "center"
                        },
                        open: t,
                        autoHideDuration: 2e3,
                        onClose: l
                    }, i.a.createElement(Ie, {
                        onClose: l,
                        severity: r,
                        sx: {
                            width: "100%"
                        }
                    }, u))
                },
                Fe = n(17),
                Pe = [{
                    chainId: 4,
                    contractAddress: "0x2660b6b834aEA7A114c58C7254039E323F3cd0f5",
                    contractAbi: [{
                        inputs: [],
                        stateMutability: "nonpayable",
                        type: "constructor"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "have",
                            type: "address"
                        }, {
                            internalType: "address",
                            name: "want",
                            type: "address"
                        }],
                        name: "OnlyCoordinatorCanFulfill",
                        type: "error"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_referrer",
                            type: "address"
                        }],
                        name: "betDown",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_referrer",
                            type: "address"
                        }],
                        name: "betUp",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        name: "betValue",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "claimRewards",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "claimWinnings",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "devAddress",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "devFees",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "devWalletBalance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getAPR",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getBets",
                        outputs: [{
                            components: [{
                                internalType: "uint256",
                                name: "requestId",
                                type: "uint256"
                            }, {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256"
                            }, {
                                internalType: "uint256",
                                name: "bet",
                                type: "uint256"
                            }, {
                                internalType: "uint256",
                                name: "dice1Result",
                                type: "uint256"
                            }, {
                                internalType: "uint256",
                                name: "dice2Result",
                                type: "uint256"
                            }, {
                                internalType: "bool",
                                name: "isWon",
                                type: "bool"
                            }, {
                                internalType: "uint256",
                                name: "createdTime",
                                type: "uint256"
                            }],
                            internalType: "struct Betlify.Bet[]",
                            name: "",
                            type: "tuple[]"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getElapsedTime",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getResult",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }, {
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_address",
                            type: "address"
                        }],
                        name: "getResultByAddress",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }, {
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getRewardsPerYear",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getRoundStatus",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_address",
                            type: "address"
                        }],
                        name: "getRoundStatusByAddress",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getTotalFees",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getUnclaimedRewards",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "getUnclaimedRewardsByAddress",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "lastReawardClaimedTime",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "lastReferralClaimedTime",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "lastStakeTime",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "magnitude",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "markeitngWalletBalance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "marketingAddress",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "marketingFees",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "maxBetPercentage",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "minAPR",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "playerCurrentResult1",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "playerCurrentResult2",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "playerReferrer",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "playerTotalBets",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_playerAddress",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "_amount",
                            type: "uint256"
                        }, {
                            internalType: "bool",
                            name: "_isWon",
                            type: "bool"
                        }],
                        name: "processDistribution",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "requestId",
                            type: "uint256"
                        }, {
                            internalType: "uint256[]",
                            name: "randomWords",
                            type: "uint256[]"
                        }],
                        name: "rawFulfillRandomWords",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "referralEarnings",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "referralFees",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "referralUnclaimedBalance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        name: "requesterAddress",
                        outputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "rewardPoolBalance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "rewardPoolFees",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "rewardsTimeBlock",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "roundStatus",
                        outputs: [{
                            internalType: "bool",
                            name: "",
                            type: "bool"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        name: "s_randomWords",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "s_requestId",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_devAddress",
                            type: "address"
                        }],
                        name: "setDevAddress",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_devFees",
                            type: "uint256"
                        }],
                        name: "setDevFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_timestamp",
                            type: "uint256"
                        }],
                        name: "setLastStakeTime",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "_marketingAddress",
                            type: "address"
                        }],
                        name: "setMarketingAddress",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_marketingFees",
                            type: "uint256"
                        }],
                        name: "setMarketingFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_maxBetPercentage",
                            type: "uint256"
                        }],
                        name: "setMaxBetPercentage",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_referralFees",
                            type: "uint256"
                        }],
                        name: "setReferralFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_rewardPoolBalance",
                            type: "uint256"
                        }],
                        name: "setRewardPoolBalance",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_rewardPoolFees",
                            type: "uint256"
                        }],
                        name: "setRewardPoolFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_timestamp",
                            type: "uint256"
                        }],
                        name: "setRewardsClaimTime",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint64",
                            name: "_setSubscriptionId",
                            type: "uint64"
                        }],
                        name: "setSubscriptionId",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_totalStakeLockedValue",
                            type: "uint256"
                        }],
                        name: "setTotalStakeLockedValue",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_unstakeFees",
                            type: "uint256"
                        }],
                        name: "setUnstakeFees",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_amount",
                            type: "uint256"
                        }],
                        name: "setUserStake",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "stake",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "stakeLockDuration",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalBets",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalBetsLost",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalBetsWon",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalBlocksPerYear",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalLostLockedValue",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "totalRewardsClaimed",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "totalStakeLockedValue",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "unclaimedWinning",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "uint256",
                            name: "_amount",
                            type: "uint256"
                        }],
                        name: "unstake",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function"
                    }, {
                        inputs: [],
                        name: "unstakeFees",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "userBet",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }, {
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        name: "userBets",
                        outputs: [{
                            internalType: "uint256",
                            name: "requestId",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "bet",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "dice1Result",
                            type: "uint256"
                        }, {
                            internalType: "uint256",
                            name: "dice2Result",
                            type: "uint256"
                        }, {
                            internalType: "bool",
                            name: "isWon",
                            type: "bool"
                        }, {
                            internalType: "uint256",
                            name: "createdTime",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "userLostBalance",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        inputs: [{
                            internalType: "address",
                            name: "",
                            type: "address"
                        }],
                        name: "userStakes",
                        outputs: [{
                            internalType: "uint256",
                            name: "",
                            type: "uint256"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }, {
                        stateMutability: "payable",
                        type: "receive"
                    }]
                }, {
                    chainId: 97,
                    contractAddress: f,
                    contractAbi: x
                }],
                _e = (n(698), n(330)),
                Ue = n.n(_e),
                Le = {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: 600,
                    width: "90%",
                    bgcolor: "#202734",
                    border: "0px solid #000",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: "20px"
                },
                Ve = function(e) {
                    var t = e.open,
                        n = e.message,
                        a = (e.handleOpen, e.handleClose);
                    return i.a.createElement("div", null, i.a.createElement(h.a, {
                        open: t,
                        onClose: a
                    }, i.a.createElement(T.a, {
                        sx: Le
                    }, i.a.createElement("p", {
                        className: "text-center pt-6 pb-6  text-base  text-white"
                    }, n), i.a.createElement("button", {
                        onClick: a,
                        className: "btn mx-auto text-sm md:text-base block py-1.5 px-6 rounded-lg"
                    }, "OK"))))
                };

            function He() {
                var e = Object(g.c)(),
                    t = e.library,
                    n = e.account,
                    r = e.activate,
                    s = e.error,
                    u = Object(a.useState)(null),
                    m = Object(p.a)(u, 2),
                    y = m[0],
                    d = m[1],
                    w = Object(a.useState)(0),
                    T = Object(p.a)(w, 2),
                    h = T[0],
                    E = T[1],
                    k = Object(a.useState)(0),
                    O = Object(p.a)(k, 2),
                    M = O[0],
                    N = (O[1], Object(a.useState)(0)),
                    j = Object(p.a)(N, 2),
                    S = j[0],
                    B = (j[1], Object(a.useState)(0)),
                    R = Object(p.a)(B, 2),
                    C = R[0],
                    A = (R[1], Object(a.useState)(0)),
                    W = Object(p.a)(A, 2),
                    I = W[0],
                    F = (W[1], Object(a.useState)(0)),
                    P = Object(p.a)(F, 2),
                    _ = P[0],
                    U = P[1],
                    L = Object(a.useState)(0),
                    Y = Object(p.a)(L, 2),
                    z = Y[0],
                    $ = Y[1],
                    K = Object(a.useState)(!1),
                    J = Object(p.a)(K, 2),
                    G = J[0],
                    X = J[1],
                    Z = Object(a.useState)([]),
                    Q = Object(p.a)(Z, 2),
                    ee = Q[0],
                    te = Q[1],
                    ne = Object(a.useState)(!1),
                    re = Object(p.a)(ne, 2),
                    se = re[0],
                    ue = re[1],
                    le = Object(a.useState)(0),
                    oe = Object(p.a)(le, 2),
                    ce = oe[0],
                    pe = oe[1],
                    me = Object(a.useState)(!1),
                    ye = Object(p.a)(me, 2),
                    de = ye[0],
                    be = ye[1],
                    fe = Object(a.useState)(0),
                    xe = Object(p.a)(fe, 2),
                    we = xe[0],
                    ve = (xe[1], Object(a.useState)(!1)),
                    ge = Object(p.a)(ve, 2),
                    Te = ge[0],
                    he = ge[1],
                    Oe = Object(a.useState)(0),
                    Me = Object(p.a)(Oe, 2),
                    Ne = Me[0],
                    je = Me[1],
                    Se = Object(a.useState)(0),
                    Be = Object(p.a)(Se, 2),
                    Re = Be[0],
                    Ae = Be[1],
                    We = Object(a.useState)(0),
                    Ie = Object(p.a)(We, 2),
                    _e = Ie[0],
                    Le = Ie[1],
                    He = Object(a.useState)(0),
                    qe = Object(p.a)(He, 2),
                    Ye = qe[0],
                    ze = qe[1],
                    $e = Object(a.useState)(0),
                    Ke = Object(p.a)($e, 2),
                    Je = Ke[0],
                    Ge = (Ke[1], Object(a.useState)(0)),
                    Xe = Object(p.a)(Ge, 2),
                    Ze = Xe[0],
                    Qe = (Xe[1], Object(a.useState)(!1)),
                    et = Object(p.a)(Qe, 2),
                    tt = et[0],
                    nt = et[1],
                    at = Object(a.useState)(Pe[0]),
                    it = Object(p.a)(at, 2),
                    rt = it[0],
                    st = (it[1], Object(a.useState)(0)),
                    ut = Object(p.a)(st, 2),
                    lt = ut[0],
                    ot = (ut[1], Object(a.useState)(0)),
                    ct = Object(p.a)(ot, 2),
                    pt = ct[0],
                    mt = ct[1],
                    yt = Object(a.useState)(0),
                    dt = Object(p.a)(yt, 2),
                    bt = dt[0],
                    ft = dt[1],
                    xt = function() {
                        return nt(!0)
                    },
                    wt = Object(a.useRef)(),
                    vt = Object(a.useRef)(),
                    gt = (Object(Fe.g)().id, Object(a.useRef)(null)),
                    Tt = Object(a.useRef)(null),
                    ht = Object(a.useState)(!0),
                    Et = Object(p.a)(ht, 2),
                    kt = Et[0],
                    Ot = Et[1],
                    Mt = Object(a.useState)({
                        open: !1,
                        message: ""
                    }),
                    Nt = Object(p.a)(Mt, 2),
                    jt = Nt[0],
                    St = Nt[1],
                    Bt = function(e) {
                        St({
                            open: !0,
                            message: e
                        })
                    },
                    Rt = function() {
                        var e = Object(o.a)(l.a.mark(function e(t, n) {
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (console.log("calling connect"), e.prev = 1, "Metamask" !== n) {
                                            e.next = 12;
                                            break
                                        }
                                        if (!window.ethereum) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 6, r(t);
                                    case 6:
                                        window.localStorage.setItem("WEB3_REACT_CURRENT_PROVIDER", n), e.next = 10;
                                        break;
                                    case 9:
                                        window.location.href = "https://metamask.app.link/dapp/".concat(window.location.host);
                                    case 10:
                                        e.next = 15;
                                        break;
                                    case 12:
                                        return e.next = 14, r(t);
                                    case 14:
                                        window.localStorage.setItem("WEB3_REACT_CURRENT_PROVIDER", n);
                                    case 15:
                                        nt(!1), e.next = 21;
                                        break;
                                    case 18:
                                        e.prev = 18, e.t0 = e.catch(1), console.log(e.t0);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 18]
                            ])
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }();
                Object(a.useEffect)(function() {
                    s instanceof g.a && ie.a.error("Unsupported Chain Connected, Please switch to Binance Mainnet")
                }, [s]);
                var Ct = function() {
                    var e = Object(o.a)(l.a.mark(function e() {
                        var a, i, r, s, u, o, c, p, m, y, b;
                        return l.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 53;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, new t.eth.Contract(x, f);
                                case 4:
                                    return a = e.sent, d(a), e.next = 8, a.methods.getMaxBetAmount().call();
                                case 8:
                                    return i = e.sent, i = D(i), ft(Number(i).toFixed(4)), e.next = 13, a.methods.totalBets().call({
                                        from: n
                                    });
                                case 13:
                                    return r = e.sent, r = D(r), E(Number(r).toFixed(4)), e.next = 18, a.methods.unclaimedWinning(n).call();
                                case 18:
                                    return s = e.sent, console.log("_winnings", s), je(D(s)), E(D(r)), e.next = 24, a.methods.totalWinnings().call();
                                case 24:
                                    return u = e.sent, Ae(D(u)), e.next = 28, a.methods.unclaimedWinning(n).call();
                                case 28:
                                    return o = e.sent, Le(D(o)), e.next = 32, a.methods.playerTotalWinnings(n).call();
                                case 32:
                                    return c = e.sent, mt(D(c)), e.next = 36, t.eth.getBalance(n);
                                case 36:
                                    return p = e.sent, pe(D(p.toString())), e.next = 40, a.methods.userLostBalance(n).call();
                                case 40:
                                    return m = e.sent, ze(D(m)), e.next = 44, a.methods.getBets().call({
                                        from: n
                                    });
                                case 44:
                                    y = e.sent, b = [], Object.entries(y).forEach(function(e, t) {
                                        var n = {};
                                        e[1].forEach(function(e, t) {
                                            n[t] = e
                                        }), b.unshift(n)
                                    }), te(b), e.next = 53;
                                    break;
                                case 50:
                                    e.prev = 50, e.t0 = e.catch(1), console.log("CONTRACT ERROR", e.t0);
                                case 53:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [1, 50]
                        ])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();

                function At() {
                    return (At = Object(o.a)(l.a.mark(function e(t, a) {
                        var i, r;
                        return l.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (y) {
                                        e.next = 3;
                                        break
                                    }
                                    return ie.a.error("Please connect to your Wallet!"), e.abrupt("return");
                                case 3:
                                    if (!(t <= 0)) {
                                        e.next = 6;
                                        break
                                    }
                                    return ie.a.error("invalid Input"), e.abrupt("return");
                                case 6:
                                    return e.next = 8, y.methods.getRoundStatusByAddress(n).call();
                                case 8:
                                    if (i = e.sent, console.log("roundStatus", i), !G) {
                                        e.next = 13;
                                        break
                                    }
                                    return ie.a.error("You already have game round in progress please wait to finish it first"), e.abrupt("return");
                                case 13:
                                    try {
                                        r = b.a.utils.toWei("".concat(t), "ether"), "betUp" === a ? y.methods.betUp(r).send({
                                            from: n
                                        }).on("transactionHash", function() {
                                            X(!0), be(!0), gt.current.play()
                                        }).on("confirmation", function() {}).on("receipt", Object(o.a)(l.a.mark(function e() {
                                            var t, a;
                                            return l.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        a = setInterval(Object(o.a)(l.a.mark(function e() {
                                                            var i;
                                                            return l.a.wrap(function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return e.next = 2, y.methods.getResult().call({
                                                                            from: n
                                                                        });
                                                                    case 2:
                                                                        i = e.sent, t = i, console.log("RESULT FROM BLOCKCHAIN", i), Number(t[0]) && (clearInterval(a), X(!1), gt.current.pause(), U(0), ue(t[2]), Dt([Number(t[0]), Number(t[1])]), t[2] && Bt("You win! congratulations!\ud83c\udf89"), t[2] || Bt("You lost\ud83d\ude14!, try again you will be luckier!"), setTimeout(function() {
                                                                            window.location.reload()
                                                                        }, 5e3));
                                                                    case 6:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }, e)
                                                        })), 1e3);
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e)
                                        }))).on("error", function(e, t) {
                                            X(!1), 4001 === e.code ? ie.a.error("Transaction Rejected") : ie.a.error("Transaction Failed")
                                        }) : "betDown" === a && y.methods.betDown(r).send({
                                            from: n
                                        }).on("transactionHash", function() {
                                            X(!0), be(!0), gt.current.play()
                                        }).on("confirmation", function() {}).on("receipt", Object(o.a)(l.a.mark(function e() {
                                            var t, a;
                                            return l.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        a = setInterval(Object(o.a)(l.a.mark(function e() {
                                                            var i;
                                                            return l.a.wrap(function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return e.next = 2, y.methods.getResult().call({
                                                                            from: n
                                                                        });
                                                                    case 2:
                                                                        i = e.sent, t = i, console.log("RESULT FROM BLOCKCHAIN", i), Number(t[0]) && (clearInterval(a), console.log("FINAL", t), console.log(Number(t[0]), Number(t[1])), ue(t[2]), X(!1), gt.current.pause(), Dt([Number(t[0]), Number(t[1])]), t[2] && Bt("You win! congratulations!\ud83c\udf89"), t[2] || Bt("You lost\ud83d\ude14!, try again you will be luckier!"));
                                                                    case 6:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }, e)
                                                        })), 1e3);
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e)
                                        }))).on("error", function(e, t) {
                                            X(!1), 4001 === e.code ? ie.a.error("Transaction Rejected") : ie.a.error("Transaction Failed")
                                        })
                                    } catch (s) {
                                        console.log(s), ie.a.error("Transaction Failed")
                                    }
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))).apply(this, arguments)
                }

                function Wt() {
                    return (Wt = Object(o.a)(l.a.mark(function e() {
                        var t;
                        return l.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n) {
                                        e.next = 3;
                                        break
                                    }
                                    return xt(), e.abrupt("return");
                                case 3:
                                    if (t = ie.a.loading("Transaction is processing.."), y) {
                                        e.next = 7;
                                        break
                                    }
                                    return ie.a.error("Please connect to your Wallet!", {
                                        id: t
                                    }), e.abrupt("return");
                                case 7:
                                    try {
                                        y.methods.claimWinnings().send({
                                            from: n
                                        }).on("transactionHash", function() {
                                            ie.a.loading("Please wait to get confirmation from blockchain", {
                                                id: t
                                            })
                                        }).on("confirmation", function() {}).on("receipt", Object(o.a)(l.a.mark(function e() {
                                            return l.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        ie.a.success("Transaction Completed Successfully", {
                                                            id: t
                                                        });
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e)
                                        }))).on("error", function(e, n) {
                                            4001 === e.code ? ie.a.error("Transaction Rejected", {
                                                id: t
                                            }) : ie.a.error("Please Failed", {
                                                id: t
                                            })
                                        })
                                    } catch (s) {
                                        console.log(s), ie.a.error("Please Failed", {
                                            id: t
                                        })
                                    }
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))).apply(this, arguments)
                }

                function It() {
                    return (It = Object(o.a)(l.a.mark(function e() {
                        var t;
                        return l.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = ie.a.loading("Transaction is processing.."), y) {
                                        e.next = 4;
                                        break
                                    }
                                    return ie.a.error("Please connect to your Wallet!", {
                                        id: t
                                    }), e.abrupt("return");
                                case 4:
                                    try {
                                        y.methods.claimReferral().send({
                                            from: n
                                        }).on("transactionHash", function() {
                                            ie.a.loading("Please wait to get confirmation from blockchain", {
                                                id: t
                                            })
                                        }).on("confirmation", function() {}).on("receipt", Object(o.a)(l.a.mark(function e() {
                                            return l.a.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        ie.a.success("Transaction Completed Successfully", {
                                                            id: t
                                                        });
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e)
                                        }))).on("error", function(e, n) {
                                            4001 === e.code ? ie.a.error("Transaction Rejected", {
                                                id: t
                                            }) : ie.a.error("Please Failed", {
                                                id: t
                                            })
                                        })
                                    } catch (s) {
                                        console.log(s), ie.a.error("Please Failed", {
                                            id: t
                                        })
                                    }
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }))).apply(this, arguments)
                }
                Object(a.useEffect)(function() {
                    var e = window.localStorage.getItem("WEB3_REACT_CURRENT_PROVIDER");
                    "Metamask" === e ? Rt(q, "Metamask") : "WalletConnect" === e ? Rt(H, "WalletConnect") : "CoinBase" === e && Rt(V, "CoinBase")
                }, []), Object(a.useEffect)(function() {
                    Ct()
                }, [n, rt]), Object(a.useEffect)(function() {
                    var e = function() {
                        var e = Object(o.a)(l.a.mark(function e() {
                            var t;
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, y.methods.getResultByAddress(n).call();
                                    case 2:
                                        t = e.sent, console.log("RESULT", t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    y && e()
                }, [y]);
                var Dt = function(e) {
                    vt.current.rollAll(e)
                };
                Object(a.useEffect)(function() {
                    var e = setInterval(function() {
                        var e;
                        !0 === G && (U(0), wt.current.rollAll(e))
                    }, 1e3);
                    return function() {
                        return clearInterval(e)
                    }
                }, [G]);
                return i.a.createElement("div", null, i.a.createElement(ae.Toaster, {
                    containerClassName: "text-sm"
                }), i.a.createElement("audio", {
                    src: Ue.a,
                    loop: !0,
                    autoPlay: !0,
                    ref: Tt,
                    onPlay: function() {
                        return Ot(!0)
                    },
                    onPause: function() {
                        return Ot(!1)
                    }
                }), i.a.createElement("button", {
                    onClick: function() {
                        Tt && (kt ? Tt.current.pause() : Tt.current.play())
                    },
                    className: "hide z-[1000]  shadow-xl fixed bottom-4 right-4 btn w-10 h-10 rounded-full flex justify-center items-center"
                }, kt ? i.a.createElement(v.b, null) : i.a.createElement(v.c, null)), i.a.createElement("audio", {
                    src: Ee.a,
                    ref: gt,
                    loop: G
                }), i.a.createElement(ke, {
                    diceRef: wt,
                    score: _,
                    setScore: U,
                    score2: z,
                    setScore2: $,
                    mint: function(e, t) {
                        return At.apply(this, arguments)
                    },
                    loading: G,
                    loadWeb3: function() {
                        n || xt()
                    },
                    account: n,
                    totalBets: h,
                    totalStakesValue: M,
                    userStakes: S,
                    unclaimedRewards: C,
                    totalClaimedRewards: I,
                    allBets: ee,
                    won: se,
                    balance: ce,
                    diceRef2: vt,
                    transactionOngoing: de,
                    setTransactionOngoing: be,
                    apr: we,
                    winnings: Ne,
                    claimWinnings: function() {
                        return Wt.apply(this, arguments)
                    },
                    totalWinnings: Re,
                    unClaimedWinnings: _e,
                    userLostBalance: Ye,
                    lastStakeTime: Je,
                    stakeLockedDuration: Ze,
                    referralEarnings: lt,
                    claimedWinning: pt,
                    claimReferral: function() {
                        return It.apply(this, arguments)
                    },
                    maxBetAmount: bt
                }), i.a.createElement(Ce, {
                    open: tt,
                    setOpen: nt,
                    handleClose: function() {
                        return nt(!1)
                    },
                    handleOpen: xt,
                    connect: Rt
                }), i.a.createElement(De, {
                    open: Te,
                    setOpen: he,
                    msg: "Please Connect to BNB TESTNET!"
                }), i.a.createElement(Ve, {
                    open: jt.open,
                    handleClose: function() {
                        St(function(e) {
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                open: !1
                            })
                        })
                    },
                    handleOpen: Bt,
                    message: jt.message
                }))
            }
            var qe = n(754),
                Ye = n(331),
                ze = n(332),
                $e = n(141);
            qe.a.addDefaultLocale(Ye), qe.a.addLocale(ze);
            var Ke = document.getElementById("root");
            s.a.render(i.a.createElement(g.b, {
                getLibrary: function(e) {
                    return new b.a(e)
                }
            }, i.a.createElement($e.a, null, i.a.createElement(Fe.c, null, i.a.createElement(Fe.a, {
                index: !0,
                element: i.a.createElement(He, null)
            }), i.a.createElement(Fe.a, {
                path: "/:id",
                element: i.a.createElement(He, null)
            })))), Ke)
        }
    },
    [
        [356, 1, 2]
    ]
]);
//# sourceMappingURL=main.41e18ec8.chunk.js.map