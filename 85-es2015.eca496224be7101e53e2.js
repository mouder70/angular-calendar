(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{TFVh:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoModule",(function(){return xe}));var a=n("ofXK"),r=n("tk/3"),i=n("tyNb"),o=n("Nrjh"),c=n("/om3"),u=n("dBcC"),s=n("lJxs"),d=n("cbJd"),h=n("9ig3"),l=n("aetl"),f=n("M34a"),m=n("jKzE"),g=n("L8hi"),w=n("piIK"),v=n("/Tr7"),b=n("jIYg");function y(e){Object(b.a)(1,arguments);var t=Object(v.a)(e);return!isNaN(t)}var p={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function C(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var T={date:C({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:C({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:C({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},M={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function D(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var c=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;a=e.values[u]||e.values[c]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function k(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],c=a.match(o);if(!c)return null;var u,s=c[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(s)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(s)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(s.length)}}}var O,x={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof p[e]?p[e]:1===t?p[e].one:p[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:T,formatRelative:function(e,t,n,a){return M[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:D({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:D({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:D({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:D({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:D({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(O={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(O.matchPattern);if(!r)return null;var i=r[0],o=n.match(O.parsePattern);if(!o)return null;var c=O.valueCallback?O.valueCallback(o[0]):o[0];return{value:c=a.valueCallback?a.valueCallback(c):c,rest:n.slice(i.length)}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},U=n("/h9T"),P=n("pl0G");function j(e,t){Object(b.a)(2,arguments);var n=Object(U.a)(t);return Object(P.a)(e,-n)}function S(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var W={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return S("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):S(n+1,2)},d:function(e,t){return S(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return S(e.getUTCHours()%12||12,t.length)},H:function(e,t){return S(e.getUTCHours(),t.length)},m:function(e,t){return S(e.getUTCMinutes(),t.length)},s:function(e,t){return S(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return S(Math.floor(a*Math.pow(10,n-3)),t.length)}};function E(e){Object(b.a)(1,arguments);var t=1,n=Object(v.a)(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function Y(e){Object(b.a)(1,arguments);var t=Object(v.a)(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=E(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=E(i);return t.getTime()>=r.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function q(e){Object(b.a)(1,arguments);var t=Y(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=E(n);return a}function N(e,t){Object(b.a)(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,i=null==r?0:Object(U.a)(r),o=null==n.weekStartsOn?i:Object(U.a)(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=Object(v.a)(e),u=c.getUTCDay(),s=(u<o?7:0)+u-o;return c.setUTCDate(c.getUTCDate()-s),c.setUTCHours(0,0,0,0),c}function z(e,t){Object(b.a)(1,arguments);var n=Object(v.a)(e,t),a=n.getUTCFullYear(),r=t||{},i=r.locale,o=i&&i.options&&i.options.firstWeekContainsDate,c=null==o?1:Object(U.a)(o),u=null==r.firstWeekContainsDate?c:Object(U.a)(r.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=new Date(0);s.setUTCFullYear(a+1,0,u),s.setUTCHours(0,0,0,0);var d=N(s,t),h=new Date(0);h.setUTCFullYear(a,0,u),h.setUTCHours(0,0,0,0);var l=N(h,t);return n.getTime()>=d.getTime()?a+1:n.getTime()>=l.getTime()?a:a-1}function A(e,t){Object(b.a)(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,i=null==r?1:Object(U.a)(r),o=null==n.firstWeekContainsDate?i:Object(U.a)(n.firstWeekContainsDate),c=z(e,t),u=new Date(0);u.setUTCFullYear(c,0,o),u.setUTCHours(0,0,0,0);var s=N(u,t);return s}var H="midnight",X="noon",L="morning",F="afternoon",J="evening",G="night";function Q(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+S(i,2)}function B(e,t){return e%60==0?(e>0?"-":"+")+S(Math.abs(e)/60,2):I(e,t)}function I(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+S(Math.floor(r/60),2)+n+S(r%60,2)}var R={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return W.y(e,t)},Y:function(e,t,n,a){var r=z(e,a),i=r>0?r:1-r;return"YY"===t?S(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):S(i,t.length)},R:function(e,t){return S(Y(e),t.length)},u:function(e,t){return S(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return S(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return S(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return W.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return S(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){Object(b.a)(1,arguments);var n=Object(v.a)(e),a=N(n,t).getTime()-A(n,t).getTime();return Math.round(a/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):S(r,t.length)},I:function(e,t,n){var a=function(e){Object(b.a)(1,arguments);var t=Object(v.a)(e),n=E(t).getTime()-q(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):S(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):W.d(e,t)},D:function(e,t,n){var a=function(e){Object(b.a)(1,arguments);var t=Object(v.a)(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):S(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return S(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return S(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return S(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?X:0===r?H:r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?J:r>=12?F:r>=4?L:G,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return W.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):W.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):S(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):S(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):W.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):W.s(e,t)},S:function(e,t){return W.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return B(r);case"XXXX":case"XX":return I(r);case"XXXXX":case"XXX":default:return I(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return B(r);case"xxxx":case"xx":return I(r);case"xxxxx":case"xxx":default:return I(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Q(r,":");case"OOOO":default:return"GMT"+I(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Q(r,":");case"zzzz":default:return"GMT"+I(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return S(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return S((a._originalDate||e).getTime(),t.length)}};function _(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function $(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var K={p:$,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return _(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",_(r,t)).replace("{{time}}",$(i,t))}},V=n("JCDJ"),Z=["D","DD"],ee=["YY","YYYY"];function te(e){return-1!==Z.indexOf(e)}function ne(e){return-1!==ee.indexOf(e)}function ae(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var re=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ie=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,oe=/^'([^]*?)'?$/,ce=/''/g,ue=/[a-zA-Z]/;function se(e,t,n){Object(b.a)(2,arguments);var a=String(t),r=n||{},i=r.locale||x,o=i.options&&i.options.firstWeekContainsDate,c=null==o?1:Object(U.a)(o),u=null==r.firstWeekContainsDate?c:Object(U.a)(r.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var s=i.options&&i.options.weekStartsOn,d=null==s?0:Object(U.a)(s),h=null==r.weekStartsOn?d:Object(U.a)(r.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var l=Object(v.a)(e);if(!y(l))throw new RangeError("Invalid time value");var f=Object(V.a)(l),m=j(l,f),g={firstWeekContainsDate:u,weekStartsOn:h,locale:i,_originalDate:l},w=a.match(ie).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,K[t])(e,i.formatLong,g):e})).join("").match(re).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return de(e);var n=R[t];if(n)return!r.useAdditionalWeekYearTokens&&ne(e)&&ae(e),!r.useAdditionalDayOfYearTokens&&te(e)&&ae(e),n(m,e,i.localize,g);if(t.match(ue))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return w}function de(e){return e.match(oe)[1].replace(ce,"'")}var he=n("WIjQ"),le=n("G6Tw"),fe=n("G6HM"),me=n("fXoL"),ge=n("Vpa8"),we=n("kx+m"),ve=n("1xDM"),be=n("e096");function ye(e,t){1&e&&(me.id(0,"\n  "),me.mc(1,"div",3),me.id(2,"\n    "),me.ic(3,"i",4),me.id(4," "),me.ic(5,"br"),me.id(6,"\n    Loading events...\n  "),me.lc(),me.id(7,"\n"))}function pe(e,t){if(1&e){const e=me.nc();me.mc(0,"mwl-calendar-month-view",8),me.yc("dayClicked",(function(t){return me.Zc(e),me.Ac(2).dayClicked(t.day)}))("eventClicked",(function(t){return me.Zc(e),me.Ac(2).eventClicked(t.event)})),me.id(1,"\n    "),me.lc()}if(2&e){const e=me.Ac().$implicit,t=me.Ac();me.Jc("viewDate",t.viewDate)("events",e)("activeDayIsOpen",t.activeDayIsOpen)}}function Ce(e,t){if(1&e){const e=me.nc();me.mc(0,"mwl-calendar-week-view",9),me.yc("eventClicked",(function(t){return me.Zc(e),me.Ac(2).eventClicked(t.event)})),me.id(1,"\n    "),me.lc()}if(2&e){const e=me.Ac().$implicit,t=me.Ac();me.Jc("viewDate",t.viewDate)("events",e)}}function Te(e,t){if(1&e){const e=me.nc();me.mc(0,"mwl-calendar-day-view",9),me.yc("eventClicked",(function(t){return me.Zc(e),me.Ac(2).eventClicked(t.event)})),me.id(1,"\n    "),me.lc()}if(2&e){const e=me.Ac().$implicit,t=me.Ac();me.Jc("viewDate",t.viewDate)("events",e)}}function Me(e,t){if(1&e&&(me.mc(0,"div"),me.id(1,"\n  "),me.mc(2,"div",5),me.id(3,"\n    "),me.gd(4,pe,2,3,"mwl-calendar-month-view",6),me.id(5,"\n    "),me.gd(6,Ce,2,2,"mwl-calendar-week-view",7),me.id(7,"\n    "),me.gd(8,Te,2,2,"mwl-calendar-day-view",7),me.id(9,"\n  "),me.lc(),me.id(10,"\n"),me.lc()),2&e){const e=me.Ac();me.Ub(2),me.Jc("ngSwitch",e.view),me.Ub(2),me.Jc("ngSwitchCase","month"),me.Ub(2),me.Jc("ngSwitchCase","week"),me.Ub(2),me.Jc("ngSwitchCase","day")}}function De(e){const t=e.getTimezoneOffset();return`T00:00:00${t>0?"-":"+"}${String(Math.floor(Math.abs(t/60))).padStart(2,"0")}:${String(Math.abs(t%60)).padEnd(2,"0")}`}class ke{constructor(e){this.http=e,this.view=d.a.Month,this.viewDate=new Date,this.activeDayIsOpen=!1}ngOnInit(){this.fetchEvents()}fetchEvents(){const e={month:h.a,week:l.a,day:f.a}[this.view],t={month:m.a,week:g.a,day:w.a}[this.view],n=(new r.c).set("primary_release_date.gte",se(e(this.viewDate),"yyyy-MM-dd")).set("primary_release_date.lte",se(t(this.viewDate),"yyyy-MM-dd")).set("api_key","0ec33936a68018857d727958dca1424f");this.events$=this.http.get("https://api.themoviedb.org/3/discover/movie",{params:n}).pipe(Object(s.a)(({results:e})=>e.map(e=>({title:e.title,start:new Date(e.release_date+De(this.viewDate)),color:fe.a.yellow,allDay:!0,meta:{film:e}}))))}dayClicked({date:e,events:t}){Object(he.a)(e,this.viewDate)&&(Object(le.a)(this.viewDate,e)&&!0===this.activeDayIsOpen||0===t.length?this.activeDayIsOpen=!1:(this.activeDayIsOpen=!0,this.viewDate=e))}eventClicked(e){window.open(`https://www.themoviedb.org/movie/${e.meta.film.id}`,"_blank")}}ke.\u0275fac=function(e){return new(e||ke)(me.hc(r.a))},ke.\u0275cmp=me.bc({type:ke,selectors:[["mwl-demo-component"]],decls:9,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],["loading",""],[4,"ngIf","ngIfElse"],[1,"text-center"],[1,"fas","fa-spin","fa-spinner","fa-5x"],[3,"ngSwitch"],[3,"viewDate","events","activeDayIsOpen","dayClicked","eventClicked",4,"ngSwitchCase"],[3,"viewDate","events","eventClicked",4,"ngSwitchCase"],[3,"viewDate","events","activeDayIsOpen","dayClicked","eventClicked"],[3,"viewDate","events","eventClicked"]],template:function(e,t){if(1&e&&(me.mc(0,"mwl-demo-utils-calendar-header",0),me.yc("viewChange",(function(e){return t.view=e}))("viewDateChange",(function(e){return t.viewDate=e}))("viewDateChange",(function(){return t.fetchEvents()}))("viewChange",(function(){return t.fetchEvents()})),me.id(1,"\n"),me.lc(),me.id(2,"\n\n"),me.gd(3,ye,8,0,"ng-template",null,1,me.hd),me.id(5,"\n\n"),me.gd(6,Me,11,4,"div",2),me.Bc(7,"async"),me.id(8,"\n")),2&e){const e=me.Wc(4);me.Jc("view",t.view)("viewDate",t.viewDate),me.Ub(6),me.Jc("ngIf",me.Cc(7,4,t.events$))("ngIfElse",e)}},directives:[ge.a,a.o,a.q,a.r,we.a,ve.a,be.a],pipes:[a.b],encapsulation:2,changeDetection:0});var Oe=n("j1vE");class xe{}xe.\u0275mod=me.fc({type:xe}),xe.\u0275inj=me.ec({factory:function(e){return new(e||xe)},imports:[[a.c,r.b,o.a.forRoot({provide:c.a,useFactory:Oe.a}),u.a,i.e.forChild([{path:"",component:ke}])]]})}}]);