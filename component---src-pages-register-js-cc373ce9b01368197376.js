webpackJsonp([0xc19997bde6cd],{87:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(2),r=a(l),o=r.default.createContext(null);t.default=o,e.exports=t.default},534:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=a(u),c=n(45),d=n(28),f=n(50),s=a(f),m=n(87),p=a(m),h=n(86),g=function(e){function t(){var n,a,o;l(this,t);for(var u=arguments.length,i=Array(u),d=0;d<u;d++)i[d]=arguments[d];return n=a=r(this,e.call.apply(e,[this].concat(i))),a.state={name:"",email:"",password:"",loading:!1},a._handleSubmit=function(e,t){e.preventDefault();var n=a.state,l=n.name,r=n.email,o=n.password;a.setState({loading:!0}),(0,h.register)({name:l,email:r,password:o}).then(function(e){var n=e.id,a=e.token;localStorage.setItem("customerToken",a),localStorage.setItem("mcustomer",n),t.updateToken(),(0,c.navigateTo)("/myaccount")}).catch(function(e){console.log(e),a.setState({loading:!1})})},a._handleChange=function(e){var t,n=e.target,l=n.name,r=n.value;return a.setState((t={},t[l]=r,t))},o=n,r(a,o)}return o(t,e),t.prototype.render=function(){var e=this,t=this.state.loading;return i.default.createElement(p.default.Consumer,null,function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(s.default,{title:"Register"}),i.default.createElement(d.Header,{as:"h1"},"Create an account"),i.default.createElement(d.Form,{onSubmit:function(t){return e._handleSubmit(t,n)},loading:t},i.default.createElement(d.Segment,null,i.default.createElement(d.Form.Field,null,i.default.createElement("label",{htmlFor:"name"},"Name"),i.default.createElement(d.Input,{id:"name",fluid:!0,name:"name",autoFocus:!0,onChange:function(t){return e._handleChange(t)}})),i.default.createElement(d.Form.Field,null,i.default.createElement("label",{htmlFor:"email"},"Email"),i.default.createElement(d.Input,{id:"email",fluid:!0,name:"email",type:"email",onChange:function(t){return e._handleChange(t)}})),i.default.createElement(d.Form.Field,null,i.default.createElement("label",{htmlFor:"password"},"Password"),i.default.createElement(d.Input,{id:"password",fluid:!0,name:"password",type:"password",onChange:function(t){return e._handleChange(t)}})),i.default.createElement(d.Button,{type:"submit",color:"orange"},"Register"))))})},t}(i.default.Component);t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-register-js-cc373ce9b01368197376.js.map