(this.webpackJsonpday21=this.webpackJsonpday21||[]).push([[0],{36:function(e,t){},56:function(e,t,i){},57:function(e,t,i){},65:function(e,t,i){},66:function(e,t,i){},68:function(e,t,i){},69:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(16),r=i.n(n),o=(i(56),i(36),i(14)),s=i(5),c=(i(57),i(2)),l=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"inner-container",children:Object(c.jsx)("div",{className:"shape",children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"WITH \u2764 BY ENIGMA TEAM"}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsxs)(o.b,{to:"/about",className:"button",children:[" ","INSTRUCTIONS"]}),Object(c.jsxs)(o.b,{to:"/game",className:"button",children:[" ","START"]})]})]})})})})},d=i(34),h=i(24),g=i(18),u=i.n(g),j=function(e){switch(e){case 2:return"#EBDCD0";case 4:return"#E9DBBA";case 8:return"#E9A067";case 16:return"#F08151";case 32:return"#F2654F";case 64:return"#F1462C";case 128:return"#E7C65E";case 256:return"#E8C350";case 512:return"#E8BE40";case 1024:return"#E8BB31";case 2048:return"#E7B723";default:return"#C2B3A3"}},m=i(39),b=i.n(m);i(65);var f=function(e){var t=e.num,i=p.blockStyle;return Object(c.jsx)("div",{style:Object(d.a)(Object(d.a)({},i),{},{background:j(t),color:2===t||4===t?"#645B52":"#F7F4EF"}),children:0!==t?t:""})},p={blockStyle:{height:80,width:80,background:"lightgray",margin:3,display:"flex",justifyContent:"center",alignItems:"center",fontSize:45,fontWeight:"800",color:"white"},newGameButton:{padding:10,background:"#846F5B",color:"#F8F5F0",width:95,borderRadius:7,fontWeight:"900",cursor:"pointer",textAlign:"center",margin:"auto"},tryAgainButton:{padding:10,background:"#846F5B",color:"#F8F5F0",width:80,borderRadius:7,fontWeight:"900",cursor:"pointer",margin:"auto",marginTop:20},gameOverOverlay:{position:"absolute",height:"100%",width:"100%",left:0,top:0,borderRadius:5,background:"rgba(238,228,218,.5)",display:"flex",justifyContent:"center",alignItems:"center"}},O=function(){var e=38,t=40,i=37,n=39,r=Object(a.useState)([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),o=Object(h.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)((function(){return localStorage.getItem("score")||0})),g=Object(h.a)(d,2),j=g[0],m=g[1],O=Object(a.useState)((function(){return localStorage.getItem("best")||0})),y=Object(h.a)(O,2),x=y[0],w=y[1],v=Object(a.useState)(!1),S=Object(h.a)(v,2),k=S[0],N=S[1],I=function(e){for(var t=!1,i=!1,a=0;!t&&!i;){var n=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());a++,0===e[n][r]&&(e[n][r]=Math.random()>.5?2:4,t=!0),a>50&&(i=!0,F()&&alert("game over"))}},B=function(e){for(var t=0,i=s,a=u()(s),n=0;n<4;n++)for(var r=a[n],o=0,c=1;o<4;)4!==c?0===r[o]&&0===r[c]?c++:0===r[o]&&0!==r[c]?(r[o]=r[c],r[c]=0,c++):0!==r[o]&&0===r[c]?c++:0!==r[o]&&0!==r[c]&&(r[o]===r[c]?(r[o]=r[o]+r[c],t+=r[o],r[c]=0,c=o+1,o++):c=++o+1):(c=o+1,o++);if(JSON.stringify(i)!==JSON.stringify(a)&&I(a),e)return a;m(j=+j+t),localStorage.setItem("score",j),localStorage.setItem("grid",JSON.stringify(a)),l(a),j>localStorage.getItem("best")&&(w(x=j),localStorage.setItem("best",x))},E=function(e){for(var t=0,i=s,a=u()(s),n=3;n>=0;n--)for(var r=a[n],o=r.length-1,c=o-1;o>0;)-1!==c?0===r[o]&&0===r[c]?c--:0===r[o]&&0!==r[c]?(r[o]=r[c],r[c]=0,c--):0!==r[o]&&0===r[c]?c--:0!==r[o]&&0!==r[c]&&(r[o]===r[c]?(r[o]=r[o]+r[c],t+=r[o],r[c]=0,c=o-1,o--):c=--o-1):(c=o-1,o--);if(JSON.stringify(a)!==JSON.stringify(i)&&I(a),e)return a;m(j=+j+t),localStorage.setItem("score",j),localStorage.setItem("grid",JSON.stringify(a)),l(a),j>localStorage.getItem("best")&&(w(x=j),localStorage.setItem("best",x))},J=function(e){for(var t=0,i=u()(s),a=JSON.parse(JSON.stringify(s)),n=3;n>=0;n--)for(var r=i.length-1,o=r-1;r>0;)-1!==o?0===i[r][n]&&0===i[o][n]?o--:0===i[r][n]&&0!==i[o][n]?(i[r][n]=i[o][n],i[o][n]=0,o--):0!==i[r][n]&&0===i[o][n]?o--:0!==i[r][n]&&0!==i[o][n]&&(i[r][n]===i[o][n]?(i[r][n]=i[r][n]+i[o][n],t+=i[r][n],i[o][n]=0,o=r-1,r--):o=--r-1):(o=r-1,r--);if(JSON.stringify(i)!==JSON.stringify(a)&&I(i),e)return i;m(j=+j+t),localStorage.setItem("score",j),localStorage.setItem("grid",JSON.stringify(i)),l(i),j>localStorage.getItem("best")&&(w(x=j),localStorage.setItem("best",x))},T=function(e){for(var t=0,i=u()(s),a=s,n=0;n<4;n++)for(var r=0,o=1;r<4;)4!==o?0===i[r][n]&&0===i[o][n]?o++:0===i[r][n]&&0!==i[o][n]?(i[r][n]=i[o][n],i[o][n]=0,o++):0!==i[r][n]&&0===i[o][n]?o++:0!==i[r][n]&&0!==i[o][n]&&(i[r][n]===i[o][n]?(i[r][n]=i[r][n]+i[o][n],t+=i[r][n],i[o][n]=0,o=r+1,r++):o=++r+1):(o=r+1,r++);if(JSON.stringify(a)!==JSON.stringify(i)&&I(i),e)return i;m(j=+j+t),localStorage.setItem("score",j),localStorage.setItem("grid",JSON.stringify(i)),l(i),j>localStorage.getItem("best")&&(w(x=j),localStorage.setItem("best",x))},F=function(){var e=B(!0);if(JSON.stringify(s)!==JSON.stringify(e))return!1;var t=J(!0);if(JSON.stringify(s)!==JSON.stringify(t))return!1;var i=E(!0);if(JSON.stringify(s)!==JSON.stringify(i))return!1;var a=T(!0);return JSON.stringify(s)===JSON.stringify(a)},C=function(){N(!1);var e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];m(0),l(e),I(e),I(e),l(e),localStorage.setItem("score",0),localStorage.setItem("grid",JSON.stringify(e))};return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("grid"));console.log(e),e?(console.log("func",e),l(function(){var e=JSON.parse(localStorage.getItem("grid"));return e||(e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]),e}())):(console.log("init"),function(){var e=u()(s);m(0),I(e),I(e)}())}),[]),function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(a.useEffect)((function(){return window.addEventListener(e,t,i),function(){window.removeEventListener(e,t)}}))}("keydown",(function(a){if(!k){switch(console.log(a.keyCode),a.keyCode){case e:console.log(a.keyCode,"up"),T();break;case t:console.log(a.keyCode,"down"),J();break;case i:console.log(a.keyCode,"left"),B();break;case n:console.log(a.keyCode,"right"),E();break;default:console.log("def")}if([n,e,i,t].includes(a.keyCode))F()&&N(!0)}})),Object(c.jsx)("div",{className:"Game",children:Object(c.jsxs)("div",{style:{width:345,margin:"auto",marginTop:30},children:[Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("div",{style:{fontFamily:"sans-serif",flex:1,fontWeight:"700",fontSize:60,color:"#776e65"},children:"2048"}),Object(c.jsx)("div",{className:"score-container",style:{marginLeft:"100px"},children:j}),Object(c.jsx)("div",{className:"best-container",style:{marginLeft:"20px"},children:x}),Object(c.jsx)("div",{style:{flex:1,marginTop:"auto"}})]}),Object(c.jsxs)("div",{style:{background:"#AD9D8F",width:"max-content",height:"max-content",margin:"auto",padding:5,borderRadius:5,marginTop:10,position:"relative"},children:[k&&Object(c.jsx)("div",{style:p.gameOverOverlay,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{fontSize:30,fontFamily:"sans-serif",fontWeight:"900",color:"#776E65"},children:"Game Over"}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{flex:1,marginTop:"auto"},children:Object(c.jsx)("div",{onClick:C,style:p.tryAgainButton,children:"Try Again"})})})]})}),Object(c.jsx)(b.a,{style:{overflowY:"hidden"},children:s.map((function(e,t){return Object(c.jsx)("div",{style:{display:"flex"},children:e.map((function(e,t){return Object(c.jsx)(f,{num:e},t)}))},t)}))})]}),Object(c.jsx)("div",{style:{width:"inherit"},children:Object(c.jsxs)("p",{className:"game-explanation",children:[Object(c.jsx)("strong",{className:"important",children:"How to play:"})," Use your"," ",Object(c.jsx)("strong",{children:"arrow keys"})," to move the tiles. When two tiles with the same number touch, they ",Object(c.jsx)("strong",{children:"merge into one!"})]})}),Object(c.jsx)("div",{onClick:C,style:p.newGameButton,children:"NEW GAME"})]})})},y=i(31),x=i.n(y),w=(i(37),i(66),i(48),i(26)),v=(i(49),i(86)),S=(i(88),Object(v.a)((function(e){return{root:Object(w.a)({height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("md"),{flexDirection:"column"})}})),i(68),["Swipe the screen up, down, left, or right to move all number tiles in that direction. Each tile moves in that direction until it hits the wall or another tile.(Use your arrow keys in the computer version).Each time you make a move, a new 2 or 4 tile appears in an empty spot in a row or column that was moved last move.","Try to get to 2048. When a move causes two tiles of the same number to hit each other, they merge into one tile with a value equal to the sum of the two tiles. For instance, two 2 tiles combine into a 4. The goal is to create a tile with a value of 2048.","Pause and look ahead. It's easy to get sucked into the game and make moves as quickly as possible. If you want a better shot at winning, fight this impulse and only make a move when you're ready. Look ahead and try to imagine how the board will look after you make the next move, or at least what will happen to a few important tiles.","Focus on a corner. A common strategy among players is to build up a high number in one corner. It doesn't matter what corner you pick, but once you pick, stick with it.This tactic works best when the corner is part of a row you keep permanently filled. This lets you move the tiles left to right without dislodging your high-value tile.","Take opportunities to merge multiple tiles. If you see a long row of similar tiles, it's usually a good idea to combine them all and give yourself more room on the board.Combine the early tiles into a 16 or 32, and put it in a corner. The goal of this method is to keep this tile in place for as long as possible, gradually building it higher and higher","Try alternate tapping up and right. One basic approach is to alternate tapping up and right until no squares are moving. Tap left when this happens, then go back to alternating up and right. This won't guarantee you a win - in fact, it usually won't get you there. However, it can get you a fairly high score, and it's a quick way to try to beat your previous record."]),k=["https://www.wikihow.com/images/thumb/9/99/Beat-2048-Step-8-Version-5.jpg/aid4511727-v4-728px-Beat-2048-Step-8-Version-5.jpg.webp","https://www.wikihow.com/images/thumb/e/ef/Beat-2048-Step-9-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-9-Version-4.jpg.webp","https://www.wikihow.com/images/thumb/0/09/Beat-2048-Step-10-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-10-Version-4.jpg.webp","https://www.wikihow.com/images/thumb/5/51/Beat-2048-Step-11-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-11-Version-4.jpg.webp","https://www.wikihow.com/images/thumb/b/b8/Beat-2048-Step-12-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-12-Version-4.jpg.webp","https://www.wikihow.com/images/thumb/1/18/Beat-2048-Step-13-Version-4.jpg/aid4511727-v4-728px-Beat-2048-Step-13-Version-4.jpg.webp"],N=function(){return Object(c.jsx)("div",{className:"stars",children:Object(c.jsxs)("div",{className:"cards",children:[Object(c.jsxs)("section",{className:"card card2",children:[Object(c.jsx)("img",{src:k[0],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 1"}),Object(c.jsx)("p",{children:S[0]})]})]}),Object(c.jsxs)("section",{className:"card card1","data-aos":"fade-left",children:[Object(c.jsx)("img",{src:k[1],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 2"}),Object(c.jsx)("p",{children:S[1]})]})]}),Object(c.jsxs)("section",{className:"card card2","data-aos":"fade-right",children:[Object(c.jsx)("img",{src:k[2],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 3"}),Object(c.jsx)("p",{children:S[2]})]})]}),Object(c.jsxs)("section",{className:"card card1","data-aos":"fade-left",children:[Object(c.jsx)("img",{src:k[3],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 4"}),Object(c.jsx)("p",{children:S[3]})]})]}),Object(c.jsxs)("section",{className:"card card2","data-aos":"fade-right",children:[Object(c.jsx)("img",{src:k[4],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 5"}),Object(c.jsx)("p",{children:S[4]})]})]}),Object(c.jsxs)("section",{className:"card card1","data-aos":"fade-left",children:[Object(c.jsx)("img",{src:k[5],alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Step 6"}),Object(c.jsx)("p",{children:S[5]})]})]}),Object(c.jsx)("button",{className:"butstar",children:Object(c.jsx)(o.b,{style:{color:"white",textDecoration:"none"},to:"/game",children:"Proceed To Game"})})]})})},I=function(){return Object(a.useEffect)((function(){x.a.init({offset:400,delay:0,duration:1e3})}),[]),Object(c.jsx)(o.a,{children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{path:"/Enigma_2048",exact:!0,component:l}),Object(c.jsx)(s.a,{path:"/Enigma_2048/game",exact:!0,component:O}),Object(c.jsx)(s.a,{path:"/Enigma_2048/about",exact:!0,component:N})]})})};r.a.render(Object(c.jsx)(I,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.21e24613.chunk.js.map