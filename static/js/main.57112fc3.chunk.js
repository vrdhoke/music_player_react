(this.webpackJsonpmusic_player_react=this.webpackJsonpmusic_player_react||[]).push([[0],{137:function(e,t,a){e.exports=a(170)},142:function(e,t,a){},143:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),i=(a(142),a(143),a(115)),c=a(7),l=a(20),u=a(15),p=a(27),d=a(28),h=a(30),m=a(192),g=a(29),f=a.n(g),E=a(116),y=a(191),b=a(193),v=a(194),I=a(86),x=a.n(I),S=a(84),k=a.n(S),j=a(87),O=a.n(j),w=a(85),C=a.n(w),N=a(212),U=a(89),M=a.n(U),R=a(68),A=a.n(R),D=a(69),T=a.n(D),z=a(70),P=a.n(z),_=a(88),L=a.n(_),G=a(208),B=a(25),H=function(e){return{type:"ADD_SONG",payload:e}},V=function(e){return{type:"SET_INDEX",payload:e}},W=function(e){return{type:"DELETE_SONG",payload:e}},F=a(24),J=a(195);function X(e){var t=~~e%60,a="";return a+=~~(e%3600/60)+":"+(t<10?"0":""),a+=""+t}var $=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={name:"",author:"",albumPicUrl:"",play:!1,duration:"--:--",currentTime:"0:00",pSlider:0,curSongIndex:0,playMode:0,volume:100,songUrls:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.props.songs.length!==e.songs.length&&0==e.songs.length&&1==this.props.songs.length?(this.initializeSong(),this.setState({play:!1})):this.props.currentIndex!==e.currentIndex&&this.props.songs.length==e.songs.length?this.setCurAndPlay():this.props.songs.length<e.songs.length?e.currentIndex==this.props.deletedIndex&&this.setCurAndPlay():0==this.props.songs.length&&this.audio.pause()}},{key:"setCurAndPlay",value:function(){this.setState({play:!0});try{this.audio.src=this.props.songs[this.props.currentIndex].mp3Url}catch(e){}this.setCurSong()}},{key:"initializeSong",value:function(){var e=this;this.audio=new Audio(this.props.songs[0].mp3Url),this.audio.onloadedmetadata=function(){this.setState({duration:X(this.audio.duration)})}.bind(this),this.audio.onplay=function(){setInterval((function(){e.setState({pSlider:e.audio.currentTime/e.audio.duration*100,currentTime:X(e.audio.currentTime)})}),500)},this.audio.onended=function(){switch(e.state.playMode){case 0:e.props.currentIndex==e.props.songs.length-1?(e.props.setIndex(0),e.audio.src=e.props.songs[0].mp3Url,e.setCurSong()):(e.props.setIndex(e.props.currentIndex+1),e.audio.src=e.props.songs[e.props.currentIndex].mp3Url,e.setCurSong());break;case 1:for(var t=e.getRandomSong();t===e.props.currentIndex;)t=e.getRandomSong();e.props.setIndex(t),e.audio.src=e.props.songs[t].mp3Url,e.setCurSong();break;case 2:e.audio.play()}}}},{key:"getRandomSong",value:function(){return Math.floor(Math.random()*Math.floor(this.props.songs.length))}},{key:"setCurSong",value:function(){this.audio.onloadedmetadata=function(){this.setState({duration:X(this.audio.duration)})}.bind(this),this.audio.pause(),this.audio.load(),this.audio.play()}},{key:"next",value:function(){switch(this.props.setIndex(this.props.currentIndex+1),this.state.playMode){case 2:this.props.currentIndex===this.props.songs.length-1?(this.props.setIndex(0),this.audio.src=this.props.songs[0].mp3Url,this.setCurSong()):(this.setState({play:!0}),this.audio.src=this.props.songs[this.props.currentIndex+1].mp3Url,this.setCurSong());break;case 1:var e=0;if(this.props.songs.length>1)for(e=this.getRandomSong();e===this.props.currentIndex;)e=this.getRandomSong();this.props.setIndex(e),this.setState({play:!0}),this.audio.src=this.props.songs[e].mp3Url,this.setCurSong();break;case 0:this.props.currentIndex===this.props.songs.length-1?(this.props.setIndex(0),this.audio.src=this.props.songs[0].mp3Url,this.setCurSong()):(this.setState({play:!0}),this.audio.src=this.props.songs[this.props.currentIndex+1].mp3Url,this.setCurSong())}}},{key:"previous",value:function(){switch(this.state.playMode){case 2:0==this.props.currentIndex?(this.props.setIndex(this.props.songs.length-1),this.audio.src=this.props.songs[0].mp3Url,this.setCurSong()):(this.setState({play:!0}),this.props.setIndex(this.props.currentIndex-1),this.audio.src=this.props.songs[this.props.currentIndex-1].mp3Url,this.setCurSong());break;case 1:var e=0;if(this.props.songs.length>1)for(e=this.getRandomSong();e===this.props.currentIndex;)e=this.getRandomSong();this.props.setIndex(e),this.setState({play:!0}),this.audio.src=this.props.songs[e].mp3Url,this.setCurSong();break;case 0:if(0==this.props.currentIndex){this.props.setIndex(this.props.songs.length-1);try{this.audio.src=this.props.songs[0].mp3Url}catch(t){}this.setCurSong()}else this.setState({play:!0}),this.props.setIndex(this.props.currentIndex-1),this.audio.src=this.props.songs[this.props.currentIndex-1].mp3Url,this.setCurSong()}}},{key:"changeVolume",value:function(e){this.setState({volume:e}),this.audio.volume=this.state.volume/100}},{key:"play",value:function(){this.setState({play:!0,duration:X(this.audio.duration)}),this.audio.play()}},{key:"pause",value:function(){this.setState({play:!1}),this.audio.pause()}},{key:"seek",value:function(e){try{this.audio.currentTime=Math.floor(this.audio.duration*(e/100))}catch(t){}}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{className:t.paper,elevation:10},0==this.props.songs.length?r.a.createElement(y.a,{variant:"h2"},"No song to play"):r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"h6"},this.props.songs[this.props.currentIndex].name)),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(y.a,{variant:"caption",color:"textSecondary"},this.props.songs[this.props.currentIndex].author)))),r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(N.a,{value:this.state.pSlider,"aria-labelledby":"continuous-slider",className:t.pSlider,onChange:function(t,a){return e.seek(a)}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(y.a,null,this.state.currentTime,"/",this.state.duration)))),r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(b.a,{"aria-label":"previous",onClick:function(){return e.previous()}},r.a.createElement(k.a,{className:t.playIcon})),r.a.createElement(b.a,{"aria-label":"play/pause",onClick:function(){e.state.play?e.pause():e.play()}},this.state.play?r.a.createElement(C.a,{className:t.playIcon}):r.a.createElement(x.a,{className:t.playIcon})),r.a.createElement(b.a,{"aria-label":"next",onClick:function(){return e.next()}},r.a.createElement(O.a,{className:t.playIcon}))),r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(G.a,{checked:0===this.state.playMode,onChange:function(){e.setState({playMode:0})},icon:r.a.createElement(A.a,{className:t.scIcon}),checkedIcon:r.a.createElement(A.a,{className:t.scIcon}),value:"checkedH"}),r.a.createElement(G.a,{icon:r.a.createElement(T.a,{className:t.scIcon}),checkedIcon:r.a.createElement(T.a,{className:t.scIcon}),checked:1===this.state.playMode,onChange:function(){e.setState({playMode:1})}}),r.a.createElement(G.a,{icon:r.a.createElement(P.a,{className:t.scIcon}),checkedIcon:r.a.createElement(P.a,{className:t.scIcon}),checked:2===this.state.playMode,onChange:function(){e.setState({playMode:2})}})),r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:4},r.a.createElement(b.a,{"aria-label":"next",onClick:function(){0!==e.state.volume?(e.setState({volume:0}),e.audio.volume=0):(e.setState({volume:100}),e.audio.volume=1)}},0===this.state.volume?r.a.createElement(L.a,{className:t.scIcon}):r.a.createElement(M.a,{className:t.scIcon}))),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement(N.a,{"aria-labelledby":"continuous-slider",className:t.vSlider,value:this.state.volume,onChange:function(t,a){return e.changeVolume(a)}})))),r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(v.a,{className:t.cover,image:this.props.songs[this.props.currentIndex].imageUrl,style:{borderRadius:"5%"}})))),r.a.createElement(J.a,{variant:"determinate",value:this.state.pSlider,style:{height:3,width:"100%"}}))}}]),t}(r.a.Component),q=Object(F.b)((function(e){return{songs:e.state.songs,currentIndex:e.state.currentIndex,deletedIndex:e.state.deletedIndex}}),(function(e){return Object(B.a)({addSong:H,setIndex:V},e)}))(Object(c.f)(f()((function(e){return{root:{flexGrow:1,top:"auto",bottom:0,position:"fixed",width:"100%"},paper:{padding:e.spacing(2),color:e.palette.text.secondary,height:"15vh"},card:{display:"flex",borderRadius:0},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:100,height:100,margin:"auto"},pSlider:{width:100},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:30,width:30},vSlider:{width:"80%"},scIcon:{},playSecControlFix:{marginLeft:e.spacing(1)},table:{width:"100%",fontSize:12},th:{fontSize:12},tr:{fontSize:12},img:{width:12,height:12,marginRight:20,borderRadius:5}}}))($))),K=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"getASongUrl",value:function(e){return fetch("https://neteasemusicapi.herokuapp.com/song/url?id="+e).then((function(e){return e.json()}))}},{key:"getASongDetail",value:function(e){return fetch("https://neteasemusicapi.herokuapp.com/song/detail?ids="+e).then((function(e){return e.json()}))}},{key:"checkSong",value:function(e){return fetch("https://neteasemusicapi.herokuapp.com/check/music?id="+e).then((function(e){return e.json()}))}},{key:"searchSong",value:function(e){return fetch("https://neteasemusicapi.herokuapp.com/search?keywords="+e).then((function(e){return e.json()}))}}],[{key:"getInstance",value:function(){return null==e.myInstance&&(e.myInstance=new e),this.myInstance}}]),e}();K.myInstance=null;var Q=a(91),Y=a.n(Q),Z=a(197),ee=a(198),te=a(199),ae=a(200),ne=a(201),re=a(196),se=a(90),oe=a.n(se),ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{className:t.paper,elevation:3},r.a.createElement(re.a,{className:t.container},r.a.createElement(Z.a,{stickyHeader:!0,"aria-label":"sticky table",className:t.songTable},r.a.createElement(ee.a,null,r.a.createElement(te.a,null,r.a.createElement(ae.a,null,r.a.createElement(y.a,{variant:"h5"},"Playlist")),r.a.createElement(ae.a,null,r.a.createElement(y.a,{variant:"subtitle1"},"Name")),r.a.createElement(ae.a,null,r.a.createElement(y.a,{variant:"subtitle1"},"Author")),r.a.createElement(ae.a,null))),r.a.createElement(ne.a,null,0==this.props.songs.length?r.a.createElement(y.a,{variant:"h6"},"No songs yet, try add some."):this.props.songs.map((function(a,n){return r.a.createElement(te.a,{key:n},r.a.createElement(ae.a,{component:"th",scope:"row"},r.a.createElement(b.a,{size:"small","aria-label":"play",style:{backgroundColor:e.props.currentIndex==n?"#ADD8E6":"white"},onClick:function(){e.props.setIndex(n)}},r.a.createElement(oe.a,{style:{fontSize:20},className:t.playIcon}))),r.a.createElement(ae.a,{component:"th",scope:"row"},a.name),r.a.createElement(ae.a,{component:"th",scope:"row"},a.author),r.a.createElement(ae.a,{component:"th",scope:"row"},r.a.createElement(b.a,{size:"small","aria-label":"play",onClick:function(){e.props.deleteSong(n)}},r.a.createElement(Y.a,{style:{fontSize:20},className:t.playIcon}))))})))))))}}]),t}(r.a.Component),ce=Object(F.b)((function(e){return{songs:e.state.songs,currentIndex:e.state.currentIndex,deletedIndex:e.state.deletedIndex}}),(function(e){return Object(B.a)({setIndex:V,deleteSong:W},e)}))(Object(c.f)(f()((function(e){return{root:{},paper:{padding:e.spacing(2),color:e.palette.text.secondary},songTable:{},container:{height:"80vh"}}}))(ie))),le=a(31),ue=a(10),pe=a(8),de=a(210),he=a(72),me=a.n(he),ge=a(34),fe=a.n(ge),Ee=a(209),ye=a(113),be=a.n(ye),ve=a(211),Ie=a(114),xe=a.n(Ie),Se=a(202),ke=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={results:{result:{songs:[]}},curSearch:"",addSongAlert:!1},a.handleSearchChange=a.handleSearchChange.bind(Object(le.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"constructSong",value:function(e){var t=this,a={id:e,name:"null",author:"null",imageUrl:"null",mp3Url:"null"},n=fetch("https://neteasemusicapi.herokuapp.com/song/url?id="+e),r=fetch("https://neteasemusicapi.herokuapp.com/song/detail?ids="+e);Promise.all([n,r]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(n){var r=n[0],s=n[1];a.id=e,a.mp3Url=r.data[0].url,a.name=s.songs[0].name,a.author=s.songs[0].ar[0].name,a.imageUrl=s.songs[0].al.picUrl,t.props.addSong({id:e,name:a.name=s.songs[0].name,author:a.author=s.songs[0].ar[0].name,imageUrl:a.imageUrl=s.songs[0].al.picUrl,mp3Url:a.mp3Url=r.data[0].url})}))}},{key:"handleSearchChange",value:function(e){var t=this;this.setState({curSearch:e.target.value}),K.getInstance().searchSong(this.state.curSearch).then((function(e){400==e.code||0==e.result.songCount||t.setState({results:e})}))}},{key:"addSelectedSong",value:function(e){var t=this;K.getInstance().checkSong(e).then((function(a){a.success?(t.constructSong(e),t.setState({addSongAlert:!0})):alert("No copyright | \u6ca1\u6709\u7248\u6743")}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{elevation:3,className:t.paper},r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0},r.a.createElement("img",{src:me.a,alt:"website logo",style:{width:50,height:50,margin:8}})),r.a.createElement(m.a,{item:!0},r.a.createElement(y.a,{variant:"caption",color:"textSecondary"},"Powered By NeteaseCloudMusic")),r.a.createElement(m.a,{item:!0},r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(fe.a,null)),r.a.createElement(Ee.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:this.handleSearchChange}))),r.a.createElement(m.a,{item:!0,style:{marginTop:16}},""==this.state.curSearch?r.a.createElement("span",null):r.a.createElement(re.a,{className:t.container},r.a.createElement(Z.a,{stickyHeader:!0,"aria-label":"sticky table",className:t.songTable},r.a.createElement(ee.a,null,r.a.createElement(te.a,null,r.a.createElement(ae.a,null),r.a.createElement(ae.a,null,r.a.createElement(y.a,{variant:"subtitle1"},"Name")),r.a.createElement(ae.a,null,r.a.createElement(y.a,{variant:"subtitle1"},"Author")))),r.a.createElement(ne.a,null,0==this.state.results.result.songs.length?r.a.createElement("span",null):this.state.results.result.songs.map((function(a,n){return r.a.createElement(de.a,Object.assign({in:!0,style:{transformOrigin:"0 0 0"}},{timeout:1e3+50*n}),r.a.createElement(te.a,{key:n},r.a.createElement(ae.a,{component:"th",scope:"row"},r.a.createElement(b.a,{size:"small","aria-label":"play",onClick:function(){e.addSelectedSong(a.id)}},r.a.createElement(be.a,{style:{fontSize:20},className:t.playIcon}))),r.a.createElement(ae.a,{component:"th",scope:"row"},a.name),r.a.createElement(ae.a,{component:"th",scope:"row"},a.artists[0].name)))})))))))),r.a.createElement("div",null,r.a.createElement(ve.a,{background:"red",anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.addSongAlert,autoHideDuration:1e3,onClose:function(){return e.setState({addSongAlert:!1})}},r.a.createElement(Se.a,{style:{backgroundColor:"green"},message:r.a.createElement("span",{id:"client-snackbar"},"    ",r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(b.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return e.setState({addSongAlert:!1})}},r.a.createElement(xe.a,{fontSize:"small"})),r.a.createElement(y.a,null,"Song added"))))}))))}}]),t}(r.a.Component),je=Object(F.b)((function(e){return{songs:e.state.songs,currentIndex:e.state.currentIndex,deletedIndex:e.state.deletedIndex}}),(function(e){return Object(B.a)({addSong:H},e)}))(Object(c.f)(f()((function(e){return{root:{},paper:{height:"80vh",padding:e.spacing(2)},tableContainer:{height:"80vh",minWidth:"100%"},search:Object(ue.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(pe.c)(e.palette.common.black,.15),"&:hover":{backgroundColor:Object(pe.c)(e.palette.common.black,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(ue.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),songTable:{},container:{height:"50vh"}}}))(ke))),Oe=(K.getInstance(),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={songs:[1431583891,30352891,27491508,35476044,1409137437,1386055783,113115,123456]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(je,null)),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(ce,null)),r.a.createElement(q,{songs:this.state.songs})))}}]),t}(r.a.Component)),we=Object(c.f)(f()((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{paddingBottom:"15%",paddingTop:20}}}))(Oe)),Ce=a(21),Ne=a(203),Ue=a(204),Me=a(205),Re=a(52),Ae=a.n(Re),De=a(53),Te=a.n(De),ze=Object(Ne.a)({root:{width:"100%",bottom:0,position:"fixed"}});function Pe(){var e=ze(),t=r.a.useState(0),a=Object(Ce.a)(t,2),n=a[0],s=a[1];return r.a.createElement(Ue.a,{value:n,onChange:function(e,t){s(t)},showLabels:!0,className:e.root},r.a.createElement(Me.a,{label:"Search",icon:r.a.createElement(fe.a,null)}),r.a.createElement(Me.a,{label:"Playlist",icon:r.a.createElement(Ae.a,null)}),r.a.createElement(Me.a,{label:"Playing",icon:r.a.createElement(Te.a,null)}))}var _e=a(206),Le=a(207),Ge=Object(Ne.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,display:"none"},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(pe.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(pe.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"}}}));var Be=Object(F.b)((function(e){return{state:e.state}}))((function(e){e.state;var t=Ge();return r.a.createElement("div",{className:t.root},r.a.createElement(_e.a,{position:"static",color:"primary"},r.a.createElement(Le.a,null,r.a.createElement(b.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement("img",{src:me.a,alt:"website logo",style:{width:25,height:25}})),r.a.createElement(y.a,{className:t.title,variant:"h6",noWrap:!0},"Material-UI"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(fe.a,null)),r.a.createElement(Ee.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",null))))})),He=Object(Ne.a)({root:{width:"100%",bottom:0,position:"fixed"}});function Ve(){He();var e=r.a.useState(0),t=Object(Ce.a)(e,2);t[0],t[1];return r.a.createElement("div",null,r.a.createElement(Be,null),r.a.createElement("div",null,"hello SearchView"))}var We=Object(Ne.a)({root:{width:"100%",bottom:0,position:"fixed"}});function Fe(){We();var e=r.a.useState(0),t=Object(Ce.a)(e,2);t[0],t[1];return r.a.createElement("div",null,"hello playview")}var Je=Object(Ne.a)({root:{width:"100%",bottom:0,position:"fixed"}});function Xe(){Je();var e=r.a.useState(0),t=Object(Ce.a)(e,2);t[0],t[1];return r.a.createElement("div",null,"hello playlistview")}K.getInstance();var $e=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(Ve,null),r.a.createElement(Fe,null),r.a.createElement(Xe,null),r.a.createElement(Pe,null))}}]),t}(r.a.Component),qe=Object(c.f)(f()((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{paddingBottom:"15%",paddingTop:20}}}))($e));var Ke=function(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:we}),r.a.createElement(c.a,{exact:!0,path:"/mobile",component:qe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=a(19),Ye=a(73),Ze={songs:[],currentIndex:0,deletedIndex:-1,curMobileView:0},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SONG":return Object(Ye.a)({},e,{songs:e.songs.filter((function(e){return e.id==t.payload.id})).length>0?e.songs:[].concat(Object(Qe.a)(e.songs),[t.payload])});case"SET_INDEX":return Object(Ye.a)({},e,{currentIndex:t.payload});case"DELETE_SONG":return Object(Ye.a)({},e,{songs:[].concat(Object(Qe.a)(e.songs.slice(0,t.payload)),Object(Qe.a)(e.songs.slice(t.payload+1))),currentIndex:t.payload>=e.currentIndex&&e.currentIndex!==e.songs.length-1?e.currentIndex:0!==e.currentIndex?e.currentIndex-1:e.currentIndex,deletedIndex:t.payload});default:return e}},tt=Object(B.c)(Object(B.b)({state:et}));o.a.render(r.a.createElement(F.a,{store:tt},r.a.createElement(Ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){e.exports=a.p+"static/media/NetEase_Music_logo.cd993e2b.svg"}},[[137,1,2]]]);
//# sourceMappingURL=main.57112fc3.chunk.js.map