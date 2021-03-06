// Generated by CoffeeScript 1.6.3
(function() {
  //     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);;
  /*
  To use, navigate to the myteam tab and execute this bookmarklet
  
  Page will become unresponsive for ~2 seconds (to make roster change requests). When finished, page will reload, and
  rosters from the current page viewed to the next 2 days will be set.
  */

  var EspnRosterSetter, rs,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  EspnRosterSetter = (function() {
    /*
    @param roster A jquery object if @isRawObject is false, or a roster object if @isRawObject is true
    @param isRawObject toggle whether roster is jquery selection or an object
    */

    function EspnRosterSetter(roster, isRawObject) {
      if (isRawObject == null) {
        isRawObject = false;
      }
      this.setRoster(roster, isRawObject);
      this.POSITION_INDEX_MAP = {
        PG: 0,
        SG: 1,
        SF: 2,
        PF: 3,
        C: 4,
        G: 5,
        F: 6,
        Util_0: 11,
        Util_1: 11,
        Util_2: 11,
        Benches: 12
      };
      if (typeof com !== "undefined" && com !== null) {
        this.LEAGUE_ID = com.espn.games.leagueId;
        this.TEAM_ID = com.espn.games.toTeamId;
        this.BASE_URL = "http://" + com.espn.env.host + "/" + com.espn.games.gameRoot;
      }
    }

    EspnRosterSetter.prototype.startActivePlayersPlayers = function() {
      var periodOffset, rosterSetter, _fn, _i;
      rosterSetter = this;
      _fn = function(periodOffset) {
        var currentPageUrl, scoringPeriod, success;
        scoringPeriod = rosterManager.scoringPeriodId + periodOffset;
        currentPageUrl = "" + rosterSetter.BASE_URL + "/playertable/prebuilt/manageroster?leagueId=" + rosterSetter.LEAGUE_ID + "&teamId=" + rosterSetter.TEAM_ID + "&seasonId=2014&scoringPeriodId=" + scoringPeriod + "&view=stats&context=clubhouse&ajaxPath=playertable/prebuilt/manageroster&managingIr=false&droppingPlayers=false&asLM=false" + (noCache());
        success = function(response) {
          var currentPage, entry, movementLog, postUrl, _j, _len, _ref, _results;
          currentPage = jQuery(response);
          rosterSetter.setRoster(currentPage);
          movementLog = rosterSetter.generateRosterMoves();
          _ref = rosterSetter.segmentLog(movementLog);
          _results = [];
          for (_j = 0, _len = _ref.length; _j < _len; _j++) {
            entry = _ref[_j];
            postUrl = "" + rosterSetter.BASE_URL + RosterManager.SAVE_URL + "?leagueId=" + rosterSetter.LEAGUE_ID + "&teamId=" + rosterSetter.TEAM_ID + "&scoringPeriodId=" + scoringPeriod + "&returnSm=true";
            postUrl += "&trans=" + (rosterSetter.logToUrlParam(entry));
            _results.push(jQuery.ajax({
              type: 'POST',
              url: postUrl,
              async: false
            }));
          }
          return _results;
        };
        return jQuery.ajax({
          type: 'GET',
          url: currentPageUrl,
          async: false,
          success: success
        });
      };
      for (periodOffset = _i = 0; _i < 14; periodOffset = ++_i) {
        _fn(periodOffset);
      }
      return location.reload();
    };

    /*
    Transform @roster into a roster with active players started and return the move list required to generate transform
    
    @Return a log of roster moves required to generate the roster transformation.
    */


    EspnRosterSetter.prototype.generateRosterMoves = function() {
      var applyMoves, movementLog, player, rosterSetter, swapByPR;
      applyMoves = function(players, moveFn) {
        var movementLog, player, position, result, _i, _j, _len, _len1, _ref;
        movementLog = [];
        for (_i = 0, _len = players.length; _i < _len; _i++) {
          player = players[_i];
          _ref = player.positions;
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            position = _ref[_j];
            result = moveFn.call(rosterSetter, player, position);
            if (result.length > 0) {
              movementLog.push.apply(movementLog, result);
              break;
            }
          }
        }
        return movementLog;
      };
      swapByPR = function(srcObj, dstKey) {
        var dstObj;
        dstObj = rosterSetter.roster[dstKey];
        if (dstObj !== null && dstObj.PR < srcObj.PR) {
          return rosterSetter._swapPlayers(srcObj, dstObj);
        } else {
          return [];
        }
      };
      movementLog = [];
      rosterSetter = this;
      movementLog.push.apply(movementLog, applyMoves((function() {
        var _i, _len, _ref, _results;
        _ref = this.roster.Benches;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          player = _ref[_i];
          if (this._isActive(player)) {
            _results.push(player);
          }
        }
        return _results;
      }).call(this), this.move));
      movementLog.push.apply(movementLog, applyMoves((function() {
        var _i, _len, _ref, _results;
        _ref = this.roster.Benches;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          player = _ref[_i];
          if (this._isActive(player)) {
            _results.push(player);
          }
        }
        return _results;
      }).call(this), this.freeAndMove));
      movementLog.push.apply(movementLog, applyMoves((function() {
        var _i, _len, _ref, _results;
        _ref = this.roster.Benches;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          player = _ref[_i];
          if (this._isActive(player)) {
            _results.push(player);
          }
        }
        return _results;
      }).call(this), swapByPR));
      movementLog.push.apply(movementLog, applyMoves((function() {
        var _i, _len, _ref, _results;
        _ref = this.roster.Benches;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          player = _ref[_i];
          if (player.hasGame && !player.isHealthy) {
            _results.push(player);
          }
        }
        return _results;
      }).call(this), this.move));
      return movementLog;
    };

    /*
    TODO: espn is not accepting my roster setter's transitions if put into one post request, but if each transition is its
    own post request, espn will accept. Either figure out why espn is rejecting grouped requests, or change return result
    of @freeAndMove() to segmented logs rather than flat logs
    
    @return array of movement log entries, with swaps grouped together
    */


    EspnRosterSetter.prototype.segmentLog = function(movementLog) {
      var i, nextEntry, segmentedLog, thisEntry;
      segmentedLog = [];
      i = 0;
      while (i < movementLog.length) {
        thisEntry = movementLog[i];
        if (i !== movementLog.length - 1) {
          nextEntry = movementLog[i + 1];
          if (thisEntry[2] === nextEntry[3] && thisEntry[3] === nextEntry[2]) {
            segmentedLog.push([thisEntry, nextEntry]);
            i += 2;
            continue;
          }
        }
        segmentedLog.push([thisEntry]);
        i += 1;
      }
      return segmentedLog;
    };

    /*
    @return string representing roster transitions, formatted as query string value that espn accepts
    */


    EspnRosterSetter.prototype.logToUrlParam = function(movementLog) {
      var entry, strings;
      strings = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = movementLog.length; _i < _len; _i++) {
          entry = movementLog[_i];
          _results.push("1_" + entry[1] + "_" + this.POSITION_INDEX_MAP[entry[2]] + "_" + this.POSITION_INDEX_MAP[entry[3]]);
        }
        return _results;
      }).call(this);
      return strings.join('|');
    };

    /*
    If move from src to dst fails, recursively move dst to one of its free neighboring positions
    TODO: DFS algorithm produces wild, suboptimal swaps. Try iterative deepening or BFS
    
    @param srcObj
    @param dstKey
    @param tries array of @roster keys to visit. Recursive calls track this to not infinitely loop
    */


    EspnRosterSetter.prototype.freeAndMove = function(srcObj, dstKey, tries) {
      var dstObj, dstPositions, key, moveAgain, moveResult, pos, position, recursiveResult, rosterCpy, srcKey, _i, _len;
      if (tries == null) {
        tries = null;
      }
      dstObj = this.roster[dstKey];
      srcKey = this._getRosterKey(srcObj);
      if (!this._isMoveLegal(srcObj, dstKey)) {
        return [];
      }
      if (tries === null) {
        tries = (function() {
          var _i, _len, _ref, _results;
          _ref = Object.keys(this.roster);
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            key = _ref[_i];
            if (key !== 'Benches' && key !== srcKey) {
              _results.push(key);
            }
          }
          return _results;
        }).call(this);
      }
      tries = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = tries.length; _i < _len; _i++) {
          pos = tries[_i];
          if (pos !== dstKey) {
            _results.push(pos);
          }
        }
        return _results;
      })();
      rosterCpy = JSON.stringify(this.roster);
      moveResult = this.move(srcObj, dstKey);
      if (moveResult.length > 0) {
        return moveResult;
      } else {
        dstPositions = (function() {
          var _i, _len, _ref, _results;
          _ref = dstObj.positions;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            position = _ref[_i];
            if (__indexOf.call(tries, position) >= 0) {
              _results.push(position);
            }
          }
          return _results;
        })();
        for (_i = 0, _len = dstPositions.length; _i < _len; _i++) {
          position = dstPositions[_i];
          recursiveResult = this.freeAndMove(dstObj, position, tries);
          if (recursiveResult.length > 0) {
            moveAgain = this.move(srcObj, dstKey);
            if (moveAgain.length > 0) {
              return recursiveResult.concat(moveAgain);
            } else {
              this.roster = JSON.parse(rosterCpy);
            }
          }
        }
        return [];
      }
    };

    /*
    Attempt to move or swap src into dst
    
    @return list representing result of move. Empty if illegal.
    */


    EspnRosterSetter.prototype.move = function(srcObj, dstKey) {
      var dstObj, srcKey;
      srcKey = this._getRosterKey(srcObj);
      if (!this._isMoveLegal(srcObj, dstKey)) {
        return [];
      }
      dstObj = this.roster[dstKey];
      if (dstObj === null) {
        this.roster[dstKey] = srcObj;
        this._deleteFromRoster(srcKey, srcObj);
        return [[srcObj.name, srcObj.id, srcKey, dstKey]];
      } else {
        if (this._isActive(dstObj)) {
          return [];
        } else {
          return this._swapPlayers(srcObj, dstObj);
        }
      }
    };

    EspnRosterSetter.prototype._isMoveLegal = function(srcObj, dstKey) {
      var dstObj, srcKey;
      srcKey = this._getRosterKey(srcObj);
      dstObj = this.roster[dstKey];
      if (srcKey === dstKey) {
        return false;
      }
      if (dstKey === 'Benches') {
        return false;
      }
      if (!this._playsPosition(srcObj, dstKey)) {
        return false;
      }
      return true;
    };

    EspnRosterSetter.prototype._isActive = function(playerObj) {
      if (playerObj === null) {
        return false;
      }
      return playerObj.hasGame && playerObj.isHealthy;
    };

    EspnRosterSetter.prototype._playsPosition = function(obj, position) {
      if (position === 'Benches') {
        return true;
      } else {
        return __indexOf.call(obj.positions, position) >= 0;
      }
    };

    EspnRosterSetter.prototype._swapPlayers = function(srcObj, dstObj) {
      var dstCpy, dstKey, srcCpy, srcKey;
      srcCpy = srcObj;
      dstCpy = dstObj;
      srcKey = this._getRosterKey(srcObj);
      dstKey = this._getRosterKey(dstObj);
      if (this._playsPosition(dstObj, srcKey) && this._playsPosition(srcObj, dstKey)) {
        this._deleteFromRoster(srcKey, srcObj);
        this._deleteFromRoster(dstKey, dstObj);
        this._addToRoster(dstKey, srcCpy);
        this._addToRoster(srcKey, dstCpy);
        return [[srcObj.name, srcObj.id, srcKey, dstKey], [dstObj.name, dstObj.id, dstKey, srcKey]];
      } else {
        return [];
      }
    };

    EspnRosterSetter.prototype._addToRoster = function(key, obj) {
      if (key === 'Benches') {
        return this.roster[key].push(obj);
      } else {
        return this.roster[key] = obj;
      }
    };

    EspnRosterSetter.prototype._deleteFromRoster = function(key, obj) {
      var player;
      if (key === 'Benches') {
        return this.roster[key] = (function() {
          var _i, _len, _ref, _results;
          _ref = this.roster[key];
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            player = _ref[_i];
            if (!_.isEqual(obj, player)) {
              _results.push(player);
            }
          }
          return _results;
        }).call(this);
      } else {
        return this.roster[key] = null;
      }
    };

    EspnRosterSetter.prototype._getRosterKey = function(srcObj) {
      var key, obj, val, _i, _len, _ref;
      _ref = this.roster;
      for (key in _ref) {
        val = _ref[key];
        if (Array.isArray(val)) {
          for (_i = 0, _len = val.length; _i < _len; _i++) {
            obj = val[_i];
            if (_.isEqual(obj, srcObj)) {
              return key;
            }
          }
        } else {
          if (_.isEqual(srcObj, val)) {
            return key;
          }
        }
      }
    };

    EspnRosterSetter.prototype.setRoster = function(roster, isRawObject) {
      var allSlots, getPositionsHelper, hasPlayerHelper, healthAndPositionsString, key, playerInfo, playerObject, rosterCpy, slot, slotLabel, utilOffset, _i, _j, _len, _len1, _ref, _results;
      if (isRawObject == null) {
        isRawObject = false;
      }
      if (isRawObject) {
        rosterCpy = jQuery.extend(true, {}, roster);
        return this.roster = rosterCpy;
      } else {
        this.roster = {};
        _ref = ['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F', 'Util_0', 'Util_1', 'Util_2'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          key = _ref[_i];
          this.roster[key] = null;
        }
        this.roster.Benches = [];
        allSlots = roster.find('tr.pncPlayerRow').slice(0, -1);
        getPositionsHelper = function(string) {
          var position, positionsPlayed, _j, _k, _len1, _len2, _ref1, _ref2;
          positionsPlayed = [];
          _ref1 = ['PG', 'SG', 'SF', 'PF', 'C'];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            position = _ref1[_j];
            if (string.indexOf(position) > -1) {
              positionsPlayed.push(position);
            }
          }
          if (__indexOf.call(positionsPlayed, 'SF') >= 0 || __indexOf.call(positionsPlayed, 'PF') >= 0) {
            positionsPlayed.push('F');
          }
          if (__indexOf.call(positionsPlayed, 'SG') >= 0 || __indexOf.call(positionsPlayed, 'PG') >= 0) {
            positionsPlayed.push('G');
          }
          _ref2 = ['Util_0', 'Util_1', 'Util_2'];
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            position = _ref2[_k];
            positionsPlayed.push(position);
          }
          return positionsPlayed;
        };
        hasPlayerHelper = function(slot) {
          return jQuery('.playertablePlayerName', slot).length > 0;
        };
        utilOffset = 0;
        _results = [];
        for (_j = 0, _len1 = allSlots.length; _j < _len1; _j++) {
          slot = allSlots[_j];
          if (!(hasPlayerHelper(slot))) {
            continue;
          }
          slotLabel = jQuery('td', slot).eq(0).text();
          playerObject = {};
          playerObject.id = parseInt(jQuery('.flexpop', slot).attr('playerid'), 10);
          playerInfo = jQuery('td.playertablePlayerName', slot).text();
          healthAndPositionsString = playerInfo.replace(/.*?\u00a0(.*)/, '$1');
          playerObject.name = playerInfo.replace(/(.*?),.*/, '$1');
          playerObject.isHealthy = healthAndPositionsString.indexOf('O') === -1 && healthAndPositionsString.indexOf('DTD') === -1;
          playerObject.positions = getPositionsHelper(healthAndPositionsString);
          playerObject.hasGame = jQuery('td:eq(5) a', slot).length >= 1;
          playerObject.PR = parseFloat(jQuery('.playertableData:first', slot).text());
          if (slotLabel === 'UTIL') {
            this.roster["Util_" + utilOffset] = playerObject;
            _results.push(utilOffset += 1);
          } else if (slotLabel === 'Bench') {
            _results.push(this.roster.Benches.push(playerObject));
          } else {
            _results.push(this.roster[slotLabel] = playerObject);
          }
        }
        return _results;
      }
    };

    return EspnRosterSetter;

  })();

  delete Array.prototype.toJSON;

  window.EspnRosterSetter = EspnRosterSetter;

  rs = new EspnRosterSetter(jQuery(document));

  rs.startActivePlayersPlayers();

}).call(this);

/*
//@ sourceMappingURL=EspnRosterSetter.map
*/
