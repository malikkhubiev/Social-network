(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),o=a(10),s=a(9),i=function(e){return{isAuth:e.auth.isAuth}},c=function(e){return Object(o.b)(i)((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(s.a,{to:"/login"})}))}},123:function(e,t,a){e.exports={mainContent:"Profile_mainContent__F8CjP"}},124:function(e,t,a){e.exports={header:"Header_header__fEKkO"}},15:function(e,t,a){e.exports={person:"Person_person__1yJZw",personTopimg:"Person_personTopimg__3oi_T",personData:"Person_personData__2iTBv",personDataAva:"Person_personDataAva__20fKt",personDataDescName:"Person_personDataDescName__2x5K-",personStatus:"Person_personStatus__1zEh5",personDataDescDesc:"Person_personDataDescDesc__WEane"}},21:function(e,t,a){e.exports={nav:"NavBar_nav__bQR7m",list:"NavBar_list__2DAXM",friends:"NavBar_friends__2zqJ9",friendsHeader:"NavBar_friendsHeader__3DPFc",friendsItems:"NavBar_friendsItems__3XaP6"}},216:function(e,t,a){},217:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(8),r=a(83),o=a.n(r),s=a(119),i=a(36),c=a(5),l=(a(91),a(26)),u="ADD-POST",m="SET-USER-PROFILE",d="SET-STATUS",f={profile:{id:0,name:"Malik",aboutMe:"\u042f Front-end \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",status:"Double click me!",lookingForAJob:!0},posts:[{id:1,message:"Hi!",likes:5},{id:2,message:"Hey, i'm fine, how are you?",likes:7},{id:3,message:"I'm fine too, nice to meet you",likes:2},{id:4,message:";)",likes:500},{id:5,message:"React is so much interesting!",likes:52}]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var a=t.post,n=e.posts.length+1;return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[{id:n,message:a,likes:100}])});case m:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{status:t.status})});default:return e}},b=a(93),g={friends:[{id:1,name:"Andrey"},{id:2,name:"Zabit"},{id:3,name:"Khabib"}]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return e},_=a(61),v=a(38),h="SET-AUTH-USER-DATA",D="REM-AUTH-USER-DATA",O={name:null,login:null,password:null,isAuth:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(c.a)(Object(c.a)(Object(c.a)({},e),t.data),{},{isAuth:!0});case D:return Object(c.a)(Object(c.a)({},e),{},{isAuth:!1});default:return e}},k=a(120),N=a(118),w=Object(n.c)({profilePage:p,dialogsPage:b.a,navbarPage:E,usersPage:_.a,auth:P,form:N.a}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n.d,A=Object(n.e)(w,j(Object(n.a)(k.a))),S=a(0),y=a.n(S),M=a(41),F=a.n(M),I=a(16),T=(a(216),a(217),a(21)),C=a.n(T),x=a(64),L=a.n(x),U=function(e){return y.a.createElement("div",{className:L.a.friendsItem},y.a.createElement("div",{className:L.a.friendsItemImg}),y.a.createElement("p",{className:L.a.friendsItemName},e.name))},J=function(e){var t=e.friends.map((function(e){return y.a.createElement(U,{name:e.name})}));return y.a.createElement("nav",{className:C.a.nav},y.a.createElement("ul",{className:C.a.list},y.a.createElement(I.b,{activeClassName:C.a.newCl,to:"/profile"},y.a.createElement("li",null,"Profile")),y.a.createElement(I.b,{activeClassName:C.a.newCl,to:"/dialogs"},y.a.createElement("li",null,"Dialogs")),y.a.createElement(I.b,{activeClassName:C.a.newCl,to:"/users"},y.a.createElement("li",null,"Users"))),y.a.createElement("div",{className:C.a.friends},y.a.createElement("p",{className:C.a.friendsHeader},"Friends"),y.a.createElement("div",{className:C.a.friendsItems},t)))},B=a(123),H=a.n(B),R=a(15),z=a.n(R),G=a(90),W=function(e){var t=Object(S.useState)(!1),a=Object(G.a)(t,2),n=a[0],r=a[1],o=Object(S.useState)(e.status),s=Object(G.a)(o,2),i=s[0],c=s[1];return y.a.createElement("div",{className:z.a.personStatus},!1===n?y.a.createElement("div",null,y.a.createElement("p",{onDoubleClick:function(){r(!0)}},i)):y.a.createElement("div",null,y.a.createElement("input",{onChange:function(e){return function(e){var t=e.target.value;c(t)}(e)},autoFocus:!0,onBlur:function(){r(!1),e.setStatus(i)},value:i})))},X=function(e){return y.a.createElement("div",{className:z.a.person},y.a.createElement("div",{className:z.a.personTopimg}),y.a.createElement("div",{className:z.a.personData},y.a.createElement("div",{className:z.a.personDataAva}),y.a.createElement("div",{className:z.a.personDataDesc},y.a.createElement("p",{className:z.a.personDataDescName},e.profile.name),y.a.createElement(W,e),y.a.createElement("p",{className:z.a.personDataDescDesc},"\u041e\u0431\u043e \u043c\u043d\u0435: ",e.profile.aboutMe),e.profile.lookingForAJob?y.a.createElement("p",{className:z.a.personDataDescDesc},"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"):y.a.createElement("p",{className:z.a.personDataDescDesc},"\u0423 \u043c\u0435\u043d\u044f \u043e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430"),y.a.createElement("p",{className:z.a.personDataDescDesc},"Education: RSEU Rinh"))))},K=a(10),q=a(116),Z=a(117),Q=a(32),V=a(43),Y=a(37),$=a.n(Y),ee=a(50),te=a.n(ee),ae=function(e){return y.a.createElement("div",{className:te.a.postsPost},y.a.createElement("div",{className:te.a.postsPostImg}),y.a.createElement("p",{className:te.a.postsPostTxt},e.message),y.a.createElement("p",{className:te.a.postsPostLike},"like: ",e.likes))},ne=Object(Q.a)(30),re=Object(Z.a)({form:"AddNewPostForm"})((function(e){return y.a.createElement("form",{onSubmit:e.handleSubmit},y.a.createElement(q.a,{validate:[Q.b,ne],name:"postText",component:V.a,placeholder:"your news..."}),y.a.createElement("button",{className:$.a.postsMenuSend},"Add post"))})),oe=function(e){var t=Object(i.a)(e.posts).reverse().map((function(e){return y.a.createElement(ae,{likes:e.likes,message:e.message})}));return y.a.createElement("div",{className:$.a.postsArea},y.a.createElement("div",{className:$.a.postsMenu},y.a.createElement("p",{className:$.a.postsMenuHeader},"My posts"),y.a.createElement(re,{onSubmit:function(t){e.addPost(t.postText)}})),y.a.createElement("div",{className:$.a.posts},t))},se=Object(K.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e({type:u,post:t})}}}))(oe),ie=function(e){return y.a.createElement(y.a.Fragment,null,y.a.createElement(X,Object.assign({},e,{profile:e.profile})),y.a.createElement(se,null))},ce=a(9),le=a(115),ue=Object(n.d)(Object(K.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.profile.status}}),{getUser:function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=l.a.getUser(e),a({type:m,profile:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setStatus:function(e){return{type:d,status:e}}}),ce.f,le.a)((function(e){return Object(S.useEffect)((function(){var t=e.match.params.userId;void 0!==t&&e.getUser(t)}),[]),y.a.createElement("div",{className:H.a.mainContent},y.a.createElement(ie,e))})),me=a(124),de=a.n(me),fe=a.p+"static/media/logo.3597d19d.png",pe=function(e){return y.a.createElement("header",{className:de.a.header},y.a.createElement("img",{src:fe}),e.isAuth?y.a.createElement("div",null,y.a.createElement("p",null,e.name),y.a.createElement("button",{onClick:e.LogoutSanka},"Log out")):y.a.createElement(I.b,{to:"/login"},y.a.createElement("p",null,"Log in")))},be=Object(K.b)((function(e){return{isAuth:e.auth.isAuth,name:e.auth.name}}),{getUsers:_.c,LogoutSanka:function(){return function(e){e({type:D})}}})((function(e){return Object(S.useEffect)((function(){e.getUsers()}),[]),y.a.createElement(pe,e)})),ge=a(66),Ee=a.n(ge),_e=Object(Z.a)({form:"login"})((function(e){return y.a.createElement("form",{onSubmit:e.handleSubmit},y.a.createElement("div",null,y.a.createElement(q.a,{placeholder:"Login",name:"login",validate:[Q.b],component:V.a})),y.a.createElement("div",null,y.a.createElement(q.a,{placeholder:"Password",name:"password",validate:[Q.b],component:V.a})),y.a.createElement("div",null,y.a.createElement(q.a,{type:"checkbox",name:"rememberMe",className:Ee.a.rem,component:"input"})," remember me"),y.a.createElement("div",null,y.a.createElement("button",null,"Log in")),y.a.createElement("div",{className:Ee.a.summaryError},e.error?y.a.createElement("p",null,e.error):""))})),ve=Object(K.b)((function(e){return{isAuth:e.auth.isAuth}}),{LoginSanka:function(e){return function(t){var a,n;l.a.logIn(e,(function(e,t){a=e,n=t})),t(!0===a?function(e,t,a){return{type:h,data:{login:e,password:t,name:a}}}(e.login,e.password,n):Object(v.a)("login",{_error:a}))}}})((function(e){return e.isAuth?y.a.createElement(ce.a,{to:"/profile"}):y.a.createElement("div",{className:Ee.a.sectionLogin},y.a.createElement("p",null,"Login"),y.a.createElement("p",null,"Hint: login and password - admin"),y.a.createElement(_e,{onSubmit:function(t){e.LoginSanka(t)}}))})),he=function(e){return function(t){return y.a.createElement(y.a.Suspense,{fallback:y.a.createElement("div",null,"...Loading")},y.a.createElement(e,t))}},De=y.a.lazy((function(){return a.e(3).then(a.bind(null,266))})),Oe=y.a.lazy((function(){return a.e(4).then(a.bind(null,265))})),Pe=function(e){return y.a.createElement("div",{className:"appWrapper"},y.a.createElement(be,null),y.a.createElement("div",{className:"double"},y.a.createElement(J,{friends:e.store.getState().navbarPage.friends}),y.a.createElement(ce.b,{path:"/login",render:function(){return y.a.createElement(ve,null)}}),y.a.createElement(ce.b,{path:"/profile/:userId?",render:function(){return y.a.createElement(ue,null)}}),y.a.createElement(ce.b,{path:"/dialogs",render:he(De)}),y.a.createElement(ce.b,{path:"/users",render:he(Oe)})))},ke=function(e){F.a.render(y.a.createElement(I.a,{basename:"/Social-network"},y.a.createElement(K.a,{store:A},y.a.createElement(Pe,{store:A}))),document.getElementById("root"))};A.subscribe((function(){A.getState();ke()})),ke(A.state),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=[{name:"Malik Khubiev",login:"admin",password:"admin",rememberMe:!1}],r=[{id:0,name:"Malik",aboutMe:"\u042f Front-end \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:1,name:"Billy",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:2,name:"Cameron",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:3,name:"Alex",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:4,name:"Billy",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:5,name:"Cameron",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:6,name:"Alex",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:7,name:"Billy",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:8,name:"Cameron",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:9,name:"Alex",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:10,name:"Billy",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1},{id:11,name:"Cameron",aboutMe:"\u042f \u043a\u0440\u0443\u0442\u043e\u0439",status:"Double click me!",lookingForAJob:!0,followed:!1}],o={getUsers:function(){return r.slice(0)},follow:function(e){return r.map((function(t){return t.id===e?t.followed=!0:0})),r.slice(0)},unFollow:function(e){return r.map((function(t){return t.id===e?t.followed=!1:0})),r.slice(0)},getUser:function(e){var t;return r.map((function(a){a.id===+e&&(t=a)})),t},logIn:function(e,t){var a=0;n.map((function(n){n.login===e.login&&n.password===e.password?t(!0,n.name):a++})),a===n.length&&t("Wrong Email or Password")}}},32:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},37:function(e,t,a){e.exports={postsArea:"MyPosts_postsArea__bYvCV",postsMenu:"MyPosts_postsMenu__2ldav",postsMenuHeader:"MyPosts_postsMenuHeader__285tx",postsMenuSend:"MyPosts_postsMenuSend__32gny",posts:"MyPosts_posts__2Bijw",postsPost:"MyPosts_postsPost__xvg7d",postsPostImg:"MyPosts_postsPostImg__3I9h0",postsPostTxt:"MyPosts_postsPostTxt__bp_J3"}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(125),r=a(0),o=a.n(r),s=a(87),i=a.n(s),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=e.input,a=e.meta,r=Object(n.a)(e,["input","meta"]),s=a.touched&&a.error;return o.a.createElement("div",{className:s?i.a.error:i.a.formDiv},o.a.createElement("input",Object.assign({},t,r)),s?o.a.createElement("span",null,a.error):"")}},50:function(e,t,a){e.exports={postsPost:"Post_postsPost__2OwkX",postsPostImg:"Post_postsPostImg__12iBn",postsPostTxt:"Post_postsPostTxt__2pdjC",postsPostLike:"Post_postsPostLike__1nzJy"}},61:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return f})),a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return b}));var n=a(5),r=(a(91),a(26)),o="SET-USERS",s="SET-TOTAL-USERS-COUNT",i="SET-CURRENT-PAGE",c="TOGGLE-IS-FETCHING",l={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!0},u=function(e){return{type:o,users:e}},m=function(e){return{type:c,isFetching:e}},d=function(){return function(e){e(m(!0));var t,a=r.a.getUsers();e(u(a)),e((t=a.length,{type:s,totalCount:t})),e(m(!1))}},f=function(e){return function(t){var a=r.a.follow(e);t(u(a))}},p=function(e){return function(t){var a=r.a.unFollow(e);t(u(a))}},b=function(e){return function(t){t(function(e){return{type:i,pageNumber:e}}(e))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(n.a)(Object(n.a)({},e),{},{users:t.users});case s:return Object(n.a)(Object(n.a)({},e),{},{totalUsersCount:t.totalCount});case i:return Object(n.a)(Object(n.a)({},e),{},{currentPage:t.pageNumber});case c:return Object(n.a)(Object(n.a)({},e),{},{isFetching:t.isFetching});default:return e}}},64:function(e,t,a){e.exports={friendsItem:"FriendsItem_friendsItem__1GzXE",friendsItemImg:"FriendsItem_friendsItemImg__lt43M",friendsItemName:"FriendsItem_friendsItemName__llYQG"}},66:function(e,t,a){e.exports={sectionLogin:"Login_sectionLogin__2tzgq",rem:"Login_rem__2BDXu",summaryError:"Login_summaryError__3B1bs"}},87:function(e,t,a){e.exports={formDiv:"FormsControlls_formDiv__AvjO5",error:"FormsControlls_error__PqaDL"}},93:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(36),r=a(5),o="ADD-MESSAGE",s={dialogs:[{id:1,name:"Artem"},{id:2,name:"Zabit"},{id:3,name:"Messi"},{id:4,name:"Siera"},{id:5,name:"Zhois"}],messages:[{id:1,message:"Hi!"},{id:2,message:"Good architecture :)"},{id:3,message:"Have a good day)"},{id:4,message:"#WhatMeansHashTag?"},{id:5,message:"New Website!!!"}]},i=function(e){return{type:o,newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var a=t.newMessage,i=e.messages.length+1;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[{id:i,message:a}])});default:return e}}}},[[259,1,2]]]);
//# sourceMappingURL=main.457072b4.chunk.js.map