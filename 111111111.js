! function(t) {
	function e(e) {
		for (var s, r, o = e[0], c = e[1], l = e[2], h = 0, u = []; h < o.length; h++) r = o[h], a[r] && u.push(a[r][0]), a[r] = 0;
		for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
		for (d && d(e); u.length;) u.shift()();
		return n.push.apply(n, l || []), i()
	}
	function i() {
		for (var t, e = 0; e < n.length; e++) {
			for (var i = n[e], s = !0, o = 1; o < i.length; o++) {
				var c = i[o];
				0 !== a[c] && (s = !1)
			}
			s && (n.splice(e--, 1), t = r(r.s = i[0]))
		}
		return t
	}
	var s = {}, a = {
		49: 0
	}, n = [];

	function r(e) {
		if (s[e]) return s[e].exports;
		var i = s[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports
	}
	r.m = t, r.c = s, r.d = function(t, e, i) {
		r.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: i
		})
	}, r.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, r.t = function(t, e) {
		if (1 & e && (t = r(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var i = Object.create(null);
		if (r.r(i), Object.defineProperty(i, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t) for (var s in t) r.d(i, s, function(e) {
			return t[e]
		}.bind(null, s));
		return i
	}, r.n = function(t) {
		var e = t && t.__esModule ? function() {
				return t.
				default
			} : function() {
				return t
			};
		return r.d(e, "a", e), e
	}, r.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, r.p = "${assets_base}/";
	var o = window.webpackJsonp = window.webpackJsonp || [],
		c = o.push.bind(o);
	o.push = e, o = o.slice();
	for (var l = 0; l < o.length; l++) e(o[l]);
	var d = c;
	n.push([561, 0]), i()
}({
	180: function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAABGdBTUEAALGPC/xhBQAAAY1JREFUKBWNkr1Lw2AQh5vQEmyWgnbQQVwqbm7iolhQVKg4VOpQMRBoMxTBUVwE0T9AcbBNk10cRKiog5MIbjqJo6i4ibjUxSY+pwip/fLguLd3z+/eu7wNhbBisRiV+B9TbdueVxTlgTjxL4Hv+2k87nneGaKFTiI1l8sZ3LADqCE6QFRoJ1KB/Xw+v0pcA1QR7SHaaiVSggXAZQQOuTAN3EQiYSWTyc8gUyeQQqlUmiUcspeOqEJctCyr+itqEEihXC6P1Gq1E449iK41TUsZhvEqtaYCKXDTIN3POQ7g9/g0Nz22FADIg/YSTvFhbnrBJ8NSaGMy+7vUua2LoKnyo5k5jtNH/hIfp/MzPsbnv206EqMMAcr8/fhdJBKZMU3ziXPj0rzFKG9RodZN1ytd1+ey2eybwGJ1I/FlUsAX5AU+jsViU0G4TgBsstgRySiwDZzOZDIfAgXtewfGWKfzthSAN1luIwgFzwqdd+m8QtIDLgDvB4G/Z/mT3SCoEpeAZaTO5rpuvDP1Q3wBaQaVWF9BeIIAAAAASUVORK5CYII="
	},
	493: function(t, e, i) {},
	494: function(t, e, i) {},
	495: function(t, e, i) {},
	496: function(t, e, i) {},
	497: function(t, e, i) {},
	498: function(t, e, i) {},
	499: function(t, e, i) {},
	500: function(t, e, i) {},
	501: function(t, e, i) {},
	502: function(t, e, i) {},
	561: function(t, e, i) {
		"use strict";
		i.r(e);
		var s = i(2),
			a = i(6),
			n = (i(493), i(1)),
			r = {
				productId: null,
				prodName: "",
				marketPrice: "",
				subTitle: "",
				freight: "",
				shelveStatus: "",
				mixInst: "",
				shopId: "",
				priceSectionList: [],
				tagList: [],
				prodImageList: [],
				actEndTime: "",
				currentTime: "",
				payWayList: [],
				isCollected: "",
				monthSoldNum: 0,
				attrsSelected: [],
				activateDesc: [],
				rpktList: [],
				productService: [],
				goodReviewsNum: 0,
				midReviewsNum: 0,
				badReviewsNum: 0,
				totalCount: 0,
				reviews: [],
				totalNum: 0,
				questionList: [],
				name: "",
				logo: "",
				productNum: null,
				score: "",
				logisticsScore: "",
				productScore: "",
				serviecScore: "",
				detail: null,
				afterSales: null,
				attrsList: [{
					attrsName: "产地",
					attrsValue: "香港"
				}, {
					attrsName: "产地",
					attrsValue: "香港"
				}, {
					attrsName: "产地",
					attrsValue: "香港"
				}],
				productList: [],
				num: 0,
				norm: {}
			}, o = i(18),
			c = i.n(o),
			l = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
				}
				return t
			};
		window.$base && "${base}" != window.$base ? $base = window.$base : $base = "/malldemo";
		var d = c.a.create({
			baseURL: window.$base
		}),
			h = function(t, e) {
				return d.get(t, {
					params: e
				})
			}, u = function(t) {
				return h("/product/addCart.json", l({}, t))
			}, p = i(99),
			m = i.n(p),
			v = i(8),
			P = i(633),
			g = {
				data: function() {
					return {
						h: "00",
						m: "00",
						s: "00"
					}
				},
				props: {
					stamp: Number
				},
				watch: {
					stamp: function(t) {
						t <= 0 && (this.h = "00", this.m = "00", this.s = "00");
						var e = Math.floor,
							i = e(t / 1e3),
							s = e(i / 3600),
							a = e(i / 60) % 60,
							n = i % 60;
						this.h = s > 9 ? s : "0" + s, this.m = a > 9 ? a : "0" + a, this.s = n > 9 ? n : "0" + n
					}
				}
			}, f = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "clock"
				}, [i("span", [t._v(t._s(t.h))]), t._v(" "), i("b", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(t.m))]), t._v(" "), i("b", [t._v(":")]), t._v(" "), i("span", [t._v(t._s(t.s))])])
			};
		f._withStripped = !0;
		var _ = i(0),
			S = !1;
		var C = function(t) {
			S || i(495)
		}, w = Object(_.a)(g, f, [], !1, C, "data-v-02474288", null);
		w.options.__file = "src/pages/product/detail/children/clock.vue";
		var y = w.exports,
			k = i(23),
			I = i(12),
			b = i(9),
			x = i(33),
			L = i(5),
			R = {
				props: {
					vendorId: String,
					stk: [Number, String],
					IntegralDeductio: [Number, String],
					actStart: {
						type: [String, Number],
						default: ""
					},
					actStartTime: {
						type: [Number, String],
						default: ""
					},
					recommendProduct: Array,
					isShowRedPacket: [Boolean],
					isShowfinally: [Boolean],
					isShowShopRedPacketList: [Boolean],
					isSkillProduct: [Boolean]
				},
				data: function() {
					return {
						twoLineStyle: "-webkit-line-clamp: 2;display: -webkit-box;-webkit-box-orient: vertical;word-break: break-all;text-overflow: ellipsis;overflow: hidden;",
						expire: 0,
						timer: null,
						baseUrl: $base,
						watchIntegralDeductio: "",
						enjoyMinPrice: "",
						savechildActStart: "",
						isSkillProduct1: !1
					}
				},
				components: {
					Clock: y,
					LayoutFlex: k.a,
					BaseLabel: I.a,
					BaseIcon: b.a
				},
				created: function() {
					var t = this;
					this.isSkillProduct1 = this.isSkillProduct;
					this.savechildActStart = this.actStart, this.P = this.$parent;
					var e = function(e) {
						"000000" == e.data.returnCode && window._assign(t.P, e.data)
					};
					(function(t) {
						return h("/favorite/query.json", {
							prodId: t
						})
					})(this.P.productId).then(function(e) {
						"000000" == e.data.returnCode && (t.P.isCollected = "1")
					}),
					function(t) {
						return h("/product/reviews.json", {
							prodId: t
						})
					}(this.P.productId).then(e),
					function(t) {
						return h("/product/consult.json", {
							prodId: t
						})
					}(this.P.productId).then(e),
					function(t, e) {
						return h("/product/service.json", {
							prodId: t,
							channel: e
						})
					}(this.P.productId, this.P.channel).then(function(e) {
						"000000" == e.data.returnCode && window._assign(t.P, e.data)
					}),
					function(t) {
						return h("/product/shopInfo.json", {
							shopId: t
						})
					}(this.P.shopId).then(e)
				},
				mounted: function() {
					var t = this;
					this.$nextTick(function() {
						t.initSwiper(), t.P.actEndTime && t.P.currentTime && t.initTimer()
					})
				},
				watch: {
					IntegralDeductio: function() {
						this.watchIntegralDeductio = this.IntegralDeductio
					}
				},
				methods: {
					trackerSRS: function(t, e, i) {
						if (window.SRSAPP && window.SRSAPP.onEvent) {
							t = window.pageId + t;
							window.SRSAPP.onEvent(t, e, i)
						}
					},
					toFlashSale: function() {
						var t = this;
						L.a.get(this.baseUrl + "/flashSale/clue.json", {
							params: {
								prodId: this.P.productId
							}
						}).then(function(e) {
							var i = e.data;
							"000000" == i.returnCode ? window.location.href = t.baseUrl + "/flashSale/index.html" : t.$toast(i.returnMsg)
						}).
						catch (function(e) {
							t.$toast("系统繁忙，请稍后再试！")
						})
					},
					toShop: function() {
						window.location.href = this.baseUrl + "/shop/index.html?shopId=" + this.P.shopId
					},
					gotoLink: function(t) {
						location.href = t
					},
					initTimer: function() {
						var t = this,
							e = this.getDate(this.P.actEndTime),
							i = this.getDate(this.P.currentTime),
							s = e && i ? e - i : 0;
						s <= 0 || (this.timer && clearInterval(this.timer), this.timer = setInterval(function() {
							t.expire = s -= 1e3, t.expire <= 0 && clearInterval(t.timer)
						}, 1e3))
					},
					getLevel: function(t) {
						return (t = +t) >= 4.5 ? "高" : t < 4.5 && t > 4 ? "中" : "低"
					},
					initSwiper: function() {
						new P.a(".slider", {
							pagination: {
								el: ".swiper-pagination"
							}
						})
					},
					toggleCollected: function() {
						var t = this;
						this.isRequestingCollectState || (this.isRequestingCollectState = !0, window.timer = setTimeout(function() {
							t.isRequestingCollectState = !1
						}, 2e3), "1" == this.P.isCollected ? function(t) {
							var e = t.prodId,
								i = t.stk;
							return h("/favorite/remove.json", {
								prodId: e,
								stk: i
							})
						}({
							prodId: this.P.productId,
							stk: this.stk
						}).then(function(e) {
							e.data && "000000" == e.data.returnCode ? (t.stk = e.data.stk || "", t.$emit("stkValue", t.stk), t.P.isCollected = "", t.$toast({
								msg: "已取消收藏"
							})) : e.data && "000002" == e.data.returnCode ? location.href = $base + "/security/favorite/remove.html?prodId=" + t.P.productId + "&channel=" + t.P.channel + "&actId=" + t.P.actId : t.$toast({
								msg: e.data.returnMsg || "取消收藏失败"
							}), t.isRequestingCollectState = !1, clearTimeout(window.timer)
						}) : function(t) {
							var e = t.prodId,
								i = t.stk;
							return h("/favorite/add.json", {
								prodId: e,
								stk: i
							})
						}({
							prodId: this.P.productId,
							stk: this.stk
						}).then(function(e) {
							e.data && "000000" == e.data.returnCode ? (t.stk = e.data.stk || "", t.$emit("stkValue", t.stk), t.P.isCollected = "1", t.$toast({
								msg: "收藏成功"
							})) : e.data && "000002" == e.data.returnCode ? location.href = $base + "/security/favorite/add.html?prodId=" + t.P.productId + "&prodName=" + t.P.prodName + "&channel=" + t.P.channel + "&actId=" + t.P.actId : t.$toast({
								msg: e.data.returnMsg || "收藏失败"
							}), t.isRequestingCollectState = !1, clearTimeout(window.timer)
						}))
					},
					getDate: function(t) {
						if (!t) return null;
						for (var e = [{
							index: 4,
							str: "/"
						}, {
							index: 6,
							str: "/"
						}, {
							index: 8,
							str: " "
						}, {
							index: 10,
							str: ":"
						}, {
							index: 12,
							str: ":"
						}], i = t.split(""), s = 0; s < e.length; s++) i.splice(e[s].index + s, 0, e[s].str);
						var a = i.join("");
						return Date.parse(a) ? new Date(a) : null
					}
				},
				filters: {
					formatMoney: function(t) {
						var e = String(t).indexOf(".") + 1,
							i = String(t).length - e,
							s = t.split("");
						return 2 != i || 0 == e ? 1 == i && 0 != e && 0 == s[s.length - 1] ? parseInt(t) : t : 0 == s[s.length - 1] && 0 != s[s.length - 2] ? parseFloat(String(t)) : 0 == s[s.length - 1] && 0 == s[s.length - 2] ? parseInt(t) : 0 != s[s.length - 1] && 0 == s[s.length - 2] || 0 != s[s.length - 1] && 0 != s[s.length - 2] ? t : void 0
					}
				},
				computed: {
					isShowPriceSection: function() {
						return (this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].maxPrice) != (this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].minPrice)
					},
					savePageMaxMixPoint: function() {
						return this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].maxMixPoint
					},
					savePageMinMixPrice: function() {
						return this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].minMixPrice
					},
					showIntegralPlusPrice: function() {
						if ("INTEGRAL" == this.P.channel) {
							var t = new v.a(0),
								e = +(this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].minPrice),
								i = +this.P.pointChangeRate / 100,
								s = +t.plus(e).times(this.returnWatchIntegralDeductio).div(i);
							s = 1 != (Math.floor(s) % 100 == 0) ? 100 * Math.floor(Math.floor(s) / 100) : Math.floor(s);
							var a = +t.plus(e).minus(t.plus(e).times(this.returnWatchIntegralDeductio));
							return {
								integralNumber: s,
								priceNumber: a = Math.round(100 * a) / 100
							}
						}
					},
					returnWatchIntegralDeductio: function() {
						return +this.watchIntegralDeductio / 100
					},
					rpktListAndreturnTips: function() {
						return "1" == this.P.productRedValue.rpktList.length ? [this.P.productRedValue.rpktList[0].rpktName, this.shopRedPacketReturnTips, this.returnTips].join("  ") : "2" == this.P.productRedValue.rpktList.length ? [this.P.productRedValue.rpktList[0].rpktName, this.P.productRedValue.rpktList[1].rpktName, this.shopRedPacketReturnTips, this.returnTips].join("  ") : "3" == this.P.productRedValue.rpktList.length ? [this.P.productRedValue.rpktList[0].rpktName, this.P.productRedValue.rpktList[1].rpktName, this.P.productRedValue.rpktList[2].rpktName, this.shopRedPacketReturnTips, this.returnTips].join("  ") : "4" == this.P.productRedValue.rpktList.length ? [this.P.productRedValue.rpktList[0].rpktName, this.P.productRedValue.rpktList[1].rpktName, this.P.productRedValue.rpktList[2].rpktName, this.P.productRedValue.rpktList[3].rpktName, this.shopRedPacketReturnTips, this.returnTips].join("  ") : void 0
					},
					shopRedPacketReturnTips: function() {
						var t = [];
						return this.P.getShopRedPacketList.length > 0 && this.P.getShopRedPacketList.forEach(function(e) {
							t.push(e.iepProdNameCn)
						}), t
					},
					shopRedPacketReturnTipsPlusreturnTips: function() {
						return [this.shopRedPacketReturnTips, this.returnTips].join("  ")
					},
					returnTips: function() {
						var t = [];
						return 0 != this.P.getFinancialValue.financialInfoList.lengt ? (this.P.getFinancialValue.financialInfoList.forEach(function(e) {
							e.prefStartAmt && "-1" != e.instLmtPeriod ? t.push("满" + e.prefStartAmt + "元" + e.instLmtPeriod + "期以上可使用") : e.prefStartAmt && "-1" == e.instLmtPeriod ? t.push("满" + e.prefStartAmt + "元可使用") : !e.prefStartAmt && "-1" == e.instLmtPeriod && e.iepProdNameCn ? t.push(e.iepProdNameCn) : e.iepProdNameCn && t.push(e.iepProdNameCn)
						}), t.join("  ")) : t.push("没有相应优惠券").join("")
					},
					phoneBankGetGuest: function() {
						return this.P.afterDeductionMinPrice == this.P.afterDeductionMaxPrice ? this.P.afterDeductionMinPrice : this.P.afterDeductionMinPrice + "-" + this.P.afterDeductionMaxPrice
					},
					showDateStyle: function() {
						if (this.actStartTime) {
							var t = this.actStartTime,
								e = t.slice(0, 4),
								i = t.slice(4, 6),
								s = t.slice(6, 8),
								a = t.slice(8, 10),
								n = t.slice(10, 12),
								r = t.slice(12, 14),
								o = new Date(e + "/" + i + "/" + s + " " + a + ":" + n + ":" + r).getTime(),
								c = (new Date(o).toLocaleDateString(), o - new Date(new Date((new Date).toLocaleDateString()).getTime() + 864e5 - 1));
							if (c < 0) return "今天" + a + ":" + n + "开抢";
							var l = o - new Date(new Date((new Date).toLocaleDateString()).getTime() + 1728e5 - 1);
							if (c > 0 && l < 0) return "明天" + a + ":" + n + "开抢";
							if (l > 1) return i + "." + s + "开抢"
						}
					},
					spaceIntervalintervalNew: function() {
						return (this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].maxPrice) == (this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].minPrice) ? "<span>价格￥" + this.P.priceSectionList[0].minPrice + "</span>" : "<span>价格￥" + this.P.priceSectionList[0].minPrice + "-" + this.P.priceSectionList[0].maxPrice + "</span>"
					},
					spaceIntervalinterval: function() {
						return (this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].maxPrice) == (this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].minPrice) ? "COMMON" == this.P.channel ? "<span>￥" + this.P.priceSectionList[0].minPrice + '</span><span style="color:red;padding-left:2px;">积分抵' + this.P.pointDiscountRate + "%</span>" : "<span>￥" + this.P.priceSectionList[0].minPrice + "</span>" : "COMMON" == this.P.channel ? "<span>￥" + this.P.priceSectionList[0].minPrice + '起</span><span style="color:red;padding-left:2px;">积分抵' + this.P.pointDiscountRate + "%</span>" : "<span>￥" + this.P.priceSectionList[0].minPrice + "起</span>"
					},
					exchangeAndIntegral: function() {
						if ("INTEGRAL" == this.P.channel) return '<span style="font-weight:normal;">全积分</span>'
					},
					freeInstOrInst: function() {
						return "<span>" + this.P.maxFreeInst + "期免息</span>"
					},
					priceType: function() {
						var t = this.P.priceSectionList;
						return t.length > 1 ? 3 : t[0].priceType
					},
					hasPriceRange: function() {
						var t = !1;
						return this.P.priceSectionList.forEach(function(e) {
							0 == e.priceType && e.minPrice != e.maxPrice && (t = !0)
						}), t
					},
					hasIntegral: function() {
						var t = !1;
						return this.P.priceSectionList.forEach(function(e) {
							2 == e.priceType && (t = !0)
						}), t
					},
					hasPeried: function() {
						var t = !1;
						return this.P.priceSectionList.forEach(function(e) {
							1 == e.priceType && (t = !0)
						}), t
					},
					moneyPlusIntegral: function() {
						var t = !1;
						return this.P.priceSectionList.forEach(function(e) {
							0 == e.priceType && (t = !0)
						}), t
					},
					isperiedStyle: function() {
						return "INTEGRAL" == this.P.channel && this.hasPeried && !this.hasIntegral || this.P.minInst || this.moneyPlusIntegral && "COMMON" == this.P.channel && this.hasIntegral && !this.hasPeried
					},
					isShowInstFree: function() {
						return !("INTEGRAL" == this.P.channel && this.ispretermissionIntegral) && this.P.isInstalment && this.P.isFree && this.P.maxFreeInst && "NEWCUSTOMER" != this.P.channel
					},
					ispretermissionIntegral: function() {
						return this.P.fatherPayWayArrey.indexOf("2") > -1
					},
					blendPoint: function() {
						var t = {};
						return this.P.priceSectionList.forEach(function(e) {
							e.maxMixPoint && e.minMixPrice && (t.maxMix = e.maxMixPoint, t.minMix = e.minMixPrice)
						}), t
					},
					showIntegralAndPrice: function() {
						return "INTEGRAL" == this.P.channel && "0.00" == this.P.minCashPart && "0.00" == this.P.maxCashPart ? this.P.minPointPart == this.P.maxPointPart ? this.P.minPointPart + "积分" : this.P.minPointPart + "积分起" : this.P.minPointPart == this.P.maxPointPart && this.P.minCashPart == this.P.maxCashPart ? this.P.minPointPart + "积分+￥" + this.P.minCashPart : this.P.minPointPart + "积分+￥" + this.P.minCashPart + "/起"
					},
					showFrightType: function() {
						return this.P.freight
					},
					priceRange: function() {
						var t = {};
						return this.P.priceSectionList.forEach(function(e) {
							var i = 0 == e.priceType ? "rmb" : "point";
							0 == e.priceType && (e.maxPrice = Object(x.a)(e.maxPrice), e.minPrice = Object(x.a)(e.minPrice)), t[i] = e.minPrice + (e.minPrice != e.maxPrice && "rmb" == i ? "-" + e.maxPrice : "")
						}), t
					},
					everydayPriceRange: function() {
						var t = this,
							e = {};
						return this.P.priceSectionList.forEach(function(i) {
							var s = 0 == i.priceType ? "rmb" : "point";
							0 == i.priceType && (i.maxPrice = Object(x.a)(i.maxPrice), i.minPrice = Object(x.a)(i.minPrice), t.enjoyMinPrice = i.minPrice), e[s] = i.minPrice != i.maxPrice && "rmb" == s ? "起" : ""
						}), e
					}
				}
			}, T = function() {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "content"
				}, [s("div", {
					staticClass: "slider swiper-container"
				}, [s("div", {
					staticClass: "swiper-wrapper"
				}, t._l(t.P.prodImageList, function(t, e) {
					return s("div", {
						key: e,
						staticClass: "swiper-slide"
					}, [s("img", {
						attrs: {
							src: t.prodImageUrl,
							alt: ""
						}
					})])
				})), t._v(" "), s("div", {
					staticClass: "swiper-pagination"
				})]), t._v(" "), t.P.actEndTime && t.P.currentTime && "SECKILL" == t.P.channel ? s("div", {
					staticClass: "countdown"
				}, [s("div", {
					staticClass: "l"
				}, [s("div", {
					staticClass: "everyday-enjoy"
				}), t._v(" "), s("div", {
					staticClass: "price-top-all"
				}, [s("div", {
					staticClass: "price-top"
				}, [s("div", {
					staticStyle: {
						display: "inline-block"
					}
				}, [t.isperiedStyle ? s("div", {
					staticClass: "isPeriedStyle isPeriedStyle-1"
				}, [s("div", [s("b", {
					staticClass: "isPeriedStyle-b"
				}), t._v(" "), s("span", {
					staticClass: "isPeriedStyle-rmb isSeckillPeriedStyle-rmb",
					staticStyle: {
						"vertical-align": "middle"
					}
				}, [t._v(t._s(t.showIntegralAndPrice))])])]) : s("div", {
					staticClass: "notPeriedStyle notPeriedStyle-2"
				}, [s("div", [s("b", {
					staticClass: "isPeriedStyle-b"
				}), t._v(" "), t.P.minPointPart == t.P.maxPointPart && t.P.minCashPart == t.P.maxCashPart ? s("span", {
					staticClass: "isSeckillPeriedStyle-rmb",
					staticStyle: {
						"vertical-align": "middle"
					}
				}, [t._v("\n                     " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart) + "\n                   ")]) : s("span", {
					staticClass: "isSeckillPeriedStyle-rmb",
					staticStyle: {
						"vertical-align": "middle"
					}
				}, [t._v("\n                     " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart)), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])])])])]), t._v(" "), s("div", {
					staticClass: "market-price-box"
				}, [s("div", {
					staticClass: "blend blend-display"
				}, [s("div", {
					staticClass: "blend-point3"
				}, [s("span", {
					staticClass: "marketPriceSection marketPriceSection1",
					domProps: {
						innerHTML: t._s(t.spaceIntervalinterval)
					}
				}), t._v(" "), "INTEGRAL" == t.P.channel ? s("span", {
					staticClass: "reddem-points"
				}, [t._v("积分可抵10%-100%")]) : t._e()])])])])]), t._v(" "), 1 == t.actStart ? s("div", {
					staticClass: "r"
				}, [s("div", {
					staticClass: "will-end"
				}, [t._v("距抢购结束")]), t._v(" "), s("Clock", {
					attrs: {
						stamp: t.expire
					}
				})], 1) : t._e(), t._v(" "), 0 == t.actStart ? s("div", {
					staticClass: "r",
					class: {
						"actStart-r": 0 == t.actStart
					}
				}, [s("span", [t._v(t._s(t.showDateStyle))])]) : t._e()]) : t._e(), t._v(" "), s("div", {
					staticClass: "info",
					class: {
						seckillInfo: "SECKILL" == t.P.channel
					}
				}, ["" != t.P.afterDeductionMinPrice && "NEWCUSTOMER" == t.P.channel && "" != t.P.afterDeductionMaxPrice ? [s("div", {
					staticClass: "price-bank-info"
				}, [t._m(0), t._v(" "), s("div", {
					staticClass: "price-now"
				}, [s("div", {
					staticClass: "spaceInterval"
				}, [s("div", [s("b", [t._v("￥")]), t._v(" "), t.P.afterDeductionMinPrice == t.P.afterDeductionMaxPrice ? s("span", {
					staticClass: "phoneBankPrice"
				}, [t._v(t._s(t._f("formatMoney")(t.P.afterDeductionMinPrice)))]) : s("span", {
					staticClass: "phoneBankPrice"
				}, [t._v(t._s(t.P.afterDeductionMinPrice) + "-" + t._s(t.P.afterDeductionMaxPrice))])])])]), t._v(" "), s("div", {
					staticClass: "blend"
				}, [s("div", {
					staticClass: "blend-point1"
				}, [s("span", {
					staticClass: "marketPriceSection-n",
					domProps: {
						innerHTML: t._s(t.spaceIntervalintervalNew)
					}
				})])]), t._v(" "), "COMMON" == t.P.channel ? s("div", {
					staticClass: "collect1",
					class: {
						collected: "1" == t.P.isCollected
					},
					on: {
						click: function(e) {
							t.$atEvent("004", void 0, {
								status: "1" == t.P.isCollected,
								channelid: "INTEGRAL" == t.P.channel ? 2 : 1
							}), t.trackerSRS("004", "", {
								status: "1" == t.P.isCollected ? "on" : "off",
								channelid: "INTEGRAL" == t.P.channel ? 2 : 1
							}), t.toggleCollected(e)
						}
					}
				}) : t._e()])] : [s("div", {
					staticClass: "price-info",
					class: {
						"seckill-price-info": "SECKILL" == t.P.channel
					}
				}, [s("div", {
					staticClass: "price",
					class: {
						doublePrice: 3 == t.priceType
					}
				}, [3 == t.priceType ? ["SECKILL" != t.P.channel ? s("div", {
					staticClass: "price-now"
				}, [t.isperiedStyle ? s("div", {
					staticClass: "isPeriedStyle"
				}, [s("div", [s("span", {
					staticClass: "isPeriedStyle-rmb"
				}, [t._v(t._s(t.showIntegralAndPrice))])])]) : s("div", {
					staticClass: "notPeriedStyle"
				}, [s("div", ["INTEGRAL" == t.P.channel && "0.00" == t.P.minCashPart && "0.00" == t.P.maxCashPart ? s("span", [t.P.minPointPart == t.P.maxPointPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")])]) : s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")]), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])]) : s("span", ["0.00" == t.P.minCashPart || "0" == t.P.minCashPart ? s("span", [t._v("\n                          " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")])]) : t.P.minPointPart == t.P.maxPointPart ? s("span", [t.P.minCashPart == t.P.maxCashPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart))]) : s("span", [t._v("积分"), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v("+￥" + t._s(t.P.minCashPart)), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])]) : s("span", [t._v("\n                          " + t._s(t.P.minPointPart) + "积分"), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v("+￥" + t._s(t.P.minCashPart)), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])])])])]) : t._e(), t._v(" "), "COMMON" == t.P.channel ? s("div", {
					staticClass: "price-origin"
				}, [s("div", {
					staticClass: "point"
				}, [s("div", {
					staticClass: "blend"
				}, [s("div", {
					staticClass: "blend-point1"
				}, [s("span", {
					staticClass: "marketPriceSection",
					domProps: {
						innerHTML: t._s(t.spaceIntervalinterval)
					}
				}), t._v(" "), "INTEGRAL" == t.P.channel ? s("span", {
					staticClass: "reddem-points"
				}, [t._v("积分可抵10%-100%")]) : t._e()])])])]) : t._e(), t._v(" "), "INTEGRAL" == t.P.channel ? s("div", {
					staticClass: "price-origin"
				}, [t.hasPriceRange && t.hasIntegral ? s("div", {
					staticClass: "point"
				}, [s("div", {
					staticClass: "blend"
				}, ["INTEGRAL" == t.P.channel && "0.00" == t.P.minCashPart && "0.00" == t.P.maxCashPart ? s("span", [t.P.minPointPart == t.P.maxPointPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")])]) : s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")]), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])]) : s("span", [t.P.minPointPart == t.P.maxPointPart && t.P.minCashPart == t.P.maxCashPart ? s("span", [t._v("\n                          " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart) + "\n                      ")]) : s("span", [t._v("\n                          " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart)), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])]), t._v(" "), s("span", {
					staticClass: "marketPriceValue",
					domProps: {
						innerHTML: t._s(t.spaceIntervalinterval)
					}
				}), t._v(" "), "INTEGRAL" == t.P.channel ? s("span", {
					staticClass: "reddem-points"
				}, [t._v("积分可抵10%-100%")]) : t._e()])]) : s("div", {
					staticClass: "point"
				}, [t.hasPeried && !t.hasIntegral ? s("div", {
					staticClass: "notIntergral"
				}, [s("div", {
					staticClass: "blend"
				}, [s("div", {
					staticClass: "blend-point1"
				}, [s("span", {
					staticClass: "marketPriceSection",
					domProps: {
						innerHTML: t._s(t.spaceIntervalinterval)
					}
				}), t._v(" "), "INTEGRAL" == t.P.channel ? s("span", {
					staticClass: "reddem-points"
				}, [t._v("积分可抵10%-100%")]) : t._e()])])]) : !t.hasPriceRange && t.hasIntegral ? s("div", {
					staticClass: "notIntergral"
				}, ["INTEGRAL" == t.P.channel && "0.00" == t.P.minCashPart && "0.00" == t.P.maxCashPart ? s("span", [t.P.minPointPart == t.P.maxPointPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")])]) : s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")]), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])]) : s("span", [t.P.minPointPart == t.P.maxPointPart && t.P.minCashPart == t.P.maxCashPart ? s("span", [t._v("\n                          " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart) + "\n                      ")]) : s("span", [t._v("\n                          " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart)), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])]), t._v(" "), s("span", {
					staticClass: "word-style",
					domProps: {
						innerHTML: t._s(t.spaceIntervalinterval)
					}
				}), t._v(" "), "INTEGRAL" == t.P.channel ? s("span", {
					staticClass: "reddem-points"
				}, [t._v("积分可抵10%-100%")]) : t._e()]) : t._e()])]) : t._e()] : ["SECKILL" != t.P.channel ? s("div", {
					staticClass: "price-now"
				}, [0 == t.priceType ? s("div", ["INTEGRAL" == t.P.channel ? s("div", [s("div", {
					staticClass: "integral-show"
				}, ["INTEGRAL" != t.P.channel || "0.00" != t.P.minCashPart && "0" != t.P.minCashPart || "0.00" != t.P.maxCashPart && "0" != t.P.maxCashPart ? s("span", {
					staticClass: "integral-show-all"
				}, [t.P.minPointPart == t.P.maxPointPart && ("0.00" !== t.P.minCashPart || "0" !== t.P.minCashPart) == t.P.maxCashPart ? s("span", [t._v("\n                          " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart) + "\n                      ")]) : t._e(), t._v(" "), "0.00" == t.P.minCashPart || "0" == t.P.minCashPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")])]) : s("span", [t._v("\n                          " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart)), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])]) : s("span", {
					staticClass: "integral-show-all"
				}, [t.P.minPointPart == t.P.maxPointPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")])]) : s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")]), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])])])]) : s("div", [t.P.minPointPart == t.P.maxPointPart ? s("span", {
					staticClass: "price-now-t"
				}, ["0.00" == t.P.minCashPart || "0" == t.P.minCashPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")])]) : t.P.minCashPart == t.P.maxCashPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart))]) : s("span", [t._v(" " + t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart)), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])]) : s("span", {
					staticClass: "price-now-t"
				}, ["0.00" == t.P.minCashPart || "0" == t.P.minCashPart ? s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分")]), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])]) : s("span", [t._v(t._s(t.P.minPointPart)), s("span", {
					staticClass: "integral-plus-price"
				}, [t._v("积分+￥")]), t._v(t._s(t.P.minCashPart)), s("span", {
					staticClass: "isSeckillPeriedStyle-rmb-start"
				}, [t._v("/起")])])])])]) : t._e()]) : t._e(), t._v(" "), "SECKILL" != t.P.channel ? s("div", {
					staticClass: "blend"
				}, [s("div", {
					staticClass: "blend-point1"
				}, [s("span", {
					staticClass: "marketPriceSection",
					domProps: {
						innerHTML: t._s(t.spaceIntervalinterval)
					}
				}), t._v(" "), "INTEGRAL" == t.P.channel ? s("span", {
					staticClass: "reddem-points"
				}, [t._v("积分可抵10%-100%")]) : t._e()])]) : t._e()]], 2), t._v(" "), "COMMON" != t.P.channel || t.P.isSkillProduct ? t._e() : s("div", {
					staticClass: "collect",
					class: {
						collected: "1" == t.P.isCollected,
						seckillcollect: "SECKILL" == t.P.channel
					},
					on: {
						click: function(e) {
							t.$atEvent("004", void 0, {
								status: "1" == t.P.isCollected
							}), t.trackerSRS("004", "", {
								status: "1" == t.P.isCollected ? "on" : "off"
							}), t.toggleCollected(e)
						}
					}
				})])], t._v(" "), s("div", {
					staticClass: "title",
					class: {
						seckillTitle: "SECKILL" == t.P.channel
					},
					staticStyle: {
						"-webkit-box-orient": "vertical",
						"-webkit-line-clamp": "2"
					}
				}, ["INTEGRAL" == t.P.channel ? s("span", {
					staticClass: "isNotFree"
				}, [s("span", {
					domProps: {
						innerHTML: t._s(t.exchangeAndIntegral)
					}
				})]) : t._e(), t._v(" " + t._s(t.P.prodName))]), t._v(" "), s("div", {
					staticClass: "sub-title"
				}, [t._v(t._s(t.P.subTitle))]), t._v(" "), s("div", {
					staticClass: "logistic-info"
				}, [s("div", {
					staticClass: "logist"
				}, [t._v(t._s(t.showFrightType))])])], 2), t._v(" "), t.P.checkResult ? s("div", {
					staticClass: "flashSale",
					on: {
						click: function(e) {
							t.toFlashSale()
						}
					}
				}, [t._m(1)]) : t._e(), t._v(" "), s("div", {
					staticClass: "panel promotion"
				}, [t.P.multiActList.length > 0 ? s("div", {
					staticClass: "multiAct",
					on: {
						click: function(e) {
							t.P.popId = 4
						}
					}
				}, [s("div", {
					staticClass: "multiAct-title"
				}, [t._v("积分活动")]), t._v(" "), s("div", {
					staticClass: "activate-name border border-all multiAct-tab"
				}, [t._v("多倍积分")]), t._v(" "), s("div", {
					staticClass: "activate-desc"
				}, [t._v(t._s(t.P.multiActList[0].actRuleSyn))]), t._v(" "), s("div", {
					staticClass: "check-all"
				})]) : t._e()]), t._v(" "), s("div", {
					staticClass: "panel"
				}, [s("div", {
					staticClass: "panel-item border border-bottom",
					on: {
						click: function(e) {
							t.$atEvent("007", "", {
								channelid: "INTEGRAL" == t.P.channel ? 2 : 1
							}), t.trackerSRS("007", "", {
								channelid: "INTEGRAL" == t.P.channel ? 2 : 1
							}), t.P.showAttr("buynow", 1)
						}
					}
				}, [s("div", {
					staticClass: "panel-item-title"
				}, [t._v(t._s(t.P.isSelectedAllNorm ? "已选择" : "请选择"))]), t._v(" "), s("div", {
					staticClass: "panel-item-content",
					class: {
						gray: !t.P.isSelectedAllNorm
					}
				}, [t._v(t._s(t.P.normUnSelectedStr))])]), t._v(" "), t.P.productService && t.P.productService.length ? s("div", {
					staticClass: "panel-item",
					on: {
						click: function(e) {
							t.$atEvent("008"), t.trackerSRS("008"), t.P.popId = 1
						}
					}
				}, [s("div", {
					staticClass: "panel-item-content",
					attrs: {
						id: "service-content"
					}
				}, t._l(t.P.productService, function(e, i) {
					return s("div", {
						key: i,
						staticClass: "flag"
					}, [t._v(t._s("支持7天无理由退换货" == e.tagName ? e.tagDesc : e.tagName))])
				}))]) : t._e()]), t._v(" "), s("div", {
					staticClass: "panel"
				}, [s("div", {
					staticClass: "panel-item no-arrow comment"
				}, [s("div", {
					staticClass: "comment-title"
				}, [t._v("商品评价(" + t._s(t.P.totalCount) + ")")]), t._v(" "), s("div", {
					staticClass: "comment-sort"
				}, [s("a", {
					staticClass: "label-sort border border-all",
					attrs: {
						href: t.P.subGoodReviewsNum ? t.baseUrl + "/review/list.html?prodId=" + t.P.productId + "&score=1" : "javascript:;"
					},
					on: {
						click: function(e) {
							t.$atEvent("010"), t.trackerSRS("010")
						}
					}
				}, [t._v("好评(" + t._s(t.P.subGoodReviewsNum || 0) + ")")]), t._v(" "), s("a", {
					staticClass: "label-sort border border-all",
					attrs: {
						href: t.P.subMidReviewsNum ? t.baseUrl + "/review/list.html?prodId=" + t.P.productId + "&score=2" : "javascript:;"
					},
					on: {
						click: function(e) {
							t.$atEvent("011"), t.trackerSRS("011")
						}
					}
				}, [t._v("中评(" + t._s(t.P.subMidReviewsNum || 0) + ")")]), t._v(" "), s("a", {
					staticClass: "label-sort border border-all",
					attrs: {
						href: t.P.subBadReviewsNum ? t.baseUrl + "/review/list.html?prodId=" + t.P.productId + "&score=3" : "javascript:;"
					},
					on: {
						click: function(e) {
							t.$atEvent("012"), t.trackerSRS("012")
						}
					}
				}, [t._v("差评(" + t._s(t.P.subBadReviewsNum || 0) + ")")])]), t._v(" "), t.P.reviews && t.P.reviews.length ? s("div", {
					staticClass: "comment-list"
				}, [s("a", {
					staticClass: "check-all",
					attrs: {
						href: t.baseUrl + "/review/list.html?prodId=" + t.P.productId
					},
					on: {
						click: function(e) {
							t.$atEvent("009"), t.trackerSRS("009")
						}
					}
				}, [t._v("查看全部")]), t._v(" "), t._l(t.P.reviews, function(e, i) {
					return s("div", {
						key: i,
						staticClass: "comment-item"
					}, [s("div", {
						staticClass: "user"
					}, [t._m(2, !0), t._v(" "), s("div", [t._v(t._s(e.nickname))])]), t._v(" "), s("div", {
						staticClass: "comment-content",
						style: t.twoLineStyle
					}, [t._v(t._s(e.comsContent || "暂无评论"))]), t._v(" "), s("div", {
						staticClass: "product-norm"
					}, [t._v(t._s(e.attr))])])
				})], 2) : s("div", {
					staticClass: "comment-none"
				}, [t._v("目前暂无评价")])]), t._v(" "), s("div", {
					staticClass: "panel-item border border-top no-arrow question",
					on: {
						click: function(e) {
							t.$atEvent("013"), t.trackerSRS("013"), t.gotoLink(t.baseUrl + "/consult/list.html?prodId=" + t.P.productId)
						}
					}
				}, [s("div", {
					staticClass: "question-title"
				}, [t._v("问商家(" + t._s(t.P.totalNum || 0) + ")")]), t._v(" "), t.P.questionList.length ? [s("div", {
					staticClass: "question-list"
				}, t._l(t.P.questionList, function(e, i) {
					return s("div", {
						key: i,
						staticClass: "question-item"
					}, [s("span", [t._v(t._s(e.question))]), t._v(" "), s("div", {
						staticClass: "anum"
					}, [t._v(t._s(e.replyNum) + "个回答")])])
				})), t._v(" "), s("a", {
					staticClass: "check-all",
					attrs: {
						href: t.baseUrl + "/consult/list.html?prodId=" + t.P.productId
					},
					on: {
						click: function(e) {
							t.$atEvent("013"), t.trackerSRS("013")
						}
					}
				}, [t._v("查看全部")])] : [s("div", {
					staticClass: "question-none"
				}, [t._v("目前暂无问题，欢迎您来咨询")]), t._v(" "), s("div", {
					staticClass: "question-add border"
				}, [s("a", {
					staticClass: "goAsk",
					staticStyle: {
						border: "1px solid #F2250F"
					},
					attrs: {
						href: t.baseUrl + "/consult/list.html?prodId=" + t.P.productId
					}
				}, [t._v("去咨询")])])]], 2)]), t._v(" "), "NEWCUSTOMER" != t.P.channel ? [s("div", {
					staticClass: "panel store"
				}, [s("div", {
					staticClass: "store-header"
				}, [t.P.isSkillProduct ? t._e() : s("a", {
					staticClass: "btn border",
					staticStyle: {
						border: "1px solid #F2250F"
					},
					attrs: {
						href: t.baseUrl + "/shop/index.html?shopId=" + t.P.shopId
					},
					on: {
						click: function(e) {
							t.$atEvent("014"), t.trackerSRS("014")
						}
					}
				}, [t._v("去逛逛")]), t._v(" "), s("div", {
					staticClass: "store-info"
				}, [s("div", {
					staticClass: "store-img"
				}, [s("img", {
					attrs: {
						src: t.P.logo,
						alt: ""
					}
				})]), t._v(" "), s("LayoutFlex", {
					staticClass: "store-title",
					attrs: {
						align: "middle"
					}
				}, [s("div", [t._v(t._s(t.P.name))]), t._v(" "), s("BaseIcon", {
					attrs: {
						icon: "biz-license"
					},
					nativeOn: {
						click: function(e) {
							t.gotoLink(t.baseUrl + "/shop/license.html?vendorId=" + t.vendorId)
						}
					}
				})], 1), t._v(" "), s("div", {
					staticClass: "store-subtitle"
				}, [t._v("\n          综合评分\n          "), s("span", [t._v(t._s(t.P.score))])])], 1)]), t._v(" "), s("div", {
					staticClass: "store-section"
				}, [s("div", {
					staticClass: "product-number"
				}, [s("i", [t._v(t._s(t.P.productNum))]), t._v("\n        全部商品\n      ")]), t._v(" "), s("div", {
					staticClass: "store-score border border-left"
				}, [s("div", {
					staticClass: "score-item",
					class: {
						low: +t.P.logisticsScore < 4
					}
				}, [s("span", {
					staticClass: "score-item_name"
				}, [t._v("物流")]), t._v(" "), s("span", {
					staticClass: "score-item_fraction"
				}, [t._v(t._s(t.P.logisticsScore))]), t._v(" "), s("span", {
					staticClass: "score-item_level"
				}, [t._v(t._s(t.getLevel(t.P.logisticsScore)))])]), t._v(" "), s("div", {
					staticClass: "score-item",
					class: {
						low: +t.P.productScore < 4
					}
				}, [s("span", {
					staticClass: "score-item_name"
				}, [t._v("商品")]), t._v(" "), s("span", {
					staticClass: "score-item_fraction"
				}, [t._v(t._s(t.P.productScore))]), t._v(" "), s("span", {
					staticClass: "score-item_level"
				}, [t._v(t._s(t.getLevel(t.P.productScore)))])]), t._v(" "), s("div", {
					staticClass: "score-item",
					class: {
						low: +t.P.serviecScore < 4
					}
				}, [s("span", {
					staticClass: "score-item_name"
				}, [t._v("服务")]), t._v(" "), s("span", {
					staticClass: "score-item_fraction"
				}, [t._v(t._s(t.P.serviecScore))]), t._v(" "), s("span", {
					staticClass: "score-item_level"
				}, [t._v(t._s(t.getLevel(t.P.serviecScore)))])])])])])] : t._e(), t._v(" "), t.recommendProduct && t.recommendProduct.length > 0 ? s("div", {
					staticClass: "recommend-good"
				}, [s("div", {
					staticClass: "recommend-title"
				}, [s("div", [t._v("\n        好货推荐\n      ")]), t._v(" "), t.isSkillProduct1 ? t._e() : s("div", {
					staticClass: "seeAll",
					on: {
						click: function(e) {
							t.toShop()
						}
					}
				}, [t._v("\n        查看全部\n        "), s("img", {
					attrs: {
						src: i(180),
						alt: ""
					}
				})])]), t._v(" "), s("div", {
					staticClass: "recommend-list"
				}, t._l(t.recommendProduct, function(e, i) {
					return s("a", {
						key: i,
						class: {
							mar: (i + 1 - 2) % 3 == 0
						},
						attrs: {
							href: t.baseUrl + "/product/detail.html?prodId=" + e.productId
						}
					}, [s("div", {
						staticClass: "img",
						style: "width:100%;background-image:url(" + e.productImg + ")"
					}), t._v(" "), s("div", {
						staticClass: "shopname"
					}, [t._v(t._s(e.productName))]), t._v(" "), s("div", {
						staticClass: "shopprice"
					}, ["0.00" == e.minCashPart || "0" == e.minCashPart ? s("span", [t._v(t._s(e.minPointPart) + "积分")]) : s("span", [t._v(t._s(e.minPointPart) + "积分+"), s("span", [t._v("￥")]), t._v(t._s(e.minCashPart))])])])
				}))]) : t._e()], 2)
			}, A = [function() {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("div", {
					staticClass: "newPrice_bank"
				}, [e("span", [this._v("返后价")])])
			}, function() {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("div", {
					staticClass: "toFlashSale"
				}, [e("div", {
					staticClass: "toFlashSale-tip"
				}, [this._v("每日10点 好物无限抢")])])
			}, function() {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("div", {
					staticClass: "avtar"
				}, [e("img", {
					attrs: {
						src: i(173)
					}
				})])
			}];
		T._withStripped = !0;
		var E = !1;
		var M = function(t) {
			E || i(494)
		}, N = Object(_.a)(R, T, A, !1, M, "data-v-14dc50b1", null);
		N.options.__file = "src/pages/product/detail/children/screen-first-content.vue";
		var $ = N.exports,
			B = {
				props: {
					showNewUserBox: [Boolean],
					isToolTipBox: [String],
					popUpCode: [String, Number],
					applyStatusPath: {
						type: String,
						default: null
					}
				},
				created: function() {
					var t = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
						e = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
					this.$nextTick(function() {
						this.$refs.maskLayer.style.height = t + "px", this.$refs.maskLayer.style.width = e + "px"
					})
				},
				data: function() {
					return {
						showSmallNewUserBox: ""
					}
				},
				methods: {
					trackerSRS: function(t, e, i) {
						if (window.SRSAPP && window.SRSAPP.onEvent) {
							t = window.pageId + t;
							window.SRSAPP.onEvent(t, e, i)
						}
					},
					iKnow: function() {
						"3" == this.popUpCode && (window.location.href = this.applyStatusPath), this.showSmallNewUserBox = this.showNewUserBox, this.showSmallNewUserBox = !1, this.$emit("showComfirmBox", this.showSmallNewUserBox)
					}
				}
			}, U = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", [i("div", {
					staticClass: "newUserBox",
					staticStyle: {
						"z-index": "10050"
					}
				}, [i("div", {
					staticClass: "newUserBox-t",
					class: {
						liHeight: "3" == t.popUpCode
					}
				}, [i("span", [t._v(t._s(t.isToolTipBox))])]), t._v(" "), i("div", {
					staticClass: "newUserBox-f",
					on: {
						click: function(e) {
							t.$atEvent("032"), t.trackerSRS("032"), t.iKnow()
						}
					}
				}, [i("span", [t._v(t._s("3" == t.popUpCode ? "查看当前卡状态" : "我知道了"))])])]), t._v(" "), i("div", {
					ref: "maskLayer",
					staticClass: "maskLayer"
				})])
			};
		U._withStripped = !0;
		var F = !1;
		var V = function(t) {
			F || i(496)
		}, O = Object(_.a)(B, U, [], !1, V, "data-v-e53bfd94", null);
		O.options.__file = "src/pages/product/detail/children/newUserBox.vue";
		var D = O.exports,
			j = {
				props: {
					showBindCardPop: [Boolean]
				},
				created: function() {
					var t = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
						e = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
					this.$nextTick(function() {
						this.$refs.maskLayer.style.height = t + "px", this.$refs.maskLayer.style.width = e + "px"
					}), this.showBindCard = this.showBindCardPop
				},
				data: function() {
					return {
						showBindCard: ""
					}
				},
				methods: {
					trackerSRS: function(t, e, i) {
						if (window.SRSAPP && window.SRSAPP.onEvent) {
							t = window.pageId + t;
							window.SRSAPP.onEvent(t, e, i)
						}
					},
					iKnow: function() {
						window.location.href = "mdb://action?urlVersion=1.3.0&url=goQryCardsPage"
					},
					cancel: function() {
						this.showBindCard = !1
					}
				}
			}, G = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return t.showBindCard ? i("div", [i("div", {
					staticClass: "newUserBox",
					staticStyle: {
						"z-index": "10050"
					}
				}, [t._m(0), t._v(" "), i("div", {
					staticClass: "newUserBox-f"
				}, [i("span", {
					staticClass: "cancel",
					on: {
						click: t.cancel
					}
				}, [t._v("关闭")]), t._v(" "), i("span", {
					staticClass: "bind-card",
					on: {
						click: t.iKnow
					}
				}, [t._v("去绑卡")])])]), t._v(" "), i("div", {
					ref: "maskLayer",
					staticClass: "maskLayer"
				})]) : t._e()
			};
		G._withStripped = !0;
		var W = !1;
		var H = function(t) {
			W || i(497)
		}, q = Object(_.a)(j, G, [function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "newUserBox-t"
			}, [e("span", [this._v("请绑定交通银行信用卡（特殊联名卡除外）")])])
		}], !1, H, "data-v-1cff041e", null);
		q.options.__file = "src/pages/product/detail/children/bindCardPop.vue";
		var K = q.exports,
			Q = {
				props: {
					showNewUserTipsBox: [Boolean],
					basePath: [String],
					orderId: [Number, String],
					orderNo: [Number, String],
					productId: [Number, String]
				},
				created: function() {
					var t = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
						e = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
					this.$nextTick(function() {
						this.$refs.maskLayer.style.height = t + "px", this.$refs.maskLayer.style.width = e + "px"
					})
				},
				data: function() {
					return {
						showBigNewUserBox: ""
					}
				},
				methods: {
					trackerSRS: function(t, e, i) {
						if (window.SRSAPP && window.SRSAPP.onEvent) {
							t = window.pageId + t;
							window.SRSAPP.onEvent(t, e, i)
						}
					},
					cancelOriginalOrder: function() {
						var t = this;
						n.a.ajax({
							url: this.basePath + "/security/order/cancel.json",
							data: {
								orderId: this.orderId
							},
							context: this
						}).done(function(e) {
							e && e.returnCode && ("000000" == e.returnCode ? (t.showBigNewUserBox = !1, t.trackerSRS("034", "", {
								item_id: t.productId
							}), t.$emit("closeTipsComfirmBox", t.showBigNewUserBox), t.$toast("取消成功,<p>重新提交订单吧!</p>")) : t.$toast("请求状态异常"))
						}).fail(function() {
							this.$toast("服务器异常")
						})
					},
					checkOriginalOrder: function() {
						window.location.href = this.basePath + "/security/order/detail.html?orderId=" + this.orderId
					},
					iKnow: function() {
						this.showBigNewUserBox = this.showNewUserTipsBox, this.showBigNewUserBox = !1, this.$emit("closeTipsComfirmBox", this.showBigNewUserBox)
					}
				}
			}, J = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", [i("div", {
					staticClass: "newUserBox",
					staticStyle: {
						"z-index": "2025"
					}
				}, [t._m(0), t._v(" "), i("div", {
					staticClass: "newUserBox-m"
				}, [i("span", {
					staticClass: "wordTips"
				}, [t._v("您已经有待支付订单了，每个新用户只能购买一件商品。（如果想更换商品，你可以"), i("span", {
					staticClass: "cancel",
					on: {
						click: function(e) {
							t.$atEvent("034", void 0, {
								o2o_id: t.orderId,
								ml_id: t.orderNo
							}), t.trackerSRS("034", "", {
								o2o_id: t.orderId,
								ml_id: t.orderNo
							}), t.cancelOriginalOrder()
						}
					}
				}, [t._v("点此取消原有订单")]), t._v("，再重新下单）")])]), t._v(" "), i("div", {
					staticClass: "newUserBox-f"
				}, [i("span", {
					on: {
						click: function(e) {
							t.$atEvent("033"), t.trackerSRS("033"), t.checkOriginalOrder()
						}
					}
				}, [t._v("查看原订单")])]), t._v(" "), i("div", {
					staticClass: "closeSign",
					on: {
						click: function(e) {
							t.iKnow()
						}
					}
				}, [i("span", [t._v("×")])])]), t._v(" "), i("div", {
					ref: "maskLayer",
					staticClass: "maskLayer",
					staticStyle: {
						"z-index": "2020"
					}
				})])
			};
		J._withStripped = !0;
		var Y = !1;
		var z = function(t) {
			Y || i(498)
		}, Z = Object(_.a)(Q, J, [function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "newUserBox-t"
			}, [e("span", [this._v("提示")])])
		}], !1, z, "data-v-717d555e", null);
		Z.options.__file = "src/pages/product/detail/children/newUserTipsBox.vue";
		var X = Z.exports,
			tt = {
				components: {
					RecommendList: i(27).a
				},
				props: {
					isShowSecondPage: {
						type: Boolean,
						default: !1
					}
				},
				data: function() {
					return {
						basePath: window.$base,
						active_index: 0,
						tabs: ["详情", "售后 "]
					}
				},
				created: function() {
					var t = this;
					this.P = this.$parent;
					(function(t) {
						return h("/product/desc.json", {
							prodId: t
						})
					})(this.P.productId).then(function(e) {
						"000000" == e.data.returnCode && window._assign(t.P, e.data)
					})
				},
				watch: {
					isShowSecondPage: function() {
						this.$nextTick(this.bindScreenSecondDrag)
					}
				},
				mounted: function() {},
				methods: {
					trackerSRS: function(t, e, i) {
						if (window.SRSAPP && window.SRSAPP.onEvent) {
							t = window.pageId + t;
							window.SRSAPP.onEvent(t, e, i)
						}
					},
					goToProduct: function(t) {
						location.href = t
					},
					bindScreenSecondDrag: function() {
						var t = this.$parent.$refs,
							e = t.scFirstEl,
							i = t.holderTopEl,
							s = (t.productEl, this.$refs),
							a = s.scSecondEl,
							n = s.tabSectionEl,
							r = s.navEl,
							o = !1,
							c = (window.innerHeight, function(t) {
								return t.getBoundingClientRect()
							}),
							l = 0,
							d = 0,
							h = !1;
						r.addEventListener("touchstart", function(t) {
							h = !0
						}), r.addEventListener("touchend", function(t) {
							h = !1
						}), a.addEventListener("touchstart", function(t) {
							l = t.changedTouches[0].clientY
						}), a.addEventListener("touchmove", function(t) {
							var e = t.changedTouches[0].clientY,
								s = !! h || n.scrollTop <= 0;
							!o && c(i).top <= c(a).top && s && (o = !0), o && l <= e && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), d = e - l, i.style.paddingTop = d + "px", i.style.transition = "")
						});
						var u = function() {
							o = !1, d > 100 && (e.style.marginTop = "0"), i.style.paddingTop = "0", i.style.transition = "all .3s", l = d = 0
						};
						a.addEventListener("touchend", u), a.addEventListener("touchcancel", u)
					}
				}
			}, et = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return t.isShowSecondPage ? i("div", {
					ref: "scSecondEl",
					staticClass: "content main"
				}, [i("div", {
					ref: "navEl",
					staticClass: "nav"
				}, t._l(t.tabs, function(e, s) {
					return i("div", {
						key: s,
						staticClass: "tab",
						class: {
							active: t.active_index == s
						},
						on: {
							click: function(e) {
								t.$atEvent("01" + (s + 5)), t.trackerSRS("01" + (s + 5)), t.active_index = s
							}
						}
					}, [t._v(t._s(e))])
				})), t._v(" "), i("section", {
					ref: "tabSectionEl"
				}, [i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: 0 == t.active_index,
						expression: "active_index==0"
					}],
					staticClass: "tab-content"
				}, [1 == t.P.isAnnoContent ? i("div", {
					staticClass: "tips"
				}, [t._v("\n        " + t._s(t.P.annoContent) + "\n        "), i("span", {
					staticClass: "close",
					on: {
						click: function(e) {
							t.P.isAnnoContent = 0
						}
					}
				})]) : t._e(), t._v(" "), "NEWCUSTOMER" == t.P.channel ? i("div", {
					staticClass: "showUserPhone"
				}, [i("span", [t._v("\n            该商品为新户专享特惠商品，无法退货退款。如有售后问题可以和商家协商换货；如果商家无法解决，请拨打客服电话400-888-8888。\n          ")])]) : t._e(), t._v(" "), i("div", {
					domProps: {
						innerHTML: t._s(t.P.detail)
					}
				}), t._v(" "), t._m(0)]), t._v(" "), i("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: 1 == t.active_index,
						expression: "active_index==1"
					}],
					staticClass: "tab-content after-sale",
					domProps: {
						innerHTML: t._s(t.P.afterSales)
					}
				})])]) : t._e()
			};
		et._withStripped = !0;
		var it = !1;
		var st = function(t) {
			it || i(499)
		}, at = Object(_.a)(tt, et, [function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "legal-notices legal-notices-top"
			}, [this._v("以上商品、商品标题、描述、图片及宣传内容等均由合作商户提供，其真实性、准确性和合法性由合作商户负责。合作商户需按照中国境内相关法律法规的规定提供商品的销售及售后服务。持卡人如遇任何商品销售、质量及配送等问题引发的索赔、质询及投诉由商户负责处理和解决。我行将为持卡人提供必要的协助，持卡人可通过买单吧在线客服或拨打客服热线（4008009888）联系我行。\n\n"), e("span", {
				staticClass: "legal-notices1"
			}, [e("span", [this._v("价格说明：")])]), this._v("商品成交价格以最终订单实际结算价格为准。\n\n"), e("span", {
				staticClass: "legal-notices1"
			}, [e("span", [this._v("退换货说明：")])]), this._v("持卡人如有退换货需求，可向合作商户进行咨询，或在买单吧提交相关申请，如有需要可联系我行客服提供必要协助。\n\n"), e("span", {
				staticClass: "legal-notices1"
			}, [e("span", [this._v("温馨提示：")])]), this._v("为保障您的资金账户安全，请不要将账户及密码等重要信息告知他人。")])
		}], !1, st, null, null);
		at.options.__file = "src/pages/product/detail/children/screen-second-content.vue";
		var nt = at.exports,
			rt = {
				props: {
					alreadySoldOut: {
						type: Boolean,
						default: !1
					},
					alreadyEnd: {
						type: Boolean,
						default: !1
					}
				},
				created: function() {
					var t = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
						e = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
					this.$nextTick(function() {
						this.$refs.maskLayer.style.height = t + "px", this.$refs.maskLayer.style.width = e + "px"
					}), this.showBindCard = this.alreadySoldOut || this.alreadyEnd
				},
				data: function() {
					return {
						showBindCard: ""
					}
				},
				methods: {
					trackerSRS: function(t, e, i) {
						if (window.SRSAPP && window.SRSAPP.onEvent) {
							t = window.pageId + t;
							window.SRSAPP.onEvent(t, e, i)
						}
					},
					iKnow: function() {
						!0 === this.alreadySoldOut && (window.location.href = "mdb://action?urlVersion=5.0.0&url=goPointChannelPage"), !0 === this.alreadyEnd && (window.location.href = "mdb://action?urlVersion=5.0.0&url=goPointChannelPage")
					},
					cancel: function() {
						this.showBindCard = !1
					}
				},
				computed: {
					showPopWord: function() {
						return !0 === this.alreadySoldOut ? "该商品已下架，去看看其他商品吧" : !0 === this.alreadyEnd ? "该商品暂无法兑换，去看看其他商品吧" : void 0
					}
				}
			}, ot = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return t.showBindCard ? i("div", [i("div", {
					staticClass: "newUserBox",
					staticStyle: {
						"z-index": "10050"
					}
				}, [i("div", {
					staticClass: "newUserBox-t"
				}, [i("span", [t._v(t._s(t.showPopWord))])]), t._v(" "), i("div", {
					staticClass: "newUserBox-f"
				}, [i("span", {
					staticClass: "cancel",
					on: {
						click: t.cancel
					}
				}, [t._v("取消")]), t._v(" "), i("span", {
					staticClass: "bind-card",
					on: {
						click: t.iKnow
					}
				}, [t._v("去看看")])])]), t._v(" "), i("div", {
					ref: "maskLayer",
					staticClass: "maskLayer"
				})]) : t._e()
			};
		ot._withStripped = !0;
		var ct = !1;
		var lt = function(t) {
			ct || i(500)
		}, dt = Object(_.a)(rt, ot, [], !1, lt, "data-v-05c65b90", null);
		dt.options.__file = "src/pages/product/detail/children/goToLook.vue";
		var ht = dt.exports,
			ut = {
				props: {
					saveVVIP: {
						type: String,
						default: ""
					}
				},
				data: function() {
					return {
						normSelected: [],
						prodImagePath: "",
						attrList: [],
						payWayList: [],
						payWayText: ["现金+积分", "分期+积分", "全积分"],
						payway: "",
						skuProdList: [],
						totalStock: 0,
						isSurplusActOverLimit: "0",
						colorIndex: 0,
						prodImg: "",
						instalIndex: "",
						num: 1,
						maxDeductRatio: "",
						fatherPayWay: [],
						flag: "flag",
						savePaywayList: null,
						saveSumPrice: 0,
						byStages: !1,
						showWordFlag: 0,
						isClickAttr: !1,
						getMinFullIntegralPointPart: 0,
						getMinFullIntegralCashPart: 0,
						saveChannel: ""
					}
				},
				created: function() {
					var t = this;
					this.P = this.$parent, this.P.payWayList.forEach(function(e, i) {
						t.fatherPayWay.push(e.payWay)
					});
					var e = this.P.prodImageList.filter(function(t) {
						return "1" === t.isPrimaryImage
					});
					this.primaryImage = this.prodImg = e.length ? e[0].prodImageUrl : "", this.payway = "1" == this.P.mobileBank ? "0" : "COMMON" == this.P.channel ? this.P.minInst ? "1" : "0" : this.ispretermissionIntegral ? "2" : this.ispretermissionPeriod ? "1" : "0", "VVIP" === this.saveVVIP ? this.saveChannel = "VVIP" : this.saveChannel = this.P.channel,
					function(t, e, i, s) {
						return h("/product/attr.json", {
							prodId: t,
							channel: e,
							actId: i,
							periodId: s
						})
					}(this.P.productId, this.saveChannel, this.P.actId, this.P.periodId).then(function(e) {
						if ("000000" !== e.data.returnCode) return t.$toast({
							msg: e.data.returnMsg || "服务器异常,请稍后再试"
						}), void(t.P.noneAttr = !0);
						t.skuProdList = e.data.skuProdList, t.maxDeductRatio = e.data.maxDeductRatio, t.sendDeductibleValue(), t.P.haveAttr = !0, t.P.isSoldOut = e.data.totalStock <= 0, t.P.isActOverLimit = "1" == e.data.isActOverLimit || "1" == e.data.isActForceSoldOut || "1" == e.data.isActVendorOverLimit || "1" == e.data.isPointOverLimitProductMonth, window._assign(t, e.data), t.savePaywayList = t.payWayList, t.P.normSelectedStr = t.getNormSelectedStr(), t.P.normUnSelectedStr = t.getNormUnSelectedStr()
					})
				},
				watch: {
					normSelected: function(t) {
						this.P.normSelected = t.slice(), this.P.isSelectedAttr = t.filter(function(t) {
							return !!t
						}).length, this.P.normSelectedStr = this.getNormSelectedStr(), this.P.normUnSelectedStr = this.getNormUnSelectedStr(), this.updateInstalPrice(), this.prodImg = this.getProdImg(), this.P.isSelectedAllNorm = this.isSelectedAllNorm, this.num = Math.min(this.num, "cart" == this.P._action ? 99 : this.limit)
					},
					watchInstalPrice: function(t) {
						this.updateInstalPrice()
					}
				},
				methods: {
					trackerSRS: function(t, e, i) {
						if (window.SRSAPP && window.SRSAPP.onEvent) {
							t = window.pageId + t;
							window.SRSAPP.onEvent(t, e, i)
						}
					},
					sendDeductibleValue: function() {
						this.$emit("sendDeductibleValueWay", this.proportionalIntegralDeductio)
					},
					paywayListSelect: function(t) {
						this.payway = t.payWay, this.$emit("paywayValue", {
							p: this.payway,
							h: this.flag
						})
					},
					minuseNum: function() {
						this.num = Math.max(--this.num, 1)
					},
					addNum: function() {
						var t = "cart" == this.P._action,
							e = t ? Math.min(99, this.limit) : this.limit,
							i = t && this.limit > 99 ? "您添加的商品已经超过99个，请清理购物车后再添加新商品" : this.stock1 > this.limit ? "件数超出限购" : "件数超出库存";
						this.num + 1 > this.limit1 && 0 == this.limit1 ? this.$toast("件数超出限购") : this.num + 1 > e ? this.$toast({
							msg: i
						}) : this.num++
					},
					everyGetSumPrice: function() {
						var t = "1" == this.payway ? "0" : this.payway;
						return this.isSelectedAllNorm ? this.skuMap[this.normSelected.join(";")]["price" + t] : 0
					},
					getSumPrice: function() {
						var t = "1" == this.payway ? "0" : this.payway,
							e = this.isSelectedAllNorm ? this.skuMap[this.normSelected.join(";")]["price" + t] : 0,
							i = Object(v.a)(e).times(this.num).round(2).toString();
						return "2" == this.payway ? i : Object(x.a)(i)
					},
					getSumPrice1: function() {
						var t = "1" == this.payway ? "0" : this.payway,
							e = this.isSelectedAllNorm ? this.skuMap[this.normSelected.join(";")]["price" + t] : 0,
							i = this.isSelectedAllNorm ? this.skuMap[this.normSelected.join(";")].price0 : 0,
							s = this.isSelectedAllNorm ? this.skuMap[this.normSelected.join(";")].price2 : 0;
						this.getMinFullIntegralPointPart = this.isSelectedAllNorm ? this.skuMap[this.normSelected.join(";")].price3 : 0, this.getMinFullIntegralCashPart = this.isSelectedAllNorm ? this.skuMap[this.normSelected.join(";")].price4 : 0;
						Object(v.a)(e).times(this.num).round(2).toString();
						var a = Object(v.a)(i).times(this.num).toFixed(2).toString(),
							n = Object(v.a)(s).times(this.num).round(2).toString();
						return "INTEGRAL" == this.P.channel ? n + "<small>积分</small>" : "0.00" == a || "0" == a ? n + "<small>积分</small>" : n + "<small>积分+￥</small>" + a
					},
					updateInstalPrice: function() {
						var t = this.instalSelected,
							e = t.instPeriods,
							i = t.instPrice;
						if (e) {
							var s = Object(v.a)(i).times(this.num).round(2).toString();
							this.P.instalPrice = Object(x.a)(s)
						} else this.P.instalPrice = this.P.minInst
					},
					selectInstal: function(t, e) {
						this.isSelectedAllNorm && (this.byStages = !0, this.$emit("isShowPeiod", "this.byStages"), this.instalIndex = e)
					},
					moreThanNinePointEight: function() {
						!this.isLessThanNine && this.isSelectedAllNorm ? (this.payWayList = [{
							payWay: "0"
						}], this.paywayListSelect({
							payWay: "0"
						})) : this.payWayList = this.savePaywayList
					},
					selectAttr: function(t, e) {
						e.hasStock && (this.isSelectedAllNorm && (this.getMinFullIntegralPointPart = 0, this.getMinFullIntegralCashPart = 0), this.isClickAttr = !e.isSelected, this.$set(this.normSelected, t, e.isSelected ? "" : e.attrValueId), this.moreThanNinePointEight(), this.sendDeductibleValue())
					},
					getStock: function(t, e, i) {
						var s = !1,
							a = this.normSelected.slice();
						a[t] = i, a = a.filter(function(t) {
							return !!t
						});
						for (var n = 0; n < this.skuMapKeysArray.length; n++) if (this.isIncludeSub(this.skuMapKeysArray[n], a)) {
							s = !0;
							break
						}
						return s
					},
					isIncludeSub: function(t, e) {
						for (var i = !0, s = 0; s < e.length; s++) if (-1 == t.indexOf(e[s])) {
							i = !1;
							break
						}
						return i
					},
					getNormSelectedStr: function() {
						var t = this,
							e = "";
						return this.normSelected.filter(function(t) {
							return !!t
						}).length ? this.normSelected.forEach(function(i, s) {
							i && t.attrList[s].attrValue.some(function(t) {
								if (t.attrValueId == i) return e += " " + t.attrValue, !0
							})
						}) : this.attrList.forEach(function(t) {
							e += " " + t.attrName
						}), e
					},
					getNormUnSelectedStr: function() {
						var t = this,
							e = "";
						return this.isSelectedAllNorm ? this.getNormSelectedStr() : (this.attrList.forEach(function(i, s) {
							t.normSelected[s] || (e += " " + i.attrName)
						}), e)
					},
					getProdImg: function() {
						var t = this,
							e = this.prodImg;
						this.normSelected[this.colorIndex] ? this.attrList[this.colorIndex].attrValue.some(function(i) {
							if (i.attrValueId == t.normSelected[t.colorIndex]) return e = i.imagePath || e, !0
						}) : e = this.primaryImage;
						return e
					}
				},
				computed: {
					showIntegralPlusPrice: function() {
						if ("INTEGRAL" == this.P.channel) {
							var t = new v.a(0),
								e = void 0,
								i = +this.getSumPrice().replace(",", "");
							e = 0 == i || "" == i ? +(this.P.priceSectionList && this.P.priceSectionList.length && this.P.priceSectionList[0].minPrice) : +i;
							var s = +this.P.pointChangeRate / 100,
								a = +t.plus(e).times(this.proportionalIntegralDeductio / 100).div(s);
							a = 1 != (Math.floor(a) % 100 == 0) ? 100 * Math.floor(Math.floor(a) / 100) : Math.floor(a);
							var n = +t.plus(a).times(s);
							return {
								integralNumber: a,
								priceNumber: n = Math.round(100 * n) / 100
							}
						}
					},
					isLessThanNine: function() {
						return this.saveSumPrice = this.everyGetSumPrice(), this.$emit("getSumPriceValue", this.saveSumPrice), this.saveSumPrice >= 9.8
					},
					ispretermissionIntegral: function() {
						return this.fatherPayWay.indexOf("2") > -1
					},
					ispretermissionPeriod: function() {
						return this.fatherPayWay.indexOf("1") > -1
					},
					isShowPeriodStyle: function() {
						return "INTEGRAL" == this.P.channel && this.ispretermissionPeriod
					},
					isSelectedAllNorm: function() {
						var t = this.attrList.length,
							e = this.normSelected.filter(function(t) {
								return "" != t
							}).length;
						return t && e && e == t
					},
					selectedSku: function() {
						return this.isSelectedAllNorm ? this.skuMap[this.normSelected.join(";")] : null
					},
					instalList: function() {
						return this.selectedSku ? this.selectedSku.prodInstallmentList : this.skuProdList[0] && this.skuProdList[0].prodInstallmentList
					},
					instalSelected: function() {
						return this.instalList && this.instalList.length && "" !== this.instalIndex ? this.instalList[this.instalIndex] : {
							instPeriods: "",
							instPrice: "",
							isInsttFree: ""
						}
					},
					watchInstalPrice: function() {
						return [this.num, this.instalIndex, this.isSelectedAllNorm]
					},
					sumPriceHtml: function() {
						return this.isSelectedAllNorm ? (this.P.channel, "<span>" + this.getSumPrice1() + "</span>") : "INTEGRAL" == this.P.channel && "0.00" == this.P.minCashPart && "0.00" == this.P.maxCashPart ? this.P.minPointPart == this.P.maxPointPart ? "<span>" + this.P.minPointPart + "<small>积分</small></span>" : "<span>" + this.P.minPointPart + "<small>积分起</small></span>" : this.P.minPointPart == this.P.maxPointPart ? "0.00" == this.P.minCashPart || "0" == this.P.minCashPart ? "<span>" + this.P.minPointPart + "<small>积分</small></span>" : this.P.minCashPart == this.P.maxCashPart ? "<span>" + this.P.minPointPart + "<small>积分+￥</small>" + this.P.minCashPart + "</span>" : "<span>" + this.P.minPointPart + "<small>积分+￥</small>" + this.P.minCashPart + "<small>起</small></span>" : "0.00" == this.P.minCashPart || "0" == this.P.minCashPart ? "<span>" + this.P.minPointPart + "<small>积分起</small></span>" : this.P.minCashPart == this.P.maxCashPart ? "<span>" + this.P.minPointPart + "<small>积分+￥</small>" + this.P.minCashPart + "</span>" : "<span>" + this.P.minPointPart + "<small>积分+￥</small>" + this.P.minCashPart + "<small>起</small></span>"
					},
					proportionalIntegralDeductio: function() {
						return this.isSelectedAllNorm ? this.selectedSku.deductionRatio : this.maxDeductRatio
					},
					stock: function() {
						return this.selectedSku ? this.selectedSku.stock : this.totalStock
					},
					stock1: function() {
						return this.isSelectedAllNorm ? (this.showWordFlag = 1, this.selectedSku.stock) : (this.showWordFlag = 0, this.totalStock)
					},
					limit: function() {
						if (this.isSelectedAllNorm) {
							this.showWordFlag = 1;
							var t = this.selectedSku,
								e = t.limitNum || t.stock;
							return Math.min(t.stock, e)
						}
						return this.showWordFlag = 0, this.totalStock
					},
					limit1: function() {
						return this.isSelectedAllNorm ? (this.showWordFlag = 1, this.selectedSku.limitNum) : (this.showWordFlag = 0, this.totalStock)
					},
					skuId: function() {
						return this.selectedSku ? this.selectedSku.skuId : null
					},
					skuMap: function() {
						var t = this;
						return this.skuProdList.reduce(function(e, i) {
							return i.stock = parseInt(i.stock), i.prodSkuPriceList.forEach(function(e) {
								"INTEGRAL" == t.P.channel && "0" == e.priceType ? (i.price2 = e.pointPart, i.price0 = e.cashPart, i.price3 = e.minFullIntegralPointPart, i.price4 = e.minFullIntegralCashPart) : "INTEGRAL" != t.P.channel && "0" == e.priceType && (i.price2 = e.pointPart, i.price0 = e.cashPart)
							}), i.stock && "1" != i.skuCompareStatus && "3" != i.skuCompareStatus && (e[i.saleAttrList.map(function(t) {
								return t.attrValueId
							}).join(";")] = i), e
						}, {})
					},
					skuMapKeysArray: function() {
						return Object.keys(this.skuMap).map(function(t) {
							return t.split(";").map(function(t) {
								return parseInt(t)
							})
						})
					},
					attrListCpd: function() {
						var t = this,
							e = this.normSelected.slice();
						return this.attrList.map(function(i, s) {
							return i.attrValue = i.attrValue.map(function(i, a) {
								return window._assign(i, {
									isSelected: e[s] == i.attrValueId,
									hasStock: e[s] == i.attrValueId || t.getStock(s, a, i.attrValueId)
								})
							}), i
						})
					}
				}
			}, pt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "norm"
				}, [i("div", {
					staticClass: "header"
				}, [i("div", {
					staticClass: "img"
				}, [i("img", {
					attrs: {
						src: t.prodImg,
						alt: ""
					}
				})]), t._v(" "), i("div", {
					staticClass: "norm-price",
					domProps: {
						innerHTML: t._s(t.sumPriceHtml)
					}
				}), t._v(" "), "INTEGRAL" == t.P.channel ? i("div", {
					staticClass: "decumat-integral"
				}, ["1" == t.P.getIntegralAndPriceType ? i("span", [t._v("最低" + t._s(t.getMinFullIntegralPointPart ? t.getMinFullIntegralPointPart : t.P.minFullIntegralPointPart) + "积分")]) : t._e(), t._v(" "), "2" == t.P.getIntegralAndPriceType ? i("span", [t._v("最低" + t._s(t.getMinFullIntegralPointPart ? t.getMinFullIntegralPointPart : t.P.minFullIntegralPointPart) + "积分起兑")]) : t._e(), t._v(" "), "3" == t.P.getIntegralAndPriceType ? i("span", [t._v("最低" + t._s(t.getMinFullIntegralPointPart ? t.getMinFullIntegralPointPart : t.P.minFullIntegralPointPart) + "积分+" + t._s(t.getMinFullIntegralCashPart ? t.getMinFullIntegralCashPart : t.P.minFullIntegralCashPart) + "起兑")]) : t._e()]) : t._e(), t._v(" "), i("div", {
					staticClass: "stock"
				}, ["INTEGRAL" != t.P.channel ? i("span", [t._v("库存: "), i("span", {
					class: {
						stock2: t.stock1 < t.limit1 && 1 == t.showWordFlag
					}
				}, [t._v(t._s(t.stock) + "件"), t.stock1 < t.limit1 && 1 == t.showWordFlag ? i("span", [t._v("(库存紧张)")]) : t._e()])]) : t._e()]), t._v(" "), i("div", {
					staticClass: "norm-desc"
				}, [t._v("\n        " + t._s(t.P.isSelectedAttr ? "已选择" : "请选择") + "："), i("span", [t._v(t._s(t.P.normSelectedStr))])])]), t._v(" "), i("div", {
					staticClass: "flex-content"
				}, [i("div", {
					staticClass: "attrs border border-bottom"
				}, t._l(t.attrListCpd, function(e, s) {
					return i("div", {
						key: s,
						staticClass: "attr"
					}, [i("div", {
						staticClass: "attr-name"
					}, [t._v(t._s(e.attrName))]), t._v(" "), i("div", {
						staticClass: "attr-vals"
					}, t._l(e.attrValue, function(e, a) {
						return i("div", {
							key: a,
							staticClass: "val",
							class: {
								selected: e.isSelected,
								disabled: !e.hasStock
							},
							attrs: {
								aid: e.attrValueId
							},
							on: {
								click: function(i) {
									t.$atEvent("027", "", {
										channelid: "INTEGRAL" == t.P.channel ? 2 : 1
									}), t.trackerSRS("027", "", {
										channelid: "INTEGRAL" == t.P.channel ? 2 : 1
									}), t.selectAttr(s, e)
								}
							}
						}, [t._v(t._s(e.attrValue))])
					}))])
				})), t._v(" "), i("div", {
					staticClass: "quantity border border-bottom"
				}, [i("div", {
					staticClass: "quantity-title"
				}, [t._v("\n            购买数量\n            "), t.isSelectedAllNorm ? i("span", [t._v("限购" + t._s(t.limit1) + "件")]) : t._e()]), t._v(" "), "NEWCUSTOMER" == t.P.channel ? [i("div", {
					staticClass: "quantity-edit border border-all"
				}, [i("div", {
					staticClass: "quantity-btn minus",
					class: {
						disabled: !0
					}
				}), t._v(" "), i("div", {
					staticClass: "quantity-num"
				}, [t._v(t._s(t.num))]), t._v(" "), i("div", {
					staticClass: "quantity-btn plus",
					class: {
						disabled: !0
					}
				})])] : [i("div", {
					staticClass: "quantity-edit border border-all"
				}, [i("div", {
					staticClass: "quantity-btn minus",
					class: {
						disabled: t.num <= 1
					},
					on: {
						click: function(e) {
							t.$atEvent("028", "", {
								channelid: "INTEGRAL" == t.P.channel ? 2 : 1
							}), t.trackerSRS("028", "", {
								channelid: "INTEGRAL" == t.P.channel ? 2 : 1
							}), t.minuseNum()
						}
					}
				}), t._v(" "), i("div", {
					staticClass: "quantity-num"
				}, [t._v(t._s(t.num))]), t._v(" "), i("div", {
					staticClass: "quantity-btn plus",
					class: {
						disabled: t.num >= t.limit || 0 == t.limit1
					},
					on: {
						click: function(e) {
							t.$atEvent("029", "", {
								channelid: "INTEGRAL" == t.P.channel ? 2 : 1
							}), t.trackerSRS("029", "", {
								channelid: "INTEGRAL" == t.P.channel ? 2 : 1
							}), t.addNum()
						}
					}
				})])]], 2), t._v(" "), "NEWCUSTOMER" == t.P.channel ? [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3)] : t._e()], 2)])
			};
		pt._withStripped = !0;
		var mt = !1;
		var vt = function(t) {
			mt || i(501)
		}, Pt = Object(_.a)(ut, pt, [function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "payway-style"
			}, [e("span", {
				staticClass: "payway-word"
			}, [this._v("支付方式")])])
		}, function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "get-confirmCard"
			}, [e("span", {
				staticClass: "get-card"
			}, [this._v("所申请信用卡")])])
		}, function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "confirm-takeover"
			}, [e("span", {
				staticClass: "return-money"
			}, [this._v("确认收货后返150元刷卡金")])])
		}, function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "money-box"
			}, [e("span", {
				staticClass: "sendAddress"
			}, [this._v("商品将寄送到您后续申请信用卡的寄送地址")])])
		}], !1, vt, "data-v-62222b60", null);
		Pt.options.__file = "src/pages/product/detail/children/product-norm.vue";
		var gt = Pt.exports,
			ft = i(37),
			_t = {
				props: {
					productRedValue: {
						type: Object,
						default: {}
					},
					getFinancialValue: {
						type: Object,
						default: {}
					},
					getShopRedPacketList: {
						type: Array,
						default: []
					},
					getShopRedPacketBottomList: {
						type: Array,
						default: []
					},
					baseUrl: [String],
					prodId: [String, Number],
					vendorId: [String, Number]
				},
				data: function() {
					return {
						showRedBag: !1,
						isSelectedRedPacket: "",
						curIndex: 9,
						hasTriangle: !1,
						hasTriangle5: !1,
						hasTriangle6: !1,
						saveIndex: "",
						saveIndex5: "",
						saveIndex6: "",
						shopRedPacketNum: 0,
						financialListNum: 0,
						bb: "",
						cc: "",
						updateUseMsg: !1
					}
				},
				filters: {
					formatMoney: function(t) {
						var e = String(t).indexOf(".") + 1,
							i = String(t).length - e,
							s = t.split("");
						return 2 != i || 0 == e ? 1 == i && 0 != e && 0 == s[s.length - 1] ? parseInt(t) : t : 0 == s[s.length - 1] && 0 != s[s.length - 2] ? parseFloat(String(t)) : 0 == s[s.length - 1] && 0 == s[s.length - 2] ? parseInt(t) : 0 != s[s.length - 1] && 0 == s[s.length - 2] || 0 != s[s.length - 1] && 0 != s[s.length - 2] ? t : void 0
					},
					correct: function(t) {
						if (t) {
							var e;
							if (t.prefStartAmt) {
								var i = t.prefStartAmt,
									s = String(i).indexOf(".") + 1,
									a = String(i).length - s,
									n = i.split("");
								2 == a && 0 != s ? 0 == n[n.length - 1] && 0 != n[n.length - 2] ? e = parseFloat(String(i)) : 0 == n[n.length - 1] && 0 == n[n.length - 2] ? e = parseInt(i) : (0 != n[n.length - 1] && 0 == n[n.length - 2] || 0 != n[n.length - 1] && 0 != n[n.length - 2]) && (e = i) : e = 1 == a && 0 != s && 0 == n[n.length - 1] ? parseInt(i) : i
							}
							return t.prefStartAmt && "-1" != t.instLmtPeriod ? "满" + e + "元" + t.instLmtPeriod + "期以上可使用" : t.prefStartAmt && "-1" == t.instLmtPeriod ? "满" + e + "元可使用" : !t.prefStartAmt && "-1" == t.instLmtPeriod && t.iepProdNameCn ? t.iepProdNameCn : t.iepProdNameCn ? t.iepProdNameCn : "未拿到数据话术"
						}
					},
					checkChar: function(t) {
						if (t) {
							if ("02" == t.prefUseWay) return "1.0000" == t.prefDsct ? "" == t.prefDsctPeriod ? "免每期" : "免" + t.prefDsctPeriod + "期" : +new v.a(10).minus(new v.a(t.prefDsct).times(10));
							var e, i = t.prefDsctMaxAmt,
								s = String(i).indexOf(".") + 1,
								a = String(i).length - s,
								n = i.split("");
							return 2 == a && 0 != s ? 0 == n[n.length - 1] && 0 != n[n.length - 2] ? e = parseFloat(String(i)) : 0 == n[n.length - 1] && 0 == n[n.length - 2] ? e = parseInt(i) : (0 != n[n.length - 1] && 0 == n[n.length - 2] || 0 != n[n.length - 1] && 0 != n[n.length - 2]) && (e = i) : e = 1 == a && 0 != s && 0 == n[n.length - 1] ? parseInt(i) : i, e
						}
					}
				},
				created: function() {
					this.pageUrl = window.location.href
				},
				methods: {
					trackerSRS: function(t, e, i) {
						if (window.SRSAPP && window.SRSAPP.onEvent) {
							t = window.pageId + t;
							window.SRSAPP.onEvent(t, e, i)
						}
					},
					goToUseRedPacketBag: function(t) {
						window.location.href = this.baseUrl + "/shopRedPacket/receivePage?displayId=" + t
					},
					toggleShopSale: function(t, e) {
						var i = this;
						if (1 == t.disabled) return !1;
						t && t.ruleDescription && t.ruleDescription.length > 0 ? this.$nextTick(function() {
							var s = i.$refs.userule6,
								a = i.$refs.redpackageInfo6,
								n = i.$refs.redPacketModel6;
							n[e].clientHeight || n[e].offsetHeigth;
							if (0 == i.shopRedPacketNum) {
								i.shopRedPacketNum++;
								var r = a[e].clientHeight || a[e].offsetHeigth;
								i.bb = r
							}
							0 == i.hasTriangle6 ? (i.saveIndex6 = e, i.hasTriangle6 = !0, s[e].classList.remove("triangle"), s[e].classList.add("triangleup"), t.ruleDescription.length <= 10 ? a[e].style.height = 1.4 * i.bb + "px" : t.ruleDescription.length <= 30 ? a[e].style.height = 1.6 * i.bb + "px" : t.ruleDescription.length <= 70 ? a[e].style.height = 2.1 * i.bb + "px" : t.ruleDescription.length <= 100 ? a[e].style.height = 2.3 * i.bb + "px" : t.ruleDescription.length <= 130 ? a[e].style.height = 2.7 * i.bb + "px" : t.ruleDescription.length <= 160 ? a[e].style.height = 3 * i.bb + "px" : t.ruleDescription.length <= 190 ? a[e].style.height = 3.4 * i.bb + "px" : t.ruleDescription.length <= 220 ? a[e].style.height = 3.6 * i.bb + "px" : t.ruleDescription.length <= 250 ? a[e].style.height = 4 * i.bb + "px" : t.ruleDescription.length <= 280 ? a[e].style.height = 4.4 * i.bb + "px" : t.ruleDescription.length <= 310 ? a[e].style.height = 4.8 * i.bb + "px" : a[e].style.height = 5.2 * i.bb + "px") : i.saveIndex6 == e && 1 == i.hasTriangle6 ? (i.hasTriangle6 = !1, s[e].classList.remove("triangleup"), s[e].classList.add("triangle"), a[e].style.height = i.bb + "px") : (a[i.saveIndex6].style.height = i.bb + "px", s[i.saveIndex6].classList.remove("triangleup"), s[i.saveIndex6].classList.add("triangle"), i.saveIndex6 = e, i.hasTriangle6 = !0, t.ruleDescription.length <= 10 ? a[e].style.height = 1.4 * i.bb + "px" : t.ruleDescription.length <= 30 ? a[e].style.height = 1.6 * i.bb + "px" : t.ruleDescription.length <= 70 ? a[e].style.height = 2.1 * i.bb + "px" : t.ruleDescription.length <= 100 ? a[e].style.height = 2.3 * i.bb + "px" : t.ruleDescription.length <= 130 ? a[e].style.height = 2.7 * i.bb + "px" : t.ruleDescription.length <= 160 ? a[e].style.height = 3 * i.bb + "px" : t.ruleDescription.length <= 190 ? a[e].style.height = 3.4 * i.bb + "px" : t.ruleDescription.length <= 220 ? a[e].style.height = 3.6 * i.bb + "px" : t.ruleDescription.length <= 250 ? a[e].style.height = 4 * i.bb + "px" : t.ruleDescription.length <= 280 ? a[e].style.height = 4.4 * i.bb + "px" : t.ruleDescription.length <= 310 ? a[e].style.height = 4.8 * i.bb + "px" : a[e].style.height = 5.2 * i.bb + "px", s[e].classList.remove("triangle"), s[e].classList.add("triangleup"))
						}) : this.$toast("暂无使用规则")
					},
					toggleSale: function(t, e) {
						var i = this;
						if (1 == t.disabled) return !1;
						t && t.rule && t.rule.length > 0 ? this.$nextTick(function() {
							var s = i.$refs.userule5,
								a = i.$refs.redpackageInfo5,
								n = i.$refs.redPacketModel5;
							n[e].clientHeight || n[e].offsetHeigth;
							if (0 == i.shopRedPacketNum) {
								i.shopRedPacketNum++;
								var r = a[e].clientHeight || a[e].offsetHeigth;
								i.bb = r
							}
							0 == i.hasTriangle5 ? (i.saveIndex5 = e, i.hasTriangle5 = !0, s[e].classList.remove("triangle"), s[e].classList.add("triangleup"), t.rule.length <= 10 ? a[e].style.height = 1.4 * i.bb + "px" : t.rule.length <= 30 ? a[e].style.height = 1.6 * i.bb + "px" : t.rule.length <= 70 ? a[e].style.height = 2.1 * i.bb + "px" : t.rule.length <= 100 ? a[e].style.height = 2.3 * i.bb + "px" : t.rule.length <= 130 ? a[e].style.height = 2.7 * i.bb + "px" : t.rule.length <= 160 ? a[e].style.height = 3 * i.bb + "px" : t.rule.length <= 190 ? a[e].style.height = 3.4 * i.bb + "px" : t.rule.length <= 220 ? a[e].style.height = 3.6 * i.bb + "px" : t.rule.length <= 250 ? a[e].style.height = 4 * i.bb + "px" : t.rule.length <= 280 ? a[e].style.height = 4.4 * i.bb + "px" : t.rule.length <= 310 ? a[e].style.height = 4.8 * i.bb + "px" : a[e].style.height = 5.2 * i.bb + "px") : i.saveIndex5 == e && 1 == i.hasTriangle5 ? (i.hasTriangle5 = !1, s[e].classList.remove("triangleup"), s[e].classList.add("triangle"), a[e].style.height = i.bb + "px") : (a[i.saveIndex5].style.height = i.bb + "px", s[i.saveIndex5].classList.remove("triangleup"), s[i.saveIndex5].classList.add("triangle"), i.saveIndex5 = e, i.hasTriangle5 = !0, t.rule.length <= 10 ? a[e].style.height = 1.4 * i.bb + "px" : t.rule.length <= 30 ? a[e].style.height = 1.6 * i.bb + "px" : t.rule.length <= 70 ? a[e].style.height = 2.1 * i.bb + "px" : t.rule.length <= 100 ? a[e].style.height = 2.3 * i.bb + "px" : t.rule.length <= 130 ? a[e].style.height = 2.7 * i.bb + "px" : t.rule.length <= 160 ? a[e].style.height = 3 * i.bb + "px" : t.rule.length <= 190 ? a[e].style.height = 3.4 * i.bb + "px" : t.rule.length <= 220 ? a[e].style.height = 3.6 * i.bb + "px" : t.rule.length <= 250 ? a[e].style.height = 4 * i.bb + "px" : t.rule.length <= 280 ? a[e].style.height = 4.4 * i.bb + "px" : t.rule.length <= 310 ? a[e].style.height = 4.8 * i.bb + "px" : a[e].style.height = 5.2 * i.bb + "px", s[e].classList.remove("triangle"), s[e].classList.add("triangleup"))
						}) : this.$toast("暂无使用规则")
					},
					toggle: function(t, e) {
						var i = this;
						if (1 == t.disabled) return !1;
						t && t.prodSaleRule && t.prodSaleRule.length > 0 ? this.$nextTick(function() {
							var s = i.$refs.userule,
								a = i.$refs.redpackageInfo,
								n = i.$refs.redPacketModel;
							n[e].clientHeight || n[e].offsetHeigth;
							if (0 == i.financialListNum) {
								i.financialListNum++;
								var r = a[e].clientHeight || a[e].offsetHeigth;
								i.cc = r
							}
							0 == i.hasTriangle ? (i.saveIndex = e, i.hasTriangle = !0, s[e].classList.remove("triangle"), s[e].classList.add("triangleup"), t.prodSaleRule.length <= 10 ? a[e].style.height = 1.5 * i.cc + "px" : t.prodSaleRule.length <= 30 ? a[e].style.height = 1.9 * i.cc + "px" : t.prodSaleRule.length <= 70 ? a[e].style.height = 2.2 * i.cc + "px" : t.prodSaleRule.length <= 100 ? a[e].style.height = 2.5 * i.cc + "px" : t.prodSaleRule.length <= 130 ? a[e].style.height = 2.8 * i.cc + "px" : t.prodSaleRule.length <= 160 ? a[e].style.height = 3.1 * i.cc + "px" : t.prodSaleRule.length <= 190 ? a[e].style.height = 3.5 * i.cc + "px" : t.prodSaleRule.length <= 220 ? a[e].style.height = 3.8 * i.cc + "px" : t.prodSaleRule.length <= 250 ? a[e].style.height = 4.1 * i.cc + "px" : t.prodSaleRule.length <= 280 ? a[e].style.height = 4.5 * i.cc + "px" : t.prodSaleRule.length <= 310 ? a[e].style.height = 4.8 * i.cc + "px" : a[e].style.height = 5.3 * i.cc + "px") : i.saveIndex == e && 1 == i.hasTriangle ? (i.hasTriangle = !1, s[e].classList.remove("triangleup"), s[e].classList.add("triangle"), a[e].style.height = i.cc + "px") : (a[i.saveIndex].style.height = i.cc + "px", s[i.saveIndex].classList.remove("triangleup"), s[i.saveIndex].classList.add("triangle"), i.saveIndex = e, i.hasTriangle = !0, t.prodSaleRule.length <= 10 ? a[e].style.height = 1.5 * i.cc + "px" : t.prodSaleRule.length <= 30 ? a[e].style.height = 1.9 * i.cc + "px" : t.prodSaleRule.length <= 70 ? a[e].style.height = 2.2 * i.cc + "px" : t.prodSaleRule.length <= 100 ? a[e].style.height = 2.5 * i.cc + "px" : t.prodSaleRule.length <= 130 ? a[e].style.height = 2.8 * i.cc + "px" : t.prodSaleRule.length <= 160 ? a[e].style.height = 3.1 * i.cc + "px" : t.prodSaleRule.length <= 190 ? a[e].style.height = 3.5 * i.cc + "px" : t.prodSaleRule.length <= 220 ? a[e].style.height = 3.8 * i.cc + "px" : t.prodSaleRule.length <= 250 ? a[e].style.height = 4.1 * i.cc + "px" : t.prodSaleRule.length <= 280 ? a[e].style.height = 4.5 * i.cc + "px" : t.prodSaleRule.length <= 310 ? a[e].style.height = 4.8 * i.cc + "px" : a[e].style.height = 5.3 * i.cc + "px", s[e].classList.remove("triangle"), s[e].classList.add("triangleup"))
						}) : this.$toast("暂无使用规则")
					},
					touchmove: function(t) {
						t.stopPropagation()
					},
					getSuccess: function(t, e) {
						var i = this;
						L.a.get(this.baseUrl + "/redPacket/receiveRedPacket.json", {
							params: {
								rpktId: t.rpktId
							}
						}).then(function(e) {
							var s = e.data;
							"000000" == s.returnCode ? (t.rpktStatus = "1", i.$toast("领取成功！")) : "000001" == s.returnCode ? (i.$toast("已领光！"), t.rpktStatus = "2") : "000002" == s.returnCode || ("000003" == s.returnCode ? (t.rpktStatus = "1", i.$toast("已领取！")) : i.$toast(s.returnMsg))
						}).
						catch (function(t) {
							i.$toast("领取失败！")
						})
					},
					getShopRedBag: function(t, e) {
						var i = this;
						L.a.get(this.baseUrl + "/shopRedPacket/receive.json", {
							params: {
								shopRedPacketId: t.shopRedPacketId,
								iepProductId: t.iepProductId,
								originalURL: window.location.origin + this.baseUrl + "/security/shopRedPacket/receive?productId=" + this.prodId + "&shopRedPacketId=" + t.shopRedPacketId + "&iepProductId=" + t.iepProductId
							}
						}).then(function(e) {
							var s = e.data;
							"000000" == s.returnCode ? (t.receiveStatus = "1", i.$toast("领取成功！")) : "ML1510" == s.returnCode ? (i.$toast("已领光！"), t.receiveStatus = "2") : "ML1513" == s.returnCode ? i.$toast("已过期") : "ML1514" == s.returnCode ? i.$toast("已过期") : "ML1515" == s.returnCode ? i.$toast("已领取") : "PY9000" == s.returnCode ? window.location.href = s.data : i.$toast("领取失败,稍后重试")
						}).
						catch (function(t) {
							i.$toast("系统繁忙，稍后再试！")
						})
					},
					getCoupon: function(t, e) {
						var i = this;
						this.updateUseMsg = !1, L.a.get(this.baseUrl + "/favorite/query.json", {
							params: {}
						}).then(function(e) {
							"000002" == e.data.returnCode ? window.location.href = i.baseUrl + "/security/product/awardFinancial.html?prodId=" + i.prodId + "&iepProdId=" + t.iepProdId : L.a.get(i.baseUrl + "/product/awardFinancial.json", {
								params: {
									prodId: i.prodId,
									iepProdId: t.iepProdId
								}
							}).then(function(e) {
								var s = e.data;
								"000000" == s.returnCode ? (t.receiveStatus = "1", i.$set(t, "effectUseMsg", s.effectUseMsg), t.effectUseMsg = s.effectUseMsg, i.updateUseMsg = !0, i.$toast("领取成功")) : "000025" == s.returnCode ? i.$toast("产品不在白名单内") : "000001" == s.returnCode ? i.$toast("优惠券不存在") : "000026" == s.returnCode ? (t.receiveStatus = "1", i.$toast("已领取")) : "IY0014" == s.returnCode ? (t.receiveStatus = "2", i.$toast("已领光")) : "IY0207" == s.returnCode ? (t.receiveStatus = "2", i.$toast("已领光")) : i.$toast("领取失败,稍后重试")
							}).
							catch (function(t) {
								i.$toast("系统繁忙，稍后再试！")
							})
						}).
						catch (function(t) {
							i.$toast("系统繁忙，稍后再试！")
						})
					},
					reGetSuccess: function(t, e) {
						var i = this;
						L.a.get(this.baseUrl + "/favorite/query.json", {
							params: {}
						}).then(function(e) {
							"000002" == e.data.returnCode ? window.location.href = i.baseUrl + "/security/product/awardRpkt.html?receivePage=0&prodId=" + i.prodId + "&rpktId=" + t.rpktId + "&vendorId=" + i.vendorId : L.a.get(i.baseUrl + "/product/awardRpkt.json", {
								params: {
									rpktId: t.rpktId,
									prodId: i.prodId,
									receivePage: 0,
									vendorId: i.vendorId
								}
							}).then(function(e) {
								var s = e.data;
								"000000" == s.returnCode ? (t.rpktStatus = "1", i.$toast("领取成功！"), L.a.get(i.baseUrl + "/product/queryRpktUseTime.json", {
									params: {
										rpktId: t.rpktId
									}
								}).then(function(e) {
									var i = e.data;
									"000000" == i.returnCode && (t.rpktUseMsg = i.rpktUseMsg)
								}).
								catch (function(t) {})) : "111111" == s.returnCode ? i.$toast("系统繁忙，稍后再试！") : "000021" == s.returnCode ? i.$toast(s.returnMsg) : "000022" == s.returnCode ? i.$toast("很抱歉,该红包限本行信用卡用户领取,请确认是否已绑卡或绑卡异常") : "000023" == s.returnCode ? (t.rpktStatus = "1", i.$toast("已领取！")) : "IY0030" == s.returnCode ? i.$toast(s.returnMsg) : "IY0012" == s.returnCode ? i.$toast(s.returnMsg) : "IY0014" == s.returnCode ? (i.$toast("已领光！"), t.rpktStatus = "2") : "IY0207" == s.returnCode ? (i.$toast("已领光！"), t.rpktStatus = "2") : i.$toast(s.returnMsg)
							}).
							catch (function(t) {
								i.$toast("系统繁忙，稍后再试！")
							})
						}).
						catch (function(t) {
							i.$toast("系统繁忙，稍后再试！")
						})
					},
					chooseRedBag: function() {
						this.showRedBag = !0, document.documentElement.style.overflow = "auto", this.$emit("show", this.showRedBag)
					},
					closeRedPacket: function() {
						this.showRedBag = !1, document.documentElement.style.overflow = "auto", this.$emit("showProductPage", this.showRedBag)
					},
					transparant: function() {
						this.showRedBag = !1, document.documentElement.style.overflow = "auto", this.$emit("show1", this.showRedBag)
					}
				},
				computed: {
					showThresholdAmount: function() {
						return function(t) {
							return 0 == t.thresholdAmount ? "无门槛" : parseInt(t.thresholdAmount)
						}
					},
					updateEffectUseMsg: function() {
						return this.updateUseMsg
					},
					moreRpktList: function() {
						return !this.productRedValue || !this.productRedValue.moreRpktList || 0 != this.productRedValue.moreRpktList.length
					},
					rpkListTips: function() {
						return !!(this.productRedValue && this.productRedValue.rpktList && 0 != this.productRedValue.rpktList.length || this.getShopRedPacketList && 0 != this.getShopRedPacketList.length)
					},
					financialList: function() {
						return !(this.getFinancialValue && this.getFinancialValue.financialInfoList && 0 == this.getFinancialValue.financialInfoList.length || this.getFinancialValue && !this.getFinancialValue.financialInfoList)
					}
				},
				mounted: function() {
					var t = this;
					this.$nextTick(function() {
						var e = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
						t.$refs.masking.style.height = e + "px";
						var i = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
						t.$refs.getRedPacket.style.width = i + "px", t.$refs.getRedPacket.style.top = e - Object(n.a)(".packet").height() + "px"
					})
				}
			}, St = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "app",
					on: {
						touchmove: t.touchmove
					}
				}, [i("div", {
					ref: "getRedPacket",
					staticClass: "getRedPacket",
					staticStyle: {
						"z-index": "1000"
					}
				}, [t._v("\n     领取红包票券\n    "), i("span", {
					staticClass: "closeRedPacket",
					on: {
						click: function(e) {
							t.closeRedPacket()
						}
					}
				})]), t._v(" "), i("div", {
					ref: "packet",
					staticClass: "packet",
					staticStyle: {
						"z-index": "999"
					}
				}, [i("div", [t.rpkListTips ? i("div", {
					staticClass: "availableRedBag"
				}, [i("span", [t._v("当前商品可用红包")])]) : t._e(), t._v(" "), t.productRedValue.rpktList && t.productRedValue.rpktList.length > 0 ? i("div", {
					staticClass: "eee moreRpktList"
				}, [i("ul", {
					staticClass: "redPacketList"
				}, t._l(t.productRedValue.rpktList, function(e, s) {
					return i("li", {
						key: s,
						staticClass: "every_information redpackage-detail1",
						on: {
							click: function(e) {
								t.chooseRedBag()
							}
						}
					}, [i("div", {
						staticClass: "installments-li-contentdd"
					}), t._v(" "), i("div", {
						ref: "redpackageInfo5",
						refInFor: !0,
						staticClass: "installments-li-contentee"
					}, [i("div", {
						staticStyle: {
							float: "left"
						}
					}, [i("div", {
						staticClass: "redPacketModel_le"
					}, [i("div", {
						staticClass: "redPacketModel_l_t"
					}, [i("span", {
						staticClass: "redpacket-icon"
					}, [t._v("￥")]), i("span", {
						staticClass: "redpacket-num",
						class: {
							"redpacket-num-big": e.rpktValue.length < 6,
							"redpacket-num-small": e.rpktValue.length > 5
						}
					}, [t._v(t._s(e.rpktValue))])]), t._v(" "), i("div", {
						staticClass: "redPacketModel_l_f"
					}, [t._v(t._s(e.rpktThreshold))])]), t._v(" "), i("div", {
						ref: "redPacketModel5",
						refInFor: !0,
						staticClass: "redPacketModel_m redPacketModel_m1"
					}, [i("div", {
						staticClass: "redPacketModel_m_t1 redPacketModel_m_t11"
					}, [t._v("\n                   " + t._s(e.rpktName) + "\n                 ")]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f12"
					}, [i("div", {
						staticClass: "redPacketModel_m_f1 redPacketModel_m_f20"
					}, [i("span", [t._v(t._s(e.rpktUseMsg))])])]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f2",
						on: {
							click: function(i) {
								t.toggleSale(e, s)
							}
						}
					}, [i("span", [t._v("使用规则")]), i("i", {
						ref: "userule5",
						refInFor: !0,
						staticClass: "triangle"
					})]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f3"
					}, [i("span", {
						domProps: {
							innerHTML: t._s(e.rule)
						}
					})])])]), t._v(" "), "0" == e.rpktStatus ? i("div", {
						staticClass: "redPacketModel_r1 redPacketModel_r11 redPacketModel_r111"
					}, [i("button", {
						on: {
							click: function(i) {
								t.$atEvent("030", void 0, {
									coupon: e.rpktId
								}), t.trackerSRS("030", "", {
									coupon: e.rpktId
								}), t.reGetSuccess(e, s)
							}
						}
					}, [t._v("领取")])]) : "1" == e.rpktStatus ? i("div", {
						staticClass: "redPacketModel_y redPacketModel_y1 redPacketModel_r111"
					}, [i("button", [t._v("已领取")])]) : "2" == e.rpktStatus ? i("div", {
						staticClass: "redPacketModel_q redPacketModel_q1 redPacketModel_r111"
					}, [i("button", [t._v("已领光")])]) : t._e(), t._v(" "), i("div", {
						class: {
							getredpacket: "1" == e.rpktStatus
						}
					})]), t._v(" "), i("div", {
						staticClass: "installments-li-contentff"
					})])
				}))]) : t._e(), t._v(" "), t.getShopRedPacketList && t.getShopRedPacketList.length > 0 ? i("div", {
					staticClass: "eee moreRpktList"
				}, [i("ul", {
					staticClass: "redPacketList"
				}, t._l(t.getShopRedPacketList, function(e, s) {
					return i("li", {
						key: s,
						staticClass: "every_information redpackage-detail1",
						on: {
							click: function(e) {
								t.chooseRedBag()
							}
						}
					}, [i("div", {
						staticClass: "installments-li-contentaa installments-li-contentdd"
					}), t._v(" "), i("div", {
						ref: "redpackageInfo6",
						refInFor: !0,
						staticClass: "installments-li-content installments-li-contentee"
					}, [i("div", {
						staticStyle: {
							float: "left"
						}
					}, [i("div", {
						staticClass: "redPacketModel_le"
					}, [i("div", {
						staticClass: "redPacketModel_l_t"
					}, [i("span", {
						staticClass: "redpacket-icon"
					}, [t._v("￥")]), i("span", {
						staticClass: "redpacket-num",
						class: {
							"redpacket-num-big": e.amount.length < 6,
							"redpacket-num-small": e.amount.length > 5
						}
					}, [t._v(t._s(t._f("formatMoney")(e.amount)))])]), t._v(" "), i("div", {
						staticClass: "redPacketModel_l_f"
					}, [0 != e.thresholdAmount ? i("span", [t._v("满")]) : t._e(), t._v(t._s(t.showThresholdAmount(e))), 0 != e.thresholdAmount ? i("span", [t._v("元可用")]) : t._e()])]), t._v(" "), i("div", {
						ref: "redPacketModel6",
						refInFor: !0,
						staticClass: "redPacketModel_m redPacketModel_m1"
					}, [i("div", {
						staticClass: "redPacketModel_m_t1"
					}, [t._v("\n                   " + t._s(e.iepProdNameCn) + "\n                 ")]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f12 redPacketModel_m_f13"
					}, [i("div", {
						staticClass: "redPacketModel_m_f1 redPacketModel_m_f20"
					}, [i("span", [t._v(t._s(e.receiveStartTime + "-" + e.receiveEndTime))])])]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f2",
						on: {
							click: function(i) {
								t.toggleShopSale(e, s)
							}
						}
					}, [i("span", [t._v("使用规则")]), i("i", {
						ref: "userule6",
						refInFor: !0,
						staticClass: "triangle"
					})]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f3"
					}, [i("span", {
						domProps: {
							innerHTML: t._s(e.ruleDescription)
						}
					})])])]), t._v(" "), "0" == e.receiveStatus ? i("div", {
						staticClass: "redPacketModel_r1 redPacketModel_r11 redPacketModel_r111"
					}, [i("button", {
						on: {
							click: function(i) {
								t.$atEvent("030", void 0, {
									coupon: e.shopId
								}), t.trackerSRS("030", "", {
									coupon: e.shopId
								}), t.getShopRedBag(e, s)
							}
						}
					}, [t._v("领取")])]) : "1" == e.receiveStatus ? i("div", {
						staticClass: "redPacketModel_y redPacketModel_y1 redPacketModel_r111"
					}, [i("button", [t._v("已领取")])]) : "2" == e.receiveStatus ? i("div", {
						staticClass: "redPacketModel_q redPacketModel_q1 redPacketModel_r111"
					}, [i("button", [t._v("已领光")])]) : t._e(), t._v(" "), i("div", {
						class: {
							getredpacket: "1" == e.receiveStatus
						}
					})]), t._v(" "), i("div", {
						staticClass: "installments-li-contentbb installments-li-contentff"
					})])
				}))]) : t._e(), t._v(" "), t.productRedValue.rpktBottomList && t.productRedValue.rpktBottomList.length > 0 ? i("div", {
					staticClass: "eee moreRpktList",
					class: {
						distance_top: !t.rpkListTips
					}
				}, [i("ul", {
					staticClass: "redPacketList"
				}, t._l(t.productRedValue.rpktBottomList, function(e, s) {
					return i("li", {
						key: s,
						staticClass: "every_information redpackage-detail1"
					}, [i("div", {
						staticClass: "installments-li-contentaa installments-li-contentdd"
					}), t._v(" "), i("div", {
						ref: "redpackageInfo5",
						refInFor: !0,
						staticClass: "installments-li-content installments-li-contentee"
					}, [i("div", {
						staticStyle: {
							float: "left"
						}
					}, [i("div", {
						staticClass: "redPacketModel_le"
					}, [i("div", {
						staticClass: "redPacketModel_l_t"
					}, [i("span", {
						staticClass: "redpacket-icon"
					}, [t._v("￥")]), i("span", {
						staticClass: "redpacket-num",
						class: {
							"redpacket-num-big": e.rpktValue.length < 6,
							"redpacket-num-small": e.rpktValue.length > 5
						}
					}, [t._v(t._s(e.rpktValue))])]), t._v(" "), i("div", {
						staticClass: "redPacketModel_l_f"
					}, [t._v(t._s(e.rpktThreshold))])]), t._v(" "), i("div", {
						ref: "redPacketModel5",
						refInFor: !0,
						staticClass: "redPacketModel_m redPacketModel_m1"
					}, [i("div", {
						staticClass: "redPacketModel_m_t1 redPacketModel_m_t11"
					}, [t._v("\n                   " + t._s(e.rpktName) + "\n                 ")]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f12"
					}, [i("div", {
						staticClass: "redPacketModel_m_f1 redPacketModel_m_f20"
					}, [i("span", [t._v(t._s(e.rpktUseMsg))])])]), t._v(" "), t._m(0, !0), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f3"
					}, [i("span", {
						domProps: {
							innerHTML: t._s(e.rule)
						}
					})])])]), t._v(" "), t._m(1, !0)]), t._v(" "), i("div", {
						staticClass: "installments-li-contentbb installments-li-contentff"
					})])
				}))]) : t._e(), t._v(" "), t.getShopRedPacketBottomList && t.getShopRedPacketBottomList.length > 0 ? i("div", {
					staticClass: "eee moreRpktList",
					class: {
						distance_top: !t.rpkListTips && t.productRedValue.rpktBottomList && 0 == t.productRedValue.rpktBottomList.length
					}
				}, [i("ul", {
					staticClass: "redPacketList"
				}, t._l(t.getShopRedPacketBottomList, function(e, s) {
					return i("li", {
						key: s,
						staticClass: "every_information redpackage-detail1"
					}, [i("div", {
						staticClass: "installments-li-contentaa installments-li-contentdd"
					}), t._v(" "), i("div", {
						ref: "redpackageInfo6",
						refInFor: !0,
						staticClass: "installments-li-content installments-li-contentee"
					}, [i("div", {
						staticStyle: {
							float: "left"
						}
					}, [i("div", {
						staticClass: "redPacketModel_le"
					}, [i("div", {
						staticClass: "redPacketModel_l_t"
					}, [i("span", {
						staticClass: "redpacket-icon"
					}, [t._v("￥")]), i("span", {
						staticClass: "redpacket-num",
						class: {
							"redpacket-num-big": e.amount.length < 6,
							"redpacket-num-small": e.amount.length > 5
						}
					}, [t._v(t._s(t._f("formatMoney")(e.amount)))])]), t._v(" "), i("div", {
						staticClass: "redPacketModel_l_f"
					}, [0 != e.thresholdAmount ? i("span", [t._v("满")]) : t._e(), t._v(t._s(t.showThresholdAmount(e))), 0 != e.thresholdAmount ? i("span", [t._v("元可用")]) : t._e()])]), t._v(" "), i("div", {
						ref: "redPacketModel6",
						refInFor: !0,
						staticClass: "redPacketModel_m redPacketModel_m1"
					}, [i("div", {
						staticClass: "redPacketModel_m_t1"
					}, [t._v("\n                   " + t._s(e.iepProdNameCn) + "\n                 ")]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f12 redPacketModel_m_f13"
					}, [i("div", {
						staticClass: "redPacketModel_m_f1 redPacketModel_m_f20"
					}, [i("span", [t._v(t._s(e.receiveStartTime + "-" + e.receiveEndTime))])])]), t._v(" "), t._m(2, !0), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f3"
					}, [i("span", {
						domProps: {
							innerHTML: t._s(e.ruleDescription)
						}
					})])])]), t._v(" "), t._m(3, !0)]), t._v(" "), i("div", {
						staticClass: "installments-li-contentbb installments-li-contentff"
					})])
				}))]) : t._e(), t._v(" "), t.financialList ? i("div", {
					staticClass: "moreRedBag",
					class: {
						moreRedBag1: !t.rpkListTips && t.productRedValue.rpktBottomList && 0 == t.productRedValue.rpktBottomList.length && t.getShopRedPacketBottomList && 0 == t.getShopRedPacketBottomList.length
					}
				}, [i("span", [t._v("分期优惠券")])]) : t._e(), t._v(" "), t.getFinancialValue.financialInfoList && t.getFinancialValue.financialInfoList.length > 0 ? i("div", {
					staticClass: "eee moreRpktList"
				}, [i("ul", {
					staticClass: "redPacketList"
				}, t._l(t.getFinancialValue.financialInfoList, function(e, s) {
					return i("li", {
						key: s,
						staticClass: "every_information redpackage-detail1",
						on: {
							click: function(e) {
								t.chooseRedBag()
							}
						}
					}, [i("div", {
						staticClass: "installments-li-contentaa"
					}), t._v(" "), i("div", {
						ref: "redpackageInfo",
						refInFor: !0,
						staticClass: "installments-li-content"
					}, [i("div", {
						staticStyle: {
							float: "left"
						}
					}, [i("div", {
						staticClass: "redPacketModel_le"
					}, [i("div", {
						staticClass: "redPacketModel_l_t"
					}, [i("span", {
						staticClass: "redpacket-icon"
					}), i("span", {
						staticClass: "finall-num"
					}, ["01" == e.prefUseWay ? i("span", {
						staticClass: "icon-rmb"
					}, [t._v("￥")]) : t._e(), t._v(t._s(t._f("checkChar")(e)))]), "02" == e.prefUseWay && "1.0000" != e.prefDsct ? i("span", {
						staticClass: "pref-dsct"
					}, [t._v("折")]) : t._e()]), t._v(" "), i("div", {
						staticClass: "finall_l_f"
					}, [i("span", [t._v(t._s("01" == e.prefUseWay ? "手续费" : "1.0000" == e.prefDsct ? "手续费" : "" == e.prefDsctPeriod ? "每期手续费" : "前" + e.prefDsctPeriod + "期手续费"))])])]), t._v(" "), i("div", {
						ref: "redPacketModel",
						refInFor: !0,
						staticClass: "redPacketModel_m redPacketModel_m1"
					}, [i("div", {
						staticClass: "redPacketModel_m_t1"
					}, [t._v("\n                   " + t._s(t._f("correct")(e)) + "\n                 ")]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f12"
					}, [i("div", {
						staticClass: "redPacketModel_m_f1"
					}, [e.prefDsctMaxAmt && "02" == e.prefUseWay ? i("span", [t._v("累计优惠不超过" + t._s(e.prefDsctMaxAmt) + "元")]) : t._e()]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f1"
					}, [i("span", [t._v(t._s((t.updateEffectUseMsg, e.effectUseMsg)))])])]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f2",
						on: {
							click: function(i) {
								t.toggle(e, s)
							}
						}
					}, [i("span", [t._v("使用规则")]), i("i", {
						ref: "userule",
						refInFor: !0,
						staticClass: "triangle"
					})]), t._v(" "), i("div", {
						staticClass: "redPacketModel_m_f3"
					}, [i("span", {
						domProps: {
							innerHTML: t._s(e.prodSaleRule)
						}
					})])])]), t._v(" "), "0" == e.receiveStatus ? i("div", {
						staticClass: "redPacketModel_r1"
					}, [i("button", {
						on: {
							click: function(i) {
								t.$atEvent("030", void 0, {
									coupon: e.rpktId
								}), t.getCoupon(e, s)
							}
						}
					}, [t._v("领取")])]) : "1" == e.receiveStatus ? i("div", {
						staticClass: "redPacketModel_y redPacketModel_y1"
					}, [i("button", [t._v("已领取")])]) : "2" == e.receiveStatus ? i("div", {
						staticClass: "redPacketModel_q redPacketModel_q1"
					}, [i("button", [t._v("已领光")])]) : t._e(), t._v(" "), i("div", {
						class: {
							getredpacket: "1" == e.receiveStatus
						}
					})]), t._v(" "), i("div", {
						staticClass: "installments-li-contentbb"
					})])
				}))]) : t._e()])]), t._v(" "), i("div", {
					ref: "masking",
					staticClass: "masking_frame",
					staticStyle: {
						"z-index": "888"
					},
					on: {
						click: function(e) {
							t.transparant()
						}
					}
				})])
			};
		St._withStripped = !0;
		var Ct = !1;
		var wt = function(t) {
			Ct || i(502)
		}, yt = Object(_.a)(_t, St, [function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "redPacketModel_m_f2"
			}, [e("span", [this._v("使用规则")]), e("i", {
				staticClass: "triangle"
			})])
		}, function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "redPacketModel_q redPacketModel_q1 redPacketModel_r111"
			}, [e("button", [this._v("已领光")])])
		}, function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "redPacketModel_m_f2"
			}, [e("span", [this._v("使用规则")]), e("i", {
				staticClass: "triangle"
			})])
		}, function() {
			var t = this.$createElement,
				e = this._self._c || t;
			return e("div", {
				staticClass: "redPacketModel_q redPacketModel_q1 redPacketModel_r111"
			}, [e("button", [this._v("已领光")])])
		}], !1, wt, "data-v-21b7aa76", null);
		yt.options.__file = "src/pages/product/detail/children/redPacketBag.vue";
		var kt, It = yt.exports,
			bt = (i(174), i(24), Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
				}
				return t
			});

		function xt(t, e, i) {
			return e in t ? Object.defineProperty(t, e, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = i, t
		}
		var Lt = {
			props: {
				basePath: {
					type: String,
					required: !0
				},
				awardRpkt: {
					type: String
				}
			},
			data: function() {
				var t;
				return window._assign(bt({}, r, (xt(t = {
					cartLogo: m.a,
					productId: "",
					popId: "",
					quantity: 1,
					haveAttr: !1,
					noneAttr: !1,
					isSoldOut: !1,
					_action: "buynow",
					showActivate: !1,
					isSelectedAllNorm: !1,
					normSelectedStr: "",
					normUnSelectedStr: "",
					instalPrice: "",
					minInst: "",
					baseUrl: $base,
					isSelectedAttr: !1,
					popCtrls: 10,
					num: null,
					payway: "",
					stk: "",
					priceSectionList: [],
					fatherPayWayArrey: [],
					monthlyInstalment: "",
					IntegralDeductio: "",
					mobileBankFlag: "",
					showNewUserBox: !1,
					showNewUserTipsBox: !1,
					popUpCode: null,
					popUpWord: "",
					orderId: null,
					orderNo: null,
					applyStatusPath: null,
					periodMoney: 9.9,
					sendSumPrice: "",
					concealedStaging: !1,
					isShowSecondPage: !1,
					recommendProduct: [],
					collectFlag: !0,
					showRedBag: !1,
					productRedValue: null,
					hasRedPacket: null,
					isShowRedPacket: !1,
					isShowfinally: !1,
					isShowShopRedPacketList: !1,
					returnCodeMsg: !1,
					returnCodeMessage: "",
					getFinancialValue: null,
					multiActList: [],
					isShowConfirmBox: !1,
					isShowGreyBox: !1,
					isShowCustomerBox: !1,
					saveCustomFlag: "0"
				}, "multiActList", []), xt(t, "isShowConfirmBox", !1), xt(t, "isShowGreyBox", !1), xt(t, "isShowCustomerBox", !1), xt(t, "saveCustomFlag", "0"), xt(t, "getAccessId", ""), xt(t, "getTs", ""), xt(t, "getToken", ""), xt(t, "linkCard", null), xt(t, "getVisitorId", ""), xt(t, "getVisitorName", ""), xt(t, "pageUrl", ""), xt(t, "getTicket", ""), xt(t, "getLayerFlag", ""), xt(t, "getShopRedPacketList", []), xt(t, "getShopRedPacketBottomList", []), xt(t, "redPacketBagAction", ""), xt(t, "bindingCardCode", ""), xt(t, "returnMessage", ""), xt(t, "timeStamp3", !1), xt(t, "timeStamp6", !1), xt(t, "timeStamp9", ""), xt(t, "showIntegralAndPriceType", ""), xt(t, "isActOverLimit", !1), xt(t, "showBindCardPop", !1), xt(t, "getActStartTime", ""), xt(t, "saveActStart", ""), xt(t, "rushToCashFlag", ""), xt(t, "alreadySoldOut", !1), xt(t, "alreadyEnd", !1), xt(t, "isFromShareProduct", !1), xt(t, "saveVVIP", ""), t)), $data)
			},
			created: function() {
				var t = this;
				if (this.saveVVIP = this.channel, "VVIP" === this.channel && (this.channel = "INTEGRAL"), this.saveActStart = this.actStart, this.getActStartTime = this.actStartTime, this.actEndTime && this.actStartTime && this.actStart) {
					var e = this.actEndTime,
						i = e.slice(0, 4) + "/" + e.slice(4, 6) + "/" + e.slice(6, 8) + " " + e.slice(8, 10) + ":" + e.slice(10, 12) + ":" + e.slice(12, 14),
						s = this.actStartTime,
						a = s.slice(0, 4) + "/" + s.slice(4, 6) + "/" + s.slice(6, 8) + " " + s.slice(8, 10) + ":" + s.slice(10, 12) + ":" + s.slice(12, 14);
					window.setInterval(function() {
						if ("0" == t.actStart) {
							var e = new Date(a).getTime(),
								s = (new Date).getTime();
							t.timeStamp9 = s - e > 0
						}
						if (!t.isSoldOut && "1" == t.actStart) {
							var n = new Date(i).getTime(),
								r = (new Date).getTime();
							t.timeStamp6 = r - n > 0
						}
					}, 1e3)
				}
				this.payWayList.forEach(function(e, i) {
					t.fatherPayWayArrey.push(e.payWay)
				}), this.priceSectionList.forEach(function(e, i) {
					t.monthlyInstalment = e.instMinPrice
				}), this.priceSectionList.forEach(function(e) {
					"0" == e.priceType && (t.periodMoney = e.minPrice)
				}), this.$nextTick(function() {
					var t = this;
					L.a.post($base + "/product/recommendProduct.json", {
						productId: this.productId,
						isSkillProduct: !! this.isSkillProduct
					}).then(function(e) {
						"000000" == e.data.returnCode && (t.recommendProduct = e.data.data)
					})
				})
			},
			mounted: function() {
				var t = this;
				this.isFromShareProduct = "true" == this.getAddressParams("isFromWechat"), this.pageUrl = window.location.href + "&layerFlag=true", this.returnCodeMsg = this.getAddressParams("returnCode"), this.returnCodeMessage = this.getAddressParams("returnMessage"), this.redPacketBagAction = this.getAddressParams("action"), this.getLayerFlag = "true" == this.getAddressParams("layerFlag"), this.bindingCardCode = this.getAddressParams("bindingCardCode");
				var e = this.getQueryParam("returnMsg");
				this.returnMessage = decodeURIComponent(decodeURI(decodeURI(encodeURI(e)))), this.rushToCashFlag = this.getAddressParams("resultCode");
				1 == this.getLayerFlag && (this.isShowCustomerBox = !0, this.isShowGreyBox = !0), this.returnCodeMsg, "000032" == this.bindingCardCode && (this.showBindCardPop = !0), this.returnMessage && "000032" != this.bindingCardCode && this.$toast({
					msg: this.returnMessage
				}), this.returnCodeMessage && this.$toast({
					msg: this.returnCodeMessage,
					timeout: 2e3
				}), Object(ft.a)($base, $data.productId, $data.vendorId, 0, 0).then(function(t) {}).
				catch (function() {}).
				finally(function() {
					t.returnCodeMsg
				}), window.addEventListener("scroll", this.handleScroll, !0);
				var i = .6 * document.documentElement.clientHeight;
				this.showActionToast(), this.bindScreenFisrtDrag(), this.instalPrice = this.minInst, this.$nextTick(function() {
					t.$refs.popupNorm.style.height = i + "px"
				}), this.isProductRunOut && this.$toast("抱歉，手速慢了，商品已兑罄")
			},
			components: {
				scFirstContent: $,
				scSecondContent: nt,
				productNorm: gt,
				PageHeader: a.a,
				LayoutFlex: k.a,
				newUserBox: D,
				bindCardPop: K,
				newUserTipsBox: X,
				redPacketBag: It,
				BaseIcon: b.a,
				goToLook: ht
			},
			computed: {
				schoolAlreadyEnd: {
					get: function() {
						return this.alreadyEnd
					},
					set: function(t) {
						this.alreadyEnd = t
					}
				},
				schoolAlreadySoldOut: {
					get: function() {
						return this.alreadySoldOut
					},
					set: function(t) {
						this.alreadySoldOut = t
					}
				},
				isButtonDisabled: function() {
					return !(this.isSoldOut || this.isActOverLimit || "2" == this.saveActStart || "0" == this.saveActStart && ("" === this.timeStamp9 || !1 === this.timeStamp9) || this.timeStamp3 || this.isProductRunOut);
				},
				isProductRunOut: function() {
					return "000033" == this.rushToCashFlag
				},
				getIntegralAndPriceType: function() {
					return this.minFullIntegralPointPart == this.maxFullIntegralPointPart && "0.00" == this.minFullIntegralCashPart && "0.00" == this.maxFullIntegralCashPart ? this.showIntegralAndPriceType = "1" : this.minFullIntegralPointPart != this.maxFullIntegralPointPart && "0.00" == this.minFullIntegralCashPart && "0.00" == this.maxFullIntegralCashPart ? this.showIntegralAndPriceType = "2" : this.showIntegralAndPriceType = "3", this.showIntegralAndPriceType
				},
				showIntegralPlusPrice: function() {
					return "INTEGRAL" == this.channel ? "" : this.minPointPart == this.maxPointPart && this.minCashPart == this.maxCashPart ? this.minPointPart + "积分+￥" + this.minCashPart : this.minPointPart + "积分+￥" + this.minCashPart + "起"
				},
				isMoreThanFourNumber: function() {
					return 1 != (this.instalPrice && this.instalPrice.toString().length <= 5 || !this.instalPrice && this.monthlyInstalment.toString().length <= 5)
				},
				getCodeValue: function() {
					return this.collectFlag
				},
				isShowMinstInPop: function() {
					return +this.sendSumPrice >= 9.8
				},
				isMoreThanNine: function() {
					return !(this.periodMoney < 9.8)
				},
				isToolTipBox: function() {
					return "1" == this.popUpCode ? this.popUpWord = "非常抱歉，您在我行留存的证件类型不符合活动条件" : "2" == this.popUpCode ? this.popUpWord = "该活动为新户活动，您是老用户了，无法参加哦~" : "3" == this.popUpCode ? this.popUpWord = "抱歉，不可以重复申请卡片哦" : void 0
				},
				isShelve: function() {
					return "1" == this.shelveStatus
				},
				btnTxt: function() {
					if ("VVIP" === this.saveVVIP) return this.isShelve ? "已下架" : this.isSoldOut ? "已兑罄" : "立即兑换";
					if (this.isShelve) return this.alreadySoldOut = !0, "已下架";
					if (this.actEndTime && void 0 != this.actStart) {
						var t = this.actEndTime,
							e = t.slice(0, 4) + "/" + t.slice(4, 6) + "/" + t.slice(6, 8) + " " + t.slice(8, 10) + ":" + t.slice(10, 12) + ":" + t.slice(12, 14);
						if ("0" == this.actStart && !1 === this.timeStamp9 || "0" == this.actStart && "" === this.timeStamp9) return "即将开始";
						if (!this.isSoldOut && "1" == this.actStart) {
							var i = new Date(e).getTime(),
								s = (new Date).getTime();
							if (this.timeStamp3 = s - i > 0, this.timeStamp3 || this.timeStamp6) return this.alreadyEnd = !0, "已结束"
						}
						if ("2" == this.actStart) return this.alreadyEnd = !0, "已结束"
					}
					return this.isSoldOut || this.isActOverLimit || this.isProductRunOut ? "已兑罄" : "立即兑换"
				},
				ispretermissionIntegral: function() {
					return this.fatherPayWayArrey.indexOf("2") > -1
				},
				isOnlypretermissionIntegral: function() {
					return "INTEGRAL" == this.channel && this.ispretermissionIntegral && this.ispretermissionPeriod
				},
				ispretermissionPeriod: function() {
					return this.fatherPayWayArrey.indexOf("1") > -1
				},
				isShowPeriodStyle: function() {
					return "INTEGRAL" == this.channel && !this.ispretermissionIntegral && this.ispretermissionPeriod
				},
				isShowCommonPeriod: function() {
					return "COMMON" == this.channel && this.ispretermissionPeriod
				}
			},
			methods: (kt = {
				isIOS: function() {
					return /iphone|ipad/.test(navigator.userAgent.toLowerCase())
				},
				isAndroid: function() {
					return /android/.test(navigator.userAgent.toLowerCase())
				},
				isMbank: function() {
					return /bocommobs/.test(navigator.userAgent.toLowerCase())
				},
				trackerSRS: function(t, e, i) {
					if (window.SRSAPP && window.SRSAPP.onEvent) {
						t = window.pageId + t;
						window.SRSAPP.onEvent(t, e, i)
					}
				},
				cancelConfirmBox: function() {
					this.isShowGreyBox = !1, this.isShowConfirmBox = !1
				},
				customerServiceContact: function() {
					this.$atEvent("042", void 0, {
						pagesource: 1
					}), this.trackerSRS("042", "", {
						pagesource: 1
					}), this.getCustomPamams()
				},
				customerServicePhone: function() {
					if (this.$atEvent("043"), this.trackerSRS("043"), this.isShowCustomerBox = !1, 1 != this.isIOS()) this.isShowGreyBox = !0, this.isShowConfirmBox = !0;
					else if (this.isShowGreyBox = !1, this.isMbank()) {
						var t = this.servicePhone;
						window.BCM.init({}, function() {
							BCM.Native.BCMApi("xpCallNum", {
								phoneNum: t
							})
						})
					} else window.location.href = "tel:" + this.servicePhone
				},
				customerServiceCancer: function() {
					this.$atEvent("044"), this.trackerSRS("044"), this.isShowCustomerBox = !1, this.isShowGreyBox = !1
				},
				confirmConfirmBox: function() {
					if (this.isShowGreyBox = !1, this.isShowConfirmBox = !1, this.isMbank()) {
						var t = this.servicePhone;
						window.BCM.init({}, function() {
							BCM.Native.BCMApi("xpCallNum", {
								phoneNum: t
							})
						})
					} else window.location.href = "tel:" + this.servicePhone
				},
				getCustomPamams: function() {
					var t, e = this;
					t = this.baseUrl + "/onlineService/getParameters.json", L.a.get(t, {
						params: {
							source: 1,
							shopId: this.shopId,
							productId: this.productId,
							originalURL: this.pageUrl
						}
					}).then(function(t) {
						var i = t.data;
						if ("000000" == i.returnCode) {
							e.getAccessId = i.accessId, e.getTs = i.ts, e.getToken = i.token, e.linkCard = i.linkCard, e.getVisitorId = i.visitorId, e.getVisitorName = i.visitorName, e.getTicket = i.ticket;
							var s = window.location.href.indexOf("paymenttest") > -1;
							window.location.href = 1 == s ? "https://paymenttest.bankcomm.com/chat/chat-web/chat.html?accessId=" + e.getAccessId + "&ts=" + e.getTs + "&token=" + e.getToken + "&visitorId=" + e.getVisitorId + "&visitorName=" + e.getVisitorName + "&ticket=" + e.getTicket + "&linkCard=" + encodeURIComponent(JSON.stringify(e.linkCard)) : "https://creditcardapp.bankcomm.com/chat/chat-web/chat.html?accessId=" + e.getAccessId + "&ts=" + e.getTs + "&token=" + e.getToken + "&visitorId=" + e.getVisitorId + "&visitorName=" + e.getVisitorName + "&ticket=" + e.getTicket + "&linkCard=" + encodeURIComponent(JSON.stringify(e.linkCard))
						} else "PY9000" == i.returnCode && (window.location.href = i.data)
					}).
					catch (function(t) {
						e.$toast({
							msg: "服务器异常",
							timeout: 2e3
						})
					})
				},
				showCustomerBox: function() {
					var t = this;
					this.$atEvent("041", "", {
						channelid: "INTEGRAL" == this.channel ? 2 : 1
					}), this.trackerSRS("041", "", {
						channelid: "INTEGRAL" == this.channel ? 2 : 1
					}), L.a.get(this.baseUrl + "/onlineService/getStatus.json", {
						params: {
							shopId: this.shopId
						}
					}).then(function(e) {
						t.saveCustomFlag = e.data, "1" == t.saveCustomFlag ? (t.isShowCustomerBox = !0, t.isShowGreyBox = !0) : t.customerServicePhone()
					}).
					catch (function(e) {
						t.customerServicePhone()
					})
				},
				getRedList: function() {
					this.isHasRedPacketList(), this.isHasFinancialList(), this.isHasShopRedPacketList(), this.getFinancialValue && this.getFinancialValue.financialInfoList && 0 != this.getFinancialValue.financialInfoList.length ? this.isShowfinally = !0 : this.isShowfinally = !1, this.productRedValue && this.productRedValue.rpktList && 0 != this.productRedValue.rpktList.length ? this.isShowRedPacket = !0 : this.isShowRedPacket = !1, this.getShopRedPacketList && 0 != this.getShopRedPacketList.length ? this.isShowShopRedPacketList = !0 : this.isShowShopRedPacketList = !1, this.returnCodeMsg && "8" == this.redPacketBagAction && 1 == this.isShowRedPacket && (this.showDetailRedBag(), "000000" == this.returnCodeMsg ? this.$toast("领取成功！") : "111111" == this.returnCodeMsg ? this.$toast("系统繁忙，稍后再试！") : "000021" == this.returnCodeMsg ? this.$toast("红包不在白名单内,不能领取!") : "000022" == this.returnCodeMsg ? this.$toast("很抱歉,该红包限本行信用卡用户领取,请确认是否已绑卡或绑卡异常") : "000023" == this.returnCodeMsg ? this.$toast("已领取！") : "IY0030" == this.returnCodeMsg ? this.$toast("已领取互斥红包，不能再领取!") : "IY0012" == this.returnCodeMsg ? this.$toast("最大领取超过限制!") : "IY0014" == this.returnCodeMsg ? this.$toast("已领光！") : "IY0207" == this.returnCodeMsg && this.$toast("已领光！")), this.returnCodeMsg && "10" == this.redPacketBagAction && 1 == this.isShowfinally && (this.showDetailRedBag(), "000000" == this.returnCodeMsg ? this.$toast("领取成功！") : "000025" == this.returnCodeMsg ? this.$toast("产品不在白名单内") : "000001" == this.returnCodeMsg ? this.$toast("优惠券不存在") : "000026" == this.returnCodeMsg ? this.$toast("已领取") : "IY0014" == this.returnCodeMsg ? this.$toast("已领光") : "IY0207" == this.returnCodeMsg ? this.$toast("已领光") : this.$toast("领取失败,稍后重试")), this.returnCodeMsg && "11" == this.redPacketBagAction && 1 == this.isShowShopRedPacketList && (this.showDetailRedBag(), "000000" == this.returnCodeMsg ? this.$toast("领取成功！") : "ML1510" == this.returnCodeMsg ? this.$toast("已领光") : "ML1513" == this.returnCodeMsg ? this.$toast("已过期") : "ML1514" == this.returnCodeMsg ? this.$toast("已过期") : "ML1515" == this.returnCodeMsg ? this.$toast("已领取") : this.$toast("领取失败,稍后重试"))
				},
				touchmove: function(t) {
					this.showRedBag && t.preventDefault()
				},
				appHidden: function() {
					this.$refs.SecondContent.$refs.tabSectionEl && (this.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "scroll"), this.$refs.scFirstEl.style["overflow-y"] = "scroll", this.$refs.app.style["overflow-y"] = "scroll", document.getElementsByTagName("body")[0].style.overflow = "auto", document.getElementsByTagName("html")[0].style.overflow = "auto"
				},
				appShow: function() {
					this.$refs.SecondContent.$refs.tabSectionEl && (this.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "hidden"), this.$refs.scFirstEl.style["overflow-y"] = "hidden", this.$refs.app.style["overflow-y"] = "hidden", document.getElementsByTagName("body")[0].style.overflow = "hidden", document.getElementsByTagName("html")[0].style.overflow = "hidden"
				},
				isHasRedPacketList: function() {
					var t = this;
					n.a.ajax({
						url: this.baseUrl + "/product/rpktList.json",
						method: "GET",
						async: !1,
						data: {
							prodId: this.productId,
							vendorId: this.vendorId
						},
						context: this
					}).done(function(e) {
						var i = e;
						"000000" == i.returnCode && (t.productRedValue = i)
					}).fail(function() {
						t.$toast("服务器异常，请稍后重试")
					})
				},
				isHasShopRedPacketList: function() {
					var t = this;
					n.a.ajax({
						url: this.baseUrl + "/shopRedPacket/receivableList.json",
						method: "GET",
						async: !1,
						data: {
							productId: this.productId,
							shopId: this.shopId,
							vendorId: this.vendorId
						},
						context: this
					}).done(function(e) {
						var i = e;
						"000000" == i.returnCode && (t.getShopRedPacketList = i.data.shopRedPacketList, t.getShopRedPacketBottomList = i.data.shopRedPacketBottomList)
					}).fail(function() {
						t.$toast("服务器异常，请稍后重试")
					})
				},
				isHasFinancialList: function() {
					var t = this;
					n.a.ajax({
						url: this.baseUrl + "/product/financialList.json",
						method: "GET",
						async: !1,
						data: {
							prodId: this.productId,
							vendorId: this.vendorId
						},
						context: this
					}).done(function(e) {
						var i = e;
						"000000" == i.returnCode && (t.getFinancialValue = i)
					}).fail(function() {
						t.$toast("服务器异常，请稍后重试")
					})
				},
				showDetailRedBag: function() {
					this.showRedBag = !0, this.appShow()
				},
				show: function(t) {
					this.showRedBag = t
				},
				show1: function(t) {
					this.showRedBag = t, this.appHidden()
				},
				showProductPage: function(t) {
					this.showRedBag = t, this.appHidden()
				},
				sendDeductibleValueWay: function(t) {
					this.IntegralDeductio = t
				},
				getAddressParams: function(t) {
					var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
						i = window.location.search.substr(1).match(e);
					return null != i ? unescape(i[2]) : null
				},
				handleScroll: function() {
					var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
					document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
					null != +t && (this.isShowSecondPage = !0)
				},
				getSumPriceValue: function(t) {
					this.sendSumPrice = t
				},
				isShowPeiod: function(t) {
					this.concealedStaging = t
				},
				popUpNow: function() {
					var t = this;
					3 == this.popId ? this.creditCard() : (this.popId = 3, this.$nextTick(function() {
						t.$refs.SecondContent.$refs.tabSectionEl && (t.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "hidden"), t.$refs.scFirstEl.style["overflow-y"] = "hidden"
					}))
				},
				closeTipsComfirmBox: function(t) {
					this.showNewUserTipsBox = t
				},
				showComfirmBox: function(t) {
					this.showNewUserBox = t
				}
			}, xt(kt, "sendDeductibleValueWay", function(t) {
				this.IntegralDeductio = t
			}), xt(kt, "stkValue", function(t) {
				this.stk = t
			}), xt(kt, "iconClose", function() {
				var t = this;
				this.popId = "", this.isOnlypretermissionIntegral || (this.payway = ""), this.$nextTick(function() {
					t.$refs.SecondContent.$refs.tabSectionEl && (t.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "scroll"), t.$refs.scFirstEl.style["overflow-y"] = "scroll"
				})
			}), xt(kt, "isShowShopPop", function() {
				if (this.verifyNorm(!0)) {
					if (this.timeStamp6) return;
					var t = this.$refs.normCom;
					if ("0" == t.limit1) return void this.$toast("件数超过限购");
					window.location.href = this.baseUrl + "/security/product/checkUserScoreAccount.html?prodId=" + this.productId + "&skuId=" + t.skuId + "&shopId=" + this.shopId + "&num=" + t.num + "&payway=0&channel=" + this.saveVVIP + "&actId=" + this.actId + "&periodId=" + this.periodId
				}
			}), xt(kt, "showAttr", function(t, e) {
				var i = this;
				if ("2" == this.actStart) return this.alreadyEnd = !1, void(!1 === this.alreadyEnd && setTimeout(function() {
					i.alreadyEnd = !0
				}, 200));
				if (this.isProductRunOut) return this.alreadySoldOut = !1, void setTimeout(function() {
					i.alreadySoldOut = !0
				});
				if (this.noneAttr) this.$toast({
					msg: "商品信息加载不全,请刷新后重试"
				});
				else {
					if (this.isShelve) return this.alreadySoldOut = !1, void setTimeout(function() {
						i.alreadySoldOut = !0
					});
					if (this.isSoldOut || 1 == this.isActOverLimit) return this.alreadySoldOut = !1, void setTimeout(function() {
						i.alreadySoldOut = !0
					});
					if ("INTEGRAL" != this.channel || "0" != this.actStart || !1 !== this.timeStamp9) {
						if (this.timeStamp3 || this.timeStamp6) return this.alreadyEnd = !1, void(!1 === this.alreadyEnd && setTimeout(function() {
							i.alreadyEnd = !0
						}, 200));
						if (this._action = t, e) return this.popCtrls = e, this.$nextTick(function() {
							i.$refs.SecondContent.$refs.tabSectionEl && (i.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "hidden"), i.$refs.scFirstEl.style["overflow-y"] = "hidden"
						}), this.popId = 3, this.isShowCommonPeriod && (this.payway = 1), void("1" == this.$refs.normCom.payway ? this.payway = "1" : "0" == this.$refs.normCom.payway ? this.payway = "0" : "2" == this.$refs.normCom.payway && (this.payway = "2"));
						this.popCtrls = -1, this.verifyNorm() ? this.isShowShopPop() : (this.$nextTick(function() {
							i.$refs.SecondContent.$refs.tabSectionEl && (i.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "hidden"), i.$refs.scFirstEl.style["overflow-y"] = "hidden"
						}), this.popId = 3)
					}
				}
			}), xt(kt, "paywayValue", function(t) {
				this.payway = t.p, this.mobileBankFlag = t.h
			}), xt(kt, "showActionToast", function() {
				var t = this.getQueryParam("action"),
					e = this.getQueryParam("code");
				if (t && e) {
					var i = "未知错误";
					if ($data.returnMsg) i = $data.returnMsg;
					else if ("000000" === e) {
						i = {
							1: "添加咨询成功",
							2: "商品收藏成功",
							3: "商品取消收藏成功",
							4: "添加购物车成功"
						}[t]
					} else {
						i = {
							"000000": "成功",
							"000002": "未登录",
							"000003": "购物车sku超过99个数量",
							"000004": "购物车商品总数超过100个数量",
							"000005": "校验参数失败",
							"000006": "系统繁忙，稍后再试",
							"000007": "商品已收藏成功",
							"000008": "库存不足"
						}[e]
					}
					this.$toast({
						msg: i
					})
				}
			}), xt(kt, "getQueryParam", function(t) {
				var e = new RegExp("(\\?|&)" + t + "=([^&=]*)($|&)", "i"),
					i = location.search.match(e);
				return i ? i[2] : ""
			}), xt(kt, "buyNow", function() {
				var t = this;
				this.isShelve || this.isSoldOut || "INTEGRAL" == this.channel && "0" == this.actStart && !1 === this.timeStamp9 || (this._action = "buynow", 3 == this.popId ? this.isShowShopPop() : this.verifyNorm() ? this.isShowShopPop() : (this.$nextTick(function() {
					t.$refs.SecondContent.$refs.tabSectionEl && (t.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "hidden"), t.$refs.scFirstEl.style["overflow-y"] = "hidden"
				}), this.popId = 3, "0" == this.$refs.normCom.payway ? this.payway = "0" : "1" == this.$refs.normCom.payway ? this.payway = "1" : "2" == this.$refs.normCom.payway && (this.payway = "2"), 1 == this.popCtrls && (this.popCtrls = 10)))
			}), xt(kt, "genQueryString", function(t) {
				return Object.keys(t).map(function(e) {
					return e + "=" + t[e]
				}).join("&")
			}), xt(kt, "creditCard", function() {
				if (this.verifyNorm(!0)) {
					var t, e = this.$refs.normCom;
					if (t = {
						stk: this.stk,
						prodId: this.productId,
						skuId: e.skuId,
						shopId: this.shopId,
						num: e.num,
						payway: e.payway,
						channel: this.channel,
						instPeriods: e.instalSelected.instPeriods,
						actId: this.actId,
						periodId: this.periodId
					}, "NEWCUSTOMER" == this.channel) 1 == this.collectFlag && (this.collectFlag = !1, n.a.ajax({
						url: $base + "/security/order/submitAndRepay.json",
						method: "POST",
						data: t,
						context: this
					}).done(function(t) {
						!t || "{}" != JSON.stringify(t.data) && null != t.data && void 0 != t.data && 0 != t.data ? t && t.data.returnCode && ("000000" == t.data.returnCode ? (this.trackerSRS("035", "", {
							item_id: this.productId
						}), this.collectFlag = !0, this.$toast({
							msg: "订单生成成功,<p>请尽快完成信用卡申请!</p>",
							toastTimeout: 3e3
						}), window.location.href = t.data.networkCardPath + "?trackCode=" + t.data.trackCode + "&orderId=" + t.data.orderId) : "00014" == t.data.returnCode ? (this.collectFlag = !0, this.popUpCode = "1", this.showNewUserBox = !0) : "00015" == t.data.returnCode ? (this.collectFlag = !0, this.popUpCode = "2", this.showNewUserBox = !0) : "00016" == t.data.returnCode ? (this.collectFlag = !0, this.popUpCode = "3", this.applyStatusPath = t.data.applyStatusPath, this.showNewUserBox = !0) : "00017" == t.data.returnCode ? (this.collectFlag = !0, this.orderId = t.data.orderId, this.orderNo = t.data.orderNo, this.showNewUserTipsBox = !0) : "000022" == t.data.returnCode ? (this.collectFlag = !0, this.$toast({
							msg: "库存不足"
						})) : "000023" == t.data.returnCode ? (this.collectFlag = !0, this.$toast({
							msg: "购买数量达到上限"
						})) : (this.collectFlag = !0, this.$toast({
							msg: "请求异常"
						}))) : this.collectFlag = !0
					}));
					else {
						var i = $base + "/security/product/submit.html",
							s = this.genQueryString(t);
						window.location.href = i + "?" + s
					}
				}
			}), xt(kt, "confirm", function() {
				var t = this;
				if (this.verifyNorm(!0)) {
					var e, i = this.$refs.normCom;
					if (e = {
						stk: this.stk,
						prodId: this.productId,
						skuId: i.skuId,
						shopId: this.shopId,
						num: i.num,
						payway: "0",
						channel: this.channel,
						instPeriods: i.instalSelected.instPeriods,
						actId: this.actId,
						periodId: this.periodId
					}, "cart" == this._action) if (this.multiActList && this.multiActList.length > 0) {
						var s = this;
						this.$alert({
							msg: "商品通过购物车且合并支付不参加多倍积分活动",
							btns: [{
								text: "取消"
							}, {
								text: "继续",
								class: "bold",
								callback: function() {
									if ("SECKILL" != s.channel) if ("1" != s.payway) {
										var t = $base + "/security/product/addCart.html";
										u(e).then(function(a) {
											"000000" == a.data.returnCode ? (s.$toast({
												msg: "成功加入购物车"
											}), s.stk = a.data.stk || "", s.num = parseInt(s.num) + i.num, s.popId = "", s.$nextTick(function() {
												s.$refs.SecondContent.$refs.tabSectionEl && (s.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "scroll"), s.$refs.scFirstEl.style["overflow-y"] = "scroll"
											}), s.payway = "1", i.normSelected = i.normSelected.map(function(t) {
												return ""
											}), i.num = 1) : "000002" == a.data.returnCode ? window.location.href = t + "?" + s.genQueryString(e) : s.$toast({
												msg: a.data.returnMsg
											})
										})
									} else s.$toast({
										msg: "分期商品不支持加入购物车,请选择其他方式购买"
									});
									else s.$toast({
										msg: "每日特惠的商品不支持加入购物车"
									})
								}
							}]
						})
					} else {
						if ("SECKILL" == this.channel) return void this.$toast({
							msg: "每日特惠的商品不支持加入购物车"
						});
						if ("1" == this.payway) return void this.$toast({
							msg: "分期商品不支持加入购物车,请选择其他方式购买"
						});
						var a = $base + "/security/product/addCart.html";
						u(e).then(function(s) {
							"000000" == s.data.returnCode ? (t.$toast({
								msg: "成功加入购物车"
							}), t.stk = s.data.stk || "", t.num = parseInt(t.num) + i.num, t.popId = "", t.$nextTick(function() {
								t.$refs.SecondContent.$refs.tabSectionEl && (t.$refs.SecondContent.$refs.tabSectionEl.style["overflow-y"] = "scroll"), t.$refs.scFirstEl.style["overflow-y"] = "scroll"
							}), t.payway = "1", i.normSelected = i.normSelected.map(function(t) {
								return ""
							}), i.num = 1) : "000002" == s.data.returnCode ? window.location.href = a + "?" + t.genQueryString(e) : t.$toast({
								msg: s.data.returnMsg
							})
						})
					} else {
						var n = $base + "/security/product/submit.html",
							r = this.genQueryString(e);
						window.location.href = n + "?" + r
					}
				}
			}), xt(kt, "verifyNorm", function(t) {
				var e = this.$refs.normCom,
					i = e.normSelected,
					s = e.attrList,
					a = e.payway,
					n = e.instalIndex;
				if (i.filter(function(t) {
					return !!t
				}).length < s.length) {
					var r = [];
					return s.forEach(function(t, e) {
						i[e] || r.push(t.attrName)
					}), t && this.$toast({
						msg: "请选择" + r.join("、"),
						toastTimeout: 2e3
					}), !1
				}
				return "NEWCUSTOMER" == this.channel || !this.$refs.normCom.isLessThanNine || "1" != a || "" !== n || (t && this.$toast({
					msg: "请选择分期数",
					timeout: 1e3
				}), !1)
			}), xt(kt, "bindScreenFisrtDrag", function() {
				var t = this.$refs,
					e = t.scFirstEl,
					i = t.holderBottomEl,
					s = t.footerEl,
					a = (t.productEl, !1),
					n = window.innerHeight,
					r = function(t) {
						return t.getBoundingClientRect()
					}, o = 0,
					c = 0;
				e.addEventListener("touchstart", function(t) {
					o = t.changedTouches[0].clientY
				}), e.addEventListener("touchmove", function(t) {
					var l = t.changedTouches[0].clientY;
					!a && r(i).top <= n - r(s).height + 10 && (a = !0), a && o >= l && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), c = o - l, i.style.paddingBottom = c + "px", e.scrollTop += c, i.style.transition = "")
				});
				var l = function() {
					a = !1, c > 100 && (e.style.marginTop = "-" + r(e).height + "px"), i.style.paddingBottom = "0", i.style.transition = "all .3s", o = c = 0
				};
				e.addEventListener("touchend", l), e.addEventListener("touchcancel", l)
			}), kt)
		}, Rt = function() {
			var t = this,
				e = t.$createElement,
				i = t._self._c || e;
			return i("div", {
				ref: "app",
				attrs: {
					id: "app"
				},
				on: {
					touchmove: t.touchmove
				}
			}, [i("section", [i("div", {
				ref: "productEl",
				staticClass: "product"
			}, [i("div", {
				ref: "scFirstEl",
				staticClass: "screen-first"
			}, [i("PageHeader", {
				on: {
					"history:back": function(e) {
						t.$atEvent("001")
					}
				}
			}, [i("template", {
				slot: "title"
			}, [t._v("商品详情")])], 2), t._v(" "), i("scFirstContent", {
				attrs: {
					IntegralDeductio: t.IntegralDeductio,
					vendorId: t.vendorId,
					stk: t.stk,
					actStart: t.saveActStart,
					actStartTime: t.getActStartTime,
					recommendProduct: t.recommendProduct,
					isShowRedPacket: t.isShowRedPacket,
					isShowfinally: t.isShowfinally,
					isShowShopRedPacketList: t.isShowShopRedPacketList,
					isSkillProduct: t.isSkillProduct
				},
				on: {
					appShow: t.appShow,
					popShow: function(e) {
						return t.popId = e
					},
					stkValue: t.stkValue
				}
			}), t._v(" "), i("div", {
				staticClass: "load"
			}, [t._v("继续拖动，查看图文详情")]), t._v(" "), i("div", {
				ref: "holderBottomEl",
				staticClass: "holder holder-bottom"
			})], 1), t._v(" "), i("div", {
				ref: "scSecondEl",
				staticClass: "screen-second"
			}, [i("div", {
				ref: "holderTopEl",
				staticClass: "holder holder-top"
			}), t._v(" "), i("scSecondContent", {
				ref: "SecondContent",
				attrs: {
					isShowSecondPage: t.isShowSecondPage
				}
			})], 1)]), t._v(" "), i("footer", {
				ref: "footerEl",
				staticClass: "footer border border-top",
				class: {
					"over-popup2": 3 == t.popId,
					"border-tops": 3 == t.popId
				}
			}, ["NEWCUSTOMER" == t.channel ? [3 == t.popId ? i("div", {
				staticClass: "confirmCard"
			}, [i("button", {
				staticClass: "get-confirmCard",
				class: {
					"get-confirmCard1": 0 == t.getCodeValue
				},
				on: {
					click: function(e) {
						t.$atEvent("031", void 0, {
							productId: t.productId
						}), t.trackerSRS("031", "", {
							productId: t.productId,
							item_id: t.productId
						}), t.creditCard()
					}
				}
			}, [i("span", [t._v("提交订单，申请信用卡")])])]) : i("div", {
				staticClass: "confirmCard"
			}, [i("button", {
				staticClass: "get-confirmCard",
				on: {
					click: function(e) {
						t.popUpNow()
					}
				}
			}, [i("span", [t._v("立即申请信用卡购买")])])])] : [t.minInst || t.isShowPeriodStyle ? ["" != t.payway && "1" != t.payway || !(t.isMoreThanNine || t.isShowMinstInPop && 3 == t.popId && t.concealedStaging) ? t._e() : i("div", {
				staticClass: "supply",
				class: {
					"supply-relaxtive": 3 != t.popId
				}
			}, [i("div", {
				class: {
					"custom-box": 3 != t.popId
				}
			}, [i("span", [t._v("月供")]), i("span", {
				staticClass: "red"
			}, [t._v("￥")]), i("b", [t._v(t._s(t.instalPrice || t.monthlyInstalment))]), i("span", [t._v(t._s(t.isSelectedAllNorm ? "" : "起"))])]), t._v(" "), 3 != t.popId ? i("div", {
				staticClass: "relaxtive",
				class: {
					"relaxtive-morethanfour": t.isMoreThanFourNumber
				},
				on: {
					click: t.showCustomerBox
				}
			}, [i("BaseIcon", {
				staticClass: "base-icons",
				attrs: {
					icon: "online-service"
				}
			}), i("div", [t._v("商家客服")])], 1) : t._e()]), t._v(" "), "COMMON" == t.channel || "SECKILL" == t.channel ? ["1" == t.payway || "" == t.payway ? [t.haveAttr ? i("div", {
				staticClass: "buy-now",
				class: {
					soldout: t.isShelve || t.isSoldOut,
					beginAminute: "INTEGRAL" == t.channel && "0" == t.saveActStart || t.timeStamp3,
					"buy-nows": 3 != t.popId
				},
				on: {
					click: function(e) {
						t.$atEvent("019", void 0, {
							productid: t.productId,
							channelid: "INTEGRAL" == t.channel ? 2 : 1
						}), t.trackerSRS("019", "", {
							productid: t.productId,
							channelid: "INTEGRAL" == t.channel ? 1 : 0
						}), t.buyNow(e)
					}
				}
			}, [t._v(t._s(t.btnTxt) + " \n            ")]) : t._e()] : [3 == t.popId ? [
				[i("div", {
					staticClass: "footer-btn-right",
					on: {
						click: function(e) {
							t.$atEvent("046", void 0, {
								productid: t.productId,
								channelid: "INTEGRAL" == t.channel ? 2 : 1
							}), t.trackerSRS("046", "", {
								productid: t.productId,
								channelid: "INTEGRAL" == t.channel ? 2 : 1
							}), t.isShowShopPop()
						}
					}
				}, [t._v("立即兑换")])]
			] : t._e()]] : ["1" == t.payway || "" == t.payway ? [!t.haveAttr || "0" == t.$refs.normCom.payway && "" != this.payway && 3 == t.popId ? t._e() : i("div", {
				staticClass: "buy-now",
				class: {
					soldout: t.isShelve || t.isSoldOut,
					"buy-nows": 3 != t.popId
				},
				on: {
					click: function(e) {
						t.$atEvent("019", void 0, {
							productid: t.productId,
							channelid: "INTEGRAL" == t.channel ? 2 : 1
						}), t.trackerSRS("019", "", {
							productid: t.productId,
							channelid: "INTEGRAL" == t.channel ? 2 : 1
						}), t.buyNow(e)
					}
				}
			}, [t._v(t._s(t.btnTxt) + " \n            ")])] : [3 == t.popId ? [
				[i("div", {
					staticClass: "footer-btn-right",
					on: {
						click: function(e) {
							t.$atEvent("046", void 0, {
								productid: t.productId,
								channelid: "INTEGRAL" == t.channel ? 2 : 1
							}), t.trackerSRS("046", "", {
								productid: t.productId,
								channelid: "INTEGRAL" == t.channel ? 2 : 1
							}), t.isShowShopPop()
						}
					}
				}, [t._v("立即兑换")])]
			] : t._e()]]] : [3 == t.popId ? [
				[1 != t.payway ? [i("div", {
					staticClass: "footer-btn-right",
					class: {
						"btn-right-disabled": t.timeStamp6
					},
					on: {
						click: function(e) {
							t.$atEvent("046", void 0, {
								productid: t.productId,
								channelid: "INTEGRAL" == t.channel ? 2 : 1
							}), t.trackerSRS("046", "", {
								productid: t.productId,
								channelid: "INTEGRAL" == t.channel ? 2 : 1
							}), t.isShowShopPop()
						}
					}
				}, [t._v("立即兑换")])] : t._e(), t._v(" "), "1" == t.payway ? [
					[i("div", {
						staticClass: "supply"
					}, [i("span", [t._v("月供")]), i("span", {
						staticClass: "red"
					}, [t._v("￥")]), i("b", [t._v(t._s(t.instalPrice || t.monthlyInstalment))]), i("span", [t._v(t._s(t.isSelectedAllNorm ? "" : "起"))])]), t._v(" "), t.haveAttr ? i("div", {
						staticClass: "buy-now",
						class: {
							soldout: t.isShelve || t.isSoldOut,
							"buy-nows": 3 != t.popId
						},
						on: {
							click: function(e) {
								t.$atEvent("019", void 0, {
									productid: t.productId,
									channelid: "INTEGRAL" == t.channel ? 2 : 1
								}), t.trackerSRS("019", "", {
									productid: t.productId,
									channelid: "INTEGRAL" == t.channel ? 2 : 1
								}), t.buyNow(e)
							}
						}
					}, [t._v(t._s(t.btnTxt) + "\n              ")]) : t._e()]
				] : t._e()]
			] : [i("div", {
				staticClass: "cart",
				class: {
					"cart-integral": "INTEGRAL" == t.channel
				}
			}, ["INTEGRAL" == t.channel && "1" == t.getIntegralAndPriceType ? i("div", {
				staticClass: "lowest-integral"
			}, [i("div", [t._v("\n                 最低" + t._s(t.minFullIntegralPointPart) + "积分\n              ")])]) : "INTEGRAL" == t.channel && "2" == t.getIntegralAndPriceType ? i("div", {
				staticClass: "lowest-integral"
			}, [i("div", [t._v("\n                 最低" + t._s(t.minFullIntegralPointPart) + "积分起兑\n              ")])]) : "INTEGRAL" == t.channel && "3" == t.getIntegralAndPriceType ? i("div", {
				staticClass: "lowest-integral"
			}, [i("div", [t._v("\n                 最低" + t._s(t.minFullIntegralPointPart) + "积分\n              ")]), t._v(" "), i("div", [t._v("\n                +￥" + t._s(t.minFullIntegralCashPart) + "起兑\n              ")])]) : t._e(), t._v(" "), i("div", {
				staticClass: "relax",
				class: {
					"relax-integral": "INTEGRAL" == t.channel
				}
			}, [i("span", {
				on: {
					click: t.showCustomerBox
				}
			}, [i("BaseIcon", {
				staticClass: "base-icons base-iconss",
				attrs: {
					icon: "online-service"
				}
			}), i("div", [t._v("商家客服")])], 1)])]), t._v(" "), t.haveAttr || t.noneAttr ? i("div", {
				staticClass: "btns",
				class: {
					"btns-seckill": "INTEGRAL" == t.channel,
					btnss: 3 != t.popId
				}
			}, [i("div", {
				staticClass: "footer-btn btn-buy",
				class: {
					soldout: t.isShelve || t.isSoldOut,
					"btn-seckillBuy": "INTEGRAL" == t.channel,
					"disable-btn1": t.isButtonDisabled
				},
				on: {
					click: function(e) {
						t.$atEvent("045"), t.trackerSRS("045", "", {
							productid: t.productId,
							channelid: "INTEGRAL" == t.channel ? 2 : 1
						}), t.showAttr("buynow")
					}
				}
			}, [t._v("\n              " + t._s(t.btnTxt) + "\n            ")])]) : t._e()]]]], 2), t._v(" "), t.showNewUserBox ? i("newUserBox", {
				attrs: {
					showNewUserBox: t.showNewUserBox,
					isToolTipBox: t.isToolTipBox,
					popUpCode: t.popUpCode,
					applyStatusPath: t.applyStatusPath
				},
				on: {
					showComfirmBox: t.showComfirmBox
				}
			}) : t._e(), t._v(" "), t.showNewUserTipsBox ? i("newUserTipsBox", {
				attrs: {
					showNewUserTipsBox: t.showNewUserTipsBox,
					basePath: t.basePath,
					orderId: t.orderId,
					orderNo: t.orderNo,
					productId: t.productId
				},
				on: {
					closeTipsComfirmBox: t.closeTipsComfirmBox
				}
			}) : t._e(), t._v(" "), t.showBindCardPop ? i("bindCardPop", {
				attrs: {
					showBindCardPop: t.showBindCardPop
				}
			}) : t._e(), t._v(" "), (t.alreadySoldOut || t.schoolAlreadyEnd) && t.isFromShareProduct ? i("goToLook", {
				attrs: {
					alreadySoldOut: t.alreadySoldOut,
					alreadyEnd: t.schoolAlreadyEnd
				}
			}) : t._e(), t._v(" "), t.isShowConfirmBox ? [i("div", {
				staticClass: "showComfirmBox"
			}, [i("div", {
				staticClass: "showComfirmBox_title"
			}, [i("span", [t._v(t._s(t.servicePhone))]), t._v(" "), i("div", {
				staticClass: "showComfirmBox_title_w"
			}, [i("span", [t._v(t._s(t.serviceTime))])])]), t._v(" "), i("div", {
				staticClass: "showComfirmBox_f border border-top"
			}, [i("div", {
				staticClass: "showComfirmBox_cancer border border-right",
				on: {
					click: function(e) {
						t.cancelConfirmBox()
					}
				}
			}, [t._v("取消")]), t._v(" "), i("div", {
				staticClass: "showComfirmBox_confirm",
				on: {
					click: function(e) {
						t.confirmConfirmBox()
					}
				}
			}, [t._v("呼叫")])])])] : t._e(), t._v(" "), t.isShowGreyBox ? [i("div", {
				ref: "showGreyBox",
				staticClass: "showGreyBox"
			})] : t._e(), t._v(" "), t.isShowCustomerBox ? [i("div", {
				staticClass: "customer-service"
			}, [i("div", {
				staticClass: "customer-service-href"
			}, [i("div", {
				staticClass: "customer-service-contact",
				on: {
					click: t.customerServiceContact
				}
			}, [i("span", [i("BaseIcon", {
				staticClass: "base-icons",
				attrs: {
					icon: "bitmap-cust"
				}
			}), t._v("联系客服")], 1)]), t._v(" "), i("div", {
				staticClass: "customer-service-phone",
				on: {
					click: t.customerServicePhone
				}
			}, [i("span", [i("BaseIcon", {
				staticClass: "base-icons",
				attrs: {
					icon: "phone-icon"
				}
			}), t._v("拨打电话")], 1)])]), t._v(" "), i("div", {
				staticClass: "customer-service-cancer",
				on: {
					click: t.customerServiceCancer
				}
			}, [i("span", [t._v("取消")])])])] : t._e(), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.popId,
					expression: "popId"
				}],
				staticClass: "popup2"
			}, [i("div", {
				staticClass: "popup2-cover",
				on: {
					click: function(e) {
						t.$atEvent("02" + (2 == t.popId ? 3 : 3 == t.popId ? 5 : "")), t.trackerSRS("02" + (2 == t.popId ? 3 : 3 == t.popId ? 5 : "")), t.iconClose()
					}
				}
			}), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: 1 == t.popId,
					expression: "popId==1"
				}],
				staticClass: "popup2-section popup2-flag"
			}, [i("div", {
				staticClass: "icon-close",
				on: {
					click: function(e) {
						t.popId = ""
					}
				}
			}), t._v(" "), t._l(t.productService, function(e, s) {
				return i("div", {
					key: s,
					staticClass: "flag-item"
				}, [i("div", {
					staticClass: "flag-title"
				}, [t._v(t._s(e.tagName))]), t._v(" "), i("div", {
					staticClass: "flag-spec"
				}, [t._v(t._s(e.tagDesc))])])
			})], 2), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: 2 == t.popId,
					expression: "popId==2"
				}],
				staticClass: "popup2-section popup2-activity"
			}, [i("div", {
				staticClass: "icon-close",
				on: {
					click: function(e) {
						t.$atEvent("024"), t.trackerSRS("024"), t.popId = ""
					}
				}
			}), t._v(" "), t._l(t.activateDesc, function(e, s) {
				return i("div", {
					key: s,
					staticClass: "flag1-item"
				}, [i("LayoutFlex", {
					staticClass: "flag1-title border border-all",
					attrs: {
						justify: "center",
						align: "middle"
					}
				}, [i("div", [t._v(t._s(e.activateName))])]), t._v(" "), i("div", {
					staticClass: "flag1-desc"
				}, [t._v(t._s(e.activateDesc))])], 1)
			})], 2), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: 4 == t.popId,
					expression: "popId==4"
				}],
				staticClass: "popup2-section-activity popup2-activity"
			}, [i("div", {
				staticClass: "icon-close",
				on: {
					click: function(e) {
						t.popId = ""
					}
				}
			}), t._v(" "), i("div", {
				staticClass: "activity-rule"
			}, [t._v("活动细则")]), t._v(" "), i("div", {
				staticClass: "activity-rule-content"
			}, t._l(t.multiActList, function(e, s) {
				return i("div", {
					key: s,
					staticClass: "flag1-item"
				}, [i("div", [i("span", {
					staticClass: "activity-flag1-title border border-all"
				}, [t._v("多倍积分")]), i("span", {
					staticClass: "activity-name"
				}, [t._v(t._s(e.actName))])]), t._v(" "), i("div", {
					staticClass: "activity-flag1-desc",
					domProps: {
						innerHTML: t._s(e.actRule)
					}
				}), t._v(" "), e.skpUrl ? i("div", {
					staticClass: "activity-url"
				}, [i("a", {
					attrs: {
						href: e.skpUrl
					}
				}, [t._v("活动详情")])]) : t._e()])
			}))]), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: 3 == t.popId,
					expression: "popId==3"
				}],
				ref: "popupNorm",
				staticClass: "popup2-section popup2-norm"
			}, [i("div", {
				staticClass: "icon-close",
				on: {
					click: function(e) {
						t.$atEvent("026", "", {
							channelid: "INTEGRAL" == t.channel ? 2 : 1
						}), t.trackerSRS("026", "", {
							channelid: "INTEGRAL" == t.channel ? 2 : 1
						}), t.iconClose()
					}
				}
			}), t._v(" "), i("productNorm", {
				ref: "normCom",
				attrs: {
					saveVVIP: t.saveVVIP
				},
				on: {
					paywayValue: t.paywayValue,
					sendDeductibleValueWay: t.sendDeductibleValueWay,
					getSumPriceValue: t.getSumPriceValue,
					isShowPeiod: t.isShowPeiod
				}
			})], 1)])], 2), t._v(" "), t.showRedBag ? i("redPacketBag", {
				attrs: {
					baseUrl: t.baseUrl,
					prodId: t.productId,
					vendorId: t.vendorId,
					productRedValue: t.productRedValue,
					getFinancialValue: t.getFinancialValue,
					getShopRedPacketList: t.getShopRedPacketList,
					getShopRedPacketBottomList: t.getShopRedPacketBottomList
				},
				on: {
					show: t.show,
					show1: t.show1,
					showProductPage: t.showProductPage
				}
			}) : t._e()], 1)
		};
		Rt._withStripped = !0;
		var Tt = Object(_.a)(Lt, Rt, [], !1, null, null, null);
		Tt.options.__file = "src/pages/product/detail/app.vue";
		var At = Tt.exports,
			Et = (i(53), i(15)),
			Mt = i(13),
			Nt = i(3),
			$t = i(22),
			Bt = i(14),
			Ut = i.n(Bt);

		function Ft(t, e, i) {
			return e in t ? Object.defineProperty(t, e, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = i, t
		}
		Object($t.a)("https://creditcard.bankcomm.com/pmall/SRSJSBridge.js"), s.a.config.devtools = !0;
		var Vt = window.pageId = "" + Nt.a.pageType + Nt.a.bizId + "004";
		s.a.use(Mt.a, {
			pageId: Vt
		}), window.SRSAPP = Ut.a, s.a.use(Et.a), window._assign = i(61);
		var Ot, Dt = void 0,
			jt = void 0;
		(jt = window.awardRpkt && '${(awardRpkt)!""}' != window.awardRpkt ? window.awardRpkt : "", Dt = window.$base && "${base}" != window.$base ? window.$base : "/malldemo", window.$data && "${data}" != window.$data) ? $data = JSON.parse(window.$data) : $data = (Ft(Ot = {
			isSkillProduct: !1,
			checkResult: !0,
			pointDiscountRate: "10",
			annoContent: "活动价格活动",
			isAnnoContent: 1,
			login: "1",
			actStart: "2",
			actStartTime: "20221207101520",
			actEndTime: "20221222131200",
			channel: "COMMON",
			afterDeductionMaxPrice: "321.10",
			afterDeductionMinPrice: "321.10",
			stk: "ffff",
			currentTime: "2022-10-22 10:35"
		}, "actEndTime", "20221023172500"), Ft(Ot, "productId", "258"), Ft(Ot, "prodName", "苹果测试列表三看见对方会公开梵蒂冈点击返回给对方大量空间发工会法大看到了韩国的咖啡馆使馆f级3"), Ft(Ot, "minMarketPrice", "1000"), Ft(Ot, "maxMarketPrice", "1000"), Ft(Ot, "isInstalment", 1), Ft(Ot, "isFree", 1), Ft(Ot, "maxFreeInst", 6), Ft(Ot, "maxInst", 12), Ft(Ot, "subTitle", "苹果测试列表三级3"), Ft(Ot, "vendorId", "8"), Ft(Ot, "shopId", "19"), Ft(Ot, "minMixPrice", "3333"), Ft(Ot, "maxMixPoint", "6666"), Ft(Ot, "minFullIntegralPointPart", "1000"), Ft(Ot, "minFullIntegralCashPart", "1.00"), Ft(Ot, "maxFullIntegralPointPart", "2000"), Ft(Ot, "maxFullIntegralCashPart", "1.00"), Ft(Ot, "minPointPart", "120000"), Ft(Ot, "minCashPart", "0.00"), Ft(Ot, "maxPointPart", "250000"), Ft(Ot, "maxCashPart", "0.00"), Ft(Ot, "freight", "1件内，运费2元"), Ft(Ot, "shelveStatus", "0"), Ft(Ot, "pointChangeRate", "0.15"), Ft(Ot, "priceSectionList", [{
			priceType: "0",
			maxPrice: 5e4,
			minPrice: 4e4,
			instMinPrice: 12.2,
			instMaxPrice: 126.33,
			startTime: "",
			endTime: "",
			maxPointNum: 16e3,
			minCashPrice: 100,
			minMixPrice: 8,
			maxMixPoint: 48e3,
			maxPointRate: 90,
			maxDiscountAmt: 72
		}]), Ft(Ot, "pricePointRate", [{
			startPrice: 0,
			endPrice: 100,
			pointRate: 90
		}]), Ft(Ot, "prodImageList", [{
			isPrimaryImage: "1",
			prodImageUrl: "/static/home/storeies01-storey3-1.png",
			sortNo: 1
		}, {
			isPrimaryImage: "1",
			prodImageUrl: "/static/home/storeies01-storey3-1.png",
			sortNo: 1
		}]), Ft(Ot, "payWayList", [{
			payWay: "0"
		}]), Ft(Ot, "returnCode", "000000"), Ft(Ot, "returnMsg", "商品支付方式查询成功"), Ot);
		if ("VVIP" === $data.channel) {
			var Gt = document.getElementsByName("native");
			Gt[0].content = "", Gt[0].name = ""
		}
		new s.a({
			el: "#app",
			render: function(t) {
				return t(At, {
					props: {
						basePath: Dt,
						awardRpkt: jt
					}
				})
			}
		})
	},
	99: function(t, e) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA4JJREFUaAXtWM1rE1EQz5dRAoonCWmReulFPKjgqYc0JxU/TuZPyAchkIPGi4eA1IMIOYTQJP9Az36DiEUsCoUeBAt6EQ81EQsaBBOJJvE3Yd8yWbO7b5PsJsIulDdv38xv5jcz7+1LPR73cTPgZsDNgJsBNwPjZ8BLpqlUaq3X612HGNRAdb1e706/31+p1Wq/NWtzNfVRNDokaMkPEucw3qDJPD8DIhIBXpHQmanKgIjP57uHKDp6kaC9zubz+cN66/PwfrBHRgWSTCZvo61usbVL2CeP2XyuRN3WQhU2NZGuauZzNdWtSKFQONRoNJqoykEl4h5GXeIOseojwa+r1eqK1p8uEVJEe22CSFRrNOs59vSJSqXyicdhlmFte3HbWcn9cDhc1zo3JIJqvNAazMH8Pdr+nxM2YBRYJBLZrtfrLeiESA/9+Q79ecrIZtpruVzuaLvd3kdSB7EihjujfBhWRGG+JQwBdhLXmWNi7sTYarUuMhJ/QqHQk1F+DYkoBnyf0OEQHQVk1ztU4CrD3ioWi9/YXBVNieCEGNonuJfFVGubhUQicQAuzgs3qMx9IWtHUyKxWGwHWfnBDJ38MK4i+CPCt9/vfyBk7WhKJB6PdwH2ihkuY58ssLltIhLIL6u76+vrH/WcmRIhQwAOtReIOVIV+LksAkeL67YV6cgS4Rve4wQRVP004jsuiGBv6raVNBF8Sd9CWT0tUKGYcGDXiMDVtoK/L/h+bRv5kqoIvic9gL0UQKjIEjK2JOY2jSoR4D+E/76RHykiBACgoX2CV7ZVJZvNLgL/DPmlB74N24p0pIng6HNsn3Q6HV6NFlr7OQVr9EgTKZfLu8jMVwZm28mF1uVf82do7V/M70hRmohirVYFzhYymczySNQJXir/G4gKCJm2Il1LRACqEiHjbrc79ao0m026kgz+vwZ/vWAw+Ih8mT2WiKAKQxse85iZA6vrCJ631ZtSqbQvg+GVUeI6+Pm7R23F39kl42t+Ez9p78rgW6oIAWqrIuNkXB1Ux/BawnEtE8ExvMEB7JKRsJ+4JH6QxbdMBOBPUfI1OPgu62QMvc+BQODaGHb/v4nlzc4pp9PpCziCa/QOLZegavF1K/KkWJZbiwenkKB70aIgxNetyJNiTUTESqB2605EhNoJAe7RnyKPHe80scYOwjV0M+BmwM2AmwGrGfgLaH0SjfadfZkAAAAASUVORK5CYII="
	}
});
//# sourceMappingURL=detail.2b6c0eb3.js.map