(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[4],{268:function(e,t,n){e.exports={sectionUsers:"Users_sectionUsers__2Sliz",sectionUsersList:"Users_sectionUsersList__271At",sectionUsersListLi:"Users_sectionUsersListLi__hUydY",bold:"Users_bold__1vKRU",preloaderImg:"Users_preloaderImg__7bDw1"}},269:function(e,t,n){e.exports={sectionUserItem:"UserItem_sectionUserItem__3DvdS",sectionUserItemLeft:"UserItem_sectionUserItemLeft__1tEhq",sectionUserItemLeftImg:"UserItem_sectionUserItemLeftImg__O7Ido",sectionUserItemLeftButton:"UserItem_sectionUserItemLeftButton__1G4_f",sectionUserItemDesc:"UserItem_sectionUserItemDesc__w-E2W"}},270:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(5),c=n(58),i=n.p+"static/media/preloader.0b960412.gif",o=function(){return r.a.createElement("img",{alt:"loading",style:{position:"absolute",transform:"translate(-50%)",top:"50%",left:"50%"},src:i})},l=function(e){return e.usersPage.users},m=function(e){return e.usersPage.totalUsersCount},u=function(e){return e.usersPage.pageSize},f=function(e){return e.usersPage.currentPage},d=function(e){return e.usersPage.isFetching},U=function(e){return e.usersPage.filter},p=n(10),b=n(268),E=n.n(b),_=n(269),I=n.n(_),g=n(20),v=function(e){return r.a.createElement("div",{className:I.a.sectionUserItem},r.a.createElement("div",{className:I.a.sectionUserItemLeft},r.a.createElement(g.b,{to:e.pathCreator(e.id)},r.a.createElement("div",{className:I.a.sectionUserItemLeftImg})),r.a.createElement("div",null,e.followed?r.a.createElement("button",{onClick:function(){e.unFollow(e.id)},className:I.a.sectionUserItemLeftButton},"Unfollow"):r.a.createElement("button",{onClick:function(){e.follow(e.id)},className:I.a.sectionUserItemLeftButton},"Follow"))),r.a.createElement("div",{className:I.a.sectionUserItemDesc},r.a.createElement("p",{className:I.a.sectionUserItemDescTxt},e.name)))},h=n(70),L=function(e){return{}},O=r.a.memo((function(e){return r.a.createElement(h.c,{initialValues:{term:e.filter.term,friends:e.filter.friends},validate:L,onSubmit:function(t,n){n.setSubmitting;"null"===t.friends&&(t.friends=null),"true"===t.friends&&(t.friends=!0),"false"===t.friends&&(t.friends=!1),e.setFilter({term:t.term,friends:t.friends})}},(function(e){var t=e.isSubmitting;return r.a.createElement(h.b,null,r.a.createElement(h.a,{type:"text",name:"term",placeholder:"Name should have:"}),r.a.createElement("button",{type:"submit",disabled:t},"Find"),r.a.createElement(h.a,{as:"select",name:"friends"},r.a.createElement("option",{value:"null"},"All"),r.a.createElement("option",{value:"true"},"Only friends"),r.a.createElement("option",{value:"false"},"Only not friends")))}))})),j=function(e){var t=Object(a.d)(l),n=Object(a.d)(m),i=Object(a.d)(u),o=Object(a.d)(f),d=Object(a.d)(U),b=Object(p.g)(),_=Object(a.c)(),I=function(e){_(Object(c.a)(e))},g=function(e){_(Object(c.c)(e))};Object(s.useEffect)((function(){b.push({pathname:"/users",search:"?term=".concat(d.term,"&friends=").concat(d.friends,"&page=").concat(o)})}),[d,o]);for(var h=Math.ceil(n/i),L=o*i-10,j=o*i,w=t.slice(L,j),y=[],N=1;N<=h;N++)y.push(N);var k=function(e){return"/profile/".concat(e)};return r.a.createElement("div",{className:E.a.sectionUsers},r.a.createElement(O,{filter:d,setFilter:function(t){e.myGetUsers(1,t)}}),0!==w.length?w.map((function(e){return r.a.createElement(v,{pathCreator:k,follow:I,unFollow:g,key:e.id,id:e.id,name:e.name,followed:e.followed})})):r.a.createElement("p",null,"There are no users with such parameters"),r.a.createElement("ul",{className:E.a.sectionUsersList},y.map((function(t){return o===t?r.a.createElement("li",{key:t,className:E.a.bold},t):r.a.createElement("li",{key:t,onClick:function(){return n=t,void e.myGetUsers(n,{});var n},className:E.a.sectionUsersListLi},t)}))))};t.default=function(e){var t=Object(a.d)(d),n=Object(a.c)(),i=function(e,t){n(Object(c.b)(e,t))};return Object(s.useEffect)((function(){i(1,{})}),[]),t?r.a.createElement(o,null):r.a.createElement(j,{myGetUsers:i})}}}]);
//# sourceMappingURL=4.0fd733b2.chunk.js.map