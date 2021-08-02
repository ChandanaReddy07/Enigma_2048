(this.webpackJsonpday21=this.webpackJsonpday21||[]).push([[0],{18:function(e,t){},28:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(20),a=n.n(i),o=(n(28),n(18),n(8)),s=n(2),c=(n(29),n(0)),l=function(){return Object(c.jsx)("div",{className:"container",style:{marginTop:"80px"},children:Object(c.jsx)("div",{className:"inner-container",children:Object(c.jsx)("div",{className:"shape",children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"WITH \u2764 BY ENIGMA TEAM"}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)(o.b,{to:"/about",className:"button",children:[" ","INSTRUCTIONS"]}),Object(c.jsxs)(o.b,{to:"/game",className:"button",children:[" ","START"]})]})]})})})})},d=n(17),u=n(6),h=n(11),j=n.n(h),g=function(e){switch(e){case 2:return"#EBDCD0";case 4:return"#E9DBBA";case 8:return"#E9A067";case 16:return"#F08151";case 32:return"#F2654F";case 64:return"#F1462C";case 128:return"#E7C65E";case 256:return"#E8C350";case 512:return"#E8BE40";case 1024:return"#E8BB31";case 2048:return"#E7B723";default:return"#C2B3A3"}},b=n(22),m=n.n(b),f=function(e){var t=e.darkMode,n=e.setDarkMode;return Object(c.jsxs)("div",{className:"dark-mode-toggle",children:[Object(c.jsx)("button",{type:"button",onClick:function(){return n(!1)},children:"\u2600"}),Object(c.jsxs)("span",{className:"toggle-control",children:[Object(c.jsx)("input",{className:"dmcheck",id:"dmcheck",type:"checkbox",checked:t,onChange:function(){return n(!t)}}),Object(c.jsx)("label",{htmlFor:"dmcheck"})]}),Object(c.jsx)("button",{type:"button",onClick:function(){return n(!0)},children:"\u263e"})]})};var p=function(){var e=function(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}})),i=Object(u.a)(n,2),a=i[0],o=i[1];return[a,function(t){try{var n=t instanceof Function?t(a):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]}("dark-mode-enabled"),t=Object(u.a)(e,2),n=t[0],i=t[1],a=function(e,t,n){var i=Object(r.useState)(n),a=Object(u.a)(i,2),o=a[0],s=a[1],c=e.map((function(e){return window.matchMedia(e)})),l=function(){var e=c.findIndex((function(e){return e.matches}));return"undefined"!==typeof t[e]?t[e]:n};return Object(r.useEffect)((function(){s(l);var e=function(){return s(l)};return c.forEach((function(t){return t.addListener(e)})),function(){return c.forEach((function(t){return t.removeListener(e)}))}}),[]),o}(["(prefers-color-scheme: dark)"],[!0],!1),o="undefined"!==typeof n?n:a;return Object(r.useEffect)((function(){var e="dark-mode",t=window.document.body;o?t.classList.add(e):t.classList.remove(e)}),[o]),[o,i]},O=(n(37),n(38),n.p+"static/media/click_sound.c8776b00.mp3");var y=function(e){var t=e.num,n=x.blockStyle;return Object(c.jsx)("div",{style:Object(d.a)(Object(d.a)({},n),{},{background:g(t),color:2===t||4===t?"#645B52":"#F7F4EF"}),children:0!==t?t:""})},x={blockStyle:{height:80,width:80,background:"lightgray",margin:3,display:"flex",justifyContent:"center",alignItems:"center",fontSize:45,fontWeight:"800",color:"white"},InstructionsButton:{padding:10,display:"inline-block",background:"#846F5B",color:"#F8F5F0",width:120,borderRadius:7,fontWeight:"900",cursor:"pointer",textAlign:"center",marginRight:20},newGameButton:{padding:10,background:"#846F5B",display:"inline-block",color:"#F8F5F0",width:95,borderRadius:7,fontWeight:"900",cursor:"pointer",textAlign:"center"},tryAgainButton:{padding:10,background:"#846F5B",color:"#F8F5F0",width:80,borderRadius:7,fontWeight:"900",cursor:"pointer",margin:"auto",marginTop:20},gameOverOverlay:{position:"absolute",height:"100%",width:"100%",left:0,top:0,borderRadius:5,background:"rgba(238,228,218,.5)",display:"flex",justifyContent:"center",alignItems:"center"}},v=function(){var e=38,t=40,n=37,i=39,a=Object(r.useState)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),s=Object(u.a)(a,2),l=s[0],d=s[1],h=Object(r.useState)((function(){return localStorage.getItem("score")||0})),g=Object(u.a)(h,2),b=g[0],v=g[1],w=Object(r.useState)((function(){return localStorage.getItem("best")||0})),S=Object(u.a)(w,2),k=S[0],N=S[1],I=Object(r.useState)(!1),B=Object(u.a)(I,2),J=B[0],E=B[1],F=function(e){for(var t=!1,n=!1,r=0;!t&&!n;){var i=Math.floor(4*Math.random()),a=Math.floor(4*Math.random());r++,0===e[i][a]&&(e[i][a]=Math.random()>.5?2:4,t=!0),r>50&&(n=!0,V()&&alert("game over"))}},T=function(e){for(var t=0,n=l,r=j()(l),i=0;i<4;i++)for(var a=r[i],o=0,s=1;o<4;)4!==s?0===a[o]&&0===a[s]?s++:0===a[o]&&0!==a[s]?(a[o]=a[s],a[s]=0,s++):0!==a[o]&&0===a[s]?s++:0!==a[o]&&0!==a[s]&&(a[o]===a[s]?(a[o]=a[o]+a[s],t+=a[o],a[s]=0,s=o+1,o++):s=++o+1):(s=o+1,o++);if(JSON.stringify(n)!==JSON.stringify(r)&&F(r),e)return r;v(b=+b+t),localStorage.setItem("score",b),localStorage.setItem("grid",JSON.stringify(r)),d(r),b>localStorage.getItem("best")&&(N(k=b),localStorage.setItem("best",k))},C=function(e){for(var t=0,n=l,r=j()(l),i=3;i>=0;i--)for(var a=r[i],o=a.length-1,s=o-1;o>0;)-1!==s?0===a[o]&&0===a[s]?s--:0===a[o]&&0!==a[s]?(a[o]=a[s],a[s]=0,s--):0!==a[o]&&0===a[s]?s--:0!==a[o]&&0!==a[s]&&(a[o]===a[s]?(a[o]=a[o]+a[s],t+=a[o],a[s]=0,s=o-1,o--):s=--o-1):(s=o-1,o--);if(JSON.stringify(r)!==JSON.stringify(n)&&F(r),e)return r;v(b=+b+t),localStorage.setItem("score",b),localStorage.setItem("grid",JSON.stringify(r)),d(r),b>localStorage.getItem("best")&&(N(k=b),localStorage.setItem("best",k))},A=function(e){for(var t=0,n=j()(l),r=JSON.parse(JSON.stringify(l)),i=3;i>=0;i--)for(var a=n.length-1,o=a-1;a>0;)-1!==o?0===n[a][i]&&0===n[o][i]?o--:0===n[a][i]&&0!==n[o][i]?(n[a][i]=n[o][i],n[o][i]=0,o--):0!==n[a][i]&&0===n[o][i]?o--:0!==n[a][i]&&0!==n[o][i]&&(n[a][i]===n[o][i]?(n[a][i]=n[a][i]+n[o][i],t+=n[a][i],n[o][i]=0,o=a-1,a--):o=--a-1):(o=a-1,a--);if(JSON.stringify(n)!==JSON.stringify(r)&&F(n),e)return n;v(b=+b+t),localStorage.setItem("score",b),localStorage.setItem("grid",JSON.stringify(n)),d(n),b>localStorage.getItem("best")&&(N(k=b),localStorage.setItem("best",k))},M=function(e){for(var t=0,n=j()(l),r=l,i=0;i<4;i++)for(var a=0,o=1;a<4;)4!==o?0===n[a][i]&&0===n[o][i]?o++:0===n[a][i]&&0!==n[o][i]?(n[a][i]=n[o][i],n[o][i]=0,o++):0!==n[a][i]&&0===n[o][i]?o++:0!==n[a][i]&&0!==n[o][i]&&(n[a][i]===n[o][i]?(n[a][i]=n[a][i]+n[o][i],t+=n[a][i],n[o][i]=0,o=a+1,a++):o=++a+1):(o=a+1,a++);if(JSON.stringify(r)!==JSON.stringify(n)&&F(n),e)return n;v(b=+b+t),localStorage.setItem("score",b),localStorage.setItem("grid",JSON.stringify(n)),d(n),b>localStorage.getItem("best")&&(N(k=b),localStorage.setItem("best",k))},V=function(){var e=T(!0);if(JSON.stringify(l)!==JSON.stringify(e))return!1;var t=A(!0);if(JSON.stringify(l)!==JSON.stringify(t))return!1;var n=C(!0);if(JSON.stringify(l)!==JSON.stringify(n))return!1;var r=M(!0);return JSON.stringify(l)===JSON.stringify(r)},W=function(){E(!1);var e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];v(0),d(e),F(e),F(e),d(e),localStorage.setItem("score",0),localStorage.setItem("grid",JSON.stringify(e))};Object(r.useEffect)((function(){JSON.parse(localStorage.getItem("grid"))?d(function(){var e=JSON.parse(localStorage.getItem("grid"));return e||(e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),e}()):function(){var e=j()(l);v(0),F(e),F(e)}()}),[]);var D=p(),L=Object(u.a)(D,2),R=L[0],G=L[1];return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.useEffect)((function(){return window.addEventListener(e,t,n),function(){window.removeEventListener(e,t)}}))}("keydown",(function(r){if(!J){var a=new Audio(O);switch(r.keyCode){case e:M(),a.play();break;case t:A(),a.play();break;case n:T(),a.play();break;case i:C(),a.play()}if([i,e,n,t].includes(r.keyCode))V()&&E(!0)}})),Object(c.jsxs)("div",{className:"Game",children:[Object(c.jsx)("div",{className:"navbar",style:{marginTop:"80px"},children:Object(c.jsx)(f,{darkMode:R,setDarkMode:G})}),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{style:{width:345,margin:"auto",marginTop:30},children:[Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("div",{style:{fontFamily:"sans-serif",flex:1,fontWeight:"700",fontSize:60,color:"#776e65"},children:"2048"}),Object(c.jsx)("div",{className:"score-container",style:{marginLeft:"100px"},children:b}),Object(c.jsx)("div",{className:"best-container",style:{marginLeft:"20px"},children:k}),Object(c.jsx)("div",{style:{flex:1,marginTop:"auto"}})]}),Object(c.jsxs)("div",{style:{background:"#AD9D8F",width:"max-content",height:"max-content",margin:"auto",padding:5,borderRadius:5,marginTop:10,position:"relative"},children:[J&&Object(c.jsx)("div",{style:x.gameOverOverlay,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontSize:30,fontFamily:"sans-serif",fontWeight:"900",color:"#776E65"},children:"Game Over"}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{flex:1,marginTop:"auto"},children:Object(c.jsx)("div",{onClick:W,style:x.tryAgainButton,children:"Try Again"})})})]})}),Object(c.jsx)(m.a,{style:{overflowY:"hidden"},children:l.map((function(e,t){return Object(c.jsx)("div",{style:{display:"flex"},children:e.map((function(e,t){return Object(c.jsx)(y,{num:e},t)}))},t)}))})]}),Object(c.jsx)("div",{style:{width:"inherit"},children:Object(c.jsxs)("p",{className:"game-explanation",children:["Use your ",Object(c.jsx)("strong",{children:"arrow keys"})," to move the tiles. When two tiles with the same number touch, they"," ",Object(c.jsx)("strong",{children:"merge into one!"})]})}),Object(c.jsxs)("div",{className:"Button__manager",children:[Object(c.jsx)("div",{style:x.InstructionsButton,children:Object(c.jsx)(o.b,{to:"/about",style:{textDecoration:"none",color:"white"},children:"INSTRUCTIONS"})}),Object(c.jsx)("div",{onClick:W,style:x.newGameButton,children:"NEW GAME"})]})]})})]})},w=(n(39),["Swipe the screen up, down, left, or right to move all number tiles in that direction. Each tile moves in that direction until it hits the wall or another tile.(Use your arrow keys in the computer version).Each time you make a move, a new 2 or 4 tile appears in an empty spot in a row or column that was moved last move.","Try to get to 2048. When a move causes two tiles of the same number to hit each other, they merge into one tile with a value equal to the sum of the two tiles. For instance, two 2 tiles combine into a 4. The goal is to create a tile with a value of 2048.","Pause and look ahead. It's easy to get sucked into the game and make moves as quickly as possible. If you want a better shot at winning, fight this impulse and only make a move when you're ready. Look ahead and try to imagine how the board will look after you make the next move, or at least what will happen to a few important tiles.","Focus on a corner. A common strategy among players is to build up a high number in one corner. It doesn't matter what corner you pick, but once you pick, stick with it.This tactic works best when the corner is part of a row you keep permanently filled. This lets you move the tiles left to right without dislodging your high-value tile.","Take opportunities to merge multiple tiles. If you see a long row of similar tiles, it's usually a good idea to combine them all and give yourself more room on the board.Combine the early tiles into a 16 or 32, and put it in a corner. The goal of this method is to keep this tile in place for as long as possible, gradually building it higher and higher","Try alternate tapping up and right. One basic approach is to alternate tapping up and right until no squares are moving. Tap left when this happens, then go back to alternating up and right. This won't guarantee you a win - in fact, it usually won't get you there. However, it can get you a fairly high score, and it's a quick way to try to beat your previous record."]),S=["https://www.wikihow.com/images/thumb/9/99/Beat-2048-Step-8-Version-5.jpg/aid4511727-v4-728px-Beat-2048-Step-8-Version-5.jpg.webp","https://www.wikihow.com/images/thumb/e/ef/Beat-2048-Step-9-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-9-Version-4.jpg.webp","https://www.wikihow.com/images/thumb/0/09/Beat-2048-Step-10-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-10-Version-4.jpg.webp","https://www.wikihow.com/images/thumb/5/51/Beat-2048-Step-11-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-11-Version-4.jpg.webp","https://www.wikihow.com/images/thumb/b/b8/Beat-2048-Step-12-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-12-Version-4.jpg.webp","https://www.wikihow.com/images/thumb/1/18/Beat-2048-Step-13-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-13-Version-4.jpg.webp"],k=function(){return Object(c.jsx)("div",{className:"stars",children:Object(c.jsxs)("div",{className:"cards",children:[Object(c.jsxs)("section",{className:"card card2",children:[Object(c.jsx)("img",{src:S[0],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 1"}),Object(c.jsx)("p",{children:w[0]})]})]}),Object(c.jsxs)("section",{className:"card card1","data-aos":"fade-left",children:[Object(c.jsx)("img",{src:S[1],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 2"}),Object(c.jsx)("p",{children:w[1]})]})]}),Object(c.jsxs)("section",{className:"card card2","data-aos":"fade-right",children:[Object(c.jsx)("img",{src:S[2],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 3"}),Object(c.jsx)("p",{children:w[2]})]})]}),Object(c.jsxs)("section",{className:"card card1","data-aos":"fade-left",children:[Object(c.jsx)("img",{src:S[3],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 4"}),Object(c.jsx)("p",{children:w[3]})]})]}),Object(c.jsxs)("section",{className:"card card2","data-aos":"fade-right",children:[Object(c.jsx)("img",{src:S[4],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 5"}),Object(c.jsx)("p",{children:w[4]})]})]}),Object(c.jsxs)("section",{className:"card card1","data-aos":"fade-left",children:[Object(c.jsx)("img",{src:S[5],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 6"}),Object(c.jsx)("p",{children:w[5]})]})]}),Object(c.jsx)("button",{className:"butstar",children:Object(c.jsx)(o.b,{style:{color:"white",textDecoration:"none"},to:"/game",children:"Proceed To Game"})})]})})},N=n(23),I=n.n(N),B=(n(40),function(){return Object(r.useEffect)((function(){I.a.init({offset:400,delay:0,duration:1e3})}),[]),Object(c.jsxs)(o.a,{children:[Object(c.jsx)(s.a,{path:"/",exact:!0,component:l}),Object(c.jsx)(s.a,{path:"/game",exact:!0,component:v}),Object(c.jsx)(s.a,{path:"/about",exact:!0,component:k})]})});a.a.render(Object(c.jsx)(B,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8a7d3052.chunk.js.map