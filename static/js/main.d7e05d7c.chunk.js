(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var i=n(7),c=n.n(i),o=n(2),r=n(3),s=n(5),a=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),p=function(t){Object(s.a)(n,t);var e=Object(a.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentWillUnmount",value:function(){console.log("clock've been stoped by componentWillUnmount()"),clearInterval(this.props.id)}},{key:"render",value:function(){var t=this.props.time;return Object(b.jsxs)("p",{children:["Current time:"," ",t]})}}]),n}(u.a.Component),m=function(t){Object(s.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={timerId:void 0,currentTime:(new Date).toLocaleTimeString(),isClockVisible:!0},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=setInterval((function(){var n=(new Date).toLocaleTimeString();console.log(n),t.setState({timerId:e,currentTime:n})}),1e3)}},{key:"componentDidUpdate",value:function(){var t=this;if(this.state.isClockVisible&&!this.state.timerId)var e=setInterval((function(){var n=(new Date).toLocaleTimeString();console.log(n),t.setState({timerId:e,currentTime:n})}),1e3)}},{key:"render",value:function(){var t=this,e=this.state.currentTime;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),this.state.isClockVisible&&Object(b.jsx)(p,{time:e,id:this.state.timerId}),Object(b.jsxs)("div",{className:"app-buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return t.setState({isClockVisible:!0})},className:"app-buttons__show-clock",children:"Show Clock"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.setState({isClockVisible:!1,timerId:void 0})},children:"Hide Clock"})]})]})}}]),n}(u.a.Component),d=m;c.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d7e05d7c.chunk.js.map