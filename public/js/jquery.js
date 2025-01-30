/*! jQuery v3.7.1 | (c) OpenJS Foundation e outros contribuidores | jquery.org/license */ ! function (e, t) {
    "use strict";
    "object" == typeof módulo && "object" == typeof módulo.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requer uma janela com um documento");
        return t(e)
    } : t(e)
}("undefined" != typeof janela ? window : this, function (ie, e) {
    "use strict";
    var oe = [],
        r = Object.getPrototypeOf,
        ae = oe.slice,
        g = oe.flat ? function (e) {
            return oe.flat.call(e)
        } : function (e) {
            return oe.concat.apply([], e)
        },
        s = oe.push,
        se = oe.indexOf,
        n = {},
        i = n.toString,
        ue = n.hasOwnProperty,
        o = ue.toString,
        a = o.call(Object),
        le = {},
        v = function (e) {
            return "function" == tipode e && "número" != tipode e.nodeType && "function" != tipode e.item
        },
        y = function (e) {
            return null != e && e === e.window
        },
        C = ie.document,
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    função x(e) {
        retornar nulo == e ? e + "" : "objeto" == tipo de e || "função" == tipo de e ? n[i.call(e)] || "objeto" : tipo de e
    }
    var t = "3.7.1",
        l = /HTML$/i,
        ce = função(e, t) {
            retornar novo ce.fn.init(e, t)
        };
    função c(e) {
        var t = !!e && "comprimento"
        em e && e.comprimento, n = x(e);
        retornar!v(e) && !y(e) && ("matriz" === n || 0 === t || "número" == tipo de t && 0 < t && t - 1 em e)
    }
    função fe(e, t) {
        retornar e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ce.fn = ce.prototype = {
        jquery: t,
        constructor: ce,
        length: 0,
        toArray: function () {
            retornar ae.call(this)
        },
        get: function (e) {
            retornar null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = ce.merge(this.constructor(), e);
            retornar t.prevObject = this, t
        },
        each: function (e) {
            retornar ce.each(this, e)
        },
        map: function (n) {
            retornar this.pushStack(ce.map(this, function (e, t) {
                retornar n.call(e, t, e)
            }))
        },
        slice: function () {
            retornar isto.pushStack(ae.apply(isto, argumentos))
        },
        primeiro: função() {
            retornar isto.eq(0)
        },
        último: função() {
            retornar isto.eq(-1)
        },
        par: função() {
            retornar isto.pushStack(ce.grep(isto, função(e, t) {
                retornar(t + 1) % 2
            }))
        },
        ímpar: função() {
            retornar isto.pushStack(ce.grep(isto, função(e, t) {
                retornar t % 2
            }))
        },
        eq: função(e) {
            var t = isto.length,
                n = +e + (e < 0 ? t : 0);
            retornar isto.pushStack(0 <= n && n < t ? [isto[n]] : [])
        },
        fim: função() {
            retornar this.prevObject || this.constructor()
        },
        push: s,
        sort: oe.sort,
        splice: oe.splice
    }, ce.extend = ce.fn.extend = function () {
        var e, t, n, r, i, o, a = argumentos[0] || {},
            s = 1,
            u = argumentos.length,
            l = !1;
        for ("boolean" == tipode a && (l = a, a = argumentos[s] || {}, s++), "objeto" == tipode a || v(a) || (a = {}), s === u && (a = este, s--); s < u; s++)
            if (null != (e = argumentos[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, ce.extend({
        expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) retornar!1;
            retornar!0
        },
        globalEval: função(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        cada: função(e, t) {
            var n, r = 0;
            se(c(e)) {
                para(n = e.length; r < n; r++) se(!1 === t.call(e[r], r, e[r])) quebrar
            }
            senão para(r em e) se(!1 === t.call(e[r], r, e[r])) quebrar;
            retornar e
        },
        texto: função(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            se(!i) enquanto(t = e[r++]) n += ce.texto(t);
            retornar 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        isXMLDoc: function (e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            retornar!l.test(t || n && n.nodeName || "HTML")
        },
        merge: function (e, t) {
            para(var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            retornar e.length = i, e
        },
        grep: function (e, t, n) {
            para(var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            retornar r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                a = [];
            if (c(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: le
    }), "function" == typeof Símbolo && (ce.fn[Símbolo.iterador] = oe[Símbolo.iterador]), ce.each("Booleano Número String Função Matriz Data RegExp Objeto Erro Símbolo".split(" "), function (e, t) {
        n["[objeto " + t + "]"] = t.toLowerCase()
    });
    var pe = oe.pop,
        de = oe.sort,
        he = oe.splice,
        ge = "[\\x20\\t\\r\\n\\f]",
        ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
    ce.contains = function (e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    };
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    função p(e, t) {
        retorno t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ce.escapeSelector = function (e) {
        return (e + "").replace(f, p)
    };
    var ye = C,
        me = s;
    ! function () {
        var e, b, w, o, a, T, r, C, d, i, k = me,
            S = ce.expando,
            E = 0,
            n = 0,
            s = W(),
            c = W(),
            u = W(),
            h = W(),
            l = function (e, t) {
                return e === t && (a = !0), 0
            },
            f = "marcado|selecionado|assíncrono|foco automático|reprodução automática|controles|adiar|desabilitado|oculto|ismap|loop|múltiplo|aberto|somente leitura|obrigatório|com escopo",
            t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
            g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
            v = novo RegExp(ge + "+", "g"),
            y = novo RegExp("^" + ge + "*," + ge + "*"),
            m = novo RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
            x = novo RegExp(ge + "|>"),
            j = novo RegExp(g),
            A = novo RegExp("^" + t + "$"),
            D = {
                ID: novo RegExp("^#(" + t + ")"),
                CLASSE: novo RegExp("^\\.(" + t + ")"),
                TAG: novo RegExp("^(" + t + "|[*])"),
                ATTR: novo RegExp("^" + p),
                PSEUDO: novo RegExp("^" + g),
                CRIANÇA: novo RegExp("^:(somente|primeiro|último|enésimo|enésimo-último)-(filho|do-tipo)(?:\\(" + ge + "*(par|ímpar|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + f + ")$", "i"),
                needsContext: new RegExp("^" + ge + "*[>+~]|:(par|ímpar|eq|gt|lt|enésimo|primeiro|último)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
            },
            N = /^(?:entrada|seleção|área de texto|botão)$/i,
            q = /^h\d$/i,
            L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            H = /[+~]/,
            O = novo RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
            P = função(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                retornar t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            M = function () {
                V()
            },
            R = J(function (e) {
                retornar!0 === e.disabled && fe(e, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
        tentar {
            k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType
        } catch (e) {
            k = {
                apply: function (e, t) {
                    me.apply(e, ae.call(t))
                },
                call: function (e) {
                    me.apply(e, ae.call(argumentos, 1))
                }
            }
        }
        função I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) retornar n;
            if (!r && (V(e), e = e || T, C)) {
                if (11 !== p && (u = L.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) retornar n;
                            if (a.id === i) retornar k.call(n, a), n
                        }
                        senão se(f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) retornar k.call(n, a), n
                    } senão {
                    se(u[2]) retornar k.apply(n, e.getElementsByTagName(t)), n;
                    se((i = u[3]) && e.getElementsByClassName) retornar k.apply(n, e.getElementsByClassName(i)), n
                }
                se(!(h[t + " "] || d && d.teste(t))) {
                    if (c = t, f = e, 1 === p && (x.teste(t) || m.teste(t))) {
                        (f = H.teste(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":escopo") + " " + Q(l[o]);
                        c = l.join(",")
                    }
                    tentar {
                        retornar k.aplicar(n, f.querySelectorAll(c)), n
                    }
                    pegar(e) {
                        h(t, !0)
                    }
                    finalmente {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            retornar re(t.substituir(ve, "$1"), e, n, r)
        }
        função W() {
            var r = [];
            retornar função e(t, n) {
                retornar r.push(t + " ") > b.cacheLength && excluir e[r.shift()], e[t + " "] = n
            }
        }
        função F(e) {
            retornar e[S] = !0, e
        }
        função $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        função B(t) {
            return function (e) {
                return fe(e, "input") && e.type === t
            }
        }
        função _(t) {
            return function (e) {
                return (fe(e, "input") || fe(e, "button")) && e.type === t
            }
        }
        função z(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        função X(a) {
            retornar F(função(o) {
                retornar o = +o, F(função(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        função U(e) {
            retornar e && "undefined" != typeof e.getElementsByTagName && e
        }
        função V(e) {
            var t, n = e ? e.ownerDocument || e : ye;
            retornar n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("descarregar", M), le.getById = $(function (e) {
                retornar r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length
            }), le.disconnectedMatch = $(function (e) {
                retornar i.call(e, "*")
            }), le.scope = $(function () {
                return T.querySelectorAll(":scope")
            }), le.cssHas = $(function () {
                try {
                    return T.querySelector(":has(*,:jqfake)"), !1
                } catch (e) {
                    return !0
                }
            }), le.getById ? (b.filter.ID = function (e) {
                var t = e.replace(O, P);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && C) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(O, P);
                return função(e) {
                    var t = "indefinido" != tipo de e.getAttributeNode && e.getAttributeNode("id");
                    retornar t && t.valor === n
                }
            }, b.find.ID = função(e, t) {
                if ("indefinido" != tipo de t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.valor === e) retornar[o];
                        i = t.getElementsByName(e), r = 0;
                        enquanto(o = i[r++]) if ((n = o.getAttributeNode("id")) && n.valor === e) retornar[o]
                    }
                    retornar[]
                }
            }), b.find.TAG = função(e, t) {
                retornar "indefinido" != tipo de t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }, b.find.CLASS = function (e, t) {
                if ("indefinido" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
            }, d = [], $(function (e) {
                var t;
                r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='desabilitado'></a><select id='" + S + "-\r\\' disabled='desabilitado'><opção selecionado=''></option></select>", e.querySelectorAll("[selecionado]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.ap pendChild(t).setAttribute("nome", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":desabilitado").length && d.push(":habilitado", ":desabilitado"), (t = T.createElement("entrada")).setAttribute("nome", ""), e.appendChild(t), e.querySelectorAll("[nome='']").length || d.push("\\[" + ge + "*nome" + ge + "*=" + ge + "*(?:''|\"\")")
            }), le.cssHas || d.push(":tem"), d = d.length && new RegExp(d.join("|")), l = function (e, t) {
                if (e === t) return a = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
            }), T
        }
        for (e in I.matches = function (e, t) {
                retornar I(e, null, null, t)
            }, I.matchesSelector = function (e, t) {
                se(V(e), C && !h[t + " "] && (!d || !d.test(t))) tentar {
                    var n = i.call(e, t);
                    se(n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) retornar n
                } catch (e) {
                    h(t, !0)
                }
                retornar 0 < I(t, T, null, [e]).length
            }, I.contains = function (e, t) {
                retornar(e.ownerDocument || e) != T && V(e), ce.contains(e, t)
            }, I.attr = function (e, t) {
                (e.ownerDocument || e) != T && V(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== r ? r : e.getAttribute(t)
            }, I.error = function (e) {
                throw new Error("Erro de sintaxe, expressão não reconhecida: " + e)
            }, ce.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) he.call(e, n[r], 1)
                }
                return o = null, e
            }, ce.fn.uniqueSort = function () {
                return this.pushStack(ce.uniqueSort(ae.apply(this)))
            }, (b = ce.expr = {
                cacheLength: 50,
                createPseudo: F,
                match: D,
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
                        dir: "irmão anterior",
                        primeiro: !0
                    },
                    "~": {
                        dir: "irmão anterior"
                    }
                },
                preFiltro: {
                    ATTR: função(e) {
                        retornar e[1] = e[1].substituir(O, P), e[3] = (e[3] || e[4] || e[5] || "").substituir(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.fatia(0, 4)
                    },
                    FILHO: função(e) {
                        retornar e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("véspera n" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(O, P).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return fe(e, t)
                        }
                    },
                    CLASS: function (e) {
                        var t = s[e + " "];
                        return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = I.attr(e, n);
                            return nulo == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    FILHEIRO: função(d, e, t, h, g) {
                        var v = "nth" !== d.slice(0, 3),
                            y = "last" !== d.slice(-4),
                            m = "of-type" === e;
                        retornar 1 === h && 0 === g ? function (e) {
                            retornar!!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                c = m && e.nodeName.toLowerCase(),
                                f = !n && !m,
                                p = !1;
                            if (l) {
                                if (v) {
                                    while (u) {
                                        o = e;
                                        while (o = o[u])
                                            if (m ? fe(o, c) : 1 === o.nodeType) retornar!1;
                                        s = u = "only" === d && !s && "nextSibling"
                                    }
                                    r eturn!0
                                }
                                if (s = [y ? l.firstChild : l.lastChild], y && f) {
                                    p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                                    while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                                        if (1 === o.nodeType && ++p && o === e) {
                                            i[d] = [E, a, p];
                                            break
                                        }
                                } else se(f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) enquanto(o = ++a && o && o[u] || (p = a = 0) || s.pop()) se((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) quebrar;
                                retornar(p -= g) === h || p % h == 0 && 0 <= p / h
                            }
                        }
                    },
                    PSEUDO: função(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("pseudo não suportado: " + e);
                        return a[S] ? a(o) : 1 < a.comprimento ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: F(function (e) {
                        var r = [],
                            i = [],
                            s = ne(e.replace(ve, "$1"));
                        return s[S] ? F(function (e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    tem: F(function (t) {
                        return function (e) {
                            return 0 < I(t, e).length
                        }
                    }),
                    contém: F(function (t) {
                        return t = t.replace(O, P),
                            function (e) {
                                return -1 < (e.textContent || ce.text(e)).indexOf(t)
                            }
                    }),
                    lang: F(function (n) {
                        return A.test(n || "") || I.error("idioma não suportado: " + n), n = n.replace(O, P).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = ie.location && ie.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === r
                    },
                    focus: function (e) {
                        return e === function () {
                            try {
                                return T.activeElement
                            } catch (e) {}
                        }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: z(!1),
                    disabled: z(!0),
                    checked: function (e) {
                        return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return q.test(e.nodeName)
                    },
                    input: function (e) {
                        return N.test(e.nodeName)
                    },
                    button: function (e) {
                        return fe(e, "input") && "button" === e.type || fe(e, "button")
                    },
                    text: function (e) {
                        var t;
                        return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: X(function () {
                        return [0]
                    }),
                    last: X(function (e, t) {
                        return [t - 1]
                    }),
                    eq: X(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: X(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    ímpar: X(função(e, t) {
                        para(var n = 1; n < t; n + = 2) e.push(n);
                        retornar e
                    }),
                    lt: X(função(e, t, n) {
                        var r;
                        para(r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        retornar e
                    }),
                    gt: X(função(e, t, n) {
                        para(var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        retornar e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                rádio: !0,
                caixa de seleção: !0,
                arquivo: !0,
                senha: !0,
                imagem: !0
            }) b.pseudos[e] = B(e);
        para(e em {
            enviar: !0,
            redefinir: !0
        }) b.pseudos[e] = _(e);
        função G() {}
        função Y(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l) retornar t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o em n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
                        valor: n,
                        tipo: r[0].substituir(ve, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    valor: n,
                    tipo: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            retornar t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }
        função Q(e) {
            para(var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].valor;
            retornar r
        }
        função J(a, e, t) {
            var s = e.dir,
                u = e.next,
                l = u || s,
                c = t && "parentNode" === l,
                f = n++;
            retornar e.first ? função(e, t, n) {
                enquanto(e = e[s]) se(1 === e.nodeType || c) retornar a(e, t, n);
                retornar!1
            } : função(e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    while (e = e[s])
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    while (e = e[s])
                        if (1 === e.nodeType || c)
                            if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
                                if ((i[l] = o)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function K(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }
        função Z(e, t, n, r, i) {
            para(var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            retornar a
        }
        função ee(d, h, g, v, y, e) {
            retornar v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(função(e, t, n, r) {
                var i, o, a, s, u = [],
                    l = [],
                    c = t.length,
                    f = e || function (e, t, n) {
                        para(var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
                        retornar n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    p = !d || !e && h ? f : Z(f, u, d, n, r);
                se(g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
                    i = Z(s, l), v(i, [], n, r), o = i.length;
                    enquanto(o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
                }
                se(e) {
                    se(y || d) {
                        se(y) {
                            i = [], o = s.length;
                            enquanto(o--)(a = s[o]) && i.push(p[o] = a);
                            y(nulo, s = [], i, r)
                        }
                        o = s.length;
                        enquanto(o--)(a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                }
                senão s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s)
            })
        }
        função te(e) {
            para(var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(função(e) {
                    retornar e === i
                }, a, !0), l = J(função(e) {
                    retornar - 1 < se.call(i, e)
                }, a, !0), c = [função(e, t, n) {
                    var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    retornar i = null, r
                }]; s < r; s++) if (t = b.relative[e[s].type]) c = [J(K(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
                    }
                    c.push(t)
                }
            return K(c)
        }
        função ne(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = u[e + " "];
            if (!a) {
                t || (t = Y(e)), n = t.length;
                while (n--)(a = te(t[n]))[S] ? i.push(a) : o.push(a);
                (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = E += nulo == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == T || t || i); l !== g && nulo != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == T || (V(o), n = !C);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    k.call(r, o);
                                    break
                                } i && (E = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        enquanto(s = y[a++]) s(c, f, t, n);
                        se(e) {
                            se(0 < u) enquanto(l--) c[l] || f[l] || (f[l] = pe.call(r));
                            f = Z(f)
                        }
                        k.aplicar(r, f), i && !e && 0 < f.comprimento && 1 < u + y.comprimento && ce.uniqueSort(r)
                    }
                    retornar i && (E = h, w = p), c
                }, m ? F(r) : r))).seletor = e
            }
            retornar a
        }
        função re(e, t, n, r) {
            var i, o, a, s, u, l = "função" == tipode e && e,
                c = !r && Y(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) retornar n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = D.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && Q(o))) retornar k.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n
        }
        G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort
    }();
    var d = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            enquanto((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
                if (i && ce(e).is(n)) quebrar;
                r.push(e)
            } retornar r
        },
        h = função(e, t) {
            para(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            retornar n
        },
        b = ce.expr.match.needsContext,
        w = /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    função T(e, n, r) {
        retornar v(n) ? ce.grep(e, function (e, t) {
            retornar!!n.call(e, t, e) !== r
        }) : n.nodeType ? ce.grep(e, function (e) {
            retornar e === n !== r
        }) : "string" != typeof n ? ce.grep(e, function (e) {
            retornar - 1 < se.call(n, e) !== r
        }) : ce.filter(n, e, r)
    }
    ce.filter = function (e, t, n) {
        var r = t[0];
        retornar n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
            retornar 1 === e.nodeType
        }))
    }, ce.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (ce.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
            return 1 < r ? ce.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function (e) {
            return este.pushStack(T(este, e || [], !0))
        },
        é: função(e) {
            retornar!!T(este, "string" == tipo de e && b.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ce.fn.init = função(e, t, n) {
        var r, i;
        se(!e) retornar este;
        se(n = n || k, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) retornar!t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instância de ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) para(r em t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                retornar este
            }
            retornar(i = C.getElementById(r[2])) && (este[0] = i, este.length = 1), este
        }
        retornar e.nodeType ? (este[0] = e, este.length = 1, este) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, este)
    }).prototype = ce.fn, k = ce(C);
    var E = /^(?:pais|anterior(?:Até|Todos))/,
        j = {
            filhos: !0,
            conteúdo: !0,
            próximo: !0,
            anterior: !0
        };
    função A(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        retornar e
    }
    ce.fn.extend({
        tem: função(e) {
            var t = ce(e, este),
                n = t.length;
            retornar this.filter(function () {
                para(var e = 0; e < n; e++) se(ce.contains(this, t[e])) retornar!0
            })
        },
        mais próximo: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != tipode e && ce(e);
            se(!b.test(e)) para(; r < i; r++) para(n = this[r]; n && n !== t; n = n.parentNode) se(n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
                o.push(n);
                quebrar
            }
            retornar this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
        },
        índice: function (e) {
            retornar e ? "string" == tipode e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            retornar this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function (e) {
            retornar this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ce.each({
        parent: function (e) {
            var t = e.parentNode;
            retornar t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            retornar d(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            retornar d(e, "parentNode", n)
        },
        next: function (e) {
            return A(e, "nextSibling")
        },
        prev: function (e) {
            return A(e, "previousSibling")
        },
        nextAll: function (e) {
            return d(e, "nextSibling")
        },
        prevAll: function (e) {
            return d(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function (e) {
            return h((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return h(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
        }
    }, function (r, i) {
        ce.fn[r] = function (e, t) {
            var n = ce.map(this, i, e);
            return "Até" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;

    function N(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ce.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) {
            n[t] = !0
        }), n) : ce.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function () {
                para(a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    enquanto(++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                adicionar: function () {
                    retornar s && (t && !i && (l = s.length - 1, u.push(t)), função n(e) {
                        ce.each(e, function (e, t) {
                            v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
                        })
                    }(argumentos), t && !i && c()), this
                },
                remove: function () {
                    return ce.each(argumentos, function (e, t) {
                        var n;
                        while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < ce.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return a = u = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, ce.extend({
        Deferred: function (e) {
            var o = [
                    ["notificar", "progresso", ce.Callbacks("memória"), ce.Callbacks("memória"), 2],
                    ["resolver", "concluído", ce.Callbacks("uma vez memória"), ce.Callbacks("uma vez memória"), 0, "resolvido"],
                    ["rejeitar", "falhar", ce.Callbacks("uma vez memória"), ce.Callbacks("uma vez memória"), 1, "rejeitado"]
                ],
                i = "pendente",
                a = {
                    estado: função() {
                        retornar i
                    },
                    sempre: função() {
                        retornar s.feito(argumentos).falha(argumentos), este
                    },
                    "capturar": função(e) {
                        retornar a.então(nulo, e)
                    },
                    pipe: função() {
                        var i = argumentos;
                        retornar ce.Deferred(função(r) {
                            ce.cada(o, função(e, t) {
                                var n = v(i[t[4]]) && i[t[4]];
                                s[t[1]](função() {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "Com"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this,
                                    r = arguments,
                                    e = function () {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Então habilita auto-resolução");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function () {
                                        try {
                                            e()
                                        } catch (e) {
                                            ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t))
                            }
                        }
                        retornar ce.Deferred(função(e) {
                            o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q))
                        }).promessa()
                    },
                    promessa: função(e) {
                        retornar nulo != e ? ce.extend(e, a) : a
                    }
                },
                s = {};
            retornar ce.cada(o, função(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "Com"](this === s ? void 0 : this, argumentos), this
                }, s[t[0] + "Com"] = n.fireWith
            }), a.promessa(s), e && e.call(s, s), s
        },
        quando: function (e) {
            var n = argumentos.length,
                t = n,
                r = Array(t),
                i = ae.call(argumentos),
                o = ce.Deferred(),
                a = function (t) {
                    return function (e) {
                        r[t] = this, i[t] = 1 < argumentos.length ? ae.call(argumentos) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pendente" === o.state() || v(i[t] && i[t].then))) return o.then();
            while (t--) L(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var H = /^(Eval|Interno|Intervalo|Referência|Sintaxe|Tipo|URI)Error$/;
    ce.Deferred.exceptionHook = function (e, t) {
        ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, ce.readyException = function (e) {
        ie.setTimeout(function () {
            throw e
        })
    };
    var O = ce.Deferred();

    function P() {
        C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready()
    }
    ce.fn.ready = function (e) {
        return O.then(e)["catch"](function (e) {
            ce.readyException(e)
        }), this
    }, ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
        }
    }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
    var M = função(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = nulo == n;
            if ("objeto" === x(n)) para(s em i = !0, n) M(e, t, s, n[s], !0, o, a);
            senão
            if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = nulo) : (l = t, t = função(e, t, n) {
                    retornar l.call(ce(e), n)
                })), t)) para(; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            retornar i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        R = /^-ms-/,
        I = /-([az])/g;
    função W(e, t) {
        retornar t.toUpperCase()
    }
    função F(e) {
        retornar e.replace(R, "ms-").replace(I, W)
    }
    var $ = função(e) {
        retornar 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    função B() {
        this.expando = ce.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        cache: função(e) {
            var t = e[this.expando];
            retornar t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[F(t)] = n;
            else
                for (r in t) i[F(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var _ = new B,
        z = new B,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        U = /[AZ]/g;

    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "dados-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                z.set(e, t, n)
            } else n = void 0;
        return n
    }
    ce.extend({
        hasData: function (e) {
            return z.hasData(e) || _.hasData(e)
        },
        data: function (e, t, n) {
            return z.access(e, t, n)
        },
        removeData: function (e, t) {
            z.remove(e, t)
        },
        _data: function (e, t, n) {
            return _.access(e, t, n)
        },
        _removeData: function (e, t) {
            _.remove(e, t)
        }
    }), ce.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
                    _.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                z.set(this, n)
            }) : M(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
                this.each(function () {
                    z.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                z.remove(this, e)
            })
        }
    }), ce.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ce.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ce._queueHooks(e, t);
            "em andamento" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("em andamento"), delete o.stop, i.call(e, function () {
                ce.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ce.Callbacks("uma vez memória").add(function () {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }), ce.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = ce.queue(this, t, n);
                ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = ce.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Y = new RegExp("^(?:([+-])=|)(" + G + ")([az%]*)$", "i"),
        Q = ["Topo", "Direita", "Inferior", "Esquerda"],
        J = C.documentElement,
        K = function (e) {
            return ce.contains(e.ownerDocument, e)
        },
        Z = {
            composed: !0
        };
    J.getRootNode && (K = function (e) {
        return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    });
    var ee = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
    };

    function te(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return ce.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, ce.style(e, t, c + l), n = n || []
        }
        retornar n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ne = {};
    função re(e, t) {
        para(var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).estilo && (n = r.estilo.exibir, t ? ("nenhum" === n && (l[c] = _.obter(r, "exibir") || nulo, l[c] || (r.estilo.exibir = "")), "" === r.estilo.exibir && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    ce.fn.extend({
        show: function () {
            return re(this, !0)
        },
        hide: function () {
            return re(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ee(this) ? ce(this).show() : ce(this).hide()
            })
        }
    });
    var xe, be, we = /^(?:checkbox|radio)$/i,
        Te = /<([az][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i;
    xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
    var ke = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function Se(e, t) {
        var n;
        return n = "indefinido" != tipo de e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "indefinido" != tipo de e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
    }

    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], , "globalEval"))
    }
    ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<selecione multiple='multiple'>", "</select>"]);
    var je = /<|&#?\w+;/;

    function Ae(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("objeto" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        senão
        if (je.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            ce.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        }
        senão p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) se(r && -1 < ce.inArray(o, r)) i && i.push(o);
        senão
        if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
            c = 0;
            while (o = a[c++]) Ce.test(o.type || "") && n.push(o)
        }
        return f
    }
    var De = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
        return !0
    }

    function qe() {
        return !1
    }

    function Le(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;
        senão
        if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return ce().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () {
            ce.event.add(this, t, i, r, n)
        })
    }

    function He(e, r, t) {
        t ? (_.set(e, r, !1), ce.event.add(e, r, {
            namespace: !1,
            handler: function (e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)(ce.event.special[r] || {}).delegateType && e.stopPropagation();
                    senão
                    if (n = ae.call(argumentos), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
                }
                senão n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne)
            }
        })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
    }
    ce.evento = {
        global: {},
        adicionar: função(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
            if ($(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    retornar "indefinido" != tipo de ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, argumentos) : void 0
                }), l = (e = (e || "").match(D) || [""]).length;
                while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ce.expr.match.needsContext.te st(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(D) || [""]).length;
                while (l--)
                    if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d])
                    } senão
                for (d em u) ce.event.remove(e, d + t[l], n, r, !0);
                ce.isEmptyObject(u) && _.remove(e, "manipular eventos")
            }
        },
        despacho: função(e) {
            var t, n, r, i, o, a, s = novo Array(argumentos.length),
                u = ce.event.fix(e),
                l = (_.get(this, "eventos") || Object.create(null))[u.type] || [],
                c = ce.event.special[u.type] || {};
            para(s[0] = u, t = 1; t < argumentos.length; t++) s[t] = argumentos[t];
            se(u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = ce.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                retornar c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.alvo;
            if (u && l.nodeType && !("clique" === e.type && 1 <= e.button)) para(; l !== este; l = l.parentNode || este) se(1 === l.nodeType && ("clique" !== e.type || !0 !== l.disabled)) {
                para(o = [], a = {}, n = 0; n < u; n++) vazio 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, este).index(l) : ce.find(i, este, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({
                    elem: l,
                    handlers: o
                })
            }
            retornar l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(ce.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    retornar we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    retornar we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    retornar we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ce.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ce.Event = function (e, t) {
        if (!(this instanceof ce.Event)) return new ce.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0
    }, ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: qe,
        isPropagationStopped: qe,
        isImmediatePropagationStopped: qe,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ce.each({
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
        "char": !0,
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
        targetTouch: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ce.event.addProp), ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function (r, i) {
        function o(e) {
            if (C.documentMode) {
                var t = _.get(this, "handle"),
                    n = ce.event.fix(e);
                n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)
            } else ce.event.simulate(i, e.target, ce.event.fix(e))
        }
        ce.event.special[r] = {
            setup: function () {
                var e;
                if (He(this, r, !0), !C.documentMode) retornar!1;
                (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1)
            },
            trigger: function () {
                retornar He(this, r), !0
            },
            teardown: function () {
                var e;
                if (!C.documentMode) retornar!1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e): (this.removeEventListener(i, o), _.remove(this, i))
            },
            _default: function (e) {
                retornar _.get(e.target, r)
            },
            delegateType: i
        }, ce.event.special[i] = {
            setup: function () {
                var e = este.ownerDocument || este.documento || este,
                    t = C.documentMode ? este : e,
                    n = _.get(t, i);
                n || (C.documentMode ? este.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = C.documentMode ? this : e,
                    n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i))
            }
        }
    }), ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        ce.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                retornar n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), ce.fn.extend({
        on: function (e, t, n, r) {
            return Le(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return Le(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                retornar isto
            }
            retornar!1 !== t && "função" != tipo de t || (n = t, t = void 0), !1 === n && (n = qe), this.each(função() {
                ce.event.remove(this, e, n, t)
            })
        }
    });
    var Oe = /<script|<estilo|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    função Re(e, t) {
        retornar fe(e, "tabela") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
    }
    função Ie(e) {
        retornar e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function We(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (s = _.get(e).events))
                for (i in _.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
            z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a))
        }
    }
    função $e(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = v(d);
        if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(função(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
        });
        if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.comprimento - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : m(u.textContent.replace(Me, ""), u, l))
        }
        retornar n
    }
    função Be(e, t, n) {
        para(var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
        retornar e
    }
    ce.extend({
        htmlPrefilter: function (e) {
            retornar e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = K(e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "entrada" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "entrada" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
            senão Fe(e, c);
            retornar 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[_.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0
                    }
                    n[z.expando] && (n[z.expando] = void 0)
                }
        }
    }), ce.fn.extend({
        detach: function (e) {
            retornar Be(this, e, !0)
        },
        remove: function (e) {
            retornar Be(this, e)
        },
        text: function (e) {
            retornar M(this, function (e) {
                retornar void 0 === e ? ce.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, argumentos.length)
        },
        append: function () {
            return $e(this, argumentos, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return $e(this, argumentos, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return $e(this, argumentos, função(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return $e(this, argumentos, função(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ce.clone(this, e, t)
            })
        },
        html: function (e) {
            return M(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, argumentos.length)
        },
        replaceWith: function () {
            var n = [];
            return $e(this, argumentos, function (e) {
                var t = this.parentNode;
                ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        ce.fn[e] = function (e) {
            for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var _e = new RegExp("^(" + G + ")(?!px)[az%]+$", "i"),
        ze = /^--/,
        Xe = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = ie), t.getComputedStyle(e)
        },
        Ue = function (e, t, n) {
            var r, i, o = {};
            para(i em t) o[i] = e.estilo[i], e.estilo[i] = t[i];
            para(i em r = n.call(e), t) e.estilo[i] = o[i];
            return r
        },
        Ve = new RegExp(Q.join("|"), "i");
    função Ge(e, t, n) {
        var r, i, o, a, s = ze.test(t),
            u = e.style;
        return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }
    função Ye(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (l) {
                u.style.cssText = "posição:absoluto;esquerda:-11111px;largura:60px;margem-topo:1px;preenchimento:0;borda:0", l.style.cssText = "posição:relativo;exibir:bloco;dimensionamento-da-caixa:borda-caixa;overflow:rolagem;margem:automático;borda:1px;preenchimento:1px;largura:60%;topo:1%", J.appendChild(u).appendChild(l);
                var e = ie.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null
            }
        }
        função t(e) {
            retornar Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = C.createElement("div"),
            l = C.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), o
            },
            pixelPosition: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), s
            },
            scrollboxSize: function () {
                return e(), i
            },
            reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = C.createElement("tabela"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "posição:absoluto;esquerda:-11111px;recolhimento-de-borda:separado", t.style.cssText = "tamanho-da-caixa:caixa-de-conteúdo;borda:1px sólido", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedSty le(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a
            }
        }))
    }();
    var Qe = ["Webkit", "Moz", "ms"],
        Je = C.createElement("div").style,
        Ke = {};

    function Ze(e) {
        var t = ce.cssProps[e] || Ke[e];
        return t || (e in Je ? e : Ke[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Qe.length;
            while (n--)
                if ((e = Qe[n] + t) in Je) return e
        }(e) || e)
    }
    var et = /^(none|table(?!-c[ea]).+)/,
        tt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        nt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function rt(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function it(e, t, n, r, i, o) {
        var a = "largura" === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0;
        if (n === (r ? "borda" : "conteúdo")) retornar 0;
        para(; a < 4; a += 2)
        "margem" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("conteúdo" === n && (u -= ce.css(e, "preenchimento" + Q[a], !0, i)), "margem" !== n && (u -= ce.css(e, "borda" + Q[a] + "Largura", !0, i))) : (u += ce.css(e, "preenchimento" + Q[a], !0, i), " preenchimento" !== n ? u += ce.css(e, "borda" + Q[a] + "Largura", !0, i) : s += ce.css(e, "borda" + Q[a] + "Largura", !0, i));
        retornar!r && 0 <= o && (u += Math.max(0, Math.ceil(e["deslocamento" + t[0].toUpperCase() + t.slice(1)] - ous - .5)) || 0), u + l
    }
    função ot(e, t, n) {
        var r = Xe(e),
            i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
            o = i,
            a = Ge(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
            if (!n) retornar a;
            a = "auto"
        }
        return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s em e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    função at(e, t, n, r, i) {
        return novo at.prototype.init(e, t, n, r, i)
    }
    ce.extend({
        cssHooks: {
            opacidade: {
                obter: função(e, t) {
                    se(t) {
                        var n = Ge(e, "opacidade");
                        retornar "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSt arte: !0,
            alturadalinha: !0,
            opacidade: !0,
            ordem: !0,
            órfãos: !0,
            escala: !0,
            viúvas: !0,
            zIndex: !0,
            zoom: !0,
            opacidadedepreenchimento: !0,
            opacidadedeinundação: !0,
            opacidadedeparada: !0,
            limitedeMiterdotraço: !0,
            opacidadedotraço: !0
        },
        cssProps: {},
        estilo: função(e, t, n, r) {
            if (e && 3 !== e.tipodenó && 8 !== e.tipodenó && e.estilo) {
                var i, o, a, s = F(t),
                    u = ze.test(t),
                    l = e.style;
                if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) retornar a && "obter"
                em a && void 0 !== (i = a.obter(e, !1, r)) ? i : l[t];
                "string" === (o = tipo de n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "número"), null != n && n == n && ("número" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "herdar"), a && "conjunto"
                    em um && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = F(t);
            retornar ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get"
            em a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t em nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), ce.each(["altura", "largura"], função(e, u) {
        ce.cssHooks[u] = {
            obter: função(e, t, n) {
                se(t) retornar!et.test(ce.css(e, "exibir")) || e.getClientRects().comprimento && e.getBoundingClientRect().largura ? ot(e, u, n) : Ue(e, tt, função() {
                    retornar ot(e, u, n)
                })
            },
            definir: função(e, t, n) {
                var r, i = Xe(e),
                    o = !le.scrollboxSize() && "absoluto" === i.position,
                    a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
                    s = n ? it(e, u, n, a, i) : 0;
                retornar a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s)
            }
        }
    }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ce.each({
        margem: "",
        padding: "",
        border: "Largura"
    }, função(i, o) {
        ce.cssHooks[i + o] = {
            expandir: função(e) {
                para(var t = 0, n = {}, r = "string" == tipo de e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                retornar n
            }
        }, "margem" !== i && (ce.cssHooks[i + o].set = rt)
    }), ce.fn.extend({
        css: função(e, t) {
            retornar M(este, função(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ce.estilo(e, t, n) : ce.css(e, t)
            }, e, t, 1 < argumentos.length)
        }
    }), ((ce.Tween = at).prototype = {
        constructor: at,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = at.propHooks[this.prop];
            retornar e && e.get ? e.get(this) : at.propHooks._default.get(this)
        },
        executar: function (e) {
            var t, n = at.propHooks[this.prop];
            retornar esta.opções.duração ? esta.pos = t = ce.easing[esta.easing](e, esta.opções.duração * e, 0, 1, esta.opções.duração) : esta.pos = t = e, este.agora = (este.fim - este.início) * t + este.início, esta.opções.etapa && esta.opções.etapa.chamada(este.elem, este.agora, este), n && n.definir ? n.definir(este) : at.propHooks._default.definir(este), este
        }
    }).init.prototype = em.prototype, (em.propHooks = {
        _default: {
            obter: função(e) {
                var t;
                retornar 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null = = e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ce.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ce.fx = at.prototype.init, ce.fx.step = {};
    var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;

    function dt() {
        ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick())
    }

    function ht() {
        return ie.setTimeout(function () {
            st = void 0
        }), st = Date.now()
    }

    function gt(e, t) {
        var n, r = 0,
            i = {
                altura: e
            };
        para(t = t ? 1 : 0; r < 4; r += 2 - t) i["margem" + (n = Q[r])] = i["preenchimento" + n] = e;
        retornar t && (i.opacidade = i.largura = e), i
    }
    função vt(e, t, n) {
        para(var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.comprimento; o < a; o++) se(r = i[o].chamada(n, t, e)) retornar r
    }
    função yt(o, e, t) {
        var n, a, r = 0,
            i = yt.prefilters.comprimento,
            s = ce.Adiado().sempre(função() {
                excluir u.elem
            }),
            u = function () {
                if (a) return !1;
                for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: ce.extend({}, e),
                opts: ce.extend(!0, {
                    specialEasing: {},
                    easing: ce.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: st || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) retornar isto;
                    para(a = !0; t < n; t++) l.tweens[t].run(1);
                    retornar e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), isto
                }
            }),
            c = l.props;
        para(! function (e, t) {
            var n, r, i, o, a;
            para(n em e) se(i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, exclua e[n]), (a = ce.cssHooks[r]) && "expandir"
                em a) para(n em o = a.expandir(o), exclua e[r], o) n em e || (e[n] = o[n], t[n] = i);
            senão t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) se(n = yt.prefilters[r].call(l, o, c, l.opts)) retornar v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        retornar ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    ce.Animation = ce.extend(yt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                retornar te(n.elem, e, Y.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            v(e) ? (t = e, e = ["*"]) : e = e.match(D);
            para(var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "largura"
            em t || "altura"
            em t, p = este, d = {}, h = e.estilo, g = e.tipo de nó && ee(e), v = _.get(e, "fxshow");
            para(r em n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], ft.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continuar;
                    g = !0
                }
                d[r] = v && v[r] || ce.style(e, r)
            } se((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) para(r em f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
                display: l
            }), o && (v.hidden = !g), g && re([e], !0), p.done(function () {
                for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r])
            })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
        }
    }), ce.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ce.extend({}, e) : {
            completo: n || !n && t || v(e) && e,
            duração: e,
            facilitação: n && t || t && !v(t) && t
        };
        retornar ce.fx.off ? r.duration = 0 : "número" != tipo de r.duration && (r.duration em ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
        }, r
    }, ce.fn.extend({
        fadeTo: function (e, t, n, r) {
            retornar este.filter(ee).css("opacidade", 0).show().end().animate({
                opacidade: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = ce.isEmptyObject(t),
                o = ce.speed(e, n, r),
                a = function () {
                    var e = yt(this, ce.extend({}, t), o);
                    (i || _.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = ce.timers,
                    r = _.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                senão para(t em r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || ce.dequeue(this, i)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = _.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = ce.timers,
                    o = n ? n.length : 0;
                para(t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                para(e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                excluir t.finish
            })
        }
    }), ce.each(["toggle", "show", "hide"], function (e, r) {
        var i = ce.fn[r];
        ce.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }), ce.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacidade: "show"
        },
        fadeOut: {
            opacidade: "hide"
        },
        fadeToggle: {
            opacidade: "toggle"
        }
    }, function (e, r) {
        ce.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), ce.timers = [], ce.fx.tick = function () {
        var e, t = 0,
            n = ce.timers;
        for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ce.fx.stop(), st = void 0
    }, ce.fx.timer = function (e) {
        ce.timers.push(e), ce.fx.start()
    }, ce.fx.interval = 13, ce.fx.start = function () {
        ut || (ut = !0, dt())
    }, ce.fx.stop = function () {
        ut = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fn.delay = function (r, e) {
        return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = ie.setTimeout(e, r);
            t.stop = function () {
                ie.clearTimeout(n)
            }
        })
    }, lt = C.createElement("entrada"), ct = C.createElement("selecionar").appendChild(C.createElement("opção")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
    var mt, xt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function (e, t) {
            return M(this, ce.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ce.removeAttr(this, e)
            })
        }
    }), ce.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            tipo: {
                conjunto: função(e, t) {
                    se(!le.radioValue && "radio" === t && fe(e, "entrada")) {
                        var n = e.valor;
                        retornar e.setAttribute("tipo", t), n && (e.valor = n), t
                    }
                }
            }
        },
        removeAttr: função(e, t) {
            var n, r = 0,
                i = t && t.match(D);
            se(i && 1 === e.nodeType) enquanto(n = i[r++]) e.removeAttribute(n)
        }
    }), mt = {
        conjunto: função(e, t, n) {
            retornar!1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), função(e, t) {
            var a = xt[t] || ce.find.attr;
            xt[t] = function (e, t, opFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), le.optSelected || (ce.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ce.propFix[this.toLowerCase()] = this
        }), ce.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a;
                retornar v(t) ? this.each(function (e) {
                    ce(this).addClass(t.call(this, e, Ct(this)))
                }) : (e = kt(t)).length ? this.each(function () {
                    if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                        for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        a = Tt(n), r !== a && this.setAttribute("class", a)
                    }
                }) : this
            },
            removeClass: function (t) {
                var e, n, r, i, o, a;
                retornar v(t) ? this.each(function (e) {
                    ce(this).removeClass(t.call(this, e, Ct(this)))
                }) : arguments.length ? (e = kt(t)).length ? this.each(function () {
                    if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                        for (o = 0; o < e.length; o++) {
                            i = e[o];
                            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                        }
                        a = Tt(n), r !== a && this.setAttribute("class", a)
                    }
                }) : this : this.attr("class", "")
            },
            toggleClass: function (t, n) {
                var e, r, i, o, a = typeof t,
                    s = "string" === a || Array.isArray(t);
                return v(t) ? this.each(function (e) {
                    ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
                }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () {
                    if (s)
                        for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                    else void 0 !== t && "booleano" !== a || ((r = Ct(este)) && _.set(este, "__className__", r), este.setAttribute && this.setAttribute("classe", r || !1 === t ? "" : _.get(este, "__className__") || ""))
                }))
            },
            hasClass: function (e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = este[r++])
                    if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) retornar!0;
                retornar!1
            }
        });
        var St = /\r/g; ce.fn.extend({
            val: function (n) {
                var r, e, i, t = este[0];
                retornar argumentos.length ? (i = v(n), this.each(function (e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) {
                        return null == e ? "" : e + ""
                    })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get"
                em r && void 0 !== (e = r.get(t, "valor")) ? e : "string" == typeof (e = t.valor) ? e.replace(St, "") : null == e ? "" : e: void 0
            }
        }), ce.extend({
            valHooks: {
                opção: {
                    obter: função(e) {
                        var t = ce.find.attr(e, "valor");
                        retornar nulo != t ? t : Tt(ce.text(e))
                    }
                },
                selecionar: {
                    obter: função(e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
                                if (t = ce(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function (e, t) {
                        var n, r, i = e.opções,
                            o = ce.makeArray(t),
                            a = i.length;
                        enquanto(a--)((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
                        retornar n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), ce.each(["rádio", "caixa de seleção"], função() {
            ce.valHooks[this] = {
                definir: função(e, t) {
                    se(Array.isArray(t)) retornar e.checked = -1 < ce.inArray(ce(e).val(), t)
                }
            }, le.checkOn || (ce.valHooks[this].get = função(e) {
                retornar nulo === e.getAttribute("valor") ? "on" : e.value
            })
        });
        var Et = ie.location, jt = {
            guid: Date.now()
        }, At = /\?/; ce.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new ie.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("XML inválido: " + (n ? ce.map(n.childNodes, function (e) {
                return e.textContent
            }).join("\n") : e)), t
        };
        var Dt = /^(?:focoemfoco|focoforadesfoque)$/, Nt = função(e) {
            e.stopPropagation()
        }; ce.extend(ce.event, {
            gatilho: função(e, t, n, r) {
                var i, o, a, s, u, l, c, f, p = [n || C],
                    d = ue.call(e, "tipo") ? e.type : e,
                    h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!r && !c.noBubble && !y(n)) {
                        for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                        a === (n.ownerDocument || C) && p.push(a.default Exibir || a.parentWindow || ie)
                    }
                    i = 0;
                    while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                    retornar e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result
                }
            },
            simulate: function (e, t, n) {
                var r = ce.extend(new ce.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ce.event.trigger(r, null, t)
            }
        }), ce.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    ce.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return ce.event.trigger(e, t, n, !0)
            }
        });
        var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:enviar|botão|imagem|redefinir|arquivo)$/i, Ot = /^(?:entrada|selecionar|área de texto|keygen)/i; função Pt(n, e, r, i) {
            var t;
            if (Array.isArray(e)) ce.each(e, function (e, t) {
                r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("objeto" == tipo de t && null != t ? e : "") + "]", t, r, i)
            });
            senão
            if (r || "objeto" !== x(e)) i(n, e);
            senão
            for (t em e) Pt(n + "[" + t + "]", e[t], r, i)
        }
        ce.param = function (e, t) {
            var n, r = [],
                i = function (e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
                i(this.name, this.value)
            });
            else
                for (n in e) Pt(n, e[n], t, i);
            return r.join("&")
        }, ce.fn.extend({
            serialize: function () {
                return ce.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = ce.prop(this, "elements");
                    return e ? ce.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return este.nome && !ce(este).é(":desabilitado") && Ot.teste(este.nomedonó) && !Ht.teste(e) && (este.verificado || !nós.teste(e))
                }).map(função(e, t) {
                    var n = ce(este).val();
                    retornar nulo == n ? nulo : Array.isArray(n) ? ce.map(n, função(e) {
                        retornar {
                            nome: t.nome,
                            valor: e.substituir(Lt, "\r\n")
                        }
                    }) : {
                        nome: t.nome,
                        valor: n.substituir(Lt, "\r\n")
                    }
                }).obter()
            }
        });
        var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a"); função Ut(o) {
            retornar função(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, r = 0,
                    i = e.toLowerCase().match(D) || [];
                if (v(t))
                    while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }
        função Vt(t, i, o, a) {
            var s = {},
                u = t === _t;
            função l(e) {
                var r;
                retornar s[e] = !0, ce.each(t[e] || [], função(e, t) {
                    var n = t(i, o, a);
                    retornar "string" != tipo de n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
                }), r
            }
            retornar l(i.dataTypes[0]) || !s["*"] && l("*")
        }
        função Gt(e, t) {
            var n, r, i = ce.ajaxSettings.flatOptions || {};
            para(n em t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && ce.extend(!0, e, r), e
        }
        Xt.href = Et.href, ce.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, texto/javascript"
                },
                conteúdo: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                campos de resposta: {
                    xml: "responseXML",
                    texto: "texto de resposta",
                    json: "responseJSON"
                },
                conversores: {
                    "* texto": String,
                    "texto html": !0,
                    "texto json": JSON.parse,
                    "texto xml": ce.parseXML
                },
                opções planas: {
                    url: !0,
                    contexto: !0
                }
            },
            configuração do ajax: função(e, t) {
                retornar t ? Gt(Gt(e, ce.Configurações do ajax), t) : Gt(ce.Configurações do ajax, e)
            },
            filtro do ajax: Ut(Bt),
            transporte do ajax: Ut(_t),
            função do ajax(e, t) {
                "objeto" == tipo de e && (t = e, e = void 0), t = t || {};
                var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t),
                    y = v.context || v,
                    m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
                    x = ce.Deferred(),
                    b = ce.Callbacks("memória única"),
                    w = v.statusCode || {},
                    a = {},
                    s = {},
                    u = "cancelado",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                                }
                                t = n[e.toLowerCase() + " "]
                            }
                            retornar nulo == t ? nulo : t.join(", ")
                        },
                        getAllResponseHeaders: function () {
                            retornar h ? p : nulo
                        },
                        setRequestHeader: function (e, t) {
                            retornar nulo == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            retornar nulo == h && (v.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            retornar this
                        },
                        abort: function (e) {
                            var t = e || u;
                            retornar c && c.abortar(t), l(0, t), isto
                        }
                    };
                se(x.promessa(T), v.url = ((e || v.url || Et.href) + "").substituir($t, Et.protocolo + "//"), v.tipo = t.método || t.tipo || v.método || v.tipo, v.tiposdedados = (v.tipodedados || "*").paraCasoMúltiplo().corresponder(D) || [""], n ull == v.crossDomain) {
                    r = C.createElement("a");
                    tentar {
                        r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        v.crossDomain = !0
                    }
                }
                if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
                for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.dados) && (f += (At.test(f) ? "&" : "?") + v.dados, excluir v.dados), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("Se-Modificado-Desde", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("Se-Nenhuma-Correspondência", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Tipo de conteúdo", v.contentType), T.setRequestHeader("Aceitar", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0,01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
                if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
                    if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                    v.async && 0 < v.timeout && (d = ie.setTimeout(function () {
                        T.abort("timeout")
                    }, v.timeout));
                    try {
                        h = !1, c.send(a, l)
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e)
                    }
                } else l(-1, "Sem transporte");

                function l(e, t, n, r) {
                    var i, o, a, s, u, l = t;
                    h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                        var r, i, o, a, s = e.contents,
                            u = e.dataTypes;
                        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i em s)
                                if (s[i] && s[i].test(r)) {
                                    u.unshift(i);
                                    break
                                } if (u[0] in n) o = u[0];
                        else {
                            for (i em n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) retornar o !== u[0] && u.unshift(o), n[o]
                    }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["texto script"] = function () {}), s = function (e, t, n, r) {
                        var i, o, a, s, u, l = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        o = c.shift();
                        while (o)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                if ("*" === o) o = u;
                                else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                                for (i in l)
                                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e["throws"]) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "Nenhuma conversão de " + u + " para " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.tipo ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function (e, t, n) {
                return ce.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return ce.get(e, void 0, t, "script")
            }
        }), ce.each(["get", "post"], function (e, i) {
            ce[i] = function (e, t, n, r) {
                return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
                    url: e,
                    tipo: i,
                    tipo de dados: r,
                    dados: t,
                    sucesso: n
                }, ce.isPlainObject(e) && e))
            }
        }), ce.ajaxPrefilter(função(e) {
            var t;
            for (t em e.headers) "tipo de conteúdo" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }), ce._evalUrl = função(e, t, n) {
            retornar ce.ajax({
                url: e,
                tipo: "GET",
                tipo de dados: "script",
                cache: !0,
                assíncrono: !1,
                global: !1,
                conversores: {
                    "script de texto": função() {}
                },
                filtro de dados: função(e) {
                    ce.globalEval(e, t, n)
                }
            })
        }, ce.fn.extend({
            wrapAll: função(e) {
                var t;
                retornar isto[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    retornar e
                }).append(this)), this
            },
            wrapInner: function (n) {
                retornar v(n) ? this.each(function (e) {
                    ce(this).wrapInner(n.call(this, e))
                }) : this.each(function () {
                    var e = ce(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function (t) {
                var n = v(t);
                retornar isto.cada(função(e) {
                    ce(isto).wrapAll(n ? t.call(isto, e) : t)
                })
            },
            desembrulhar: função(e) {
                retornar isto.parent(e).não("corpo").cada(função() {
                    ce(isto).replaceWith(isto.childNodes)
                }), isto
            }
        }), ce.expr.pseudos.hidden = função(e) {
            retornar!ce.expr.pseudos.visible(e)
        }, ce.expr.pseudos.visible = função(e) {
            retornar!!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, ce.ajaxSettings.xhr = função() {
            tentar {
                retornar novo ie.XMLHttpRequest
            }
            pegar(e) {}
        };
        var Yt = {
            0: 200,
            1223: 204
        }, Qt = ce.ajaxSettings.xhr(); le.cors = !!Qt && "comCredenciais"
        em Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) {
            var o, a;
            if (le.cors || Qt && !i.crossDomain) return {
                send: function (e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                        for (n em i.xhrFields) r[n] = i.xhrFields[n];
                    for (n em i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                    o = function (e) {
                        return function () {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                        4 === r.readyState && ie.setTimeout(function () {
                            o && a()
                        })
                    }, o = o("abortar");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o) throw e
                    }
                },
                abort: function () {
                    o && o()
                }
            }
        }), ce.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), ce.ajaxSetup({
            aceita: {
                script: "texto/javascript, aplicativo/javascript, aplicativo/ecmascript, aplicativo/x-ecmascript"
            },
            contentes: {
                script: /\b(?:java|ecma)script\b/
            },
            conversores: {
                "script de texto": function (e) {
                    retornar ce.globalEval(e), e
                }
            }
        }), ce.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), ce.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs) return {
                send: function (e, t) {
                    r = ce("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("erro de carregamento", i = function (e) {
                        r.remove(), i = null, e && t("erro" === e.type ? 404 : 200, e.type)
                    }), C.head.appendChild(r[0])
                },
                abort: function () {
                    i && i()
                }
            }
        });
        var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/; ce.ajaxSetup({
            jsonp: "retorno de chamada",
            jsonpRetorno de chamada: função() {
                var e = Kt.pop() || ce.expando + "_" + jt.guid++;
                return this[e] = !0, e
            }
        }), ce.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return o || ce.error(r + " não foi chamado"), o[0]
            }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () {
                o = argumentos
            }, n.always(function () {
                void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0
            }), "script"
        }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
            var r, i, o
        }, ce.fn.load = function (e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, ce.expr.pseudos.animated = function (t) {
            return ce.grep(ce.timers, function (e) {
                return t === e.elem
            }).length
        }, ce.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, l = ce.css(e, "posição"),
                    c = ce(e),
                    f = {};
                "estático" === l && (e.estilo.posição = "relativo"), s = c.deslocamento(), o = ce.css(e, "topo"), u = ce.css(e, "esquerda"), ("absoluto" === l || "fixo" === l) && -1 < (o + u).indexOf("automático") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "usando"
                em t ? t.using.call(e, f) : c.css(f)
            }
        }, ce.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    ce.offset.setOffset(this, t, e)
                });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.par entNode;
                        e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - ce.css(r, "marginTop", !0),
                        left: t.left - i.left - ce.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
                    return e || J
                })
            }
        }), ce.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, i) {
            var o = "pageYOffset" === i;
            ce.fn[t] = function (e) {
                return M(this, function (e, t, n) {
                    var r;
                    if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }), c e.each(["topo", "esquerda"], function (e, n) {
            ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
                if (t) return t = Ge(e, n), _e.teste(t) ? ce(e).posição()[n] + "px" : t
            })
        }), ce.each({
            Altura: "altura",
            Largura: "largura"
        }, função(a, s) {
            ce.each({
                preenchimento: "interno" + a,
                conteúdo: s,
                "": "externo" + a
            }, função(r, o) {
                ce.fn[o] = função(e, t) {
                    var n = argumentos.comprimento && (r || "booleano" != tipode e),
                        i = r || (!0 === e || !0 === t ? "margem" : "borda");
                    retornar M(este, função(e, t, n) {
                        var r;
                        retornar y(e) ? 0 === o.indexOf("externo") ? e["interno" + a] : e.document.documentElement["cliente" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["rolagem" + a], r["rolagem" + a], e.body["deslocamento" + a], r["deslocamento" + a], r["cliente" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
                    }, s, n ? e : void 0, n)
                }
            })
        }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ce.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), ce.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e)
            }
        }), ce.each("blur focus focusin focusout redimensionar rolar clicar dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave alterar selecionar enviar keydown keypress keyup contextmenu".split(" "), function (e, n) {
            ce.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g; ce.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () {
                return e.apply(t || this, r.concat(ae.call(argumentos)))
            }).guid = e.guid = e.guid || ce.guid++, i
        }, ce.holdReady = function (e) {
            e ? ce.readyWait++ : ce.ready(!0)
        }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
            var t = ce.type(e);
            return ("número" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, ce.trim = function (e) {
            return null == e ? "" : (e + "").replace(en, "$1")
        }, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ce
        });
        var tn = ie.jQuery, nn = ie.$;
        return ce.noConflict = function (e) {
            return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
        }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
    }); 0 === t ? "margem" : "borda");
retornar M(isto, função(e, t, n) {
var r;
retornar y(e) ? 0 === o.indexOf("externo") ? e["interno" + a] : e.document.documentElement["cliente" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["rolagem" + a], r["rolagem" + a], e.body["deslocamento" + a], r["deslocamento" + a], r["cliente" + a])) : vazio 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
}, s, n ? e : vazio 0, n)
}
})
}), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
        return this.on(t, e)
    }
}), ce.fn.extend({
    bind: function (e, t, n) {
        return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
        return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }
}), ce.each("desfocar foco focoin focoout redimensionar rolagem clicar dblclique mousedown mouseup mousemover mouseover mouseout mouseenter mouseleave alterar selecionar enviar tecladown keypress keyup menu de contexto".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
});
var pt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(argumentos, 2), (i = function () {
        return e.apply(t || this, r.concat(ae.call(argumentos)))
    }).guid = e.guid = e.guid || ce.guid++, i
}, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0)
}, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("número" === t || "string" === t) && !isNaN(e - parseFloat(e))
}, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1")
}, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce
});
var tn = ie.jQuery,
    nn = ie.$;
return ce.noConflict = function (e) {
return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
}, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
0 === t ? "margem" : "borda");
retornar M(isto, função(e, t, n) {
var r;
retornar y(e) ? 0 === o.indexOf("externo") ? e["interno" + a] : e.document.documentElement["cliente" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["rolagem" + a], r["rolagem" + a], e.body["deslocamento" + a], r["deslocamento" + a], r["cliente" + a])) : vazio 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
}, s, n ? e : vazio 0, n)
}
})
}), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
        return this.on(t, e)
    }
}), ce.fn.extend({
    bind: function (e, t, n) {
        return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
        return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }
}), ce.each("desfocar foco focoin focoout redimensionar rolagem clicar dblclique mousedown mouseup mousemover mouseover mouseout mouseenter mouseleave alterar selecionar enviar tecladown keypress keyup menu de contexto".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
});
var pt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(argumentos, 2), (i = function () {
        return e.apply(t || this, r.concat(ae.call(argumentos)))
    }).guid = e.guid = e.guid || ce.guid++, i
}, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0)
}, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("número" === t || "string" === t) && !isNaN(e - parseFloat(e))
}, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1")
}, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce
});
var tn = ie.jQuery,
    nn = ie.$;
return ce.noConflict = function (e) {
return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
}, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
fn[t] = function (e) {
return this.on(t, e)
}
}), ce.fn.extend({
    bind: function (e, t, n) {
        return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
        return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }
}), ce.each("blur focus focusin focusout redimensionar scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave alterar selecionar enviar tecla para baixo tecla para cima menu de contexto".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
});
var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () {
        return e.apply(t || this, r.concat(ae.call(argumentos)))
    }).guid = e.guid = e.guid || ce.guid++, i
}, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0)
}, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("número" === t || "string" === t) && !isNaN(e - parseFloat(e))
}, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1")
}, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce
});
var tn = ie.jQuery,
    nn = ie.$;
return ce.noConflict = function (e) {
return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
}, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
fn[t] = function (e) {
return this.on(t, e)
}
}), ce.fn.extend({
    bind: function (e, t, n) {
        return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
        return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }
}), ce.each("blur focus focusin focusout redimensionar scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave alterar selecionar enviar tecla para baixo tecla para cima menu de contexto".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
});
var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () {
        return e.apply(t || this, r.concat(ae.call(argumentos)))
    }).guid = e.guid = e.guid || ce.guid++, i
}, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0)
}, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("número" === t || "string" === t) && !isNaN(e - parseFloat(e))
}, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1")
}, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce
});
var tn = ie.jQuery,
    nn = ie.$;
return ce.noConflict = function (e) {
return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
}, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
isNumeric = function (e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
}, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1")
}, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce
});
var tn = ie.jQuery,
    nn = ie.$;
return ce.noConflict = function (e) {
return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
}, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
isNumeric = function (e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
}, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1")
}, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce
});
var tn = ie.jQuery,
    nn = ie.$;
return ce.noConflict = function (e) {
return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
}, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
