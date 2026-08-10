/* @ds-bundle: {"namespace":"DDS","components":[{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"Card","sourcePath":"components/general/Card/Card.jsx"},{"name":"Footer","sourcePath":"components/general/Footer/Footer.jsx"},{"name":"InfoCard","sourcePath":"components/general/InfoCard/InfoCard.jsx"},{"name":"PageHeader","sourcePath":"components/general/PageHeader/PageHeader.jsx"},{"name":"Tabs","sourcePath":"components/general/Tabs/Tabs.jsx"},{"name":"Tag","sourcePath":"components/general/Tag/Tag.jsx"},{"name":"Textarea","sourcePath":"components/general/Textarea/Textarea.jsx"},{"name":"TextInput","sourcePath":"components/general/TextInput/TextInput.jsx"}],"sourceHashes":{"components/general/Button/Button.jsx":"f069d85100bc","components/general/Button/Button.d.ts":"fb27f83e198b","components/general/Button/Button.prompt.md":"702609369b11","components/general/Card/Card.jsx":"f302f0d935b1","components/general/Card/Card.d.ts":"a90153d19ff9","components/general/Card/Card.prompt.md":"e16ab075b863","components/general/Footer/Footer.jsx":"91a66c2f3380","components/general/Footer/Footer.d.ts":"e74a81c65d9e","components/general/Footer/Footer.prompt.md":"d40894627cab","components/general/InfoCard/InfoCard.jsx":"7a26af0dd3af","components/general/InfoCard/InfoCard.d.ts":"46e7d73ceab4","components/general/InfoCard/InfoCard.prompt.md":"98bf6c14e126","components/general/PageHeader/PageHeader.jsx":"538ee94b8eba","components/general/PageHeader/PageHeader.d.ts":"a9872755a07b","components/general/PageHeader/PageHeader.prompt.md":"659cb6c0561b","components/general/Tabs/Tabs.jsx":"077edb8c1818","components/general/Tabs/Tabs.d.ts":"126ccea4a24a","components/general/Tabs/Tabs.prompt.md":"16fc4ce9f7cf","components/general/Tag/Tag.jsx":"137c5f35e6f3","components/general/Tag/Tag.d.ts":"71b548907350","components/general/Tag/Tag.prompt.md":"7574fc50502f","components/general/Textarea/Textarea.jsx":"c080043bf5a4","components/general/Textarea/Textarea.d.ts":"09ec17c3d7ca","components/general/Textarea/Textarea.prompt.md":"5145e23d27e5","components/general/TextInput/TextInput.jsx":"ce62ad82bd8b","components/general/TextInput/TextInput.d.ts":"96491e46582c","components/general/TextInput/TextInput.prompt.md":"b23b60d137ab"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var DDS = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx10(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs6(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx10;
      module.exports.jsxs = jsxs6;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs6 : jsx10)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.js
  var index_exports = {};
  __export(index_exports, {
    Button: () => Button,
    Card: () => Card,
    Footer: () => Footer,
    InfoCard: () => InfoCard,
    PageHeader: () => PageHeader,
    Tabs: () => Tabs,
    Tag: () => Tag,
    TextInput: () => TextInput,
    Textarea: () => Textarea
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  function Tag({ children, variant = "accent" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `dds-tag dds-tag--${variant}`, children });
  }
  function Button({ children, variant = "solid", href, ...rest }) {
    const className = `dds-button dds-button--${variant}`;
    if (href !== void 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className, href, ...rest, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className, ...rest, children });
  }
  function Card({ children, padding = "default" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `dds-card dds-card--${padding}`, children });
  }
  function PageHeader({ tag, title, dek }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: "dds-page-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Tag, { children: tag }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "dds-page-header__title", children: title }),
      dek && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "dds-page-header__dek", children: dek }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dds-page-header__rule" })
    ] });
  }
  function InfoCard({ label, value, detail }) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card, { padding: "compact", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "dds-info-card__label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "dds-info-card__value", children: value }),
      detail && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "dds-info-card__detail", children: detail })
    ] });
  }
  function TextInput({ label, id, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "dds-field", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { className: "dds-field__label", htmlFor: id, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { id, className: "dds-field__control", ...rest })
    ] });
  }
  function Textarea({ label, id, rows = 5, ...rest }) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "dds-field", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "dds-field__label", htmlFor: id, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("textarea", { id, rows, className: "dds-field__control", ...rest })
    ] });
  }
  function Tabs({ items, ariaLabel = "Main" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("nav", { "aria-label": ariaLabel, className: "dds-tabs", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "a",
      {
        href: item.href,
        "aria-current": item.active ? "page" : void 0,
        className: `dds-tabs__item ${item.active ? "dds-tabs__item--active" : ""}`,
        children: item.label
      },
      item.href
    )) });
  }
  function Footer({ metaLine, closingLine }) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("footer", { className: "dds-footer", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "dds-footer__inner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: metaLine }),
      closingLine && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "dds-footer__closing", children: closingLine })
    ] }) });
  }
  return __toCommonJS(index_exports);
})();
window.DDS=DDS.__dsMainNs?Object.assign({},DDS,DDS.__dsMainNs,{__dsMainNs:undefined}):DDS;
