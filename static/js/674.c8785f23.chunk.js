"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{674:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(861),r=n(439),s=n(757),c=n.n(s),i=n(791),o=n(689),l=n(87),u=n(243),f=n(686),p=n.n(f),d="HomePage_list__99c8-",m="HomePage_listItem__Pg2ha",h="HomePage_title__UFLA3",_="HomePage_loading__ZeHsb",g=n(184),v=function(){var e=(0,i.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,i.useState)(!1),v=(0,r.Z)(f,2),x=v[0],k=v[1],w=(0,o.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,u.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("4219f818c3b647ef6b7c71c399226158"));case 4:t=e.sent,s(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),p().Notify.failure("Oops, something went wrong",{position:"center-center",fontSize:"16px"}),k(!1);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,g.jsxs)("main",{children:[(0,g.jsx)("p",{className:h,children:"Trending today"}),x&&(0,g.jsx)("div",{className:_,children:"Loading..."}),(0,g.jsxs)("ul",{className:d,children:[null!==n&&n.results.map((function(e){return(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{state:{from:w},to:"/movies/".concat(e.id),className:m,children:(0,g.jsx)("span",{children:e.title})})},e.id)})),";"]})]})}}}]);
//# sourceMappingURL=674.c8785f23.chunk.js.map