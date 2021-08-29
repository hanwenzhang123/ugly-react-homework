(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(8),s=n.n(r),a=(n(14),n(2)),u=n(3),l=n(5),o=n(4),j=(n(15),n(0));var d=function(t){var e=t.num;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"COUNTING"}),Object(j.jsxs)("h2",{children:["Current Count: ",e]})]})};var h=function(t){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("button",{onClick:t.clickHandler,children:t.value})})},b=n(9),O=n.n(b),f=function(t){return Object(j.jsx)("div",{className:O.a.card,children:t.children})},v=(n(17),function(t){return function(e){Object(l.a)(c,e);var n=Object(o.a)(c);function c(){var t;return Object(a.a)(this,c),(t=n.call(this)).handleVisibility=function(e){t.setState({checked:!t.state.checked})},t.state={checked:!1},t}return Object(u.a)(c,[{key:"render",value:function(){var e=!0===this.state.checked?"":"hidden";return Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Invisible Checkbox"}),Object(j.jsx)("input",{type:"checkbox",onClick:this.handleVisibility}),e?Object(j.jsx)(t,{}):null]})}}]),c}(i.a.Component)}),m=v(function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).increment=function(){c.setState((function(t){return{number:t.number+1}}))},c.decrement=function(){c.setState((function(t){return{number:t.number-1}}))},c.incIfOdd=function(){c.state.number%2!==0&&c.increment()},c.asyncInc=function(){setTimeout((function(){c.increment()}),1e3)},c.reset=function(){c.setState({number:0})},c.timerHandler=function(){c.setState((function(t){return{isRunning:!t.isRunning}}))},c.state={number:0,isRunning:!1},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){t.state.isRunning&&t.setState((function(t){return{number:t.number+1}}))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var t=this.state.number,e=this.increment,n=this.decrement,c=this.incIfOdd,i=this.asyncInc,r=this.reset,s=this.timerHandler;return Object(j.jsxs)(f,{children:[Object(j.jsx)(d,{num:t}),Object(j.jsx)(h,{clickHandler:e,value:"Increment +1"}),Object(j.jsx)(h,{clickHandler:n,value:"Decrement -1"}),Object(j.jsx)(h,{clickHandler:c,value:"Increment-If-Odd"}),Object(j.jsx)(h,{clickHandler:i,value:"Async-Inc"}),Object(j.jsx)(h,{clickHandler:r,value:"Reset"}),Object(j.jsx)(h,{clickHandler:s,value:this.state.isRunning?"TIMER STOP":"TIMER START"})]})}}]),n}(c.Component)),p=n(6),x=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).handleClick=function(){c.state.inputText.trim().length>0&&c.props.onAdd(c.state.inputText),c.setState({inputText:""})},c.handleChange=function(t){c.setState({inputText:t.target.value})},c.handleDropdown=function(t){c.props.onSelect(t.target.value)},c.state={inputText:""},c}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.inputText,e=this.handleChange,n=this.handleClick,c=this.handleDropdown;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" TO-DO LIST "}),Object(j.jsx)("input",{onChange:e,type:"text",placeholder:"Enter Task",value:t}),Object(j.jsx)("button",{onClick:n,children:"ADD"}),Object(j.jsxs)("select",{onChange:c,children:[Object(j.jsx)("option",{children:"***sort***"}),Object(j.jsx)("option",{value:"asc",children:"A-Z"}),Object(j.jsx)("option",{value:"desc",children:"Z-A"})]})]})}}]),n}(c.Component);var k=function(t){return Object(j.jsx)("div",{children:Object(j.jsxs)("li",{children:[t.item,Object(j.jsx)("button",{onClick:function(){return t.onDelete(t.id)},children:"x"})]})})};var I=function(t){return 0===t.onDisplay.length?Object(j.jsx)("p",{children:"Found No To-do Items."}):Object(j.jsx)("div",{className:"App",children:t.onDisplay.map((function(e,n){return Object(j.jsx)(k,{id:n,item:e,onDelete:t.onDelete},n)}))})},y=v(function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).addItem=function(t){var e=Object(p.a)(c.state.list);e.push(t),c.setState({list:e})},c.deleteItem=function(t){var e=Object(p.a)(c.state.list).filter((function(e,n){return n!==t}));c.setState({list:e})},c.sortList=function(t){var e=Object(p.a)(c.state.list);if("asc"===t){var n=e.sort((function(t,e){return t.localeCompare(e)}));c.setState({list:n})}else if("desc"===t){var i=e.sort((function(t,e){return e.localeCompare(t)}));c.setState({list:i})}},c.state={list:["Study React","Do Homework"]},c}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.list,e=this.addItem,n=this.deleteItem,c=this.sortList;return Object(j.jsxs)(f,{children:[Object(j.jsx)(x,{onAdd:e,onSelect:c}),Object(j.jsx)(I,{onDisplay:t,onDelete:n})]})}}]),n}(c.Component)),C=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(y,{})]})}}]),n}(c.Component);s.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))},9:function(t,e,n){t.exports={card:"Card_card__1m44e"}}},[[18,1,2]]]);
//# sourceMappingURL=main.be7270a8.chunk.js.map