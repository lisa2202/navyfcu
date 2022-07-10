function __MVC_ApplyValidator_RequiredIf() {}
var foolproof;
(function(n, t) {
    function pi(n) {
        var t = n.length
          , r = i.type(n);
        return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }
    function ne(n) {
        var t = ai[n] = {};
        return i.each(n.match(s) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function vu(n, r, u, f) {
        if (i.acceptData(n)) {
            var h, s, c = i.expando, l = n.nodeType, o = l ? i.cache : n, e = l ? n[c] : n[c] && c;
            if (e && o[e] && (f || o[e].data) || u !== t || "string" != typeof r)
                return e || (e = l ? n[c] = tt.pop() || i.guid++ : c),
                o[e] || (o[e] = l ? {} : {
                    toJSON: i.noop
                }),
                ("object" == typeof r || "function" == typeof r) && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)),
                s = o[e],
                f || (s.data || (s.data = {}),
                s = s.data),
                u !== t && (s[i.camelCase(r)] = u),
                "string" == typeof r ? (h = s[r],
                null == h && (h = s[i.camelCase(r)])) : h = s,
                h
        }
    }
    function au(n, t, r) {
        if (i.acceptData(n)) {
            var e, o, s = n.nodeType, u = s ? i.cache : n, f = s ? n[i.expando] : i.expando;
            if (u[f]) {
                if (t && (e = r ? u[f] : u[f].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t),
                    t = t in e ? [t] : t.split(" ")),
                    o = t.length; o--; )
                        delete e[t[o]];
                    if (r ? !ci(e) : !i.isEmptyObject(e))
                        return
                }
                (r || (delete u[f].data,
                ci(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
            }
        }
    }
    function lu(n, r, u) {
        if (u === t && 1 === n.nodeType) {
            var f = "data-" + r.replace(cu, "-$1").toLowerCase();
            if (u = n.getAttribute(f),
            "string" == typeof u) {
                try {
                    u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null : +u + "" === u ? +u : ou.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else
                u = t
        }
        return u
    }
    function ci(n) {
        var t;
        for (t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function ot() {
        return !0
    }
    function nt() {
        return !1
    }
    function yu() {
        try {
            return r.activeElement
        } catch (n) {}
    }
    function uf(n, t) {
        do
            n = n[t];
        while (n && 1 !== n.nodeType);return n
    }
    function fi(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            });
        if ("string" == typeof t) {
            if (ee.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }
    function ur(n) {
        var i = of.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function ir(n, t) {
        return i.nodeName(n, "table") && i.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function rr(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type,
        n
    }
    function fr(n) {
        var t = ko.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function dt(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function nr(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var e, f, o, s = i._data(n), r = i._data(t, s), u = s.events;
            if (u) {
                delete r.handle,
                r.events = {};
                for (e in u)
                    for (f = 0,
                    o = u[e].length; o > f; f++)
                        i.event.add(t, e, u[e][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function po(n, t) {
        var r, f, u;
        if (1 === t.nodeType) {
            if (r = t.nodeName.toLowerCase(),
            !i.support.noCloneEvent && t[i.expando]) {
                u = i._data(t);
                for (f in u.events)
                    i.removeEvent(t, f, u.handle);
                t.removeAttribute(i.expando)
            }
            "script" === r && t.text !== n.text ? (rr(t).text = n.text,
            fr(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML),
            i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && ni.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
            t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue)
        }
    }
    function u(n, r) {
        var s, e, h = 0, f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
        if (!f)
            for (f = [],
            s = n.childNodes || n; null != (e = s[h]); h++)
                !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
        return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
    }
    function wo(n) {
        ni.test(n.type) && (n.defaultChecked = n.checked)
    }
    function er(n, t) {
        if (t in n)
            return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = hr.length; i--; )
            if (t = hr[i] + r,
            t in n)
                return t;
        return u
    }
    function rt(n, t) {
        return n = t || n,
        "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }
    function or(n, t) {
        for (var e, r, o, f = [], u = 0, s = n.length; s > u; u++)
            r = n[u],
            r.style && (f[u] = i._data(r, "olddisplay"),
            e = r.style.display,
            t ? (f[u] || "none" !== e || (r.style.display = ""),
            "" === r.style.display && rt(r) && (f[u] = i._data(r, "olddisplay", gi(r.nodeName)))) : f[u] || (o = rt(r),
            (e && "none" !== e || !o) && i._data(r, "olddisplay", o ? e : i.css(r, "display"))));
        for (u = 0; s > u; u++)
            r = n[u],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? f[u] || "" : "none"));
        return n
    }
    function wr(n, t, i) {
        var r = no.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function kr(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
            "margin" === r && (o += i.css(n, r + p[e], !0, f)),
            u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)),
            "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f),
            "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
        return o
    }
    function yr(n, t, r) {
        var o = !0
          , u = "width" === t ? n.offsetWidth : n.offsetHeight
          , f = l(n)
          , e = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
        if (0 >= u || null == u) {
            if (u = w(n, t, f),
            (0 > u || null == u) && (u = n.style[t]),
            et.test(u))
                return u;
            o = e && (i.support.boxSizingReliable || u === n.style[t]),
            u = parseFloat(u) || 0
        }
        return u + kr(n, t, r || (e ? "border" : "content"), o, f) + "px"
    }
    function gi(n) {
        var u = r
          , t = cr[n];
        return t || (t = di(n, u),
        "none" !== t && t || (ft = (ft || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement),
        u = (ft[0].contentWindow || ft[0].contentDocument).document,
        u.write("<!doctype html><html><body>"),
        u.close(),
        t = di(n, u),
        ft.detach()),
        cr[n] = t),
        t
    }
    function di(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body)
          , u = i.css(r[0], "display");
        return r.remove(),
        u
    }
    function hi(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || oo.test(n) ? u(n, i) : hi(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== i.type(t))
            u(n, t);
        else
            for (f in t)
                hi(n + "[" + f + "]", t[f], r, u)
    }
    function gu(n) {
        return function(t, r) {
            "string" != typeof t && (r = t,
            t = "*");
            var u, e = 0, f = t.toLowerCase().match(s) || [];
            if (i.isFunction(r))
                while (u = f[e++])
                    "+" === u[0] ? (u = u.slice(1) || "*",
                    (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function du(n, r, u, f) {
        function e(h) {
            var c;
            return o[h] = !0,
            i.each(n[h] || [], function(n, i) {
                var h = i(r, u, f);
                return "string" != typeof h || s || o[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h),
                e(h),
                !1)
            }),
            c
        }
        var o = {}
          , s = n === gt;
        return e(r.dataTypes[0]) || !o["*"] && e("*")
    }
    function ii(n, r) {
        var f, u, e = i.ajaxSettings.flatOptions || {};
        for (u in r)
            r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f),
        n
    }
    function pf(n, i, r) {
        for (var s, o, f, e, h = n.contents, u = n.dataTypes; "*" === u[0]; )
            u.shift(),
            o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
        if (o)
            for (e in h)
                if (h[e] && h[e].test(o)) {
                    u.unshift(e);
                    break
                }
        if (u[0]in r)
            f = u[0];
        else {
            for (e in r) {
                if (!u[0] || n.converters[e + " " + u[0]]) {
                    f = e;
                    break
                }
                s || (s = e)
            }
            f = f || s
        }
        return f ? (f !== u[0] && u.unshift(f),
        r[f]) : t
    }
    function wf(n, t, i, r) {
        var c, u, f, s, o, e = {}, h = n.dataTypes.slice();
        if (h[1])
            for (f in n.converters)
                e[f.toLowerCase()] = n.converters[f];
        for (u = h.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !o && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            o = u,
            u = h.shift())
                if ("*" === u)
                    u = o;
                else if ("*" !== o && o !== u) {
                    if (f = e[o + " " + u] || e["* " + u],
                    !f)
                        for (c in e)
                            if (s = c.split(" "),
                            s[1] === u && (f = e[o + " " + s[0]] || e["* " + s[0]])) {
                                f === !0 ? f = e[c] : e[c] !== !0 && (u = s[0],
                                h.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + o + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function nu() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function kf() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function fu() {
        return setTimeout(function() {
            k = t
        }),
        k = i.now()
    }
    function ru(n, t, i) {
        for (var f, u = (ut[t] || []).concat(ut["*"]), r = 0, e = u.length; e > r; r++)
            if (f = u[r].call(i, t, n))
                return f
    }
    function nf(n, t, r) {
        var h, s, o = 0, l = yt.length, f = i.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (s)
                return !1;
            for (var o = k || fu(), i = Math.max(0, u.startTime + u.duration - o), h = i / u.duration || 0, t = 1 - h, r = 0, e = u.tweens.length; e > r; r++)
                u.tweens[r].run(t);
            return f.notifyWith(n, [u, t, i]),
            1 > t && e ? i : (f.resolveWith(n, [u]),
            !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {}
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: k || fu(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0
                  , r = t ? u.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; r > i; i++)
                    u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }), e = u.props;
        for (lf(e, u.opts.specialEasing); l > o; o++)
            if (h = yt[o].call(u, n, e, u.opts))
                return h;
        return i.map(e, ru, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function lf(n, t) {
        var r, f, o, u, e;
        for (r in n)
            if (f = i.camelCase(r),
            o = t[f],
            u = n[r],
            i.isArray(u) && (o = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            e = i.cssHooks[f],
            e && "expand"in e) {
                u = e.expand(u),
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = o)
            } else
                t[f] = o
    }
    function vf(n, t, r) {
        var u, a, v, l, o, y, s = this, c = {}, e = n.style, h = n.nodeType && rt(n), f = i._data(n, "fxshow");
        r.queue || (o = i._queueHooks(n, "fx"),
        null == o.unqueued && (o.unqueued = 0,
        y = o.empty.fire,
        o.empty.fire = function() {
            o.unqueued || y()
        }
        ),
        o.unqueued++,
        s.always(function() {
            s.always(function() {
                o.unqueued--,
                i.queue(n, "fx").length || o.empty.fire()
            })
        })),
        1 === n.nodeType && ("height"in t || "width"in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY],
        "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== gi(n.nodeName) ? e.zoom = 1 : e.display = "inline-block")),
        r.overflow && (e.overflow = "hidden",
        i.support.shrinkWrapBlocks || s.always(function() {
            e.overflow = r.overflow[0],
            e.overflowX = r.overflow[1],
            e.overflowY = r.overflow[2]
        }));
        for (u in t)
            if (a = t[u],
            af.exec(a)) {
                if (delete t[u],
                v = v || "toggle" === a,
                a === (h ? "hide" : "show"))
                    continue;
                c[u] = f && f[u] || i.style(n, u)
            }
        if (!i.isEmptyObject(c)) {
            f ? "hidden"in f && (h = f.hidden) : f = i._data(n, "fxshow", {}),
            v && (f.hidden = !h),
            h ? i(n).show() : s.done(function() {
                i(n).hide()
            }),
            s.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in c)
                    i.style(n, t, c[t])
            });
            for (u in c)
                l = ru(h ? f[u] : 0, u, s),
                u in f || (f[u] = l.start,
                h && (l.end = l.start,
                l.start = "width" === u || "height" === u ? 1 : 0))
        }
    }
    function f(n, t, i, r, u) {
        return new f.prototype.init(n,t,i,r,u)
    }
    function st(n, t) {
        var u, i = {
            height: n
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            u = p[r],
            i["margin" + u] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function ef(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var lt, dr, o = typeof t, ve = n.location, r = n.document, hu = r.documentElement, ye = n.jQuery, ae = n.$, at = {}, tt = [], wi = "1.10.2", br = tt.concat, ri = tt.push, a = tt.slice, sf = tt.indexOf, ce = at.toString, it = at.hasOwnProperty, bt = wi.trim, i = function(n, t) {
        return new i.fn.init(n,t,dr)
    }, pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, s = /\S+/g, le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ff = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, de = /^[\],:{}\s]*$/, be = /(?:^|:|,)(?:\s*\[)+/g, pe = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, we = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, re = /^-ms-/, ue = /-([\da-z])/gi, ie = function(n, t) {
        return t.toUpperCase()
    }, c = function(n) {
        (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (su(),
        i.ready())
    }, su = function() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", c, !1),
        n.removeEventListener("load", c, !1)) : (r.detachEvent("onreadystatechange", c),
        n.detachEvent("onload", c))
    }, ai, ou, cu, oi, ht, d, g, gr, wt;
    i.fn = i.prototype = {
        jquery: wi,
        constructor: i,
        init: function(n, u, f) {
            var e, o;
            if (!n)
                return this;
            if ("string" == typeof n) {
                if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : ke.exec(n),
                !e || !e[1] && u)
                    return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
                if (e[1]) {
                    if (u = u instanceof i ? u[0] : u,
                    i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)),
                    ff.test(e[1]) && i.isPlainObject(u))
                        for (e in u)
                            i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                    return this
                }
                if (o = r.getElementById(e[2]),
                o && o.parentNode) {
                    if (o.id !== e[2])
                        return f.find(n);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = r,
                this.selector = n,
                this
            }
            return n.nodeType ? (this.context = this[0] = n,
            this.length = 1,
            this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector,
            this.context = n.context),
            i.makeArray(n, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise().done(n),
            this
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ri,
        sort: [].sort,
        splice: [].splice
    },
    i.fn.init.prototype = i.fn,
    i.extend = i.fn.extend = function() {
        var u, s, r, e, h, c, n = arguments[0] || {}, f = 1, l = arguments.length, o = !1;
        for ("boolean" == typeof n && (o = n,
        n = arguments[1] || {},
        f = 2),
        "object" == typeof n || i.isFunction(n) || (n = {}),
        l === f && (n = this,
        --f); l > f; f++)
            if (null != (h = arguments[f]))
                for (e in h)
                    u = n[e],
                    r = h[e],
                    n !== r && (o && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1,
                    c = u && i.isArray(u) ? u : []) : c = u && i.isPlainObject(u) ? u : {},
                    n[e] = i.extend(o, c, r)) : r !== t && (n[e] = r));
        return n
    }
    ,
    i.extend({
        expando: "jQuery" + (wi + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return n.$ === i && (n.$ = ae),
            t && n.jQuery === i && (n.jQuery = ye),
            i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body)
                    return setTimeout(i.ready);
                i.isReady = !0,
                n !== !0 && --i.readyWait > 0 || (lt.resolveWith(r, [i]),
                i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        }
        ,
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? at[ce.call(n)] || "object" : typeof n
        },
        isPlainObject: function(n) {
            var r;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !it.call(n, "constructor") && !it.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            if (i.support.ownLast)
                for (r in n)
                    return it.call(n, r);
            for (r in n)
                ;
            return r === t || it.call(n, r)
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n)
                return !1;
            return !0
        },
        error: function(n) {
            throw Error(n);
        },
        parseHTML: function(n, t, u) {
            if (!n || "string" != typeof n)
                return null;
            "boolean" == typeof t && (u = t,
            t = !1),
            t = t || r;
            var f = ff.exec(n)
              , e = !u && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e),
            e && i(e).remove(),
            i.merge([], f.childNodes))
        },
        parseJSON: function(r) {
            return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null === r ? r : "string" == typeof r && (r = i.trim(r),
            r && de.test(r.replace(pe, "@").replace(we, "]").replace(be, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r),
            t)
        },
        parseXML: function(r) {
            var u, f;
            if (!r || "string" != typeof r)
                return null;
            try {
                n.DOMParser ? (f = new DOMParser,
                u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"),
                u.async = "false",
                u.loadXML(r))
            } catch (e) {
                u = t
            }
            return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r),
            u
        },
        noop: function() {},
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(re, "ms-").replace(ue, ie)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0, e = n.length, f = pi(n);
            if (i) {
                if (f) {
                    for (; e > r; r++)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i),
                        u === !1)
                            break
            } else if (f) {
                for (; e > r; r++)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]),
                    u === !1)
                        break;
            return n
        },
        trim: bt && !bt.call("﻿ ") ? function(n) {
            return null == n ? "" : bt.call(n)
        }
        : function(n) {
            return null == n ? "" : (n + "").replace(le, "")
        }
        ,
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ri.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (sf)
                    return sf.call(t, n, i);
                for (r = t.length,
                i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, i) {
            var f = i.length
              , u = n.length
              , r = 0;
            if ("number" == typeof f)
                for (; f > r; r++)
                    n[u++] = i[r];
            else
                while (i[r] !== t)
                    n[u++] = i[r++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            var f, u = [], r = 0, e = n.length;
            for (i = !!i; e > r; r++)
                f = !!t(n[r], r),
                i !== f && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var u, r = 0, e = n.length, o = pi(n), f = [];
            if (o)
                for (; e > r; r++)
                    u = t(n[r], r, i),
                    null != u && (f[f.length] = u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    null != u && (f[f.length] = u);
            return br.apply([], f)
        },
        guid: 1,
        proxy: function(n, r) {
            var e, u, f;
            return "string" == typeof r && (f = n[r],
            r = n,
            n = f),
            i.isFunction(n) ? (e = a.call(arguments, 2),
            u = function() {
                return n.apply(r || this, e.concat(a.call(arguments)))
            }
            ,
            u.guid = n.guid = n.guid || i.guid++,
            u) : t
        },
        access: function(n, r, u, f, e, o, s) {
            var h = 0
              , l = n.length
              , c = null == u;
            if ("object" === i.type(u)) {
                e = !0;
                for (h in u)
                    i.access(n, r, h, u[h], !0, o, s)
            } else if (f !== t && (e = !0,
            i.isFunction(f) || (s = !0),
            c && (s ? (r.call(n, f),
            r = null) : (c = r,
            r = function(n, t, r) {
                return c.call(i(n), r)
            }
            )),
            r))
                for (; l > h; h++)
                    r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
        },
        now: function() {
            return +new Date
        },
        swap: function(n, t, i, r) {
            var e, u, f = {};
            for (u in t)
                f[u] = n.style[u],
                n.style[u] = t[u];
            e = i.apply(n, r || []);
            for (u in t)
                n.style[u] = f[u];
            return e
        }
    }),
    i.ready.promise = function(t) {
        if (!lt)
            if (lt = i.Deferred(),
            "complete" === r.readyState)
                setTimeout(i.ready);
            else if (r.addEventListener)
                r.addEventListener("DOMContentLoaded", c, !1),
                n.addEventListener("load", c, !1);
            else {
                r.attachEvent("onreadystatechange", c),
                n.attachEvent("onload", c);
                var u = !1;
                try {
                    u = null == n.frameElement && r.documentElement
                } catch (e) {}
                u && u.doScroll && function f() {
                    if (!i.isReady) {
                        try {
                            u.doScroll("left")
                        } catch (n) {
                            return setTimeout(f, 50)
                        }
                        su(),
                        i.ready()
                    }
                }()
            }
        return lt.promise(t)
    }
    ,
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        at["[object " + t + "]"] = t.toLowerCase()
    }),
    dr = i(r),
    function(n, t) {
        function u(n, t, i, r) {
            var y, u, f, a, b, l, d, c, g, w;
            if ((t ? t.ownerDocument || t : p) !== s && nt(t),
            t = t || s,
            i = i || [],
            !n || "string" != typeof n)
                return i;
            if (1 !== (a = t.nodeType) && 9 !== a)
                return [];
            if (v && !r) {
                if (y = pr.exec(n))
                    if (f = y[1]) {
                        if (9 === a) {
                            if (u = t.getElementById(f),
                            !u || !u.parentNode)
                                return i;
                            if (u.id === f)
                                return i.push(u),
                                i
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ot(t, u) && u.id === f)
                            return i.push(u),
                            i
                    } else {
                        if (y[2])
                            return k.apply(i, t.getElementsByTagName(n)),
                            i;
                        if ((f = y[3]) && e.getElementsByClassName && t.getElementsByClassName)
                            return k.apply(i, t.getElementsByClassName(f)),
                            i
                    }
                if (e.qsa && (!h || !h.test(n))) {
                    if (c = d = o,
                    g = t,
                    w = 9 === a && n,
                    1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = lt(n),
                        (d = t.getAttribute("id")) ? c = d.replace(ar, "\\$&") : t.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        b = l.length; b--; )
                            l[b] = c + at(l[b]);
                        g = kt.test(n) && t.parentNode || t,
                        w = l.join(",")
                    }
                    if (w)
                        try {
                            return k.apply(i, g.querySelectorAll(w)),
                            i
                        } catch (tt) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return di(n.replace(yt, "$1"), t, i, r)
        }
        function oi() {
            function n(i, u) {
                return t.push(i += " ") > r.cacheLength && delete n[t.shift()],
                n[i] = u
            }
            var t = [];
            return n
        }
        function c(n) {
            return n[o] = !0,
            n
        }
        function l(n) {
            var t = s.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function si(n, t) {
            for (var u = n.split("|"), i = n.length; i--; )
                r.attrHandle[u[i]] = t
        }
        function li(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || yi) - (~n.sourceIndex || yi);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function ir(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }
        function nr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function rt(n) {
            return c(function(t) {
                return t = +t,
                c(function(i, r) {
                    for (var u, e = n([], i.length, t), f = e.length; f--; )
                        i[u = e[f]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function hi() {}
        function lt(n, t) {
            var e, f, c, o, i, h, s, l = pi[n + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (i = n,
            h = [],
            s = r.preFilter; i; ) {
                (!e || (f = ur.exec(i))) && (f && (i = i.slice(f[0].length) || i),
                h.push(c = [])),
                e = !1,
                (f = fr.exec(i)) && (e = f.shift(),
                c.push({
                    value: e,
                    type: f[0].replace(yt, " ")
                }),
                i = i.slice(e.length));
                for (o in r.filter)
                    !(f = ht[o].exec(i)) || s[o] && !(f = s[o](f)) || (e = f.shift(),
                    c.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    i = i.slice(e.length));
                if (!e)
                    break
            }
            return t ? i.length : i ? u.error(n) : pi(n, h).slice(0)
        }
        function at(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++)
                i += n[t].value;
            return i
        }
        function ti(n, t, i) {
            var r = t.dir
              , u = i && "parentNode" === r
              , f = rr++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u)
                        return n(t, i, f)
            }
            : function(t, i, e) {
                var c, s, h, l = y + " " + f;
                if (e) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, e))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u)
                            if (h = t[o] || (t[o] = {}),
                            (s = h[r]) && s[0] === l) {
                                if ((c = s[1]) === !0 || c === wt)
                                    return c === !0
                            } else if (s = h[r] = [l],
                            s[1] = n(t, i, e) || wt,
                            s[1] === !0)
                                return !0
            }
        }
        function dt(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function vt(n, t, i, r, u) {
            for (var e, o = [], f = 0, h = n.length, s = null != t; h > f; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e),
                s && t.push(f));
            return o
        }
        function ni(n, t, i, r, u, f) {
            return r && !r[o] && (r = ni(r)),
            u && !u[o] && (u = ni(u, f)),
            c(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, b = f || gi(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? b : vt(b, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = vt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? g.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = vt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : k.apply(e, h)
            })
        }
        function fi(n) {
            for (var h, u, i, e = n.length, s = r.relative[n[0].type], c = s || r.relative[" "], t = s ? 1 : 0, l = ti(function(n) {
                return n === h
            }, c, !0), a = ti(function(n) {
                return g.call(h, n) > -1
            }, c, !0), f = [function(n, t, i) {
                return !s && (i || t !== ct) || ((h = t).nodeType ? l(n, t, i) : a(n, t, i))
            }
            ]; e > t; t++)
                if (u = r.relative[n[t].type])
                    f = [ti(dt(f), u)];
                else {
                    if (u = r.filter[n[t].type].apply(null, n[t].matches),
                    u[o]) {
                        for (i = ++t; e > i; i++)
                            if (r.relative[n[i].type])
                                break;
                        return ni(t > 1 && dt(f), t > 1 && at(n.slice(0, t - 1).concat({
                            value: " " === n[t - 2].type ? "*" : ""
                        })).replace(yt, "$1"), u, i > t && fi(n.slice(t, i)), e > i && fi(n = n.slice(i)), e > i && at(n))
                    }
                    f.push(u)
                }
            return dt(f)
        }
        function tr(n, t) {
            var o = 0
              , i = t.length > 0
              , e = n.length > 0
              , f = function(f, h, c, l, a) {
                var w, tt, d, p = [], b = 0, v = "0", nt = f && [], g = null != a, rt = ct, ut = f || e && r.find.TAG("*", a && h.parentNode || h), it = y += null == rt ? 1 : Math.random() || .1;
                for (g && (ct = h !== s && h,
                wt = o); null != (w = ut[v]); v++) {
                    if (e && w) {
                        for (tt = 0; d = n[tt++]; )
                            if (d(w, h, c)) {
                                l.push(w);
                                break
                            }
                        g && (y = it,
                        wt = ++o)
                    }
                    i && ((w = !d && w) && b--,
                    f && nt.push(w))
                }
                if (b += v,
                i && v !== b) {
                    for (tt = 0; d = t[tt++]; )
                        d(nt, p, h, c);
                    if (f) {
                        if (b > 0)
                            while (v--)
                                nt[v] || p[v] || (p[v] = or.call(l));
                        p = vt(p)
                    }
                    k.apply(l, p),
                    g && !f && p.length > 0 && b + t.length > 1 && u.uniqueSort(l)
                }
                return g && (y = it,
                ct = rt),
                nt
            };
            return i ? c(f) : f
        }
        function gi(n, t, i) {
            for (var r = 0, f = t.length; f > r; r++)
                u(n, t[r], i);
            return i
        }
        function di(n, t, i, u) {
            var h, f, o, c, l, s = lt(n);
            if (!u && 1 === s.length) {
                if (f = s[0] = s[0].slice(0),
                f.length > 2 && "ID" === (o = f[0]).type && e.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
                    if (t = (r.find.ID(o.matches[0].replace(b, d), t) || [])[0],
                    !t)
                        return i;
                    n = n.slice(f.shift().value.length)
                }
                for (h = ht.needsContext.test(n) ? 0 : f.length; h--; ) {
                    if (o = f[h],
                    r.relative[c = o.type])
                        break;
                    if ((l = r.find[c]) && (u = l(o.matches[0].replace(b, d), kt.test(f[0].type) && t.parentNode || t))) {
                        if (f.splice(h, 1),
                        n = u.length && at(f),
                        !n)
                            return k.apply(i, u),
                            i;
                        break
                    }
                }
            }
            return ri(n, s)(u, t, !v, i, kt.test(n)),
            i
        }
        var et, e, wt, r, pt, ci, ri, ct, tt, nt, s, a, v, h, it, bt, ot, o = "sizzle" + -new Date, p = n.document, y = 0, rr = 0, ai = oi(), pi = oi(), wi = oi(), ut = !1, ii = function(n, t) {
            return n === t ? (ut = !0,
            0) : 0
        }, st = typeof t, yi = -2147483648, er = {}.hasOwnProperty, w = [], or = w.pop, sr = w.push, k = w.push, vi = w.slice, g = w.indexOf || function(n) {
            for (var t = 0, i = this.length; i > t; t++)
                if (this[t] === n)
                    return t;
            return -1
        }
        , ui = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", f = "[\\x20\\t\\r\\n\\f]", ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ki = ft.replace("w", "w#"), bi = "\\[" + f + "*(" + ft + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ki + ")|)|)" + f + "*\\]", ei = ":(" + ft + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + bi.replace(3, 8) + ")*)|.*)\\)|)", yt = RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"), ur = RegExp("^" + f + "*," + f + "*"), fr = RegExp("^" + f + "*([>+~]|" + f + ")" + f + "*"), kt = RegExp(f + "*[+~]"), hr = RegExp("=" + f + "*([^\\]'\"]*)" + f + "*\\]", "g"), vr = RegExp(ei), yr = RegExp("^" + ki + "$"), ht = {
            ID: RegExp("^#(" + ft + ")"),
            CLASS: RegExp("^\\.(" + ft + ")"),
            TAG: RegExp("^(" + ft.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bi),
            PSEUDO: RegExp("^" + ei),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
            bool: RegExp("^(?:" + ui + ")$", "i"),
            needsContext: RegExp("^" + f + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)", "i")
        }, gt = /^[^{]+\{\s*\[native \w/, pr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, cr = /^(?:input|select|textarea|button)$/i, lr = /^h\d$/i, ar = /'|\\/g, b = RegExp("\\\\([\\da-f]{1,6}" + f + "?|(" + f + ")|.)", "ig"), d = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            k.apply(w = vi.call(p.childNodes), p.childNodes),
            w[p.childNodes.length].nodeType
        } catch (wr) {
            k = {
                apply: w.length ? function(n, t) {
                    sr.apply(n, vi.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        ci = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        e = u.support = {},
        nt = u.setDocument = function(n) {
            var i = n ? n.ownerDocument || n : p
              , u = i.defaultView;
            return i !== s && 9 === i.nodeType && i.documentElement ? (s = i,
            a = i.documentElement,
            v = !ci(i),
            u && u.attachEvent && u !== u.top && u.attachEvent("onbeforeunload", function() {
                nt()
            }),
            e.attributes = l(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            e.getElementsByTagName = l(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            e.getElementsByClassName = l(function(n) {
                return n.innerHTML = "<div class='a'></div><div class='a i'></div>",
                n.firstChild.className = "i",
                2 === n.getElementsByClassName("i").length
            }),
            e.getById = l(function(n) {
                return a.appendChild(n).id = o,
                !i.getElementsByName || !i.getElementsByName(o).length
            }),
            e.getById ? (r.find.ID = function(n, t) {
                if (typeof t.getElementById !== st && v) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            r.filter.ID = function(n) {
                var t = n.replace(b, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ) : (delete r.find.ID,
            r.filter.ID = function(n) {
                var t = n.replace(b, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== st && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            r.find.TAG = e.getElementsByTagName ? function(n, i) {
                return typeof i.getElementsByTagName !== st ? i.getElementsByTagName(n) : t
            }
            : function(n, t) {
                var i, u = [], f = 0, r = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = r[f++])
                        1 === i.nodeType && u.push(i);
                    return u
                }
                return r
            }
            ,
            r.find.CLASS = e.getElementsByClassName && function(n, i) {
                return typeof i.getElementsByClassName !== st && v ? i.getElementsByClassName(n) : t
            }
            ,
            it = [],
            h = [],
            (e.qsa = gt.test(i.querySelectorAll)) && (l(function(n) {
                n.innerHTML = "<select><option selected=''></option></select>",
                n.querySelectorAll("[selected]").length || h.push("\\[" + f + "*(?:value|" + ui + ")"),
                n.querySelectorAll(":checked").length || h.push(":checked")
            }),
            l(function(n) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"),
                n.appendChild(t).setAttribute("t", ""),
                n.querySelectorAll("[t^='']").length && h.push("[*^$]=" + f + "*(?:''|\"\")"),
                n.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"),
                n.querySelectorAll("*,:x"),
                h.push(",.*:")
            })),
            (e.matchesSelector = gt.test(bt = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && l(function(n) {
                e.disconnectedMatch = bt.call(n, "div"),
                bt.call(n, "[s!='']:x"),
                it.push("!=", ei)
            }),
            h = h.length && RegExp(h.join("|")),
            it = it.length && RegExp(it.join("|")),
            ot = gt.test(a.contains) || a.compareDocumentPosition ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            ii = a.compareDocumentPosition ? function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t);
                return r ? 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || ot(p, n) ? -1 : t === i || ot(p, t) ? 1 : tt ? g.call(tt, n) - g.call(tt, t) : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
            }
            : function(n, t) {
                var u, r = 0, s = n.parentNode, o = t.parentNode, f = [n], e = [t];
                if (n === t)
                    return ut = !0,
                    0;
                if (!s || !o)
                    return n === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : tt ? g.call(tt, n) - g.call(tt, t) : 0;
                if (s === o)
                    return li(n, t);
                for (u = n; u = u.parentNode; )
                    f.unshift(u);
                for (u = t; u = u.parentNode; )
                    e.unshift(u);
                while (f[r] === e[r])
                    r++;
                return r ? li(f[r], e[r]) : f[r] === p ? -1 : e[r] === p ? 1 : 0
            }
            ,
            i) : s
        }
        ,
        u.matches = function(n, t) {
            return u(n, null, null, t)
        }
        ,
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== s && nt(n),
            t = t.replace(hr, "='$1']"),
            !(!e.matchesSelector || !v || it && it.test(t) || h && h.test(t)))
                try {
                    var i = bt.call(n, t);
                    if (i || e.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return i
                } catch (r) {}
            return u(t, s, null, [n]).length > 0
        }
        ,
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== s && nt(n),
            ot(n, t)
        }
        ,
        u.attr = function(n, i) {
            (n.ownerDocument || n) !== s && nt(n);
            var f = r.attrHandle[i.toLowerCase()]
              , u = f && er.call(r.attrHandle, i.toLowerCase()) ? f(n, i, !v) : t;
            return u === t ? e.attributes || !v ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null : u
        }
        ,
        u.error = function(n) {
            throw Error("Syntax error, unrecognized expression: " + n);
        }
        ,
        u.uniqueSort = function(n) {
            var u, r = [], t = 0, i = 0;
            if (ut = !e.detectDuplicates,
            tt = !e.sortStable && n.slice(0),
            n.sort(ii),
            ut) {
                while (u = n[i++])
                    u === n[i] && (t = r.push(i));
                while (t--)
                    n.splice(r[t], 1)
            }
            return n
        }
        ,
        pt = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += pt(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                for (; r = n[u]; u++)
                    i += pt(r);
            return i
        }
        ,
        r = u.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: ht,
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
                ATTR: function(n) {
                    return n[1] = n[1].replace(b, d),
                    n[3] = (n[4] || n[5] || "").replace(b, d),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var r, i = !n[5] && n[2];
                    return ht.CHILD.test(n[0]) ? null : (n[3] && n[4] !== t ? n[2] = n[4] : i && vr.test(i) && (r = lt(i, !0)) && (r = i.indexOf(")", i.length - r) - i.length) && (n[0] = n[0].slice(0, r),
                    n[2] = i.slice(0, r)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(b, d).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = ai[n + " "];
                    return t || (t = RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && ai(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== st && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : t ? (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , e = "last" !== n.slice(-4)
                      , f = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var a, d, c, l, v, w, b = s !== e ? "nextSibling" : "previousSibling", p = t.parentNode, g = f && t.nodeName.toLowerCase(), k = !h && !f;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [e ? p.firstChild : p.lastChild],
                            e && k) {
                                for (d = p[o] || (p[o] = {}),
                                a = d[n] || [],
                                v = a[0] === y && a[1],
                                l = a[0] === y && a[2],
                                c = v && p.childNodes[v]; c = ++v && c && c[b] || (l = v = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        d[n] = [y, v, l];
                                        break
                                    }
                            } else if (k && (a = (t[o] || (t[o] = {}))[n]) && a[0] === y)
                                l = a[1];
                            else
                                while (c = ++v && c && c[b] || (l = v = 0) || w.pop())
                                    if ((f ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (k && ((c[o] || (c[o] = {}))[n] = [y, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || 0 == l % r && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, t) {
                    var f, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return i[o] ? i(t) : i.length > 1 ? (f = [n, n, "", t],
                    r.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, r) {
                        for (var e, f = i(n, t), u = f.length; u--; )
                            e = g.call(n, f[u]),
                            n[e] = !(r[e] = f[u])
                    }) : function(n) {
                        return i(n, 0, f)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: c(function(n) {
                    var i = []
                      , r = []
                      , t = ri(n.replace(yt, "$1"));
                    return t[o] ? c(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n,
                        t(i, null, f, r),
                        !r.pop()
                    }
                }),
                has: c(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: c(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || pt(t)).indexOf(n) > -1
                    }
                }),
                lang: c(function(n) {
                    return yr.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(b, d).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === a
                },
                focus: function(n) {
                    return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !r.pseudos.empty(n)
                },
                header: function(n) {
                    return lr.test(n.nodeName)
                },
                input: function(n) {
                    return cr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
                },
                first: rt(function() {
                    return [0]
                }),
                last: rt(function(n, t) {
                    return [t - 1]
                }),
                eq: rt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: rt(function(n, t) {
                    for (var i = 0; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                odd: rt(function(n, t) {
                    for (var i = 1; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                lt: rt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: rt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; t > ++r; )
                        n.push(r);
                    return n
                })
            }
        },
        r.pseudos.nth = r.pseudos.eq;
        for (et in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[et] = ir(et);
        for (et in {
            submit: !0,
            reset: !0
        })
            r.pseudos[et] = nr(et);
        hi.prototype = r.filters = r.pseudos,
        r.setFilters = new hi,
        ri = u.compile = function(n, t) {
            var r, u = [], f = [], i = wi[n + " "];
            if (!i) {
                for (t || (t = lt(n)),
                r = t.length; r--; )
                    i = fi(t[r]),
                    i[o] ? u.push(i) : f.push(i);
                i = wi(n, tr(f, u))
            }
            return i
        }
        ,
        e.sortStable = o.split("").sort(ii).join("") === o,
        e.detectDuplicates = ut,
        nt(),
        e.sortDetached = l(function(n) {
            return 1 & n.compareDocumentPosition(s.createElement("div"))
        }),
        l(function(n) {
            return n.innerHTML = "<a href='#'></a>",
            "#" === n.firstChild.getAttribute("href")
        }) || si("type|href|height|width", function(n, i, r) {
            return r ? t : n.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
        }),
        e.attributes && l(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || si("value", function(n, i, r) {
            return r || "input" !== n.nodeName.toLowerCase() ? t : n.defaultValue
        }),
        l(function(n) {
            return null == n.getAttribute("disabled")
        }) || si(ui, function(n, i, r) {
            var u;
            return r ? t : (u = n.getAttributeNode(i)) && u.specified ? u.value : n[i] === !0 ? i.toLowerCase() : null
        }),
        i.find = u,
        i.expr = u.selectors,
        i.expr[":"] = i.expr.pseudos,
        i.unique = u.uniqueSort,
        i.text = u.getText,
        i.isXMLDoc = u.isXML,
        i.contains = u.contains
    }(n),
    ai = {},
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ai[n] || ne(n) : i.extend({}, n);
        var s, f, c, o, e, a, r = [], u = !n.once && [], l = function(t) {
            for (f = n.memory && t,
            c = !0,
            e = a || 0,
            a = 0,
            o = r.length,
            s = !0; r && o > e; e++)
                if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                    f = !1;
                    break
                }
            s = !1,
            r && (u ? u.length && l(u.shift()) : f ? r = [] : h.disable())
        }, h = {
            add: function() {
                if (r) {
                    var u = r.length;
                    (function t(u) {
                        i.each(u, function(u, f) {
                            var e = i.type(f);
                            "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && t(f)
                        })
                    }
                    )(arguments),
                    s ? o = r.length : f && (a = u,
                    l(f))
                }
                return this
            },
            remove: function() {
                return r && i.each(arguments, function(n, t) {
                    for (var u; (u = i.inArray(t, r, u)) > -1; )
                        r.splice(u, 1),
                        s && (o >= u && o--,
                        e >= u && e--)
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
            },
            empty: function() {
                return r = [],
                o = 0,
                this
            },
            disable: function() {
                return r = u = f = t,
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return u = t,
                f || h.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(n, t) {
                return !r || c && !u || (t = t || [],
                t = [n, t.slice ? t.slice() : t],
                s ? u.push(t) : l(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return h
    }
    ,
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var s = e[0]
                              , o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        }),
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add,
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock),
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                    this
                }
                ,
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var r = 0, u = a.call(arguments), t = u.length, e = 1 !== t || n && i.isFunction(n.promise) ? t : 0, f = 1 === e ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this,
                    i[n] = arguments.length > 1 ? a.call(arguments) : r,
                    i === s ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, s, c, o;
            if (t > 1)
                for (s = Array(t),
                c = Array(t),
                o = Array(t); t > r; r++)
                    u[r] && i.isFunction(u[r].promise) ? u[r].promise().done(h(r, o, u)).fail(f.reject).progress(h(r, c, s)) : --e;
            return e || f.resolveWith(o, u),
            f.promise()
        }
    }),
    i.support = function(t) {
        var v, e, f, c, l, h, a, y, s, u = r.createElement("div");
        if (u.setAttribute("className", "t"),
        u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        v = u.getElementsByTagName("*") || [],
        e = u.getElementsByTagName("a")[0],
        !e || !e.style || !v.length)
            return t;
        c = r.createElement("select"),
        h = c.appendChild(r.createElement("option")),
        f = u.getElementsByTagName("input")[0],
        e.style.cssText = "top:1px;float:left;opacity:100%",
        t.getSetAttribute = "t" !== u.className,
        t.leadingWhitespace = 3 === u.firstChild.nodeType,
        t.tbody = !u.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!u.getElementsByTagName("link").length,
        t.style = /top/.test(e.getAttribute("style")),
        t.hrefNormalized = "/a" === e.getAttribute("href"),
        t.opacity = /^0.5/.test(e.style.opacity),
        t.cssFloat = !!e.style.cssFloat,
        t.checkOn = !!f.value,
        t.optSelected = h.selected,
        t.enctype = !!r.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        f.checked = !0,
        t.noCloneChecked = f.cloneNode(!0).checked,
        c.disabled = !0,
        t.optDisabled = !h.disabled;
        try {
            delete u.test
        } catch (p) {
            t.deleteExpando = !1
        }
        f = r.createElement("input"),
        f.setAttribute("value", ""),
        t.input = "" === f.getAttribute("value"),
        f.value = "t",
        f.setAttribute("type", "radio"),
        t.radioValue = "t" === f.value,
        f.setAttribute("checked", "t"),
        f.setAttribute("name", "t"),
        l = r.createDocumentFragment(),
        l.appendChild(f),
        t.appendChecked = f.checked,
        t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
        u.attachEvent && (u.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        u.cloneNode(!0).click());
        for (s in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            u.setAttribute(a = "on" + s, "t"),
            t[s + "Bubbles"] = a in n || u.attributes[a].expando === !1;
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === u.style.backgroundClip;
        for (s in i(t))
            break;
        return t.ownLast = "0" !== s,
        i(function() {
            var h, s, f, c = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", e = r.getElementsByTagName("body")[0];
            e && (h = r.createElement("div"),
            h.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            e.appendChild(h).appendChild(u),
            u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            f = u.getElementsByTagName("td"),
            f[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            y = 0 === f[0].offsetHeight,
            f[0].style.display = "",
            f[1].style.display = "none",
            t.reliableHiddenOffsets = y && 0 === f[0].offsetHeight,
            u.innerHTML = "",
            u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            i.swap(e, null != e.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === u.offsetWidth
            }),
            n.getComputedStyle && (t.pixelPosition = "1%" !== (n.getComputedStyle(u, null) || {}).top,
            t.boxSizingReliable = "4px" === (n.getComputedStyle(u, null) || {
                width: "4px"
            }).width,
            s = u.appendChild(r.createElement("div")),
            s.style.cssText = u.style.cssText = c,
            s.style.marginRight = s.style.width = "0",
            u.style.width = "1px",
            t.reliableMarginRight = !parseFloat((n.getComputedStyle(s, null) || {}).marginRight)),
            typeof u.style.zoom !== o && (u.innerHTML = "",
            u.style.cssText = c + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === u.offsetWidth,
            u.style.display = "block",
            u.innerHTML = "<div></div>",
            u.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== u.offsetWidth,
            t.inlineBlockNeedsLayout && (e.style.zoom = 1)),
            e.removeChild(h),
            h = u = f = s = null)
        }),
        v = c = l = h = e = f = null,
        t
    }({}),
    ou = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    cu = /([A-Z])/g,
    i.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ci(n)
        },
        data: function(n, t, i) {
            return vu(n, t, i)
        },
        removeData: function(n, t) {
            return au(n, t)
        },
        _data: function(n, t, i) {
            return vu(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return au(n, t, !0)
        },
        acceptData: function(n) {
            if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType)
                return !1;
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    }),
    i.fn.extend({
        data: function(n, r) {
            var e, f, s = null, o = 0, u = this[0];
            if (n === t) {
                if (this.length && (s = i.data(u),
                1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
                    for (e = u.attributes; e.length > o; o++)
                        f = e[o].name,
                        0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)),
                        lu(u, f, s[f]));
                    i._data(u, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, r)
            }) : u ? lu(u, n, i.data(u, n)) : null
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    }),
    i.extend({
        queue: function(n, r, u) {
            var f;
            return n ? (r = (r || "fx") + "queue",
            f = i._data(n, r),
            u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)),
            f || []) : t
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var f = i.queue(n, t)
              , e = f.length
              , r = f.shift()
              , u = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            "inprogress" === r && (r = f.shift(),
            e--),
            r && ("fx" === t && f.unshift("inprogress"),
            delete u.stop,
            r.call(n, o, u)),
            !e && u && u.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue"),
                    i._removeData(n, r)
                })
            })
        }
    }),
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return "string" != typeof n && (r = n,
            n = "fx",
            u--),
            u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n),
                "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            var u, s = 1, h = i.Deferred(), f = this, o = this.length, e = function() {
                --s || h.resolveWith(f, [f])
            };
            for ("string" != typeof n && (r = n,
            n = t),
            n = n || "fx"; o--; )
                u = i._data(f[o], n + "queueHooks"),
                u && u.empty && (s++,
                u.empty.add(e));
            return e(),
            h.promise(r)
        }
    });
    var b, eu, yi = /[\t\r\n\f]/g, te = /\r/g, se = /^(?:input|select|textarea|button|object)$/i, he = /^(?:a|area)$/i, si = /^(?:checked|selected)$/i, v = i.support.getSetAttribute, vt = i.support.input;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = t,
                    delete this[n]
                } catch (i) {}
            })
        },
        addClass: function(n) {
            var e, t, r, f, o, u = 0, c = this.length, h = "string" == typeof n && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (h)
                for (e = (n || "").match(s) || []; c > u; u++)
                    if (t = this[u],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(yi, " ") : " ")) {
                        for (o = 0; f = e[o++]; )
                            0 > r.indexOf(" " + f + " ") && (r += f + " ");
                        t.className = i.trim(r)
                    }
            return this
        },
        removeClass: function(n) {
            var e, t, r, f, o, u = 0, c = this.length, h = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (h)
                for (e = (n || "").match(s) || []; c > u; u++)
                    if (t = this[u],
                    r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(yi, " ") : "")) {
                        for (o = 0; f = e[o++]; )
                            while (r.indexOf(" " + f + " ") >= 0)
                                r = r.replace(" " + f + " ", " ");
                        t.className = n ? i.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if ("string" === r)
                    for (var t, e = 0, u = i(this), f = n.match(s) || []; t = f[e++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    (r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var r = " " + n + " ", t = 0, i = this.length; i > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(yi, " ").indexOf(r) >= 0)
                    return !0;
            return !1
        },
        val: function(n) {
            var u, r, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n),
            this.each(function(u) {
                var f;
                1 === this.nodeType && (f = e ? n.call(this, u, i(this).val()) : n,
                null == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return null == n ? "" : n + ""
                })),
                r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                r && "set"in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()],
            r && "get"in r && (u = r.get(f, "value")) !== t ? u : (u = f.value,
            "string" == typeof u ? u.replace(te, "") : null == u ? "" : u)) : void 0
        }
    }),
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : n.text
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, f = "select-one" === n.type || 0 > r, h = f ? null : [], s = f ? r + 1 : o.length, u = 0 > r ? s : f ? r : 0; s > u; u++)
                        if (t = o[u],
                        !(!t.selected && u !== r || (i.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(),
                            f)
                                return e;
                            h.push(e)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var e, r, o = n.options, u = i.makeArray(t), f = o.length; f--; )
                        r = o[f],
                        (r.selected = i.inArray(i(r).val(), u) >= 0) && (e = !0);
                    return e || (n.selectedIndex = -1),
                    u
                }
            }
        },
        attr: function(n, r, u) {
            var e, f, s = n.nodeType;
            if (n && 3 !== s && 8 !== s && 2 !== s)
                return typeof n.getAttribute === o ? i.prop(n, r, u) : (1 === s && i.isXMLDoc(n) || (r = r.toLowerCase(),
                e = i.attrHooks[r] || (i.expr.match.bool.test(r) ? eu : b)),
                u === t ? e && "get"in e && null !== (f = e.get(n, r)) ? f : (f = i.find.attr(n, r),
                null == f ? t : f) : null !== u ? e && "set"in e && (f = e.set(n, u, r)) !== t ? f : (n.setAttribute(r, u + ""),
                u) : (i.removeAttr(n, r),
                t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(s);
            if (f && 1 === n.nodeType)
                while (r = f[e++])
                    u = i.propFix[r] || r,
                    i.expr.match.bool.test(r) ? vt && v || !si.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
                    n.removeAttribute(v ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, r, u) {
            var o, f, s, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e)
                return s = 1 !== e || !i.isXMLDoc(n),
                s && (r = i.propFix[r] || r,
                f = i.propHooks[r]),
                u !== t ? f && "set"in f && (o = f.set(n, u, r)) !== t ? o : n[r] = u : f && "get"in f && null !== (o = f.get(n, r)) ? o : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : se.test(n.nodeName) || he.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    }),
    eu = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : vt && v || !si.test(r) ? n.setAttribute(!v && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    },
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, r) {
        var u = i.expr.attrHandle[r] || i.find.attr;
        i.expr.attrHandle[r] = vt && v || !si.test(r) ? function(n, r, f) {
            var o = i.expr.attrHandle[r]
              , e = f ? t : (i.expr.attrHandle[r] = t) != u(n, r, f) ? r.toLowerCase() : null;
            return i.expr.attrHandle[r] = o,
            e
        }
        : function(n, r, u) {
            return u ? t : n[i.camelCase("default-" + r)] ? r.toLowerCase() : null
        }
    }),
    vt && v || (i.attrHooks.value = {
        set: function(n, r, u) {
            return i.nodeName(n, "input") ? (n.defaultValue = r,
            t) : b && b.set(n, r, u)
        }
    }),
    v || (b = {
        set: function(n, i, r) {
            var u = n.getAttributeNode(r);
            return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)),
            u.value = i += "",
            "value" === r || i === n.getAttribute(r) ? i : t
        }
    },
    i.expr.attrHandle.id = i.expr.attrHandle.name = i.expr.attrHandle.coords = function(n, i, r) {
        var u;
        return r ? t : (u = n.getAttributeNode(i)) && "" !== u.value ? u.value : null
    }
    ,
    i.valHooks.button = {
        get: function(n, i) {
            var r = n.getAttributeNode(i);
            return r && r.specified ? r.value : t
        },
        set: b.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            b.set(n, "" === t ? !1 : t, i)
        }
    },
    i.each(["width", "height"], function(n, r) {
        i.attrHooks[r] = {
            set: function(n, i) {
                return "" === i ? (n.setAttribute(r, "auto"),
                i) : t
            }
        }
    })),
    i.support.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    }),
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || t
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    }),
    i.support.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    }),
    i.support.enctype || (i.propFix.enctype = "encoding"),
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, r) {
                return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
            }
        },
        i.support.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        }
        )
    });
    var kt = /^(?:input|select|textarea)$/i
      , oe = /^key/
      , fe = /^(?:mouse|contextmenu)|click/
      , iu = /^(?:focusinfocus|focusoutblur)$/
      , uu = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, r, u, f, e) {
            var b, w, d, p, c, l, a, v, h, k, g, y = i._data(n);
            if (y) {
                for (u.handler && (p = u,
                u = p.handler,
                e = p.selector),
                u.guid || (u.guid = i.guid++),
                (w = y.events) || (w = y.events = {}),
                (l = y.handle) || (l = y.handle = function(n) {
                    return typeof i === o || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(l.elem, arguments)
                }
                ,
                l.elem = n),
                r = (r || "").match(s) || [""],
                d = r.length; d--; )
                    b = uu.exec(r[d]) || [],
                    h = g = b[1],
                    k = (b[2] || "").split(".").sort(),
                    h && (c = i.event.special[h] || {},
                    h = (e ? c.delegateType : c.bindType) || h,
                    c = i.event.special[h] || {},
                    a = i.extend({
                        type: h,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: k.join(".")
                    }, p),
                    (v = w[h]) || (v = w[h] = [],
                    v.delegateCount = 0,
                    c.setup && c.setup.call(n, f, k, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))),
                    c.add && (c.add.call(n, a),
                    a.handler.guid || (a.handler.guid = u.guid)),
                    e ? v.splice(v.delegateCount++, 0, a) : v.push(a),
                    i.event.global[h] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, c, b, p, a, h, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(s) || [""],
                p = t.length; p--; )
                    if (c = uu.exec(t[p]) || [],
                    e = k = c[1],
                    w = (c[2] || "").split(".").sort(),
                    e) {
                        for (h = i.event.special[e] || {},
                        e = (u ? h.delegateType : h.bindType) || e,
                        l = a[e] || [],
                        c = c[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        b = y = l.length; y--; )
                            o = l[y],
                            !f && k !== o.origType || r && r.guid !== o.guid || c && !c.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1),
                            o.selector && l.delegateCount--,
                            h.remove && h.remove.call(n, o));
                        b && !l.length && (h.teardown && h.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle),
                        delete a[e])
                    } else
                        for (e in a)
                            i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle,
                i._removeData(n, "events"))
            }
        },
        trigger: function(u, f, e, o) {
            var a, v, s, w, l, c, b, p = [e || r], h = it.call(u, "type") ? u.type : u, y = it.call(u, "namespace") ? u.namespace.split(".") : [];
            if (s = c = e = e || r,
            3 !== e.nodeType && 8 !== e.nodeType && !iu.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."),
            h = y.shift(),
            y.sort()),
            v = 0 > h.indexOf(":") && "on" + h,
            u = u[i.expando] ? u : new i.Event(h,"object" == typeof u && u),
            u.isTrigger = o ? 2 : 3,
            u.namespace = y.join("."),
            u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            u.result = t,
            u.target || (u.target = e),
            f = null == f ? [u] : i.makeArray(f, [u]),
            l = i.event.special[h] || {},
            o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (w = l.delegateType || h,
                    iu.test(w + h) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        c = s;
                    c === (e.ownerDocument || r) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (b = 0; (s = p[b++]) && !u.isPropagationStopped(); )
                    u.type = b > 1 ? w : l.bindType || h,
                    a = (i._data(s, "events") || {})[u.type] && i._data(s, "handle"),
                    a && a.apply(s, f),
                    a = v && s[v],
                    a && i.acceptData(s) && a.apply && a.apply(s, f) === !1 && u.preventDefault();
                if (u.type = h,
                !o && !u.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), f) === !1) && i.acceptData(e) && v && e[h] && !i.isWindow(e)) {
                    c = e[v],
                    c && (e[v] = null),
                    i.event.triggered = h;
                    try {
                        e[h]()
                    } catch (k) {}
                    i.event.triggered = t,
                    c && (e[v] = c)
                }
                return u.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var s, e, r, f, h, c = [], o = a.call(arguments), l = (i._data(this, "events") || {})[n.type] || [], u = i.event.special[n.type] || {};
            if (o[0] = n,
            n.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (c = i.event.handlers.call(this, n, l),
                s = 0; (f = c[s++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = f.elem,
                    h = 0; (r = f.handlers[h++]) && !n.isImmediatePropagationStopped(); )
                        (!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r,
                        n.data = r.data,
                        e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(f.elem, o),
                        e !== t && (n.result = e) === !1 && (n.preventDefault(),
                        n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, r) {
            var e, s, f, h, c = [], o = r.delegateCount, u = n.target;
            if (o && u.nodeType && (!n.button || "click" !== n.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== n.type)) {
                        for (f = [],
                        h = 0; o > h; h++)
                            s = r[h],
                            e = s.selector + " ",
                            f[e] === t && (f[e] = s.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length),
                            f[e] && f.push(s);
                        f.length && c.push({
                            elem: u,
                            handlers: f
                        })
                    }
            return r.length > o && c.push({
                elem: this,
                handlers: r.slice(o)
            }),
            c
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var o, s, e, f = n.type, u = n, t = this.fixHooks[f];
            for (t || (this.fixHooks[f] = t = fe.test(f) ? this.mouseHooks : oe.test(f) ? this.keyHooks : {}),
            e = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(u),
            o = e.length; o--; )
                s = e[o],
                n[s] = u[s];
            return n.target || (n.target = u.srcElement || r),
            3 === n.target.nodeType && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, u) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var f, s, u, e = i.button, o = i.fromElement;
                return null == n.pageX && null != i.clientX && (s = n.target.ownerDocument || r,
                u = s.documentElement,
                f = s.body,
                n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0),
                n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)),
                !n.relatedTarget && o && (n.relatedTarget = o === n.target ? i.toElement : o),
                n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== yu() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === yu() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== t && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f),
            f.isDefaultPrevented() && r.preventDefault()
        }
    },
    i.removeEvent = r.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
    : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null),
        n.detachEvent(r, i))
    }
    ,
    i.Event = function(n, r) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ot : nt) : this.type = n,
        r && i.extend(this, r),
        this.timeStamp = n && n.timeStamp || i.now(),
        this[i.expando] = !0,
        t) : new i.Event(n,r)
    }
    ,
    i.Event.prototype = {
        isDefaultPrevented: nt,
        isPropagationStopped: nt,
        isImmediatePropagationStopped: nt,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ot,
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ot,
            n && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ot,
            this.stopPropagation()
        }
    },
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var f, e = this, r = n.relatedTarget, u = n.handleObj;
                return (!r || r !== e && !i.contains(e, r)) && (n.type = u.origType,
                f = u.handler.apply(this, arguments),
                n.type = t),
                f
            }
        }
    }),
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit", function(n) {
                var u = n.target
                  , r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }),
                i._data(r, "submitBubbles", !0))
            }),
            t)
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"),
            t)
        }
    }),
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            return kt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }),
            i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1),
                i.event.simulate("change", this, n, !0)
            })),
            !1) : (i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                kt.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }),
                i._data(t, "changeBubbles", !0))
            }),
            t)
        },
        handle: function(n) {
            var i = n.target;
            return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !kt.test(this.nodeName)
        }
    }),
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var f = 0
          , u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                0 == f++ && r.addEventListener(n, u, !0)
            },
            teardown: function() {
                0 == --f && r.removeEventListener(n, u, !0)
            }
        }
    }),
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var s, o;
            if ("object" == typeof n) {
                "string" != typeof r && (u = u || r,
                r = t);
                for (s in n)
                    this.on(s, r, u, n[s], e);
                return this
            }
            if (null == u && null == f ? (f = r,
            u = r = t) : null == f && ("string" == typeof r ? (f = u,
            u = t) : (f = u,
            u = r,
            r = t)),
            f === !1)
                f = nt;
            else if (!f)
                return this;
            return 1 === e && (o = f,
            f = function(n) {
                return i().off(n),
                o.apply(this, arguments)
            }
            ,
            f.guid = o.guid || (o.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
                return f = n.handleObj,
                i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler),
                this;
            if ("object" == typeof n) {
                for (e in n)
                    this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || "function" == typeof r) && (u = r,
            r = t),
            u === !1 && (u = nt),
            this.each(function() {
                i.event.remove(this, n, u, r)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, r) {
            var u = this[0];
            return u ? i.event.trigger(n, r, u, !0) : t
        }
    });
    var ee = /^.[^:#\[\.,]*$/
      , ge = /^(?:parents|prev(?:Until|All))/
      , rf = i.expr.match.needsContext
      , vo = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [], f = this, u = f.length;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(f[t], this))
                            return !0
                }));
            for (t = 0; u > t; t++)
                i.find(n, f[t], r);
            return r = this.pushStack(u > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n : n,
            r
        },
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t]))
                        return !0
            })
        },
        not: function(n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        filter: function(n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        is: function(n) {
            return !!fi(this, "string" == typeof n && rf.test(n) ? i(n) : n || [], !1).length
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = rf.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (11 > r.nodeType && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        r = u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            var u = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n)
              , r = i.merge(this.get(), u);
            return this.pushStack(i.unique(r))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    }),
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return uf(n, "nextSibling")
        },
        prev: function(n) {
            return uf(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (vo[n] || (f = i.unique(f)),
            ge.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    }),
    i.extend({
        filter: function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"),
            1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u)); )
                1 === f.nodeType && e.push(f),
                f = f[r];
            return e
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    var of = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , yo = / jQuery\d+="(?:null|\d+)"/g
      , bu = RegExp("<(?:" + of + ")[\\s/>]", "i")
      , ei = /^\s+/
      , ku = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , pu = /<([\w:]+)/
      , wu = /<tbody/i
      , ao = /<|&#?\w+;/
      , co = /<(?:script|style|link)/i
      , ni = /^(?:checkbox|radio)$/i
      , lo = /checked\s*(?:[^=]|=\s*.checked.)/i
      , tf = /^$|\/(?:java|ecma)script/i
      , ko = /^true\/(.*)/
      , go = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , bo = ur(r)
      , ti = bo.appendChild(r.createElement("div"));
    e.optgroup = e.option,
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead,
    e.th = e.td,
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ir(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ir(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, f = 0; null != (r = e[f]); f++)
                t || 1 !== r.nodeType || i.cleanData(u(r)),
                r.parentNode && (t && i.contains(r.ownerDocument, r) && dt(u(r, "script")),
                r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild; )
                    n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n,
            t = null == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {}
                  , f = 0
                  , o = this.length;
                if (n === t)
                    return 1 === r.nodeType ? r.innerHTML.replace(yo, "") : t;
                if (!("string" != typeof n || co.test(n) || !i.support.htmlSerialize && bu.test(n) || !i.support.leadingWhitespace && ei.test(n) || e[(pu.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(ku, "<$1></$2>");
                    try {
                        for (; o > f; f++)
                            r = this[f] || {},
                            1 === r.nodeType && (i.cleanData(u(r, !1)),
                            r.innerHTML = n);
                        r = 0
                    } catch (s) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var t = i.map(this, function(n) {
                return [n.nextSibling, n.parentNode]
            })
              , n = 0;
            return this.domManip(arguments, function(r) {
                var u = t[n++]
                  , f = t[n++];
                f && (u && u.parentNode !== f && (u = this.nextSibling),
                i(this).remove(),
                f.insertBefore(r, u))
            }, !0),
            n ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t, r) {
            n = br.apply([], n);
            var l, f, a, s, y, o, e = 0, c = this.length, w = this, p = c - 1, h = n[0], v = i.isFunction(h);
            if (v || !(1 >= c || "string" != typeof h || i.support.checkClone) && lo.test(h))
                return this.each(function(i) {
                    var u = w.eq(i);
                    v && (n[0] = h.call(this, i, u.html())),
                    u.domManip(n, t, r)
                });
            if (c && (o = i.buildFragment(n, this[0].ownerDocument, !1, !r && this),
            l = o.firstChild,
            1 === o.childNodes.length && (o = l),
            l)) {
                for (s = i.map(u(o, "script"), rr),
                a = s.length; c > e; e++)
                    f = o,
                    e !== p && (f = i.clone(f, !0, !0),
                    a && i.merge(s, u(f, "script"))),
                    t.call(this[e], f, e);
                if (a)
                    for (y = s[s.length - 1].ownerDocument,
                    i.map(s, fr),
                    e = 0; a > e; e++)
                        f = s[e],
                        tf.test(f.type || "") && !i._data(f, "globalEval") && i.contains(y, f) && (f.src ? i._evalUrl(f.src) : i.globalEval((f.text || f.textContent || f.innerHTML || "").replace(go, "")));
                o = l = null
            }
            return this
        }
    }),
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, o = [], e = i(n), f = e.length - 1; f >= r; r++)
                u = r === f ? this : this.clone(!0),
                i(e[r])[t](u),
                ri.apply(o, u.get());
            return this.pushStack(o)
        }
    }),
    i.extend({
        clone: function(n, t, r) {
            var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
            if (i.support.html5Clone || i.isXMLDoc(n) || !bu.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (ti.innerHTML = n.outerHTML,
            ti.removeChild(o = ti.firstChild)),
            !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = u(o),
                s = u(n),
                e = 0; null != (h = s[e]); ++e)
                    f[e] && po(h, f[e]);
            if (t)
                if (r)
                    for (s = s || u(n),
                    f = f || u(o),
                    e = 0; null != (h = s[e]); e++)
                        nr(h, f[e]);
                else
                    nr(n, o);
            return f = u(o, "script"),
            f.length > 0 && dt(f, !c && u(n, "script")),
            f = s = h = null,
            o
        },
        buildFragment: function(n, t, r, f) {
            for (var h, o, w, s, y, p, v, b = n.length, a = ur(t), c = [], l = 0; b > l; l++)
                if (o = n[l],
                o || 0 === o)
                    if ("object" === i.type(o))
                        i.merge(c, o.nodeType ? [o] : o);
                    else if (ao.test(o)) {
                        for (s = s || a.appendChild(t.createElement("div")),
                        y = (pu.exec(o) || ["", ""])[1].toLowerCase(),
                        v = e[y] || e._default,
                        s.innerHTML = v[1] + o.replace(ku, "<$1></$2>") + v[2],
                        h = v[0]; h--; )
                            s = s.lastChild;
                        if (!i.support.leadingWhitespace && ei.test(o) && c.push(t.createTextNode(ei.exec(o)[0])),
                        !i.support.tbody)
                            for (o = "table" !== y || wu.test(o) ? "<table>" !== v[1] || wu.test(o) ? 0 : s : s.firstChild,
                            h = o && o.childNodes.length; h--; )
                                i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                        for (i.merge(c, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = a.lastChild
                    } else
                        c.push(t.createTextNode(o));
            for (s && a.removeChild(s),
            i.support.appendChecked || i.grep(u(c, "input"), wo),
            l = 0; o = c[l++]; )
                if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o),
                s = u(a.appendChild(o), "script"),
                w && dt(s),
                r))
                    for (h = 0; o = s[h++]; )
                        tf.test(o.type || "") && r.push(o);
            return s = null,
            a
        },
        cleanData: function(n, t) {
            for (var r, s, u, e, c = 0, f = i.expando, h = i.cache, a = i.support.deleteExpando, l = i.event.special; null != (r = n[c]); c++)
                if ((t || i.acceptData(r)) && (u = r[f],
                e = u && h[u])) {
                    if (e.events)
                        for (s in e.events)
                            l[s] ? i.event.remove(r, s) : i.removeEvent(r, s, e.handle);
                    h[u] && (delete h[u],
                    a ? delete r[f] : typeof r.removeAttribute !== o ? r.removeAttribute(f) : r[f] = null,
                    tt.push(u))
                }
        },
        _evalUrl: function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }),
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var r = i(this)
                  , t = r.contents();
                t.length ? t.wrapAll(n) : r.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ft, l, w, ui = /alpha\([^)]*\)/i, ro = /opacity\s*=\s*([^)]*)/, uo = /^(top|right|bottom|left)$/, io = /^(none|table(?!-c[ea]).+)/, lr = /^margin/, no = RegExp("^(" + pt + ")(.*)$", "i"), et = RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"), to = RegExp("^([+-])=(" + pt + ")", "i"), cr = {
        BODY: "block"
    }, so = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, vr = {
        letterSpacing: 0,
        fontWeight: 400
    }, p = ["Top", "Right", "Bottom", "Left"], hr = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                var e, s, o = {}, f = 0;
                if (i.isArray(r)) {
                    for (s = l(n),
                    e = r.length; e > f; f++)
                        o[r[f]] = i.css(n, r[f], !1, s);
                    return o
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function() {
            return or(this, !0)
        },
        hide: function() {
            return or(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                rt(this) ? i(this).show() : i(this).hide()
            })
        }
    }),
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = w(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var s, h, e, o = i.camelCase(r), c = n.style;
                if (r = i.cssProps[o] || (i.cssProps[o] = er(c, o)),
                e = i.cssHooks[r] || i.cssHooks[o],
                u === t)
                    return e && "get"in e && (s = e.get(n, !1, f)) !== t ? s : c[r];
                if (h = typeof u,
                "string" === h && (s = to.exec(u)) && (u = (s[1] + 1) * s[2] + parseFloat(i.css(n, r)),
                h = "number"),
                !(null == u || "number" === h && isNaN(u) || ("number" !== h || i.cssNumber[o] || (u += "px"),
                i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"),
                e && "set"in e && (u = e.set(n, u, f)) === t)))
                    try {
                        c[r] = u
                    } catch (l) {}
            }
        },
        css: function(n, r, u, f) {
            var h, e, o, s = i.camelCase(r);
            return r = i.cssProps[s] || (i.cssProps[s] = er(n.style, s)),
            o = i.cssHooks[r] || i.cssHooks[s],
            o && "get"in o && (e = o.get(n, !0, u)),
            e === t && (e = w(n, r, f)),
            "normal" === e && r in vr && (e = vr[r]),
            "" === u || u ? (h = parseFloat(e),
            u === !0 || i.isNumeric(h) ? h || 0 : e) : e
        }
    }),
    n.getComputedStyle ? (l = function(t) {
        return n.getComputedStyle(t, null)
    }
    ,
    w = function(n, r, u) {
        var c, s, h, o = u || l(n), e = o ? o.getPropertyValue(r) || o[r] : t, f = n.style;
        return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)),
        et.test(e) && lr.test(r) && (c = f.width,
        s = f.minWidth,
        h = f.maxWidth,
        f.minWidth = f.maxWidth = f.width = e,
        e = o.width,
        f.width = c,
        f.minWidth = s,
        f.maxWidth = h)),
        e
    }
    ) : r.documentElement.currentStyle && (l = function(n) {
        return n.currentStyle
    }
    ,
    w = function(n, i, r) {
        var h, e, o, s = r || l(n), u = s ? s[i] : t, f = n.style;
        return null == u && f && f[i] && (u = f[i]),
        et.test(u) && !uo.test(i) && (h = f.left,
        e = n.runtimeStyle,
        o = e && e.left,
        o && (e.left = n.currentStyle.left),
        f.left = "fontSize" === i ? "1em" : u,
        u = f.pixelLeft + "px",
        f.left = h,
        o && (e.left = o)),
        "" === u ? "auto" : u
    }
    ),
    i.each(["height", "width"], function(n, r) {
        i.cssHooks[r] = {
            get: function(n, u, f) {
                return u ? 0 === n.offsetWidth && io.test(i.css(n, "display")) ? i.swap(n, so, function() {
                    return yr(n, r, f)
                }) : yr(n, r, f) : t
            },
            set: function(n, t, u) {
                var f = u && l(n);
                return wr(n, t, u ? kr(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
            }
        }
    }),
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return ro.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , f = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , u = f && f.filter || r.filter || "";
            r.zoom = 1,
            (t >= 1 || "" === t) && "" === i.trim(u.replace(ui, "")) && r.removeAttribute && (r.removeAttribute("filter"),
            "" === t || f && !f.filter) || (r.filter = ui.test(u) ? u.replace(ui, e) : u + " " + e)
        }
    }),
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, r) {
                return r ? i.swap(n, {
                    display: "inline-block"
                }, w, [n, "marginRight"]) : t
            }
        }),
        !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, r) {
            i.cssHooks[r] = {
                get: function(n, u) {
                    return u ? (u = w(n, r),
                    et.test(u) ? i(n).position()[r] + "px" : u) : t
                }
            }
        })
    }),
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return 0 >= n.offsetWidth && 0 >= n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
    }
    ,
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    ),
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                    f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        },
        lr.test(n) || (i.cssHooks[n + t].set = wr)
    });
    var ho = /%20/g
      , oo = /\[\]$/
      , bi = /\r?\n/g
      , fo = /^(?:submit|button|image|reset|file)$/i
      , eo = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && eo.test(this.nodeName) && !fo.test(n) && (this.checked || !ni.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(bi, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(bi, "\r\n")
                }
            }).get()
        }
    }),
    i.param = function(n, r) {
        var f, u = [], e = function(n, t) {
            t = i.isFunction(t) ? t() : null == t ? "" : t,
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            });
        else
            for (f in n)
                hi(f, n[f], r, e);
        return u.join("&").replace(ho, "+")
    }
    ,
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    }),
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var y, h, li = i.now(), vi = /\?/, cf = /#.*$/, ki = /([?&])_=[^&]*/, bf = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, gf = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, df = /^(?:GET|HEAD)$/, yf = /^\/\//, sr = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, ar = i.fn.load, pr = {}, gt = {}, tr = "*/".concat("*");
    try {
        h = ve.href
    } catch (ns) {
        h = r.createElement("a"),
        h.href = "",
        h = h.href
    }
    y = sr.exec(h.toLowerCase()) || [],
    i.fn.load = function(n, r, u) {
        if ("string" != typeof n && ar)
            return ar.apply(this, arguments);
        var o, h, s, f = this, e = n.indexOf(" ");
        return e >= 0 && (o = n.slice(e, n.length),
        n = n.slice(0, e)),
        i.isFunction(r) ? (u = r,
        r = t) : r && "object" == typeof r && (s = "POST"),
        f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: r
        }).done(function(n) {
            h = arguments,
            f.html(o ? i("<div>").append(i.parseHTML(n)).find(o) : n)
        }).complete(u && function(n, t) {
            f.each(u, h || [n.responseText, t, n])
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: h,
            type: "GET",
            isLocal: gf.test(y[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tr,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ii(ii(n, i.ajaxSettings), t) : ii(i.ajaxSettings, n)
        },
        ajaxPrefilter: gu(pr),
        ajaxTransport: gu(gt),
        ajax: function(n, r) {
            function k(n, r, s, h) {
                var a, it, k, b, y, l = r;
                2 !== o && (o = 2,
                tt && clearTimeout(tt),
                p = t,
                g = h || "",
                f.readyState = n > 0 ? 4 : 0,
                a = n >= 200 && 300 > n || 304 === n,
                s && (b = pf(u, f, s)),
                b = wf(u, b, f, a),
                a ? (u.ifModified && (y = f.getResponseHeader("Last-Modified"),
                y && (i.lastModified[e] = y),
                y = f.getResponseHeader("etag"),
                y && (i.etag[e] = y)),
                204 === n || "HEAD" === u.type ? l = "nocontent" : 304 === n ? l = "notmodified" : (l = b.state,
                it = b.data,
                k = b.error,
                a = !k)) : (k = l,
                (n || !l) && (l = "error",
                0 > n && (n = 0))),
                f.status = n,
                f.statusText = (r || l) + "",
                a ? nt.resolveWith(c, [it, l, f]) : nt.rejectWith(c, [f, l, k]),
                f.statusCode(w),
                w = t,
                v && d.trigger(a ? "ajaxSuccess" : "ajaxError", [f, u, a ? it : k]),
                rt.fireWith(c, [f, l]),
                v && (d.trigger("ajaxComplete", [f, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (r = n,
            n = t),
            r = r || {};
            var l, a, e, g, tt, v, p, b, u = i.ajaxSetup({}, r), c = u.context || u, d = u.context && (c.nodeType || c.jquery) ? i(c) : i.event, nt = i.Deferred(), rt = i.Callbacks("once memory"), w = u.statusCode || {}, ut = {}, ft = {}, o = 0, it = "canceled", f = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (2 === o) {
                        if (!b)
                            for (b = {}; t = bf.exec(g); )
                                b[t[1].toLowerCase()] = t[2];
                        t = b[n.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === o ? g : null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return o || (n = ft[i] = ft[i] || n,
                    ut[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return o || (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (2 > o)
                            for (t in n)
                                w[t] = [w[t], n[t]];
                        else
                            f.always(n[f.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || it;
                    return p && p.abort(t),
                    k(0, t),
                    this
                }
            };
            if (nt.promise(f).complete = rt.add,
            f.success = f.done,
            f.error = f.fail,
            u.url = ((n || u.url || h) + "").replace(cf, "").replace(yf, y[1] + "//"),
            u.type = r.method || r.type || u.method || u.type,
            u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""],
            null == u.crossDomain && (l = sr.exec(u.url.toLowerCase()),
            u.crossDomain = !(!l || l[1] === y[1] && l[2] === y[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (y[3] || ("http:" === y[1] ? "80" : "443")))),
            u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)),
            du(pr, u, r, f),
            2 === o)
                return f;
            v = u.global,
            v && 0 == i.active++ && i.event.trigger("ajaxStart"),
            u.type = u.type.toUpperCase(),
            u.hasContent = !df.test(u.type),
            e = u.url,
            u.hasContent || (u.data && (e = u.url += (vi.test(e) ? "&" : "?") + u.data,
            delete u.data),
            u.cache === !1 && (u.url = ki.test(e) ? e.replace(ki, "$1_=" + li++) : e + (vi.test(e) ? "&" : "?") + "_=" + li++)),
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]),
            i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e])),
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType),
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + tr + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers)
                f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(c, f, u) === !1 || 2 === o))
                return f.abort();
            it = "abort";
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            })
                f[a](u[a]);
            if (p = du(gt, u, r, f)) {
                f.readyState = 1,
                v && d.trigger("ajaxSend", [f, u]),
                u.async && u.timeout > 0 && (tt = setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    o = 1,
                    p.send(ut, k)
                } catch (et) {
                    if (!(2 > o))
                        throw et;
                    k(-1, et)
                }
            } else
                k(-1, "No Transport");
            return f
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        }
    }),
    i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f,
            f = u,
            u = t),
            i.ajax({
                url: n,
                type: r,
                dataType: e,
                data: u,
                success: f
            })
        }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1),
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var u, f = r.head || i("head")[0] || r.documentElement;
            return {
                send: function(t, i) {
                    u = r.createElement("script"),
                    u.async = !0,
                    n.scriptCharset && (u.charset = n.scriptCharset),
                    u.src = n.url,
                    u.onload = u.onreadystatechange = function(n, t) {
                        (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null,
                        u.parentNode && u.parentNode.removeChild(u),
                        u = null,
                        t || i(200, "success"))
                    }
                    ,
                    f.insertBefore(u, f.firstChild)
                },
                abort: function() {
                    u && u.onload(t, !0)
                }
            }
        }
    }),
    oi = [],
    ht = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = oi.pop() || i.expando + "_" + li++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(r, u, f) {
        var e, s, o, h = r.jsonp !== !1 && (ht.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && ht.test(r.data) && "data");
        return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback,
        h ? r[h] = r[h].replace(ht, "$1" + e) : r.jsonp !== !1 && (r.url += (vi.test(r.url) ? "&" : "?") + r.jsonp + "=" + e),
        r.converters["script json"] = function() {
            return o || i.error(e + " was not called"),
            o[0]
        }
        ,
        r.dataTypes[0] = "json",
        s = n[e],
        n[e] = function() {
            o = arguments
        }
        ,
        f.always(function() {
            n[e] = s,
            r[e] && (r.jsonpCallback = u.jsonpCallback,
            oi.push(e)),
            o && i.isFunction(s) && s(o[0]),
            o = s = t
        }),
        "script") : t
    }),
    gr = 0,
    wt = n.ActiveXObject && function() {
        var n;
        for (n in d)
            d[n](t, !0)
    }
    ,
    i.ajaxSettings.xhr = n.ActiveXObject ? function() {
        return !this.isLocal && nu() || kf()
    }
    : nu,
    g = i.ajaxSettings.xhr(),
    i.support.cors = !!g && "withCredentials"in g,
    g = i.support.ajax = !!g,
    g && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var h, s, o = r.xhr();
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async),
                    r.xhrFields)
                        for (s in r.xhrFields)
                            o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType),
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f)
                            o.setRequestHeader(s, f[s])
                    } catch (c) {}
                    o.send(r.hasContent && r.data || null),
                    u = function(n, f) {
                        var s, a, l, c;
                        try {
                            if (u && (f || 4 === o.readyState))
                                if (u = t,
                                h && (o.onreadystatechange = i.noop,
                                wt && delete d[h]),
                                f)
                                    4 !== o.readyState && o.abort();
                                else {
                                    c = {},
                                    s = o.status,
                                    a = o.getAllResponseHeaders(),
                                    "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (y) {
                                        l = ""
                                    }
                                    s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                        } catch (v) {
                            f || e(-1, v)
                        }
                        c && e(s, l, c, a)
                    }
                    ,
                    r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++gr,
                    wt && (d || (d = {},
                    i(n).unload(wt)),
                    d[h] = u),
                    o.onreadystatechange = u) : u()
                },
                abort: function() {
                    u && u(t, !0)
                }
            }
        }
    });
    var k, ct, af = /^(?:toggle|show|hide)$/, tu = RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"), hf = /queueHooks$/, yt = [vf], ut = {
        "*": [function(n, t) {
            var f = this.createTween(n, t)
              , s = f.cur()
              , r = tu.exec(t)
              , o = r && r[3] || (i.cssNumber[n] ? "" : "px")
              , u = (i.cssNumber[n] || "px" !== o && +s) && tu.exec(i.css(f.elem, n))
              , e = 1
              , h = 20;
            if (u && u[3] !== o) {
                o = o || u[3],
                r = r || [],
                u = +s || 1;
                do
                    e = e || ".5",
                    u /= e,
                    i.style(f.elem, n, u + o);
                while (e !== (e = f.cur() / s) && 1 !== e && --h)
            }
            return r && (u = f.start = +u || +s || 0,
            f.unit = o,
            f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]),
            f
        }
        ]
    };
    i.Animation = i.extend(nf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++)
                r = n[u],
                ut[r] = ut[r] || [],
                ut[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? yt.unshift(n) : yt.push(n)
        }
    }),
    i.Tween = f,
    f.prototype = {
        constructor: f,
        init: function(n, t, r, u, f, e) {
            this.elem = n,
            this.prop = r,
            this.easing = f || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = u,
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = f.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n,
            this.now = (this.end - this.start) * r + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : f.propHooks._default.set(this),
            this
        }
    },
    f.prototype.init.prototype = f.prototype,
    f.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""),
                t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    },
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    },
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(st(t, !0), n, i, u)
        }
    }),
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(rt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n)
              , e = i.speed(t, r, u)
              , f = function() {
                var t = nf(this, i.extend({}, n), e);
                (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, r, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop,
                t(u)
            };
            return "string" != typeof n && (u = r,
            r = n,
            n = t),
            r && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = null != n && n + "queueHooks"
                  , e = i.timers
                  , r = i._data(this);
                if (t)
                    r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && hf.test(t) && f(r[t]);
                for (t = e.length; t--; )
                    e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u),
                    o = !1,
                    e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this), u = f[n + "queue"], e = f[n + "queueHooks"], r = i.timers, o = u ? u.length : 0;
                for (f.finish = !0,
                i.queue(this, n, []),
                e && e.stop && e.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === n && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; o > t; t++)
                    u[t] && u[t].finish && u[t].finish.call(this);
                delete f.finish
            })
        }
    }),
    i.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    }),
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (null == u.queue || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this),
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ,
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    },
    i.timers = [],
    i.fx = f.prototype.init,
    i.fx.tick = function() {
        var u, r = i.timers, n = 0;
        for (k = i.now(); r.length > n; n++)
            u = r[n],
            u() || r[n] !== u || r.splice(n--, 1);
        r.length || i.fx.stop(),
        k = t
    }
    ,
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && i.fx.start()
    }
    ,
    i.fx.interval = 13,
    i.fx.start = function() {
        ct || (ct = setInterval(i.fx.tick, i.fx.interval))
    }
    ,
    i.fx.stop = function() {
        clearInterval(ct),
        ct = null
    }
    ,
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    i.fx.step = {},
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ),
    i.fn.offset = function(n) {
        if (arguments.length)
            return n === t ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
        var r, s, f = {
            top: 0,
            left: 0
        }, u = this[0], e = u && u.ownerDocument;
        if (e)
            return r = e.documentElement,
            i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()),
            s = ef(e),
            {
                top: f.top + (s.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                left: f.left + (s.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
            }) : f
    }
    ,
    i.offset = {
        setOffset: function(n, t, r) {
            var s = i.css(n, "position");
            "static" === s && (n.style.position = "relative");
            var h = i(n), c = h.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = ("absolute" === s || "fixed" === s) && i.inArray("auto", [l, a]) > -1, u = {}, e = {}, f, o;
            v ? (e = h.position(),
            f = e.top,
            o = e.left) : (f = parseFloat(l) || 0,
            o = parseFloat(a) || 0),
            i.isFunction(t) && (t = t.call(n, r, c)),
            null != t.top && (u.top = t.top - c.top + f),
            null != t.left && (u.left = t.left - c.left + o),
            "using"in t ? t.using.call(n, u) : h.css(u)
        }
    },
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var t, u, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === i.css(r, "position") ? u = r.getBoundingClientRect() : (t = this.offsetParent(),
                u = this.offset(),
                i.nodeName(t[0], "html") || (n = t.offset()),
                n.top += i.css(t[0], "borderTopWidth", !0),
                n.left += i.css(t[0], "borderLeftWidth", !0)),
                {
                    top: u.top - n.top - i.css(r, "marginTop", !0),
                    left: u.left - n.left - i.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || hu; n && !i.nodeName(n, "html") && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || hu
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this, function(n, f, e) {
                var o = ef(n);
                return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e,
                t)
            }, n, f, arguments.length, null)
        }
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var s = arguments.length && (u || "boolean" != typeof f)
                  , o = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement,
                    Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, o) : i.style(r, u, f, o)
                }, r, s ? f : t, s, null)
            }
        })
    }),
    i.fn.size = function() {
        return this.length
    }
    ,
    i.fn.andSelf = i.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = i : (n.jQuery = n.$ = i,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }))
}
)(window),
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
function(n, t, i) {
    function r(i) {
        var r = t.console;
        o[i] || (o[i] = !0,
        n.migrateWarnings.push(i),
        r && r.warn && !n.migrateMute && (r.warn("JQMIGRATE: " + i),
        n.migrateTrace && r.trace && r.trace()))
    }
    function e(t, u, f, e) {
        if (Object.defineProperty)
            try {
                return Object.defineProperty(t, u, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(e),
                        f
                    },
                    set: function(n) {
                        r(e),
                        f = n
                    }
                }),
                i
            } catch (o) {}
        n._definePropertyBroken = !0,
        t[u] = f
    }
    var o = {}, l, h, a;
    n.migrateWarnings = [],
    !n.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"),
    n.migrateTrace === i && (n.migrateTrace = !0),
    n.migrateReset = function() {
        o = {},
        n.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var s = n("<input/>", {
        size: 1
    }).attr("size") && n.attrFn
      , k = n.attr
      , rt = n.attrHooks.value && n.attrHooks.value.get || function() {
        return null
    }
      , tt = n.attrHooks.value && n.attrHooks.value.set || function() {
        return i
    }
      , g = /^(?:input|button)$/i
      , nt = /^[238]$/
      , ft = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
      , et = /^(?:checked|selected)$/i;
    e(n, "attrFn", s || {}, "jQuery.attrFn is deprecated"),
    n.attr = function(t, u, f, e) {
        var o = u.toLowerCase()
          , h = t && t.nodeType;
        return e && (4 > k.length && r("jQuery.fn.attr( props, pass ) is deprecated"),
        t && !nt.test(h) && (s ? u in s : n.isFunction(n.fn[u]))) ? n(t)[u](f) : ("type" === u && f !== i && g.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"),
        !n.attrHooks[o] && ft.test(o) && (n.attrHooks[o] = {
            get: function(t, r) {
                var f, u = n.prop(t, r);
                return u === !0 || "boolean" != typeof u && (f = t.getAttributeNode(r)) && f.nodeValue !== !1 ? r.toLowerCase() : i
            },
            set: function(t, i, r) {
                var u;
                return i === !1 ? n.removeAttr(t, r) : (u = n.propFix[r] || r,
                u in t && (t[u] = !0),
                t.setAttribute(r, r.toLowerCase())),
                r
            }
        },
        et.test(o) && r("jQuery.fn.attr('" + o + "') may use property instead of attribute")),
        k.call(n, t, u, f))
    }
    ,
    n.attrHooks.value = {
        get: function(n, t) {
            var i = (n.nodeName || "").toLowerCase();
            return "button" === i ? rt.apply(this, arguments) : ("input" !== i && "option" !== i && r("jQuery.fn.attr('value') no longer gets properties"),
            t in n ? n.value : null)
        },
        set: function(n, t) {
            var u = (n.nodeName || "").toLowerCase();
            return "button" === u ? tt.apply(this, arguments) : ("input" !== u && "option" !== u && r("jQuery.fn.attr('value', val) no longer sets properties"),
            n.value = t,
            i)
        }
    };
    var f, u, d = n.fn.init, ot = n.parseJSON, it = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    n.fn.init = function(t, i, u) {
        var f;
        return t && "string" == typeof t && !n.isPlainObject(i) && (f = it.exec(n.trim(t))) && f[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"),
        f[3] && r("$(html) HTML text after last tag is ignored"),
        "#" === f[0].charAt(0) && (r("HTML string cannot start with a '#' character"),
        n.error("JQMIGRATE: Invalid selector string (XSS)")),
        i && i.context && (i = i.context),
        n.parseHTML) ? d.call(this, n.parseHTML(f[2], i, !0), i, u) : d.apply(this, arguments)
    }
    ,
    n.fn.init.prototype = n.fn,
    n.parseJSON = function(n) {
        return n || null === n ? ot.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"),
        null)
    }
    ,
    n.uaMatch = function(n) {
        n = n.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || 0 > n.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    }
    ,
    n.browser || (f = n.uaMatch(navigator.userAgent),
    u = {},
    f.browser && (u[f.browser] = !0,
    u.version = f.version),
    u.chrome ? u.webkit = !0 : u.webkit && (u.safari = !0),
    n.browser = u),
    e(n, "browser", n.browser, "jQuery.browser is deprecated"),
    n.sub = function() {
        function t(n, i) {
            return new t.fn.init(n,i)
        }
        n.extend(!0, t, this),
        t.superclass = this,
        t.fn = t.prototype = this(),
        t.fn.constructor = t,
        t.sub = this.sub,
        t.fn.init = function(r, u) {
            return u && u instanceof n && !(u instanceof t) && (u = t(u)),
            n.fn.init.call(this, r, u, i)
        }
        ,
        t.fn.init.prototype = t.fn;
        var i = t(document);
        return r("jQuery.sub() is deprecated"),
        t
    }
    ,
    n.ajaxSetup({
        converters: {
            "text json": n.parseJSON
        }
    }),
    l = n.fn.data,
    n.fn.data = function(t) {
        var e, u, f = this[0];
        return !f || "events" !== t || 1 !== arguments.length || (e = n.data(f, t),
        u = n._data(f, t),
        e !== i && e !== u || u === i) ? l.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"),
        u)
    }
    ,
    h = /\/(java|ecma)script/i,
    a = n.fn.andSelf || n.fn.addBack,
    n.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        a.apply(this, arguments)
    }
    ,
    n.clean || (n.clean = function(t, u, f, e) {
        u = u || document,
        u = !u.nodeType && u[0] || u,
        u = u.ownerDocument || u,
        r("jQuery.clean() is deprecated");
        var c, o, l, a, s = [];
        if (n.merge(s, n.buildFragment(t, u).childNodes),
        f)
            for (l = function(n) {
                return !n.type || h.test(n.type) ? e ? e.push(n.parentNode ? n.parentNode.removeChild(n) : n) : f.appendChild(n) : i
            }
            ,
            c = 0; null != (o = s[c]); c++)
                n.nodeName(o, "script") && l(o) || (f.appendChild(o),
                o.getElementsByTagName !== i && (a = n.grep(n.merge([], o.getElementsByTagName("script")), l),
                s.splice.apply(s, [c + 1, 0].concat(a)),
                c += a.length));
        return s
    }
    );
    var ct = n.event.add
      , ht = n.event.remove
      , st = n.event.trigger
      , ut = n.fn.toggle
      , w = n.fn.live
      , b = n.fn.die
      , p = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess"
      , v = RegExp("\\b(?:" + p + ")\\b")
      , y = /(?:^|\s)hover(\.\S+|)\b/
      , c = function(t) {
        return "string" != typeof t || n.event.special.hover ? t : (y.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),
        t && t.replace(y, "mouseenter$1 mouseleave$1"))
    };
    n.event.props && "attrChange" !== n.event.props[0] && n.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    n.event.dispatch && e(n.event, "handle", n.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    n.event.add = function(n, t, i, u, f) {
        n !== document && v.test(t) && r("AJAX events should be attached to document: " + t),
        ct.call(this, n, c(t || ""), i, u, f)
    }
    ,
    n.event.remove = function(n, t, i, r, u) {
        ht.call(this, n, c(t) || "", i, r, u)
    }
    ,
    n.fn.error = function() {
        var n = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"),
        n.splice(0, 0, "error"),
        arguments.length ? this.bind.apply(this, n) : (this.triggerHandler.apply(this, n),
        this)
    }
    ,
    n.fn.toggle = function(t, i) {
        if (!n.isFunction(t) || !n.isFunction(i))
            return ut.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var f = arguments
          , o = t.guid || n.guid++
          , u = 0
          , e = function(i) {
            var r = (n._data(this, "lastToggle" + t.guid) || 0) % u;
            return n._data(this, "lastToggle" + t.guid, r + 1),
            i.preventDefault(),
            f[r].apply(this, arguments) || !1
        };
        for (e.guid = o; f.length > u; )
            f[u++].guid = o;
        return this.click(e)
    }
    ,
    n.fn.live = function(t, i, u) {
        return r("jQuery.fn.live() is deprecated"),
        w ? w.apply(this, arguments) : (n(this.context).on(t, this.selector, i, u),
        this)
    }
    ,
    n.fn.die = function(t, i) {
        return r("jQuery.fn.die() is deprecated"),
        b ? b.apply(this, arguments) : (n(this.context).off(t, this.selector || "**", i),
        this)
    }
    ,
    n.event.trigger = function(n, t, i, u) {
        return i || v.test(n) || r("Global events are undocumented and deprecated"),
        st.call(this, n, t, i || document, u)
    }
    ,
    n.each(p.split("|"), function(t, i) {
        n.event.special[i] = {
            setup: function() {
                var t = this;
                return t !== document && (n.event.add(document, i + "." + n.guid, function() {
                    n.event.trigger(i, null, t, !0)
                }),
                n._data(this, i, n.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && n.event.remove(document, i + "." + n._data(this, i)),
                !1
            }
        }
    })
}(jQuery, window),
function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (this.length) {
                var i = n.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"),
                i = new n.validator(t,this[0]),
                n.data(this[0], "validator", i),
                i.settings.onsubmit && (t = this.find("input, button"),
                t.filter(".cancel").click(function() {
                    i.cancelSubmit = !0
                }),
                i.settings.submitHandler && t.filter(":submit").click(function() {
                    i.submitButton = this
                }),
                this.submit(function(t) {
                    function r() {
                        if (i.settings.submitHandler) {
                            if (i.submitButton)
                                var t = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
                            return i.settings.submitHandler.call(i, i.currentForm),
                            i.submitButton && t.remove(),
                            !1
                        }
                        return !0
                    }
                    return (i.settings.debug && t.preventDefault(),
                    i.cancelSubmit) ? (i.cancelSubmit = !1,
                    r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                    !1) : r() : (i.focusInvalid(),
                    !1)
                })),
                i)
            }
            t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (n(this[0]).is("form"))
                return this.validate().form();
            var t = !0
              , i = n(this[0].form).validate();
            return this.each(function() {
                t &= i.element(this)
            }),
            t
        },
        removeAttrs: function(t) {
            var r = {}
              , i = this;
            return n.each(t.split(/\s/), function(n, t) {
                r[t] = i.attr(t),
                i.removeAttr(t)
            }),
            r
        },
        rules: function(t, i) {
            var r = this[0], e;
            if (t) {
                var f = n.data(r.form, "validator").settings
                  , o = f.rules
                  , u = n.validator.staticRules(r);
                switch (t) {
                case "add":
                    n.extend(u, n.validator.normalizeRule(i)),
                    o[r.name] = u,
                    i.messages && (f.messages[r.name] = n.extend(f.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (e = {},
                    n.each(i.split(/\s/), function(n, t) {
                        e[t] = u[t],
                        delete u[t]
                    }),
                    e) : (delete o[r.name],
                    u)
                }
            }
            return r = n.validator.normalizeRules(n.extend({}, n.validator.metadataRules(r), n.validator.classRules(r), n.validator.attributeRules(r), n.validator.staticRules(r)), r),
            r.required && (f = r.required,
            delete r.required,
            r = n.extend({
                required: f
            }, r)),
            r
        }
    }),
    n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + t.value)
        },
        filled: function(t) {
            return !!n.trim("" + t.value)
        },
        unchecked: function(n) {
            return !n.checked
        }
    }),
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t),
        this.currentForm = i,
        this.init()
    }
    ,
    n.validator.format = function(t, i) {
        return arguments.length == 1 ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }
        : (arguments.length > 2 && i.constructor != Array && (i = n.makeArray(arguments).slice(1)),
        i.constructor != Array && (i = [i]),
        n.each(i, function(n, i) {
            t = t.replace(RegExp("\\{" + n + "\\}", "g"), i)
        }),
        t)
    }
    ,
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass),
                this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n) {
                (n.name in this.submitted || n == this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var i = n.data(this[0].form, "validator")
                      , r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var r, t;
                this.labelContainer = n(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm),
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset(),
                r = this.groups = {},
                n.each(this.settings.groups, function(t, i) {
                    n.each(i.split(/\s/), function(n, i) {
                        r[i] = t
                    })
                }),
                t = this.settings.rules,
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                }),
                n(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i),
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({}, this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)
                    this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                this.lastElement = t = this.validationTargetFor(this.clean(t)),
                this.prepareElement(t),
                this.currentElements = n(t);
                var i = this.check(t);
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                i
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t),
                    this.errorList = [];
                    for (var i in t)
                        this.errorList.push({
                            message: t[i],
                            element: this.findByName(i)[0]
                        });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0, i;
                for (i in n)
                    t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() == 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function(n) {
                    return n.element.name == t.name
                }).length == 1 && t
            },
            elements: function() {
                var i = this
                  , t = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return (!this.name && i.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in t || !i.objectLength(n(this).rules())) ? !1 : t[this.name] = !0
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                return n(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = n([]),
                this.toHide = n([]),
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset(),
                this.toHide = this.errorsFor(n)
            },
            check: function(t) {
                var f, e, u, i, r;
                t = this.validationTargetFor(this.clean(t)),
                f = n(t).rules(),
                e = !1;
                for (u in f) {
                    i = {
                        method: u,
                        parameters: f[u]
                    };
                    try {
                        if (r = n.validator.methods[u].call(this, t.value.replace(/\r/g, ""), t, i.parameters),
                        r == "dependency-mismatch")
                            e = !0;
                        else {
                            if (e = !1,
                            r == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(t));
                                return
                            }
                            if (!r)
                                return this.formatAndAdd(t, i),
                                !1
                        }
                    } catch (o) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + i.method + "' method", o);
                        throw o;
                    }
                }
                if (!e)
                    return this.objectLength(f) && this.successList.push(t),
                    !0
            },
            customMetaMessage: function(t, i) {
                if (n.metadata) {
                    var r = this.settings.meta ? n(t).metadata()[this.settings.meta] : n(t).metadata();
                    return r && r.messages && r.messages[i]
                }
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor == String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined)
                        return arguments[n]
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(n, t) {
                var i = this.defaultMessage(n, t.method)
                  , r = /\$?\{(\d+)\}/g;
                typeof i == "function" ? i = i.call(this, t.parameters, n) : r.test(i) && (i = jQuery.format(i.replace(r, "{$1}"), t.parameters)),
                this.errorList.push({
                    message: i,
                    element: n
                }),
                this.errorMap[n.name] = i,
                this.submitted[n.name] = i
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var t, n = 0; this.errorList[n]; n++)
                    t = this.errorList[n],
                    this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0,
                    t = this.validElements(); t[n]; n++)
                        this.settings.unhighlight.call(this, t[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                r.attr("generated") && r.html(i)) : (r = n("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(t),
                    generated: !0
                }).addClass(this.settings.errorClass).html(i || ""),
                this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t))),
                !i && this.settings.success && (r.text(""),
                typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r)),
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return n(this).attr("for") == i
                })
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]),
                n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                var i = this.currentForm;
                return n(document.getElementsByName(t)).map(function(n, r) {
                    return r.form == i && r.name == t && r || null
                })
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                return !n.validator.methods.required.call(this, n.trim(t.value), t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++,
                this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                i && this.pendingRequest == 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && this.pendingRequest == 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor == String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {};
            return (t = n(t).attr("class")) && n.each(t.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(t) {
            var r = {}, i, u;
            t = n(t);
            for (i in n.validator.methods)
                (u = i === "required" && typeof n.fn.prop == "function" ? t.prop(i) : t.attr(i)) ? r[i] = u : t[0].getAttribute("type") === i && (r[i] = !0);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        metadataRules: function(t) {
            if (!n.metadata)
                return {};
            var i = n.data(t.form, "validator").settings.meta;
            return i ? n(t).metadata()[i] : n(t).metadata()
        },
        staticRules: function(t) {
            var r = {}
              , i = n.data(t.form, "validator");
            return i.settings.rules && (r = n.validator.normalizeRule(i.settings.rules[t.name]) || {}),
            r
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1)
                    delete t[r];
                else if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }),
            n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }),
            n.each(["minlength", "maxlength", "min", "max"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"], function() {
                t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
            }),
            n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t.messages && delete t.messages,
            t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                }),
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i,
            n.validator.messages[t] = r != undefined ? r : n.validator.messages[t],
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i))
                    return "dependency-mismatch";
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return (t = n(i).val()) && t.length > 0;
                case "input":
                    if (this.checkable(i))
                        return this.getLength(t, i) > 0;
                default:
                    return n.trim(t).length > 0
                }
            },
            remote: function(t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i),
                this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                f.originalMessage = this.settings.messages[i.name].remote,
                this.settings.messages[i.name].remote = f.message,
                r = typeof r == "string" && {
                    url: r
                } || r,
                this.pending[i.name]) ? "pending" : f.old === t ? f.valid : (f.old = t,
                u = this,
                this.startRequest(i),
                e = {},
                e[i.name] = t,
                n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function(r) {
                        var o, e;
                        u.settings.messages[i.name].remote = f.originalMessage,
                        o = r === !0,
                        o ? (e = u.formSubmitted,
                        u.prepareElement(i),
                        u.formSubmitted = e,
                        u.successList.push(i),
                        u.showErrors()) : (e = {},
                        r = r || u.defaultMessage(i, "remote"),
                        e[i.name] = f.message = n.isFunction(r) ? r(t) : r,
                        u.showErrors(e)),
                        f.valid = o,
                        u.stopRequest(i, o)
                    }
                }, r)),
                "pending")
            },
            minlength: function(t, i, r) {
                return this.optional(i) || this.getLength(n.trim(t), i) >= r
            },
            maxlength: function(t, i, r) {
                return this.optional(i) || this.getLength(n.trim(t), i) <= r
            },
            rangelength: function(t, i, r) {
                return t = this.getLength(n.trim(t), i),
                this.optional(i) || t >= r[0] && t <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            email: function(n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n))
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                var r;
                if (this.optional(t))
                    return "dependency-mismatch";
                if (/[^0-9 -]+/.test(n))
                    return !1;
                var f = 0
                  , i = 0
                  , u = !1;
                for (n = n.replace(/\D/g, ""),
                r = n.length - 1; r >= 0; r--)
                    i = n.charAt(r),
                    i = parseInt(i, 10),
                    u && (i *= 2) > 9 && (i -= 9),
                    f += i,
                    u = !u;
                return f % 10 == 0
            },
            accept: function(n, t, i) {
                return i = typeof i == "string" ? i.replace(/,/g, "|") : "png|jpe?g|gif",
                this.optional(t) || n.match(RegExp(".(" + i + ")$", "i"))
            },
            equalTo: function(t, i, r) {
                return r = n(r).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    n(i).valid()
                }),
                t == r.val()
            }
        }
    }),
    n.format = n.validator.format
}(jQuery),
function(n) {
    var t = {}, i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        i = n.port,
        n.mode == "abort" && (t[i] && t[i].abort(),
        t[i] = r)
    }) : (i = n.ajax,
    n.ajax = function(r) {
        var u = ("port"in r ? r : n.ajaxSettings).port;
        return ("mode"in r ? r : n.ajaxSettings).mode == "abort" ? (t[u] && t[u].abort(),
        t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
    }
    )
}(jQuery),
function(n) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, i) {
        function r(t) {
            return t = n.event.fix(t),
            t.type = i,
            n.event.handle.call(this, t)
        }
        n.event.special[i] = {
            setup: function() {
                this.addEventListener(t, r, !0)
            },
            teardown: function() {
                this.removeEventListener(t, r, !0)
            },
            handler: function(t) {
                return arguments[0] = n.event.fix(t),
                arguments[0].type = i,
                n.event.handle.apply(this, arguments)
            }
        }
    }),
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i, function(i) {
                var u = n(i.target);
                if (u.is(t))
                    return r.apply(u, arguments)
            })
        }
    })
}(jQuery),
function(n) {
    function i(n, t, i) {
        n.rules[t] = i,
        n.message && (n.messages[t] = n.message)
    }
    function c(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }
    function f(n) {
        return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }
    function o(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }
    function e(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)),
        n
    }
    function a(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']")
          , u = n.parseJSON(r.attr("data-valmsg-replace")) !== !1;
        r.removeClass("field-validation-valid").addClass("field-validation-error"),
        t.data("unobtrusiveContainer", r),
        u ? (r.empty(),
        t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }
    function v(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]")
          , r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(),
        u.addClass("validation-summary-errors").removeClass("validation-summary-valid"),
        n.each(i.errorList, function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }
    function l(t) {
        var i = t.data("unobtrusiveContainer")
          , r = n.parseJSON(i.attr("data-valmsg-replace"));
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"),
        t.removeData("unobtrusiveContainer"),
        r && i.empty())
    }
    function h() {
        var t = n(this);
        t.data("validator").resetForm(),
        t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"),
        t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
    }
    function s(t) {
        var i = n(t)
          , r = i.data(u)
          , f = n.proxy(h, t);
        return r || (r = {
            options: {
                errorClass: "input-validation-error",
                errorElement: "span",
                errorPlacement: n.proxy(a, t),
                invalidHandler: n.proxy(v, t),
                messages: {},
                rules: {},
                success: n.proxy(l, t)
            },
            attachValidation: function() {
                i.unbind("reset." + u, f).bind("reset." + u, f).validate(this.options)
            },
            validate: function() {
                return i.validate(),
                i.valid()
            }
        },
        i.data(u, r)),
        r
    }
    var r = n.validator, t, u = "unobtrusiveValidation";
    r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var f = n(t), e = f.parents("form")[0], r, u, o;
            e && (r = s(e),
            r.options.rules[t.name] = u = {},
            r.options.messages[t.name] = o = {},
            n.each(this.adapters, function() {
                var i = "data-val-" + this.name
                  , s = f.attr(i)
                  , r = {};
                s !== undefined && (i += "-",
                n.each(this.params, function() {
                    r[this] = f.attr(i + this)
                }),
                this.adapt({
                    element: t,
                    form: e,
                    message: s,
                    params: r,
                    rules: u,
                    messages: o
                }))
            }),
            n.extend(u, {
                __dummy__: !0
            }),
            !i && r.attachValidation())
        },
        parse: function(t) {
            var i = n(t).parents("form").andSelf().add(n(t).find("form")).filter("form");
            n(t).find(":input[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            }),
            i.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    },
    t = r.unobtrusive.adapters,
    t.add = function(n, t, i) {
        return i || (i = t,
        t = []),
        this.push({
            name: n,
            params: t,
            adapt: i
        }),
        this
    }
    ,
    t.addBool = function(n, t) {
        return this.add(n, function(r) {
            i(r, t || n, !0)
        })
    }
    ,
    t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function(n) {
            var e = n.params.min
              , f = n.params.max;
            e && f ? i(n, u, [e, f]) : e ? i(n, t, e) : f && i(n, r, f)
        })
    }
    ,
    t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"], function(u) {
            i(u, r || n, u.params[t])
        })
    }
    ,
    r.addMethod("__dummy__", function() {
        return !0
    }),
    r.addMethod("regex", function(n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n),
        r && r.index === 0 && r[0].length === n.length)
    }),
    r.addMethod("nonalphamin", function(n, t, i) {
        var r;
        return i && (r = n.match(/\W/g),
        r = r && r.length >= i),
        r
    }),
    t.addSingleVal("accept", "exts").addSingleVal("regex", "pattern"),
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"),
    t.add("equalto", ["other"], function(t) {
        var s = o(t.element.name)
          , h = t.params.other
          , r = e(h, s)
          , u = n(t.form).find(":input[name='" + f(r) + "']")[0];
        i(t, "equalTo", u)
    }),
    t.add("required", function(n) {
        (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
    }),
    t.add("remote", ["url", "type", "additionalfields"], function(t) {
        var r = {
            url: t.params.url,
            type: t.params.type || "GET",
            data: {}
        }
          , u = o(t.element.name);
        n.each(c(t.params.additionalfields || t.element.name), function(i, o) {
            var s = e(o, u);
            r.data[s] = function() {
                return n(t.form).find(":input[name='" + f(s) + "']").val()
            }
        }),
        i(t, "remote", r)
    }),
    t.add("password", ["min", "nonalphamin", "regex"], function(n) {
        n.params.min && i(n, "minlength", n.params.min),
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin),
        n.params.regex && i(n, "regex", n.params.regex)
    }),
    n(function() {
        r.unobtrusive.parse(document)
    })
}(jQuery),
function(n, t) {
    function i(t, i) {
        var e, o, u, f = t.nodeName.toLowerCase();
        return "area" === f ? (e = t.parentNode,
        o = e.name,
        !t.href || !o || e.nodeName.toLowerCase() !== "map") ? !1 : (u = n("img[usemap=#" + o + "]")[0],
        !!u && r(u)) : (/input|select|textarea|button|object/.test(f) ? !t.disabled : "a" === f ? t.href || i : i) && r(t)
    }
    function r(t) {
        return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function() {
            return n.css(this, "visibility") === "hidden"
        }).length
    }
    var u = 0
      , f = /^ui-id-\d+$/;
    n.ui = n.ui || {},
    n.extend(n.ui, {
        version: "1.10.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    n.fn.extend({
        focus: function(t) {
            return function(i, r) {
                return typeof i == "number" ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        n(t).focus(),
                        r && r.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(n.fn.focus),
        scrollParent: function() {
            var t;
            return t = n.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(n.css(this, "position")) && /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? n(document) : t
        },
        zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var r = n(this[0]), f, u; r.length && r[0] !== document; ) {
                    if (f = r.css("position"),
                    (f === "absolute" || f === "relative" || f === "fixed") && (u = parseInt(r.css("zIndex"), 10),
                    !isNaN(u) && u !== 0))
                        return u;
                    r = r.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++u)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                f.test(this.id) && n(this).removeAttr("id")
            })
        }
    }),
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var u = n.attr(t, "tabindex")
              , r = isNaN(u);
            return (r || u >= 0) && i(t, !r)
        }
    }),
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(i, r) {
        function e(t, i, r, u) {
            return n.each(o, function() {
                i -= parseFloat(n.css(t, "padding" + this)) || 0,
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0),
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
          , f = r.toLowerCase()
          , u = {
            innerWidth: n.fn.innerWidth,
            innerHeight: n.fn.innerHeight,
            outerWidth: n.fn.outerWidth,
            outerHeight: n.fn.outerHeight
        };
        n.fn["inner" + r] = function(i) {
            return i === t ? u["inner" + r].call(this) : this.each(function() {
                n(this).css(f, e(this, i) + "px")
            })
        }
        ,
        n.fn["outer" + r] = function(t, i) {
            return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function() {
                n(this).css(f, e(this, t, !0, i) + "px")
            })
        }
    }),
    n.fn.addBack || (n.fn.addBack = function(n) {
        return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
    }
    ),
    n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
        }
    }(n.fn.removeData)),
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    n.support.selectstart = "onselectstart"in document.createElement("div"),
    n.fn.extend({
        disableSelection: function() {
            return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
                n.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    n.extend(n.ui, {
        plugin: {
            add: function(t, i, r) {
                var u, f = n.ui[t].prototype;
                for (u in r)
                    f.plugins[u] = f.plugins[u] || [],
                    f.plugins[u].push([i, r[u]])
            },
            call: function(n, t, i) {
                var r, u = n.plugins[t];
                if (u && n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11)
                    for (r = 0; r < u.length; r++)
                        n.options[u[r][0]] && u[r][1].apply(n.element, i)
            }
        },
        hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden")
                return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop"
              , u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1,
            u = t[r] > 0,
            t[r] = 0,
            u)
        }
    })
}(jQuery),
function(n, t) {
    var u = 0
      , i = Array.prototype.slice
      , r = n.cleanData;
    n.cleanData = function(t) {
        for (var u = 0, i; (i = t[u]) != null; u++)
            try {
                n(i).triggerHandler("remove")
            } catch (f) {}
        r(t)
    }
    ,
    n.widget = function(t, i, r) {
        var s, e, u, o, h = {}, f = t.split(".")[0];
        t = t.split(".")[1],
        s = f + "-" + t,
        r || (r = i,
        i = n.Widget),
        n.expr[":"][s.toLowerCase()] = function(t) {
            return !!n.data(t, s)
        }
        ,
        n[f] = n[f] || {},
        e = n[f][t],
        u = n[f][t] = function(n, t) {
            if (!this._createWidget)
                return new u(n,t);
            arguments.length && this._createWidget(n, t)
        }
        ,
        n.extend(u, e, {
            version: r.version,
            _proto: n.extend({}, r),
            _childConstructors: []
        }),
        o = new i,
        o.options = n.widget.extend({}, o.options),
        n.each(r, function(t, r) {
            if (!n.isFunction(r)) {
                h[t] = r;
                return
            }
            h[t] = function() {
                var u = function() {
                    return i.prototype[t].apply(this, arguments)
                }
                  , n = function(n) {
                    return i.prototype[t].apply(this, n)
                };
                return function() {
                    var i = this._super, f = this._superApply, t;
                    return this._super = u,
                    this._superApply = n,
                    t = r.apply(this, arguments),
                    this._super = i,
                    this._superApply = f,
                    t
                }
            }()
        }),
        u.prototype = n.widget.extend(o, {
            widgetEventPrefix: e ? o.widgetEventPrefix : t
        }, h, {
            constructor: u,
            namespace: f,
            widgetName: t,
            widgetFullName: s
        }),
        e ? (n.each(e._childConstructors, function(t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }),
        delete e._childConstructors) : i._childConstructors.push(u),
        n.widget.bridge(t, u)
    }
    ,
    n.widget.extend = function(r) {
        for (var o = i.call(arguments, 1), e = 0, s = o.length, u, f; e < s; e++)
            for (u in o[e])
                f = o[e][u],
                o[e].hasOwnProperty(u) && f !== t && (r[u] = n.isPlainObject(f) ? n.isPlainObject(r[u]) ? n.widget.extend({}, r[u], f) : n.widget.extend({}, f) : f);
        return r
    }
    ,
    n.widget.bridge = function(r, u) {
        var f = u.prototype.widgetFullName || r;
        n.fn[r] = function(e) {
            var h = typeof e == "string"
              , o = i.call(arguments, 1)
              , s = this;
            return e = !h && o.length ? n.widget.extend.apply(null, [e].concat(o)) : e,
            h ? this.each(function() {
                var i, u = n.data(this, f);
                return u ? !n.isFunction(u[e]) || e.charAt(0) === "_" ? n.error("no such method '" + e + "' for " + r + " widget instance") : (i = u[e].apply(u, o),
                i !== u && i !== t ? (s = i && i.jquery ? s.pushStack(i.get()) : i,
                !1) : void 0) : n.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + e + "'")
            }) : this.each(function() {
                var t = n.data(this, f);
                t ? t.option(e || {})._init() : n.data(this, f, new u(e,this))
            }),
            s
        }
    }
    ,
    n.Widget = function() {}
    ,
    n.Widget._childConstructors = [],
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = n(i || this.defaultElement || this)[0],
            this.element = n(i),
            this.uuid = u++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t),
            this.bindings = n(),
            this.hoverable = n(),
            this.focusable = n(),
            i !== this && (n.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(n) {
                    n.target === i && this.destroy()
                }
            }),
            this.document = n(i.style ? i.ownerDocument : i.document || i),
            this.window = n(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: n.noop,
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: n.noop,
        widget: function() {
            return this.element
        },
        option: function(i, r) {
            var o = i, u, f, e;
            if (arguments.length === 0)
                return n.widget.extend({}, this.options);
            if (typeof i == "string")
                if (o = {},
                u = i.split("."),
                i = u.shift(),
                u.length) {
                    for (f = o[i] = n.widget.extend({}, this.options[i]),
                    e = 0; e < u.length - 1; e++)
                        f[u[e]] = f[u[e]] || {},
                        f = f[u[e]];
                    if (i = u.pop(),
                    r === t)
                        return f[i] === t ? null : f[i];
                    f[i] = r
                } else {
                    if (r === t)
                        return this.options[i] === t ? null : this.options[i];
                    o[i] = r
                }
            return this._setOptions(o),
            this
        },
        _setOptions: function(n) {
            var t;
            for (t in n)
                this._setOption(t, n[t]);
            return this
        },
        _setOption: function(n, t) {
            return this.options[n] = t,
            n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, i, r) {
            var f, u = this;
            typeof t != "boolean" && (r = i,
            i = t,
            t = !1),
            r ? (i = f = n(i),
            this.bindings = this.bindings.add(i)) : (r = i,
            i = this.element,
            f = this.widget()),
            n.each(r, function(r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled"))
                        return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                }
                typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var c = r.match(/^(\w+)\s*(.*)$/)
                  , h = c[1] + u.eventNamespace
                  , s = c[2];
                s ? f.delegate(s, h, o) : i.bind(h, o)
            })
        },
        _off: function(n, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            n.unbind(t).undelegate(t)
        },
        _delay: function(n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    n(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    n(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    n(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    n(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, r) {
            var f, u, e = this.options[t];
            if (r = r || {},
            i = n.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            u = i.originalEvent,
            u)
                for (f in u)
                    f in i || (i[f] = u[f]);
            return this.element.trigger(i, r),
            !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    },
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        n.Widget.prototype["_" + t] = function(r, u, f) {
            typeof u == "string" && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
            u = u || {},
            typeof u == "number" && (u = {
                duration: u
            }),
            o = !n.isEmptyObject(u),
            u.complete = f,
            u.delay && r.delay(u.delay),
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                n(this)[t](),
                f && f.call(r[0]),
                i()
            })
        }
    })
}(jQuery),
function(n) {
    var i = !1;
    n(document).mouseup(function() {
        i = !1
    }),
    n.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))
                    return n.removeData(i.target, t.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!i) {
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var r = this
                  , f = t.which === 1
                  , u = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                return !f || u || !this._mouseCapture(t) ? !0 : (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1,
                !this._mouseStarted)) ? (t.preventDefault(),
                !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(n) {
                    return r._mouseMove(n)
                }
                ,
                this._mouseUpDelegate = function(n) {
                    return r._mouseUp(n)
                }
                ,
                n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                i = !0,
                !0)
            }
        },
        _mouseMove: function(t) {
            return n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(n) {
    var u = 0
      , i = {}
      , r = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide",
    r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "show",
    n.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = n(),
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
            t.collapsible || t.active !== !1 && t.active != null || (t.active = 0),
            this._processPanels(),
            t.active < 0 && (t.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : n(),
                content: this.active.length ? this.active.next() : n()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers),
            this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),
            this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var n;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            this._destroyIcons(),
            n = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            this.options.heightStyle !== "content" && n.css("height", "")
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            n === "event" && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(t)),
            this._super(n, t),
            n !== "collapsible" || t || this.options.active !== !1 || this._activate(0),
            n === "icons" && (this._destroyIcons(),
            t && this._createIcons()),
            n === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode
                  , u = this.headers.length
                  , f = this.headers.index(t.target)
                  , r = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    r = this.headers[(f + 1) % u];
                    break;
                case i.LEFT:
                case i.UP:
                    r = this.headers[(f - 1 + u) % u];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    r = this.headers[0];
                    break;
                case i.END:
                    r = this.headers[u - 1]
                }
                r && (n(t.target).attr("tabIndex", -1),
                n(r).attr("tabIndex", 0),
                r.focus(),
                t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t = this.options;
            this._processPanels(),
            (t.active !== !1 || t.collapsible !== !0) && this.headers.length ? t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1,
            this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active) : (t.active = !1,
            this.active = n()),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var t, i = this.options, f = i.heightStyle, e = this.element.parent(), r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++u);
            this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this.headers.attr("role", "tab").each(function(t) {
                var f = n(this)
                  , u = f.attr("id")
                  , e = f.next()
                  , i = e.attr("id");
                u || (u = r + "-header-" + t,
                f.attr("id", u)),
                i || (i = r + "-panel-" + t,
                e.attr("id", i)),
                f.attr("aria-controls", i),
                e.attr("aria-labelledby", u)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            f === "fill" ? (t = e.height(),
            this.element.siblings(":visible").each(function() {
                var r = n(this)
                  , i = r.css("position");
                i !== "absolute" && i !== "fixed" && (t -= r.outerHeight(!0))
            }),
            this.headers.each(function() {
                t -= n(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : f === "auto" && (t = 0,
            this.headers.next().each(function() {
                t = Math.max(t, n(this).css("height", "").height())
            }).height(t))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return typeof t == "number" ? this.headers.eq(t) : n()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var i = this.options
              , u = this.active
              , r = n(t.currentTarget)
              , f = r[0] === u[0]
              , e = f && i.collapsible
              , s = e ? n() : r.next()
              , h = u.next()
              , o = {
                oldHeader: u,
                oldPanel: h,
                newHeader: e ? n() : r,
                newPanel: s
            };
            (t.preventDefault(),
            (!f || i.collapsible) && this._trigger("beforeActivate", t, o) !== !1) && (i.active = e ? !1 : this.headers.index(r),
            this.active = f ? n() : r,
            this._toggle(o),
            u.removeClass("ui-accordion-header-active ui-state-active"),
            i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),
            f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
            i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),
            r.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var r = t.newPanel
              , i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = r,
            this.prevHide = i,
            this.options.animate ? this._animate(r, i, t) : (i.hide(),
            r.show(),
            this._toggleComplete(t)),
            i.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            i.prev().attr("aria-selected", "false"),
            r.length && i.length ? i.prev().attr("tabIndex", -1) : r.length && this.headers.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1),
            r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(n, t, u) {
            var a, e, f, l = this, c = 0, v = n.length && (!t.length || n.index() < t.index()), s = this.options.animate || {}, o = v && s.down || s, h = function() {
                l._toggleComplete(u)
            };
            if (typeof o == "number" && (f = o),
            typeof o == "string" && (e = o),
            e = e || o.easing || s.easing,
            f = f || o.duration || s.duration,
            !t.length)
                return n.animate(r, f, e, h);
            if (!n.length)
                return t.animate(i, f, e, h);
            a = n.show().outerHeight(),
            t.animate(i, {
                duration: f,
                easing: e,
                step: function(n, t) {
                    t.now = Math.round(n)
                }
            }),
            n.hide().animate(r, {
                duration: f,
                easing: e,
                complete: h,
                step: function(n, i) {
                    i.now = Math.round(n),
                    i.prop !== "height" ? c += i.now : l.options.heightStyle !== "content" && (i.now = Math.round(a - t.outerHeight() - c),
                    c = 0)
                }
            })
        },
        _toggleComplete: function(n) {
            var t = n.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
            t.length && (t.parent()[0].className = t.parent()[0].className),
            this._trigger("activate", null, n)
        }
    })
}(jQuery),
function(n) {
    function r(n) {
        return parseInt(n, 10) || 0
    }
    function i(n) {
        return !isNaN(parseInt(n, 10))
    }
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, f, u, i, o, r = this, t = this.options;
            if (this.element.addClass("ui-resizable"),
            n.extend(this, {
                _aspectRatio: !!t.aspectRatio,
                aspectRatio: t.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")),
            this.elementIsWrapper = !0,
            this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }),
            this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css({
                margin: this.originalElement.css("margin")
            }),
            this._proportionallyResize()),
            this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this.handles.constructor === String)
                for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                e = this.handles.split(","),
                this.handles = {},
                f = 0; f < e.length; f++)
                    u = n.trim(e[f]),
                    o = "ui-resizable-" + u,
                    i = n("<div class='ui-resizable-handle " + o + "'></div>"),
                    i.css({
                        zIndex: t.zIndex
                    }),
                    "se" === u && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                    this.handles[u] = ".ui-resizable-" + u,
                    this.element.append(i);
            this._renderAxis = function(t) {
                var i, r, f, u;
                t = t || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String && (this.handles[i] = n(this.handles[i], this.element).show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element),
                    u = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(),
                    f = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    t.css(f, u),
                    this._proportionallyResize()),
                    !n(this.handles[i]).length
            }
            ,
            this._renderAxis(this.element),
            this._handles = n(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                r.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                r.axis = i && i[1] ? i[1] : "se")
            }),
            t.autoHide && (this._handles.hide(),
            n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"),
                r._handles.show())
            }).mouseleave(function() {
                t.disabled || r.resizing || (n(this).addClass("ui-resizable-autohide"),
                r._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            t = this.element,
            this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t),
            t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var u, i, r = !1;
            for (u in this.handles)
                i = n(this.handles[u])[0],
                (i === t.target || n.contains(i, t.target)) && (r = !0);
            return !this.options.disabled && r
        },
        _mouseStart: function(t) {
            var e, f, o, u = this.options, s = this.element.position(), i = this.element;
            return this.resizing = !0,
            /absolute/.test(i.css("position")) ? i.css({
                position: "absolute",
                top: i.css("top"),
                left: i.css("left")
            }) : i.is(".ui-draggable") && i.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }),
            this._renderProxy(),
            e = r(this.helper.css("left")),
            f = r(this.helper.css("top")),
            u.containment && (e += n(u.containment).scrollLeft() || 0,
            f += n(u.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: e,
                top: f
            },
            this.size = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.originalPosition = {
                left: e,
                top: f
            },
            this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            o = n(".ui-resizable-" + this.axis).css("cursor"),
            n("body").css("cursor", o === "auto" ? this.axis + "-resize" : o),
            i.addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var r, c = this.helper, i = {}, f = this.originalMousePosition, l = this.axis, s = this.position.top, v = this.position.left, a = this.size.width, o = this.size.height, e = t.pageX - f.left || 0, h = t.pageY - f.top || 0, u = this._change[l];
            return u ? (r = u.apply(this, [t, e, h]),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (r = this._updateRatio(r, t)),
            r = this._respectSize(r, t),
            this._updateCache(r),
            this._propagate("resize", t),
            this.position.top !== s && (i.top = this.position.top + "px"),
            this.position.left !== v && (i.left = this.position.left + "px"),
            this.size.width !== a && (i.width = this.size.width + "px"),
            this.size.height !== o && (i.height = this.size.height + "px"),
            c.css(i),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            n.isEmptyObject(i) || this._trigger("resize", t, this.ui()),
            !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var r, u, s, o, h, c, f, e = this.options, i = this;
            return this._helper && (r = this._proportionallyResizeElements,
            u = r.length && /textarea/i.test(r[0].nodeName),
            s = u && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
            o = u ? 0 : i.sizeDiff.width,
            h = {
                width: i.helper.width() - o,
                height: i.helper.height() - s
            },
            c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
            f = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null,
            e.animate || this.element.css(n.extend(h, {
                top: f,
                left: c
            })),
            i.helper.height(i.size.height),
            i.helper.width(i.size.width),
            this._helper && !e.animate && this._proportionallyResize()),
            n("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(n) {
            var u, e, f, o, t, r = this.options;
            t = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : Infinity,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : Infinity
            },
            (this._aspectRatio || n) && (u = t.minHeight * this.aspectRatio,
            f = t.minWidth / this.aspectRatio,
            e = t.maxHeight * this.aspectRatio,
            o = t.maxWidth / this.aspectRatio,
            u > t.minWidth && (t.minWidth = u),
            f > t.minHeight && (t.minHeight = f),
            e < t.maxWidth && (t.maxWidth = e),
            o < t.maxHeight && (t.maxHeight = o)),
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            this.offset = this.helper.offset(),
            i(n.left) && (this.position.left = n.left),
            i(n.top) && (this.position.top = n.top),
            i(n.height) && (this.size.height = n.height),
            i(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var r = this.position
              , t = this.size
              , u = this.axis;
            return i(n.height) ? n.width = n.height * this.aspectRatio : i(n.width) && (n.height = n.width / this.aspectRatio),
            u === "sw" && (n.left = r.left + (t.width - n.width),
            n.top = null),
            u === "nw" && (n.top = r.top + (t.height - n.height),
            n.left = r.left + (t.width - n.width)),
            n
        },
        _respectSize: function(n) {
            var t = this._vBoundaries
              , h = this.axis
              , s = i(n.width) && t.maxWidth && t.maxWidth < n.width
              , l = i(n.height) && t.maxHeight && t.maxHeight < n.height
              , c = i(n.width) && t.minWidth && t.minWidth > n.width
              , o = i(n.height) && t.minHeight && t.minHeight > n.height
              , u = this.originalPosition.left + this.originalSize.width
              , r = this.position.top + this.size.height
              , e = /sw|nw|w/.test(h)
              , f = /nw|ne|n/.test(h);
            return c && (n.width = t.minWidth),
            o && (n.height = t.minHeight),
            s && (n.width = t.maxWidth),
            l && (n.height = t.maxHeight),
            c && e && (n.left = u - t.minWidth),
            s && e && (n.left = u - t.maxWidth),
            o && f && (n.top = r - t.minHeight),
            l && f && (n.top = r - t.maxHeight),
            n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null,
            n
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, r, f, n, u = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                    if (n = this._proportionallyResizeElements[i],
                    !this.borderDif)
                        for (this.borderDif = [],
                        r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                        f = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")],
                        t = 0; t < r.length; t++)
                            this.borderDif[t] = (parseInt(r[t], 10) || 0) + (parseInt(f[t], 10) || 0);
                    n.css({
                        height: u.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: u.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function() {
            var i = this.element
              , t = this.options;
            this.elementOffset = i.offset(),
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'></div>"),
            this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++t.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var r = this.originalSize
                  , i = this.originalPosition;
                return {
                    left: i.left + t,
                    width: r.width - t
                }
            },
            n: function(n, t, i) {
                var u = this.originalSize
                  , r = this.originalPosition;
                return {
                    top: r.top + i,
                    height: u.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]),
            t !== "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).data("ui-resizable")
              , o = i.options
              , r = i._proportionallyResizeElements
              , e = r.length && /textarea/i.test(r[0].nodeName)
              , s = e && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height
              , h = e ? 0 : i.sizeDiff.width
              , c = {
                width: i.size.width - h,
                height: i.size.height - s
            }
              , u = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
              , f = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, f && u ? {
                top: f,
                left: u
            } : {}), {
                duration: o.animateDuration,
                easing: o.animateEasing,
                step: function() {
                    var u = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    }),
                    i._updateCache(u),
                    i._propagate("resize", t)
                }
            })
        }
    }),
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var u, e, o, l, h, s, c, t = n(this).data("ui-resizable"), a = t.options, v = t.element, f = a.containment, i = f instanceof n ? f.get(0) : /parent/.test(f) ? v.parent().get(0) : f;
            i && (t.containerElement = n(i),
            /document/.test(f) || f === document ? (t.containerOffset = {
                left: 0,
                top: 0
            },
            t.containerPosition = {
                left: 0,
                top: 0
            },
            t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (u = n(i),
            e = [],
            n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
                e[n] = r(u.css("padding" + t))
            }),
            t.containerOffset = u.offset(),
            t.containerPosition = u.position(),
            t.containerSize = {
                height: u.innerHeight() - e[3],
                width: u.innerWidth() - e[1]
            },
            o = t.containerOffset,
            l = t.containerSize.height,
            h = t.containerSize.width,
            s = n.ui.hasScroll(i, "left") ? i.scrollWidth : h,
            c = n.ui.hasScroll(i) ? i.scrollHeight : l,
            t.parentData = {
                element: i,
                left: o.left,
                top: o.top,
                width: s,
                height: c
            }))
        },
        resize: function(t) {
            var f, o, h, c, i = n(this).data("ui-resizable"), a = i.options, r = i.containerOffset, s = i.position, e = i._aspectRatio || t.shiftKey, u = {
                top: 0,
                left: 0
            }, l = i.containerElement;
            l[0] !== document && /static/.test(l.css("position")) && (u = r),
            s.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left),
            e && (i.size.height = i.size.width / i.aspectRatio),
            i.position.left = a.helper ? r.left : 0),
            s.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top),
            e && (i.size.width = i.size.height * i.aspectRatio),
            i.position.top = i._helper ? r.top : 0),
            i.offset.left = i.parentData.left + i.position.left,
            i.offset.top = i.parentData.top + i.position.top,
            f = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width),
            o = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height),
            h = i.containerElement.get(0) === i.element.parent().get(0),
            c = /relative|absolute/.test(i.containerElement.css("position")),
            h && c && (f -= i.parentData.left),
            f + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - f,
            e && (i.size.height = i.size.width / i.aspectRatio)),
            o + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - o,
            e && (i.size.width = i.size.height * i.aspectRatio))
        },
        stop: function() {
            var t = n(this).data("ui-resizable")
              , o = t.options
              , e = t.containerOffset
              , h = t.containerPosition
              , s = t.containerElement
              , i = n(t.helper)
              , u = i.offset()
              , r = i.outerWidth() - t.sizeDiff.width
              , f = i.outerHeight() - t.sizeDiff.height;
            t._helper && !o.animate && /relative/.test(s.css("position")) && n(this).css({
                left: u.left - h.left - e.left,
                width: r,
                height: f
            }),
            t._helper && !o.animate && /static/.test(s.css("position")) && n(this).css({
                left: u.left - h.left - e.left,
                width: r,
                height: f
            })
        }
    }),
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var r = n(this).data("ui-resizable")
              , t = r.options
              , i = function(t) {
                n(t).each(function() {
                    var t = n(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            typeof t.alsoResize != "object" || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0],
            i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
                i(n)
            })
        },
        resize: function(t, i) {
            var r = n(this).data("ui-resizable")
              , u = r.options
              , o = r.originalSize
              , e = r.originalPosition
              , s = {
                height: r.size.height - o.height || 0,
                width: r.size.width - o.width || 0,
                top: r.position.top - e.top || 0,
                left: r.position.left - e.left || 0
            }
              , f = function(t, r) {
                n(t).each(function() {
                    var u = n(this)
                      , e = n(this).data("ui-resizable-alsoresize")
                      , t = {}
                      , f = r && r.length ? r : u.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    n.each(f, function(n, i) {
                        var r = (e[i] || 0) + (s[i] || 0);
                        r && r >= 0 && (t[i] = r || null)
                    }),
                    u.css(t)
                })
            };
            typeof u.alsoResize != "object" || u.alsoResize.nodeType ? f(u.alsoResize) : n.each(u.alsoResize, function(n, t) {
                f(n, t)
            })
        },
        stop: function() {
            n(this).removeData("resizable-alsoresize")
        }
    }),
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).data("ui-resizable")
              , r = t.options
              , i = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof r.ghost == "string" ? r.ghost : ""),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    n.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = n(this).data("ui-resizable")
              , i = t.options
              , v = t.size
              , s = t.originalSize
              , o = t.originalPosition
              , l = t.axis
              , c = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid
              , f = c[0] || 1
              , e = c[1] || 1
              , a = Math.round((v.width - s.width) / f) * f
              , h = Math.round((v.height - s.height) / e) * e
              , r = s.width + a
              , u = s.height + h
              , w = i.maxWidth && i.maxWidth < r
              , b = i.maxHeight && i.maxHeight < u
              , y = i.minWidth && i.minWidth > r
              , p = i.minHeight && i.minHeight > u;
            i.grid = c,
            y && (r = r + f),
            p && (u = u + e),
            w && (r = r - f),
            b && (u = u - e),
            /^(se|s|e)$/.test(l) ? (t.size.width = r,
            t.size.height = u) : /^(ne)$/.test(l) ? (t.size.width = r,
            t.size.height = u,
            t.position.top = o.top - h) : /^(sw)$/.test(l) ? (t.size.width = r,
            t.size.height = u,
            t.position.left = o.left - a) : (t.size.width = r,
            t.size.height = u,
            t.position.top = o.top - h,
            t.position.left = o.left - a)
        }
    })
}(jQuery),
foolproof = function() {}
,
foolproof.is = function(n, t, i, r) {
    if (r) {
        var e = function(n) {
            return n == null || n == undefined || n == ""
        }
          , f = e(n)
          , u = e(i);
        if (f && !u || u && !f)
            return !0
    }
    var h = function(n) {
        return +n == n && n.length > 0
    }
      , s = function(n) {
        var t = new RegExp(/(?=\d)^(?:(?!(?:10\D(?:0?[5-9]|1[0-4])\D(?:1582))|(?:0?9\D(?:0?[3-9]|1[0-3])\D(?:1752)))((?:0?[13578]|1[02])|(?:0?[469]|11)(?!\/31)(?!-31)(?!\.31)|(?:0?2(?=.?(?:(?:29.(?!000[04]|(?:(?:1[^0-6]|[2468][^048]|[3579][^26])00))(?:(?:(?:\d\d)(?:[02468][048]|[13579][26])(?!\x20BC))|(?:00(?:42|3[0369]|2[147]|1[258]|09)\x20BC))))))|(?:0?2(?=.(?:(?:\d\D)|(?:[01]\d)|(?:2[0-8])))))([-.\/])(0?[1-9]|[12]\d|3[01])\2(?!0000)((?=(?:00(?:4[0-5]|[0-3]?\d)\x20BC)|(?:\d{4}(?!\x20BC)))\d{4}(?:\x20BC)?)(?:$|(?=\x20\d)\x20))?((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})?$/);
        return t.test(n)
    }
      , o = function(n) {
        return n === !0 || n === !1 || n === "true" || n === "false"
    };
    s(n) ? (n = Date.parse(n),
    i = Date.parse(i)) : o(n) ? (n == "false" && (n = !1),
    i == "false" && (i = !1),
    n = !!n,
    i = !!i) : h(n) && (n = parseFloat(n),
    i = parseFloat(i));
    switch (t) {
    case "EqualTo":
        if (n == i)
            return !0;
        break;
    case "NotEqualTo":
        if (n != i)
            return !0;
        break;
    case "GreaterThan":
        if (n > i)
            return !0;
        break;
    case "LessThan":
        if (n < i)
            return !0;
        break;
    case "GreaterThanOrEqualTo":
        if (n >= i)
            return !0;
        break;
    case "LessThanOrEqualTo":
        if (n <= i)
            return !0;
        break;
    case "RegExMatch":
        return new RegExp(i).test(n);
    case "NotRegExMatch":
        return !new RegExp(i).test(n)
    }
    return !1
}
,
foolproof.getId = function(n, t) {
    var i = n.id.lastIndexOf("_") + 1;
    return n.id.substr(0, i) + t.replace(/\./g, "_")
}
,
foolproof.getName = function(n, t) {
    var i = n.name.lastIndexOf(".") + 1;
    return n.name.substr(0, i) + t
}
,
function() {
    jQuery.validator.addMethod("is", function(n, t, i) {
        var f = foolproof.getId(t, i.dependentproperty)
          , e = i.operator
          , r = i.passonnull
          , u = document.getElementById(f).value;
        return foolproof.is(n, e, u, r) ? !0 : !1
    }),
    jQuery.validator.addMethod("requiredif", function(n, t, i) {
        var s = foolproof.getName(t, i.dependentproperty), o = i.dependentvalue, h = i.operator, e = i.pattern, r = document.getElementsByName(s), u = null, f;
        if (r.length > 1) {
            for (f = 0; f != r.length; f++)
                if (r[f].checked) {
                    u = r[f].value;
                    break
                }
            u == null && (u = !1)
        } else
            u = r[0].value;
        if (foolproof.is(u, h, o))
            if (e == null) {
                if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "")
                    return !0
            } else
                return new RegExp(e).test(n);
        else
            return !0;
        return !1
    }),
    jQuery.validator.addMethod("requiredifempty", function(n, t, i) {
        var u = foolproof.getId(t, i.dependentproperty)
          , r = document.getElementById(u).value;
        if (r == null || r.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") == "") {
            if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "")
                return !0
        } else
            return !0;
        return !1
    }),
    jQuery.validator.addMethod("requiredifnotempty", function(n, t, i) {
        var u = foolproof.getId(t, i.dependentproperty)
          , r = document.getElementById(u).value;
        if (r != null && r.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "") {
            if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "")
                return !0
        } else
            return !0;
        return !1
    });
    var t = function(n, t, i) {
        n.rules[t] = i,
        n.message && (n.messages[t] = n.message)
    }
      , n = $.validator.unobtrusive;
    n.adapters.add("requiredif", ["dependentproperty", "dependentvalue", "operator", "pattern"], function(n) {
        var i = {
            dependentproperty: n.params.dependentproperty,
            dependentvalue: n.params.dependentvalue,
            operator: n.params.operator,
            pattern: n.params.pattern
        };
        t(n, "requiredif", i)
    }),
    n.adapters.add("is", ["dependentproperty", "operator", "passonnull"], function(n) {
        t(n, "is", {
            dependentproperty: n.params.dependentproperty,
            operator: n.params.operator,
            passonnull: n.params.passonnull
        })
    }),
    n.adapters.add("requiredifempty", ["dependentproperty"], function(n) {
        t(n, "requiredifempty", {
            dependentproperty: n.params.dependentproperty
        })
    }),
    n.adapters.add("requiredifnotempty", ["dependentproperty"], function(n) {
        t(n, "requiredifnotempty", {
            dependentproperty: n.params.dependentproperty
        })
    })
}(),
foolproof = function() {}
,
foolproof.is = function(n, t, i, r) {
    if (r) {
        var e = function(n) {
            return n == null || n == undefined || n == ""
        }
          , f = e(n)
          , u = e(i);
        if (f && !u || u && !f)
            return !0
    }
    var h = function(n) {
        return +n == n && n.length > 0
    }
      , s = function(n) {
        var t = new RegExp(/(?=\d)^(?:(?!(?:10\D(?:0?[5-9]|1[0-4])\D(?:1582))|(?:0?9\D(?:0?[3-9]|1[0-3])\D(?:1752)))((?:0?[13578]|1[02])|(?:0?[469]|11)(?!\/31)(?!-31)(?!\.31)|(?:0?2(?=.?(?:(?:29.(?!000[04]|(?:(?:1[^0-6]|[2468][^048]|[3579][^26])00))(?:(?:(?:\d\d)(?:[02468][048]|[13579][26])(?!\x20BC))|(?:00(?:42|3[0369]|2[147]|1[258]|09)\x20BC))))))|(?:0?2(?=.(?:(?:\d\D)|(?:[01]\d)|(?:2[0-8])))))([-.\/])(0?[1-9]|[12]\d|3[01])\2(?!0000)((?=(?:00(?:4[0-5]|[0-3]?\d)\x20BC)|(?:\d{4}(?!\x20BC)))\d{4}(?:\x20BC)?)(?:$|(?=\x20\d)\x20))?((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})?$/);
        return t.test(n)
    }
      , o = function(n) {
        return n === !0 || n === !1 || n === "true" || n === "false"
    };
    s(n) ? (n = Date.parse(n),
    i = Date.parse(i)) : o(n) ? (n == "false" && (n = !1),
    i == "false" && (i = !1),
    n = !!n,
    i = !!i) : h(n) && (n = parseFloat(n),
    i = parseFloat(i));
    switch (t) {
    case "EqualTo":
        if (n == i)
            return !0;
        break;
    case "NotEqualTo":
        if (n != i)
            return !0;
        break;
    case "GreaterThan":
        if (n > i)
            return !0;
        break;
    case "LessThan":
        if (n < i)
            return !0;
        break;
    case "GreaterThanOrEqualTo":
        if (n >= i)
            return !0;
        break;
    case "LessThanOrEqualTo":
        if (n <= i)
            return !0;
        break;
    case "RegExMatch":
        return new RegExp(i).test(n);
    case "NotRegExMatch":
        return !new RegExp(i).test(n)
    }
    return !1
}
,
foolproof.getId = function(n, t) {
    var i = n.id.lastIndexOf("_") + 1;
    return n.id.substr(0, i) + t.replace(/\./g, "_")
}
,
foolproof.getName = function(n, t) {
    var i = n.name.lastIndexOf(".") + 1;
    return n.name.substr(0, i) + t
}
,
__MVC_ApplyValidator_Unknown = function(n, t, i) {
    n[t] = i
}
,
jQuery.validator.addMethod("is", function(n, t, i) {
    var f = foolproof.getId(t, i.dependentproperty)
      , e = i.operator
      , r = i.passonnull
      , u = document.getElementById(f).value;
    return foolproof.is(n, e, u, r) ? !0 : !1
}),
jQuery.validator.addMethod("requiredif", function(n, t, i) {
    var s = foolproof.getName(t, i.dependentproperty), o = i.dependentvalue, h = i.operator, e = i.pattern, r = document.getElementsByName(s), u = null, f;
    if (r.length > 1) {
        for (f = 0; f != r.length; f++)
            if (r[f].checked) {
                u = r[f].value;
                break
            }
        u == null && (u = !1)
    } else
        u = r[0].value;
    if (foolproof.is(u, h, o))
        if (e == null) {
            if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "")
                return !0
        } else
            return new RegExp(e).test(n);
    else
        return !0;
    return !1
}),
jQuery.validator.addMethod("requiredifempty", function(n, t, i) {
    var u = foolproof.getId(t, i.dependentproperty)
      , r = document.getElementById(u).value;
    if (r == null || r.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") == "") {
        if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "")
            return !0
    } else
        return !0;
    return !1
}),
jQuery.validator.addMethod("requiredifnotempty", function(n, t, i) {
    var u = foolproof.getId(t, i.dependentproperty)
      , r = document.getElementById(u).value;
    if (r != null && r.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "") {
        if (n != null && n.toString().replace(/^\s\s*/, "").replace(/\s\s*$/, "") != "")
            return !0
    } else
        return !0;
    return !1
}),
function(n) {
    function t(t) {
        var r = n(t.currentTarget || t)
          , e = r.find(":selected")
          , i = r.next()
          , f = i.children(":first")
          , u = e.html() || "&nbsp;";
        f.html(u).parent().addClass("customSelectChanged"),
        setTimeout(function() {
            i.removeClass("customSelectOpen")
        }, 60)
    }
    n.fn.extend({
        MTBCustomSelect: function(i, r) {
            if (typeof document.body.style.maxHeight != "undefined") {
                var u = {
                    customClass: null,
                    mapClass: !0,
                    mapStyle: !0
                };
                return r = n.extend(u, r),
                this.each(function() {
                    var f = n(this)
                      , e = n('<span class="custom-select-inner" />')
                      , u = n('<span class="custom-select ' + i + '" />').append(e);
                    f.after(u),
                    r.customClass && u.addClass(r.customClass),
                    r.mapClass && u.addClass(f.attr("class")),
                    r.mapStyle && u.attr("style", f.attr("style")),
                    f.on("update", function() {
                        var i, n;
                        t(this),
                        i = parseInt(f.outerWidth(), 10) - (parseInt(u.outerWidth(), 10) - parseInt(u.width(), 10)),
                        u.css({
                            display: "inline-block"
                        }),
                        e.css({
                            display: "inline-block"
                        }),
                        n = u.outerHeight(),
                        f.css({
                            "-webkit-appearance": "menulist-button",
                            width: u.outerWidth(),
                            position: "absolute",
                            opacity: 0,
                            height: n,
                            fontSize: u.css("font-size")
                        })
                    }).on("change", t).on("keyup", function() {
                        f.blur(),
                        f.focus()
                    }).on("mousedown", function() {
                        u.toggleClass("customSelectOpen")
                    }).focus(function() {
                        u.addClass("customSelectFocus")
                    }).blur(function() {
                        u.removeClass("customSelectFocus customSelectOpen")
                    }).hover(function() {
                        u.addClass("customSelectHover")
                    }, function() {
                        u.removeClass("customSelectHover")
                    }).trigger("update")
                })
            }
        }
    })
}(jQuery),
function(n) {
    n.uniform = {
        options: {
            selectClass: "selector",
            radioClass: "radio",
            checkboxClass: "checker",
            fileClass: "uploader",
            filenameClass: "filename",
            fileBtnClass: "action",
            fileDefaultText: "No file selected",
            fileBtnText: "Choose File",
            checkedClass: "checked",
            focusClass: "focus",
            disabledClass: "disabled",
            buttonClass: "button",
            activeClass: "active",
            hoverClass: "hover",
            useID: !0,
            idPrefix: "uniform",
            resetSelector: !1,
            autoHide: !0
        },
        elements: []
    },
    n.support.selectOpacity = !0,
    n.fn.uniform = function(t) {
        function s(t) {
            $el = n(t),
            $el.addClass($el.attr("type")),
            i(t)
        }
        function o(t) {
            n(t).addClass("uniform"),
            i(t)
        }
        function f(r) {
            var u = n(r), f = n("<div>"), o = n("<span>"), e;
            f.addClass(t.buttonClass),
            t.useID && u.attr("id") != "" && f.attr("id", t.idPrefix + "-" + u.attr("id")),
            u.is("a") || u.is("button") ? e = u.text() : (u.is(":submit") || u.is(":reset") || u.is("input[type=button]")) && (e = u.attr("value")),
            e = e == "" ? u.is(":reset") ? "Reset" : "Submit" : e,
            o.html(e),
            u.css("opacity", 0),
            u.wrap(f),
            u.wrap(o),
            f = u.closest("div"),
            o = u.closest("span"),
            u.is(":disabled") && f.addClass(t.disabledClass),
            f.bind({
                "mouseenter.uniform": function() {
                    f.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function() {
                    f.removeClass(t.hoverClass),
                    f.removeClass(t.activeClass)
                },
                "mousedown.uniform touchbegin.uniform": function() {
                    f.addClass(t.activeClass)
                },
                "mouseup.uniform touchend.uniform": function() {
                    f.removeClass(t.activeClass)
                },
                "click.uniform touchend.uniform": function(t) {
                    if (n(t.target).is("span") || n(t.target).is("div"))
                        if (r[0].dispatchEvent) {
                            var i = document.createEvent("MouseEvents");
                            i.initEvent("click", !0, !0),
                            r[0].dispatchEvent(i)
                        } else
                            r[0].click()
                }
            }),
            r.bind({
                "focus.uniform": function() {
                    f.addClass(t.focusClass)
                },
                "blur.uniform": function() {
                    f.removeClass(t.focusClass)
                }
            }),
            n.uniform.noSelect(f),
            i(r)
        }
        function h(r) {
            var o = n(r), u = n("<div />"), f = n("<span />"), e;
            !o.css("display") == "none" && t.autoHide && u.hide(),
            u.addClass(t.selectClass),
            t.useID && r.attr("id") != "" && u.attr("id", t.idPrefix + "-" + r.attr("id")),
            e = r.find(":selected:first"),
            e.length == 0 && (e = r.find("option:first")),
            f.html(e.html()),
            r.css("opacity", 0),
            r.wrap(u),
            r.after(f),
            u = r.parent("div"),
            f = r.siblings("span"),
            r.bind({
                "change.uniform": function() {
                    f.html(r.find(":selected").html()),
                    u.removeClass(t.activeClass)
                },
                "focus.uniform": function() {
                    u.addClass(t.focusClass)
                },
                "blur.uniform": function() {
                    u.removeClass(t.focusClass),
                    u.removeClass(t.activeClass)
                },
                "mousedown.uniform touchbegin.uniform": function() {
                    u.addClass(t.activeClass)
                },
                "mouseup.uniform touchend.uniform": function() {
                    u.removeClass(t.activeClass)
                },
                "click.uniform touchend.uniform": function() {
                    u.removeClass(t.activeClass)
                },
                "mouseenter.uniform": function() {
                    u.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function() {
                    u.removeClass(t.hoverClass),
                    u.removeClass(t.activeClass)
                },
                "keyup.uniform": function() {
                    f.html(r.find(":selected").html())
                }
            }),
            n(r).attr("disabled") && u.addClass(t.disabledClass),
            n.uniform.noSelect(f),
            i(r)
        }
        function u(r) {
            var e = n(r)
              , u = n("<div />")
              , f = n("<span />");
            !e.css("display") == "none" && t.autoHide && u.hide(),
            u.addClass(t.checkboxClass),
            t.useID && r.attr("id") != "" && u.attr("id", t.idPrefix + "-" + r.attr("id")),
            n(r).wrap(u),
            n(r).wrap(f),
            f = r.parent(),
            u = f.parent(),
            n(r).css("opacity", 0).bind({
                "focus.uniform": function() {
                    u.addClass(t.focusClass)
                },
                "blur.uniform": function() {
                    u.removeClass(t.focusClass)
                },
                "click.uniform touchend.uniform": function() {
                    n(r).attr("checked") ? f.addClass(t.checkedClass) : f.removeClass(t.checkedClass)
                },
                "mousedown.uniform touchbegin.uniform": function() {
                    u.addClass(t.activeClass)
                },
                "mouseup.uniform touchend.uniform": function() {
                    u.removeClass(t.activeClass)
                },
                "mouseenter.uniform": function() {
                    u.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function() {
                    u.removeClass(t.hoverClass),
                    u.removeClass(t.activeClass)
                }
            }),
            n(r).attr("checked") && f.addClass(t.checkedClass),
            n(r).attr("disabled") && u.addClass(t.disabledClass),
            i(r)
        }
        function r(r) {
            var e = n(r)
              , u = n("<div />")
              , f = n("<span />");
            !e.css("display") == "none" && t.autoHide && u.hide(),
            u.addClass(t.radioClass),
            t.useID && r.attr("id") != "" && u.attr("id", t.idPrefix + "-" + r.attr("id")),
            n(r).wrap(u),
            n(r).wrap(f),
            f = r.parent(),
            u = f.parent(),
            n(r).css("opacity", 0).bind({
                "focus.uniform": function() {
                    u.addClass(t.focusClass)
                },
                "blur.uniform": function() {
                    u.removeClass(t.focusClass)
                },
                "click.uniform touchend.uniform": function() {
                    if (n(r).attr("checked")) {
                        var i = t.radioClass.split(" ")[0];
                        n("." + i + " span." + t.checkedClass + ":has([name='" + n(r).attr("name") + "'])").removeClass(t.checkedClass),
                        f.addClass(t.checkedClass)
                    } else
                        f.removeClass(t.checkedClass)
                },
                "mousedown.uniform touchend.uniform": function() {
                    n(r).is(":disabled") || u.addClass(t.activeClass)
                },
                "mouseup.uniform touchbegin.uniform": function() {
                    u.removeClass(t.activeClass)
                },
                "mouseenter.uniform touchend.uniform": function() {
                    u.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function() {
                    u.removeClass(t.hoverClass),
                    u.removeClass(t.activeClass)
                }
            }),
            n(r).attr("checked") && f.addClass(t.checkedClass),
            n(r).attr("disabled") && u.addClass(t.disabledClass),
            i(r)
        }
        function e(r) {
            var u = n(r), f = n("<div />"), e = n("<span>" + t.fileDefaultText + "</span>"), s = n("<span>" + t.fileBtnText + "</span>"), h, o;
            !u.css("display") == "none" && t.autoHide && f.hide(),
            f.addClass(t.fileClass),
            e.addClass(t.filenameClass),
            s.addClass(t.fileBtnClass),
            t.useID && u.attr("id") != "" && f.attr("id", t.idPrefix + "-" + u.attr("id")),
            u.wrap(f),
            u.after(s),
            u.after(e),
            f = u.closest("div"),
            e = u.siblings("." + t.filenameClass),
            s = u.siblings("." + t.fileBtnClass),
            u.attr("size") || (h = f.width(),
            u.attr("size", h / 10)),
            o = function() {
                var n = u.val();
                n === "" ? n = t.fileDefaultText : (n = n.split(/[\/\\]+/),
                n = n[n.length - 1]),
                e.text(n)
            }
            ,
            o(),
            u.css("opacity", 0).bind({
                "focus.uniform": function() {
                    f.addClass(t.focusClass)
                },
                "blur.uniform": function() {
                    f.removeClass(t.focusClass)
                },
                "mousedown.uniform": function() {
                    n(r).is(":disabled") || f.addClass(t.activeClass)
                },
                "mouseup.uniform": function() {
                    f.removeClass(t.activeClass)
                },
                "mouseenter.uniform": function() {
                    f.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function() {
                    f.removeClass(t.hoverClass),
                    f.removeClass(t.activeClass)
                }
            }),
            n.browser.msie ? u.bind("click.uniform.ie7", function() {
                setTimeout(o, 0)
            }) : u.bind("change.uniform", o),
            u.attr("disabled") && f.addClass(t.disabledClass),
            n.uniform.noSelect(e),
            n.uniform.noSelect(s),
            i(r)
        }
        function i(t) {
            t = n(t).get(),
            t.length > 1 ? n.each(t, function(t, i) {
                n.uniform.elements.push(i)
            }) : n.uniform.elements.push(t)
        }
        t = n.extend(n.uniform.options, t);
        var c = this;
        return t.resetSelector != !1 && n(t.resetSelector).mouseup(function() {
            function t() {
                n.uniform.update(c)
            }
            setTimeout(t, 10)
        }),
        n.uniform.restore = function(t) {
            t == undefined && (t = n(n.uniform.elements)),
            n(t).each(function() {
                n(this).is(":checkbox") ? n(this).unwrap().unwrap() : n(this).is("select") ? (n(this).siblings("span").remove(),
                n(this).unwrap()) : n(this).is(":radio") ? n(this).unwrap().unwrap() : n(this).is(":file") ? (n(this).siblings("span").remove(),
                n(this).unwrap()) : n(this).is("button, :submit, :reset, a, input[type='button']") && n(this).unwrap().unwrap(),
                n(this).unbind(".uniform"),
                n(this).css("opacity", "1");
                var i = n.inArray(n(t), n.uniform.elements);
                n.uniform.elements.splice(i, 1)
            })
        }
        ,
        n.uniform.noSelect = function(t) {
            function i() {
                return !1
            }
            n(t).each(function() {
                this.onselectstart = this.ondragstart = i,
                n(this).mousedown(i).css({
                    MozUserSelect: "none"
                })
            })
        }
        ,
        n.uniform.update = function(i) {
            i == undefined && (i = n(n.uniform.elements)),
            i = n(i),
            i.each(function() {
                var r = n(this), f, e, u;
                r.is("select") ? (f = r.siblings("span"),
                u = r.parent("div"),
                u.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass),
                f.html(r.find(":selected").html()),
                r.is(":disabled") ? u.addClass(t.disabledClass) : u.removeClass(t.disabledClass)) : r.is(":checkbox") ? (f = r.closest("span"),
                u = r.closest("div"),
                u.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass),
                f.removeClass(t.checkedClass),
                r.is(":checked") && f.addClass(t.checkedClass),
                r.is(":disabled") ? u.addClass(t.disabledClass) : u.removeClass(t.disabledClass)) : r.is(":radio") ? (f = r.closest("span"),
                u = r.closest("div"),
                u.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass),
                f.removeClass(t.checkedClass),
                r.is(":checked") && f.addClass(t.checkedClass),
                r.is(":disabled") ? u.addClass(t.disabledClass) : u.removeClass(t.disabledClass)) : r.is(":file") ? (u = r.parent("div"),
                e = r.siblings(t.filenameClass),
                btnTag = r.siblings(t.fileBtnClass),
                u.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass),
                e.text(r.val()),
                r.is(":disabled") ? u.addClass(t.disabledClass) : u.removeClass(t.disabledClass)) : (r.is(":submit") || r.is(":reset") || r.is("button") || r.is("a") || i.is("input[type=button]")) && (u = r.closest("div"),
                u.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass),
                r.is(":disabled") ? u.addClass(t.disabledClass) : u.removeClass(t.disabledClass))
            })
        }
        ,
        this.each(function() {
            if (n.support.selectOpacity) {
                var t = n(this);
                t.is("select") ? t.attr("multiple") != !0 && (t.attr("size") == undefined || t.attr("size") <= 1) && h(t) : t.is(":checkbox") ? u(t) : t.is(":radio") ? r(t) : t.is(":file") ? e(t) : t.is(":text, :password, input[type='email']") ? s(t) : t.is("textarea") ? o(t) : (t.is("a") || t.is(":submit") || t.is(":reset") || t.is("button") || t.is("input[type=button]")) && f(t)
            }
        })
    }
}(jQuery),
function(n, t) {
    function i(t, i) {
        var e, o, u, f = t.nodeName.toLowerCase();
        return "area" === f ? (e = t.parentNode,
        o = e.name,
        !t.href || !o || e.nodeName.toLowerCase() !== "map") ? !1 : (u = n("img[usemap=#" + o + "]")[0],
        !!u && r(u)) : (/input|select|textarea|button|object/.test(f) ? !t.disabled : "a" === f ? t.href || i : i) && r(t)
    }
    function r(t) {
        return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function() {
            return n.css(this, "visibility") === "hidden"
        }).length
    }
    var u = 0
      , f = /^ui-id-\d+$/;
    n.ui = n.ui || {},
    n.extend(n.ui, {
        version: "1.10.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    n.fn.extend({
        focus: function(t) {
            return function(i, r) {
                return typeof i == "number" ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        n(t).focus(),
                        r && r.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(n.fn.focus),
        scrollParent: function() {
            var t;
            return t = n.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(n.css(this, "position")) && /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? n(document) : t
        },
        zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var r = n(this[0]), f, u; r.length && r[0] !== document; ) {
                    if (f = r.css("position"),
                    (f === "absolute" || f === "relative" || f === "fixed") && (u = parseInt(r.css("zIndex"), 10),
                    !isNaN(u) && u !== 0))
                        return u;
                    r = r.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++u)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                f.test(this.id) && n(this).removeAttr("id")
            })
        }
    }),
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var u = n.attr(t, "tabindex")
              , r = isNaN(u);
            return (r || u >= 0) && i(t, !r)
        }
    }),
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(i, r) {
        function e(t, i, r, u) {
            return n.each(o, function() {
                i -= parseFloat(n.css(t, "padding" + this)) || 0,
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0),
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
          , f = r.toLowerCase()
          , u = {
            innerWidth: n.fn.innerWidth,
            innerHeight: n.fn.innerHeight,
            outerWidth: n.fn.outerWidth,
            outerHeight: n.fn.outerHeight
        };
        n.fn["inner" + r] = function(i) {
            return i === t ? u["inner" + r].call(this) : this.each(function() {
                n(this).css(f, e(this, i) + "px")
            })
        }
        ,
        n.fn["outer" + r] = function(t, i) {
            return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function() {
                n(this).css(f, e(this, t, !0, i) + "px")
            })
        }
    }),
    n.fn.addBack || (n.fn.addBack = function(n) {
        return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
    }
    ),
    n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
        }
    }(n.fn.removeData)),
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    n.support.selectstart = "onselectstart"in document.createElement("div"),
    n.fn.extend({
        disableSelection: function() {
            return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
                n.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    n.extend(n.ui, {
        plugin: {
            add: function(t, i, r) {
                var u, f = n.ui[t].prototype;
                for (u in r)
                    f.plugins[u] = f.plugins[u] || [],
                    f.plugins[u].push([i, r[u]])
            },
            call: function(n, t, i) {
                var r, u = n.plugins[t];
                if (u && n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11)
                    for (r = 0; r < u.length; r++)
                        n.options[u[r][0]] && u[r][1].apply(n.element, i)
            }
        },
        hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden")
                return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop"
              , u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1,
            u = t[r] > 0,
            t[r] = 0,
            u)
        }
    })
}(jQuery),
function(n, t) {
    var u = 0
      , i = Array.prototype.slice
      , r = n.cleanData;
    n.cleanData = function(t) {
        for (var u = 0, i; (i = t[u]) != null; u++)
            try {
                n(i).triggerHandler("remove")
            } catch (f) {}
        r(t)
    }
    ,
    n.widget = function(t, i, r) {
        var s, e, u, o, h = {}, f = t.split(".")[0];
        t = t.split(".")[1],
        s = f + "-" + t,
        r || (r = i,
        i = n.Widget),
        n.expr[":"][s.toLowerCase()] = function(t) {
            return !!n.data(t, s)
        }
        ,
        n[f] = n[f] || {},
        e = n[f][t],
        u = n[f][t] = function(n, t) {
            if (!this._createWidget)
                return new u(n,t);
            arguments.length && this._createWidget(n, t)
        }
        ,
        n.extend(u, e, {
            version: r.version,
            _proto: n.extend({}, r),
            _childConstructors: []
        }),
        o = new i,
        o.options = n.widget.extend({}, o.options),
        n.each(r, function(t, r) {
            if (!n.isFunction(r)) {
                h[t] = r;
                return
            }
            h[t] = function() {
                var u = function() {
                    return i.prototype[t].apply(this, arguments)
                }
                  , n = function(n) {
                    return i.prototype[t].apply(this, n)
                };
                return function() {
                    var i = this._super, f = this._superApply, t;
                    return this._super = u,
                    this._superApply = n,
                    t = r.apply(this, arguments),
                    this._super = i,
                    this._superApply = f,
                    t
                }
            }()
        }),
        u.prototype = n.widget.extend(o, {
            widgetEventPrefix: e ? o.widgetEventPrefix : t
        }, h, {
            constructor: u,
            namespace: f,
            widgetName: t,
            widgetFullName: s
        }),
        e ? (n.each(e._childConstructors, function(t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }),
        delete e._childConstructors) : i._childConstructors.push(u),
        n.widget.bridge(t, u)
    }
    ,
    n.widget.extend = function(r) {
        for (var o = i.call(arguments, 1), e = 0, s = o.length, u, f; e < s; e++)
            for (u in o[e])
                f = o[e][u],
                o[e].hasOwnProperty(u) && f !== t && (r[u] = n.isPlainObject(f) ? n.isPlainObject(r[u]) ? n.widget.extend({}, r[u], f) : n.widget.extend({}, f) : f);
        return r
    }
    ,
    n.widget.bridge = function(r, u) {
        var f = u.prototype.widgetFullName || r;
        n.fn[r] = function(e) {
            var h = typeof e == "string"
              , o = i.call(arguments, 1)
              , s = this;
            return e = !h && o.length ? n.widget.extend.apply(null, [e].concat(o)) : e,
            h ? this.each(function() {
                var i, u = n.data(this, f);
                return u ? !n.isFunction(u[e]) || e.charAt(0) === "_" ? n.error("no such method '" + e + "' for " + r + " widget instance") : (i = u[e].apply(u, o),
                i !== u && i !== t ? (s = i && i.jquery ? s.pushStack(i.get()) : i,
                !1) : void 0) : n.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + e + "'")
            }) : this.each(function() {
                var t = n.data(this, f);
                t ? t.option(e || {})._init() : n.data(this, f, new u(e,this))
            }),
            s
        }
    }
    ,
    n.Widget = function() {}
    ,
    n.Widget._childConstructors = [],
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = n(i || this.defaultElement || this)[0],
            this.element = n(i),
            this.uuid = u++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t),
            this.bindings = n(),
            this.hoverable = n(),
            this.focusable = n(),
            i !== this && (n.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(n) {
                    n.target === i && this.destroy()
                }
            }),
            this.document = n(i.style ? i.ownerDocument : i.document || i),
            this.window = n(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: n.noop,
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: n.noop,
        widget: function() {
            return this.element
        },
        option: function(i, r) {
            var o = i, u, f, e;
            if (arguments.length === 0)
                return n.widget.extend({}, this.options);
            if (typeof i == "string")
                if (o = {},
                u = i.split("."),
                i = u.shift(),
                u.length) {
                    for (f = o[i] = n.widget.extend({}, this.options[i]),
                    e = 0; e < u.length - 1; e++)
                        f[u[e]] = f[u[e]] || {},
                        f = f[u[e]];
                    if (i = u.pop(),
                    r === t)
                        return f[i] === t ? null : f[i];
                    f[i] = r
                } else {
                    if (r === t)
                        return this.options[i] === t ? null : this.options[i];
                    o[i] = r
                }
            return this._setOptions(o),
            this
        },
        _setOptions: function(n) {
            var t;
            for (t in n)
                this._setOption(t, n[t]);
            return this
        },
        _setOption: function(n, t) {
            return this.options[n] = t,
            n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, i, r) {
            var f, u = this;
            typeof t != "boolean" && (r = i,
            i = t,
            t = !1),
            r ? (i = f = n(i),
            this.bindings = this.bindings.add(i)) : (r = i,
            i = this.element,
            f = this.widget()),
            n.each(r, function(r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled"))
                        return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                }
                typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var c = r.match(/^(\w+)\s*(.*)$/)
                  , h = c[1] + u.eventNamespace
                  , s = c[2];
                s ? f.delegate(s, h, o) : i.bind(h, o)
            })
        },
        _off: function(n, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            n.unbind(t).undelegate(t)
        },
        _delay: function(n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    n(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    n(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    n(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    n(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, r) {
            var f, u, e = this.options[t];
            if (r = r || {},
            i = n.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            u = i.originalEvent,
            u)
                for (f in u)
                    f in i || (i[f] = u[f]);
            return this.element.trigger(i, r),
            !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    },
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        n.Widget.prototype["_" + t] = function(r, u, f) {
            typeof u == "string" && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
            u = u || {},
            typeof u == "number" && (u = {
                duration: u
            }),
            o = !n.isEmptyObject(u),
            u.complete = f,
            u.delay && r.delay(u.delay),
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                n(this)[t](),
                f && f.call(r[0]),
                i()
            })
        }
    })
}(jQuery),
function(n) {
    var i = !1;
    n(document).mouseup(function() {
        i = !1
    }),
    n.widget("ui.mouse", {
        version: "1.10.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))
                    return n.removeData(i.target, t.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!i) {
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var r = this
                  , f = t.which === 1
                  , u = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                return !f || u || !this._mouseCapture(t) ? !0 : (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1,
                !this._mouseStarted)) ? (t.preventDefault(),
                !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(n) {
                    return r._mouseMove(n)
                }
                ,
                this._mouseUpDelegate = function(n) {
                    return r._mouseUp(n)
                }
                ,
                n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                i = !0,
                !0)
            }
        },
        _mouseMove: function(t) {
            return n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            this.options.helper !== "original" || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t),
            !this.handle) ? !1 : (n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                n("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(n(this).offset()).appendTo("body")
            }),
            !0)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return (this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            n.ui.ddmanager && (n.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            i.containment && this._setContainment(),
            this._trigger("start", t) === !1) ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _mouseDrag: function(t, i) {
            if (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = r.position
            }
            return this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var r, u = this, f = !1, i = !1;
            for (n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped,
            this.dropped = !1),
            r = this.element[0]; r && (r = r.parentNode); )
                r === document && (f = !0);
            return !f && this.options.helper === "original" ? !1 : (this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                u._trigger("stop", t) !== !1 && u._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(),
            !1)
        },
        _mouseUp: function(t) {
            return n("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t),
            n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(t) {
            var r = this.options
              , i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo),
            i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var n = this.element.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var r, u, t, i = this.options;
            if (i.containment === "parent" && (i.containment = this.helper[0].parentNode),
            (i.containment === "document" || i.containment === "window") && (this.containment = [i.containment === "document" ? 0 : n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment === "document" ? 0 : n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment === "document" ? 0 : n(window).scrollLeft()) + n(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? 0 : n(window).scrollTop()) + (n(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(i.containment) || i.containment.constructor === Array)
                i.containment.constructor === Array && (this.containment = i.containment);
            else {
                if (u = n(i.containment),
                t = u[0],
                !t)
                    return;
                r = n(t).css("overflow") !== "hidden",
                this.containment = [(parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0), (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0), (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderRightWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderBottomWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = u
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t === "absolute" ? 1 : -1
              , u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var i, s, f, u, r = this.options, h = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, c = /(html|body)/i.test(h[0].tagName), e = t.pageX, o = t.pageY;
            return this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            t.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)),
            r.grid && (f = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
            o = i ? f - this.offset.click.top >= i[1] || f - this.offset.click.top > i[3] ? f : f - this.offset.click.top >= i[1] ? f - r.grid[1] : f + r.grid[1] : f,
            u = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
            e = i ? u - this.offset.click.left >= i[0] || u - this.offset.click.left > i[2] ? u : u - this.offset.click.left >= i[0] ? u - r.grid[0] : u + r.grid[0] : u)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : c ? 0 : h.scrollTop()),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : c ? 0 : h.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(),
            n.ui.plugin.call(this, t, [i, r]),
            t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
            n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var r = n(this).data("ui-draggable")
              , f = r.options
              , u = n.extend({}, i, {
                item: r.element
            });
            r.sortables = [],
            n(f.connectToSortable).each(function() {
                var i = n.data(this, "ui-sortable");
                i && !i.options.disabled && (r.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }),
                i.refreshPositions(),
                i._trigger("activate", t, u))
            })
        },
        stop: function(t, i) {
            var r = n(this).data("ui-draggable")
              , u = n.extend({}, i, {
                item: r.element
            });
            n.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                r.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = this.shouldRevert),
                this.instance._mouseStop(t),
                this.instance.options.helper = this.instance.options._helper,
                r.options.helper === "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i) {
            var r = n(this).data("ui-draggable")
              , u = this;
            n.each(r.sortables, function() {
                var f = !1
                  , e = this;
                this.instance.positionAbs = r.positionAbs,
                this.instance.helperProportions = r.helperProportions,
                this.instance.offset.click = r.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (f = !0,
                n.each(r.sortables, function() {
                    return this.instance.positionAbs = r.positionAbs,
                    this.instance.helperProportions = r.helperProportions,
                    this.instance.offset.click = r.offset.click,
                    this !== e && this.instance._intersectsWith(this.instance.containerCache) && n.contains(e.instance.element[0], this.instance.element[0]) && (f = !1),
                    f
                })),
                f ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return i.helper[0]
                }
                ,
                t.target = this.instance.currentItem[0],
                this.instance._mouseCapture(t, !0),
                this.instance._mouseStart(t, !0, !0),
                this.instance.offset.click.top = r.offset.click.top,
                this.instance.offset.click.left = r.offset.click.left,
                this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top,
                r._trigger("toSortable", t),
                r.dropped = this.instance.element,
                r.currentItem = r.element,
                this.instance.fromOutside = r),
                this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                r._trigger("fromSortable", t),
                r.dropped = !1)
            })
        }
    }),
    n.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = n("body")
              , i = n(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")),
            t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = n(this).data("ui-draggable").options;
            t._cursor && n("body").css("cursor", t._cursor)
        }
    }),
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var r = n(i.helper)
              , u = n(this).data("ui-draggable").options;
            r.css("opacity") && (u._opacity = r.css("opacity")),
            r.css("opacity", u.opacity)
        },
        stop: function(t, i) {
            var r = n(this).data("ui-draggable").options;
            r._opacity && n(i.helper).css("opacity", r._opacity)
        }
    }),
    n.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = n(this).data("ui-draggable");
            t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var r = n(this).data("ui-draggable")
              , i = r.options
              , u = !1;
            r.scrollParent[0] !== document && r.scrollParent[0].tagName !== "HTML" ? (i.axis && i.axis === "x" || (r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop - i.scrollSpeed)),
            i.axis && i.axis === "y" || (r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && i.axis === "x" || (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? u = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (u = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed))),
            i.axis && i.axis === "y" || (t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? u = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (u = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed)))),
            u !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    }),
    n.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = n(this).data("ui-draggable")
              , i = t.options;
            t.snapElements = [],
            n(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = n(this)
                  , r = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function(t, i) {
            for (var l, c, v, y, e, h, o, s, d, r = n(this).data("ui-draggable"), k = r.options, u = k.snapTolerance, a = i.offset.left, w = a + r.helperProportions.width, p = i.offset.top, b = p + r.helperProportions.height, f = r.snapElements.length - 1; f >= 0; f--) {
                if (e = r.snapElements[f].left,
                h = e + r.snapElements[f].width,
                o = r.snapElements[f].top,
                s = o + r.snapElements[f].height,
                !(e - u < a && a < h + u && o - u < p && p < s + u || e - u < a && a < h + u && o - u < b && b < s + u || e - u < w && w < h + u && o - u < p && p < s + u || e - u < w && w < h + u && o - u < b && b < s + u)) {
                    r.snapElements[f].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[f].item
                    })),
                    r.snapElements[f].snapping = !1;
                    continue
                }
                k.snapMode !== "inner" && (l = Math.abs(o - b) <= u,
                c = Math.abs(s - p) <= u,
                v = Math.abs(e - w) <= u,
                y = Math.abs(h - a) <= u,
                l && (i.position.top = r._convertPositionTo("relative", {
                    top: o - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top),
                c && (i.position.top = r._convertPositionTo("relative", {
                    top: s,
                    left: 0
                }).top - r.margins.top),
                v && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: e - r.helperProportions.width
                }).left - r.margins.left),
                y && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - r.margins.left)),
                d = l || c || v || y,
                k.snapMode !== "outer" && (l = Math.abs(o - p) <= u,
                c = Math.abs(s - b) <= u,
                v = Math.abs(e - a) <= u,
                y = Math.abs(h - w) <= u,
                l && (i.position.top = r._convertPositionTo("relative", {
                    top: o,
                    left: 0
                }).top - r.margins.top),
                c && (i.position.top = r._convertPositionTo("relative", {
                    top: s - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top),
                v && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: e
                }).left - r.margins.left),
                y && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: h - r.helperProportions.width
                }).left - r.margins.left)),
                !r.snapElements[f].snapping && (l || c || v || y || d) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[f].item
                })),
                r.snapElements[f].snapping = l || c || v || y || d
            }
        }
    }),
    n.ui.plugin.add("draggable", "stack", {
        start: function() {
            var i, r = this.data("ui-draggable").options, t = n.makeArray(n(r.stack)).sort(function(t, i) {
                return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
            });
            t.length && (i = parseInt(n(t[0]).css("zIndex"), 10) || 0,
            n(t).each(function(t) {
                n(this).css("zIndex", i + t)
            }),
            this.css("zIndex", i + t.length))
        }
    }),
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var r = n(i.helper)
              , u = n(this).data("ui-draggable").options;
            r.css("zIndex") && (u._zIndex = r.css("zIndex")),
            r.css("zIndex", u.zIndex)
        },
        stop: function(t, i) {
            var r = n(this).data("ui-draggable").options;
            r._zIndex && n(i.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function(n) {
    function i(n, t, i) {
        return n > t && n < t + i
    }
    n.widget("ui.droppable", {
        version: "1.10.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t = this.options
              , i = t.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            }
            ,
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [],
            n.ui.ddmanager.droppables[t.scope].push(this),
            t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = 0, i = n.ui.ddmanager.droppables[this.options.scope]; t < i.length; t++)
                i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            t === "accept" && (this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            }
            ),
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
            this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current
              , u = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = n.data(this, "ui-droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance))
                    return u = !0,
                    !1
            }),
            u) ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", t, this.ui(r)),
            this.element) : !1
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        }
    }),
    n.ui.intersect = function(n, t, r) {
        if (!t.offset)
            return !1;
        var a, v, o = (n.positionAbs || n.position.absolute).left, c = o + n.helperProportions.width, e = (n.positionAbs || n.position.absolute).top, l = e + n.helperProportions.height, u = t.offset.left, h = u + t.proportions.width, f = t.offset.top, s = f + t.proportions.height;
        switch (r) {
        case "fit":
            return u <= o && c <= h && f <= e && l <= s;
        case "intersect":
            return u < o + n.helperProportions.width / 2 && c - n.helperProportions.width / 2 < h && f < e + n.helperProportions.height / 2 && l - n.helperProportions.height / 2 < s;
        case "pointer":
            return a = (n.positionAbs || n.position.absolute).left + (n.clickOffset || n.offset.click).left,
            v = (n.positionAbs || n.position.absolute).top + (n.clickOffset || n.offset.click).top,
            i(v, f, t.proportions.height) && i(a, u, t.proportions.width);
        case "touch":
            return (e >= f && e <= s || l >= f && l <= s || e < f && l > s) && (o >= u && o <= h || c >= u && c <= h || o < u && c > h);
        default:
            return !1
        }
    }
    ,
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            n: for (r = 0; r < u.length; r++)
                if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; f < e.length; f++)
                        if (e[f] === u[r].element[0]) {
                            u[r].proportions.height = 0;
                            continue n
                        }
                    (u[r].visible = u[r].element.css("display") !== "none",
                    u[r].visible) && (o === "mousedown" && u[r]._activate.call(u[r], i),
                    u[r].offset = u[r].element.offset(),
                    u[r].proportions = {
                        width: u[r].element[0].offsetWidth,
                        height: u[r].element[0].offsetHeight
                    })
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, i)))
            }),
            r
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i),
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance), u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    u && (this.options.greedy && (e = this.options.scope,
                    f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return n.data(this, "ui-droppable").options.scope === e
                    }),
                    f.length && (r = n.data(f[0], "ui-droppable"),
                    r.greedyChild = u === "isover")),
                    r && u === "isover" && (r.isover = !1,
                    r.isout = !0,
                    r._out.call(r, i)),
                    this[u] = !0,
                    this[u === "isout" ? "isover" : "isout"] = !1,
                    this[u === "isover" ? "_over" : "_out"].call(this, i),
                    r && u === "isout" && (r.isout = !1,
                    r.isover = !0,
                    r._over.call(r, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"),
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    }
}(jQuery),
function(n) {
    function r(n) {
        return parseInt(n, 10) || 0
    }
    function i(n) {
        return !isNaN(parseInt(n, 10))
    }
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, f, u, i, o, r = this, t = this.options;
            if (this.element.addClass("ui-resizable"),
            n.extend(this, {
                _aspectRatio: !!t.aspectRatio,
                aspectRatio: t.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")),
            this.elementIsWrapper = !0,
            this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }),
            this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css({
                margin: this.originalElement.css("margin")
            }),
            this._proportionallyResize()),
            this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this.handles.constructor === String)
                for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                e = this.handles.split(","),
                this.handles = {},
                f = 0; f < e.length; f++)
                    u = n.trim(e[f]),
                    o = "ui-resizable-" + u,
                    i = n("<div class='ui-resizable-handle " + o + "'></div>"),
                    i.css({
                        zIndex: t.zIndex
                    }),
                    "se" === u && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                    this.handles[u] = ".ui-resizable-" + u,
                    this.element.append(i);
            this._renderAxis = function(t) {
                var i, r, f, u;
                t = t || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String && (this.handles[i] = n(this.handles[i], this.element).show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element),
                    u = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(),
                    f = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    t.css(f, u),
                    this._proportionallyResize()),
                    !n(this.handles[i]).length
            }
            ,
            this._renderAxis(this.element),
            this._handles = n(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                r.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                r.axis = i && i[1] ? i[1] : "se")
            }),
            t.autoHide && (this._handles.hide(),
            n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"),
                r._handles.show())
            }).mouseleave(function() {
                t.disabled || r.resizing || (n(this).addClass("ui-resizable-autohide"),
                r._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            t = this.element,
            this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t),
            t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var u, i, r = !1;
            for (u in this.handles)
                i = n(this.handles[u])[0],
                (i === t.target || n.contains(i, t.target)) && (r = !0);
            return !this.options.disabled && r
        },
        _mouseStart: function(t) {
            var e, f, o, u = this.options, s = this.element.position(), i = this.element;
            return this.resizing = !0,
            /absolute/.test(i.css("position")) ? i.css({
                position: "absolute",
                top: i.css("top"),
                left: i.css("left")
            }) : i.is(".ui-draggable") && i.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }),
            this._renderProxy(),
            e = r(this.helper.css("left")),
            f = r(this.helper.css("top")),
            u.containment && (e += n(u.containment).scrollLeft() || 0,
            f += n(u.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: e,
                top: f
            },
            this.size = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.originalPosition = {
                left: e,
                top: f
            },
            this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            o = n(".ui-resizable-" + this.axis).css("cursor"),
            n("body").css("cursor", o === "auto" ? this.axis + "-resize" : o),
            i.addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var r, c = this.helper, i = {}, f = this.originalMousePosition, l = this.axis, s = this.position.top, v = this.position.left, a = this.size.width, o = this.size.height, e = t.pageX - f.left || 0, h = t.pageY - f.top || 0, u = this._change[l];
            return u ? (r = u.apply(this, [t, e, h]),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (r = this._updateRatio(r, t)),
            r = this._respectSize(r, t),
            this._updateCache(r),
            this._propagate("resize", t),
            this.position.top !== s && (i.top = this.position.top + "px"),
            this.position.left !== v && (i.left = this.position.left + "px"),
            this.size.width !== a && (i.width = this.size.width + "px"),
            this.size.height !== o && (i.height = this.size.height + "px"),
            c.css(i),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            n.isEmptyObject(i) || this._trigger("resize", t, this.ui()),
            !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var r, u, s, o, h, c, f, e = this.options, i = this;
            return this._helper && (r = this._proportionallyResizeElements,
            u = r.length && /textarea/i.test(r[0].nodeName),
            s = u && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
            o = u ? 0 : i.sizeDiff.width,
            h = {
                width: i.helper.width() - o,
                height: i.helper.height() - s
            },
            c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
            f = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null,
            e.animate || this.element.css(n.extend(h, {
                top: f,
                left: c
            })),
            i.helper.height(i.size.height),
            i.helper.width(i.size.width),
            this._helper && !e.animate && this._proportionallyResize()),
            n("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(n) {
            var u, e, f, o, t, r = this.options;
            t = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : Infinity,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : Infinity
            },
            (this._aspectRatio || n) && (u = t.minHeight * this.aspectRatio,
            f = t.minWidth / this.aspectRatio,
            e = t.maxHeight * this.aspectRatio,
            o = t.maxWidth / this.aspectRatio,
            u > t.minWidth && (t.minWidth = u),
            f > t.minHeight && (t.minHeight = f),
            e < t.maxWidth && (t.maxWidth = e),
            o < t.maxHeight && (t.maxHeight = o)),
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            this.offset = this.helper.offset(),
            i(n.left) && (this.position.left = n.left),
            i(n.top) && (this.position.top = n.top),
            i(n.height) && (this.size.height = n.height),
            i(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var r = this.position
              , t = this.size
              , u = this.axis;
            return i(n.height) ? n.width = n.height * this.aspectRatio : i(n.width) && (n.height = n.width / this.aspectRatio),
            u === "sw" && (n.left = r.left + (t.width - n.width),
            n.top = null),
            u === "nw" && (n.top = r.top + (t.height - n.height),
            n.left = r.left + (t.width - n.width)),
            n
        },
        _respectSize: function(n) {
            var t = this._vBoundaries
              , h = this.axis
              , s = i(n.width) && t.maxWidth && t.maxWidth < n.width
              , l = i(n.height) && t.maxHeight && t.maxHeight < n.height
              , c = i(n.width) && t.minWidth && t.minWidth > n.width
              , o = i(n.height) && t.minHeight && t.minHeight > n.height
              , u = this.originalPosition.left + this.originalSize.width
              , r = this.position.top + this.size.height
              , e = /sw|nw|w/.test(h)
              , f = /nw|ne|n/.test(h);
            return c && (n.width = t.minWidth),
            o && (n.height = t.minHeight),
            s && (n.width = t.maxWidth),
            l && (n.height = t.maxHeight),
            c && e && (n.left = u - t.minWidth),
            s && e && (n.left = u - t.maxWidth),
            o && f && (n.top = r - t.minHeight),
            l && f && (n.top = r - t.maxHeight),
            n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null,
            n
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, r, f, n, u = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                    if (n = this._proportionallyResizeElements[i],
                    !this.borderDif)
                        for (this.borderDif = [],
                        r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                        f = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")],
                        t = 0; t < r.length; t++)
                            this.borderDif[t] = (parseInt(r[t], 10) || 0) + (parseInt(f[t], 10) || 0);
                    n.css({
                        height: u.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: u.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function() {
            var i = this.element
              , t = this.options;
            this.elementOffset = i.offset(),
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'></div>"),
            this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++t.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var r = this.originalSize
                  , i = this.originalPosition;
                return {
                    left: i.left + t,
                    width: r.width - t
                }
            },
            n: function(n, t, i) {
                var u = this.originalSize
                  , r = this.originalPosition;
                return {
                    top: r.top + i,
                    height: u.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]),
            t !== "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).data("ui-resizable")
              , o = i.options
              , r = i._proportionallyResizeElements
              , e = r.length && /textarea/i.test(r[0].nodeName)
              , s = e && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height
              , h = e ? 0 : i.sizeDiff.width
              , c = {
                width: i.size.width - h,
                height: i.size.height - s
            }
              , u = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
              , f = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, f && u ? {
                top: f,
                left: u
            } : {}), {
                duration: o.animateDuration,
                easing: o.animateEasing,
                step: function() {
                    var u = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    }),
                    i._updateCache(u),
                    i._propagate("resize", t)
                }
            })
        }
    }),
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var u, e, o, l, h, s, c, t = n(this).data("ui-resizable"), a = t.options, v = t.element, f = a.containment, i = f instanceof n ? f.get(0) : /parent/.test(f) ? v.parent().get(0) : f;
            i && (t.containerElement = n(i),
            /document/.test(f) || f === document ? (t.containerOffset = {
                left: 0,
                top: 0
            },
            t.containerPosition = {
                left: 0,
                top: 0
            },
            t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (u = n(i),
            e = [],
            n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
                e[n] = r(u.css("padding" + t))
            }),
            t.containerOffset = u.offset(),
            t.containerPosition = u.position(),
            t.containerSize = {
                height: u.innerHeight() - e[3],
                width: u.innerWidth() - e[1]
            },
            o = t.containerOffset,
            l = t.containerSize.height,
            h = t.containerSize.width,
            s = n.ui.hasScroll(i, "left") ? i.scrollWidth : h,
            c = n.ui.hasScroll(i) ? i.scrollHeight : l,
            t.parentData = {
                element: i,
                left: o.left,
                top: o.top,
                width: s,
                height: c
            }))
        },
        resize: function(t) {
            var f, o, h, c, i = n(this).data("ui-resizable"), a = i.options, r = i.containerOffset, s = i.position, e = i._aspectRatio || t.shiftKey, u = {
                top: 0,
                left: 0
            }, l = i.containerElement;
            l[0] !== document && /static/.test(l.css("position")) && (u = r),
            s.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left),
            e && (i.size.height = i.size.width / i.aspectRatio),
            i.position.left = a.helper ? r.left : 0),
            s.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top),
            e && (i.size.width = i.size.height * i.aspectRatio),
            i.position.top = i._helper ? r.top : 0),
            i.offset.left = i.parentData.left + i.position.left,
            i.offset.top = i.parentData.top + i.position.top,
            f = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width),
            o = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height),
            h = i.containerElement.get(0) === i.element.parent().get(0),
            c = /relative|absolute/.test(i.containerElement.css("position")),
            h && c && (f -= i.parentData.left),
            f + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - f,
            e && (i.size.height = i.size.width / i.aspectRatio)),
            o + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - o,
            e && (i.size.width = i.size.height * i.aspectRatio))
        },
        stop: function() {
            var t = n(this).data("ui-resizable")
              , o = t.options
              , e = t.containerOffset
              , h = t.containerPosition
              , s = t.containerElement
              , i = n(t.helper)
              , u = i.offset()
              , r = i.outerWidth() - t.sizeDiff.width
              , f = i.outerHeight() - t.sizeDiff.height;
            t._helper && !o.animate && /relative/.test(s.css("position")) && n(this).css({
                left: u.left - h.left - e.left,
                width: r,
                height: f
            }),
            t._helper && !o.animate && /static/.test(s.css("position")) && n(this).css({
                left: u.left - h.left - e.left,
                width: r,
                height: f
            })
        }
    }),
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var r = n(this).data("ui-resizable")
              , t = r.options
              , i = function(t) {
                n(t).each(function() {
                    var t = n(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            typeof t.alsoResize != "object" || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0],
            i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
                i(n)
            })
        },
        resize: function(t, i) {
            var r = n(this).data("ui-resizable")
              , u = r.options
              , o = r.originalSize
              , e = r.originalPosition
              , s = {
                height: r.size.height - o.height || 0,
                width: r.size.width - o.width || 0,
                top: r.position.top - e.top || 0,
                left: r.position.left - e.left || 0
            }
              , f = function(t, r) {
                n(t).each(function() {
                    var u = n(this)
                      , e = n(this).data("ui-resizable-alsoresize")
                      , t = {}
                      , f = r && r.length ? r : u.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    n.each(f, function(n, i) {
                        var r = (e[i] || 0) + (s[i] || 0);
                        r && r >= 0 && (t[i] = r || null)
                    }),
                    u.css(t)
                })
            };
            typeof u.alsoResize != "object" || u.alsoResize.nodeType ? f(u.alsoResize) : n.each(u.alsoResize, function(n, t) {
                f(n, t)
            })
        },
        stop: function() {
            n(this).removeData("resizable-alsoresize")
        }
    }),
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).data("ui-resizable")
              , r = t.options
              , i = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof r.ghost == "string" ? r.ghost : ""),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    n.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = n(this).data("ui-resizable")
              , i = t.options
              , v = t.size
              , s = t.originalSize
              , o = t.originalPosition
              , l = t.axis
              , c = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid
              , f = c[0] || 1
              , e = c[1] || 1
              , a = Math.round((v.width - s.width) / f) * f
              , h = Math.round((v.height - s.height) / e) * e
              , r = s.width + a
              , u = s.height + h
              , w = i.maxWidth && i.maxWidth < r
              , b = i.maxHeight && i.maxHeight < u
              , y = i.minWidth && i.minWidth > r
              , p = i.minHeight && i.minHeight > u;
            i.grid = c,
            y && (r = r + f),
            p && (u = u + e),
            w && (r = r - f),
            b && (u = u - e),
            /^(se|s|e)$/.test(l) ? (t.size.width = r,
            t.size.height = u) : /^(ne)$/.test(l) ? (t.size.width = r,
            t.size.height = u,
            t.position.top = o.top - h) : /^(sw)$/.test(l) ? (t.size.width = r,
            t.size.height = u,
            t.position.left = o.left - a) : (t.size.width = r,
            t.size.height = u,
            t.position.top = o.top - h,
            t.position.left = o.left - a)
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.selectable", n.ui.mouse, {
        version: "1.10.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, i = this;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                t = n(i.options.filter, i.element[0]),
                t.addClass("ui-selectee"),
                t.each(function() {
                    var t = n(this)
                      , i = t.offset();
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }
            ,
            this.refresh(),
            this.selectees = t.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = n("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var r = this
              , i = this.options;
            (this.opos = [t.pageX, t.pageY],
            this.options.disabled) || (this.selectees = n(i.filter, this.element[0]),
            this._trigger("start", t),
            n(i.appendTo).append(this.helper),
            this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }),
            i.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var i = n.data(this, "selectable-item");
                i.startselected = !0,
                t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"),
                i.selected = !1,
                i.$element.addClass("ui-unselecting"),
                i.unselecting = !0,
                r._trigger("unselecting", t, {
                    unselecting: i.element
                }))
            }),
            n(t.target).parents().addBack().each(function() {
                var u, i = n.data(this, "selectable-item");
                if (i)
                    return u = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"),
                    i.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"),
                    i.unselecting = !u,
                    i.selecting = u,
                    i.selected = u,
                    u ? r._trigger("selecting", t, {
                        selecting: i.element
                    }) : r._trigger("unselecting", t, {
                        unselecting: i.element
                    }),
                    !1
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var e, o = this, s = this.options, r = this.opos[0], i = this.opos[1], u = t.pageX, f = t.pageY;
                return r > u && (e = u,
                u = r,
                r = e),
                i > f && (e = f,
                f = i,
                i = e),
                this.helper.css({
                    left: r,
                    top: i,
                    width: u - r,
                    height: f - i
                }),
                this.selectees.each(function() {
                    var e = n.data(this, "selectable-item")
                      , h = !1;
                    e && e.element !== o.element[0] && (s.tolerance === "touch" ? h = !(e.left > u || e.right < r || e.top > f || e.bottom < i) : s.tolerance === "fit" && (h = e.left > r && e.right < u && e.top > i && e.bottom < f),
                    h ? (e.selected && (e.$element.removeClass("ui-selected"),
                    e.selected = !1),
                    e.unselecting && (e.$element.removeClass("ui-unselecting"),
                    e.unselecting = !1),
                    e.selecting || (e.$element.addClass("ui-selecting"),
                    e.selecting = !0,
                    o._trigger("selecting", t, {
                        selecting: e.element
                    }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"),
                    e.selecting = !1,
                    e.$element.addClass("ui-selected"),
                    e.selected = !0) : (e.$element.removeClass("ui-selecting"),
                    e.selecting = !1,
                    e.startselected && (e.$element.addClass("ui-unselecting"),
                    e.unselecting = !0),
                    o._trigger("unselecting", t, {
                        unselecting: e.element
                    }))),
                    e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"),
                    e.selected = !1,
                    e.$element.addClass("ui-unselecting"),
                    e.unselecting = !0,
                    o._trigger("unselecting", t, {
                        unselecting: e.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1,
            n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"),
                r.unselecting = !1,
                r.startselected = !1,
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }),
            n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"),
                r.selecting = !1,
                r.selected = !0,
                r.startselected = !0,
                i._trigger("selected", t, {
                    selected: r.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    })
}(jQuery),
function(n) {
    function i(n, t, i) {
        return n > t && n < t + i
    }
    function r(n) {
        return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
    }
    n.widget("ui.sortable", n.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var n = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? n.axis === "x" || r(this.items[0].item) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var n = this.items.length - 1; n >= 0; n--)
                this.items[n].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            t === "disabled" ? (this.options[t] = i,
            this.widget().toggleClass("ui-sortable-disabled", !!i)) : n.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var r = null
              , f = !1
              , u = this;
            return this.reverting ? !1 : this.options.disabled || this.options.type === "static" ? !1 : (this._refreshItems(t),
            n(t.target).parents().each(function() {
                if (n.data(this, u.widgetName + "-item") === u)
                    return r = n(this),
                    !1
            }),
            n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)),
            !r) ? !1 : this.options.handle && !i && (n(this.options.handle, r).find("*").addBack().each(function() {
                this === t.target && (f = !0)
            }),
            !f) ? !1 : (this.currentItem = r,
            this._removeCurrentsFromItems(),
            !0)
        },
        _mouseStart: function(t, i, r) {
            var f, e, u = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            u.containment && this._setContainment(),
            u.cursor && u.cursor !== "auto" && (e = this.document.find("body"),
            this.storedCursor = e.css("cursor"),
            e.css("cursor", u.cursor),
            this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }</style>").appendTo(e)),
            u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", u.opacity)),
            u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", u.zIndex)),
            this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !r)
                for (f = this.containers.length - 1; f >= 0; f--)
                    this.containers[f]._trigger("activate", t, this._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this),
            n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var o, u, f, e, i = this.options, r = !1;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)),
            t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))),
            r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"),
            o = this.items.length - 1; o >= 0; o--)
                if ((u = this.items[o],
                f = u.item[0],
                e = this._intersectsWithPointer(u),
                e) && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[e === 1 ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !n.contains(this.element[0], f) : !0)) {
                    if (this.direction = e === 1 ? "down" : "up",
                    this.options.tolerance === "pointer" || this._intersectsWithSides(u))
                        this._rearrange(t, u);
                    else
                        break;
                    this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t),
                this.options.revert) {
                    var e = this
                      , f = this.placeholder.offset()
                      , r = this.options.axis
                      , u = {};
                    r && r !== "x" || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
                    r && r !== "y" || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                        e._clear(t)
                    })
                } else
                    this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--)
                    this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                    this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(),
            n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }),
            !i.length && t.key && i.push(t.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }),
            i
        },
        _intersectsWith: function(n) {
            var i = this.positionAbs.left
              , c = i + this.helperProportions.width
              , t = this.positionAbs.top
              , l = t + this.helperProportions.height
              , r = n.left
              , s = r + n.width
              , u = n.top
              , o = u + n.height
              , f = this.offset.click.top
              , e = this.offset.click.left
              , h = t + f > u && t + f < o && i + e > r && i + e < s;
            return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? h : r < i + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < s && u < t + this.helperProportions.height / 2 && l - this.helperProportions.height / 2 < o
        },
        _intersectsWithPointer: function(n) {
            var f = this.options.axis === "x" || i(this.positionAbs.top + this.offset.click.top, n.top, n.height)
              , u = this.options.axis === "y" || i(this.positionAbs.left + this.offset.click.left, n.left, n.width)
              , e = f && u
              , t = this._getDragVerticalDirection()
              , r = this._getDragHorizontalDirection();
            return e ? this.floating ? r && r === "right" || t === "down" ? 2 : 1 : t && (t === "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(n) {
            var f = i(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height)
              , u = i(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width)
              , t = this._getDragVerticalDirection()
              , r = this._getDragHorizontalDirection();
            return this.floating && r ? r === "right" && u || r === "left" && !u : t && (t === "down" && f || t === "up" && !f)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n !== 0 && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n !== 0 && (n > 0 ? "right" : "left")
        },
        refresh: function(n) {
            return this._refreshItems(n),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var r, f, o, i, s = [], u = [], e = this._connectWith();
            if (e && t)
                for (r = e.length - 1; r >= 0; r--)
                    for (o = n(e[r]),
                    f = o.length - 1; f >= 0; f--)
                        i = n.data(o[f], this.widgetFullName),
                        i && i !== this && !i.options.disabled && u.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (u.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            r = u.length - 1; r >= 0; r--)
                u[r][0].each(function() {
                    s.push(this)
                });
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = n.grep(this.items, function(n) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === n.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [],
            this.containers = [this];
            var r, u, s, i, h, c, e, l, a = this.items, f = [[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : n(this.options.items, this.element), this]], o = this._connectWith();
            if (o && this.ready)
                for (r = o.length - 1; r >= 0; r--)
                    for (s = n(o[r]),
                    u = s.length - 1; u >= 0; u--)
                        i = n.data(s[u], this.widgetFullName),
                        i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : n(i.options.items, i.element), i]),
                        this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--)
                for (h = f[r][1],
                c = f[r][0],
                u = 0,
                l = c.length; u < l; u++)
                    e = n(c[u]),
                    e.data(this.widgetName + "-item", h),
                    a.push({
                        item: e,
                        instance: h,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var r, f, u, i = this.items.length - 1; i >= 0; i--)
                (r = this.items[i],
                r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item,
                t || (r.width = f.outerWidth(),
                r.height = f.outerHeight()),
                u = f.offset(),
                r.left = u.left,
                r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    u = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = u.left,
                    this.containers[i].containerCache.top = u.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var r, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder,
            i.placeholder = {
                element: function() {
                    var u = t.currentItem[0].nodeName.toLowerCase()
                      , i = n(t.document[0].createElement(u)).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return u === "tr" ? i.append("<td colspan='99'>&#160;</td>") : u === "img" && i.attr("src", t.currentItem.attr("src")),
                    r || i.css("visibility", "hidden"),
                    i
                },
                update: function(n, u) {
                    (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)),
                    u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem)),
            t.currentItem.after(t.placeholder),
            i.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            for (var f, y, c, a, v, h, o, p, l, s = null, u = null, e = this.containers.length - 1; e >= 0; e--)
                if (!n.contains(this.currentItem[0], this.containers[e].element[0]))
                    if (this._intersectsWith(this.containers[e].containerCache)) {
                        if (s && n.contains(this.containers[e].element[0], s.element[0]))
                            continue;
                        s = this.containers[e],
                        u = e
                    } else
                        this.containers[e].containerCache.over && (this.containers[e]._trigger("out", t, this._uiHash(this)),
                        this.containers[e].containerCache.over = 0);
            if (s)
                if (this.containers.length === 1)
                    this.containers[u].containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash(this)),
                    this.containers[u].containerCache.over = 1);
                else {
                    for (y = 1e4,
                    c = null,
                    l = s.floating || r(this.currentItem),
                    a = l ? "left" : "top",
                    v = l ? "width" : "height",
                    h = this.positionAbs[a] + this.offset.click[a],
                    f = this.items.length - 1; f >= 0; f--)
                        n.contains(this.containers[u].element[0], this.items[f].item[0]) && this.items[f].item[0] !== this.currentItem[0] && (!l || i(this.positionAbs.top + this.offset.click.top, this.items[f].top, this.items[f].height)) && (o = this.items[f].item.offset()[a],
                        p = !1,
                        Math.abs(o - h) > Math.abs(o + this.items[f][v] - h) && (p = !0,
                        o += this.items[f][v]),
                        Math.abs(o - h) < y && (y = Math.abs(o - h),
                        c = this.items[f],
                        this.direction = p ? "up" : "down"));
                    if (!c && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[u])
                        return;
                    c ? this._rearrange(t, c, null, !0) : this._rearrange(t, null, this.containers[u].element, !0),
                    this._trigger("change", t, this._uiHash()),
                    this.containers[u]._trigger("change", t, this._uiHash(this)),
                    this.currentContainer = this.containers[u],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[u]._trigger("over", t, this._uiHash(this)),
                    this.containers[u].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var r = this.options
              , i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n(r.appendTo !== "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
            i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()),
            (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, r, u, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode),
            (i.containment === "document" || i.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (n(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0],
            r = n(i.containment).offset(),
            u = n(t).css("overflow") !== "hidden",
            this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t === "absolute" ? 1 : -1
              , u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var r, u, i = this.options, e = t.pageX, f = t.pageY, o = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, s = /(html|body)/i.test(o[0].tagName);
            return this.cssPosition !== "relative" || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (e = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (f = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (e = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (f = this.containment[3] + this.offset.click.top)),
            i.grid && (r = this.originalPageY + Math.round((f - this.originalPageY) / i.grid[1]) * i.grid[1],
            f = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r,
            u = this.originalPageX + Math.round((e - this.originalPageX) / i.grid[0]) * i.grid[0],
            e = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)),
            {
                top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var u = this.counter;
            this._delay(function() {
                u === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(n, t) {
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !t && r.push(function(n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            }),
            (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function(n) {
                this._trigger("update", n, this._uiHash())
            }),
            this !== this.currentContainer && (t || (r.push(function(n) {
                this._trigger("remove", n, this._uiHash())
            }),
            r.push(function(n) {
                return function(t) {
                    n._trigger("receive", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            r.push(function(n) {
                return function(t) {
                    n._trigger("update", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            i = this.containers.length - 1; i >= 0; i--)
                t || r.push(function(n) {
                    return function(t) {
                        n._trigger("deactivate", t, this._uiHash(this))
                    }
                }
                .call(this, this.containers[i])),
                this.containers[i].containerCache.over && (r.push(function(n) {
                    return function(t) {
                        n._trigger("out", t, this._uiHash(this))
                    }
                }
                .call(this, this.containers[i])),
                this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex),
            this.dragging = !1,
            this.cancelHelperRemoval) {
                if (!t) {
                    for (this._trigger("beforeStop", n, this._uiHash()),
                    i = 0; i < r.length; i++)
                        r[i].call(this, n);
                    this._trigger("stop", n, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (t || this._trigger("beforeStop", n, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null,
            !t) {
                for (i = 0; i < r.length; i++)
                    r[i].call(this, n);
                this._trigger("stop", n, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}(jQuery),
function(n, t) {
    var i = "ui-effects-";
    n.effects = {
        effect: {}
    },
    function(n, t) {
        function e(n, t, i) {
            var r = s[t.type] || {};
            return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n),
            isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : r.max < n ? r.max : n
        }
        function h(t) {
            var e = i()
              , o = e._rgba = [];
            return (t = t.toLowerCase(),
            r(v, function(n, i) {
                var f, s = i.re.exec(t), h = s && i.parse(s), r = i.space || "rgba";
                if (h)
                    return f = e[r](h),
                    e[u[r].cache] = f[u[r].cache],
                    o = e._rgba = f._rgba,
                    !1
            }),
            o.length) ? (o.join() === "0,0,0,0" && n.extend(o, f.transparent),
            e) : f[t]
        }
        function o(n, t, i) {
            return (i = (i + 1) % 1,
            i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
        }
        var y = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", a = /^([\-+])=\s*(\d+\.?\d*)/, v = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(n) {
                return [n[1], n[2], n[3], n[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(n) {
                return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(n) {
                return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(n) {
                return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(n) {
                return [n[1], n[2] / 100, n[3] / 100, n[4]]
            }
        }], i = n.Color = function(t, i, r, u) {
            return new n.Color.fn.parse(t,i,r,u)
        }
        , u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, s = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, c = i.support = {}, l = n("<p>")[0], f, r = n.each;
        l.style.cssText = "background-color:rgba(1,1,1,.5)",
        c.rgba = l.style.backgroundColor.indexOf("rgba") > -1,
        r(u, function(n, t) {
            t.cache = "_" + n,
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        i.fn = n.extend(i.prototype, {
            parse: function(o, s, c, l) {
                if (o === t)
                    return this._rgba = [null, null, null, null],
                    this;
                (o.jquery || o.nodeType) && (o = n(o).css(s),
                s = t);
                var a = this
                  , v = n.type(o)
                  , y = this._rgba = [];
                return (s !== t && (o = [o, s, c, l],
                v = "array"),
                v === "string") ? this.parse(h(o) || f._default) : v === "array" ? (r(u.rgba.props, function(n, t) {
                    y[t.idx] = e(o[t.idx], t)
                }),
                this) : v === "object" ? (o instanceof i ? r(u, function(n, t) {
                    o[t.cache] && (a[t.cache] = o[t.cache].slice())
                }) : r(u, function(t, i) {
                    var u = i.cache;
                    r(i.props, function(n, t) {
                        if (!a[u] && i.to) {
                            if (n === "alpha" || o[n] == null)
                                return;
                            a[u] = i.to(a._rgba)
                        }
                        a[u][t.idx] = e(o[n], t, !0)
                    }),
                    a[u] && n.inArray(null, a[u].slice(0, 3)) < 0 && (a[u][3] = 1,
                    i.from && (a._rgba = i.from(a[u])))
                }),
                this) : void 0
            },
            is: function(n) {
                var e = i(n)
                  , t = !0
                  , f = this;
                return r(u, function(n, i) {
                    var o, u = e[i.cache];
                    return u && (o = f[i.cache] || i.to && i.to(f._rgba) || [],
                    r(i.props, function(n, i) {
                        if (u[i.idx] != null)
                            return t = u[i.idx] === o[i.idx]
                    })),
                    t
                }),
                t
            },
            _space: function() {
                var n = []
                  , t = this;
                return r(u, function(i, r) {
                    t[r.cache] && n.push(i)
                }),
                n.pop()
            },
            transition: function(n, t) {
                var o = i(n)
                  , c = o._space()
                  , f = u[c]
                  , a = this.alpha() === 0 ? i("transparent") : this
                  , l = a[f.cache] || f.to(a._rgba)
                  , h = l.slice();
                return o = o[f.cache],
                r(f.props, function(n, i) {
                    var c = i.idx
                      , r = l[c]
                      , u = o[c]
                      , f = s[i.type] || {};
                    u !== null && (r === null ? h[c] = u : (f.mod && (u - r > f.mod / 2 ? r += f.mod : r - u > f.mod / 2 && (r -= f.mod)),
                    h[c] = e((u - r) * t + r, i)))
                }),
                this[c](h)
            },
            blend: function(t) {
                if (this._rgba[3] === 1)
                    return this;
                var u = this._rgba.slice()
                  , r = u.pop()
                  , f = i(t)._rgba;
                return i(n.map(u, function(n, t) {
                    return (1 - r) * f[t] + r * n
                }))
            },
            toRgbaString: function() {
                var i = "rgba("
                  , t = n.map(this._rgba, function(n, t) {
                    return n == null ? t > 2 ? 1 : 0 : n
                });
                return t[3] === 1 && (t.pop(),
                i = "rgb("),
                i + t.join() + ")"
            },
            toHslaString: function() {
                var i = "hsla("
                  , t = n.map(this.hsla(), function(n, t) {
                    return n == null && (n = t > 2 ? 1 : 0),
                    t && t < 3 && (n = Math.round(n * 100) + "%"),
                    n
                });
                return t[3] === 1 && (t.pop(),
                i = "hsl("),
                i + t.join() + ")"
            },
            toHexString: function(t) {
                var i = this._rgba.slice()
                  , r = i.pop();
                return t && i.push(~~(r * 255)),
                "#" + n.map(i, function(n) {
                    return n = (n || 0).toString(16),
                    n.length === 1 ? "0" + n : n
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }),
        i.fn.parse.prototype = i.fn,
        u.hsla.to = function(n) {
            if (n[0] == null || n[1] == null || n[2] == null)
                return [null, null, null, n[3]];
            var u = n[0] / 255, f = n[1] / 255, o = n[2] / 255, c = n[3], i = Math.max(u, f, o), s = Math.min(u, f, o), t = i - s, h = i + s, l = h * .5, r, e;
            return r = s === i ? 0 : u === i ? 60 * (f - o) / t + 360 : f === i ? 60 * (o - u) / t + 120 : 60 * (u - f) / t + 240,
            e = t === 0 ? 0 : l <= .5 ? t / h : t / (2 - h),
            [Math.round(r) % 360, e, l, c == null ? 1 : c]
        }
        ,
        u.hsla.from = function(n) {
            if (n[0] == null || n[1] == null || n[2] == null)
                return [null, null, null, n[3]];
            var f = n[0] / 360
              , u = n[1]
              , t = n[2]
              , e = n[3]
              , i = t <= .5 ? t * (1 + u) : t + u - t * u
              , r = 2 * t - i;
            return [Math.round(o(r, i, f + 1 / 3) * 255), Math.round(o(r, i, f) * 255), Math.round(o(r, i, f - 1 / 3) * 255), e]
        }
        ,
        r(u, function(u, f) {
            var c = f.props
              , o = f.cache
              , h = f.to
              , s = f.from;
            i.fn[u] = function(u) {
                if (h && !this[o] && (this[o] = h(this._rgba)),
                u === t)
                    return this[o].slice();
                var a, l = n.type(u), v = l === "array" || l === "object" ? u : arguments, f = this[o].slice();
                return r(c, function(n, t) {
                    var i = v[l === "object" ? n : t.idx];
                    i == null && (i = f[t.idx]),
                    f[t.idx] = e(i, t)
                }),
                s ? (a = i(s(f)),
                a[o] = f,
                a) : i(f)
            }
            ,
            r(c, function(t, r) {
                i.fn[t] || (i.fn[t] = function(i) {
                    var e = n.type(i), h = t === "alpha" ? this._hsla ? "hsla" : "rgba" : u, s = this[h](), o = s[r.idx], f;
                    return e === "undefined" ? o : (e === "function" && (i = i.call(this, o),
                    e = n.type(i)),
                    i == null && r.empty) ? this : (e === "string" && (f = a.exec(i),
                    f && (i = o + parseFloat(f[2]) * (f[1] === "+" ? 1 : -1))),
                    s[r.idx] = i,
                    this[h](s))
                }
                )
            })
        }),
        i.hook = function(t) {
            var u = t.split(" ");
            r(u, function(t, r) {
                n.cssHooks[r] = {
                    set: function(t, u) {
                        var o, f, e = "";
                        if (u !== "transparent" && (n.type(u) !== "string" || (o = h(u)))) {
                            if (u = i(o || u),
                            !c.rgba && u._rgba[3] !== 1) {
                                for (f = r === "backgroundColor" ? t.parentNode : t; (e === "" || e === "transparent") && f && f.style; )
                                    try {
                                        e = n.css(f, "backgroundColor"),
                                        f = f.parentNode
                                    } catch (s) {}
                                u = u.blend(e && e !== "transparent" ? e : "_default")
                            }
                            u = u.toRgbaString()
                        }
                        try {
                            t.style[r] = u
                        } catch (s) {}
                    }
                },
                n.fx.step[r] = function(t) {
                    t.colorInit || (t.start = i(t.elem, r),
                    t.end = i(t.end),
                    t.colorInit = !0),
                    n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }
        ,
        i.hook(y),
        n.cssHooks.borderColor = {
            expand: function(n) {
                var t = {};
                return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                    t["border" + r + "Color"] = n
                }),
                t
            }
        },
        f = n.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function() {
        function i(t) {
            var r, f, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, u = {};
            if (i && i.length && i[0] && i[i[0]])
                for (f = i.length; f--; )
                    r = i[f],
                    typeof i[r] == "string" && (u[n.camelCase(r)] = i[r]);
            else
                for (r in i)
                    typeof i[r] == "string" && (u[r] = i[r]);
            return u
        }
        function r(t, i) {
            var e = {}, r, u;
            for (r in i)
                u = i[r],
                t[r] !== u && (f[r] || (n.fx.step[r] || !isNaN(parseFloat(u))) && (e[r] = u));
            return e
        }
        var u = ["add", "remove", "toggle"]
          , f = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
            n.fx.step[i] = function(n) {
                (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (jQuery.style(n.elem, i, n.end),
                n.setAttr = !0)
            }
        }),
        n.fn.addBack || (n.fn.addBack = function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
        ),
        n.effects.animateClass = function(t, f, e, o) {
            var s = n.speed(f, e, o);
            return this.queue(function() {
                var e = n(this), h = e.attr("class") || "", o, f = s.children ? e.find("*").addBack() : e;
                f = f.map(function() {
                    var t = n(this);
                    return {
                        el: t,
                        start: i(this)
                    }
                }),
                o = function() {
                    n.each(u, function(n, i) {
                        t[i] && e[i + "Class"](t[i])
                    })
                }
                ,
                o(),
                f = f.map(function() {
                    return this.end = i(this.el[0]),
                    this.diff = r(this.start, this.end),
                    this
                }),
                e.attr("class", h),
                f = f.map(function() {
                    var r = this
                      , t = n.Deferred()
                      , i = n.extend({}, s, {
                        queue: !1,
                        complete: function() {
                            t.resolve(r)
                        }
                    });
                    return this.el.animate(this.diff, i),
                    t.promise()
                }),
                n.when.apply(n, f.get()).done(function() {
                    o(),
                    n.each(arguments, function() {
                        var t = this.el;
                        n.each(this.diff, function(n) {
                            t.css(n, "")
                        })
                    }),
                    s.complete.call(e[0])
                })
            })
        }
        ,
        n.fn.extend({
            addClass: function(t) {
                return function(i, r, u, f) {
                    return r ? n.effects.animateClass.call(this, {
                        add: i
                    }, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.addClass),
            removeClass: function(t) {
                return function(i, r, u, f) {
                    return arguments.length > 1 ? n.effects.animateClass.call(this, {
                        remove: i
                    }, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.removeClass),
            toggleClass: function(i) {
                return function(r, u, f, e, o) {
                    return typeof u == "boolean" || u === t ? f ? n.effects.animateClass.call(this, u ? {
                        add: r
                    } : {
                        remove: r
                    }, f, e, o) : i.apply(this, arguments) : n.effects.animateClass.call(this, {
                        toggle: r
                    }, u, f, e)
                }
            }(n.fn.toggleClass),
            switchClass: function(t, i, r, u, f) {
                return n.effects.animateClass.call(this, {
                    add: i,
                    remove: t
                }, r, u, f)
            }
        })
    }(),
    function() {
        function r(t, i, r, u) {
            return n.isPlainObject(t) && (i = t,
            t = t.effect),
            t = {
                effect: t
            },
            i == null && (i = {}),
            n.isFunction(i) && (u = i,
            r = null,
            i = {}),
            (typeof i == "number" || n.fx.speeds[i]) && (u = r,
            r = i,
            i = {}),
            n.isFunction(r) && (u = r,
            r = null),
            i && n.extend(t, i),
            r = r || i.duration,
            t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default,
            t.complete = u || i.complete,
            t
        }
        function u(t) {
            return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : n.isFunction(t) ? !0 : typeof t == "object" && !t.effect ? !0 : !1
        }
        n.extend(n.effects, {
            version: "1.10.2",
            save: function(n, t) {
                for (var r = 0; r < t.length; r++)
                    t[r] !== null && n.data(i + t[r], n[0].style[t[r]])
            },
            restore: function(n, r) {
                for (var f, u = 0; u < r.length; u++)
                    r[u] !== null && (f = n.data(i + r[u]),
                    f === t && (f = ""),
                    n.css(r[u], f))
            },
            setMode: function(n, t) {
                return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"),
                t
            },
            getBaseline: function(n, t) {
                var r, i;
                switch (n[0]) {
                case "top":
                    r = 0;
                    break;
                case "middle":
                    r = .5;
                    break;
                case "bottom":
                    r = 1;
                    break;
                default:
                    r = n[0] / t.height
                }
                switch (n[1]) {
                case "left":
                    i = 0;
                    break;
                case "center":
                    i = .5;
                    break;
                case "right":
                    i = 1;
                    break;
                default:
                    i = n[1] / t.width
                }
                return {
                    x: i,
                    y: r
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var r = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    float: t.css("float")
                }
                  , u = n("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , f = {
                    width: t.width(),
                    height: t.height()
                }
                  , i = document.activeElement;
                try {
                    i.id
                } catch (e) {
                    i = document.body
                }
                return t.wrap(u),
                (t[0] === i || n.contains(t[0], i)) && n(i).focus(),
                u = t.parent(),
                t.css("position") === "static" ? (u.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (n.extend(r, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                n.each(["top", "left", "bottom", "right"], function(n, i) {
                    r[i] = t.css(i),
                    isNaN(parseInt(r[i], 10)) && (r[i] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(f),
                u.css(r).show()
            },
            removeWrapper: function(t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === i || n.contains(t[0], i)) && n(i).focus()),
                t
            },
            setTransition: function(t, i, r, u) {
                return u = u || {},
                n.each(i, function(n, i) {
                    var f = t.cssUnit(i);
                    f[0] > 0 && (u[i] = f[0] * r + f[1])
                }),
                u
            }
        }),
        n.fn.extend({
            effect: function() {
                function u(r) {
                    function e() {
                        n.isFunction(o) && o.call(u[0]),
                        n.isFunction(r) && r()
                    }
                    var u = n(this)
                      , o = t.complete
                      , f = t.mode;
                    (u.is(":hidden") ? f === "hide" : f === "show") ? (u[f](),
                    e()) : i.call(u[0], t, e)
                }
                var t = r.apply(this, arguments)
                  , f = t.mode
                  , e = t.queue
                  , i = n.effects.effect[t.effect];
                return n.fx.off || !i ? f ? this[f](t.duration, t.complete) : this.each(function() {
                    t.complete && t.complete.call(this)
                }) : e === !1 ? this.each(u) : this.queue(e || "fx", u)
            },
            show: function(n) {
                return function(t) {
                    if (u(t))
                        return n.apply(this, arguments);
                    var i = r.apply(this, arguments);
                    return i.mode = "show",
                    this.effect.call(this, i)
                }
            }(n.fn.show),
            hide: function(n) {
                return function(t) {
                    if (u(t))
                        return n.apply(this, arguments);
                    var i = r.apply(this, arguments);
                    return i.mode = "hide",
                    this.effect.call(this, i)
                }
            }(n.fn.hide),
            toggle: function(n) {
                return function(t) {
                    if (u(t) || typeof t == "boolean")
                        return n.apply(this, arguments);
                    var i = r.apply(this, arguments);
                    return i.mode = "toggle",
                    this.effect.call(this, i)
                }
            }(n.fn.toggle),
            cssUnit: function(t) {
                var r = this.css(t)
                  , i = [];
                return n.each(["em", "px", "%", "pt"], function(n, t) {
                    r.indexOf(t) > 0 && (i = [parseFloat(r), t])
                }),
                i
            }
        })
    }(),
    function() {
        var t = {};
        n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
            t[i] = function(t) {
                return Math.pow(t, n + 2)
            }
        }),
        n.extend(t, {
            Sine: function(n) {
                return 1 - Math.cos(n * Math.PI / 2)
            },
            Circ: function(n) {
                return 1 - Math.sqrt(1 - n * n)
            },
            Elastic: function(n) {
                return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(n) {
                return n * n * (3 * n - 2)
            },
            Bounce: function(n) {
                for (var i, t = 4; n < ((i = Math.pow(2, --t)) - 1) / 11; )
                    ;
                return 1 / Math.pow(4, 3 - t) - 7.5625 * Math.pow((i * 3 - 2) / 22 - n, 2)
            }
        }),
        n.each(t, function(t, i) {
            n.easing["easeIn" + t] = i,
            n.easing["easeOut" + t] = function(n) {
                return 1 - i(1 - n)
            }
            ,
            n.easing["easeInOut" + t] = function(n) {
                return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
            }
        })
    }()
}(jQuery),
function(n) {
    var u = 0
      , i = {}
      , r = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide",
    r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "show",
    n.widget("ui.accordion", {
        version: "1.10.2",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = n(),
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
            t.collapsible || t.active !== !1 && t.active != null || (t.active = 0),
            this._processPanels(),
            t.active < 0 && (t.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : n(),
                content: this.active.length ? this.active.next() : n()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers),
            this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),
            this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var n;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            this._destroyIcons(),
            n = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            this.options.heightStyle !== "content" && n.css("height", "")
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            n === "event" && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(t)),
            this._super(n, t),
            n !== "collapsible" || t || this.options.active !== !1 || this._activate(0),
            n === "icons" && (this._destroyIcons(),
            t && this._createIcons()),
            n === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode
                  , u = this.headers.length
                  , f = this.headers.index(t.target)
                  , r = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    r = this.headers[(f + 1) % u];
                    break;
                case i.LEFT:
                case i.UP:
                    r = this.headers[(f - 1 + u) % u];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    r = this.headers[0];
                    break;
                case i.END:
                    r = this.headers[u - 1]
                }
                r && (n(t.target).attr("tabIndex", -1),
                n(r).attr("tabIndex", 0),
                r.focus(),
                t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t = this.options;
            this._processPanels(),
            (t.active !== !1 || t.collapsible !== !0) && this.headers.length || (t.active = !1,
            this.active = n()),
            t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1,
            this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var t, i = this.options, f = i.heightStyle, e = this.element.parent(), r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++u);
            this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this.headers.attr("role", "tab").each(function(t) {
                var f = n(this)
                  , u = f.attr("id")
                  , e = f.next()
                  , i = e.attr("id");
                u || (u = r + "-header-" + t,
                f.attr("id", u)),
                i || (i = r + "-panel-" + t,
                e.attr("id", i)),
                f.attr("aria-controls", i),
                e.attr("aria-labelledby", u)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            f === "fill" ? (t = e.height(),
            this.element.siblings(":visible").each(function() {
                var r = n(this)
                  , i = r.css("position");
                i !== "absolute" && i !== "fixed" && (t -= r.outerHeight(!0))
            }),
            this.headers.each(function() {
                t -= n(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : f === "auto" && (t = 0,
            this.headers.next().each(function() {
                t = Math.max(t, n(this).css("height", "").height())
            }).height(t))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return typeof t == "number" ? this.headers.eq(t) : n()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var i = this.options
              , u = this.active
              , r = n(t.currentTarget)
              , f = r[0] === u[0]
              , e = f && i.collapsible
              , s = e ? n() : r.next()
              , h = u.next()
              , o = {
                oldHeader: u,
                oldPanel: h,
                newHeader: e ? n() : r,
                newPanel: s
            };
            (t.preventDefault(),
            (!f || i.collapsible) && this._trigger("beforeActivate", t, o) !== !1) && (i.active = e ? !1 : this.headers.index(r),
            this.active = f ? n() : r,
            this._toggle(o),
            u.removeClass("ui-accordion-header-active ui-state-active"),
            i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),
            f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
            i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),
            r.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var r = t.newPanel
              , i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = r,
            this.prevHide = i,
            this.options.animate ? this._animate(r, i, t) : (i.hide(),
            r.show(),
            this._toggleComplete(t)),
            i.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            i.prev().attr("aria-selected", "false"),
            r.length && i.length ? i.prev().attr("tabIndex", -1) : r.length && this.headers.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1),
            r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(n, t, u) {
            var a, e, f, l = this, c = 0, v = n.length && (!t.length || n.index() < t.index()), s = this.options.animate || {}, o = v && s.down || s, h = function() {
                l._toggleComplete(u)
            };
            if (typeof o == "number" && (f = o),
            typeof o == "string" && (e = o),
            e = e || o.easing || s.easing,
            f = f || o.duration || s.duration,
            !t.length)
                return n.animate(r, f, e, h);
            if (!n.length)
                return t.animate(i, f, e, h);
            a = n.show().outerHeight(),
            t.animate(i, {
                duration: f,
                easing: e,
                step: function(n, t) {
                    t.now = Math.round(n)
                }
            }),
            n.hide().animate(r, {
                duration: f,
                easing: e,
                complete: h,
                step: function(n, i) {
                    i.now = Math.round(n),
                    i.prop !== "height" ? c += i.now : l.options.heightStyle !== "content" && (i.now = Math.round(a - t.outerHeight() - c),
                    c = 0)
                }
            })
        },
        _toggleComplete: function(n) {
            var t = n.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
            t.length && (t.parent()[0].className = t.parent()[0].className),
            this._trigger("activate", null, n)
        }
    })
}(jQuery),
function(n) {
    var i = 0;
    n.widget("ui.autocomplete", {
        version: "1.10.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t, r, i, e = this.element[0].nodeName.toLowerCase(), f = e === "textarea", u = e === "input";
            this.isMultiLine = f ? !0 : u ? !1 : this.element.prop("isContentEditable"),
            this.valueMethod = this.element[f || u ? "val" : "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(u) {
                    if (this.element.prop("readOnly")) {
                        t = !0,
                        i = !0,
                        r = !0;
                        return
                    }
                    t = !1,
                    i = !1,
                    r = !1;
                    var f = n.ui.keyCode;
                    switch (u.keyCode) {
                    case f.PAGE_UP:
                        t = !0,
                        this._move("previousPage", u);
                        break;
                    case f.PAGE_DOWN:
                        t = !0,
                        this._move("nextPage", u);
                        break;
                    case f.UP:
                        t = !0,
                        this._keyEvent("previous", u);
                        break;
                    case f.DOWN:
                        t = !0,
                        this._keyEvent("next", u);
                        break;
                    case f.ENTER:
                    case f.NUMPAD_ENTER:
                        this.menu.active && (t = !0,
                        u.preventDefault(),
                        this.menu.select(u));
                        break;
                    case f.TAB:
                        this.menu.active && this.menu.select(u);
                        break;
                    case f.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term),
                        this.close(u),
                        u.preventDefault());
                        break;
                    default:
                        r = !0,
                        this._searchTimeout(u)
                    }
                },
                keypress: function(i) {
                    if (t) {
                        t = !1,
                        i.preventDefault();
                        return
                    }
                    if (!r) {
                        var u = n.ui.keyCode;
                        switch (i.keyCode) {
                        case u.PAGE_UP:
                            this._move("previousPage", i);
                            break;
                        case u.PAGE_DOWN:
                            this._move("nextPage", i);
                            break;
                        case u.UP:
                            this._keyEvent("previous", i);
                            break;
                        case u.DOWN:
                            this._keyEvent("next", i)
                        }
                    }
                },
                input: function(n) {
                    if (i) {
                        i = !1,
                        n.preventDefault();
                        return
                    }
                    this._searchTimeout(n)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(n) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching),
                    this.close(n),
                    this._change(n)
                }
            }),
            this._initSource(),
            this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                input: n(),
                role: null
            }).hide().data("ui-menu"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    n(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(r) {
                            r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1,
                    t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            n(t.target).trigger(t.originalEvent)
                        });
                        return
                    }
                    var r = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: r
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                },
                menuselect: function(n, t) {
                    var i = t.item.data("ui-autocomplete-item")
                      , r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                    this.previous = r,
                    this._delay(function() {
                        this.previous = r,
                        this.selectedItem = i
                    })),
                    !1 !== this._trigger("select", n, {
                        item: i
                    }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(n),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = n("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(n, t) {
            this._super(n, t),
            n === "source" && this._initSource(),
            n === "appendTo" && this.menu.element.appendTo(this._appendTo()),
            n === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)),
            t || (t = this.element.closest(".ui-front")),
            t.length || (t = this.document[0].body),
            t
        },
        _initSource: function() {
            var i, r, t = this;
            n.isArray(this.options.source) ? (i = this.options.source,
            this.source = function(t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }
            ) : typeof this.options.source == "string" ? (r = this.options.source,
            this.source = function(i, u) {
                t.xhr && t.xhr.abort(),
                t.xhr = n.ajax({
                    url: r,
                    data: i,
                    dataType: "json",
                    success: function(n) {
                        u(n)
                    },
                    error: function() {
                        u([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(n) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null,
                this.search(null, n))
            }, this.options.delay)
        },
        search: function(n, t) {
            return (n = n != null ? n : this._value(),
            this.term = this._value(),
            n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
        },
        _search: function(n) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: n
            }, this._response())
        },
        _response: function() {
            var n = this
              , t = ++i;
            return function(r) {
                t === i && n.__response(r),
                n.pending--,
                n.pending || n.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(n) {
            n && (n = this._normalize(n)),
            this._trigger("response", null, {
                content: n
            }),
            !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n),
            this._trigger("open")) : this._close()
        },
        close: function(n) {
            this.cancelSearch = !0,
            this._close(n)
        },
        _close: function(n) {
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", n))
        },
        _change: function(n) {
            this.previous !== this._value() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : n.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(n.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var r = this;
            n.each(i, function(n, i) {
                r._renderItemData(t, i)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return n("<li>").append(n("<a>").text(i.label)).appendTo(t)
        },
        _move: function(n, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
                this._value(this.term),
                this.menu.blur();
                return
            }
            this.menu[n](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t),
            t.preventDefault())
        }
    }),
    n.extend(n.ui.autocomplete, {
        escapeRegex: function(n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var r = new RegExp(n.ui.autocomplete.escapeRegex(i),"i");
            return n.grep(t, function(n) {
                return r.test(n.label || n.value || n)
            })
        }
    }),
    n.widget("ui.autocomplete", n.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(n) {
                    return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(n) {
            var t;
            (this._superApply(arguments),
            this.options.disabled || this.cancelSearch) || (t = n && n.length ? this.options.messages.results(n.length) : this.options.messages.noResults,
            this.liveRegion.text(t))
        }
    })
}(jQuery),
function(n) {
    var r, o, s, i, e = "ui-button ui-widget ui-state-default ui-corner-all", h = "ui-state-hover ui-state-active ", f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", c = function() {
        var t = n(this).find(":ui-button");
        setTimeout(function() {
            t.button("refresh")
        }, 1)
    }, u = function(t) {
        var i = t.name
          , u = t.form
          , r = n([]);
        return i && (i = i.replace(/'/g, "\\'"),
        r = u ? n(u).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function() {
            return !this.form
        })),
        r
    };
    n.widget("ui.button", {
        version: "1.10.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, c),
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
            this._determineButtonType(),
            this.hasTitle = !!this.buttonElement.attr("title");
            var f = this
              , t = this.options
              , l = this.type === "checkbox" || this.type === "radio"
              , a = l ? "" : "ui-state-active"
              , h = "ui-state-focus";
            t.label === null && (t.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()),
            this._hoverable(this.buttonElement),
            this.buttonElement.addClass(e).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                t.disabled || this === r && n(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                t.disabled || n(this).removeClass(a)
            }).bind("click" + this.eventNamespace, function(n) {
                t.disabled && (n.preventDefault(),
                n.stopImmediatePropagation())
            }),
            this.element.bind("focus" + this.eventNamespace, function() {
                f.buttonElement.addClass(h)
            }).bind("blur" + this.eventNamespace, function() {
                f.buttonElement.removeClass(h)
            }),
            l && (this.element.bind("change" + this.eventNamespace, function() {
                i || f.refresh()
            }),
            this.buttonElement.bind("mousedown" + this.eventNamespace, function(n) {
                t.disabled || (i = !1,
                o = n.pageX,
                s = n.pageY)
            }).bind("mouseup" + this.eventNamespace, function(n) {
                t.disabled || (o !== n.pageX || s !== n.pageY) && (i = !0)
            })),
            this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (t.disabled || i)
                    return !1
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (t.disabled || i)
                    return !1;
                n(this).addClass("ui-state-active"),
                f.buttonElement.attr("aria-pressed", "true");
                var r = f.element[0];
                u(r).not(r).map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (t.disabled)
                    return !1;
                n(this).addClass("ui-state-active"),
                r = this;
                f.document.one("mouseup", function() {
                    r = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (t.disabled)
                    return !1;
                n(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(i) {
                if (t.disabled)
                    return !1;
                (i.keyCode === n.ui.keyCode.SPACE || i.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                n(this).removeClass("ui-state-active")
            }),
            this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === n.ui.keyCode.SPACE && n(this).click()
            })),
            this._setOption("disabled", t.disabled),
            this._resetButton()
        },
        _determineButtonType: function() {
            var n, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button",
            this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().last(),
            t = "label[for='" + this.element.attr("id") + "']",
            this.buttonElement = n.find(t),
            this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(),
            this.buttonElement = n.filter(t),
            this.buttonElement.length || (this.buttonElement = n.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"),
            i = this.element.is(":checked"),
            i && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement.removeClass(e + " " + h + " " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(n, t) {
            if (this._super(n, t),
            n === "disabled") {
                t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t),
            this.type === "radio" ? u(this.element[0]).each(function() {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var i = this.buttonElement.removeClass(f)
              , e = n("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text()
              , t = this.options.icons
              , u = t.primary && t.secondary
              , r = [];
            t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")),
            t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><img src='../../Assets/images/img_trans.gif' alt='Close message' /></span>"),
            t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'></span>"),
            this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || i.attr("title", n.trim(e)))) : r.push("ui-button-text-only"),
            i.addClass(r.join(" "))
        }
    }),
    n.widget("ui.buttonset", {
        version: "1.10.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(n, t) {
            n === "disabled" && this.buttons.button("option", n, t),
            this._super(n, t)
        },
        refresh: function() {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"),
            this.buttons.map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function(n, t) {
    function e() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "",
            prevText: "",
            nextText: "",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        n.extend(this._defaults, this.regional[""]),
        this.dpDiv = o(n("<div id='" + this._mainDivId + "' class='ui-datepicker'></div>"))
    }
    function o(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            n(this).removeClass("ui-state-hover"),
            this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover"),
            this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            n.datepicker._isDisabledDatepicker(f.inline ? t.parent()[0] : f.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
            n(this).addClass("ui-state-hover"),
            this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"),
            this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function u(t, i) {
        n.extend(t, i);
        for (var r in i)
            i[r] == null && (t[r] = i[r]);
        return t
    }
    n.extend(n.ui, {
        datepicker: {
            version: "1.10.2"
        }
    });
    var i = "datepicker", r = +new Date, f;
    n.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(n) {
            return u(this._defaults, n || {}),
            this
        },
        _attachDatepicker: function(t, i) {
            var u, f, r;
            u = t.nodeName.toLowerCase(),
            f = u === "div" || u === "span",
            t.id || (this.uuid += 1,
            t.id = "dp" + this.uuid),
            r = this._newInst(n(t), f),
            r.settings = n.extend({}, i || {}),
            u === "input" ? this._connectDatepicker(t, r) : f && this._inlineDatepicker(t, r)
        },
        _newInst: function(t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? o(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, r) {
            var u = n(t);
            (r.append = n([]),
            r.trigger = n([]),
            u.hasClass(this.markerClassName)) || (this._attachments(u, r),
            u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
            this._autoSize(r),
            n.data(t, i, r),
            r.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var u, r, f, o = this._get(i, "appendText"), e = this._get(i, "isRTL");
            i.append && i.append.remove(),
            o && (i.append = n("<span class='" + this._appendClass + "'>" + o + "</span>"),
            t[e ? "before" : "after"](i.append)),
            t.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            u = this._get(i, "showOn"),
            (u === "focus" || u === "both") && t.focus(this._showDatepicker),
            (u === "button" || u === "both") && (r = this._get(i, "buttonText"),
            f = this._get(i, "buttonImage"),
            i.trigger = n(this._get(i, "buttonImageOnly") ? n("<span><img src='../../Assets/images/img_trans.gif' alt='Open calendar' /></span>").addClass(this._triggerClass).attr({
                src: f,
                alt: r,
                title: r
            }) : n("<button type='button'></button>").addClass(this._triggerClass).html(f ? n("<span/>").attr({
                src: f,
                alt: r,
                title: r
            }) : r)),
            t[e ? "before" : "after"](i.trigger),
            i.trigger.click(function() {
                return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? (n.datepicker._hideDatepicker(),
                n.datepicker._showDatepicker(t[0])) : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(),
                n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]),
                !1
            }))
        },
        _autoSize: function(n) {
            if (this._get(n, "autoSize") && !n.inline) {
                var u, f, e, t, i = new Date(2009,11,20), r = this._get(n, "dateFormat");
                r.match(/[DM]/) && (u = function(n) {
                    for (f = 0,
                    e = 0,
                    t = 0; t < n.length; t++)
                        n[t].length > f && (f = n[t].length,
                        e = t);
                    return e
                }
                ,
                i.setMonth(u(this._get(n, r.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                i.setDate(u(this._get(n, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay())),
                n.input.attr("size", this._formatDate(n, i).length)
            }
        },
        _inlineDatepicker: function(t, r) {
            var u = n(t);
            u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv),
            n.data(t, i, r),
            this._setDate(r, this._getDefaultDate(r), !0),
            this._updateDatepicker(r),
            this._updateAlternate(r),
            r.settings.disabled && this._disableDatepicker(t),
            r.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, r, f, e, o) {
            var c, a, v, l, h, s = this._dialogInst;
            return s || (this.uuid += 1,
            c = "dp" + this.uuid,
            this._dialogInput = n("<input type='text' id='" + c + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.keydown(this._doKeyDown),
            n("body").append(this._dialogInput),
            s = this._dialogInst = this._newInst(this._dialogInput, !1),
            s.settings = {},
            n.data(this._dialogInput[0], i, s)),
            u(s.settings, e || {}),
            r = r && r.constructor === Date ? this._formatDate(s, r) : r,
            this._dialogInput.val(r),
            this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null,
            this._pos || (a = document.documentElement.clientWidth,
            v = document.documentElement.clientHeight,
            l = document.documentElement.scrollLeft || document.body.scrollLeft,
            h = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [a / 2 - 100 + l, v / 2 - 150 + h]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            s.settings.onSelect = f,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            n.blockUI && n.blockUI(this.dpDiv),
            n.data(this._dialogInput[0], i, s),
            this
        },
        _destroyDatepicker: function(t) {
            var r, u = n(t), f = n.data(t, i);
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            n.removeData(t, i),
            r === "input" ? (f.append.remove(),
            f.trigger.remove(),
            u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && u.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var r, u, f = n(t), e = n.data(t, i);
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            r === "input" ? (t.disabled = !1,
            e.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : (r === "div" || r === "span") && (u = f.children("." + this._inlineClass),
            u.children().removeClass("ui-state-disabled"),
            u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n === t ? null : n
            }))
        },
        _disableDatepicker: function(t) {
            var r, u, f = n(t), e = n.data(t, i);
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            r === "input" ? (t.disabled = !0,
            e.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : (r === "div" || r === "span") && (u = f.children("." + this._inlineClass),
            u.children().addClass("ui-state-disabled"),
            u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n === t ? null : n
            }),
            this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(n) {
            if (!n)
                return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === n)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return n.data(t, i)
            } catch (r) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(i, r, f) {
            var o, c, h, s, e = this._getInst(i);
            if (arguments.length === 2 && typeof r == "string")
                return r === "defaults" ? n.extend({}, n.datepicker._defaults) : e ? r === "all" ? n.extend({}, e.settings) : this._get(e, r) : null;
            o = r || {},
            typeof r == "string" && (o = {},
            o[r] = f),
            e && (this._curInst === e && this._hideDatepicker(),
            c = this._getDateDatepicker(i, !0),
            h = this._getMinMaxDate(e, "min"),
            s = this._getMinMaxDate(e, "max"),
            u(e.settings, o),
            h !== null && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, h)),
            s !== null && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, s)),
            "disabled"in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)),
            this._attachments(n(i), e),
            this._autoSize(e),
            this._setDate(e, c),
            this._updateAlternate(e),
            this._updateDatepicker(e))
        },
        _changeDatepicker: function(n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function(n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var f, o, u, i = n.datepicker._getInst(t.target), r = !0, e = i.dpDiv.is(".ui-datepicker-rtl");
            if (i._keyEvent = !0,
            n.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker(),
                    r = !1;
                    break;
                case 13:
                    return u = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv),
                    u[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, u[0]),
                    f = n.datepicker._get(i, "onSelect"),
                    f ? (o = n.datepicker._formatDate(i),
                    f.apply(i.input ? i.input[0] : null, [o, i])) : n.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target),
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target),
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? 1 : -1, "D"),
                    r = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D"),
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? -1 : 1, "D"),
                    r = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D"),
                    r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
                }
            else
                t.keyCode === 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var r, i, u = n.datepicker._getInst(t.target);
            if (n.datepicker._get(u, "constrainInput"))
                return r = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")),
                i = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode),
                t.ctrlKey || t.metaKey || i < " " || !r || r.indexOf(i) > -1
        },
        _doKeyUp: function(t) {
            var r, i = n.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal)
                try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i)),
                    r && (n.datepicker._setDateFromField(i),
                    n.datepicker._updateAlternate(i),
                    n.datepicker._updateDatepicker(i))
                } catch (u) {}
            return !0
        },
        _showDatepicker: function(t) {
            function a() {
                return parseFloat(n("body").css("font-size"))
            }
            var i, s, c, o, r, e, h, l;
            if ((t = t.target || t,
            t.nodeName.toLowerCase() !== "input" && (t = n("input", t.parentNode)[0]),
            !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) && (i = n.datepicker._getInst(t),
            n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0),
            i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])),
            s = n.datepicker._get(i, "beforeShow"),
            c = s ? s.apply(t, [t, i]) : {},
            c !== !1)) {
                u(i.settings, c),
                i.lastVal = null,
                n.datepicker._lastInput = t,
                n.datepicker._setDateFromField(i),
                n.datepicker._inDialog && (t.value = ""),
                n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t),
                n.datepicker._pos[1] += t.offsetHeight),
                o = !1,
                n(t).parents().each(function() {
                    return o |= n(this).css("position") === "fixed",
                    !o
                }),
                r = {
                    left: n.datepicker._pos[0],
                    top: n.datepicker._pos[1]
                },
                n.datepicker._pos = null,
                i.dpDiv.empty(),
                i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }),
                n.datepicker._updateDatepicker(i);
                var y = this._getNumberOfMonths(i)
                  , f = y[1]
                  , v = 17;
                f > 1 && (r.left = r.left + t.offsetWidth - (v * f - (5 * f + f / 2)) / 2 * a() + 5 * f),
                l = r.top + 5,
                r = n.datepicker._checkOffset(i, r, o),
                i.dpDiv.css({
                    position: n.datepicker._inDialog && n.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: r.left + "px",
                    top: l + "px"
                }),
                i.inline || (e = n.datepicker._get(i, "showAnim"),
                h = n.datepicker._get(i, "duration"),
                i.dpDiv.zIndex(n(t).zIndex() + 1),
                n.datepicker._datepickerShowing = !0,
                n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null),
                i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(),
                n.datepicker._curInst = i)
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4,
            f = t,
            t.dpDiv.empty().append(this._generateHTML(t)),
            this._attachHandlers(t),
            t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var u, r = this._getNumberOfMonths(t), i = r[1], e = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            i > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", e * i - (5 * i + i / 2) + "em"),
            t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            t === n.datepicker._curInst && n.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] !== document.activeElement && t.input.focus(),
            t.yearshtml && (u = t.yearshtml,
            setTimeout(function() {
                u === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                u = t.yearshtml = null
            }, 0))
        },
        _getBorders: function(n) {
            var t = function(n) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[n] || n
            };
            return [parseFloat(t(n.css("border-left-width"))), parseFloat(t(n.css("border-top-width")))]
        },
        _checkOffset: function(t, i, r) {
            var u = t.dpDiv.outerWidth()
              , e = t.dpDiv.outerHeight()
              , h = t.input ? t.input.outerWidth() : 0
              , s = t.input ? t.input.outerHeight() : 0
              , f = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft())
              , o = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h : 0,
            i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0,
            i.top -= r && i.top === t.input.offset().top + s ? n(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + u > f && f > u ? Math.abs(i.left + u - f) : 0),
            i.top -= Math.min(i.top, i.top + e > o && o > e ? Math.abs(e + s) : 0),
            i
        },
        _findPos: function(t) {
            for (var i, u = this._getInst(t), r = this._get(u, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || n.expr.filters.hidden(t)); )
                t = t[r ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var u, e, f, o, r = this._curInst;
            r && (!t || r === n.data(t, i)) && this._datepickerShowing && (u = this._get(r, "showAnim"),
            e = this._get(r, "duration"),
            f = function() {
                n.datepicker._tidyDialog(r)
            }
            ,
            n.effects && (n.effects.effect[u] || n.effects[u]) ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), e, f) : r.dpDiv[u === "slideDown" ? "slideUp" : u === "fadeIn" ? "fadeOut" : "hide"](u ? e : null, f),
            u || f(),
            this._datepickerShowing = !1,
            o = this._get(r, "onClose"),
            o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            n.blockUI && (n.unblockUI(),
            n("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(n) {
            n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _adjustDate: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r === "M" ? this._get(u, "showCurrentAtPos") : 0), r),
            this._updateDatepicker(u))
        },
        _gotoToday: function(t) {
            var r, u = n(t), i = this._getInst(u[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
            i.drawMonth = i.selectedMonth = i.currentMonth,
            i.drawYear = i.selectedYear = i.currentYear) : (r = new Date,
            i.selectedDay = r.getDate(),
            i.drawMonth = i.selectedMonth = r.getMonth(),
            i.drawYear = i.selectedYear = r.getFullYear()),
            this._notifyChange(i),
            this._adjustDate(u)
        },
        _selectMonthYear: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            u["selected" + (r === "M" ? "Month" : "Year")] = u["draw" + (r === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(u),
            this._adjustDate(f)
        },
        _selectDay: function(t, i, r, u) {
            var f, e = n(t);
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]),
            f.selectedDay = f.currentDay = n("a", u).html(),
            f.selectedMonth = f.currentMonth = i,
            f.selectedYear = f.currentYear = r,
            this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(t) {
            var i = n(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var u, f = n(t), r = this._getInst(f[0]);
            i = i != null ? i : this._formatDate(r),
            r.input && r.input.val(i),
            this._updateAlternate(r),
            u = this._get(r, "onSelect"),
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"),
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(),
            this._lastInput = r.input[0],
            typeof r.input[0] != "object" && r.input.focus(),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var u, f, i, r = this._get(t, "altField");
            r && (u = this._get(t, "altFormat") || this._get(t, "dateFormat"),
            f = this._getDate(t),
            i = this.formatDate(u, f, this._getFormatConfig(t)),
            n(r).each(function() {
                n(this).val(i)
            }))
        },
        noWeekends: function(n) {
            var t = n.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(n) {
            var i, t = new Date(n.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
            i = t.getTime(),
            t.setMonth(0),
            t.setDate(1),
            Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, r) {
            if (t == null || i == null)
                throw "Invalid arguments";
            if (i = typeof i == "object" ? i.toString() : i + "",
            i === "")
                return null;
            for (var p, y, f = 0, w = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, tt = typeof w != "string" ? w : (new Date).getFullYear() % 100 + parseInt(w, 10), it = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, g = (r ? r.dayNames : null) || this._defaults.dayNames, d = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, nt = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, o = -1, h = -1, a = -1, v = !1, u, l = function(n) {
                var i = s + 1 < t.length && t.charAt(s + 1) === n;
                return i && s++,
                i
            }, c = function(n) {
                var e = l(n)
                  , r = n === "@" ? 14 : n === "!" ? 20 : n === "y" && e ? 4 : n === "o" ? 3 : 2
                  , u = new RegExp("^\\d{1," + r + "}")
                  , t = i.substring(f).match(u);
                if (!t)
                    throw "Missing number at position " + f;
                return f += t[0].length,
                parseInt(t[0], 10)
            }, k = function(t, r, u) {
                var e = -1
                  , o = n.map(l(t) ? u : r, function(n, t) {
                    return [[t, n]]
                }).sort(function(n, t) {
                    return -(n[1].length - t[1].length)
                });
                if (n.each(o, function(n, t) {
                    var r = t[1];
                    if (i.substr(f, r.length).toLowerCase() === r.toLowerCase())
                        return e = t[0],
                        f += r.length,
                        !1
                }),
                e !== -1)
                    return e + 1;
                throw "Unknown name at position " + f;
            }, b = function() {
                if (i.charAt(f) !== t.charAt(s))
                    throw "Unexpected literal at position " + f;
                f++
            }, s = 0; s < t.length; s++)
                if (v)
                    t.charAt(s) !== "'" || l("'") ? b() : v = !1;
                else
                    switch (t.charAt(s)) {
                    case "d":
                        h = c("d");
                        break;
                    case "D":
                        k("D", it, g);
                        break;
                    case "o":
                        a = c("o");
                        break;
                    case "m":
                        o = c("m");
                        break;
                    case "M":
                        o = k("M", d, nt);
                        break;
                    case "y":
                        e = c("y");
                        break;
                    case "@":
                        u = new Date(c("@")),
                        e = u.getFullYear(),
                        o = u.getMonth() + 1,
                        h = u.getDate();
                        break;
                    case "!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4),
                        e = u.getFullYear(),
                        o = u.getMonth() + 1,
                        h = u.getDate();
                        break;
                    case "'":
                        l("'") ? b() : v = !0;
                        break;
                    default:
                        b()
                    }
            if (f < i.length && (y = i.substr(f),
            !/^\s+/.test(y)))
                throw "Extra/unparsed characters found in date: " + y;
            if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= tt ? 0 : -100)),
            a > -1) {
                o = 1,
                h = a;
                do {
                    if (p = this._getDaysInMonth(e, o - 1),
                    h <= p)
                        break;
                    o++,
                    h -= p
                } while (1)
            }
            if (u = this._daylightSavingAdjust(new Date(e,o - 1,h)),
            u.getFullYear() !== e || u.getMonth() + 1 !== o || u.getDate() !== h)
                throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
        formatDate: function(n, t, i) {
            if (!t)
                return "";
            var u, c = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, h = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, l = (i ? i.monthNames : null) || this._defaults.monthNames, f = function(t) {
                var i = u + 1 < n.length && n.charAt(u + 1) === t;
                return i && u++,
                i
            }, e = function(n, t, i) {
                var r = "" + t;
                if (f(n))
                    while (r.length < i)
                        r = "0" + r;
                return r
            }, s = function(n, t, i, r) {
                return f(n) ? r[t] : i[t]
            }, r = "", o = !1;
            if (t)
                for (u = 0; u < n.length; u++)
                    if (o)
                        n.charAt(u) !== "'" || f("'") ? r += n.charAt(u) : o = !1;
                    else
                        switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2);
                            break;
                        case "D":
                            r += s("D", t.getDay(), c, a);
                            break;
                        case "o":
                            r += e("o", Math.round((+new Date(t.getFullYear(),t.getMonth(),t.getDate()) - +new Date(t.getFullYear(),0,0)) / 864e5), 3);
                            break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            r += s("M", t.getMonth(), h, l);
                            break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            r += t.getTime();
                            break;
                        case "!":
                            r += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            f("'") ? r += "'" : o = !0;
                            break;
                        default:
                            r += n.charAt(u)
                        }
            return r
        },
        _possibleChars: function(n) {
            for (var i = "", r = !1, u = function(i) {
                var r = t + 1 < n.length && n.charAt(t + 1) === i;
                return r && t++,
                r
            }, t = 0; t < n.length; t++)
                if (r)
                    n.charAt(t) !== "'" || u("'") ? i += n.charAt(t) : r = !1;
                else
                    switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default:
                        i += n.charAt(t)
                    }
            return i
        },
        _get: function(n, i) {
            return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(n, t) {
            if (n.input.val() !== n.lastVal) {
                var e = this._get(n, "dateFormat")
                  , r = n.lastVal = n.input ? n.input.val() : null
                  , u = this._getDefaultDate(n)
                  , i = u
                  , f = this._getFormatConfig(n);
                try {
                    i = this.parseDate(e, r, f) || u
                } catch (o) {
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate(),
                n.drawMonth = n.selectedMonth = i.getMonth(),
                n.drawYear = n.selectedYear = i.getFullYear(),
                n.currentDay = r ? i.getDate() : 0,
                n.currentMonth = r ? i.getMonth() : 0,
                n.currentYear = r ? i.getFullYear() : 0,
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function(n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, r) {
            var f = function(n) {
                var t = new Date;
                return t.setDate(t.getDate() + n),
                t
            }
              , e = function(i) {
                try {
                    return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                } catch (h) {}
                for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, e = o.getFullYear(), f = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u; ) {
                    switch (u[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(u[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += parseInt(u[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        f += parseInt(u[1], 10),
                        r = Math.min(r, n.datepicker._getDaysInMonth(e, f));
                        break;
                    case "y":
                    case "Y":
                        e += parseInt(u[1], 10),
                        r = Math.min(r, n.datepicker._getDaysInMonth(e, f))
                    }
                    u = s.exec(i)
                }
                return new Date(e,f,r)
            }
              , u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && u.toString() === "Invalid Date" ? r : u,
            u && (u.setHours(0),
            u.setMinutes(0),
            u.setSeconds(0),
            u.setMilliseconds(0)),
            this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function(n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0),
            n) : null
        },
        _setDate: function(n, t, i) {
            var u = !t
              , e = n.selectedMonth
              , f = n.selectedYear
              , r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate(),
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth(),
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear(),
            e === n.selectedMonth && f === n.selectedYear || i || this._notifyChange(n),
            this._adjustInstDate(n),
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function(n) {
            return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay))
        },
        _attachHandlers: function(t) {
            var u = this._get(t, "stepMonths")
              , i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, -u, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, +u, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + r].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + r].datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"),
                        !1
                    }
                };
                n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(n) {
            var g, h, bt, c, et, d, ft, ti, oi, l, pt, ui, ii, fi, ri, wt, tt, hi, yt, s, f, p, at, b, vt, y, u, ni, dt, kt, gt, ci, rt, i, ut, it, k, a, nt, ht = new Date, ct = this._daylightSavingAdjust(new Date(ht.getFullYear(),ht.getMonth(),ht.getDate())), e = this._get(n, "isRTL"), li = this._get(n, "showButtonPanel"), si = this._get(n, "hideIfNoPrevNext"), lt = this._get(n, "navigationAsDateFormat"), o = this._getNumberOfMonths(n), ai = this._get(n, "showCurrentAtPos"), ei = this._get(n, "stepMonths"), ot = o[0] !== 1 || o[1] !== 1, st = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear,n.currentMonth,n.currentDay) : new Date(9999,9,9)), w = this._getMinMaxDate(n, "min"), v = this._getMinMaxDate(n, "max"), t = n.drawMonth - ai, r = n.drawYear;
            if (t < 0 && (t += 12,
            r--),
            v)
                for (g = this._daylightSavingAdjust(new Date(v.getFullYear(),v.getMonth() - o[0] * o[1] + 1,v.getDate())),
                g = w && g < w ? w : g; this._daylightSavingAdjust(new Date(r,t,1)) > g; )
                    t--,
                    t < 0 && (t = 11,
                    r--);
            for (n.drawMonth = t,
            n.drawYear = r,
            h = this._get(n, "prevText"),
            h = lt ? this.formatDate(h, this._daylightSavingAdjust(new Date(r,t - ei,1)), this._getFormatConfig(n)) : h,
            bt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev' data-handler='prev' data-event='click' title='" + h + "'><span alt='View previous month' class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + h + "</span></a>" : si ? "" : "<a class='ui-datepicker-prev-disabled' title='" + h + "'><img src='../../Assets/images/img_trans.gif' alt='View previous month' /><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + h + "</span></a>",
            c = this._get(n, "nextText"),
            c = lt ? this.formatDate(c, this._daylightSavingAdjust(new Date(r,t + ei,1)), this._getFormatConfig(n)) : c,
            et = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next' data-handler='next' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + c + "</span></a>" : si ? "" : "<a class='ui-datepicker-next-disabled' title='" + c + "'><img src='../../Assets/images/img_trans.gif' alt='View next month' /><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + c + "</span></a>",
            d = this._get(n, "currentText"),
            ft = this._get(n, "gotoCurrent") && n.currentDay ? st : ct,
            d = lt ? this.formatDate(d, ft, this._getFormatConfig(n)) : d,
            ti = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "</button>",
            oi = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (e ? ti : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + d + "</button>" : "") + (e ? "" : ti) + "</div>" : "",
            l = parseInt(this._get(n, "firstDay"), 10),
            l = isNaN(l) ? 0 : l,
            pt = this._get(n, "showWeek"),
            ui = this._get(n, "dayNames"),
            ii = this._get(n, "dayNamesMin"),
            fi = this._get(n, "monthNames"),
            ri = this._get(n, "monthNamesShort"),
            wt = this._get(n, "beforeShowDay"),
            tt = this._get(n, "showOtherMonths"),
            hi = this._get(n, "selectOtherMonths"),
            yt = this._getDefaultDate(n),
            s = "",
            s += "<div id='divClose' class='date-picker-close'",
            s += ot ? " style='left:350px' " : " style='left:165px' ",
            s += "><span alt='Close calendar'></span></div>",
            f,
            p = 0; p < o[0]; p++) {
                for (at = "",
                this.maxRows = 4,
                b = 0; b < o[1]; b++) {
                    if (vt = this._daylightSavingAdjust(new Date(r,t,n.selectedDay)),
                    y = " ui-corner-all",
                    u = "",
                    ot) {
                        if (u += "<div class='ui-datepicker-group",
                        o[1] > 1)
                            switch (b) {
                            case 0:
                                u += " ui-datepicker-group-first",
                                y = " ui-corner-" + (e ? "right" : "left");
                                break;
                            case o[1] - 1:
                                u += " ui-datepicker-group-last",
                                y = " ui-corner-" + (e ? "left" : "right");
                                break;
                            default:
                                u += " ui-datepicker-group-middle",
                                y = ""
                            }
                        u += "'>"
                    }
                    for (u += "<div class='ui-datepicker-header'>" + (/all|left/.test(y) && p === 0 ? e ? et : bt : "") + (/all|right/.test(y) && p === 0 ? e ? bt : et : "") + this._generateMonthYearHeader(n, t, r, w, v, p > 0 || b > 0, fi, ri) + "<div id='divClose' class='date-picker-close'><span><img src='../../Assets/images/img_trans.gif' alt='Close calendar' /></span></div></div><table class='ui-datepicker-calendar'><thead><tr>",
                    ni = pt ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "</th>" : "",
                    f = 0; f < 7; f++)
                        dt = (f + l) % 7,
                        ni += "<th" + ((f + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[dt] + "'>" + ii[dt] + "</span></th>";
                    for (u += ni + "</tr></thead><tbody>",
                    kt = this._getDaysInMonth(r, t),
                    r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, kt)),
                    gt = (this._getFirstDayOfMonth(r, t) - l + 7) % 7,
                    ci = Math.ceil((gt + kt) / 7),
                    rt = 6,
                    this.maxRows = rt,
                    i = this._daylightSavingAdjust(new Date(r,t,1 - gt)),
                    ut = 0; ut < rt; ut++) {
                        for (u += "<tr>",
                        it = pt ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "</td>" : "",
                        f = 0; f < 7; f++)
                            k = wt ? wt.apply(n.input ? n.input[0] : null, [i]) : [!0, ""],
                            a = i.getMonth() !== t,
                            nt = a && !hi || !k[0] || w && i < w || v && i > v,
                            it += "<td class='" + ((f + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === vt.getTime() && t === n.selectedMonth && n._keyEvent || yt.getTime() === i.getTime() && yt.getTime() === vt.getTime() ? " " + this._dayOverClass : "") + (nt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !tt ? "" : " " + k[1] + (i.getTime() === st.getTime() ? " " + this._currentClass : "") + (i.getTime() === ct.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a || tt) && k[2] ? " title='" + k[2].replace(/'/g, "&#39;") + "'" : "") + (nt ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !tt ? "&#xa0;" : nt ? "<span class='ui-state-default'>" + i.getDate() + "</span>" : "<a class='ui-state-default" + (i.getTime() === ct.getTime() ? " ui-state-highlight" : "") + (i.getTime() === st.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "</a>") + "</td>",
                            i.setDate(i.getDate() + 1),
                            i = this._daylightSavingAdjust(i);
                        u += it + "</tr>"
                    }
                    t++,
                    t > 11 && (t = 0,
                    r++),
                    u += "</tbody></table>" + (ot ? "</div>" + (o[0] > 0 && b === o[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
                    at += u
                }
                s += at
            }
            return s += oi,
            n._keyEvent = !1,
            s
        },
        _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
            var d, k, h, p, b, w, s, a, v = this._get(n, "changeMonth"), y = this._get(n, "changeYear"), g = this._get(n, "showMonthAfterYear"), c = "<div class='ui-datepicker-title'>", l = "";
            if (f || !v)
                l += "<span class='ui-datepicker-month'>" + e[t] + "</span>";
            else {
                for (d = r && r.getFullYear() === i,
                k = u && u.getFullYear() === i,
                l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                h = 0; h < 12; h++)
                    (!d || h >= r.getMonth()) && (!k || h <= u.getMonth()) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "</option>");
                l += "</select>"
            }
            if (g || (c += l + (f || !(v && y) ? "&#xa0;" : "")),
            !n.yearshtml)
                if (n.yearshtml = "",
                f || !y)
                    c += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (p = this._get(n, "yearRange").split(":"),
                    b = (new Date).getFullYear(),
                    w = function(n) {
                        var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? b + parseInt(n, 10) : parseInt(n, 10);
                        return isNaN(t) ? b : t
                    }
                    ,
                    s = w(p[0]),
                    a = Math.max(s, w(p[1] || "")),
                    s = r ? Math.max(s, r.getFullYear()) : s,
                    a = u ? Math.min(a, u.getFullYear()) : a,
                    n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; s <= a; s++)
                        n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "</option>";
                    n.yearshtml += "</select>",
                    c += n.yearshtml,
                    n.yearshtml = null
                }
            return c += this._get(n, "yearSuffix"),
            g && (c += (f || !(v && y) ? "&#xa0;" : "") + l),
            c += "</div>"
        },
        _adjustInstDate: function(n, t, i) {
            var u = n.drawYear + (i === "Y" ? t : 0)
              , f = n.drawMonth + (i === "M" ? t : 0)
              , e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i === "D" ? t : 0)
              , r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u,f,e)));
            n.selectedDay = r.getDate(),
            n.drawMonth = n.selectedMonth = r.getMonth(),
            n.drawYear = n.selectedYear = r.getFullYear(),
            (i === "M" || i === "Y") && this._notifyChange(n)
        },
        _restrictMinMax: function(n, t) {
            var r = this._getMinMaxDate(n, "min")
              , i = this._getMinMaxDate(n, "max")
              , u = r && t < r ? r : t;
            return i && u > i ? i : u
        },
        _notifyChange: function(n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function(n) {
            var t = this._get(n, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function(n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function(n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n,t,32)).getDate()
        },
        _getFirstDayOfMonth: function(n, t) {
            return new Date(n,t,1).getDay()
        },
        _canAdjustMonth: function(n, t, i, r) {
            var f = this._getNumberOfMonths(n)
              , u = this._daylightSavingAdjust(new Date(i,r + (t < 0 ? t : f[0] * f[1]),1));
            return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())),
            this._isInRange(n, u)
        },
        _isInRange: function(n, t) {
            var i, f, o = this._getMinMaxDate(n, "min"), s = this._getMinMaxDate(n, "max"), u = null, r = null, e = this._get(n, "yearRange");
            return e && (i = e.split(":"),
            f = (new Date).getFullYear(),
            u = parseInt(i[0], 10),
            r = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (u += f),
            i[1].match(/[+\-].*/) && (r += f)),
            (!o || t.getTime() >= o.getTime()) && (!s || t.getTime() <= s.getTime()) && (!u || t.getFullYear() >= u) && (!r || t.getFullYear() <= r)
        },
        _getFormatConfig: function(n) {
            var t = this._get(n, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function(n, t, i, r) {
            t || (n.currentDay = n.selectedDay,
            n.currentMonth = n.selectedMonth,
            n.currentYear = n.selectedYear);
            var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r,i,t)) : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    }),
    n.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick),
        n.datepicker.initialized = !0),
        n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
            typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        })
    }
    ,
    n.datepicker = new e,
    n.datepicker.initialized = !1,
    n.datepicker.uuid = +new Date,
    n.datepicker.version = "1.10.2",
    window["DP_jQuery_" + r] = n
}(jQuery),
function(n) {
    var r = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }
      , i = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    n.widget("ui.dialog", {
        version: "1.10.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            this.options.title = this.options.title || this.originalTitle,
            this._createWrapper(),
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && n.fn.draggable && this._makeDraggable(),
            this.options.resizable && n.fn.resizable && this._makeResizable(),
            this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var n, t = this.originalPosition;
            this._destroyOverlay(),
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
            this.uiDialog.stop(!0, !0).remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            n = t.parent.children().eq(t.index),
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: n.noop,
        enable: n.noop,
        close: function(t) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1,
            this._destroyOverlay(),
            this.opener.filter(":focusable").focus().length || n(this.document[0].activeElement).blur(),
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(n, t) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !t && this._trigger("focus", n),
            i
        },
        open: function() {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0,
            this.opener = n(this.document[0].activeElement),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(),
                t._trigger("focus")
            }),
            this._trigger("open")
        },
        _focusTabbable: function() {
            var n = this.element.find("[autofocus]");
            n.length || (n = this.element.find(":tabbable")),
            n.length || (n = this.uiDialogButtonPane.find(":tabbable")),
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable")),
            n.length || (n = this.uiDialog),
            n.eq(0).focus()
        },
        _keepFocus: function(t) {
            function i() {
                var t = this.document[0].activeElement
                  , i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(),
            i.call(this),
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
                        t.preventDefault(),
                        this.close(t);
                        return
                    }
                    if (t.keyCode === n.ui.keyCode.TAB) {
                        var u = this.uiDialog.find(":tabbable")
                          , r = u.filter(":first")
                          , i = u.filter(":last");
                        t.target !== i[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (i.focus(1),
                        t.preventDefault()) : (r.focus(1),
                        t.preventDefault())
                    }
                },
                mousedown: function(n) {
                    this._moveToTop(n) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-helper-clearfix").prependTo(this.uiDialog),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }),
            this.uiDialogTitlebarClose = n("<a></a>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
            this._on(this.uiDialogTitlebarClose, {
                click: function(n) {
                    n.preventDefault(),
                    this.close(n)
                }
            }),
            t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
            this._title(t),
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(n) {
            this.options.title || n.html("&#160;"),
            n.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
            this._createButtons()
        },
        _createButtons: function() {
            var i = this
              , t = this.options.buttons;
            if (this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            n.isEmptyObject(t) || n.isArray(t) && !t.length) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            n.each(t, function(t, r) {
                var f, u;
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                } : r,
                r = n.extend({
                    type: "button"
                }, r),
                f = r.click,
                r.click = function() {
                    f.apply(i.element[0], arguments)
                }
                ,
                u = {
                    icons: r.icons,
                    text: r.showText
                },
                delete r.icons,
                delete r.showText,
                n("<button></button>", r).button(u).appendTo(i.uiButtonSet)
            }),
            this.uiDialog.addClass("ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this
              , r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, u) {
                    n(this).addClass("ui-dialog-dragging"),
                    t._blockFrames(),
                    t._trigger("dragStart", r, i(u))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(u, f) {
                    r.position = [f.position.left - t.document.scrollLeft(), f.position.top - t.document.scrollTop()],
                    n(this).removeClass("ui-dialog-dragging"),
                    t._unblockFrames(),
                    t._trigger("dragStop", u, i(f))
                }
            })
        },
        _makeResizable: function() {
            function r(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            var i = this
              , t = this.options
              , u = t.resizable
              , f = this.uiDialog.css("position")
              , e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: t.maxWidth,
                maxHeight: t.maxHeight,
                minWidth: t.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(t, u) {
                    n(this).addClass("ui-dialog-resizing"),
                    i._blockFrames(),
                    i._trigger("resizeStart", t, r(u))
                },
                resize: function(n, t) {
                    i._trigger("resize", n, r(t))
                },
                stop: function(u, f) {
                    t.height = n(this).height(),
                    t.width = n(this).width(),
                    n(this).removeClass("ui-dialog-resizing"),
                    i._unblockFrames(),
                    i._trigger("resizeStop", u, r(f))
                }
            }).css("position", f)
        },
        _minHeight: function() {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function() {
            var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            n || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var e = this
              , u = !1
              , f = {};
            n.each(t, function(n, t) {
                e._setOption(n, t),
                n in r && (u = !0),
                n in i && (f[n] = t)
            }),
            u && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
        },
        _setOption: function(n, t) {
            var u, r, i = this.uiDialog;
            (n === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t),
            n !== "disabled") && (this._super(n, t),
            n === "appendTo" && this.uiDialog.appendTo(this._appendTo()),
            n === "buttons" && this._createButtons(),
            n === "closeText" && this.uiDialogTitlebarClose.button({
                label: "" + t
            }),
            n === "draggable" && (u = i.is(":data(ui-draggable)"),
            u && !t && i.draggable("destroy"),
            !u && t && this._makeDraggable()),
            n === "position" && this._position(),
            n === "resizable" && (r = i.is(":data(ui-resizable)"),
            r && !t && i.resizable("destroy"),
            r && typeof t == "string" && i.resizable("option", "handles", t),
            r || t === !1 || this._makeResizable()),
            n === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, i, r, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            n.minWidth > n.width && (n.width = n.minWidth),
            t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(),
            i = Math.max(0, n.minHeight - t),
            r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none",
            n.height === "auto" ? this.element.css({
                minHeight: i,
                maxHeight: r,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = n(this);
                return n("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var i = this
                  , t = this.widgetFullName;
                n.ui.dialog.overlayInstances || this._delay(function() {
                    n.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(r) {
                        i._allowInteraction(r) || (r.preventDefault(),
                        n(".ui-dialog:visible:last .ui-dialog-content").data(t)._focusTabbable())
                    })
                }),
                this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }),
                n.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (n.ui.dialog.overlayInstances--,
            n.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"),
            this.overlay.remove(),
            this.overlay = null)
        }
    }),
    n.ui.dialog.overlayInstances = 0,
    n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
        _position: function() {
            var t = this.options.position, i = [], r = [0, 0], u;
            t ? ((typeof t == "string" || typeof t == "object" && "0"in t) && (i = t.split ? t.split(" ") : [t[0], t[1]],
            i.length === 1 && (i[1] = i[0]),
            n.each(["left", "top"], function(n, t) {
                +i[n] === i[n] && (r[n] = i[n],
                i[n] = t)
            }),
            t = {
                my: i[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + i[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                at: i.join(" ")
            }),
            t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position,
            u = this.uiDialog.is(":visible"),
            u || this.uiDialog.show(),
            this.uiDialog.position(t),
            u || this.uiDialog.hide()
        }
    })
}(jQuery),
function(n) {
    var r = /up|down|vertical/
      , i = /up|left|vertical|horizontal/;
    n.effects.effect.blind = function(t, u) {
        var f = n(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], b = n.effects.setMode(f, t.mode || "hide"), p = t.direction || "up", h = r.test(p), c = h ? "height" : "width", y = h ? "top" : "left", w = i.test(p), v = {}, l = b === "show", e, s, o;
        f.parent().is(".ui-effects-wrapper") ? n.effects.save(f.parent(), a) : n.effects.save(f, a),
        f.show(),
        e = n.effects.createWrapper(f).css({
            overflow: "hidden"
        }),
        s = e[c](),
        o = parseFloat(e.css(y)) || 0,
        v[c] = l ? s : 0,
        w || (f.css(h ? "bottom" : "right", 0).css(h ? "top" : "left", "auto").css({
            position: "absolute"
        }),
        v[y] = l ? o : s + o),
        l && (e.css(c, 0),
        w || e.css(y, o + s)),
        e.animate(v, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                b === "hide" && f.hide(),
                n.effects.restore(f, a),
                n.effects.removeWrapper(f),
                u()
            }
        })
    }
}(jQuery),
function(n) {
    n.effects.effect.bounce = function(t, i) {
        var r = n(this), p = ["position", "top", "bottom", "left", "right", "height", "width"], g = n.effects.setMode(r, t.mode || "effect"), s = g === "hide", b = g === "show", l = t.direction || "up", u = t.distance, w = t.times || 5, d = w * 2 + (b || s ? 1 : 0), h = t.duration / d, c = t.easing, e = l === "up" || l === "down" ? "top" : "left", y = l === "up" || l === "left", v, f, o, a = r.queue(), k = a.length;
        for ((b || s) && p.push("opacity"),
        n.effects.save(r, p),
        r.show(),
        n.effects.createWrapper(r),
        u || (u = r[e === "top" ? "outerHeight" : "outerWidth"]() / 3),
        b && (o = {
            opacity: 1
        },
        o[e] = 0,
        r.css("opacity", 0).css(e, y ? -u * 2 : u * 2).animate(o, h, c)),
        s && (u = u / Math.pow(2, w - 1)),
        o = {},
        o[e] = 0,
        v = 0; v < w; v++)
            f = {},
            f[e] = (y ? "-=" : "+=") + u,
            r.animate(f, h, c).animate(o, h, c),
            u = s ? u * 2 : u / 2;
        s && (f = {
            opacity: 0
        },
        f[e] = (y ? "-=" : "+=") + u,
        r.animate(f, h, c)),
        r.queue(function() {
            s && r.hide(),
            n.effects.restore(r, p),
            n.effects.removeWrapper(r),
            i()
        }),
        k > 1 && a.splice.apply(a, [1, 0].concat(a.splice(k, d + 1))),
        r.dequeue()
    }
}(jQuery),
function(n) {
    n.effects.effect.clip = function(t, i) {
        var r = n(this), c = ["position", "top", "bottom", "left", "right", "height", "width"], y = n.effects.setMode(r, t.mode || "hide"), e = y === "show", v = t.direction || "vertical", a = v === "vertical", o = a ? "height" : "width", l = a ? "top" : "left", s = {}, h, u, f;
        n.effects.save(r, c),
        r.show(),
        h = n.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        u = r[0].tagName === "IMG" ? h : r,
        f = u[o](),
        e && (u.css(o, 0),
        u.css(l, f / 2)),
        s[o] = e ? f : 0,
        s[l] = e ? 0 : f / 2,
        u.animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                e || r.hide(),
                n.effects.restore(r, c),
                n.effects.removeWrapper(r),
                i()
            }
        })
    }
}(jQuery),
function(n) {
    n.effects.effect.drop = function(t, i) {
        var r = n(this), l = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], h = n.effects.setMode(r, t.mode || "hide"), e = h === "show", f = t.direction || "left", s = f === "up" || f === "down" ? "top" : "left", o = f === "up" || f === "left" ? "pos" : "neg", c = {
            opacity: e ? 1 : 0
        }, u;
        n.effects.save(r, l),
        r.show(),
        n.effects.createWrapper(r),
        u = t.distance || r[s === "top" ? "outerHeight" : "outerWidth"](!0) / 2,
        e && r.css("opacity", 0).css(s, o === "pos" ? -u : u),
        c[s] = (e ? o === "pos" ? "+=" : "-=" : o === "pos" ? "-=" : "+=") + u,
        r.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                h === "hide" && r.hide(),
                n.effects.restore(r, l),
                n.effects.removeWrapper(r),
                i()
            }
        })
    }
}(jQuery),
function(n) {
    n.effects.effect.explode = function(t, i) {
        function k() {
            y.push(this),
            y.length === h * c && b()
        }
        function b() {
            r.css({
                visibility: "visible"
            }),
            n(y).remove(),
            u || r.hide(),
            i()
        }
        for (var h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = h, r = n(this), d = n.effects.setMode(r, t.mode || "hide"), u = d === "show", w = r.show().css("visibility", "hidden").offset(), o = Math.ceil(r.outerWidth() / c), s = Math.ceil(r.outerHeight() / h), y = [], f, p, l, a, v, e = 0; e < h; e++)
            for (l = w.top + e * s,
            v = e - (h - 1) / 2,
            f = 0; f < c; f++)
                p = w.left + f * o,
                a = f - (c - 1) / 2,
                r.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -f * o,
                    top: -e * s
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: o,
                    height: s,
                    left: p + (u ? a * o : 0),
                    top: l + (u ? v * s : 0),
                    opacity: u ? 0 : 1
                }).animate({
                    left: p + (u ? 0 : a * o),
                    top: l + (u ? 0 : v * s),
                    opacity: u ? 1 : 0
                }, t.duration || 500, t.easing, k)
    }
}(jQuery),
function(n) {
    n.effects.effect.fade = function(t, i) {
        var r = n(this)
          , u = n.effects.setMode(r, t.mode || "toggle");
        r.animate({
            opacity: u
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }
}(jQuery),
function(n) {
    n.effects.effect.fold = function(t, i) {
        var u = n(this), y = ["position", "top", "bottom", "left", "right", "height", "width"], v = n.effects.setMode(u, t.mode || "hide"), o = v === "show", a = v === "hide", f = t.size || 15, b = /([0-9]+)%/.exec(f), w = !!t.horizFirst, p = o !== w, h = p ? ["width", "height"] : ["height", "width"], s = t.duration / 2, r, e, c = {}, l = {};
        n.effects.save(u, y),
        u.show(),
        r = n.effects.createWrapper(u).css({
            overflow: "hidden"
        }),
        e = p ? [r.width(), r.height()] : [r.height(), r.width()],
        b && (f = parseInt(b[1], 10) / 100 * e[a ? 0 : 1]),
        o && r.css(w ? {
            height: 0,
            width: f
        } : {
            height: f,
            width: 0
        }),
        c[h[0]] = o ? e[0] : f,
        l[h[1]] = o ? e[1] : 0,
        r.animate(c, s, t.easing).animate(l, s, t.easing, function() {
            a && u.hide(),
            n.effects.restore(u, y),
            n.effects.removeWrapper(u),
            i()
        })
    }
}(jQuery),
function(n) {
    n.effects.effect.highlight = function(t, i) {
        var r = n(this)
          , e = ["backgroundImage", "backgroundColor", "opacity"]
          , f = n.effects.setMode(r, t.mode || "show")
          , u = {
            backgroundColor: r.css("backgroundColor")
        };
        f === "hide" && (u.opacity = 0),
        n.effects.save(r, e),
        r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                f === "hide" && r.hide(),
                n.effects.restore(r, e),
                i()
            }
        })
    }
}(jQuery),
function(n) {
    n.effects.effect.pulsate = function(t, i) {
        var r = n(this), s = n.effects.setMode(r, t.mode || "show"), c = s === "show", v = s === "hide", a = c || s === "hide", e = (t.times || 5) * 2 + (a ? 1 : 0), l = t.duration / e, u = 0, f = r.queue(), h = f.length, o;
        for ((c || !r.is(":visible")) && (r.css("opacity", 0).show(),
        u = 1),
        o = 1; o < e; o++)
            r.animate({
                opacity: u
            }, l, t.easing),
            u = 1 - u;
        r.animate({
            opacity: u
        }, l, t.easing),
        r.queue(function() {
            v && r.hide(),
            i()
        }),
        h > 1 && f.splice.apply(f, [1, 0].concat(f.splice(h, e + 1))),
        r.dequeue()
    }
}(jQuery),
function(n) {
    n.effects.effect.puff = function(t, i) {
        var r = n(this)
          , e = n.effects.setMode(r, t.mode || "hide")
          , o = e === "hide"
          , s = parseInt(t.percent, 10) || 150
          , f = s / 100
          , u = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        };
        n.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: i,
            percent: o ? s : 100,
            from: o ? u : {
                height: u.height * f,
                width: u.width * f,
                outerHeight: u.outerHeight * f,
                outerWidth: u.outerWidth * f
            }
        }),
        r.effect(t)
    }
    ,
    n.effects.effect.scale = function(t, i) {
        var u = n(this)
          , r = n.extend(!0, {}, t)
          , e = n.effects.setMode(u, t.mode || "effect")
          , s = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : e === "hide" ? 0 : 100)
          , h = t.direction || "both"
          , c = t.origin
          , f = {
            height: u.height(),
            width: u.width(),
            outerHeight: u.outerHeight(),
            outerWidth: u.outerWidth()
        }
          , o = {
            y: h !== "horizontal" ? s / 100 : 1,
            x: h !== "vertical" ? s / 100 : 1
        };
        r.effect = "size",
        r.queue = !1,
        r.complete = i,
        e !== "effect" && (r.origin = c || ["middle", "center"],
        r.restore = !0),
        r.from = t.from || (e === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : f),
        r.to = {
            height: f.height * o.y,
            width: f.width * o.x,
            outerHeight: f.outerHeight * o.y,
            outerWidth: f.outerWidth * o.x
        },
        r.fade && (e === "show" && (r.from.opacity = 0,
        r.to.opacity = 1),
        e === "hide" && (r.from.opacity = 1,
        r.to.opacity = 0)),
        u.effect(r)
    }
    ,
    n.effects.effect.size = function(t, i) {
        var f, l, u, r = n(this), w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], k = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], v = ["width", "height", "overflow"], y = ["fontSize"], e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], s = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], h = n.effects.setMode(r, t.mode || "effect"), a = t.restore || h !== "effect", c = t.scale || "both", b = t.origin || ["middle", "center"], d = r.css("position"), o = a ? w : k, p = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        h === "show" && r.show(),
        f = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        },
        t.mode === "toggle" && h === "show" ? (r.from = t.to || p,
        r.to = t.from || f) : (r.from = t.from || (h === "show" ? p : f),
        r.to = t.to || (h === "hide" ? p : f)),
        u = {
            from: {
                y: r.from.height / f.height,
                x: r.from.width / f.width
            },
            to: {
                y: r.to.height / f.height,
                x: r.to.width / f.width
            }
        },
        (c === "box" || c === "both") && (u.from.y !== u.to.y && (o = o.concat(e),
        r.from = n.effects.setTransition(r, e, u.from.y, r.from),
        r.to = n.effects.setTransition(r, e, u.to.y, r.to)),
        u.from.x !== u.to.x && (o = o.concat(s),
        r.from = n.effects.setTransition(r, s, u.from.x, r.from),
        r.to = n.effects.setTransition(r, s, u.to.x, r.to))),
        (c === "content" || c === "both") && u.from.y !== u.to.y && (o = o.concat(y).concat(v),
        r.from = n.effects.setTransition(r, y, u.from.y, r.from),
        r.to = n.effects.setTransition(r, y, u.to.y, r.to)),
        n.effects.save(r, o),
        r.show(),
        n.effects.createWrapper(r),
        r.css("overflow", "hidden").css(r.from),
        b && (l = n.effects.getBaseline(b, f),
        r.from.top = (f.outerHeight - r.outerHeight()) * l.y,
        r.from.left = (f.outerWidth - r.outerWidth()) * l.x,
        r.to.top = (f.outerHeight - r.to.outerHeight) * l.y,
        r.to.left = (f.outerWidth - r.to.outerWidth) * l.x),
        r.css(r.from),
        (c === "content" || c === "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(y),
        s = s.concat(["marginLeft", "marginRight"]),
        v = w.concat(e).concat(s),
        r.find("*[width]").each(function() {
            var i = n(this)
              , r = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            a && n.effects.save(i, v),
            i.from = {
                height: r.height * u.from.y,
                width: r.width * u.from.x,
                outerHeight: r.outerHeight * u.from.y,
                outerWidth: r.outerWidth * u.from.x
            },
            i.to = {
                height: r.height * u.to.y,
                width: r.width * u.to.x,
                outerHeight: r.height * u.to.y,
                outerWidth: r.width * u.to.x
            },
            u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from),
            i.to = n.effects.setTransition(i, e, u.to.y, i.to)),
            u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, s, u.from.x, i.from),
            i.to = n.effects.setTransition(i, s, u.to.x, i.to)),
            i.css(i.from),
            i.animate(i.to, t.duration, t.easing, function() {
                a && n.effects.restore(i, v)
            })
        })),
        r.animate(r.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                r.to.opacity === 0 && r.css("opacity", r.from.opacity),
                h === "hide" && r.hide(),
                n.effects.restore(r, o),
                a || (d === "static" ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : n.each(["top", "left"], function(n, t) {
                    r.css(t, function(t, i) {
                        var f = parseInt(i, 10)
                          , u = n ? r.to.left : r.to.top;
                        return i === "auto" ? u + "px" : f + u + "px"
                    })
                })),
                n.effects.removeWrapper(r),
                i()
            }
        })
    }
}(jQuery),
function(n) {
    n.effects.effect.shake = function(t, i) {
        var r = n(this), p = ["position", "top", "bottom", "left", "right", "height", "width"], k = n.effects.setMode(r, t.mode || "effect"), f = t.direction || "left", l = t.distance || 20, w = t.times || 3, b = w * 2 + 1, u = Math.round(t.duration / b), o = f === "up" || f === "down" ? "top" : "left", c = f === "up" || f === "left", h = {}, s = {}, y = {}, a, e = r.queue(), v = e.length;
        for (n.effects.save(r, p),
        r.show(),
        n.effects.createWrapper(r),
        h[o] = (c ? "-=" : "+=") + l,
        s[o] = (c ? "+=" : "-=") + l * 2,
        y[o] = (c ? "-=" : "+=") + l * 2,
        r.animate(h, u, t.easing),
        a = 1; a < w; a++)
            r.animate(s, u, t.easing).animate(y, u, t.easing);
        r.animate(s, u, t.easing).animate(h, u / 2, t.easing).queue(function() {
            k === "hide" && r.hide(),
            n.effects.restore(r, p),
            n.effects.removeWrapper(r),
            i()
        }),
        v > 1 && e.splice.apply(e, [1, 0].concat(e.splice(v, b + 1))),
        r.dequeue()
    }
}(jQuery),
function(n) {
    n.effects.effect.slide = function(t, i) {
        var r = n(this), h = ["position", "top", "bottom", "left", "right", "width", "height"], c = n.effects.setMode(r, t.mode || "show"), l = c === "show", f = t.direction || "left", o = f === "up" || f === "down" ? "top" : "left", e = f === "up" || f === "left", u, s = {};
        n.effects.save(r, h),
        r.show(),
        u = t.distance || r[o === "top" ? "outerHeight" : "outerWidth"](!0),
        n.effects.createWrapper(r).css({
            overflow: "hidden"
        }),
        l && r.css(o, e ? isNaN(u) ? "-" + u : -u : u),
        s[o] = (l ? e ? "+=" : "-=" : e ? "-=" : "+=") + u,
        r.animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                c === "hide" && r.hide(),
                n.effects.restore(r, h),
                n.effects.removeWrapper(r),
                i()
            }
        })
    }
}(jQuery),
function(n) {
    n.effects.effect.transfer = function(t, i) {
        var f = n(this)
          , r = n(t.to)
          , u = r.css("position") === "fixed"
          , h = n("body")
          , c = u ? h.scrollTop() : 0
          , s = u ? h.scrollLeft() : 0
          , e = r.offset()
          , a = {
            top: e.top - c,
            left: e.left - s,
            height: r.innerHeight(),
            width: r.innerWidth()
        }
          , o = f.offset()
          , l = n("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
            top: o.top - c,
            left: o.left - s,
            height: f.innerHeight(),
            width: f.innerWidth(),
            position: u ? "fixed" : "absolute"
        }).animate(a, t.duration, t.easing, function() {
            l.remove(),
            i()
        })
    }
}(jQuery),
function(n) {
    n.widget("ui.menu", {
        version: "1.10.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, n.proxy(function(n) {
                this.options.disabled && n.preventDefault()
            }, this)),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item > a": function(n) {
                    n.preventDefault()
                },
                "click .ui-state-disabled > a": function(n) {
                    n.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(t) {
                    var i = n(t.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0,
                    this.select(t),
                    i.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]),
                    this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var i = n(t.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(t, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(n, t) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(n, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    n(t.target).closest(".ui-menu").length || this.collapseAll(t),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = n(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            function o(n) {
                return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var i, f, r, e, u, s = !0;
            switch (t.keyCode) {
            case n.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case n.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case n.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case n.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case n.ui.keyCode.UP:
                this.previous(t);
                break;
            case n.ui.keyCode.DOWN:
                this.next(t);
                break;
            case n.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case n.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case n.ui.keyCode.ENTER:
            case n.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case n.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                s = !1,
                f = this.previousFilter || "",
                r = String.fromCharCode(t.keyCode),
                e = !1,
                clearTimeout(this.filterTimer),
                r === f ? e = !0 : r = f + r,
                u = new RegExp("^" + o(r),"i"),
                i = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return u.test(n(this).children("a").text())
                }),
                i = e && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i,
                i.length || (r = String.fromCharCode(t.keyCode),
                u = new RegExp("^" + o(r),"i"),
                i = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return u.test(n(this).children("a").text())
                })),
                i.length ? (this.focus(t, i),
                i.length > 1 ? (this.previousFilter = r,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            s && t.preventDefault()
        },
        _activate: function(n) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
        },
        refresh: function() {
            var t, r = this.options.icons.submenu, i = this.element.find(this.options.menus);
            i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var i = n(this)
                  , t = i.prev("a")
                  , u = n("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                t.attr("aria-haspopup", "true").prepend(u),
                i.attr("aria-labelledby", t.attr("id"))
            }),
            t = i.add(this.element),
            t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            t.children(":not(.ui-menu-item)").each(function() {
                var t = n(this);
                /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }),
            t.children(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(n, t) {
            n === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),
            this._super(n, t)
        },
        focus: function(n, t) {
            var i, r;
            this.blur(n, n && n.type === "focus"),
            this._scrollIntoView(t),
            this.active = t.first(),
            r = this.active.children("a").addClass("ui-state-focus"),
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id")),
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
            n && n.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            i = t.children(".ui-menu"),
            i.length && /^mouse/.test(n.type) && this._startOpening(i),
            this.activeMenu = t.parent(),
            this._trigger("focus", n, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var o, e, i, f, u, r;
            this._hasScroll() && (o = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0,
            e = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0,
            i = t.offset().top - this.activeMenu.offset().top - o - e,
            f = this.activeMenu.scrollTop(),
            u = this.activeMenu.height(),
            r = t.height(),
            i < 0 ? this.activeMenu.scrollTop(f + i) : i + r > u && this.activeMenu.scrollTop(f + i - u + r))
        },
        blur: function(n, t) {
            (t || clearTimeout(this.timer),
            this.active) && (this.active.children("a").removeClass("ui-state-focus"),
            this.active = null,
            this._trigger("blur", n, {
                item: this.active
            }))
        },
        _startOpening: function(n) {
            (clearTimeout(this.timer),
            n.attr("aria-hidden") === "true") && (this.timer = this._delay(function() {
                this._close(),
                this._open(n)
            }, this.delay))
        },
        _open: function(t) {
            var i = n.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element),
                this._close(r),
                this.blur(t),
                this.activeMenu = r
            }, this.delay)
        },
        _close: function(n) {
            n || (n = this.active ? this.active.parent() : this.element),
            n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(n) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
            this.focus(n, t))
        },
        expand: function(n) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()),
            this._delay(function() {
                this.focus(n, t)
            }))
        },
        next: function(n) {
            this._move("next", "first", n)
        },
        previous: function(n) {
            this._move("prev", "last", n)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(n, t, i) {
            var r;
            this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0)),
            r && r.length && this.active || (r = this.activeMenu.children(".ui-menu-item")[t]()),
            this.focus(i, r)
        },
        nextPage: function(t) {
            var i, u, r;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isLastItem() || (this._hasScroll() ? (u = this.active.offset().top,
            r = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return i = n(this),
                i.offset().top - u - r < 0
            }),
            this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))
        },
        previousPage: function(t) {
            var i, u, r;
            if (!this.active) {
                this.next(t);
                return
            }
            this.isFirstItem() || (this._hasScroll() ? (u = this.active.offset().top,
            r = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return i = n(this),
                i.offset().top - u + r > 0
            }),
            this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first()))
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || n(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, i)
        }
    })
}(jQuery),
function(n, t) {
    function s(n, t, i) {
        return [parseFloat(n[0]) * (o.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (o.test(n[1]) ? i / 100 : 1)]
    }
    function r(t, i) {
        return parseInt(n.css(t, i), 10) || 0
    }
    function v(t) {
        var i = t[0];
        return i.nodeType === 9 ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : n.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    n.ui = n.ui || {};
    var f, u = Math.max, i = Math.abs, h = Math.round, c = /left|center|right/, a = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, e = /^\w+/, o = /%$/, y = n.fn.position;
    n.position = {
        scrollbarWidth: function() {
            if (f !== t)
                return f;
            var u, r, i = n("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), e = i.children()[0];
            return n("body").append(i),
            u = e.offsetWidth,
            i.css("overflow", "scroll"),
            r = e.offsetWidth,
            u === r && (r = i[0].clientWidth),
            i.remove(),
            f = u - r
        },
        getScrollInfo: function(t) {
            var r = t.isWindow ? "" : t.element.css("overflow-x")
              , i = t.isWindow ? "" : t.element.css("overflow-y")
              , f = r === "scroll" || r === "auto" && t.width < t.element[0].scrollWidth
              , u = i === "scroll" || i === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: u ? n.position.scrollbarWidth() : 0,
                height: f ? n.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var i = n(t || window)
              , r = n.isWindow(i[0]);
            return {
                element: i,
                isWindow: r,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: r ? i.width() : i.outerWidth(),
                height: r ? i.height() : i.outerHeight()
            }
        }
    },
    n.fn.position = function(t) {
        if (!t || !t.of)
            return y.apply(this, arguments);
        t = n.extend({}, t);
        var k, f, o, w, p, d, nt = n(t.of), it = n.position.getWithinInfo(t.within), tt = n.position.getScrollInfo(it), b = (t.collision || "flip").split(" "), g = {};
        return d = v(nt),
        nt[0].preventDefault && (t.at = "left top"),
        f = d.width,
        o = d.height,
        w = d.offset,
        p = n.extend({}, w),
        n.each(["my", "at"], function() {
            var n = (t[this] || "").split(" "), r, i;
            n.length === 1 && (n = c.test(n[0]) ? n.concat(["center"]) : a.test(n[0]) ? ["center"].concat(n) : ["center", "center"]),
            n[0] = c.test(n[0]) ? n[0] : "center",
            n[1] = a.test(n[1]) ? n[1] : "center",
            r = l.exec(n[0]),
            i = l.exec(n[1]),
            g[this] = [r ? r[0] : 0, i ? i[0] : 0],
            t[this] = [e.exec(n[0])[0], e.exec(n[1])[0]]
        }),
        b.length === 1 && (b[1] = b[0]),
        t.at[0] === "right" ? p.left += f : t.at[0] === "center" && (p.left += f / 2),
        t.at[1] === "bottom" ? p.top += o : t.at[1] === "center" && (p.top += o / 2),
        k = s(g.at, f, o),
        p.left += k[0],
        p.top += k[1],
        this.each(function() {
            var y, ut, a = n(this), c = a.outerWidth(), l = a.outerHeight(), rt = r(this, "marginLeft"), d = r(this, "marginTop"), ft = c + rt + r(this, "marginRight") + tt.width, et = l + d + r(this, "marginBottom") + tt.height, e = n.extend({}, p), v = s(g.my, a.outerWidth(), a.outerHeight());
            t.my[0] === "right" ? e.left -= c : t.my[0] === "center" && (e.left -= c / 2),
            t.my[1] === "bottom" ? e.top -= l : t.my[1] === "center" && (e.top -= l / 2),
            e.left += v[0],
            e.top += v[1],
            n.support.offsetFractions || (e.left = h(e.left),
            e.top = h(e.top)),
            y = {
                marginLeft: rt,
                marginTop: d
            },
            n.each(["left", "top"], function(i, r) {
                n.ui.position[b[i]] && n.ui.position[b[i]][r](e, {
                    targetWidth: f,
                    targetHeight: o,
                    elemWidth: c,
                    elemHeight: l,
                    collisionPosition: y,
                    collisionWidth: ft,
                    collisionHeight: et,
                    offset: [k[0] + v[0], k[1] + v[1]],
                    my: t.my,
                    at: t.at,
                    within: it,
                    elem: a
                })
            }),
            t.using && (ut = function(n) {
                var h = w.left - e.left
                  , v = h + f - c
                  , s = w.top - e.top
                  , y = s + o - l
                  , r = {
                    target: {
                        element: nt,
                        left: w.left,
                        top: w.top,
                        width: f,
                        height: o
                    },
                    element: {
                        element: a,
                        left: e.left,
                        top: e.top,
                        width: c,
                        height: l
                    },
                    horizontal: v < 0 ? "left" : h > 0 ? "right" : "center",
                    vertical: y < 0 ? "top" : s > 0 ? "bottom" : "middle"
                };
                f < c && i(h + v) < f && (r.horizontal = "center"),
                o < l && i(s + y) < o && (r.vertical = "middle"),
                r.important = u(i(h), i(v)) > u(i(s), i(y)) ? "horizontal" : "vertical",
                t.using.call(this, n, r)
            }
            ),
            a.offset(n.extend(e, {
                using: ut
            }))
        })
    }
    ,
    n.ui.position = {
        fit: {
            left: function(n, t) {
                var e = t.within, r = e.isWindow ? e.scrollLeft : e.offset.left, o = e.width, s = n.left - t.collisionPosition.marginLeft, i = r - s, f = s + t.collisionWidth - o - r, h;
                t.collisionWidth > o ? i > 0 && f <= 0 ? (h = n.left + i + t.collisionWidth - o - r,
                n.left += i - h) : n.left = f > 0 && i <= 0 ? r : i > f ? r + o - t.collisionWidth : r : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = u(n.left - s, n.left)
            },
            top: function(n, t) {
                var o = t.within, r = o.isWindow ? o.scrollTop : o.offset.top, e = t.within.height, s = n.top - t.collisionPosition.marginTop, i = r - s, f = s + t.collisionHeight - e - r, h;
                t.collisionHeight > e ? i > 0 && f <= 0 ? (h = n.top + i + t.collisionHeight - e - r,
                n.top += i - h) : n.top = f > 0 && i <= 0 ? r : i > f ? r + e - t.collisionHeight : r : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = u(n.top - s, n.top)
            }
        },
        flip: {
            left: function(n, t) {
                var r = t.within, y = r.offset.left + r.scrollLeft, c = r.width, h = r.isWindow ? r.scrollLeft : r.offset.left, l = n.left - t.collisionPosition.marginLeft, v = l - h, a = l + t.collisionWidth - c - h, e = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0, u = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0, f = -2 * t.offset[0], o, s;
                v < 0 ? (o = n.left + e + u + f + t.collisionWidth - c - y,
                (o < 0 || o < i(v)) && (n.left += e + u + f)) : a > 0 && (s = n.left - t.collisionPosition.marginLeft + e + u + f - h,
                (s > 0 || i(s) < a) && (n.left += e + u + f))
            },
            top: function(n, t) {
                var f = t.within, y = f.offset.top + f.scrollTop, a = f.height, l = f.isWindow ? f.scrollTop : f.offset.top, v = n.top - t.collisionPosition.marginTop, c = v - l, h = v + t.collisionHeight - a - l, p = t.my[1] === "top", e = p ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0, u = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0, r = -2 * t.offset[1], s, o;
                c < 0 ? (o = n.top + e + u + r + t.collisionHeight - a - y,
                n.top + e + u + r > c && (o < 0 || o < i(c)) && (n.top += e + u + r)) : h > 0 && (s = n.top - t.collisionPosition.marginTop + e + u + r - l,
                n.top + e + u + r > h && (s > 0 || i(s) < h) && (n.top += e + u + r))
            }
        },
        flipfit: {
            left: function() {
                n.ui.position.flip.left.apply(this, arguments),
                n.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                n.ui.position.flip.top.apply(this, arguments),
                n.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var t, r, i, e, o, u = document.getElementsByTagName("body")[0], f = document.createElement("div");
        t = document.createElement(u ? "div" : "body"),
        i = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        u && n.extend(i, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in i)
            t.style[o] = i[o];
        t.appendChild(f),
        r = u || document.documentElement,
        r.insertBefore(t, r.firstChild),
        f.style.cssText = "position: absolute; left: 10.7432222px;",
        e = n(f).offset().left,
        n.support.offsetFractions = e > 10 && e < 11,
        t.innerHTML = "",
        r.removeChild(t)
    }()
}(jQuery),
function(n, t) {
    n.widget("ui.progressbar", {
        version: "1.10.2",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(n) {
            if (n === t)
                return this.options.value;
            this.options.value = this._constrainedValue(n),
            this._refreshValue()
        },
        _constrainedValue: function(n) {
            return n === t && (n = this.options.value),
            this.indeterminate = n === !1,
            typeof n != "number" && (n = 0),
            this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
        },
        _setOptions: function(n) {
            var t = n.value;
            delete n.value,
            this._super(n),
            this.options.value = this._constrainedValue(t),
            this._refreshValue()
        },
        _setOption: function(n, t) {
            n === "max" && (t = Math.max(this.min, t)),
            this._super(n, t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value
              , i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"),
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== t && (this.oldValue = t,
            this._trigger("change")),
            t === this.options.max && this._trigger("complete")
        }
    })
}(jQuery),
function(n) {
    var i = 5;
    n.widget("ui.slider", n.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var r, i, f = this.options, t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), e = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", u = [];
            for (i = f.values && f.values.length || 1,
            t.length > i && (t.slice(i).remove(),
            t = t.slice(0, i)),
            r = t.length; r < i; r++)
                u.push(e);
            this.handles = t.add(n(u.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(t) {
                n(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options
              , i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = n("<div></div>").appendTo(this.element),
            i = "ui-slider-range ui-widget-header ui-corner-all"),
            this.range.addClass(i + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : this.range = n([])
        },
        _setupEvents: function() {
            var n = this.handles.add(this.range).filter("a");
            this._off(n),
            this._on(n, this._handleEvents),
            this._hoverable(n),
            this._focusable(n)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var l, o, u, i, r, c, f, h, e = this, s = this.options;
            return s.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            l = {
                x: t.pageX,
                y: t.pageY
            },
            o = this._normValueFromMouse(l),
            u = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(t) {
                var f = Math.abs(o - e.values(t));
                (u > f || u === f && (t === e._lastChangedValue || e.values(t) === s.min)) && (u = f,
                i = n(this),
                r = t)
            }),
            c = this._start(t, r),
            c === !1) ? !1 : (this._mouseSliding = !0,
            this._handleIndex = r,
            i.addClass("ui-state-active").focus(),
            f = i.offset(),
            h = !n(t.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - f.left - i.width() / 2,
                top: t.pageY - f.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, r, o),
            this._animateOff = !0,
            !0)
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(n) {
            var i = {
                x: n.pageX,
                y: n.pageY
            }
              , t = this._normValueFromMouse(i);
            return this._slide(n, this._handleIndex, t),
            !1
        },
        _mouseStop: function(n) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(n, this._handleIndex),
            this._change(n, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(n) {
            var r, i, t, f, u;
            return this.orientation === "horizontal" ? (r = this.elementSize.width,
            i = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (r = this.elementSize.height,
            i = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            t = i / r,
            t > 1 && (t = 1),
            t < 0 && (t = 0),
            this.orientation === "vertical" && (t = 1 - t),
            f = this._valueMax() - this._valueMin(),
            u = this._valueMin() + t * f,
            this._trimAlignValue(u)
        },
        _start: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t),
            i.values = this.values()),
            this._trigger("start", n, i)
        },
        _slide: function(n, t, i) {
            var r, f, u;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1),
            this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r),
            i !== this.values(t) && (f = this.values(),
            f[t] = i,
            u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i,
                values: f
            }),
            r = this.values(t ? 0 : 1),
            u !== !1 && this.values(t, i, !0))) : i !== this.value() && (u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i
            }),
            u !== !1 && this.value(i))
        },
        _stop: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t),
            i.values = this.values()),
            this._trigger("stop", n, i)
        },
        _change: function(n, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t),
                i.values = this.values()),
                this._lastChangedValue = t,
                this._trigger("change", n, i)
            }
        },
        value: function(n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n),
                this._refreshValue(),
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, i) {
            var u, f, r;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(i),
                this._refreshValue(),
                this._change(null, t);
                return
            }
            if (arguments.length)
                if (n.isArray(arguments[0])) {
                    for (u = this.options.values,
                    f = arguments[0],
                    r = 0; r < u.length; r += 1)
                        u[r] = this._trimAlignValue(f[r]),
                        this._change(null, r);
                    this._refreshValue()
                } else
                    return this.options.values && this.options.values.length ? this._values(t) : this.value();
            else
                return this._values()
        },
        _setOption: function(t, i) {
            var r, u = 0;
            t === "range" && this.options.range === !0 && (i === "min" ? (this.options.value = this._values(0),
            this.options.values = null) : i === "max" && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            n.isArray(this.options.values) && (u = this.options.values.length),
            n.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                r = 0; r < u; r += 1)
                    this._change(null, r);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var n = this.options.value;
            return n = this._trimAlignValue(n)
        },
        _values: function(n) {
            var r, t, i;
            if (arguments.length)
                return r = this.options.values[n],
                r = this._trimAlignValue(r);
            if (this.options.values && this.options.values.length) {
                for (t = this.options.values.slice(),
                i = 0; i < t.length; i += 1)
                    t[i] = this._trimAlignValue(t[i]);
                return t
            }
            return []
        },
        _trimAlignValue: function(n) {
            if (n <= this._valueMin())
                return this._valueMin();
            if (n >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1
              , i = (n - this._valueMin()) % t
              , r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t),
            parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var s, t, c, o, h, e = this.options.range, i = this.options, r = this, u = this._animateOff ? !1 : i.animate, f = {};
            this.options.values && this.options.values.length ? this.handles.each(function(e) {
                t = (r.values(e) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100,
                f[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%",
                n(this).stop(1, 1)[u ? "animate" : "css"](f, i.animate),
                r.options.range === !0 && (r.orientation === "horizontal" ? (e === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, i.animate),
                e === 1 && r.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })) : (e === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, i.animate),
                e === 1 && r.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                }))),
                s = t
            }) : (c = this.value(),
            o = this._valueMin(),
            h = this._valueMax(),
            t = h !== o ? (c - o) / (h - o) * 100 : 0,
            f[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%",
            this.handle.stop(1, 1)[u ? "animate" : "css"](f, i.animate),
            e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, i.animate),
            e === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, {
                queue: !1,
                duration: i.animate
            }),
            e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, i.animate),
            e === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, {
                queue: !1,
                duration: i.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var o, u, r, e, f = n(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                case n.ui.keyCode.HOME:
                case n.ui.keyCode.END:
                case n.ui.keyCode.PAGE_UP:
                case n.ui.keyCode.PAGE_DOWN:
                case n.ui.keyCode.UP:
                case n.ui.keyCode.RIGHT:
                case n.ui.keyCode.DOWN:
                case n.ui.keyCode.LEFT:
                    if (t.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    n(t.target).addClass("ui-state-active"),
                    o = this._start(t, f),
                    o === !1))
                        return
                }
                e = this.options.step,
                u = this.options.values && this.options.values.length ? r = this.values(f) : r = this.value();
                switch (t.keyCode) {
                case n.ui.keyCode.HOME:
                    r = this._valueMin();
                    break;
                case n.ui.keyCode.END:
                    r = this._valueMax();
                    break;
                case n.ui.keyCode.PAGE_UP:
                    r = this._trimAlignValue(u + (this._valueMax() - this._valueMin()) / i);
                    break;
                case n.ui.keyCode.PAGE_DOWN:
                    r = this._trimAlignValue(u - (this._valueMax() - this._valueMin()) / i);
                    break;
                case n.ui.keyCode.UP:
                case n.ui.keyCode.RIGHT:
                    if (u === this._valueMax())
                        return;
                    r = this._trimAlignValue(u + e);
                    break;
                case n.ui.keyCode.DOWN:
                case n.ui.keyCode.LEFT:
                    if (u === this._valueMin())
                        return;
                    r = this._trimAlignValue(u - e)
                }
                this._slide(t, f, r)
            },
            click: function(n) {
                n.preventDefault()
            },
            keyup: function(t) {
                var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(t, i),
                this._change(t, i),
                n(t.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery),
function(n) {
    function t(n) {
        return function() {
            var t = this.element.val();
            n.apply(this, arguments),
            this._refresh(),
            t !== this.element.val() && this._trigger("change")
        }
    }
    n.widget("ui.spinner", {
        version: "1.10.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = {}
              , i = this.element;
            return n.each(["min", "max", "step"], function(n, r) {
                var u = i.attr(r);
                u !== undefined && u.length && (t[r] = u)
            }),
            t
        },
        _events: {
            keydown: function(n) {
                this._start(n) && this._keydown(n) && n.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(n) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop(),
                this._refresh(),
                this.previous !== this.element.val() && this._trigger("change", n)
            },
            mousewheel: function(n, t) {
                if (t) {
                    if (!this.spinning && !this._start(n))
                        return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, n),
                    clearTimeout(this.mousewheelTimer),
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(n)
                    }, 100),
                    n.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function r() {
                    var n = this.element[0] === this.document[0].activeElement;
                    n || (this.element.focus(),
                    this.previous = i,
                    this._delay(function() {
                        this.previous = i
                    }))
                }
                var i;
                (i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
                t.preventDefault(),
                r.call(this),
                this.cancelBlur = !0,
                this._delay(function() {
                    delete this.cancelBlur,
                    r.call(this)
                }),
                this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (n(t.currentTarget).hasClass("ui-state-active")) {
                    if (this._start(t) === !1)
                        return !1;
                    this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                }
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"),
            this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
            this.buttons.height() > Math.ceil(n.height() * .5) && n.height() > 0 && n.height(n.height()),
            this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var r = this.options
              , i = n.ui.keyCode;
            switch (t.keyCode) {
            case i.UP:
                return this._repeat(null, 1, t),
                !0;
            case i.DOWN:
                return this._repeat(null, -1, t),
                !0;
            case i.PAGE_UP:
                return this._repeat(null, r.page, t),
                !0;
            case i.PAGE_DOWN:
                return this._repeat(null, -r.page, t),
                !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(n) {
            return !this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0)
        },
        _repeat: function(n, t, i) {
            n = n || 500,
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                this._repeat(40, t, i)
            }, n),
            this._spin(t * this.options.step, i)
        },
        _spin: function(n, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + n * this._increment(this.counter)),
            this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i),
            this.counter++)
        },
        _increment: function(t) {
            var i = this.options.incremental;
            return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))),
            n
        },
        _precisionOf: function(n) {
            var i = n.toString()
              , t = i.indexOf(".");
            return t === -1 ? 0 : i.length - t - 1
        },
        _adjustValue: function(n) {
            var r, i, t = this.options;
            return (r = t.min !== null ? t.min : 0,
            i = n - r,
            i = Math.round(i / t.step) * t.step,
            n = r + i,
            n = parseFloat(n.toFixed(this._precision())),
            t.max !== null && n > t.max) ? t.max : t.min !== null && n < t.min ? t.min : n
        },
        _stop: function(n) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", n))
        },
        _setOption: function(n, t) {
            if (n === "culture" || n === "numberFormat") {
                var i = this._parse(this.element.val());
                this.options[n] = t,
                this.element.val(this._format(i));
                return
            }
            (n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t)),
            n === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),
            this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),
            this._super(n, t),
            n === "disabled" && (t ? (this.element.prop("disabled", !0),
            this.buttons.button("disable")) : (this.element.prop("disabled", !1),
            this.buttons.button("enable")))
        },
        _setOptions: t(function(n) {
            this._super(n),
            this._value(this.element.val())
        }),
        _parse: function(n) {
            return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n),
            n === "" || isNaN(n) ? null : n
        },
        _format: function(n) {
            return n === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(n, t) {
            var i;
            n !== "" && (i = this._parse(n),
            i !== null && (t || (i = this._adjustValue(i)),
            n = this._format(i))),
            this.element.val(n),
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function(n) {
            this._stepUp(n)
        }),
        _stepUp: function(n) {
            this._start() && (this._spin((n || 1) * this.options.step),
            this._stop())
        },
        stepDown: t(function(n) {
            this._stepDown(n)
        }),
        _stepDown: function(n) {
            this._start() && (this._spin((n || 1) * -this.options.step),
            this._stop())
        },
        pageUp: t(function(n) {
            this._stepUp((n || 1) * this.options.page)
        }),
        pageDown: t(function(n) {
            this._stepDown((n || 1) * this.options.page)
        }),
        value: function(n) {
            if (!arguments.length)
                return this._parse(this.element.val());
            t(this._value).call(this, n)
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery),
function(n, t) {
    function f() {
        return ++u
    }
    function r(n) {
        return n.hash.length > 1 && decodeURIComponent(n.href.replace(i, "")) === decodeURIComponent(location.href.replace(i, ""))
    }
    var u = 0
      , i = /#.*$/;
    n.widget("ui.tabs", {
        version: "1.10.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var i = this
              , t = this.options;
            this.running = !1,
            this.element.addClass("ui-tabs").toggleClass("ui-tabs-collapsible", t.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
                n(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                n(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this._processTabs(),
            t.active = this._initialActive(),
            n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                return i.tabs.index(n)
            }))).sort()),
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n(),
            this._refresh(),
            this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var t = this.options.active
              , r = this.options.collapsible
              , i = location.hash.substring(1);
            return t === null && (i && this.tabs.each(function(r, u) {
                if (n(u).attr("aria-controls") === i)
                    return t = r,
                    !1
            }),
            t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)),
            t !== !1 && (t = this.tabs.index(this.tabs.eq(t)),
            t === -1 && (t = r ? !1 : 0)),
            !r && t === !1 && this.anchors.length && (t = 0),
            t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : n()
            }
        },
        _tabKeydown: function(t) {
            var u = n(this.document[0].activeElement).closest("li")
              , i = this.tabs.index(u)
              , r = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case n.ui.keyCode.RIGHT:
                case n.ui.keyCode.DOWN:
                    i++;
                    break;
                case n.ui.keyCode.UP:
                case n.ui.keyCode.LEFT:
                    r = !1,
                    i--;
                    break;
                case n.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case n.ui.keyCode.HOME:
                    i = 0;
                    break;
                case n.ui.keyCode.SPACE:
                    t.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(i);
                    return;
                case n.ui.keyCode.ENTER:
                    t.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(i === this.options.active ? !1 : i);
                    return;
                default:
                    return
                }
                t.preventDefault(),
                clearTimeout(this.activating),
                i = this._focusNextTab(i, r),
                t.ctrlKey || (u.attr("aria-selected", "false"),
                this.tabs.eq(i).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(),
            this.active.focus())
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(t, i) {
            function u() {
                return t > r && (t = 0),
                t < 0 && (t = r),
                t
            }
            for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1; )
                t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(n, t) {
            return n = this._findNextTab(n, t),
            this.tabs.eq(n).focus(),
            n
        },
        _setOption: function(n, t) {
            if (n === "active") {
                this._activate(t);
                return
            }
            if (n === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(n, t),
            n === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t),
            t || this.options.active !== !1 || this._activate(0)),
            n === "event" && this._setupEvents(t),
            n === "heightStyle" && this._setupHeightStyle(t)
        },
        _tabId: function(n) {
            return n.attr("aria-controls") || "ui-tabs-" + f()
        },
        _sanitizeSelector: function(n) {
            return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options
              , i = this.tablist.children(":has(a[href])");
            t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                return i.index(n)
            }),
            this._processTabs(),
            t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1,
            this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1,
            this.active = n()),
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.addClass("ui-tabs-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }),
            this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix").attr("role", "tablist"),
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default").attr({
                role: "tab",
                tabIndex: -1
            }),
            this.anchors = this.tabs.map(function() {
                return n("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }),
            this.panels = n(),
            this.anchors.each(function(i, u) {
                var e, f, s, c = n(u).uniqueId().attr("id"), o = n(u).closest("li"), h = o.attr("aria-controls");
                r(u) ? (e = u.hash,
                f = t.element.find(t._sanitizeSelector(e))) : (s = t._tabId(o),
                e = "#" + s,
                f = t.element.find(e),
                f.length || (f = t._createPanel(s),
                f.insertAfter(t.panels[i - 1] || t.tablist)),
                f.attr("aria-live", "polite")),
                f.length && (t.panels = t.panels.add(f)),
                h && o.data("ui-tabs-aria-controls", h),
                o.attr({
                    "aria-controls": e.substring(1),
                    "aria-labelledby": c
                }),
                f.attr("aria-labelledby", c)
            }),
            this.panels.addClass("ui-tabs-panel ui-widget-content").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var r = 0, i; i = this.tabs[r]; r++)
                t === !0 || n.inArray(r, t) !== -1 ? n(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var i = {
                click: function(n) {
                    n.preventDefault()
                }
            };
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, r = this.element.parent();
            t === "fill" ? (i = r.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var r = n(this)
                  , t = r.css("position");
                t !== "absolute" && t !== "fixed" && (i -= r.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                i -= n(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (i = 0,
            this.panels.each(function() {
                i = Math.max(i, n(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var o = this.options
              , r = this.active
              , c = n(t.currentTarget)
              , i = c.closest("li")
              , e = i[0] === r[0]
              , u = e && o.collapsible
              , f = u ? n() : this._getPanelForTab(i)
              , s = r.length ? this._getPanelForTab(r) : n()
              , h = {
                oldTab: r,
                oldPanel: s,
                newTab: u ? n() : i,
                newPanel: f
            };
            (t.preventDefault(),
            i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || e && !o.collapsible || this._trigger("beforeActivate", t, h) === !1) || (o.active = u ? !1 : this.tabs.index(i),
            this.active = e ? n() : i,
            this.xhr && this.xhr.abort(),
            s.length || f.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."),
            f.length && this.load(this.tabs.index(i), t),
            this._toggle(t, h))
        },
        _toggle: function(t, i) {
            function o() {
                f.running = !1,
                f._trigger("activate", t, i)
            }
            function e() {
                i.newTab.closest("li").addClass("ui-tabs-active"),
                r.length && f.options.show ? f._show(r, f.options.show, o) : (r.show(),
                o())
            }
            var f = this
              , r = i.newPanel
              , u = i.oldPanel;
            this.running = !0,
            u.length && this.options.hide ? this._hide(u, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                e()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
            u.hide(),
            e()),
            u.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            i.oldTab.attr("aria-selected", "false"),
            r.length && u.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return n(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1),
            r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }),
            i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var r, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active),
            r = i.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: r,
                currentTarget: r,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? n() : this.tabs.eq(t)
        },
        _getIndex: function(n) {
            return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))),
            n
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.element.removeClass("ui-tabs ui-tabs-collapsible"),
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix").removeAttr("role"),
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }),
            this.tabs.each(function() {
                var t = n(this)
                  , i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }),
            this.panels.show(),
            this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function(i) {
            var r = this.options.disabled;
            r !== !1 && (i === t ? r = !1 : (i = this._getIndex(i),
            r = n.isArray(r) ? n.map(r, function(n) {
                return n !== i ? n : null
            }) : n.map(this.tabs, function(n, t) {
                return t !== i ? t : null
            })),
            this._setupDisabled(r))
        },
        disable: function(i) {
            var r = this.options.disabled;
            if (r !== !0) {
                if (i === t)
                    r = !0;
                else {
                    if (i = this._getIndex(i),
                    n.inArray(i, r) !== -1)
                        return;
                    r = n.isArray(r) ? n.merge([i], r).sort() : [i]
                }
                this._setupDisabled(r)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var e = this
              , u = this.tabs.eq(t)
              , s = u.find(".ui-tabs-anchor")
              , f = this._getPanelForTab(u)
              , o = {
                tab: u,
                panel: f
            };
            r(s[0]) || (this.xhr = n.ajax(this._ajaxSettings(s, i, o)),
            this.xhr && this.xhr.statusText !== "canceled" && (u.addClass("ui-tabs-loading"),
            f.attr("aria-busy", "true"),
            this.xhr.success(function(n) {
                setTimeout(function() {
                    f.html(n),
                    e._trigger("load", i, o)
                }, 1)
            }).complete(function(n, t) {
                setTimeout(function() {
                    t === "abort" && e.panels.stop(!1, !0),
                    u.removeClass("ui-tabs-loading"),
                    f.removeAttr("aria-busy"),
                    n === e.xhr && delete e.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, r) {
            var u = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, f) {
                    return u._trigger("beforeLoad", i, n.extend({
                        jqXHR: t,
                        ajaxSettings: f
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = n(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}(jQuery),
function(n) {
    function i(t, i) {
        var r = (t.attr("aria-describedby") || "").split(/\s+/);
        r.push(i),
        t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
    }
    function t(t) {
        var u = t.data("ui-tooltip-id")
          , i = (t.attr("aria-describedby") || "").split(/\s+/)
          , r = n.inArray(u, i);
        r !== -1 && i.splice(r, 1),
        t.removeData("ui-tooltip-id"),
        i = n.trim(i.join(" ")),
        i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
    }
    var r = 0;
    n.widget("ui.tooltip", {
        version: "1.10.2",
        options: {
            content: function() {
                var t = n(this).attr("title") || "";
                return n("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top",
                at: "left bottom"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.options.disabled && this._disable()
        },
        _setOption: function(t, i) {
            var r = this;
            if (t === "disabled") {
                this[i ? "_disable" : "_enable"](),
                this.options[t] = i;
                return
            }
            this._super(t, i),
            t === "content" && n.each(this.tooltips, function(n, t) {
                r._updateContent(t)
            })
        },
        _disable: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r[0],
                t.close(u, !0)
            }),
            this.element.find(this.options.items).addBack().each(function() {
                var t = n(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var r = this
              , i = n(t ? t.target : this.element).closest(this.options.items);
            i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")),
            i.data("ui-tooltip-open", !0),
            t && t.type === "mouseover" && i.parents().each(function() {
                var t = n(this), i;
                t.data("ui-tooltip-open") && (i = n.Event("blur"),
                i.target = i.currentTarget = this,
                r.close(i, !0)),
                t.attr("title") && (t.uniqueId(),
                r.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                },
                t.attr("title", ""))
            }),
            this._updateContent(i, t))
        },
        _updateContent: function(n, t) {
            var r, i = this.options.content, f = this, u = t ? t.type : null;
            if (typeof i == "string")
                return this._open(t, n, i);
            r = i.call(n[0], function(i) {
                n.data("ui-tooltip-open") && f._delay(function() {
                    t && (t.type = u),
                    this._open(t, n, i)
                })
            }),
            r && this._open(t, n, r)
        },
        _open: function(t, r, u) {
            function s(n) {
                (o.of = n,
                f.is(":hidden")) || f.position(o)
            }
            var f, e, h, o = n.extend({}, this.options.position);
            if (u) {
                if (f = this._find(r),
                f.length) {
                    f.find(".ui-tooltip-content").html(u);
                    return
                }
                r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title")),
                f = this._tooltip(r),
                i(r, f.attr("id")),
                f.find(".ui-tooltip-content").html(u),
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: s
                }),
                s(t)) : f.position(n.extend({
                    of: r
                }, this.options.position)),
                f.hide(),
                this._show(f, this.options.show),
                this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    f.is(":visible") && (s(o.of),
                    clearInterval(h))
                }, n.fx.interval)),
                this._trigger("open", t, {
                    tooltip: f
                }),
                e = {
                    keyup: function(t) {
                        if (t.keyCode === n.ui.keyCode.ESCAPE) {
                            var i = n.Event(t);
                            i.currentTarget = r[0],
                            this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(f)
                    }
                },
                t && t.type !== "mouseover" || (e.mouseleave = "close"),
                t && t.type !== "focusin" || (e.focusout = "close"),
                this._on(!0, r, e)
            }
        },
        close: function(i) {
            var f = this
              , r = n(i ? i.currentTarget : this.element)
              , u = this._find(r);
            this.closing || (clearInterval(this.delayedShow),
            r.data("ui-tooltip-title") && r.attr("title", r.data("ui-tooltip-title")),
            t(r),
            u.stop(!0),
            this._hide(u, this.options.hide, function() {
                f._removeTooltip(n(this))
            }),
            r.removeData("ui-tooltip-open"),
            this._off(r, "mouseleave focusout keyup"),
            r[0] !== this.element[0] && this._off(r, "remove"),
            this._off(this.document, "mousemove"),
            i && i.type === "mouseleave" && n.each(this.parents, function(t, i) {
                n(i.element).attr("title", i.title),
                delete f.parents[t]
            }),
            this.closing = !0,
            this._trigger("close", i, {
                tooltip: u
            }),
            this.closing = !1)
        },
        _tooltip: function(t) {
            var u = "ui-tooltip-" + r++
              , i = n("<div>").attr({
                id: u,
                role: "tooltip"
            }).addClass("ui-tooltip soft-light-gradient" + (this.options.tooltipClass || ""));
            return n("<div>").addClass("ui-tooltip-content").appendTo(i),
            i.appendTo(this.document[0].body),
            this.tooltips[u] = t,
            i
        },
        _find: function(t) {
            var i = t.data("ui-tooltip-id");
            return i ? n("#" + i) : n()
        },
        _removeTooltip: function(n) {
            n.remove(),
            delete this.tooltips[n.attr("id")]
        },
        _destroy: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r[0],
                t.close(u, !0),
                n("#" + i).remove(),
                r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")),
                r.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery),
function(n) {
    var t = function(t) {
        var i = null
          , u = n("#" + t)
          , r = n("input[name=" + t + "]");
        return u.length ? i = u : r != undefined && (i = r),
        i
    };
    n.fn.autotab_magic = function(t) {
        for (var r, u, i = 0; i < this.length; i++)
            r = i + 1,
            u = i - 1,
            i > 0 && r < this.length ? n(this[i]).autotab({
                target: n(this[r]),
                previous: n(this[u])
            }) : i > 0 ? n(this[i]).autotab({
                previous: n(this[u])
            }) : n(this[i]).autotab({
                target: n(this[r])
            }),
            (t != null && isNaN(t) && t == n(this[i]).attr("id") || !isNaN(t) && t == i) && n(this[i]).focus();
        return this
    }
    ,
    n.fn.autotab_filter = function(t) {
        var i = {
            format: "all",
            uppercase: !1,
            lowercase: !1,
            nospace: !1,
            pattern: null
        }, r;
        for (typeof t == "string" || typeof t == "function" ? i.format = t : n.extend(i, t),
        r = 0; r < this.length; r++)
            n(this[r]).bind("keyup", function() {
                var t = this.value, r;
                switch (i.format) {
                case "text":
                    r = new RegExp("[0-9]+","g"),
                    t = t.replace(r, "");
                    break;
                case "alpha":
                    r = new RegExp("[^a-zA-Z]+","g"),
                    t = t.replace(r, "");
                    break;
                case "number":
                case "numeric":
                    r = new RegExp("[^0-9]+","g"),
                    t = t.replace(r, "");
                    break;
                case "alphanumeric":
                    r = new RegExp("[^0-9a-zA-Z]+","g"),
                    t = t.replace(r, "");
                    break;
                case "custom":
                    r = new RegExp(i.pattern,"g"),
                    t = t.replace(r, "");
                    break;
                case "all":
                default:
                    typeof i.format == "function" && (t = i.format(t))
                }
                i.nospace && (r = new RegExp("[ ]+","g"),
                t = t.replace(r, "")),
                i.uppercase && (t = t.toUpperCase()),
                i.lowercase && (t = t.toLowerCase()),
                t != this.value && (this.value = t)
            })
    }
    ,
    n.fn.autotab = function(i) {
        var r = {
            format: "all",
            maxlength: 2147483647,
            uppercase: !1,
            lowercase: !1,
            nospace: !1,
            target: null,
            previous: null,
            pattern: null
        }, u;
        return n.extend(r, i),
        typeof r.target == "string" && (r.target = t(r.target)),
        typeof r.previous == "string" && (r.previous = t(r.previous)),
        u = n(this).attr("maxlength"),
        r.maxlength == 2147483647 && u != 2147483647 ? r.maxlength = u : r.maxlength > 0 ? n(this).attr("maxlength", r.maxlength) : r.target = null,
        r.format != "all" && n(this).autotab_filter(r),
        n(this).bind("keydown", function(n) {
            n.which == 8 && this.value.length == 0 && r.previous && r.previous.focus().val(r.previous.val())
        }).bind("keyup", function(t) {
            var u = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145], i;
            t.which != 8 && (i = n(this).val(),
            n.inArray(t.which, u) == -1 && i.length == r.maxlength && r.target && r.target.focus())
        })
    }
}(jQuery),
function(n) {
    function i(t) {
        var i = t || window.event
          , e = [].slice.call(arguments, 1)
          , r = 0
          , o = !0
          , f = 0
          , u = 0;
        return t = n.event.fix(i),
        t.type = "mousewheel",
        i.wheelDelta && (r = i.wheelDelta / 120),
        i.detail && (r = -i.detail / 3),
        u = r,
        i.axis !== undefined && i.axis === i.HORIZONTAL_AXIS && (u = 0,
        f = -1 * r),
        i.wheelDeltaY !== undefined && (u = i.wheelDeltaY / 120),
        i.wheelDeltaX !== undefined && (f = i.wheelDeltaX / -120),
        e.unshift(t, r, f, u),
        (n.event.dispatch || n.event.handle).apply(this, e)
    }
    var t = ["DOMMouseScroll", "mousewheel"], r;
    if (n.event.fixHooks)
        for (r = t.length; r; )
            n.event.fixHooks[t[--r]] = n.event.mouseHooks;
    n.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var n = t.length; n; )
                    this.addEventListener(t[--n], i, !1);
            else
                this.onmousewheel = i
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = t.length; n; )
                    this.removeEventListener(t[--n], i, !1);
            else
                this.onmousewheel = null
        }
    },
    n.fn.extend({
        mousewheel: function(n) {
            return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
        },
        unmousewheel: function(n) {
            return this.unbind("mousewheel", n)
        }
    })
}(jQuery),
function(n, t, i) {
    n.fn.jScrollPane = function(r) {
        function u(r, u) {
            function ci(t) {
                var w, nt, tt, u, c, p, d = !1, g = !1;
                if (f = t,
                o === i)
                    c = r.scrollTop(),
                    p = r.scrollLeft(),
                    r.css({
                        overflow: "hidden",
                        padding: 0
                    }),
                    h = r.innerWidth() + ct,
                    s = r.innerHeight(),
                    r.width(h),
                    o = n('<div class="jspPane" />').css("padding", yi).append(r.children()),
                    e = n('<div class="jspContainer" />').css({
                        width: h + "px",
                        height: s + "px"
                    }).append(o).appendTo(r);
                else {
                    if (r.css("width", ""),
                    d = f.stickToBottom && wr(),
                    g = f.stickToRight && yr(),
                    u = r.innerWidth() + ct != h || r.outerHeight() != s,
                    u && (h = r.innerWidth() + ct,
                    s = r.innerHeight(),
                    e.css({
                        width: h + "px",
                        height: s + "px"
                    })),
                    !u && pi == y && o.outerHeight() == v) {
                        r.width(h);
                        return
                    }
                    pi = y,
                    o.css("width", ""),
                    r.width(h),
                    e.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                o.css("overflow", "auto"),
                y = t.contentWidth ? t.contentWidth : o[0].scrollWidth,
                v = o[0].scrollHeight,
                o.css("overflow", ""),
                li = y / h,
                ii = v / s,
                k = ii > 1,
                b = li > 1,
                b || k ? (r.addClass("jspScrollable"),
                w = f.maintainPosition && (l || a),
                w && (nt = ot(),
                tt = ft()),
                ar(),
                vr(),
                lr(),
                w && (vt(g ? y - h : nt, !1),
                rt(d ? v - s : tt, !1)),
                tr(),
                pr(),
                nr(),
                f.enableKeyboardNavigation && fr(),
                f.clickOnTrack && cr(),
                or(),
                f.hijackInternalLinks && sr()) : (r.removeClass("jspScrollable"),
                o.css({
                    top: 0,
                    width: e.width() - ct
                }),
                ir(),
                ur(),
                er(),
                gi()),
                f.autoReinitialise && !lt ? lt = setInterval(function() {
                    ci(f)
                }, f.autoReinitialiseDelay) : !f.autoReinitialise && lt && clearInterval(lt),
                c && r.scrollTop(0) && rt(c, !1),
                p && r.scrollLeft(0) && vt(p, !1),
                r.trigger("jsp-initialised", [b || k])
            }
            function ar() {
                k && (e.append(n('<div class="jspVerticalBar" />').append(n('<div class="jspCap jspCapTop" />'), n('<div class="jspTrack" />').append(n('<div class="jspDrag" />').append(n('<div class="jspDragTop" />'), n('<div class="jspDragBottom" />'))), n('<div class="jspCap jspCapBottom" />'))),
                ti = e.find(">.jspVerticalBar"),
                nt = ti.find(">.jspTrack"),
                p = nt.find(">.jspDrag"),
                f.showArrows && (wt = n('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", it(0, -1)).bind("click.jsp", yt),
                dt = n('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", it(0, 1)).bind("click.jsp", yt),
                f.arrowScrollOnHover && (wt.bind("mouseover.jsp", it(0, -1, wt)),
                dt.bind("mouseover.jsp", it(0, 1, dt))),
                wi(nt, f.verticalArrowPositions, wt, dt)),
                pt = s,
                e.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    pt -= n(this).outerHeight()
                }),
                p.hover(function() {
                    p.addClass("jspHover")
                }, function() {
                    p.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    n("html").bind("dragstart.jsp selectstart.jsp", yt),
                    p.addClass("jspActive");
                    var i = t.pageY - p.position().top;
                    return n("html").bind("mousemove.jsp", function(n) {
                        st(n.pageY - i, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", di),
                    !1
                }),
                ki())
            }
            function ki() {
                nt.height(pt + "px"),
                l = 0,
                oi = f.verticalGutter + nt.outerWidth(),
                o.width(h - oi - ct);
                try {
                    ti.position().left === 0 && o.css("margin-left", oi + "px")
                } catch (n) {}
            }
            function vr() {
                b && (e.append(n('<div class="jspHorizontalBar" />').append(n('<div class="jspCap jspCapLeft" />'), n('<div class="jspTrack" />').append(n('<div class="jspDrag" />').append(n('<div class="jspDragGradient" />'), n('<div class="jspDragLeft" />'), n('<div class="jspDragRight" />'))), n('<div class="jspCap jspCapRight" />'))),
                fi = e.find(">.jspHorizontalBar"),
                g = fi.find(">.jspTrack"),
                w = g.find(">.jspDrag"),
                f.showArrows && (bt = n('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", it(-1, 0)).bind("click.jsp", yt),
                kt = n('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", it(1, 0)).bind("click.jsp", yt),
                f.arrowScrollOnHover && (bt.bind("mouseover.jsp", it(-1, 0, bt)),
                kt.bind("mouseover.jsp", it(1, 0, kt))),
                wi(g, f.horizontalArrowPositions, bt, kt)),
                w.hover(function() {
                    w.addClass("jspHover")
                }, function() {
                    w.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    n("html").bind("dragstart.jsp selectstart.jsp", yt),
                    w.addClass("jspActive");
                    var i = t.pageX - w.position().left;
                    return n("html").bind("mousemove.jsp", function(n) {
                        at(n.pageX - i, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", di),
                    !1
                }),
                ht = e.innerWidth(),
                bi())
            }
            function bi() {
                e.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    ht -= n(this).outerWidth()
                }),
                g.width(ht + "px"),
                a = 0
            }
            function lr() {
                if (b && k) {
                    var t = g.outerHeight()
                      , i = nt.outerWidth();
                    pt -= t,
                    n(fi).find(">.jspCap:visible,>.jspArrow").each(function() {
                        ht += n(this).outerWidth()
                    }),
                    ht -= i,
                    s -= i,
                    h -= t,
                    g.parent().append(n('<div class="jspCorner" />').css("width", t + "px")),
                    ki(),
                    bi()
                }
                b && o.width(e.outerWidth() - ct + "px"),
                v = o.outerHeight(),
                ii = v / s,
                b && (tt = Math.ceil(1 / li * ht),
                tt > f.horizontalDragMaxWidth ? tt = f.horizontalDragMaxWidth : tt < f.horizontalDragMinWidth && (tt = f.horizontalDragMinWidth),
                w.width(tt + "px"),
                ut = ht - tt,
                hi(a)),
                k && (et = Math.ceil(1 / ii * pt),
                et > f.verticalDragMaxHeight ? et = f.verticalDragMaxHeight : et < f.verticalDragMinHeight && (et = f.verticalDragMinHeight),
                p.height(et + "px"),
                d = pt - et,
                si(l))
            }
            function wi(n, t, i, r) {
                var f = "before", u = "after", e;
                t == "os" && (t = /Mac/.test(navigator.platform) ? "after" : "split"),
                t == f ? u = t : t == u && (f = t,
                e = i,
                i = r,
                r = e),
                n[f](i)[u](r)
            }
            function it(n, t, i) {
                return function() {
                    return hr(n, t, this, i),
                    this.blur(),
                    !1
                }
            }
            function hr(t, i, r, u) {
                r = n(r).addClass("jspActive");
                var o, e, h = !0, s = function() {
                    t !== 0 && c.scrollByX(t * f.arrowButtonSpeed),
                    i !== 0 && c.scrollByY(i * f.arrowButtonSpeed),
                    e = setTimeout(s, h ? f.initialDelay : f.arrowRepeatFreq),
                    h = !1
                };
                s(),
                o = u ? "mouseout.jsp" : "mouseup.jsp",
                u = u || n("html"),
                u.bind(o, function() {
                    r.removeClass("jspActive"),
                    e && clearTimeout(e),
                    e = null,
                    u.unbind(o)
                })
            }
            function cr() {
                gi(),
                k && nt.bind("mousedown.jsp", function(t) {
                    if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                        var a = n(this), y = a.offset(), e = t.pageY - y.top - l, r, h = !0, o = function() {
                            var p = a.offset()
                              , n = t.pageY - p.top - et / 2
                              , i = s * f.scrollPagePercent
                              , y = d * i / (v - s);
                            if (e < 0)
                                l - y > n ? c.scrollByY(-i) : st(n);
                            else if (e > 0)
                                l + y < n ? c.scrollByY(i) : st(n);
                            else {
                                u();
                                return
                            }
                            r = setTimeout(o, h ? f.initialDelay : f.trackClickRepeatFreq),
                            h = !1
                        }, u = function() {
                            r && clearTimeout(r),
                            r = null,
                            n(document).unbind("mouseup.jsp", u)
                        };
                        return o(),
                        n(document).bind("mouseup.jsp", u),
                        !1
                    }
                }),
                b && g.bind("mousedown.jsp", function(t) {
                    if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                        var l = n(this), v = l.offset(), e = t.pageX - v.left - a, r, s = !0, o = function() {
                            var p = l.offset()
                              , n = t.pageX - p.left - tt / 2
                              , i = h * f.scrollPagePercent
                              , v = ut * i / (y - h);
                            if (e < 0)
                                a - v > n ? c.scrollByX(-i) : at(n);
                            else if (e > 0)
                                a + v < n ? c.scrollByX(i) : at(n);
                            else {
                                u();
                                return
                            }
                            r = setTimeout(o, s ? f.initialDelay : f.trackClickRepeatFreq),
                            s = !1
                        }, u = function() {
                            r && clearTimeout(r),
                            r = null,
                            n(document).unbind("mouseup.jsp", u)
                        };
                        return o(),
                        n(document).bind("mouseup.jsp", u),
                        !1
                    }
                })
            }
            function gi() {
                g && g.unbind("mousedown.jsp"),
                nt && nt.unbind("mousedown.jsp")
            }
            function di() {
                n("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),
                p && p.removeClass("jspActive"),
                w && w.removeClass("jspActive")
            }
            function st(n, t) {
                k && (n < 0 ? n = 0 : n > d && (n = d),
                t === i && (t = f.animateScroll),
                t ? c.animate(p, "top", n, si) : (p.css("top", n),
                si(n)))
            }
            function si(n) {
                n === i && (n = p.position().top),
                e.scrollTop(0),
                l = n;
                var u = l === 0
                  , t = l == d
                  , h = n / d
                  , f = -h * (v - s);
                (ri != u || ei != t) && (ri = u,
                ei = t,
                r.trigger("jsp-arrow-change", [ri, ei, ui, gt])),
                br(u, t),
                o.css("top", f),
                r.trigger("jsp-scroll-y", [-f, u, t]).trigger("scroll")
            }
            function at(n, t) {
                b && (n < 0 ? n = 0 : n > ut && (n = ut),
                t === i && (t = f.animateScroll),
                t ? c.animate(w, "left", n, hi) : (w.css("left", n),
                hi(n)))
            }
            function hi(n) {
                n === i && (n = w.position().left),
                e.scrollTop(0),
                a = n;
                var u = a === 0
                  , t = a == ut
                  , s = n / ut
                  , f = -s * (y - h);
                (ui != u || gt != t) && (ui = u,
                gt = t,
                r.trigger("jsp-arrow-change", [ri, ei, ui, gt])),
                kr(u, t),
                o.css("left", f),
                r.trigger("jsp-scroll-x", [-f, u, t]).trigger("scroll")
            }
            function br(n, t) {
                f.showArrows && (wt[n ? "addClass" : "removeClass"]("jspDisabled"),
                dt[t ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function kr(n, t) {
                f.showArrows && (bt[n ? "addClass" : "removeClass"]("jspDisabled"),
                kt[t ? "addClass" : "removeClass"]("jspDisabled"))
            }
            function rt(n, t) {
                var i = n / (v - s);
                st(i * d, t)
            }
            function vt(n, t) {
                var i = n / (y - h);
                at(i * ut, t)
            }
            function ni(t, i, r) {
                var u, p, v, o = 0, c = 0, w, y, b, k, a, l;
                try {
                    u = n(t)
                } catch (d) {
                    return
                }
                for (p = u.outerHeight(),
                v = u.outerWidth(),
                e.scrollTop(0),
                e.scrollLeft(0); !u.is(".jspPane"); )
                    if (o += u.position().top,
                    c += u.position().left,
                    u = u.offsetParent(),
                    /^body|html$/i.test(u[0].nodeName))
                        return;
                w = ft(),
                b = w + s,
                o < w || i ? a = o - f.verticalGutter : o + p > b && (a = o - s + p + f.verticalGutter),
                a && rt(a, r),
                y = ot(),
                k = y + h,
                c < y || i ? l = c - f.horizontalGutter : c + v > k && (l = c - h + v + f.horizontalGutter),
                l && vt(l, r)
            }
            function ot() {
                return -o.position().left
            }
            function ft() {
                return -o.position().top
            }
            function wr() {
                var n = v - s;
                return n > 20 && n - ft() < 10
            }
            function yr() {
                var n = y - h;
                return n > 20 && n - ot() < 10
            }
            function pr() {
                e.unbind(vi).bind(vi, function(n, t, i, r) {
                    var e = a
                      , u = l;
                    return c.scrollBy(i * f.mouseWheelSpeed, -r * f.mouseWheelSpeed, !1),
                    e == a && u == l
                })
            }
            function ir() {
                e.unbind(vi)
            }
            function yt() {
                return !1
            }
            function tr() {
                o.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(n) {
                    ni(n.target, !1)
                })
            }
            function ur() {
                o.find(":input,a").unbind("focus.jsp")
            }
            function fr() {
                function h() {
                    var r = a
                      , n = l;
                    switch (t) {
                    case 40:
                        c.scrollByY(f.keyboardSpeed, !1);
                        break;
                    case 38:
                        c.scrollByY(-f.keyboardSpeed, !1);
                        break;
                    case 34:
                    case 32:
                        c.scrollByY(s * f.scrollPagePercent, !1);
                        break;
                    case 33:
                        c.scrollByY(-s * f.scrollPagePercent, !1);
                        break;
                    case 39:
                        c.scrollByX(f.keyboardSpeed, !1);
                        break;
                    case 37:
                        c.scrollByX(-f.keyboardSpeed, !1)
                    }
                    return i = r != a || n != l
                }
                var t, i, u = [];
                b && u.push(fi[0]),
                k && u.push(ti[0]),
                o.focus(function() {
                    r.focus()
                }),
                r.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(r) {
                    if (r.target === this || u.length && n(r.target).closest(u).length) {
                        var e = a
                          , f = l;
                        switch (r.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            t = r.keyCode,
                            h();
                            break;
                        case 35:
                            rt(v - s),
                            t = null;
                            break;
                        case 36:
                            rt(0),
                            t = null
                        }
                        return i = r.keyCode == t && e != a || f != l,
                        !i
                    }
                }).bind("keypress.jsp", function(n) {
                    return n.keyCode == t && h(),
                    !i
                }),
                f.hideFocus ? (r.css("outline", "none"),
                "hideFocus"in e[0] && r.attr("hideFocus", !0)) : (r.css("outline", ""),
                "hideFocus"in e[0] && r.attr("hideFocus", !1))
            }
            function er() {
                r.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }
            function or() {
                if (location.hash && location.hash.length > 1) {
                    var t, r, i = escape(location.hash.substr(1));
                    try {
                        t = n("#" + i + ', a[name="' + i + '"]')
                    } catch (u) {
                        return
                    }
                    t.length && o.find(i) && (e.scrollTop() === 0 ? r = setInterval(function() {
                        e.scrollTop() > 0 && (ni(t, !0),
                        n(document).scrollTop(e.position().top),
                        clearInterval(r))
                    }, 50) : (ni(t, !0),
                    n(document).scrollTop(e.position().top)))
                }
            }
            function sr() {
                n(document.body).data("jspHijack") || (n(document.body).data("jspHijack", !0),
                n(document.body).delegate("a[href*=#]", "click", function(i) {
                    var c = this.href.substr(0, this.href.indexOf("#")), h = location.href, o, r, u, s, f, e;
                    if (location.href.indexOf("#") !== -1 && (h = location.href.substr(0, location.href.indexOf("#"))),
                    c === h) {
                        o = escape(this.href.substr(this.href.indexOf("#") + 1)),
                        r;
                        try {
                            r = n("#" + o + ', a[name="' + o + '"]')
                        } catch (l) {
                            return
                        }
                        r.length && (u = r.closest(".jspScrollable"),
                        s = u.data("jsp"),
                        s.scrollToElement(r, !0),
                        u[0].scrollIntoView && (f = n(t).scrollTop(),
                        e = r.offset().top,
                        (e < f || e > f + n(t).height()) && u[0].scrollIntoView()),
                        i.preventDefault())
                    }
                }))
            }
            function nr() {
                var u, f, r, t, n, i = !1;
                e.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(e) {
                    var o = e.originalEvent.touches[0];
                    u = ot(),
                    f = ft(),
                    r = o.pageX,
                    t = o.pageY,
                    n = !1,
                    i = !0
                }).bind("touchmove.jsp", function(e) {
                    if (i) {
                        var o = e.originalEvent.touches[0]
                          , h = a
                          , s = l;
                        return c.scrollTo(u + r - o.pageX, f + t - o.pageY),
                        n = n || Math.abs(r - o.pageX) > 5 || Math.abs(t - o.pageY) > 5,
                        h == a && s == l
                    }
                }).bind("touchend.jsp", function() {
                    i = !1
                }).bind("click.jsp-touchclick", function() {
                    if (n)
                        return n = !1,
                        !1
                })
            }
            function rr() {
                var t = ft()
                  , n = ot();
                r.removeClass("jspScrollable").unbind(".jsp"),
                r.replaceWith(ai.append(o.children())),
                ai.scrollTop(t),
                ai.scrollLeft(n),
                lt && clearInterval(lt)
            }
            var f, c = this, o, h, s, e, y, v, li, ii, k, b, p, d, l, w, ut, a, ti, nt, oi, pt, et, wt, dt, fi, g, ht, tt, bt, kt, lt, yi, ct, pi, ri = !0, ui = !0, ei = !1, gt = !1, ai = r.clone(!1, !1).empty(), vi = n.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            yi = r.css("paddingTop") + " " + r.css("paddingRight") + " " + r.css("paddingBottom") + " " + r.css("paddingLeft"),
            ct = (parseInt(r.css("paddingLeft"), 10) || 0) + (parseInt(r.css("paddingRight"), 10) || 0),
            n.extend(c, {
                reinitialise: function(t) {
                    t = n.extend({}, f, t),
                    ci(t)
                },
                scrollToElement: function(n, t, i) {
                    ni(n, t, i)
                },
                scrollTo: function(n, t, i) {
                    vt(n, i),
                    rt(t, i)
                },
                scrollToX: function(n, t) {
                    vt(n, t)
                },
                scrollToY: function(n, t) {
                    rt(n, t)
                },
                scrollToPercentX: function(n, t) {
                    vt(n * (y - h), t)
                },
                scrollToPercentY: function(n, t) {
                    rt(n * (v - s), t)
                },
                scrollBy: function(n, t, i) {
                    c.scrollByX(n, i),
                    c.scrollByY(t, i)
                },
                scrollByX: function(n, t) {
                    var r = ot() + Math[n < 0 ? "floor" : "ceil"](n)
                      , i = r / (y - h);
                    at(i * ut, t)
                },
                scrollByY: function(n, t) {
                    var r = ft() + Math[n < 0 ? "floor" : "ceil"](n)
                      , i = r / (v - s);
                    st(i * d, t)
                },
                positionDragX: function(n, t) {
                    at(n, t)
                },
                positionDragY: function(n, t) {
                    st(n, t)
                },
                animate: function(n, t, i, r) {
                    var u = {};
                    u[t] = i,
                    n.animate(u, {
                        duration: f.animateDuration,
                        easing: f.animateEase,
                        queue: !1,
                        step: r
                    })
                },
                getContentPositionX: function() {
                    return ot()
                },
                getContentPositionY: function() {
                    return ft()
                },
                getContentWidth: function() {
                    return y
                },
                getContentHeight: function() {
                    return v
                },
                getPercentScrolledX: function() {
                    return ot() / (y - h)
                },
                getPercentScrolledY: function() {
                    return ft() / (v - s)
                },
                getIsScrollableH: function() {
                    return b
                },
                getIsScrollableV: function() {
                    return k
                },
                getContentPane: function() {
                    return o
                },
                scrollToBottom: function(n) {
                    st(d, n)
                },
                hijackInternalLinks: n.noop,
                destroy: function() {
                    rr()
                }
            }),
            ci(u)
        }
        return r = n.extend({}, n.fn.jScrollPane.defaults, r),
        n.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            r[this] = r[this] || r.speed
        }),
        this.each(function() {
            var i = n(this)
              , t = i.data("jsp");
            t ? t.reinitialise(r) : (n("script", i).filter('[type="text/javascript"],:not([type])').remove(),
            t = new u(i,r),
            i.data("jsp", t))
        })
    }
    ,
    n.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: i,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}(jQuery, this),
function(n) {
    var t = function() {
        var t = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        }
          , l = function() {
            n(window).load(function() {
                n("body").children().on("click.superclick", function() {
                    var t = n(".sf-js-enabled");
                    t.superclick("reset")
                })
            })
        }()
          , o = function(n, i) {
            var r = t.menuClass;
            i.cssArrows && (r += " " + t.menuArrowClass),
            n.toggleClass(r)
        }
          , c = function(i, r) {
            return i.find("li." + r.pathClass).slice(0, r.pathLevels).addClass(r.activeClass + " " + t.bcClass).filter(function() {
                return n(this).children("ul").hide().show().length
            }).removeClass(r.pathClass)
        }
          , e = function(n) {
            n.children("a").toggleClass(t.anchorClass)
        }
          , r = function(n) {
            var t = n.css("ms-touch-action");
            t = t === "pan-y" ? "auto" : "pan-y",
            n.css("ms-touch-action", t)
        }
          , h = function() {
            var r = n(this), f = r.siblings("ul"), i;
            if (f.length)
                return i = u,
                n.proxy(i, r.parent("li"))(),
                !1
        }
          , u = function() {
            var t = n(this)
              , r = i(t);
            t.siblings().superclick("hide").end().superclick("show")
        }
          , a = function() {
            var t = n(this)
              , r = i(t);
            n.proxy(s, t, r)()
        }
          , s = function(t) {
            t.retainPath = n.inArray(this[0], t.$path) > -1,
            this.superclick("hide"),
            this.parents("." + t.activeClass).length || (t.onIdle.call(f(this)),
            t.$path.length && n.proxy(u, t.$path)())
        }
          , f = function(n) {
            return n.closest("." + t.menuClass)
        }
          , i = function(n) {
            return f(n).data("sf-options")
        };
        return {
            hide: function(t) {
                var f, r;
                if (this.length) {
                    if (f = this,
                    r = i(f),
                    !r)
                        return this;
                    var o = r.retainPath === !0 ? r.$path : ""
                      , u = f.find("li." + r.activeClass).add(this).not(o).removeClass(r.activeClass).children("ul")
                      , e = r.speedOut;
                    t && (u.show(),
                    e = 0),
                    r.retainPath = !1,
                    r.onBeforeHide.call(u),
                    u.stop(!0, !0).animate(r.animationOut, e, function() {
                        var t = n(this);
                        r.onHide.call(t)
                    })
                }
                return this
            },
            show: function() {
                var n = i(this), r, t;
                return n ? (r = this.addClass(n.activeClass),
                t = r.children("ul"),
                n.onBeforeShow.call(t),
                t.stop(!0, !0).animate(n.animation, n.speed, function() {
                    n.onShow.call(t)
                }),
                this) : this
            },
            destroy: function() {
                return this.each(function() {
                    var u = n(this)
                      , i = u.data("sf-options")
                      , f = u.find("li:has(ul)");
                    if (!i)
                        return !1;
                    o(u, i),
                    e(f),
                    r(u),
                    u.off(".superclick"),
                    f.children("ul").attr("style", function(n, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }),
                    i.$path.removeClass(i.activeClass + " " + t.bcClass).addClass(i.pathClass),
                    u.find("." + i.activeClass).removeClass(i.activeClass),
                    i.onDestroy.call(u),
                    u.removeData("sf-options")
                })
            },
            reset: function() {
                return this.each(function() {
                    var t = n(this)
                      , u = i(t)
                      , r = n(t.find("." + u.activeClass).toArray().reverse());
                    r.children("a").trigger("click")
                })
            },
            init: function(i) {
                return this.each(function() {
                    var u = n(this), f, s;
                    if (u.data("sf-options"))
                        return !1;
                    f = n.extend({}, n.fn.superclick.defaults, i),
                    s = u.find("li:has(ul)"),
                    f.$path = c(u, f),
                    u.data("sf-options", f),
                    o(u, f),
                    e(s),
                    r(u);
                    u.on("click.superclick", "a", h);
                    s.not("." + t.bcClass).superclick("hide", !0),
                    f.onInit.call(this)
                })
            }
        }
    }();
    n.fn.superclick = function(i) {
        return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : typeof i != "object" && i ? n.error("Method " + i + " does not exist on jQuery.fn.superclick") : t.init.apply(this, arguments)
    }
    ,
    n.fn.superclick.defaults = {
        activeClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        onInit: n.noop,
        onBeforeShow: n.noop,
        onShow: n.noop,
        onBeforeHide: n.noop,
        onHide: n.noop,
        onIdle: n.noop,
        onDestroy: n.noop
    }
}(jQuery),
function() {
    var n = !1;
    window.JQClass = function() {}
    ,
    JQClass.classes = {},
    JQClass.extend = function t(i) {
        function u() {
            !n && this._init && this._init.apply(this, arguments)
        }
        var e = this.prototype, f, r;
        n = !0,
        f = new this,
        n = !1;
        for (r in i)
            f[r] = typeof i[r] == "function" && typeof e[r] == "function" ? function(n, t) {
                return function() {
                    var r = this._super, i;
                    return this._super = function(t) {
                        return e[n].apply(this, t || [])
                    }
                    ,
                    i = t.apply(this, arguments),
                    this._super = r,
                    i
                }
            }(r, i[r]) : i[r];
        return u.prototype = f,
        u.prototype.constructor = u,
        u.extend = t,
        u
    }
}(),
function(n) {
    function t(n) {
        return n.replace(/-([a-z])/g, function(n, t) {
            return t.toUpperCase()
        })
    }
    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function() {
            return "is-" + this.name
        },
        _init: function() {
            n.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var i = t(this.name);
            n[i] = this,
            n.fn[i] = function(t) {
                var r = Array.prototype.slice.call(arguments, 1);
                return n[i]._isNotChained(t, r) ? n[i][t].apply(n[i], [this[0]].concat(r)) : this.each(function() {
                    if (typeof t == "string") {
                        if (t[0] === "_" || !n[i][t])
                            throw "Unknown method: " + t;
                        n[i][t].apply(n[i], [this].concat(r))
                    } else
                        n[i]._attach(this, t)
                })
            }
        },
        setDefaults: function(t) {
            n.extend(this.defaultOptions, t || {})
        },
        _isNotChained: function(t, i) {
            return t === "option" && (i.length === 0 || i.length === 1 && typeof i[0] == "string") ? !0 : n.inArray(t, this._getters) > -1
        },
        _attach: function(t, i) {
            if (t = n(t),
            !t.hasClass(this._getMarker())) {
                t.addClass(this._getMarker()),
                i = n.extend({}, this.defaultOptions, this._getMetadata(t), i || {});
                var r = n.extend({
                    name: this.name,
                    elem: t,
                    options: i
                }, this._instSettings(t, i));
                t.data(this.name, r),
                this._postAttach(t, r),
                this.option(t, i)
            }
        },
        _instSettings: function() {
            return {}
        },
        _postAttach: function() {},
        _getMetadata: function(elem) {
            var data, name, value;
            try {
                data = elem.data(this.name.toLowerCase()) || "",
                data = data.replace(/'/g, '"'),
                data = data.replace(/([a-zA-Z0-9]+):/g, function(n, t, i) {
                    var r = data.substring(0, i).match(/"/g);
                    return !r || r.length % 2 == 0 ? '"' + t + '":' : t + ":"
                }),
                data = n.parseJSON("{" + data + "}");
                for (name in data)
                    value = data[name],
                    typeof value == "string" && value.match(/^new Date\((.*)\)$/) && (data[name] = eval(value));
                return data
            } catch (e) {
                return {}
            }
        },
        _getInst: function(t) {
            return n(t).data(this.name) || {}
        },
        option: function(t, i, r) {
            var f, u;
            if (t = n(t),
            f = t.data(this.name),
            !i || typeof i == "string" && r == null)
                return u = (f || {}).options,
                u && i ? u[i] : u;
            t.hasClass(this._getMarker()) && (u = i || {},
            typeof i == "string" && (u = {},
            u[i] = r),
            this._optionsChanged(t, f, u),
            n.extend(f.options, u))
        },
        _optionsChanged: function() {},
        destroy: function(t) {
            (t = n(t),
            t.hasClass(this._getMarker())) && (this._preDestroy(t, this._getInst(t)),
            t.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function() {}
    }),
    n.JQPlugin = {
        createPlugin: function(n, i) {
            typeof n == "object" && (i = n,
            n = "JQPlugin"),
            n = t(n);
            var r = t(i.name);
            JQClass.classes[r] = JQClass.classes[n].extend(i),
            new JQClass.classes[r]
        }
    }
}(jQuery),
function(n) {
    var t;
    n.fn.printThis = function(i) {
        var e, f, o, u, s, r;
        t = n.extend({}, n.fn.printThis.defaults, i),
        e = this instanceof jQuery ? this : n(this),
        f = "printThis-" + +new Date,
        window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i) ? (o = 'javascript:document.write("<head><script>document.domain=\\"' + document.domain + '\\";<\/script></head><body></body>")',
        u = document.createElement("iframe"),
        u.name = "printIframe",
        u.id = f,
        u.className = "MSIE",
        document.body.appendChild(u),
        u.src = o) : (s = n("<iframe id='" + f + "' name='printIframe' />"),
        s.appendTo("body")),
        r = n("#" + f),
        t.debug || r.css({
            position: "absolute",
            width: "0px",
            height: "0px",
            left: "-600px",
            top: "-600px"
        }),
        setTimeout(function() {
            var i = r.contents();
            t.importCSS && n("link[rel=stylesheet]").each(function() {
                var r = n(this).attr("href"), t;
                r && (t = n(this).attr("media") || "all",
                i.find("head").append("<link type='text/css' rel='stylesheet' href='" + r + "' media='" + t + "'>"))
            }),
            t.pageTitle && i.find("head").append("<title>" + t.pageTitle + "</title>"),
            t.loadCSS && i.find("head").append("<link type='text/css' rel='stylesheet' href='" + t.loadCSS + "'>"),
            t.header && i.find("body").append(t.header),
            t.printContainer ? i.find("body").append(e.outer()) : e.each(function() {
                i.find("body").append(n(this).html())
            }),
            t.removeInline && (n.isFunction(n.removeAttr) ? i.find("body *").removeAttr("style") : i.find("body *").attr("style", "")),
            setTimeout(function() {
                r.hasClass("MSIE") ? (window.frames.printIframe.focus(),
                i.find("head").append("<script>  window.print(); <\/script>")) : (r[0].contentWindow.focus(),
                r[0].contentWindow.print()),
                e.trigger("done"),
                t.debug || setTimeout(function() {
                    r.remove()
                }, 1e3)
            }, t.printDelay)
        }, 333)
    }
    ,
    n.fn.printThis.defaults = {
        debug: !1,
        importCSS: !1,
        printContainer: !1,
        loadCSS: "",
        pageTitle: "",
        removeInline: !1,
        printDelay: 333,
        header: null
    },
    jQuery.fn.outer = function() {
        return n(n("<div></div>").html(this.clone())).html()
    }
}(jQuery),
function(n) {
    var s = "countdown"
      , t = 0
      , r = 1
      , e = 2
      , o = 3
      , u = 4
      , f = 5
      , i = 6;
    n.JQPlugin.createPlugin({
        name: s,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            padZeroes: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }
        },
        _getters: ["getTimes"],
        _rtlClass: s + "-rtl",
        _sectionClass: s + "-section",
        _amountClass: s + "-amount",
        _periodClass: s + "-period",
        _rowClass: s + "-row",
        _holdingClass: s + "-holding",
        _showClass: s + "-show",
        _descrClass: s + "-descr",
        _timerElems: [],
        _init: function() {
            function e(n) {
                var o = n < 1e12 ? f ? performance.now() + performance.timing.navigationStart : i() : n || i();
                o - r >= 1e3 && (u._updateElems(),
                r = o),
                t(e)
            }
            var u = this, i, f, t, r;
            this._super(),
            this._serverSyncs = [],
            i = typeof Date.now == "function" ? Date.now : function() {
                return +new Date
            }
            ,
            f = window.performance && typeof window.performance.now == "function",
            t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
            r = 0,
            !t || n.noRequestAnimationFrame ? (n.noRequestAnimationFrame = null,
            setInterval(function() {
                u._updateElems()
            }, 980)) : (r = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || i(),
            t(e))
        },
        UTCDate: function(n, t, i, r, u, f, e, o) {
            typeof t == "object" && t.constructor == Date && (o = t.getMilliseconds(),
            e = t.getSeconds(),
            f = t.getMinutes(),
            u = t.getHours(),
            r = t.getDate(),
            i = t.getMonth(),
            t = t.getFullYear());
            var s = new Date;
            return s.setUTCFullYear(t),
            s.setUTCDate(1),
            s.setUTCMonth(i || 0),
            s.setUTCDate(r || 1),
            s.setUTCHours(u || 0),
            s.setUTCMinutes((f || 0) - (Math.abs(n) < 30 ? n * 60 : n)),
            s.setUTCSeconds(e || 0),
            s.setUTCMilliseconds(o || 0),
            s
        },
        periodsToSeconds: function(n) {
            return n[0] * 31557600 + n[1] * 2629800 + n[2] * 604800 + n[3] * 86400 + n[4] * 3600 + n[5] * 60 + n[6]
        },
        _instSettings: function() {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function(n) {
            this._hasElem(n) || this._timerElems.push(n)
        },
        _hasElem: function(t) {
            return n.inArray(t, this._timerElems) > -1
        },
        _removeElem: function(t) {
            this._timerElems = n.map(this._timerElems, function(n) {
                return n == t ? null : n
            })
        },
        _updateElems: function() {
            for (var n = this._timerElems.length - 1; n >= 0; n--)
                this._updateCountdown(this._timerElems[n])
        },
        _optionsChanged: function(t, i, r) {
            var f, u;
            r.layout && (r.layout = r.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
            this._resetExtraLabels(i.options, r),
            f = i.options.timezone != r.timezone,
            n.extend(i.options, r),
            this._adjustSettings(t, i, r.until != null || r.since != null || f),
            u = new Date,
            (i._since && i._since < u || i._until && i._until > u) && this._addElem(t[0]),
            this._updateCountdown(t, i)
        },
        _updateCountdown: function(t, i) {
            var r, f, u;
            (t = t.jquery ? t : n(t),
            i = i || t.data(this.name),
            i) && (t.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL),
            n.isFunction(i.options.onTick) && (r = i._hold != "lap" ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date),
            (i.options.tickInterval == 1 || this.periodsToSeconds(r) % i.options.tickInterval == 0) && i.options.onTick.apply(t[0], [r])),
            f = i._hold != "pause" && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime()),
            f && !i._expiring ? (i._expiring = !0,
            (this._hasElem(t[0]) || i.options.alwaysExpire) && (this._removeElem(t[0]),
            n.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(t[0], []),
            i.options.expiryText && (u = i.options.layout,
            i.options.layout = i.options.expiryText,
            this._updateCountdown(t[0], i),
            i.options.layout = u),
            i.options.expiryUrl && (window.location = i.options.expiryUrl)),
            i._expiring = !1) : i._hold == "pause" && this._removeElem(t[0]))
        },
        _resetExtraLabels: function(n, t) {
            var r = !1, i;
            for (i in t)
                if (i != "whichLabels" && i.match(/[Ll]abels/)) {
                    r = !0;
                    break
                }
            if (r)
                for (i in n)
                    i.match(/[Ll]abels[02-9]|compactLabels1/) && (n[i] = null)
        },
        _adjustSettings: function(t, i, r) {
            for (var e, u = 0, s = null, h, f, o = 0; o < this._serverSyncs.length; o++)
                if (this._serverSyncs[o][0] == i.options.serverSync) {
                    s = this._serverSyncs[o][1];
                    break
                }
            s != null ? (u = i.options.serverSync ? s : 0,
            e = new Date) : (h = n.isFunction(i.options.serverSync) ? i.options.serverSync.apply(t[0], []) : null,
            e = new Date,
            u = h ? e.getTime() - h.getTime() : 0,
            this._serverSyncs.push([i.options.serverSync, u])),
            f = i.options.timezone,
            f = f == null ? -e.getTimezoneOffset() : f,
            (r || !r && i._until == null && i._since == null) && (i._since = i.options.since,
            i._since != null && (i._since = this.UTCDate(f, this._determineTime(i._since, null)),
            i._since && u && i._since.setMilliseconds(i._since.getMilliseconds() + u)),
            i._until = this.UTCDate(f, this._determineTime(i.options.until, e)),
            u && i._until.setMilliseconds(i._until.getMilliseconds() + u)),
            i._show = this._determineShow(i)
        },
        _preDestroy: function(n) {
            this._removeElem(n[0]),
            n.empty()
        },
        pause: function(n) {
            this._hold(n, "pause")
        },
        lap: function(n) {
            this._hold(n, "lap")
        },
        resume: function(n) {
            this._hold(n, null)
        },
        toggle: function(t) {
            var i = n.data(t, this.name) || {};
            this[i._hold ? "resume" : "pause"](t)
        },
        toggleLap: function(t) {
            var i = n.data(t, this.name) || {};
            this[i._hold ? "resume" : "lap"](t)
        },
        _hold: function(t, i) {
            var r = n.data(t, this.name), u;
            r && (r._hold != "pause" || i || (r._periods = r._savePeriods,
            u = r._since ? "-" : "+",
            r[r._since ? "_since" : "_until"] = this._determineTime(u + r._periods[0] + "y" + u + r._periods[1] + "o" + u + r._periods[2] + "w" + u + r._periods[3] + "d" + u + r._periods[4] + "h" + u + r._periods[5] + "m" + u + r._periods[6] + "s"),
            this._addElem(t)),
            r._hold = i,
            r._savePeriods = i == "pause" ? r._periods : null,
            n.data(t, this.name, r),
            this._updateCountdown(t, r))
        },
        getTimes: function(t) {
            var i = n.data(t, this.name);
            return i ? i._hold == "pause" ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
        },
        _determineTime: function(n, t) {
            var r = this
              , u = function(n) {
                var t = new Date;
                return t.setTime(t.getTime() + n * 1e3),
                t
            }
              , f = function(n) {
                n = n.toLowerCase();
                for (var u = new Date, f = u.getFullYear(), e = u.getMonth(), i = u.getDate(), s = u.getHours(), h = u.getMinutes(), c = u.getSeconds(), o = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, t = o.exec(n); t; ) {
                    switch (t[2] || "s") {
                    case "s":
                        c += parseInt(t[1], 10);
                        break;
                    case "m":
                        h += parseInt(t[1], 10);
                        break;
                    case "h":
                        s += parseInt(t[1], 10);
                        break;
                    case "d":
                        i += parseInt(t[1], 10);
                        break;
                    case "w":
                        i += parseInt(t[1], 10) * 7;
                        break;
                    case "o":
                        e += parseInt(t[1], 10),
                        i = Math.min(i, r._getDaysInMonth(f, e));
                        break;
                    case "y":
                        f += parseInt(t[1], 10),
                        i = Math.min(i, r._getDaysInMonth(f, e))
                    }
                    t = o.exec(n)
                }
                return new Date(f,e,i,s,h,c,0)
            }
              , i = n == null ? t : typeof n == "string" ? f(n) : typeof n == "number" ? u(n) : n;
            return i && i.setMilliseconds(0),
            i
        },
        _getDaysInMonth: function(n, t) {
            return 32 - new Date(n,t,32).getDate()
        },
        _normalLabels: function(n) {
            return n
        },
        _generateHTML: function(s) {
            var v = this, a, h;
            s._periods = s._hold ? s._periods : this._calculatePeriods(s, s._show, s.options.significant, new Date);
            var w = !1
              , k = 0
              , p = s.options.significant
              , c = n.extend({}, s._show);
            for (h = t; h <= i; h++)
                w |= s._show[h] == "?" && s._periods[h] > 0,
                c[h] = s._show[h] == "?" && !w ? null : s._show[h],
                k += c[h] ? 1 : 0,
                p -= s._periods[h] > 0 ? 1 : 0;
            for (a = [!1, !1, !1, !1, !1, !1, !1],
            h = i; h >= t; h--)
                s._show[h] && (s._periods[h] ? a[h] = !0 : (a[h] = p > 0,
                p--));
            var d = s.options.compact ? s.options.compactLabels : s.options.labels
              , b = s.options.whichLabels || this._normalLabels
              , y = function(n) {
                var t = s.options["compactLabels" + b(s._periods[n])];
                return c[n] ? v._translateDigits(s, s._periods[n]) + (t ? t[n] : d[n]) + " " : ""
            }
              , g = s.options.padZeroes ? 2 : 1
              , l = function(n) {
                var t = s.options["labels" + b(s._periods[n])];
                return !s.options.significant && c[n] || s.options.significant && a[n] ? '<span class="' + v._sectionClass + '"><span class="' + v._amountClass + '">' + v._minDigits(s, s._periods[n], g) + '</span><span class="' + v._periodClass + '">' + (t ? t[n] : d[n]) + "</span></span>" : ""
            };
            return s.options.layout ? this._buildLayout(s, c, s.options.layout, s.options.compact, s.options.significant, a) : (s.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (s._hold ? " " + this._holdingClass : "") + '">' + y(t) + y(r) + y(e) + y(o) + (c[u] ? this._minDigits(s, s._periods[u], 2) : "") + (c[f] ? (c[u] ? s.options.timeSeparator : "") + this._minDigits(s, s._periods[f], 2) : "") + (c[i] ? (c[u] || c[f] ? s.options.timeSeparator : "") + this._minDigits(s, s._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (s.options.significant || k) + (s._hold ? " " + this._holdingClass : "") + '">' + l(t) + l(r) + l(e) + l(o) + l(u) + l(f) + l(i)) + "</span>" + (s.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + s.options.description + "</span>" : "")
        },
        _buildLayout: function(s, h, c, l, a, v) {
            for (var nt = s.options[l ? "compactLabels" : "labels"], g = s.options.whichLabels || this._normalLabels, p = function(n) {
                return (s.options[(l ? "compactLabels" : "labels") + g(s._periods[n])] || nt)[n]
            }, y = function(n, t) {
                return s.options.digits[Math.floor(n / t) % 10]
            }, tt = {
                desc: s.options.description,
                sep: s.options.timeSeparator,
                yl: p(t),
                yn: this._minDigits(s, s._periods[t], 1),
                ynn: this._minDigits(s, s._periods[t], 2),
                ynnn: this._minDigits(s, s._periods[t], 3),
                y1: y(s._periods[t], 1),
                y10: y(s._periods[t], 10),
                y100: y(s._periods[t], 100),
                y1000: y(s._periods[t], 1e3),
                ol: p(r),
                on: this._minDigits(s, s._periods[r], 1),
                onn: this._minDigits(s, s._periods[r], 2),
                onnn: this._minDigits(s, s._periods[r], 3),
                o1: y(s._periods[r], 1),
                o10: y(s._periods[r], 10),
                o100: y(s._periods[r], 100),
                o1000: y(s._periods[r], 1e3),
                wl: p(e),
                wn: this._minDigits(s, s._periods[e], 1),
                wnn: this._minDigits(s, s._periods[e], 2),
                wnnn: this._minDigits(s, s._periods[e], 3),
                w1: y(s._periods[e], 1),
                w10: y(s._periods[e], 10),
                w100: y(s._periods[e], 100),
                w1000: y(s._periods[e], 1e3),
                dl: p(o),
                dn: this._minDigits(s, s._periods[o], 1),
                dnn: this._minDigits(s, s._periods[o], 2),
                dnnn: this._minDigits(s, s._periods[o], 3),
                d1: y(s._periods[o], 1),
                d10: y(s._periods[o], 10),
                d100: y(s._periods[o], 100),
                d1000: y(s._periods[o], 1e3),
                hl: p(u),
                hn: this._minDigits(s, s._periods[u], 1),
                hnn: this._minDigits(s, s._periods[u], 2),
                hnnn: this._minDigits(s, s._periods[u], 3),
                h1: y(s._periods[u], 1),
                h10: y(s._periods[u], 10),
                h100: y(s._periods[u], 100),
                h1000: y(s._periods[u], 1e3),
                ml: p(f),
                mn: this._minDigits(s, s._periods[f], 1),
                mnn: this._minDigits(s, s._periods[f], 2),
                mnnn: this._minDigits(s, s._periods[f], 3),
                m1: y(s._periods[f], 1),
                m10: y(s._periods[f], 10),
                m100: y(s._periods[f], 100),
                m1000: y(s._periods[f], 1e3),
                sl: p(i),
                sn: this._minDigits(s, s._periods[i], 1),
                snn: this._minDigits(s, s._periods[i], 2),
                snnn: this._minDigits(s, s._periods[i], 3),
                s1: y(s._periods[i], 1),
                s10: y(s._periods[i], 10),
                s100: y(s._periods[i], 100),
                s1000: y(s._periods[i], 1e3)
            }, b = c, k, d, w = t; w <= i; w++)
                k = "yowdhms".charAt(w),
                d = new RegExp("\\{" + k + "<\\}([\\s\\S]*)\\{" + k + ">\\}","g"),
                b = b.replace(d, !a && h[w] || a && v[w] ? "$1" : "");
            return n.each(tt, function(n, t) {
                var i = new RegExp("\\{" + n + "\\}","g");
                b = b.replace(i, t)
            }),
            b
        },
        _minDigits: function(n, t, i) {
            return (t = "" + t,
            t.length >= i) ? this._translateDigits(n, t) : (t = "0000000000" + t,
            this._translateDigits(n, t.substr(t.length - i)))
        },
        _translateDigits: function(n, t) {
            return ("" + t).replace(/[0-9]/g, function(t) {
                return n.options.digits[t]
            })
        },
        _determineShow: function(n) {
            var s = n.options.format
              , h = [];
            return h[t] = s.match("y") ? "?" : s.match("Y") ? "!" : null,
            h[r] = s.match("o") ? "?" : s.match("O") ? "!" : null,
            h[e] = s.match("w") ? "?" : s.match("W") ? "!" : null,
            h[o] = s.match("d") ? "?" : s.match("D") ? "!" : null,
            h[u] = s.match("h") ? "?" : s.match("H") ? "!" : null,
            h[f] = s.match("m") ? "?" : s.match("M") ? "!" : null,
            h[i] = s.match("s") ? "?" : s.match("S") ? "!" : null,
            h
        },
        _calculatePeriods: function(n, s, h, c) {
            var a, l, it, w, y, p, v;
            if (n._now = c,
            n._now.setMilliseconds(0),
            a = new Date(n._now.getTime()),
            n._since ? c.getTime() < n._since.getTime() ? n._now = c = a : c = n._since : (a.setTime(n._until.getTime()),
            c.getTime() > n._until.getTime() && (n._now = c = a)),
            l = [0, 0, 0, 0, 0, 0, 0],
            s[t] || s[r]) {
                var d = this._getDaysInMonth(c.getFullYear(), c.getMonth())
                  , rt = this._getDaysInMonth(a.getFullYear(), a.getMonth())
                  , tt = a.getDate() == c.getDate() || a.getDate() >= Math.min(d, rt) && c.getDate() >= Math.min(d, rt)
                  , g = function(n) {
                    return (n.getHours() * 60 + n.getMinutes()) * 60 + n.getSeconds()
                }
                  , nt = Math.max(0, (a.getFullYear() - c.getFullYear()) * 12 + a.getMonth() - c.getMonth() + (a.getDate() < c.getDate() && !tt || tt && g(a) < g(c) ? -1 : 0));
                l[t] = s[t] ? Math.floor(nt / 12) : 0,
                l[r] = s[r] ? nt - l[t] * 12 : 0,
                c = new Date(c.getTime()),
                it = c.getDate() == d,
                w = this._getDaysInMonth(c.getFullYear() + l[t], c.getMonth() + l[r]),
                c.getDate() > w && c.setDate(w),
                c.setFullYear(c.getFullYear() + l[t]),
                c.setMonth(c.getMonth() + l[r]),
                it && c.setDate(w)
            }
            if (y = Math.floor((a.getTime() - c.getTime()) / 1e3),
            p = function(n, t) {
                l[n] = s[n] ? Math.floor(y / t) : 0,
                y -= l[n] * t
            }
            ,
            p(e, 604800),
            p(o, 86400),
            p(u, 3600),
            p(f, 60),
            p(i, 1),
            y > 0 && !n._since) {
                var ut = [1, 12, 4.3482, 7, 24, 60, 60]
                  , k = i
                  , b = 1;
                for (v = i; v >= t; v--)
                    s[v] && (l[k] >= b && (l[k] = 0,
                    y = 1),
                    y > 0 && (l[v]++,
                    y = 0,
                    k = v,
                    b = 1)),
                    b *= ut[v]
            }
            if (h)
                for (v = t; v <= i; v++)
                    h && l[v] ? h-- : h || (l[v] = 0);
            return l
        }
    })
}(jQuery)
