(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[4],{290:function(e,t,s){e.exports={sectionUsers:"Users_sectionUsers__2ryJL",sectionUsersList:"Users_sectionUsersList__1rQDo",sectionUsersListLi:"Users_sectionUsersListLi__3nQ53",bold:"Users_bold__116PZ",preloaderImg:"Users_preloaderImg__1ddwR"}},291:function(e,t,s){e.exports={sectionUserItem:"UserItem_sectionUserItem__2NzT2",sectionUserItemLeft:"UserItem_sectionUserItemLeft__cWAqi",sectionUserItemLeftImg:"UserItem_sectionUserItemLeftImg__1_fxl",sectionUserItemLeftButton:"UserItem_sectionUserItemLeftButton__2kwKc",sectionUserItemDesc:"UserItem_sectionUserItemDesc__2MLG2"}},292:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(10),o=s(64),c=s(290),l=s.n(c),i=s(291),m=s.n(i),u=s(17),f=function(e){return n.a.createElement("div",{className:m.a.sectionUserItem},n.a.createElement("div",{className:m.a.sectionUserItemLeft},n.a.createElement(u.b,{to:e.pathCreator(e.id)},n.a.createElement("div",{className:m.a.sectionUserItemLeftImg})),n.a.createElement("div",null,e.followed?n.a.createElement("button",{onClick:function(){e.unFollow(e.id)},className:m.a.sectionUserItemLeftButton},"Unfollow"):n.a.createElement("button",{onClick:function(){e.follow(e.id)},className:m.a.sectionUserItemLeftButton},"Follow"))),n.a.createElement("div",{className:m.a.sectionUserItemDesc},n.a.createElement("p",{className:m.a.sectionUserItemDescTxt},e.name),n.a.createElement("p",{className:m.a.sectionUserItemDescTxt},e.place),n.a.createElement("p",{className:m.a.sectionUserItemDescTxt},e.status)))},U=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=e.currentPage,a=[],r=1;r<=t;r++)a.push(r);var o=function(e){return"/profile/".concat(e)};return n.a.createElement("div",{className:l.a.sectionUsers},e.users.map((function(t){return n.a.createElement(f,{pathCreator:o,follow:e.follow,unFollow:e.unFollow,key:t.id,id:t.id,name:t.name,status:t.status,place:t.place,followed:t.followed})})),n.a.createElement("ul",{className:l.a.sectionUsersList},a.map((function(t){return s===t?n.a.createElement("li",{className:l.a.bold},t):n.a.createElement("li",{onClick:function(){return e.onPageChanged(t)},className:l.a.sectionUsersListLi},t)}))))},g=s.p+"static/media/preloader.0b960412.gif",p=function(e){return n.a.createElement("img",{style:{position:"absolute",transform:"translate(-50%)",top:"50%",left:"50%"},src:g})},_=Object(r.b)((function(e){return{users:e.usersPage.users,totalUsersCount:e.usersPage.totalUsersCount,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{follow:o.b,unFollow:o.e,setCurrentPage:o.d,getUsers:o.c})((function(e){Object(a.useEffect)((function(){e.getUsers(e.currentPage,e.pageSize)}),[]);return e.isFetching?n.a.createElement(p,null):n.a.createElement(U,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:function(t){e.getUsers(t,e.pageSize)},users:e.users,follow:e.follow,unFollow:e.unFollow})}));t.default=_}}]);
//# sourceMappingURL=4.04e3cba7.chunk.js.map