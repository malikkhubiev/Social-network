(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[3],{260:function(e,a,s){e.exports={Dialogs:"Dialogs_Dialogs__2rPVZ",DialogsItems:"Dialogs_DialogsItems__D9V5e",DialogMessages:"Dialogs_DialogMessages__1yjD-",DialogMessagesWriting:"Dialogs_DialogMessagesWriting__3_0eW",DialogMessagesWritingInput:"Dialogs_DialogMessagesWritingInput__2SKsE",DialogMessagesWritingButton:"Dialogs_DialogMessagesWritingButton__27qGc"}},261:function(e,a,s){e.exports={dialog:"DialogItem_dialog__1227K",dialogAva:"DialogItem_dialogAva__3viBK"}},262:function(e,a,s){e.exports={message:"DialogMessage_message___R2sN"}},266:function(e,a,s){"use strict";s.r(a);var t=s(0),i=s.n(t),n=s(10),g=s(8),o=s(115),l=s(93),m=s(260),r=s.n(m),c=s(261),u=s.n(c),d=s(16),D=function(e){var a="/dialogs/".concat(e.path);return i.a.createElement("div",{className:u.a.dialog},i.a.createElement("div",{className:u.a.dialogAva}),i.a.createElement(d.b,{to:a},e.name))},_=s(262),p=s.n(_),f=function(e){return i.a.createElement("div",{className:p.a.message},e.message)},M=s(116),b=s(117),v=s(43),E=s(32),N=Object(E.a)(25),W=Object(b.a)({form:"AddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit,className:r.a.DialogMessagesWriting},i.a.createElement(M.a,{component:v.a,validate:[E.b,N],name:"message",placeholder:"Send message",className:r.a.DialogMessagesWritingInput}),i.a.createElement("button",{className:r.a.DialogMessagesWritingButton},"Send"))})),I=function(e){var a=e.dialogs,s=e.messages,t=a.map((function(e){return i.a.createElement(D,{path:e.id,name:e.name})})),n=s.map((function(e){return i.a.createElement(f,{message:e.message})}));return i.a.createElement("div",{className:r.a.Dialogs},i.a.createElement("div",{className:r.a.DialogsItems},t),i.a.createElement("div",{className:r.a.DialogMessages},i.a.createElement("div",{className:r.a.DialogMessagesItems},n),i.a.createElement(W,Object.assign({onSubmit:function(a){e.sendMessage(a.message)}},e))))};a.default=Object(g.d)(Object(n.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),{sendMessage:l.b}),o.a)(I)}}]);
//# sourceMappingURL=3.6379ff02.chunk.js.map