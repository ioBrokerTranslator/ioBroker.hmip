"use strict";(self.webpackChunkiobroker_admin_component_hmip=self.webpackChunkiobroker_admin_component_hmip||[]).push([["src_bootstrap_jsx"],{45338:function(n,m,o){o.r(m);var l=o(4819),r=o.n(l),v=o(24470),h=o(25309),d=o(93109),O=o(33919),E=o.n(O),I=o(97230),x=o(33924),N=o.n(x),f=o(55289),A=o(40666),H=o.n(A),M=o(15854),c=o.n(M),G=o(58503),g=o(94427),i=o(75606),J=Object.defineProperty,L=(s,e,t)=>e in s?J(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,V=(s,e,t)=>(L(s,typeof e!="symbol"?e+"":e,t),t),y=(s,e,t)=>new Promise((a,p)=>{var te=u=>{try{k(t.next(u))}catch(_){p(_)}},oe=u=>{try{k(t.throw(u))}catch(_){p(_)}},k=u=>u.done?a(u.value):Promise.resolve(u.value).then(te,oe);k((t=t.apply(s,e)).next())});const R=()=>({});class S extends i.ConfigGeneric{constructor(e){super(e),V(this,"onAliveChanged",(t,a)=>{const p=a?a.val:!1;p!==this.state.alive&&this.setState({alive:p},()=>{p&&!this.state.initialized&&setTimeout(()=>this.setState({initialized:!0},()=>this.askState(),100))})}),this.state={response:!1,running:!1,initialized:!1,alive:!1,error:!1}}componentDidMount(){super.componentDidMount();const e=this.props.socket.getState(`hmip.${this.props.instance}.alive`);e!=null&&e.val&&this.setState({alive:!0,initialized:!0},()=>this.askState()),this.props.socket.subscribeState(`system.adapter.hmip.${this.props.instance}.alive`,this.onAliveChanged)}componentWillUnmount(){super.componentWillUnmount(),this.props.socket.unsubscribeState(`system.adapter.hmip.${this.props.instance}.alive`,this.onAliveChanged),this.askTimeout&&(clearTimeout(this.askTimeout),this.askTimeout=null)}askState(){return y(this,null,function*(){const e=yield this.props.socket.sendTo(`hmip.${this.props.instance}`,"requestTokenState",null);this.handleResponse(e)&&(this.askTimeout=this.askTimeout||setTimeout(()=>{this.askTimeout=null,this.askState()},300))})}handleResponse(e){switch(e.state){case"startedTokenCreation":return this.setState({response:"started token creation",running:!0}),!0;case"waitForBlueButton":return this.setState({response:"press blue button on accesspoint",running:!0}),!0;case"confirmToken":return this.setState({response:"confirming token",running:!0}),!0;case"errorOccurred":this.setState({response:"error occurred during token generation, look at the logs",running:!1,error:!0});break;case"idle":this.setState({response:'press "request token"',running:!1});break;case"tokenCreated":{this.setState({response:"token created, save settings to use your accesspoint",running:!1}),i.ConfigGeneric.setValue(this.props.data,"authToken",e.authToken),i.ConfigGeneric.setValue(this.props.data,"clientAuthToken",e.clientAuthToken),i.ConfigGeneric.setValue(this.props.data,"clientId",e.clientId),this.props.onChange(this.props.data,void 0,()=>this.props.forceUpdate(["authToken","clientAuthToken","clientId"],this.props.data));break}}return!1}requestToken(){return y(this,null,function*(){const e={accessPointSgtin:i.ConfigGeneric.getValue(this.props.data,"accessPointSgtin"),clientId:i.ConfigGeneric.getValue(this.props.data,"clientId"),pin:i.ConfigGeneric.getValue(this.props.data,"pin")||"",deviceName:i.ConfigGeneric.getValue(this.props.data,"deviceName")};this.setState({response:"started token creation",running:!0,error:!1});const t=yield this.props.socket.sendTo(`hmip.${this.props.instance}`,"requestToken",e);this.handleResponse(t)&&(this.askTimeout=this.askTimeout||setTimeout(()=>{this.askTimeout=null,this.askState()},300))})}renderItem(){if(!this.state.alive&&!this.state.initialized)return r().createElement("div",null,i.I18n.t("custom_hmip_not_alive"));if(!this.state.initialized)return r().createElement(g.LinearProgress,null);const e=i.ConfigGeneric.getValue(this.props.data,"accessPointSgtin");return r().createElement("div",{style:{width:"100%"}},r().createElement("div",{style:{color:this.state.error?this.props.themeType==="dark"?"#c20000":"#800000":void 0}},i.I18n.t(`custom_hmip_${this.state.response}`).replace("custom_hmip_","")),r().createElement(g.Button,{variant:"contained",color:"primary",disabled:this.state.running||!e,onClick:()=>this.requestToken()},this.state.running?r().createElement(g.CircularProgress,{size:24}):i.I18n.t("custom_hmip_request_token")))}}S.propTypes={socket:c().object.isRequired,themeType:c().string,themeName:c().string,style:c().object,className:c().string,data:c().object.isRequired,attr:c().string,schema:c().object,onError:c().func,onChange:c().func};var Z=(0,G.withStyles)(R)(S),w=Object.defineProperty,T=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,b=(s,e,t)=>e in s?w(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,$=(s,e)=>{for(var t in e||(e={}))D.call(e,t)&&b(s,t,e[t]);if(T)for(var t of T(e))F.call(e,t)&&b(s,t,e[t]);return s};const B=s=>({app:{backgroundColor:s.palette.background.default,color:s.palette.text.primary,height:"100%"},item:{padding:50,width:400}});class U extends N(){constructor(e){const t=$({},e);super(e,t),this.state={data:{myCustomAttribute:"red"},theme:this.createTheme()};const a={en:o(86443),de:o(19837),ru:o(50482),pt:o(65909),nl:o(43573),fr:o(86115),it:o(79399),es:o(55117),pl:o(28130),uk:o(17138),"zh-cn":o(58246)};f.default.setTranslations(a),f.default.setLanguage((navigator.language||navigator.userLanguage||"en").substring(0,2).toLowerCase())}render(){return this.state.loaded?r().createElement(h.Z,{injectFirst:!0},r().createElement(d.Z,{theme:this.state.theme},r().createElement("div",{className:this.props.classes.app},r().createElement("div",{className:this.props.classes.item},r().createElement(Z,{socket:this.socket,themeType:this.state.themeType,themeName:this.state.themeName,attr:"myCustomAttribute",data:this.state.data,onError:()=>{},instance:0,schema:{name:"ConfigCustomHmipSet/Components/HmipComponent",type:"custom"},onChange:e=>{this.setState({data:e})}}))))):r().createElement(h.Z,{injectFirst:!0},r().createElement(d.Z,{theme:this.state.theme},r().createElement(H(),{theme:this.state.themeType})))}}var W=(0,I.Z)(B)(U),q=o(82890),K=Object.defineProperty,P=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,C=(s,e,t)=>e in s?K(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Y=(s,e)=>{for(var t in e||(e={}))Q.call(e,t)&&C(s,t,e[t]);if(P)for(var t of P(e))X.call(e,t)&&C(s,t,e[t]);return s},ee=s=>{const e="#dd5325",t="#73b6a8",a=Y({},(0,q.default)(s));return a&&(a.palette.text.danger={color:e},a.palette.text.success={color:t},a)};window.adapterName="adapter-component-template";let z=E().getThemeName();function j(){const s=document.getElementById("root");return(0,v.s)(s).render(r().createElement(r().StrictMode,null,r().createElement(h.Z,{injectFirst:!0},r().createElement(d.Z,{theme:ee(z)},r().createElement(W,{socket:{port:8081},onThemeChange:t=>{z=t,j()}})))))}j()},24470:function(n,m,o){var l,r=o(77440);if(1)m.s=r.createRoot,l=r.hydrateRoot;else var v},19837:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"HMIP-Instanz ist nicht am Leben","custom_hmip_request_token":"Token erstellen","custom_hmip_started token creation":"Token-Erstellung gestartet...","custom_hmip_press blue button on accesspoint":"Dr\xFCcken Sie die blaue Taste am Accesspoint","custom_hmip_confirming token":"Best\xE4tigungstoken...","custom_hmip_error occurred during token generation, look at the logs":"W\xE4hrend der Token-Generierung ist ein Fehler aufgetreten. Sehen Sie sich die Protokolle an","custom_hmip_press \\"request token\\"":"Dr\xFCcken Sie \u201EToken erstellen\u201C","custom_hmip_token created, save settings to use your accesspoint":"Token erstellt, Einstellungen speichern, um Ihren Zugangspunkt zu verwenden"}')},86443:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"HMIP instance is not alive","custom_hmip_request_token":"Create token","custom_hmip_started token creation":"Started token creation...","custom_hmip_press blue button on accesspoint":"Press blue button on accesspoint","custom_hmip_confirming token":"confirming token...","custom_hmip_error occurred during token generation, look at the logs":"error occurred during token generation, look at the logs","custom_hmip_press \\"request token\\"":"press \\"Create token\\"","custom_hmip_token created, save settings to use your accesspoint":"token created, save settings to use your accesspoint"}')},55117:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"La instancia de HMIP no est\xE1 viva","custom_hmip_request_token":"Solicitud de token","custom_hmip_started token creation":"Comenz\xF3 la creaci\xF3n del token...","custom_hmip_press blue button on accesspoint":"Presione el bot\xF3n azul en el punto de acceso","custom_hmip_confirming token":"ficha de confirmaci\xF3n...","custom_hmip_error occurred during token generation, look at the logs":"ocurri\xF3 un error durante la generaci\xF3n del token, mire los registros","custom_hmip_press \\"request token\\"":"presione \\"solicitar token\\"","custom_hmip_token created, save settings to use your accesspoint":"token creado, guarde la configuraci\xF3n para usar su punto de acceso"}')},86115:function(n){n.exports=JSON.parse(`{"custom_hmip_not_alive":"L'instance de HMIP n'est pas active","custom_hmip_request_token":"Demander un jeton","custom_hmip_started token creation":"Cr\xE9ation de jeton lanc\xE9e...","custom_hmip_press blue button on accesspoint":"Appuyez sur le bouton bleu du point d'acc\xE8s","custom_hmip_confirming token":"jeton de confirmation...","custom_hmip_error occurred during token generation, look at the logs":"une erreur s'est produite lors de la g\xE9n\xE9ration du jeton, consultez les journaux","custom_hmip_press \\"request token\\"":"appuyez sur \\"demander un jeton\\"","custom_hmip_token created, save settings to use your accesspoint":"jeton cr\xE9\xE9, enregistrez les param\xE8tres pour utiliser votre point d'acc\xE8s"}`)},79399:function(n){n.exports=JSON.parse(`{"custom_hmip_not_alive":"L'istanza di HMIP non \xE8 viva","custom_hmip_request_token":"Richiedi token","custom_hmip_started token creation":"Creazione del token avviata...","custom_hmip_press blue button on accesspoint":"Premere il pulsante blu sull'access point","custom_hmip_confirming token":"token di conferma...","custom_hmip_error occurred during token generation, look at the logs":"si \xE8 verificato un errore durante la generazione del token, guarda i log","custom_hmip_press \\"request token\\"":"premi \\"richiedi token\\"","custom_hmip_token created, save settings to use your accesspoint":"token creato, salvare le impostazioni per utilizzare il punto di accesso"}`)},43573:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"HMIP-instantie leeft niet","custom_hmip_request_token":"Token aanvragen","custom_hmip_started token creation":"Token maken gestart...","custom_hmip_press blue button on accesspoint":"Druk op de blauwe knop op het toegangspunt","custom_hmip_confirming token":"bevestigend token...","custom_hmip_error occurred during token generation, look at the logs":"er is een fout opgetreden tijdens het genereren van tokens, kijk naar de logboeken","custom_hmip_press \\"request token\\"":"druk op \\"token aanvragen\\"","custom_hmip_token created, save settings to use your accesspoint":"token gemaakt, instellingen opslaan om uw toegangspunt te gebruiken"}')},28130:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"Instancja HMIPu nie \u017Cyje","custom_hmip_request_token":"Popro\u015B o token","custom_hmip_started token creation":"Rozpocz\u0119to tworzenie tokena...","custom_hmip_press blue button on accesspoint":"Naci\u015Bnij niebieski przycisk na punkcie dost\u0119powym","custom_hmip_confirming token":"potwierdzanie tokena...","custom_hmip_error occurred during token generation, look at the logs":"wyst\u0105pi\u0142 b\u0142\u0105d podczas generowania tokena, sp\xF3jrz na logi","custom_hmip_press \\"request token\\"":"naci\u015Bnij \u201Epopro\u015B o token\u201D","custom_hmip_token created, save settings to use your accesspoint":"utworzony token, zapisz ustawienia, aby korzysta\u0107 z punktu dost\u0119pu"}')},65909:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"A inst\xE2ncia do HMIP n\xE3o est\xE1 ativa","custom_hmip_request_token":"Solicitar token","custom_hmip_started token creation":"Cria\xE7\xE3o de token iniciada...","custom_hmip_press blue button on accesspoint":"Pressione o bot\xE3o azul no ponto de acesso","custom_hmip_confirming token":"s\xEDmbolo de confirma\xE7\xE3o...","custom_hmip_error occurred during token generation, look at the logs":"ocorreu um erro durante a gera\xE7\xE3o do token, veja os logs","custom_hmip_press \\"request token\\"":"pressione \\"solicitar token\\"","custom_hmip_token created, save settings to use your accesspoint":"token criado, salve as configura\xE7\xF5es para usar seu ponto de acesso"}')},50482:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"\u042D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 HMIP \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442","custom_hmip_request_token":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u043E\u043A\u0435\u043D","custom_hmip_started token creation":"\u041D\u0430\u0447\u0430\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u043E\u043A\u0435\u043D\u0430...","custom_hmip_press blue button on accesspoint":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0441\u0438\u043D\u044E\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u043D\u0430 \u0442\u043E\u0447\u043A\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430","custom_hmip_confirming token":"\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0439 \u0442\u043E\u043A\u0435\u043D...","custom_hmip_error occurred during token generation, look at the logs":"\u043F\u0440\u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u043E\u043A\u0435\u043D\u0430 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043B\u043E\u0433\u0438","custom_hmip_press \\"request token\\"":"\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \\"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u043E\u043A\u0435\u043D\\"","custom_hmip_token created, save settings to use your accesspoint":"\u0442\u043E\u043A\u0435\u043D \u0441\u043E\u0437\u0434\u0430\u043D, \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0430"}')},17138:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"\u0415\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 HMIP \u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0454","custom_hmip_request_token":"\u041C\u0430\u0440\u043A\u0435\u0440 \u0437\u0430\u043F\u0438\u0442\u0443","custom_hmip_started token creation":"\u0420\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043C\u0430\u0440\u043A\u0435\u0440\u0430...","custom_hmip_press blue button on accesspoint":"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0441\u0438\u043D\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u043D\u0430 \u0442\u043E\u0447\u0446\u0456 \u0434\u043E\u0441\u0442\u0443\u043F\u0443","custom_hmip_confirming token":"\u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043C\u0430\u0440\u043A\u0435\u0440\u0430...","custom_hmip_error occurred during token generation, look at the logs":"\u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0456\u0457 \u043C\u0430\u0440\u043A\u0435\u0440\u0430, \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u044C\u0442\u0435 \u0436\u0443\u0440\u043D\u0430\u043B\u0438","custom_hmip_press \\"request token\\"":"\u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \\"\u0437\u0430\u043F\u0438\u0442 \u043C\u0430\u0440\u043A\u0435\u0440\u0430\\"","custom_hmip_token created, save settings to use your accesspoint":"\u043C\u0430\u0440\u043A\u0435\u0440 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E, \u0437\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044C \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0457 \u0442\u043E\u0447\u043A\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0443"}')},58246:function(n){n.exports=JSON.parse('{"custom_hmip_not_alive":"HMIP \u5B9E\u4F8B\u4E0D\u5B58\u5728","custom_hmip_request_token":"\u8BF7\u6C42\u4EE4\u724C","custom_hmip_started token creation":"\u5F00\u59CB\u521B\u5EFA\u4EE3\u5E01...","custom_hmip_press blue button on accesspoint":"\u6309\u63A5\u5165\u70B9\u4E0A\u7684\u84DD\u8272\u6309\u94AE","custom_hmip_confirming token":"\u786E\u8BA4\u4EE4\u724C...","custom_hmip_error occurred during token generation, look at the logs":"token\u751F\u6210\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u9519\u8BEF\uFF0C\u67E5\u770B\u65E5\u5FD7","custom_hmip_press \\"request token\\"":"\u6309\u201C\u8BF7\u6C42\u4EE4\u724C\u201D","custom_hmip_token created, save settings to use your accesspoint":"\u4EE4\u724C\u5DF2\u521B\u5EFA\uFF0C\u4FDD\u5B58\u8BBE\u7F6E\u4EE5\u4F7F\u7528\u60A8\u7684\u63A5\u5165\u70B9"}')}}]);

//# sourceMappingURL=src_bootstrap_jsx.1b83edc0.chunk.js.map