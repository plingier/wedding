(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(15),a(2)),o=a(3),l=a(5),m=a(4),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={days:0,hours:0,min:0,sec:0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()}),1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var t=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(t<=0)return!1;var a={years:0,days:0,hours:0,min:0,sec:0,millisec:0};return t>=31557600&&(a.years=Math.floor(t/31557600),t-=365.25*a.years*86400),t>=86400&&(a.days=Math.floor(t/86400),t-=86400*a.days),t>=3600&&(a.hours=Math.floor(t/3600),t-=3600*a.hours),t>=60&&(a.min=Math.floor(t/60),t-=60*a.min),a.sec=t,a}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",{className:"Countdown"},r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.days)),r.a.createElement("span",null,1===e.days?"Day":"Days"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.hours)),r.a.createElement("span",null,"Hours"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.min)),r.a.createElement("span",null,"Min"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.sec)),r.a.createElement("span",null,"Sec"))))}}]),a}(n.Component);d.defaultProps={date:new Date};var u=d,p=function(e){return r.a.createElement("div",{className:"card__side card__side--front u-center-center-column"},r.a.createElement("div",{className:"front__content u-center-center-column"},r.a.createElement("i",null,"icon"),r.a.createElement("h1",null,"Fran & Philippe"),r.a.createElement("h2",null,"24/10/2020"),r.a.createElement(u,{date:"2020-10-24T00:00:00"}),r.a.createElement("button",{className:"front__cta"},"Meer info")))},h=a(1),b=a(9),g=function(e){var t=e.content,a=e.updateButtonChecked,n=e.updateShow,c=t.map((function(e,t){return r.a.createElement("li",{className:"navigation__item",key:t,onClick:function(e){return function(e){!0===window.matchMedia("(max-width: 60em),(orientation: portrait)").matches?a():n(e)}(t)}},r.a.createElement("a",{href:["#"+e.title],className:"navigation__hyper"},r.a.createElement("div",{className:"navigation__item__icon"},r.a.createElement("div",{className:"navigation__item__icon__text"},r.a.createElement(b.a,{size:30}))),r.a.createElement("span",{className:"navigation__item__span"},e.title)))}));return r.a.createElement("ul",{className:"navigation__list"},c)},v=a(8),f=a.n(v),w=function(e){return r.a.createElement("div",{className:"postStampContainer"},r.a.createElement("img",{src:f.a,className:"postStamp",width:"250rem",height:"140rem",alt:"Poststamp"}))},E=function(e){var t=e.content,a=e.updateShow;return r.a.createElement("div",{className:"backRight u-padding-1"},r.a.createElement(w,null),r.a.createElement("div",null,"\xa0"),r.a.createElement(g,{content:t,updateShow:a}))},k=function(){return r.a.createElement("div",{className:"backLeft2"},r.a.createElement("div",{className:"backLeft2__parallax"}),r.a.createElement("div",{className:"backLeft2__container"},r.a.createElement("h2",{className:"backLeft2__title"},"Burgerlijk huwelijk"),r.a.createElement("h3",{className:"backLeft2__subTitle"},"Vrijdag 23 Oktober 2020",r.a.createElement("br",null),r.a.createElement("strong",null,"Receptie - 9u45   >>   "),r.a.createElement("strong",null,"Receptie - 9u45   >>   "),r.a.createElement("strong",null,"Receptie - 9u45")),r.a.createElement("p",{className:"backLeft2__address"},r.a.createElement("em",null,"Stadhuis Gent"),r.a.createElement("br",null),"Stadhuisstraat 123",r.a.createElement("br",null),"9000 Gent"),r.a.createElement("a",{className:"backLeft2__link",href:"https://www.google.com/maps/dir/Parking+Sint-Pietersplein+(P10),+Sint-Pietersplein,+Gent/Onze-Lieve-Vrouw+Sint-Pieterskerk,+Sint-Pietersplein,+Gent/@51.0420331,3.7266986,17z/data=!4m8!4m7!1m2!1m1!1s0x47c371575524e343:0x952be0a3326e6942!1m2!1m1!1s0x47c37150a5ee13b3:0x3f63a9657888f6ba!3e2"},"Navigeer")),r.a.createElement("iframe",{src:"https://open.spotify.com/embed/playlist/4ngwgJasrc2zgrYDy83exv",width:"600",height:"300",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))},_=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).updateButtonChecked=function(){!0===e.state.buttonChecked?e.setState({buttonChecked:!1}):e.setState({buttonChecked:!0})},e.state={buttonChecked:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.content;return r.a.createElement("div",{className:"navigation"},r.a.createElement("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle",checked:this.state.buttonChecked,onChange:this.updateButtonChecked}),r.a.createElement("label",{htmlFor:"navi-toggle",className:"navigation__button"},r.a.createElement("span",{className:"navigation__icon"},"\xa0")),r.a.createElement("div",{className:"navigation__background"},"\xa0"),r.a.createElement("nav",{className:"navigation__nav"},r.a.createElement(g,{content:e,updateButtonChecked:this.updateButtonChecked})))}}]),a}(n.Component),x=[{id:0,title:"Burgerlijke trouw",date:"23 Oktober 2020",time:"09:45",address:"Stadhuisstraat 123, 9000 Gent",gMaps:"https://www.google.com/maps/place/Sint-Pietersabdij/@51.0424485,3.72335,17z/data=!4m13!1m7!3m6!1s0x47c37150b0f4c601:0xc78bf8eb1d6e094a!2sSint-Pietersplein,+9000+Gent!3b1!8m2!3d51.0424485!4d3.725544!3m4!1s0x47c37150b165dd81:0x6a023c4d7bdac0a8!8m2!3d51.0421385!4d3.7267464",text:"Wij verwelkomen u graag in het stadhuis van Gent voor onze burgerlijke trouw."},{id:1,title:"Say Hallelujah & Yes",date:"24 Oktober 2020",time:"14:00",address:"Sint-Pietersplein, 9000 Gent",gMaps:"https://www.google.com/maps/place/Sint-Pietersabdij/@51.0424485,3.72335,17z/data=!4m13!1m7!3m6!1s0x47c37150b0f4c601:0xc78bf8eb1d6e094a!2sSint-Pietersplein,+9000+Gent!3b1!8m2!3d51.0424485!4d3.725544!3m4!1s0x47c37150b165dd81:0x6a023c4d7bdac0a8!8m2!3d51.0421385!4d3.7267464",text:"Wij verwerlkomen u graag in de Sint-Pieterskerk."},{id:2,title:"Aperitief",date:"24 Oktober 2020",time:"17:00",address:"Hof ten bosse straat",gMaps:"https://www.google.com/maps/place/Sint-Pietersabdij/@51.0424485,3.72335,17z/data=!4m13!1m7!3m6!1s0x47c37150b0f4c601:0xc78bf8eb1d6e094a!2sSint-Pietersplein,+9000+Gent!3b1!8m2!3d51.0424485!4d3.725544!3m4!1s0x47c37150b165dd81:0x6a023c4d7bdac0a8!8m2!3d51.0421385!4d3.7267464",text:"Wij verwelkomen u graag voor een heerlijk aperitief."},{id:3,title:"Diner",date:"24 Oktober 2020",time:"19:00",address:"Hof ten bosse straat",gMaps:"https://www.google.com/maps/place/Sint-Pietersabdij/@51.0424485,3.72335,17z/data=!4m13!1m7!3m6!1s0x47c37150b0f4c601:0xc78bf8eb1d6e094a!2sSint-Pietersplein,+9000+Gent!3b1!8m2!3d51.0424485!4d3.725544!3m4!1s0x47c37150b165dd81:0x6a023c4d7bdac0a8!8m2!3d51.0421385!4d3.7267464",text:"Wij verwerlkomen u graag voor een heerlijk diner."},{id:4,title:"Dessert",date:"24 Oktober 2020",time:"21:00",address:"Hof ten bosse straat",gMaps:"https://www.google.com/maps/place/Sint-Pietersabdij/@51.0424485,3.72335,17z/data=!4m13!1m7!3m6!1s0x47c37150b0f4c601:0xc78bf8eb1d6e094a!2sSint-Pietersplein,+9000+Gent!3b1!8m2!3d51.0424485!4d3.725544!3m4!1s0x47c37150b165dd81:0x6a023c4d7bdac0a8!8m2!3d51.0421385!4d3.7267464",text:"Wij verwerlkomen u graag voor een heerlijk dessert."}],j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).updateShow=function(t){var a=e.state.content.map((function(e,a){return a===t?Object(h.a)(Object(h.a)({},e),{},{show:!0}):Object(h.a)(Object(h.a)({},e),{},{show:!1})}));e.setState({content:a})},e.state={content:[]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.content,t={};!0===matchMedia("(max-width: 60em),(orientation: portrait)").matches?t=e.map((function(e,t){return r.a.createElement(k,{key:t,title:e.title,date:e.date,time:e.time,address:e.address,text:e.text,gMaps:e.gMaps})})):t=e.filter((function(e){return!0===e.show})).map((function(e,t){return r.a.createElement(k,{key:t,title:e.title,date:e.date,time:e.time,address:e.address,text:e.text,gMaps:e.gMaps})}));return r.a.createElement("div",{className:"card__side card__side--back"},t,r.a.createElement(E,{content:e,updateShow:this.updateShow}),r.a.createElement(_,{content:e}))}},{key:"componentDidMount",value:function(){var e=this,t=x.map((function(e,t){return 0===t?Object(h.a)(Object(h.a)({},e),{},{show:!0}):Object(h.a)(Object(h.a)({},e),{},{show:!1})}));this.setState({content:t}),window.matchMedia("(max-width: 60em),(orientation: portrait)").addEventListener("change",(function(){e.forceUpdate()}))}}]),a}(n.Component);var N=function(){return!0===!!document.documentMode?r.a.createElement("p",null,"Please do not use an old browser"):r.a.createElement("div",{className:"card"},r.a.createElement(p,null),r.a.createElement(j,null))};var S=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/hero-small.94939136.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.d56aa307.chunk.js.map