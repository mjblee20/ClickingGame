(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{url:1,src:"https://via.placeholder.com/150",alt:"Carbot Marine"},{url:2,src:"https://via.placeholder.com/150",alt:"Carbot Zergling"},{url:3,src:"https://via.placeholder.com/150",alt:"Carbot Zealot"},{url:4,src:"https://via.placeholder.com/150",alt:"Carbot Marauder"},{url:5,src:"https://via.placeholder.com/150",alt:"Carbot Hydralisk"},{url:6,src:"https://via.placeholder.com/150",alt:"Carbot Stalker"},{url:7,src:"https://via.placeholder.com/150",alt:"Carbot Tank"},{url:8,src:"https://via.placeholder.com/150",alt:"Carbot Infestor"},{url:9,src:"https://via.placeholder.com/150",alt:"Carbot Immortal"},{url:10,src:"https://via.placeholder.com/150",alt:"Carbot Thor"},{url:11,src:"https://via.placeholder.com/150",alt:"Carbot Ultralisk"},{url:12,src:"https://via.placeholder.com/150",alt:"Carbot Colossus"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),l=a.n(c),o=(a(15),a(2)),s=a(3),i=a(5),u=a(4),m=a(6);a(16);var d=function(e){return n.a.createElement("img",{className:"images",src:e.url,alt:e.info})},h=(a(17),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={clicked:!1},a.handleClick=function(){console.log("handleclick squares");var e=!a.state.clicked;a.setState({clicked:!0}),a.props.onClick(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"squares",onClick:this.handleClick},n.a.createElement("h6",null,this.props.url),n.a.createElement(d,{url:this.props.src,info:this.props.alt}))}}]),t}(r.Component));var p=function(e){return n.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var f=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return n.a.createElement("div",Object.assign({className:t},e))},v=a(1);var b=function(e){var t=e.type,a=void 0===t?"default":t,r=e.className,c=e.children,l=e.onClick;return n.a.createElement("button",{onClick:l,className:["btn btn-lg","btn-".concat(a),r].join(" ")},c)},k=(a(18),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,win:0,loss:0,randomArr:v},a.reset=function(){a.setState({}),a.randomize()},a.randomize=function(e){for(var t=e,r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),c=[t[n],t[r]];t[r]=c[0],t[n]=c[1]}console.log("shuffles image orders"),a.setState({randomArr:t})},a.victory=function(){console.log("win"),a.setState({win:a.state.win+1,score:0}),a.randomize(v)},a.defeat=function(){console.log("loss"),a.setState({loss:a.state.loss+1,score:0}),a.randomize(v)},a.increment=function(){console.log(a.state.score),11===a.state.score&&a.victory(),a.randomize(v)},a.checkGuess=function(e){e?(a.setState({score:a.state.score+1}),a.increment()):a.defeat()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.randomize(v)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"playfield"},n.a.createElement("div",null,n.a.createElement("h3",null,"Current Score: ",this.state.score," Wins: ",this.state.win," Losses: ",this.state.loss)),n.a.createElement(p,null,n.a.createElement(f,{className:"d-flex justify-content-around flex-wrap",size:"6"},this.state.randomArr.map(function(t,a){return n.a.createElement(h,{key:a,onClick:e.checkGuess,url:t.url,src:t.src,alt:t.alt,new:e.state.new})}))),n.a.createElement(p,null,n.a.createElement(b,{onClick:this.randomize},"Click me to restart!")))}}]),t}(r.Component));var C=function(e){return n.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};a(19);var E=function(){return n.a.createElement(C,null,n.a.createElement(k,null))};l.a.render(n.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d673500f.chunk.js.map