// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3gXio":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4dd50b02fbb4b507";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jrVHW":[function(require,module,exports) {
var _nftClassJs = require("../model/nft-class.js");
var _nftCardJs = require("../view/nft-card.js");
var _nftModalJs = require("../view/nft-modal.js");
var _creatorClassJs = require("../model/creator-class.js");
var _creatorCardJs = require("../view/creator-card.js");
var _creatorModalJs = require("../view/creator-modal.js");
//////////////////////////////////////////////////
// GLOBAL VARIABLES
//////////////////////////////////////////////////
// DOM ELEMENTS
const body = document.querySelector("body");
const allLinks = document.querySelectorAll("a:link");
const heroSection = document.querySelector(".hero-section");
const year = document.querySelector(".year");
const linkToTop = document.querySelector(".link-to-top");
const btnLogin = document.querySelector(".btn-login");
const btnSignup = document.querySelector(".btn-signup");
const modalAuthentication = document.querySelector(".authentication-modal");
const formLogin = document.querySelector("#form-login");
const formSignup = document.querySelector("#form-signup");
const nftsGrid = document.querySelector(".nfts-grid");
const creatorsGrid = document.querySelector(".creators-grid");
// OTHER VARIABLES
const nfts = [
    (0, _nftClassJs.nft1),
    (0, _nftClassJs.nft2),
    (0, _nftClassJs.nft3),
    (0, _nftClassJs.nft4)
];
const creators = [
    (0, _creatorClassJs.creator1),
    (0, _creatorClassJs.creator2),
    (0, _creatorClassJs.creator3),
    (0, _creatorClassJs.creator4)
];
let nftButtons = null;
let creatorButtons = null;
let dataModal = null;
let hours = 23;
let minutes = 59;
let seconds = 59;
//////////////////////////////////////////////////
// MISCELLANEOUS FUNCTIONS
//////////////////////////////////////////////////
// 1. SET CURRENT YEAR
const currentYear = new Date().getFullYear();
year.textContent = currentYear.toString();
//////////////////////////////////////////////////
// FUNCTIONS FOR PAGE NAVIGATION
//////////////////////////////////////////////////
// 2. SMOOTH SCROLLING ANIMATION
allLinks.forEach(function(link) {
    // Following conditional allows github.com anchor link to be functional
    if (link.hostname !== "github.com") link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        // Scroll back to top
        if (href === "#") window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// 3. STICKY NAVIGATION
const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
}, {
    root: null,
    threshold: 0,
    rootMargin: "-100%"
});
obs.observe(heroSection);
// 4. SHOW LINK-TO-TOP BUTTON (500PX FROM TOP OF DOCUMENT)
window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) linkToTop.style.display = "block";
    else linkToTop.style.display = "none";
};
//////////////////////////////////////////////////
// COMMON FUNCTIONS FOR ALL MODALS
//////////////////////////////////////////////////
// 5. CLOSE MODAL WHEN USER CLICKS OUTSIDE OF IT
window.onclick = function(event) {
    const currentModal = event.target;
    if (currentModal === modalAuthentication) {
        resetForm();
        currentModal.style.display = "none";
        body.style.overflowY = "scroll";
    }
    if (currentModal === dataModal) {
        currentModal.remove();
        body.style.overflowY = "scroll";
    }
};
// 6. WHEN USER CLICKS ON X, CLOSE THE MODAL
document.body.onclick = function(event) {
    const currentButton = event.target;
    if (currentButton.getAttribute("name") === "close-outline") {
        if (currentButton.closest(".authentication-modal")) {
            resetForm();
            modalAuthentication.style.display = "none";
            body.style.overflowY = "scroll";
        }
        if (currentButton.closest(".data-modal")) {
            dataModal.remove();
            body.style.overflowY = "scroll";
        }
    }
};
//////////////////////////////////////////////////
// FUNCTIONS FOR AUTHENTICATION MODALS
//////////////////////////////////////////////////
// 7. ENABLE MODAL FORM INTERACTION - LOGIN
btnLogin.onclick = function(event) {
    document.querySelector("#chk").checked = true;
    const currentButton = event.target;
    setModalOrigin(modalAuthentication, currentButton);
    showModal("AUTHENTICATION", modalAuthentication);
};
// 8. ENABLE MODAL FORM INTERACTION - SIGN UP
btnSignup.onclick = function(event) {
    document.querySelector("#chk").checked = false;
    const currentButton = event.target;
    setModalOrigin(modalAuthentication, currentButton);
    showModal("AUTHENTICATION", modalAuthentication);
};
//////////////////////////////////////////////////
// FUNCTIONS FOR NFT/CREATOR MODALS
//////////////////////////////////////////////////
// 9. AUTOMATE TIMER IMMEDIATELY WHEN MAIN WINDOW LOADS
window.onload = function() {
    setInterval(function() {
        let timer = document.querySelector(".timer");
        // Add leading 0 for numbers smaller than 10
        if (seconds < 10 && seconds.toString().length == 1) seconds = `0${seconds}`;
        if (minutes < 10 && minutes.toString().length == 1) minutes = `0${minutes}`;
        if (hours < 10 && hours.toString().length == 1) hours = `0${hours}`;
        // Update timer when modal HTML is loaded
        if (timer !== null) timer.textContent = hours + " : " + minutes + " : " + seconds;
        seconds--;
        if (seconds < 0) {
            minutes--;
            seconds = 59;
            if (minutes < 0) {
                hours--;
                minutes = 59;
            }
            if (hours < 0) hours = 23;
        }
    }, 1000);
};
// 10. ENABLE FLIP FUNCTIONALITY
const enableFlip = function(currentNFT) {
    const flipCard = document.querySelector(".flip-card");
    const nftModalContent = document.querySelector(".nft-modal-content");
    const currentCreator = creators.find((creator)=>{
        return creator.name === currentNFT.creator;
    });
    // Insert HTML code
    flipCard.insertAdjacentHTML("beforeend", (0, _creatorModalJs.createCreatorModal)(currentCreator));
    (0, _creatorModalJs.createCharts)(currentCreator);
    // Remove unnecessary parent element card content
    const parent = flipCard.lastElementChild;
    parent.replaceWith(...parent.childNodes);
    // Add CSS style to enable flip
    const modalCreatorContent = document.querySelector(".modal-creator-content");
    modalCreatorContent.style.transform = "rotateY(180deg)";
    // Enable flip effect
    const modalCreatorLink = document.querySelector(".modal-creator-link");
    const modalGoBack = document.querySelector(".modal-go-back");
    modalCreatorLink.onclick = function() {
        flipCard.classList.toggle("is-flipped");
        modalGoBack.classList.remove("hidden");
    };
    modalGoBack.onclick = function() {
        flipCard.classList.toggle("is-flipped");
    };
};
// 11. SHOW MODAL WINDOW
const showModal = function(currentType, currentModal, currentNFT) {
    currentModal.style.display = "flex";
    body.style.overflow = "hidden";
    if (currentType === "NFT") enableFlip(currentNFT);
};
// 12. SET ORIGIN OF MODAL POPUP ANIMATION
const setModalOrigin = function(currentModal, currentButton) {
    const xPosition = currentButton.getBoundingClientRect().left;
    const yPosition = currentButton.getBoundingClientRect().top;
    currentModal.style.transformOrigin = `${xPosition}px ${yPosition}px`;
};
// 13. RESET FORMS WHEN CLOSING THEM
const resetForm = function() {
    document.getElementById(formLogin.id).reset();
    document.getElementById(formSignup.id).reset();
};
// 14. ENABLE MODAL FORM INTERACTION
const enableViewButtons = function(type, buttons, objectsArray, place, createModal) {
    for(let i = 0; i < buttons.length; i++)buttons[i].onclick = function(event) {
        const currentButton = event.target;
        // Add HTML code for modals - synchronous code
        place.insertAdjacentHTML("beforeend", createModal(objectsArray[i]));
        // Specify from where modal should appear
        dataModal = document.querySelector(".data-modal");
        setModalOrigin(dataModal, currentButton);
        // Add specific HTML code based on type of current modal
        if (type === "NFT") {
            document.querySelector(".timer").textContent = hours + " : " + minutes + " : " + seconds;
            showModal(type, dataModal, objectsArray[i]);
        }
        if (type === "CREATOR") {
            (0, _creatorModalJs.createCharts)(objectsArray[i]);
            showModal(type, dataModal);
        }
    };
};
// 15. ADD CARDS ON MAIN PAGE (2 TYPES: NFT AND CREATOR)
const createCards = function(objectsArray, place, createCard) {
    objectsArray.forEach((item)=>place.insertAdjacentHTML("beforeend", createCard(item)));
};
// 16. CONVERT ETH TO CAD
const convertETHtoCAD = async function() {
    try {
        const fromCurrency = "ethereum";
        const toCurrency = "cad";
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`;
        const response = await fetch(url);
        const json = await response.json();
        return await json[fromCurrency][toCurrency];
    } catch (err) {
        console.error(`${err}`);
    }
};
// 17. ASYNCHRONOUS CODE
convertETHtoCAD().then((oneETHprice)=>{
    const numberFormatter = Intl.NumberFormat("en-US");
    nfts.forEach(function(nft) {
        const dollarValue = (oneETHprice * nft.ethereum).toFixed(2);
        nft.dollar = numberFormatter.format(dollarValue);
    });
}).then(()=>{
    createCards(nfts, nftsGrid, (0, _nftCardJs.createNftCard));
    nftButtons = document.querySelectorAll(".nft-button");
    enableViewButtons("NFT", nftButtons, nfts, nftsGrid, (0, _nftModalJs.createNftModal));
    createCards(creators, creatorsGrid, (0, _creatorCardJs.createCreatorCard));
    creatorButtons = document.querySelectorAll(".creator-button");
    enableViewButtons("CREATOR", creatorButtons, creators, creatorsGrid, (0, _creatorModalJs.createCreatorModal));
});

},{"../model/nft-class.js":"4kFdP","../view/nft-card.js":"2Cn5P","../view/nft-modal.js":"bBqsF","../model/creator-class.js":"lMs4F","../view/creator-card.js":"lEJN6","../view/creator-modal.js":"lxEmT"}],"4kFdP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nft1", ()=>nft1);
parcelHelpers.export(exports, "nft2", ()=>nft2);
parcelHelpers.export(exports, "nft3", ()=>nft3);
parcelHelpers.export(exports, "nft4", ()=>nft4);
class NftClass {
    constructor(name, creator, ethereum, dollar, views, favorites, description, image){
        this.name = name;
        this.creator = creator;
        this.ethereum = ethereum;
        this.dollar = dollar;
        this.views = views;
        this.favorites = favorites;
        this.description = description;
        this.image = image;
    }
}
const nft1 = new NftClass("Flying Astronaut", "Bob Taylor", 9.23, 0, 15, 59, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!", "public/images/space-ga758f1522_640.jpg");
const nft2 = new NftClass("Death Mask", "John Smith", 3.78, 0, 56, 87, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!", "public/images/art-g388e5fb4f_640.jpg");
const nft3 = new NftClass("Pink Shirt Guy", "Lucy Pudding", 6.56, 0, 15, 9, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!", "public/images/art-ga0bb51423_640.jpg");
const nft4 = new NftClass("Green Monster", "Jacky Foster", 15.04, 0, 78, 45, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus magni maiores molestias mollitia nam nobis odio optio pariatur quae quaerat quo, rem sunt tempore velit veritatis voluptate voluptates! Assumenda!", "public/images/art-ga1ef76e48_640.jpg");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2Cn5P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNftCard", ()=>createNftCard);
function createNftCard({ image, name, creator, ethereum, dollar }) {
    return `
    <div class="nft-card">
        <img class="nft-img" src="${image}" alt="NFT image" />
        <div class="nft-info">
          <p class="nft-name">${name}</p>
          <p class="nft-creator">By ${creator}</p>
          <div class="nft-price-box">
            <div class="nft-price-info">
              <p class="nft-price-description">Current price</p>
              <p class="nft-price-ethereum">
                <strong
                  ><span class="ethereum-value">${ethereum}</span> ETH
                </strong>
              </p>
              <p class="nft-price-dollar">
                ($<span class="dollar-value">${dollar}</span>)
              </p>
            </div>
            <button class="btn nft-button">View NFT</button>
          </div>
        </div>
    </div>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBqsF":[function(require,module,exports) {
// Create a modal window when clicking on "view NFT"
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNftModal", ()=>createNftModal);
function createNftModal({ image, name, creator, ethereum, dollar, views, favorites, description }) {
    return `
    <div class="data-modal modal-container">
      <div class="flip-container">
        <div class="flip-card">
          <div class="nft-modal-content border-glow">
            <div>
                <img
                  class="modal-nft-img"
                  src="${image}"
                  alt="NFT image"
                />
            </div>
            <div>
                <div class="modal-nav-icons">
                    <ion-icon class="modal-close" name="close-outline"></ion-icon>
                </div>
                <div class="modal-nft-info">
                  <p class="modal-nft-name">${name}</p>
                  <p class="modal-nft-creator">
                    By <a class="modal-creator-link">${creator}</a> (click on it)
                  </p>
                  <div class="nft-description">
                    <p class="nft-description-label">Description</p>
                    <p class="nft-description-text">${description}</p>
                  </div>
                  <hr />
                  <div class="grid grid-2-cols-2-rows modal-nft-sale">
                    <p class="nft-prices-label">Current price</p>
                    <div class="nft-prices">
                      <p class="nft-modal-price-ethereum">
                        <strong
                          ><span class="ethereum-value">${ethereum}</span>
                          ETH
                        </strong>
                      </p>
                      <p class="nft-modal-price-dollar">
                        ($<span class="dollar-value">${dollar}</span>)
                      </p>
                    </div>
                    <div class="modal-nft-time">
                      <ion-icon
                        class="modal-nft-icon"
                        name="time"
                      ></ion-icon>
                      <p>Sale ends in <span class="timer"></span></p>
                    </div>
                  </div>
                  <div class="modal-btn-box">
                    <button class="btn btn-full btn-buy">Buy Now</button>
                    <button class="btn btn-outline btn-favorites">
                      Add to favorites
                    </button>
                  </div>
                  <hr />
                  <div class="modal-nft-stats">
                    <div class="modal-nft-stat">
                      <ion-icon
                        class="modal-nft-icon"
                        name="eye"
                      ></ion-icon>
                      <p>${views} views</p>
                    </div>
                    <div class="modal-nft-stat">
                      <ion-icon
                        class="modal-nft-icon"
                        name="heart"
                      ></ion-icon>
                      <p>${favorites} favorites</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMs4F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "creator1", ()=>creator1);
parcelHelpers.export(exports, "creator2", ()=>creator2);
parcelHelpers.export(exports, "creator3", ()=>creator3);
parcelHelpers.export(exports, "creator4", ()=>creator4);
class CreatorClass {
    constructor(name, joinDate, items, views, followers, balance, totalSales, totalValue, revenueData, expanseData, viewsData, profitMargin, salesEffectiveness, newViewsData, description, bannerImg, profileImg){
        this.name = name;
        this.joinDate = joinDate;
        this.items = items;
        this.views = views;
        this.followers = followers;
        this.balance = balance;
        this.totalSales = totalSales;
        this.totalValue = totalValue;
        this.revenueData = revenueData;
        this.expanseData = expanseData;
        this.viewsData = viewsData;
        this.profitMargin = profitMargin;
        this.salesEffectiveness = salesEffectiveness;
        this.newViewsData = newViewsData;
        this.description = description;
        this.bannerImg = bannerImg;
        this.profileImg = profileImg;
    }
}
const creator1 = new CreatorClass("Bob Taylor", "January 2022", 56, 10, 8, 562, 423, 1500, [
    65,
    59,
    80,
    81,
    56,
    55,
    40
], [
    24,
    50,
    12,
    65,
    45,
    73,
    95
], [
    65,
    120,
    80,
    70,
    30,
    90,
    200
], [
    30,
    70
], [
    20,
    80
], [
    40,
    60
], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti.", "public/images/cosmos-g20ff2fd5e_640.png", "public/images/man-g238e36a78_640.png");
const creator2 = new CreatorClass("John Smith", "March 2020", 23, 30, 4, 45, 213, 645, [
    2,
    23,
    75,
    12,
    45,
    52,
    79
], [
    78,
    5,
    45,
    7,
    24,
    89,
    77
], [
    45,
    14,
    154,
    75,
    92,
    4,
    65
], [
    10,
    90
], [
    76,
    24
], [
    34,
    66
], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti.", "public/images/bear-gfc11ffe9c_640.png", "public/images/man-g1679334f6_640.png");
const creator3 = new CreatorClass("Lucy Pudding", "December 2021", 145, 78, 34, 789, 541, 956, [
    56,
    89,
    12,
    78,
    98,
    12,
    23
], [
    78,
    56,
    2,
    46,
    13,
    7,
    65
], [
    66,
    178,
    45,
    26,
    198,
    100,
    57
], [
    25,
    75
], [
    55,
    45
], [
    76,
    24
], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti.", "public/images/memphis-g1020b08ad_640.jpg", "public/images/woman-g33cc37279_640.jpg");
const creator4 = new CreatorClass("Jacky Foster", "August 2020", 34, 4, 16, 123, 89, 237, [
    88,
    56,
    46,
    12,
    90,
    78,
    65
], [
    77,
    44,
    72,
    33,
    62,
    19,
    37
], [
    125,
    189,
    146,
    23,
    74,
    50,
    64
], [
    64,
    36
], [
    70,
    30
], [
    82,
    18
], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti.", "public/images/ice-cream-g26773c881_640.png", "public/images/woman-g11e4ec8b8_640.jpg");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEJN6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCreatorCard", ()=>createCreatorCard);
function createCreatorCard({ name, items, views, followers, bannerImg, profileImg }) {
    return `
    <div class="creator-card">
      <img class="creator-banner" src="${bannerImg}" alt="Creator banner image"/>
      <img
        class="creator-img"
        src="${profileImg}"
        alt="Creator profile image"
      />
      <div class="creator-info">
        <p class="creator-name">${name}</p>
        <div class="creator-stat">
          <p>Items</p>
          <p>${items}</p>
        </div>
        <div class="creator-stat">
          <p>Views</p>
          <p>${views}</p>
        </div>
        <div class="creator-stat">
          <p>Followers</p>
          <p>${followers}</p>
        </div>
      </div>
      <button class="btn creator-button">View Creator</button>
    </div>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxEmT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Create a modal window when clicking on "view Creator"
parcelHelpers.export(exports, "createCreatorModal", ()=>createCreatorModal);
parcelHelpers.export(exports, "createCharts", ()=>createCharts);
var _creatorChartsJs = require("./creator-charts.js");
function createCreatorModal({ name, joinDate, balance, totalSales, totalValue, description, bannerImg, profileImg }) {
    return `
    <div class="data-modal modal-container">
        <div class="modal-creator-content border-glow">
            <div class="modal-nav-icons">
                <ion-icon class="modal-go-back hidden" name="arrow-undo-outline"></ion-icon>
                <ion-icon class="modal-close" name="close-outline"></ion-icon>
            </div>
            <div class="modal-creator-left-content">
                <img
                    class="modal-creator-banner"
                    src=${bannerImg}
                    alt="Creator banner image"
                />
                <img
                    class="modal-creator-img"
                    src=${profileImg}
                    alt="Creator profile image"
                />
                <p class="modal-creator-name">${name}</p>
                <p class="creator-join-date">Joined ${joinDate}</p>
                <p class="creator-description">${description}</p>
                <div class="creator-modal-btn-box">
                    <button class="btn btn-full btn-message">Message</button>
                    <button class="btn btn-outline btn-follow">Follow</button>
                </div>
                <hr class="modal-creator-divider"/>
                <ul class="networks-list">
                    <li>
                        <a class="network-link" href=""
                        >
                            <ion-icon
                                class="network-icon"
                                name="logo-facebook"
                            ></ion-icon
                            >
                        </a>
                    </li>
                    <li>
                        <a class="network-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-instagram"
                            ></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a class="network-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-pinterest"
                            ></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a class="network-link" href="">
                            <ion-icon
                                class="network-icon"
                                name="logo-twitter"
                            ></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="modal-creator-right-content">
                <p class="creator-analytics-label">Analytics Overview</p>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="analytics-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${balance} ETH</p>
                        <p>Total Balance</p>
                    </div>
                </div>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="pricetags-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${totalSales} ETH</p>
                        <p>Total Sales</p>
                    </div>
                </div>
                <div class="stat-container analytics-border">
                    <ion-icon
                        class="stat-icon"
                        name="diamond-outline"
                    ></ion-icon>
                    <div class="stat-text">
                        <p>${totalValue} ETH</p>
                        <p>Total NFT Value</p>
                    </div>
                </div>
                <div class="bar-chart-container analytics-border">
                    <canvas class="creator-bar-chart" aria-label="Bar chart showing daily revenue and expanses this week" role="img"></canvas>
                </div>
                <div class="area-chart-container analytics-border">
                    <canvas class="creator-area-chart" aria-label="Area chart showing daily number of views this week" role="img"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-1" aria-label="Doughnut chart showing profit margin" role="img"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-2" aria-label="Doughnut chart showing ratio of NFTs sold" role="img"></canvas>
                </div>
                <div class="doughnut-chart-container analytics-border">
                    <canvas class="creator-doughnut-chart-3" aria-label="Doughnut chart showing ratio of new viewers" role="img"></canvas>
                </div>
            </div>
        </div>
    </div>`;
}
function createCharts(creator) {
    (0, _creatorChartsJs.createBarChart)(creator.revenueData, creator.expanseData);
    (0, _creatorChartsJs.createAreaChart)(creator.viewsData);
    (0, _creatorChartsJs.createDoughnutChart)(".creator-doughnut-chart-1", "Profit Margin", [
        "Profit",
        "Rest of revenue"
    ], creator.profitMargin);
    (0, _creatorChartsJs.createDoughnutChart)(".creator-doughnut-chart-2", "Sales Effectiveness", [
        "Sold",
        "Unsold"
    ], creator.salesEffectiveness);
    (0, _creatorChartsJs.createDoughnutChart)(".creator-doughnut-chart-3", "New Viewership", [
        "New",
        "Returning"
    ], creator.newViewsData);
}

},{"./creator-charts.js":"jmLMM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jmLMM":[function(require,module,exports) {
/////////////////////////////////////////////////////////////
// SET UP CHARTS
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBarChart", ()=>createBarChart);
parcelHelpers.export(exports, "createAreaChart", ()=>createAreaChart);
parcelHelpers.export(exports, "createDoughnutChart", ()=>createDoughnutChart);
const createBarChart = function(revenueData, expanseData) {
    // 1) setup
    const bar_chart_data = {
        labels: [
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT",
            "SUN"
        ],
        datasets: [
            {
                label: "Revenue",
                data: revenueData,
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)"
                ],
                borderColor: [
                    "rgb(75, 192, 192)"
                ],
                borderWidth: 1
            },
            {
                label: "Expanses",
                data: expanseData,
                backgroundColor: [
                    "rgba(255, 69, 0, 0.2)"
                ],
                borderColor: [
                    "rgb(255, 69, 0)"
                ],
                borderWidth: 1
            }
        ]
    };
    let delayed;
    // 2) config
    const bar_chart_config = {
        type: "bar",
        data: bar_chart_data,
        options: {
            animations: {
                duration: 2000
            },
            scales: {
                x: {
                    grid: {
                        color: "rgba(91,88,88,0.3)"
                    }
                },
                y: {
                    grid: {
                        color: "rgba(91,88,88,0.3)"
                    }
                }
            },
            plugins: {
                legend: {
                    align: "center",
                    labels: {
                        boxWidth: 30,
                        color: "#b2abab"
                    }
                }
            }
        }
    };
    // 3) render chart
    const bar_ctx = document.querySelector(".creator-bar-chart").getContext("2d");
    const myBarChart = new Chart(bar_ctx, bar_chart_config);
};
const createAreaChart = function(viewsData) {
    const area_ctx = document.querySelector(".creator-area-chart").getContext("2d");
    const gradient1 = area_ctx.createLinearGradient(0, 30, 0, 170);
    gradient1.addColorStop(1, "rgba(11, 20, 66, 1)");
    gradient1.addColorStop(0, "rgba(75, 192, 192, 0.2)");
    const gradient2 = area_ctx.createLinearGradient(0, 50, 0, 100);
    gradient2.addColorStop(1, "rgba(75, 192, 192,1)");
    gradient2.addColorStop(0, "rgba(75, 192, 192,1)");
    area_ctx.canvas.width = 50;
    area_ctx.canvas.height = 55;
    // 1) setup
    const area_chart_data = {
        labels: [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        datasets: [
            {
                data: viewsData,
                tension: 0.4,
                backgroundColor: gradient1,
                fill: true,
                borderWidth: 1,
                borderColor: gradient2,
                pointRadius: 0
            }
        ]
    };
    // 2) config
    const area_chart_config = {
        type: "line",
        data: area_chart_data,
        responsive: true,
        maintainAspectRatio: false,
        options: {
            scales: {
                x: {
                    grid: {
                        color: "rgba(91,88,88,0.3)"
                    }
                },
                y: {
                    grid: {
                        color: "rgba(91,88,88,0.3)"
                    },
                    ticks: {
                        display: false
                    }
                }
            },
            animations: {
                tension: {
                    duration: 2000
                }
            },
            plugins: {
                title: {
                    padding: {
                        top: 10,
                        bottom: 10
                    },
                    display: true,
                    color: "#ded6d6",
                    font: {
                        size: 14
                    },
                    text: "Daily Views (7 days)"
                },
                legend: {
                    display: false
                }
            }
        }
    };
    // 3) render chart
    const myAreaChart = new Chart(area_ctx, area_chart_config);
};
const createDoughnutChart = function(myCanvas, myTitle, myLabels, myData) {
    // 0) centerText plugin
    const centerText = {
        id: "centerText",
        afterDatasetsDraw (chart, args, options) {
            const { ctx, chartArea: { left, right, top, bottom, width, height } } = chart;
            ctx.save();
            const chartData = chart.data.datasets[0].data[0];
            ctx.font = "bolder 1.6rem Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(`${chartData}%`, width / 2, height / 2 + top + 5);
        // 1.6rem = 16px and so must move text by half its font size, i.e. 8px
        }
    };
    // 1) setup
    const doughnut_chart_data = {
        labels: myLabels,
        datasets: [
            {
                data: myData,
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 99, 132, 0.2)"
                ],
                hoverOffset: 10,
                cutout: "60%"
            }
        ]
    };
    // 2) config
    const doughnut_chart_config = {
        type: "doughnut",
        data: doughnut_chart_data,
        options: {
            rotation: Math.PI * 0.5,
            animation: {
                duration: 2000,
                animateRotate: true,
                easing: "easeInOutCirc"
            },
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                arc: {
                    borderWidth: 2,
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 69, 0)"
                    ]
                }
            },
            layout: {
                padding: {
                    bottom: 10
                }
            },
            plugins: {
                title: {
                    padding: {
                        top: 10,
                        bottom: 10
                    },
                    display: true,
                    color: "#ded6d6",
                    font: {
                        size: 14
                    },
                    text: myTitle
                },
                legend: {
                    display: false
                }
            }
        },
        plugins: [
            centerText
        ]
    };
    // 3) render chart
    const doughnut_ctx = document.querySelector(myCanvas).getContext("2d");
    const myDoughnutChart = new Chart(doughnut_ctx, doughnut_chart_config);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3gXio","jrVHW"], "jrVHW", "parcelRequiree595")

//# sourceMappingURL=index.fbb4b507.js.map
