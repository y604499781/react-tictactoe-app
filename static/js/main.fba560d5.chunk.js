(this["webpackJsonpreact-tictactoe-app"]=this["webpackJsonpreact-tictactoe-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),i=a.n(s),c=(a(14),a(1)),l=a(2),o=a(4),u=a(3),h=a(5),d=(a(15),a(8));function m(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();f(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(m,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=f(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",null,n.a.createElement("div",{className:"status"},e),n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(n.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(d.a)(t[a],3),n=r[0],s=r[1],i=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}var p=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(v,null)),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null),n.a.createElement("ol",null)))}}]),t}(n.a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"clickHandler",value:function(){console.log("User is logging on"),console.log(this);var e=!0,t=!1,a=void 0;try{for(var r,n=this.props.users[Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var s=r.value;this.refs.username.value===s.username&&this.refs.password.value===s.password&&this.props.logInUser()}}catch(i){t=!0,a=i}finally{try{e||null==n.return||n.return()}finally{if(t)throw a}}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("input",{ref:"username",type:"text"}),n.a.createElement("input",{ref:"password",type:"text"}),n.a.createElement("input",{type:"button",value:"Login",onClick:function(){return e.clickHandler()}}))}}]),t}(n.a.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loggedIn:!1,users:[{username:"test",password:"test"}]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"logInUser",value:function(e){this.setState({loggedIn:e})}},{key:"render",value:function(){var e=this;return this.state.register?n.a.createElement(b,null):this.state.loggedIn?n.a.createElement(p,{logOutUser:function(){return e.logInUser(!1)}}):n.a.createElement(b,{users:this.state.users,logInUser:function(){return e.logInUser(!0)}})}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.fba560d5.chunk.js.map