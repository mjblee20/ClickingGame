(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t){t.exports=[{id:1,src:"./carbotMarine.jpg",alt:"Carbot Marine"},{id:2,src:"./carbotZergling.jpg",alt:"Carbot Zergling"},{id:3,src:"./carbotZealot.jpeg",alt:"Carbot Zealot"},{id:4,src:"./carbotMarauder.jpg",alt:"Carbot Marauder"},{id:5,src:"./carbotHydralisk.png",alt:"Carbot Hydralisk"},{id:6,src:"./carbotStalker.jpg",alt:"Carbot Stalker"},{id:7,src:"./carbotHellbat.png",alt:"Carbot Hellbat"},{id:8,src:"./carbotInfestor.png",alt:"Carbot Infestor"},{id:9,src:"./carbotImmortal.png",alt:"Carbot Immortal"},{id:10,src:"./carbotThor.png",alt:"Carbot Thor"},{id:11,src:"./carbotUltra.png",alt:"Carbot Ultralisk"},{id:12,src:"./carbotArchon.jpg",alt:"Carbot Archon"}]},,,,,,,,function(t,e,a){t.exports=a(20)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(15),a(2)),i=a(3),s=a(5),u=a(4),d=a(6);a(16);var m=function(t){return r.a.createElement("img",{className:"images",src:"/clickinggame"+t.url,alt:"/clickinggame"+t.info})},f=(a(17),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={clicked:!1},a}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"squares",value:this.props.id,onClick:function(){return t.props.handleClick(t.props.id)}},r.a.createElement("h6",null,this.props.id),r.a.createElement(m,{url:this.props.src,info:this.props.alt}))}}]),e}(n.Component));var b=function(t){return r.a.createElement("div",Object.assign({className:"row".concat(t.fluid?"-fluid":"")},t))};var p=function(t){var e=t.size.split(" ").map(function(t){return"col-"+t}).join(" ");return r.a.createElement("div",Object.assign({className:e},t))},g=a(1);var h=function(t){var e=t.type,a=void 0===e?"default":e,n=t.className,c=t.children,o=t.onClick;return r.a.createElement("button",{onClick:o,className:["btn btn-lg","btn-".concat(a),n].join(" ")},c)},k=(a(18),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={score:0,win:0,loss:0,randomArr:g,clicked:[]},a.reset=function(){a.setState({score:0,randomArr:g,clicked:[]}),a.randomize(g)},a.randomize=function(t){console.log("shuffles image orders");for(var e=t,n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),c=[e[r],e[n]];e[n]=c[0],e[r]=c[1]}a.setState({randomArr:e})},a.handleClick=function(t){console.log("clicked"),-1===a.state.clicked.indexOf(t)?(a.increment(),a.setState({clicked:a.state.clicked.concat(t)})):a.defeat(),console.log(a.state.clicked),console.log("handleclick squares")},a.victory=function(){console.log("win"),a.setState({win:a.state.win+1,score:0}),a.reset()},a.defeat=function(){console.log("loss"),a.setState({loss:a.state.loss+1,score:0}),a.reset()},a.increment=function(){console.log("increment"),a.setState({score:a.state.score+1}),11===a.state.score&&a.victory(),a.randomize(g)},a}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.randomize(g)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"playfield"},r.a.createElement("div",null,r.a.createElement("h3",null,"Current Score: ",this.state.score," Wins: ",this.state.win," Losses: ",this.state.loss)),r.a.createElement(b,null,r.a.createElement(p,{className:"d-flex justify-content-around flex-wrap",size:"6"},this.state.randomArr.map(function(e,a){return r.a.createElement(f,{key:a,handleClick:t.handleClick,id:e.id,src:e.src,alt:e.alt})}))),r.a.createElement(b,null,r.a.createElement(h,{onClick:this.randomize},"Click me to restart!")))}}]),e}(n.Component));var v=function(t){return r.a.createElement("div",Object.assign({className:"container".concat(t.fluid?"-fluid":"")},t))};a(19);var C=function(){return r.a.createElement(v,null,r.a.createElement(k,null))};o.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f12fd0c6.chunk.js.map