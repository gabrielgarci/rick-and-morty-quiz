(this["webpackJsonprick-and-morty-quiz"]=this["webpackJsonprick-and-morty-quiz"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/arrow.d6d0b489.svg"},30:function(e,t,a){e.exports=a.p+"static/media/title.42d6efdb.png"},31:function(e,t,a){e.exports=a.p+"static/media/logo.842f63c3.png"},33:function(e,t,a){e.exports=a.p+"static/media/morty-face.617393a9.png"},34:function(e,t,a){e.exports=a.p+"static/media/fire.15fc282e.png"},35:function(e,t,a){e.exports=a.p+"static/media/record.bb65bdad.png"},36:function(e,t,a){e.exports=a.p+"static/media/finish.82d32ff6.png"},37:function(e,t,a){e.exports=a(75)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),s=a.n(r),l=(a(42),a(1)),o=(a(43),a(44),a(30)),i=a.n(o),m=a(31),u=a.n(m),d=a(11),p=(a(45),function(e){var t=["custom-btn"];return e.types&&t.push.apply(t,Object(d.a)(e.types.map((function(e){return"custom-btn--"+e})))),c.a.createElement("button",{className:t.join(" "),onClick:e.clicked}," ",e.text," ")}),E=a(8),f=function(){var e=Object(l.g)();return console.log(e),c.a.createElement("div",{className:"menu"},c.a.createElement("img",{className:"menu__title",src:i.a,alt:"title"}),c.a.createElement("img",{className:"menu__logo",src:u.a,alt:"logo"}),c.a.createElement("div",{className:"menu__controllers"},c.a.createElement(E.b,{to:"rick-and-morty-quiz/records"},c.a.createElement(p,{text:"RECORDS",types:["menu","secondary"]})),c.a.createElement(E.b,{to:"rick-and-morty-quiz/game/settings"},c.a.createElement(p,{text:"NEW GAME",types:["menu"]}))))},N=a(3),_=a(10),h=a.n(_),b=(a(68),a(18)),g=a.n(b),v=function(e){return c.a.createElement("div",{className:"settings"},c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"field"},c.a.createElement("p",{className:"field__name"},"NAME"),c.a.createElement("input",{className:e.inputError?"field__input field__input--error":"field__input",type:"text",defaultValue:e.name,placeholder:"User name",onBlur:function(t){return e.changeName(t.target.value)}}),c.a.createElement("p",{className:e.inputError?"field__error field__error--show":"field__error"},"*Invalid name! Name must have at least 3 character.")),c.a.createElement("div",{className:"field"},c.a.createElement("p",{className:"field__name"},"ROUNDS"),c.a.createElement("div",{className:"field__count"},c.a.createElement("img",{className:"arrow arrow--decrease",src:g.a,alt:"decresae quantity",onClick:e.reduceQty}),c.a.createElement("p",{className:"number"},e.rounds),c.a.createElement("img",{className:"arrow arrow--increase",src:g.a,alt:"incresae quantity",onClick:e.addQty})))),c.a.createElement("div",{className:"btn-group"},c.a.createElement(p,{text:"CANCEL",types:["secondary","collapse"],clicked:function(){return e.action("cancel")}}),c.a.createElement(p,{text:"ACCEPT",types:["collapse"],clicked:function(){return e.action("accept")}})))},O=(a(69),a(70),a(33)),y=a.n(O),j=function(){return c.a.createElement("div",{className:"spinner"},c.a.createElement("div",{className:"spinner__frame"},c.a.createElement("img",{className:"pic",src:y.a,alt:"Loading"})),c.a.createElement("p",{className:"spinner__text"}))},k=(a(71),function(e){return c.a.createElement("div",{className:"character"},c.a.createElement("img",{className:"character__pic",src:e.img,alt:"character"}),c.a.createElement("div",{className:"character__info"},c.a.createElement("div",{className:"field"},c.a.createElement("p",{className:"field__title"},"NAME: "),c.a.createElement("p",{className:"field__data"},e.name.toUpperCase())),c.a.createElement("div",{className:"field"},c.a.createElement("p",{className:"field__title"},"SPECIES: "),c.a.createElement("p",{className:"field__data"},e.species.toUpperCase())),c.a.createElement("div",{className:"field"},c.a.createElement("p",{className:"field__title"},"ORIGIN: "),c.a.createElement("p",{className:"field__data"},e.origin.toUpperCase()))))}),S=(a(72),a(34)),w=a.n(S),x=function(e){var t="streak-num";return e.streak%5===0&&0!==e.streak&&(e.streak>5?t+=" streak-num--upten":t+=" streak-num--upfive"),c.a.createElement("div",{className:"scoreboard"},c.a.createElement("div",null,c.a.createElement("p",{className:"scoreboard__item"},"ROUND"),c.a.createElement("p",{className:"scoreboard__item"},e.round)),c.a.createElement("div",{className:"scoreboard__streak"},c.a.createElement("p",{className:t},e.streak),c.a.createElement("img",{className:"streak-logo",src:w.a,alt:"fire"})),c.a.createElement("div",null,c.a.createElement("p",{className:"scoreboard__item"},"SCORE"),c.a.createElement("p",{className:"scoreboard__item"},e.score)))},C=function(e){var t=e.addedScore?c.a.createElement("div",{className:"answer-response answer-response--correct"},c.a.createElement("p",null,"+",e.addedScore)):c.a.createElement("div",{className:"answer-response answer-response--fail"},c.a.createElement("p",null,"FAIL"));return c.a.createElement(n.Fragment,null,e.showScore?t:null,c.a.createElement("div",{className:"play"},e.loading?c.a.createElement(j,null):c.a.createElement("div",{className:"round"},c.a.createElement(x,{round:e.round,score:e.score,streak:e.streak}),c.a.createElement(k,{img:e.character.image,name:e.character.name,origin:e.character.origin.name,species:e.character.species}),c.a.createElement("div",{className:"btn-group"},c.a.createElement(p,{text:"DEAD",types:["dead","collapse"],clicked:function(){return e.answer("Dead")}}),c.a.createElement(p,{text:"ALIVE",types:["collapse"],clicked:function(){return e.answer("Alive")}})))))},R=(a(73),a(35)),q=a.n(R),A=a(36),z=a.n(A),M=function(e){var t=e.score>e.record?c.a.createElement(n.Fragment,null,c.a.createElement("h2",{className:"resume__title"},"RECORD"),c.a.createElement("img",{className:"resume__pic",src:q.a,alt:"record"}),c.a.createElement("p",null,"SCORE: ",e.score)):c.a.createElement(n.Fragment,null,c.a.createElement("h2",{className:"resume__title"},"RESUME"),c.a.createElement("img",{className:"resume__pic",src:z.a,alt:"resume"}),c.a.createElement("p",{className:"resume__score"},"SCORE: ",e.score));return c.a.createElement("div",{className:"resume"},"undefined"!==typeof e.record?c.a.createElement(n.Fragment,null,t,c.a.createElement(p,{text:"FINISH GAME",clicked:e.send})):null)},D=function(){var e=Object(l.g)(),t=Object(l.f)(),a=Object(n.useState)(""),r=Object(N.a)(a,2),s=r[0],o=r[1],i=Object(n.useState)(10),m=Object(N.a)(i,2),u=m[0],p=m[1],E=Object(n.useState)(!1),f=Object(N.a)(E,2),_=f[0],b=f[1],g=Object(n.useState)(!0),O=Object(N.a)(g,2),y=O[0],j=O[1],k=Object(n.useState)([]),S=Object(N.a)(k,2),w=S[0],x=S[1],R=Object(n.useState)(0),q=Object(N.a)(R,2),A=q[0],z=q[1],D=Object(n.useState)(0),I=Object(N.a)(D,2),U=I[0],F=I[1],B=Object(n.useState)(0),L=Object(N.a)(B,2),T=L[0],Q=L[1],G=Object(n.useState)(0),W=Object(N.a)(G,2),J=W[0],P=W[1],V=Object(n.useState)(!1),H=Object(N.a)(V,2),$=H[0],K=H[1],X=Object(n.useState)(void 0),Y=Object(N.a)(X,2),Z=Y[0],ee=Y[1];Object(n.useEffect)((function(){s||t.push("./settings")}),[]);var te=function(e){o(e)},ae=function(){p((function(e){return e<30?e+=5:e}))},ne=function(){p((function(e){return e>5?e-=5:e}))},ce=function(e){"accept"===e?s.length>2?(t.push("./play"),re()):b(!0):t.push("")};Object(n.useEffect)((function(){"/rick-and-morty-quiz/game/play"===t.location.pathname&&(w.length===u?setTimeout((function(){return j(!1)}),500):re())}),[w]),Object(n.useEffect)((function(){$&&setTimeout((function(){K(!1),A+1!==u?z((function(e){return e+1})):t.push("./resume")}),1100)}),[$]);var re=function e(){var t=u-w.length,a=Array.from({length:t},(function(){return Math.floor(591*Math.random())}));h.a.get("https://rickandmortyapi.com/api/character/".concat(a.join(","))).then((function(t){if(a.length>1){var n=t.data.filter((function(e){return"Alive"===e.status||"Dead"===e.status}));n?x((function(e){return[].concat(Object(d.a)(e),Object(d.a)(n))})):e()}else"Alive"===t.data.status||"Dead"===t.data.status?x((function(e){return[].concat(Object(d.a)(e),[t.data])})):e()}))},se=function(e){if(e===w[A].status){var t=100*(Math.floor(T/5)+1);Q((function(e){return e+1})),F((function(e){return e+t})),P(t)}else Q(0),P(0);K(!0)};Object(n.useEffect)((function(){"/rick-and-morty-quiz/game/resume"===t.location.pathname&&h.a.get("https://rick-and-morty-quiz-c69bc.firebaseio.com/records.json?orderBy=%22score%22&limitToLast=1").then((function(e){e.data?ee(e.data[Object.keys(e.data)[0]].score):ee(0)}))}),[t.location.pathname]);var le=function(){var e={user:s,score:U};h.a.post("https://rick-and-morty-quiz-c69bc.firebaseio.com/records.json",e).then((function(){return t.push("")}))};return c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"".concat(e.path,"/settings"),render:function(){return c.a.createElement(v,{addQty:ae,reduceQty:ne,changeName:te,action:ce,name:s,rounds:u,inputError:_})}}),c.a.createElement(l.a,{path:"".concat(e.path,"/play"),render:function(){return c.a.createElement(C,{loading:y,character:w[A],round:[A+1,u].join(" / "),score:U,showScore:$,addedScore:J,streak:T,answer:se})}}),c.a.createElement(l.a,{path:"".concat(e.path,"/resume"),render:function(){return c.a.createElement(M,{send:le,record:Z,score:U})}}))},I=(a(74),function(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){h.a.get('https://rick-and-morty-quiz-c69bc.firebaseio.com/records.json?orderBy="score"&limitToLast=10').then((function(e){var t=Object.keys(e.data).map((function(t){var a=e.data[t];return a.id=t,a}));t.sort((function(e,t){return e.score>t.score?-1:e.score<t.score?1:0})),r(t)}))}),[]);var s=a?c.a.createElement("div",{className:"records"},c.a.createElement("h2",{className:"records__title"},"BEST SCORES"),c.a.createElement("div",{className:"records__scores"},c.a.createElement("div",{className:"header"},c.a.createElement("p",null,"USER"),c.a.createElement("p",null,"SCORE")),a.map((function(e){return c.a.createElement("div",{key:e.id,className:"row"},c.a.createElement("p",null,e.user),c.a.createElement("p",null,e.score))}))),c.a.createElement(E.b,{to:"/"},c.a.createElement(p,{text:"MENU",types:["secondary"]}))):null;return c.a.createElement(n.Fragment,null,s)}),U=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/rick-and-morty-quiz/game",component:D}),c.a.createElement(l.a,{path:"/rick-and-morty-quiz/records",component:I}),c.a.createElement(l.a,{path:"/",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E.a,null,c.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ed267808.chunk.js.map