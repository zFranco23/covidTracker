(this.webpackJsonpcovidrecolector=this.webpackJsonpcovidrecolector||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__sC14B",card:"Cards_card__kL1jq",infected:"Cards_infected__1FplZ",recovered:"Cards_recovered__1D4ox",deaths:"Cards_deaths__36qL0"}},208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(71),o=a.n(c),s=a(7),i=a.n(s),u=a(11),d=a(72),l=a(73),j=a(82),p=a(81),f=a(226),b=a(227),h=a(231),v=a(228),x=a(229),O=a(30),m=a.n(O),y=a(31),g=a.n(y),C=a(14),_=a.n(C),w=a(2);var D=function(e){var t=e.data,a=t.confirmed,r=t.recovered,n=t.deaths,c=t.lastUpdate;return a?Object(w.jsx)("div",{className:_.a.container,children:Object(w.jsxs)(b.a,{container:!0,spacing:3,justify:"center",children:[Object(w.jsx)(b.a,{item:!0,component:h.a,xs:12,md:3,className:g()(_.a.card,_.a.infected),children:Object(w.jsxs)(v.a,{children:[Object(w.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:" Infected "}),Object(w.jsx)(x.a,{variant:"h5",children:Object(w.jsx)(m.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(w.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(x.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(w.jsx)(b.a,{item:!0,component:h.a,xs:12,md:3,className:g()(_.a.card,_.a.recovered),children:Object(w.jsxs)(v.a,{children:[Object(w.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:" Recovered "}),Object(w.jsx)(x.a,{variant:"h5",children:Object(w.jsx)(m.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(w.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(x.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(w.jsx)(b.a,{item:!0,component:h.a,xs:12,md:3,className:g()(_.a.card,_.a.deaths),children:Object(w.jsxs)(v.a,{children:[Object(w.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:" Deaths "}),Object(w.jsx)(x.a,{variant:"h5",children:Object(w.jsx)(m.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(w.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(w.jsx)(x.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):Object(w.jsx)(f.a,{size:100})},k=a(29),S=a(32),N=a.n(S),I="https://covid19.mathdro.id/api",B=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,n,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I,t&&(a="".concat(I,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,u=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(44),L=a(79),E=a.n(L);var U=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=e.country,s=Object(r.useState)([]),d=Object(k.a)(s,2),l=d[0],j=d[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=l.length?Object(w.jsx)(A.Line,{data:{labels:l.map((function(e){return e.date})),datasets:[{label:"Infected",data:l.map((function(e){return e.confirmed})),fill:!0,borderColor:"#3333ff"},{label:"Deaths",data:l.map((function(e){return e.deaths})),fill:!0,borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)"}]}}):Object(w.jsx)(f.a,{size:100}),b=a?Object(w.jsx)(A.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):Object(w.jsx)(f.a,{size:"100"});return Object(w.jsx)("div",{className:E.a.container,children:o?b:p})},q=a(232),J=a(230),P=a(80),R=a.n(P);var F=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),n=Object(k.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,z();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(w.jsx)(q.a,{className:R.a.formControl,children:Object(w.jsxs)(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(w.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(w.jsx)("option",{value:e,children:e},t)}))]})})},G=a(45),K=a.n(G),M=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(w.jsxs)("div",{className:K.a.container,children:[Object(w.jsx)("img",{className:K.a.image,src:"https://i.ibb.co/7QpKsCX/image.png",alt:"COVID-19"}),Object(w.jsx)(D,{data:t}),Object(w.jsx)(F,{handleCountryChange:this.handleCountryChange}),Object(w.jsx)(U,{data:t,country:a})]})}}]),a}(n.a.Component);o.a.render(Object(w.jsx)(M,{}),document.getElementById("root"))},45:function(e,t,a){e.exports={container:"App_container__2Dmx5",image:"App_image__ueau2"}},79:function(e,t,a){e.exports={container:"Chart_container__3t_LA"}},80:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2kzjf"}}},[[208,1,2]]]);
//# sourceMappingURL=main.466075c3.chunk.js.map