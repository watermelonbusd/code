



(this.webpackJsonpdinobusd = this.webpackJsonpdinobusd || []).push([
    [0], {
        351: function(e, t, n) {},
        354: function(e, t, n) {},
        355: function(e, t) {},
        395: function(e, t) {},
        397: function(e, t) {},
        419: function(e, t) {},
        421: function(e, t) {},
        433: function(e, t) {},
        434: function(e, t) {},
        456: function(e, t) {},
        458: function(e, t) {},
        460: function(e, t) {},
        564: function(e, t) {},
        574: function(e, t) {},
        588: function(e, t) {},
        589: function(e, t) {},
        658: function(e, t) {},
        660: function(e, t) {},
        667: function(e, t) {},
        668: function(e, t) {},
        693: function(e, t) {},
        700: function(e, t) {},
        763: function(e, t) {},
        788: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(11),
                s = n.n(a),
                r = n(332),
                i = n.n(r),
                c = (n(351), n(352), n(353), n(354), n(1)),
                l = n(4),
                d = n(19),
                u = n(344),
                o = n(341),
                b = n.n(o),
                p = function() {
                    return new b.a({
                        cacheProvider: !0,
                        providerOptions: {
                            walletconnect: {
                                package: u.a,
                                options: {
                                    rpc: {
                                    56: "https://bsc-dataseed.binance.org"
                                    //97:"https://data-seed-prebsc-1-s1.binance.org"
                                    }
                                }
                            }
                        }
                    })
                },
                j = n(72),
                y = n.n(j),
                m = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "DailyRoi",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "Ref_Withdraw",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "alreadyInvested",
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
                    name: "approvedWithdrawal",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "checkAlready",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "claimDailyRewards",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "claimTime",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_ref",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "deposit",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "depositFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dev",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "fee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "init",
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
                    name: "investments",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "invested",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "max",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "min",
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
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "refFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "refTotalWithdraw",
                    outputs: [{
                        internalType: "address",
                        name: "ref_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "totalWithdraw",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "ref_fee",
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
                    name: "refferal",
                    outputs: [{
                        internalType: "address",
                        name: "ref_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "reward",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "roi",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "signal_market",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "tokenAdress",
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
                    name: "totalRewards",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
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
                    name: "totalWithdraw",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "unStake",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_userAddress",
                        type: "address"
                    }],
                    name: "userReward",
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
                    name: "weekly",
                    outputs: [{
                        internalType: "address",
                        name: "user_address",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
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
                    name: "withdrawFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdraw_fee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdrawal",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }];

            function f(e) {
                return new e.eth.Contract(m, "0x237C00F9142C2ba9858C7f5d622Df429F870e850")
            }
            var h = [{
                inputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                constant: !0,
                inputs: [],
                name: "_decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "_name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "_symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "burn",
                outputs: [{
                    internalType: "bool",
                    name: "",
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
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "subtractedValue",
                    type: "uint256"
                }],
                name: "decreaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "getOwner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "addedValue",
                    type: "uint256"
                }],
                name: "increaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "mint",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }];

            function O(e) {
                //return new e.eth.Contract(h, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56")  //mainet
                return new e.eth.Contract(h, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56")
            }
            var xJ = n.p + "./static/media/BNB.png",
                vJ = n.p + "./../static/media/binance.png",
                x = n.p + "./../logo.02f055dd.png",
                v = n.p + "./../static/media/audit.f8baf910.png",
                w = n.p + "./../dapprader.ffef5d36.png",
                g = n.p + "./..static/media/dapp.3e33cffc.png",
                T = n(0),
                k = p(),
                N = function() {
                    var e = Object(a.useState)(),
                        t = Object(d.a)(e, 2),
                        n = t[0],
                        s = t[1],
                        r = Object(a.useState)(),
                        i = Object(d.a)(r, 2),
                        u = i[0],
                        o = i[1],
                        b = Object(a.useState)(),
                        p = Object(d.a)(b, 2),
                        j = p[0],
                        m = p[1],
                        h = Object(a.useState)(!1),
                        N = Object(d.a)(h, 2),
                        S = N[0],
                        D = N[1],
                        M = Object(a.useState)(),
                        F = Object(d.a)(M, 2),
                        A = F[0],
                        B = F[1],
                        U = Object(a.useState)(!0),
                        C = Object(d.a)(U, 2),
                        R = C[0],
                        W = C[1],
                        _ = Object(a.useState)(null),
                        E = Object(d.a)(_, 2),
                        I = (E[0], E[1], Object(a.useState)(null)),
                        P = Object(d.a)(I, 2),
                        L = (P[0], P[1]),
                        J = Object(a.useState)(null),
                        V = Object(d.a)(J, 2),
                        H = V[0],
                        X = V[1],
                        Y = Object(a.useState)("CONNECT"),
                        q = Object(d.a)(Y, 2),
                        z = q[0],
                        G = q[1],
                        K = Object(a.useState)("You need to deposit first to activate your Ref Link."),
                        Q = Object(d.a)(K, 2),
                        Z = Q[0],
                        $ = Q[1],
                        ee = Object(a.useState)(0),
                        te = Object(d.a)(ee, 2),
                        ne = te[0],
                        ae = te[1],
                        se = Object(a.useState)(0),
                        re = Object(d.a)(se, 2),
                        ie = re[0],
                        ce = re[1],
                        le = Object(a.useState)(0),
                        de = Object(d.a)(le, 2),
                        ue = de[0],
                        oe = de[1],
                        be = Object(a.useState)(0),
                        pe = Object(d.a)(be, 2),
                        je = pe[0],
                        ye = pe[1],
                        me = Object(a.useState)(0),
                        fe = Object(d.a)(me, 2),
                        he = fe[0],
                        Oe = fe[1],
                        xe = Object(a.useState)(0),
                        ve = Object(d.a)(xe, 2),
                        we = ve[0],
                        ge = ve[1],
                        Te = Object(a.useState)(0),
                        ke = Object(d.a)(Te, 2),
                        Ne = ke[0],
                        Se = ke[1],
                        De = Object(a.useState)(0),
                        Me = Object(d.a)(De, 2),
                        Fe = Me[0],
                        Ae = Me[1],
                        Be = Object(a.useState)(0),
                        Ue = Object(d.a)(Be, 2),
                        Ce = Ue[0],
                        Re = Ue[1],
                        We = Object(a.useState)(0),
                        _e = Object(d.a)(We, 2),
                        Ee = _e[0],
                        Ie = _e[1],
                        Pe = Object(a.useState)(0),
                        Le = Object(d.a)(Pe, 2),
                        Je = Le[0],
                        Ve = Le[1],
                        He = Object(a.useState)(0),
                        Xe = Object(d.a)(He, 2),
                        Ye = Xe[0],
                        qe = Xe[1],
                        ze = Object(a.useState)(0),
                        Ge = Object(d.a)(ze, 2),
                        Ke = Ge[0],
                        Qe = Ge[1],
                        Ze = Object(a.useState)(""),
                        $e = Object(d.a)(Ze, 2),
                        et = $e[0],
                        tt = $e[1],
                        nt = Object(a.useState)(0),
                        at = Object(d.a)(nt, 2),
                        st = (at[0], at[1]),
                        rt = Object(a.useState)(""),
                        it = Object(d.a)(rt, 2),
                        ct = it[0],
                        lt = it[1],
                        dt = Object(a.useState)(),
                        ut = Object(d.a)(dt, 2),
                        ot = ut[0],
                        bt = ut[1],
                        pt = Object(a.useState)(""),
                        jt = Object(d.a)(pt, 2),
                        yt = jt[0],
                        mt = jt[1],
                        
                        ft = new URLSearchParams(window.location.search).get("ref");
                    null === ft && (ft = "0x4c18d014480396beaafce25b45a2de7bb15acdea");
                    var ht = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e() {
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, k.clearCachedProvider();
                                        case 2:
                                            if (!A || !A.provider || "function" != typeof A.provider.disconnect) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 5, A.provider.disconnect();
                                        case 5:
                                            D(!1), window.location.reload();
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ot = Object(a.useCallback)(Object(l.a)(Object(c.a)().mark((function e() {
                            var t, n, a;
                            return Object(c.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, k.connect();
                                    case 2:
                                        return t = e.sent, B(new y.a(t)), n = t.selectedAddress ? t.selectedAddress : t.accounts[0], a = xt(n), m(new y.a(t)), e.t0 = s, e.next = 10, f(new y.a(t));
                                    case 10:
                                        return e.t1 = e.sent, (0, e.t0)(e.t1), e.t2 = o, e.next = 15, O(new y.a(t));
                                    case 15:
                                        e.t3 = e.sent, (0, e.t2)(e.t3), L([n]), X(n), D(!0), G(a), t.on("chainChanged", (function(e) {
                                            console.log("chain changed to ".concat(e, "! updating providers")), B(new y.a(t))
                                        })), t.on("accountsChanged", (function() {
                                            console.log("account changed!"), B(new y.a(t))
                                        })), t.on("disconnect", (function(e, t) {
                                            console.log(e, t), ht()
                                        }));
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [B]);
                    Object(a.useEffect)((function() {
                        setInterval((function() {
                            W((function(e) {
                                return !e
                            }))
                        }), 1e4)
                    }), []), Object(a.useEffect)((function() {
                        k.cachedProvider && Ot()
                    }), []);
                    var xt = function(e) {
                        return e ? e.substr(0, 3) + "..." + e.substr(38, 41) : ""
                    };
                    Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e() {
                                var t;
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!S || !j) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 3, j.eth.getBalance(H);
                                        case 3:
                                            t = e.sent, $("https://goldenbusd.watermelonbusd.com/?ref=" + H), st(j.utils.fromWei(t));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [S, H, j, R]), Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e() {
                                var t;
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (S && j) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, n.methods.getBalance().call();
                                        case 4:
                                            t = e.sent, ae(t / 1e18);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [S, j, n, R]), Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e() {
                                var t, a, s, r;
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!S || !n) {
                                                e.next = 18;
                                                break
                                            }
                                            return console.log(H), e.next = 4, u.methods.balanceOf(H).call();
                                        case 4:
                                            return t = e.sent, ce(t), e.next = 8, n.methods.investments(H).call();
                                        case 8:
                                            return a = e.sent, oe(a.invested / 1e18), e.next = 12, n.methods.DailyRoi(a.invested).call();
                                        case 12:
                                            return s = e.sent, ye(s / 1e18), e.next = 16, n.methods.userReward(H).call();
                                        case 16:
                                            r = e.sent, Oe(r / 1e18);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [R]), Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e() {
                                var t, a;
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!S || !n) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 3, n.methods.approvedWithdrawal(H).call();
                                        case 3:
                                            return t = e.sent, Ae(t.amount / 1e18), e.next = 7, n.methods.totalWithdraw(H).call();
                                        case 7:
                                            a = e.sent, Ve(a.amount / 1e18);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [R]), Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e() {
                                var t, a, s, r, i, l;
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!S || !n) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.next = 3, n.methods.claimTime(H).call();
                                        case 3:
                                            if (!((t = e.sent).startTime > 0)) {
                                                e.next = 16;
                                                break
                                            }
                                            return a = new Intl.DateTimeFormat("en-US", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            }).format(t.startTime + "000"), s = new Intl.DateTimeFormat("en-US", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            }).format(t.deadline + "000"), ge(a), Se(s), e.next = 11, n.methods.weekly(H).call();
                                        case 11:
                                            r = e.sent, i = new Intl.DateTimeFormat("en-US", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            }).format(r.startTime + "000"), l = new Intl.DateTimeFormat("en-US", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            }).format(r.deadline + "000"), Re(i), Ie(l);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [R]), Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e() {
                                var t, a;
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!S || !n) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 3, n.methods.refferal(H).call();
                                        case 3:
                                            return t = e.sent, qe(t.reward / 1e18), e.next = 7, n.methods.refTotalWithdraw(H).call();
                                        case 7:
                                            a = e.sent, Qe(a.totalWithdraw / 1e18);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [R]), Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e() {
                                var t;
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!S || !u) {
                                                e.next = 6;
                                                break
                                            }
                                            return "0x237C00F9142C2ba9858C7f5d622Df429F870e850", e.next = 4, u.methods.allowance(H, "0x237C00F9142C2ba9858C7f5d622Df429F870e850").call();
                                        case 4:
                                            t = e.sent, bt(t);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [R]);
                    var vt = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e(t) {
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !S || !n) {
                                                e.next = 9;
                                                break
                                            }
                                            return console.log("success"), lt("Claiming Funds"), e.next = 6, n.methods.claimDailyRewards().send({
                                                from: H
                                            });
                                        case 6:
                                            lt("Claimed Successfully"), e.next = 10;
                                            break;
                                        case 9:
                                            console.log("connect wallet");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        wt = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e(t) {
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !S || !n) {
                                                e.next = 9;
                                                break
                                            }
                                            return console.log("success"), lt("Withdrawing funds"), e.next = 6, n.methods.withdrawal().send({
                                                from: H
                                            });
                                        case 6:
                                            lt("Successfully Withdraw"), e.next = 10;
                                            break;
                                        case 9:
                                            console.log("connect wallet");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        gt = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e(t) {
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !S || !n) {
                                                e.next = 9;
                                                break
                                            }
                                            return console.log("success"), lt("Rewards withdrawing"), e.next = 6, n.methods.Ref_Withdraw().send({
                                                from: H
                                            });
                                        case 6:
                                            lt("Successfully Withdraw"), e.next = 10;
                                            break;
                                        case 9:
                                            console.log("connect wallet");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Tt = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e(t) {
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !S || !u) {
                                                e.next = 11;
                                                break
                                            }
                                            return console.log("success"), lt("Approving BUSD"), "0x237C00F9142C2ba9858C7f5d622Df429F870e850", "99999999999999999999999999999999999", e.next = 8, u.methods.approve("0x237C00F9142C2ba9858C7f5d622Df429F870e850", "99999999999999999999999999999999999").send({
                                                from: H
                                            });
                                        case 8:
                                            lt("Approved Successfully"), e.next = 12;
                                            break;
                                        case 11:
                                            console.log("connect wallet");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        kt = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e(t) {
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), lt("");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Nt = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e(t) {
                                var a;
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !S || !n) {
                                                e.next = 10;
                                                break
                                            }
                                            return console.log("success"), lt("Deposit Pending...!"), a = j.utils.toWei(et), e.next = 7, n.methods.deposit(ft, a).send({
                                                from: H
                                            });
                                        case 7:
                                            lt("Successfully Deposited"), e.next = 11;
                                            break;
                                        case 10:
                                            console.log("connect wallet");
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        St = function() {
                            var e = Object(l.a)(Object(c.a)().mark((function e(t) {
                                return Object(c.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !S || !n) {
                                                e.next = 8;
                                                break
                                            }
                                            return lt("Unstaking"), e.next = 5, n.methods.unStake().send({
                                                from: H
                                            });
                                        case 5:
                                            lt("UnStaked Successfully"), e.next = 9;
                                            break;
                                        case 8:
                                            console.log("connect Wallet");
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(T.jsxs)(T.Fragment, {
                        children: [Object(T.jsx)("nav", {
                            className: "navbar navbar-expand-sm navbar-dark",
                            style: {
                                background: "black"
                            },
                            children: Object(T.jsxs)("div", {
                                className: "container-fluid",
                                children: [Object(T.jsx)("a", {
                                    className: "navbar-brand",
                                    href: "https://goldenbusd.watermelonbusd.com",
                                    children: Object(T.jsx)("img", {
                                        src: "/static/media/logo.02f055dd.png",
                                        alt: "logo",
                                        className: "img-fluid",
                                        style: {
                                            width: "70px"
                                        }
                                    })
                                }),
                                
                                Object(T.jsxs)("ul", {
                                   className: "navbar-nav me-auto",
                                   children: [ 
                                    Object(T.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(T.jsx)("a", {
                                            className: "nav-link",
                                            href: "/static/media/satostake_white.pdf",
                                            children: ""
                                        })
                                    }),
                                    Object(T.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(T.jsx)("a", {
                                            className: "nav-link",
                                            href: "https://georgestamp.xyz/2022/08/golden-busd/",
                                            children: "AUDIT"
                                        })
                                    }), Object(T.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(T.jsx)("a", {
                                            className: "nav-link",
                                            href: "https://www.bscscan.com/address/0x237C00F9142C2ba9858C7f5d622Df429F870e850",
                                            children: "CONTRACT"
                                        })
                                    }), 

                                    Object(T.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(T.jsx)("a", {
                                            className: "nav-link",
                                            href: "https://t.me/GoldenBusdChampions",
                                            children: "TELEGRAM"
                                        })
                                    })]
                                }), Object(T.jsx)("a", {
                                    href: "https://goldenbusdlotto.watermelonbusd.com",
                                    className: "btn btn-primary btn-lg btnd",
                                    style: {
                                        background: "black",
                                        color: "#FFD700",
                                        border: "1px solid #fff"
                                    },
                                    children: "Lotto"
                                }), Object(T.jsx)("a", {
                                    href: "https://pancakeswap.finance/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56",
                                    className: "btn btn-primary btn-lg btnd",
                                    style: {
                                        background: "black",
                                        color: "#FFD700",
                                        border: "1px solid #fff"
                                    },
                                    children: "BUY BUSD"
                                }), Object(T.jsxs)("button", {
                                    href: "https://pancakeswap.finance/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56",
                                    className: "btn btn-primary btn-lg btnd",
                                    style: {
                                        background: "#FFD700",
                                        color: "black",
                                        border: "1px solid #fff"
                                    },
                                    onClick: Ot,
                                    children: [Object(T.jsx)("i", {
                                        className: "fas fa-wallet"
                                    }), " ", z]
                                })]
                            })
                        }), Object(T.jsx)("br", {}), Object(T.jsxs)("div", {
                            className: "container",
                            children: ["" !== ct ? Object(T.jsx)(T.Fragment, {
                                children: Object(T.jsx)("center", {
                                    children: Object(T.jsxs)("div", {
                                        className: "alert alert-warning alert-dismissible",
                                        children: [Object(T.jsx)("p", {
                                            onClick: kt,
                                            className: "badge bg-dark",
                                            style: {
                                                float: "right",
                                                cursor: "pointer"
                                            },
                                            children: "X"
                                        }), ct]
                                    })
                                })
                            }) : Object(T.jsx)(T.Fragment, {}), Object(T.jsxs)("div", {
                                className: "row",
                                children: [Object(T.jsx)("div", {
                                    className: "col-sm-3",
                                    children: Object(T.jsx)("div", {
                                        className: "card",
                                        children: Object(T.jsx)("div", {
                                            className: "card-body",
                                            children: Object(T.jsxs)("center", {
                                                children: ["  ", Object(T.jsx)("h3", {
                                                    children: "TVL"
                                                }), Object(T.jsxs)("h3", {
                                                    
                                                    children: [" ", Number(ne).toFixed(4), " BUSD "]
                                                })]
                                            })
                                        })
                                    })
                                }), Object(T.jsx)("div", {
                                    className: "col-sm-3",
                                    children: Object(T.jsx)("div", {
                                        className: "card",
                                        children: Object(T.jsx)("div", {
                                            className: "card-body",
                                            children: Object(T.jsxs)("center", {
                                                children: ["  ", Object(T.jsx)("h3", {
                                                    children: "Daily Return (Fixed)"
                                                }), Object(T.jsx)("h3", {
                                                    children: "4%"
                                                })]
                                            })
                                        })
                                    })
                                }), Object(T.jsx)("div", {
                                    className: "col-sm-3",
                                    children: Object(T.jsx)("div", {
                                        className: "card",
                                        children: Object(T.jsx)("div", {
                                            className: "card-body",
                                            children: Object(T.jsxs)("center", {
                                                children: ["  ", Object(T.jsx)("h3", {
                                                    children: "Withdrawal Fee"
                                                }), Object(T.jsx)("h3", {
                                                    children: "2%"
                                                })]
                                            })
                                        })
                                    })
                                }), Object(T.jsx)("div", {
                                    className: "col-sm-3",
                                    children: Object(T.jsx)("div", {
                                        className: "card",
                                        children: Object(T.jsx)("div", {
                                            className: "card-body",
                                            children: Object(T.jsxs)("center", {
                                                children: ["  ", Object(T.jsx)("h3", {
                                                    children: "Deposit Fee"
                                                }), Object(T.jsx)("h4", {
                                                    children: "Marketing 1% + Devs 1%"
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })]
                        }), Object(T.jsx)("br", {}), " ", Object(T.jsxs)("div", {
                            className: "container",
                            children: [Object(T.jsxs)("div", {
                                className: "row",
                                children: [Object(T.jsx)("div", {
                                    className: "col-sm-4",
                                    children: Object(T.jsx)("div", {
                                        className: "card cardDino",
                                        children: Object(T.jsxs)("div", {
                                            className: "card-body",
                                            children: [Object(T.jsx)("h4", {
                                                children: Object(T.jsx)("b", {
                                                    children: "Investment Portal"
                                                })
                                            }), Object(T.jsx)("hr", {}), Object(T.jsx)("table", {
                                                className: "table",
                                                children: Object(T.jsxs)("tbody", {
                                                    children: [Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsx)("h5", {
                                                                children: Object(T.jsx)("b", {
                                                                    children: "Wallet Balance"
                                                                })
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h5", {
                                                                children: [Number(ie / 1e18).toFixed(4), " BUSD"]
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsx)("h5", {
                                                                children: Object(T.jsx)("b", {
                                                                    children: "User Staked"
                                                                })
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h5", {
                                                                children: [Number(ue).toFixed(4), " BUSD"]
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsx)("h5", {
                                                                children: Object(T.jsx)("b", {
                                                                    children: "2x Profit"
                                                                })
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h5", {
                                                                children: [Number(2 * ue).toFixed(4), " BUSD"]
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsx)("h5", {
                                                                children: Object(T.jsx)("b", {
                                                                    children: "2X Remaining"
                                                                })
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h5", {
                                                                children: [Number(2 * ue - Je).toFixed(4), " BUSD"]
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsx)("h5", {
                                                                children: Object(T.jsx)("b", {
                                                                    children: "Daily User ROI"
                                                                })
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h5", {
                                                                children: [Number(je).toFixed(4), " BUSD"]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }), Object(T.jsx)("form", {
                                                onSubmit: Nt,
                                                children: Object(T.jsx)("table", {
                                                    className: "table",
                                                    children: Object(T.jsx)("tbody", {
                                                        children: Object(T.jsxs)("tr", {
                                                            children: [Object(T.jsxs)("td", {
                                                                children: ["  ", Object(T.jsx)("input", {
                                                                    type: "number",
                                                                    placeholder: "50 BUSD",
                                                                    className: "form-control",
                                                                    value: et,
                                                                    onChange: function(e) {
                                                                        return tt(e.target.value)
                                                                    }
                                                                })]
                                                            }), Object(T.jsx)("td", {
                                                                style: {
                                                                    textAlign: "right"
                                                                },
                                                                children: ot > 0 ? Object(T.jsx)(T.Fragment, {
                                                                    children: Object(T.jsx)("button", {
                                                                        className: "btn btn-primary btn-lg",
                                                                        style: {
                                                                            background: "black",
                                                                            color: "#fff",
                                                                            border: "1px solid #fff"
                                                                        },
                                                                        children: "DEPOSIT"
                                                                    })
                                                                }) : Object(T.jsx)(T.Fragment, {
                                                                    children: Object(T.jsx)("button", {
                                                                        className: "btn btn-primary btn-lg",
                                                                        style: {
                                                                            background: "black",
                                                                            color: "#fff",
                                                                            border: "1px solid #fff"
                                                                        },
                                                                        onClick: Tt,
                                                                        children: "APPROVE"
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })
                                            }), Object(T.jsx)("center", {
                                                children: Object(T.jsx)("button", {
                                                    className: "btn btn-primary btn-lg",
                                                    style: {
                                                        background: "black",
                                                        color: "#fff",
                                                        border: "1px solid #fff",
                                                        marginTop: "-10px"
                                                    },
                                                    onClick: St,
                                                    children: "Unstake(50% Stays in TVL)"
                                                })
                                            })]
                                        })
                                    })
                                }), Object(T.jsx)("div", {
                                    className: "col-sm-4",
                                    children: Object(T.jsx)("div", {
                                        className: "card cardDino",
                                        children: Object(T.jsxs)("div", {
                                            className: "card-body",
                                            children: [Object(T.jsx)("h4", {
                                                children: Object(T.jsx)("b", {
                                                    children: "Statistics"
                                                })
                                            }), Object(T.jsx)("hr", {}), Object(T.jsx)("table", {
                                                className: "table",
                                                children: Object(T.jsxs)("tbody", {
                                                    children: [Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsxs)("h6", {
                                                                children: [Object(T.jsx)("b", {
                                                                    children: "Daily cap rewards"
                                                                }), " ", Object(T.jsx)("br", {}), " ", Number(he).toFixed(6), "/", je, " BUSD"]
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsx)("button", {
                                                                className: "btn btn-primary btn-lg",
                                                                style: {
                                                                    background: "black",
                                                                    color: "#fff",
                                                                    border: "1px solid #fff"
                                                                },
                                                                onClick: vt,
                                                                children: "Claim"
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsxs)("h6", {
                                                                children: [Object(T.jsx)("b", {
                                                                    children: "Last Claim"
                                                                }), Object(T.jsx)("br", {}), we]
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h6", {
                                                                children: [Object(T.jsx)("b", {
                                                                    children: "Next Claim"
                                                                }), Object(T.jsx)("br", {}), Ne]
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsxs)("h6", {
                                                                children: [Object(T.jsx)("b", {
                                                                    children: "Available Withdrawal 50% Allowed"
                                                                }), " ", Object(T.jsx)("br", {}), Number(Fe).toFixed(6), " BUSD"]
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsx)("button", {
                                                                className: "btn btn-primary btn-lg",
                                                                style: {
                                                                    background: "black",
                                                                    color: "#fff",
                                                                    border: "1px solid #fff"
                                                                },
                                                                onClick: wt,
                                                                children: "Withdraw"
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsxs)("h6", {
                                                                children: [Object(T.jsx)("b", {
                                                                    children: "Last Withdrawal"
                                                                }), Object(T.jsx)("br", {}), Ce]
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h6", {
                                                                children: [Object(T.jsx)("b", {
                                                                    children: "Next Withdrawal"
                                                                }), Object(T.jsx)("br", {}), Ee]
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        style: {
                                                            border: "none"
                                                        },
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsx)("h5", {
                                                                children: "Total Withdrawn"
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h5", {
                                                                children: [Number(Je).toFixed(2), " BUSD"]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                }), Object(T.jsxs)("div", {
                                    className: "col-sm-4",
                                    children: [Object(T.jsx)("div", {
                                        className: "card",
                                        children: Object(T.jsxs)("div", {
                                            className: "card-body",
                                            children: [Object(T.jsx)("h4", {
                                                children: Object(T.jsx)("b", {
                                                    children: "Referral Rewards  15%"
                                                })
                                            }), Object(T.jsx)("hr", {}), Object(T.jsx)("table", {
                                                className: "table",
                                                children: Object(T.jsxs)("tbody", {
                                                    children: [Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsx)("h5", {
                                                                children: "BUSD Rewards"
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h5", {
                                                                children: [Ye, " BUSD"]
                                                            })
                                                        })]
                                                    }), Object(T.jsxs)("tr", {
                                                        children: [Object(T.jsx)("td", {
                                                            children: Object(T.jsx)("h5", {
                                                                children: "Total Withdrawn"
                                                            })
                                                        }), Object(T.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Object(T.jsxs)("h5", {
                                                                children: [Ke, " BUSD"]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }), Object(T.jsxs)("center", {
                                                children: [" ", Object(T.jsx)("button", {
                                                    className: "btn btn-primary btn-lg",
                                                    style: {
                                                        background: "black",
                                                        color: "#fff",
                                                        border: "1px solid #fff"
                                                    },
                                                    onClick: gt,
                                                    children: "Withdraw Rewards"
                                                }), " "]
                                            })]
                                        })
                                    }), Object(T.jsx)("br", {}), Object(T.jsx)("div", {
                                        className: "card",
                                        children: Object(T.jsxs)("div", {
                                            className: "card-body",
                                            children: [Object(T.jsx)("h4", {
                                                children: Object(T.jsx)("b", {
                                                    children: "Referral Link"
                                                })
                                            }), Object(T.jsx)("hr", {}), Object(T.jsxs)("form", {
                                                children: ["Share your Referral Link To Earn 15% of BUSD", Object(T.jsx)("input", {
                                                    type: "text",
                                                    value: Z,
                                                    className: "form-control"
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            }), Object(T.jsx)("br", {}), Object(T.jsx)("div", {
                                className: "row",
                                children: Object(T.jsx)("div", {
                                    className: "col-sm-12",
                                    children: Object(T.jsxs)("div", {
                                        className: "card",
                                        children: [Object(T.jsx)("div", {
                                            className: "card-header",
                                            children: "Investment Calculator"
                                        }), Object(T.jsx)("div", {
                                            className: "card-body",
                                            children: Object(T.jsxs)("div", {
                                                className: "row",
                                                children: [Object(T.jsxs)("div", {
                                                    className: "col-sm-6",
                                                    children: [Object(T.jsx)("h3", {
                                                        children: "BUSD AMOUNT"
                                                    }), Object(T.jsx)("input", {
                                                        type: "number",
                                                        placeholder: "50",
                                                        className: "form-control",
                                                        value: yt,
                                                        onChange: function(e) {
                                                            return mt(e.target.value)
                                                        }
                                                    }), Object(T.jsxs)("p", {
                                                        children: ["Amount of returns calculated on the basis of investment amount.", Object(T.jsx)("br", {}), Object(T.jsx)("b", {
                                                            children: "Note:"
                                                        }), " Min investment is 50 BUSD & max amount of investment in 10k BUSD."]
                                                    })]
                                                }), Object(T.jsxs)("div", {
                                                    className: "col-sm-6",
                                                    style: {
                                                        textAlign: "right"
                                                    },
                                                    children: [Object(T.jsx)("h3", {
                                                        children: "Return of Investment"
                                                    }), Object(T.jsxs)("p", {
                                                        children: ["Daily Return: ", yt / 100 * 4, " BUSD ", Object(T.jsx)("br", {}), " Weekly Return: ", yt / 100 * 4 * 7, " BUSD  ", Object(T.jsx)("br", {}), " Monthly Return: ", yt / 100 * 4 * 30, " BUSD "]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), Object(T.jsx)("br", {}), Object(T.jsx)("br", {}),Object(T.jsx)("br", {}),Object(T.jsx)("br", {}),
                           // Object(T.jsxs)("center", {
                             //   children: [Object(T.jsx)("h2", {
                               //     children: "                                  "
                             //   }), //Object(T.jsx)("p", {
                                    //children: "Feelin Lucky? "
                                //}), 
                              //  Object(T.jsx)("a", {
                               //     href: "",
                                //    children: Object(T.jsx)("button", {
                                 //       className: "btn btn-primary btn-lg btnd",
                                  //      style: {
                                   //         background: "black",
                                   //         color: "#FFD700",
                                   //         border: "1px solid #fff"
                                   //     },
                                  //      children: "PLAY NOW"
                               //     })
                              //  }
                              //  )]
                           // }),
                             
                            Object(T.jsx)("br", {}), Object(T.jsxs)("center", {
                                children: [Object(T.jsx)("h2", {
                                    children: ""
                                }), Object(T.jsxs)("a", {
                                    href: "",
                                    children: [Object(T.jsx)("img", {
                                        src: vJ,
                                        alt: vJ,
                                        className: "img-fluid",
                                        style: {
                                            width: "100px"
                                        }
                                    }), " "]
                                })]
                            }),
                            Object(T.jsx)("br", {}), Object(T.jsxs)("center", {
                                children: [Object(T.jsx)("h2", {
                                    children: ""
                                })]
                            }),
                            Object(T.jsxs)("center", {
                                children: [Object(T.jsx)("br", {}), Object(T.jsx)("h2", {
                                    children: "Featured On"
                                }), Object(T.jsx)("a", {
                                    href: "https://dappradar.com/binance-smart-chain/high-risk/goldenbusd",
                                    children: Object(T.jsx)("img", {
                                        src: "/static/media/dapprader.ffef5d36.png",
                                        alt: "dapprader",
                                        width: 200
                                    })
                                }), Object(T.jsxs)("a", {
                                    href: "https://www.dapp.com/app/",
                                    children: [Object(T.jsx)("img", {
                                        src: "/static/media/dapp.3e33cffc.png",
                                        alt: "dapprader",
                                        width: 200
                                    }), ]
                                })]
                            }), Object(T.jsx)("center", {
                                children: Object(T.jsxs)("h5", {
                                    children: [ Object(T.jsxs)("a", {
                                        href: "https://t.me/GoldenBusdChampions",
                                        style: {
                                            color: "#FFD700",
                                            textDecoration: "none"
                                        },
                                        children: [Object(T.jsx)("i", {
                                            class: ""
                                        }), " Telegram "]
                                    }), " || ", Object(T.jsxs)("a", {
                                        href: "https://georgestamp.xyz/2022/08/golden-busd/",
                                        style: {
                                            color: "#FFD700",
                                            textDecoration: "none"
                                        },
                                        children: [Object(T.jsx)("i", {
                                            class: "fa fa"
                                        }), " Audit "]
                                    }), "|| ", Object(T.jsxs)("a", {
                                        href: "https://www.bscscan.com/address/0x237C00F9142C2ba9858C7f5d622Df429F870e850",
                                        style: {
                                            color: "#FFD700",
                                            textDecoration: "none"
                                        },
                                        children: [Object(T.jsx)("i", {
                                            class: ""
                                        }), " Bscscan "]
                                    })]
                                })
                            }), ]
                        })]
                    })
                },
                S = function() {
                    return Object(T.jsx)(T.Fragment, {
                        children: Object(T.jsx)(N, {})
                    })
                },
                D = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 794)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            s = t.getFCP,
                            r = t.getLCP,
                            i = t.getTTFB;
                        n(e), a(e), s(e), r(e), i(e)
                    }))
                };
            i.a.render(Object(T.jsx)(s.a.StrictMode, {
                children: Object(T.jsx)(S, {})
            }), document.getElementById("root")), D()
        }
    },
    [
        [788, 1, 2]
    ]
]);


//# sourceMappingURL=main.705080b5.chunk.js.map