(this.webpackJsonpwedding=this.webpackJsonpwedding||[]).push([[0],{12:function(e,a,t){e.exports=t(18)},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(5),r=t.n(c),s=(t(17),t(6)),i=t(7),o=t(11),m=t(10),u=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={days:0,hours:0,min:0,sec:0},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var a=e.calculateCountdown(e.props.date);a?e.setState(a):e.stop()}),1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(e){var a=(Date.parse(new Date(e))-Date.parse(new Date))/1e3;if(a<=0)return!1;var t={years:0,days:0,hours:0,min:0,sec:0,millisec:0};return a>=31557600&&(t.years=Math.floor(a/31557600),a-=365.25*t.years*86400),a>=86400&&(t.days=Math.floor(a/86400),a-=86400*t.days),a>=3600&&(t.hours=Math.floor(a/3600),a-=3600*t.hours),a>=60&&(t.min=Math.floor(a/60),a-=60*t.min),t.sec=a,t}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return l.a.createElement("div",{className:"Countdown"},l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.days)),l.a.createElement("span",null,1===e.days?"Day":"Days"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.hours)),l.a.createElement("span",null,"Hours"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.min)),l.a.createElement("span",null,"Min"))),l.a.createElement("span",{className:"Countdown-col"},l.a.createElement("span",{className:"Countdown-col-element"},l.a.createElement("strong",null,this.addLeadingZeros(e.sec)),l.a.createElement("span",null,"Sec"))))}}]),t}(n.Component);u.defaultProps={date:new Date};var d=u,E=function(e){return l.a.createElement("div",{className:"card__side card__side--front u-center-center-column"},l.a.createElement("div",{className:"front__content u-center-center-column"},l.a.createElement("i",null,"icon"),l.a.createElement("h1",null,"Fran & Philippe"),l.a.createElement("h2",null,"24/10/2020"),l.a.createElement(d,{date:"2020-10-24T00:00:00"})))},_=function(e){var a=e.icon,t=e.text,n=e.href,c=a;return l.a.createElement("div",{className:"iconText"},l.a.createElement(c,{size:20}),l.a.createElement("a",{href:n,className:"iconText__span",target:"_blank"},t))},v=t(3),p=t(8),g=function(e){var a=e.title,t=e.date,n=e.time,c=e.address,r=e.text,s=e.href;return l.a.createElement("div",{className:"backLeft u-padding-"},l.a.createElement("div",{className:"backLeft__TitleContainer"},l.a.createElement("h1",null,a)),l.a.createElement("div",{className:"u-center-center-column"},l.a.createElement("div",{className:"backLeft__IconContainer"},l.a.createElement(_,{icon:v.a,text:t}),l.a.createElement(_,{icon:p.a,text:n}),l.a.createElement(_,{icon:v.b,text:c,href:s}))),l.a.createElement("article",null,r))},h=t(2),f=function(e){return l.a.createElement("ul",{className:"navigation__list"},l.a.createElement("li",{className:"navigation__item u-center-center-row"},l.a.createElement("button",{className:"navigation__item__button"},l.a.createElement(h.a,{size:30})),l.a.createElement("span",{className:"navigation__item__span"},"Welcome")),l.a.createElement("li",{className:"navigation__item u-center-center-row"},l.a.createElement("button",{className:"navigation__item__button"},l.a.createElement(h.a,{size:30})),l.a.createElement("span",{className:"navigation__item__span"},"Welcome")),l.a.createElement("li",{className:"navigation__item u-center-center-row"},l.a.createElement("button",{className:"navigation__item__button"},l.a.createElement(h.a,{size:30})),l.a.createElement("span",{className:"navigation__item__span"},"Welcome")),l.a.createElement("li",{className:"navigation__item u-center-center-row"},l.a.createElement("button",{className:"navigation__item__button"},l.a.createElement(h.a,{size:30})),l.a.createElement("span",{className:"navigation__item__span"},"Welcome")),l.a.createElement("li",{className:"navigation__item u-center-center-row"},l.a.createElement("button",{className:"navigation__item__button"},l.a.createElement(h.a,{size:30})),l.a.createElement("span",{className:"navigation__item__span"},"Welcome")))},N=t(9),b=t.n(N),w=function(e){return l.a.createElement("div",{className:"postStampContainer"},l.a.createElement("img",{src:b.a,className:"postStamp",width:"250rem",height:"140rem"}))},k=function(e){return l.a.createElement("div",{className:"backRight u-padding-1"},l.a.createElement(w,null),l.a.createElement("div",null,"\xa0"),l.a.createElement(f,null))},y=function(e){return l.a.createElement("div",{className:"navigation"},l.a.createElement("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle"}),l.a.createElement("label",{htmlFor:"navi-toggle",className:"navigation__button"},l.a.createElement("span",{className:"navigation__icon"},"\xa0")),l.a.createElement("div",{className:"navigation__background"},"\xa0"),l.a.createElement("nav",{className:"navigation__nav"},l.a.createElement(f,null)))},x=function(e){return l.a.createElement("div",{className:"card__side card__side--back"},l.a.createElement(g,{title:"Say Hallelujah & Yes",date:"24 Oktober 2020",time:"14:00",address:"Sint-Pietersplein, 9000 Gent",href:"https://www.google.com/maps/place/Sint-Pietersabdij/@51.0424485,3.72335,17z/data=!4m13!1m7!3m6!1s0x47c37150b0f4c601:0xc78bf8eb1d6e094a!2sSint-Pietersplein,+9000+Gent!3b1!8m2!3d51.0424485!4d3.725544!3m4!1s0x47c37150b165dd81:0x6a023c4d7bdac0a8!8m2!3d51.0421385!4d3.7267464",text:"Wij verwerlkomen u graag in de Sint-Pieterskerk."}),l.a.createElement(k,null),l.a.createElement(y,null))};var C=function(){return l.a.createElement("div",{className:"card"},l.a.createElement(E,null),l.a.createElement(x,null))};var S=function(){return l.a.createElement(C,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t.p+"static/media/hero-small.94939136.jpg"}},[[12,1,2]]]);
//# sourceMappingURL=main.80dd0a71.chunk.js.map