(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{38:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),r=a(29),i=a.n(r),o=a(8),l=a(2);a(38);var j=function(e){return Object(n.jsxs)("div",{className:"about__container",children:[Object(n.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(n.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},m=a(17),u=a.n(m),d=a(30),h=a(11),v=a(12),b=a(14),p=a(13),O=a(31),x=a.n(O);a(58);var f=function(e){e.id;var t=e.year,a=e.title,s=e.summary,c=e.poster,r=e.genres;return Object(n.jsx)(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:a,summary:s,poster:c,genres:r}},children:Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:c,alt:a,title:a}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:a}),Object(n.jsx)("h5",{className:"movie__year",children:t}),Object(n.jsx)("div",{className:"movie__genres",children:r.map((function(e,t){return Object(n.jsxs)("span",{className:"genres__genre",children:[e,"\xa0\xa0\xa0\xa0\xa0"]},t)}))}),Object(n.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"..."]})]})]})})},_=(a(64),function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:a.map((function(e){return Object(n.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(c.a.Component)),y=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(n.jsx)("span",{children:e.state.title}):null}}]),a}(c.a.Component);a(65);var g=function(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})};var N=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(g,{}),Object(n.jsx)(l.a,{path:"/about",exact:!0,component:j}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:_}),Object(n.jsx)(l.a,{path:"/movie-detail",exact:!0,component:y})]})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.cf7ab655.chunk.js.map