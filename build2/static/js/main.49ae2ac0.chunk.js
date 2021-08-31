(this["webpackJsonpstream-frontend"]=this["webpackJsonpstream-frontend"]||[]).push([[0],{133:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var o=c(0),n=c.n(o),s=c(29),r=c.n(s),a=(c(79),c(80),c(5)),i=c(31),l=c(17);function d(e,t,c){var o=c[t.type.toLowerCase().replace(/_(\w)/g,(function(e){return e[1].toUpperCase()}))];o&&o(e,t)}var u,j={setCurrentRecord:function(e,t){e.currentRecord=t.payload}},m=Object(l.a)((function(e,t){return d(e,t,j)}),{currentRecord:""}),b=c(69),O=c.n(b),h=c(70),f=c.n(h),p={socket:O.a.connect(f.a.BASE_URL,{transports:["websocket"]}),localStream:"",streamConstraints:{video:!0,audio:!0}},g={setLocalStream:function(e,t){e.localStream=t.payload},setStreamConstraints:function(e,t){e.streamConstraints=t.payload}},x=Object(l.a)((function(e,t){return d(e,t,g)}),p),A=c(11),w=(u={setRoomId:function(e,t){e.roomId=t.payload},setConnectionUserModal:function(e,t){e.connectionUserModel=t.payload},setIsCaller:function(e,t){e.isCaller=t.payload},setLocalVideoStatus:function(e,t){e.localVideoStatus=t.payload},setRemoteVideoStatus:function(e,t){e.remoteVideoStatus=t.payload}},Object(A.a)(u,"setConnectionUserModal",(function(e,t){e.connectionUserModal=t.connectionUserModal})),Object(A.a)(u,"setCameraStatus",(function(e,t){e.cameraStatus=t.payload})),Object(A.a)(u,"setMicrophoneStatus",(function(e,t){e.microphoneStatus=t.payload})),Object(A.a)(u,"setReceiveMessageToAll",(function(e,t){e.receiveMessageToAll=t.payload})),u),v=Object(l.a)((function(e,t){return d(e,t,w)}),{roomId:"",isCaller:!1,localVideoStatus:!0,remoteVideoStatus:!0,connectionUserModel:!0,cameraStatus:!1,microphoneStatus:!1,receiveMessageToAll:{}}),C={setUserName:function(e,t){e.userName=t.payload}},y=Object(l.a)((function(e,t){return d(e,t,C)}),{userName:""});c(38);var T=new Proxy({},{get:function(e,t){return void 0===e[t]?function(e){return{type:(c=t,c.replace(/([A-Z])/g,"_$1").toUpperCase()),payload:e};var c}:e[t]}}),N=Object(i.b)({recordReducer:m,socketReducer:x,convarsetionReducer:v,userReducer:y}),M=Object(i.c)(N,Object(i.a)((function(e){var t=e.dispatch,c=e.getState;return function(e){return function(o){return"CREATED_EVENT_FROM_SOCKET"===o.type&&navigator.mediaDevices.getUserMedia(c().socketReducer.streamConstraints).then((function(e){t({type:"ADD_LOCAL_STREAM",payload:e}),t(T.setIsCaller(!0))})).catch((function(e){console.log(e),"NotFoundError"===e.name||"DevicesNotFoundError"===e.name?console.log("required track is missing"):"NotReadableError"===e.name||"TrackStartError"===e.name?console.log("webcam or mic are already in use"):"OverconstrainedError"===e.name||"ConstraintNotSatisfiedError"===e.name?console.log("constraints can not be satisfied by avb. devices"):"NotAllowedError"===e.name||"PermissionDeniedError"===e.name?console.log("permission denied in browser"):"TypeError"===e.name||"TypeError"===e.name?console.log("empty constraints object"):console.log("other errors")})),e(o)}}}),(function(e){var t=e.dispatch,c=e.getState;return function(e){return function(o){if("ADD_LOCAL_STREAM"===o.type){t(T.setLocalStream(o.payload));var n=c().socketReducer.localStream;n.srcObject=o.payload,t(T.setLocalVideo(n))}return e(o)}}}),(function(e){var t=e.dispatch,c=e.getState;return function(e){return function(o){return"JOINED_EVENT_FROM_SOCKET"===o.type&&navigator.mediaDevices.getUserMedia(c().socketReducer.streamConstraints).then((function(e){t({type:"ADD_LOCAL_STREAM",payload:e}),t(T.setVisibleOptionsModal(!0))})).catch((function(e){console.log(e),"NotFoundError"===e.name||"DevicesNotFoundError"===e.name?console.log("required track is missing"):"NotReadableError"===e.name||"TrackStartError"===e.name?console.log("webcam or mic are already in use"):"OverconstrainedError"===e.name||"ConstraintNotSatisfiedError"===e.name?console.log("constraints can not be satisfied by avb. devices"):"NotAllowedError"===e.name||"PermissionDeniedError"===e.name?console.log("permission denied in browser"):"TypeError"===e.name||"TypeError"===e.name?console.log("empty constraints object"):console.log("other errors")})),e(o)}}})));window.store=M;var R=M,S=c(73),E=c(3),k=c(71),B=c(74),F=c(25),V=c.n(F),L=c(39),U=c(6),P=(c(133),c.p+"static/media/Group 21662.ddf6fe54.svg"),q=c.p+"static/media/Component 719 \u2013 5.95600975.svg",H=(c.p,c(72)),I=c(1),D=function(e){var t,c,n,s,r=Object(o.useState)(!1),i=Object(U.a)(r,2),l=(i[0],i[1]),d=Object(a.b)(),u=Object(a.c)((function(e){return e.socketReducer.socket})),j=(Object(a.c)((function(e){return e.socketReducer.streamConstraints})),Object(a.c)((function(e){return e.convarsetionReducer.receiveMessageToAll})),Object(a.c)((function(e){return e.convarsetionReducer.connectionUserModel})),Object(a.c)((function(e){return e.userReducer.userName}))),m=Object(a.c)((function(e){return e.socketReducer.localStream})),b=Object(o.useState)({}),O=Object(U.a)(b,2),h=O[0],f=O[1],p=Object(o.useState)(!1),g=Object(U.a)(p,2),x=g[0],A=g[1],w=Object(o.useRef)(),v=e.history,C=Object(H.useStopwatch)({autoStart:!0}),y=C.seconds,N=C.minutes,M=C.hours,R=(C.isRunning,C.start),S=(C.reset,C.pause),E=Object(o.useRef)(),k=Object(o.useRef)();setInterval((function(){}),1e3),s=y<10?"0"+y:y,n=N<10?"0"+N:N,c=M<10?"0"+M:M;Object(o.useEffect)((function(){l(!0);var e="";e=window.location.href.includes("admin")?window.location.pathname.split("/")[2]:window.location.pathname.split("/")[1],console.log("username!! "+e),d(T.setUserName(e)),window.location.href.includes("admin")?d({type:"CREATED_EVENT_FROM_SOCKET"}):(d(T.setStreamConstraints({video:!1,audio:!1})),d(T.setConnectionUserModal(!0)),t=e,u.emit("join",{room:t}),u.on("not exist room",(function(){v.push("/notExist")})),u.on("joined",(function(){alert("joined successfully to "+t)}))),u.on("receive-message-to-all",(function(e){f({}),console.log(e),F(e),console.log(h.data),console.log("receive-message-to-all: "+e),A(!0)}))}),[]);var F=function(e){f(h.data=e)},D=function(){var e=Object(L.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href.includes("admin")&&(t=j,d(T.setStreamConstraints({video:!0,audio:!0})),u.emit("create",{room:t})),u.on("created",t),_(1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){w.current.srcObject=m.srcObject}),[m]);var K=Object(o.useRef)(),Q=Object(o.useRef)(),z=Object(o.useState)(!0),G=Object(U.a)(z,2),X=G[0],J=G[1],Y=Object(o.useState)(0),Z=Object(U.a)(Y,2),W=Z[0],_=Z[1],$=Object(o.useState)(),ee=Object(U.a)($,2),te=ee[0],ce=ee[1],oe=Object(o.useState)([]),ne=Object(U.a)(oe,2),se=ne[0],re=ne[1];Object(o.useEffect)((function(){te&&(console.log("mediaR:",te),console.log("Created MediaRecorder",te,"with options",{mimeType:"video/webm;codecs=vp9,opus"}),Q.current.disabled=!0,te.onstop=function(e){console.log("Recorder stopped: ",e),console.log("Recorded Blobs: ",se)},te.ondataavailable=de,te.start(),console.log("MediaRecorder started",te),E.current.style.display="inline-block",k.current.style.display="inline-block")}),[te]),Object(o.useEffect)((function(){1==W&&ae()}),[W]);var ae=function(){var e=Object(L.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X?(le(),console.log("mediaR:",te),J(!1),_(2),K.current.src=P):(ie(),S(),K.current.src=q,Q.current.disabled=!1,J(!0),S(),w.current.srcObject.getTracks().forEach((function(e){e.stop()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function ie(){te.stop(),E.current.style.display="none",_(!1)}function le(){var e;R();try{e=new MediaRecorder(window.store.getState().socketReducer.localStream,{mimeType:"video/webm;codecs=vp9,opus"}),ce(e)}catch(t){console.log("Unable to create MediaRecorder with options Object: ",{mimeType:"video/webm;codecs=vp9,opus"},t);try{e=new MediaRecorder(window.store.getState().socketReducer.localStream,{mimeType:"video/webm;codecs=vp8"}),ce(e)}catch(c){console.log("Unable to create MediaRecorder with options Object: ",{mimeType:"video/webm;codecs=vp8"},c);try{e=new MediaRecorder(window.store.getState().socketReducer.localStream,"video/mp4"),ce(e)}catch(o){return alert("MediaRecorder is not supported by this browser."),void console.error("Exception while creating MediaRecorder:",o)}}}}function de(e){console.log("handleDataAvailable",e),e.data&&e.data.size>0&&re((function(t){return[].concat(Object(B.a)(t),[e.data])}))}return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"container",children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)("div",{id:"showMessage"}),x?Object(I.jsx)(I.Fragment,{children:function(){var e=document.getElementById("showMessage");console.log(h.data),e.innerHTML=h.data,console.log(e)}}):null,window.location.href.includes("admin")?Object(I.jsx)("div",{className:"col-12",children:Object(I.jsxs)("div",{className:"diVideo",children:[Object(I.jsx)("video",{id:"localVideo",height:"100%",width:"100%",muted:!0,autoPlay:!0,ref:w}),Object(I.jsx)("p",{class:"blink_me oStyle styleA",ref:E,children:"o"}),Object(I.jsxs)("p",{className:"styleB",ref:k,children:[" ",Object(I.jsx)("span",{children:c}),":",Object(I.jsx)("span",{children:n}),":",Object(I.jsx)("span",{children:s})]}),Object(I.jsxs)("div",{className:"underDiv",children:[Object(I.jsx)("img",{src:q,ref:K,className:"imgPlayPouse",onClick:W?function(e){return ae()}:function(e){return D()}}),Object(I.jsx)("button",{id:"download",onClick:function(){var e=new Blob(se,{type:"video/webm"}),t=window.URL.createObjectURL(e),c=document.createElement("a");c.style.display="none",c.href=t,c.download="test.webm",document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(t)}),100)},ref:Q,children:"Download"}),Object(I.jsx)("p",{class:"live",children:"Live"})]})]})}):Object(I.jsx)("video",{id:"localVideo",muted:!!window.location.href.includes("admin"),height:"100px",width:"100px",autoPlay:!0,ref:w})]})})})},K=c(145),Q=(c(67),c(135),c(37)),z=c.n(Q),G="data:image/png;base64,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",X=c.p+"static/media/share.3150589a.svg",J=c.p+"static/media/sendMessage.683dad8f.svg",Y=function(){var e=Object(a.c)((function(e){return e.socketReducer.socket})),t=Object(o.useState)({}),c=Object(U.a)(t,2),n=c[0],s=c[1],r=Object(o.useState)([]),i=Object(U.a)(r,2),l=i[0],d=i[1],u=(Object(a.c)((function(e){return e.userReducer.userName})),Object(o.useState)(" ")),j=Object(U.a)(u,2),m=(j[0],j[1],Object(o.useRef)(Object(I.jsx)("img",{src:G})));Object(o.useRef)();Object(o.useEffect)((function(){e.on("message-to-admin",(function(e){console.log(e),d((function(t){return t.concat({messageText:e})}))}))}),[]);return Object(I.jsxs)("div",{className:"chatBox",children:[Object(I.jsxs)(K.a,{border:"light",style:{width:"19rem",minheight:"19rem"},children:[Object(I.jsx)(K.a.Title,{className:"cardTitle row",style:{color:"#D10010"},children:Object(I.jsx)("div",{className:"col-12",children:" My Chats"})}),Object(I.jsx)("div",{className:"linear",children:" "}),Object(I.jsxs)("div",{className:"container-fluid",children:[Object(I.jsx)(K.a.Body,{children:l.map((function(t,c){return Object(I.jsxs)("div",{className:"row d-flex flex-row member",onClick:function(t){return function(t){console.log(t),document.getElementById("showShare").innerHTML=t.innerHTML,console.log(t.innerHTML),s(n.data=t.innerHTML),e.emit("send-message-to-all",{messageToShare:n}),s({})}(t.currentTarget)},children:[Object(I.jsx)("img",{ref:m,src:G,className:" col-4 profil-img",onMouseOver:function(e){e.currentTarget.src=X},onMouseOut:function(e){return e.currentTarget.src=G}}),Object(I.jsx)("div",{className:"col-8",children:Object(I.jsx)("div",{children:Object(I.jsx)("b",{children:t.messageText})})})]})}))}),Object(I.jsx)("div",{className:"mb-2"})]})]}),Object(I.jsx)("div",{id:"showShare"})]})},Z=function(){Object(a.b)();var e,t=Object(a.c)((function(e){return e.socketReducer.socket})),c=Object(o.useState)(" "),n=Object(U.a)(c,2),s=n[0],r=n[1],i=Object(o.useState)({messageText:s}),l=Object(U.a)(i,2),d=l[0],u=l[1],j=Object(a.c)((function(e){return e.userReducer.userName})),m=Object(o.useState)([]),b=Object(U.a)(m,2),O=b[0],h=b[1];Object(o.useRef)();Object(o.useEffect)((function(){console.log("xdcxfc"),t.on("send-message-to-all",(function(e){console.log("xdxcdcfcfcfzzs"),console.log(e),u(e)}))}),[]);var f=function(){r(s),s&&""!=s&&t.emit("send-message",{message:d,id:Date.now(),userName:j}),console.log(d)};return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)("div",{className:"chatBox",children:Object(I.jsxs)(K.a,{border:"light",style:{width:"19rem",minheight:"19rem"},children:[Object(I.jsx)(K.a.Title,{className:"cardTitle row",style:{color:"#D10010"},children:Object(I.jsx)("div",{className:"col-12",children:" chat with the admin"})}),Object(I.jsx)("div",{className:"linear",children:" "}),Object(I.jsxs)("div",{className:"container-fluid",children:[Object(I.jsx)(K.a.Body,{children:O.map((function(e,t){return Object(I.jsx)("div",{className:"row d-flex flex-row",children:Object(I.jsx)("div",{children:e.messageText})})}))}),Object(I.jsxs)("div",(e={className:"mb-2"},Object(A.a)(e,"className","sendMessageWrap"),Object(A.a)(e,"children",[Object(I.jsx)("input",Object(A.a)({id:"input",onChange:function(e){r(e.target.value)},className:"form-control",type:"text",placeholder:"message"},"className","chatMessage ")),Object(I.jsx)("button",{onClick:function(){u(d.messageText=s),h((function(e){return e.concat(d)})),z()("input").val(""),f()},style:{float:"right"},children:Object(I.jsx)("img",{src:J,style:{float:"right"}})})]),e))]})]})})})},W=(c(136),c.p+"static/media/chevron-left.c80cdd8e.svg"),_=c.p+"static/media/chevron-right.61c607bb.svg",$=function(){return Object(I.jsxs)(K.a,{border:"light",style:{width:"19rem"},children:[Object(I.jsxs)(K.a.Title,{className:"cardTitle row",style:{color:"#D10010"},children:[Object(I.jsx)("div",{className:"col-4",children:"Viewers"}),Object(I.jsx)("div",{className:"col-2 num",children:"3,456"}),Object(I.jsxs)("div",{className:"col-6 num1",children:[Object(I.jsx)("img",{src:W}),Object(I.jsx)("span",{children:"1/1"}),Object(I.jsx)("img",{src:_})]})]}),Object(I.jsx)("div",{className:"linear",children:" "}),Object(I.jsxs)(K.a.Body,{className:"row",children:[Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G}),Object(I.jsx)("img",{className:"col-3 img",src:G})]})]})};function ee(e){return Object(I.jsx)("div",{className:"container-fluid",children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)("div",{className:"col-9",children:Object(I.jsx)(D,Object(k.a)({},e))}),Object(I.jsx)("div",{className:"col-3",children:Object(I.jsxs)("div",{className:"d-flex align-items-end flex-column",style:{height:"200px"},children:[Object(I.jsx)("div",{className:"mb-auto mr-0 mt-0 p-2",children:window.location.href.includes("admin")?Object(I.jsx)(Y,{}):Object(I.jsx)(Z,{})}),Object(I.jsx)("div",{className:"mt-auto mb-0 mr-0 p-2",children:Object(I.jsx)($,{})})]})})]})})}c(137);var te=function(){return Object(I.jsxs)("div",{id:"notExist",children:["room not exist! \ud83d\ude41",Object(I.jsx)("br",{}),"please retry later"]})},ce=c(7),oe=Object(ce.a)();var ne=function(e){return Object(I.jsx)("div",{children:Object(I.jsx)(S.a,{history:oe,children:Object(I.jsxs)(E.c,{children:[Object(I.jsx)(E.a,{exact:!0,path:"admin/:userName",component:ee,history:oe}),Object(I.jsx)(E.a,{exact:!0,path:"/notExist",component:te,history:oe}),Object(I.jsx)(E.a,{path:"/:userName",component:ee,history:oe})]})})})},se=function(){return Object(I.jsx)(a.a,{store:R,children:Object(I.jsxs)("div",{className:"App",style:{backgroundColor:"gray",height:"700px"},children:[Object(I.jsx)("header",{className:"App-header"}),Object(I.jsx)(ne,{})]})})};c(141);r.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(se,{})}),document.getElementById("root"))},67:function(e,t,c){},70:function(e,t){e.exports={BASE_URL:"https://stream.vlogger.codes/"}},79:function(e,t,c){},80:function(e,t,c){}},[[142,1,2]]]);
//# sourceMappingURL=main.49ae2ac0.chunk.js.map