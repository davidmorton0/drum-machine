(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(4),s=n(7),r=n(5),c=n(1),o=n(8),u=n(0),d=n.n(u),l=n(6),m=n.n(l);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p={Q:{text:"Q",url:"./assets/audio//Brk_Snr.mp3",description:"Snare"},W:{text:"W",url:"./assets/audio//side_stick_1.mp3",description:"Side Stick"},E:{text:"E",url:"./assets/audio//punchy_kick_1.mp3",description:"Punchy Kick"},A:{text:"A",url:"./assets/audio//Bld_H1.mp3",description:"Closed High Hat"},S:{text:"S",url:"./assets/audio//Dry_Ohh.mp3",description:"Open High Hat"},D:{text:"D",url:"./assets/audio//Dsc_Oh.mp3",description:"Dsc Oh"},Z:{text:"Z",url:"./assets/audio//Kick_n_Hat.mp3",description:"Kick n Hat"},X:{text:"X",url:"./assets/audio//RP4_KICK_1.mp3",description:"Kick"},C:{text:"C",url:"./assets/audio//Cev_H2.mp3",description:"Cymbal"}},h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={current:""},n.handleKeyPress=n.handleKeyPress.bind(Object(c.a)(n)),n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){var t=String.fromCharCode(e.keyCode);p[t]&&this.play(t)}},{key:"play",value:function(e){document.getElementById(e).play(),this.setState({current:p[e].description})}},{key:"render",value:function(){var e=this,t=Object.keys(p).map((function(t){return d.a.createElement("div",{className:"drum-pad",id:"drum-".concat(t),onClick:function(){e.play(t)}},d.a.createElement("p",{className:"keyText"},t),d.a.createElement("audio",{className:"clip",id:t,src:p[t].url}))}));return d.a.createElement("div",{id:"drum-machine"},t,d.a.createElement("div",{id:"display"},d.a.createElement("p",null,this.state.current)))}}]),t}(d.a.Component);m.a.render(d.a.createElement(h,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d7d83105.chunk.js.map