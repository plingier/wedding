(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/front2.fb86cff2.png"},16:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),c=a.n(l),s=(a(21),a(3)),i=a(4),o=a(6),m=a(5),u=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={years:0,days:0,hours:0,min:0,sec:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.calculateCountdown(e.props.date);t?e.setState(t):e.stop()}),1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var t=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(t<=0)return!1;var a={years:0,days:0,hours:0,min:0,sec:0,millisec:0};return t>=86400&&(a.days=Math.floor(t/86400),t-=86400*a.days),t>=3600&&(a.hours=Math.floor(t/3600),t-=3600*a.hours),t>=60&&(a.min=Math.floor(t/60),t-=60*a.min),a.sec=t,a}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",{className:"Countdown"},r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.days)),r.a.createElement("span",null,1===e.days?"Dag":"Dagen"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.hours)),r.a.createElement("span",null,1===e.hours?"Uur":"Uren"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.min)),r.a.createElement("span",null,"Min"))),r.a.createElement("span",{className:"Countdown-col"},r.a.createElement("span",{className:"Countdown-col-element"},r.a.createElement("strong",null,this.addLeadingZeros(e.sec)),r.a.createElement("span",null,"Sec"))))}}]),a}(n.Component);u.defaultProps={date:new Date};var d=u,h=a(9),E=function(e){return r.a.createElement("div",{className:"card__side card__side--front u-center-center-column"},r.a.createElement("div",{className:"front__content u-center-center-column"},r.a.createElement(h.a,{size:30}),r.a.createElement("h1",null,"Fran & Philippe"),r.a.createElement("h2",null,"09/10/2021"),r.a.createElement(d,{date:"2021-10-09T14:00:00"}),r.a.createElement("button",{className:"front__cta"},"Meer info")))},p=a(2),_=a(11),v=a(10),f=a(12),b=a(14),k=a(13),g=function(e){var t=e.content,a=e.updateButtonChecked,n=e.updateShow,l=t.map((function(e,t){return r.a.createElement("li",{className:"navigation__item",key:t,onClick:function(e){return function(e){!0===window.matchMedia("(max-width: 60em),(orientation: portrait)").matches?a():n(e)}(t)}},r.a.createElement("a",{href:["#"+e.title],className:"navigation__hyper"},r.a.createElement("div",{className:"navigation__item__icon"},r.a.createElement("div",{className:"navigation__item__icon__text"},function(e){var t="",a={burg:v.a,kerk:_.a,venue:f.a,agenda:k.a,feest:b.a};switch(e){case 0:t=a.burg;break;case 1:t=a.kerk;break;case 2:t=a.venue;break;case 3:t=a.feest;break;case 4:t=a.agenda;break;default:t=a.kerk}var n=t;return r.a.createElement(n,null)}(t))),r.a.createElement("span",{className:"navigation__item__span"},e.title)))}));return r.a.createElement("ul",{className:"navigation__list"},l)},N=a(15),w=a.n(N),y=function(e){return r.a.createElement("div",{className:"postStampContainer"},r.a.createElement("img",{src:w.a,className:"postStamp",width:"250rem",height:"140rem",alt:"Poststamp"}))},C=function(e){var t=e.content,a=e.updateShow;return r.a.createElement("div",{className:"backRight u-padding-1"},r.a.createElement(y,null),r.a.createElement("div",null,"\xa0"),r.a.createElement(g,{content:t,updateShow:a}))},j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).updateButtonChecked=function(){!0===e.state.buttonChecked?e.setState({buttonChecked:!1}):e.setState({buttonChecked:!0})},e.state={buttonChecked:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.content;return r.a.createElement("div",{className:"navigation"},r.a.createElement("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle",checked:this.state.buttonChecked,onChange:this.updateButtonChecked}),r.a.createElement("label",{htmlFor:"navi-toggle",className:"navigation__button"},r.a.createElement("span",{className:"navigation__icon"},"\xa0")),r.a.createElement("div",{className:"navigation__background"},"\xa0"),r.a.createElement("nav",{className:"navigation__nav"},r.a.createElement(g,{content:e,updateButtonChecked:this.updateButtonChecked})))}}]),a}(n.Component),S=[{id:0,leftContent:"stad",title:"Burgerlijke trouw"},{id:1,leftContent:"church",title:"Kerkelijke trouw"},{id:2,leftContent:"venue",title:"Avondfeest"},{id:3,leftContent:"party",title:"Muziekdoos"},{id:4,leftContent:"rsvp",title:"RSVP"}],O=function(e){return r.a.createElement("div",{className:"stad__container",id:e.title},r.a.createElement("h2",{className:"stad__title"},"Burgerlijke trouw"),r.a.createElement("h2",{className:"stad__subTitle"},"I do! ... Do you?"),r.a.createElement("h3",{className:"stad__date"},"Vrijdag 23 Oktober 2020",r.a.createElement("br",null),r.a.createElement("strong",null,"9u45")),r.a.createElement("p",{className:"stad__address"},r.a.createElement("em",null,"Stadhuis Gent"),r.a.createElement("br",null),"Botermarkt 1",r.a.createElement("br",null),"9000 Gent"),r.a.createElement("a",{className:"stad__link",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/dir/Parking+Sint-Michiels+(P7)/Stadhuis+Gent,+Botermarkt,+Gent/@51.0562765,3.7204698,16z/data=!4m14!4m13!1m5!1m1!1s0x47c371416ebd5a63:0x5bfa68b023a0da43!2m2!1d3.7195799!2d51.0529697!1m5!1m1!1s0x47c371464ea5eafb:0x1ef8658035adcc4f!2m2!1d3.7252713!2d51.0544739!3e2"},"Navigeer"))},x=function(e){return r.a.createElement("div",{className:"stad__container",id:e.title},r.a.createElement("h2",{className:"stad__title"},"Kerkelijke trouw"),r.a.createElement("h2",{className:"stad__subTitle"},"Sing Hallelujah!"),r.a.createElement("h3",{className:"stad__date"},"Zaterdag 9 Oktober 2021",r.a.createElement("br",null),r.a.createElement("strong",null,"14u00")),r.a.createElement("p",{className:"stad__address"},r.a.createElement("em",null,"Sint-Pieterskerk"),r.a.createElement("br",null),"Sint-Pietersplein",r.a.createElement("br",null),"9000 Gent"),r.a.createElement("a",{className:"stad__link",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/dir/Parking+Sint-Pietersplein+(P10),+Sint-Pietersplein,+Gent/Onze-Lieve-Vrouw+Sint-Pieterskerk,+Sint-Pietersplein,+Gent/@51.0420331,3.7266986,17z/data=!4m8!4m7!1m2!1m1!1s0x47c371575524e343:0x952be0a3326e6942!1m2!1m1!1s0x47c37150a5ee13b3:0x3f63a9657888f6ba!3e2"},"Navigeer"))},P=function(e){return r.a.createElement("div",{className:"venue"},r.a.createElement("div",{className:"stad__container",id:e.title},r.a.createElement("h2",{className:"stad__title"},"Avondfeest"),r.a.createElement("h2",{className:"stad__subTitle"},"Let's eat! Let's dance!"),r.a.createElement("h3",{className:"stad__date"},"Zaterdag 9 Oktober 2021",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("div",{className:"venue__blocks"},"Receptie",r.a.createElement("br",null),"17u30"),r.a.createElement("div",{className:"venue__blocks"},"Diner",r.a.createElement("br",null),"19u00"),r.a.createElement("div",{className:"venue__blocks"},"Dessert",r.a.createElement("br",null),"21u00"))),r.a.createElement("p",{className:"stad__address"},r.a.createElement("em",null,"Hof ten Bosse"),r.a.createElement("br",null),"Ten Bosse 14",r.a.createElement("br",null),"9070 Destelbergen",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("em",null,"(Shuttle vanaf Laarnebaan 105)")),r.a.createElement("a",{className:"stad__link",target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/cNG2TiF2thUSZVDD6"},"Navigeer")))},D=function(e){return r.a.createElement("div",{className:"stad__container",id:e.title},r.a.createElement("h2",{className:"stad__title"},"Muziekdoos"),r.a.createElement("h2",{className:"stad__subTitle"},"Possibly stirred, definitely shakin'"),r.a.createElement("br",null),r.a.createElement("p",null,"Goeie dansplaatjes? Voeg ze toe aan deze lijst (via de app)!"),r.a.createElement("iframe",{src:"https://open.spotify.com/embed/playlist/4ngwgJasrc2zgrYDy83exv",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",loading:"lazy",title:"Spotify playlist",className:"playlist"}))},M=function(e){return r.a.createElement("div",null,(window.matchMedia("screen and (max-width: 60em),(orientation: portrait)").matches,r.a.createElement("div",{className:"stad__container",id:e.title},r.a.createElement("h2",{className:"stad__title"},"RSVP"),r.a.createElement("h2",{className:"stad__subTitle"},"Are you in?"),r.a.createElement("p",null,"Wij kijken er alvast naar uit om deze dag met jullie te beleven!"),r.a.createElement("p",null,"Klik binnenkort op volgende link om jullie aanwezigheid te bevestigen."),r.a.createElement("a",{className:"stad__link"},"RSVP"))))},B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).updateShow=function(t){var a=e.state.content.map((function(e,a){return a===t?Object(p.a)(Object(p.a)({},e),{},{show:!0}):Object(p.a)(Object(p.a)({},e),{},{show:!1})}));e.setState({content:a})},e.state={content:[]},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.content,t={stad:O,church:x,venue:P,party:D,rsvp:M},a={};!0===matchMedia("(max-width: 60em),(orientation: portrait)").matches?a=e.map((function(e){return r.a.createElement(t[e.leftContent],{key:e.id,title:e.title})})):a=e.filter((function(e){return!0===e.show})).map((function(e){return r.a.createElement(t[e.leftContent],{key:e.id})}));return a=a.map((function(e,t){return r.a.createElement("div",{className:"backLeft2"},e,r.a.createElement("div",{className:"backLeft2__parallax backLeft2__parallax--".concat(t)}))})),r.a.createElement("div",{className:"card__side card__side--back"},a,r.a.createElement(C,{content:e,updateShow:this.updateShow}),r.a.createElement(j,{content:e}))}},{key:"componentDidMount",value:function(){var e=this,t=S.map((function(e,t){return 0===t?Object(p.a)(Object(p.a)({},e),{},{show:!0}):Object(p.a)(Object(p.a)({},e),{},{show:!1})}));this.setState({content:t}),window.matchMedia("screen and (max-width: 60em),(orientation: portrait)").addListener((function(){console.log("event"),e.forceUpdate()}))}}]),a}(n.Component);var L=function(){return!0===!!document.documentMode?r.a.createElement("p",null,"Please do not use an old browser"):r.a.createElement("div",{className:"card"},r.a.createElement(E,null),r.a.createElement(B,null))};var z=function(){return r.a.createElement(L,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.8f069018.chunk.js.map