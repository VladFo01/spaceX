(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),s=a(11),m=a(20),o=a(27),i=a(26),u=a(7),E=a(1),d=(a(33),function(e){return c.a.createElement("header",{className:"header"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{src:"./spaceX/img/logo.svg",alt:"Logo Space X",className:"logo"})),c.a.createElement("nav",{className:"main-nav nav"},c.a.createElement("ul",{className:"list"},e.rockets.map((function(t,a){return c.a.createElement("li",{key:a,className:"item"},c.a.createElement(u.b,{to:"/rocket",onClick:function(){e.changeRocket(t)},className:"item-link"},t))})))),c.a.createElement("nav",{className:"secondary-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{exact:!0,to:"/",className:"item-link",activeClassName:"active"},"Home")),c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{to:"/calendar",className:"item-link",activeClassName:"active"},"Calendar")))))}),h=a(22),p=a.n(h),f=(a(39),a(40),{"Falcon 1":"moon","Falcon 9":"earth","Falcon Heavy":"mars",other:"space"}),N=function(e){var t=e.rocket,a=e.name;return c.a.createElement("section",{className:"main"},c.a.createElement("h1",{className:"title"},a||t),t&&c.a.createElement("div",{className:"video-container"},c.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,src:"./video/".concat(f.hasOwnProperty(t)?f[t]:f.other,".mp4")})))},b={"Falcon 1":"falcon-1","Falcon 9":"falcon-9","Falcon Heavy":"falcon-heavy",Starship:"starship"},k=function(e){var t=e.features;return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{rocket:t.name}),c.a.createElement("section",{className:"features"},c.a.createElement("h2",{className:"features-title"},t.name.toUpperCase()," ",c.a.createElement("br",null),"Overview"),c.a.createElement("div",{className:"overview"},c.a.createElement("table",{className:"table"},c.a.createElement("caption",{className:"table-title"},"Size"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"HEIGHT"),c.a.createElement("td",{className:"table-column"},t.height.meters," m / ",t.height.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"DIAMETER"),c.a.createElement("td",{className:"table-column"},t.diameter.meters," m / ",t.diameter.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"MASS"),c.a.createElement("td",{className:"table-column"},t.mass.kg," kg / ",t.mass.lb," lb")),t.payload_weights.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",{className:"table-column"},"PAYLOAD TO ",e.id.toUpperCase()),c.a.createElement("td",{className:"table-column"},e.kg," kg / ",e.lb," lb"))})))),c.a.createElement(p.a,{speed:14},c.a.createElement("img",{src:"./spaceX/img/".concat(b[t.name],".png"),alt:"rocket",className:"rocket"})),c.a.createElement("article",null,c.a.createElement("h3",{className:"features-subtitle"},"DESCRIPTION"),c.a.createElement("p",{className:"features-text"},t.description)))))},v=(a(41),a(12)),g=a(8),y=a.n(g),w=a(10),_=function e(){var t=this;Object(s.a)(this,e),this.startUrl="https://api.spacexdata.com/v4/",this.getResource=function(){var e=Object(w.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRocket=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"rockets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getLaunches=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"launches/past");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getCompany=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.startUrl+"company");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},O=new _,x=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){O.getLaunches().then((function(e){return c(e)}))}),[]);return{data:a,getLaunch:function(e){return a.find((function(t){return t.id===e}))}}},C=function(){var e=x().data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{name:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c Space X"}),c.a.createElement("section",{className:"calendar"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"calendar-list"},e.map((function(e,t){return c.a.createElement("li",{key:t,className:"calendar-item"},c.a.createElement("article",{className:"launches"},c.a.createElement("div",{className:"launches-image"},c.a.createElement("img",{src:e.links.patch.small,alt:""})),c.a.createElement("div",{className:"launches-content"},c.a.createElement("h2",{className:"launches-title"},e.name),c.a.createElement(u.b,{to:"/details/".concat(e.id),className:"button launches-details"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))}))))))},j=(a(43),a(23)),S=function(e){var t=Object(n.useState)(null),a=Object(v.a)(t,2),l=a[0],r=a[1],s=x().getLaunch;Object(n.useEffect)((function(){r(s(e.match.params.id))}),[s]);var m=Object(E.e)();return l?c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{name:l.name}),c.a.createElement("main",{className:"details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-image"},c.a.createElement("img",{src:l.links.patch.small,alt:l.name})),c.a.createElement("div",{className:"details-content"},c.a.createElement("p",{className:"details-description"},l.details))),c.a.createElement(j.a,{className:"details-youtube",videoId:l.links.youtube_id})),c.a.createElement("a",{onClick:m.goBack,className:"button button-back"},"go back"))):c.a.createElement("div",null,"Loading...")},F=(a(56),function(e){var t=e.elon_twitter,a=e.flickr,n=e.twitter,l=e.website;return c.a.createElement("footer",{className:"footer"},c.a.createElement("img",{src:"./spaceX/img/logo.svg",alt:"logo Space X",className:"logo"}),c.a.createElement("nav",{className:"footer-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Elon Musk Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Flickr")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:l,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Website")))),c.a.createElement("p",{className:"footer-text"},"For additional questions, contact",c.a.createElement("a",{className:"footer-link",href:"mailto:rideshare@spacex.com"},"rideshare@spacex.com")))}),R=(a(57),function(e){var t=e.company;return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("hgroup",{className:"title"},c.a.createElement("h1",null,c.a.createElement("img",{className:"logo-title",src:"./spaceX/img/logo.svg",alt:t.name})),c.a.createElement("h2",{className:"subtitle"},t.summary)),c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"home_table home_table-manager"},c.a.createElement("caption",{className:"home_table-title"},"Manager"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CEO"),c.a.createElement("td",{className:"home_table-column"},t.ceo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"COO"),c.a.createElement("td",{className:"home_table-column"},t.coo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO"),c.a.createElement("td",{className:"home_table-column"},t.cto)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO PROPULSION"),c.a.createElement("td",{className:"home_table-column"},t.cto_propulsion)))),c.a.createElement("table",{className:"home_table home_table-location"},c.a.createElement("caption",{className:"home_table-title"},"Location"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"State"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.state)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"City"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.city)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"Address"),c.a.createElement("td",{className:"home_table-column"},t.headquarters.address)))),c.a.createElement("video",{id:"video",autoPlay:!0,loop:!0,muted:!0,className:"responsive-video",width:"100%",height:"100%",preload:"auto"},c.a.createElement("source",{type:"video/mp4",src:"https://www.spacex.com/media/mission_reusability.mp4"}),c.a.createElement("source",{type:"video/webm",src:"https://www.spacex.com/media/mission_reusability.webm"})))))}),L=(a(58),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).fetchData=new _,e.state={rocket:"Falcon 1",rocketFeatures:null,rockets:[],company:null},e.changeRocket=function(t){e.setState({rocket:t},e.updateRocket)},e.updateCompany=function(){e.fetchData.getCompany().then((function(t){return e.setState({company:t})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateRocket(),this.updateCompany()}},{key:"updateRocket",value:function(){var e=this;this.fetchData.getRocket().then((function(t){return e.setState({rockets:t.map((function(e){return e.name}))}),t})).then((function(t){return t.find((function(t){return t.name===e.state.rocket}))})).then((function(t){return e.setState({rocketFeatures:t})}))}},{key:"method",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement(u.a,null,c.a.createElement(d,{rockets:this.state.rockets,changeRocket:this.changeRocket}),c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return e.state.company&&c.a.createElement(R,{company:e.state.company})}}),c.a.createElement(E.a,{path:"/rocket",render:function(){return null!=e.state.rocketFeatures?c.a.createElement(k,{features:e.state.rocketFeatures}):null}}),c.a.createElement(E.a,{path:"/calendar",component:C}),c.a.createElement(E.a,{path:"/details/:id",component:S}),this.state.company&&c.a.createElement(F,this.state.company.links))}}]),a}(c.a.Component));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.58482941.chunk.js.map