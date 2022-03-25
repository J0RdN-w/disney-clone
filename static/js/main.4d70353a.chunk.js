(this["webpackJsonpdisney-clone"]=this["webpackJsonpdisney-clone"]||[]).push([[0],{19:function(n,e,i){},27:function(n,e,i){"use strict";i.r(e);var t,a,r,c,s,o=i(1),l=i.n(o),d=i(7),p=i.n(d),b=(i(19),i(2)),g=i(3),j=i(4),x=i(5),m=Object(x.b)({name:"viewer",initialState:{hover:"",route:"/",title:["disney","pixar","marvel","starwars","national"],images:["/disney-clone/images/viewers-disney.png","/disney-clone/images/viewers-pixar.png","/disney-clone/images/viewers-marvel.png","/disney-clone/images/viewers-starwars.png","/disney-clone/images/viewers-national.png"],videos:["/disney-clone/videos/1564674844-disney.mp4","/disney-clone/videos/1564676714-pixar.mp4","/disney-clone/videos/1564676115-marvel.mp4","/disney-clone/videos/1608229455-star-wars.mp4","/disney-clone/videos/1564676296-national-geographic.mp4"]},reducers:{setHover:function(n,e){n.hover=e.payload},changeRoute:function(n,e){n.route=e.payload}}}),h=m.actions,u=h.setHover,O=h.changeRoute,v=function(n){return n.viewer.route},f=function(n){return n.viewer.hover},y=function(n){return n.viewer.images},w=function(n){return n.viewer.videos},k=function(n){return n.viewer.title},L=m.reducer,z=Object(x.b)({name:"user",initialState:{name:"",email:"",avatar:""},reducers:{setUserLogin:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.avatar=e.payload.avatar},setSignOut:function(n){n.name=null,n.email=null,n.avatar=null}}}),C=z.actions,E=C.setUserLogin,N=C.setSignOut,R=function(n){return n.user.name},S=function(n){return n.user.email},A=function(n){return n.user.avatar},I=z.reducer,q=i(0);var H,M,T,F=function(){var n=Object(j.c)(R),e=Object(j.c)(A),i=(Object(j.c)(S),Object(j.b)());return Object(q.jsxs)(P,{children:[Object(q.jsx)(W,{src:"./images/logo.svg"}),n?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(B,{children:[Object(q.jsxs)("a",{href:"/",children:[Object(q.jsx)("img",{src:"./images/home-icon.svg",alt:"home icon"}),Object(q.jsx)("span",{children:"HOME"})]}),Object(q.jsxs)("a",{href:"/",children:[Object(q.jsx)("img",{src:"./images/search-icon.svg",alt:"home icon"}),Object(q.jsx)("span",{children:"SEARCH"})]}),Object(q.jsxs)("a",{href:"/",children:[Object(q.jsx)("img",{src:"./images/watchlist-icon.svg",alt:"home icon"}),Object(q.jsx)("span",{children:"WATCHLIST"})]}),Object(q.jsxs)("a",{href:"/",children:[Object(q.jsx)("img",{src:"./images/original-icon.svg",alt:"home icon"}),Object(q.jsx)("span",{children:"ORIGINAL"})]}),Object(q.jsxs)("a",{href:"/",children:[Object(q.jsx)("img",{src:"./images/movie-icon.svg",alt:"home icon"}),Object(q.jsx)("span",{children:"MOVIES"})]}),Object(q.jsxs)("a",{href:"/",children:[Object(q.jsx)("img",{src:"./images/series-icon.svg",alt:"home icon"}),Object(q.jsx)("span",{children:"SERIES"})]})]}),Object(q.jsx)(G,{src:e,alt:"avatar",onClick:function(){i(N()),i(O("/login"))}})]}):Object(q.jsx)(J,{onClick:function(){i(E({name:"jordn",email:"jordn@yo.com",avatar:"./images/avatar.jpg"})),i(O("/"))},children:"Login"})]})},P=g.a.div(t||(t=Object(b.a)(["\n  height: 50px;\n  background-color: #090b13;\n  display: flex;\n  align-items: center;\n  padding: 0 36px;\n  overflow-x: hidden;\n  justify-content: space-between;\n"]))),W=g.a.img(a||(a=Object(b.a)(["\n  width: 70px;\n"]))),B=g.a.div(r||(r=Object(b.a)(['\n  display: flex;\n  flex: 1;\n  margin-left: 25px;\n  align-items: center;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n    cursor: pointer;\n    color: white;\n    img {\n      height: 20px;\n    }\n    span {\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      position: relative;\n      &:after {\n        content: "";\n        height: 1.5px;\n        position: absolute;\n        background: white;\n        left: 0;\n        right: 0;\n        transform: scaleX(0);\n        opacity: 0;\n        transform-orign: left center;\n        bottom: -6px;\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n      }\n    }\n    &:hover {\n      span:after {\n        transform: scaleX(1);\n        opacity: 1;\n      }\n    }\n  }\n']))),G=g.a.img(c||(c=Object(b.a)(["\n  height: 36px;\n  width: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  cursor: pointer;\n"]))),J=g.a.button(s||(s=Object(b.a)(["\n  background: rgba(0, 0, 0, 0.6);\n  outline: none;\n  border: 1px solid #f9f9f9;\n  padding: 6px 16px;\n  color: rgb(249, 249, 249);\n  border-radius: 4px;\n  letter-spacing: 1.3px;\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.2s ease 0s;\n\n  &:hover {\n    background: #f9f9f9;\n    color: #000;\n    border-color: transparent;\n  }\n"])));function U(){var n=function(n){};return Object(q.jsxs)(Y,{children:[Object(q.jsx)(_,{className:"chevron",src:"/disney-clone/images/chevron_left.png",alt:"left",onClick:n}),Object(q.jsx)("img",{src:"/disney-clone/images/slider-badag.jpg",alt:"",className:"images"}),Object(q.jsx)("img",{src:"/disney-clone/images/slider-badging.jpg",alt:"",className:"images"}),Object(q.jsx)("img",{src:"/disney-clone/images/slider-scale.jpg",alt:"",className:"images"}),Object(q.jsx)("img",{src:"/disney-clone/images/slider-scales.jpg",alt:"",className:"images"}),Object(q.jsx)(D,{className:"chevron",src:"/disney-clone/images/chevron_right.png",alt:"right",onClick:n})]})}var V,X,Y=g.a.div(H||(H=Object(b.a)(['\n  padding: 0 calc(3.5vw + 5px);\n  padding-top: 20px;\n  position: relative;\n  display: flex;\n  background: transparent;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n\n  &:after {\n    position: absolute;\n    margin: 0 calc(3.5vw + 2.5px);\n    margin-top: 20px;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    content: "";\n    border: 4px solid transparent;\n    border-radius: 4px;\n    transition: all 300ms ease-out;\n  }\n\n  .images {\n    width: 100%;\n    animation: animatLeft 5s ease-in-out 2s infinite;\n    margin: 0 1px;\n    border-radius: 4px;\n  }\n\n  &:hover {\n    .chevron {\n      display: flex;\n    }\n    &:after {\n      border: 4px solid rgba(249, 249, 249, 0.8);\n    }\n  }\n']))),_=g.a.img(M||(M=Object(b.a)(["\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  background: whitesmoke;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  padding: 2px;\n  margin: 0 6px;\n  cursor: pointer;\n  display: none;\n  z-index: 1;\n  animation: none;\n  &:hover {\n    display: flex;\n  }\n"]))),D=Object(g.a)(_)(T||(T=Object(b.a)(["\n  position: absolute;\n  top: 50%;\n  left: 96.5%;\n  right: 0.5%;\n"])));function Q(){return Object(q.jsxs)(nn,{children:[Object(q.jsx)(en,{className:"i1"}),Object(q.jsx)(en,{className:"i2"}),Object(q.jsx)(en,{className:"i3"}),Object(q.jsx)(en,{className:"i4"})]})}var $,K,Z,nn=g.a.div(V||(V=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  padding: 6px;\n\n  .i1 {\n    animation: i1 5s ease-in-out 2s infinite;\n  }\n  .i2 {\n    animation: i2 5s ease-in-out 2s infinite;\n  }\n  .i3 {\n    animation: i3 5s ease-in-out 2s infinite;\n  }\n  .i4 {\n    animation: i4 5s ease-in-out 2s infinite;\n  }\n"]))),en=g.a.div(X||(X=Object(b.a)(["\n  width: 8px;\n  background: #090b13;\n  height: 8px;\n  margin: 6px;\n  border-radius: 50%;\n"])));function tn(){var n=Object(j.b)();return Object(q.jsxs)(cn,{children:[Object(q.jsx)("h4",{children:"Recommended for You"}),Object(q.jsxs)(sn,{children:[Object(q.jsx)(on,{onClick:function(){return n(O("/detail"))},children:Object(q.jsx)("img",{src:"/disney-clone/images/after3.png",alt:""})}),Object(q.jsx)(on,{onClick:function(){return n(O("/detail"))},children:Object(q.jsx)("img",{src:"/disney-clone/images/after3.png",alt:""})}),Object(q.jsx)(on,{onClick:function(){return n(O("/detail"))},children:Object(q.jsx)("img",{src:"/disney-clone/images/after3.png",alt:""})}),Object(q.jsx)(on,{onClick:function(){return n(O("/detail"))},children:Object(q.jsx)("img",{src:"/disney-clone/images/after3.png",alt:""})})]})]})}var an,rn,cn=g.a.div($||($=Object(b.a)(["\n  padding: 0 calc(3.5vw + 5px);\n"]))),sn=g.a.div(K||(K=Object(b.a)(["\n  padding: 26px 0;\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  grid-gap: 25px;\n"]))),on=g.a.div(Z||(Z=Object(b.a)(["\n  border-radius: 10px;\n  overflow: hidden;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  cursor: pointer;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  &:hover {\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n  }\n"])));function ln(){var n=Object(j.c)(f),e=Object(j.c)(y),i=Object(j.c)(w),t=Object(j.c)(k),a=Object(j.b)();return Object(q.jsx)(pn,{children:e&&i&&e.map((function(e,r){return Object(q.jsx)(bn,{onMouseEnter:function(){return a(u(t[r]))},onMouseLeave:function(){return a(u(""))},children:n===t[r]?Object(q.jsx)("video",{autoPlay:!0,loop:!0,children:Object(q.jsx)("source",{src:i[r],type:"video/mp4"})}):Object(q.jsx)("img",{src:e,alt:"disney"})},r)}))})}var dn,pn=g.a.div(an||(an=Object(b.a)(["\n  padding: 28px calc(3.5vw + 5px);\n  display: grid;\n  grid-gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n"]))),bn=g.a.div(rn||(rn=Object(b.a)(["\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  border-radius: 10px;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  video {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  &:hover {\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n  }\n"])));var gn,jn,xn,mn,hn,un,On,vn,fn,yn,wn=g.a.main(dn||(dn=Object(b.a)(['\n  min-height: calc(100vh - 50px);\n  //padding: 0 calc(3.5vw + 5px);\n  position: relative;\n  overflow: hidden;\n  background: url("/disney-clone/images/home-background.png") center / cover no-repeat fixed;\n']))),kn=function(){return Object(q.jsxs)(wn,{children:[Object(q.jsx)(U,{}),Object(q.jsx)(Q,{}),Object(q.jsx)(ln,{}),Object(q.jsx)(tn,{})]})};function Ln(){Object(j.b)();return Object(q.jsxs)(An,{onClick:function(){},children:[Object(q.jsx)(In,{children:Object(q.jsx)("img",{src:"/disney-clone/images/d-bg.png",alt:"background"})}),Object(q.jsxs)(qn,{children:[Object(q.jsxs)("span",{children:[Object(q.jsx)("img",{src:"/disney-clone/images/viewers-disney.png",alt:""}),"\u25cf",Object(q.jsx)("img",{src:"/disney-clone/images/viewers-pixar.png",alt:""})]}),Object(q.jsx)("h1",{children:"VR"})]}),Object(q.jsxs)(Hn,{children:[Object(q.jsxs)(Mn,{children:[Object(q.jsx)("img",{src:"/disney-clone/images/play-icon-black.png",alt:"play"}),Object(q.jsx)("span",{children:"PLAY"})]}),Object(q.jsxs)(Tn,{children:[Object(q.jsx)("img",{src:"/disney-clone/images/play-icon-white.png",alt:"play"}),Object(q.jsx)("span",{children:"TRAILER"})]}),Object(q.jsx)(Pn,{}),Object(q.jsx)(Fn,{children:Object(q.jsx)("img",{src:"/disney-clone/images/group-icon.png",alt:""})})]}),Object(q.jsx)(Wn,{children:"2021 \u25cf 7m \u25cf SciFi, Fantasy, Adventure, Action"}),Object(q.jsx)(Bn,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, laborum voluptatem? Praesentium labore atque iste! Repellendus dolorem id soluta delectus quidem quaerat cumque reprehenderit nesciunt. Labore laboriosam odio illo harum?"})]})}var zn,Cn,En,Nn,Rn,Sn,An=g.a.div(gn||(gn=Object(b.a)(["\n  min-height: calc(100vh - 50px);\n  padding: 0 calc(3.5vw + 5px);\n"]))),In=g.a.div(jn||(jn=Object(b.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0.8;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),qn=g.a.div(xn||(xn=Object(b.a)(["\n  padding: 28px 0;\n  width: 35vw;\n  min-height: 30vh;\n\n  span {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    img {\n      height: 40%;\n      width: 40%;\n      object-fit: cover;\n    }\n  }\n  h1 {\n    font-size: 5rem;\n    font-style: italic;\n  }\n"]))),Hn=g.a.div(mn||(mn=Object(b.a)(["\n  display: flex;\n  align-items: center;\n"]))),Mn=g.a.button(hn||(hn=Object(b.a)(["\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  color: #040714;\n  padding: 0 22px;\n  display: flex;\n  align-items: center;\n  height: 44px;\n  font-size: 15px;\n  background: rgb(249, 249, 249);\n  cursor: pointer;\n  margin-right: 16px;\n  text-transform: uppercase;\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n"]))),Tn=Object(g.a)(Mn)(un||(un=Object(b.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  color: rgb(249, 249, 249);\n  border: 2px solid rgb(249, 249, 249);\n"]))),Fn=g.a.button(On||(On=Object(b.a)(["\n  margin-right: 16px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  border: 2px solid rgb(249, 249, 249);\n  cursor: pointer;\n  position: relative;\n  background: rgb(0, 0, 0);\n"]))),Pn=Object(g.a)(Fn)(vn||(vn=Object(b.a)(['\n  background-color: rgba(0, 0, 0, 0.5);\n\n  &:before {\n    position: absolute;\n    content: "";\n    height: 1.5px;\n    width: 14px;\n    background: white;\n  }\n  &:after {\n    position: absolute;\n    content: "";\n    height: 14px;\n    width: 2px;\n    background: white;\n  }\n']))),Wn=g.a.p(fn||(fn=Object(b.a)(["\n  padding: 20px 0 8px 0;\n  font-size: 13px;\n  color: rgb(249, 249, 249);\n"]))),Bn=g.a.p(yn||(yn=Object(b.a)(["\n  line-height: 1.5;\n  color: rgb(249, 249, 249);\n  max-width: 700px;\n"])));function Gn(){return Object(q.jsx)(Jn,{children:Object(q.jsxs)(Un,{children:[Object(q.jsx)(Vn,{src:"/disney-clone/images/cta-logo-one.svg"}),Object(q.jsx)(Xn,{children:"GET ALL THERE"}),Object(q.jsx)(Yn,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore nulla obcaecati dolores qui a expedita iste quam commodi amet!"}),Object(q.jsx)(_n,{src:"/disney-clone/images/cta-logo-two.png"})]})})}var Jn=g.a.main(zn||(zn=Object(b.a)(['\n  min-height: calc(100vh - 50px);\n  display: flex;\n  align-items: top;\n  justify-content: center;\n  padding: 0 calc(3.5vw + 5px);\n  background: url("/disney-clone/images/login-background.jpg") center / cover no-repeat fixed;\n']))),Un=g.a.div(Cn||(Cn=Object(b.a)(["\n  max-width: 650px;\n  padding: 60px auto;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 100px;\n"]))),Vn=g.a.img(En||(En=Object(b.a)(["\n  object-fit: cover;\n"]))),Xn=g.a.a(Nn||(Nn=Object(b.a)(["\n  width: 100%;\n  padding: 13.5px 0;\n  background-color: #0063e5;\n  font-weight: bold;\n  color: #f9f9f9;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 17.5px;\n  cursor: pointer;\n  transition: all 250ms;\n  letter-spacing: 1.3px;\n  margin: 8px 0 12px 0;\n\n  &:hover {\n    background-color: #0483ee;\n  }\n"]))),Yn=g.a.p(Rn||(Rn=Object(b.a)(["\n  font-size: 11px;\n  text-align: center;\n  letter-spacing: 1.3px;\n  line-height: 1.5;\n"]))),_n=Object(g.a)(Vn)(Sn||(Sn=Object(b.a)(["\n  padding: 16px 24px;\n"])));var Dn=function(){var n=Object(j.c)(v),e=Object(j.c)(R);return console.log(n),Object(q.jsxs)("div",{children:[Object(q.jsx)(F,{}),"/"===n&&e?Object(q.jsx)(kn,{}):"/detail"===n?Object(q.jsx)(Ln,{}):Object(q.jsx)(Gn,{})]})},Qn=Object(x.a)({reducer:{user:I,viewer:L}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(Object(q.jsx)(l.a.StrictMode,{children:Object(q.jsx)(j.a,{store:Qn,children:Object(q.jsx)(Dn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4d70353a.chunk.js.map