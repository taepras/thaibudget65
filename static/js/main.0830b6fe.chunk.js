(this.webpackJsonpthaibudget65=this.webpackJsonpthaibudget65||[]).push([[0],{145:function(t,e,n){},149:function(t,e,n){},154:function(t,e,n){"use strict";n.r(e);var i,a=n(0),o=n.n(a),r=n(49),l=n.n(r),c=(n(145),n(21)),s=n(34),u=n(12),d=n(8),f=n(15),x=n(5),h=n(11),v=n(3),b=n(22),j=(n.p,n(149),n(54)),g=n(50),p=h.a.div(i||(i=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n"]))),O=n(1);var m=function(t){var e=this,n=t.data,i=void 0===n?[]:n,o=t.isLoading,r=void 0===o||o,l=t.padding,c=void 0===l?16:l,s=t.gutter,f=void 0===s?4:s,h=t.filters,v=void 0===h?["all"]:h,m=t.setFilters,y=void 0===m?function(){}:m,w=t.hierarchyBy,k=void 0===w?[]:w,T=t.setCurrentSum,S=void 0===T?function(t){}:T,M=t.fullValue,C=void 0===M?-1:M,E=t.index,I=void 0===E?0:E,R=t.isMultipleMaxSum,_=void 0!==R&&R,L=t.sumWindows,A=void 0===L?[]:L,U=Object(g.a)({onResize:function(t){var e=t.observe,n=t.unobserve;t.w,t.h,t.entr;n(),e()}}),G=U.observe,N=(U.unobserve,U.width),B=U.height,P=(U.entry,Object(a.useRef)(null)),Y=Object(a.useState)(-1),D=Object(d.a)(Y,2),V=D[0],z=D[1],F=Object(a.useState)("treemap"),J=Object(d.a)(F,2),W=J[0],q=(J[1],Object(a.useMemo)((function(){console.log("filters",v);var t=Object(j.a)(),e=function(e){t=t.key((function(t){return t[k[e]]}))};for(var n in v)e(n);var a={key:"root",values:[{key:"all",values:t.rollup((function(t){return x.f(t,(function(t){return t.AMOUNT}))})).entries(i)}]},o=function(t){var e,n,i;a=null===(e=a)||void 0===e||null===(n=e.values)||void 0===n||null===(i=n.filter)||void 0===i?void 0:i.call(n,(function(e){return e.key===v[t]}))[0]};for(var r in v)o(r);return console.log("indata",a),a}),[i,v,k]));return Object(a.useEffect)((function(){var t=q.values.reduce((function(t,e){return t+e.value}),0);console.log("sum",t),V!==t&&S(t),z(t)}),[q,S,V]),Object(a.useEffect)((function(){if(P.current){console.log("fullVal",C),console.log("nested",q);var t=P.current.clientHeight;console.log(t);var n=x.b(q,(function(t){return null===t||void 0===t?void 0:t.values})).sum((function(t){return null===t||void 0===t?void 0:t.value})).sort((function(t,e){return(null===e||void 0===e?void 0:e.value)-(null===t||void 0===t?void 0:t.value)})),i=q.values.reduce((function(t,e){return t+e.value}),0),a=Object(u.a)(A),o=a.indexOf(V);-1!==o&&(a[o]=i);var r=x.c(a),l=(N-2*c)*(t-2*c),s=(N-2*c)/(t-2*c),d=i/(r||1)*l;console.log("sumw",I,A,a,V,r,i);var h=r<=0?t-2*c:Math.sqrt(d/s),j=r<=0?N-2*c:d/h,g=(x.g().size([j,h]).padding(0)(n),x.e(P.current).select("g.chart")),p=(x.d().domain([0,x.c(n.leaves(),(function(t){return t.value}))]).range([0,N-2*c]),g.selectAll("g.treemap-piece").data(n.leaves(),(function(t){var e;return null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.key}))),O=p.enter().append("g").attr("class","treemap-piece").attr("id",(function(t){var e;return"".concat(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.key.replaceAll(/[ ()]/g,""),"-").concat(I)})).style("mask",(function(t){var e;return"url(#mask-".concat(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.key.replaceAll(/[ ()]/g,""),"-").concat(I,")")})).attr("data-tip",(function(t){var e,n,i;return"".concat(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.key,"<br>").concat(null===t||void 0===t||null===(n=t.value)||void 0===n||null===(i=n.toLocaleString)||void 0===i?void 0:i.call(n)," \u0e1a\u0e32\u0e17")})).attr("transform",(function(t){return"translate(".concat(t.x0||0,",").concat(t.y0||0,")")}));O.append("rect").attr("class","box").attr("rx",3).style("fill","DarkSlateBlue").attr("width",(function(t){return t.x1-t.x0||0})).attr("height",(function(t){return t.y1-t.y0||0})),O.append("mask").attr("id",(function(t){var e;return"mask-".concat(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.key.replaceAll(/[ ()]/g,""),"-").concat(I)})).append("rect").attr("class","mask").attr("rx",3).style("fill","white").attr("width",(function(t){return t.x1-t.x0||0})).attr("height",(function(t){return t.y1-t.y0||0})),O.append("text").attr("class","text-name").attr("font-size","12px").attr("fill","white"),O.append("text").attr("class","text-value").attr("font-size","12px").attr("fill","white");var m=O.merge(p);m.on("click",null).on("click",(function(t,n,i){var a,o=[].concat(Object(u.a)(v),[null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.key]);if(!(o.length>k.length)){var r=Object(u.a)(A),c=r.indexOf(V);-1!==c&&(r[c]=n.value);var d=x.c(r),f=n.value/(d||1)*l,h=Math.sqrt(f/s),b=f/h,j=n.x0,g=n.y0,p=b/(n.x1-n.x0),O=h/(n.y1-n.y0);console.log("prp",x.e(e),t,n,i),x.e(e).classed("selected",!0),m.transition().duration(300).attr("transform",(function(t){return"translate(".concat((t.x0-j)*p,",").concat((t.y0-g)*O,")")})),m.select("rect.box").transition().duration(300).attr("width",(function(t){return Math.max(p*(t.x1-t.x0),0)})).attr("height",(function(t){return Math.max(O*(t.y1-t.y0),0)})),m.select("rect.mask").transition().duration(300).attr("width",(function(t){return Math.max(p*(t.x1-t.x0),0)})).attr("height",(function(t){return Math.max(O*(t.y1-t.y0),0)})),setTimeout((function(){y(o)}),300)}})).transition().duration(300).attr("transform",(function(t){return"translate(".concat(t.x0,",").concat(t.y0,")")})).attr("opacity",1).attr("data-tip",(function(t){var e,n,i;return"".concat(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.key,"<br>").concat(null===t||void 0===t||null===(n=t.value)||void 0===n||null===(i=n.toLocaleString)||void 0===i?void 0:i.call(n)," \u0e1a\u0e32\u0e17")})),m.select("rect.box").transition().duration(300).attr("rx",3).attr("fill","DarkSlateBlue").attr("stroke","black").attr("stroke-width",f).attr("width",(function(t){return Math.max(t.x1-t.x0||0,0)})).attr("height",(function(t){return Math.max(t.y1-t.y0||0,0)})),m.select("rect.mask").transition().duration(300).attr("rx",3).style("fill","white").attr("width",(function(t){return Math.max(t.x1-t.x0||0,0)})).attr("height",(function(t){return Math.max(t.y1-t.y0||0,0)})),m.select("text.text-name").attr("x",5).attr("y",8).attr("dominant-baseline","hanging").text((function(t){var e;return null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.key})),m.select("text.text-value").attr("x",5).attr("y",24).attr("fill-opacity",.7).attr("dominant-baseline","hanging").attr("opacity",1).text((function(t){return"".concat(t.value.toLocaleString()," \u0e1a\u0e32\u0e17")})),p.exit().transition().delay(150).duration(600).attr("opacity",0).remove(),b.a.rebuild(),console.log("rebuilding tooltip"),console.log("too small",n.leaves().filter((function(t){return(t.x1-t.x0)*(t.y1-t.y0)<100}))),console.log("too narrow",n.leaves().filter((function(t){return t.x1-t.x0<20}))),console.log("too short",n.leaves().filter((function(t){return t.y1-t.y0<20})))}}),[P,q,v,N,B,W,c,f,k,y,C,V,I,_,A]),Object(O.jsxs)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",flexDirection:"column",overflowY:"auto"},children:[Object(O.jsxs)("div",{style:{paddingLeft:18,fontSize:12,marginBottom:4-c,zIndex:2},children:[Object(O.jsx)("b",{style:{whiteSpace:"nowrap"},children:"all"===v[v.length-1]?"\u0e23\u0e27\u0e21\u0e17\u0e38\u0e01\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19":v[v.length-1]}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{style:{opacity:.7},children:[V.toLocaleString()," ","\u0e1a\u0e32\u0e17"]})]}),r&&Object(O.jsx)(p,{style:{backgroundColor:"#000c",alignItems:"center",justifyContent:"center"},children:"Loading..."}),Object(O.jsx)("div",{style:{height:c,marginBottom:-c,background:"linear-gradient(#000f, #0000)",width:"100%",zIndex:1,pointerEvents:"none"}}),Object(O.jsx)("div",{style:{flexGrow:1,position:"relative"},children:Object(O.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",flexDirection:"column",overflowY:"auto"},ref:G,children:Object(O.jsx)("svg",{ref:P,width:N,height:B,children:Object(O.jsx)("g",{transform:"translate(".concat(c,", ").concat(c,")"),className:"chart"})})})}),Object(O.jsx)("div",{style:{height:c,marginTop:-c,background:"linear-gradient(#0000, #000f)",width:"100%",zIndex:1,pointerEvents:"none"}})]})},y=["MINISTRY","BUDGETARY_UNIT","BUDGET_PLAN","OUTPUT_PROJECT","ITEM"],w={MINISTRY:"\u0e01\u0e23\u0e30\u0e17\u0e23\u0e27\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e40\u0e17\u0e48\u0e32",BUDGETARY_UNIT:"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e23\u0e31\u0e1a\u0e07\u0e1a\u0e2f",BUDGET_PLAN:"\u0e41\u0e1c\u0e19\u0e07\u0e32\u0e19",OUTPUT_PROJECT:"\u0e1c\u0e25\u0e1c\u0e25\u0e34\u0e15/\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23",ITEM:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"};var k,T,S,M,C,E=function(t){var e=t.data,n=t.isLoading,i=t.setCurrentSum,o=void 0===i?function(t){}:i,r=t.fullValue,l=void 0===r?-1:r,c=t.index,s=void 0===c?0:c,f=t.isMultipleMaxSum,x=void 0!==f&&f,h=t.sumWindows,b=void 0===h?[]:h,j=Object(a.useState)(""),g=Object(d.a)(j,2),k=g[0],T=g[1],S=Object(a.useState)(["all"]),M=Object(d.a)(S,2),C=M[0],E=M[1],I=Object(a.useCallback)((function(t,e){var n=["MINISTRY","BUDGETARY_UNIT"];for(var i in n)if(t[n[i]].includes(e))return!0;return!1}),[]),R=Object(a.useMemo)((function(){return e.filter((function(t){return I(t,k)}))}),[e,I,k]),_=Object(v.e)();return Object(v.d)(),Object(a.useEffect)((function(){var t=_.pathname.split("/").slice(1);console.log("f",t,t.length>0&&t[0]?t:["all"]),E(t.length>0&&t[0]?t:["all"])}),[_]),Object(O.jsxs)(p,{children:[Object(O.jsxs)("div",{style:{height:60,display:"flex",alignItems:"center",paddingLeft:16,paddingRight:16,marginBottom:8},children:[Object(O.jsx)("div",{style:{flexGrow:1,display:"flex",alignItems:"center",overflowX:"auto"},children:C.map((function(t,e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("button",{type:"button",onClick:function(){return function(t,e){console.log(t,e);var n=Object(u.a)(C);n.splice(e+1),console.log("temp",n),E(n)}(t,e)},style:{marginRight:8,backgroundColor:"transparent",border:"none",color:"white",padding:0,textAlign:"left"},children:[Object(O.jsx)("small",{style:{opacity:"0.4",whiteSpace:"nowrap"},children:e>0&&w[y[e-1]]}),e>0&&Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{textDecoration:e<C.length-1?"underline":"none",whiteSpace:"nowrap"},children:0===e?""===k?"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14":'\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e07\u0e32\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e17\u0e35\u0e48\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e35\u0e04\u0e33\u0e27\u0e48\u0e32 "'.concat(k,'"'):t.length<20?t:"".concat(t.substr(0,20),"...")})]}),e===C.length-1&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("small",{style:{color:"white",marginRight:8,opacity:"0.4"},children:":"}),Object(O.jsxs)("small",{style:{color:"white",marginRight:8,opacity:"0.4"},children:["\u0e41\u0e1a\u0e48\u0e07\u0e15\u0e32\u0e21"," ",w[y[e]]]})]}),e<C.length-1&&Object(O.jsx)("span",{style:{color:"white",marginRight:8},children:">"})]})}))}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{style:{fontSize:12,opacity:.7},children:"Filter"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",value:k,onChange:function(t){return T(t.target.value)},placeholder:"\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e23\u0e31\u0e1a\u0e07\u0e1a\u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e23\u0e30\u0e17\u0e23\u0e27\u0e07"})]})]}),Object(O.jsx)("div",{style:{display:"flex",flexDirection:"row",flexGrow:1},children:Object(O.jsx)("div",{style:{position:"relative",flexGrow:1},children:Object(O.jsx)(m,{data:R,isLoading:n,filters:C,hierarchyBy:y,setFilters:E,setCurrentSum:function(t){o(t)},fullValue:l,index:s,isMultipleMaxSum:x,sumWindows:b})})})]})},I=h.a.div(k||(k=Object(f.a)(["\n display: flex;\n flex-direction: row;\n flex-grow: 1;\n\n  @media screen and (orientation:portrait) {\n    flex-direction: column;\n  }\n"]))),R=h.a.img(T||(T=Object(f.a)(["\n  width: 100%;\n"]))),_=h.a.a(S||(S=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  color: white;\n  text-align: center;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  small {\n    margin-bottom: 4px;\n    opacity: 0.4;\n  }\n\n  "," {\n    max-width: 64px;\n  }\n"])),R),L=h.a.div(M||(M=Object(f.a)(["\n  position: relative;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  \n  @media screen and (orientation:landscape) {\n    width: 80px;\n    &>*:not(:last-child) {\n      margin-bottom: 16px;\n    }\n  }\n\n  @media screen and (orientation:portrait) {\n    height: 64px;\n    flex-direction: row;\n    /* display: none !important; */\n\n    &>*:not(:last-child) {\n      margin-right: 16px;\n    }\n\n    "," "," {\n      max-width: 48px;\n    }\n  }\n"])),_,R),A=h.a.button(C||(C=Object(f.a)(["\n  padding: 8px;\n  background-color: #181818;\n  border: none;\n  color: #888;\n  border-radius: 8px;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));var U=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)(!0),r=Object(d.a)(o,2),l=r[0],c=r[1],f=Object(a.useState)(!1),h=Object(d.a)(f,2),j=h[0],g=h[1],m=Object(a.useState)(["all"]),y=Object(d.a)(m,2),w=(y[0],y[1]),k=Object(a.useState)([0,0]),T=Object(d.a)(k,2),S=T[0],M=T[1];Object(a.useEffect)((function(){x.a("".concat("/thaibudget65","/data.csv")).then((function(t){c(!1),i(t)}))}),[]);var C=function(t,e){var n=Object(u.a)(S);n[t]=e,M(n)},U=Object(a.useMemo)((function(){return x.c(S)}),[S]),G=Object(a.useMemo)((function(){var t=x.c(S);return S.filter((function(e){return t===e})).length>1}),[S]),N=Object(a.useMemo)((function(){return n.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{AMOUNT:parseFloat(t.AMOUNT.replace(/,/g,"")),OUTPUT_PROJECT:t.OUTPUT||t.PROJECT?t.OUTPUT+t.PROJECT:"\u0e44\u0e21\u0e48\u0e23\u0e30\u0e1a\u0e38\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23/\u0e1c\u0e25\u0e1c\u0e25\u0e34\u0e15",MINISTRY:t.MINISTRY.replace(/\([0-9]+\)$/,"").trim(),ITEM:[t.ITEM_DESCRIPTION,t.CATEGORY_LV2,t.CATEGORY_LV3,t.CATEGORY_LV4,t.CATEGORY_LV5,t.CATEGORY_LV6].filter((function(t){return t})).join(" - ")})})).filter((function(t){return 2022===+t.FISCAL_YEAR}))}),[n]),B=Object(v.e)();return Object(v.d)(),Object(a.useEffect)((function(){var t=B.pathname.split("/").slice(1);console.log("f",t,t.length>0&&t[0]?t:["all"]),w(t.length>0&&t[0]?t:["all"])}),[B]),Object(O.jsxs)(p,{children:[Object(O.jsxs)(I,{children:[Object(O.jsx)("div",{style:{position:"relative",flexGrow:1},children:Object(O.jsx)(E,{data:N,isLoading:l,fullValue:U,setCurrentSum:function(t){console.log("setCurrentSum 0",t),C(0,t)},isMultipleMaxSum:G,sumWindows:S,index:0})}),j&&Object(O.jsx)("div",{style:{position:"relative",flexGrow:1},children:Object(O.jsx)(E,{data:N,isLoading:l,fullValue:U,setCurrentSum:function(t){console.log("setCurrentSum 1",t),C(1,t)},isMultipleMaxSum:G,sumWindows:S,index:1})}),Object(O.jsxs)(L,{children:[Object(O.jsxs)(A,{type:"button",onClick:function(){j&&C(1,0),g(!j)},children:[Object(O.jsx)("span",{style:{display:"inline-flex",fontSize:24,width:32,height:32,borderRadius:"50%",backgroundColor:"#333",color:"white",alignItems:"center",justifyContent:"center",marginBottom:8},children:j?"\xd7":"+"}),j?"Close\nCompare\nView":"Open\nCompare\nView"]}),Object(O.jsx)("div",{style:{flexGrow:1}}),Object(O.jsxs)(_,{target:"_blank",href:"https://taepras.com",children:[Object(O.jsx)("small",{children:"Visualized by"}),Object(O.jsx)(R,{src:"".concat("/thaibudget65","/tp_logo_dark.svg"),alt:"kaogeek logo",title:"Thanawit Prasongpongchai"})]}),Object(O.jsxs)(_,{target:"_blank",href:"https://docs.google.com/spreadsheets/d/1yyWXSTbq3CD_gNxks-krcSBzbszv3c_2Nq54lckoQ24/edit#gid=343539850",children:[Object(O.jsx)("small",{children:"Data Source"}),Object(O.jsx)(R,{src:"".concat("/thaibudget65","/kaogeek_logo_dark.png"),alt:"kaogeek logo",title:"\u0e01\u0e25\u0e38\u0e48\u0e21\u0e01\u0e49\u0e32\u0e27 Geek"})]}),Object(O.jsx)("div",{style:{opacity:.6,textAlign:"center"},children:Object(O.jsx)("small",{style:{display:"inline-block",lineHeight:1.2},children:"** This is a work-in-progress."})})]})]}),Object(O.jsx)(b.a,{multiline:!0})]})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),o(t),r(t)}))};l.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(c.a,{children:Object(O.jsx)(U,{})})}),document.getElementById("root")),G()}},[[154,1,2]]]);
//# sourceMappingURL=main.0830b6fe.chunk.js.map