"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[890],{890:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var i=n(861),s=n(439),r=n(757),a=n.n(r),c=n(791),o=n(689),l=n(87),d=n(243),u=n(686),v=n.n(u),h="MovieDetails_loading__OXCBw",p="MovieDetails_mainContainer__1cmXu",f="MovieDetails_container__Ys+c9",m="MovieDetails_textContainer__gU-EJ",_="MovieDetails_secondContainer__p8Um4",x="MovieDetails_link__U+v+7",j="MovieDetails_mainTitle__nLeSq",w="MovieDetails_secondTitle__-5rND",g="MovieDetails_thirdTitle__gAhNG",b="MovieDetails_btnGoBack__wj+OK",N="Cast_cardLst__L8EkT",k="Cast_title__rq9b2",Z=n(184),D=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)(null),n=(0,s.Z)(t,2),r=n[0],l=n[1],u=(0,c.useState)(!1),h=(0,s.Z)(u,2),p=h[0],f=h[1];return(0,c.useEffect)((function(){if(e){var t=function(){var t=(0,i.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(!0),t.next=4,d.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(e,"/credits?api_key=").concat("4219f818c3b647ef6b7c71c399226158"));case 4:n=t.sent,l(n.data),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),v().Notify.failure("Oops, something went wrong",{position:"center-center",fontSize:"16px"}),f(!1);case 12:return t.prev=12,f(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),(0,Z.jsxs)("ul",{className:N,children:[p&&(0,Z.jsx)("li",{children:"Loading..."}),null!==r&&r.cast.slice(0,6).map((function(e){return(0,Z.jsxs)("li",{className:k,children:[(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name}),(0,Z.jsx)("div",{children:e.character}),(0,Z.jsx)("div",{children:e.name})]},e.id)}))]})},S="Reviews_review__g0Nb8",y="Reviews_reviewItem__beLBz",M=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)([]),n=(0,s.Z)(t,2),r=n[0],l=n[1],u=(0,c.useState)(!1),h=(0,s.Z)(u,2),p=h[0],f=h[1];return(0,c.useEffect)((function(){if(e){var t=function(){var t=(0,i.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(!0),t.next=4,d.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(e,"/reviews?api_key=").concat("4219f818c3b647ef6b7c71c399226158"));case 4:n=t.sent,l(n.data.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),v().Notify.failure("Oops, something went wrong",{position:"center-center",fontSize:"16px"}),f(!1);case 12:return t.prev=12,f(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),(0,Z.jsxs)("ul",{className:S,children:[!p&&r.length>0?r.map((function(e){return(0,Z.jsxs)("li",{className:y,children:[(0,Z.jsxs)("div",{children:["Author: ",e.author]}),(0,Z.jsx)("br",{}),(0,Z.jsx)("div",{children:e.content})]},e.id)})):null,p||0!==r.length?null:(0,Z.jsx)("li",{children:"We don't have any reviews for this movie"})]})},O=function(){var e,t,n,r,u,N,k=(0,o.UO)().movieId,S=(0,o.TH)(),y=null!==(e=null===(t=S.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",O=(0,c.useState)(null),C=(0,s.Z)(O,2),L=C[0],U=C[1],I=(0,c.useState)(!1),A=(0,s.Z)(I,2),E=A[0],T=A[1];return(0,c.useEffect)((function(){if(k){var e=function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,d.Z.get("".concat("https://api.themoviedb.org/3/movie/").concat(k,"?api_key=").concat("4219f818c3b647ef6b7c71c399226158"));case 4:t=e.sent,U(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),v().Notify.failure("Oops, something went wrong",{position:"center-center",fontSize:"16px"}),T(!1);case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[k]),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{children:[E&&(0,Z.jsx)("div",{className:h,children:"Loading..."}),(0,Z.jsx)(l.rU,{to:y,className:b,children:"Go back"}),L&&(0,Z.jsx)("div",{className:p,children:(0,Z.jsxs)("div",{className:f,children:[(0,Z.jsx)("div",{children:(0,Z.jsx)("img",{src:L.poster_path?"https://image.tmdb.org/t/p/w500".concat(L.poster_path):"components/Img/defaultImg.webp",width:250,alt:"poster"})}),(0,Z.jsxs)("div",{className:m,children:[(0,Z.jsxs)("div",{className:j,children:[L.title," (",new Date(L.release_date).getFullYear(),")"]}),(0,Z.jsxs)("div",{children:["User Score ",Math.round(L.popularity)," %"]}),(0,Z.jsx)("div",{className:w,children:"Overview"}),(0,Z.jsx)("div",{children:L.overview}),(0,Z.jsx)("div",{className:w,children:"Genres"}),(0,Z.jsx)("div",{children:L.genres.map((function(e){return e.name})).join(" ")})]})]})})]}),(0,Z.jsxs)("div",{className:_,children:[(0,Z.jsx)("div",{className:g,children:"Additional information"}),(0,Z.jsx)(l.OL,{to:"cast",state:{from:null!==(n=null===(r=S.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/"},className:x,children:"Cast"}),(0,Z.jsx)(l.OL,{to:"reviews",state:{from:null!==(u=null===(N=S.state)||void 0===N?void 0:N.from)&&void 0!==u?u:"/"},className:x,children:"Reviews"}),(0,Z.jsx)(c.Suspense,{fallback:(0,Z.jsx)("div",{children:"Loading..."}),children:(0,Z.jsxs)(o.Z5,{children:[(0,Z.jsx)(o.AW,{path:"cast",element:(0,Z.jsx)(D,{})}),(0,Z.jsx)(o.AW,{path:"reviews",element:(0,Z.jsx)(M,{})})]})})]})]})}}}]);
//# sourceMappingURL=890.4df456ee.chunk.js.map