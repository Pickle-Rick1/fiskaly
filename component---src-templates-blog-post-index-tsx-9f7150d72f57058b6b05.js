(self.webpackChunkfisklay=self.webpackChunkfisklay||[]).push([[505],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function l(t,r,a){return o()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),l=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||l(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7433:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(5444),l=r(6725),a=r(4751);t.default=function(e){var t,r=e.data,s=e.location,c=r.mdx,u=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",i=r.previous,p=r.next;return n.createElement(a.Ar,{location:s,title:u},n.createElement(a.pQ,{title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt}),n.createElement(a.W2,null,n.createElement("article",{className:"article",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",{className:"col-start-1 grid grid-cols-blog"},n.createElement("h1",{className:"font-black text-skin-fg text-4xl md:text-6xl",itemProp:"headline"},c.frontmatter.title,n.createElement("span",{className:"ml-1 text-skin-primary"},".")),n.createElement("div",{className:"col-start-1 col-span-2"},n.createElement("dl",{className:"font-mono mt-8 text-skin-fg-muted"},n.createElement("dt",{className:"text-sm"},"Last update"),n.createElement("dd",{className:"text-lg"},c.frontmatter.date)))),n.createElement("section",{itemProp:"articleBody",className:"prose prose-xl mt-8 mx-auto"},n.createElement(l.MDXRenderer,null,c.body))),n.createElement("nav",{className:"mt-8 pt-16 grid grid-cols-blog border-t border-skin-base-muted"},n.createElement("ul",{className:"col-start-2 text-lg flex flex-wrap justify-between"},n.createElement("li",null,i&&n.createElement(o.Link,{to:i.fields.slug,rel:"prev",className:"py-2"},"← ",n.createElement("span",null,i.frontmatter.order,".")," ",i.frontmatter.title)),n.createElement("li",null,p&&n.createElement(o.Link,{to:p.fields.slug,rel:"next",className:"py-2"},n.createElement("span",null,p.frontmatter.order,".")," ",p.frontmatter.title," →"))))))}},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),l=r(9713),a=r(7316),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=a(e,s),c=f(t),m=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:p},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return i.createElement(m,u({},l))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-tsx-9f7150d72f57058b6b05.js.map