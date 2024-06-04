(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var n=typeof i;if("string"===n||"number"===n)e.push(i);else if(Array.isArray(i)){if(i.length){var a=r.apply(null,i);a&&e.push(a)}}else if("object"===n){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var o in i)s.call(i,o)&&i[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(i=(function(){return r}).apply(t,[]))&&(e.exports=i)}()},8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8493)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(6495).Z,r=i(2648).Z,n=i(1598).Z,a=i(7273).Z,o=n(i(7294)),l=r(i(3121)),c=i(2675),d=i(139),h=i(8730);i(7238);var p=r(i(9824));let u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/resume/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function j(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function x(e,t,i,r,n,a,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;r.current(s({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let f=o.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:n,qualityInt:l,className:c,imgStyle:d,blurStyle:h,isLazy:p,fill:u,placeholder:j,loading:m,srcString:f,config:_,unoptimized:g,loader:b,onLoadRef:v,onLoadingCompleteRef:k,setBlurComplete:w,setShowAltText:S,onLoad:y,onError:N}=e,E=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=p?"lazy":m,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},E,i,{width:n,height:r,decoding:"async","data-nimg":u?"fill":"1",className:c,loading:m,style:s({},d,h),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&x(e,f,j,v,k,w,g))},[f,j,v,k,w,N,g,t]),onLoad:e=>{let t=e.currentTarget;x(t,f,j,v,k,w,g)},onError:e=>{S(!0),"blur"===j&&w(!0),N&&N(e)}})))}),_=o.forwardRef((e,t)=>{let i,r;var n,{src:x,sizes:_,unoptimized:g=!1,priority:b=!1,loading:v,className:k,quality:w,width:S,height:y,fill:N,style:E,onLoad:R,onLoadingComplete:P,placeholder:C="empty",blurDataURL:A,layout:I,objectFit:M,objectPosition:z,lazyBoundary:W,lazyRoot:D}=e,F=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let G=o.useContext(h.ImageConfigContext),L=o.useMemo(()=>{let e=u||G||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return s({},e,{allSizes:t,deviceSizes:i})},[G]),O=F,T=O.loader||p.default;delete O.loader;let B="__next_img_default"in T;if(B){if("custom"===L.loader)throw Error('Image with src "'.concat(x,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let U=T;T=e=>{let{config:t}=e,i=a(e,["config"]);return U(i)}}if(I){"fill"===I&&(N=!0);let J={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];J&&(E=s({},E,J));let Q={responsive:"100vw",fill:"100vw"}[I];Q&&!_&&(_=Q)}let V="",q=m(S),H=m(y);if("object"==typeof(n=x)&&(j(n)||void 0!==n.src)){let K=j(x)?x.default:x;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(i=K.blurWidth,r=K.blurHeight,A=A||K.blurDataURL,V=K.src,!N){if(q||H){if(q&&!H){let X=q/K.width;H=Math.round(K.height*X)}else if(!q&&H){let Z=H/K.height;q=Math.round(K.width*Z)}}else q=K.width,H=K.height}}let Y=!b&&("lazy"===v||void 0===v);((x="string"==typeof x?x:V).startsWith("data:")||x.startsWith("blob:"))&&(g=!0,Y=!1),L.unoptimized&&(g=!0),B&&x.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(g=!0);let[$,ee]=o.useState(!1),[et,ei]=o.useState(!1),es=m(w),er=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:z}:{},et?{}:{color:"transparent"},E),en="blur"===C&&A&&!$?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:H,blurWidth:i,blurHeight:r,blurDataURL:A}),'")')}:{},ea=function(e){let{config:t,src:i,unoptimized:s,width:r,quality:n,sizes:a,loader:o}=e;if(s)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:s,allSizes:r}=e;if(i){let n=/(^|\s)(1?\d?\d)vw/g,a=[];for(let o;o=n.exec(i);o)a.push(parseInt(o[2]));if(a.length){let l=.01*Math.min(...a);return{widths:r.filter(e=>e>=s[0]*l),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:s,kind:"w"};let c=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:c,kind:"x"}}(t,r,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,s)=>"".concat(o({config:t,src:i,quality:n,width:e})," ").concat("w"===c?e:s+1).concat(c)).join(", "),src:o({config:t,src:i,quality:n,width:l[d]})}}({config:L,src:x,unoptimized:g,width:q,quality:es,sizes:_,loader:T}),eo=x,el={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:O.crossOrigin},ec=o.useRef(R);o.useEffect(()=>{ec.current=R},[R]);let ed=o.useRef(P);o.useEffect(()=>{ed.current=P},[P]);let eh=s({isLazy:Y,imgAttributes:ea,heightInt:H,widthInt:q,qualityInt:es,className:k,imgStyle:er,blurStyle:en,loading:v,config:L,fill:N,unoptimized:g,placeholder:C,loader:T,srcString:eo,onLoadRef:ec,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:ei},O);return o.default.createElement(o.default.Fragment,null,o.default.createElement(f,Object.assign({},eh,{ref:t})),b?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},el))):null)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:s,blurHeight:r,blurDataURL:n}=e,a=s||t,o=r||i,l=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(s&&r?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:s,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(s,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},8493:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return I}});var s=i(5893),r=i(9008),n=i.n(r),a=i(4184),o=i.n(a),l=i(5675),c=i.n(l),d=i(8069),h=i.n(d);let p=e=>"".concat("/resume").concat(e);i(7294);var u=function(e){let{...t}=e,{width:i=24,height:r=24,className:n}=t;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:r,className:n,viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"})})},j=function(e){let{...t}=e,{width:i=24,height:r=24,className:n}=t;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:r,className:n,viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})},m=function(e){let{...t}=e,{width:i=24,height:r=24,className:n}=t;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:r,className:n,viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},x=function(e){let{...t}=e,{width:i=24,height:r=24,className:n}=t;return(0,s.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:i,height:r,className:n,fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414",clipRule:"evenodd",children:(0,s.jsx)("path",{d:"M12 0C5.374 0 0 5.372 0 12c0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.646.085a.678.678 0 00.422-.491c.507-2.382 1.737-8.412 2.198-10.578a.457.457 0 00-.151-.443.47.47 0 00-.465-.082c-2.446.906-9.979 3.732-13.058 4.871a.484.484 0 00-.316.467.483.483 0 00.346.445c1.381.413 3.193.988 3.193.988s.847 2.558 1.288 3.858a.512.512 0 00.352.336.505.505 0 00.474-.121l1.805-1.704s2.084 1.527 3.266 2.369zm-6.423-5.062l.98 3.231.218-2.046 5.941-5.358a.162.162 0 00.019-.22.165.165 0 00-.219-.037l-6.939 4.43z"})})};let f=e=>{let{className:t}=e;return(0,s.jsxs)("div",{className:o()(h().contacts,t),children:[(0,s.jsxs)("p",{className:h().contacts__social,children:[(0,s.jsxs)("a",{href:"https://github.com/Slava-Nik",target:"_blank",rel:"noreferrer",children:[(0,s.jsx)(j,{className:h()["contacts__link-icon"],width:18,height:18}),(0,s.jsx)("span",{children:"GitHub"})]}),(0,s.jsxs)("a",{href:"https://www.linkedin.com/in/slava-nik",target:"_blank",rel:"noreferrer",children:[(0,s.jsx)(m,{className:h()["contacts__link-icon"],width:18,height:18}),(0,s.jsx)("span",{children:"LinkedIn"})]}),(0,s.jsxs)("a",{href:"https://t.me/slava_nik96",target:"_blank",rel:"noreferrer",children:[(0,s.jsx)(x,{className:h()["contacts__link-icon"],width:18,height:18}),(0,s.jsx)("span",{children:"Telegram"})]}),(0,s.jsxs)("a",{href:"mailto:slavanik.dev@gmail.com",rel:"noreferrer",children:[(0,s.jsx)(u,{className:h()["contacts__link-icon"],width:18,height:18}),(0,s.jsx)("span",{children:"Email"})]})]}),(0,s.jsxs)("p",{className:h().contacts__portfolio,children:["Portfolio site: ",(0,s.jsx)("a",{href:"https://slava-nik.github.io/",target:"_blank",rel:"noreferrer",children:"https://slava-nik.github.io"})]}),(0,s.jsx)("a",{className:h()["contacts__download-pdf"],href:p("/resume.pdf"),download:"SlavaNikolaevich_CV.pdf",children:"Download resume in PDF"})]})},_=()=>(0,s.jsxs)("div",{className:h()["author-wrapper"],children:[(0,s.jsxs)("div",{className:h().author,children:[(0,s.jsx)("div",{className:h().author__image,children:(0,s.jsx)(c(),{src:p("/author.jpg"),alt:"Slava Nikolaevich, year 2017",width:140,height:125,priority:!0})}),(0,s.jsxs)("div",{className:h()["author-details"],children:[(0,s.jsx)("h2",{className:h().author__name,children:"Slava Nikolaevich"}),(0,s.jsx)("p",{className:h().author__info,children:"Senior Front-end & Back-end Engineer, 27 y.o"}),(0,s.jsx)("p",{className:h().author__education,children:"Education: B.S in Information systems and technologies"}),(0,s.jsx)("p",{className:h().author__location,children:"Location: Indonesia, Bali (GMT+8).  "}),(0,s.jsx)(f,{className:h()["contacts--details"]})]})]}),(0,s.jsx)(f,{className:h()["contacts--separated"]})]});var g=i(6582),b=i.n(g),v=i(7622),k=i.n(v),w=function(e){let{children:t,isNested:i=!1}=e;return(0,s.jsx)("ul",{className:o()({[k().list]:!i,[k()["list--nested"]]:i}),children:t})};let S=()=>(0,s.jsxs)("div",{className:o()(b().skills,"section"),children:[(0,s.jsx)("h3",{className:"section__title",children:"Description of key skills"}),(0,s.jsxs)("div",{className:b()["skills-module"],children:[(0,s.jsx)("h4",{className:b()["skills-module__title"],children:"Front-end:"}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Responsive, adaptive, cross-browser, PixelPerfect layout by using BEM methodology;"}),(0,s.jsx)("li",{children:"I use SСSS/Stylus with Flexbox, CSS grid, Styled components, CSS modules, Material UI, Ant Design, Bootstrap;"}),(0,s.jsx)("li",{children:"Storybook;"}),(0,s.jsx)("li",{children:"Adapting websites for mobile devices;"}),(0,s.jsx)("li",{children:"Email layout;"}),(0,s.jsx)("li",{children:"PWA;"}),(0,s.jsx)("li",{children:"SPA development with React.js + Redux (thunk, saga, redux-toolkit), GraphQL, including SSR (Next.js);"}),(0,s.jsx)("li",{children:"SPA development with Vue.js + Vuex;"}),(0,s.jsx)("li",{children:"Desktop apps development with Electron (electron-vite);"}),(0,s.jsx)("li",{children:"Javascript (ES5-ES2021), TypeScript, JQuery;"}),(0,s.jsx)("li",{children:"Javascript third party libraries (sliders, validation, navigation, animation etc.);"}),(0,s.jsx)("li",{children:"Loading and rendering performance optimizations, data normalization, smooth interfaces;"}),(0,s.jsx)("li",{children:"Web security (OWASP best practices, security testing tools);"}),(0,s.jsx)("li",{children:"Unit testing: React testing library, Enzyme + Jest;"}),(0,s.jsx)("li",{children:"E2E testing: Cypress, Puppeteer;"}),(0,s.jsx)("li",{children:"WebSockets, Server-Sent Events;"}),(0,s.jsx)("li",{children:"CanvasJS;"}),(0,s.jsx)("li",{children:"json, xml;"}),(0,s.jsx)("li",{children:"svg / png sprites;"}),(0,s.jsx)("li",{children:"Task runner: Gulp. Bundler: Webpack;"}),(0,s.jsx)("li",{children:"Graphics preparation (cutting, editing and optimization of images);"}),(0,s.jsx)("li",{children:"Basic Figma & Sketch & Photoshop skills;"})]})]}),(0,s.jsxs)("div",{className:b()["skills-module"],children:[(0,s.jsx)("h4",{className:b()["skills-module__title"],children:"Back-end:"}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Node.js: Express.js, Nest.js, Koa.js, pure Node.js;"}),(0,s.jsx)("li",{children:"Monolith and micro-services architectures (GRPC and RabbitMQ communication);"}),(0,s.jsx)("li",{children:"Data management: Mongo.db (ORM: Mongoose), PostgreSQL (ORM: Sequelize), Firebase, MySQL, GraphQL, Memcached;"}),(0,s.jsx)("li",{children:"Integration with payment systems (Payture, PayPal, Tinkoff, Yandex.kassa);"}),(0,s.jsx)("li",{children:"CRM integration: Bitrix24;"}),(0,s.jsx)("li",{children:"Web-scrapers development: Complex scrapers using a headless browser (Puppeteer) and usual URL based ones;"}),(0,s.jsx)("li",{children:"Integration with third party services (trello api, vk api, slack api, telegram api, yandex metrika, google analytics, etc);"}),(0,s.jsx)("li",{children:"Cloud Platforms: AWS (EC2, Elastic Load Balancer, AutoScaling group, EBS/EFS, RDS, ElastiCache, Route 53, Lambda, S3, SES), Heroku;"}),(0,s.jsx)("li",{children:"Containerization: Docker;"}),(0,s.jsx)("li",{children:"CI/CD: GitlabCI, CircleCI, Jenkins;"}),(0,s.jsx)("li",{children:"Logging & Monitoring: Sentry;"}),(0,s.jsx)("li",{children:"PHP: Laravel, Wordpress; (I had experience with PHP in the past, but now I prefer to work with Node.js);"})]})]}),(0,s.jsxs)("div",{className:b()["skills-module"],children:[(0,s.jsx)("h4",{className:b()["skills-module__title"],children:"Communicativeness:"}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Languages: English (Fluent/C1), Russian (Native), Ukrainian;"}),(0,s.jsx)("li",{children:"Evaluation of cost and time;"}),(0,s.jsx)("li",{children:"Teamwork experience using gitflow (Github, Bitbucket, Gitlab);"}),(0,s.jsx)("li",{children:"Team leading experience (Front-end CTO ~1.5 years);"}),(0,s.jsx)("li",{children:"Project management in Jira, Trello;"})]})]})]});var y=i(4866),N=i.n(y);let E=()=>(0,s.jsxs)("div",{className:o()("section","work-experience"),children:[(0,s.jsx)("h3",{className:"section__title",children:"Work experience / Oct 2015 — present"}),(0,s.jsxs)("div",{className:N().jobs,children:[(0,s.jsxs)("div",{style:{paddingBottom:20},className:o()(N().job,N()["job--underlined"]),children:[(0,s.jsxs)("h4",{className:N().job__heading,children:[(0,s.jsx)("b",{children:"Startup: R1SE gaming tournament platform"}),(0,s.jsx)("span",{children:" / Jan 2023 - Present"})]}),(0,s.jsx)("p",{className:N().job__position,children:"Position: Senior Full-stack web developer"}),(0,s.jsxs)("p",{className:N().job__description,children:["R1SE is a gaming tournament platform that allows users to compete with players from all over the world.",(0,s.jsx)("br",{}),"For more information about the project, follow the link: ",(0,s.jsx)("a",{href:"https://slava-nik.github.io#recent_projects",target:"_blank",rel:"noreferrer",children:"https://slava-nik.github.io#recent_projects"}),"."]}),(0,s.jsxs)(w,{children:[(0,s.jsxs)("li",{children:["Working on the entire R1SE platform (Including: Main frontend, Admin panel, Client app, Nest.js backend). ",(0,s.jsx)("br",{})," Area of responsibility: frontend architecture, best practices, project performance, new features, bug fixes, code review, and technical solutions;"]}),(0,s.jsx)("li",{children:"Refactored existing repositories, removed unused code and libraries;"}),(0,s.jsx)("li",{children:"Set up proper development work-flow with type-checking, linting and git-hooks for repositories;"}),(0,s.jsx)("li",{children:"Set up Redux architecture (redux-toolkit + redux-sagas) for the Main Frontend with the data normalization technique;"}),(0,s.jsx)("li",{children:"Set up WebSockets architecture using socket.io and redux-sagas;"}),(0,s.jsx)("li",{children:"Created a common library for shared components with Storybook and moved repeated components there;"}),(0,s.jsx)("li",{children:"Optimized bundle sizes and initial loading of the platform;"}),(0,s.jsx)("li",{children:"Developed the core frontend repository functionality of R1SE;"}),(0,s.jsx)("li",{children:"Delivered a large number of functionality to other R1SE repositories;"})]}),(0,s.jsxs)("p",{className:N().job__stack,children:[(0,s.jsx)("b",{className:N()["job__stack-heading"],children:"Project stack: "}),(0,s.jsxs)("span",{className:N()["job__stack-description"],children:[(0,s.jsx)("br",{}),"Main front-end: TypeScript, Next.js, React.js, Redux (Redux-toolkit + Redux sagas middleware), Web-sockets (socket.io), MaterialUI, Storybook, Sentry;",(0,s.jsx)("br",{}),"Admin panel front-end: TypeScript, React.js, Redux, MaterialUI, Formik, Recharts;",(0,s.jsx)("br",{}),"Client windows app: Electron.js, TypeScript, React.js, Redux, MaterialUI;",(0,s.jsx)("br",{}),"Backend app: Node.js (Nest.js + TypeScript), Web-sockets (socket.io), PostgreSQL (sequelize), Redis, Passport.js (passport-steam), Docker; "]})]})]}),(0,s.jsxs)("div",{className:N().job,children:[(0,s.jsxs)("h4",{className:N().job__heading,children:[(0,s.jsx)("b",{children:"Startup: Acroplia"}),(0,s.jsx)("span",{children:" / United States (Remote) "}),(0,s.jsx)("span",{children:" / March 2022 - Nov 2022"})]}),(0,s.jsx)("p",{className:N().job__position,children:"Position: Front-end technical lead & Node.js developer"}),(0,s.jsxs)("p",{className:N().job__description,children:["Acroplia is an extensive and feature-rich communication, collaboration, and community platform for teams, families, and online learning.",(0,s.jsx)("br",{}),"For more information about the project, follow the link: ",(0,s.jsx)("a",{href:"https://slava-nik.github.io#recent_projects",target:"_blank",rel:"noreferrer",children:"https://slava-nik.github.io#recent_projects"}),"."]}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Frontend tech lead responsibilities (Described below);"}),(0,s.jsx)("li",{children:"Re-writing the existing monolith Kotlin backend to a new micro-services Node.js backend with the usage of Nest.js framework and TypeScript;"}),(0,s.jsx)("li",{children:"Integration of the new micro-services backend to the existing frontend;"})]})]}),(0,s.jsxs)("div",{className:N().job,children:[(0,s.jsxs)("h4",{className:N().job__heading,children:[(0,s.jsx)("b",{children:"Startup: Acroplia"}),(0,s.jsx)("span",{children:" / United States (Remote) "}),(0,s.jsx)("span",{children:" / May 2021 - March 2022"})]}),(0,s.jsx)("p",{className:N().job__position,children:"Position: Front-end technical lead"}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Working on the entire frontend part of the platform (all Acroplia modules). I was responsible for: performance optimizations, refactoring, new features, bug fixes, and technical solutions;"}),(0,s.jsx)("li",{children:"Leading a team of 6 software engineers to ensure project milestones are achieved on time;"}),(0,s.jsx)("li",{children:"Code review and help to team members;"}),(0,s.jsx)("li",{children:"Team members performance evaluation;"}),(0,s.jsx)("li",{children:"Tasks estimation and assistance to managers in the preparation of sprints;"}),(0,s.jsx)("li",{children:"Collaboration with the design team, QA team, Kotlin backend team, and DevOps engineers;"}),(0,s.jsx)("li",{children:"Conducting technical interviews with front-end and Node.js candidates. Conducted over 10 technical interviews;"})]})]}),(0,s.jsxs)("div",{className:o()(N().job,N()["job--underlined"]),children:[(0,s.jsxs)("h4",{className:N().job__heading,children:[(0,s.jsx)("b",{children:"Startup: Acroplia"}),(0,s.jsx)("span",{children:" / United States (Remote) "}),(0,s.jsx)("span",{children:" / Sept 2020 - May 2021"})]}),(0,s.jsx)("p",{className:N().job__position,children:"Position: Senior Front-end developer (React.js)"}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Delivered a large number of features to Acroplia modules: notes, task manager, calls, chats, connect-scene, Acroplia drive, and idea boards;"}),(0,s.jsx)("li",{children:"Resolved an extensive amount of different-level bugs across the entire platform;"}),(0,s.jsx)("li",{children:"Re-factored a decent part of the code base;"}),(0,s.jsx)("li",{children:"Integrated Sentry logging system to the project;"}),(0,s.jsx)("li",{children:"Integrated Storybook UI tool for reusable components;"}),(0,s.jsx)("li",{children:"Worked on critical rendering path to improve the loading performance of the platform. Significantly reduced the web-pack bundle size of the platform (down to 6 times); Lazy-loaded not-urgent components, libraries, data, and resources across the platform;"}),(0,s.jsx)("li",{children:"Spotted performantly in-efficient parts in crucial Acroplia modules (collaborative notes, video calls, chats), significantly improved their rendering performance;"}),(0,s.jsx)("li",{children:"Actively worked with the profiling tools (Chrome performance, React Profiler, wdyr, LightHouse, Memory leaks tools) to detect issues and improve the performance;"}),(0,s.jsx)("li",{children:"Improved the rendering performance almost in every Acroplia module: connect-scene, notes, task manager, idea boards, chat, video calls, quests, and Acroplia drive;"})]}),(0,s.jsxs)("p",{className:N().job__stack,children:[(0,s.jsx)("b",{className:N()["job__stack-heading"],children:"Project stack: "}),(0,s.jsxs)("span",{className:N()["job__stack-description"],children:["React.js, Redux, Webpack, Node.js (SSR), Redis, Web-sockets, AWS, Docker, Jitsi (Video conferencing), Quill.js (Notes), Konva.js (Canvas idea-board), MaterialUI, Storybook, etc; ",(0,s.jsx)("br",{})," Acroplia Drive backend: Node.js, Mongo.db (Mongoose); ",(0,s.jsx)("br",{})," Micro-services Node.js backend: Nest.js + TypeScript, GRPC, RabbitMQ, TypeORM, PostgreSQL;"]})]})]}),(0,s.jsxs)("div",{className:o()(N().job,N()["job--underlined"]),children:[(0,s.jsxs)("h4",{className:N().job__heading,children:[(0,s.jsx)("b",{children:"Startup: Nomad Calendar"}),(0,s.jsx)("span",{children:" / United States (Remote) "}),(0,s.jsx)("span",{children:" / April 2020 - Sept 2020"})]}),(0,s.jsx)("p",{className:N().job__position,children:"Position: Full-stack web developer (Vue.js, Node.js)"}),(0,s.jsxs)("p",{className:N().job__description,children:["Nomad Calendar is a progressive web application for travelers.",(0,s.jsx)("br",{}),"For more information about the project, follow the link: ",(0,s.jsx)("a",{href:"https://slava-nik.github.io#recent_projects",target:"_blank",rel:"noreferrer",children:"https://slava-nik.github.io#recent_projects"}),"."]}),(0,s.jsx)("p",{className:N()["job__task-list-title"],children:"Successfully developed and released the crucial part of Nomad Calendar PWA:"}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Welcome screen view for initial PWA load;"}),(0,s.jsx)("li",{children:"Main screen view: travel slider, friends on a trip, travel plans functionality, notifications, bottom menu;"}),(0,s.jsx)("li",{children:"Group view: background images, group members, events calendar timeline share;"}),(0,s.jsx)("li",{children:"Map view: events calendar, core google map integration logic (pinpoints, encounters);"}),(0,s.jsx)("li",{children:"My Groups view;"}),(0,s.jsx)("li",{children:"Profile view: travel plans;"}),(0,s.jsx)("li",{children:"My timeline view;"}),(0,s.jsx)("li",{children:"Share timeline view;"}),(0,s.jsx)("li",{children:"Google Calendar integration;"}),(0,s.jsx)("li",{children:"Destination view: travel advisories (travel.state.gov) Node.js parser and API, Coronavirus statistics Node.js parser and API;"}),(0,s.jsx)("li",{children:"Generation of custom OG social image for every timeline share link via Selenium;"})]}),(0,s.jsxs)("p",{className:N().job__stack,children:[(0,s.jsx)("b",{className:N()["job__stack-heading"],children:"Project stack: "}),(0,s.jsx)("span",{className:N()["job__stack-description"],children:"PWA, Vue.js, Vuex, responsive web, Node.js + Express.js, MongoDB, AWS (S3), Docker, Google OAuth, Google Calendar API;"})]})]}),(0,s.jsxs)("div",{className:o()(N().job,N()["job--underlined"]),children:[(0,s.jsxs)("h4",{className:N().job__heading,children:[(0,s.jsx)("b",{children:"Startup: Good Gantt"}),(0,s.jsx)("span",{children:" / Dec 2018 - April 2020"})]}),(0,s.jsx)("p",{className:N().job__position,children:"Position: Full-stack web developer (React.js, Node.js)"}),(0,s.jsxs)("p",{className:N().job__description,children:["GoodGantt is a planning tool for Trello, that was created to simplify the process of project planning.",(0,s.jsx)("br",{}),"For more information about the project, follow the link: ",(0,s.jsx)("a",{href:"https://slava-nik.github.io#recent_projects",target:"_blank",rel:"noreferrer",children:"https://slava-nik.github.io#recent_projects"}),"."]}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Investigated and resolved multiple crucial performance issues in the existing codebase of Good Gantt;"}),(0,s.jsx)("li",{children:"Successfully delivered the major part of Good Gantt functionality: real-time collaboration, milestones, groups (creation and sorting), etc;"}),(0,s.jsx)("li",{children:"Delivered crucial E2E tests for core functionality using Cypress;"}),(0,s.jsxs)("li",{children:["Successfully implemented and delivered the monetization part of Good Gantt:",(0,s.jsxs)(w,{isNested:!0,children:[(0,s.jsx)("li",{children:"Tariff plans functionality;"}),(0,s.jsx)("li",{children:"Teams functionality (The project manager can pay for places in his team, and add different users to the team. Only the users will get access to Gantt App);"}),(0,s.jsx)("li",{children:"Billing history page;"}),(0,s.jsx)("li",{children:"Promo functionality;"})]})]}),(0,s.jsx)("li",{children:"Accomplished a custom integration with the Payture payment system (Custom widget, email cheques, recurrent payments for subscriptions);"})]}),(0,s.jsxs)("p",{className:N().job__stack,children:[(0,s.jsx)("b",{className:N()["job__stack-heading"],children:"Project stack: "}),(0,s.jsx)("span",{className:N()["job__stack-description"],children:"React.js, Redux, Firebase, Node.js + Express.js, MongoDB, Web-sockets, RabbitMQ, Docker, Payture payment system, Trello API;"})]})]}),(0,s.jsxs)("div",{className:o()(N().job,N()["job--underlined"]),children:[(0,s.jsxs)("h4",{className:N().job__heading,children:[(0,s.jsx)("b",{children:"Project: HR Network"}),(0,s.jsx)("span",{children:" / Sept 2018 - Dec 2018"})]}),(0,s.jsx)("p",{className:N().job__position,children:"Position: Full-stack web developer"}),(0,s.jsxs)("p",{className:N().job__description,children:["HR Network Platform helps enterprise clients find IT specialists.",(0,s.jsx)("br",{}),"For more information about the project, follow the link: ",(0,s.jsx)("a",{href:"https://slava-nik.github.io#recent_projects",target:"_blank",rel:"noreferrer",children:"https://slava-nik.github.io#recent_projects"}),"."]}),(0,s.jsxs)(w,{children:[(0,s.jsx)("li",{children:"Re-built the server-side part of the application using Node.js, Express, and MongoDB;"}),(0,s.jsx)("li",{children:"Implemented Multilingual Support;"}),(0,s.jsx)("li",{children:"Re-factored the front-end part of the website;"}),(0,s.jsx)("li",{children:"Implemented mobile responsive layout;"}),(0,s.jsx)("li",{children:"Implemented dynamic radar animation;"}),(0,s.jsx)("li",{children:"Implemented email layouts, and set up automatic mailing to users via Amazon Email Service (AWS SES) integration;"}),(0,s.jsx)("li",{children:"Deployed the project to AWS EC2 instance;"})]}),(0,s.jsxs)("p",{className:N().job__stack,children:[(0,s.jsx)("b",{className:N()["job__stack-heading"],children:"Project stack: "}),(0,s.jsx)("span",{className:N()["job__stack-description"],children:"JavaScript, SCSS, responsive web, Node.js + express, Mongo.db, AWS (EC2, Amazon SES);"})]})]}),(0,s.jsxs)("div",{className:o()(N().job,N()["job--underlined"]),children:[(0,s.jsxs)("h4",{className:N().job__heading,children:[(0,s.jsx)("b",{children:"Work experience"}),(0,s.jsx)("span",{children:" / Oct 2015 - Sept 2018"})]}),(0,s.jsx)("p",{className:N().job__position,children:"Position: Full-stack web developer"}),(0,s.jsxs)("p",{className:N().job__description,children:["I","'","ve been developing front-end and back-end for web applications. ",(0,s.jsx)("br",{}),"My projects are available via the link:"," ",(0,s.jsx)("a",{href:"https://slava-nik.github.io#recent_projects",target:"_blank",rel:"noreferrer",children:"https://slava-nik.github.io#recent_projects"}),"."]}),(0,s.jsxs)("p",{className:N().job__stack,children:[(0,s.jsx)("b",{className:N()["job__stack-heading"],children:"Stack: "}),(0,s.jsx)("span",{className:N()["job__stack-description"],children:"Javascript, TypeScript, React.js, Redux, Material UI, SCSS, Node.js, Express, MongoDb, PostgreSQL, Docker"})]})]})]})]});var R=i(279),P=i.n(R);let C=e=>{let{top:t=!0,bottom:i=!0,className:r=""}=e;return(0,s.jsx)("div",{className:o()(P().separator,{[P()["separator--top"]]:t,[P()["separator--bottom"]]:i,[r]:r})})},A=()=>(0,s.jsxs)("div",{className:"resume",children:[(0,s.jsx)(_,{}),(0,s.jsx)(C,{top:!1}),(0,s.jsx)(S,{}),(0,s.jsx)(C,{className:"resume__separator--skills"}),(0,s.jsx)(E,{})]});function I(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:["I",(0,s.jsx)("title",{children:"Slava Nikolaevich | Resume"}),(0,s.jsx)("meta",{name:"description",content:"Senior Front-end & Back-end Engineer. Slava Nikolaevich, PDF resume"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:p("/favicon.png")})]}),(0,s.jsx)("div",{className:"app",children:(0,s.jsx)(A,{})})]})}},8069:function(e){e.exports={"author-wrapper":"AuthorInfo_author-wrapper__ONI3K",author:"AuthorInfo_author__wLD2k","author-details":"AuthorInfo_author-details__m33DI",author__name:"AuthorInfo_author__name__l9ti8",author__info:"AuthorInfo_author__info__vjHLG",contacts:"AuthorInfo_contacts__Cuej_","contacts--details":"AuthorInfo_contacts--details__sxVww","contacts--separated":"AuthorInfo_contacts--separated__oXrJe","contacts__link-icon":"AuthorInfo_contacts__link-icon____J60",contacts__portfolio:"AuthorInfo_contacts__portfolio__s0Jaz","contacts__download-pdf":"AuthorInfo_contacts__download-pdf__4Focm",contacts__social:"AuthorInfo_contacts__social__pE5T_",author__image:"AuthorInfo_author__image__2ErMt"}},6582:function(e){e.exports={"skills-module":"Skills_skills-module__MLe2S","skills-module__title":"Skills_skills-module__title__TvyNt"}},4866:function(e){e.exports={"list-title":"WorkExperience_list-title__taxj8",jobs:"WorkExperience_jobs__sVlqW",job:"WorkExperience_job__DIcBO","job--underlined":"WorkExperience_job--underlined__fmca8",job__heading:"WorkExperience_job__heading__qpSI6",job__position:"WorkExperience_job__position__eXYKm",job__description:"WorkExperience_job__description__8d3GW","job__task-list-title":"WorkExperience_job__task-list-title__Z2FqE",job__stack:"WorkExperience_job__stack__KY87O","job__stack-heading":"WorkExperience_job__stack-heading__nAVSB","job__stack-description":"WorkExperience_job__stack-description__pDykw"}},7622:function(e){e.exports={list:"List_list__GFomD","list--nested":"List_list--nested__Ykkst"}},279:function(e){e.exports={separator:"Separator_separator__NoOoE","separator--top":"Separator_separator--top__I_X3v","separator--bottom":"Separator_separator--bottom__2rRMC"}},9008:function(e,t,i){e.exports=i(3121)},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);