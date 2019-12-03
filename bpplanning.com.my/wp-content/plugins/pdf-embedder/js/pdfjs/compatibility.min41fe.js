(function(){var g=navigator.userAgent,l=/Android/.test(g),m=/Android\s[0-2][^\d]/.test(g),q=/Android\s[0-4][^\d]/.test(g),r=0<=g.indexOf("Chrom"),t=/Chrome\/(39|40)\./.test(g),n=0<=g.indexOf("Trident"),k=/\b(iPad|iPhone|iPod)(?=;)/.test(g),u=0<=g.indexOf("Opera"),p=/Safari\//.test(g)&&!/(Chrome\/|Android\s)/.test(g);"undefined"===typeof PDFJS&&(("undefined"!==typeof window?window:this).PDFJS={});(function(){function a(f,a){return new b(this.slice(f,a))}function c(b,a){2>arguments.length&&(a=0);for(var c=
0,h=b.length;c<h;++c,++a)this[a]=b[c]&255}function b(b){var d,e,h;if("number"===typeof b)for(d=[],e=0;e<b;++e)d[e]=0;else if("slice"in b)d=b.slice(0);else for(d=[],e=0,h=b.length;e<h;++e)d[e]=b[e];d.subarray=a;d.buffer=d;d.byteLength=d.length;d.set=c;"object"===typeof b&&b.buffer&&(d.buffer=b.buffer);return d}"undefined"!==typeof Uint8Array?("undefined"===typeof Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(b,a){return new Uint8Array(this.slice(b,a))},Float32Array.prototype.subarray=
function(b,a){return new Float32Array(this.slice(b,a))}),"undefined"===typeof Float64Array&&(window.Float64Array=Float32Array)):(window.Uint8Array=b,window.Int8Array=b,window.Uint32Array=b,window.Int32Array=b,window.Uint16Array=b,window.Float32Array=b,window.Float64Array=b)})();window.URL||(window.URL=window.webkitURL);(function(){if("undefined"!==typeof Object.defineProperty){var a=!0;try{Object.defineProperty(new Image,"id",{value:"test"});var c=function(){};c.prototype={get id(){}};Object.defineProperty(new c,
"id",{value:"",configurable:!0,enumerable:!0,writable:!1})}catch(b){a=!1}if(a)return}Object.defineProperty=function(b,a,c){delete b[a];"get"in c&&b.__defineGetter__(a,c.get);"set"in c&&b.__defineSetter__(a,c.set);"value"in c&&(b.__defineSetter__(a,function(b){this.__defineGetter__(a,function(){return b});return b}),b[a]=c.value)}})();(function(){var a=XMLHttpRequest.prototype,c=new XMLHttpRequest;"overrideMimeType"in c||Object.defineProperty(a,"overrideMimeType",{value:function(b){}});"responseType"in
c||(PDFJS.disableWorker=!0,Object.defineProperty(a,"responseType",{get:function(){return this._responseType||"text"},set:function(b){if("text"===b||"arraybuffer"===b)this._responseType=b,"arraybuffer"===b&&"function"===typeof this.overrideMimeType&&this.overrideMimeType("text/plain; charset=x-user-defined")}}),"undefined"!==typeof VBArray?Object.defineProperty(a,"response",{get:function(){return"arraybuffer"===this.responseType?new Uint8Array((new VBArray(this.responseBody)).toArray()):this.responseText}}):
Object.defineProperty(a,"response",{get:function(){if("arraybuffer"!==this.responseType)return this.responseText;var b=this.responseText,a,c=b.length,e=new Uint8Array(c);for(a=0;a<c;++a)e[a]=b.charCodeAt(a)&255;return e.buffer}}))})();(function(){"btoa"in window||(window.btoa=function(a){var c="",b,f;b=0;for(f=a.length;b<f;b+=3)var d=a.charCodeAt(b)&255,e=a.charCodeAt(b+1)&255,h=a.charCodeAt(b+2)&255,g=(d&3)<<4|e>>4,e=b+1<f?(e&15)<<2|h>>6:64,h=b+2<f?h&63:64,c=c+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d>>
2)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h));return c})})();(function(){"atob"in window||(window.atob=function(a){a=a.replace(/=+$/,"");if(1===a.length%4)throw Error("bad atob input");for(var c=0,b,f,d=0,e="";f=a.charAt(d++);~f&&(b=c%4?64*b+f:f,c++%4)?e+=String.fromCharCode(255&b>>(-2*c&6)):0)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(f);
return e})})();(function(){"undefined"===typeof Function.prototype.bind&&(Function.prototype.bind=function(a){var c=this,b=Array.prototype.slice.call(arguments,1);return function(){var f=b.concat(Array.prototype.slice.call(arguments));return c.apply(a,f)}})})();(function(){"dataset"in document.createElement("div")||Object.defineProperty(HTMLElement.prototype,"dataset",{get:function(){if(this._dataset)return this._dataset;for(var a={},c=0,b=this.attributes.length;c<b;c++){var f=this.attributes[c];
if("data-"===f.name.substring(0,5)){var d=f.name.substring(5).replace(/\-([a-z])/g,function(b,a){return a.toUpperCase()});a[d]=f.value}}Object.defineProperty(this,"_dataset",{value:a,writable:!1,enumerable:!1});return a},enumerable:!0})})();(function(){function a(b,a,c,e){var h=(b.className||"").split(/\s+/g);""===h[0]&&h.shift();var g=h.indexOf(a);0>g&&c&&h.push(a);0<=g&&e&&h.splice(g,1);b.className=h.join(" ");return 0<=g}if(!("classList"in document.createElement("div"))){var c={add:function(b){a(this.element,
b,!0,!1)},contains:function(b){return a(this.element,b,!1,!1)},remove:function(b){a(this.element,b,!1,!0)},toggle:function(b){a(this.element,b,!0,!0)}};Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList;var b=Object.create(c,{element:{value:this,writable:!1,enumerable:!0}});Object.defineProperty(this,"_classList",{value:b,writable:!1,enumerable:!1});return b},enumerable:!0})}})();(function(){"console"in window?"bind"in console.log||(console.log=
function(a){return function(c){return a(c)}}(console.log),console.error=function(a){return function(c){return a(c)}}(console.error),console.warn=function(a){return function(c){return a(c)}}(console.warn)):window.console={log:function(){},error:function(){},warn:function(){}}})();(function(){function a(b){c(b.target)&&b.stopPropagation()}function c(b){return b.disabled||b.parentNode&&c(b.parentNode)}u&&document.addEventListener("click",a,!0)})();n&&(PDFJS.disableCreateObjectURL=!0);"language"in navigator||
(PDFJS.locale=navigator.userLanguage||"en-US");if(p||m||t||k)PDFJS.disableRange=!0,PDFJS.disableStream=!0;if(!history.pushState||m)PDFJS.disableHistory=!0;(function(){if(window.CanvasPixelArray)"function"!==typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(b){for(var a=0,c=this.length;a<c;a++)this[a]=b[a]});else{var a=!1;r?a=(a=g.match(/Chrom(e|ium)\/([0-9]+)\./))&&21>parseInt(a[2]):l?a=q:p&&(a=(a=g.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//))&&
6>parseInt(a[1]));if(a){var a=window.CanvasRenderingContext2D.prototype,c=a.createImageData;a.createImageData=function(a,f){var d=c.call(this,a,f);d.data.set=function(a){for(var b=0,c=this.length;b<c;b++)this[b]=a[b]};return d};a=null}}})();(function(){function a(a){window.setTimeout(a,20)}k?window.requestAnimationFrame=a:"requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||a)})();if(k||l)PDFJS.maxCanvasPixels=5242880;
n&&window.parent!==window&&(PDFJS.disableFullscreen=!0);(function(){"currentScript"in document||Object.defineProperty(document,"currentScript",{get:function(){var a=document.getElementsByTagName("script");return a[a.length-1]},enumerable:!0,configurable:!0})})()}).call("undefined"===typeof window?this:window);
