(this.webpackJsonpbestrunner=this.webpackJsonpbestrunner||[]).push([[0],{170:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(60),o=t.n(i),l=(t(71),t(16)),c=t(3),u=t(1),s=t(2);function d(){var e=Object(s.a)(["\n  width: 90%;\n  padding: 10px;\n  font-weight: bold;\n  border: 1px solid white;\n\n  &:hover{\n    color: ",";\n  }\n\n  &:active{\n    color: white;\n  }\n    \n  @media (max-width: ","){\n    width: 100%;\n    padding: 20px;\n  }\n"]);return d=function(){return e},e}function m(){var e=Object(s.a)(["\n  width: 10%;\n  padding: 10px;\n  border: 1px solid white;  \n\n  &:hover{\n    color: ",";\n  }\n\n  &:active{\n    color: white;\n  }\n  \n  @media (max-width: ",") {\n    display: none;    \n"]);return m=function(){return e},e}function h(){var e=Object(s.a)(["\n  display: flex;  \n  color: white; \n  cursor: pointer; \n  background-color: ",";  \n\n  \n"]);return h=function(){return e},e}function p(){var e=Object(s.a)(["  \n  text-align: center;\n  font-family: ",";  \n"]);return p=function(){return e},e}var b=u.b.header(p(),(function(e){return e.theme.font})),f=u.b.nav(h(),(function(e){return e.theme.primary})),g=u.b.div(m(),(function(e){return e.theme.secondary}),(function(e){return e.theme.mobile})),E=u.b.div(d(),(function(e){return e.theme.secondary}),(function(e){return e.theme.mobile})),v=function(){return r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(g,null,"[Logo]"),r.a.createElement(E,null,"[BEST RUNNER]")))},w=t(14),x=t(15),y=t(11),k=t(18),j=t(17);function O(){var e=Object(s.a)([" \n  width: 15%;\n"]);return O=function(){return e},e}function S(){var e=Object(s.a)(["\n  width: 30%;\n"]);return S=function(){return e},e}function _(){var e=Object(s.a)(["\n  width: 40%;\n  height: 50px;\n  display: inline-block;  \n  margin: 0;  \n  \n  border-radius: 5px;\n  color: black;  \n"]);return _=function(){return e},e}function D(){var e=Object(s.a)(["\n  display:block;  \n  width: 15%;\n  height: 17px;\n  \n  border-radius: 5px; \n  color: black;   \n"]);return D=function(){return e},e}function C(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;  \n  max-height: 50px;\n  margin: 5px 0; \n  padding: 10px;\n  text-align: left;  \n  \n  color: ",";\n  background-color: white;\n  \n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); \n\n  &:hover{\n    background-color: lightgrey;    \n  }\n"]);return C=function(){return e},e}var H=u.b.li(C(),(function(e){return e.theme.secondary})),P=u.b.span(D()),B=u.b.p(_()),I=Object(u.b)(B)(S()),F=u.b.div(O()),z=function(e){var n=e.mock,t=e.togglePopupHandler;return r.a.createElement(H,null,r.a.createElement(B,null,n.type),r.a.createElement(P,null,n.date.getFullYear()),r.a.createElement(I,null,n.distance,"km"),r.a.createElement(F,{onClick:function(){return t(n.id)}},r.a.createElement("img",{width:"15",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Info_Simple_bw.svg/768px-Info_Simple_bw.svg.png"})))};function N(){var e=Object(s.a)(["\n  position: absolute;\n  left: 25%;\n  right: 25%;\n  top: 25%;\n  bottom: 25%;\n  margin: auto;\n  background: white;\n"]);return N=function(){return e},e}function W(){var e=Object(s.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(0,0,0, 0.5);\n"]);return W=function(){return e},e}var R=u.b.div(W()),T=u.b.div(N()),q=function(e){Object(k.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(w.a)(this,t),(a=n.call(this,e)).state={isDeleting:!1,isShowing:!1},a}return Object(x.a)(t,[{key:"_toggleEditDeleting",value:function(){this.setState({isDeleting:!this.state.isDeleting})}},{key:"render",value:function(){var e=this,n=this.props,t=n.sessions,a=n.currentId,i=n.togglePopupHandler,o=t.find((function(e){return e.id===a}));return r.a.createElement(R,null,r.a.createElement(T,null,r.a.createElement("form",{onSubmit:i},r.a.createElement("h2",null,o.type),r.a.createElement("a",{href:"#",onClick:i},"Go-back"),r.a.createElement("p",null,o.date.getFullYear()),r.a.createElement("p",null,o.distance),r.a.createElement("textarea",{placeholder:"comment"}),!this.state.isShowing&&r.a.createElement("button",{onClick:function(){return e.setState({isShowing:!0,isDeleting:!0})}},"delete"),!this.state.isShowing&&r.a.createElement("button",{onClick:function(){return e.setState({isShowing:!0,isDeleting:!1})}},"Edit"),this.state.isShowing&&r.a.createElement("button",{onClick:function(){return e.setState({isShowing:!1,isDeleting:!1})}},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"),this.state.isShowing&&r.a.createElement("button",{type:"submit"},this.state.isDeleting?"\u041f\u0440\u0430\u0432\u0434\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?":"\u0412\u043d\u0435\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"))))}}]),t}(r.a.Component);function J(){var e=Object(s.a)(["\n  margin:0;\n  padding:0;\n  list-style: none;\n"]);return J=function(){return e},e}var Y=[{id:1,type:"\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434",date:new Date,distance:10},{id:2,type:"\u0411\u0435\u0433",date:new Date,distance:15},{id:3,type:"\u041b\u044b\u0436\u0438",date:new Date,distance:5},{id:4,type:"\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435",date:new Date,distance:7},{id:5,type:"\u0425\u043e\u0434\u044c\u0431\u0430",date:new Date,distance:11}],A=u.b.ul(J()),G=function(e){Object(k.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(w.a)(this,t),(a=n.call(this,e)).state={showPopup:!1,currentId:0},a._togglePopup=a._togglePopup.bind(Object(y.a)(a)),a}return Object(x.a)(t,[{key:"_togglePopup",value:function(e){this.setState({showPopup:!this.state.showPopup,currentId:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(A,null,Y.map((function(n){return r.a.createElement(z,{key:n.id,mock:n,togglePopupHandler:e._togglePopup})})),this.state.showPopup&&r.a.createElement(q,{currentId:this.state.currentId,sessions:Y,togglePopupHandler:this._togglePopup}))}}]),t}(r.a.Component);function L(){var e=Object(s.a)(["\n  width: ","%;  \n  color: grey;\n  cursor: pointer;\n  text-align: left;  \n\n  &:hover{\n    color: ",";\n  }\n\n  &:active{\n    color: ","\n  }\n"]);return L=function(){return e},e}function M(){var e=Object(s.a)(["\n  display: flex;  \n  width: 100%;\n  margin: 0px;  \n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 18px;\n  font-weight: bold;\n  list-style: none;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); \n"]);return M=function(){return e},e}var U=u.b.ul(M()),$=u.b.li(L(),(function(e){return e.width}),(function(e){return e.theme.primary}),(function(e){return e.theme.secondary})),K=function(e){return r.a.createElement(U,null,r.a.createElement($,{width:40},"Type"),r.a.createElement($,{width:15},"Date"),r.a.createElement($,{width:15},"Distance"))},Q=t(64),V=function(e){return r.a.createElement("section",{style:{margin:0,padding:"20px",minHeight:"280px"}},r.a.createElement(Q.Bar,{data:{labels:["timeWork","timeFlight","timeBlock","timeNight","timeBiologicalNight"],datasets:[{barPercentage:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:[1,2,3,4,5]}]},options:{title:{display:!0,text:"\u0421\u0432\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434",fontSize:20},legend:{display:!1}}}))};function X(){var e=Object(s.a)(["\n  position: fixed;  \n  z-index: 1;\n  bottom: 20px;\n  right: 30px;\n  display: block;\n  width: 100px;\n  height: 100px;\n  font-size: 50px;\n  background-color: ",";\n  outline: none;\n  border: none;\n  color: white;\n  border-radius: 50%;  \n  transition: 0.5s transform ease;\n\n  &:hover{\n    transform: scale(1.5);\n  }\n\n  &:active{\n    background-color: grey;\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(s.a)(["\n  text-align: center;\n  font-family: ","; \n  background-color: white; \n"]);return Z=function(){return e},e}var ee=u.b.main(Z(),(function(e){return e.theme.font})),ne=u.b.button(X(),(function(e){return e.theme.pink})),te=function(){return r.a.createElement(ee,null,r.a.createElement("h1",{style:{display:"none"}},"BestRunner"),r.a.createElement(K,null),r.a.createElement(G,null),r.a.createElement(V,null),r.a.createElement(l.b,{to:"/new"},r.a.createElement(ne,{onClick:function(){return console.log("plus")}},"+")))};function ae(){var e=Object(s.a)(["\n  padding: 10px;\n  cursor: pointer;\n\n  &:hover{\n    color: ",";\n  }\n\n  &:active{\n    color: white;\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;  \n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  @media (max-width:","){\n    flex-direction: column;\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(s.a)([" \n  text-align: center;\n  font-family: ",";\n  background-color: ",";\n  color: white;\n"]);return ie=function(){return e},e}var oe=u.b.footer(ie(),(function(e){return e.theme.font}),(function(e){return e.theme.primary})),le=u.b.ul(re(),(function(e){return e.theme.mobile})),ce=u.b.li(ae(),(function(e){return e.theme.secondary})),ue=function(){return r.a.createElement(oe,null,r.a.createElement(le,null,r.a.createElement(ce,null,"[Copyright]"),r.a.createElement(ce,null,"[\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438]"),r.a.createElement(ce,null,"[\u0410\u0434\u0440\u0435\u0441]")))},se=t(65),de=function(e){Object(k.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(w.a)(this,t),(a=n.call(this,e)).state={id:100,type:"",distance:"",comment:"",date:new Date},a._changeHandler=a._changeHandler.bind(Object(y.a)(a)),a._submitHandler=a._submitHandler.bind(Object(y.a)(a)),a}return Object(x.a)(t,[{key:"_submitHandler",value:function(e){e.preventDefault()}},{key:"_changeHandler",value:function(e){var n=e.target.name;this.setState(Object(se.a)({},n,e.target.value))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:"/"},"go-back"),r.a.createElement("form",{onSubmit:this._submitHandler,style:{display:"flex",width:"50%",flexDirection:"column"}},r.a.createElement("h2",null,"form"),r.a.createElement("p",null,"Type"),r.a.createElement("select",{name:"type",value:this.state.type,onChange:this._changeHandler},r.a.createElement("option",null,"\u0422\u0438\u043f"),r.a.createElement("option",null,"\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434"),r.a.createElement("option",null,"\u0411\u0435\u0433"),r.a.createElement("option",null,"\u041b\u044b\u0436\u0438"),r.a.createElement("option",null,"\u041f\u043b\u0430\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("option",null,"\u0425\u043e\u0434\u044c\u0431\u0430")),r.a.createElement("textarea",{required:!0,placeholder:"distance",name:"distance",value:this.state.distance,onChange:this._changeHandler}),r.a.createElement("textarea",{required:!0,placeholder:"comment",name:"comment",value:this.state.comment,onChange:this._changeHandler}),r.a.createElement("button",null,"Send")))}}]),t}(r.a.Component),me={primary:"#3B5AF5",secondary:"tomato",pink:"#F9057C",bgc:"white",mobile:"660px",font:"Poppins"},he=function(){return r.a.createElement(l.a,null,r.a.createElement(u.a,{theme:me},r.a.createElement(v,null),r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(te,null)),r.a.createElement(c.a,{exact:!0,path:"/new"},r.a.createElement(de,null)),r.a.createElement(ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,n,t){e.exports=t(170)},71:function(e,n,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.7bad3f9a.chunk.js.map