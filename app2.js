/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n, l, h, b, x, A, S, N, R, H, K, G, Q, g = [], Fe = Object.getPrototypeOf, j = g.slice, yt = g.flat ? function(e) {
        return g.flat.call(e)
    }
    : function(e) {
        return g.concat.apply([], e)
    }
    , ie = g.push, te = g.indexOf, ee = {}, Ce = ee.toString, J = ee.hasOwnProperty, tt = J.toString, Dt = tt.call(Object), a = {}, o = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }, D = function(e) {
        return e != null && e === e.window
    }, i = e.document, Ct = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }, _e, pe, it, rt, ft, gt, Ue, ce, Le, ye, nt, st, ot, dt, ht, mt, vt, me, ae, Pe, Me, Oe, Ae, ke, Ee;
    function He(e, t, n) {
        var s, a, o = (n = n || i).createElement("script");
        if (o.text = e,
        t)
            for (s in Ct)
                (a = t[s] || t.getAttribute && t.getAttribute(s)) && o.setAttribute(s, a);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function k(e) {
        return e == null ? e + "" : "object" == typeof e || "function" == typeof e ? ee[Ce.call(e)] || "object" : typeof e
    }
    _e = "3.6.0",
    n = function(e, t) {
        return new n.fn.init(e,t)
    }
    ;
    function we(e) {
        var t = !!e && "length"in e && e.length
          , n = k(e);
        return !o(e) && !D(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    n.fn = n.prototype = {
        jquery: _e,
        constructor: n,
        length: 0,
        toArray: function() {
            return j.call(this)
        },
        get: function(e) {
            return e == null ? j.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = n.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return n.each(this, e)
        },
        map: function(e) {
            return this.pushStack(n.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(j.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(n.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(n.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var n = this.length
              , t = +e + (e < 0 ? n : 0);
            return this.pushStack(0 <= t && t < n ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ie,
        sort: g.sort,
        splice: g.splice
    },
    n.extend = n.fn.extend = function() {
        var t, i, a, r, c, d, e = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof e && (l = e,
        e = arguments[s] || {},
        s++),
        "object" == typeof e || o(e) || (e = {}),
        s === u && (e = this,
        s--); s < u; s++)
            if (null != (c = arguments[s]))
                for (i in c)
                    t = c[i],
                    "__proto__" !== i && e !== t && (l && t && (n.isPlainObject(t) || (r = Array.isArray(t))) ? (a = e[i],
                    d = r && !Array.isArray(a) ? [] : r || n.isPlainObject(a) ? a : {},
                    r = !1,
                    e[i] = n.extend(l, d, t)) : void 0 !== t && (e[i] = t));
        return e
    }
    ,
    n.extend({
        expando: "jQuery" + (_e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !!e && "[object Object]" === Ce.call(e) && (!(t = Fe(e)) || "function" == typeof (n = J.call(t, "constructor") && t.constructor) && tt.call(n) === Dt)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            He(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var s, n = 0;
            if (we(e)) {
                for (s = e.length; n < s; n++)
                    if (!1 === t.call(e[n], n, e[n]))
                        break
            } else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var s = t || [];
            return e != null && (we(Object(e)) ? n.merge(s, "string" == typeof e ? [e] : e) : ie.call(s, e)),
            s
        },
        inArray: function(e, t, n) {
            return t == null ? -1 : te.call(t, e, n)
        },
        merge: function(e, t) {
            for (var o = +t.length, n = 0, s = e.length; n < o; n++)
                e[s++] = t[n];
            return e.length = s,
            e
        },
        grep: function(e, t, n) {
            for (var o = [], s = 0, i = e.length, a = !n; s < i; s++)
                !t(e[s], s) !== a && o.push(e[s]);
            return o
        },
        map: function(e, t, n) {
            var o, a, s = 0, i = [];
            if (we(e))
                for (a = e.length; s < a; s++)
                    null != (o = t(e[s], s, n)) && i.push(o);
            else
                for (s in e)
                    null != (o = t(e[s], s, n)) && i.push(o);
            return yt(i)
        },
        guid: 1,
        support: a
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = g[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    }),
    b = function(e) {
        var t, s, i, r, c, l, g, v, O, x, C, k, A, D, R, P, q, G, X, a = "sizzle" + 1 * new Date, h = e.document, p = 0, ge = 0, ae = F(), ne = F(), ce = F(), S = F(), W = function(e, t) {
            return e === t && (x = !0),
            0
        }, ue = {}.hasOwnProperty, j = [], he = j.pop, ve = j.push, b = j.push, ee = j.slice, _ = function(e, t) {
            for (var n = 0, s = e.length; n < s; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, V = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", n = `[\\x20\\t\\r\\n\\f]`, y = "(?:\\\\[\\da-fA-F]{1,6}" + n + `?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+`, Z = "\\[" + n + "*(" + y + ")(?:" + n + "*([*^$|!~]?=)" + n + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + y + "))|)" + n + "*\\]", H = ":(" + y + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Z + ")*)|.*)\\)|)", xe = new RegExp(n + "+","g"), L = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$","g"), Oe = new RegExp("^" + n + "*," + n + "*"), re = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"), we = new RegExp(n + "|>"), _e = new RegExp(H), ye = new RegExp("^" + y + "$"), N = {
            ID: new RegExp("^#(" + y + ")"),
            CLASS: new RegExp("^\\.(" + y + ")"),
            TAG: new RegExp("^(" + y + "|[*])"),
            ATTR: new RegExp("^" + Z),
            PSEUDO: new RegExp("^" + H),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)","i"),
            bool: new RegExp("^(?:" + V + ")$","i"),
            needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)","i")
        }, le = /HTML$/i, je = /^(?:input|select|textarea|button)$/i, be = /^h\d$/i, E = /^[^{]+\{\s*\[native \w/, pe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Y = /[+~]/, m = new RegExp("\\\\[\\da-fA-F]{1,6}" + n + `?|\\\\([^\\r\\n\\f])`,"g"), f = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, se = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = function() {
            v()
        }, de = M(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            b.apply(j = ee.call(h.childNodes), h.childNodes),
            j[h.childNodes.length].nodeType
        } catch {
            b = {
                apply: j.length ? function(e, t) {
                    ve.apply(e, ee.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, s = 0; e[n++] = t[s++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function o(e, t, n, o) {
            var c, d, u, f, p, g, j, m = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!o && (v(t),
            t = t || s,
            l)) {
                if (11 !== h && (p = pe.exec(e)))
                    if (c = p[1]) {
                        if (9 === h) {
                            {
                                if (!(d = t.getElementById(c)))
                                    return n;
                                if (d.id === c)
                                    return n.push(d),
                                    n
                            }
                        } else if (m && (d = m.getElementById(c)) && A(t, d) && d.id === c)
                            return n.push(d),
                            n
                    } else {
                        if (p[2])
                            return b.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((c = p[3]) && i.getElementsByClassName && t.getElementsByClassName)
                            return b.apply(n, t.getElementsByClassName(c)),
                            n
                    }
                if (i.qsa && !S[e + " "] && (!r || !r.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (j = e,
                    m = t,
                    1 === h && (we.test(e) || re.test(e))) {
                        for ((m = Y.test(e) && I(t.parentNode) || t) === t && i.scope || ((u = t.getAttribute("id")) ? u = u.replace(se, oe) : t.setAttribute("id", u = a)),
                        f = (g = k(e)).length; f--; )
                            g[f] = (u ? "#" + u : ":scope") + " " + z(g[f]);
                        j = g.join(",")
                    }
                    try {
                        return b.apply(n, m.querySelectorAll(j)),
                        n
                    } catch {
                        S(e, !0)
                    } finally {
                        u === a && t.removeAttribute("id")
                    }
                }
            }
            return G(e.replace(L, "$1"), t, n, o)
        }
        function F() {
            var e = [];
            return function n(s, o) {
                return e.push(s + " ") > t.cacheLength && delete n[e.shift()],
                n[s + " "] = o
            }
        }
        function d(e) {
            return e[a] = !0,
            e
        }
        function u(e) {
            var t = s.createElement("fieldset");
            try {
                return !!e(t)
            } catch {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function U(e, n) {
            for (var s = e.split("|"), o = s.length; o--; )
                t.attrHandle[s[o]] = n
        }
        function te(e, t) {
            var n = t && e
              , s = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (s)
                return s;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function me(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function J(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && de(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function w(e) {
            return d(function(t) {
                return t = +t,
                d(function(n, s) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                        n[o = i[a]] && (n[o] = !(s[o] = n[o]))
                })
            })
        }
        function I(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (C in i = o.support = {},
        X = o.isXML = function(e) {
            var n = e && e.namespaceURI
              , t = e && (e.ownerDocument || e).documentElement;
            return !le.test(n || t && t.nodeName || "HTML")
        }
        ,
        v = o.setDocument = function(e) {
            var o, p, d = e ? e.ownerDocument || e : h;
            return d != s && 9 === d.nodeType && d.documentElement && (c = (s = d).documentElement,
            l = !X(s),
            h != s && (o = s.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
            i.scope = u(function(e) {
                return c.appendChild(e).appendChild(s.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            i.attributes = u(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            i.getElementsByTagName = u(function(e) {
                return e.appendChild(s.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            i.getElementsByClassName = E.test(s.getElementsByClassName),
            i.getById = u(function(e) {
                return c.appendChild(e).id = a,
                !s.getElementsByName || !s.getElementsByName(a).length
            }),
            i.getById ? (t.filter.ID = function(e) {
                var t = e.replace(m, f);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            t.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && l) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (t.filter.ID = function(e) {
                var t = e.replace(m, f);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            t.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && l) {
                    var s, o, i, n = t.getElementById(e);
                    if (n) {
                        if ((s = n.getAttributeNode("id")) && s.value === e)
                            return [n];
                        for (i = t.getElementsByName(e),
                        o = 0; n = i[o++]; )
                            if ((s = n.getAttributeNode("id")) && s.value === e)
                                return [n]
                    }
                    return []
                }
            }
            ),
            t.find.TAG = i.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, s = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && s.push(n);
                    return s
                }
                return o
            }
            ,
            t.find.CLASS = i.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && l)
                    return t.getElementsByClassName(e)
            }
            ,
            O = [],
            r = [],
            (i.qsa = E.test(s.querySelectorAll)) && (u(function(e) {
                var t;
                c.appendChild(e).innerHTML = "<a id='" + a + "'></a><select id='" + a + `-
\\' msallowcapture=''><option selected=''></option></select>`,
                e.querySelectorAll("[msallowcapture^='']").length && r.push("[*^$]=" + n + `*(?:''|"")`),
                e.querySelectorAll("[selected]").length || r.push("\\[" + n + "*(?:value|" + V + ")"),
                e.querySelectorAll("[id~=" + a + "-]").length || r.push("~="),
                (t = s.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || r.push("\\[" + n + "*name" + n + "*=" + n + `*(?:''|"")`),
                e.querySelectorAll(":checked").length || r.push(":checked"),
                e.querySelectorAll("a#" + a + "+*").length || r.push(".#.+[+~]"),
                e.querySelectorAll("\\"),
                r.push(`[\\r\\n\\f]`)
            }),
            u(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = s.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && r.push("name" + n + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && r.push(":enabled", ":disabled"),
                c.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && r.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                r.push(",.*:")
            })),
            (i.matchesSelector = E.test(P = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.oMatchesSelector || c.msMatchesSelector)) && u(function(e) {
                i.disconnectedMatch = P.call(e, "*"),
                P.call(e, "[s!='']:x"),
                O.push("!=", H)
            }),
            r = r.length && new RegExp(r.join("|")),
            O = O.length && new RegExp(O.join("|")),
            p = E.test(c.compareDocumentPosition),
            A = p || E.test(c.contains) ? function(e, t) {
                var s = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(s.contains ? s.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            W = p ? function(e, t) {
                if (e === t)
                    return x = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e == s || e.ownerDocument == h && A(h, e) ? -1 : t == s || t.ownerDocument == h && A(h, t) ? 1 : g ? _(g, e) - _(g, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return x = !0,
                    0;
                var n, o = 0, r = e.parentNode, c = t.parentNode, i = [e], a = [t];
                if (!r || !c)
                    return e == s ? -1 : t == s ? 1 : r ? -1 : c ? 1 : g ? _(g, e) - _(g, t) : 0;
                if (r === c)
                    return te(e, t);
                for (n = e; n = n.parentNode; )
                    i.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; i[o] === a[o]; )
                    o++;
                return o ? te(i[o], a[o]) : i[o] == h ? -1 : a[o] == h ? 1 : 0
            }
            ),
            s
        }
        ,
        o.matches = function(e, t) {
            return o(e, null, null, t)
        }
        ,
        o.matchesSelector = function(e, t) {
            if (v(e),
            i.matchesSelector && l && !S[t + " "] && (!O || !O.test(t)) && (!r || !r.test(t)))
                try {
                    var n = P.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch {
                    S(t, !0)
                }
            return 0 < o(t, s, null, [e]).length
        }
        ,
        o.contains = function(e, t) {
            return (e.ownerDocument || e) != s && v(e),
            A(e, t)
        }
        ,
        o.attr = function(e, n) {
            (e.ownerDocument || e) != s && v(e);
            var a = t.attrHandle[n.toLowerCase()]
              , o = a && ue.call(t.attrHandle, n.toLowerCase()) ? a(e, n, !l) : void 0;
            return void 0 !== o ? o : i.attributes || !l ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null
        }
        ,
        o.escape = function(e) {
            return (e + "").replace(se, oe)
        }
        ,
        o.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        o.uniqueSort = function(e) {
            var s, o = [], t = 0, n = 0;
            if (x = !i.detectDuplicates,
            g = !i.sortStable && e.slice(0),
            e.sort(W),
            x) {
                for (; s = e[n++]; )
                    s === e[n] && (t = o.push(n));
                for (; t--; )
                    e.splice(o[t], 1)
            }
            return g = null,
            e
        }
        ,
        R = o.getText = function(e) {
            var s, n = "", o = 0, t = e.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += R(e)
                } else if (3 === t || 4 === t)
                    return e.nodeValue
            } else
                for (; s = e[o++]; )
                    n += R(s);
            return n
        }
        ,
        (t = o.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: N,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(m, f),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(m, f),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, t = !e[6] && e[2];
                    return N.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && _e.test(t) && (n = k(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n),
                    e[2] = t.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(m, f).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = ae[e + " "];
                    return t || (t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) && ae(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(s) {
                        var i = o.attr(s, e);
                        return i == null ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(xe, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, s, o) {
                    var c = "nth" !== e.slice(0, 3)
                      , r = "last" !== e.slice(-4)
                      , i = "of-type" === t;
                    return 1 === s && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var d, h, m, f, g, j, v = c !== r ? "nextSibling" : "previousSibling", b = t.parentNode, _ = i && t.nodeName.toLowerCase(), y = !l && !i, u = !1;
                        if (b) {
                            if (c) {
                                for (; v; ) {
                                    for (d = t; d = d[v]; )
                                        if (i ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType)
                                            return !1;
                                    g = v = "only" === e && !g && "nextSibling"
                                }
                                return !0
                            }
                            if (g = [r ? b.firstChild : b.lastChild],
                            r && y) {
                                for (u = (h = (f = (j = (m = (d = b)[a] || (d[a] = {}))[d.uniqueID] || (m[d.uniqueID] = {}))[e] || [])[0] === p && f[1]) && f[2],
                                d = h && b.childNodes[h]; d = ++h && d && d[v] || (u = h = 0) || g.pop(); )
                                    if (1 === d.nodeType && ++u && d === t) {
                                        j[e] = [p, h, u];
                                        break
                                    }
                            } else if (y && (u = h = (f = (j = (m = (d = t)[a] || (d[a] = {}))[d.uniqueID] || (m[d.uniqueID] = {}))[e] || [])[0] === p && f[1]),
                            !1 === u)
                                for (; d = ++h && d && d[v] || (u = h = 0) || g.pop(); )
                                    if ((i ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType) && ++u && (y && ((j = (m = d[a] || (d[a] = {}))[d.uniqueID] || (m[d.uniqueID] = {}))[e] = [p, u]),
                                    d === t))
                                        break;
                            return (u -= o) === s || u % s == 0 && 0 <= u / s
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, s = t.pseudos[e] || t.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                    return s[a] ? s(n) : 1 < s.length ? (i = [e, e, "", n],
                    t.setFilters.hasOwnProperty(e.toLowerCase()) ? d(function(e, t) {
                        for (var a, o = s(e, n), i = o.length; i--; )
                            e[a = _(e, o[i])] = !(t[a] = o[i])
                    }) : function(e) {
                        return s(e, 0, i)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: d(function(e) {
                    var t = []
                      , s = []
                      , n = q(e.replace(L, "$1"));
                    return n[a] ? d(function(e, t, s, o) {
                        for (var a, r = n(e, null, o, []), i = e.length; i--; )
                            (a = r[i]) && (e[i] = !(t[i] = a))
                    }) : function(e, o, i) {
                        return t[0] = e,
                        n(t, null, i, s),
                        t[0] = null,
                        !s.pop()
                    }
                }),
                has: d(function(e) {
                    return function(t) {
                        return 0 < o(e, t).length
                    }
                }),
                contains: d(function(e) {
                    return e = e.replace(m, f),
                    function(t) {
                        return -1 < (t.textContent || R(t)).indexOf(e)
                    }
                }),
                lang: d(function(e) {
                    return ye.test(e || "") || o.error("unsupported lang: " + e),
                    e = e.replace(m, f).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType)return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === c
                },
                focus: function(e) {
                    return e === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: J(!1),
                disabled: J(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !t.pseudos.empty(e)
                },
                header: function(e) {
                    return be.test(e.nodeName)
                },
                input: function(e) {
                    return je.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: w(function() {
                    return [0]
                }),
                last: w(function(e, t) {
                    return [t - 1]
                }),
                eq: w(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: w(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: w(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: w(function(e, t, n) {
                    for (var s = n < 0 ? n + t : t < n ? t : n; 0 <= --s; )
                        e.push(s);
                    return e
                }),
                gt: w(function(e, t, n) {
                    for (var s = n < 0 ? n + t : n; ++s < t; )
                        e.push(s);
                    return e
                })
            }
        }).pseudos.nth = t.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[C] = me(C);
        for (C in {
            submit: !0,
            reset: !0
        })
            t.pseudos[C] = fe(C);
        function Q() {}
        function z(e) {
            for (var t = 0, s = e.length, n = ""; t < s; t++)
                n += e[t].value;
            return n
        }
        function M(e, t, n) {
            var s = t.dir
              , o = t.next
              , i = o || s
              , r = n && "parentNode" === i
              , c = ge++;
            return t.first ? function(t, n, o) {
                for (; t = t[s]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, l) {
                var d, u, h, m = [p, c];
                if (l) {
                    for (; t = t[s]; )
                        if ((1 === t.nodeType || r) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[s]; )
                        if (1 === t.nodeType || r)
                            if (u = (h = t[a] || (t[a] = {}))[t.uniqueID] || (h[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[s] || t;
                            else {
                                if ((d = u[i]) && d[0] === p && d[1] === c)
                                    return m[2] = d[2];
                                if ((u[i] = m)[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function K(e) {
            return 1 < e.length ? function(t, n, s) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, s))
                        return !1;
                return !0
            }
            : e[0]
        }
        function T(e, t, n, s, o) {
            for (var a, r = [], i = 0, c = e.length, l = t != null; i < c; i++)
                (a = e[i]) && (n && !n(a, s, o) || (r.push(a),
                l && t.push(i)));
            return r
        }
        function $(e, t, n, s, i, r) {
            return s && !s[a] && (s = $(s)),
            i && !i[a] && (i = $(i, r)),
            d(function(a, r, c, l) {
                var u, h, m, g = [], p = [], v = r.length, j = a || function(e, t, n) {
                    for (var s = 0, i = t.length; s < i; s++)
                        o(e, t[s], n);
                    return n
                }(t || "*", c.nodeType ? [c] : c, []), f = !e || !a && t ? j : T(j, g, e, c, l), d = n ? i || (a ? e : v || s) ? [] : r : f;
                if (n && n(f, d, c, l),
                s)
                    for (h = T(d, p),
                    s(h, [], c, l),
                    u = h.length; u--; )
                        (m = h[u]) && (d[p[u]] = !(f[p[u]] = m));
                if (a) {
                    if (i || e) {
                        if (i) {
                            for (h = [],
                            u = d.length; u--; )
                                (m = d[u]) && h.push(f[u] = m);
                            i(null, d = [], h, l)
                        }
                        for (u = d.length; u--; )
                            (m = d[u]) && -1 < (h = i ? _(a, m) : g[u]) && (a[h] = !(r[h] = m))
                    }
                } else
                    d = T(d === r ? d.splice(v, d.length) : d),
                    i ? i(null, r, d, l) : b.apply(r, d)
            })
        }
        function B(e) {
            for (var s, o, r, c = e.length, l = t.relative[e[0].type], d = l || t.relative[" "], n = l ? 1 : 0, u = M(function(e) {
                return e === r
            }, d, !0), h = M(function(e) {
                return -1 < _(r, e)
            }, d, !0), i = [function(e, t, n) {
                var s = !l && (n || t !== D) || ((r = t).nodeType ? u(e, t, n) : h(e, t, n));
                return r = null,
                s
            }
            ]; n < c; n++)
                if (o = t.relative[e[n].type])
                    i = [M(K(i), o)];
                else {
                    if ((o = t.filter[e[n].type].apply(null, e[n].matches))[a]) {
                        for (s = ++n; s < c; s++)
                            if (t.relative[e[s].type])
                                break;
                        return $(1 < n && K(i), 1 < n && z(e.slice(0, n - 1).concat({
                            value: " " === e[n - 2].type ? "*" : ""
                        })).replace(L, "$1"), o, n < s && B(e.slice(n, s)), s < c && B(e = e.slice(s)), s < c && z(e))
                    }
                    i.push(o)
                }
            return K(i)
        }
        return Q.prototype = t.filters = t.pseudos,
        t.setFilters = new Q,
        k = o.tokenize = function(e, n) {
            var s, i, a, r, c, l, d, u = ne[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (s = e,
            l = [],
            d = t.preFilter; s; ) {
                for (r in a && !(i = Oe.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                l.push(c = [])),
                a = !1,
                (i = re.exec(s)) && (a = i.shift(),
                c.push({
                    value: a,
                    type: i[0].replace(L, " ")
                }),
                s = s.slice(a.length)),
                t.filter)
                    !(i = N[r].exec(s)) || d[r] && !(i = d[r](i)) || (a = i.shift(),
                    c.push({
                        value: a,
                        type: r,
                        matches: i
                    }),
                    s = s.slice(a.length));
                if (!a)
                    break
            }
            return n ? s.length : s ? o.error(e) : ne(e, l).slice(0)
        }
        ,
        q = o.compile = function(e, n) {
            var r, c, u, h, m, f, g = [], j = [], i = ce[e + " "];
            if (!i) {
                for (n || (n = k(e)),
                c = n.length; c--; )
                    (i = B(n[c]))[a] ? g.push(i) : j.push(i);
                (i = ce(e, (u = j,
                r = 0 < (h = g).length,
                m = 0 < u.length,
                f = function(e, n, i, a, c) {
                    var d, j, _, y = 0, f = "0", w = e && [], g = [], O = D, x = e || m && t.find.TAG("*", c), C = p += O == null ? 1 : Math.random() || .1, E = x.length;
                    for (c && (D = n == s || n || c); f !== E && null != (d = x[f]); f++) {
                        if (m && d) {
                            for (_ = 0,
                            n || d.ownerDocument == s || (v(d),
                            i = !l); j = u[_++]; )
                                if (j(d, n || s, i)) {
                                    a.push(d);
                                    break
                                }
                            c && (p = C)
                        }
                        r && ((d = !j && d) && y--,
                        e && w.push(d))
                    }
                    if (y += f,
                    r && f !== y) {
                        for (_ = 0; j = h[_++]; )
                            j(w, g, n, i);
                        if (e) {
                            if (0 < y)
                                for (; f--; )
                                    w[f] || g[f] || (g[f] = he.call(a));
                            g = T(g)
                        }
                        b.apply(a, g),
                        c && !e && 0 < g.length && 1 < y + h.length && o.uniqueSort(a)
                    }
                    return c && (p = C,
                    D = O),
                    w
                }
                ,
                r ? d(f) : f))).selector = e
            }
            return i
        }
        ,
        G = o.select = function(e, n, s, o) {
            var i, a, r, u, h, d = "function" == typeof e && e, c = !o && k(e = d.selector || e);
            if (s = s || [],
            1 === c.length) {
                if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === n.nodeType && l && t.relative[i[1].type]) {
                    if (!(n = (t.find.ID(a.matches[0].replace(m, f), n) || [])[0]))
                        return s;
                    d && (n = n.parentNode),
                    e = e.slice(i.shift().value.length)
                }
                for (r = N.needsContext.test(e) ? 0 : i.length; r--; ) {
                    if (a = i[r],
                    t.relative[u = a.type])
                        break;
                    if ((h = t.find[u]) && (o = h(a.matches[0].replace(m, f), Y.test(i[0].type) && I(n.parentNode) || n))) {
                        if (i.splice(r, 1),
                        !(e = o.length && z(i)))
                            return b.apply(s, o),
                            s;
                        break
                    }
                }
            }
            return (d || q(e, c))(o, n, !l, s, !n || Y.test(e) && I(n.parentNode) || n),
            s
        }
        ,
        i.sortStable = a.split("").sort(W).join("") === a,
        i.detectDuplicates = !!x,
        v(),
        i.sortDetached = u(function(e) {
            return 1 & e.compareDocumentPosition(s.createElement("fieldset"))
        }),
        u(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || U("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        i.attributes && u(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || U("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        u(function(e) {
            return null == e.getAttribute("disabled")
        }) || U(V, function(e, t, n) {
            var s;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }),
        o
    }(e),
    n.find = b,
    n.expr = b.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = b.uniqueSort,
    n.text = b.getText,
    n.isXMLDoc = b.isXML,
    n.contains = b.contains,
    n.escapeSelector = b.escape;
    var T = function(e, t, s) {
        for (var o = [], i = void 0 !== s; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && n(e).is(s))
                    break;
                o.push(e)
            }
        return o
    }
      , ze = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , We = n.expr.match.needsContext;
    function d(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    pe = /^<([a-z][^/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function he(e, t, s) {
        return o(t) ? n.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== s
        }) : t.nodeType ? n.grep(e, function(e) {
            return e === t !== s
        }) : "string" != typeof t ? n.grep(e, function(e) {
            return -1 < te.call(t, e) !== s
        }) : n.filter(t, e, s)
    }
    n.filter = function(e, t, s) {
        var o = t[0];
        return s && (e = ":not(" + e + ")"),
        1 === t.length && 1 === o.nodeType ? n.find.matchesSelector(o, e) ? [o] : [] : n.find.matches(e, n.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(e) {
            var t, s, o = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(n(e).filter(function() {
                    for (t = 0; t < o; t++)
                        if (n.contains(i[t], this))
                            return !0
                }));
            for (s = this.pushStack([]),
            t = 0; t < o; t++)
                n.find(e, i[t], s);
            return 1 < o ? n.uniqueSort(s) : s
        },
        filter: function(e) {
            return this.pushStack(he(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(he(this, e || [], !0))
        },
        is: function(e) {
            return !!he(this, "string" == typeof e && We.test(e) ? n(e) : e || [], !1).length
        }
    }),
    rt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    (n.fn.init = function(e, t, s) {
        var a, r;
        if (!e)
            return this;
        if (s = s || it,
        "string" == typeof e) {
            if (!(a = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : rt.exec(e)) || !a[1] && t)
                return !t || t.jquery ? (t || s).find(e) : this.constructor(t).find(e);
            if (a[1]) {
                if (t = t instanceof n ? t[0] : t,
                n.merge(this, n.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : i, !0)),
                pe.test(a[1]) && n.isPlainObject(t))
                    for (a in t)
                        o(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                return this
            }
            return (r = i.getElementById(a[2])) && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : o(e) ? void 0 !== s.ready ? s.ready(e) : e(n) : n.makeArray(e, this)
    }
    ).prototype = n.fn,
    it = n(i),
    ft = /^(?:parents|prev(?:Until|All))/,
    gt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function bt(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    n.fn.extend({
        has: function(e) {
            var t = n(e, this)
              , s = t.length;
            return this.filter(function() {
                for (var e = 0; e < s; e++)
                    if (n.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var s, i = 0, r = this.length, o = [], a = "string" != typeof e && n(e);
            if (!We.test(e))
                for (; i < r; i++)
                    for (s = this[i]; s && s !== t; s = s.parentNode)
                        if (s.nodeType < 11 && (a ? -1 < a.index(s) : 1 === s.nodeType && n.find.matchesSelector(s, e))) {
                            o.push(s);
                            break
                        }
            return this.pushStack(1 < o.length ? n.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? te.call(n(e), this[0]) : te.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(e, t))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    n.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return bt(e, "nextSibling")
        },
        prev: function(e) {
            return bt(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ze((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ze(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && Fe(e.contentDocument) ? e.contentDocument : (d(e, "template") && (e = e.content || e),
            n.merge([], e.childNodes))
        }
    }, function(e, t) {
        n.fn[e] = function(s, o) {
            var i = n.map(this, t, s);
            return "Until" !== e.slice(-5) && (o = s),
            o && "string" == typeof o && (i = n.filter(o, i)),
            1 < this.length && (gt[e] || n.uniqueSort(i),
            ft.test(e) && i.reverse()),
            this.pushStack(i)
        }
    }),
    h = /[^\x20\t\r\n\f]+/g;
    function L(e) {
        return e
    }
    function U(e) {
        throw e
    }
    function jt(e, t, n, s) {
        var i;
        try {
            e && o(i = e.promise) ? i.call(e).done(t).fail(n) : e && o(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(s))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    n.Callbacks = function(e) {
        e = "string" == typeof e ? (u = e,
        l = {},
        n.each(u.match(h) || [], function(e, t) {
            l[t] = !0
        }),
        l) : n.extend({}, e);
        var s, i, r, l, u, m, t = [], c = [], a = -1, f = function() {
            for (i = i || e.once,
            m = r = !0; c.length; a = -1)
                for (s = c.shift(); ++a < t.length; )
                    !1 === t[a].apply(s[0], s[1]) && e.stopOnFalse && (a = t.length,
                    s = !1);
            e.memory || (s = !1),
            r = !1,
            i && (t = s ? [] : "")
        }, d = {
            add: function() {
                return t && (s && !r && (a = t.length - 1,
                c.push(s)),
                function s(i) {
                    n.each(i, function(n, i) {
                        o(i) ? e.unique && d.has(i) || t.push(i) : i && i.length && "string" !== k(i) && s(i)
                    })
                }(arguments),
                s && !r && f()),
                this
            },
            remove: function() {
                return n.each(arguments, function(e, s) {
                    for (var o; -1 < (o = n.inArray(s, t, o)); )
                        t.splice(o, 1),
                        o <= a && a--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < n.inArray(e, t) : 0 < t.length
            },
            empty: function() {
                return t && (t = []),
                this
            },
            disable: function() {
                return i = c = [],
                t = s = "",
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return i = c = [],
                s || r || (t = s = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, t) {
                return i || (t = [e, (t = t || []).slice ? t.slice() : t],
                c.push(t),
                r || f()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!m
            }
        };
        return d
    }
    ,
    n.extend({
        Deferred: function(t) {
            var i = [["notify", "progress", n.Callbacks("memory"), n.Callbacks("memory"), 2], ["resolve", "done", n.Callbacks("once memory"), n.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", n.Callbacks("once memory"), n.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , a = {
                state: function() {
                    return r
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return n.Deferred(function(t) {
                        n.each(i, function(n, i) {
                            var a = o(e[i[4]]) && e[i[4]];
                            s[i[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && o(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, s, a) {
                    var r = 0;
                    function c(t, s, i, a) {
                        return function() {
                            var l = this
                              , d = arguments
                              , h = function() {
                                var e, n;
                                if (!(t < r)) {
                                    if ((e = i.apply(l, d)) === s.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    n = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    o(n) ? a ? n.call(e, c(r, s, L, a), c(r, s, U, a)) : (r++,
                                    n.call(e, c(r, s, L, a), c(r, s, U, a), c(r, s, L, s.notifyWith))) : (i !== L && (l = void 0,
                                    d = [e]),
                                    (a || s.resolveWith)(l, d))
                                }
                            }
                              , u = a ? h : function() {
                                try {
                                    h()
                                } catch (e) {
                                    n.Deferred.exceptionHook && n.Deferred.exceptionHook(e, u.stackTrace),
                                    r <= t + 1 && (i !== U && (l = void 0,
                                    d = [e]),
                                    s.rejectWith(l, d))
                                }
                            }
                            ;
                            t ? u() : (n.Deferred.getStackHook && (u.stackTrace = n.Deferred.getStackHook()),
                            e.setTimeout(u))
                        }
                    }
                    return n.Deferred(function(e) {
                        i[0][3].add(c(0, e, o(a) ? a : L, e.notifyWith)),
                        i[1][3].add(c(0, e, o(t) ? t : L)),
                        i[2][3].add(c(0, e, o(s) ? s : U))
                    }).promise()
                },
                promise: function(e) {
                    return e != null ? n.extend(e, a) : a
                }
            }
              , s = {};
            return n.each(i, function(e, t) {
                var n = t[2]
                  , o = t[5];
                a[t[1]] = n.add,
                o && n.add(function() {
                    r = o
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            t && t.call(s, s),
            s
        },
        when: function(e) {
            var a = arguments.length
              , t = a
              , r = Array(t)
              , i = j.call(arguments)
              , s = n.Deferred()
              , c = function(e) {
                return function(t) {
                    r[e] = this,
                    i[e] = 1 < arguments.length ? j.call(arguments) : t,
                    --a || s.resolveWith(r, i)
                }
            };
            if (a <= 1 && (jt(e, s.done(c(t)).resolve, s.reject, !a),
            "pending" === s.state() || o(i[t] && i[t].then)))
                return s.then();
            for (; t--; )
                jt(i[t], c(t), s.reject);
            return s.promise()
        }
    }),
    Ue = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    n.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ue.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    n.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ,
    G = n.Deferred();
    function Y() {
        i.removeEventListener("DOMContentLoaded", Y),
        e.removeEventListener("load", Y),
        n.ready()
    }
    n.fn.ready = function(e) {
        return G.then(e).catch(function(e) {
            n.readyException(e)
        }),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --n.readyWait : n.isReady) || (n.isReady = !0) !== e && 0 < --n.readyWait || G.resolveWith(i, [n])
        }
    }),
    n.ready.then = G.then,
    "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(n.ready) : (i.addEventListener("DOMContentLoaded", Y),
    e.addEventListener("load", Y));
    var v = function(e, t, s, i, a, r, c) {
        var l = 0
          , u = e.length
          , d = s == null;
        if ("object" === k(s))
            for (l in a = !0,
            s)
                v(e, t, l, s[l], !0, r, c);
        else if (void 0 !== i && (a = !0,
        o(i) || (c = !0),
        d && (c ? (t.call(e, i),
        t = null) : (d = t,
        t = function(e, t, s) {
            return d.call(n(e), s)
        }
        )),
        t))
            for (; l < u; l++)
                t(e[l], s, c ? i : i.call(e[l], l, t(e[l], s)));
        return a ? e : d ? t.call(e) : u ? t(e[0], s) : r
    }
      , Wt = /^-ms-/
      , Ut = /-([a-z])/g;
    function Pt(e, t) {
        return t.toUpperCase()
    }
    function f(e) {
        return e.replace(Wt, "ms-").replace(Ut, Pt)
    }
    A = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    ;
    function B() {
        this.expando = n.expando + B.uid++
    }
    B.uid = 1,
    B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            A(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var s, o = this.cache(e);
            if ("string" == typeof t)
                o[f(t)] = n;
            else
                for (s in t)
                    o[f(s)] = t[s];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var o, s = e[this.expando];
            if (void 0 !== s) {
                if (void 0 !== t)
                    for (o = (t = Array.isArray(t) ? t.map(f) : (t = f(t))in s ? [t] : t.match(h) || []).length; o--; )
                        delete s[t[o]];
                (void 0 === t || n.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !n.isEmptyObject(t)
        }
    };
    var s = new B
      , c = new B
      , Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ot = /[A-Z]/g;
    function lt(e, t, n) {
        var s, o;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(Ot, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(o))) {
                try {
                    n = "true" === (s = n) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : Et.test(s) ? JSON.parse(s) : s)
                } catch {}
                c.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    n.extend({
        hasData: function(e) {
            return c.hasData(e) || s.hasData(e)
        },
        data: function(e, t, n) {
            return c.access(e, t, n)
        },
        removeData: function(e, t) {
            c.remove(e, t)
        },
        _data: function(e, t, n) {
            return s.access(e, t, n)
        },
        _removeData: function(e, t) {
            s.remove(e, t)
        }
    }),
    n.fn.extend({
        data: function(e, t) {
            var o, i, a, n = this[0], r = n && n.attributes;
            if (void 0 === e) {
                if (this.length && (a = c.get(n),
                1 === n.nodeType && !s.get(n, "hasDataAttrs"))) {
                    for (i = r.length; i--; )
                        r[i] && 0 === (o = r[i].name).indexOf("data-") && (o = f(o.slice(5)),
                        lt(n, o, a[o]));
                    s.set(n, "hasDataAttrs", !0)
                }
                return a
            }
            return "object" == typeof e ? this.each(function() {
                c.set(this, e)
            }) : v(this, function(t) {
                var s;
                if (n && void 0 === t)
                    return void 0 !== (s = c.get(n, e)) ? s : void 0 !== (s = lt(n, e)) ? s : void 0;
                this.each(function() {
                    c.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                c.remove(this, e)
            })
        }
    }),
    n.extend({
        queue: function(e, t, o) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = s.get(e, t),
                o && (!i || Array.isArray(o) ? i = s.access(e, t, n.makeArray(o)) : i.push(o)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var s = n.queue(e, t)
              , a = s.length
              , o = s.shift()
              , i = n._queueHooks(e, t);
            "inprogress" === o && (o = s.shift(),
            a--),
            o && ("fx" === t && s.unshift("inprogress"),
            delete i.stop,
            o.call(e, function() {
                n.dequeue(e, t)
            }, i)),
            !a && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var o = t + "queueHooks";
            return s.get(e, o) || s.access(e, o, {
                empty: n.Callbacks("once memory").add(function() {
                    s.remove(e, [t + "queue", o])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(e, t) {
            var s = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            s--),
            arguments.length < s ? n.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var s = n.queue(this, e, t);
                n._queueHooks(this, e),
                "fx" === e && "inprogress" !== s[0] && n.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                n.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var o, a = 1, r = n.Deferred(), i = this, c = this.length, l = function() {
                --a || r.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; c--; )
                (o = s.get(i[c], e + "queueHooks")) && o.empty && (a++,
                o.empty.add(l));
            return l(),
            r.promise(t)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , P = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$","i")
      , p = ["Top", "Right", "Bottom", "Left"]
      , y = i.documentElement
      , z = function(e) {
        return n.contains(e.ownerDocument, e)
    }
      , Lt = {
        composed: !0
    };
    y.getRootNode && (z = function(e) {
        return n.contains(e.ownerDocument, e) || e.getRootNode(Lt) === e.ownerDocument
    }
    ),
    H = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && z(e) && "none" === n.css(e, "display")
    }
    ;
    function ut(e, t, s, o) {
        var c, l, d = 20, u = o ? function() {
            return o.cur()
        }
        : function() {
            return n.css(e, t, "")
        }
        , r = u(), a = s && s[3] || (n.cssNumber[t] ? "" : "px"), i = e.nodeType && (n.cssNumber[t] || "px" !== a && +r) && P.exec(n.css(e, t));
        if (i && i[3] !== a) {
            for (r /= 2,
            a = a || i[3],
            i = +r || 1; d--; )
                n.style(e, t, i + a),
                (1 - l) * (1 - (l = u() / r || .5)) <= 0 && (d = 0),
                i /= l;
            i *= 2,
            n.style(e, t, i + a),
            s = s || []
        }
        return s && (i = +i || +r || 0,
        c = s[1] ? i + (s[1] + 1) * s[2] : +s[2],
        o && (o.unit = a,
        o.start = i,
        o.end = c)),
        c
    }
    ce = {};
    function F(e, t) {
        for (var i, a, c, l, d, u, h, r = [], o = 0, m = e.length; o < m; o++)
            (i = e[o]).style && (l = i.style.display,
            t ? ("none" === l && (r[o] = s.get(i, "display") || null,
            r[o] || (i.style.display = "")),
            "" === i.style.display && H(i) && (r[o] = (a = d = c = void 0,
            d = (h = i).ownerDocument,
            u = h.nodeName,
            (a = ce[u]) || (c = d.body.appendChild(d.createElement(u)),
            a = n.css(c, "display"),
            c.parentNode.removeChild(c),
            "none" === a && (a = "block"),
            ce[u] = a)))) : "none" !== l && (r[o] = "none",
            s.set(i, "display", l)));
        for (o = 0; o < m; o++)
            null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    n.fn.extend({
        show: function() {
            return F(this, !0)
        },
        hide: function() {
            return F(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                H(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    var Z, V = /^(?:checkbox|radio)$/i, et = /<([a-z][^/\0>\x20\t\r\n\f]*)/i, Xe = /^$|^module$|\/(?:java|ecma)script/i, M = i.createDocumentFragment().appendChild(i.createElement("div"));
    (Z = i.createElement("input")).setAttribute("type", "radio"),
    Z.setAttribute("checked", "checked"),
    Z.setAttribute("name", "t"),
    M.appendChild(Z),
    a.checkClone = M.cloneNode(!0).cloneNode(!0).lastChild.checked,
    M.innerHTML = "<textarea>x</textarea>",
    a.noCloneChecked = !!M.cloneNode(!0).lastChild.defaultValue,
    M.innerHTML = "<option></option>",
    a.option = !!M.lastChild,
    l = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function r(e, t) {
        var s;
        return s = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && d(e, t) ? n.merge([e], s) : s
    }
    function ve(e, t) {
        for (var n = 0, o = e.length; n < o; n++)
            s.set(e[n], "globalEval", !t || s.get(t[n], "globalEval"))
    }
    l.tbody = l.tfoot = l.colgroup = l.caption = l.thead,
    l.th = l.td,
    a.option || (l.optgroup = l.option = [1, "<select multiple='multiple'>", "</select>"]),
    Le = /<|&#?\w+;/;
    function Ne(e, t, s, o, i) {
        for (var a, c, h, m, p, g, d = t.createDocumentFragment(), f = [], u = 0, v = e.length; u < v; u++)
            if ((a = e[u]) || 0 === a)
                if ("object" === k(a))
                    n.merge(f, a.nodeType ? [a] : a);
                else if (Le.test(a)) {
                    for (c = c || d.appendChild(t.createElement("div")),
                    p = (et.exec(a) || ["", ""])[1].toLowerCase(),
                    h = l[p] || l._default,
                    c.innerHTML = h[1] + n.htmlPrefilter(a) + h[2],
                    m = h[0]; m--; )
                        c = c.lastChild;
                    n.merge(f, c.childNodes),
                    (c = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(a));
        for (d.textContent = "",
        u = 0; a = f[u++]; )
            if (o && -1 < n.inArray(a, o))
                i && i.push(a);
            else if (g = z(a),
            c = r(d.appendChild(a), "script"),
            g && ve(c),
            s)
                for (m = 0; a = c[m++]; )
                    Xe.test(a.type || "") && s.push(a);
        return d
    }
    ye = /^([^.]*)(?:\.(.+)|)/;
    function C() {
        return !0
    }
    function O() {
        return !1
    }
    function kt(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch {}
        }() == ("focus" === t)
    }
    function le(e, t, s, o, i, a) {
        var r, c;
        if ("object" == typeof t) {
            for (c in "string" != typeof s && (o = o || s,
            s = void 0),
            t)
                le(e, c, s, o, t[c], a);
            return e
        }
        if (o == null && i == null ? (i = s,
        o = s = void 0) : i == null && ("string" == typeof s ? (i = o,
        o = void 0) : (i = o,
        o = s,
        s = void 0)),
        !1 === i)
            i = O;
        else if (!i)
            return e;
        return 1 === a && (r = i,
        (i = function(e) {
            return n().off(e),
            r.apply(this, arguments)
        }
        ).guid = r.guid || (r.guid = n.guid++)),
        e.each(function() {
            n.event.add(this, t, i, o, s)
        })
    }
    function q(e, t, o) {
        o ? (s.set(e, t, !1),
        n.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var a, r, i = s.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (i.length)
                        (n.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (i = j.call(arguments),
                    s.set(this, t, i),
                    r = o(this, t),
                    this[t](),
                    i !== (a = s.get(this, t)) || r ? s.set(this, t, !1) : a = {},
                    i !== a)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        a && a.value
                } else
                    i.length && (s.set(this, t, {
                        value: n.event.trigger(n.extend(i[0], n.Event.prototype), i.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === s.get(e, t) && n.event.add(e, t, C)
    }
    n.event = {
        global: {},
        add: function(e, t, o, i, a) {
            var r, c, l, d, u, m, p, g, v, b, j, f = s.get(e);
            if (A(e))
                for (o.handler && (o = (p = o).handler,
                a = p.selector),
                a && n.find.matchesSelector(y, a),
                o.guid || (o.guid = n.guid++),
                (m = f.events) || (m = f.events = Object.create(null)),
                (u = f.handle) || (u = f.handle = function(t) {
                    return "undefined" != typeof n && n.event.triggered !== t.type ? n.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                g = (t = (t || "").match(h) || [""]).length; g--; )
                    r = j = (b = ye.exec(t[g]) || [])[1],
                    v = (b[2] || "").split(".").sort(),
                    r && (c = n.event.special[r] || {},
                    r = (a ? c.delegateType : c.bindType) || r,
                    c = n.event.special[r] || {},
                    l = n.extend({
                        type: r,
                        origType: j,
                        data: i,
                        handler: o,
                        guid: o.guid,
                        selector: a,
                        needsContext: a && n.expr.match.needsContext.test(a),
                        namespace: v.join(".")
                    }, p),
                    (d = m[r]) || ((d = m[r] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(e, i, v, u) || e.addEventListener && e.addEventListener(r, u)),
                    c.add && (c.add.call(e, l),
                    l.handler.guid || (l.handler.guid = o.guid)),
                    a ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                    n.event.global[r] = !0)
        },
        remove: function(e, t, o, i, a) {
            var r, c, l, d, u, m, f, p, v, b, j, g = s.hasData(e) && s.get(e);
            if (g && (m = g.events)) {
                for (p = (t = (t || "").match(h) || [""]).length; p--; )
                    if (r = j = (d = ye.exec(t[p]) || [])[1],
                    v = (d[2] || "").split(".").sort(),
                    r) {
                        for (l = n.event.special[r] || {},
                        u = m[r = (i ? l.delegateType : l.bindType) || r] || [],
                        d = d[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        b = f = u.length; f--; )
                            c = u[f],
                            !a && j !== c.origType || o && o.guid !== c.guid || d && !d.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (u.splice(f, 1),
                            c.selector && u.delegateCount--,
                            l.remove && l.remove.call(e, c));
                        b && !u.length && (l.teardown && !1 !== l.teardown.call(e, v, g.handle) || n.removeEvent(e, r, g.handle),
                        delete m[r])
                    } else
                        for (r in m)
                            n.event.remove(e, r + t[p], o, i, !0);
                n.isEmptyObject(m) && s.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var o, i, a, l, d, u, c = new Array(arguments.length), t = n.event.fix(e), h = (s.get(this, "events") || Object.create(null))[t.type] || [], r = n.event.special[t.type] || {};
            for (c[0] = t,
            o = 1; o < arguments.length; o++)
                c[o] = arguments[o];
            if (t.delegateTarget = this,
            !r.preDispatch || !1 !== r.preDispatch.call(this, t)) {
                for (u = n.event.handlers.call(this, t, h),
                o = 0; (a = u[o++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = a.elem,
                    l = 0; (i = a.handlers[l++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !1 !== i.namespace && !t.rnamespace.test(i.namespace) || (t.handleObj = i,
                        t.data = i.data,
                        void 0 !== (d = ((n.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, c)) && !1 === (t.result = d) && (t.preventDefault(),
                        t.stopPropagation()));
                return r.postDispatch && r.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(e, t) {
            var o, i, a, r, l, d = [], c = t.delegateCount, s = e.target;
            if (c && s.nodeType && !("click" === e.type && 1 <= e.button))
                for (; s !== this; s = s.parentNode || this)
                    if (1 === s.nodeType && ("click" !== e.type || !0 !== s.disabled)) {
                        for (a = [],
                        r = {},
                        i = 0; i < c; i++)
                            void 0 === r[o = (l = t[i]).selector + " "] && (r[o] = l.needsContext ? -1 < n(o, this).index(s) : n.find(o, this, null, [s]).length),
                            r[o] && a.push(l);
                        a.length && d.push({
                            elem: s,
                            handlers: a
                        })
                    }
            return s = this,
            c < t.length && d.push({
                elem: s,
                handlers: t.slice(c)
            }),
            d
        },
        addProp: function(e, t) {
            Object.defineProperty(n.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: o(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[n.expando] ? e : new n.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return V.test(t.type) && t.click && d(t, "input") && q(t, "click", C),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return V.test(t.type) && t.click && d(t, "input") && q(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return V.test(t.type) && t.click && d(t, "input") && s.get(t, "click") || d(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    n.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    n.Event = function(e, t) {
        if (!(this instanceof n.Event))
            return new n.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? C : O,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && n.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[n.expando] = !0
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: O,
        isPropagationStopped: O,
        isImmediatePropagationStopped: O,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = C,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = C,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = C,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, n.event.addProp),
    n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        n.event.special[e] = {
            setup: function() {
                return q(this, e, kt),
                !1
            },
            trigger: function() {
                return q(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        n.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var o, s = e.relatedTarget, i = e.handleObj;
                return s && (s === this || n.contains(this, s)) || (e.type = i.origType,
                o = i.handler.apply(this, arguments),
                e.type = t),
                o
            }
        }
    }),
    n.fn.extend({
        on: function(e, t, n, s) {
            return le(this, e, t, n, s)
        },
        one: function(e, t, n, s) {
            return le(this, e, t, n, s, 1)
        },
        off: function(e, t, s) {
            var o, i;
            if (e && e.preventDefault && e.handleObj)
                return o = e.handleObj,
                n(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (s = t,
            t = void 0),
            !1 === s && (s = O),
            this.each(function() {
                n.event.remove(this, e, s, t)
            })
        }
    });
    var Nt = /<script|<style|<link/i
      , qt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Se(e, t) {
        return d(e, "table") && d(11 !== t.nodeType ? t : t.firstChild, "tr") && n(e).children("tbody")[0] || e
    }
    function $t(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Vt(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Te(e, t) {
        var o, i, a, r, l, d;
        if (1 === t.nodeType) {
            if (s.hasData(e) && (a = s.get(e).events))
                for (i in s.remove(t, "handle events"),
                a)
                    for (o = 0,
                    r = a[i].length; o < r; o++)
                        n.event.add(t, i, a[i][o]);
            c.hasData(e) && (l = c.access(e),
            d = n.extend({}, l),
            c.set(t, d))
        }
    }
    function E(e, t, i, c) {
        t = yt(t);
        var l, u, h, m, f, v, d = 0, p = e.length, j = p - 1, g = t[0], b = o(g);
        if (b || 1 < p && "string" == typeof g && !a.checkClone && qt.test(g))
            return e.each(function(n) {
                var s = e.eq(n);
                b && (t[0] = g.call(this, n, s.html())),
                E(s, t, i, c)
            });
        if (p && (v = (h = Ne(t, e[0].ownerDocument, !1, e, c)).firstChild,
        1 === h.childNodes.length && (h = v),
        v || c)) {
            for (m = (u = n.map(r(h, "script"), $t)).length; d < p; d++)
                l = h,
                d !== j && (l = n.clone(l, !0, !0),
                m && n.merge(u, r(l, "script"))),
                i.call(e[d], l, d);
            if (m)
                for (f = u[u.length - 1].ownerDocument,
                n.map(u, Vt),
                d = 0; d < m; d++)
                    l = u[d],
                    Xe.test(l.type || "") && !s.access(l, "globalEval") && n.contains(f, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? n._evalUrl && !l.noModule && n._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, f) : He(l.textContent.replace(Kt, ""), l, f))
        }
        return e
    }
    function De(e, t, s) {
        for (var o, a = t ? n.filter(t, e) : e, i = 0; null != (o = a[i]); i++)
            s || 1 !== o.nodeType || n.cleanData(r(o)),
            o.parentNode && (s && z(o) && ve(r(o, "script")),
            o.parentNode.removeChild(o));
        return e
    }
    n.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, s) {
            var o, i, c, d, u, h, m, l = e.cloneNode(!0), f = z(e);
            if (!(a.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || n.isXMLDoc(e)))
                for (i = r(l),
                o = 0,
                d = (c = r(e)).length; o < d; o++)
                    u = c[o],
                    h = i[o],
                    void 0,
                    "input" === (m = h.nodeName.toLowerCase()) && V.test(u.type) ? h.checked = u.checked : "input" !== m && "textarea" !== m || (h.defaultValue = u.defaultValue);
            if (t)
                if (s)
                    for (c = c || r(e),
                    i = i || r(l),
                    o = 0,
                    d = c.length; o < d; o++)
                        Te(c[o], i[o]);
                else
                    Te(e, l);
            return 0 < (i = r(l, "script")).length && ve(i, !f && r(e, "script")),
            l
        },
        cleanData: function(e) {
            for (var t, o, i, r = n.event.special, a = 0; void 0 !== (t = e[a]); a++)
                if (A(t)) {
                    if (o = t[s.expando]) {
                        if (o.events)
                            for (i in o.events)
                                r[i] ? n.event.remove(t, i) : n.removeEvent(t, i, o.handle);
                        t[s.expando] = void 0
                    }
                    t[c.expando] && (t[c.expando] = void 0)
                }
        }
    }),
    n.fn.extend({
        detach: function(e) {
            return De(this, e, !0)
        },
        remove: function(e) {
            return De(this, e)
        },
        text: function(e) {
            return v(this, function(e) {
                return void 0 === e ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Se(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Se(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (n.cleanData(r(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = e != null && e,
            t = t ?? e,
            this.map(function() {
                return n.clone(this, e, t)
            })
        },
        html: function(e) {
            return v(this, function(e) {
                var t = this[0] || {}
                  , s = 0
                  , o = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Nt.test(e) && !l[(et.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = n.htmlPrefilter(e);
                    try {
                        for (; s < o; s++)
                            1 === (t = this[s] || {}).nodeType && (n.cleanData(r(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return E(this, arguments, function(t) {
                var s = this.parentNode;
                n.inArray(this, e) < 0 && (n.cleanData(r(this)),
                s && s.replaceChild(t, this))
            }, e)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        n.fn[e] = function(e) {
            for (var o, i = [], a = n(e), r = a.length - 1, s = 0; s <= r; s++)
                o = s === r ? this : this.clone(!0),
                n(a[s])[t](o),
                ie.apply(i, o.get());
            return this.pushStack(i)
        }
    });
    var je = new RegExp("^(" + wt + ")(?!px)[a-z%]+$","i")
      , X = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Re = function(e, t, n) {
        var s, o, i = {};
        for (s in t)
            i[s] = e.style[s],
            e.style[s] = t[s];
        for (s in o = n.call(e),
        t)
            e.style[s] = i[s];
        return o
    }
      , Bt = new RegExp(p.join("|"),"i");
    function $(e, t, s) {
        var i, r, c, l, o = e.style;
        return (s = s || X(e)) && ("" !== (i = s.getPropertyValue(t) || s[t]) || z(e) || (i = n.style(e, t)),
        !a.pixelBoxStyles() && je.test(i) && Bt.test(t) && (r = o.width,
        c = o.minWidth,
        l = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = i,
        i = s.width,
        o.width = r,
        o.minWidth = c,
        o.maxWidth = l)),
        void 0 !== i ? i + "" : i
    }
    function Ie(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function s() {
            if (t) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                y.appendChild(c).appendChild(t);
                var n = e.getComputedStyle(t)
                  , l = "1%" !== n.top
                  , m = 12 === o(n.marginLeft);
                t.style.right = "60%",
                h = 36 === o(n.right),
                d = 36 === o(n.width),
                t.style.position = "absolute",
                u = 12 === o(t.offsetWidth / 3),
                y.removeChild(c),
                t = null
            }
        }
        function o(e) {
            return Math.round(parseFloat(e))
        }
        var r, l, d, u, h, m, c = i.createElement("div"), t = i.createElement("div");
        t.style && (t.style.backgroundClip = "content-box",
        t.cloneNode(!0).style.backgroundClip = "",
        a.clearCloneStyle = "content-box" === t.style.backgroundClip,
        n.extend(a, {
            boxSizingReliable: function() {
                return s(),
                d
            },
            pixelBoxStyles: function() {
                return s(),
                h
            },
            pixelPosition: function() {
                return s(),
                l
            },
            reliableMarginLeft: function() {
                return s(),
                m
            },
            scrollboxSize: function() {
                return s(),
                u
            },
            reliableTrDimensions: function() {
                var t, n, s, o;
                return r == null && (n = i.createElement("table"),
                t = i.createElement("tr"),
                s = i.createElement("div"),
                n.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                s.style.height = "9px",
                s.style.display = "block",
                y.appendChild(n).appendChild(t).appendChild(s),
                o = e.getComputedStyle(t),
                r = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight,
                y.removeChild(n)),
                r
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"]
      , Ve = i.createElement("div").style
      , $e = {};
    function ge(e) {
        var t = n.cssProps[e] || $e[e];
        return t || (e in Ve ? e : $e[e] = function(e) {
            for (var n = e[0].toUpperCase() + e.slice(1), t = Be.length; t--; )
                if ((e = Be[t] + n)in Ve)
                    return e
        }(e) || e)
    }
    var It = /^(none|table(?!-c[ea]).+)/
      , Ke = /^--/
      , Ht = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , xe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ge(e, t, n) {
        var s = P.exec(t);
        return s ? Math.max(0, s[2] - (n || 0)) + (s[3] || "px") : t
    }
    function fe(e, t, s, o, i, a) {
        var r = "width" === t ? 1 : 0
          , l = 0
          , c = 0;
        if (s === (o ? "border" : "content"))
            return 0;
        for (; r < 4; r += 2)
            "margin" === s && (c += n.css(e, s + p[r], !0, i)),
            o ? ("content" === s && (c -= n.css(e, "padding" + p[r], !0, i)),
            "margin" !== s && (c -= n.css(e, "border" + p[r] + "Width", !0, i))) : (c += n.css(e, "padding" + p[r], !0, i),
            "padding" !== s ? c += n.css(e, "border" + p[r] + "Width", !0, i) : l += n.css(e, "border" + p[r] + "Width", !0, i));
        return !o && 0 <= a && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - c - l - .5)) || 0),
        c
    }
    function Qe(e, t, s) {
        var i = X(e)
          , r = (!a.boxSizingReliable() || s) && "border-box" === n.css(e, "boxSizing", !1, i)
          , c = r
          , o = $(e, t, i)
          , l = "offset" + t[0].toUpperCase() + t.slice(1);
        if (je.test(o)) {
            if (!s)
                return o;
            o = "auto"
        }
        return (!a.boxSizingReliable() && r || !a.reliableTrDimensions() && d(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === n.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === n.css(e, "boxSizing", !1, i),
        (c = l in e) && (o = e[l])),
        (o = parseFloat(o) || 0) + fe(e, t, s || (r ? "border" : "content"), c, i, o) + "px"
    }
    function u(e, t, n, s, o) {
        return new u.prototype.init(e,t,n,s,o)
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = $(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, s, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, l, d = f(t), u = Ke.test(t), c = e.style;
                if (u || (t = ge(d)),
                r = n.cssHooks[t] || n.cssHooks[d],
                void 0 === s)
                    return r && "get"in r && void 0 !== (i = r.get(e, !1, o)) ? i : c[t];
                "string" === (l = typeof s) && (i = P.exec(s)) && i[1] && (s = ut(e, t, i),
                l = "number"),
                s != null && s == s && ("number" !== l || u || (s += i && i[3] || (n.cssNumber[d] ? "" : "px")),
                a.clearCloneStyle || "" !== s || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                r && "set"in r && void 0 === (s = r.set(e, s, o)) || (u ? c.setProperty(t, s) : c[t] = s))
            }
        },
        css: function(e, t, s, o) {
            var i, a, r, c = f(t);
            return Ke.test(t) || (t = ge(c)),
            (r = n.cssHooks[t] || n.cssHooks[c]) && "get"in r && (i = r.get(e, !0, s)),
            void 0 === i && (i = $(e, t, o)),
            "normal" === i && t in xe && (i = xe[t]),
            "" === s || s ? (a = parseFloat(i),
            !0 === s || isFinite(a) ? a || 0 : i) : i
        }
    }),
    n.each(["height", "width"], function(e, t) {
        n.cssHooks[t] = {
            get: function(e, s, o) {
                if (s)
                    return !It.test(n.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, o) : Re(e, Ht, function() {
                        return Qe(e, t, o)
                    })
            },
            set: function(e, s, o) {
                var c, i = X(e), l = !a.scrollboxSize() && "absolute" === i.position, d = (l || o) && "border-box" === n.css(e, "boxSizing", !1, i), r = o ? fe(e, t, o, d, i) : 0;
                return d && l && (r -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - fe(e, t, "border", !1, i) - .5)),
                r && (c = P.exec(s)) && "px" !== (c[3] || "px") && (e.style[t] = s,
                s = n.css(e, t)),
                Ge(0, s, r)
            }
        }
    }),
    n.cssHooks.marginLeft = Ie(a.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        n.cssHooks[e + t] = {
            expand: function(n) {
                for (var s = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; s < 4; s++)
                    i[e + p[s] + t] = o[s] || o[s - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (n.cssHooks[e + t].set = Ge)
    }),
    n.fn.extend({
        css: function(e, t) {
            return v(this, function(e, t, s) {
                var i, a, r = {}, o = 0;
                if (Array.isArray(t)) {
                    for (i = X(e),
                    a = t.length; o < a; o++)
                        r[t[o]] = n.css(e, t[o], !1, i);
                    return r
                }
                return void 0 !== s ? n.style(e, t, s) : n.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((n.Tween = u).prototype = {
        constructor: u,
        init: function(e, t, s, o, i, a) {
            this.elem = e,
            this.prop = s,
            this.easing = i || n.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = o,
            this.unit = a || (n.cssNumber[s] ? "" : "px")
        },
        cur: function() {
            var e = u.propHooks[this.prop];
            return e && e.get ? e.get(this) : u.propHooks._default.get(this)
        },
        run: function(e) {
            var t, s = u.propHooks[this.prop];
            return this.options.duration ? this.pos = t = n.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            s && s.set ? s.set(this) : u.propHooks._default.set(this),
            this
        }
    }).init.prototype = u.prototype,
    (u.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = n.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                n.fx.step[e.prop] ? n.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !n.cssHooks[e.prop] && null == e.elem.style[ge(e.prop)] ? e.elem[e.prop] = e.now : n.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = u.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    n.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = u.prototype.init,
    n.fx.step = {},
    st = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
    function de() {
        Q && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(de) : e.setTimeout(de, n.fx.interval),
        n.fx.tick())
    }
    function at() {
        return e.setTimeout(function() {
            N = void 0
        }),
        N = Date.now()
    }
    function W(e, t) {
        var o, s = 0, n = {
            height: e
        };
        for (t = t ? 1 : 0; s < 4; s += 2 - t)
            n["margin" + (o = p[s])] = n["padding" + o] = e;
        return t && (n.opacity = n.width = e),
        n
    }
    function ct(e, t, n) {
        for (var o, i = (m.tweeners[t] || []).concat(m.tweeners["*"]), s = 0, a = i.length; s < a; s++)
            if (o = i[s].call(n, t, e))
                return o
    }
    function m(e, t, s) {
        var r, c, l = 0, h = m.prefilters.length, a = n.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (c)
                return !1;
            for (var r = N || at(), t = Math.max(0, i.startTime + i.duration - r), n = 1 - (t / i.duration || 0), s = 0, o = i.tweens.length; s < o; s++)
                i.tweens[s].run(n);
            return a.notifyWith(e, [i, n, t]),
            n < 1 && o ? t : (o || a.notifyWith(e, [i, 1, 0]),
            a.resolveWith(e, [i]),
            !1)
        }, i = a.promise({
            elem: e,
            props: n.extend({}, t),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, s),
            originalProperties: t,
            originalOptions: s,
            startTime: N || at(),
            duration: s.duration,
            tweens: [],
            createTween: function(t, s) {
                var o = n.Tween(e, i.opts, t, s, i.opts.specialEasing[t] || i.opts.easing);
                return i.tweens.push(o),
                o
            },
            stop: function(t) {
                var n = 0
                  , s = t ? i.tweens.length : 0;
                if (c)
                    return this;
                for (c = !0; n < s; n++)
                    i.tweens[n].run(1);
                return t ? (a.notifyWith(e, [i, 1, 0]),
                a.resolveWith(e, [i, t])) : a.rejectWith(e, [i, t]),
                this
            }
        }), d = i.props;
        for (!function(e, t) {
            var s, o, i, a, r;
            for (s in e)
                if (a = t[i = f(s)],
                o = e[s],
                Array.isArray(o) && (a = o[1],
                o = e[s] = o[0]),
                s !== i && (e[i] = o,
                delete e[s]),
                (r = n.cssHooks[i]) && "expand"in r)
                    for (s in o = r.expand(o),
                    delete e[i],
                    o)
                        s in e || (e[s] = o[s],
                        t[s] = a);
                else
                    t[i] = a
        }(d, i.opts.specialEasing); l < h; l++)
            if (r = m.prefilters[l].call(i, e, d, i.opts))
                return o(r.stop) && (n._queueHooks(i.elem, i.opts.queue).stop = r.stop.bind(r)),
                r;
        return n.map(d, ct, i),
        o(i.opts.start) && i.opts.start.call(e, i),
        i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always),
        n.fx.timer(n.extend(u, {
            elem: e,
            anim: i,
            queue: i.opts.queue
        })),
        i
    }
    n.Animation = n.extend(m, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ut(n.elem, e, P.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            o(e) ? (t = e,
            e = ["*"]) : e = e.match(h);
            for (var n, s = 0, i = e.length; s < i; s++)
                n = e[s],
                m.tweeners[n] = m.tweeners[n] || [],
                m.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, o) {
            var i, r, l, d, u, p, g, v, b = "width"in t || "height"in t, m = this, f = {}, c = e.style, h = e.nodeType && H(e), a = s.get(e, "fxshow");
            for (i in o.queue || (null == (d = n._queueHooks(e, "fx")).unqueued && (d.unqueued = 0,
            v = d.empty.fire,
            d.empty.fire = function() {
                d.unqueued || v()
            }
            ),
            d.unqueued++,
            m.always(function() {
                m.always(function() {
                    d.unqueued--,
                    n.queue(e, "fx").length || d.empty.fire()
                })
            })),
            t)
                if (p = t[i],
                st.test(p)) {
                    if (delete t[i],
                    g = g || "toggle" === p,
                    p === (h ? "hide" : "show")) {
                        if ("show" !== p || !a || void 0 === a[i])
                            continue;
                        h = !0
                    }
                    f[i] = a && a[i] || n.style(e, i)
                }
            if ((l = !n.isEmptyObject(t)) || !n.isEmptyObject(f))
                for (i in b && 1 === e.nodeType && (o.overflow = [c.overflow, c.overflowX, c.overflowY],
                null == (r = a && a.display) && (r = s.get(e, "display")),
                "none" === (u = n.css(e, "display")) && (r ? u = r : (F([e], !0),
                r = e.style.display || r,
                u = n.css(e, "display"),
                F([e]))),
                ("inline" === u || "inline-block" === u && r != null) && "none" === n.css(e, "float") && (l || (m.done(function() {
                    c.display = r
                }),
                r == null && (u = c.display,
                r = "none" === u ? "" : u)),
                c.display = "inline-block")),
                o.overflow && (c.overflow = "hidden",
                m.always(function() {
                    c.overflow = o.overflow[0],
                    c.overflowX = o.overflow[1],
                    c.overflowY = o.overflow[2]
                })),
                l = !1,
                f)
                    l || (a ? "hidden"in a && (h = a.hidden) : a = s.access(e, "fxshow", {
                        display: r
                    }),
                    g && (a.hidden = !h),
                    h && F([e], !0),
                    m.done(function() {
                        for (i in h || F([e]),
                        s.remove(e, "fxshow"),
                        f)
                            n.style(e, i, f[i])
                    })),
                    l = ct(h ? a[i] : 0, i, m),
                    i in a || (a[i] = l.start,
                    h && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? m.prefilters.unshift(e) : m.prefilters.push(e)
        }
    }),
    n.speed = function(e, t, s) {
        var i = e && "object" == typeof e ? n.extend({}, e) : {
            complete: s || !s && t || o(e) && e,
            duration: e,
            easing: s && t || t && !o(t) && t
        };
        return n.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in n.fx.speeds ? i.duration = n.fx.speeds[i.duration] : i.duration = n.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            o(i.old) && i.old.call(this),
            i.queue && n.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    n.fn.extend({
        fadeTo: function(e, t, n, s) {
            return this.filter(H).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, s)
        },
        animate: function(e, t, o, i) {
            var c = n.isEmptyObject(e)
              , r = n.speed(t, o, i)
              , a = function() {
                var t = m(this, n.extend({}, e), r);
                (c || s.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            c || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, t, o) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof e && (o = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each(function() {
                var c = !0
                  , t = e != null && e + "queueHooks"
                  , r = n.timers
                  , a = s.get(this);
                if (t)
                    a[t] && a[t].stop && i(a[t]);
                else
                    for (t in a)
                        a[t] && a[t].stop && ot.test(t) && i(a[t]);
                for (t = r.length; t--; )
                    r[t].elem !== this || e != null && r[t].queue !== e || (r[t].anim.stop(o),
                    c = !1,
                    r.splice(t, 1));
                !c && o || n.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, a = s.get(this), o = a[e + "queue"], r = a[e + "queueHooks"], i = n.timers, c = o ? o.length : 0;
                for (a.finish = !0,
                n.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; t < c; t++)
                    o[t] && o[t].finish && o[t].finish.call(this);
                delete a.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(e, t) {
        var s = n.fn[t];
        n.fn[t] = function(e, n, o) {
            return e == null || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(W(t, !0), e, n, o)
        }
    }),
    n.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        n.fn[e] = function(e, n, s) {
            return this.animate(t, e, n, s)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var s, e = 0, t = n.timers;
        for (N = Date.now(); e < t.length; e++)
            (s = t[e])() || t[e] !== s || t.splice(e--, 1);
        t.length || n.fx.stop(),
        N = void 0
    }
    ,
    n.fx.timer = function(e) {
        n.timers.push(e),
        n.fx.start()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Q || (Q = !0,
        de())
    }
    ,
    n.fx.stop = function() {
        Q = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(t, s) {
        return t = n.fx && n.fx.speeds[t] || t,
        s = s || "fx",
        this.queue(s, function(n, s) {
            var o = e.setTimeout(n, t);
            s.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    R = i.createElement("input"),
    nt = i.createElement("select").appendChild(i.createElement("option")),
    R.type = "checkbox",
    a.checkOn = "" !== R.value,
    a.optSelected = nt.selected,
    (R = i.createElement("input")).value = "t",
    R.type = "radio",
    a.radioValue = "t" === R.value,
    x = n.expr.attrHandle,
    n.fn.extend({
        attr: function(e, t) {
            return v(this, n.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                n.removeAttr(this, e)
            })
        }
    }),
    n.extend({
        attr: function(e, t, s) {
            var o, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return "undefined" == typeof e.getAttribute ? n.prop(e, t, s) : (1 === a && n.isXMLDoc(e) || (o = n.attrHooks[t.toLowerCase()] || (n.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== s ? null === s ? void n.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, s, t)) ? i : (e.setAttribute(t, s + ""),
                s) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = n.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!a.radioValue && "radio" === t && d(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, o = 0, s = t && t.match(h);
            if (s && 1 === e.nodeType)
                for (; n = s[o++]; )
                    e.removeAttribute(n)
        }
    }),
    dt = {
        set: function(e, t, s) {
            return !1 === t ? n.removeAttr(e, s) : e.setAttribute(s, s),
            s
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = x[t] || n.find.attr;
        x[t] = function(e, t, n) {
            var i, a, o = t.toLowerCase();
            return n || (a = x[o],
            x[o] = i,
            i = null != s(e, t, n) ? o : null,
            x[o] = a),
            i
        }
    }),
    ht = /^(?:input|select|textarea|button)$/i,
    mt = /^(?:a|area)$/i;
    function _(e) {
        return (e.match(h) || []).join(" ")
    }
    function w(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function oe(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(h) || []
    }
    n.fn.extend({
        prop: function(e, t) {
            return v(this, n.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[n.propFix[e] || e]
            })
        }
    }),
    n.extend({
        prop: function(e, t, s) {
            var o, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return 1 === a && n.isXMLDoc(e) || (t = n.propFix[t] || t,
                o = n.propHooks[t]),
                void 0 !== s ? o && "set"in o && void 0 !== (i = o.set(e, s, t)) ? i : e[t] = s : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = n.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    a.optSelected || (n.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }),
    n.fn.extend({
        addClass: function(e) {
            var t, s, i, a, r, c, l, d = 0;
            if (o(e))
                return this.each(function(t) {
                    n(this).addClass(e.call(this, t, w(this)))
                });
            if ((r = oe(e)).length)
                for (; t = this[d++]; )
                    if (i = w(t),
                    s = 1 === t.nodeType && " " + _(i) + " ") {
                        for (c = 0; a = r[c++]; )
                            s.indexOf(" " + a + " ") < 0 && (s += a + " ");
                        i !== (l = _(s)) && t.setAttribute("class", l)
                    }
            return this
        },
        removeClass: function(e) {
            var t, s, i, a, r, c, l, d = 0;
            if (o(e))
                return this.each(function(t) {
                    n(this).removeClass(e.call(this, t, w(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((r = oe(e)).length)
                for (; s = this[d++]; )
                    if (i = w(s),
                    t = 1 === s.nodeType && " " + _(i) + " ") {
                        for (c = 0; a = r[c++]; )
                            for (; -1 < t.indexOf(" " + a + " "); )
                                t = t.replace(" " + a + " ", " ");
                        i !== (l = _(t)) && s.setAttribute("class", l)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e
              , a = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : o(e) ? this.each(function(s) {
                n(this).toggleClass(e.call(this, s, w(this), t), t)
            }) : this.each(function() {
                if (a) {
                    r = 0,
                    o = n(this),
                    c = oe(e);
                    for (var t, o, r, c; t = c[r++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    void 0 !== e && "boolean" !== i || ((t = w(this)) && s.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : s.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, s = 0, n = " " + e + " "; t = this[s++]; )
                if (1 === t.nodeType && -1 < (" " + _(w(t)) + " ").indexOf(n))
                    return !0;
            return !1
        }
    }),
    vt = /\r/g,
    n.fn.extend({
        val: function(e) {
            var t, s, a, i = this[0];
            return arguments.length ? (a = o(e),
            this.each(function(s) {
                var o;
                1 === this.nodeType && (null == (o = a ? e.call(this, s, n(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = n.map(o, function(e) {
                    return e == null ? "" : e + ""
                })),
                (t = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : i ? (t = n.valHooks[i.type] || n.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (s = t.get(i, "value")) ? s : "string" == typeof (s = i.value) ? s.replace(vt, "") : s ?? "" : void 0
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = n.find.attr(e, "value");
                    return t ?? _(n.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, s, a, r = e.options, o = e.selectedIndex, i = "select-one" === e.type, c = i ? null : [], l = i ? o + 1 : r.length;
                    for (s = o < 0 ? l : i ? o : 0; s < l; s++)
                        if (((t = r[s]).selected || s === o) && !t.disabled && (!t.parentNode.disabled || !d(t.parentNode, "optgroup"))) {
                            if (a = n(t).val(),
                            i)
                                return a;
                            c.push(a)
                        }
                    return c
                },
                set: function(e, t) {
                    for (var s, o, i = e.options, a = n.makeArray(t), r = i.length; r--; )
                        ((o = i[r]).selected = -1 < n.inArray(n.valHooks.option.get(o), a)) && (s = !0);
                    return s || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < n.inArray(n(e).val(), t)
            }
        },
        a.checkOn || (n.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    a.focusin = "onfocusin"in e,
    me = /^(?:focusinfocus|focusoutblur)$/,
    ae = function(e) {
        e.stopPropagation()
    }
    ,
    n.extend(n.event, {
        trigger: function(t, a, r, c) {
            var d, u, h, m, f, p, b, j, g = [r || i], l = J.call(t, "type") ? t.type : t, v = J.call(t, "namespace") ? t.namespace.split(".") : [];
            if (d = p = u = r = r || i,
            3 !== r.nodeType && 8 !== r.nodeType && !me.test(l + n.event.triggered) && (-1 < l.indexOf(".") && (l = (v = l.split(".")).shift(),
            v.sort()),
            m = l.indexOf(":") < 0 && "on" + l,
            (t = t[n.expando] ? t : new n.Event(l,"object" == typeof t && t)).isTrigger = c ? 2 : 3,
            t.namespace = v.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            a = a == null ? [t] : n.makeArray(a, [t]),
            h = n.event.special[l] || {},
            c || !h.trigger || !1 !== h.trigger.apply(r, a))) {
                if (!c && !h.noBubble && !D(r)) {
                    for (j = h.delegateType || l,
                    me.test(j + l) || (d = d.parentNode); d; d = d.parentNode)
                        g.push(d),
                        u = d;
                    u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || e)
                }
                for (b = 0; (d = g[b++]) && !t.isPropagationStopped(); )
                    p = d,
                    t.type = 1 < b ? j : h.bindType || l,
                    (f = (s.get(d, "events") || Object.create(null))[t.type] && s.get(d, "handle")) && f.apply(d, a),
                    (f = m && d[m]) && f.apply && A(d) && (t.result = f.apply(d, a),
                    !1 === t.result && t.preventDefault());
                return t.type = l,
                c || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), a) || !A(r) || m && o(r[l]) && !D(r) && ((u = r[m]) && (r[m] = null),
                n.event.triggered = l,
                t.isPropagationStopped() && p.addEventListener(l, ae),
                r[l](),
                t.isPropagationStopped() && p.removeEventListener(l, ae),
                n.event.triggered = void 0,
                u && (r[m] = u)),
                t.result
            }
        },
        simulate: function(e, t, s) {
            var o = n.extend(new n.Event, s, {
                type: e,
                isSimulated: !0
            });
            n.event.trigger(o, null, t)
        }
    }),
    n.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                n.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var s = this[0];
            if (s)
                return n.event.trigger(e, t, s, !0)
        }
    }),
    a.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var o = function(e) {
            n.event.simulate(t, e.target, n.event.fix(e))
        };
        n.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this.document || this
                  , i = s.access(n, t);
                i || n.addEventListener(e, o, !0),
                s.access(n, t, (i || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this.document || this
                  , i = s.access(n, t) - 1;
                i ? s.access(n, t, i) : (n.removeEventListener(e, o, !0),
                s.remove(n, t))
            }
        }
    });
    var I = e.location
      , _t = {
        guid: Date.now()
    }
      , re = /\?/;
    n.parseXML = function(t) {
        var s, o;
        if (!t || "string" != typeof t)
            return null;
        try {
            s = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch {}
        return o = s && s.getElementsByTagName("parsererror")[0],
        s && !o || n.error("Invalid XML: " + (o ? n.map(o.childNodes, function(e) {
            return e.textContent
        }).join(`
`) : t)),
        s
    }
    ;
    var Yt = /\[\]$/
      , pt = /\r?\n/g
      , xt = /^(?:submit|button|image|reset|file)$/i
      , Rt = /^(?:input|select|textarea|keygen)/i;
    function ne(e, t, s, o) {
        var i;
        if (Array.isArray(t))
            n.each(t, function(t, n) {
                s || Yt.test(e) ? o(e, n) : ne(e + "[" + ("object" == typeof n && n != null ? t : "") + "]", n, s, o)
            });
        else if (s || "object" !== k(t))
            o(e, t);
        else
            for (i in t)
                ne(e + "[" + i + "]", t[i], s, o)
    }
    n.param = function(e, t) {
        var s, i = [], a = function(e, t) {
            var n = o(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n ?? "")
        };
        if (e == null)
            return "";
        if (Array.isArray(e) || e.jquery && !n.isPlainObject(e))
            n.each(e, function() {
                a(this.name, this.value)
            });
        else
            for (s in e)
                ne(s, e[s], t, a);
        return i.join("&")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = n.prop(this, "elements");
                return e ? n.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !n(this).is(":disabled") && Rt.test(this.nodeName) && !xt.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var s = n(this).val();
                return s == null ? null : Array.isArray(s) ? n.map(s, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(pt, `
`)
                    }
                }) : {
                    name: t.name,
                    value: s.replace(pt, `
`)
                }
            }).get()
        }
    });
    var At = /%20/g
      , St = /#.*$/
      , Mt = /([?&])_=[^&]*/
      , Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Tt = /^(?:GET|HEAD)$/
      , zt = /^\/\//
      , Je = {}
      , ue = {}
      , Ze = "*/".concat("*")
      , se = i.createElement("a");
    function Ye(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var s, i = 0, a = t.toLowerCase().match(h) || [];
            if (o(n))
                for (; s = a[i++]; )
                    "+" === s[0] ? (s = s.slice(1) || "*",
                    (e[s] = e[s] || []).unshift(n)) : (e[s] = e[s] || []).push(n)
        }
    }
    function qe(e, t, s, o) {
        var i = {}
          , r = e === ue;
        function a(c) {
            var l;
            return i[c] = !0,
            n.each(e[c] || [], function(e, n) {
                var c = n(t, s, o);
                return "string" != typeof c || r || i[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                a(c),
                !1)
            }),
            l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function be(e, t) {
        var s, o, i = n.ajaxSettings.flatOptions || {};
        for (s in t)
            void 0 !== t[s] && ((i[s] ? e : o || (o = {}))[s] = t[s]);
        return o && n.extend(!0, e, o),
        e
    }
    return se.href = I.href,
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: I.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(I.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? be(be(e, n.ajaxSettings), t) : be(n.ajaxSettings, e)
        },
        ajaxPrefilter: Ye(Je),
        ajaxTransport: Ye(ue),
        ajax: function(t, s) {
            "object" == typeof t && (s = t,
            t = void 0),
            s = s || {};
            var r, c, d, u, m, p, g, b, j, w, o = n.ajaxSetup({}, s), l = o.context || o, y = o.context && (l.nodeType || l.jquery) ? n(l) : n.event, _ = n.Deferred(), O = n.Callbacks("once memory"), f = o.statusCode || {}, x = {}, C = {}, E = "canceled", a = {
                readyState: 0,
                getResponseHeader: function(e) {
                    if (c) {
                        if (!u) {
                            u = {};
                            for (var t; t = Ft.exec(w); )
                                u[t[1].toLowerCase() + " "] = (u[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = u[e.toLowerCase() + " "]
                    }
                    return t == null ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return c ? w : null
                },
                setRequestHeader: function(e, t) {
                    return c == null && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e,
                    x[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return c == null && (o.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            a.always(e[a.status]);
                        else
                            for (t in e)
                                f[t] = [f[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || E;
                    return m && m.abort(t),
                    v(0, t),
                    this
                }
            };
            if (_.promise(a),
            o.url = ((t || o.url || I.href) + "").replace(zt, I.protocol + "//"),
            o.type = s.method || s.type || o.method || o.type,
            o.dataTypes = (o.dataType || "*").toLowerCase().match(h) || [""],
            null == o.crossDomain) {
                d = i.createElement("a");
                try {
                    d.href = o.url,
                    d.href = d.href,
                    o.crossDomain = se.protocol + "//" + se.host != d.protocol + "//" + d.host
                } catch {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = n.param(o.data, o.traditional)),
            qe(Je, o, s, a),
            c)
                return a;
            for (j in (g = n.event && o.global) && 0 == n.active++ && n.event.trigger("ajaxStart"),
            o.type = o.type.toUpperCase(),
            o.hasContent = !Tt.test(o.type),
            r = o.url.replace(St, ""),
            o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(At, "+")) : (p = o.url.slice(r.length),
            o.data && (o.processData || "string" == typeof o.data) && (r += (re.test(r) ? "&" : "?") + o.data,
            delete o.data),
            !1 === o.cache && (r = r.replace(Mt, "$1"),
            p = (re.test(r) ? "&" : "?") + "_=" + _t.guid++ + p),
            o.url = r + p),
            o.ifModified && (n.lastModified[r] && a.setRequestHeader("If-Modified-Since", n.lastModified[r]),
            n.etag[r] && a.setRequestHeader("If-None-Match", n.etag[r])),
            (o.data && o.hasContent && !1 !== o.contentType || s.contentType) && a.setRequestHeader("Content-Type", o.contentType),
            a.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : o.accepts["*"]),
            o.headers)
                a.setRequestHeader(j, o.headers[j]);
            if (o.beforeSend && (!1 === o.beforeSend.call(l, a, o) || c))
                return a.abort();
            if (E = "abort",
            O.add(o.complete),
            a.done(o.success),
            a.fail(o.error),
            m = qe(ue, o, s, a)) {
                if (a.readyState = 1,
                g && y.trigger("ajaxSend", [a, o]),
                c)
                    return a;
                o.async && 0 < o.timeout && (b = e.setTimeout(function() {
                    a.abort("timeout")
                }, o.timeout));
                try {
                    c = !1,
                    m.send(x, v)
                } catch (e) {
                    if (c)
                        throw e;
                    v(-1, e)
                }
            } else
                v(-1, "No Transport");
            function v(t, s, i, d) {
                var h, p, v, j, x, u = s;
                c || (c = !0,
                b && e.clearTimeout(b),
                m = void 0,
                w = d || "",
                a.readyState = 0 < t ? 4 : 0,
                h = 200 <= t && t < 300 || 304 === t,
                i && (p = function(e, t, n) {
                    for (var o, i, a, r, c = e.contents, s = e.dataTypes; "*" === s[0]; )
                        s.shift(),
                        void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (a)
                        for (o in c)
                            if (c[o] && c[o].test(a)) {
                                s.unshift(o);
                                break
                            }
                    if (s[0]in n)
                        i = s[0];
                    else {
                        for (o in n) {
                            if (!s[0] || e.converters[o + " " + s[0]]) {
                                i = o;
                                break
                            }
                            r || (r = o)
                        }
                        i = i || r
                    }
                    if (i)
                        return i !== s[0] && s.unshift(i),
                        n[i]
                }(o, a, i)),
                !h && -1 < n.inArray("script", o.dataTypes) && n.inArray("json", o.dataTypes) < 0 && (o.converters["text script"] = function() {}
                ),
                p = function(e, t, n, s) {
                    var o, i, a, c, l, r = {}, d = e.dataTypes.slice();
                    if (d[1])
                        for (i in e.converters)
                            r[i.toLowerCase()] = e.converters[i];
                    for (o = d.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !a && s && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        a = o,
                        o = d.shift())
                            if ("*" === o)
                                o = a;
                            else if ("*" !== a && a !== o) {
                                if (!(i = r[a + " " + o] || r["* " + o]))
                                    for (l in r)
                                        if ((c = l.split(" "))[1] === o && (i = r[a + " " + c[0]] || r["* " + c[0]])) {
                                            !0 === i ? i = r[l] : !0 !== r[l] && (o = c[0],
                                            d.unshift(c[1]));
                                            break
                                        }
                                if (!0 !== i)
                                    if (i && e.throws)
                                        t = i(t);
                                    else
                                        try {
                                            t = i(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: i ? e : "No conversion from " + a + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(o, p, a, h),
                h ? (o.ifModified && ((j = a.getResponseHeader("Last-Modified")) && (n.lastModified[r] = j),
                (j = a.getResponseHeader("etag")) && (n.etag[r] = j)),
                204 === t || "HEAD" === o.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = p.state,
                x = p.data,
                h = !(v = p.error))) : (v = u,
                !t && u || (u = "error",
                t < 0 && (t = 0))),
                a.status = t,
                a.statusText = (s || u) + "",
                h ? _.resolveWith(l, [x, u, a]) : _.rejectWith(l, [a, u, v]),
                a.statusCode(f),
                f = void 0,
                g && y.trigger(h ? "ajaxSuccess" : "ajaxError", [a, o, h ? x : v]),
                O.fireWith(l, [a, u]),
                g && (y.trigger("ajaxComplete", [a, o]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return a
        },
        getJSON: function(e, t, s) {
            return n.get(e, t, s, "json")
        },
        getScript: function(e, t) {
            return n.get(e, void 0, t, "script")
        }
    }),
    n.each(["get", "post"], function(e, t) {
        n[t] = function(e, s, i, a) {
            return o(s) && (a = a || i,
            i = s,
            s = void 0),
            n.ajax(n.extend({
                url: e,
                type: t,
                dataType: a,
                data: s,
                success: i
            }, n.isPlainObject(e) && e))
        }
    }),
    n.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    n._evalUrl = function(e, t, s) {
        return n.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                n.globalEval(e, t, s)
            }
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (o(e) && (e = e.call(this[0])),
            t = n(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return o(e) ? this.each(function(t) {
                n(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = n(this)
                  , s = t.contents();
                s.length ? s.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = o(e);
            return this.each(function(s) {
                n(this).wrapAll(t ? e.call(this, s) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                n(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    n.expr.pseudos.hidden = function(e) {
        return !n.expr.pseudos.visible(e)
    }
    ,
    n.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    n.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch {}
    }
    ,
    Pe = {
        0: 200,
        1223: 204
    },
    S = n.ajaxSettings.xhr(),
    a.cors = !!S && "withCredentials"in S,
    a.ajax = S = !!S,
    n.ajaxTransport(function(t) {
        var n, s;
        if (a.cors || S && !t.crossDomain)
            return {
                send: function(o, i) {
                    var r, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (r in t.xhrFields)
                            a[r] = t.xhrFields[r];
                    for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        a.setRequestHeader(r, o[r]);
                    n = function(e) {
                        return function() {
                            n && (n = s = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Pe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    s = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = s : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && s()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    n.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return n.globalEval(e),
                e
            }
        }
    }),
    n.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    n.ajaxTransport("script", function(e) {
        var t, s;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(o, a) {
                    s = n("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", t = function(e) {
                        s.remove(),
                        t = null,
                        e && a("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    i.head.appendChild(s[0])
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    Oe = [],
    K = /(=)\?(?=&|$)|\?\?/,
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Oe.pop() || n.expando + "_" + _t.guid++;
            return this[e] = !0,
            e
        }
    }),
    n.ajaxPrefilter("json jsonp", function(t, s, i) {
        var a, r, c, l = !1 !== t.jsonp && (K.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && K.test(t.data) && "data");
        if (l || "jsonp" === t.dataTypes[0])
            return a = t.jsonpCallback = o(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            l ? t[l] = t[l].replace(K, "$1" + a) : !1 !== t.jsonp && (t.url += (re.test(t.url) ? "&" : "?") + t.jsonp + "=" + a),
            t.converters["script json"] = function() {
                return c || n.error(a + " was not called"),
                c[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[a],
            e[a] = function() {
                c = arguments
            }
            ,
            i.always(function() {
                void 0 === r ? n(e).removeProp(a) : e[a] = r,
                t[a] && (t.jsonpCallback = s.jsonpCallback,
                Oe.push(a)),
                c && o(r) && r(c[0]),
                c = r = void 0
            }),
            "script"
    }),
    a.createHTMLDocument = ((Me = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Me.childNodes.length),
    n.parseHTML = function(e, t, s) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (s = t,
        t = !1),
        t || (a.createHTMLDocument ? ((c = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href,
        t.head.appendChild(c)) : t = i),
        o = !s && [],
        (r = pe.exec(e)) ? [t.createElement(r[1])] : (r = Ne([e], t, o),
        o && o.length && n(o).remove(),
        n.merge([], r.childNodes)));
        var o, r, c
    }
    ,
    n.fn.load = function(e, t, s) {
        var i, c, l, a = this, r = e.indexOf(" ");
        return -1 < r && (i = _(e.slice(r)),
        e = e.slice(0, r)),
        o(t) ? (s = t,
        t = void 0) : t && "object" == typeof t && (c = "POST"),
        0 < a.length && n.ajax({
            url: e,
            type: c || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            l = arguments,
            a.html(i ? n("<div>").append(n.parseHTML(e)).find(i) : e)
        }).always(s && function(e, t) {
            a.each(function() {
                s.apply(this, l || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    n.expr.pseudos.animated = function(e) {
        return n.grep(n.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    n.offset = {
        setOffset: function(e, t, s) {
            var i, r, c, l, d, m, u = n.css(e, "position"), h = n(e), a = {};
            "static" === u && (e.style.position = "relative"),
            i = h.offset(),
            c = n.css(e, "top"),
            d = n.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < (c + d).indexOf("auto") ? (l = (m = h.position()).top,
            r = m.left) : (l = parseFloat(c) || 0,
            r = parseFloat(d) || 0),
            o(t) && (t = t.call(e, s, n.extend({}, i))),
            null != t.top && (a.top = t.top - i.top + l),
            null != t.left && (a.left = t.left - i.left + r),
            "using"in t ? t.using.call(e, a) : h.css(a)
        }
    },
    n.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    n.offset.setOffset(this, e, t)
                });
            var s, o, t = this[0];
            return t ? t.getClientRects().length ? (s = t.getBoundingClientRect(),
            o = t.ownerDocument.defaultView,
            {
                top: s.top + o.pageYOffset,
                left: s.left + o.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, s, o, t = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === n.css(t, "position"))
                    s = t.getBoundingClientRect();
                else {
                    for (s = this.offset(),
                    o = t.ownerDocument,
                    e = t.offsetParent || o.documentElement; e && (e === o.body || e === o.documentElement) && "static" === n.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== t && 1 === e.nodeType && ((i = n(e).offset()).top += n.css(e, "borderTopWidth", !0),
                    i.left += n.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: s.top - i.top - n.css(t, "marginTop", !0),
                    left: s.left - i.left - n.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === n.css(e, "position"); )
                    e = e.offsetParent;
                return e || y
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var s = "pageYOffset" === t;
        n.fn[e] = function(n) {
            return v(this, function(e, n, o) {
                var i;
                if (D(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === o)
                    return i ? i[t] : e[n];
                i ? i.scrollTo(s ? i.pageXOffset : o, s ? o : i.pageYOffset) : e[n] = o
            }, e, n, arguments.length)
        }
    }),
    n.each(["top", "left"], function(e, t) {
        n.cssHooks[t] = Ie(a.pixelPosition, function(e, s) {
            if (s)
                return s = $(e, t),
                je.test(s) ? n(e).position()[t] + "px" : s
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        n.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(s, o) {
            n.fn[o] = function(i, a) {
                var r = arguments.length && (s || "boolean" != typeof i)
                  , c = s || (!0 === i || !0 === a ? "margin" : "border");
                return v(this, function(t, s, i) {
                    var a;
                    return D(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement,
                    Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? n.css(t, s, c) : n.style(t, s, i, c)
                }, t, r ? i : void 0, r)
            }
        })
    }),
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        n.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    n.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, s) {
            return this.on(t, e, n, s)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        n.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    Ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    n.proxy = function(e, t) {
        var s, i, a;
        if ("string" == typeof t && (s = e[t],
        t = e,
        e = s),
        o(e))
            return i = j.call(arguments, 2),
            (a = function() {
                return e.apply(t || this, i.concat(j.call(arguments)))
            }
            ).guid = e.guid = e.guid || n.guid++,
            a
    }
    ,
    n.holdReady = function(e) {
        e ? n.readyWait++ : n.ready(!0)
    }
    ,
    n.isArray = Array.isArray,
    n.parseJSON = JSON.parse,
    n.nodeName = d,
    n.isFunction = o,
    n.isWindow = D,
    n.camelCase = f,
    n.type = k,
    n.now = Date.now,
    n.isNumeric = function(e) {
        var t = n.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    n.trim = function(e) {
        return e == null ? "" : (e + "").replace(Ae, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    }),
    ke = e.jQuery,
    Ee = e.$,
    n.noConflict = function(t) {
        return e.$ === n && (e.$ = Ee),
        t && e.jQuery === n && (e.jQuery = ke),
        n
    }
    ,
    "undefined" == typeof t && (e.jQuery = e.$ = n),
    n
}),
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";
    function On(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    n = On(t);
    function Pe(e, t) {
        for (var n, s = 0; s < t.length; s++)
            n = t[s],
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
    }
    function r(e, t, n) {
        return t && Pe(e.prototype, t),
        n && Pe(e, n),
        e
    }
    function o() {
        return o = Object.assign || function(e) {
            for (var t, s, n = 1; n < arguments.length; n++) {
                t = arguments[n];
                for (s in t)
                    Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
            }
            return e
        }
        ,
        o.apply(this, arguments)
    }
    function Se(e, t) {
        return Se = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        Se(e, t)
    }
    S = "transitionend",
    s = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do
                e += ~~(1e6 * Math.random());
            while (document.getElementById(e))return e
        },
        getSelectorFromElement: function(e) {
            var n, t = e.getAttribute("data-target");
            (!t || "#" === t) && (n = e.getAttribute("href"),
            t = n && "#" !== n ? n.trim() : "");
            try {
                return document.querySelector(t) ? t : null
            } catch {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = n.default(e).css("transition-duration")
              , s = n.default(e).css("transition-delay")
              , o = parseFloat(t)
              , i = parseFloat(s);
            return o || i ? (t = t.split(",")[0],
            s = s.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(s))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            n.default(e).trigger(S)
        },
        supportsTransitionEnd: function() {
            return Boolean(S)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (o in n)
                if (Object.prototype.hasOwnProperty.call(n, o)) {
                    var o, i, r = n[o], a = t[o], c = a && s.isElement(a) ? "element" : null === (i = a) || "undefined" == typeof i ? "" + i : {}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(c))
                        throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + c + '" but expected type "' + r + '".')
                }
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? s.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof n.default)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = n.default.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    },
    s.jQueryDetection(),
    n.default.fn.emulateTransitionEnd = function(e) {
        var o = this
          , t = !1;
        return n.default(this).one(s.TRANSITION_END, function() {
            t = !0
        }),
        setTimeout(function() {
            t || s.triggerTransitionEnd(o)
        }, e),
        this
    }
    ,
    n.default.event.special[s.TRANSITION_END] = {
        bindType: S,
        delegateType: S,
        handle: function(e) {
            if (n.default(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var Ee = "bs.alert"
      , yn = n.default.fn.alert
      , y = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, Ee),
            this._element = null
        }
        ,
        t._getRootElement = function(e) {
            var o = s.getSelectorFromElement(e)
              , t = !1;
            return o && (t = document.querySelector(o)),
            t || (t = n.default(e).closest(".alert")[0]),
            t
        }
        ,
        t._triggerCloseEvent = function(e) {
            var t = n.default.Event("close.bs.alert");
            return n.default(e).trigger(t),
            t
        }
        ,
        t._removeElement = function(e) {
            var t, o = this;
            n.default(e).removeClass("show"),
            n.default(e).hasClass("fade") ? (t = s.getTransitionDurationFromElement(e),
            n.default(e).one(s.TRANSITION_END, function(t) {
                return o._destroyElement(e, t)
            }).emulateTransitionEnd(t)) : this._destroyElement(e)
        }
        ,
        t._destroyElement = function(e) {
            n.default(e).detach().trigger("closed.bs.alert").remove()
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var o = n.default(this)
                  , s = o.data(Ee);
                s || (s = new e(this),
                o.data(Ee, s)),
                "close" === t && s[t](this)
            })
        }
        ,
        e._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', y._handleDismiss(new y)),
    n.default.fn.alert = y._jQueryInterface,
    n.default.fn.alert.Constructor = y,
    n.default.fn.alert.noConflict = function() {
        return n.default.fn.alert = yn,
        y._jQueryInterface
    }
    ;
    var Ce = "bs.button"
      , vn = n.default.fn.button
      , c = "active"
      , Ge = '[data-toggle^="button"]'
      , ve = 'input:not([type="hidden"])'
      , dt = ".btn"
      , T = function() {
        function e(e) {
            this._element = e,
            this.shouldAvoidTriggerChange = !1
        }
        var t = e.prototype;
        return t.toggle = function() {
            var e, s, t = !0, o = !0, i = n.default(this._element).closest('[data-toggle="buttons"]')[0];
            i && (e = this._element.querySelector(ve),
            e && ("radio" === e.type && (e.checked && this._element.classList.contains(c) ? t = !1 : (s = i.querySelector(".active"),
            s && n.default(s).removeClass(c))),
            t && ("checkbox" !== e.type && "radio" !== e.type || (e.checked = !this._element.classList.contains(c)),
            this.shouldAvoidTriggerChange || n.default(e).trigger("change")),
            e.focus(),
            o = !1)),
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (o && this._element.setAttribute("aria-pressed", !this._element.classList.contains(c)),
            t && n.default(this._element).toggleClass(c))
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, Ce),
            this._element = null
        }
        ,
        e._jQueryInterface = function(t, s) {
            return this.each(function() {
                var i = n.default(this)
                  , o = i.data(Ce);
                o || (o = new e(this),
                i.data(Ce, o)),
                o.shouldAvoidTriggerChange = s,
                "toggle" === t && o[t]()
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.button.data-api", Ge, function(e) {
        var s, t = e.target, o = t;
        if (n.default(t).hasClass("btn") || (t = n.default(t).closest(dt)[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
            e.preventDefault();
        else {
            if (s = t.querySelector(ve),
            s && (s.hasAttribute("disabled") || s.classList.contains("disabled")))
                return void e.preventDefault();
            "INPUT" !== o.tagName && "LABEL" === t.tagName || T._jQueryInterface.call(n.default(t), "toggle", "INPUT" === o.tagName)
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", Ge, function(e) {
        var t = n.default(e.target).closest(dt)[0];
        n.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }),
    n.default(window).on("load.bs.button.data-api", function() {
        for (var t, n, s, i, a, e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), o = 0, r = e.length; o < r; o++)
            t = e[o],
            i = t.querySelector(ve),
            i.checked || i.hasAttribute("checked") ? t.classList.add(c) : t.classList.remove(c);
        for (n = 0,
        a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; n < a; n++)
            s = e[n],
            "true" === s.getAttribute("aria-pressed") ? s.classList.add(c) : s.classList.remove(c)
    }),
    n.default.fn.button = T._jQueryInterface,
    n.default.fn.button.Constructor = T,
    n.default.fn.button.noConflict = function() {
        return n.default.fn.button = vn,
        T._jQueryInterface
    }
    ;
    var p = "carousel"
      , te = "bs.carousel"
      , ln = n.default.fn[p]
      , O = "active"
      , ne = "next"
      , V = "prev"
      , mt = "slid.bs.carousel"
      , oe = ".active.carousel-item"
      , me = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , nn = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , Et = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , _ = function() {
        function t(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._element = e,
            this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var e = t.prototype;
        return e.next = function() {
            this._isSliding || this._slide(ne)
        }
        ,
        e.nextWhenVisible = function() {
            var e = n.default(this._element);
            !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
        }
        ,
        e.prev = function() {
            this._isSliding || this._slide(V)
        }
        ,
        e.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (s.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        e.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        e.to = function(e) {
            var t, s, o = this;
            if (this._activeElement = this._element.querySelector(oe),
            t = this._getItemIndex(this._activeElement),
            !(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    n.default(this._element).one(mt, function() {
                        return o.to(e)
                    });
                else {
                    if (t === e)
                        return this.pause(),
                        void this.cycle();
                    s = e > t ? ne : V,
                    this._slide(s, this._items[e])
                }
        }
        ,
        e.dispose = function() {
            n.default(this._element).off(".bs.carousel"),
            n.default.removeData(this._element, te),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        e._getConfig = function(e) {
            return e = o({}, me, e),
            s.typeCheckConfig(p, e, nn),
            e
        }
        ,
        e._handleSwipe = function() {
            var e, t = Math.abs(this.touchDeltaX);
            t <= 40 || (e = t / this.touchDeltaX,
            this.touchDeltaX = 0,
            e > 0 && this.prev(),
            e < 0 && this.next())
        }
        ,
        e._addEventListeners = function() {
            var e = this;
            this._config.keyboard && n.default(this._element).on("keydown.bs.carousel", function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && n.default(this._element).on("mouseenter.bs.carousel", function(t) {
                return e.pause(t)
            }).on("mouseleave.bs.carousel", function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        e._addTouchEventListeners = function() {
            if (e = this,
            this._touchSupported) {
                var e, t = function(t) {
                    e._pointerEvent && Et[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                }, s = function(t) {
                    e._pointerEvent && Et[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause && (e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval))
                };
                n.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) {
                    return e.preventDefault()
                }),
                this._pointerEvent ? (n.default(this._element).on("pointerdown.bs.carousel", function(e) {
                    return t(e)
                }),
                n.default(this._element).on("pointerup.bs.carousel", function(e) {
                    return s(e)
                }),
                this._element.classList.add("pointer-event")) : (n.default(this._element).on("touchstart.bs.carousel", function(e) {
                    return t(e)
                }),
                n.default(this._element).on("touchmove.bs.carousel", function(t) {
                    return function(t) {
                        e.touchDeltaX = t.originalEvent.touches && t.originalEvent.touches.length > 1 ? 0 : t.originalEvent.touches[0].clientX - e.touchStartX
                    }(t)
                }),
                n.default(this._element).on("touchend.bs.carousel", function(e) {
                    return s(e)
                }))
            }
        }
        ,
        e._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        e._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
            this._items.indexOf(e)
        }
        ,
        e._getItemByDirection = function(e, t) {
            var s, o = e === ne, i = e === V, n = this._getItemIndex(t), a = this._items.length - 1;
            return (i && 0 === n || o && n === a) && !this._config.wrap ? t : (s = (n + (e === V ? -1 : 1)) % this._items.length,
            -1 === s ? this._items[this._items.length - 1] : this._items[s])
        }
        ,
        e._triggerSlideEvent = function(e, t) {
            var o = this._getItemIndex(e)
              , i = this._getItemIndex(this._element.querySelector(oe))
              , s = n.default.Event("slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: i,
                to: o
            });
            return n.default(this._element).trigger(s),
            s
        }
        ,
        e._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t, s = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                n.default(s).removeClass(O),
                t = this._indicatorsElement.children[this._getItemIndex(e)],
                t && n.default(t).addClass(O)
            }
        }
        ,
        e._updateInterval = function() {
            var e, t = this._activeElement || this._element.querySelector(oe);
            t && (e = parseInt(t.getAttribute("data-interval"), 10),
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval)
        }
        ,
        e._slide = function(e, t) {
            var a, r, c, l, h, d = this, i = this._element.querySelector(oe), m = this._getItemIndex(i), o = t || i && this._getItemByDirection(e, i), f = this._getItemIndex(o), u = Boolean(this._interval);
            e === ne ? (a = "carousel-item-left",
            r = "carousel-item-next",
            c = "left") : (a = "carousel-item-right",
            r = "carousel-item-prev",
            c = "right"),
            o && n.default(o).hasClass(O) ? this._isSliding = !1 : !this._triggerSlideEvent(o, c).isDefaultPrevented() && i && o && (this._isSliding = !0,
            u && this.pause(),
            this._setActiveIndicatorElement(o),
            this._activeElement = o,
            l = n.default.Event(mt, {
                relatedTarget: o,
                direction: c,
                from: m,
                to: f
            }),
            n.default(this._element).hasClass("slide") ? (n.default(o).addClass(r),
            s.reflow(o),
            n.default(i).addClass(a),
            n.default(o).addClass(a),
            h = s.getTransitionDurationFromElement(i),
            n.default(i).one(s.TRANSITION_END, function() {
                n.default(o).removeClass(a + " " + r).addClass(O),
                n.default(i).removeClass("active " + r + " " + a),
                d._isSliding = !1,
                setTimeout(function() {
                    return n.default(d._element).trigger(l)
                }, 0)
            }).emulateTransitionEnd(h)) : (n.default(i).removeClass(O),
            n.default(o).addClass(O),
            this._isSliding = !1,
            n.default(this._element).trigger(l)),
            u && this.cycle())
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var a, s = n.default(this).data(te), i = o({}, me, n.default(this).data());
                if ("object" == typeof e && (i = o({}, i, e)),
                a = "string" == typeof e ? e : i.slide,
                s || (s = new t(this,i),
                n.default(this).data(te, s)),
                "number" == typeof e)
                    s.to(e);
                else if ("string" == typeof a) {
                    if ("undefined" == typeof s[a])
                        throw new TypeError('No method named "' + a + '"');
                    s[a]()
                } else
                    i.interval && i.ride && (s.pause(),
                    s.cycle())
            })
        }
        ,
        t._dataApiClickHandler = function(e) {
            if (a = s.getSelectorFromElement(this),
            a && (i = n.default(a)[0],
            i && n.default(i).hasClass("carousel"))) {
                var i, a, c = o({}, n.default(i).data(), n.default(this).data()), r = this.getAttribute("data-slide-to");
                r && (c.interval = !1),
                t._jQueryInterface.call(n.default(i), c),
                r && n.default(i).data(te).to(r),
                e.preventDefault()
            }
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return me
            }
        }]),
        t
    }();
    n.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", _._dataApiClickHandler),
    n.default(window).on("load.bs.carousel.data-api", function() {
        for (var t, s = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, o = s.length; e < o; e++)
            t = n.default(s[e]),
            _._jQueryInterface.call(t, t.data())
    }),
    n.default.fn[p] = _._jQueryInterface,
    n.default.fn[p].Constructor = _,
    n.default.fn[p].noConflict = function() {
        return n.default.fn[p] = ln,
        _._jQueryInterface
    }
    ;
    var j = "collapse"
      , b = "bs.collapse"
      , Jt = n.default.fn[j]
      , R = "show"
      , xe = "collapse"
      , Y = "collapsing"
      , Ae = "collapsed"
      , kt = "width"
      , At = '[data-toggle="collapse"]'
      , ge = {
        toggle: !0,
        parent: ""
    }
      , Ut = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , I = function() {
        function t(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var i = [].slice.call(document.querySelectorAll(At)), n = 0, r = i.length; n < r; n++) {
                var a = i[n]
                  , o = s.getSelectorFromElement(a)
                  , c = [].slice.call(document.querySelectorAll(o)).filter(function(t) {
                    return t === e
                });
                null !== o && c.length > 0 && (this._selector = o,
                this._triggerArray.push(a))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var e = t.prototype;
        return e.toggle = function() {
            n.default(this._element).hasClass(R) ? this.hide() : this.show()
        }
        ,
        e.show = function() {
            if (o = this,
            !(this._isTransitioning || n.default(this._element).hasClass(R) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(xe)
            })).length && (e = null),
            e && (a = n.default(e).not(this._selector).data(b)) && a._isTransitioning)) && (r = n.default.Event("show.bs.collapse"),
            n.default(this._element).trigger(r),
            !r.isDefaultPrevented())) {
                e && (t._jQueryInterface.call(n.default(e).not(this._selector), "hide"),
                a || n.default(e).data(b, null)),
                i = this._getDimension(),
                n.default(this._element).removeClass(xe).addClass(Y),
                this._element.style[i] = 0,
                this._triggerArray.length && n.default(this._triggerArray).removeClass(Ae).attr("aria-expanded", !0),
                this.setTransitioning(!0);
                var e, o, i, a, r, c = "scroll" + (i[0].toUpperCase() + i.slice(1)), l = s.getTransitionDurationFromElement(this._element);
                n.default(this._element).one(s.TRANSITION_END, function() {
                    n.default(o._element).removeClass(Y).addClass("collapse show"),
                    o._element.style[i] = "",
                    o.setTransitioning(!1),
                    n.default(o._element).trigger("shown.bs.collapse")
                }).emulateTransitionEnd(l),
                this._element.style[i] = this._element[c] + "px"
            }
        }
        ,
        e.hide = function() {
            if (o = this,
            !this._isTransitioning && n.default(this._element).hasClass(R) && (i = n.default.Event("hide.bs.collapse"),
            n.default(this._element).trigger(i),
            !i.isDefaultPrevented())) {
                if (e = this._getDimension(),
                this._element.style[e] = this._element.getBoundingClientRect()[e] + "px",
                s.reflow(this._element),
                n.default(this._element).addClass(Y).removeClass("collapse show"),
                a = this._triggerArray.length,
                a > 0)
                    for (t = 0; t < a; t++) {
                        var e, t, o, i, a, l, r = this._triggerArray[t], c = s.getSelectorFromElement(r);
                        null !== c && (n.default([].slice.call(document.querySelectorAll(c))).hasClass(R) || n.default(r).addClass(Ae).attr("aria-expanded", !1))
                    }
                this.setTransitioning(!0),
                this._element.style[e] = "",
                l = s.getTransitionDurationFromElement(this._element),
                n.default(this._element).one(s.TRANSITION_END, function() {
                    o.setTransitioning(!1),
                    n.default(o._element).removeClass(Y).addClass(xe).trigger("hidden.bs.collapse")
                }).emulateTransitionEnd(l)
            }
        }
        ,
        e.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        e.dispose = function() {
            n.default.removeData(this._element, b),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        e._getConfig = function(e) {
            return (e = o({}, ge, e)).toggle = Boolean(e.toggle),
            s.typeCheckConfig(j, e, Ut),
            e
        }
        ,
        e._getDimension = function() {
            return n.default(this._element).hasClass(kt) ? kt : "height"
        }
        ,
        e._getParent = function() {
            o = this,
            s.isElement(this._config.parent) ? (e = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var e, o, i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', a = [].slice.call(e.querySelectorAll(i));
            return n.default(a).each(function(e, n) {
                o._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
            }),
            e
        }
        ,
        e._addAriaAndCollapsedClass = function(e, t) {
            var s = n.default(e).hasClass(R);
            t.length && n.default(t).toggleClass(Ae, !s).attr("aria-expanded", s)
        }
        ,
        t._getTargetFromElement = function(e) {
            var t = s.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var i = n.default(this)
                  , s = i.data(b)
                  , a = o({}, ge, i.data(), "object" == typeof e && e ? e : {});
                if (!s && a.toggle && "string" == typeof e && /show|hide/.test(e) && (a.toggle = !1),
                s || (s = new t(this,a),
                i.data(b, s)),
                "string" == typeof e) {
                    if ("undefined" == typeof s[e])
                        throw new TypeError('No method named "' + e + '"');
                    s[e]()
                }
            })
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ge
            }
        }]),
        t
    }();
    n.default(document).on("click.bs.collapse.data-api", At, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var t = n.default(this)
          , o = s.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(o));
        n.default(i).each(function() {
            var e = n.default(this)
              , s = e.data(b) ? "toggle" : t.data();
            I._jQueryInterface.call(e, s)
        })
    }),
    n.default.fn[j] = I._jQueryInterface,
    n.default.fn[j].Constructor = I,
    n.default.fn[j].noConflict = function() {
        return n.default.fn[j] = Jt,
        I._jQueryInterface
    }
    ;
    var H = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , Ht = function() {
        for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
            if (H && navigator.userAgent.indexOf(t[e]) >= 0)
                return 1;
        return 0
    }()
      , Pt = H && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, Ht))
        }
    }
    ;
    function zt(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function f(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function ke(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function L(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = f(e)
          , n = t.overflow
          , s = t.overflowX
          , o = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + s) ? e : L(ke(e))
    }
    function rt(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    ce = H && !!window.MSInputMethodContext && !!document.documentMode,
    be = H && /MSIE 10/.test(navigator.userAgent);
    function w(e) {
        return 11 === e ? ce : 10 === e ? be : ce || be
    }
    function C(e) {
        if (!e)
            return document.documentElement;
        for (var n, s = w(10) ? document.body : null, t = e.offsetParent || null; t === s && e.nextElementSibling; )
            t = (e = e.nextElementSibling).offsetParent;
        return n = t && t.nodeName,
        n && "BODY" !== n && "HTML" !== n ? -1 !== ["TH", "TD", "TABLE"].indexOf(t.nodeName) && "static" === f(t, "position") ? C(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function ue(e) {
        return null !== e.parentNode ? ue(e.parentNode) : e
    }
    function se(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n, o, i, l, a = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = a ? e : t, c = a ? t : e, s = document.createRange();
        return s.setStart(r, 0),
        s.setEnd(c, 0),
        n = s.commonAncestorContainer,
        e !== n && t !== n || r.contains(c) ? "BODY" === (l = (o = n).nodeName) || "HTML" !== l && C(o.firstElementChild) !== o ? C(n) : n : (i = ue(e),
        i.host ? se(i.host, t) : se(e, ue(t).host))
    }
    function E(e) {
        var s, o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top", t = "top" === i ? "scrollTop" : "scrollLeft", n = e.nodeName;
        return "BODY" === n || "HTML" === n ? (s = e.ownerDocument.documentElement,
        o = e.ownerDocument.scrollingElement || s,
        o[t]) : e[t]
    }
    function Nt(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , s = E(t, "top")
          , o = E(t, "left")
          , n = i ? -1 : 1;
        return e.top += s * n,
        e.bottom += s * n,
        e.left += o * n,
        e.right += o * n,
        e
    }
    function Ft(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , s = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + s + "Width"])
    }
    function Ct(e, t, n, s) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], w(10) ? parseInt(n["offset" + e]) + parseInt(s["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(s["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function Ot(e) {
        var n = e.body
          , t = e.documentElement
          , s = w(10) && getComputedStyle(t);
        return {
            height: Ct("Height", n, t, s),
            width: Ct("Width", n, t, s)
        }
    }
    var on = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , an = function() {
        function e(e, t) {
            for (var n, s = 0; s < t.length; s++)
                n = t[s],
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
        return function(t, n, s) {
            return n && e(t.prototype, n),
            s && e(t, s),
            t
        }
    }()
      , x = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , i = Object.assign || function(e) {
        for (var t, s, n = 1; n < arguments.length; n++) {
            t = arguments[n];
            for (s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
        }
        return e
    }
    ;
    function l(e) {
        return i({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function fe(e) {
        t = {};
        try {
            w(10) ? (t = e.getBoundingClientRect(),
            s = E(e, "top"),
            o = E(e, "left"),
            t.top += s,
            t.left += o,
            t.bottom += s,
            t.right += o) : t = e.getBoundingClientRect()
        } catch {}
        var t, s, o, r, n = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }, c = "HTML" === e.nodeName ? Ot(e.ownerDocument) : {}, d = c.width || e.clientWidth || n.width, u = c.height || e.clientHeight || n.height, i = e.offsetWidth - d, a = e.offsetHeight - u;
        return (i || a) && (r = f(e),
        i -= Ft(r, "x"),
        a -= Ft(r, "y"),
        n.width -= i,
        n.height -= a),
        l(n)
    }
    function pe(e, t) {
        var n, a, r, h = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], m = w(10), p = "HTML" === t.nodeName, o = fe(e), s = fe(t), c = L(e), i = f(t), d = parseFloat(i.borderTopWidth), u = parseFloat(i.borderLeftWidth);
        return h && p && (s.top = Math.max(s.top, 0),
        s.left = Math.max(s.left, 0)),
        n = l({
            top: o.top - s.top - d,
            left: o.left - s.left - u,
            width: o.width,
            height: o.height
        }),
        (n.marginTop = 0,
        n.marginLeft = 0,
        !m && p) && (a = parseFloat(i.marginTop),
        r = parseFloat(i.marginLeft),
        n.top -= d - a,
        n.bottom -= d - a,
        n.left -= u - r,
        n.right -= u - r,
        n.marginTop = a,
        n.marginLeft = r),
        (m && !h ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (n = Nt(n, t)),
        n
    }
    function cn(e) {
        var s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , t = e.ownerDocument.documentElement
          , n = pe(e, t)
          , o = Math.max(t.clientWidth, window.innerWidth || 0)
          , i = Math.max(t.clientHeight, window.innerHeight || 0)
          , a = s ? 0 : E(t)
          , r = s ? 0 : E(t, "left")
          , c = {
            top: a - n.top + n.marginTop,
            left: r - n.left + n.marginLeft,
            width: o,
            height: i
        };
        return l(c)
    }
    function ht(e) {
        var t, n = e.nodeName;
        return "BODY" !== n && "HTML" !== n && ("fixed" === f(e, "position") || (t = ke(e),
        !!t && ht(t)))
    }
    function lt(e) {
        if (!e || !e.parentElement || w())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === f(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function je(e, t, n, s) {
        var i, a, r, c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {
            top: 0,
            left: 0
        }, l = c ? lt(e) : se(e, rt(t));
        if ("viewport" === s)
            o = cn(l, c);
        else if (a = void 0,
        "scrollParent" === s ? "BODY" === (a = L(ke(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === s ? e.ownerDocument.documentElement : s,
        i = pe(a, l, c),
        "HTML" !== a.nodeName || ht(l))
            o = i;
        else {
            var d = Ot(e.ownerDocument)
              , u = d.height
              , h = d.width;
            o.top += i.top - i.marginTop,
            o.bottom = u + i.top,
            o.left += i.left - i.marginLeft,
            o.right = h + i.left
        }
        return r = "number" == typeof (n = n || 0),
        o.left += r ? n : n.left || 0,
        o.top += r ? n : n.top || 0,
        o.right -= r ? n : n.right || 0,
        o.bottom -= r ? n : n.bottom || 0,
        o
    }
    function hn(e) {
        return e.width * e.height
    }
    function it(e, t, n, s, o) {
        if (c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
        -1 === e.indexOf("auto"))
            return e;
        var c, a = je(n, s, c, o), r = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        }, l = Object.keys(r).map(function(e) {
            return i({
                key: e
            }, r[e], {
                area: hn(r[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        }), d = l.filter(function(e) {
            var t = e.width
              , s = e.height;
            return t >= n.clientWidth && s >= n.clientHeight
        }), h = d.length > 0 ? d[0].key : l[0].key, u = e.split("-")[1];
        return h + (u ? "-" + u : "")
    }
    function ot(e, t, n) {
        var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
          , o = s ? lt(t) : se(t, rt(n));
        return pe(n, o, s)
    }
    function nt(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , s = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + s,
            height: e.offsetHeight + n
        }
    }
    function X(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function Ze(e, t, n) {
        n = n.split("-")[0];
        var s = nt(e)
          , a = {
            width: s.width,
            height: s.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , r = o ? "top" : "left"
          , i = o ? "left" : "top"
          , c = o ? "height" : "width"
          , l = o ? "width" : "height";
        return a[r] = t[r] + t[c] / 2 - s[c] / 2,
        a[i] = n === i ? t[i] - s[l] : t[X(i)],
        a
    }
    function M(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function Qe(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e.name === n
                });
            var s = M(e, function(e) {
                return e.name === n
            });
            return e.indexOf(s)
        }(e, 0, n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && zt(n) && (t.offsets.popper = l(t.offsets.popper),
            t.offsets.reference = l(t.offsets.reference),
            t = n(t, e))
        }),
        t
    }
    function jn() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = ot(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = it(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = Ze(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
            e = Qe(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function qe(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }
    function Me(e) {
        for (var n, s, o = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), t = 0; t < o.length; t++)
            if (n = o[t],
            s = n ? "" + n + i : e,
            "undefined" != typeof document.body.style[s])
                return s;
        return null
    }
    function _n() {
        return this.state.isDestroyed = !0,
        qe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style.left = "",
        this.popper.style.right = "",
        this.popper.style.bottom = "",
        this.popper.style.willChange = "",
        this.popper.style[Me("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function Ue(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function Ve(e, t, n, s) {
        var i = "BODY" === e.nodeName
          , o = i ? e.ownerDocument.defaultView : e;
        o.addEventListener(t, n, {
            passive: !0
        }),
        i || Ve(L(o.parentNode), t, n, s),
        s.push(o)
    }
    function wn(e, t, n, s) {
        n.updateBound = s,
        Ue(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = L(e);
        return Ve(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function Cn() {
        this.state.eventsEnabled || (this.state = wn(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function mn() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (t = this.reference,
        e = this.state,
        Ue(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e))
    }
    function Te(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function Ne(e, t) {
        Object.keys(t).forEach(function(n) {
            var s = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Te(t[n]) && (s = "px"),
            e.style[n] = t[n] + s
        })
    }
    Le = H && /Firefox/i.test(navigator.userAgent);
    function Ie(e, t, n) {
        var s, a, o = M(e, function(e) {
            return e.name === t
        }), i = !!o && e.some(function(e) {
            return e.name === n && e.enabled && e.order < o.order
        });
        return i || (s = "`" + t + "`",
        a = "`" + n + "`",
        console.warn(a + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")),
        i
    }
    De = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
    $ = De.slice(3);
    function $e(e) {
        var s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , t = $.indexOf(e)
          , n = $.slice(t + 1).concat($.slice(0, t));
        return s ? n.reverse() : n
    }
    We = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var s = e.placement
                      , d = s.split("-")[0]
                      , o = s.split("-")[1];
                    if (o) {
                        var a = e.offsets
                          , n = a.reference
                          , r = a.popper
                          , c = -1 !== ["bottom", "top"].indexOf(d)
                          , t = c ? "left" : "top"
                          , l = c ? "width" : "height"
                          , u = {
                            start: x({}, t, n[t]),
                            end: x({}, t, n[t] + n[l] - r[l])
                        };
                        e.offsets.popper = i({}, r, u[o])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var s, i = t.offset, r = e.placement, a = e.offsets, n = a.popper, c = a.reference, o = r.split("-")[0];
                    return s = Te(+i) ? [+i, 0] : function(e, t, n, s) {
                        var a, r, c = [0, 0], d = -1 !== ["right", "left"].indexOf(s), o = e.split(/(\+|-)/).map(function(e) {
                            return e.trim()
                        }), i = o.indexOf(M(o, function(e) {
                            return -1 !== e.search(/,|\s/)
                        }));
                        return o[i] && -1 === o[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),
                        r = /\s*,\s*|\s+/,
                        a = -1 !== i ? [o.slice(0, i).concat([o[i].split(r)[0]]), [o[i].split(r)[1]].concat(o.slice(i + 1))] : [o],
                        a = a.map(function(e, s) {
                            var i = (1 === s ? !d : d) ? "height" : "width"
                              , o = !1;
                            return e.reduce(function(e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                                o = !0,
                                e) : o ? (e[e.length - 1] += t,
                                o = !1,
                                e) : e.concat(t)
                            }, []).map(function(e) {
                                return function(e, t, n, s) {
                                    var a = e.match(/((?:-|\+)?\d*\.?\d*)(.*)/)
                                      , i = +a[1]
                                      , o = a[2];
                                    return i ? 0 === o.indexOf("%") ? l("%p" === o ? n : s)[t] / 100 * i : "vh" === o || "vw" === o ? ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i : i : e
                                }(e, i, t, n)
                            })
                        }),
                        a.forEach(function(e, t) {
                            e.forEach(function(n, s) {
                                Te(n) && (c[t] += n * ("-" === e[s - 1] ? -1 : 1))
                            })
                        }),
                        c
                    }(i, n, c, o),
                    "left" === o ? (n.top += s[0],
                    n.left -= s[1]) : "right" === o ? (n.top += s[0],
                    n.left += s[1]) : "top" === o ? (n.left += s[0],
                    n.top -= s[1]) : "bottom" === o && (n.left += s[0],
                    n.top += s[1]),
                    e.popper = n,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    a = t.boundariesElement || C(e.instance.popper),
                    e.instance.reference === a && (a = C(a));
                    var o, a, r = Me("transform"), s = e.instance.popper.style, c = s.top, l = s.left, d = s[r];
                    s.top = "",
                    s.left = "",
                    s[r] = "",
                    o = je(e.instance.popper, e.instance.reference, t.padding, a, e.positionFixed),
                    s.top = c,
                    s.left = l,
                    s[r] = d,
                    t.boundaries = o;
                    var u = t.priority
                      , n = e.offsets.popper
                      , h = {
                        primary: function(e) {
                            var s = n[e];
                            return n[e] < o[e] && !t.escapeWithReference && (s = Math.max(n[e], o[e])),
                            x({}, e, s)
                        },
                        secondary: function(e) {
                            var s = "right" === e ? "left" : "top"
                              , i = n[s];
                            return n[e] > o[e] && !t.escapeWithReference && (i = Math.min(n[s], o[e] - ("right" === e ? n.width : n.height))),
                            x({}, s, i)
                        }
                    };
                    return u.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        n = i({}, n, h[t](e))
                    }),
                    e.offsets.popper = n,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var r = e.offsets
                      , o = r.popper
                      , n = r.reference
                      , c = e.placement.split("-")[0]
                      , s = Math.floor
                      , i = -1 !== ["top", "bottom"].indexOf(c)
                      , a = i ? "right" : "bottom"
                      , t = i ? "left" : "top"
                      , l = i ? "width" : "height";
                    return o[a] < s(n[t]) && (e.offsets.popper[t] = s(n[t]) - o[l]),
                    o[t] > s(n[a]) && (e.offsets.popper[t] = s(n[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (!Ie(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    if (s = t.element,
                    "string" == typeof s) {
                        if (!(s = e.instance.popper.querySelector(s)))
                            return e
                    } else if (!e.instance.popper.contains(s))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var s, u, b = e.placement.split("-")[0], p = e.offsets, a = p.popper, o = p.reference, c = -1 !== ["left", "right"].indexOf(b), h = c ? "height" : "width", d = c ? "Top" : "Left", n = d.toLowerCase(), v = c ? "left" : "top", r = c ? "bottom" : "right", i = nt(s)[h];
                    o[r] - i < a[n] && (e.offsets.popper[n] -= a[n] - (o[r] - i)),
                    o[n] + i > a[r] && (e.offsets.popper[n] += o[n] + i - a[r]),
                    e.offsets.popper = l(e.offsets.popper);
                    var j = o[n] + o[h] / 2 - i / 2
                      , g = f(e.instance.popper)
                      , y = parseFloat(g["margin" + d])
                      , _ = parseFloat(g["border" + d + "Width"])
                      , m = j - e.offsets.popper[n] - y - _;
                    return m = Math.max(Math.min(a[h] - i, m), 0),
                    e.arrowElement = s,
                    e.offsets.arrow = (x(u = {}, n, Math.round(m)),
                    x(u, v, ""),
                    u),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (qe(e.instance.modifiers, "inner"))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var a = je(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , n = e.placement.split("-")[0]
                      , r = X(n)
                      , s = e.placement.split("-")[1] || ""
                      , o = [];
                    switch (t.behavior) {
                    case "flip":
                        o = [n, r];
                        break;
                    case "clockwise":
                        o = $e(n);
                        break;
                    case "counterclockwise":
                        o = $e(n, !0);
                        break;
                    default:
                        o = t.behavior
                    }
                    return o.forEach(function(c, l) {
                        if (n !== c || o.length === l + 1)
                            return e;
                        n = e.placement.split("-")[0],
                        r = X(n);
                        var u = e.offsets.popper
                          , m = e.offsets.reference
                          , d = Math.floor
                          , j = "left" === n && d(u.right) > d(m.left) || "right" === n && d(u.left) < d(m.right) || "top" === n && d(u.bottom) > d(m.top) || "bottom" === n && d(u.top) < d(m.bottom)
                          , g = d(u.left) < d(a.left)
                          , p = d(u.right) > d(a.right)
                          , f = d(u.top) < d(a.top)
                          , v = d(u.bottom) > d(a.bottom)
                          , b = "left" === n && g || "right" === n && p || "top" === n && f || "bottom" === n && v
                          , h = -1 !== ["top", "bottom"].indexOf(n)
                          , _ = !!t.flipVariations && (h && "start" === s && g || h && "end" === s && p || !h && "start" === s && f || !h && "end" === s && v)
                          , w = !!t.flipVariationsByContent && (h && "start" === s && p || h && "end" === s && g || !h && "start" === s && v || !h && "end" === s && f)
                          , y = _ || w;
                        (j || b || y) && (e.flipped = !0,
                        (j || b) && (n = o[l + 1]),
                        y && (s = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(s)),
                        e.placement = n + (s ? "-" + s : ""),
                        e.offsets.popper = i({}, e.offsets.popper, Ze(e.instance.popper, e.offsets.reference, e.placement)),
                        e = Qe(e.instance.modifiers, e, "flip"))
                    }),
                    e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var s = e.placement
                      , t = s.split("-")[0]
                      , o = e.offsets
                      , n = o.popper
                      , a = o.reference
                      , i = -1 !== ["left", "right"].indexOf(t)
                      , r = -1 === ["top", "left"].indexOf(t);
                    return n[i ? "left" : "top"] = a[t] - (r ? n[i ? "width" : "height"] : 0),
                    e.placement = X(s),
                    e.offsets.popper = l(n),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!Ie(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = M(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var v = t.x
                      , j = t.y
                      , b = e.offsets.popper
                      , c = M(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== c && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var m, f, p, g = void 0 !== c ? c : t.gpuAcceleration, o = C(e.instance.popper), d = fe(o), n = {
                        position: b.position
                    }, s = function(e, t) {
                        var o = e.offsets
                          , n = o.popper
                          , u = o.reference
                          , s = Math.round
                          , h = Math.floor
                          , i = function(e) {
                            return e
                        }
                          , a = s(u.width)
                          , r = s(n.width)
                          , m = -1 !== ["left", "right"].indexOf(e.placement)
                          , c = -1 !== e.placement.indexOf("-")
                          , l = t ? m || c || a % 2 == r % 2 ? s : h : i
                          , d = t ? s : i;
                        return {
                            left: l(a % 2 == 1 && r % 2 == 1 && !c && t ? n.left - 1 : n.left),
                            top: d(n.top),
                            bottom: d(n.bottom),
                            right: l(n.right)
                        }
                    }(e, window.devicePixelRatio < 2 || !Le), r = "bottom" === v ? "top" : "bottom", a = "right" === j ? "left" : "right", h = Me("transform"), u = "bottom" === r ? "HTML" === o.nodeName ? -o.clientHeight + s.bottom : -d.height + s.bottom : s.top, l = "right" === a ? "HTML" === o.nodeName ? -o.clientWidth + s.right : -d.width + s.right : s.left;
                    return g && h ? (n[h] = "translate3d(" + l + "px, " + u + "px, 0)",
                    n[r] = 0,
                    n[a] = 0,
                    n.willChange = "transform") : (m = "bottom" === r ? -1 : 1,
                    f = "right" === a ? -1 : 1,
                    n[r] = u * m,
                    n[a] = l * f,
                    n.willChange = r + ", " + a),
                    p = {
                        "x-placement": e.placement
                    },
                    e.attributes = i({}, p, e.attributes),
                    e.styles = i({}, n, e.styles),
                    e.arrowStyles = i({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return Ne(e.instance.popper, e.styles),
                    n = e.instance.popper,
                    t = e.attributes,
                    Object.keys(t).forEach(function(e) {
                        !1 !== t[e] ? n.setAttribute(e, t[e]) : n.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && Ne(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, s, o) {
                    var i = ot(o, t, e, n.positionFixed)
                      , a = it(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a),
                    Ne(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    },
    N = function() {
        function e(t, n) {
            var a, s = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            on(this, e),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(s.update)
            }
            ,
            this.update = Pt(this.update.bind(this)),
            this.options = i({}, e.Defaults, o),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = t && t.jquery ? t[0] : t,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(i({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) {
                s.options.modifiers[t] = i({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return i({
                    name: e
                }, s.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && zt(e.onLoad) && e.onLoad(s.reference, s.popper, s.options, e, s.state)
            }),
            this.update(),
            a = this.options.eventsEnabled,
            a && this.enableEventListeners(),
            this.state.eventsEnabled = a
        }
        return an(e, [{
            key: "update",
            value: function() {
                return jn.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return _n.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return Cn.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return mn.call(this)
            }
        }]),
        e
    }(),
    N.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    N.placements = De,
    N.Defaults = We;
    var n, s, S, N, $, ce, be, Le, De, We, K = N, g = "dropdown", q = "bs.dropdown", gn = n.default.fn[g], pn = new RegExp("38|40|27"), G = "disabled", a = "show", Je = "dropdown-menu-right", et = "hide.bs.dropdown", tt = "hidden.bs.dropdown", Oe = "click.bs.dropdown.data-api", st = "keydown.bs.dropdown.data-api", Z = '[data-toggle="dropdown"]', _e = ".dropdown-menu", fn = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }, Dt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }, d = function() {
        function e(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = e.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !n.default(this._element).hasClass(G)) {
                var t = n.default(this._menu).hasClass(a);
                e._clearMenus(),
                t || this.show(!0)
            }
        }
        ,
        t.show = function(t) {
            if (void 0 === t && (t = !1),
            !(this._element.disabled || n.default(this._element).hasClass(G) || n.default(this._menu).hasClass(a))) {
                var i, r = {
                    relatedTarget: this._element
                }, c = n.default.Event("show.bs.dropdown", r), o = e._getParentFromElement(this._element);
                if (n.default(o).trigger(c),
                !c.isDefaultPrevented()) {
                    if (!this._inNavbar && t) {
                        if ("undefined" == typeof K)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        i = this._element,
                        "parent" === this._config.reference ? i = o : s.isElement(this._config.reference) && (i = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (i = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && n.default(o).addClass("position-static"),
                        this._popper = new K(i,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === n.default(o).closest(".navbar-nav").length && n.default(document.body).children().on("mouseover", null, n.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    n.default(this._menu).toggleClass(a),
                    n.default(o).toggleClass(a).trigger(n.default.Event("shown.bs.dropdown", r))
                }
            }
        }
        ,
        t.hide = function() {
            if (!this._element.disabled && !n.default(this._element).hasClass(G) && n.default(this._menu).hasClass(a)) {
                var t = {
                    relatedTarget: this._element
                }
                  , s = n.default.Event(et, t)
                  , o = e._getParentFromElement(this._element);
                n.default(o).trigger(s),
                s.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                n.default(this._menu).toggleClass(a),
                n.default(o).toggleClass(a).trigger(n.default.Event(tt, t)))
            }
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, q),
            n.default(this._element).off(".bs.dropdown"),
            this._element = null,
            this._menu = null,
            null !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            n.default(this._element).on("click.bs.dropdown", function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(e) {
            return e = o({}, this.constructor.Default, n.default(this._element).data(), e),
            s.typeCheckConfig(g, e, this.constructor.DefaultType),
            e
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(_e))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var t = n.default(this._element.parentNode)
              , e = "bottom-start";
            return t.hasClass("dropup") ? e = n.default(this._menu).hasClass(Je) ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : n.default(this._menu).hasClass(Je) && (e = "bottom-end"),
            e
        }
        ,
        t._detectNavbar = function() {
            return n.default(this._element).closest(".navbar").length > 0
        }
        ,
        t._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = o({}, e.offsets, t._config.offset(e.offsets, t._element)),
                e
            }
            : e.offset = this._config.offset,
            e
        }
        ,
        t._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }),
            o({}, e, this._config.popperConfig)
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var s = n.default(this).data(q);
                if (s || (s = new e(this,"object" == typeof t ? t : null),
                n.default(this).data(q, s)),
                "string" == typeof t) {
                    if ("undefined" == typeof s[t])
                        throw new TypeError('No method named "' + t + '"');
                    s[t]()
                }
            })
        }
        ,
        e._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var l, d, o = [].slice.call(document.querySelectorAll(Z)), s = 0, u = o.length; s < u; s++) {
                    var i = e._getParentFromElement(o[s])
                      , r = n.default(o[s]).data(q)
                      , c = {
                        relatedTarget: o[s]
                    };
                    t && "click" === t.type && (c.clickEvent = t),
                    r && (d = r._menu,
                    n.default(i).hasClass(a) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && n.default.contains(i, t.target)) && (l = n.default.Event(et, c),
                    n.default(i).trigger(l),
                    l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && n.default(document.body).children().off("mouseover", null, n.default.noop),
                    o[s].setAttribute("aria-expanded", "false"),
                    r._popper && r._popper.destroy(),
                    n.default(d).removeClass(a),
                    n.default(i).removeClass(a).trigger(n.default.Event(tt, c)))))
                }
        }
        ,
        e._getParentFromElement = function(e) {
            var t, n = s.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        e._dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || n.default(t.target).closest(_e).length) : !pn.test(t.which)) && !this.disabled && !n.default(this).hasClass(G)) {
                var s, o, i = e._getParentFromElement(this), r = n.default(i).hasClass(a);
                if (r || 27 !== t.which) {
                    if (t.preventDefault(),
                    t.stopPropagation(),
                    !r || 27 === t.which || 32 === t.which)
                        return 27 === t.which && n.default(i.querySelector(Z)).trigger("focus"),
                        void n.default(this).trigger("click");
                    o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                        return n.default(e).is(":visible")
                    }),
                    0 !== o.length && (s = o.indexOf(t.target),
                    38 === t.which && s > 0 && s--,
                    40 === t.which && s < o.length - 1 && s++,
                    s < 0 && (s = 0),
                    o[s].focus())
                }
            }
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return fn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Dt
            }
        }]),
        e
    }();
    n.default(document).on(st, Z, d._dataApiKeydownHandler).on(st, _e, d._dataApiKeydownHandler).on(Oe + " keyup.bs.dropdown.data-api", d._clearMenus).on(Oe, Z, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        d._jQueryInterface.call(n.default(this), "toggle")
    }).on(Oe, ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    n.default.fn[g] = d._jQueryInterface,
    n.default.fn[g].Constructor = d,
    n.default.fn[g].noConflict = function() {
        return n.default.fn[g] = gn,
        d._jQueryInterface
    }
    ;
    var J = "bs.modal"
      , un = n.default.fn.modal
      , ut = "modal-open"
      , v = "fade"
      , ee = "show"
      , ft = "modal-static"
      , pt = "hidden.bs.modal"
      , gt = "show.bs.modal"
      , ae = "focusin.bs.modal"
      , bt = "resize.bs.modal"
      , le = "click.dismiss.bs.modal"
      , yt = "keydown.dismiss.bs.modal"
      , _t = "mousedown.dismiss.bs.modal"
      , wt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , we = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , sn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , z = function() {
        function t(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(".modal-dialog"),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var e = t.prototype;
        return e.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        e.show = function(e) {
            var s, t = this;
            !this._isShown && !this._isTransitioning && (s = n.default.Event(gt, {
                relatedTarget: e
            }),
            n.default(this._element).trigger(s),
            s.isDefaultPrevented() || (this._isShown = !0,
            n.default(this._element).hasClass(v) && (this._isTransitioning = !0),
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            n.default(this._element).on(le, '[data-dismiss="modal"]', function(e) {
                return t.hide(e)
            }),
            n.default(this._dialog).on(_t, function() {
                n.default(t._element).one("mouseup.dismiss.bs.modal", function(e) {
                    n.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                })
            }),
            this._showBackdrop(function() {
                return t._showElement(e)
            })))
        }
        ,
        e.hide = function(e) {
            var t, o, i, a = this;
            e && e.preventDefault(),
            this._isShown && !this._isTransitioning && (t = n.default.Event("hide.bs.modal"),
            (n.default(this._element).trigger(t),
            this._isShown && !t.isDefaultPrevented()) && (this._isShown = !1,
            o = n.default(this._element).hasClass(v),
            o && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            n.default(document).off(ae),
            n.default(this._element).removeClass(ee),
            n.default(this._element).off(le),
            n.default(this._dialog).off(_t),
            o ? (i = s.getTransitionDurationFromElement(this._element),
            n.default(this._element).one(s.TRANSITION_END, function(e) {
                return a._hideModal(e)
            }).emulateTransitionEnd(i)) : this._hideModal()))
        }
        ,
        e.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return n.default(e).off(".bs.modal")
            }),
            n.default(document).off(ae),
            n.default.removeData(this._element, J),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(e) {
            return e = o({}, we, e),
            s.typeCheckConfig("modal", e, sn),
            e
        }
        ,
        e._triggerBackdropTransition = function() {
            var t, o, e = this, i = n.default.Event("hidePrevented.bs.modal");
            n.default(this._element).trigger(i),
            !i.isDefaultPrevented() && (t = this._element.scrollHeight > document.documentElement.clientHeight,
            t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(ft),
            o = s.getTransitionDurationFromElement(this._dialog),
            n.default(this._element).off(s.TRANSITION_END),
            n.default(this._element).one(s.TRANSITION_END, function() {
                e._element.classList.remove(ft),
                t || n.default(e._element).one(s.TRANSITION_END, function() {
                    e._element.style.overflowY = ""
                }).emulateTransitionEnd(e._element, o)
            }).emulateTransitionEnd(o),
            this._element.focus())
        }
        ,
        e._showElement = function(e) {
            var o, r, c, t = this, i = n.default(this._element).hasClass(v), a = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            n.default(this._dialog).hasClass("modal-dialog-scrollable") && a ? a.scrollTop = 0 : this._element.scrollTop = 0,
            i && s.reflow(this._element),
            n.default(this._element).addClass(ee),
            this._config.focus && this._enforceFocus(),
            r = n.default.Event("shown.bs.modal", {
                relatedTarget: e
            }),
            o = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                n.default(t._element).trigger(r)
            }
            ,
            i ? (c = s.getTransitionDurationFromElement(this._dialog),
            n.default(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(c)) : o()
        }
        ,
        e._enforceFocus = function() {
            var e = this;
            n.default(document).off(ae).on(ae, function(t) {
                document !== t.target && e._element !== t.target && 0 === n.default(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        e._setEscapeEvent = function() {
            var e = this;
            this._isShown ? n.default(this._element).on(yt, function(t) {
                e._config.keyboard && 27 === t.which ? (t.preventDefault(),
                e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
            }) : this._isShown || n.default(this._element).off(yt)
        }
        ,
        e._setResizeEvent = function() {
            var e = this;
            this._isShown ? n.default(window).on(bt, function(t) {
                return e.handleUpdate(t)
            }) : n.default(window).off(bt)
        }
        ,
        e._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                n.default(document.body).removeClass(ut),
                e._resetAdjustments(),
                e._resetScrollbar(),
                n.default(e._element).trigger(pt)
            })
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && (n.default(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(e) {
            var i, a, r, t = this, o = n.default(this._element).hasClass(v) ? v : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                o && this._backdrop.classList.add(o),
                n.default(this._backdrop).appendTo(document.body),
                n.default(this._element).on(le, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                }),
                o && s.reflow(this._backdrop),
                n.default(this._backdrop).addClass(ee),
                !e)
                    return;
                if (!o)
                    return void e();
                a = s.getTransitionDurationFromElement(this._backdrop),
                n.default(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(a)
            } else
                !this._isShown && this._backdrop ? (n.default(this._backdrop).removeClass(ee),
                i = function() {
                    t._removeBackdrop(),
                    e && e()
                }
                ,
                n.default(this._element).hasClass(v) ? (r = s.getTransitionDurationFromElement(this._backdrop),
                n.default(this._backdrop).one(s.TRANSITION_END, i).emulateTransitionEnd(r)) : i()) : e && e()
        }
        ,
        e._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            if (e = this,
            this._isBodyOverflowing) {
                var e, t, s, o = [].slice.call(document.querySelectorAll(wt)), i = [].slice.call(document.querySelectorAll(".sticky-top"));
                n.default(o).each(function(t, s) {
                    var o = s.style.paddingRight
                      , i = n.default(s).css("padding-right");
                    n.default(s).data("padding-right", o).css("padding-right", parseFloat(i) + e._scrollbarWidth + "px")
                }),
                n.default(i).each(function(t, s) {
                    var o = s.style.marginRight
                      , i = n.default(s).css("margin-right");
                    n.default(s).data("margin-right", o).css("margin-right", parseFloat(i) - e._scrollbarWidth + "px")
                }),
                t = document.body.style.paddingRight,
                s = n.default(document.body).css("padding-right"),
                n.default(document.body).data("padding-right", t).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
            }
            n.default(document.body).addClass(ut)
        }
        ,
        e._resetScrollbar = function() {
            var e, t, s = [].slice.call(document.querySelectorAll(wt));
            n.default(s).each(function(e, t) {
                var s = n.default(t).data("padding-right");
                n.default(t).removeData("padding-right"),
                t.style.paddingRight = s || ""
            }),
            e = [].slice.call(document.querySelectorAll(".sticky-top")),
            n.default(e).each(function(e, t) {
                var s = n.default(t).data("margin-right");
                "undefined" != typeof s && n.default(t).css("margin-right", s).removeData("margin-right")
            }),
            t = n.default(document.body).data("padding-right"),
            n.default(document.body).removeData("padding-right"),
            document.body.style.paddingRight = t || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var t, e = document.createElement("div");
            return e.className = "modal-scrollbar-measure",
            document.body.appendChild(e),
            t = e.getBoundingClientRect().width - e.clientWidth,
            document.body.removeChild(e),
            t
        }
        ,
        t._jQueryInterface = function(e, s) {
            return this.each(function() {
                var i = n.default(this).data(J)
                  , a = o({}, we, n.default(this).data(), "object" == typeof e && e ? e : {});
                if (i || (i = new t(this,a),
                n.default(this).data(J, i)),
                "string" == typeof e) {
                    if ("undefined" == typeof i[e])
                        throw new TypeError('No method named "' + e + '"');
                    i[e](s)
                } else
                    a.show && i.show(s)
            })
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return we
            }
        }]),
        t
    }();
    n.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t, r, c, i = this, a = s.getSelectorFromElement(this);
        a && (t = document.querySelector(a)),
        r = n.default(t).data(J) ? "toggle" : o({}, n.default(t).data(), n.default(this).data()),
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(),
        c = n.default(t).one(gt, function(e) {
            e.isDefaultPrevented() || c.one(pt, function() {
                n.default(i).is(":visible") && i.focus()
            })
        }),
        z._jQueryInterface.call(n.default(t), r, this)
    }),
    n.default.fn.modal = z._jQueryInterface,
    n.default.fn.modal.Constructor = z,
    n.default.fn.modal.noConflict = function() {
        return n.default.fn.modal = un,
        z._jQueryInterface
    }
    ;
    var en = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Zt = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Kt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function St(e, t, n) {
        if (0 === e.length)
            return e;
        if (n && "function" == typeof n)
            return n(e);
        for (var o = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(t), i = [].slice.call(o.body.querySelectorAll("*")), r = function(e) {
            var o, r, s = i[e], c = s.nodeName.toLowerCase();
            if (-1 === a.indexOf(s.nodeName.toLowerCase()))
                return s.parentNode.removeChild(s),
                "continue";
            o = [].slice.call(s.attributes),
            r = [].concat(t["*"] || [], t[c] || []),
            o.forEach(function(e) {
                (function(e, t) {
                    if (n = e.nodeName.toLowerCase(),
                    -1 !== t.indexOf(n))
                        return -1 === en.indexOf(n) || Boolean(Zt.test(e.nodeValue) || Kt.test(e.nodeValue));
                    for (var n, o = t.filter(function(e) {
                        return e instanceof RegExp
                    }), s = 0, i = o.length; s < i; s++)
                        if (o[s].test(n))
                            return !0;
                    return !1
                }
                )(e, r) || s.removeAttribute(e.nodeName)
            })
        }, s = 0, c = i.length; s < c; s++)
            r(s);
        return o.body.innerHTML
    }
    var Mt = "tooltip"
      , de = "bs.tooltip"
      , It = n.default.fn.tooltip
      , Rt = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Lt = ["sanitize", "whiteList", "sanitizeFn"]
      , ie = "fade"
      , Q = "show"
      , P = "show"
      , Fe = "out"
      , B = "hover"
      , Tt = "focus"
      , Bt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Vt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , $t = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Wt = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , m = function() {
        function t(e, t) {
            if ("undefined" == typeof K)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var e = t.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }
        ,
        e.disable = function() {
            this._isEnabled = !1
        }
        ,
        e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        e.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var s = this.constructor.DATA_KEY
                      , t = n.default(e.currentTarget).data(s);
                    t || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    n.default(e.currentTarget).data(s, t)),
                    t._activeTrigger.click = !t._activeTrigger.click,
                    t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                } else {
                    if (n.default(this.getTipElement()).hasClass(Q))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            n.default.removeData(this.element, this.constructor.DATA_KEY),
            n.default(this.element).off(this.constructor.EVENT_KEY),
            n.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && n.default(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        e.show = function() {
            if (e = this,
            "none" === n.default(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            if (o = n.default.Event(this.constructor.Event.SHOW),
            this.isWithContent() && this._isEnabled) {
                n.default(this.element).trigger(o);
                var e, t, o, i, a, r, l, d, u, c = s.findShadowRoot(this.element), h = n.default.contains(null !== c ? c : this.element.ownerDocument.documentElement, this.element);
                if (o.isDefaultPrevented() || !h)
                    return;
                t = this.getTipElement(),
                i = s.getUID(this.constructor.NAME),
                t.setAttribute("id", i),
                this.element.setAttribute("aria-describedby", i),
                this.setContent(),
                this.config.animation && n.default(t).addClass(ie),
                l = "function" == typeof this.config.placement ? this.config.placement.call(this, t, this.element) : this.config.placement,
                a = this._getAttachment(l),
                this.addAttachmentClass(a),
                d = this._getContainer(),
                n.default(t).data(this.constructor.DATA_KEY, this),
                n.default.contains(this.element.ownerDocument.documentElement, this.tip) || n.default(t).appendTo(d),
                n.default(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new K(this.element,t,this._getPopperConfig(a)),
                n.default(t).addClass(Q),
                n.default(t).addClass(this.config.customClass),
                "ontouchstart"in document.documentElement && n.default(document.body).children().on("mouseover", null, n.default.noop),
                r = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    n.default(e.element).trigger(e.constructor.Event.SHOWN),
                    t === Fe && e._leave(null, e)
                }
                ,
                n.default(this.tip).hasClass(ie) ? (u = s.getTransitionDurationFromElement(this.tip),
                n.default(this.tip).one(s.TRANSITION_END, r).emulateTransitionEnd(u)) : r()
            }
        }
        ,
        e.hide = function(e) {
            var r, t = this, o = this.getTipElement(), i = n.default.Event(this.constructor.Event.HIDE), a = function() {
                t._hoverState !== P && o.parentNode && o.parentNode.removeChild(o),
                t._cleanTipClass(),
                t.element.removeAttribute("aria-describedby"),
                n.default(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                e && e()
            };
            n.default(this.element).trigger(i),
            !i.isDefaultPrevented() && (n.default(o).removeClass(Q),
            "ontouchstart"in document.documentElement && n.default(document.body).children().off("mouseover", null, n.default.noop),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1,
            n.default(this.tip).hasClass(ie) ? (r = s.getTransitionDurationFromElement(o),
            n.default(o).one(s.TRANSITION_END, a).emulateTransitionEnd(r)) : a(),
            this._hoverState = "")
        }
        ,
        e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        e.addAttachmentClass = function(e) {
            n.default(this.getTipElement()).addClass("bs-tooltip-" + e)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || n.default(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(n.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
            n.default(e).removeClass("fade show")
        }
        ,
        e.setElementContent = function(e, t) {
            "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = St(t, this.config.whiteList, this.config.sanitizeFn)),
            e.html(t)) : e.text(t) : this.config.html ? n.default(t).parent().is(e) || e.empty().append(t) : e.text(n.default(t).text())
        }
        ,
        e.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        e._getPopperConfig = function(e) {
            var t = this;
            return o({}, {
                placement: e,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                },
                onUpdate: function(e) {
                    return t._handlePopperPlacementChange(e)
                }
            }, this.config.popperConfig)
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = o({}, e.offsets, t.config.offset(e.offsets, t.element)),
                e
            }
            : e.offset = this.config.offset,
            e
        }
        ,
        e._getContainer = function() {
            return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? n.default(this.config.container) : n.default(document).find(this.config.container)
        }
        ,
        e._getAttachment = function(e) {
            return Bt[e.toUpperCase()]
        }
        ,
        e._setListeners = function() {
            var e = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    n.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                else if ("manual" !== t) {
                    var s = t === B ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                      , o = t === B ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                    n.default(e.element).on(s, e.config.selector, function(t) {
                        return e._enter(t)
                    }).on(o, e.config.selector, function(t) {
                        return e._leave(t)
                    })
                }
            }),
            this._hideModalHandler = function() {
                e.element && e.hide()
            }
            ,
            n.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = o({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        e._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        e._enter = function(e, t) {
            var s = this.constructor.DATA_KEY;
            (t = t || n.default(e.currentTarget).data(s)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            n.default(e.currentTarget).data(s, t)),
            e && (t._activeTrigger["focusin" === e.type ? Tt : B] = !0),
            n.default(t.getTipElement()).hasClass(Q) || t._hoverState === P ? t._hoverState = P : (clearTimeout(t._timeout),
            t._hoverState = P,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === P && t.show()
            }, t.config.delay.show) : t.show())
        }
        ,
        e._leave = function(e, t) {
            var s = this.constructor.DATA_KEY;
            (t = t || n.default(e.currentTarget).data(s)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            n.default(e.currentTarget).data(s, t)),
            e && (t._activeTrigger["focusout" === e.type ? Tt : B] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = Fe,
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                t._hoverState === Fe && t.hide()
            }, t.config.delay.hide) : t.hide())
        }
        ,
        e._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        e._getConfig = function(e) {
            var t = n.default(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== Lt.indexOf(e) && delete t[e]
            }),
            "number" == typeof (e = o({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            s.typeCheckConfig(Mt, e, this.constructor.DefaultType),
            e.sanitize && (e.template = St(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        e._getDelegateConfig = function() {
            var e, t = {};
            if (this.config)
                for (e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        e._cleanTipClass = function() {
            var t = n.default(this.getTipElement())
              , e = t.attr("class").match(Rt);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        e._handlePopperPlacementChange = function(e) {
            this.tip = e.instance.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        e._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("x-placement") && (n.default(e).removeClass(ie),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var o = n.default(this)
                  , s = o.data(de)
                  , i = "object" == typeof e && e;
                if ((s || !/dispose|hide/.test(e)) && (s || (s = new t(this,i),
                o.data(de, s)),
                "string" == typeof e)) {
                    if ("undefined" == typeof s[e])
                        throw new TypeError('No method named "' + e + '"');
                    s[e]()
                }
            })
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Vt
            }
        }, {
            key: "NAME",
            get: function() {
                return Mt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return de
            }
        }, {
            key: "Event",
            get: function() {
                return Wt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return $t
            }
        }]),
        t
    }();
    n.default.fn.tooltip = m._jQueryInterface,
    n.default.fn.tooltip.Constructor = m,
    n.default.fn.tooltip.noConflict = function() {
        return n.default.fn.tooltip = It,
        m._jQueryInterface
    }
    ;
    var ze = "bs.popover"
      , qt = n.default.fn.popover
      , Yt = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Gt = o({}, m.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Xt = o({}, m.DefaultType, {
        content: "(string|element|function)"
    })
      , Qt = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , W = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        i = e,
        (o = t).prototype = Object.create(i.prototype),
        o.prototype.constructor = o,
        Se(o, i);
        var o, i, s = t.prototype;
        return s.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        s.addAttachmentClass = function(e) {
            n.default(this.getTipElement()).addClass("bs-popover-" + e)
        }
        ,
        s.getTipElement = function() {
            return this.tip = this.tip || n.default(this.config.template)[0],
            this.tip
        }
        ,
        s.setContent = function() {
            var e, t = n.default(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle()),
            e = this._getContent(),
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show")
        }
        ,
        s._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        s._cleanTipClass = function() {
            var t = n.default(this.getTipElement())
              , e = t.attr("class").match(Yt);
            null !== e && e.length > 0 && t.removeClass(e.join(""))
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var s = n.default(this).data(ze)
                  , o = "object" == typeof e ? e : null;
                if ((s || !/dispose|hide/.test(e)) && (s || (s = new t(this,o),
                n.default(this).data(ze, s)),
                "string" == typeof e)) {
                    if ("undefined" == typeof s[e])
                        throw new TypeError('No method named "' + e + '"');
                    s[e]()
                }
            })
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Gt
            }
        }, {
            key: "NAME",
            get: function() {
                return "popover"
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return ze
            }
        }, {
            key: "Event",
            get: function() {
                return Qt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Xt
            }
        }]),
        t
    }(m);
    n.default.fn.popover = W._jQueryInterface,
    n.default.fn.popover.Constructor = W,
    n.default.fn.popover.noConflict = function() {
        return n.default.fn.popover = qt,
        W._jQueryInterface
    }
    ;
    var h = "scrollspy"
      , re = "bs.scrollspy"
      , tn = n.default.fn[h]
      , u = "active"
      , xt = "position"
      , jt = ".nav, .list-group"
      , vt = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , rn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , A = function() {
        function t(e, t) {
            var s = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            n.default(this._scrollElement).on("scroll.bs.scrollspy", function(e) {
                return s._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var e = t.prototype;
        return e.refresh = function() {
            var e = this
              , o = this._scrollElement === this._scrollElement.window ? "offset" : xt
              , t = "auto" === this._config.method ? o : this._config.method
              , i = t === xt ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var o, r, a = s.getSelectorFromElement(e);
                return (a && (o = document.querySelector(a)),
                o) && (r = o.getBoundingClientRect(),
                r.width || r.height) ? [n.default(o)[t]().top + i, a] : null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        e.dispose = function() {
            n.default.removeData(this._element, re),
            n.default(this._scrollElement).off(".bs.scrollspy"),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        e._getConfig = function(e) {
            if ("string" != typeof (e = o({}, vt, "object" == typeof e && e ? e : {})).target && s.isElement(e.target)) {
                var t = n.default(e.target).attr("id");
                t || (t = s.getUID(h),
                n.default(e.target).attr("id", t)),
                e.target = "#" + t
            }
            return s.typeCheckConfig(h, e, rn),
            e
        }
        ,
        e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        e._process = function() {
            var e, n, t = this._getScrollTop() + this._config.offset, s = this._getScrollHeight(), o = this._config.offset + s - this._getOffsetHeight();
            if (this._scrollHeight !== s && this.refresh(),
            t >= o)
                n = this._targets[this._targets.length - 1],
                this._activeTarget !== n && this._activate(n);
            else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && ("undefined" == typeof this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        ,
        e._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var s = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , t = n.default([].slice.call(document.querySelectorAll(s.join(","))));
            t.hasClass("dropdown-item") ? (t.closest(".dropdown").find(".dropdown-toggle").addClass(u),
            t.addClass(u)) : (t.addClass(u),
            t.parents(jt).prev(".nav-link, .list-group-item").addClass(u),
            t.parents(jt).prev(".nav-item").children(".nav-link").addClass(u)),
            n.default(this._scrollElement).trigger("activate.bs.scrollspy", {
                relatedTarget: e
            })
        }
        ,
        e._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(u)
            }).forEach(function(e) {
                return e.classList.remove(u)
            })
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var s = n.default(this).data(re);
                if (s || (s = new t(this,"object" == typeof e && e),
                n.default(this).data(re, s)),
                "string" == typeof e) {
                    if ("undefined" == typeof s[e])
                        throw new TypeError('No method named "' + e + '"');
                    s[e]()
                }
            })
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "Default",
            get: function() {
                return vt
            }
        }]),
        t
    }();
    n.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var e, t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), s = t.length; s--; )
            e = n.default(t[s]),
            A._jQueryInterface.call(e, e.data())
    }),
    n.default.fn[h] = A._jQueryInterface,
    n.default.fn[h].Constructor = A,
    n.default.fn[h].noConflict = function() {
        return n.default.fn[h] = tn,
        A._jQueryInterface
    }
    ;
    var he = "bs.tab"
      , dn = n.default.fn.tab
      , k = "active"
      , ct = "fade"
      , Re = "show"
      , at = ".active"
      , Xe = "> li > .active"
      , D = function() {
        function e(e) {
            this._element = e
        }
        var t = e.prototype;
        return t.show = function() {
            if (i = this,
            !(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && n.default(this._element).hasClass(k) || n.default(this._element).hasClass("disabled"))) {
                var e, o, i, a, r, c, d, t = n.default(this._element).closest(".nav, .list-group")[0], l = s.getSelectorFromElement(this._element);
                t && (d = "UL" === t.nodeName || "OL" === t.nodeName ? Xe : at,
                e = (e = n.default.makeArray(n.default(t).find(d)))[e.length - 1]),
                a = n.default.Event("hide.bs.tab", {
                    relatedTarget: this._element
                }),
                r = n.default.Event("show.bs.tab", {
                    relatedTarget: e
                }),
                (e && n.default(e).trigger(a),
                n.default(this._element).trigger(r),
                !r.isDefaultPrevented() && !a.isDefaultPrevented()) && (l && (o = document.querySelector(l)),
                this._activate(this._element, t),
                c = function() {
                    var t = n.default.Event("hidden.bs.tab", {
                        relatedTarget: i._element
                    })
                      , s = n.default.Event("shown.bs.tab", {
                        relatedTarget: e
                    });
                    n.default(e).trigger(t),
                    n.default(i._element).trigger(s)
                }
                ,
                o ? this._activate(o, o.parentNode, c) : c())
            }
        }
        ,
        t.dispose = function() {
            n.default.removeData(this._element, he),
            this._element = null
        }
        ,
        t._activate = function(e, t, o) {
            var r, c = this, i = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? n.default(t).children(at) : n.default(t).find(Xe))[0], l = o && i && n.default(i).hasClass(ct), a = function() {
                return c._transitionComplete(e, i, o)
            };
            i && l ? (r = s.getTransitionDurationFromElement(i),
            n.default(i).removeClass(Re).one(s.TRANSITION_END, a).emulateTransitionEnd(r)) : a()
        }
        ,
        t._transitionComplete = function(e, t, o) {
            if (t) {
                n.default(t).removeClass(k);
                var i, a, c, r = n.default(t.parentNode).find("> .dropdown-menu .active")[0];
                r && n.default(r).removeClass(k),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            n.default(e).addClass(k),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            s.reflow(e),
            e.classList.contains(ct) && e.classList.add(Re),
            i = e.parentNode,
            (i && "LI" === i.nodeName && (i = i.parentNode),
            i && n.default(i).hasClass("dropdown-menu")) && (a = n.default(e).closest(".dropdown")[0],
            a && (c = [].slice.call(a.querySelectorAll(".dropdown-toggle")),
            n.default(c).addClass(k)),
            e.setAttribute("aria-expanded", !0)),
            o && o()
        }
        ,
        e._jQueryInterface = function(t) {
            return this.each(function() {
                var o = n.default(this)
                  , s = o.data(he);
                if (s || (s = new e(this),
                o.data(he, s)),
                "string" == typeof t) {
                    if ("undefined" == typeof s[t])
                        throw new TypeError('No method named "' + t + '"');
                    s[t]()
                }
            })
        }
        ,
        r(e, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }]),
        e
    }();
    n.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        D._jQueryInterface.call(n.default(this), "show")
    }),
    n.default.fn.tab = D._jQueryInterface,
    n.default.fn.tab.Constructor = D,
    n.default.fn.tab.noConflict = function() {
        return n.default.fn.tab = dn,
        D._jQueryInterface
    }
    ;
    var ye = "bs.toast"
      , bn = n.default.fn.toast
      , Ye = "hide"
      , F = "show"
      , Ke = "showing"
      , Be = "click.dismiss.bs.toast"
      , He = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , xn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , U = function() {
        function t(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._timeout = null,
            this._setListeners()
        }
        var e = t.prototype;
        return e.show = function() {
            var t, i, e = this, o = n.default.Event("show.bs.toast");
            n.default(this._element).trigger(o),
            !o.isDefaultPrevented() && (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            t = function() {
                e._element.classList.remove(Ke),
                e._element.classList.add(F),
                n.default(e._element).trigger("shown.bs.toast"),
                e._config.autohide && (e._timeout = setTimeout(function() {
                    e.hide()
                }, e._config.delay))
            }
            ,
            this._element.classList.remove(Ye),
            s.reflow(this._element),
            this._element.classList.add(Ke),
            this._config.animation ? (i = s.getTransitionDurationFromElement(this._element),
            n.default(this._element).one(s.TRANSITION_END, t).emulateTransitionEnd(i)) : t())
        }
        ,
        e.hide = function() {
            if (this._element.classList.contains(F)) {
                var e = n.default.Event("hide.bs.toast");
                n.default(this._element).trigger(e),
                e.isDefaultPrevented() || this._close()
            }
        }
        ,
        e.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains(F) && this._element.classList.remove(F),
            n.default(this._element).off(Be),
            n.default.removeData(this._element, ye),
            this._element = null,
            this._config = null
        }
        ,
        e._getConfig = function(e) {
            return e = o({}, He, n.default(this._element).data(), "object" == typeof e && e ? e : {}),
            s.typeCheckConfig("toast", e, this.constructor.DefaultType),
            e
        }
        ,
        e._setListeners = function() {
            var e = this;
            n.default(this._element).on(Be, '[data-dismiss="toast"]', function() {
                return e.hide()
            })
        }
        ,
        e._close = function() {
            var o, e = this, t = function() {
                e._element.classList.add(Ye),
                n.default(e._element).trigger("hidden.bs.toast")
            };
            this._element.classList.remove(F),
            this._config.animation ? (o = s.getTransitionDurationFromElement(this._element),
            n.default(this._element).one(s.TRANSITION_END, t).emulateTransitionEnd(o)) : t()
        }
        ,
        e._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var o = n.default(this)
                  , s = o.data(ye);
                if (s || (s = new t(this,"object" == typeof e && e),
                o.data(ye, s)),
                "string" == typeof e) {
                    if ("undefined" == typeof s[e])
                        throw new TypeError('No method named "' + e + '"');
                    s[e](this)
                }
            })
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.6.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return xn
            }
        }, {
            key: "Default",
            get: function() {
                return He
            }
        }]),
        t
    }();
    n.default.fn.toast = U._jQueryInterface,
    n.default.fn.toast.Constructor = U,
    n.default.fn.toast.noConflict = function() {
        return n.default.fn.toast = bn,
        U._jQueryInterface
    }
    ,
    e.Alert = y,
    e.Button = T,
    e.Carousel = _,
    e.Collapse = I,
    e.Dropdown = d,
    e.Modal = z,
    e.Popover = W,
    e.Scrollspy = A,
    e.Tab = D,
    e.Toast = U,
    e.Tooltip = m,
    e.Util = s,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
let mouseoverTimer, lastTouchTimestamp;
const prefetches = new Set
  , prefetchElement = document.createElement("link")
  , isSupported = prefetchElement.relList && prefetchElement.relList.supports && prefetchElement.relList.supports("prefetch") && window.IntersectionObserver && "isIntersecting"in IntersectionObserverEntry.prototype
  , allowQueryString = "instantAllowQueryString"in document.body.dataset
  , allowExternalLinks = "instantAllowExternalLinks"in document.body.dataset
  , useWhitelist = "instantWhitelist"in document.body.dataset
  , mousedownShortcut = "instantMousedownShortcut"in document.body.dataset
  , DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION = 1111;
let delayOnHover = 65
  , useMousedown = !1
  , useMousedownOnly = !1
  , useViewport = !1;
if ("instantIntensity"in document.body.dataset) {
    const e = document.body.dataset.instantIntensity;
    if (e.substr(0, "mousedown".length) == "mousedown")
        useMousedown = !0,
        e == "mousedown-only" && (useMousedownOnly = !0);
    else if (e.substr(0, "viewport".length) == "viewport")
        navigator.connection && (navigator.connection.saveData || navigator.connection.effectiveType && navigator.connection.effectiveType.includes("2g")) || (e == "viewport" ? document.documentElement.clientWidth * document.documentElement.clientHeight < 45e4 && (useViewport = !0) : e == "viewport-all" && (useViewport = !0));
    else {
        const t = parseInt(e);
        isNaN(t) || (delayOnHover = t)
    }
}
if (isSupported) {
    const e = {
        capture: !0,
        passive: !0
    };
    if (useMousedownOnly || document.addEventListener("touchstart", touchstartListener, e),
    useMousedown ? mousedownShortcut || document.addEventListener("mousedown", mousedownListener, e) : document.addEventListener("mouseover", mouseoverListener, e),
    mousedownShortcut && document.addEventListener("mousedown", mousedownShortcutListener, e),
    useViewport) {
        let e;
        window.requestIdleCallback ? e = e=>{
            requestIdleCallback(e, {
                timeout: 1500
            })
        }
        : e = e=>{
            e()
        }
        ,
        e(()=>{
            const e = new IntersectionObserver(t=>{
                t.forEach(t=>{
                    if (t.isIntersecting) {
                        const n = t.target;
                        e.unobserve(n),
                        preload(n.href)
                    }
                }
                )
            }
            );
            document.querySelectorAll("a").forEach(t=>{
                isPreloadable(t) && e.observe(t)
            }
            )
        }
        )
    }
}
function touchstartListener(e) {
    lastTouchTimestamp = performance.now();
    const t = e.target.closest("a");
    if (!isPreloadable(t))
        return;
    preload(t.href)
}
function mouseoverListener(e) {
    if (performance.now() - lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)
        return;
    const t = e.target.closest("a");
    if (!isPreloadable(t))
        return;
    t.addEventListener("mouseout", mouseoutListener, {
        passive: !0
    }),
    mouseoverTimer = setTimeout(()=>{
        preload(t.href),
        mouseoverTimer = void 0
    }
    , delayOnHover)
}
function mousedownListener(e) {
    const t = e.target.closest("a");
    if (!isPreloadable(t))
        return;
    preload(t.href)
}
function mouseoutListener(e) {
    if (e.relatedTarget && e.target.closest("a") == e.relatedTarget.closest("a"))
        return;
    mouseoverTimer && (clearTimeout(mouseoverTimer),
    mouseoverTimer = void 0)
}
function mousedownShortcutListener(e) {
    if (performance.now() - lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION)
        return;
    const t = e.target.closest("a");
    if (e.which > 1 || e.metaKey || e.ctrlKey)
        return;
    if (!t)
        return;
    t.addEventListener("click", function(e) {
        if (e.detail == 1337)
            return;
        e.preventDefault()
    }, {
        capture: !0,
        passive: !1,
        once: !0
    });
    const n = new MouseEvent("click",{
        view: window,
        bubbles: !0,
        cancelable: !1,
        detail: 1337
    });
    t.dispatchEvent(n)
}
function isPreloadable(e) {
    if (!e || !e.href)
        return;
    if (useWhitelist && !("instant"in e.dataset))
        return;
    if (!allowExternalLinks && e.origin != location.origin && !("instant"in e.dataset))
        return;
    if (!["http:", "https:"].includes(e.protocol))
        return;
    if (e.protocol == "http:" && location.protocol == "https:")
        return;
    if (!allowQueryString && e.search && !("instant"in e.dataset))
        return;
    if (e.hash && e.pathname + e.search == location.pathname + location.search)
        return;
    if ("noInstant"in e.dataset)
        return;
    return !0
}
function preload(e) {
    if (prefetches.has(e))
        return;
    const t = document.createElement("link");
    t.rel = "prefetch",
    t.href = e,
    document.head.appendChild(t),
    prefetches.add(e)
}
