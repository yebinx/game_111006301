window.__require = function e(t, n, o) {
	function i(r, a) {
		if (!n[r]) {
			if (!t[r]) {
				var c = r.split("/");
				if (c = c[c.length - 1], !t[c]) {
					var u = "function" == typeof __require && __require;
					if (!a && u) return u(c, !0);
					if (s) return s(c, !0);
					throw new Error("Cannot find module '" + r + "'")
				}
				r = c
			}
			var l = n[r] = {
				exports: {}
			};
			t[r][0].call(l.exports, function(e) {
				return i(t[r][1][e] || e)
			}, l, l.exports, e, t, n, o)
		}
		return n[r].exports
	}
	for (var s = "function" == typeof __require && __require, r = 0; r < o.length; r++) i(o[r]);
	return i
}({
	BaseLangConf: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "eea1e0/pBlHfZDQT6EGFKD9", "BaseLangConf"), Object.defineProperty(n,
				"__esModule", {
					value: !0
				}), n.LanguageType = void 0,
			function(e) {
				e.ZH = "zh", e.EN = "en", e.JA = "ja", e.KO = "ko", e.TH = "th", e.VI = "vi", e.PT =
					"pt", e.ID = "id", e.ES = "es", e.RU = "ru", e.DE = "de", e.SV = "sv", e.IT = "it",
					e.DA = "da", e.NL = "nl", e.FI = "fi", e.FR = "fr", e.NO = "no", e.PL = "pl", e.RO =
					"ro", e.TR = "tr", e.MY = "my"
			}(n.LanguageType || (n.LanguageType = {}));
		var o = function() {
			function e() {
				this._langCf = null, this._langCf = {}
			}
			return e.getInstance = function() {
				return this._instance || (this._instance = new e), this._instance
			}, e.prototype.mergeLangConf = function(e) {
				for (var t in e) {
					var n = e[t];
					this._langCf[t] || (this._langCf[t] = []);
					for (var o = 0; o < n.length; ++o) this._langCf[t].push(n[o])
				}
			}, e.prototype.getLangConf = function() {
				return this._langCf
			}, e._instance = null, e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	BaseUIConf: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ec753bpUklLgrmc7AChvMrf", "BaseUIConf"), Object.defineProperty(n,
			"__esModule", {
				value: !0
			}), n.BASEUIID = void 0,
			function(e) {
				e[e.UI_DIALOG = 0] = "UI_DIALOG", e[e.UI_KEYBOARD = 1] = "UI_KEYBOARD"
			}(n.BASEUIID || (n.BASEUIID = {}));
		var o = function() {
			function e() {
				this._uicf = null, this._uicf = {}
			}
			return e.getInstance = function() {
					return this._instance || (this._instance = new e), this._instance
				}, e.prototype.mergeUIConf = function(e) {
					for (var t in e) this._uicf[t] = e[t]
				}, e.prototype.getUICF = function() {
					return this._uicf
				}, e._instance = null, e.BASELAYER_BG = 0, e.BASELAYER_GAME = 100, e.BASELAYER_UI =
				200, e.BASELAYER_EFFECT = 300, e.BASELAYER_LOADING = 400, e.BASELAYER_TIPS = 500, e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	ComUtils: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "bba45UYrrxP3pNQX7o96ACv", "ComUtils");
		var o = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			},
			i = this && this.__awaiter || function(e, t, n, o) {
				return new(n || (n = Promise))(function(i, s) {
					function r(e) {
						try {
							c(o.next(e))
						} catch (t) {
							s(t)
						}
					}

					function a(e) {
						try {
							c(o.throw(e))
						} catch (t) {
							s(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(
							e) {
							e(t)
						})).then(r, a)
					}
					c((o = o.apply(e, t || [])).next())
				})
			},
			s = this && this.__generator || function(e, t) {
				var n, o, i, s, r = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return s = {
					next: a(0),
					throw: a(1),
					return: a(2)
				}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
					return this
				}), s;

				function a(e) {
					return function(t) {
						return c([e, t])
					}
				}

				function c(s) {
					if (n) throw new TypeError("Generator is already executing.");
					for (; r;) try {
						if (n = 1, o && (i = 2 & s[0] ? o.return : s[0] ? o.throw || ((i = o
								.return) && i.call(o), 0) : o.next) && !(i = i.call(o, s[1])).done)
							return i;
						switch (o = 0, i && (s = [2 & s[0], i.value]), s[0]) {
							case 0:
							case 1:
								i = s;
								break;
							case 4:
								return r.label++, {
									value: s[1],
									done: !1
								};
							case 5:
								r.label++, o = s[1], s = [0];
								continue;
							case 7:
								s = r.ops.pop(), r.trys.pop();
								continue;
							default:
								if (!(i = (i = r.trys).length > 0 && i[i.length - 1]) && (6 === s[
										0] || 2 === s[0])) {
									r = 0;
									continue
								}
								if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
									r.label = s[1];
									break
								}
								if (6 === s[0] && r.label < i[1]) {
									r.label = i[1], i = s;
									break
								}
								if (i && r.label < i[2]) {
									r.label = i[2], r.ops.push(s);
									break
								}
								i[2] && r.ops.pop(), r.trys.pop();
								continue
						}
						s = t.call(e, r)
					} catch (a) {
						s = [6, a], o = 0
					} finally {
						n = i = 0
					}
					if (5 & s[0]) throw s[1];
					return {
						value: s[0] ? s[1] : void 0,
						done: !0
					}
				}
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.ComUtils = void 0;
		var r = e("../const/Const"),
			a = cc._decorator,
			c = a.ccclass,
			u = (a.property, function() {
				function e() {}
				var t;
				return t = e, e.checkURL = function(e) {
					return -1 != e.indexOf("http://") || -1 != e.indexOf("https://")
				}, e.findCharPos = function(e, t, n) {
					for (var o = e.indexOf(t), i = o, s = 0; s < n; s++) {
						if (-1 == (o = e.indexOf(t, o + 1))) return i;
						i = o
					}
					return i
				}, e.getCallStack = function(e) {
					var t = (new Error).stack,
						n = this.findCharPos(t, "\n", e);
					return n > 0 && (t = t.slice(n)), t
				}, e.formatStr = function(e, t) {
					var n;
					return (n = "0000000" + e).substr(n.length - t)
				}, e.deepClone = function(e, t) {
					if (!e) return e;
					var n = t || (e.constructor === Array ? [] : {});
					for (var o in e) {
						var i = e[o];
						(i || i !== n) && ("object" == typeof i ? (n[o] = i ? i.constructor ===
							Array ? [] : {} : i, this.deepClone(i, n[o])) : n[o] = i)
					}
					return n
				}, e.comma = function(e) {
					var t = new Array,
						n = new Array,
						o = "-" == e[0];
					o && (e = e.slice(1));
					var i = e.split("."),
						s = i[1],
						r = i[0],
						a = r.length;
					n = r.split("");
					for (var c = 0, u = 0, l = a - 1; l >= 0; l--) t[c] = n[l], c++, ++u % 3 ==
						0 && l > 0 && (t[c] = ",", c++);
					t.reverse();
					var p = t.join("");
					return s && (p = p + "." + s), o && (p = "-" + p), p
				}, e.randomString = function(e) {
					e = e || 32;
					for (var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = t
							.length, o = "", i = 0; i < e; i++) o += t.charAt(Math.floor(Math
						.random() * n));
					return o
				}, e.getFloatRandom = function(e, t) {
					return e + Math.random() * (t - e)
				}, e.getIntRandom = function(e, t) {
					return e + Math.round(Math.random() * (t - e))
				}, e.getIntRandomNoLoop = function(e, t, n) {
					if (0 != e || t < 0 || e > n) return e;
					var o = t + Math.round(Math.random() * (n - t));
					return o == e && (o = this.getIntRandomNoLoop(e, t, n)), o
				}, e.array_noRepeat = function(e) {
					if (e instanceof Array) {
						for (var t, n = {}, o = [], i = 0; i < e.length; ++i) n[t = e[i]] || (n[
							t] = !0, o.push(t));
						if (!(o.length <= 0)) return o
					}
				}, e.array_intersection = function(e, t) {
					if (e instanceof Array && t instanceof Array) return e.filter(function(e) {
						return -1 !== t.indexOf(e)
					})
				}, e.array_difference = function(e, t) {
					if (e instanceof Array && t instanceof Array) return e.filter(function(n) {
						return -1 !== e.indexOf(n) && -1 === t.indexOf(n)
					})
				}, e.array_union = function(e, t) {
					if (e instanceof Array && t instanceof Array) return this.array_noRepeat(e
						.concat(t))
				}, e.disorderArray = function(e) {
					for (var t = e.concat(), n = []; t.length > 0;) {
						var o = Math.floor(Math.random() * t.length);
						n.push(t.splice(o, 1)[0])
					}
					return n
				}, e.GetTwoPosDistance = function(e, t) {
					var n = e.x - t.x,
						o = e.y - t.y;
					return Math.sqrt(n * n + o * o)
				}, e.GetAngleTwoPos = function(e, t) {
					var n = (t.y - e.y) / (t.x - e.x),
						o = 180 * Math.atan(n) / Math.PI;
					return n > 0 ? 90 - o : -90 - o
				}, e.GetLinePos = function(e, t) {
					var n = (e[1].y - e[0].y) / (e[1].x - e[0].x),
						o = e[0].y - n * e[0].x,
						i = e[0].x + t * (e[1].x - e[0].x),
						s = i * n + o;
					return cc.v2(i, s)
				}, e.getVlineKB = function(e, t) {
					var n = (e.y - t.y) / (e.x - t.x);
					return [-n, e.y - n * e.x]
				}, e.GetMiddlePoint = function(e, t) {
					var n = (e.x + t.x) / 2,
						o = (e.y + t.y) / 2;
					return new cc.Vec2(Math.round(n), Math.round(o))
				}, e.GetCirlePos = function(e, n) {
					var o = t.getIntRandom(0, 360),
						i = n.x + e * Math.cos(3.14 * o / 180),
						s = n.y + e * Math.sin(3.14 * o / 180);
					return new cc.Vec2(Math.round(i), Math.round(s))
				}, e.GetCirlePosByAngle = function(e, n, o) {
					var i = t.getIntRandom(o, 180 + o),
						s = n.x + e * Math.cos(3.14 * i / 180),
						r = n.y + e * Math.sin(3.14 * i / 180);
					return new cc.Vec2(Math.round(s), Math.round(r))
				}, e.GetTwoLevelBezier = function(e, t) {
					var n, o;
					return n = (1 - t) * (1 - t) * e[0].x + 2 * t * (1 - t) * e[1].x + t * t *
						e[2].x, o = (1 - t) * (1 - t) * e[0].y + 2 * t * (1 - t) * e[1].y + t *
						t * e[2].y, cc.v2(n, o)
				}, e.GetThreeLevelBezier = function(e, t) {
					var n, o;
					return n = (1 - t) * (1 - t) * (1 - t) * e[0].x + 3 * t * (1 - t) * (1 -
						t) * e[1].x + 3 * t * t * (1 - t) * e[2].x + t * t * t * e[3].x, o = (
							1 - t) * (1 - t) * (1 - t) * e[0].y + 3 * t * (1 - t) * (1 - t) * e[
							1].y + 3 * t * t * (1 - t) * e[2].y + t * t * t * e[3].y, cc.v2(n,
							o)
				}, e.GetPlatformType = function() {
					return cc.sys.os == cc.sys.OS_ANDROID ? window.innerWidth < window
						.innerHeight ? 5 : 4 : cc.sys.os == cc.sys.OS_IOS ? window.innerWidth <
						window.innerHeight ? 3 : 2 : cc.sys.os == cc.sys.OS_WINDOWS || cc.sys
						.os == cc.sys.OS_WP8 || cc.sys.os == cc.sys.OS_WINRT || cc.sys.os == cc
						.sys.OS_LINUX ? 1 : window.innerWidth < window.innerHeight ? 6 : 7
				}, e.formatNumber = function(e, t, n, o, i, s) {
					void 0 === t && (t = 2), void 0 === n && (n = 100), void 0 === o && (o = !
						0), void 0 === i && (i = ""), void 0 === s && (s = "."),
						e instanceof Long && (e = e.toNumber());
					var r, a = e < 0 ? "-" : "";
					if (e = Math.abs(e), e /= n, !o) return a + e.toString();
					for (var c = (r = parseFloat((e + "").replace(/[^\d\.-]/g, "")) + "").split(
							".")[0].split("").reverse(), u = r.split(".")[1], l = "", p = 0; p <
						c.length; p++) l += c[p] + ((p + 1) % 3 == 0 && p + 1 != c.length ? i :
						"");
					if (t > 0) {
						u || (u = "");
						var h = t - u.length;
						if (h < 0) u = u.substring(0, t);
						else
							for (p = 0; p < h; p++) u += "0"
					} else u = "";
					return u ? a + l.split("").reverse().join("") + s + u : a + l.split("")
						.reverse().join("")
				}, e.getUrlParam = function(e, t) {
					var n = {},
						o = (e = e.replace(/\s*/g, "")).indexOf("?");
					if (-1 != o)
						for (var i = e.substr(o + 1).split("&"), s = 0; s < i.length; s++) n[i[
							s].split("=")[0]] = unescape(i[s].split("=")[1]);
					return t ? n[t] : n
				}, e.GetUrlPara = function() {
					var e = window.location.href;
					if (e.indexOf("?") < 0) return [];
					var t = e.split("?");
					return t[1].indexOf("&") < 0 ? [t[1]] : t[1].split("&")
				}, e.getUrl = function() {
					return window.location.href
				}, e.GetUrlRelativePath = function() {
					var e = window.location.href.split("//"),
						t = e[1].indexOf("/"),
						n = e[1].substring(t);
					return -1 != n.indexOf("?") && (n = n.split("?")[0]), n
				}, e.verifyPhone = function(e) {
					var t = "";
					return (11 !== e.length || e.match("/[^0-9]/g")) && (t =
						"\u8bf7\u8f93\u516511\u4f4d\u624b\u673a\u53f7"), t
				}, e.verifyPassword = function(e) {
					var t = "";
					return (e.length < 8 || e.length > 20 || e.match("/[^_a-zA-Z0-9]/g")) && (
						t =
						"\u5bc6\u7801\u97008-20\u4f4d\u6570\u5b57\uff0c\u5b57\u6bcd\u53ca\u4e0b\u5212\u7ebf\u7ec4\u5408"
						), t
				}, e.GetLegalNameStr = function(e) {
					for (var t = 0, n = "", o = e.replace(/[^\x00-\xff]/g, "**").length, i =
						0; i < e.length - 1; i++)(s = e.charCodeAt(i)) >= 41 && s <= 90 && (cc
						.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID) && o++;
					if (!(o >= 12)) return e;
					for (i = 0; i < e.length - 1; i++) {
						if (t >= 8) return n + "...";
						var s = e.charCodeAt(i);
						n += e.charAt(i), s >= 0 && s <= 128 ? (t++, s >= 41 && s <= 90 &&
							t++) : t += 2
					}
				}, e.cutStringByLength = function(e, t, n, o) {
					void 0 === o && (o = "...");
					var i, s, r = "";
					if (0 != (s = e.length)) {
						if (i = e.replace(/[^\x00-\xff]/g, "xx").length, n)
							if (i > t) {
								for (var a = 0, c = 0; c < s && !((a += e.charCodeAt(c) > 255 ?
										2 : 1) > t); c++) r += e[c];
								r += o
							} else r = e;
						else s > t ? (r = e.substr(0, t), r += o) : r = e;
						return r
					}
					console.error('the initial string can not be null or ""')
				}, e.formatNumToKMB = function(e, t, n, o) {
					void 0 === t && (t = 2), void 0 === n && (n = 100), void 0 === o && (o = !
					0);
					var i, s = e / n,
						r = Math.abs(s),
						a = "";
					return r < 1e5 ? o ? this.toDecimal2(s, t) : this.toDecimal3(s.toString()) :
						(r < 1e8 ? (i = s / 1e3, a = "K") : (i = s / 1e6, a = "M"), o ? this
							.toDecimal2(i, t) + a : this.toDecimal3(i.toString()) + a)
				}, e.toDecimal3 = function(e, t) {
					return void 0 === t && (t = 3), e.indexOf(".") < 0 ? e : e.split(".")[1]
						.length > t ? this.toDecimal2(e, t) : e
				}, e.toDecimal2 = function(e, t) {
					t = t >= 0 && t <= 20 ? t : 2;
					var n = parseFloat(e);
					if (isNaN(n)) return "";
					var o = n.toString(),
						i = o.indexOf(".");
					if (i < 0) {
						if (!(t > 0)) return o;
						i = o.length, o += "."
					}
					for (; o.length <= i + t;) o += "0";
					return 0 == t ? o.substr(0, o.indexOf(".")) : o.substr(0, o.indexOf(".") +
						t + 1)
				}, e.RemoveSpaceByArrayStr = function(e) {
					for (var t = [], n = 0; n < e.length; n++) t[n] = this.RemoveAllSpace(e[n]);
					return t
				}, e.RemoveAllSpace = function(e) {
					return e.replace(/\s+/g, "")
				}, e.substitute = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					if (e) {
						var o = e.concat(),
							i = e.match(/{\d}/g);
						if (t)
							for (var s = 0; s < i.length; s++) {
								var r = parseFloat(i[s].substring(1, i[s].length - 1));
								if (r > t.length - 1) break;
								o = o.replace(i[s], t[r])
							}
						return o
					}
				}, e.checkHorOrVec = function() {
					var e = cc.view.getCanvasSize();
					return e.width >= e.height
				}, e.isCanvasLand = function() {
					var e = cc.find("Canvas");
					return !e || e.width >= e.height
				}, e.setNodeResolutionSize = function(e) {
					var t = cc.view.getDesignResolutionSize(),
						n = (t.width > t.height ? t.width : t.height) / r.default.ResDesignSize
						.width;
					e.setScale(n)
				}, e.getUUid = function() {
					if (window.crypto) {
						for (var e = window.crypto.getRandomValues(new Uint8Array(16)), t = "",
								n = 0; n < e.length; n++) t += e[n].toString(16);
						return t
					}
					for (t = "", n = 0; n < 16; n++) t += parseInt((200 * Math.random())
						.toString()).toString(16);
					return t
				}, e.getFingerprint = function(e, t) {
					window.FingerprintJS ? (console.log(
						"\u83b7\u53d6\u4e2a\u4ebauuid\u8bc6\u522b\u7801"), i(this,
						void 0, void 0,
						function() {
							var n, o;
							return s(this, function(i) {
								switch (i.label) {
									case 0:
										return [4, window.FingerprintJS.load()];
									case 1:
										return [4, i.sent().get()];
									case 2:
										return n = i.sent(), o = n.visitorId, t
											.call(e, o), [2]
								}
							})
						})) : console.warn(
						"\u83b7\u53d6\u4e2a\u4ebauuid\u8bc6\u522b\u7801\u5931\u8d25\uff0c\u7f3a\u5c11\u63d2\u4ef6\u5e93"
						)
				}, e.camelize = function(e) {
					if (0 === e.length) return e;
					var t, n, o = e.split(/[_-]/);
					if (1 === o.length && o[0][0].toLowerCase() === o[0][0]) return e;
					for (n = o[0].toLowerCase(), t = 1; t < o.length; t++) n = n + o[t].charAt(
						0).toUpperCase() + o[t].substring(1).toLowerCase();
					return n
				}, e.camelize_prefix = function(e, n) {
					return e + (n = t.camelize(n))[0].toUpperCase() + n.substring(1)
				}, e.getRealBundle = function(e, t) {
					var n = e,
						o = cc.assetManager.getBundle(e + "_assets");
					return o && ("string" == typeof t ? o.getInfoWithPath(t) && (n +=
						"_assets") : o.getInfoWithPath(t[0]) && (n += "_assets")), n
				}, t = o([c], e)
			}());
		n.ComUtils = u, cc._RF.pop()
	}, {
		"../const/Const": "Const"
	}],
	ComboxItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "5a3e5e/WmZC9I3tEj4h7wZn", "ComboxItem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e("../sound/SoundManager"),
			a = e("./ListViewItem"),
			c = cc._decorator,
			u = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.start = function() {
					this._registerEvent()
				}, t.prototype._itemOnTouch = function() {
					r.default.getInstance().playBtnSound(), this._target && this._target
						.selItem(this._index, this._data, !0)
				}, t.prototype._registerEvent = function() {
					this.node.on(cc.Node.EventType.TOUCH_END, this._itemOnTouch, this)
				}, t.prototype._unRegisterEvent = function() {
					this.node.off(cc.Node.EventType.TOUCH_END, this._itemOnTouch, this)
				}, t.prototype.onDestroy = function() {
					this._unRegisterEvent()
				}, s([u], t)
			}(a.default));
		n.default = l, cc._RF.pop()
	}, {
		"../sound/SoundManager": "SoundManager",
		"./ListViewItem": "ListViewItem"
	}],
	Combox: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "72394G20CRAeJvRhPjeUXE9", "Combox");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e("../config/BaseUIConf"),
			a = e("./ListView"),
			c = e("./ListViewItem"),
			u = cc._decorator,
			l = u.ccclass,
			p = u.property,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.curSel = null, t.dropBoxTemplate = null, t.btnDrop = null, t._curSelIndex =
						0, t._curSelData = null, t._selCb = null, t._offsetX = 0, t._offsetY = 0, t
						._preventNode = null, t.dropBox = null, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "curSelIndex", {
					get: function() {
						return this._curSelIndex
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "curSelData", {
					get: function() {
						return this._curSelData
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.start = function() {
					this._registerEvent()
				}, t.prototype._registerEvent = function() {
					this.btnDrop.on(cc.Node.EventType.TOUCH_END, this._btnDropOnTouch, this)
				}, t.prototype._unRegisterEvent = function() {
					this.btnDrop.off(cc.Node.EventType.TOUCH_END, this._btnDropOnTouch, this)
				}, t.prototype.setDropBoxOffset = function(e, t) {
					this._offsetX = e, this._offsetY = t
				}, t.prototype.init = function(e, t) {
					if (t && (this._selCb = t), !this.dropBox) {
						var n = cc.instantiate(this.dropBoxTemplate);
						cc.find("Canvas").addChild(n, r.default.BASELAYER_EFFECT + 1), this
							.dropBox = n.getComponent(a.default)
					}
					this.dropBox.init(e), this._bindTarget(), this.hideDropBox()
				}, t.prototype._bindTarget = function() {
					for (var e = this.dropBox.getItemList(), t = 0; t < e.length; ++t) e[t]
						.getComponent(c.default).bindTarget(this)
				}, t.prototype.selItem = function(e, t, n) {
					this._curSelIndex = e, null == t && (t = this.dropBox.getDataList()[e]), this
						._curSelData = t, this.hideDropBox(), this._selCb && this._selCb(e, t, n)
				}, t.prototype.showDropBox = function() {
					this._preventNode || (this._preventNode = this._preventTouch(r.default
						.BASELAYER_EFFECT));
					var e = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
						t = cc.find("Canvas").convertToNodeSpaceAR(e);
					this.dropBox.node.x = t.x + this._offsetX, this.dropBox.node.y = t.y + this
						._offsetY, this.dropBox.node.active = !0, this._preventNode.active = !0
				}, t.prototype.hideDropBox = function() {
					this.dropBox.node.active = !1, this._preventNode && (this._preventNode
						.active = !1)
				}, t.prototype._btnDropOnTouch = function() {
					this.dropBox && (this.dropBox.node.active ? this.hideDropBox() : this
						.showDropBox())
				}, t.prototype.onDestroy = function() {
					cc.isValid(this._preventNode) && (this._preventNode.destroy(), this
						._preventNode = null), cc.isValid(this.dropBox) && (this.dropBox.node
						.destroy(), this.dropBox = null), this._unRegisterEvent()
				}, t.prototype._preventTouch = function(e) {
					var t = new cc.Node;
					t.x = 0, t.y = 0, t.name = "preventTouch", t.setContentSize(cc.size(1e4, 1e4));
					var n = this;
					return t.on(cc.Node.EventType.TOUCH_START, function(e) {
						e.stopPropagation(), n.hideDropBox()
					}, t), cc.find("Canvas").addChild(t, e), t
				}, s([p(cc.Label)], t.prototype, "curSel", void 0), s([p(cc.Prefab)], t.prototype,
					"dropBoxTemplate", void 0), s([p(cc.Node)], t.prototype, "btnDrop", void 0), s([
					l
				], t)
			}(cc.Component);
		n.default = h, cc._RF.pop()
	}, {
		"../config/BaseUIConf": "BaseUIConf",
		"./ListView": "ListView",
		"./ListViewItem": "ListViewItem"
	}],
	Const: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "71772xIqsBG9IYDF3h+YMbj", "Const"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return e.ResDesignSize = cc.size(1920, 1080), e.mess_windowResize = "mess_windowResize",
				e.mess_pageHideShow = "mess_pageHideShow", e.mess_refreshLanguage =
				"mess_refreshLanguage", e.mess_netclose = "mess_netclose", e.mess_netconnected =
				"mess_netconnected", e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	EngineUtils: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d6b61X4UMxIFZyfPCus5kp1", "EngineUtils"), Object.defineProperty(n,
		"__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return Object.defineProperty(e, "instance", {
				get: function() {
					return e._instance || (e._instance = new e), e._instance
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.init = function() {}, e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	EventManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "481eafRx8JP1p7v7vFcglxU", "EventManager");
		var o = this && this.__spreadArrays || function() {
			for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
			var o = Array(e),
				i = 0;
			for (t = 0; t < n; t++)
				for (var s = arguments[t], r = 0, a = s.length; r < a; r++, i++) o[i] = s[r];
			return o
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.EventManager = void 0;
		var i = function() {
			function e() {
				this._eventListeners = {}
			}
			return e.getInstance = function() {
				return this.instance || (this.instance = new e), this.instance
			}, e.destroy = function() {
				this.instance && (this.instance = null)
			}, e.prototype.sortListener = function(e, t) {
				return e.order > t.order ? -1 : e.order < t.order ? 1 : 0
			}, e.prototype.getEventListenersIndex = function(e, t, n) {
				for (var o = -1, i = 0; i < this._eventListeners[e].length; i++) {
					var s = this._eventListeners[e][i];
					if (s.callBack == t && (!n || s.target == n)) {
						o = i;
						break
					}
				}
				return o
			}, e.prototype.addEventListener = function(e, t, n, o) {
				if (void 0 === o && (o = 1), e) {
					if (null == t) return cc.log("addEventListener callBack is nil"), !1;
					var i = {
						callBack: t,
						target: n,
						order: o
					};
					return null == this._eventListeners[e] ? this._eventListeners[e] = [i] : -
						1 == this.getEventListenersIndex(e, t, n) && (this._eventListeners[e]
							.push(i), this._eventListeners[e].sort(this.sortListener)), !0
				}
				cc.warn("eventName is empty" + e)
			}, e.prototype.setEventListener = function(e, t, n) {
				if (e) {
					if (null == t) return cc.log("setEventListener callBack is nil"), !1;
					var o = {
						callBack: t,
						target: n,
						order: 1
					};
					return this._eventListeners[e] = [o], !0
				}
				cc.warn("eventName is empty" + e)
			}, e.prototype.removeEventListener = function(e, t, n) {
				if (null != this._eventListeners[e]) {
					var o = this.getEventListenersIndex(e, t, n); - 1 != o && this
						._eventListeners[e].splice(o, 1), 0 == this._eventListeners[e].length &&
						delete this._eventListeners[e]
				}
			}, e.prototype.raiseEvent = function(e) {
				for (var t, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
				if (null != this._eventListeners[e]) {
					for (var s = [], r = 0, a = this._eventListeners[e]; r < a.length; r++) {
						var c = a[r];
						s.push({
							callBack: c.callBack,
							target: c.target,
							order: c.order
						})
					}
					for (var u = 0, l = s; u < l.length; u++)(t = (c = l[u]).callBack).call
						.apply(t, o([c.target, e], n))
				}
			}, e.instance = null, e
		}();
		n.EventManager = i, cc._RF.pop()
	}, {}],
	HttpRequest: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "02fearE2cBLuJ9ai6pbTJKa", "HttpRequest"), Object.defineProperty(n,
		"__esModule", {
			value: !0
		}), n.HttpType = void 0;
		var o, i = e("../log/LogManager"),
			s = e("../utils/ComUtils");
		(function(e) {
			e[e.None = 0] = "None", e[e.ReqSuccess = 1] = "ReqSuccess", e[e.OpSuccess = 2] =
				"OpSuccess", e[e.OpFail = 4] = "OpFail", e[e.ReqFail = 8] = "ReqFail", e[e
					.ReqTimeout = 16] = "ReqTimeout", e[e.All = 31] = "All"
		})(o = n.HttpType || (n.HttpType = {}));
		var r = function() {
			function e() {}
			return e.getInstance = function() {
				return this._instance || (this._instance = new e), this._instance
			}, e.prototype.send = function(e) {
				var t = this;
				if (!e.url) return i.logMgr.console(
					"HTTP\u7684\u8bf7\u6c42\u5730\u5740\u5fc5\u987b\u8bbe\u7f6e"), !1;
				var n = new XMLHttpRequest;
				if (!n) return i.logMgr.console(
					"XMLHttpRequest\u5bf9\u8c61\u521b\u5efa\u5931\u8d25"), !1;
				if (e.method = e.method.toUpperCase(), void 0 === e.sync && (e.sync = !0),
					void 0 === e.outTime && (e.outTime = 30), void 0 === e.showTipsType && (e
						.showTipsType = o.None), void 0 === e.isAutoRetry && (e.isAutoRetry = !
						0), void 0 === e.reqTimes && (e.reqTimes = 0), void 0 === e
					.maxReqTimes && (e.maxReqTimes = 3), e.needSign) {
					var r = s.ComUtils.getUrlParam(e.url);
					if (!r.sign) {
						var a = [];
						for (var c in r) r.hasOwnProperty(c) && a.push(c);
						if (a.length > 0) {
							a.sort();
							for (var u = "", l = 0; l < a.length; ++l) u = u + a[l] + "=" + r[a[
								l]], l !== a.length - 1 && (u += "&")
						}
					}
				}
				var p = !1,
					h = setTimeout(function() {
						p = !0, t.timeoutHandler(n, e), e.timeoutCb && !e.isAutoRetry && e
							.timeoutCb(n, e), n.abort()
					}, 1e3 * e.outTime);
				if (n.onreadystatechange = function() {
						if (1 === n.readyState) e.reqTimes++;
						else if (4 === n.readyState) {
							if (p) return;
							clearTimeout(h), 200 === n.status ? (t.successHandler(n, e), e
								.successCb && e.successCb(n, e)) : (t.failHandler(n, e), e
								.failCb && !e.isAutoRetry && e.failCb(n, e))
						}
					}, i.logMgr.log("HttpRequest-send: " + JSON.stringify(e)), n.open(e.method,
						e.url), e.headerList)
					for (var l in e.headerList) n.setRequestHeader(e.headerList[l].name, e
						.headerList[l].value);
				return n.send(e.data), !0
			}, e.prototype.successHandler = function(e, t) {
				var n = void 0;
				try {
					n = JSON.parse(e.responseText)
				} catch (s) {
					return t.showTipsType & o.ReqSuccess && i.logMgr.console(
						"\u8bf7\u6c42\u6210\u529f\uff0c\u4f46\u662f\u89e3\u6790\u9519\u8bef"
						), !1
				}
				return n && 0 == n.state || (t.showTipsType, o.OpFail), !0
			}, e.prototype.failHandler = function(e, t) {
				i.logMgr.console(
						"XMLHttpRequest\u901a\u7528\u5931\u8d25\u56de\u8c03, responseURL: " + t
						.url + ", \u54cd\u5e94\u7801\uff1a" + e.status +
						", \u54cd\u5e94\u7801\u7684\u6587\u672c\u4fe1\u606f\uff1a" + e
						.statusText + ", \u53d1\u9001\u6b21\u6570: " + t.reqTimes), 401 === e
					.status ? (i.logMgr.console("token\u5931\u6548"), t.showTipsType, o
					.ReqFail) : t.isAutoRetry ? this.reSendFailureRequest(t, "fail", e) : (t
						.showTipsType, o.ReqFail)
			}, e.prototype.timeoutHandler = function(e, t) {
				i.logMgr.console(
						"XMLHttpRequest\u901a\u7528\u8d85\u65f6\u56de\u8c03, method: " + t
						.method + ",url = " + t.url + ", \u53d1\u9001\u6b21\u6570: " + t
						.reqTimes), t.isAutoRetry ? this.reSendFailureRequest(t, "timeout", e) :
					(t.showTipsType, o.ReqTimeout)
			}, e.prototype.reSendFailureRequest = function(t, n, i) {
				if (t.reqTimes >= t.maxReqTimes) return "fail" === n ? (t.failCb && t.failCb(i,
					t), t.showTipsType, o.ReqFail) : (t.timeoutCb && t.timeoutCb(i, t),
					t.showTipsType, o.ReqTimeout), !1;
				return setTimeout(function() {
					e.getInstance().send(t)
				}, "fail" === n ? 1e3 : 0), !0
			}, e._instance = null, e
		}();
		n.default = r, cc._RF.pop()
	}, {
		"../log/LogManager": "LogManager",
		"../utils/ComUtils": "ComUtils"
	}],
	IControl: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d5a74TQe+FIG6QFnzmStmyP", "IControl"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), cc._RF.pop()
	}, {}],
	IntersectUtils: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "def3fxQ8+ZL57FdjEXJy6TD", "IntersectUtils"), Object.defineProperty(n,
			"__esModule", {
				value: !0
			});
		var o = function() {
			function e() {}
			return e.LineInterCircle = function(e, t, n, o, i, s) {
				i.x = s.x = 65535, i.y = s.y = 65535;
				var r = Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)),
					a = cc.v2(0, 0);
				a.x = (t.x - e.x) / r, a.y = (t.y - e.y) / r;
				var c = {
					x: 0,
					y: 0
				};
				c.x = n.x - e.x, c.y = n.y - e.y;
				var u = c.x * a.x + c.y * a.y,
					l = u * u,
					p = c.x * c.x + c.y * c.y,
					h = o * o;
				if (h - p + l < 0) return !1;
				var f = Math.sqrt(h - p + l),
					d = u - f;
				return d - 0 > -1e-5 && d - r < 1e-5 && (i.x = e.x + d * a.x, i.y = e.y + d * a
					.y), (d = u + f) - 0 > -1e-5 && d - r < 1e-5 && (s.x = e.x + d * a.x, s
					.y = e.y + d * a.y), !0
			}, e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	LanguageComp: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "78539v2TAxMO4ZUskK4TbvS", "LanguageComp");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e("../const/Const"),
			a = e("../event/EventManager"),
			c = e("./LanguageManager"),
			u = cc._decorator,
			l = u.ccclass,
			p = u.property,
			h = function() {
				function e() {
					this.item = null, this.key = ""
				}
				return s([p(cc.Node)], e.prototype, "item", void 0), s([p(cc.String)], e.prototype,
					"key", void 0), s([l("LanuguageItem")], e)
			}(),
			f = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.items = [], t._labelList = [], t._flag = !1, t._refrush = !1, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "refrush", {
					get: function() {
						return this._refrush
					},
					set: function() {
						this._refrush = !1, this.items.sort(this.sortItem());
						var e = this.items.length;
						if (!(e <= 0)) {
							for (var t = 0, n = e - 1; n >= 0 && !this.items[n].item && !
								this.items[n].key; n--) t++;
							this.items.length -= t
						}
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.sortItem = function() {
					this.items.sort(function(e, t) {
						return e.item || e.key ? t.item || t.key ? 0 : -1 : 1
					})
				}, t.prototype.onLoad = function() {
					a.EventManager.getInstance().addEventListener(r.default.mess_refreshLanguage,
						this.onRefreshLanguage, this), this.items.forEach(function(e) {
						e.item && e.item.getComponent(cc.Label) ? cc.sys.isMobile || (e.item
								.getComponent(cc.Label).string = "") : e.item && e.item
							.getComponent(cc.Sprite) && (e.item.getComponent(cc.Sprite)
								.spriteFrame = null)
					})
				}, t.prototype.start = function() {
					this.refresh()
				}, t.prototype.onDestroy = function() {
					a.EventManager.getInstance().removeEventListener(r.default.mess_refreshLanguage,
						this.onRefreshLanguage, this), this.items.forEach(function(e) {
						c.default.getInstance().releaseAsset(e.key + e.item.uuid)
					})
				}, t.prototype.onRefreshLanguage = function() {
					a.EventManager.getInstance().removeEventListener(r.default.mess_refreshLanguage,
						this.refresh, this), this.refresh()
				}, t.prototype.refresh = function() {
					var e = this;
					this.items.forEach(function(t) {
						var n, o, i = {};
						if (t.item && t.item.getComponent(cc.Label)) n = t.item
							.getComponent(cc.Label), o = c.default.getInstance().getDstStr(t
								.key) || "", cc.sys.isMobile ? (i.label = n, i.str = o, e
								._labelList.push(i)) : n.string = o;
						else if (t.item && t.item.getComponent(cc.Sprite)) {
							var s = t.item.getComponent(cc.Sprite);
							c.default.getInstance().setSpriteFrame(t.key, s)
						} else t.item && t.item.getComponent(cc.RichText) && (n = t.item
							.getComponent(cc.RichText), o = c.default.getInstance()
							.getDstStr(t.key) || "", cc.sys.isMobile ? (i.label = n, i
								.str = o, e._labelList.push(i)) : n.string = o)
					}), cc.sys.isMobile && this._labelList.length > 0 && !this._flag && (this
						._flag = !0, this.schedule(this.updateLabel))
				}, t.prototype.updateLabel = function() {
					var e = this._labelList.shift();
					cc.isValid(e.label.node) && (e.label.string = e.str), this._labelList.length <=
						0 && (this._flag = !1, this.unschedule(this.updateLabel))
				}, s([p([h])], t.prototype, "items", void 0), s([p()], t.prototype, "_refrush",
					void 0), s([p({
					displayName: "\u5237\u65b0\u6392\u5e8f"
				})], t.prototype, "refrush", null), s([l], t)
			}(cc.Component);
		n.default = f, cc._RF.pop()
	}, {
		"../const/Const": "Const",
		"../event/EventManager": "EventManager",
		"./LanguageManager": "LanguageManager"
	}],
	LanguageManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "71e4eOh+KZBpo0VZGYb5s0N", "LanguageManager");
		var o = this && this.__decorate || function(e, t, n, o) {
			var i, s = arguments.length,
				r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
				.decorate(e, t, n, o);
			else
				for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
					t, n, r) : i(t, n)) || r);
			return s > 3 && r && Object.defineProperty(t, n, r), r
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = e("../config/BaseLangConf"),
			s = e("../const/Const"),
			r = e("../event/EventManager"),
			a = e("../log/LogManager"),
			c = e("../res/ResLoader"),
			u = cc._decorator,
			l = u.ccclass,
			p = (u.property, function() {
				function e() {
					this._curLangType = i.LanguageType.EN, this._langCf = null, this._langMapBase =
						new Map, this._langMapCore = new Map, this._langMapDefault = new Map, this
						._langMapGame = new Map, this._isReady = !1, this._resArray = new Map, this
						._resList = [], this._loadingIdx = 0
				}
				var t;
				return t = e, e.getInstance = function() {
					return this._instance || (this._instance = new t), this._instance
				}, e.prototype.initLangConf = function(e) {
					this._langCf = e
				}, e.prototype.initLangMap = function(e, t) {
					if (this._curLangType = e, this._langCf[e] || (a.LogManager.getInstance()
							.console("\u672a\u914d\u7f6e\u8bed\u8a00\uff0clang = " + e +
								", \u5207\u4e3a\u82f1\u8bed"), this._curLangType = i
							.LanguageType.EN), this._finishCb = t, this._langMapBase.clear(),
						this._langMapCore.clear(), this._langMapDefault.clear(), this
						._langMapGame.clear(), this._isReady = !1, this._loadingIdx = 0, this
						._cfArr = this._langCf[this._curLangType], this._langCf[this
							._curLangType].length <= 0) a.LogManager.getInstance().console(
						"\u672a\u914d\u7f6ejson\u6587\u4ef6\uff0clang = " + this
						._curLangType);
					else
						for (var n = 0; n < this._cfArr.length; n++) this.loadConfig(this
							._cfArr[n])
				}, e.prototype.loadConfig = function(e) {
					var t = this,
						n = e.bundleName ? e.bundleName : "resources";
					c.resLoader.loadRes(e.path, function(e, o) {
						if (!e) {
							var i, a = o.json;
							for (var u in i = "base" == n ? t._langMapBase :
									"game_core" == n ? t._langMapCore : "slot" == n ||
									"hunter" == n || "arcade" == n ? t._langMapDefault :
									t._langMapGame, a.data) i.set(u, a.data[u]);
							c.resLoader.releaseAsset(o, "@LanguageManager"), t
								._loadingIdx++, t._loadingIdx >= t._cfArr.length && (t
									._initFinish(), t._finishCb && (t._finishCb(), t
										._finishCb = void 0), r.EventManager
									.getInstance().raiseEvent(s.default
										.mess_refreshLanguage))
						}
					}, n, "@LanguageManager")
				}, e.prototype.getKeyFromMap = function(e) {
					var t = this._langMapGame.get(e);
					return t || (t = this._langMapDefault.get(e)), t || (t = this._langMapCore
						.get(e)), t || (t = this._langMapBase.get(e)), t
				}, e.prototype.getJsonIndex = function(e, t) {
					for (var n = 0; n < e.length; n++)
						if (-1 != e[n].path.indexOf(t)) return n;
					return -1
				}, e.prototype._initFinish = function() {
					this._isReady = !0
				}, Object.defineProperty(e.prototype, "isReady", {
					get: function() {
						return this._isReady
					},
					enumerable: !1,
					configurable: !0
				}), e.prototype.switchLang = function(e, t) {
					this._curLangType != e ? this.initLangMap(e, t) : t && t()
				}, e.prototype.getCurLang = function() {
					return this._curLangType
				}, e.prototype.getDstStr = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					if (!this._isReady) return null;
					var o = e,
						i = this.getKeyFromMap(e);
					if (i) {
						if (o = i, t[0] && t[0] instanceof Array) t[0].forEach(function(e) {
							o = o.replace(/s%/, e)
						});
						else
							for (var s = 0; s < t.length; ++s) o = o.replace(/s%/, t[s]);
						o = o.replace(/&/g, "\n")
					}
					return o || console.log(
						"\u591a\u8bed\u8a00\u6ca1\u914d\u6216\u8005\u662f\u7a7a\u5b57\u7b26\u4e32\uff1a" +
						e), o
				}, e.prototype.getDstToStr = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					var n = this.getDstStr(e[0]);
					return n == e[0] && (n = this.getDstStr(e[1])), n
				}, e.prototype.getSrcStr = function(e) {
					return this._isReady ? this.getKeyFromMap(e) : null
				}, e.prototype.getSrcPng = function(e) {
					return this._isReady ? this.getKeyFromMap(e) : null
				}, e.prototype.setSpriteFrame = function(e, t) {
					var n = t,
						o = this.getSrcPng(e);
					if (o) {
						var s, r = this._curLangType;
						o.onlyInLanguages && o.onlyInLanguages.length > 0 && (r == i
								.LanguageType.EN || o.onlyInLanguages.includes(r) || (r = i
									.LanguageType.EN)), s = "" != o.atlas ? o.path + r + "/" + o
							.atlas : o.path + r + "/" + o.frame;
						for (var c = !1, u = 0; u < this._resList.length; u++)
							if (this._resList[u][0] == n) {
								this._resList[u][1] = s, this._resList[u][2] = o.bundle, c = !0;
								break
							} c || this._resList.push([n, s, o.bundle]), "" != o.atlas ? this
							.loadImageAtlas(n, s, e, o) : this.loadImageFrame(n, s, e, o)
					} else a.LogManager.getInstance().warn(
						"LanaguageManager setSpriteFrame \u56fe\u7247\u914d\u7f6e\u52a0\u8f7d\u672a\u5b8c\u6210 ",
						e)
				}, e.prototype.loadImageAtlas = function(e, t, n, o) {
					var i = this;
					c.resLoader.loadRes(t, cc.SpriteAtlas, function(s, r) {
						if (!s && cc.isValid(e)) {
							var a = i.getResPathFromList(e);
							a[1] == t && a[2] == o.bundle && (e.spriteFrame = r
								.getSpriteFrame(o.frame), i._resArray.set(n + e.node
									.uuid, r))
						}
					}, o.bundle, "@languageManager_" + n)
				}, e.prototype.loadImageFrame = function(e, t, n, o) {
					var i = this;
					c.resLoader.loadRes(t, cc.SpriteFrame, function(s, r) {
						if (!s && cc.isValid(e)) {
							var a = i.getResPathFromList(e);
							a[1] == t && a[2] == o.bundle && (e.spriteFrame = r, i
								._resArray.set(n + e.node.uuid, r))
						}
					}, o.bundle, "@languageManager_" + n)
				}, e.prototype.getResPathFromList = function(e) {
					for (var t = this._resList.length - 1; t >= 0; t--)
						if (cc.isValid(this._resList[t][0])) {
							if (this._resList[t][0] == e) return this._resList[t]
						} else this._resList.splice(t, 1);
					return null
				}, e.prototype.releaseAsset = function(e) {
					var t = this._resArray.get(e);
					c.resLoader.releaseAsset(t, "@languageManager_" + e), this._resArray.delete(
						e)
				}, e.prototype.resetLangMap = function() {
					this._langMapGame.clear()
				}, e._instance = null, t = o([l], e)
			}());
		n.default = p, cc._RF.pop()
	}, {
		"../config/BaseLangConf": "BaseLangConf",
		"../const/Const": "Const",
		"../event/EventManager": "EventManager",
		"../log/LogManager": "LogManager",
		"../res/ResLoader": "ResLoader"
	}],
	ListViewItem: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "6ac40DsBddJ7bMsaFnT6Qg0", "ListViewItem");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = cc._decorator,
			a = r.ccclass,
			c = (r.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._index = 0, t._data = null, t._target = null, t._extParams = null, t
				}
				return i(t, e), t.prototype.updateItem = function(e, t) {
					this._index = e, this._data = t, null == this._data || null == this._data ?
						this.node.active = !1 : this.node.active = !0
				}, t.prototype.bindTarget = function(e) {
					this._target = e
				}, Object.defineProperty(t.prototype, "index", {
					get: function() {
						return this._index
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "data", {
					get: function() {
						return this._data
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.getExtParams = function() {
					return this._extParams
				}, t.prototype.setExtParams = function(e) {
					this._extParams = e
				}, s([a], t)
			}(cc.Component));
		n.default = c, cc._RF.pop()
	}, {}],
	ListView: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "522d2He1vxGKa/SUvfnqqAc", "ListView");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.ListViewEvent = void 0;
		var r, a, c = e("./ListViewItem"),
			u = cc._decorator,
			l = u.ccclass,
			p = u.property;
		(function(e) {
			e[e.Horizontal = 0] = "Horizontal", e[e.Vertical = 1] = "Vertical"
		})(r || (r = {})),
		function(e) {
			e[e.DATA_RUNOUT = 0] = "DATA_RUNOUT"
		}(a = n.ListViewEvent || (n.ListViewEvent = {}));
		var h = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.scrollView = null, t.itemTemplate = null, t.spawnCount = 0, t.spacingX = 0,
					t.spacingY = 0, t.colNum = 1, t.rowNum = 1, t.paddingLeft = 0, t.paddingRight =
					0, t.paddingTop = 0, t.paddingBottom = 0, t._extParams = null, t._isReady = !1,
					t._direction = r.Vertical, t._totalCount = 0, t._itemHeight = 0, t._itemWidth =
					0, t._itemBeginX = 0, t._itemBeginY = 0, t._dataList = [], t._itemList = [], t
					._updateTime = 0, t._updateInterval = .1, t._bufferZoneY = 0, t._bufferZoneX =
					0, t._lastContentY = 0, t._lastContentX = 0, t._content = null, t._eventCb =
					null, t._eventSendTag = new Map, t
			}
			return i(t, e), t.prototype.getExtParams = function() {
				return this._extParams
			}, t.prototype.setExtParams = function(e) {
				this._extParams = e;
				for (var t = 0; t < this._itemList.length; ++t) {
					var n = this._itemList[t].getComponent(c.default);
					n && n.setExtParams(this._extParams)
				}
			}, Object.defineProperty(t.prototype, "isReady", {
				get: function() {
					return this._isReady
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype._resetData = function() {
				this._isReady = !1, this._direction = r.Vertical, this._totalCount = 0, this
					._itemHeight = 0, this._itemWidth = 0, this._itemBeginX = 0, this
					._itemBeginY = 0, this._dataList = [], this._updateTime = 0, this
					._updateInterval = .1, this._bufferZoneY = 0, this._bufferZoneX = 0, this
					._lastContentY = 0, this._lastContentX = 0, this._content = null, this
					._eventCb = null, this._eventSendTag.clear()
			}, t.prototype.init = function(e) {
				this._resetData(), this._content = this.scrollView.content, this._dataList = e
					.list || [], this._totalCount = this._dataList.length, this.scrollView
					.stopAutoScroll(), this.scrollView.horizontal ? (this._direction = r
						.Horizontal, this.scrollView.scrollToLeft()) : (this._direction = r
						.Vertical, this.scrollView.scrollToTop()), e.eventCb && (this._eventCb =
						e.eventCb), this._itemList.length > 0 ? e.itemTemplate && e
					.itemTemplate != this.itemTemplate ? (this.itemTemplate = e.itemTemplate,
						this._initialize(!0)) : this._initialize(!1) : (e.itemTemplate && e
						.itemTemplate != this.itemTemplate && (this.itemTemplate = e
							.itemTemplate), this._initialize(!0)), this._isReady = !0
			}, t.prototype._clearSpawnItem = function() {
				for (var e = 0; e < this._itemList.length; ++e) this._itemList[e].destroy();
				this._itemList = []
			}, t.prototype._initialize = function(e) {
				if (e) {
					this._clearSpawnItem();
					for (var t = 0; t < this.spawnCount; ++t) {
						var n = cc.instantiate(this.itemTemplate);
						this._content.addChild(n), this._itemList.push(n)
					}
				}
				for (t = 0; t < this._itemList.length; ++t) {
					var o = this._itemList[t].getComponent(c.default);
					o && o.setExtParams(this._extParams)
				}
				if (this._itemList.length > 0) {
					this._itemHeight = this._itemList[0].height, this._itemWidth = this
						._itemList[0].width;
					var i = this.scrollView.content.parent;
					this._bufferZoneY = (i.height + this._itemHeight + this.spacingY) / 2, this
						._bufferZoneX = (i.width + this._itemWidth + this.spacingX) / 2
				}
				var s = this._itemWidth + this.spacingX,
					a = this._itemHeight + this.spacingY;
				if (this._direction == r.Vertical)
					for (this._content.height = Math.ceil(this._totalCount / this.colNum) * a -
						this.spacingY + this.paddingTop + this.paddingBottom, this
						._itemBeginX = -this._content.width / 2 + this._itemWidth / 2 + this
						.paddingLeft, this._itemBeginY = -this._itemHeight / 2 - this
						.paddingTop, t = 0; t < this.spawnCount; ++t) {
						(n = this._itemList[t]).active = !0;
						var u = Math.floor(t / this.colNum),
							l = t % this.colNum;
						n.x = this._itemBeginX + l * s, n.y = this._itemBeginY - u * a, n
							.getComponent(c.default).bindTarget(this), n.getComponent(c.default)
							.updateItem(t, this._dataList[t])
					} else
						for (this._content.width = Math.ceil(this._totalCount / this.rowNum) *
							s - this.spacingX + this.paddingLeft + this.paddingRight, this
							._itemBeginX = this._itemWidth / 2 + this.paddingLeft, this
							._itemBeginY = this._content.height / 2 - this.paddingTop - this
							._itemHeight / 2, t = 0; t < this.spawnCount; ++t)(n = this
								._itemList[t]).active = !0, l = Math.floor(t / this.rowNum), u =
							t % this.rowNum, n.x = this._itemBeginX + l * s, n.y = this
							._itemBeginY - u * a, n.getComponent(c.default).bindTarget(this), n
							.getComponent(c.default).updateItem(t, this._dataList[t])
			}, t.prototype.getPositionInView = function(e) {
				var t = e.parent.convertToWorldSpaceAR(e.position);
				return this.scrollView.node.convertToNodeSpaceAR(t)
			}, t.prototype._getPositionByIndex = function(e) {
				var t = cc.v2(0, 0),
					n = this._itemWidth + this.spacingX,
					o = this._itemHeight + this.spacingY;
				if (this._direction == r.Vertical) {
					var i = Math.floor(e / this.colNum),
						s = e % this.colNum;
					t.x = this._itemBeginX + s * n, t.y = this._itemBeginY - i * o
				} else s = Math.floor(e / this.rowNum), i = e % this.rowNum, t.x = this
					._itemBeginX + s * n, t.y = this._itemBeginY - i * o;
				return t
			}, t.prototype.update = function(e) {
				var t = this;
				if (this._isReady && (this._updateTime += e, !(this._updateTime < this
						._updateInterval)))
					if (this._updateTime = 0, this._direction == r.Vertical) {
						var n = this._content.y < this._lastContentY,
							o = this._content.y > this._lastContentY,
							i = Math.ceil(this.spawnCount / this.colNum) * (this._itemHeight +
								this.spacingY),
							s = Math.abs(this._content.y - this._lastContentY),
							u = function(e) {
								for (var s = 0; s < t._itemList.length; ++s) {
									var r = t._itemList[s],
										u = t.getPositionInView(r);
									if (n) u.y < -t._bufferZoneY && (p = (l = r.getComponent(c
										.default)).index - t.spawnCount * e) >= 0 && (r.y +=
										i * e, l.updateItem(p, t._dataList[p]));
									else if (o) {
										var l, p;
										if (u.y > t._bufferZoneY)
											if ((p = (l = r.getComponent(c.default)).index + t
													.spawnCount * e) < t._totalCount) r.y -= i *
												e, l.updateItem(p, t._dataList[p]);
											else if (t._eventCb && !t._eventSendTag.get(a
												.DATA_RUNOUT)) {
											t._eventSendTag.set(a.DATA_RUNOUT, !0);
											var h = t._eventCb.callback,
												f = t._eventCb.target;
											f ? h.call(f, t, a.DATA_RUNOUT) : h(t, a
												.DATA_RUNOUT)
										}
									} else t._eventSendTag.get(a.DATA_RUNOUT) && t._eventSendTag
										.set(a.DATA_RUNOUT, !1)
								}
							};
						(l = Math.ceil(s / i)) >= 2 && u(l - 1), u(1), this._lastContentY = this
							._content.y
					} else {
						var l, p = this._content.x < this._lastContentX,
							h = this._content.x > this._lastContentX,
							f = Math.ceil(this.spawnCount / this.rowNum) * (this._itemWidth +
								this.spacingX),
							d = (s = Math.abs(this._content.x - this._lastContentX), function(
							e) {
								for (var n = 0; n < t._itemList.length; ++n) {
									var o = t._itemList[n],
										i = t.getPositionInView(o);
									if (p) {
										if (i.x < -t._bufferZoneX)
											if ((l = (u = o.getComponent(c.default)).index +
													t.spawnCount * e) < t._totalCount) o
												.x += f * e, u.updateItem(l, t._dataList[
												l]);
											else if (t._eventCb && !t._eventSendTag.get(a
												.DATA_RUNOUT)) {
											t._eventSendTag.set(a.DATA_RUNOUT, !0);
											var s = t._eventCb.callback,
												r = t._eventCb.target;
											r ? s.call(r, t, a.DATA_RUNOUT) : s(t, a
												.DATA_RUNOUT)
										}
									} else if (h) {
										var u, l;
										i.x > t._bufferZoneX && (l = (u = o.getComponent(c
												.default)).index - t.spawnCount * e) >= 0 &&
											l < t._totalCount && (o.x -= f * e, u
												.updateItem(l, t._dataList[l]))
									} else t._eventSendTag.get(a.DATA_RUNOUT) && t
										._eventSendTag.set(a.DATA_RUNOUT, !1)
								}
							});
						(l = Math.ceil(s / f)) >= 2 && d(l - 1), d(1), this._lastContentX = this
							._content.x
					}
			}, t.prototype.scrollToItem = function(e, t) {
				var n = this._getPositionByIndex(e),
					o = cc.v2(0, 0),
					i = this.scrollView.getMaxScrollOffset();
				this._direction == r.Vertical ? (o.y = Math.abs(n.y) - (this._itemHeight + this
						.spacingY) / 2, o.y > i.y && (o.y = i.y)) : (o.x = Math.abs(n.x) - (this
						._itemWidth + this.spacingX) / 2, o.x > i.x && (o.x = i.x)), this
					.scrollView.scrollToOffset(o, t)
			}, t.prototype.addDataList = function(e) {
				if (!this._isReady) return !1;
				e && (this._dataList = this._dataList.concat(e)), this._totalCount = this
					._dataList.length;
				var t = this._itemWidth + this.spacingX,
					n = this._itemHeight + this.spacingY;
				return this._direction == r.Vertical ? this._content.height = Math.ceil(this
						._totalCount / this.colNum) * n - this.spacingY + this.paddingTop + this
					.paddingBottom : this._content.width = Math.ceil(this._totalCount / this
						.rowNum) * t - this.spacingX + this.paddingLeft + this.paddingRight, !0
			}, t.prototype.getDataList = function() {
				return this._dataList
			}, t.prototype.getItemList = function() {
				return this._itemList
			}, Object.defineProperty(t.prototype, "totalCount", {
				get: function() {
					return this._totalCount
				},
				enumerable: !1,
				configurable: !0
			}), t.prototype.getLatelyIndex = function() {
				var e = this,
					t = function(n, o, i) {
						if (n > o) return -1;
						var s = Math.floor((n + o) / 2),
							a = e._getPositionByIndex(s);
						return e._direction == r.Vertical ? n == o ? s : Math.abs(a.y) > i ? t(
							n, s, i) : t(s + 1, o, i) : n == o ? s : Math.abs(a.x) > i ? t(
							n, s, i) : t(s + 1, o, i)
					};
				return this._direction == r.Vertical ? t(0, this._totalCount - 1, Math.abs(this
					._content.y - this._content.parent.height / 2)) : t(0, this
					._totalCount - 1, Math.abs(this._content.x + this._content.parent
						.width / 2))
			}, t.prototype.updateList = function() {
				this._updateContentWH();
				for (var e = this.getItemList(), t = e.length, n = 0; n < t; n++) {
					var o = e[n].getComponent(c.default),
						i = o.index;
					o.updateItem(i, this._dataList[i])
				}
			}, t.prototype._updateContentWH = function() {
				this._totalCount = this._dataList.length;
				var e = this._itemWidth + this.spacingX,
					t = this._itemHeight + this.spacingY;
				this._direction == r.Vertical ? this._content.height = Math.ceil(this
						._totalCount / this.colNum) * t - this.spacingY + this.paddingTop + this
					.paddingBottom : this._content.width = Math.ceil(this._totalCount / this
						.rowNum) * e - this.spacingX + this.paddingLeft + this.paddingRight
			}, s([p(cc.ScrollView)], t.prototype, "scrollView", void 0), s([p({
				type: cc.Prefab,
				tooltip: "item\u9884\u5236\u4f53 \u9884\u5236\u6302\u7684\u811a\u672c\u8981\u7ee7\u627fListViewItem"
			})], t.prototype, "itemTemplate", void 0), s([p({
				type: cc.Integer,
				tooltip: "\u5b9e\u9645\u751f\u6210\u7684item\u6570,\u4e00\u822c\u6bd4\u53ef\u89c6\u89c6\u56fe\u7684\u591a\u4e00\u884c\u6216\u4e00\u5217"
			})], t.prototype, "spawnCount", void 0), s([p({
				type: cc.Integer,
				tooltip: "\u6a2a\u5411\u95f4\u9694"
			})], t.prototype, "spacingX", void 0), s([p({
				type: cc.Integer,
				tooltip: "\u7eb5\u5411\u95f4\u9694"
			})], t.prototype, "spacingY", void 0), s([p({
				type: cc.Integer,
				tooltip: "\u7eb5\u5411\u5e03\u5c40\u65f6\u7684\u5217\u6570\uff0c\u4ec5\u7eb5\u5411\u5e03\u5c40\u751f\u6548",
				min: 1
			})], t.prototype, "colNum", void 0), s([p({
				type: cc.Integer,
				tooltip: "\u6a2a\u5411\u5e03\u5c40\u65f6\u7684\u884c\u6570\uff0c\u4ec5\u6a2a\u5411\u5e03\u5c40\u751f\u6548",
				min: 1
			})], t.prototype, "rowNum", void 0), s([p({
				type: cc.Integer,
				tooltip: "item\u5de6\u8fb9\u8ddd"
			})], t.prototype, "paddingLeft", void 0), s([p({
				type: cc.Integer,
				tooltip: "item\u53f3\u8fb9\u8ddd"
			})], t.prototype, "paddingRight", void 0), s([p({
				type: cc.Integer,
				tooltip: "item\u4e0a\u8fb9\u8ddd"
			})], t.prototype, "paddingTop", void 0), s([p({
				type: cc.Integer,
				tooltip: "item\u4e0b\u8fb9\u8ddd"
			})], t.prototype, "paddingBottom", void 0), s([l], t)
		}(cc.Component);
		n.default = h, cc._RF.pop()
	}, {
		"./ListViewItem": "ListViewItem"
	}],
	LogManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "e15bbdHJpVFdYMACxMEV5k2", "LogManager");
		var o = this && this.__spreadArrays || function() {
			for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
			var o = Array(e),
				i = 0;
			for (t = 0; t < n; t++)
				for (var s = arguments[t], r = 0, a = s.length; r < a; r++, i++) o[i] = s[r];
			return o
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.logMgr = n.LogManager = void 0;
		var i = e("./zLog"),
			s = function() {
				function e() {
					this._log = [], this._display = !0
				}
				return e.getInstance = function() {
						return this.instance || (this.instance = new e), this.instance
					}, Object.defineProperty(e.prototype, "enableConsoleLog", {
						set: function(e) {
							i.zLog.level = e ? i.zLog.LEVEL_ALL : i.zLog.LEVEL_NONE
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.console = function(e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						i.zLog.log.apply(i.zLog, o([e], t))
					}, e.prototype.log = function(e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						i.zLog.log.apply(i.zLog, o([e], t))
					}, e.prototype.error = function(e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						i.zLog.error.apply(i.zLog, o([e], t))
					}, e.prototype.warn = function(e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						i.zLog.warn.apply(i.zLog, o([e], t))
					}, e.prototype.recoder = function(e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
					}, e.prototype.displayAll = function() {}, e.prototype.getlog = function() {
						return this._log
					}, e.prototype.sendserver = function() {}, e.prototype.savelocal = function() {}, e
					.prototype.clearlog = function() {
						this._log = []
					}, e.instance = null, e
			}();
		n.LogManager = s, n.logMgr = s.getInstance(), cc._RF.pop()
	}, {
		"./zLog": "zLog"
	}],
	MController: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "faebeCtF+pHlJXL2kWVHmxK", "MController");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e("../res/ResLoader"),
			a = e("./NodeUiConfig"),
			c = cc._decorator,
			u = c.ccclass,
			l = c.property,
			p = c.executeInEditMode,
			h = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.m_saveConfig = !1, t._stateIndex = 0, t
				}
				var n;
				return i(t, e), n = t, Object.defineProperty(t.prototype, "saveConfig", {
						get: function() {
							return this.m_saveConfig
						},
						set: function() {
							this.updateConfig(), Editor.info(
								"\u914d\u7f6e\u4fdd\u5b58\u5b8c\u6bd5")
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(t.prototype, "stateIndex", {
						get: function() {
							return this._stateIndex
						},
						set: function(e) {
							this._stateIndex != e && (this._stateIndex = e, this.updateLayout())
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.start = function() {}, t.prototype.setEnumAttr = function(e, t, n) {
						cc.Class.Attr.setClassAttr(e, t, "type", "Enum"), cc.Class.Attr.setClassAttr(e,
							t, "enumList", cc.Enum.getList(n))
					}, t.prototype.readChildrenProp = function(e) {
						if (this.readNodeProp(e), e.childrenCount > 0)
							for (var t = e.children, n = 0; n < t.length; n++) {
								var o = t[n];
								this.readNodeProp(o), o.childrenCount > 0 && this.readChildrenProp(o)
							}
					}, t.prototype.readNodeProp = function(e) {
						var t = e.getComponent(a.default);
						if (t) {
							var o = {};
							for (var i in n.inheritedAttrList) {
								var s = e.getComponent(i);
								if ("cc.Node" == i && (s = e), s) {
									o[i] = {};
									var r = n.inheritedAttrList[i];
									for (var c in r)
										if (null != s[c])
											if ("spriteFrame" != c)
												if ("color" == c) s[c].r == r[c].r && s[c].g == r[c]
													.g && s[c].b == r[c].b || (o[i][c] = {}, o[i][c].r =
														s[c].r, o[i][c].g = s[c].g, o[i][c].b = s[c].b);
												else if ("offset" == c) s[c].x == r[c].x && s[c].y == r[
										c].y || (o[i][c] = {}, o[i][c].x = s[c].x, o[i][c].y = s[c]
										.y);
									else if ("size" == c) s[c].width == r[c].width && s[c].height == r[
										c].height || (o[i][c] = {}, o[i][c].width = s[c].width, o[i]
										[c].height = s[c].height);
									else if ("points" == c) {
										var u = !1,
											l = s[c];
										if (s[c].length != r[c].length) u = !0;
										else
											for (var p = 0; p < l.length; p++)
												if (l[p].x != r[c][p].x || l[p].y != r[c][p].y) {
													u = !0;
													break
												} if (u)
											for (o[i][c] = [], p = 0; p < l.length; p++) {
												var h = {};
												h.x = l[p].x, h.y = l[p].y, o[i][c].push(h)
											}
									} else {
										if ("width" == c || "height" == c) {
											if (!t.controlSize) continue
										} else if ("opacity" == c && !t.controlOpacity) continue;
										s[c] != r[c] && (o[i][c] = s[c])
									} else {
										if (!t.controlSpriteFrame) continue;
										if (s[c]) {
											var f = {};
											f.uuid = s[c]._uuid, f.bundle = Editor.remote.assetdb
												.uuidToUrl(s[c]._uuid), f.bundle = f.bundle.replace(
													"db://assets/", ""), f.bundle = f.bundle.substring(
													0, f.bundle.indexOf("/")), o[i][c] = f
										}
									}
								}
							}
							var d = JSON.parse(t.ui_config);
							d[this._stateIndex] = o, t.ui_config = JSON.stringify(d)
						}
					}, t.prototype.setChildrenProp = function(e) {
						var t = e.getComponent(a.default);
						if (t) {
							var o = JSON.parse(t.ui_config);
							if (o[this._stateIndex]) {
								var i = o[this._stateIndex];
								for (var s in n.inheritedAttrList) {
									var r = e.getComponent(s);
									if ("cc.Node" == s) {
										r = e;
										var c = e.getComponent(cc.Widget);
										for (var u in c && e.removeComponent(c), n.inheritedAttrList[s])
											if ("color" != u) {
												if ("active" == u) {
													if (!t.controlActive) continue
												} else if ("width" == u || "height" == u) {
													if (!t.controlSize) continue
												} else if ("opacity" == u && !t.controlOpacity)
											continue;
												L = i && null != i[s] && null != i[s][u] ? i[s][u] : n
													.inheritedAttrList[s][u], r[u] != L && (r[u] = L)
											} else {
												var l;
												l = i && null != i[s] && null != i[s][u] ? i[s][u] : n
													.inheritedAttrList[s][u], r[u].r == l.r && r[u].g ==
													l.g && r[u].b == l.b || (r[u] = cc.color(l.r, l.g, l
														.b))
											}
									} else if ("cc.Widget" != s) {
										if (!r) continue;
										for (var p in n.inheritedAttrList[s])
											if ("spriteFrame" == p) {
												if (!t.controlSpriteFrame) continue;
												if (!i || !i[s]) continue;
												var h, f = i[s][p];
												if (!f) continue;
												window.Editor ? (h = "string" != typeof f ? f.uuid : f,
													this.isExistFileByUuid(h) && Editor.Ipc
													.sendToPanel("scene", "scene:set-property", {
														id: r.uuid,
														path: "spriteFrame",
														type: "cc.SpriteFrame",
														value: {
															uuid: h
														},
														isSubProp: !1
													})) : this.changeSpriteFrame(r, f)
											} else if ("offset" == p) {
											var d;
											d = i && null != i[s] && null != i[s][p] ? i[s][p] : n
												.inheritedAttrList[s][p], r[p].x == d.x && r[p].y == d
												.y || (r[p] = cc.v2(d.x, d.y))
										} else if ("size" == p) {
											var g;
											g = i && null != i[s] && null != i[s][p] ? i[s][p] : n
												.inheritedAttrList[s][p], r[p].width == g.width && r[p]
												.height == g.height || (r[p] = cc.size(g.width, g
													.height))
										} else if ("points" == p) {
											var _, m = !1;
											if ((_ = i && null != i[s] && null != i[s][p] ? i[s][p] : n
													.inheritedAttrList[s][p]).length != r[p].length)
												m = !0;
											else
												for (var y = 0; y < _.length; y++)
													if (r[p][y].x != _[y].x || r[p][y].y != _[y].y) {
														m = !0;
														break
													} if (m) {
												var v = [];
												for (y = 0; y < _.length; y++) v.push(cc.v2(_[y].x, _[y]
													.y));
												r[p] = v
											}
										} else {
											var L;
											L = i && null != i[s] && null != i[s][p] ? i[s][p] : n
												.inheritedAttrList[s][p], r[p] != L && (r[p] = L)
										}
										"cc.Layout" == s && r.enabled && (window.Editor || r
											.updateLayout(), this.resetLayoutChildPosition(e))
									} else null != i[s] && this.delaySetWidget(e, i)
								}
							}
						}
						if (e.childrenCount > 0) {
							var b = e.children;
							for (y = 0; y < b.length; y++) this.setChildrenProp(b[y])
						}
					}, t.prototype.changeSpriteFrame = function(e, t) {
						var n, o;
						if ("string" != typeof t ? (n = t.uuid, o = t.bundle) : n = t, o) {
							var i = cc.assetManager.getBundle(o);
							if (i) {
								var s = cc.assetManager.getBundle(o + "_assets");
								s && s._config.assetInfos._map[n] && (i = s, o += "_assets");
								var a = i._config.assetInfos._map[n].path;
								a && (e.spriteFrame = null, r.ResLoader.getInstance().loadRes(a, cc
									.SpriteFrame,
									function(t, n) {
										t || (e.spriteFrame = n)
									}, o, "configkey"))
							}
						}
					}, t.prototype.delaySetWidget = function(e, t) {
						setTimeout(function() {
							var o = e.addComponent(cc.Widget),
								i = "cc.Widget";
							for (var s in o.enabled = !1, n.inheritedAttrList[i]) {
								var r;
								r = t && null != t[i] && null != t[i][s] ? t[i][s] : n
									.inheritedAttrList[i][s], o[s] != r && (o[s] = r)
							}!window.Editor && o.enabled && o.updateAlignment()
						}, 30)
					}, t.prototype.resetLayoutChildPosition = function(e) {
						var t = e.getComponent(cc.Layout);
						if (t.type == cc.Layout.Type.HORIZONTAL || t.type == cc.Layout.Type.VERTICAL)
							for (var n = 0; n < e.childrenCount; n++) {
								var o = e.children[n];
								t.type == cc.Layout.Type.HORIZONTAL ? o.y = 0 : t.type == cc.Layout.Type
									.VERTICAL && (o.x = 0)
							}
					}, t.prototype.updateConfig = function() {
						this.readChildrenProp(this.node)
					}, t.prototype.updateLayout = function() {
						this.setChildrenProp(this.node)
					}, t.prototype.isExistFileByUuid = function(e) {
						var t, n = Editor.remote.assetdb.uuidToFspath(e);
						if (!n) return !1;
						var o = n.lastIndexOf(".");
						if (-1 != o) {
							var i = n.indexOf("/", o);
							t = -1 != i ? n.substr(0, i) : n
						}
						return !!t && Editor.remote.assetdb.existsByPath(t)
					}, t.inheritedAttrList = {
						"cc.Node": {
							x: 0,
							y: 0,
							scaleX: 1,
							scaleY: 1,
							anchorX: .5,
							anchorY: .5,
							width: 100,
							height: 100,
							active: !0,
							opacity: 255,
							color: {
								r: 255,
								g: 255,
								b: 255
							},
							angle: 0
						},
						"cc.Label": {
							enabled: !0,
							horizontalAlign: 1,
							verticalAlign: 1,
							overflow: 0,
							fontSize: 40
						},
						"cc.Widget": {
							isAlignBottom: !0,
							isAlignLeft: !0,
							isAlignRight: !0,
							isAlignTop: !0,
							isAlignHorizontalCenter: !1,
							isAlignVerticalCenter: !1,
							_isAbsBottom: !0,
							_isAbsHorizontalCenter: !0,
							_isAbsLeft: !0,
							_isAbsRight: !0,
							_isAbsTop: !0,
							_isAbsVerticalCenter: !0,
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							horizontalCenter: 0,
							verticalCenter: 0,
							enabled: !0
						},
						"cc.Sprite": {
							enabled: !0,
							spriteFrame: {}
						},
						"cc.Layout": {
							enabled: !0,
							type: 0,
							resizeMode: 0,
							paddingBottom: 0,
							paddingLeft: 0,
							paddingRight: 0,
							paddingTop: 0,
							spacingX: 0,
							spacingY: 0,
							horizontalDirection: 0,
							verticalDirection: 1,
							startAxis: 0,
							affectedByScale: !1
						},
						"cc.ScrollView": {
							enabled: !0,
							horizontal: !1,
							vertical: !0,
							inertia: !0,
							brake: .75,
							elastic: !0,
							bounceDuration: .23
						},
						"cc.BoxCollider": {
							enabled: !0,
							tag: 0,
							offset: {
								x: 0,
								y: 0
							},
							size: {
								width: 100,
								height: 100
							}
						},
						"cc.CircleCollider": {
							enabled: !0,
							tag: 0,
							offset: {
								x: 0,
								y: 0
							},
							radius: 100
						},
						"cc.PolygonCollider": {
							enabled: !0,
							threshold: 1,
							tag: 0,
							offset: {
								x: 0,
								y: 0
							},
							points: [{
								x: -50,
								y: -50
							}, {
								x: 50,
								y: -50
							}, {
								x: 50,
								y: 50
							}, {
								x: -50,
								y: 50
							}]
						}
					}, s([l({
						tooltip: "\u7f16\u8f91\u597d\u9875\u9762\u4e4b\u540e\uff0c\u624b\u52a8\u52fe\u9009\u4e00\u4e0b\u4fdd\u5b58\u914d\u7f6e\uff0c\u4fdd\u5b58\u5b8c\u6bd5\u4f1a\u81ea\u52a8\u53d6\u6d88\u52fe\u9009"
					})], t.prototype, "saveConfig", null), s([l], t.prototype, "_stateIndex", void 0),
					s([l({
						tooltip: "\u9009\u62e9\u63a7\u5236\u5668ID",
						type: cc.Enum({
							0: 0,
							1: 1,
							2: 2,
							3: 3,
							4: 4,
							5: 5,
							6: 6,
							7: 7,
							8: 8,
							9: 9
						})
					})], t.prototype, "stateIndex", null), n = s([u, p], t)
			}(cc.Component);
		n.default = h, cc._RF.pop()
	}, {
		"../res/ResLoader": "ResLoader",
		"./NodeUiConfig": "NodeUiConfig"
	}],
	NetInterface: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d9f8b+CV69FyKwnUdCjOtad", "NetInterface"), Object.defineProperty(n,
			"__esModule", {
				value: !0
			}), n.DefStringProtocol = void 0;
		var o = function() {
			function e() {}
			return e.prototype.getHeadlen = function() {
				return 0
			}, e.prototype.getHearbeat = function() {
				return ""
			}, e.prototype.getPackageLen = function(e) {
				return e.toString().length
			}, e.prototype.checkPackage = function() {
				return !0
			}, e.prototype.getPackageId = function() {
				return [0, 0]
			}, e.prototype.getBuffData = function() {
				return null
			}, e
		}();
		n.DefStringProtocol = o, cc._RF.pop()
	}, {}],
	NetManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "d8cd5el6GBGTYTW+N8b8EuJ", "NetManager"), Object.defineProperty(n,
		"__esModule", {
			value: !0
		}), n.NetManager = void 0;
		var o = e("./NetNode"),
			i = function() {
				function e() {
					this._channels = {}
				}
				return e.getInstance = function() {
					return null == this._instance && (this._instance = new e), this._instance
				}, e.prototype.setNetNode = function(e, t) {
					void 0 === t && (t = 0), this._channels[t] = e
				}, e.prototype.removeNetNode = function(e) {
					delete this._channels[e]
				}, e.prototype.connect = function(e, t) {
					return void 0 === t && (t = 0), !!this._channels[t] && this._channels[t]
						.connect(e)
				}, e.prototype.send = function(e, t, n, o) {
					void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === o && (o = 0);
					var i = this._channels[o];
					return !!i && i.send(e, t, n)
				}, e.prototype.request = function(e, t, n, o, i, s, r) {
					void 0 === o && (o = !1), void 0 === i && (i = !0), void 0 === s && (s = !1),
						void 0 === r && (r = 0);
					var a = this._channels[r];
					a && a.request(e, t, n, o, i, s)
				}, e.prototype.requestUnique = function(e, t, n, o, i, s, r) {
					void 0 === o && (o = !1), void 0 === i && (i = !0), void 0 === s && (s = !1),
						void 0 === r && (r = 0);
					var a = this._channels[r];
					return !!a && a.requestUnique(e, t, n, o, i, s)
				}, e.prototype.close = function(e, t, n) {
					if (void 0 === n && (n = 0), this._channels[n]) return this._channels[n]
						.closeSocket(e, t)
				}, e.prototype.getNetNode = function(e) {
					return void 0 === e && (e = 0), this._channels[e] || (console.warn(
						"not found this channel sockect ", e), null)
				}, e.prototype.getState = function(e) {
					void 0 === e && (e = 0);
					var t = this._channels[e];
					return t ? t.getState() : (console.warn("not found this channel sockect ", e), o
						.NetNodeState.Closed)
				}, e.prototype.socketIsClose = function(e) {
					void 0 === e && (e = 0);
					var t = this._channels[e];
					return t ? t.isSocketClose() : (console.warn("not found this channel sockect ",
						e), !0)
				}, e._instance = null, e
			}();
		n.NetManager = i, cc._RF.pop()
	}, {
		"./NetNode": "NetNode"
	}],
	NetNode: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "57f0fB90kNBUJ98yyu+jxjx", "NetNode"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.NetNode = n.NetNodeState = n.NetTipsType = void 0;
		var o, i, s = e("../const/Const"),
			r = e("../event/EventManager"),
			a = e("../log/LogManager"),
			c = e("../log/zLog");
		(function(e) {
			e[e.Connecting = 0] = "Connecting", e[e.ReConnecting = 1] = "ReConnecting", e[e
				.Requesting = 2] = "Requesting"
		})(o = n.NetTipsType || (n.NetTipsType = {})),
		function(e) {
			e[e.Closed = 0] = "Closed", e[e.Connecting = 1] = "Connecting", e[e.Checking = 2] =
				"Checking", e[e.Working = 3] = "Working"
		}(i = n.NetNodeState || (n.NetNodeState = {}));
		var u = function() {
			function e() {
				this._connectOptions = null, this._autoReconnect = 3, this._isSocketInit = !1, this
					._isSocketOpen = !1, this._state = i.Closed, this._socket = null, this
					._closeCode = 0, this._networkTips = null, this._protocolHelper = null, this
					._disconnectCallback = null, this._callbackExecuter = null, this
					._keepAliveTimer = null, this._receiveMsgTimer = null, this._reconnectTimer =
					null, this._heartTime = 3e3, this._receiveTime = 6e6, this._reconnetTimeOut =
					1e4, this._requests = Array(), this._listener = {}, this._urls = [], this
					._curUrlIndex = -1, this._isUrlEffect = !1, this._heartBeatReqFunc = null
			}
			return e.prototype.init = function(e, t, n, o) {
				void 0 === n && (n = null), void 0 === o && (o = null), a.LogManager
					.getInstance().console("NetNode init socket"), this._socket = e, this
					._protocolHelper = t, this._networkTips = n, this._callbackExecuter = o ||
					function(e, t) {
						e.callback.call(e.target, t)
					}
			}, e.prototype.setUrls = function(e) {
				this._urls = e
			}, e.prototype.getUrls = function() {
				return this._urls
			}, e.prototype.nextUrl = function() {
				var e = null,
					t = this._urls.length - 1;
				return t >= 0 && this._curUrlIndex >= 0 && (this._isUrlEffect || (++this
						._curUrlIndex, this._curUrlIndex > t && (this._curUrlIndex = 0)),
					e = this._urls[this._curUrlIndex]), e
			}, e.prototype.connect = function(e) {
				if (e) return this._closeCode = 0, !(!this._socket || this._state != i.Closed ||
					(this._urls.length > 0 && (this._isUrlEffect = !1, this
							._curUrlIndex = this._urls.indexOf(e.url)), this
						._isSocketInit || this.initSocket(), c.zLog.info(
							"Start connect socket :" + e.url), this._state = i
						.Connecting, !this._socket.connect(e) || (this._connectOptions =
							e, this.updateNetTips(o.Connecting, !0), 0)));
				c.zLog.info("Socket ip invalid")
			}, e.prototype.initSocket = function() {
				var e = this;
				this._socket.onConnected = function(t) {
					e.onConnected(t)
				}, this._socket.onMessage = function(t) {
					e.onMessage(t)
				}, this._socket.onError = function(t) {
					e.onError(t)
				}, this._socket.onClosed = function(t) {
					e.onClosed(t)
				}, this._isSocketInit = !0
			}, e.prototype.updateNetTips = function(e, t) {
				this._networkTips && (e == o.Requesting ? this._networkTips.requestTips(t) :
					e == o.Connecting ? this._networkTips.connectTips(t) : e == o
					.ReConnecting && this._networkTips.reconnectTips(t))
			}, e.prototype.onConnected = function() {
				r.EventManager.getInstance().raiseEvent(s.default.mess_netconnected), c.zLog
					.info("NetNode onConnected! state = " + this._state), this.clearTimer(),
					this._isSocketOpen = !0, this._isUrlEffect = !0, this.onChecked(), this
					._connectedCallback && this._connectedCallback()
			}, e.prototype.onChecked = function() {
				if (a.LogManager.getInstance().console("NetNode onChecked!"), this._state = i
					.Working, this.resetAutoReconnect(), this.updateNetTips(o.Connecting, !1),
					this.updateNetTips(o.ReConnecting, !1), a.LogManager.getInstance().console(
						"NetNode flush " + this._requests.length + " request"), this._requests
					.length > 0) {
					for (var e = 0; e < this._requests.length;) {
						var t = this._requests[e];
						t.resend && this._socket.send(t.buffer), null == t.rspObject || t
							.rspCmd <= 0 ? this._requests.splice(e, 1) : ++e
					}
					this.updateNetTips(o.Requesting, this.request.length > 0)
				}
				this.startHeartBeat()
			}, e.prototype.onMessage = function(e) {
                console.log("onMessage2...................");
				if (this._protocolHelper.checkPackage(e)) {
                    this.resetReceiveMsgTimer();
					var t = this._protocolHelper.getPackageId(e),
                    n = this.responCmdTransform(t);
					if (this._requests.length > 0) {
						for (var i in this._requests) {
							var s = this._requests[i];
							if (s.rspCmd == n) {
								this._callbackExecuter(s.rspObject, e), this._requests.splice(
									parseInt(i), 1);
								break
							}
						}
						0 == this._requests.length && this.updateNetTips(o.Requesting, !1)
					}
					var r = this._listener[n];
					if (null != r)
						for (var a = 0, c = r; a < c.length; a++) {
							var u = c[a];
							this._callbackExecuter(u, e)
						}
				} else console.error("NetNode checkHead Error")
			}, e.prototype.onError = function(e) {
				c.zLog.info("Connect server error : " + e), this.onClosed(e)
			}, e.prototype.closeReasonHandle = function(e) {
				var t = (new TextEncoder).encode(e),
					n = t.length;
				n <= 5 && (n = 6);
				for (var o = new ArrayBuffer(n), i = new Uint8Array(o), s = 0; s < n; s++) i[
					s] = t[s] ? t[s] : 0;
				return o
			}, e.prototype.onClosed = function(e) {
				if (this.clearTimer(), c.zLog.info("netnode onClosed  ", e), r.EventManager
					.getInstance().raiseEvent(s.default.mess_netclose), !this
					._disconnectCallback || this._disconnectCallback())
					if (this.isAutoReconnect()) {
						this.updateNetTips(o.ReConnecting, !0);
						var t = this.nextUrl();
						t && (this._connectOptions.url = t), this.reconnect()
					} else this.closeTips();
				else c.zLog.info("disconnect return!")
			}, e.prototype.closeTips = function() {
				var e = this;
				this._state = i.Closed, 10011 !== this._closeCode && setTimeout(function() {
					e._networkTips.netCloseTips(!0, e, e._closeCode)
				}, 1e3)
			}, e.prototype.reconnect = function() {
				var e = this;
				c.zLog.info("Netnode reconnect..."), this._socket.close(), this._state = i
					.Closed, this.connect(this._connectOptions), this._autoReconnect > 0 && this
					._autoReconnect--, clearTimeout(this._reconnectTimer), this
					._reconnectTimer = setTimeout(function() {
						e._state == i.Connecting && (e._autoReconnect = 0, e._socket
						.close(), e._state = i.Closed, e.clearTimer(), e.updateNetTips(o
								.Connecting, !1), e._networkTips.netCloseTips(!0, e, e
								._closeCode))
					}, this._reconnetTimeOut)
			}, e.prototype.close = function(e, t) {
				a.logMgr.warn("netnode close  ", e, t), this.clearTimer(), this.updateNetTips(o
						.ReConnecting, !0), r.EventManager.getInstance().raiseEvent(s.default
						.mess_netclose), this._requests.length = 0, this._networkTips && (this
						._networkTips.connectTips(!1), this._networkTips.reconnectTips(!1), this
						._networkTips.requestTips(!1)), this._socket ? e && t ? this._socket
					.close(e, t) : this._socket.close() : (a.logMgr.warn("netnode close1  "),
						this._state = i.Closed)
			}, e.prototype.closeSocket = function() {
				this.onClosed(null)
			}, e.prototype.send = function(e, t, n) {
				return void 0 === t && (t = !1), void 0 === n && (n = !1), this._state == i
					.Working || n ? this._socket.send(e) : this._state == i.Checking || this
					._state == i.Connecting ? (this._requests.push({
						resend: t,
						buffer: e,
						rqestCmd: 0,
						rspCmd: 0,
						rspObject: null
					}), a.LogManager.getInstance().console(
						"NetNode socket is busy, push to send buffer, current state is " +
						this._state), !0) : (console.error(
						"NetNode request error! current state is " + this._state), !1)
			}, e.prototype.request = function(e, t, n, s, r, a) {
				void 0 === s && (s = !1), void 0 === r && (r = !0), void 0 === a && (a = !1), (
					this._state == i.Working || a) && this._socket.send(e);
				var c = this.responCmdTransform(t),
					u = this.requestCmdTransform(t);
				this._requests.push({
					resend: s,
					buffer: e,
					rqestCmd: u,
					rspCmd: c,
					rspObject: n
				}), r && this.updateNetTips(o.Requesting, !0)
			}, e.prototype.requestUnique = function(e, t, n, o, i, s) {
				void 0 === o && (o = !1), void 0 === i && (i = !0), void 0 === s && (s = !1);
				for (var r = this.responCmdTransform(t), c = 0; c < this._requests.length; ++c)
					if (this._requests[c].rspCmd == r) return a.LogManager.getInstance()
						.console("NetNode requestUnique faile for " + t), !1;
				return this.request(e, t, n, o, i, s), !0
			}, e.prototype.setConectCallback = function(e) {
				this._connectedCallback = e
			}, e.prototype.setDisconnectCallback = function(e) {
				this._disconnectCallback = e
			}, e.prototype.getProtoHelper = function() {
				return this._protocolHelper
			}, e.prototype.responCmdTransform = function(e) {
				return "object" == typeof e ? 1e4 * e[0] + e[1] : e
			}, e.prototype.requestCmdTransform = function(e) {
				return e[2] ? "object" == typeof e ? 1e4 * e[0] + e[2] : e : 0
			}, e.prototype.setResponeHandler = function(e, t, n) {
				if (null == t) return console.error("NetNode setResponeHandler error " + e +
					" "), !1;
				var o = this.responCmdTransform(e);
				return this._listener[o] = [{
					target: n,
					callback: t
				}], !0
			}, e.prototype.addResponeHandler = function(e, t, n) {
				if (null == t) return console.error("NetNode addResponeHandler error " + e), !1;
				var o = this.responCmdTransform(e),
					i = {
						target: n,
						callback: t
					};
				return null == this._listener[o] ? this._listener[o] = [i] : -1 == this
					.getNetListenersIndex(o, i) && this._listener[o].push(i), !0
			}, e.prototype.removeResponeHandler = function(e, t, n) {
				var o = this.responCmdTransform(e);
				if (null != this._listener[o] && null != t) {
					var i = this.getNetListenersIndex(o, {
						target: n,
						callback: t
					}); - 1 != i && this._listener[o].splice(i, 1)
				}
			}, e.prototype.cleanListeners = function(e) {
				void 0 === e && (e = -1);
				var t = this.responCmdTransform(e); - 1 == t ? this._listener = {} : this
					._listener[t] = null
			}, e.prototype.getNetListenersIndex = function(e, t) {
				for (var n = this.responCmdTransform(e), o = -1, i = 0; i < this._listener[n]
					.length; i++) {
					var s = this._listener[n][i];
					if (s.callback == t.callback && s.target == t.target) {
						o = i;
						break
					}
				}
				return o
			}, e.prototype.resetReceiveMsgTimer = function() {
				var e = this;
				clearTimeout(this._receiveMsgTimer), this._receiveMsgTimer = setTimeout(
					function() {
						e._socket.close()
					}, this._receiveTime)
			}, e.prototype.startHeartBeat = function() {
				var e = this;
				this._heartBeatReqFunc && this._heartBeatReqFunc(), clearTimeout(this
					._keepAliveTimer), this._keepAliveTimer = setTimeout(function() {
					e.startHeartBeat()
				}, this._heartTime)
			}, e.prototype.setHeartBeatReqFunc = function(e) {
				this._heartBeatReqFunc = e
			}, e.prototype.clearTimer = function() {
				clearTimeout(this._receiveMsgTimer), clearTimeout(this._keepAliveTimer),
					clearTimeout(this._reconnectTimer)
			}, e.prototype.isAutoReconnect = function() {
				return 0 != this._autoReconnect
			}, e.prototype.rejectReconnect = function(e) {
				this._autoReconnect = 0, this.clearTimer(), this.setCloseErrorCode(e || 0)
			}, e.prototype.resetAutoReconnect = function() {
				this._autoReconnect = 3
			}, e.prototype.clearNotRespMess = function(e, t) {
				var n = this.requestCmdTransform([e, 0, t]);
				for (var o in this._requests)
					if (this._requests[o].rqestCmd == n) {
						this._requests.splice(parseInt(o), 1);
						break
					}
			}, e.prototype.getState = function() {
				return this._state
			}, e.prototype.setCloseErrorCode = function(e) {
				this._closeCode = e
			}, e.prototype.isSocketClose = function() {
				return !(!this._socket || this._state != i.Closed)
			}, e
		}();
		n.NetNode = u, cc._RF.pop()
	}, {
		"../const/Const": "Const",
		"../event/EventManager": "EventManager",
		"../log/LogManager": "LogManager",
		"../log/zLog": "zLog"
	}],
	NodePool: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "9a993LhKwdEQpcFiDD5Fmle", "NodePool");
		var o = this && this.__decorate || function(e, t, n, o) {
			var i, s = arguments.length,
				r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
				.decorate(e, t, n, o);
			else
				for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
					t, n, r) : i(t, n)) || r);
			return s > 3 && r && Object.defineProperty(t, n, r), r
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = e("./ResLoader"),
			s = cc._decorator,
			r = s.ccclass,
			a = (s.property, function() {
				function e() {
					this._isReady = !1, this._createCount = 0, this._warterMark = 10, this._res =
						null, this._bundleName = null, this._nodes = new Array, this
						._resIsPrefab = !1
				}
				return e.prototype.isReady = function() {
					return this._isReady
				}, e.prototype.init = function(e, t, n) {
					var o = this;
					this._bundleName = n, "string" == typeof e ? i.resLoader.loadRes(e, cc
						.Prefab,
						function(e, n) {
							e || (o._res = n, o._isReady = !0), t && t(e, o)
						}, this._bundleName, "@NodePool") : !this._res && cc.isValid(e) && (
						this._resIsPrefab = !0, e.addRef(), this._res = e, this._isReady = !
						0, t && t(null, this))
				}, e.prototype.getNode = function() {
					return this.isReady ? this._nodes.length > 0 ? this._nodes.pop() : (this
						._createCount++, cc.instantiate(this._res)) : null
				}, e.prototype.freeNode = function(e) {
					if (!e || !cc.isValid(e)) return cc.error(
							"[ERROR] PrefabPool: freePrefab: isValid node"), void this
						._createCount--;
					this._warterMark < this._nodes.length ? (this._createCount--, e.destroy()) :
						(e.removeFromParent(!0), e.cleanup(), this._nodes.push(e))
				}, e.prototype.setWaterMark = function(e) {
					this._warterMark = e
				}, e.prototype.isUnuse = function() {
					return this._nodes.length > this._createCount && cc.error(
							"PrefabPool: _nodes.length > _createCount"), this._nodes.length ==
						this._createCount
				}, e.prototype.destory = function() {
					for (var e = 0, t = this._nodes; e < t.length; e++) t[e].destroy();
					this._createCount -= this._nodes.length, this._nodes.length = 0, this
						._resIsPrefab ? this._res.addRef() : i.resLoader.releaseAsset(this._res,
							"@NodePool")
				}, o([r], e)
			}());
		n.default = a, cc._RF.pop()
	}, {
		"./ResLoader": "ResLoader"
	}],
	NodeUiConfig: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f5bf4XTd1xBmrczZfZmW2PD", "NodeUiConfig");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = cc._decorator,
			a = r.ccclass,
			c = r.property,
			u = function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.controlActive = !1, t.controlSpriteFrame = !0, t.controlSize = !0, t
						.controlOpacity = !0, t.ui_config = "{}", t
				}
				return i(t, e), s([c({
					tooltip: "\u662f\u5426\u8bb0\u5f55node\u8282\u70b9\u7684active\u5c5e\u6027\uff0c\u9ed8\u8ba4\u4e0d\u52fe\u9009\uff0c\u9700\u8981\u63a7\u5236\u624b\u52a8\u52fe\u9009"
				})], t.prototype, "controlActive", void 0), s([c({
					tooltip: "\u662f\u5426\u8bb0\u5f55sprite\u7ec4\u4ef6\u7684spriteFrame\u5c5e\u6027\uff0c\u9ed8\u8ba4\u52fe\u9009\uff0c\u9700\u8981\u53e6\u5916\u63a7\u5236(\u4f8b\u5982\u591a\u8bed\u8a00)\u624b\u52a8\u53bb\u9664\u52fe\u9009"
				})], t.prototype, "controlSpriteFrame", void 0), s([c({
					tooltip: "\u662f\u5426\u8bb0\u5f55node\u7684size\uff0c\u9ed8\u8ba4\u52fe\u9009\uff0c\u4e0d\u9700\u8981\u63a7\u5236(\u4f8b\u5982\u591a\u8bed\u8a00)\u624b\u52a8\u53bb\u9664\u52fe\u9009"
				})], t.prototype, "controlSize", void 0), s([c({
					tooltip: "\u662f\u5426\u8bb0\u5f55node\u7684opacity\uff0c\u9ed8\u8ba4\u52fe\u9009\uff0c\u4e0d\u9700\u8981\u63a7\u5236\u624b\u52a8\u53bb\u9664\u52fe\u9009"
				})], t.prototype, "controlOpacity", void 0), s([c({
					tooltip: "\u81ea\u52a8\u751f\u6210\u7684\u914d\u7f6e",
					readonly: !0
				})], t.prototype, "ui_config", void 0), s([a], t)
			}(cc.Component);
		n.default = u, cc._RF.pop()
	}, {}],
	NodeUtils: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "b18479ChwVB0o5ipe6Vm4u8", "NodeUtils"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.NodeUtils = void 0;
		var o = 2 * Math.PI / 360,
			i = function() {
				function e() {}
				return e.getRotatePoint = function(e, t, n) {
					var i = cc.v2(),
						s = -t * o;
					return i.x = (e.x - n.x) * Math.cos(s) - (e.y - n.y) * Math.sin(s) + n.x, i.y =
						(e.x - n.x) * Math.sin(s) + (e.y - n.y) * Math.cos(s) + n.y, i
				}, e.getRectRotatePoints = function(t, n, o) {
					return [cc.v2(t.x, t.y), cc.v2(t.x + t.width, t.y), cc.v2(t.x + t.width, t.y + t
						.height), cc.v2(t.x, t.y + t.height)].map(function(t) {
						return e.getRotatePoint(t, n, o)
					})
				}, e.getHTMLElementPosition = function(e) {
					var t = document.documentElement,
						n = window.pageXOffset - t.clientLeft,
						o = window.pageYOffset - t.clientTop;
					if ("function" == typeof e.getBoundingClientRect) {
						var i = e.getBoundingClientRect();
						return {
							left: i.left + n,
							top: i.top + o,
							width: i.width,
							height: i.height
						}
					}
					return e instanceof HTMLCanvasElement ? {
						left: n,
						top: o,
						width: e.width,
						height: e.height
					} : {
						left: n,
						top: o,
						width: parseInt(e.style.width),
						height: parseInt(e.style.height)
					}
				}, e.convertToHtmlSpaceAR = function(t, n) {
					var o = null;
					if (cc.sys.isBrowser) {
						var i = document.getElementById("GameCanvas");
						o = e.getHTMLElementPosition(i)
					} else(o = cc.view.getFrameSize()).left = 0, o.top = 0;
					var s = cc.view.getViewportRect(),
						r = cc.view.getScaleX(),
						a = cc.view.getScaleY(),
						c = cc.view.getDevicePixelRatio(),
						u = (t * r + s.x) / c + o.left,
						l = o.top + o.height - (n * a + s.y) / c;
					return {
						pt: cc.v2(u, l),
						rect: o
					}
				}, e.simulation_click = function(t, n, o) {
					var i = window._cc ? window._cc.inputManager : cc.internal.inputManager,
						s = e.convertToHtmlSpaceAR(t, n),
						r = s.pt,
						a = s.rect;
					console.log("\u6a21\u62df\u70b9\u51fb\u5750\u6807\uff1a" + r.x + ", " + r.y);
					var c = i.getTouchByXY(r.x, r.y, a);
					i.handleTouchesBegin([c]), o = o || 200, setTimeout(function() {
						i.handleTouchesEnd([c])
					}, o)
				}, e.simulation_touchMove = function(t, n, o) {
					var i = window._cc ? window._cc.inputManager : cc.internal.inputManager,
						s = e.convertToHtmlSpaceAR(t.x, t.y),
						r = e.convertToHtmlSpaceAR(n.x, n.y),
						a = s.pt,
						c = s.rect,
						u = r.pt,
						l = r.rect;
					console.log("\u6a21\u62df\u6309\u4e0b\u5750\u6807\uff1a" + a.x + ", " + a.y);
					var p = i.getTouchByXY(a.x, a.y, c),
						h = i.getTouchByXY(u.x, u.y, l);
					i.handleTouchesBegin([p]), o = o || 400, setTimeout(function() {
						console.log("\u6a21\u62df\u62ac\u8d77\u5750\u6807\uff1a" + a.x +
							", " + a.y), i.handleTouchesEnd([h])
					}, o)
				}, e.simulation_clickNode = function(t, n) {
					console.log("\u81ea\u52a8\u6267\u884c\uff0c\u6a21\u62df\u70b9\u51fb"), console
						.log("\u81ea\u52a8\u8282\u70b9 :", JSON.stringify(t.position));
					var o = t.parent.convertToWorldSpaceAR(t.position);
					console.log("\u4e16\u754c\u8282\u70b9 :", JSON.stringify(o)), e
						.simulation_click(o.x, o.y, n)
				}, e
			}();
		n.NodeUtils = i, cc._RF.pop()
	}, {}],
	ObjectPool: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "ada55Lq+3pNRo76wd0g4yJX", "ObjectPool"), Object.defineProperty(n,
		"__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return e.put = function(t, n) {
				e._list[t] || (e._list[t] = []), e._list[t].push(n)
			}, e.get = function(t) {
				if (e._list[t]) {
					var n = e._list[t];
					if (n.length > 0) return n.shift()
				}
				return null
			}, e.clear = function(t) {
				e._list[t] && (e._list[t] = void 0, delete e._list[t])
			}, e.clearAll = function() {
				for (var t in e._list) e._list[t] = void 0, delete e._list[t]
			}, e._list = {}, e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	PageHideShow: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "39fdagIjytEHatN4Tj8FhG4", "PageHideShow"), Object.defineProperty(n,
			"__esModule", {
				value: !0
			});
		var o = e("../const/Const"),
			i = e("../event/EventManager"),
			s = e("../log/LogManager"),
			r = function() {
				function e() {
					if (this.comeinOnce = !1, this.pageShow = !0, this.setimeId = 0, e.instance)
					throw new Error("this is singleton,use getInstance()")
				}
				return e.getInstance = function() {
					return this.instance || (this.instance = new e), this.instance
				}, e.prototype.Init = function() {
					cc.game.on(cc.game.EVENT_HIDE, this.PauseCallBack, this), cc.game.on(cc.game
						.EVENT_SHOW, this.RestoreCallBack, this)
				}, e.prototype.onDisable = function() {
					cc.game.off(cc.game.EVENT_HIDE, this.PauseCallBack, this), cc.game.off(cc.game
						.EVENT_SHOW, this.RestoreCallBack, this)
				}, e.prototype.PauseCallBack = function() {
					this.comeinOnce || (s.LogManager.getInstance().console(
							"\u5207\u6362\u5230\u540e\u53f0"), this.comeinOnce = !0, this
						.pageShow = !1, cc.sys.isBrowser && cc.sys.os === cc.sys.OS_IOS && cc
						.sys.__audioSupport.context.suspend(), i.EventManager.getInstance()
						.raiseEvent(o.default.mess_pageHideShow, !1))
				}, e.prototype.RestoreCallBack = function() {
					this.comeinOnce && (s.LogManager.getInstance().console(
							"\u5207\u6362\u5230\u524d\u53f0"), this.comeinOnce = !1, this
						.pageShow = !0, cc.sys.isBrowser && cc.sys.os === cc.sys.OS_IOS && cc
						.sys.__audioSupport.context.resume(), i.EventManager.getInstance()
						.raiseEvent(o.default.mess_pageHideShow, !0))
				}, e.prototype.PageIsShow = function() {
					return this.pageShow
				}, e.instance = null, e
			}();
		n.default = r, cc._RF.pop()
	}, {
		"../const/Const": "Const",
		"../event/EventManager": "EventManager",
		"../log/LogManager": "LogManager"
	}],
	RedefineLabel: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "64e0fJ/RNVLha0UBqfty+ym", "RedefineLabel");
		var o, i = this && this.__extends || (o = function(e, t) {
			return (o = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
						t[n])
				})(e, t)
		}, function(e, t) {
			function n() {
				this.constructor = e
			}
			o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
				new n)
		});
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var s = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return i(t, e), t.prototype.onLoad = function() {
				e.prototype.onLoad && e.prototype.onLoad.call(this), this.init()
			}, t.prototype.init = function() {
				var e = Object.getOwnPropertyDescriptor(cc.Label.prototype, "string"),
					n = e.set;
				e.set = function(e) {
					e != this._string && t.list.push({
						fun: n.bind(this),
						value: e
					})
				}, Object.defineProperty(cc.Label.prototype, "string", e)
			}, t.prototype.update = function(n) {
				if (e.prototype.update && e.prototype.update.call(this, n), t.list.length) {
					var o = t.list.shift();
					o.fun(o.value)
				}
			}, t.list = [], t
		}(cc.Component);
		n.default = s, cc._RF.pop()
	}, {}],
	ResKeeper: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "bd2c4FIn4JFKrC2AdF4kHbq", "ResKeeper");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e("./ResLoader"),
			a = e("./ResUtils"),
			c = cc._decorator,
			u = c.ccclass,
			l = (c.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._autoResInfo = [], t
				}
				return i(t, e), t.prototype._finishItem = function(e, t) {
					this._cacheItem(e, t) || cc.warn("_cacheItem item error! for uuid = " + e
						._uuid)
				}, t.prototype._cacheItem = function(e, t) {
					if (cc.isValid(e)) {
						var n = {
							asset: e,
							use: t
						};
						return this._autoResInfo.push(n), !0
					}
					return !1
				}, t.prototype.loadRes = function() {
					var e = this,
						t = a.ResUtils.makeLoadResArgs.apply(this, arguments);
					if (t) {
						var n = this.constructor.name;
						if (!t.use) {
							var o = "@" + n;
							t.use = o + r.resLoader.nextUseKey()
						}
						var i = t.onComplete;
						t.onComplete = function(o, s) {
							if (!o)
								if (cc.isValid(e))
									if (s instanceof Array)
										for (var a = 0; a < s.length; ++a) e._finishItem(s[
											a], t.use);
									else e._finishItem(s, t.use);
							else {
								if (s instanceof Array)
									for (a = 0; a < s.length; ++a) r.resLoader.releaseAsset(
										s[a], t.use);
								else r.resLoader.releaseAsset(s, t.use);
								o = new Error(n + " Component ResKeeper inValid"), s =
									void 0
							}
							i && i(o, s)
						}, r.resLoader.loadRes(t)
					}
				}, t.prototype.loadResDir = function() {
					var e = this,
						t = a.ResUtils.makeLoadResArgs.apply(this, arguments);
					if (t) {
						var n = this.constructor.name;
						if (!t.use) {
							var o = "@" + n;
							t.use = o + r.resLoader.nextUseKey()
						}
						var i = t.onComplete;
						t.onComplete = function(o, s) {
							if (!o)
								if (cc.isValid(e))
									if (s instanceof Array)
										for (var a = 0; a < s.length; ++a) e._finishItem(s[
											a], t.use);
									else e._finishItem(s, t.use);
							else {
								if (s instanceof Array)
									for (a = 0; a < s.length; ++a) r.resLoader.releaseAsset(
										s[a], t.use);
								else r.resLoader.releaseAsset(s, t.use);
								o = new Error(n + " Component ResKeeper inValid"), s =
									void 0
							}
							i && i(o, s)
						}, r.resLoader.loadResDir(t)
					}
				}, t.prototype.loadRemote = function() {
					var e = this,
						t = a.ResUtils.makeLoadRemoteArgs.apply(this, arguments);
					if (t) {
						var n = this.constructor.name;
						if (!t.use) {
							var o = "@" + n;
							t.use = o + r.resLoader.nextUseKey()
						}
						var i = t.onComplete;
						t.onComplete = function(o, s) {
							o || (cc.isValid(e) ? e._finishItem(s, t.use) : (r.resLoader
									.releaseAsset(s, t.use), o = new Error(n +
										" Component ResKeeper inValid"), s = void 0)), i &&
								i(o, s)
						}, r.resLoader.loadRemote(t)
					}
				}, t.prototype.onDestroy = function() {
					this.releaseAutoRes()
				}, t.prototype.releaseAutoRes = function() {
					for (var e = 0; e < this._autoResInfo.length; ++e) {
						var t = this._autoResInfo[e];
						r.resLoader.releaseAsset(t.asset, t.use)
					}
					this._autoResInfo.length = 0
				}, t.prototype.addAutoRes = function(e) {
					e && this._finishItem(e.asset, e.use)
				}, s([u], t)
			}(cc.Component));
		n.default = l, cc._RF.pop()
	}, {
		"./ResLoader": "ResLoader",
		"./ResUtils": "ResUtils"
	}],
	ResLeakChecker: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c30e5sV8ORN17YVU4rHAX+j", "ResLeakChecker"), Object.defineProperty(n,
			"__esModule", {
				value: !0
			}), n.resLeakChecker = n.ResLeakChecker = void 0;
		var o = e("../utils/ComUtils"),
			i = function() {
				function e() {
					this.resFilter = null, this._checking = !1, this._log = new Map
				}
				return e.getInstance = function() {
					return this._instance || (this._instance = new e), this._instance
				}, e.prototype.setFilterCallback = function(e) {
					this.resFilter = e
				}, e.prototype.checkFilter = function(e) {
					return !!this._checking && (!this.resFilter || this.resFilter(e))
				}, e.prototype.logLoad = function(e, t, n) {
					if (this.checkFilter(e)) {
						this._log.has(e) || this._log.set(e, new Map);
						var i = this._log.get(e);
						i.has(t) && console.warn("ResLeakChecker doubel same use " + e + " : " + t +
							", stack " + i[t]), i.set(t, n || o.ComUtils.getCallStack(2))
					}
				}, e.prototype.logRelease = function(e, t) {
					if (this.checkFilter(e))
						if (this._log.has(e)) {
							var n = this._log.get(e);
							n.has(t) ? n.delete(t) : console.warn("ResLeakChecker use nofound " +
								e + " : " + t), n.size <= 0 && this._log.delete(e)
						} else console.warn("ResLeakChecker uuid nofound " + e)
				}, e.prototype.startCheck = function() {
					this._checking = !0
				}, e.prototype.stopCheck = function() {
					this._checking = !1
				}, e.prototype.getLog = function() {
					return this._log
				}, e.prototype.resetLog = function() {
					this._log = new Map
				}, e.prototype.dump = function(e) {
					this._log.forEach(function(t, n) {
						var o = cc.assetManager.assets.get(n);
						console.log(o), e ? t.forEach(function(e, t) {
							console.log(t + " : " + e)
						}) : t.forEach(function(e, t) {
							console.log("" + t)
						})
					})
				}, e._instance = null, e
			}();
		n.ResLeakChecker = i, n.resLeakChecker = i.getInstance(), cc._RF.pop()
	}, {
		"../utils/ComUtils": "ComUtils"
	}],
	ResLoader: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f37e3Fv48RCx5eevHUd9s7f", "ResLoader");
		var o = this && this.__decorate || function(e, t, n, o) {
			var i, s = arguments.length,
				r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
				.decorate(e, t, n, o);
			else
				for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
					t, n, r) : i(t, n)) || r);
			return s > 3 && r && Object.defineProperty(t, n, r), r
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.resLoader = n.ResLoader = void 0;
		var i = e("../utils/ComUtils"),
			s = e("./ResLeakChecker"),
			r = e("./ResUtils"),
			a = cc._decorator,
			c = a.ccclass,
			u = (a.property, function() {
				function e() {
					this._usedId = 0, this._resMap = new Map
				}
				var t;
				return t = e, e.getInstance = function() {
					return this._instance || (this._instance = new t), this._instance
				}, e.prototype.destroy = function() {}, e.prototype.dump = function() {
					console.log(this._resMap)
				}, e.prototype.makeUseKey = function(e, t, n) {
					return void 0 === t && (t = "none"), void 0 === n && (n = ""), "use_" + e +
						"_by_" + t + "_for_" + n
				}, e.prototype.nextUseKey = function() {
					return "@" + ++this._usedId
				}, e.prototype.getCacheResInfo = function(e) {
					return this._resMap.get(e)
				}, e.prototype._finishItem = function(e, t, n, o) {
					this._cacheItem(e, t, n, o) || cc.warn("_cacheItem item error! for " + e
						._uuid)
				}, e.prototype._cacheItem = function(e, t, n, o) {
					if (cc.isValid(e) && e._uuid) {
						this._resMap.has(e._uuid) || (this._resMap.set(e._uuid, {
							bundleName: t,
							uses: new Set
						}), e.addRef && e.addRef());
						var i = this.getCacheResInfo(e._uuid);
						return i && n && (i.uses.add(n), s.resLeakChecker.logLoad(e._uuid, n,
							o)), !0
					}
					return !1
				}, e.prototype.addUse = function(e, t) {
					if (this._resMap.has(e)) {
						var n = this._resMap.get(e).uses;
						return n.has(t) ? (console.warn("addUse " + e + " by " + t +
							" faile, repeating use key"), !1) : (n.add(t), s.resLeakChecker
							.logLoad(e, t), !0)
					}
					return console.warn("addUse " + e +
						" faile, key nofound, make sure you load with resloader"), !1
				}, e.prototype.loadRes = function() {
					var e = this,
						t = r.ResUtils.makeLoadResArgs.apply(this, arguments);
					if (t) {
						var n;
						t.bundleName = i.ComUtils.getRealBundle(t.bundleName, t.url || t.urls),
							s.resLeakChecker.checkFilter(t.url) && (n = i.ComUtils.getCallStack(
								1));
						var o = function(o, i) {
								if (o) console.error(o);
								else if (i instanceof Array)
									for (var s = 0; s < i.length; ++s) e._finishItem(i[s], t
										.bundleName, t.use, n);
								else e._finishItem(i, t.bundleName, t.use, n);
								t.onComplete && t.onComplete(o, i)
							},
							a = cc.assetManager.getBundle(t.bundleName);
						cc.isValid(a) ? t.url ? a.load(t.url, t.type, t.onProgress, o) : a.load(
							t.urls, t.type, t.onProgress, o) : console.error(
							"ResLoader.loadRes() - bundle[" + t.bundleName +
							"]\u83b7\u53d6\u5931\u8d25")
					}
				}, e.prototype.preloadRes = function() {
					var e = r.ResUtils.makeLoadResArgs.apply(this, arguments);
					if (e) {
						e.bundleName = i.ComUtils.getRealBundle(e.bundleName, e.url || e.urls);
						var t = cc.assetManager.getBundle(e.bundleName);
						cc.isValid(t) ? e.url ? t.preload(e.url, e.type, e.onProgress, e
							.onComplete) : t.preload(e.urls, e.type, e.onProgress, e
							.onComplete) : console.error(
							"ResLoader.preloadRes() - bundle[" + e.bundleName +
							"]\u83b7\u53d6\u5931\u8d25")
					}
				}, e.prototype.loadResDir = function() {
					var e = this,
						t = r.ResUtils.makeLoadResArgs.apply(this, arguments);
					if (t) {
						var n;
						t.bundleName = i.ComUtils.getRealBundle(t.bundleName, t.url || t.urls),
							s.resLeakChecker.checkFilter(t.url) && (n = i.ComUtils.getCallStack(
								1));
						var o = function(o, i) {
								if (o) console.error(o);
								else if (i instanceof Array)
									for (var s = 0; s < i.length; ++s) e._finishItem(i[s], t
										.bundleName, t.use, n);
								else e._finishItem(i, t.bundleName, t.use, n);
								t.onComplete && t.onComplete(o, i)
							},
							a = cc.assetManager.getBundle(t.bundleName);
						cc.isValid(a) ? a.loadDir(t.url, t.type, t.onProgress, o) : console
							.error("ResLoader.loadResDir() - bundle[" + t.bundleName +
								"]\u83b7\u53d6\u5931\u8d25")
					}
				}, e.prototype.preloadResDir = function() {
					var e = r.ResUtils.makeLoadResArgs.apply(this, arguments);
					if (e) {
						e.bundleName = i.ComUtils.getRealBundle(e.bundleName, e.url || e.urls);
						var t = cc.assetManager.getBundle(e.bundleName);
						cc.isValid(t) ? t.preloadDir(e.url, e.type, e.onProgress, e
							.onComplete) : console.error("ResLoader.preloadResDir() - bundle[" +
								e.bundleName + "]\u83b7\u53d6\u5931\u8d25")
					}
				}, e.prototype.preloadResMix = function(e, t, n) {
					for (var o = [], i = [], s = function() {
							for (var e = 0, t = 0; t < o.length; ++t) e += o[t];
							return e
						}, r = function() {
							for (var e = 0, t = 0; t < i.length; ++t) e += i[t];
							return e
						}, a = function(a) {
							o.push(0), i.push(0);
							var c = e[a];
							c.bundleName || (c.bundleName = "resources");
							var u = cc.assetManager.getBundle(c.bundleName);
							if (cc.isValid(u)) {
								var l = function(e, n, c) {
										o[a] = e, i[a] = n, t && t(s(), r(), c)
									},
									p = function(e, t) {
										e && console.log(e), n && n(e, t)
									};
								c.dir ? u.preloadDir(c.dir, c.type, l, p) : c.url ? u
									.preload(c.url, c.type, l, p) : u.preload(c.urls, c
										.type, l, p)
							} else console.error("ResLoader.preloadResMix() - bundle[" + c
								.bundleName + "]\u83b7\u53d6\u5931\u8d25")
						}, c = 0; c < e.length; ++c) a(c)
				}, e.prototype.loadRemote = function() {
					var e = this,
						t = r.ResUtils.makeLoadRemoteArgs.apply(this, arguments);
					if (t) {
						var n;
						s.resLeakChecker.checkFilter(t.url) && (n = i.ComUtils.getCallStack(1));
						var o = function(o, i) {
							o ? console.error(o) : e._finishItem(i, void 0, t.use, n), t
								.onComplete && t.onComplete(o, i)
						};
						cc.assetManager.loadRemote(t.url, t.options, o)
					}
				}, e.prototype.releaseAsset = function(e, t) {
					if (cc.isValid(e) && e._uuid) {
						var n = e._uuid,
							o = this.getCacheResInfo(n);
						o && (t && (o.uses.delete(t), s.resLeakChecker.logRelease(n, t)), o.uses
							.size <= 0 && (e.decRef(), this._resMap.delete(n)))
					}
				}, e.prototype.releaseArray = function(e, t) {
					for (var n = 0; n < e.length; ++n) this.releaseAsset(e[n], t)
				}, e.prototype.releaseAll = function(e) {
					var t = [];
					if (e) {
						var n = cc.assetManager.getBundle(e);
						cc.isValid(n) && (n.releaseAll(), this._resMap.forEach(function(n, o) {
							n.bundleName == e && t.push(o)
						}))
					} else this._resMap.forEach(function(e, n) {
						if (!e.bundleName) {
							var o = cc.assetManager.assets.get(n);
							cc.isValid(o) && cc.assetManager.releaseAsset(o), t.push(n)
						}
					});
					for (var o = 0; o < t.length; ++o) this._resMap.delete(t[o])
				}, e._instance = null, t = o([c], e)
			}());
		n.ResLoader = u, n.resLoader = u.getInstance(), cc._RF.pop()
	}, {
		"../utils/ComUtils": "ComUtils",
		"./ResLeakChecker": "ResLeakChecker",
		"./ResUtils": "ResUtils"
	}],
	ResUtils: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "164e1xgesFFhKj1XcCtjm0M", "ResUtils");
		var o = this && this.__decorate || function(e, t, n, o) {
			var i, s = arguments.length,
				r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
				.decorate(e, t, n, o);
			else
				for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
					t, n, r) : i(t, n)) || r);
			return s > 3 && r && Object.defineProperty(t, n, r), r
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.ResUtils = n.LoadResMixArgs = n.LoadRemoteArgs = n.LoadResArgs = void 0;
		var i = e("../log/LogManager"),
			s = e("./ResKeeper"),
			r = e("./ResLoader"),
			a = cc._decorator,
			c = a.ccclass,
			u = (a.property, function() {});
		n.LoadResArgs = u;
		n.LoadRemoteArgs = function() {};
		n.LoadResMixArgs = function() {};
		var l = cc.js.isChildClassOf;
		l || (l = cc.isChildClassOf);
		var p = function() {
			function e() {}
			var t;
			return t = e, e.makeLoadResArgs = function() {
				if (arguments.length < 1) return console.error("makeLoadResArgs error " +
					arguments), null;
				var e = {
					bundleName: "resources"
				};
				if ("string" == typeof arguments[0]) e.url = arguments[0];
				else {
					if (!(arguments[0] instanceof Array)) return 1 == arguments.length &&
						arguments[0] instanceof Object ? arguments[0] : (console.error(
							"makeLoadResArgs error " + arguments), null);
					e.urls = arguments[0]
				}
				for (var t = 1; t < arguments.length; ++t) 1 == t && l(arguments[t], cc.Asset) ?
					e.type = arguments[t] : "string" == typeof arguments[t] ? t >= 2 &&
					"string" == typeof arguments[t - 1] ? e.use = arguments[t] : e.bundleName =
					arguments[t] : "function" == typeof arguments[t] && (arguments.length > t +
						1 && "function" == typeof arguments[t + 1] ? e.onProgress = arguments[
						t] : e.onComplete = arguments[t]);
				return e
			}, e.makeLoadRemoteArgs = function() {
				if (arguments.length < 1) return console.error("makeLoadRemoteArgs error " +
					arguments), null;
				var e = {};
				if ("string" != typeof arguments[0]) return 1 == arguments.length && arguments[
					0] instanceof Object ? arguments[0] : (console.error(
					"makeLoadRemoteArgs error " + arguments), null);
				e.url = arguments[0];
				for (var t = 1; t < arguments.length; ++t) "function" == typeof arguments[t] ? e
					.onComplete = arguments[t] : "string" == typeof arguments[t] ? e.use =
					arguments[t] : e.options = arguments[t];
				return e
			}, e.getResKeeper = function(e, n) {
				return e ? e.getComponent(s.default) || (n ? e.addComponent(s.default) : t
					.getResKeeper(e.parent, n)) : null
			}, e.assignWith = function(e, n, o) {
				var i = t.getResKeeper(n, o);
				if (cc.isValid(i) && cc.isValid(e) && cc.isValid(n)) {
					var s = "@" + i.constructor.name + r.resLoader.nextUseKey();
					if (r.resLoader.addUse(e._uuid, s)) return i.addAutoRes({
						asset: e,
						use: s
					}), e
				}
				return console.error("AssignWith " + e + " to " + n + " fail"), null
			}, e.dumpRes = function() {
				i.LogManager.getInstance().console(
						"assetManager\u5df2\u52a0\u8f7d\u8d44\u6e90: --"), i.LogManager
					.getInstance().console(cc.assetManager.assets)
			}, e.dumpBundle = function() {
				i.LogManager.getInstance().console("assetManager\u5df2\u52a0\u8f7dbundle: --"),
					i.LogManager.getInstance().console(cc.assetManager.bundles)
			}, t = o([c], e)
		}();
		n.ResUtils = p, cc._RF.pop()
	}, {
		"../log/LogManager": "LogManager",
		"./ResKeeper": "ResKeeper",
		"./ResLoader": "ResLoader"
	}],
	SliderFix: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "0657dMXWv9D1Ib8UDxbBLWe", "SliderFix");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = cc._decorator,
			a = r.ccclass,
			c = (r.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t._fixProgressArr = [], t._fixData = {
						progress: 0,
						index: 0
					}, t
				}
				return i(t, e), Object.defineProperty(t.prototype, "fixProgressArr", {
					get: function() {
						return this._fixProgressArr
					},
					set: function(e) {
						this._fixProgressArr = e
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "fixProgress", {
					get: function() {
						return this._fixData.progress
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "fixIndex", {
					get: function() {
						return this._fixData.index
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype._fixDataFunc = function(e) {
					if (this._fixData.progress = e, this._fixData.index = 0, !(this
							._fixProgressArr.length <= 0))
						for (var t = 0, n = 0, o = 0, i = 0, s = 0; s < this._fixProgressArr
							.length - 1; ++s)
							if (t = this._fixProgressArr[s], n = this._fixProgressArr[s + 1],
								e >= t && e <= n) {
								o = Math.abs(e - t), i = Math.abs(e - n), this._fixData
									.progress = o <= i ? t : n, this._fixData.index = o <= i ?
									s : s + 1;
								break
							}
				}, t.prototype._updateProgress = function(e) {
					if (this.handle) {
						var t, n = this.node,
							o = n.convertToNodeSpaceAR(e.getLocation());
						t = this.direction === cc.Slider.Direction.Horizontal ? cc.misc.clamp01(
								(o.x - this._offset.x + n.anchorX * n.width) / n.width) : cc
							.misc.clamp01((o.y - this._offset.y + n.anchorY * n.height) / n
								.height), this._fixDataFunc(t), this.progress = this._fixData
							.progress
					}
				}, t.prototype._updateHandlePosition = function() {
					if (this.handle) {
						var e;
						e = this.direction === cc.Slider.Direction.Horizontal ? cc.v2(-this.node
								.width * this.node.anchorX + this.progress * this.node.width, 0
								) : cc.v2(0, -this.node.height * this.node.anchorY + this
								.progress * this.node.height);
						var t = this.node.convertToWorldSpaceAR(e);
						this.handle.node.position = this.handle.node.parent
							.convertToNodeSpaceAR(t)
					}
				}, s([a], t)
			}(cc.Slider));
		n.default = c, cc._RF.pop()
	}, {}],
	SoundManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "5ce57TvURNDcISZAwQox4ZX", "SoundManager"), Object.defineProperty(n,
			"__esModule", {
				value: !0
			}), n.SoundVO = void 0;
		var o = e("../res/ResLoader"),
			i = function() {
				this.clip = null, this.clipId = -1, this.maxVolumePercentage = 1, this.volume = 1, this
					.path = null
			};
		n.SoundVO = i;
		var s = "@ResSoundMsg" + o.resLoader.nextUseKey(),
			r = function() {
				function e() {
					if (this.musicVolume = 1, this.effectVolume = 1, this.effectList = [], this
						.currentMusic = null, this.musicList = [], this.defaultBtn = null, this
						.showHideVolume = 1, this.isInit = !1, e.instance) throw new Error(
						"this is singleton,use getInstance()")
				}
				return e.getInstance = function() {
					return e.instance || (e.instance = new e, e.instance.setDefaultButton(
						"base_common/sounds/defaultBtn", "base"), e.instance.init()), e.instance
				}, e.prototype.init = function() {
					this.isInit || (this.isInit = !0, cc.game.on(cc.game.EVENT_HIDE, this.gameHide,
							this), cc.game.on(cc.game.EVENT_SHOW, this.gameShow, this), cc.sys
						.__audioSupport && cc.sys.__audioSupport.WEB_AUDIO && (cc.sys
							.__audioSupport.context ? "suspended" == cc.sys.__audioSupport
							.context.state && cc.sys.__audioSupport.context.resume() : cc.sys
							.__audioSupport.context = new(window.AudioContext || window
								.webkitAudioContext || window.mozAudioContext)))
				}, e.prototype.gameHide = function() {
					this.showHideVolume = 0, this.setHideShowVolume()
				}, e.prototype.gameShow = function() {
					this.showHideVolume = 1, this.setHideShowVolume()
				}, e.prototype.setHideShowVolume = function() {
					for (var t = this.musicList.length - 1; t >= 0; t--)(o = this.musicList[t]) ? o
						.volume != e.IGNORE_VOLUME && cc.audioEngine.setVolume(o.clipId, this
							.showHideVolume * this.musicVolume * o.maxVolumePercentage * o.volume) :
						this.musicList.splice(t, 1);
					for (var n = this.effectList.length - 1; n >= 0; n--) {
						var o;
						(o = this.effectList[n]) ? o.volume != e.IGNORE_VOLUME && cc.audioEngine
							.setVolume(o.clipId, this.showHideVolume * this.effectVolume * o
								.maxVolumePercentage): this.effectList.splice(n, 1)
					}
				}, e.prototype.loadLocalVolume = function(e) {
					var t = cc.sys.localStorage.getItem(e ? "MusicVolume_" + e : "MusicVolume");
					null != t && null != t || (t = .5);
					var n = cc.sys.localStorage.getItem(e ? "EffectVolume_" + e : "EffectVolume");
					null != n && null != n || (n = .5), this.musicVolume = Number(t), this
						.effectVolume = Number(n)
				}, e.prototype.getMusicVolume = function() {
					return this.musicVolume
				}, e.prototype.getEffectVolume = function() {
					return this.effectVolume
				}, e.prototype.setMusicVolume = function(t, n) {
					this.musicVolume = t, cc.sys.localStorage.setItem(n ? "MusicVolume_" + n :
						"MusicVolume", t);
					for (var o = this.musicList.length - 1; o >= 0; o--) {
						var i = this.musicList[o];
						i ? i.volume != e.IGNORE_VOLUME && cc.audioEngine.setVolume(i.clipId, this
							.showHideVolume * this.musicVolume * i.maxVolumePercentage * i
							.volume) : this.musicList.splice(o, 1)
					}
				}, e.prototype.setSingleMusicVolume = function(e, t) {
					for (var n = this.musicList.length - 1; n >= 0; n--) {
						var o = this.musicList[n];
						if (o && o.path == e) {
							o.volume = t, cc.audioEngine.setVolume(o.clipId, this.showHideVolume *
								this.musicVolume * t * o.maxVolumePercentage);
							break
						}
					}
				}, e.prototype.setEffectVolume = function(t, n) {
					this.effectVolume = t, cc.sys.localStorage.setItem(n ? "EffectVolume_" + n :
						"EffectVolume", t);
					for (var o = this.effectList.length - 1; o >= 0; o--) {
						var i = this.effectList[o];
						i ? i.volume != e.IGNORE_VOLUME && cc.audioEngine.setVolume(i.clipId, this
								.showHideVolume * this.effectVolume * i.maxVolumePercentage) : this
							.effectList.splice(o, 1)
					}
				}, e.prototype.setSingleEffectVolume = function(e, t) {
					for (var n = this.effectList.length - 1; n >= 0; n--) {
						var o = this.effectList[n];
						o && o.path == e && (o.volume = t, cc.audioEngine.setVolume(o.clipId, this
								.showHideVolume * this.effectVolume * t * o.maxVolumePercentage
								))
					}
				}, e.prototype.playMusic = function(e, t, n, r, a, c, u) {
					if (void 0 === c && (c = 100), void 0 === u && (u = !0), e) {
						console.log("play music : " + e);
						for (var l = 0; l < this.musicList.length; l++)
							if (this.musicList[l] && this.musicList[l].path == e) return void cc
								.audioEngine.resume(this.musicList[l].clipId);
						u && this.stopAllMusic();
						var p = this,
							h = null;
						(h = new i).path = e, h.bundle = n, this.musicList.push(h), h
							.maxVolumePercentage = c / 100, p.currentMusic = h, o.ResLoader
							.getInstance().loadRes(e, cc.AudioClip, function(n, o) {
								if (!n) {
									if (!h || -2 == h.clipId) return;
									h.clip = o, h.clipId = cc.audioEngine.play(o, t, p
											.showHideVolume * p.musicVolume * h.volume * h
											.maxVolumePercentage), cc.audioEngine
										.setFinishCallback(h.clipId, function() {
											cc.audioEngine.stop(h.clipId), p.currentMusic &&
												p.currentMusic.clipId == h.clipId && (p
													.currentMusic = null), r && r(h)
										}), a && a.call(null, e, h)
								}
							}, n, s)
					}
				}, e.prototype.playEffect = function(e, t, n, r, a, c) {
					var u = this;
					if (void 0 === t && (t = !1), void 0 === r && (r = null), void 0 === a && (a =
							null), void 0 === c && (c = 100), e) {
						var l = new i;
						l.bundle = n, l.path = e, l.maxVolumePercentage = c / 100, this.effectList
							.push(l);
						var p = this;
						o.ResLoader.getInstance().loadRes(e, cc.AudioClip, function(n, o) {
							if (!n) {
								if (!l || -2 == l.clipId) return;
								l.clip = o, l.clipId = cc.audioEngine.play(o, t, p
										.showHideVolume * p.effectVolume * l.volume * l
										.maxVolumePercentage), cc.audioEngine
									.setFinishCallback(l.clipId, function() {
										p.onFinishSound(l.clipId), a && a.call(u, e, l)
									}), r && r.call(u, e, l)
							}
						}, n, s)
					}
				}, e.prototype.onFinishSound = function(e) {
					for (var t = 0; t < this.effectList.length; t++) {
						var n = this.effectList[t];
						if (n && n.clipId == e) {
							this.effectList.splice(t, 1), n = null;
							break
						}
					}
				}, e.prototype.getClipByPath = function(e) {
					for (var t = 0; t <= this.musicList.length; t++)
						if (this.musicList[t] && this.musicList[t].path == e) return this.musicList[
							t];
					var n = [];
					for (t = 0; t <= this.effectList.length; t++) this.effectList[t] && this
						.effectList[t].path == e && n.push(this.effectList[t]);
					return n.length > 0 ? n : null
				}, e.prototype.pauseMusic = function(e) {
					if (console.log("pause music : " + e), !e && this.currentMusic && (e = this
							.currentMusic.path), e)
						for (var t = 0; t <= this.musicList.length; t++)
							if (this.musicList[t] && this.musicList[t].path == e) {
								cc.audioEngine.pause(this.musicList[t].clipId);
								break
							}
				}, e.prototype.resumeMusic = function(e) {
					if (e || (this.currentMusic ? e = this.currentMusic.path : this.musicList
							.length > 0 && (e = this.musicList[this.musicList.length - 1].path)), e)
						for (var t = 0; t <= this.musicList.length; t++)
							if (this.musicList[t] && this.musicList[t].path == e) {
								cc.audioEngine.resume(this.musicList[t].clipId);
								break
							}
				}, e.prototype.pauseAllMusic = function() {
					for (var e = 0; e <= this.musicList.length; e++) this.musicList[e] && cc
						.audioEngine.pause(this.musicList[e].clipId)
				}, e.prototype.resumeAllMusic = function() {
					for (var e = 0; e <= this.musicList.length; e++) this.musicList[e] && cc
						.audioEngine.resume(this.musicList[e].clipId)
				}, e.prototype.pauseEffect = function(e) {
					for (var t = 0; t <= this.effectList.length; t++) this.effectList[t] && this
						.effectList[t].path == e && cc.audioEngine.pause(this.effectList[t].clipId)
				}, e.prototype.resumeEffect = function(e) {
					for (var t = 0; t <= this.effectList.length; t++) this.effectList[t] && this
						.effectList[t].path == e && cc.audioEngine.resume(this.effectList[t].clipId)
				}, e.prototype.pauseAllEffect = function() {
					for (var e = 0; e <= this.effectList.length; e++) this.effectList[e] && cc
						.audioEngine.pause(this.effectList[e].clipId)
				}, e.prototype.resumeAllEffect = function() {
					for (var e = 0; e <= this.effectList.length; e++) this.effectList[e] && cc
						.audioEngine.resume(this.effectList[e].clipId)
				}, e.prototype.pauseAll = function() {
					this.pauseAllEffect(), this.pauseAllMusic()
				}, e.prototype.resumeAll = function() {
					this.resumeAllEffect(), this.resumeAllMusic()
				}, e.prototype.getMusicCurPlayTime = function(e) {
					var t = 0;
					if (!e && this.currentMusic && (e = this.currentMusic.path), !e) return t;
					for (var n = 0; n <= this.musicList.length; n++)
						if (this.musicList[n] && this.musicList[n].path == e) {
							t = cc.audioEngine.getCurrentTime(this.musicList[n].clipId);
							break
						} return t
				}, e.prototype.stopMusic = function(e) {
					if (console.log("stop music : " + e), !e && this.currentMusic && (e = this
							.currentMusic.path), e) {
						for (var t = this.musicList.length - 1; t >= 0; t--) {
							var n = this.musicList[t];
							if (n && n.path == e) {
								cc.audioEngine.stop(n.clipId), this.musicList.splice(t, 1), n
									.clipId = -2, n = null;
								break
							}
						}
						this.currentMusic && this.currentMusic.path == e && (this.currentMusic =
							null)
					}
				}, e.prototype.stopAllMusic = function() {
					for (var e = this.musicList.length - 1; e >= 0; e--) this.musicList[e] && (cc
						.audioEngine.stop(this.musicList[e].clipId), this.musicList[e]
						.clipId = -2, this.musicList[e] = null);
					this.musicList.length = 0, this.currentMusic = null
				}, e.prototype.hasMusicClip = function(e) {
					for (var t = 0; t < this.musicList.length; t++)
						if (this.musicList[t] && this.musicList[t].path == e) return !0;
					return !1
				}, e.prototype.stopEffect = function(e) {
					for (var t = this.effectList.length - 1; t >= 0; t--) {
						var n = this.effectList[t];
						n && n.path == e && (cc.audioEngine.stop(n.clipId), n.clipId = -2, this
							.effectList.splice(t, 1), n = null)
					}
				}, e.prototype.stopAllEffect = function() {
					for (var e = 0; e < this.effectList.length; e++) this.effectList[e] && (cc
						.audioEngine.stop(this.effectList[e].clipId), this.effectList[e]
						.clipId = -2);
					this.effectList.length = 0
				}, e.prototype.setMusicCurrentTime = function(e, t) {
					for (var n = 0; n < this.musicList.length; n++) {
						var o = this.musicList[n];
						if (o && o.path == e) {
							cc.audioEngine.setCurrentTime(o.clipId, t);
							break
						}
					}
				}, e.prototype.setEffectCurrentTime = function(e, t) {
					for (var n = 0; n < this.effectList.length; n++) {
						var o = this.effectList[n];
						o && o.path == e && cc.audioEngine.setCurrentTime(o.clipId, t)
					}
				}, e.prototype.setDefaultButton = function(e, t) {
					this.defaultBtn || (this.defaultBtn = new i), this.defaultBtn.path = e, this
						.defaultBtn.bundle = t
				}, e.prototype.playBtnSound = function() {
					this.playEffect(this.defaultBtn.path, !1, this.defaultBtn.bundle)
				}, e.IGNORE_VOLUME = .001, e
			}();
		n.default = r, cc._RF.pop()
	}, {
		"../res/ResLoader": "ResLoader"
	}],
	SpineUtils: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "14299Aoa65Gn75cpwzHkPlm", "SpineUtils"), Object.defineProperty(n,
		"__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return e.getAniTime = function(e, t) {
				var n = e.findAnimation(t);
				return n ? n.duration : (console.log("\u627e\u4e0d\u5230\u52a8\u753b\u540d - " +
					t), 0)
			}, e.playAniByTime = function(e, t, n, o, i) {
				var s = e.findAnimation(t).duration,
					r = o ? s / o : 1;
				i && r < 1 && (r = 1), e.setAnimation(0, t, n), e.timeScale = r
			}, e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	TaskQueue: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "de488iqnJ5HBIXG+sG0Km/l", "TaskQueue"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.TaskManager = n.TaskQueue = void 0;
		var o = function(e, t) {
				this.task = e, this.priority = t
			},
			i = function() {
				function e() {
					this._curTask = null, this._taskQueue = Array()
				}
				return e.prototype.pushTask = function(e, t) {
					void 0 === t && (t = 0);
					var n = new o(e, t);
					if (this._taskQueue.length > 0)
						for (var i = this._taskQueue.length - 1; i >= 0; --i)
							if (this._taskQueue[i].priority <= t) return void this._taskQueue
								.splice(i + 1, 0, n);
					this._taskQueue.splice(0, 0, n), null == this._curTask && this.executeNextTask()
				}, e.prototype.clearTask = function() {
					this._curTask = null, this._taskQueue.length = 0
				}, e.prototype.executeNextTask = function() {
					var e = this,
						t = this._taskQueue.shift() || null;
					this._curTask = t, t && t.task(function() {
						t === e._curTask ? e.executeNextTask() : console.warn(
							"your task finish twice!")
					})
				}, e
			}();
		n.TaskQueue = i;
		var s = function() {
			function e() {
				this._taskQueues = {}
			}
			return e.getInstance = function() {
				return this._instance || (this._instance = new e), this._instance
			}, e.prototype.pushTask = function(e, t) {
				return void 0 === t && (t = 0), this.getTaskQueue().pushTask(e, t)
			}, e.prototype.pushTaskByTag = function(e, t, n) {
				return void 0 === n && (n = 0), this.getTaskQueue(t).pushTask(e, n)
			}, e.prototype.clearTaskQueue = function(e) {
				void 0 === e && (e = 0);
				var t = this._taskQueues[e];
				t && t.clearTask()
			}, e.prototype.clearAllTaskQueue = function() {
				for (var e in this._taskQueues) this._taskQueues[e].clearTask();
				this._taskQueues = {}
			}, e.prototype.getTaskQueue = function(e) {
				void 0 === e && (e = 0);
				var t = this._taskQueues[e];
				return null == t && (t = new i, this._taskQueues[e] = t), t
			}, e._instance = null, e
		}();
		n.TaskManager = s, cc._RF.pop()
	}, {}],
	TimeUtil: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "95351/66bpONJFiCRYtkeFC", "TimeUtil"), Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var o = function() {
			function e() {}
			return e.getLocalTime = function(e) {
				if (void 0 === e && (e = -4), "number" == typeof e) {
					var t = new Date,
						n = t.getTime(),
						o = 6e4 * t.getTimezoneOffset();
					return new Date(n + o + 36e5 * e)
				}
			}, e.getTimestamp = function() {
				return (new Date).getTime()
			}, e.getLocalTimestamp = function(t) {
				return void 0 === t && (t = -4), e.getLocalTime(t).getTime()
			}, e.getTimeByTimeZone = function(e, t) {
				if (void 0 === t && (t = -4), "number" == typeof t) {
					var n = 6e4 * (new Date).getTimezoneOffset();
					return new Date(e + n + 36e5 * t)
				}
			}, e.getTimeFormOtherZone = function(e, t) {
				void 0 === t && (t = -4);
				var n = (new Date).getTimezoneOffset() / 60 + t,
					o = e.split("/"),
					i = new Date(parseInt(o[0]), parseInt(o[1]), parseInt(o[2]), parseInt(o[3]),
						parseInt(o[4]), parseInt(o[5])).getTime() - 36e5 * n;
				return new Date(i)
			}, e.getTimeFormat = function(e, t) {
				var n = e.getFullYear(),
					o = e.getMonth() + 1,
					i = e.getDate(),
					s = e.getHours(),
					r = e.getMinutes(),
					a = r >= 10 ? r : "0" + r,
					c = e.getSeconds();
				return n + "/" + o + "/" + i + (t ? "\n" : "  ") + s + ":" + a + ":" + (c >=
					10 ? c : "0" + c)
			}, e.getTimeFormat2 = function(e) {
				var t = 0,
					n = 0,
					o = 0;
				return e >= 3600 ? (t = parseInt((e / 3600).toString()), n = parseInt((e %
					3600 / 60).toString()), o = Math.floor(e % 3600 % 60)) : e >= 60 ? (n =
					parseInt((e / 60).toString()), o = Math.floor(e % 60)) : o = Math.floor(
					e), (t >= 10 ? t : "0" + t) + ":" + (n >= 10 ? n : "0" + n) + ":" + (
					o >= 10 ? o : "0" + o)
			}, e.getTimeFormat3 = function(e) {
				var t = e.getMonth() + 1,
					n = e.getDate(),
					o = e.getHours(),
					i = e.getMinutes();
				return t + "\u6708" + n + "\u65e5 " + o + ":" + (i >= 10 ? i : "0" + i)
			}, e.getTimeFormat4 = function(e) {
				var t = e.getFullYear(),
					n = e.getMonth() + 1,
					o = e.getDate(),
					i = e.getHours(),
					s = e.getMinutes(),
					r = s >= 10 ? s : "0" + s,
					a = e.getSeconds();
				return t + "/" + n + "/" + o + "-" + i + ":" + r + ":" + (a >= 10 ? a : "0" + a)
			}, e.getTimeFormat5 = function(e) {
				var t = e.getFullYear(),
					n = e.getMonth() + 1,
					o = n >= 10 ? n : "0" + n,
					i = e.getDate(),
					s = i >= 10 ? i : "0" + i,
					r = e.getHours(),
					a = e.getMinutes(),
					c = a >= 10 ? a : "0" + a,
					u = e.getSeconds();
				return t + "/" + o + "/" + s + "-" + r + ":" + c + ":" + (u >= 10 ? u : "0" + u)
			}, e.getTimeFormat6 = function(e, t) {
				var n = e.getFullYear(),
					o = e.getMonth() + 1,
					i = o >= 10 ? o : "0" + o,
					s = e.getDate(),
					r = s >= 10 ? s : "0" + s,
					a = e.getHours(),
					c = a >= 10 ? a : "0" + a,
					u = e.getMinutes(),
					l = u >= 10 ? u : "0" + u,
					p = e.getSeconds();
				return n + "-" + i + "-" + r + (t ? "\n" : "  ") + c + ":" + l + ":" + (p >=
					10 ? p : "0" + p)
			}, e.getTimeFormat7 = function(e) {
				var t = e.getHours(),
					n = e.getMinutes(),
					o = n >= 10 ? n : "0" + n,
					i = e.getSeconds(),
					s = i >= 10 ? i : "0" + i,
					r = e.getMilliseconds();
				return t + ":" + o + ":" + s + ":" + (r >= 100 ? r : r >= 10 ? "0" + r : "00" +
					r)
			}, e
		}();
		n.default = o, cc._RF.pop()
	}, {}],
	UIAnimation: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "2f8a4goFYNBq7CaysBPs0p3", "UIAnimation");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = cc._decorator,
			a = r.ccclass,
			c = (r.property, function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return i(t, e), t.prototype.execAni_open = function(e) {
					var t = this.node;
					cc.Tween.stopAllByTarget(t), t.setScale(.2), cc.tween(t).to(.2, {
						scale: 1
					}).call(e).start()
				}, t.prototype.execAni_close = function(e) {
					var t = this.node;
					cc.Tween.stopAllByTarget(t), cc.tween(t).to(.2, {
						scale: .2
					}).call(e).start()
				}, s([a], t)
			}(cc.Component));
		n.default = c, cc._RF.pop()
	}, {}],
	UIManager: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "db4c6esUiND8axPhOmrXIBz", "UIManager");
		var o = this && this.__decorate || function(e, t, n, o) {
			var i, s = arguments.length,
				r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
				.decorate(e, t, n, o);
			else
				for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
					t, n, r) : i(t, n)) || r);
			return s > 3 && r && Object.defineProperty(t, n, r), r
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.uiMgr = n.UIDefAni = void 0;
		var i, s = e("../log/LogManager"),
			r = e("../res/ResLoader"),
			a = e("./UIAnimation"),
			c = e("./UIView"),
			u = cc._decorator,
			l = u.ccclass;
		u.property,
			function(e) {
				e.UI_NONE = "uiNone", e.UI_OPEN = "uiOpen", e.UI_CLOSE = "uiClose"
			}(i = n.UIDefAni || (n.UIDefAni = {}));
		var p = function() {
			function e() {
				this._rootNode = null, this._backgroundUI = 0, this._isClosing = !1, this
					._isOpening = !1, this._uiCache = {}, this._uiStack = [], this
				._uiOpenQueue = [], this._uiCloseQueue = [], this._uiConf = {}, this._pureWhiteSPF =
					null, this._pureWhiteLoading = !1, this._preventKeyboard = !1, this
					._loadingIconSPF = null, this._loadingIconLoading = !1, this._loadingMaskNode =
					null, this._loadingIconNode = null, this._loadingEffectNode = null, this
					._loadingEffectMask = null
			}
			var t;
			return t = e, e.getInstance = function() {
				return this._instance || (this._instance = new t), this._instance
			}, e.prototype.getPureWhiteSPF = function() {
				var e = this;
				return cc.isValid(this._pureWhiteSPF) || this._pureWhiteLoading || (this
					._pureWhiteLoading = !0, r.resLoader.loadRes(
						"base_common/textures/pureWhite", cc.SpriteFrame,
						function(t, n) {
							t || (e._pureWhiteSPF = n), e._pureWhiteLoading = !1
						}, "base", "@UIManager@pureWhite")), this._pureWhiteSPF
			}, e.prototype.getLoadingIcon = function() {
				var e = this;
				return cc.isValid(this._loadingIconSPF) || this._loadingIconLoading || (this
					._loadingIconLoading = !0, r.resLoader.loadRes(
						"base_common/textures/loadingIcon", cc.SpriteFrame,
						function(t, n) {
							t || (e._loadingIconSPF = n), e._loadingIconLoading = !1
						}, "base", "@UIManager@pureWhite")), this._loadingIconSPF
			}, e.prototype.setRootNode = function(e) {
				cc.isValid(this._rootNode) ? s.LogManager.getInstance().console(
						"UIManager.setRootNode(): \u91cd\u590d\u8bbe\u7f6e\u6839\u8282\u70b9") :
					cc.isValid(e) ? this._rootNode = e : console.error(
						"UIManager.setRootNode(): \u8bbe\u7f6e\u6839\u8282\u70b9\u65e0\u6548")
			}, e.prototype.getRootNode = function() {
				return cc.isValid(this._rootNode) || (this._rootNode = cc.find("Canvas")), this
					._rootNode
			}, e.prototype.setBackgroundUI = function(e) {
				this._backgroundUI = e
			}, e.prototype.initUIConf = function(e) {
				this._uiConf = e, this.getPureWhiteSPF(), this.getLoadingIcon()
			}, e.prototype.setUIConf = function(e, t) {
				this._uiConf[e] = t
			}, e.prototype._preventTouch = function(e) {
				var t = new cc.Node;
				t.name = "preventTouch", t.setContentSize(cc.size(1e4, 1e4));
				var n = t.addComponent(cc.Sprite);
				return cc.isValid(n) && (n.sizeMode = cc.Sprite.SizeMode.CUSTOM, n.spriteFrame =
					this.getPureWhiteSPF(), t.color = new cc.Color(0, 0, 0), t.opacity = 180
					), t.getComponent(cc.BlockInputEvents) || t.addComponent(cc
					.BlockInputEvents), this.getRootNode().addChild(t, e), t
			}, e.prototype.showLoadingIcon = function(e) {
				var t = this,
					n = this.getRootNode(),
					o = this._uiConf[e.uiId],
					i = e.zOrder;
				if ((!e.preventNode || e.preventNode.opacity < 80) && (this._loadingMaskNode ? n
						.addChild(this._loadingMaskNode, i + 1) : (this._loadingMaskNode = this
							._preventTouch(i + 1), this._loadingMaskNode.name =
							"loadingMaskNode")), !this._loadingIconNode) {
					var s = new cc.Node;
					s.name = "loadingIcon", s.addComponent(cc.Sprite).spriteFrame = this
						.getLoadingIcon(), this._loadingIconNode = s, n.addChild(this
							._loadingIconNode)
				}
				this._loadingIconNode.parent || (cc.Tween.stopAllByTarget(this
						._loadingIconNode), n.addChild(this._loadingIconNode)), this
					._loadingIconNode.zIndex = i + 2, this._loadingIconNode.active = !1, this
					._loadingMaskNode && (this._loadingMaskNode.opacity = 0);
				var r = void 0 === o.preventTouchOpacity ? 180 : o.preventTouchOpacity;
				e.preventNode && (e.preventNode.opacity = 0);
				var a = .5;
				o && null != o.showLoadingDelayTime && (a = o.showLoadingDelayTime), 0 == a ? (
					this._loadingMaskNode && (this._loadingMaskNode.opacity = 180), e
					.preventNode && (e.preventNode.opacity = r), this._loadingIconNode
					.active = !0, cc.tween(this._loadingIconNode).repeatForever(cc.tween(
						this._loadingIconNode).by(.5, {
						angle: 360
					})).start()) : cc.tween(this).delay(a).call(function() {
					t._loadingMaskNode && (t._loadingMaskNode.opacity = 180), e
						.preventNode && (e.preventNode.opacity = r), t._loadingIconNode
						.active = !0, cc.tween(t._loadingIconNode).repeatForever(cc
							.tween(t._loadingIconNode).by(.5, {
								angle: 360
							})).start()
				}).start()
			}, e.prototype.hideLoadingIcon = function() {
				this._loadingIconNode && (cc.Tween.stopAllByTarget(this._loadingIconNode), this
						._loadingIconNode.removeFromParent(!0)), this._loadingMaskNode && this
					._loadingMaskNode.removeFromParent()
			}, e.prototype.showLoadingEffect = function() {
				var e = this.getRootNode();
				if (!this._loadingEffectMask) {
					this._loadingEffectMask = new cc.Node, this._loadingEffectMask.name =
						"loadingEffectMask", this._loadingEffectMask.setContentSize(cc.size(1e4,
							1e4));
					var t = this._loadingEffectMask.addComponent(cc.Sprite);
					cc.isValid(t) && (t.sizeMode = cc.Sprite.SizeMode.CUSTOM, t.spriteFrame =
							this.getPureWhiteSPF(), this._loadingEffectMask.color = new cc
							.Color(0, 0, 0), this._loadingEffectMask.opacity = 180), this
						._loadingEffectMask.getComponent(cc.BlockInputEvents) || this
						._loadingEffectMask.addComponent(cc.BlockInputEvents)
				}
				e.addChild(this._loadingEffectMask), this._loadingEffectMask.zIndex = 99999998,
					this._loadingEffectNode || (this._loadingEffectNode = new cc.Node, this
						._loadingEffectNode.name = "loadingEffectNode", this._loadingEffectNode
						.addComponent(cc.Sprite).spriteFrame = this.getLoadingIcon()), e
					.addChild(this._loadingEffectNode), this._loadingEffectNode.zIndex =
					99999999, cc.tween(this._loadingEffectNode).repeatForever(cc.tween(this
						._loadingEffectNode).by(.5, {
						angle: 360
					})).start()
			}, e.prototype.hideLoadingEffect = function() {
				this._loadingEffectMask && this._loadingEffectMask.parent && this
					._loadingEffectMask.removeFromParent(!1), this._loadingEffectNode && (cc
						.Tween.stopAllByTarget(this._loadingEffectNode), this._loadingEffectNode
						.parent && this._loadingEffectNode.removeFromParent(!1))
			}, e.prototype._autoExecNextUI = function() {
				if (this._uiCloseQueue.length > 0) {
					var e = this._uiCloseQueue[0];
					this._uiCloseQueue.splice(0, 1), this.close(e)
				} else if (this._uiOpenQueue.length > 0) {
					var t = this._uiOpenQueue[0];
					this._uiOpenQueue.splice(0, 1), this.open(t.uiId, t.uiArgs)
				}
			}, e.prototype._autoExecAnimation = function(e, t, n) {
				var o = e.node.getComponent(a.default);
				if (o) switch (t) {
					case i.UI_OPEN:
						o.execAni_open(n);
						break;
					case i.UI_CLOSE:
						o.execAni_close(n);
						break;
					default:
						n()
				} else n()
			}, e.prototype._autoLoadRes = function(e, t) {
				t()
			}, e.prototype._sortUIStack = function() {
				this._uiStack.sort(function(e, t) {
					return e.zOrder - t.zOrder
				})
			}, e.prototype._updateUI = function() {
				for (var e = 0, t = this._uiStack.length - 1; t >= 0; --t) {
					var n = this._uiStack[t].uiView;
					if (cc.isValid(n)) {
						var o = n.showType;
						if (n.node.active = !0, c.UIShowTypes.UI_FULLSCREEN == o) break;
						if (c.UIShowTypes.UI_SINGLE == o) {
							for (var i = 0; i < this._backgroundUI; ++i) this._uiStack[i] && (
								this._uiStack[i].uiView.node.active = !0);
							e = this._backgroundUI;
							break
						}
					}
				}
				for (var s = e; s < t; ++s)(n = this._uiStack[s].uiView) && (n.node.active = !
				1);
				this._checkKeyboard()
			}, e.prototype._checkKeyboard = function() {
				this._preventKeyboard = !1;
				for (var e = 0; e < this._uiStack.length; ++e) {
					var t = this._uiStack[e].uiView;
					if (cc.isValid(t) && t.node.active) {
						var n = this._uiStack[e].uiId,
							o = this._uiConf[n];
						if (o && o.preventKeyboard) {
							this._preventKeyboard = !0;
							break
						}
					}
				}
			}, Object.defineProperty(e.prototype, "preventKeyboard", {
				get: function() {
					return this._preventKeyboard
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype._getOrCreateUI = function(e, t, n, o) {
				var i = this._uiCache[e];
				if (i) n(i);
				else {
					var r = this._uiConf[e];
					if (!r) return s.LogManager.getInstance().console("_getOrCreateUI " + e +
						" faile, _uiConf not found"), void n(null);
					if (!r.path) return s.LogManager.getInstance().console("_getOrCreateUI " +
						e + " faile, prefab conf not found"), void n(null);
					this._loadUI(e, t, n, o)
				}
			}, e.prototype._loadUI = function(e, t, n, o) {
				var i = this,
					a = this._uiConf[e],
					u = a.path,
					l = a.bundleName || "resources",
					p = "@UIManager" + r.resLoader.nextUseKey();
				r.resLoader.loadRes(u, cc.Prefab, t, function(t, l) {
					if (t) return s.LogManager.getInstance().console(
							"_getOrCreateUI loadRes " + e + " faile, path: " + u),
						void n(null);
					var h = cc.instantiate(l);
					if (!cc.isValid(h)) return s.LogManager.getInstance().console(
						"_getOrCreateUI instantiate " + e + " faile, path: " + u
						), n(null), void r.resLoader.releaseAsset(l, p);
					var f = h.getComponent(c.default);
					if (!cc.isValid(f)) return s.LogManager.getInstance().console(
						"_getOrCreateUI getComponent " + e + " faile, path: " +
						u), h.destroy(), n(null), void r.resLoader.releaseAsset(
						l, p);
					i._autoLoadRes(f, function() {
						f.initProperty(e, a), f.init(o);
						var t = {
							asset: l,
							use: p
						};
						f.addAutoRes(t), n(f)
					})
				}, l, p)
			}, e.prototype.open = function(e, t, n) {
				var o = this;
				void 0 === t && (t = null), void 0 === n && (n = null);
				var i = this._uiConf[e];
				if (i) {
					var r = {
						uiId: e,
						uiArgs: t,
						uiView: null
					};
					if (this._isOpening || this._isClosing) return console.log(
						"isOpening:::::1", "_isOpening:", this._isOpening, this
						._isClosing), void this._uiOpenQueue.push(r);
					if (-1 != this.getUIIndex(e)) return console.log("closeToUI:::::", "uiId:",
						e), void this.closeToUI(e, t);
					i.zOrder ? r.zOrder = i.zOrder : this._uiStack.length <= 0 ? r.zOrder = 1 :
						r.zOrder = this._uiStack[this._uiStack.length - 1].zOrder + 1, this
						._uiStack.push(r), this._sortUIStack(), i.preventTouch && !r
						.preventNode && (r.preventNode = this._preventTouch(r.zOrder)), (
							void 0 === i.loadingAni || i.loadingAni) && this.showLoadingIcon(r),
						this._isOpening = !0, this._getOrCreateUI(e, n, function(n) {
							if (r.isClose || null == n) return s.LogManager.getInstance()
								.console("_getOrCreateUI " + e +
									" faile!\n                        close state : " +
									r.isClose + " , uiView : " + n), void(cc.isValid(r
									.preventNode) && (r.preventNode.destroy(), r
									.preventNode = null));
							r.preventNode && (null != i.preventTouchOpacity ? r.preventNode
									.opacity = i.preventTouchOpacity : r.preventNode
									.opacity = 180), console.log("open:::::2", "uiId:", e),
								i.isHideLoadingOnCb ? (t || (t = {}), t.hideLoadingCb =
									function() {
										o.hideLoadingIcon()
									}) : o.hideLoadingIcon(), o._onUIOpen(e, n, r, t)
						}, t)
				} else s.LogManager.getInstance().console("open " + e +
					" faile, _uiConf not found")
			}, e.prototype._onUIOpen = function(e, t, n, o) {
				var s = this;
				if (cc.isValid(t)) {
					if (n.uiView = t, t.node.active = !0, t.node.zIndex = n.zOrder || this
						._uiStack.length, t.quickClose) {
						var r = t.node.getChildByName("background");
						r || ((r = new cc.Node("background")).setContentSize(cc.size(1e4, 1e4)),
							t.node.addChild(r, -1)), r.targetOff(cc.Node.EventType
							.TOUCH_START), r.on(cc.Node.EventType.TOUCH_START, function(e) {
							e.stopPropagation(), s._isOpening || s._isClosing || s
								.close(t)
						}, r)
					}
					var a = this.getRootNode();
					t.node.parent || a.addChild(t.node), this._updateUI();
					var c = -1;
					this._uiStack.length > 1 && (c = this._uiStack[this._uiStack.length - 2]
						.uiId);
					var u = null;
					if (o && "quiet" == o.openType) u = i.UI_NONE;
					else {
						var l = this._uiConf[e];
						l && (u = l.openAni || i.UI_OPEN)
					}
					t.onOpen(c, o), this._autoExecAnimation(t, u, function() {
						s._isOpening = !1, s._autoExecNextUI(), t.onOpenAniOver()
					})
				}
			}, e.prototype.close = function(e) {
				var t = this,
					n = this._uiStack.length;
				if (n < 1 || this._isClosing || this._isOpening) {
					if (e) this._uiCloseQueue.push(e);
					else if (n >= 1) {
						var o = this._uiStack[n - 1].uiView;
						this._uiCloseQueue.push(o)
					}
				} else {
					var r;
					if (e) {
						for (var a = this._uiStack.length - 1; a >= 0; --a) {
							var c = this._uiStack[a];
							if (c.uiView == e) {
								r = c, this._uiStack.splice(a, 1);
								break
							}
						}
						if (!r) return
					} else r = this._uiStack.pop();
					var u = r.uiId,
						l = r.uiView;
					if (r.isClose = !0, cc.isValid(r.preventNode) && (r.preventNode.destroy(), r
							.preventNode = null), cc.isValid(r.uiView)) {
						var p = this._uiStack[n - 2];
						this._updateUI();
						var h = this._uiConf[u],
							f = null;
						h && (f = h.closeAni || i.UI_CLOSE), this._isClosing = !0, this
							._autoExecAnimation(l, f, function() {
								p && p.uiView && t.isTopUI(p.uiId) ? (p.uiView.node && (p
										.uiView.node.active = !0), p.uiView.onTop(p
										.uiId, l.onClose())) : l.onClose(), l.cache ? (t
										._uiCache[u] = l, l.node.removeFromParent(!1), s
										.LogManager.getInstance().console(
											"uiView removeFromParent " + u)) : (l.node
										.destroy(), s.LogManager.getInstance().console(
											"uiView destroy " + u)), t._isClosing = !1, t
									._autoExecNextUI()
							})
					}
				}
			}, e.prototype.closeToUI = function(e, t) {
				var n = this.getUIIndex(e);
				if (-1 != n) {
					for (var o = this._uiStack[this._uiStack.length - 1], i = this._uiStack[n],
							s = this._uiStack.length - 1; s > n; --s) {
						var r = this._uiStack.pop(),
							a = r.uiId,
							c = r.uiView;
						r.isClose = !0, r.preventNode && (r.preventNode.destroy(), r
							.preventNode = null), c && (c.onClose(), c.cache ? (this
								._uiCache[a] = c, c.node.removeFromParent(!1)) : c.node
							.destroy())
					}
					this._updateUI(), this._uiOpenQueue = [], this._uiCloseQueue = [], i.uiView
						.onOpen(o.uiId, t)
				}
			}, e.prototype.closeByUIID = function(e) {
				var t, n = null;
				return (t = null == e ? this._uiStack.length - 1 : this.getUIIndex(e)) >= 0 && (
					n = this._uiStack[t].uiView), n && this.close(n), !0
			}, e.prototype.closeAll = function() {
				for (var e = 0, t = this._uiStack; e < t.length; e++) {
					var n = t[e];
					n.isClose = !0, cc.isValid(n.preventNode) && (n.preventNode.destroy(), n
						.preventNode = null), n.uiView && (n.uiView.onClose(), n.uiView
						.cache ? n.uiView.node.removeFromParent(!1) : n.uiView.node
						.destroy())
				}
				this._uiOpenQueue = [], this._uiCloseQueue = [], this._uiStack = [], this
					._isOpening = !1, this._isClosing = !1
			}, e.prototype.clearCache = function() {
				for (var e in this._uiCache) {
					var t = this._uiCache[e];
					cc.isValid(t.node) && t.node.destroy()
				}
				this._uiCache = {}
			}, e.prototype.replace = function(e, t) {
				void 0 === t && (t = null), this.close(), this.open(e, t)
			}, e.prototype.isTopUI = function(e) {
				return 0 != this._uiStack.length && this._uiStack[this._uiStack.length - 1]
					.uiId == e
			}, e.prototype.getUIIndex = function(e) {
				for (var t = 0; t < this._uiStack.length; ++t)
					if (e == this._uiStack[t].uiId) return t;
				return -1
			}, e.prototype.getUI = function(e) {
				for (var t = 0; t < this._uiStack.length; t++) {
					var n = this._uiStack[t];
					if (e == n.uiId) return n.uiView
				}
				return null
			}, e.prototype.getTopUI = function() {
				return this._uiStack.length > 0 ? this._uiStack[this._uiStack.length - 1]
					.uiView : null
			}, e._instance = null, t = o([l], e)
		}();
		n.default = p, n.uiMgr = p.getInstance(), cc._RF.pop()
	}, {
		"../log/LogManager": "LogManager",
		"../res/ResLoader": "ResLoader",
		"./UIAnimation": "UIAnimation",
		"./UIView": "UIView"
	}],
	UIView: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "94911hnTQFILo/su56PhVBG", "UIView");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.UIShowTypes = void 0;
		var r, a = e("../res/ResKeeper"),
			c = cc._decorator,
			u = c.ccclass;
		c.property,
			function(e) {
				e[e.UI_FULLSCREEN = 0] = "UI_FULLSCREEN", e[e.UI_ADDITION = 1] = "UI_ADDITION", e[e
					.UI_SINGLE = 2] = "UI_SINGLE"
			}(r = n.UIShowTypes || (n.UIShowTypes = {}));
		var l = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t._quickClose = !1, t._cache = !1, t._showType = r.UI_SINGLE, t._uiId = 0, t
			}
			return i(t, e), Object.defineProperty(t.prototype, "quickClose", {
					get: function() {
						return this._quickClose
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "cache", {
					get: function() {
						return this._cache
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "showType", {
					get: function() {
						return this._showType
					},
					enumerable: !1,
					configurable: !0
				}), Object.defineProperty(t.prototype, "uiId", {
					get: function() {
						return this._uiId
					},
					enumerable: !1,
					configurable: !0
				}), t.prototype.initProperty = function(e, t) {
					"number" == typeof e && (this._uiId = e), null != t.quickClose && (this
							._quickClose = t.quickClose), null != t.cache && (this._cache = t
						.cache), null != t.showType && (this._showType = t.showType)
				}, t.prototype.init = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
				}, t.prototype.onOpen = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
				}, t.prototype.onOpenAniOver = function() {}, t.prototype.onClose = function() {}, t
				.prototype.onTop = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
				}, s([u], t)
		}(a.default);
		n.default = l, cc._RF.pop()
	}, {
		"../res/ResKeeper": "ResKeeper"
	}],
	Utils: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "f6e2eUG+vVJg5J6cGB/4Eru", "Utils"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.Utils = void 0;
		var o = function() {
			function e() {}
			return Object.defineProperty(e, "isLandscape", {
				get: function() {
					var e = cc.view.getCanvasSize();
					return cc.sys.isMobile && (e = cc.winSize), e.width >= e.height
				},
				enumerable: !1,
				configurable: !0
			}), e.setHorizontalLayout = function(e, t, n, o, i) {
				void 0 === t && (t = 0), void 0 === o && (o = cc.Layout.HorizontalDirection
					.LEFT_TO_RIGHT), void 0 === i && (i = cc.Layout.ResizeMode.CONTAINER);
				for (var s = 0; s < e.children.length; s++) {
					e.children[s].setPosition(0, 0), e.children[0] && (e.height = "number" ==
						typeof n ? n : e.children[0].height);
					var r = e.getComponent(cc.Layout) || e.addComponent(cc.Layout);
					r.type = cc.Layout.Type.HORIZONTAL, r.resizeMode = i, r.spacingX = t, r
						.horizontalDirection = o, r.updateLayout()
				}
			}, e.setVerticalLayout = function(e, t, n, o, i) {
				void 0 === t && (t = 0), void 0 === o && (o = cc.Layout.VerticalDirection
					.TOP_TO_BOTTOM), void 0 === i && (i = cc.Layout.ResizeMode.CONTAINER);
				for (var s = 0; s < e.children.length; s++) e.children[s].setPosition(0, 0);
				e.children[0] && (e.width = "number" == typeof n ? n : e.children[0].width);
				var r = e.getComponent(cc.Layout) || e.addComponent(cc.Layout);
				r.type = cc.Layout.Type.VERTICAL, r.resizeMode = i, r.spacingY = t, r
					.horizontalDirection = o, r.updateLayout()
			}, e.setLayout = function(t, n) {
				if (n) {
					var o = e.isLandscape ? n.landscape : n.portrait;
					o || (o = n);
					var i = t.getComponent(cc.Layout) || t.addComponent(cc.Layout);
					if (i) {
						for (var s = 0; s < t.children.length; s++) t.children[s].x = t
							.children[s].y = 0;
						o.spacingX && e.setHorizontalLayout(t, o.spacingX), o.spacingY && e
							.setVerticalLayout(t, o.spacingY), i.updateLayout()
					}
				}
			}, e.setWidget = function(t, n, o) {
				if (n) {
					var i = e.isLandscape ? n.landscape : n.portrait;
					i || (i = n);
					var s = t.getComponent(cc.Widget) || t.addComponent(cc.Widget);
					for (var r in o && (s.target = o), s.alignMode = cc.Widget.AlignMode
							.ON_WINDOW_RESIZE, e.openWidgetProperty(s, i), i) null != s[r] && (
						s[r] = i[r]);
					s.updateAlignment()
				}
			}, e.openWidgetProperty = function(e, t) {
				e.isAlignBottom = null != t.bottom, e.isAlignLeft = null != t.left, e
					.isAlignRight = null != t.right, e.isAlignTop = null != t.top, e
					.isAlignVerticalCenter = null != t.verticalCenter, e
					.isAlignHorizontalCenter = null != t.horizontalCenter
			}, e.cloneObj = function(e) {
				if (!e) return null;
				var t = {};
				for (var n in e) t[n] = e[n];
				return t
			}, e.isFileExist = function(e, t) {
				void 0 === t && (t = "base");
				var n = cc.assetManager.getBundle(t);
				return !n || n.getDirWithPath(e).length > 0
			}, e
		}();
		n.Utils = o, cc._RF.pop()
	}, {}],
	View: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "0c9f6axUNtPJ4I/evrmDYS6", "View");
		var o, i = this && this.__extends || (o = function(e, t) {
				return (o = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] =
							t[n])
					})(e, t)
			}, function(e, t) {
				function n() {
					this.constructor = e
				}
				o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
					new n)
			}),
			s = this && this.__decorate || function(e, t, n, o) {
				var i, s = arguments.length,
					r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect
					.decorate(e, t, n, o);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(
						t, n, r) : i(t, n)) || r);
				return s > 3 && r && Object.defineProperty(t, n, r), r
			};
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = e("../const/Const"),
			a = e("../event/EventManager"),
			c = e("../utils/ComUtils"),
			u = e("./UIView"),
			l = cc._decorator,
			p = l.ccclass,
			h = (l.property, function(e) {
				function t() {
					var t = null !== e && e.apply(this, arguments) || this;
					return t.isLandscape = !1, t
				}
				return i(t, e), t.prototype.resize = function() {
					this.isLandscape = c.ComUtils.checkHorOrVec(), this.setLayout(), this
						.layout(), this.node.getComponent(cc.Layout) && this.node.getComponent(
							cc.Layout).updateLayout(), this.node.getComponent(cc.Widget) && this
						.node.getComponent(cc.Widget).updateAlignment(), a.EventManager
						.getInstance().addEventListener(r.default.mess_windowResize, this
							.onResize, this)
				}, t.prototype.onResize = function() {
					this.isLandscape != c.ComUtils.checkHorOrVec() && (this.isLandscape = c
						.ComUtils.checkHorOrVec(), this.setLayout()), this.layout()
				}, t.prototype.setLayout = function() {
					this.isLandscape ? this.layoutLandscape() : this.layoutPortrait()
				}, t.prototype.onDestroy = function() {
					e.prototype.onDestroy.call(this), a.EventManager.getInstance()
						.removeEventListener(r.default.mess_windowResize, this.onResize, this)
				}, t.prototype.layout = function() {}, t.prototype.layoutLandscape =
			function() {}, t.prototype.layoutPortrait = function() {}, s([p], t)
			}(u.default));
		n.default = h, cc._RF.pop()
	}, {
		"../const/Const": "Const",
		"../event/EventManager": "EventManager",
		"../utils/ComUtils": "ComUtils",
		"./UIView": "UIView"
	}],
	game: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "c98b0+9vLlJsILQg/daMOZO", "game"), Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.game = void 0;
		var o = e("../base_common/scripts/cc/RedefineLabel"),
			i = e("../base_common/scripts/common/MController"),
			s = e("../base_common/scripts/common/NodeUiConfig"),
			r = e("../base_common/scripts/common/PageHideShow"),
			a = e("../base_common/scripts/common/TaskQueue"),
			c = e("../base_common/scripts/common/Utils"),
			u = e("../base_common/scripts/config/BaseLangConf"),
			l = e("../base_common/scripts/config/BaseUIConf"),
			p = e("../base_common/scripts/const/Const"),
			h = e("../base_common/scripts/customNode/Combox"),
			f = e("../base_common/scripts/customNode/ComboxItem"),
			d = e("../base_common/scripts/customNode/ListView"),
			g = e("../base_common/scripts/customNode/ListViewItem"),
			_ = e("../base_common/scripts/customNode/SliderFix"),
			m = e("../base_common/scripts/event/EventManager"),
			y = e("../base_common/scripts/httpreq/HttpRequest"),
			v = e("../base_common/scripts/language/LanguageComp"),
			L = e("../base_common/scripts/language/LanguageManager"),
			b = e("../base_common/scripts/log/LogManager"),
			C = e("../base_common/scripts/log/zLog"),
			R = e("../base_common/scripts/network/NetInterface"),
			I = e("../base_common/scripts/network/NetManager"),
			w = e("../base_common/scripts/network/NetNode"),
			T = e("../base_common/scripts/res/NodePool"),
			M = e("../base_common/scripts/res/ResKeeper"),
			N = e("../base_common/scripts/res/ResLeakChecker"),
			O = e("../base_common/scripts/res/ResLoader"),
			k = e("../base_common/scripts/res/ResUtils"),
			x = e("../base_common/scripts/sound/SoundManager"),
			E = e("../base_common/scripts/ui/UIAnimation"),
			S = e("../base_common/scripts/ui/UIManager"),
			A = e("../base_common/scripts/ui/UIView"),
			U = e("../base_common/scripts/ui/View"),
			P = e("../base_common/scripts/utils/ComUtils"),
			V = e("../base_common/scripts/utils/EngineUtils"),
			F = e("../base_common/scripts/utils/IntersectUtils"),
			B = e("../base_common/scripts/utils/NodeUtils"),
			j = e("../base_common/scripts/utils/ObjectPool"),
			D = e("../base_common/scripts/utils/SpineUtils"),
			H = e("../base_common/scripts/utils/TimeUtil"),
			z = function() {};
		n.game = z, z.RedefineLabel = o.default, z.MController = i.default, z.NodeUiConfig = s.default,
			z.PageHideShow = r.default, z.TaskQueue = a.TaskQueue, z.TaskManager = a.TaskManager, z
			.Utils = c.Utils, z.BaseLangConf = u.default, z.LanguageType = u.LanguageType, z
			.BaseUIConf = l.default, z.BASEUIID = l.BASEUIID, z.Const = p.default, z.Combox = h.default,
			z.ComboxItem = f.default, z.ListView = d.default, z.ListViewEvent = d.ListViewEvent, z
			.ListViewItem = g.default, z.SliderFix = _.default, z.EventManager = m.EventManager, z
			.HttpRequest = y.default, z.HttpType = y.HttpType, z.LanguageComp = v.default, z
			.LanguageManager = L.default, z.LogManager = b.LogManager, z.zLog = C.zLog, z
			.DefStringProtocol = R.DefStringProtocol, z.NetManager = I.NetManager, z.NetTipsType = w
			.NetTipsType, z.NetNodeState = w.NetNodeState, z.NetNode = w.NetNode, z.NodePool = T
			.default, z.ResKeeper = M.default, z.ResLeakChecker = N.ResLeakChecker, z.ResLoader = O
			.ResLoader, z.LoadResArgs = k.LoadResArgs, z.LoadRemoteArgs = k.LoadRemoteArgs, z
			.LoadResMixArgs = k.LoadResMixArgs, z.ResUtils = k.ResUtils, z.SoundManager = x.default, z
			.SoundVO = x.SoundVO, z.UIAnimation = E.default, z.UIManager = S.default, z.UIDefAni = S
			.UIDefAni, z.UIView = A.default, z.UIShowTypes = A.UIShowTypes, z.View = U.default, z
			.ComUtils = P.ComUtils, z.EngineUtils = V.default, z.IntersectUtils = F.default, z
			.NodeUtils = B.NodeUtils, z.ObjectPool = j.default, z.SpineUtils = D.default, z.TimeUtil = H
			.default, window.game = z, cc._RF.pop()
	}, {
		"../base_common/scripts/cc/RedefineLabel": "RedefineLabel",
		"../base_common/scripts/common/MController": "MController",
		"../base_common/scripts/common/NodeUiConfig": "NodeUiConfig",
		"../base_common/scripts/common/PageHideShow": "PageHideShow",
		"../base_common/scripts/common/TaskQueue": "TaskQueue",
		"../base_common/scripts/common/Utils": "Utils",
		"../base_common/scripts/config/BaseLangConf": "BaseLangConf",
		"../base_common/scripts/config/BaseUIConf": "BaseUIConf",
		"../base_common/scripts/const/Const": "Const",
		"../base_common/scripts/customNode/Combox": "Combox",
		"../base_common/scripts/customNode/ComboxItem": "ComboxItem",
		"../base_common/scripts/customNode/ListView": "ListView",
		"../base_common/scripts/customNode/ListViewItem": "ListViewItem",
		"../base_common/scripts/customNode/SliderFix": "SliderFix",
		"../base_common/scripts/event/EventManager": "EventManager",
		"../base_common/scripts/httpreq/HttpRequest": "HttpRequest",
		"../base_common/scripts/language/LanguageComp": "LanguageComp",
		"../base_common/scripts/language/LanguageManager": "LanguageManager",
		"../base_common/scripts/log/LogManager": "LogManager",
		"../base_common/scripts/log/zLog": "zLog",
		"../base_common/scripts/network/NetInterface": "NetInterface",
		"../base_common/scripts/network/NetManager": "NetManager",
		"../base_common/scripts/network/NetNode": "NetNode",
		"../base_common/scripts/res/NodePool": "NodePool",
		"../base_common/scripts/res/ResKeeper": "ResKeeper",
		"../base_common/scripts/res/ResLeakChecker": "ResLeakChecker",
		"../base_common/scripts/res/ResLoader": "ResLoader",
		"../base_common/scripts/res/ResUtils": "ResUtils",
		"../base_common/scripts/sound/SoundManager": "SoundManager",
		"../base_common/scripts/ui/UIAnimation": "UIAnimation",
		"../base_common/scripts/ui/UIManager": "UIManager",
		"../base_common/scripts/ui/UIView": "UIView",
		"../base_common/scripts/ui/View": "View",
		"../base_common/scripts/utils/ComUtils": "ComUtils",
		"../base_common/scripts/utils/EngineUtils": "EngineUtils",
		"../base_common/scripts/utils/IntersectUtils": "IntersectUtils",
		"../base_common/scripts/utils/NodeUtils": "NodeUtils",
		"../base_common/scripts/utils/ObjectPool": "ObjectPool",
		"../base_common/scripts/utils/SpineUtils": "SpineUtils",
		"../base_common/scripts/utils/TimeUtil": "TimeUtil"
	}],
	zLog: [function(e, t, n) {
		"use strict";
		cc._RF.push(t, "7d907icQ6lJWIjqh19g0PJr", "zLog");
		var o = this && this.__spreadArrays || function() {
			for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
			var o = Array(e),
				i = 0;
			for (t = 0; t < n; t++)
				for (var s = arguments[t], r = 0, a = s.length; r < a; r++, i++) o[i] = s[r];
			return o
		};
		Object.defineProperty(n, "__esModule", {
			value: !0
		}), n.zLog = void 0;
		var i = function() {
			function e() {}
			return e.init = function() {
					if (e.enabled)
						if (e.isIE) console.log && (console.log = function(e) {
							for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] =
								arguments[n]
						});
						else if (!e._isInit) {
						e._isInit = !0;
						try {
							e._consoleTrace = console.trace, console.trace = e.trace, e
								._consoleDebug = console.debug, console.debug = e.debug, e
								._consoleWarn = console.warn, console.warn = e.warn, e
								._consoleError = console.error, console.error = e.error, e
								._consoleLog = console.log, console.log = e.log
						} catch (t) {
							console.log("Non support Log module!")
						}
					}
				}, e.dispose = function() {
					e._consoleTrace && (console.trace = e._consoleTrace, e._consoleTrace = null), e
						._consoleDebug && (console.debug = e._consoleDebug, e._consoleDebug = null),
						e._consoleWarn && (console.warn = e._consoleWarn, e._consoleWarn = null), e
						._consoleError && (console.error = e._consoleError, e._consoleError = null),
						e._consoleLog && (console.log = e._consoleLog, e._consoleLog = null)
				}, e.insertHead = function(e) {
					var t;
					switch (e) {
						case 1:
							t = "trace";
							break;
						case 2:
							t = "log";
							break;
						case 3:
							t = "debug";
							break;
						case 4:
							t = "warn";
							break;
						case 5:
							t = "error";
							break;
						case 6:
							t = "info"
					}
					var n = new Date,
						o = n.getHours(),
						i = n.getMinutes(),
						s = n.getSeconds(),
						r = n.getMilliseconds();
					return "[" + (o < 10 ? "0" + o : o) + ":" + (i < 10 ? "0" + i : i) + ":" + (s <
						10 ? "0" + s : s) + "." + (r < 10 ? "00" + r : r < 100 ? "0" + r : r
						.toString()) + "][" + t + "]>\t"
				}, e.execLogFun = function(t, n, i) {
                    console.log("execLogFun1",t,n,i);
					for (var s = [], r = 3; r < arguments.length; r++) s[r - 3] = arguments[r];
					var a = "string" == typeof i || "number" == typeof i || "boolean" == typeof i;
					t.apply(void 0, o([a ? "" + e.insertHead(n) + i : i], s))
				}, e.trace = function(t) {
					for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
					e.isIE || (e.enabled ? (e._isInit || e.init(), (e.level & e.LEVEL_TRACE) == e
						.LEVEL_TRACE && e.execLogFun.apply(e, o([e._consoleTrace ? e
							._consoleTrace : console.trace, 1, t
						], n))) : console.trace.apply(console, o([t], n)))
				}, e.log = function(t) {
					for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
					e.isIE || (e.enabled ? (e._isInit || e.init(), (e.level & e.LEVEL_LOG) == e
						.LEVEL_LOG && e.execLogFun.apply(e, o([e._consoleLog ? e
							._consoleLog : console.log, 2, t
						], n))) : console.log.apply(console, o([t], n)))
				}, e.debug = function(t) {
					for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
					e.isIE || (e.enabled ? (e._isInit || e.init(), (e.level & e.LEVEL_DEBUG) == e
						.LEVEL_DEBUG && e.execLogFun.apply(e, o([e._consoleDebug ? e
							._consoleDebug : console.debug, 3, t
						], n))) : console.debug.apply(console, o([t], n)))
				}, e.warn = function(t) {
					for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
					e.isIE || (e.enabled ? (e._isInit || e.init(), (e.level & e.LEVEL_WARN) == e
						.LEVEL_WARN && e.execLogFun.apply(e, o([e._consoleWarn ? e
							._consoleWarn : console.warn, 4, t
						], n))) : console.warn.apply(console, o([t], n)))
				}, e.error = function(t) {
					for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
					e.isIE || (e.enabled ? (e._isInit || e.init(), (e.level & e.LEVEL_ERROR) == e
						.LEVEL_ERROR && e.execLogFun.apply(e, o([e._consoleError ? e
							._consoleError : console.error, 5, t
						], n))) : console.error.apply(console, o([t], n)))
				}, e.info = function(t) {
					for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
					if (!e.isIE)
						if (e.enabled) {
							if (e._isInit || e.init(), (e.level & e.LEVEL_INFO) == e.LEVEL_INFO) {
								var s = e.level;
								e.level = e.LEVEL_LOG, e.execLogFun.apply(e, o([e._consoleLog ? e
									._consoleLog : console.log, 6, t
								], n)), e.level = s
							}
						} else console.log.apply(console, o([t], n))
				}, Object.defineProperty(e, "isIE", {
					get: function() {
						return window.ActiveXObject || "ActiveXObject" in window
					},
					enumerable: !1,
					configurable: !0
				}), e.LEVEL_NONE = 0, e.LEVEL_TRACE = 1, e.LEVEL_LOG = 2, e.LEVEL_DEBUG = 4, e
				.LEVEL_WARN = 8, e.LEVEL_ERROR = 16, e.LEVEL_INFO = 32, e.LEVEL_ALL = 63, e
				._isInit = !1, e.enabled = !0, e.level = e.LEVEL_ALL, e
		}();
		n.zLog = i, cc._RF.pop()
	}, {}]
}, {}, ["RedefineLabel", "IControl", "MController", "NodeUiConfig", "PageHideShow", "TaskQueue", "Utils",
	"BaseLangConf", "BaseUIConf", "Const", "Combox", "ComboxItem", "ListView", "ListViewItem", "SliderFix",
	"EventManager", "HttpRequest", "LanguageComp", "LanguageManager", "LogManager", "zLog", "NetInterface",
	"NetManager", "NetNode", "NodePool", "ResKeeper", "ResLeakChecker", "ResLoader", "ResUtils", "SoundManager",
	"UIAnimation", "UIManager", "UIView", "View", "ComUtils", "EngineUtils", "IntersectUtils", "NodeUtils",
	"ObjectPool", "SpineUtils", "TimeUtil", "game"
]);