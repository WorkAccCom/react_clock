(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var i=n(7),c=n.n(i),r=n(2),o=n(3),s=n(5),a=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),p=function(t){Object(s.a)(n,t);var e=Object(a.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.props.id)}},{key:"render",value:function(){var t=this.props.time;return Object(b.jsxs)("p",{children:["Current time:"," ",t]})}}]),n}(u.a.Component),h=function(t){Object(s.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={timerId:void 0,currentTime:(new Date).toLocaleTimeString(),isClockVisible:!0},t.startClockTimer=function(){var e=setInterval((function(){var n=(new Date).toLocaleTimeString();console.log(n),t.setState({timerId:e,currentTime:n})}),1e3)},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.startClockTimer()}},{key:"componentDidUpdate",value:function(){this.state.isClockVisible&&!this.state.timerId&&this.startClockTimer()}},{key:"render",value:function(){var t=this,e=this.state.currentTime;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),this.state.isClockVisible&&Object(b.jsx)(p,{time:e,id:this.state.timerId}),Object(b.jsxs)("div",{className:"App__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return t.setState({isClockVisible:!0})},className:"App__show-clock",children:"Show Clock"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.setState({isClockVisible:!1,timerId:void 0})},children:"Hide Clock"})]})]})}}]),n}(u.a.Component),m=h;c.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.51723c95.chunk.js.map