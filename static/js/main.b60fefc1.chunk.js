(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{19:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),c=e.n(o),i=e(10),a=e.n(i),u=(e(19),e(2)),l=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},f=function(n,t,e){for(var r=e.x,o=e.y,c=0;c<n.tetromino.length;c+=1)for(var i=0;i<n.tetromino[c].length;i+=1)if(0!==n.tetromino[c][i]&&(!t[c+n.pos.y+o]||!t[c+n.pos.y+o][i+n.pos.x+r]||"clear"!==t[c+n.pos.y+o][i+n.pos.x+r][1]))return!0},s=e(3),d=e(4),b=e.p+"static/media/main.cde31350.jpg";function p(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: start-right;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]);return p=function(){return n},n}function x(){var n=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n    h1 {\n      color: white;\n      text-align: center;\n      font-size: 2em;\n      margin: 10px 0 10px 0;\n    }\n"]);return x=function(){return n},n}var j=d.a.div(x(),b),O=d.a.div(p());function h(){var n=Object(s.a)(["\n  text-align: center;\n  margin-left: 40px;\n"]);return h=function(){return n},n}var v=d.a.div(h()),g=e(8),m={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},y=function(){var n="IJLOSTZ",t=n[Math.floor(Math.random()*n.length)];return m[t]},w=function(n,t){var e=Object(o.useState)(l()),r=Object(u.a)(e,2),c=r[0],i=r[1],a=Object(o.useState)(0),f=Object(u.a)(a,2),s=f[0],d=f[1];return Object(o.useEffect)((function(){d(0);var e=function(e){var r=e.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(t,e){t.forEach((function(t,o){0!==t&&(r[e+n.pos.y][o+n.pos.x]=[t,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(t(),function(n){return n.reduce((function(t,e){return-1===e.findIndex((function(n){return 0===n[0]}))?(d((function(n){return n+1})),t.unshift(new Array(n[0].length).fill([0,"clear"])),t):(t.push(e),t)}),[])}(r)):r};i((function(n){return e(n)}))}),[n,t]),[c,i,s]};function S(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"]);return S=function(){return n},n}var k=d.a.div(S(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width}));function I(){var n=Object(s.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return I=function(){return n},n}var J=d.a.div(I(),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),E=function(n){var t=n.type;return Object(r.jsx)(J,{type:t,color:m[t].color})},L=c.a.memo(E),T=function(n){var t=n.stage;return Object(r.jsx)(k,{width:t[0].length,height:t.length,children:t.map((function(n){return n.map((function(n,t){return Object(r.jsx)(L,{type:n[0]},t)}))}))})};function A(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center; \n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 2px solid #009799;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 5px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return A=function(){return n},n}var C=d.a.div(A(),(function(n){return n.gameOver?"red":"#999"})),z=function(n){var t=n.gameOver,e=n.text;return Object(r.jsx)(C,{gameOver:t,children:e})};function Z(){var n=Object(s.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 5px;\n  border: 2px solid #009799;\n  color: white;\n  background: black;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return Z=function(){return n},n}var F=d.a.button(Z()),G=function(n){var t=n.callback;return Object(r.jsx)(F,{onClick:t,children:"Start Game"})},P=function(){var n=Object(o.useState)(null),t=Object(u.a)(n,2),e=t[0],c=t[1],i=Object(o.useState)(null),a=Object(u.a)(i,2),s=a[0],d=a[1],b=function(){var n=Object(o.useState)({pos:{x:0,y:0},tetromino:m[0].shape,collided:!1}),t=Object(u.a)(n,2),e=t[0],r=t[1],c=function(n,t){var e=n.map((function(t,e){return n.map((function(n){return n[e]}))}));return t>0?e.map((function(n){return n.reverse()})):e.reverse()},i=Object(o.useCallback)((function(){r({pos:{x:4,y:0},tetromino:y().shape,collided:!1})}),[]);return[e,function(n){var t=n.x,e=n.y,o=n.collided;r((function(n){return Object(g.a)(Object(g.a)({},n),{},{pos:{x:n.pos.x+=t,y:n.pos.y+=e},collided:o})}))},i,function(n,t){var o=JSON.parse(JSON.stringify(e));o.tetromino=c(o.tetromino,t);for(var i=o.pos.x,a=1;f(o,n,{x:0,y:0});)if(o.pos.x+=a,(a=-(a+(a>0?1:-1)))>o.tetromino[0].length)return c(o.tetromino,-t),void(o.pos.x=i);r(o)}]}(),p=Object(u.a)(b,4),x=p[0],h=p[1],S=p[2],k=p[3],I=w(x,S),J=Object(u.a)(I,3),E=J[0],L=J[1],A=function(n){var t=Object(o.useState)(0),e=Object(u.a)(t,2),r=e[0],c=e[1],i=Object(o.useState)(0),a=Object(u.a)(i,2),l=a[0],f=a[1],s=Object(o.useState)(0),d=Object(u.a)(s,2),b=d[0],p=d[1],x=[40,100,300,1200],j=Object(o.useCallback)((function(){n>0&&(c((function(t){return t+x[n-1]*(b+1)})),f((function(t){return t+n})))}),[b,x,n]);return Object(o.useEffect)((function(){j()}),[j,n,r]),[r,c,l,f,b,p]}(J[2]),C=Object(u.a)(A,6),Z=C[0],F=C[1],P=C[2],R=C[3],M=C[4],N=C[5],B=function(n){f(x,E,{x:n,y:0})||h({x:n,y:0})},D=function(){P>10*(M+1)&&(N((function(n){return n+1})),c(1e3/(M+1)+200)),f(x,E,{x:0,y:1})?(x.pos.y<1&&(console.log("GAME OVER!!!"),d(!0),c(null)),h({x:0,y:0,collided:!0})):h({x:0,y:1,collided:!1})},H=function(n){var t=n.keyCode;s||(37===t?B(-1):39===t?B(1):40===t?(console.log("Interval off"),c(null),D()):38===t&&k(E,1))};return function(n,t){var e=Object(o.useRef)();Object(o.useEffect)((function(){e.current=n}),[n]),Object(o.useEffect)((function(){if(null!==t){var n=setInterval((function(){e.current()}),t);return function(){clearInterval(n)}}}),[t])}((function(){D()}),e),Object(r.jsxs)(j,{role:"button",tabIndex:"0",onKeyDown:function(n){return H(n)},onKeyUp:function(n){var t=n.keyCode;s||40===t&&c(1e3/(M+1)+200)},children:[Object(r.jsx)("h1",{children:" React Tetris Game"}),Object(r.jsxs)(O,{children:[Object(r.jsx)(T,{stage:E}),Object(r.jsxs)(v,{children:[s?Object(r.jsx)(z,{gameOver:s,text:"Game Over"}):Object(r.jsxs)("div",{children:[Object(r.jsx)(z,{text:"Score: ".concat(Z)}),Object(r.jsx)(z,{text:"Rows: ".concat(P)}),Object(r.jsx)(z,{text:"Level: ".concat(M)})]}),Object(r.jsx)(G,{callback:function(){L(l()),c(1e3),S(),d(!1),F(0),R(0),N(0)}})]})]})]})},R=function(n){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(P,{})})},M=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,23)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),r(n),o(n),c(n),i(n)}))};a.a.render(Object(r.jsx)(R,{}),document.getElementById("root")),M()}},[[22,1,2]]]);
//# sourceMappingURL=main.b60fefc1.chunk.js.map