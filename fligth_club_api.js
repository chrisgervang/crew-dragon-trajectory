uKzz: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return f
        }
        ));
        var r = n("cUzu")
          , i = n("F/XL")
          , o = n("AytR")
          , s = n("r7Hy")
          , a = n("/k9e")
          , u = n("xMyE")
          , c = n("TYT/")
          , l = n("A9xy")
          , h = n("nbXG")
          , f = function() {
            function t(t, e, n) {
                this.utilityService = t,
                this.http = e,
                this.localStorage = n,
                this.headers = new r.c({
                    "Content-Type": "application/json"
                }),
                this.setAccessToken(this.localStorage.get("accessToken")),
                this.serverRoot = t.buildEndpoint(o.a.server),
                this.apiUrl = this.serverRoot + "/v2"
            }
            return t.prototype.setAccessToken = function(t) {
                this.localStorage.put("accessToken", t),
                this.accessToken = t,
                this.headers = null == this.accessToken ? this.headers.delete("Authorization") : this.headers.set("Authorization", "Bearer " + this.accessToken)
            }
            ,
            t.prototype.get = function(t) {
                return this.http.get(t, {
                    responseType: "text"
                })
            }
            ,
            t.prototype.ping = function() {
                return this.http.get("")
            }
            ,
            t.prototype.getBlogPosts = function() {
                return this.http.get(this.apiUrl + "/blog")
            }
            ,
            t.prototype.createNewBlogPost = function(t) {
                return this.http.post(this.apiUrl + "/blog", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.updateBlogPost = function(t) {
                return this.http.put(this.apiUrl + "/blog/" + t._id, t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteBlogPost = function(t) {
                return this.http.delete(this.apiUrl + "/blog/" + t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getCompanies = function() {
                return this.http.get(this.apiUrl + "/company")
            }
            ,
            t.prototype.createCompany = function(t) {
                return this.http.post(this.apiUrl + "/company", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.updateCompany = function(t) {
                return this.http.put(this.apiUrl + "/company/" + t._id, t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteCompany = function(t) {
                return this.http.delete(this.apiUrl + "/company/" + t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getAllCoupons = function() {
                return this.http.get(this.apiUrl + "/coupon")
            }
            ,
            t.prototype.createCoupon = function(t) {
                return this.http.post(this.apiUrl + "/coupon", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.updateCoupon = function(t) {
                return this.http.put(this.apiUrl + "/coupon/" + t._id, t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteCoupon = function(t) {
                return this.http.delete(this.apiUrl + "/coupon/" + t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getEngines = function() {
                return this.http.get(this.apiUrl + "/engine")
            }
            ,
            t.prototype.saveEngine = function(t) {
                return this.http.post(this.apiUrl + "/engine", t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.updateEngine = function(t, e) {
                return this.http.put(this.apiUrl + "/engine/" + t, e, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.deleteEngine = function(t) {
                return this.http.delete(this.apiUrl + "/engine/" + t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.getHazardZones = function(t) {
                return this.http.get(this.apiUrl + "/hazardzone?code=" + t)
            }
            ,
            t.prototype.saveHazardZones = function(t, e) {
                return this.http.post(this.apiUrl + "/hazardzone?code=" + t, e, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.deleteHazardZones = function(t) {
                return this.http.delete(this.apiUrl + "/hazardzone?code=" + t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.getLaunchConfigs = function(t) {
                return this.http.get(this.apiUrl + "/launch-config?" + this.utilityService.serialize(t))
            }
            ,
            t.prototype.createLaunchConfig = function(t) {
                return this.http.post(this.apiUrl + "/launch-config", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.updateLaunchConfig = function(t) {
                return this.http.put(this.apiUrl + "/launch-config/" + t._id, t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteLaunchConfig = function(t) {
                return this.http.delete(this.apiUrl + "/launch-config/" + t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getLaunchpads = function(t) {
                return this.http.get(this.apiUrl + "/launchpad?" + this.utilityService.serialize(t))
            }
            ,
            t.prototype.createLaunchPad = function(t) {
                return this.http.post(this.apiUrl + "/launchpad", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.updateLaunchPad = function(t) {
                return this.http.put(this.apiUrl + "/launchpad/" + t._id, t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteLaunchPad = function(t) {
                return this.http.delete(this.apiUrl + "/launchpad/" + t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteSimulation = function(t) {
                return this.http.delete(this.apiUrl + "/mission/" + t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.getSingleMission = function(t) {
                return this.http.get(this.apiUrl + "/mission?code=" + t)
            }
            ,
            t.prototype.getMissions = function() {
                return this.http.get(this.apiUrl + "/mission")
            }
            ,
            t.prototype.getMissionsByPattern = function(t) {
                var e = encodeURIComponent(t instanceof Array ? t.join(",") : t);
                return this.http.get(this.apiUrl + "/mission?patterns=" + e)
            }
            ,
            t.prototype.overrideLive = function(t, e) {
                return this.http.patch(this.apiUrl + "/mission/?launchLibraryId=" + t, {
                    id: e
                }, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.updateMission = function(t) {
                return this.http.put(this.apiUrl + "/mission/" + t._id, t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteMission = function(t) {
                return this.http.delete(this.apiUrl + "/mission/" + t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getNextMission = function() {
                return this.http.get(this.apiUrl + "/mission/next")
            }
            ,
            t.prototype.getByLaunchLibraryId = function(t) {
                var e = t instanceof Array ? t.join(",") : t;
                return this.http.get(this.apiUrl + "/mission?launchLibraryId=" + e)
            }
            ,
            t.prototype.getRewards = function() {
                return this.http.get(this.apiUrl + "/patreon/rewards")
            }
            ,
            t.prototype.getPatreonCampaign = function() {
                return this.http.get(this.apiUrl + "/patreon/campaign", {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getPatreonPledges = function() {
                return this.http.get(this.apiUrl + "/patreon/pledges", {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getPatreonGEOPledges = function() {
                return this.http.get(this.apiUrl + "/patreon/geoPledges")
            }
            ,
            t.prototype.postSimulation = function(t, e) {
                return void 0 === e && (e = null),
                this.http.post(this.apiUrl + "/simulation" + (e ? "/matchToWebcast/" + e : ""), t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.getAllSimulations = function(t, e) {
                return this.http.get(this.apiUrl + "/simulation?size=" + t + "&page=" + e, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getSimulationResults = function(t) {
                return this.http.get(this.apiUrl + "/simulation/" + t)
            }
            ,
            t.prototype.getLiveSimulationResults = function(t) {
                return this.http.get(this.apiUrl + "/simulation/live?includeData=true&code=" + t)
            }
            ,
            t.prototype.getLiveSimulationResultsByLaunchLibraryId = function(t) {
                return this.http.get(this.apiUrl + "/simulation/?launchLibraryId=" + t)
            }
            ,
            t.prototype.getStages = function() {
                return this.http.get(this.apiUrl + "/stage")
            }
            ,
            t.prototype.getTrajectoryById = function(t) {
                return this.http.get(this.apiUrl + "/simulation-result?id=" + t).toPromise()
            }
            ,
            t.prototype.saveStage = function(t) {
                return this.http.post(this.apiUrl + "/stage", t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.updateStage = function(t, e) {
                return this.http.put(this.apiUrl + "/stage/" + t, e, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.deleteStage = function(t) {
                return this.http.delete(this.apiUrl + "/stage/" + t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.getSequences = function() {
                return this.http.get(this.apiUrl + "/sequence")
            }
            ,
            t.prototype.deleteProgrammedSequence = function(t) {
                return this.http.delete(this.apiUrl + "/sequence/" + t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.saveProgrammedSequence = function(t) {
                return this.http.post(this.apiUrl + "/sequence", t, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.searchTLEs = function(t) {
                var e = encodeURIComponent(t instanceof Array ? t.join(",") : t);
                return this.http.get(this.apiUrl + "/tle?patterns=" + e)
            }
            ,
            t.prototype.getTLEsByLaunchDesignators = function(t) {
                var e = encodeURIComponent(t instanceof Array ? t.join(",") : t);
                return this.http.get(this.apiUrl + "/tle?designators=" + e)
            }
            ,
            t.prototype.getTlesByLaunchLibraryIds = function(t) {
                var e = t instanceof Array ? t.join(",") : t;
                return this.http.get(this.apiUrl + "/tle?launchLibraryId=" + e, {
                    headers: this.headers
                }).toPromise()
            }
            ,
            t.prototype.getTLEsByNoradIds = function(t) {
                var e = t instanceof Array ? t.join(",") : t;
                return this.http.get(this.apiUrl + "/tle?noradIds=" + e)
            }
            ,
            t.prototype.getAllTLEs = function(t, e) {
                return this.http.get(this.apiUrl + "/tle?size=" + t + "&page=" + e, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteTLEByNoradId = function(t) {
                return this.http.delete(this.apiUrl + "/tle/" + t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.createTLE = function(t) {
                return this.http.post(this.apiUrl + "/tle", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getAllTleSources = function() {
                return this.http.get(this.apiUrl + "/tle-source/", {
                    headers: this.headers
                })
            }
            ,
            t.prototype.createNewTLESource = function(t) {
                return this.http.post(this.apiUrl + "/tle-source", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteTLESourceById = function(t) {
                return this.http.delete(this.apiUrl + "/tle-source/" + t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.getUser = function() {
                return this.accessToken ? this.http.get(this.apiUrl + "/user", {
                    headers: this.headers
                }).pipe(Object(u.a)((function(t) {
                    return t.coupons = t.coupons || []
                }
                ))) : Object(i.a)(new s.f)
            }
            ,
            t.prototype.getUserById = function(t) {
                return this.http.get(this.apiUrl + "/user/" + t, {
                    headers: this.headers
                }).pipe(Object(u.a)((function(t) {
                    return t.coupons = t.coupons || []
                }
                )))
            }
            ,
            t.prototype.getAllUsers = function() {
                return this.http.get(this.apiUrl + "/user/all", {
                    headers: this.headers
                })
            }
            ,
            t.prototype.logout = function() {
                return this.http.get(this.apiUrl + "/user/logout", {
                    headers: this.headers
                })
            }
            ,
            t.prototype.saveSimulation = function(t) {
                return this.http.put(this.apiUrl + "/user/simulations", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.updateAllSims = function(t) {
                return this.http.post(this.apiUrl + "/user/simulations", t, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.updateRoles = function(t, e) {
                return this.http.post(this.apiUrl + "/user/" + t + "/roles", e, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.updateFavouriteLocations = function(t, e) {
                return this.http.post(this.apiUrl + "/user/" + t + "/favourite-locations", e, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.addUserCoupon = function(t, e) {
                return this.http.post(this.apiUrl + "/user/" + t + "/coupons", e, {
                    headers: this.headers
                })
            }
            ,
            t.prototype.deleteUserCoupon = function(t, e) {
                return this.http.delete(this.apiUrl + "/user/" + t + "/coupons/" + e, {
                    headers: this.headers
                })
            }
            ,
            t.\u0275fac = function(e) {
                return new (e || t)(c.Yb(l.a),c.Yb(r.a),c.Yb(h.a))
            }
            ,
            t.\u0275prov = c.Kb({
                token: t,
                factory: t.\u0275fac,
                providedIn: a.a
            }),
            t
        }()
    },