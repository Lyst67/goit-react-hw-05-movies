"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[332],{197:function(t,e,n){n.d(e,{Nj:function(){return o},TP:function(){return p},tx:function(){return m},xL:function(){return c},zi:function(){return f},zv:function(){return l}});var r=n(861),a=n(757),u=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s={method:"GET",options:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTI3MGJmODZhYjExZTBjY2FmN2YzOGVmMWQ5OWIyZCIsInN1YiI6IjY0YzI0OTY5MmYxYmUwMDE0ZWY2NGE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5RUI4QQa76RdjJg1YwJtQVcsEnpw3DEDCBEkEwrDLQ"}},c={baseUrl:"https://image.tmdb.org/t/p/w500/",defaultImg:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},o=function(){var t=(0,r.Z)(u().mark((function t(){var e,n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s,t.next=3,i.Z.get("trending/movie/day",e);case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s,t.next=3,(0,i.Z)("movie/".concat(e),n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s,t.next=3,(0,i.Z)("search/movie?query=".concat(e),n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s,t.next=3,(0,i.Z)("movie/".concat(e,"/credits?"),n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s,t.next=3,(0,i.Z)("movie/".concat(e,"/reviews?"),n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},368:function(t,e,n){var r=n(689),a=n(87),u=n(953),i=n(184);e.Z=function(t){var e=t.movies,n=(0,r.TH)();return(0,i.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.title;return(0,i.jsx)("li",{className:u.Z.list_item,children:(0,i.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:n},children:r})},e)}))})}},332:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(861),a=n(439),u=n(757),i=n.n(u),s=n(791),c="Movies_container__+-Cnt",o="Movies_form_thumb__dXKeb",p="Movies_form__4ow+Z",f="Movies_input__KrUqs",l="Movies_form_btn__WLFwl",m=n(184),v=function(t){var e=t.onSubmit,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],i=r[1];return(0,m.jsxs)("form",{className:p,onSubmit:function(t){t.preventDefault(),""!==u?e(u.toLowerCase().trim()):alert("Fill in the field, please!")},children:[(0,m.jsx)("input",{className:f,type:"text",onChange:function(t){var e=t.target.value;i(e)}}),(0,m.jsx)("button",{className:l,type:"submit",children:"Search"})]})},h=n(87),d=n(197),x=n(368),_=function(){var t,e=(0,s.useState)([]),n=(0,a.Z)(e,2),u=n[0],p=n[1],f=(0,s.useState)(!1),l=(0,a.Z)(f,2),_=l[0],Z=l[1],b=(0,h.lr)(),w=(0,a.Z)(b,2),j=w[0],y=w[1],g=null!==(t=j.get("query"))&&void 0!==t?t:"";return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p([]),Z(!1),t.prev=2,t.next=5,(0,d.zi)(g);case 5:if((e=t.sent).results.length){t.next=9;break}return alert("Opps! There are no movies for your request! Please try again!"),t.abrupt("return");case 9:p(e.results),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),Z(t.t0.response.data);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}""!==g&&function(){t.apply(this,arguments)}()}),[g]),(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)("div",{className:o,children:(0,m.jsx)(v,{onSubmit:function(t){y({query:t})}})}),(0,m.jsxs)("div",{children:[_&&(0,m.jsx)("h1",{children:_}),(0,m.jsx)(x.Z,{movies:u})]})]})}},953:function(t,e){e.Z={container:"Home_container__w+u63",title:"Home_title__L087v",list_item:"Home_list_item__bCGur"}}}]);
//# sourceMappingURL=332.41a03c7a.chunk.js.map