(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(3),r=s.n(i),n=s(14),c=s.n(n),o=s(5),m=s.n(o),d=s(15),l=s(16),u=s(17),j=s(20),v=s(19),p=s(18),b=s.n(p),h=s(2),g=s.n(h);s(47);function O(e){e.id;var t=e.year,s=e.title,i=e.summary,r=e.poster,n=e.genres;return Object(a.jsxs)("div",{class:"movie",children:[Object(a.jsx)("img",{src:r,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:s}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsx)("ul",{className:"movie__genres",children:n.map((function(e,t){return Object(a.jsxs)("li",{className:"genres_genre",children:[t,e]},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[i.slice(0,180),"..."]})]})]})}O.prototype={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var _=O,y=(s(48),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(r.a.Component));c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.cde96d97.chunk.js.map