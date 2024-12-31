import{$ as ti,$a as $e,$b as ii,A as hr,Aa as am,Ab as bm,B as Pu,Ba as lm,Bb as Rt,Bc as zl,C as Oo,Ca as cm,Cb as no,Cc as Ko,D as Xf,Da as dm,Db as ut,E as No,Ea as um,Eb as ht,Ec as Zo,F as pr,Fa as hm,Fb as Gu,Fc as $o,G as Lu,Ga as to,Gb as Am,Gc as qu,H as jf,Ha as Vu,Hb as io,Hc as Xu,I as Kf,Ia as zo,Ib as pt,J as Zf,Ja as pm,Jb as An,K as Vn,Ka as fm,Kb as _m,L as $f,La as js,Lb as Ks,M as hn,Ma as Q,Mb as Zs,N as wt,Na as ke,Nb as $s,O as fr,Oa as Rl,Ob as Mt,P as ye,Pa as Il,Pb as Ho,Q as Nt,Qa as Dl,Qb as kn,R as Jf,Ra as Ii,Rb as Wo,S as ot,Sa as Pl,Sb as xm,T as ku,Ta as pn,Tb as Js,U as Qe,Ua as zu,Ub as Ys,V as $,Va as mm,Vb as Go,W as Ou,Wa as Hu,Wb as Bl,X as Yf,Xa as st,Xb as gr,Y as ji,Ya as Ft,Yb as Sm,Z as Qf,Za as gt,Zb as Be,_ as eo,_a as gm,_b as Hn,a as te,aa as an,ab as fn,ac as Di,b as Tt,ba as At,bb as we,bc as Qs,ca as _t,cb as Ll,cc as wm,d as Qr,da as Fo,db as kl,dc as qo,e as Vf,ea as Ne,eb as Wu,ec as Mm,f as zf,fa as em,fb as vm,fc as Cm,g as Eu,ga as Bo,gb as Ol,gc as Ht,h as Ru,ha as tm,hb as Nl,hc as Tm,i as Iu,ia as El,ib as Fe,ic as ea,j as Ln,ja as Et,jb as H,jc as Em,k as ei,ka as vn,kb as Fl,kc as Rm,l as ur,la as Nu,lb as Ki,lc as ta,m as sn,ma as Ri,mb as mr,mc as Ul,n as Pe,na as ni,nb as zt,nc as gi,o as Gs,oa as nm,ob as ym,oc as Xo,p as Hf,pa as Fu,pb as se,pc as Wn,q as Wf,qa as im,qb as ae,qc as vi,r as dt,ra as en,rb as Je,rc as yi,s as Tl,sa as rm,sb as yn,sc as Im,t as Un,ta as Bu,tb as bn,tc as $t,u as qs,ua as Uu,ub as tn,uc as Dm,v as Gf,va as om,vb as ln,vc as _n,w as Du,wa as Xs,wb as nt,wc as jo,x as qf,xa as Uo,xb as ie,xc as Pm,y as Xi,ya as Vo,yb as zn,yc as Vl,z as ko,za as sm,zb as Tn}from"./chunk-TOOJF4TQ.js";var ia=class{},Wl=class{},Zi=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let i=t.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(t.name,e);let r=(t.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(t,e){let i=t.toLowerCase();this.maybeSetNormalizedName(t,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(t,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=t.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Ku=class{encodeKey(t){return Lm(t)}encodeValue(t){return Lm(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function o_(n,t){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,o)),t.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var s_=/%(\d[a-f0-9])/gi,a_={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Lm(n){return encodeURIComponent(n).replace(s_,(t,e)=>a_[e]??t)}function Hl(n){return`${n}`}var yr=class n{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Ku,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=o_(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let i=t.fromObject[e],r=Array.isArray(i)?i.map(Hl):[Hl(i)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(i=>{let r=t[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Hl(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let i=this.map.get(t.param)||[],r=i.indexOf(Hl(t.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(t.param,i):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Zu=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function l_(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function km(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Om(n){return typeof Blob<"u"&&n instanceof Blob}function Nm(n){return typeof FormData<"u"&&n instanceof FormData}function c_(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var na=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,i,r){this.url=e,this.method=t.toUpperCase();let o;if(l_(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new Zi,this.context??=new Zu,!this.params)this.params=new yr,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||km(this.body)||Om(this.body)||Nm(this.body)||c_(this.body)?this.body:this.body instanceof yr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Nm(this.body)?null:Om(this.body)?this.body.type||null:km(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof yr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let e=t.method||this.method,i=t.url||this.url,r=t.responseType||this.responseType,o=t.transferCache??this.transferCache,s=t.body!==void 0?t.body:this.body,a=t.withCredentials??this.withCredentials,l=t.reportProgress??this.reportProgress,c=t.headers||this.headers,d=t.params||this.params,u=t.context??this.context;return t.setHeaders!==void 0&&(c=Object.keys(t.setHeaders).reduce((h,f)=>h.set(f,t.setHeaders[f]),c)),t.setParams&&(d=Object.keys(t.setParams).reduce((h,f)=>h.set(f,t.setParams[f]),d)),new n(e,i,s,{params:d,headers:c,context:u,reportProgress:l,responseType:r,withCredentials:a,transferCache:o})}},br=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(br||{}),ra=class{headers;status;statusText;url;ok;type;constructor(t,e=200,i="OK"){this.headers=t.headers||new Zi,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||i,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},Gl=class n extends ra{constructor(t={}){super(t)}type=br.ResponseHeader;clone(t={}){return new n({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},oa=class n extends ra{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=br.Response;clone(t={}){return new n({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},vr=class extends ra{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},Vm=200,d_=204;function ju(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var Yu=(()=>{class n{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof na)o=e;else{let l;r.headers instanceof Zi?l=r.headers:l=new Zi(r.headers);let c;r.params&&(r.params instanceof yr?c=r.params:c=new yr({fromObject:r.params})),o=new na(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let s=Pe(o).pipe(hr(l=>this.handler.handle(l)));if(e instanceof na||r.observe==="events")return s;let a=s.pipe(Xi(l=>l instanceof oa));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(dt(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(dt(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(dt(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe(dt(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new yr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,ju(r,i))}post(e,i,r={}){return this.request("POST",e,ju(r,i))}put(e,i,r={}){return this.request("PUT",e,ju(r,i))}static \u0275fac=function(i){return new(i||n)(Qe(ia))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),u_=/^\)\]\}',?\n/,h_="X-Request-URL";function Fm(n){if(n.url)return n.url;let t=h_.toLocaleLowerCase();return n.headers.get(t)}var p_=(()=>{class n{fetchImpl=$($u,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=$(vn);handle(e){return new Eu(i=>{let r=new AbortController;return this.doRequest(e,r.signal,i).then(Ju,o=>i.error(new vr({error:o}))),()=>r.abort()})}doRequest(e,i,r){return Qr(this,null,function*(){let o=this.createRequestInit(e),s;try{let f=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,te({signal:i},o)));f_(f),r.next({type:br.Sent}),s=yield f}catch(f){r.error(new vr({error:f,status:f.status??0,statusText:f.statusText,url:e.urlWithParams,headers:f.headers}));return}let a=new Zi(s.headers),l=s.statusText,c=Fm(s)??e.urlWithParams,d=s.status,u=null;if(e.reportProgress&&r.next(new Gl({headers:a,status:d,statusText:l,url:c})),s.body){let f=s.headers.get("content-length"),g=[],v=s.body.getReader(),m=0,p,M,w=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Qr(this,null,function*(){for(;;){let{done:D,value:R}=yield v.read();if(D)break;if(g.push(R),m+=R.length,e.reportProgress){M=e.responseType==="text"?(M??"")+(p??=new TextDecoder).decode(R,{stream:!0}):void 0;let T=()=>r.next({type:br.DownloadProgress,total:f?+f:void 0,loaded:m,partialText:M});w?w.run(T):T()}}}));let _=this.concatChunks(g,m);try{let D=s.headers.get("Content-Type")??"";u=this.parseBody(e,_,D)}catch(D){r.error(new vr({error:D,headers:new Zi(s.headers),status:s.status,statusText:s.statusText,url:Fm(s)??e.urlWithParams}));return}}d===0&&(d=u?Vm:0),d>=200&&d<300?(r.next(new oa({body:u,headers:a,status:d,statusText:l,url:c})),r.complete()):r.error(new vr({error:u,headers:a,status:d,statusText:l,url:c}))})}parseBody(e,i,r){switch(e.responseType){case"json":let o=new TextDecoder().decode(i).replace(u_,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){let i={},r=e.withCredentials?"include":void 0;if(e.headers.forEach((o,s)=>i[o]=s.join(",")),e.headers.has("Accept")||(i.Accept="application/json, text/plain, */*"),!e.headers.has("Content-Type")){let o=e.detectContentTypeHeader();o!==null&&(i["Content-Type"]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),$u=class{};function Ju(){}function f_(n){n.then(Ju,Ju)}function m_(n,t){return t(n)}function g_(n,t,e){return(i,r)=>ti(e,()=>t(i,o=>n(o,r)))}var zm=new ot(""),v_=new ot(""),y_=new ot("",{providedIn:"root",factory:()=>!0});var Bm=(()=>{class n extends ia{backend;injector;chain=null;pendingTasks=$(El);contributeToStability=$(y_);constructor(e,i){super(),this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(zm),...this.injector.get(v_,[])]));this.chain=i.reduceRight((r,o)=>g_(r,o,this.injector),m_)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(No(()=>this.pendingTasks.remove(i)))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||n)(Qe(Wl),Qe(eo))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var b_=/^\)\]\}',?\n/;function A_(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var Um=(()=>{class n{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new wt(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?sn(i.\u0275loadImpl()):Pe(null)).pipe(Vn(()=>new Eu(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((v,m)=>s.setRequestHeader(v,m.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let v=e.detectContentTypeHeader();v!==null&&s.setRequestHeader("Content-Type",v)}if(e.responseType){let v=e.responseType.toLowerCase();s.responseType=v!=="json"?v:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let v=s.statusText||"OK",m=new Zi(s.getAllResponseHeaders()),p=A_(s)||e.url;return l=new Gl({headers:m,status:s.status,statusText:v,url:p}),l},d=()=>{let{headers:v,status:m,statusText:p,url:M}=c(),w=null;m!==d_&&(w=typeof s.response>"u"?s.responseText:s.response),m===0&&(m=w?Vm:0);let _=m>=200&&m<300;if(e.responseType==="json"&&typeof w=="string"){let D=w;w=w.replace(b_,"");try{w=w!==""?JSON.parse(w):null}catch(R){w=D,_&&(_=!1,w={error:R,text:w})}}_?(o.next(new oa({body:w,headers:v,status:m,statusText:p,url:M||void 0})),o.complete()):o.error(new vr({error:w,headers:v,status:m,statusText:p,url:M||void 0}))},u=v=>{let{url:m}=c(),p=new vr({error:v,status:s.status||0,statusText:s.statusText||"Unknown Error",url:m||void 0});o.error(p)},h=!1,f=v=>{h||(o.next(c()),h=!0);let m={type:br.DownloadProgress,loaded:v.loaded};v.lengthComputable&&(m.total=v.total),e.responseType==="text"&&s.responseText&&(m.partialText=s.responseText),o.next(m)},g=v=>{let m={type:br.UploadProgress,loaded:v.loaded};v.lengthComputable&&(m.total=v.total),o.next(m)};return s.addEventListener("load",d),s.addEventListener("error",u),s.addEventListener("timeout",u),s.addEventListener("abort",u),e.reportProgress&&(s.addEventListener("progress",f),a!==null&&s.upload&&s.upload.addEventListener("progress",g)),s.send(a),o.next({type:br.Sent}),()=>{s.removeEventListener("error",u),s.removeEventListener("abort",u),s.removeEventListener("load",d),s.removeEventListener("timeout",u),e.reportProgress&&(s.removeEventListener("progress",f),a!==null&&s.upload&&s.upload.removeEventListener("progress",g)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||n)(Qe(Vl))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),Hm=new ot(""),__="XSRF-TOKEN",x_=new ot("",{providedIn:"root",factory:()=>__}),S_="X-XSRF-TOKEN",w_=new ot("",{providedIn:"root",factory:()=>S_}),ql=class{},M_=(()=>{class n{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,i,r){this.doc=e,this.platform=i,this.cookieName=r}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ul(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||n)(Qe(Ht),Qe(en),Qe(x_))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();function C_(n,t){let e=n.url.toLowerCase();if(!$(Hm)||n.method==="GET"||n.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(n);let i=$(ql).getToken(),r=$(w_);return i!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,i)})),t(n)}function Wm(...n){let t=[Yu,Um,Bm,{provide:ia,useExisting:Bm},{provide:Wl,useFactory:()=>$(p_,{optional:!0})??$(Um)},{provide:zm,useValue:C_,multi:!0},{provide:Hm,useValue:!0},{provide:ql,useClass:M_}];for(let e of n)t.push(...e.\u0275providers);return ji(t)}var eh=class extends Cm{supportsDOMEvents=!0},th=class n extends eh{static makeCurrent(){Mm(new n)}onAndCancel(t,e,i){return t.addEventListener(e,i),()=>{t.removeEventListener(e,i)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=R_();return e==null?null:I_(e)}resetBaseElement(){sa=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Ul(document.cookie,t)}},sa=null;function R_(){return sa=sa||document.querySelector("base"),sa?sa.getAttribute("href"):null}function I_(n){return new URL(n,document.baseURI).pathname}var D_=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),nh=new ot(""),Zm=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,i,r){return this._findPluginFor(i).addEventListener(e,i,r)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new wt(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||n)(Qe(nh),Qe(vn))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),jl=class{_doc;constructor(t){this._doc=t}manager},Xl="ng-app-id";function Gm(n){for(let t of n)t.remove()}function qm(n,t){let e=t.createElement("style");return e.textContent=n,e}function P_(n,t,e,i){let r=n.head?.querySelectorAll(`style[${Xl}="${t}"],link[${Xl}="${t}"]`);if(r)for(let o of r)o.removeAttribute(Xl),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function ih(n,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var $m=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,this.isServer=jo(o),P_(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,qm);i?.forEach(r=>this.addUsage(r,this.external,ih))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(Gm(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Gm(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,qm(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,ih(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Xl,this.appId),e.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Qe(Ht),Qe(Fu),Qe(Bu,8),Qe(en))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),Qu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},oh=/%COMP%/g,Jm="%COMP%",L_=`_nghost-${Jm}`,k_=`_ngcontent-${Jm}`,O_=!0,N_=new ot("",{providedIn:"root",factory:()=>O_});function F_(n){return k_.replace(oh,n)}function B_(n){return L_.replace(oh,n)}function Ym(n,t){return t.map(e=>e.replace(oh,n))}var Kl=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,i,r,o,s,a,l,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.platformIsServer=jo(a),this.defaultRenderer=new aa(e,s,l,this.platformIsServer)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===Xs.ShadowDom&&(i=Tt(te({},i),{encapsulation:Xs.Emulated}));let r=this.getOrCreateRenderer(e,i);return r instanceof Zl?r.applyToHost(e):r instanceof la&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.platformIsServer;switch(i.encapsulation){case Xs.Emulated:o=new Zl(l,c,i,this.appId,d,s,a,u);break;case Xs.ShadowDom:return new rh(l,c,e,i,s,a,this.nonce,u);default:o=new la(l,c,i,d,s,a,u);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(i){return new(i||n)(Qe(Zm),Qe($m),Qe(Fu),Qe(N_),Qe(Ht),Qe(en),Qe(vn),Qe(Bu))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),aa=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,i,r){this.eventManager=t,this.doc=e,this.ngZone=i,this.platformIsServer=r}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Qu[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Xm(t)?t.content:t).appendChild(e)}insertBefore(t,e,i){t&&(Xm(t)?t.content:t).insertBefore(e,i)}removeChild(t,e){e.remove()}selectRootElement(t,e){let i=typeof t=="string"?this.doc.querySelector(t):t;if(!i)throw new wt(-5104,!1);return e||(i.textContent=""),i}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,i,r){if(r){e=r+":"+e;let o=Qu[r];o?t.setAttributeNS(o,e,i):t.setAttribute(e,i)}else t.setAttribute(e,i)}removeAttribute(t,e,i){if(i){let r=Qu[i];r?t.removeAttributeNS(r,e):t.removeAttribute(`${i}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,i,r){r&(js.DashCase|js.Important)?t.style.setProperty(e,i,r&js.Important?"important":""):t.style[e]=i}removeStyle(t,e,i){i&js.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,i){t!=null&&(t[e]=i)}setValue(t,e){t.nodeValue=e}listen(t,e,i){if(typeof t=="string"&&(t=qo().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);return this.eventManager.addEventListener(t,e,this.decoratePreventDefault(i))}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function Xm(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var rh=class extends aa{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,i,r,o,s,a,l){super(t,o,s,l),this.sharedStylesHost=e,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=Ym(r.id,r.styles);for(let u of c){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=u,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let u of d){let h=ih(u,o);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,i){return super.insertBefore(this.nodeOrShadowRoot(t),e,i)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},la=class extends aa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,i,r,o,s,a,l){super(t,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r,this.styles=l?Ym(l,i.styles):i.styles,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Zl=class extends la{contentAttr;hostAttr;constructor(t,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(t,e,i,o,s,a,l,c),this.contentAttr=F_(c),this.hostAttr=B_(c)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let i=super.createElement(t,e);return super.setAttribute(i,this.contentAttr,""),i}},U_=(()=>{class n extends jl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r){return e.addEventListener(i,r,!1),()=>this.removeEventListener(e,i,r)}removeEventListener(e,i,r){return e.removeEventListener(i,r)}static \u0275fac=function(i){return new(i||n)(Qe(Ht))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),jm=["alt","control","meta","shift"],V_={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},z_={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},H_=(()=>{class n extends jl{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,i,r){let o=n.parseEventName(i),s=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>qo().onAndCancel(e,o.domEventName,s))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),jm.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=V_[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),jm.forEach(s=>{if(s!==r){let a=z_[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||n)(Qe(Ht))};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();function Qm(n,t){return Sm(te({rootComponent:n},W_(t)))}function W_(n){return{appProviders:[...K_,...n?.providers??[]],platformProviders:j_}}function G_(){th.makeCurrent()}function q_(){return new Nu}function X_(){return nm(document),document}var j_=[{provide:en,useValue:Dm},{provide:im,useValue:G_,multi:!0},{provide:Ht,useFactory:X_,deps:[]}];var K_=[{provide:Qf,useValue:"root"},{provide:Nu,useFactory:q_,deps:[]},{provide:nh,useClass:U_,multi:!0,deps:[Ht,vn,en]},{provide:nh,useClass:H_,multi:!0,deps:[Ht]},Kl,$m,Zm,{provide:Dl,useExisting:Kl},{provide:Vl,useClass:D_,deps:[]},[]];var eg=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||n)(Qe(Ht))};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var sh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=Qe(Z_),r},providedIn:"root"})}return n})(),Z_=(()=>{class n extends sh{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case to.NONE:return i;case to.HTML:return Vo(i,"HTML")?Uo(i):hm(this._doc,String(i)).toString();case to.STYLE:return Vo(i,"Style")?Uo(i):i;case to.SCRIPT:if(Vo(i,"Script"))return Uo(i);throw new wt(5200,!1);case to.URL:return Vo(i,"URL")?Uo(i):um(String(i));case to.RESOURCE_URL:if(Vo(i,"ResourceURL"))return Uo(i);throw new wt(5201,!1);default:throw new wt(5202,!1)}}bypassSecurityTrustHtml(e){return sm(e)}bypassSecurityTrustStyle(e){return am(e)}bypassSecurityTrustScript(e){return lm(e)}bypassSecurityTrustUrl(e){return cm(e)}bypassSecurityTrustResourceUrl(e){return dm(e)}static \u0275fac=function(i){return new(i||n)(Qe(Ht))};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $_="@",J_=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=$(tm,{optional:!0});loadingSchedulerFn=$(Y_,{optional:!0});_engine;constructor(e,i,r,o,s){this.doc=e,this.delegate=i,this.zone=r,this.animationType=o,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-BI4VJONI.js").then(r=>r),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(e):i=e(),i.catch(r=>{throw new wt(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,i){let r=this.delegate.createRenderer(e,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new ah(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let a=s.createRenderer(e,i);o.use(a),this.scheduler?.notify(11)}).catch(s=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(i){Rl()};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),ah=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,i,r){this.delegate.insertBefore(t,e,i,r)}removeChild(t,e,i){this.delegate.removeChild(t,e,i)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,i,r){this.delegate.setAttribute(t,e,i,r)}removeAttribute(t,e,i){this.delegate.removeAttribute(t,e,i)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,i,r){this.delegate.setStyle(t,e,i,r)}removeStyle(t,e,i){this.delegate.removeStyle(t,e,i)}setProperty(t,e,i){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,i)),this.delegate.setProperty(t,e,i)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,i){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(t,e,i)),this.delegate.listen(t,e,i)}shouldReplay(t){return this.replay!==null&&t.startsWith($_)}},Y_=new ot("");function ng(n="animations"){return Uu("NgAsyncAnimations"),ji([{provide:Dl,useFactory:(t,e,i)=>new J_(t,e,i,n),deps:[Ht,Kl,vn]},{provide:rm,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}function ro(n,t){return n?n.classList?n.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(n.className):!1}function _r(n,t){if(n&&t){let e=i=>{ro(n,i)||(n.classList?n.classList.add(i):n.className+=" "+i)};[t].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function Q_(){return window.innerWidth-document.documentElement.offsetWidth}function ca(n){for(let t of document?.styleSheets)try{for(let e of t?.cssRules)for(let i of e?.style)if(n.test(i))return{name:i,value:e.style.getPropertyValue(i).trim()}}catch{}return null}function ig(n="p-overflow-hidden"){let t=ca(/-scrollbar-width$/);t?.name&&document.body.style.setProperty(t.name,Q_()+"px"),_r(document.body,n)}function Jo(n,t){if(n&&t){let e=i=>{n.classList?n.classList.remove(i):n.className=n.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[t].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function rg(n){let t={width:0,height:0};return n&&(n.style.visibility="hidden",n.style.display="block",t.width=n.offsetWidth,t.height=n.offsetHeight,n.style.display="none",n.style.visibility="visible"),t}function $l(){let n=window,t=document,e=t.documentElement,i=t.getElementsByTagName("body")[0],r=n.innerWidth||e.clientWidth||i.clientWidth,o=n.innerHeight||e.clientHeight||i.clientHeight;return{width:r,height:o}}function lh(){let n=document.documentElement;return(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}function ch(){let n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}function og(n,t,e=!0){var i,r,o,s;if(n){let a=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:rg(n),l=a.height,c=a.width,d=t.offsetHeight,u=t.offsetWidth,h=t.getBoundingClientRect(),f=ch(),g=lh(),v=$l(),m,p,M="top";h.top+d+l>v.height?(m=h.top+f-l,M="bottom",m<0&&(m=f)):m=d+h.top+f,h.left+c>v.width?p=Math.max(0,h.left+g+u-c):p=h.left+g,n.style.top=m+"px",n.style.left=p+"px",n.style.transformOrigin=M,e&&(n.style.marginTop=M==="bottom"?`calc(${(r=(i=ca(/-anchor-gutter$/))==null?void 0:i.value)!=null?r:"2px"} * -1)`:(s=(o=ca(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function Pi(n,t){if(n instanceof HTMLElement){let e=n.offsetWidth;if(t){let i=getComputedStyle(n);e+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return e}return 0}function sg(n,t,e=!0){var i,r,o,s;if(n){let a=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:rg(n),l=t.offsetHeight,c=t.getBoundingClientRect(),d=$l(),u,h,f="top";c.top+l+a.height>d.height?(u=-1*a.height,f="bottom",c.top+u<0&&(u=-1*c.top)):u=l,a.width>d.width?h=c.left*-1:c.left+a.width>d.width?h=(c.left+a.width-d.width)*-1:h=0,n.style.top=u+"px",n.style.left=h+"px",n.style.transformOrigin=f,e&&(n.style.marginTop=f==="bottom"?`calc(${(r=(i=ca(/-anchor-gutter$/))==null?void 0:i.value)!=null?r:"2px"} * -1)`:(s=(o=ca(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function da(n){return typeof HTMLElement=="object"?n instanceof HTMLElement:n&&typeof n=="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}function ag(n){let t=n;return n&&typeof n=="object"&&(n.hasOwnProperty("current")?t=n.current:n.hasOwnProperty("el")&&(n.el.hasOwnProperty("nativeElement")?t=n.el.nativeElement:t=n.el)),da(t)?t:void 0}function oo(n,t){let e=ag(n);if(e)e.appendChild(t);else throw new Error("Cannot append "+t+" to "+n)}function dh(n,t={}){if(da(n)){let e=(i,r)=>{var o,s;let a=(o=n?.$attrs)!=null&&o[i]?[(s=n?.$attrs)==null?void 0:s[i]]:[];return[r].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?e(i,c):Object.entries(c).map(([h,f])=>i==="style"&&(f||f===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?h:void 0);l=u.length?l.concat(u.filter(h=>!!h)):l}}return l},a)};Object.entries(t).forEach(([i,r])=>{if(r!=null){let o=i.match(/^on(.+)/);o?n.addEventListener(o[1].toLowerCase(),r):i==="p-bind"||i==="pBind"?dh(n,r):(r=i==="class"?[...new Set(e("class",r))].join(" ").trim():i==="style"?e("style",r).join(";").trim():r,(n.$attrs=n.$attrs||{})&&(n.$attrs[i]=r),n.setAttribute(i,r))}})}}function lg(n,t){if(n){n.style.opacity="0";let e=+new Date,i="0",r=function(){i=`${+n.style.opacity+(new Date().getTime()-e)/t}`,n.style.opacity=i,e=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function ua(n,t){return da(n)?Array.from(n.querySelectorAll(t)):[]}function ri(n,t){return da(n)?n.matches(t)?n:n.querySelector(t):null}function ha(n,t){n&&document.activeElement!==n&&n.focus(t)}function uh(n){if(n){let t=n.offsetHeight,e=getComputedStyle(n);return t-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),t}return 0}function cg(n){if(n){let t=n.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Li(n,t){if(n){let e=n.offsetHeight;if(t){let i=getComputedStyle(n);e+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return e}return 0}function hh(n){if(n){let t=n.offsetWidth,e=getComputedStyle(n);return t-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),t}return 0}function dg(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function ug(n){var t;n&&("remove"in Element.prototype?n.remove():(t=n.parentNode)==null||t.removeChild(n))}function hg(n,t){let e=ag(n);if(e)e.removeChild(t);else throw new Error("Cannot remove "+t+" from "+n)}function pg(n,t="",e){da(n)&&e!==null&&e!==void 0&&n.setAttribute(t,e)}function fg(){let n=new Map;return{on(t,e){let i=n.get(t);return i?i.push(e):i=[e],n.set(t,i),this},off(t,e){let i=n.get(t);return i&&i.splice(i.indexOf(e)>>>0,1),this},emit(t,e){let i=n.get(t);i&&i.slice().map(r=>{r(e)})},clear(){n.clear()}}}function En(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&typeof n=="object"&&Object.keys(n).length===0}function ph(n,t,e=new WeakSet){if(n===t)return!0;if(!n||!t||typeof n!="object"||typeof t!="object"||e.has(n)||e.has(t))return!1;e.add(n).add(t);let i=Array.isArray(n),r=Array.isArray(t),o,s,a;if(i&&r){if(s=n.length,s!=t.length)return!1;for(o=s;o--!==0;)if(!ph(n[o],t[o],e))return!1;return!0}if(i!=r)return!1;let l=n instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();let d=n instanceof RegExp,u=t instanceof RegExp;if(d!=u)return!1;if(d&&u)return n.toString()==t.toString();let h=Object.keys(n);if(s=h.length,s!==Object.keys(t).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,h[o]))return!1;for(o=s;o--!==0;)if(a=h[o],!ph(n[a],t[a],e))return!1;return!0}function ex(n,t){return ph(n,t)}function gg(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Bt(n){return!En(n)}function fh(n,t){if(!n||!t)return null;try{let e=n[t];if(Bt(e))return e}catch{}if(Object.keys(n).length){if(gg(t))return t(n);if(t.indexOf(".")===-1)return n[t];{let e=t.split("."),i=n;for(let r=0,o=e.length;r<o;++r){if(i==null)return null;i=i[e[r]]}return i}}return null}function mh(n,t,e){return e?fh(n,e)===fh(t,e):ex(n,t)}function $i(n,t=!0){return n instanceof Object&&n.constructor===Object&&(t||Object.keys(n).length!==0)}function oi(n,...t){return gg(n)?n(...t):n}function xr(n,t=!0){return typeof n=="string"&&(t||n!=="")}function mg(n){return xr(n)?n.replace(/(-|_)/g,"").toLowerCase():n}function Jl(n,t="",e={}){let i=mg(t).split("."),r=i.shift();return r?$i(n)?Jl(oi(n[Object.keys(n).find(o=>mg(o)===r)||""],e),i.join("."),e):void 0:oi(n,e)}function Yl(n,t=!0){return Array.isArray(n)&&(t||n.length!==0)}function vg(n){return Bt(n)&&!isNaN(n)}function Gn(n,t){if(t){let e=t.test(n);return t.lastIndex=0,e}return!1}function so(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Ql(n){return xr(n)?n.replace(/(_)/g,"-").replace(/[A-Z]/g,(t,e)=>e===0?t:"-"+t.toLowerCase()).toLowerCase():n}function gh(n){return xr(n)?n.replace(/[A-Z]/g,(t,e)=>e===0?t:"."+t.toLowerCase()).toLowerCase():n}var ec={};function bi(n="pui_id_"){return ec.hasOwnProperty(n)||(ec[n]=0),ec[n]++,`${n}${ec[n]}`}function tx(){let n=[],t=(s,a,l=999)=>{let c=r(s,a,l),d=c.value+(c.key===s?0:l)+1;return n.push({key:s,value:d}),d},e=s=>{n=n.filter(a=>a.value!==s)},i=(s,a)=>r(s,a).value,r=(s,a,l=0)=>[...n].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,l)=>{a&&(a.style.zIndex=String(t(s,!0,l)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>i(s,!0)}}var sP=tx();var mn=(()=>{class n{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return n})();var yg=(()=>{class n{clickSource=new Ln;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bg=["*"],Ag=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=st({type:n,selectors:[["p-header"]],standalone:!1,ngContentSelectors:bg,decls:1,vars:0,template:function(i,r){i&1&&(zn(),Tn(0))},encapsulation:2})}return n})(),_g=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=st({type:n,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:bg,decls:1,vars:0,template:function(i,r){i&1&&(zn(),Tn(0))},encapsulation:2})}return n})(),ki=(()=>{class n{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(i){return new(i||n)(ke(Il))};static \u0275dir=gt({type:n,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return n})(),Ut=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({imports:[$t]})}return n})(),xg=(()=>{class n{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return n})();var ix=Object.defineProperty,rx=Object.defineProperties,ox=Object.getOwnPropertyDescriptors,tc=Object.getOwnPropertySymbols,Mg=Object.prototype.hasOwnProperty,Cg=Object.prototype.propertyIsEnumerable,Sg=(n,t,e)=>t in n?ix(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_i=(n,t)=>{for(var e in t||(t={}))Mg.call(t,e)&&Sg(n,e,t[e]);if(tc)for(var e of tc(t))Cg.call(t,e)&&Sg(n,e,t[e]);return n},vh=(n,t)=>rx(n,ox(t)),Yi=(n,t)=>{var e={};for(var i in n)Mg.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&tc)for(var i of tc(n))t.indexOf(i)<0&&Cg.call(n,i)&&(e[i]=n[i]);return e};var sx=fg(),si=sx;function wg(n,t){Yl(n)?n.push(...t||[]):$i(n)&&Object.assign(n,t)}function ax(n){return $i(n)&&n.hasOwnProperty("value")&&n.hasOwnProperty("type")?n.value:n}function lx(n){return n.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function yh(n="",t=""){return lx(`${xr(n,!1)&&xr(t,!1)?`${n}-`:n}${t}`)}function Tg(n="",t=""){return`--${yh(n,t)}`}function cx(n=""){let t=(n.match(/{/g)||[]).length,e=(n.match(/}/g)||[]).length;return(t+e)%2!==0}function Eg(n,t="",e="",i=[],r){if(xr(n)){let o=/{([^}]*)}/g,s=n.trim();if(cx(s))return;if(Gn(s,o)){let a=s.replaceAll(o,d=>{let h=d.replace(/{|}/g,"").split(".").filter(f=>!i.some(g=>Gn(f,g)));return`var(${Tg(e,Ql(h.join("-")))}${Bt(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Gn(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(vg(n))return n}function dx(n,t,e){xr(t,!1)&&n.push(`${t}:${e};`)}function Yo(n,t){return n?`${n}{${t}}`:""}var Qo=(...n)=>ux(kt.getTheme(),...n),ux=(n={},t,e,i)=>{if(t){let{variable:r,options:o}=kt.defaults||{},{prefix:s,transform:a}=n?.options||o||{},c=Gn(t,/{([^}]*)}/g)?t:`{${t}}`;return i==="value"||En(i)&&a==="strict"?kt.getTokenValue(t):Eg(c,void 0,s,[r.excludedKeyRegex],e)}return""};function hx(n,t={}){let e=kt.defaults.variable,{prefix:i=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=t,s=(c,d="")=>Object.entries(c).reduce((u,[h,f])=>{let g=Gn(h,o)?yh(d):yh(d,Ql(h)),v=ax(f);if($i(v)){let{variables:m,tokens:p}=s(v,g);wg(u.tokens,p),wg(u.variables,m)}else u.tokens.push((i?g.replace(`${i}-`,""):g).replaceAll("-",".")),dx(u.variables,Tg(g),Eg(v,g,i,[o]));return u},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(n,i);return{value:a,tokens:l,declarations:a.join(""),css:Yo(r,a.join(""))}}var Ai={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(n){return{type:"class",selector:n,matched:this.pattern.test(n.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(n){return{type:"attr",selector:`:root${n}`,matched:this.pattern.test(n.trim())}}},media:{pattern:/^@media (.*)$/,resolve(n){return{type:"media",selector:`${n}{:root{[CSS]}}`,matched:this.pattern.test(n.trim())}}},system:{pattern:/^system$/,resolve(n){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(n.trim())}}},custom:{resolve(n){return{type:"custom",selector:n,matched:!0}}}},resolve(n){let t=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[n].flat().map(e=>{var i;return(i=t.map(r=>r.resolve(e)).find(r=>r.matched))!=null?i:this.rules.custom.resolve(e)})}},_toVariables(n,t){return hx(n,{prefix:t?.prefix})},getCommon({name:n="",theme:t={},params:e,set:i,defaults:r}){var o,s,a,l,c,d,u;let{preset:h,options:f}=t,g,v,m,p,M,w,_;if(Bt(h)&&f.transform!=="strict"){let{primitive:D,semantic:R,extend:T}=h,k=R||{},{colorScheme:x}=k,A=Yi(k,["colorScheme"]),E=T||{},{colorScheme:W}=E,U=Yi(E,["colorScheme"]),K=x||{},{dark:J}=K,q=Yi(K,["dark"]),Y=W||{},{dark:V}=Y,le=Yi(Y,["dark"]),me=Bt(D)?this._toVariables({primitive:D},f):{},Me=Bt(A)?this._toVariables({semantic:A},f):{},He=Bt(q)?this._toVariables({light:q},f):{},vt=Bt(J)?this._toVariables({dark:J},f):{},G=Bt(U)?this._toVariables({semantic:U},f):{},oe=Bt(le)?this._toVariables({light:le},f):{},Se=Bt(V)?this._toVariables({dark:V},f):{},[de,De]=[(o=me.declarations)!=null?o:"",me.tokens],[Oe,Ze]=[(s=Me.declarations)!=null?s:"",Me.tokens||[]],[Ot,it]=[(a=He.declarations)!=null?a:"",He.tokens||[]],[Gt,C]=[(l=vt.declarations)!=null?l:"",vt.tokens||[]],[Dn,et]=[(c=G.declarations)!=null?c:"",G.tokens||[]],[tt,Ee]=[(d=oe.declarations)!=null?d:"",oe.tokens||[]],[Dt,Ce]=[(u=Se.declarations)!=null?u:"",Se.tokens||[]];g=this.transformCSS(n,de,"light","variable",f,i,r),v=De;let S=this.transformCSS(n,`${Oe}${Ot}`,"light","variable",f,i,r),y=this.transformCSS(n,`${Gt}`,"dark","variable",f,i,r);m=`${S}${y}`,p=[...new Set([...Ze,...it,...C])];let O=this.transformCSS(n,`${Dn}${tt}color-scheme:light`,"light","variable",f,i,r),j=this.transformCSS(n,`${Dt}color-scheme:dark`,"dark","variable",f,i,r);M=`${O}${j}`,w=[...new Set([...et,...Ee,...Ce])],_=oi(h.css,{dt:Qo})}return{primitive:{css:g,tokens:v},semantic:{css:m,tokens:p},global:{css:M,tokens:w},style:_}},getPreset({name:n="",preset:t={},options:e,params:i,set:r,defaults:o,selector:s}){var a,l,c;let d,u,h;if(Bt(t)&&e.transform!=="strict"){let f=n.replace("-directive",""),g=t,{colorScheme:v,extend:m,css:p}=g,M=Yi(g,["colorScheme","extend","css"]),w=m||{},{colorScheme:_}=w,D=Yi(w,["colorScheme"]),R=v||{},{dark:T}=R,k=Yi(R,["dark"]),x=_||{},{dark:A}=x,E=Yi(x,["dark"]),W=Bt(M)?this._toVariables({[f]:_i(_i({},M),D)},e):{},U=Bt(k)?this._toVariables({[f]:_i(_i({},k),E)},e):{},K=Bt(T)?this._toVariables({[f]:_i(_i({},T),A)},e):{},[J,q]=[(a=W.declarations)!=null?a:"",W.tokens||[]],[Y,V]=[(l=U.declarations)!=null?l:"",U.tokens||[]],[le,me]=[(c=K.declarations)!=null?c:"",K.tokens||[]],Me=this.transformCSS(f,`${J}${Y}`,"light","variable",e,r,o,s),He=this.transformCSS(f,le,"dark","variable",e,r,o,s);d=`${Me}${He}`,u=[...new Set([...q,...V,...me])],h=oi(p,{dt:Qo})}return{css:d,tokens:u,style:h}},getPresetC({name:n="",theme:t={},params:e,set:i,defaults:r}){var o;let{preset:s,options:a}=t,l=(o=s?.components)==null?void 0:o[n];return this.getPreset({name:n,preset:l,options:a,params:e,set:i,defaults:r})},getPresetD({name:n="",theme:t={},params:e,set:i,defaults:r}){var o;let s=n.replace("-directive",""),{preset:a,options:l}=t,c=(o=a?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:l,params:e,set:i,defaults:r})},applyDarkColorScheme(n){return!(n.darkModeSelector==="none"||n.darkModeSelector===!1)},getColorSchemeOption(n,t){var e;return this.applyDarkColorScheme(n)?this.regex.resolve(n.darkModeSelector===!0?t.options.darkModeSelector:(e=n.darkModeSelector)!=null?e:t.options.darkModeSelector):[]},getLayerOrder(n,t={},e,i){let{cssLayer:r}=t;return r?`@layer ${oi(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:n="",theme:t={},params:e,props:i={},set:r,defaults:o}){let s=this.getCommon({name:n,theme:t,params:e,set:r,defaults:o}),a=Object.entries(i).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,d])=>{if(d?.css){let u=so(d?.css),h=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${u}</style>`)}return l},[]).join("")},getStyleSheet({name:n="",theme:t={},params:e,props:i={},set:r,defaults:o}){var s;let a={name:n,theme:t,params:e,set:r,defaults:o},l=(s=n.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(i).reduce((d,[u,h])=>d.push(`${u}="${h}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${n}-variables" ${c}>${so(l)}</style>`:""},createTokens(n={},t,e="",i="",r={}){return Object.entries(n).forEach(([o,s])=>{let a=Gn(o,t.variable.excludedKeyRegex)?e:e?`${e}.${gh(o)}`:gh(o),l=i?`${i}.${o}`:o;$i(s)?this.createTokens(s,t,a,l,r):(r[a]||(r[a]={paths:[],computed(c,d={}){var u,h;return this.paths.length===1?(u=this.paths[0])==null?void 0:u.computed(this.paths[0].scheme,d.binding):c&&c!=="none"?(h=this.paths.find(f=>f.scheme===c))==null?void 0:h.computed(c,d.binding):this.paths.map(f=>f.computed(f.scheme,d[f.scheme]))}}),r[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,d={}){let u=/{([^}]*)}/g,h=s;if(d.name=this.path,d.binding||(d.binding={}),Gn(s,u)){let g=s.trim().replaceAll(u,p=>{var M;let w=p.replace(/{|}/g,""),_=(M=r[w])==null?void 0:M.computed(c,d);return Yl(_)&&_.length===2?`light-dark(${_[0].value},${_[1].value})`:_?.value}),v=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,m=/var\([^)]+\)/g;h=Gn(g.replace(m,"0"),v)?`calc(${g})`:g}return En(d.binding)&&delete d.binding,{colorScheme:c,path:this.path,paths:d,value:h.includes("undefined")?void 0:h}}}))}),r},getTokenValue(n,t,e){var i;let o=(l=>l.split(".").filter(d=>!Gn(d.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(t),s=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,a=[(i=n[o])==null?void 0:i.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let d=c,{colorScheme:u}=d,h=Yi(d,["colorScheme"]);return l[u]=h,l},void 0)},getSelectorRule(n,t,e,i){return e==="class"||e==="attr"?Yo(Bt(t)?`${n}${t},${n} ${t}`:n,i):Yo(n,Bt(t)?Yo(t,i):i)},transformCSS(n,t,e,i,r={},o,s,a){if(Bt(t)){let{cssLayer:l}=r;if(i!=="style"){let c=this.getColorSchemeOption(r,s);t=e==="dark"?c.reduce((d,{type:u,selector:h})=>(Bt(h)&&(d+=h.includes("[CSS]")?h.replace("[CSS]",t):this.getSelectorRule(h,a,u,t)),d),""):Yo(a??":root",t)}if(l){let c={name:"primeui",order:"primeui"};$i(l)&&(c.name=oi(l.name,{name:n,type:i})),Bt(c.name)&&(t=Yo(`@layer ${c.name}`,t),o?.layerNames(c.name))}return t}return""}},kt={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(n={}){let{theme:t}=n;t&&(this._theme=vh(_i({},t),{options:_i(_i({},this.defaults.options),t.options)}),this._tokens=Ai.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var n;return((n=this.theme)==null?void 0:n.preset)||{}},get options(){var n;return((n=this.theme)==null?void 0:n.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(n){this.update({theme:n}),si.emit("theme:change",n)},getPreset(){return this.preset},setPreset(n){this._theme=vh(_i({},this.theme),{preset:n}),this._tokens=Ai.createTokens(n,this.defaults),this.clearLoadedStyleNames(),si.emit("preset:change",n),si.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(n){this._theme=vh(_i({},this.theme),{options:n}),this.clearLoadedStyleNames(),si.emit("options:change",n),si.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(n){this._layerNames.add(n)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(n){return Ai.getTokenValue(this.tokens,n,this.defaults)},getCommon(n="",t){return Ai.getCommon({name:n,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(n="",t){let e={name:n,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ai.getPresetC(e)},getDirective(n="",t){let e={name:n,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ai.getPresetD(e)},getCustomPreset(n="",t,e,i){let r={name:n,preset:t,options:this.options,selector:e,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ai.getPreset(r)},getLayerOrderCSS(n=""){return Ai.getLayerOrder(n,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(n="",t,e="style",i){return Ai.transformCSS(n,t,i,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(n="",t,e={}){return Ai.getCommonStyleSheet({name:n,theme:this.theme,params:t,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(n,t,e={}){return Ai.getStyleSheet({name:n,theme:this.theme,params:t,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(n){this._loadingStyles.add(n)},onStyleUpdated(n){this._loadingStyles.add(n)},onStyleLoaded(n,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),si.emit(`theme:${t}:load`,n),!this._loadingStyles.size&&si.emit("theme:load"))}};var px=0,Rg=(()=>{class n{document=$(Ht);use(e,i={}){let r=!1,o=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++px}`,id:d=void 0,media:u=void 0,nonce:h=void 0,first:f=!1,props:g={}}=i;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),!s.isConnected){o=e,dh(s,{type:"text/css",media:u,nonce:h});let v=this.document.head;f&&v.firstChild?v.insertBefore(s,v.firstChild):v.appendChild(s),pg(s,"data-primeng-style-id",c)}return s.textContent!==o&&(s.textContent=o),{id:d,name:c,el:s,css:o}}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var es={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(n){return this._loadedStyleNames.has(n)},setLoadedStyleName(n){this._loadedStyleNames.add(n)},deleteLoadedStyleName(n){this._loadedStyleNames.delete(n)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},fx=({dt:n})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${n("disabled.opacity")};
}

.pi {
    font-size: ${n("icon.size")};
}

.p-icon {
    width: ${n("icon.size")};
    height: ${n("icon.size")};
}

.p-overlay-mask {
    background: ${n("mask.background")};
    color: ${n("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${n("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${n("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${n("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${n("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,mx=({dt:n})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${n("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Wt=(()=>{class n{name="base";useStyle=$(Rg);theme=fx;css=mx;classes={};inlineStyles={};load=(e,i={},r=o=>o)=>{let o=r(oi(e,{dt:Qo}));return o?this.useStyle.use(so(o),te({name:this.name},i)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},i="")=>this.load(this.theme,e,(r="")=>kt.transformCSS(e.name||this.name,`${r}${i}`));getCommonTheme=e=>kt.getCommon(this.name,e);getComponentTheme=e=>kt.getComponent(this.name,e);getDirectiveTheme=e=>kt.getDirective(this.name,e);getPresetTheme=(e,i,r)=>kt.getCustomPreset(this.name,e,i,r);getLayerOrderThemeCSS=()=>kt.getLayerOrderCSS(this.name);getStyleSheet=(e="",i={})=>{if(this.css){let r=oi(this.css,{dt:Qo}),o=so(`${r}${e}`),s=Object.entries(i).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,i={})=>kt.getCommonStyleSheet(this.name,e,i);getThemeStyleSheet=(e,i={})=>{let r=[kt.getStyleSheet(this.name,e,i)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=oi(this.theme,{dt:Qo}),a=so(kt.transformCSS(o,s)),l=Object.entries(i).reduce((c,[d,u])=>c.push(`${d}="${u}"`)&&c,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${a}</style>`)}return r.join("")};static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gx=(()=>{class n{theme=pn(void 0);csp=pn({nonce:void 0});isThemeChanged=!1;document=$(Ht);baseStyle=$(Wt);constructor(){Qs(()=>{si.on("theme:change",e=>{Di(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Qs(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){kt.clearLoadedStyleNames(),si.clear()}onThemeChange(e){kt.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!kt.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,te({name:"primitive-variables"},s)),this.baseStyle.load(i?.css,te({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,te({name:"global-variables"},s)),this.baseStyle.loadTheme(te({name:"global-style"},s),o),kt.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:i,csp:r}=e||{};i&&this.theme.set(i),r&&this.csp.set(r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ah=(()=>{class n extends gx{ripple=pn(!1);platformId=$(en);inputStyle=pn("outlined");inputVariant=pn("outlined");overlayOptions={};csp=pn({nonce:void 0});filterMatchModeOptions={text:[mn.STARTS_WITH,mn.CONTAINS,mn.NOT_CONTAINS,mn.ENDS_WITH,mn.EQUALS,mn.NOT_EQUALS],numeric:[mn.EQUALS,mn.NOT_EQUALS,mn.LESS_THAN,mn.LESS_THAN_OR_EQUAL_TO,mn.GREATER_THAN,mn.GREATER_THAN_OR_EQUAL_TO],date:[mn.DATE_IS,mn.DATE_IS_NOT,mn.DATE_BEFORE,mn.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Ln;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=te(te({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:i,ripple:r,inputStyle:o,theme:s,overlayOptions:a,translation:l}=e||{};i&&this.csp.set(i),r&&this.ripple.set(r),o&&this.inputStyle.set(o),a&&(this.overlayOptions=a),l&&this.setTranslation(l),s&&this.setThemeConfig({theme:s,csp:i})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),vx=new ot("PRIME_NG_CONFIG");function Ig(...n){let t=n?.map(i=>({provide:vx,useValue:i,multi:!1})),e=vm(()=>{let i=$(Ah);n?.forEach(r=>i.setConfig(r))});return ji([...t,e])}var Dg={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},header:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.125rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.125rem 1.125rem 1.125rem"}};var Pg={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",focusColor:"{surface.800}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}}};var Lg={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var kg={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Og={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"1rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.5rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.375rem"},lg:{fontSize:"1.125rem",paddingX:"0.875rem",paddingY:"0.625rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 1rem 0.25rem 1rem"},option:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}"},optionGroup:{padding:"0.5rem 0.75rem",fontWeight:"600"}},content:{borderRadius:"{border.radius.md}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.sm}",gap:"0.5rem"},submenuLabel:{padding:"0.5rem 0.75rem",fontWeight:"600"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},popover:{borderRadius:"{border.radius.md}",padding:"0.75rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"},modal:{borderRadius:"{border.radius.xl}",padding:"1.25rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},colorScheme:{light:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.4)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.200}",filledBackground:"{surface.50}",filledHoverBackground:"{surface.50}",filledFocusBackground:"{surface.50}",borderColor:"{surface.300}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.400}",color:"{surface.700}",disabledColor:"{surface.500}",placeholderColor:"{surface.500}",invalidPlaceholderColor:"{red.600}",floatLabelColor:"{surface.500}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.500}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.700}",hoverColor:"{surface.800}",mutedColor:"{surface.500}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.200}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.200}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.100}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.500}",activeColor:"{surface.500}"}}},dark:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.800}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.500}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.400}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.300}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.700}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.800}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.500}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var Ng={root:{borderRadius:"{content.border.radius}"}};var Fg={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var Bg={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.5rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.600}",activeBackground:"{sky.700}",borderColor:"{sky.500}",hoverBorderColor:"{sky.600}",activeBorderColor:"{sky.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.600}",activeBackground:"{green.700}",borderColor:"{green.500}",hoverBorderColor:"{green.600}",activeBorderColor:"{green.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.600}",activeBackground:"{orange.700}",borderColor:"{orange.500}",hoverBorderColor:"{orange.600}",activeBorderColor:"{orange.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.600}",activeBackground:"{purple.700}",borderColor:"{purple.500}",hoverBorderColor:"{purple.600}",activeBorderColor:"{purple.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.600}",activeBackground:"{red.700}",borderColor:"{red.500}",hoverBorderColor:"{red.600}",activeBorderColor:"{red.700}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.900}",activeBackground:"{surface.800}",borderColor:"{surface.950}",hoverBorderColor:"{surface.900}",activeBorderColor:"{surface.800}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.200}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.200}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.200}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.200}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.200}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.200}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.700}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.200}",color:"{surface.700}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.500}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.700}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}}};var Ug={root:{background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},body:{padding:"1.25rem",gap:"0.5rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var Vg={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"0.5rem"},indicator:{width:"2rem",height:"0.5rem",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}}};var zg={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"}};var Hg={root:{borderRadius:"{border.radius.sm}",width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}}};var Wg={root:{borderRadius:"16px",paddingX:"0.75rem",paddingY:"0.5rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2rem",height:"2rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},colorScheme:{light:{root:{background:"{surface.100}",color:"{surface.800}"},icon:{color:"{surface.800}"},removeIcon:{color:"{surface.800}"}},dark:{root:{background:"{surface.800}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}"}}}};var Gg={root:{transitionDuration:"{transition.duration}"},preview:{width:"1.5rem",height:"1.5rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var qg={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var Xg={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var jg={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var Kg={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem"},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},dropPoint:{color:"{primary.color}"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}};var Zg={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var $g={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"500"},dropdown:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.25rem",fontWeight:"500",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2rem",height:"2rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.375rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.375rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}}};var Jg={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var Yg={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var Qg={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var e0={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var t0={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"}};var n0={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.125rem 1.125rem 1.125rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.5rem 0.75rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"}};var i0={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.125rem 1.125rem 1.125rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var r0={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var o0={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var s0={icon:{color:"{form.field.icon.color}"}};var a0={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"{form.field.padding.y}"}};var l0={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var c0={handle:{size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var d0={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var u0={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var h0={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var p0={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.5rem",minWidth:"2.5rem"}};var f0={root:{transitionDuration:"{transition.duration}"},button:{width:"2.5rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}}};var m0={root:{gap:"0.5rem"},input:{width:"2.5rem",sm:{width:"2rem"},lg:{width:"3rem"}}};var g0={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}};var v0={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var y0={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}}};var b0={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var A0={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"}};var _0={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"1.75rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var x0={root:{borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},content:{padding:"0.5rem 0.75rem",gap:"0.5rem",sm:{padding:"0.375rem 0.625rem"},lg:{padding:"0.625rem 0.875rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.125rem",sm:{size:"1rem"},lg:{size:"1.25rem"}},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.600}",borderColor:"{yellow.600}"},simple:{color:"{yellow.600}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.500}",borderColor:"{surface.500}"},simple:{color:"{surface.500}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var S0={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var w0={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"}};var M0={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var C0={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.75rem 1rem",toggleablePadding:"0.75rem 1rem 1.25rem 1rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var T0={root:{outline:{width:"2px",color:"{content.background}"}}};var E0={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var R0={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.125rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.375rem 1.125rem"},title:{fontWeight:"600"},content:{padding:"0 1.125rem 1.125rem 1.125rem"},footer:{padding:"0 1.125rem 1.125rem 1.125rem"}};var I0={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"}};var D0={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var P0={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var L0={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var k0={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.25rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var O0={colorScheme:{light:{root:{"color.1":"{red.500}","color.2":"{blue.500}","color.3":"{green.500}","color.4":"{yellow.500}"}},dark:{root:{"color.1":"{red.400}","color.2":"{blue.400}","color.3":"{green.400}","color.4":"{yellow.400}"}}}};var N0={root:{width:"1.25rem",height:"1.25rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"1rem",height:"1rem"},lg:{width:"1.5rem",height:"1.5rem"}},icon:{size:"0.75rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"1rem"}}};var F0={root:{gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},icon:{size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}};var B0={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var U0={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.100}"}},dark:{bar:{background:"{surface.800}"}}}};var V0={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"}};var z0={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var H0={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var W0={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},range:{background:"{primary.color}"},handle:{width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{handle:{contentBackground:"{surface.0}"}},dark:{handle:{contentBackground:"{surface.950}"}}}};var G0={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var q0={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var X0={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var j0={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},stepNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"}};var K0={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var Z0={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var $0={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"0.875rem 1.125rem 1.125rem 1.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var J0={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var Y0={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.100}",color:"{primary.700}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.100}",color:"{green.700}"},info:{background:"{sky.100}",color:"{sky.700}"},warn:{background:"{orange.100}",color:"{orange.700}"},danger:{background:"{red.100}",color:"{red.700}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"color-mix(in srgb, {primary.500}, transparent 84%)",color:"{primary.300}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",color:"{green.300}"},info:{background:"color-mix(in srgb, {sky.500}, transparent 84%)",color:"{sky.300}"},warn:{background:"color-mix(in srgb, {orange.500}, transparent 84%)",color:"{orange.300}"},danger:{background:"color-mix(in srgb, {red.500}, transparent 84%)",color:"{red.300}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Q0={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var ev={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}}};var tv={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var nv={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.125rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},eventConnector:{color:"{content.border.color}",size:"2px"}};var iv={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},icon:{size:"1.125rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{blur:"1.5px",info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{blur:"10px",info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var rv={root:{padding:"0.5rem 1rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.375rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.625rem 1.25rem"}},icon:{disabledColor:"{form.field.disabled.color}"},content:{left:"0.25rem",top:"0.25rem",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"},colorScheme:{light:{root:{background:"{surface.100}",checkedBackground:"{surface.100}",hoverBackground:"{surface.100}",borderColor:"{surface.100}",color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}",checkedBorderColor:"{surface.100}"},content:{checkedBackground:"{surface.0}"},icon:{color:"{surface.500}",hoverColor:"{surface.700}",checkedColor:"{surface.900}"}},dark:{root:{background:"{surface.950}",checkedBackground:"{surface.950}",hoverBackground:"{surface.950}",borderColor:"{surface.950}",color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}",checkedBorderColor:"{surface.950}"},content:{checkedBackground:"{surface.800}"},icon:{color:"{surface.400}",hoverColor:"{surface.300}",checkedColor:"{surface.0}"}}}};var ov={root:{width:"2.5rem",height:"1.5rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{form.field.disabled.background}",hoverBackground:"{surface.400}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.0}",disabledBackground:"{form.field.disabled.color}",hoverBackground:"{surface.0}",checkedBackground:"{surface.0}",checkedHoverBackground:"{surface.0}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.600}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.900}",hoverBackground:"{surface.300}",checkedBackground:"{surface.900}",checkedHoverBackground:"{surface.900}",color:"{surface.900}",hoverColor:"{surface.800}",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"}}}};var sv={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.75rem"}};var av={root:{maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"},colorScheme:{light:{root:{background:"{surface.700}",color:"{surface.0}"}},dark:{root:{background:"{surface.700}",color:"{surface.0}"}}}};var lv={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"1rem",transitionDuration:"{transition.duration}"},node:{padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.25rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"1.75rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.5rem 0"}};var cv={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"}};var dv={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizerWidth:"0.5rem",resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}}};var uv={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var hv=Tt(te({},Og),{components:{accordion:Dg,autocomplete:Pg,avatar:Lg,badge:kg,blockui:Ng,breadcrumb:Fg,button:Bg,datepicker:$g,card:Ug,carousel:Vg,cascadeselect:zg,checkbox:Hg,chip:Wg,colorpicker:Gg,confirmdialog:qg,confirmpopup:Xg,contextmenu:jg,dataview:Zg,datatable:Kg,dialog:Jg,divider:Yg,dock:Qg,drawer:e0,editor:t0,fieldset:n0,fileupload:i0,iftalabel:a0,floatlabel:r0,galleria:o0,iconfield:s0,image:l0,imagecompare:c0,inlinemessage:d0,inplace:u0,inputchips:h0,inputgroup:p0,inputnumber:f0,inputotp:m0,inputtext:g0,knob:v0,listbox:y0,megamenu:b0,menu:A0,menubar:_0,message:x0,metergroup:S0,multiselect:w0,orderlist:M0,organizationchart:C0,overlaybadge:T0,popover:L0,paginator:E0,password:D0,panel:R0,panelmenu:I0,picklist:P0,progressbar:k0,progressspinner:O0,radiobutton:N0,rating:F0,scrollpanel:U0,select:V0,selectbutton:z0,skeleton:H0,slider:W0,speeddial:G0,splitter:X0,splitbutton:q0,stepper:j0,steps:K0,tabmenu:Z0,tabs:$0,tabview:J0,textarea:ev,tieredmenu:tv,tag:Y0,terminal:Q0,timeline:nv,togglebutton:rv,toggleswitch:ov,tree:lv,treeselect:cv,treetable:dv,toast:iv,toolbar:sv,virtualscroller:uv,tooltip:av,ripple:B0}});var qe="primary",Ta=Symbol("RouteTitle"),Mh=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ss(n){return new Mh(n)}function yx(n,t,e){let i=e.path.split("/");if(i.length>n.length||e.pathMatch==="full"&&(t.hasChildren()||i.length<n.length))return null;let r={};for(let o=0;o<i.length;o++){let s=i[o],a=n[o];if(s[0]===":")r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function bx(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(!Oi(n[e],t[e]))return!1;return!0}function Oi(n,t){let e=n?Ch(n):void 0,i=t?Ch(t):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Sv(n[r],t[r]))return!1;return!0}function Ch(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Sv(n,t){if(Array.isArray(n)&&Array.isArray(t)){if(n.length!==t.length)return!1;let e=[...n].sort(),i=[...t].sort();return e.every((r,o)=>i[o]===r)}else return n===t}function wv(n){return n.length>0?n[n.length-1]:null}function Mr(n){return Hf(n)?n:kl(n)?sn(Promise.resolve(n)):Pe(n)}var Ax={exact:Cv,subset:Tv},Mv={exact:_x,subset:xx,ignored:()=>!0};function pv(n,t,e){return Ax[e.paths](n.root,t.root,e.matrixParams)&&Mv[e.queryParams](n.queryParams,t.queryParams)&&!(e.fragment==="exact"&&n.fragment!==t.fragment)}function _x(n,t){return Oi(n,t)}function Cv(n,t,e){if(!lo(n.segments,t.segments)||!rc(n.segments,t.segments,e)||n.numberOfChildren!==t.numberOfChildren)return!1;for(let i in t.children)if(!n.children[i]||!Cv(n.children[i],t.children[i],e))return!1;return!0}function xx(n,t){return Object.keys(t).length<=Object.keys(n).length&&Object.keys(t).every(e=>Sv(n[e],t[e]))}function Tv(n,t,e){return Ev(n,t,t.segments,e)}function Ev(n,t,e,i){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!lo(r,e)||t.hasChildren()||!rc(r,e,i))}else if(n.segments.length===e.length){if(!lo(n.segments,e)||!rc(n.segments,e,i))return!1;for(let r in t.children)if(!n.children[r]||!Tv(n.children[r],t.children[r],i))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!lo(n.segments,r)||!rc(n.segments,r,i)||!n.children[qe]?!1:Ev(n.children[qe],t,o,i)}}function rc(n,t,e){return t.every((i,r)=>Mv[e](n[r].parameters,i.parameters))}var er=class{root;queryParams;fragment;_queryParamMap;constructor(t=new xt([],{}),e={},i=null){this.root=t,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ss(this.queryParams),this._queryParamMap}toString(){return Mx.serialize(this)}},xt=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return oc(this)}},ao=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=ss(this.parameters),this._parameterMap}toString(){return Iv(this)}};function Sx(n,t){return lo(n,t)&&n.every((e,i)=>Oi(e.parameters,t[i].parameters))}function lo(n,t){return n.length!==t.length?!1:n.every((e,i)=>e.path===t[i].path)}function wx(n,t){let e=[];return Object.entries(n.children).forEach(([i,r])=>{i===qe&&(e=e.concat(t(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==qe&&(e=e.concat(t(r,i)))}),e}var Ea=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:()=>new as,providedIn:"root"})}return n})(),as=class{parse(t){let e=new Eh(t);return new er(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${pa(t.root,!0)}`,i=Ex(t.queryParams),r=typeof t.fragment=="string"?`#${Cx(t.fragment)}`:"";return`${e}${i}${r}`}},Mx=new as;function oc(n){return n.segments.map(t=>Iv(t)).join("/")}function pa(n,t){if(!n.hasChildren())return oc(n);if(t){let e=n.children[qe]?pa(n.children[qe],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==qe&&i.push(`${r}:${pa(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=wx(n,(i,r)=>r===qe?[pa(n.children[qe],!1)]:[`${r}:${pa(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[qe]!=null?`${oc(n)}/${e[0]}`:`${oc(n)}/(${e.join("//")})`}}function Rv(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function nc(n){return Rv(n).replace(/%3B/gi,";")}function Cx(n){return encodeURI(n)}function Th(n){return Rv(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function sc(n){return decodeURIComponent(n)}function fv(n){return sc(n.replace(/\+/g,"%20"))}function Iv(n){return`${Th(n.path)}${Tx(n.parameters)}`}function Tx(n){return Object.entries(n).map(([t,e])=>`;${Th(t)}=${Th(e)}`).join("")}function Ex(n){let t=Object.entries(n).map(([e,i])=>Array.isArray(i)?i.map(r=>`${nc(e)}=${nc(r)}`).join("&"):`${nc(e)}=${nc(i)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var Rx=/^[^\/()?;#]+/;function _h(n){let t=n.match(Rx);return t?t[0]:""}var Ix=/^[^\/()?;=#]+/;function Dx(n){let t=n.match(Ix);return t?t[0]:""}var Px=/^[^=?&#]+/;function Lx(n){let t=n.match(Px);return t?t[0]:""}var kx=/^[^&#]+/;function Ox(n){let t=n.match(kx);return t?t[0]:""}var Eh=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new xt([],{}):new xt([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(i[qe]=new xt(t,e)),i}parseSegment(){let t=_h(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new wt(4009,!1);return this.capture(t),new ao(sc(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=Dx(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=_h(this.remaining);r&&(i=r,this.capture(i))}t[sc(e)]=sc(i)}parseQueryParam(t){let e=Lx(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=Ox(this.remaining);s&&(i=s,this.capture(i))}let r=fv(e),o=fv(i);if(t.hasOwnProperty(r)){let s=t[r];Array.isArray(s)||(s=[s],t[r]=s),s.push(o)}else t[r]=o}parseParens(t){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=_h(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new wt(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):t&&(o=qe);let s=this.parseChildren();e[o]=Object.keys(s).length===1?s[qe]:new xt([],s),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new wt(4011,!1)}};function Dv(n){return n.segments.length>0?new xt([],{[qe]:n}):n}function Pv(n){let t={};for(let[i,r]of Object.entries(n.children)){let o=Pv(r);if(i===qe&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))t[s]=a;else(o.segments.length>0||o.hasChildren())&&(t[i]=o)}let e=new xt(n.segments,t);return Nx(e)}function Nx(n){if(n.numberOfChildren===1&&n.children[qe]){let t=n.children[qe];return new xt(n.segments.concat(t.segments),t.children)}return n}function co(n){return n instanceof er}function Fx(n,t,e=null,i=null){let r=Lv(n);return kv(r,t,e,i)}function Lv(n){let t;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new xt(o.url,s);return o===n&&(t=a),a}let i=e(n.root),r=Dv(i);return t??r}function kv(n,t,e,i){let r=n;for(;r.parent;)r=r.parent;if(t.length===0)return xh(r,r,r,e,i);let o=Bx(t);if(o.toRoot())return xh(r,r,new xt([],{}),e,i);let s=Ux(o,r,n),a=s.processChildren?ga(s.segmentGroup,s.index,o.commands):Nv(s.segmentGroup,s.index,o.commands);return xh(r,s.segmentGroup,a,e,i)}function ac(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ba(n){return typeof n=="object"&&n!=null&&n.outlets}function xh(n,t,e,i,r){let o={};i&&Object.entries(i).forEach(([l,c])=>{o[l]=Array.isArray(c)?c.map(d=>`${d}`):`${c}`});let s;n===t?s=e:s=Ov(n,t,e);let a=Dv(Pv(s));return new er(a,o,r)}function Ov(n,t,e){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===t?i[r]=e:i[r]=Ov(o,t,e)}),new xt(n.segments,i)}var lc=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,i){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=i,t&&i.length>0&&ac(i[0]))throw new wt(4003,!1);let r=i.find(ba);if(r&&r!==wv(i))throw new wt(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Bx(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new lc(!0,0,n);let t=0,e=!1,i=n.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?t++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new lc(e,t,i)}var is=class{segmentGroup;processChildren;index;constructor(t,e,i){this.segmentGroup=t,this.processChildren=e,this.index=i}};function Ux(n,t,e){if(n.isAbsolute)return new is(t,!0,0);if(!e)return new is(t,!1,NaN);if(e.parent===null)return new is(e,!0,0);let i=ac(n.commands[0])?0:1,r=e.segments.length-1+i;return Vx(e,r,n.numberOfDoubleDots)}function Vx(n,t,e){let i=n,r=t,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new wt(4005,!1);r=i.segments.length}return new is(i,!1,r-o)}function zx(n){return ba(n[0])?n[0].outlets:{[qe]:n}}function Nv(n,t,e){if(n??=new xt([],{}),n.segments.length===0&&n.hasChildren())return ga(n,t,e);let i=Hx(n,t,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new xt(n.segments.slice(0,i.pathIndex),{});return o.children[qe]=new xt(n.segments.slice(i.pathIndex),n.children),ga(o,0,r)}else return i.match&&r.length===0?new xt(n.segments,{}):i.match&&!n.hasChildren()?Rh(n,t,e):i.match?ga(n,0,r):Rh(n,t,e)}function ga(n,t,e){if(e.length===0)return new xt(n.segments,{});{let i=zx(e),r={};if(Object.keys(i).some(o=>o!==qe)&&n.children[qe]&&n.numberOfChildren===1&&n.children[qe].segments.length===0){let o=ga(n.children[qe],t,e);return new xt(n.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=Nv(n.children[o],t,s))}),Object.entries(n.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new xt(n.segments,r)}}function Hx(n,t,e){let i=0,r=t,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=e.length)return o;let s=n.segments[r],a=e[i];if(ba(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!gv(l,c,s))return o;i+=2}else{if(!gv(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Rh(n,t,e){let i=n.segments.slice(0,t),r=0;for(;r<e.length;){let o=e[r];if(ba(o)){let l=Wx(o.outlets);return new xt(i,l)}if(r===0&&ac(e[0])){let l=n.segments[t];i.push(new ao(l.path,mv(e[0]))),r++;continue}let s=ba(o)?o.outlets[qe]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&ac(a)?(i.push(new ao(s,mv(a))),r+=2):(i.push(new ao(s,{})),r++)}return new xt(i,{})}function Wx(n){let t={};return Object.entries(n).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(t[e]=Rh(new xt([],{}),0,i))}),t}function mv(n){let t={};return Object.entries(n).forEach(([e,i])=>t[e]=`${i}`),t}function gv(n,t,e){return n==e.path&&Oi(t,e.parameters)}var va="imperative",cn=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(cn||{}),ai=class{id;url;constructor(t,e){this.id=t,this.url=e}},ls=class extends ai{type=cn.NavigationStart;navigationTrigger;restoredState;constructor(t,e,i="imperative",r=null){super(t,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Si=class extends ai{urlAfterRedirects;type=cn.NavigationEnd;constructor(t,e,i){super(t,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Xn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Xn||{}),cc=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(cc||{}),Qi=class extends ai{reason;code;type=cn.NavigationCancel;constructor(t,e,i,r){super(t,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Sr=class extends ai{reason;code;type=cn.NavigationSkipped;constructor(t,e,i,r){super(t,e),this.reason=i,this.code=r}},Aa=class extends ai{error;target;type=cn.NavigationError;constructor(t,e,i,r){super(t,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},dc=class extends ai{urlAfterRedirects;state;type=cn.RoutesRecognized;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ih=class extends ai{urlAfterRedirects;state;type=cn.GuardsCheckStart;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dh=class extends ai{urlAfterRedirects;state;shouldActivate;type=cn.GuardsCheckEnd;constructor(t,e,i,r,o){super(t,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ph=class extends ai{urlAfterRedirects;state;type=cn.ResolveStart;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lh=class extends ai{urlAfterRedirects;state;type=cn.ResolveEnd;constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},kh=class{route;type=cn.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Oh=class{route;type=cn.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Nh=class{snapshot;type=cn.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fh=class{snapshot;type=cn.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bh=class{snapshot;type=cn.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Uh=class{snapshot;type=cn.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},uc=class{routerEvent;position;anchor;type=cn.Scroll;constructor(t,e,i){this.routerEvent=t,this.position=e,this.anchor=i}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},_a=class{},cs=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function Gx(n,t){return n.providers&&!n._injector&&(n._injector=Hu(n.providers,t,`Route: ${n.path}`)),n._injector??t}function xi(n){return n.outlet||qe}function qx(n,t){let e=n.filter(i=>xi(i)===t);return e.push(...n.filter(i=>xi(i)!==t)),e}function Ra(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let t=n.parent;t;t=t.parent){let e=t.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Vh=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Ra(this.route?.snapshot)??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new Ia(this.rootInjector)}},Ia=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Vh(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||n)(Qe(eo))};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),hc=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=zh(t,this._root);return e?e.children.map(i=>i.value):[]}firstChild(t){let e=zh(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=Hh(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return Hh(t,this._root).map(e=>e.value)}};function zh(n,t){if(n===t.value)return t;for(let e of t.children){let i=zh(n,e);if(i)return i}return null}function Hh(n,t){if(n===t.value)return[t];for(let e of t.children){let i=Hh(n,e);if(i.length)return i.unshift(t),i}return[]}var qn=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function ns(n){let t={};return n&&n.children.forEach(e=>t[e.value.outlet]=e),t}var pc=class extends hc{snapshot;constructor(t,e){super(t),this.snapshot=e,Jh(this,t)}toString(){return this.snapshot.toString()}};function Fv(n){let t=Xx(n),e=new ei([new ao("",{})]),i=new ei({}),r=new ei({}),o=new ei({}),s=new ei(""),a=new wr(e,i,o,s,r,qe,n,t.root);return a.snapshot=t.root,new pc(new qn(a,[]),t)}function Xx(n){let t={},e={},i={},r="",o=new rs([],t,i,r,e,qe,n,null,{});return new mc("",new qn(o,[]))}var wr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,i,r,o,s,a,l){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(dt(c=>c[Ta]))??Pe(void 0),this.url=t,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(dt(t=>ss(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(dt(t=>ss(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function fc(n,t,e="emptyOnly"){let i,{routeConfig:r}=n;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?i={params:te(te({},t.params),n.params),data:te(te({},t.data),n.data),resolve:te(te(te(te({},n.data),t.data),r?.data),n._resolvedData)}:i={params:te({},n.params),data:te({},n.data),resolve:te(te({},n.data),n._resolvedData??{})},r&&Uv(r)&&(i.resolve[Ta]=r.title),i}var rs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ta]}constructor(t,e,i,r,o,s,a,l,c){this.url=t,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ss(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ss(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},mc=class extends hc{url;constructor(t,e){super(e),this.url=t,Jh(this,e)}toString(){return Bv(this._root)}};function Jh(n,t){t.value._routerState=n,t.children.forEach(e=>Jh(n,e))}function Bv(n){let t=n.children.length>0?` { ${n.children.map(Bv).join(", ")} } `:"";return`${n.value}${t}`}function Sh(n){if(n.snapshot){let t=n.snapshot,e=n._futureSnapshot;n.snapshot=e,Oi(t.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),Oi(t.params,e.params)||n.paramsSubject.next(e.params),bx(t.url,e.url)||n.urlSubject.next(e.url),Oi(t.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Wh(n,t){let e=Oi(n.params,t.params)&&Sx(n.url,t.url),i=!n.parent!=!t.parent;return e&&!i&&(!n.parent||Wh(n.parent,t.parent))}function Uv(n){return typeof n.title=="string"||n.title===null}var jx=new ot(""),Da=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=qe;activateEvents=new Et;deactivateEvents=new Et;attachEvents=new Et;detachEvents=new Et;routerOutletData=Ri(void 0);parentContexts=$(Ia);location=$(Pl);changeDetector=$(gr);inputBinder=$(Ac,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new wt(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new wt(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new wt(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new wt(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Gh(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=gt({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[an]})}return n})(),Gh=class n{route;childContexts;parent;outletData;__ngOutletInjector(t){return new n(this.route,this.childContexts,t,this.outletData)}constructor(t,e,i,r){this.route=t,this.childContexts=e,this.parent=i,this.outletData=r}get(t,e){return t===wr?this.route:t===Ia?this.childContexts:t===jx?this.outletData:this.parent.get(t,e)}},Ac=new ot(""),vv=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=Tl([i.queryParams,i.params,i.data]).pipe(Vn(([o,s,a],l)=>(a=te(te(te({},o),s),a),l===0?Pe(a):Promise.resolve(a)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let s=wm(i.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:a}of s.inputs)e.activatedComponentRef.setInput(a,o[a])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();function Kx(n,t,e){let i=xa(n,t._root,e?e._root:void 0);return new pc(i,t)}function xa(n,t,e){if(e&&n.shouldReuseRoute(t.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=t.value;let r=Zx(n,t,e);return new qn(i,r)}else{if(n.shouldAttach(t.value)){let o=n.retrieve(t.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=t.value,s.children=t.children.map(a=>xa(n,a)),s}}let i=$x(t.value),r=t.children.map(o=>xa(n,o));return new qn(i,r)}}function Zx(n,t,e){return t.children.map(i=>{for(let r of e.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return xa(n,i,r);return xa(n,i)})}function $x(n){return new wr(new ei(n.url),new ei(n.params),new ei(n.queryParams),new ei(n.fragment),new ei(n.data),n.outlet,n.component,n)}var Sa=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},Vv="ngNavigationCancelingError";function gc(n,t){let{redirectTo:e,navigationBehaviorOptions:i}=co(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=zv(!1,Xn.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function zv(n,t){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[Vv]=!0,e.cancellationCode=t,e}function Jx(n){return Hv(n)&&co(n.url)}function Hv(n){return!!n&&n[Vv]}var Yx=(n,t,e,i)=>dt(r=>(new qh(t,r.targetRouterState,r.currentRouterState,e,i).activate(n),r)),qh=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,i,r,o){this.routeReuseStrategy=t,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(t){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,t),Sh(this.futureState.root),this.activateChildRoutes(e,i,t)}deactivateChildRoutes(t,e,i){let r=ns(e);t.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(t,e,i){let r=t.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(t,e,s.children)}else this.deactivateChildRoutes(t,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let i=e.getContext(t.value.outlet),r=i&&t.value.component?i.children:e,o=ns(t);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:s,route:t,contexts:a})}}deactivateRouteAndOutlet(t,e){let i=e.getContext(t.value.outlet),r=i&&t.value.component?i.children:e,o=ns(t);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(t,e,i){let r=ns(e);t.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Uh(o.value.snapshot))}),t.children.length&&this.forwardEvent(new Fh(t.value.snapshot))}activateRoutes(t,e,i){let r=t.value,o=e?e.value:null;if(Sh(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,s.children)}else this.activateChildRoutes(t,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Sh(a.route.value),this.activateChildRoutes(t,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(t,null,s.children)}else this.activateChildRoutes(t,null,i)}},vc=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},os=class{component;route;constructor(t,e){this.component=t,this.route=e}};function Qx(n,t,e){let i=n._root,r=t?t._root:null;return fa(i,r,e,[i.value])}function eS(n){let t=n.routeConfig?n.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:n,guards:t}}function us(n,t){let e=Symbol(),i=t.get(n,e);return i===e?typeof n=="function"&&!Jf(n)?n:t.get(n):i}function fa(n,t,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ns(t);return n.children.forEach(s=>{tS(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>ya(a,e.getContext(s),r)),r}function tS(n,t,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,s=t?t.value:null,a=e?e.getContext(n.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=nS(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new vc(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?fa(n,t,a?a.children:null,i,r):fa(n,t,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new os(a.outlet.component,s))}else s&&ya(t,a,r),r.canActivateChecks.push(new vc(i)),o.component?fa(n,null,a?a.children:null,i,r):fa(n,null,e,i,r);return r}function nS(n,t,e){if(typeof e=="function")return e(n,t);switch(e){case"pathParamsChange":return!lo(n.url,t.url);case"pathParamsOrQueryParamsChange":return!lo(n.url,t.url)||!Oi(n.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Wh(n,t)||!Oi(n.queryParams,t.queryParams);case"paramsChange":default:return!Wh(n,t)}}function ya(n,t,e){let i=ns(n),r=n.value;Object.entries(i).forEach(([o,s])=>{r.component?t?ya(s,t.children.getContext(o),e):ya(s,null,e):ya(s,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new os(t.outlet.component,r)):e.canDeactivateChecks.push(new os(null,r)):e.canDeactivateChecks.push(new os(null,r))}function Pa(n){return typeof n=="function"}function iS(n){return typeof n=="boolean"}function rS(n){return n&&Pa(n.canLoad)}function oS(n){return n&&Pa(n.canActivate)}function sS(n){return n&&Pa(n.canActivateChild)}function aS(n){return n&&Pa(n.canDeactivate)}function lS(n){return n&&Pa(n.canMatch)}function Wv(n){return n instanceof Wf||n?.name==="EmptyError"}var ic=Symbol("INITIAL_VALUE");function ds(){return Vn(n=>Tl(n.map(t=>t.pipe(Oo(1),Zf(ic)))).pipe(dt(t=>{for(let e of t)if(e!==!0){if(e===ic)return ic;if(e===!1||cS(e))return e}return!0}),Xi(t=>t!==ic),Oo(1)))}function cS(n){return co(n)||n instanceof Sa}function dS(n,t){return Un(e=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=e;return s.length===0&&o.length===0?Pe(Tt(te({},e),{guardsResult:!0})):uS(s,i,r,n).pipe(Un(a=>a&&iS(a)?hS(i,o,n,t):Pe(a)),dt(a=>Tt(te({},e),{guardsResult:a})))})}function uS(n,t,e,i){return sn(n).pipe(Un(r=>vS(r.component,r.route,e,t,i)),pr(r=>r!==!0,!0))}function hS(n,t,e,i){return sn(t).pipe(hr(r=>Gf(fS(r.route.parent,i),pS(r.route,i),gS(n,r.path,e),mS(n,r.route,e))),pr(r=>r!==!0,!0))}function pS(n,t){return n!==null&&t&&t(new Bh(n)),Pe(!0)}function fS(n,t){return n!==null&&t&&t(new Nh(n)),Pe(!0)}function mS(n,t,e){let i=t.routeConfig?t.routeConfig.canActivate:null;if(!i||i.length===0)return Pe(!0);let r=i.map(o=>Du(()=>{let s=Ra(t)??e,a=us(o,s),l=oS(a)?a.canActivate(t,n):ti(s,()=>a(t,n));return Mr(l).pipe(pr())}));return Pe(r).pipe(ds())}function gS(n,t,e){let i=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(s=>eS(s)).filter(s=>s!==null).map(s=>Du(()=>{let a=s.guards.map(l=>{let c=Ra(s.node)??e,d=us(l,c),u=sS(d)?d.canActivateChild(i,n):ti(c,()=>d(i,n));return Mr(u).pipe(pr())});return Pe(a).pipe(ds())}));return Pe(o).pipe(ds())}function vS(n,t,e,i,r){let o=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!o||o.length===0)return Pe(!0);let s=o.map(a=>{let l=Ra(t)??r,c=us(a,l),d=aS(c)?c.canDeactivate(n,t,e,i):ti(l,()=>c(n,t,e,i));return Mr(d).pipe(pr())});return Pe(s).pipe(ds())}function yS(n,t,e,i){let r=t.canLoad;if(r===void 0||r.length===0)return Pe(!0);let o=r.map(s=>{let a=us(s,n),l=rS(a)?a.canLoad(t,e):ti(n,()=>a(t,e));return Mr(l)});return Pe(o).pipe(ds(),Gv(i))}function Gv(n){return zf(hn(t=>{if(typeof t!="boolean")throw gc(n,t)}),dt(t=>t===!0))}function bS(n,t,e,i){let r=t.canMatch;if(!r||r.length===0)return Pe(!0);let o=r.map(s=>{let a=us(s,n),l=lS(a)?a.canMatch(t,e):ti(n,()=>a(t,e));return Mr(l)});return Pe(o).pipe(ds(),Gv(i))}var wa=class{segmentGroup;constructor(t){this.segmentGroup=t||null}},Ma=class extends Error{urlTree;constructor(t){super(),this.urlTree=t}};function ts(n){return Gs(new wa(n))}function AS(n){return Gs(new wt(4e3,!1))}function _S(n){return Gs(zv(!1,Xn.GuardRejected))}var Xh=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}lineralizeSegments(t,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Pe(i);if(r.numberOfChildren>1||!r.children[qe])return AS(`${t.redirectTo}`);r=r.children[qe]}}applyRedirectCommands(t,e,i,r,o){if(typeof e!="string"){let a=e,{queryParams:l,fragment:c,routeConfig:d,url:u,outlet:h,params:f,data:g,title:v}=r,m=ti(o,()=>a({params:f,data:g,queryParams:l,fragment:c,routeConfig:d,url:u,outlet:h,title:v}));if(m instanceof er)throw new Ma(m);e=m}let s=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),t,i);if(e[0]==="/")throw new Ma(s);return s}applyRedirectCreateUrlTree(t,e,i,r){let o=this.createSegmentGroup(t,e.root,i,r);return new er(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let i={};return Object.entries(t).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(t,e,i,r){let o=this.createSegments(t,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(t,l,i,r)}),new xt(o,s)}createSegments(t,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(t,o,r):this.findOrReturn(o,i))}findPosParam(t,e,i){let r=i[e.path.substring(1)];if(!r)throw new wt(4001,!1);return r}findOrReturn(t,e){let i=0;for(let r of e){if(r.path===t.path)return e.splice(i),r;i++}return t}},jh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function xS(n,t,e,i,r){let o=qv(n,t,e);return o.matched?(i=Gx(t,i),bS(i,t,e,r).pipe(dt(s=>s===!0?o:te({},jh)))):Pe(o)}function qv(n,t,e){if(t.path==="**")return SS(e);if(t.path==="")return t.pathMatch==="full"&&(n.hasChildren()||e.length>0)?te({},jh):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||yx)(e,n,t);if(!r)return te({},jh);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?te(te({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function SS(n){return{matched:!0,parameters:n.length>0?wv(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function yv(n,t,e,i){return e.length>0&&CS(n,e,i)?{segmentGroup:new xt(t,MS(i,new xt(e,n.children))),slicedSegments:[]}:e.length===0&&TS(n,e,i)?{segmentGroup:new xt(n.segments,wS(n,e,i,n.children)),slicedSegments:e}:{segmentGroup:new xt(n.segments,n.children),slicedSegments:e}}function wS(n,t,e,i){let r={};for(let o of e)if(_c(n,t,o)&&!i[xi(o)]){let s=new xt([],{});r[xi(o)]=s}return te(te({},i),r)}function MS(n,t){let e={};e[qe]=t;for(let i of n)if(i.path===""&&xi(i)!==qe){let r=new xt([],{});e[xi(i)]=r}return e}function CS(n,t,e){return e.some(i=>_c(n,t,i)&&xi(i)!==qe)}function TS(n,t,e){return e.some(i=>_c(n,t,i))}function _c(n,t,e){return(n.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function ES(n,t,e){return t.length===0&&!n.children[e]}var Kh=class{};function RS(n,t,e,i,r,o,s="emptyOnly"){return new Zh(n,t,e,i,r,s,o).recognize()}var IS=31,Zh=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,i,r,o,s,a){this.injector=t,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new Xh(this.urlSerializer,this.urlTree)}noMatchError(t){return new wt(4002,`'${t.segmentGroup}'`)}recognize(){let t=yv(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(dt(({children:e,rootSnapshot:i})=>{let r=new qn(i,e),o=new mc("",r),s=Fx(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}))}match(t){let e=new rs([],Object.freeze({}),Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),qe,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,t,qe,e).pipe(dt(i=>({children:i,rootSnapshot:e})),ko(i=>{if(i instanceof Ma)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof wa?this.noMatchError(i):i}))}processSegmentGroup(t,e,i,r,o){return i.segments.length===0&&i.hasChildren()?this.processChildren(t,e,i,o):this.processSegment(t,e,i,i.segments,r,!0,o).pipe(dt(s=>s instanceof qn?[s]:[]))}processChildren(t,e,i,r){let o=[];for(let s of Object.keys(i.children))s==="primary"?o.unshift(s):o.push(s);return sn(o).pipe(hr(s=>{let a=i.children[s],l=qx(e,s);return this.processSegmentGroup(t,l,a,s,r)}),Kf((s,a)=>(s.push(...a),s)),Pu(null),jf(),Un(s=>{if(s===null)return ts(i);let a=Xv(s);return DS(a),Pe(a)}))}processSegment(t,e,i,r,o,s,a){return sn(e).pipe(hr(l=>this.processSegmentAgainstRoute(l._injector??t,e,l,i,r,o,s,a).pipe(ko(c=>{if(c instanceof wa)return Pe(null);throw c}))),pr(l=>!!l),ko(l=>{if(Wv(l))return ES(i,r,o)?Pe(new Kh):ts(i);throw l}))}processSegmentAgainstRoute(t,e,i,r,o,s,a,l){return xi(i)!==s&&(s===qe||!_c(r,o,i))?ts(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(t,r,i,o,s,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,r,e,i,o,s,l):ts(r)}expandSegmentAgainstRouteUsingRedirect(t,e,i,r,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:u,remainingSegments:h}=qv(e,r,o);if(!l)return ts(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>IS&&(this.allowRedirects=!1));let f=new rs(o,c,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,bv(r),xi(r),r.component??r._loadedComponent??null,r,Av(r)),g=fc(f,a,this.paramsInheritanceStrategy);f.params=Object.freeze(g.params),f.data=Object.freeze(g.data);let v=this.applyRedirects.applyRedirectCommands(d,r.redirectTo,u,f,t);return this.applyRedirects.lineralizeSegments(r,v).pipe(Un(m=>this.processSegment(t,i,e,m.concat(h),s,!1,a)))}matchSegmentAgainstRoute(t,e,i,r,o,s){let a=xS(e,i,r,t,this.urlSerializer);return i.path==="**"&&(e.children={}),a.pipe(Vn(l=>l.matched?(t=i._injector??t,this.getChildConfig(t,i,r).pipe(Vn(({routes:c})=>{let d=i._loadedInjector??t,{parameters:u,consumedSegments:h,remainingSegments:f}=l,g=new rs(h,u,Object.freeze(te({},this.urlTree.queryParams)),this.urlTree.fragment,bv(i),xi(i),i.component??i._loadedComponent??null,i,Av(i)),v=fc(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(v.params),g.data=Object.freeze(v.data);let{segmentGroup:m,slicedSegments:p}=yv(e,h,f,c);if(p.length===0&&m.hasChildren())return this.processChildren(d,c,m,g).pipe(dt(w=>new qn(g,w)));if(c.length===0&&p.length===0)return Pe(new qn(g,[]));let M=xi(i)===o;return this.processSegment(d,c,m,p,M?qe:o,!0,g).pipe(dt(w=>new qn(g,w instanceof qn?[w]:[])))}))):ts(e)))}getChildConfig(t,e,i){return e.children?Pe({routes:e.children,injector:t}):e.loadChildren?e._loadedRoutes!==void 0?Pe({routes:e._loadedRoutes,injector:e._loadedInjector}):yS(t,e,i,this.urlSerializer).pipe(Un(r=>r?this.configLoader.loadChildren(t,e).pipe(hn(o=>{e._loadedRoutes=o.routes,e._loadedInjector=o.injector})):_S(e))):Pe({routes:[],injector:t})}};function DS(n){n.sort((t,e)=>t.value.outlet===qe?-1:e.value.outlet===qe?1:t.value.outlet.localeCompare(e.value.outlet))}function PS(n){let t=n.value.routeConfig;return t&&t.path===""}function Xv(n){let t=[],e=new Set;for(let i of n){if(!PS(i)){t.push(i);continue}let r=t.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):t.push(i)}for(let i of e){let r=Xv(i.children);t.push(new qn(i.value,r))}return t.filter(i=>!e.has(i))}function bv(n){return n.data||{}}function Av(n){return n.resolve||{}}function LS(n,t,e,i,r,o){return Un(s=>RS(n,t,e,i,s.extractedUrl,r,o).pipe(dt(({state:a,tree:l})=>Tt(te({},s),{targetSnapshot:a,urlAfterRedirects:l}))))}function kS(n,t){return Un(e=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=e;if(!r.length)return Pe(e);let o=new Set(r.map(l=>l.route)),s=new Set;for(let l of o)if(!s.has(l))for(let c of jv(l))s.add(c);let a=0;return sn(s).pipe(hr(l=>o.has(l)?OS(l,i,n,t):(l.data=fc(l,l.parent,n).resolve,Pe(void 0))),hn(()=>a++),Lu(1),Un(l=>a===s.size?Pe(e):ur))})}function jv(n){let t=n.children.map(e=>jv(e)).flat();return[n,...t]}function OS(n,t,e,i){let r=n.routeConfig,o=n._resolve;return r?.title!==void 0&&!Uv(r)&&(o[Ta]=r.title),NS(o,n,t,i).pipe(dt(s=>(n._resolvedData=s,n.data=fc(n,n.parent,e).resolve,null)))}function NS(n,t,e,i){let r=Ch(n);if(r.length===0)return Pe({});let o={};return sn(r).pipe(Un(s=>FS(n[s],t,e,i).pipe(pr(),hn(a=>{if(a instanceof Sa)throw gc(new as,a);o[s]=a}))),Lu(1),Xf(o),ko(s=>Wv(s)?ur:Gs(s)))}function FS(n,t,e,i){let r=Ra(t)??i,o=us(n,r),s=o.resolve?o.resolve(t,e):ti(r,()=>o(t,e));return Mr(s)}function wh(n){return Vn(t=>{let e=n(t);return e?sn(e).pipe(dt(()=>t)):Pe(t)})}var Kv=(()=>{class n{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===qe);return i}getResolvedTitleForRoute(e){return e.data[Ta]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:()=>$(BS),providedIn:"root"})}return n})(),BS=(()=>{class n extends Kv{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(Qe(eg))};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),La=new ot("",{providedIn:"root",factory:()=>({})}),US=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=st({type:n,selectors:[["ng-component"]],decls:1,vars:0,template:function(i,r){i&1&&Je(0,"router-outlet")},dependencies:[Da],encapsulation:2})}return n})();function Yh(n){let t=n.children&&n.children.map(Yh),e=t?Tt(te({},n),{children:t}):te({},n);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==qe&&(e.component=US),e}var Ca=new ot(""),Qh=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=$(Bl);loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Pe(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let i=Mr(e.loadComponent()).pipe(dt(Zv),hn(o=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=o}),No(()=>{this.componentLoaders.delete(e)})),r=new Iu(i,()=>new Ln).pipe(Ru());return this.componentLoaders.set(e,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Pe({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let o=VS(i,this.compiler,e,this.onLoadEndListener).pipe(No(()=>{this.childrenLoaders.delete(i)})),s=new Iu(o,()=>new Ln).pipe(Ru());return this.childrenLoaders.set(i,s),s}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function VS(n,t,e,i){return Mr(n.loadChildren()).pipe(dt(Zv),Un(r=>r instanceof mm||Array.isArray(r)?Pe(r):sn(t.compileModuleAsync(r))),dt(r=>{i&&i(n);let o,s,a=!1;return Array.isArray(r)?(s=r,a=!0):(o=r.create(e).injector,s=o.get(Ca,[],{optional:!0,self:!0}).flat()),{routes:s.map(Yh),injector:o}}))}function zS(n){return n&&typeof n=="object"&&"default"in n}function Zv(n){return zS(n)?n.default:n}var ep=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:()=>$(HS),providedIn:"root"})}return n})(),HS=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),$v=new ot(""),Jv=new ot("");function WS(n,t,e){let i=n.get(Jv),r=n.get(Ht);return n.get(vn).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,s=new Promise(c=>{o=c}),a=r.startViewTransition(()=>(o(),GS(n))),{onViewTransitionCreated:l}=i;return l&&ti(n,()=>l({transition:a,from:t,to:e})),s})}function GS(n){return new Promise(t=>{om({read:()=>setTimeout(t)},{injector:n})})}var Yv=new ot(""),tp=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Ln;transitionAbortSubject=new Ln;configLoader=$(Qh);environmentInjector=$(eo);urlSerializer=$(Ea);rootContexts=$(Ia);location=$(ta);inputBindingEnabled=$(Ac,{optional:!0})!==null;titleStrategy=$(Kv);options=$(La,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=$(ep);createViewTransition=$($v,{optional:!0});navigationErrorHandler=$(Yv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Pe(void 0);rootComponentType=null;constructor(){let e=r=>this.events.next(new kh(r)),i=r=>this.events.next(new Oh(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;this.transitions?.next(Tt(te(te({},this.transitions.value),e),{id:i}))}setupNavigations(e,i,r){return this.transitions=new ei({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:va,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Xi(o=>o.id!==0),dt(o=>Tt(te({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),Vn(o=>{let s=!1,a=!1;return Pe(o).pipe(Vn(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",Xn.SupersededByNewNavigation),ur;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Tt(te({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload"){let u="";return this.events.next(new Sr(l.id,this.urlSerializer.serialize(l.rawUrl),u,cc.IgnoredSameUrlNavigation)),l.resolve(!1),ur}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Pe(l).pipe(Vn(u=>{let h=this.transitions?.getValue();return this.events.next(new ls(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),h!==this.transitions?.getValue()?ur:Promise.resolve(u)}),LS(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),hn(u=>{o.targetSnapshot=u.targetSnapshot,o.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation=Tt(te({},this.currentNavigation),{finalUrl:u.urlAfterRedirects});let h=new dc(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(h)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:u,extractedUrl:h,source:f,restoredState:g,extras:v}=l,m=new ls(u,this.urlSerializer.serialize(h),f,g);this.events.next(m);let p=Fv(this.rootComponentType).snapshot;return this.currentTransition=o=Tt(te({},l),{targetSnapshot:p,urlAfterRedirects:h,extras:Tt(te({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,Pe(o)}else{let u="";return this.events.next(new Sr(l.id,this.urlSerializer.serialize(l.extractedUrl),u,cc.IgnoredByUrlHandlingStrategy)),l.resolve(!1),ur}}),hn(l=>{let c=new Ih(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),dt(l=>(this.currentTransition=o=Tt(te({},l),{guards:Qx(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),dS(this.environmentInjector,l=>this.events.next(l)),hn(l=>{if(o.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw gc(this.urlSerializer,l.guardsResult);let c=new Dh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),Xi(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Xn.GuardRejected),!1)),wh(l=>{if(l.guards.canActivateChecks.length)return Pe(l).pipe(hn(c=>{let d=new Ph(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}),Vn(c=>{let d=!1;return Pe(c).pipe(kS(this.paramsInheritanceStrategy,this.environmentInjector),hn({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(c,"",Xn.NoDataFromResolver)}}))}),hn(c=>{let d=new Lh(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(d)}))}),wh(l=>{let c=d=>{let u=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&u.push(this.configLoader.loadComponent(d.routeConfig).pipe(hn(h=>{d.component=h}),dt(()=>{})));for(let h of d.children)u.push(...c(h));return u};return Tl(c(l.targetSnapshot.root)).pipe(Pu(null),Oo(1))}),wh(()=>this.afterPreactivation()),Vn(()=>{let{currentSnapshot:l,targetSnapshot:c}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return d?sn(d).pipe(dt(()=>o)):Pe(o)}),dt(l=>{let c=Kx(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=Tt(te({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,o}),hn(()=>{this.events.next(new _a)}),Yx(this.rootContexts,e.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Oo(1),hn({next:l=>{s=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Si(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{s=!0}}),$f(this.transitionAbortSubject.pipe(hn(l=>{throw l}))),No(()=>{!s&&!a&&this.cancelNavigationTransition(o,"",Xn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),ko(l=>{if(a=!0,Hv(l))this.events.next(new Qi(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),Jx(l)?this.events.next(new cs(l.url,l.navigationBehaviorOptions)):o.resolve(!1);else{let c=new Aa(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0);try{let d=ti(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Sa){let{message:u,cancellationCode:h}=gc(this.urlSerializer,d);this.events.next(new Qi(o.id,this.urlSerializer.serialize(o.extractedUrl),u,h)),this.events.next(new cs(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(d){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(d)}}return ur}))}))}cancelNavigationTransition(e,i,r){let o=new Qi(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return e.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qS(n){return n!==va}var XS=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:()=>$(jS),providedIn:"root"})}return n})(),$h=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}},jS=(()=>{class n extends $h{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qv=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:()=>$(KS),providedIn:"root"})}return n})(),KS=(()=>{class n extends Qv{location=$(ta);urlSerializer=$(Ea);options=$(La,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=$(ep);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new er;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=Fv(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&e(i.url,i.state)})}handleRouterEvent(e,i){if(e instanceof ls)this.stateMemento=this.createStateMemento();else if(e instanceof Sr)this.rawUrlTree=i.initialUrl;else if(e instanceof dc){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else e instanceof _a?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):e instanceof Qi&&(e.code===Xn.GuardRejected||e.code===Xn.NoDataFromResolver)?this.restoreHistory(i):e instanceof Aa?this.restoreHistory(i,!0):e instanceof Si&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let r=e instanceof er?this.urlSerializer.serialize(e):e;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let o=this.browserPageId,s=te(te({},i.extras.state),this.generateNgRouterState(i.id,o));this.location.replaceState(r,"",s)}else{let o=te(te({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",o)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.currentUrlTree===e.finalUrl&&o===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ma=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(ma||{});function ey(n,t){n.events.pipe(Xi(e=>e instanceof Si||e instanceof Qi||e instanceof Aa||e instanceof Sr),dt(e=>e instanceof Si||e instanceof Sr?ma.COMPLETE:(e instanceof Qi?e.code===Xn.Redirect||e.code===Xn.SupersededByNewNavigation:!1)?ma.REDIRECTING:ma.FAILED),Xi(e=>e!==ma.REDIRECTING),Oo(1)).subscribe(()=>{t()})}var ZS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},$S={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},On=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=$(Ll);stateManager=$(Qv);options=$(La,{optional:!0})||{};pendingTasks=$(El);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=$(tp);urlSerializer=$(Ea);location=$(ta);urlHandlingStrategy=$(ep);_events=new Ln;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=$(XS);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=$(Ca,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!$(Ac,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Vf;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Qi&&i.code!==Xn.Redirect&&i.code!==Xn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Si)this.navigated=!0;else if(i instanceof cs){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=te({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||qS(r.source)},s);this.scheduleNavigation(a,va,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}YS(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),va,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",i)},0)})}navigateToSyncWithBrowser(e,i,r){let o={replaceUrl:!0},s=r?.navigationId?r:null;if(r){let l=te({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(e);this.scheduleNavigation(a,i,s,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Yh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=te(te({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{let h=r?r.snapshot:this.routerState.snapshot.root;u=Lv(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),u=this.currentUrlTree.root}return kv(u,e,d,c??null)}navigateByUrl(e,i={skipLocationChange:!1}){let r=co(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,va,null,i)}navigate(e,i={skipLocationChange:!1}){return JS(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=te({},ZS):i===!1?r=te({},$S):r=i,co(e))return pv(this.currentUrlTree,e,r);let o=this.parseUrl(e);return pv(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((u,h)=>{a=u,l=h});let d=this.pendingTasks.add();return ey(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(u=>Promise.reject(u))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function JS(n){for(let t=0;t<n.length;t++)if(n[t]==null)throw new wt(4008,!1)}function YS(n){return!(n instanceof _a)&&!(n instanceof cs)}var yc=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new Ln;constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=e.events.subscribe(c=>{c instanceof Si&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(e){e==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(co(e)?this.routerLinkInput=e:this.routerLinkInput=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,s){let a=this.urlTree;if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let e=this.urlTree;this.href=e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)):null;let i=this.href===null?null:pm(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}get urlTree(){return this.routerLinkInput===null?null:co(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(i){return new(i||n)(ke(On),ke(wr),em("tabindex"),ke(Ii),ke(ni),ke(ea))};static \u0275dir=gt({type:n,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(i,r){i&1&&nt("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&Fe("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Be],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Be],replaceUrl:[2,"replaceUrl","replaceUrl",Be],routerLink:"routerLink"},features:[fn,an]})}return n})(),ty=(()=>{class n{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Et;constructor(e,i,r,o,s){this.router=e,this.element=i,this.renderer=r,this.cdr=o,this.link=s,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof Si&&this.update()})}ngAfterContentInit(){Pe(this.links.changes,Pe(null)).pipe(qs()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=sn(e).pipe(qs()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){let i=Array.isArray(e)?e:e.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=QS(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let o=r.urlTree;return o?e.isActive(o,i):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(i){return new(i||n)(ke(On),ke(ni),ke(Ii),ke(gr),ke(yc,8))};static \u0275dir=gt({type:n,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&Rt(o,yc,5),i&2){let s;ut(s=ht())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[an]})}return n})();function QS(n){return!!n.paths}var bc=class{};var ew=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o,s){this.router=e,this.injector=r,this.preloadingStrategy=o,this.loader=s}setUpPreloading(){this.subscription=this.router.events.pipe(Xi(e=>e instanceof Si),hr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Hu(o.providers,e,`Route: ${o.path}`));let s=o._injector??e,a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return sn(r).pipe(qs())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{let r;i.loadChildren&&i.canLoad===void 0?r=this.loader.loadChildren(e,i):r=Pe(null);let o=r.pipe(Un(s=>s===null?Pe(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent){let s=this.loader.loadComponent(i);return sn([o,s]).pipe(qs())}else return o})}static \u0275fac=function(i){return new(i||n)(Qe(On),Qe(Bl),Qe(eo),Qe(bc),Qe(Qh))};static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ny=new ot(""),tw=(()=>{class n{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(e,i,r,o,s={}){this.urlSerializer=e,this.transitions=i,this.viewportScroller=r,this.zone=o,this.options=s,s.scrollPositionRestoration||="disabled",s.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof ls?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Si?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Sr&&e.code===cc.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof uc&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,i){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new uc(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Rl()};static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();function iy(n,...t){return ji([{provide:Ca,multi:!0,useValue:n},[],{provide:wr,useFactory:ry,deps:[On]},{provide:Ol,multi:!0,useFactory:oy},t.map(e=>e.\u0275providers)])}function ry(n){return n.routerState.root}function ka(n,t){return{\u0275kind:n,\u0275providers:t}}function oy(){let n=$(Bo);return t=>{let e=n.get(Nl);if(t!==e.components[0])return;let i=n.get(On),r=n.get(sy);n.get(np)===1&&i.initialNavigation(),n.get(ay,null,ku.Optional)?.setUpPreloading(),n.get(ny,null,ku.Optional)?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var sy=new ot("",{factory:()=>new Ln}),np=new ot("",{providedIn:"root",factory:()=>1});function nw(){return ka(2,[{provide:np,useValue:0},{provide:Wu,multi:!0,deps:[Bo],useFactory:t=>{let e=t.get(Tm,Promise.resolve());return()=>e.then(()=>new Promise(i=>{let r=t.get(On),o=t.get(sy);ey(r,()=>{i(!0)}),t.get(tp).afterPreactivation=()=>(i(!0),o.closed?Pe(void 0):o),r.initialNavigation()}))}}])}function iw(){return ka(3,[{provide:Wu,multi:!0,useFactory:()=>{let t=$(On);return()=>{t.setUpLocationChangeListener()}}},{provide:np,useValue:2}])}var ay=new ot("");function rw(n){return ka(0,[{provide:ay,useExisting:ew},{provide:bc,useExisting:n}])}function ow(){return ka(8,[vv,{provide:Ac,useExisting:vv}])}function sw(n){let t=[{provide:$v,useValue:WS},{provide:Jv,useValue:te({skipNextTransition:!!n?.skipInitialTransition},n)}];return ka(9,t)}var _v=new ot("ROUTER_FORROOT_GUARD"),aw=[ta,{provide:Ea,useClass:as},On,Ia,{provide:wr,useFactory:ry,deps:[On]},Qh,[]],Oa=(()=>{class n{constructor(e){}static forRoot(e,i){return{ngModule:n,providers:[aw,[],{provide:Ca,multi:!0,useValue:e},{provide:_v,useFactory:uw,deps:[[On,new Ou,new Yf]]},i?.errorHandler?{provide:Yv,useValue:i.errorHandler}:[],{provide:La,useValue:i||{}},i?.useHash?cw():dw(),lw(),i?.preloadingStrategy?rw(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?hw(i):[],i?.bindToComponentInputs?ow().\u0275providers:[],i?.enableViewTransitions?sw().\u0275providers:[],pw()]}}static forChild(e){return{ngModule:n,providers:[{provide:Ca,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||n)(Qe(_v,8))};static \u0275mod=Ft({type:n});static \u0275inj=Nt({})}return n})();function lw(){return{provide:ny,useFactory:()=>{let n=$(Pm),t=$(vn),e=$(La),i=$(tp),r=$(Ea);return e.scrollOffset&&n.setOffset(e.scrollOffset),new tw(r,i,n,t,e)}}}function cw(){return{provide:ea,useClass:Rm}}function dw(){return{provide:ea,useClass:Em}}function uw(n){return"guarded"}function hw(n){return[n.initialNavigation==="disabled"?iw().\u0275providers:[],n.initialNavigation==="enabledBlocking"?nw().\u0275providers:[]]}var xv=new ot("");function pw(){return[{provide:xv,useFactory:oy},{provide:Ol,multi:!0,useExisting:xv}]}var cy=(()=>{class n extends Wt{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qt=(()=>{class n{document=$(Ht);platformId=$(en);el=$(ni);injector=$(Bo);cd=$(gr);renderer=$(Ii);config=$(Ah);baseComponentStyle=$(cy);baseStyle=$(Wt);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=bi("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",r={}){return Jl(e,i,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!jo(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{es.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),es.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!es.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),es.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!kt.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,te({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,te({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,te({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(te({name:"global-style"},this.styleOptions),o),kt.setLoadedStyleName("common")}if(!kt.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,te({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(te({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),kt.setLoadedStyleName(this.componentStyle?.name)}if(!kt.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,te({name:"layer-order",first:!0},this.styleOptions)),kt.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(i,te({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){es.clearLoadedStyleNames(),si.on("theme:change",e)}cx(e,i){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:te({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||n)};static \u0275dir=gt({type:n,inputs:{dt:"dt"},features:[Mt([cy,Wt]),an]})}return n})();var ip=(()=>{class n{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let r=i.trim().split(" ");for(let o=0;o<r.length;o++)e.classList.add(r[o])}else{let r=i.split(" ");for(let o=0;o<r.length;o++)e.className+=" "+r[o]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,r=0;for(var o=0;o<i.length;o++){if(i[o]==e)return r;i[o].nodeType==1&&r++}return-1}static indexWithinGroup(e,i){let r=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==e)return o;r[s].attributes&&r[s].attributes[i]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(e,i,r="self"){r!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,r="self",o=!0){e&&i&&(o&&(e.style.minWidth=`${n.getOuterWidth(i)}px`),r==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,r=!0){let o=M=>{if(M)return getComputedStyle(M).getPropertyValue("position")==="relative"?M:o(M.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=i.offsetHeight,l=i.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),u=this.getViewport(),f=o(e)?.getBoundingClientRect()||{top:-1*c,left:-1*d},g,v;l.top+a+s.height>u.height?(g=l.top-f.top-s.height,e.style.transformOrigin="bottom",l.top+g<0&&(g=-1*l.top)):(g=a+l.top-f.top,e.style.transformOrigin="top");let m=l.left+s.width-u.width,p=l.left-f.left;s.width>u.width?v=(l.left-f.left)*-1:m>0?v=p-m:v=l.left-f.left,e.style.top=g+"px",e.style.left=v+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,r=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,a=o.width,l=i.offsetHeight,c=i.offsetWidth,d=i.getBoundingClientRect(),u=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),f=this.getViewport(),g,v;d.top+l+s>f.height?(g=d.top+u-s,e.style.transformOrigin="bottom",g<0&&(g=u)):(g=l+d.top+u,e.style.transformOrigin="top"),d.left+a>f.width?v=Math.max(0,d.left+h+c-a):v=d.left+h,e.style.top=g+"px",e.style.left=v+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let r=this.getParents(e),o=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return o.test(l.getPropertyValue("overflow"))||o.test(l.getPropertyValue("overflowX"))||o.test(l.getPropertyValue("overflowY"))};for(let a of r){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let d of c){let u=this.findSingle(a,d);u&&s(u)&&i.push(u)}}a.nodeType!==9&&s(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),d=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-o-a,u=e.scrollTop,h=e.clientHeight,f=this.getOuterHeight(i);d<0?e.scrollTop=u+d:d+f>h&&(e.scrollTop=u+d-h+f)}static fadeIn(e,i){e.style.opacity=0;let r=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/i,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,i){var r=1,o=50,s=i,a=o/s;let l=setInterval(()=>{r=r-a,r<=0&&(r=0,clearInterval(l)),e.style.opacity=r},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,i)}static getOuterWidth(e,i){let r=e.offsetWidth;if(i){let o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,r=getComputedStyle(e);return i+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),i}static width(e){let i=e.offsetWidth,r=getComputedStyle(e);return i-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,r=getComputedStyle(e);return i+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),i}static getOuterHeight(e,i){let r=e.offsetHeight;if(i){let o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(e){let i=e.offsetHeight,r=getComputedStyle(e);return i-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,r=getComputedStyle(e);return i-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),i}static getViewport(){let e=window,i=document,r=i.documentElement,o=i.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||o.clientWidth,a=e.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:a}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var r=e.indexOf("Trident/");if(r>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let r=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,r){e[i].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let r=this.find(e,this.getFocusableSelectorString(i)),o=[];for(let s of r){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,i=""){let r=this.findSingle(e,this.getFocusableSelectorString(i));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,i=""){let r=this.getFocusableElements(e,i);return r.length>0?r[0]:null}static getLastFocusableElement(e,i){let r=this.getFocusableElements(e,i);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,i=!1){let r=n.getFocusableElements(e),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);i?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let r=e.getAttribute(i);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...r){if(e){let o=document.createElement(e);return this.setAttributes(o,i),o.append(...r),o}}static setAttribute(e,i="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(i,r)}static setAttributes(e,i={}){if(this.isElement(e)){let r=(o,s)=>{let a=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?r(o,c):Object.entries(c).map(([h,f])=>o==="style"&&(f||f===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?h:void 0);l=u.length?l.concat(u.filter(h=>!!h)):l}}return l},a)};Object.entries(i).forEach(([o,s])=>{if(s!=null){let a=o.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return n})(),hs=class{element;listener;scrollableParents;constructor(t,e=()=>{}){this.element=t,this.listener=e}bindScrollListener(){this.scrollableParents=ip.getScrollableParents(this.element);for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var dy=(()=>{class n extends qt{autofocus=!1;_autofocus=!1;focused=!1;platformId=$(en);document=$(Ht);host=$(ni);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){_n(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=ip.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=gt({type:n,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",Be],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[fn,$e]})}return n})();var fw=({dt:n})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${n("badge.border.radius")};
    justify-content: center;
    padding: ${n("badge.padding")};
    background: ${n("badge.primary.background")};
    color: ${n("badge.primary.color")};
    font-size: ${n("badge.font.size")};
    font-weight: ${n("badge.font.weight")};
    min-width: ${n("badge.min.width")};
    height: ${n("badge.height")};
    line-height: ${n("badge.height")};
}

.p-badge-dot {
    width: ${n("badge.dot.size")};
    min-width: ${n("badge.dot.size")};
    height: ${n("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${n("badge.secondary.background")};
    color: ${n("badge.secondary.color")};
}

.p-badge-success {
    background: ${n("badge.success.background")};
    color: ${n("badge.success.color")};
}

.p-badge-info {
    background: ${n("badge.info.background")};
    color: ${n("badge.info.color")};
}

.p-badge-warn {
    background: ${n("badge.warn.background")};
    color: ${n("badge.warn.color")};
}

.p-badge-danger {
    background: ${n("badge.danger.background")};
    color: ${n("badge.danger.color")};
}

.p-badge-contrast {
    background: ${n("badge.contrast.background")};
    color: ${n("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${n("badge.sm.font.size")};
    min-width: ${n("badge.sm.min.width")};
    height: ${n("badge.sm.height")};
    line-height: ${n("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${n("badge.lg.font.size")};
    min-width: ${n("badge.lg.min.width")};
    height: ${n("badge.lg.height")};
    line-height: ${n("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${n("badge.xl.font.size")};
    min-width: ${n("badge.xl.min.width")};
    height: ${n("badge.xl.height")};
    line-height: ${n("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,mw={root:({props:n,instance:t})=>["p-badge p-component",{"p-badge-circle":Bt(n.value)&&String(n.value).length===1,"p-badge-dot":En(n.value)&&!t.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]},uy=(()=>{class n extends Wt{name="badge";theme=fw;classes=mw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var Na=(()=>{class n extends qt{styleClass=Ri();style=Ri();badgeSize=Ri();size=Ri();severity=Ri();value=Ri();badgeDisabled=Ri(!1,{transform:Be});_componentStyle=$(uy);containerClass=ii(()=>{let e="p-badge p-component";return Bt(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),En(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,r){i&2&&(mr(r.style()),zt(r.containerClass()),Fl("display",r.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Mt([uy]),$e],decls:1,vars:1,template:function(i,r){i&1&&pt(0),i&2&&An(r.value())},dependencies:[$t,Ut],encapsulation:2,changeDetection:0})}return n})(),Fa=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({imports:[Na,Ut,Ut]})}return n})();var gw=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,vw=(()=>{class n extends Wt{name="baseicon";inlineStyles=gw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var yw=["*"],ps=(()=>{class n extends qt{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=En(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",Be],styleClass:"styleClass"},features:[Mt([vw]),fn,$e],ngContentSelectors:yw,decls:1,vars:0,template:function(i,r){i&1&&(zn(),Tn(0))},encapsulation:2,changeDetection:0})}return n})();var py=(()=>{class n extends ps{pathId;ngOnInit(){this.pathId="url(#"+bi()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["SpinnerIcon"]],features:[$e],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,r){i&1&&(Fo(),se(0,"svg",0)(1,"g"),Je(2,"path",1),ae(),se(3,"defs")(4,"clipPath",2),Je(5,"rect",3),ae()()()),i&2&&(zt(r.getClassNames()),Fe("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),Q(),Fe("clip-path",r.pathId),Q(3),H("id",r.pathId))},encapsulation:2})}return n})();var fy=(()=>{class n extends ps{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["TimesIcon"]],features:[$e],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,r){i&1&&(Fo(),se(0,"svg",0),Je(1,"path",1),ae()),i&2&&(zt(r.getClassNames()),Fe("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},encapsulation:2})}return n})();var my=(()=>{class n extends ps{pathId;ngOnInit(){this.pathId="url(#"+bi()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["TimesCircleIcon"]],features:[$e],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,r){i&1&&(Fo(),se(0,"svg",0)(1,"g"),Je(2,"path",1),ae(),se(3,"defs")(4,"clipPath",2),Je(5,"rect",3),ae()()()),i&2&&(zt(r.getClassNames()),Fe("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),Q(),Fe("clip-path",r.pathId),Q(3),H("id",r.pathId))},encapsulation:2})}return n})();var bw=({dt:n})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${n("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Aw={root:"p-ink"},gy=(()=>{class n extends Wt{name="ripple";theme=bw;classes=Aw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var xc=(()=>{class n extends qt{zone=$(vn);_componentStyle=$(gy);animationListener;mouseDownListener;timeout;constructor(){super(),Qs(()=>{_n(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(Jo(i,"p-ink-active"),!uh(i)&&!hh(i)){let a=Math.max(Pi(this.el.nativeElement),Li(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let r=cg(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-hh(i)/2,s=e.pageY-r.top+this.document.body.scrollLeft-uh(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",o+"px"),_r(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Jo(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&Jo(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Jo(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ug(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=gt({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[Mt([gy]),$e]})}return n})();var _w=({dt:n})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${n("button.primary.color")};
    background: ${n("button.primary.background")};
    border: 1px solid ${n("button.primary.border.color")};
    padding-block: ${n("button.padding.y")};
    padding-inline: ${n("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${n("button.transition.duration")}, color ${n("button.transition.duration")}, border-color ${n("button.transition.duration")},
            outline-color ${n("button.transition.duration")}, box-shadow ${n("button.transition.duration")};
    border-radius: ${n("button.border.radius")};
    outline-color: transparent;
    gap: ${n("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${n("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${n("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${n("button.sm.font.size")};
    padding-block: ${n("button.sm.padding.y")};
    padding-inline: ${n("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${n("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${n("button.lg.font.size")};
    padding-block: ${n("button.lg.padding.y")};
    padding-inline: ${n("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${n("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${n("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${n("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${n("button.primary.hover.background")};
    border: 1px solid ${n("button.primary.hover.border.color")};
    color: ${n("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${n("button.primary.active.background")};
    border: 1px solid ${n("button.primary.active.border.color")};
    color: ${n("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${n("button.primary.focus.ring.shadow")};
    outline: ${n("button.focus.ring.width")} ${n("button.focus.ring.style")} ${n("button.primary.focus.ring.color")};
    outline-offset: ${n("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${n("button.badge.size")};
    height: ${n("button.badge.size")};
    line-height: ${n("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${n("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${n("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${n("button.secondary.background")};
    border: 1px solid ${n("button.secondary.border.color")};
    color: ${n("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${n("button.secondary.hover.background")};
    border: 1px solid ${n("button.secondary.hover.border.color")};
    color: ${n("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${n("button.secondary.active.background")};
    border: 1px solid ${n("button.secondary.active.border.color")};
    color: ${n("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${n("button.secondary.focus.ring.color")};
    box-shadow: ${n("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${n("button.success.background")};
    border: 1px solid ${n("button.success.border.color")};
    color: ${n("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${n("button.success.hover.background")};
    border: 1px solid ${n("button.success.hover.border.color")};
    color: ${n("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${n("button.success.active.background")};
    border: 1px solid ${n("button.success.active.border.color")};
    color: ${n("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${n("button.success.focus.ring.color")};
    box-shadow: ${n("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${n("button.info.background")};
    border: 1px solid ${n("button.info.border.color")};
    color: ${n("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${n("button.info.hover.background")};
    border: 1px solid ${n("button.info.hover.border.color")};
    color: ${n("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${n("button.info.active.background")};
    border: 1px solid ${n("button.info.active.border.color")};
    color: ${n("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${n("button.info.focus.ring.color")};
    box-shadow: ${n("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${n("button.warn.background")};
    border: 1px solid ${n("button.warn.border.color")};
    color: ${n("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${n("button.warn.hover.background")};
    border: 1px solid ${n("button.warn.hover.border.color")};
    color: ${n("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${n("button.warn.active.background")};
    border: 1px solid ${n("button.warn.active.border.color")};
    color: ${n("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${n("button.warn.focus.ring.color")};
    box-shadow: ${n("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${n("button.help.background")};
    border: 1px solid ${n("button.help.border.color")};
    color: ${n("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${n("button.help.hover.background")};
    border: 1px solid ${n("button.help.hover.border.color")};
    color: ${n("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${n("button.help.active.background")};
    border: 1px solid ${n("button.help.active.border.color")};
    color: ${n("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${n("button.help.focus.ring.color")};
    box-shadow: ${n("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${n("button.danger.background")};
    border: 1px solid ${n("button.danger.border.color")};
    color: ${n("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${n("button.danger.hover.background")};
    border: 1px solid ${n("button.danger.hover.border.color")};
    color: ${n("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${n("button.danger.active.background")};
    border: 1px solid ${n("button.danger.active.border.color")};
    color: ${n("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${n("button.danger.focus.ring.color")};
    box-shadow: ${n("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${n("button.contrast.background")};
    border: 1px solid ${n("button.contrast.border.color")};
    color: ${n("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${n("button.contrast.hover.background")};
    border: 1px solid ${n("button.contrast.hover.border.color")};
    color: ${n("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${n("button.contrast.active.background")};
    border: 1px solid ${n("button.contrast.active.border.color")};
    color: ${n("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${n("button.contrast.focus.ring.color")};
    box-shadow: ${n("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${n("button.outlined.primary.border.color")};
    color: ${n("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${n("button.outlined.primary.hover.background")};
    border-color: ${n("button.outlined.primary.border.color")};
    color: ${n("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${n("button.outlined.primary.active.background")};
    border-color: ${n("button.outlined.primary.border.color")};
    color: ${n("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${n("button.outlined.secondary.border.color")};
    color: ${n("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${n("button.outlined.secondary.hover.background")};
    border-color: ${n("button.outlined.secondary.border.color")};
    color: ${n("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${n("button.outlined.secondary.active.background")};
    border-color: ${n("button.outlined.secondary.border.color")};
    color: ${n("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${n("button.outlined.success.border.color")};
    color: ${n("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${n("button.outlined.success.hover.background")};
    border-color: ${n("button.outlined.success.border.color")};
    color: ${n("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${n("button.outlined.success.active.background")};
    border-color: ${n("button.outlined.success.border.color")};
    color: ${n("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${n("button.outlined.info.border.color")};
    color: ${n("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${n("button.outlined.info.hover.background")};
    border-color: ${n("button.outlined.info.border.color")};
    color: ${n("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${n("button.outlined.info.active.background")};
    border-color: ${n("button.outlined.info.border.color")};
    color: ${n("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${n("button.outlined.warn.border.color")};
    color: ${n("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${n("button.outlined.warn.hover.background")};
    border-color: ${n("button.outlined.warn.border.color")};
    color: ${n("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${n("button.outlined.warn.active.background")};
    border-color: ${n("button.outlined.warn.border.color")};
    color: ${n("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${n("button.outlined.help.border.color")};
    color: ${n("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${n("button.outlined.help.hover.background")};
    border-color: ${n("button.outlined.help.border.color")};
    color: ${n("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${n("button.outlined.help.active.background")};
    border-color: ${n("button.outlined.help.border.color")};
    color: ${n("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${n("button.outlined.danger.border.color")};
    color: ${n("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${n("button.outlined.danger.hover.background")};
    border-color: ${n("button.outlined.danger.border.color")};
    color: ${n("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${n("button.outlined.danger.active.background")};
    border-color: ${n("button.outlined.danger.border.color")};
    color: ${n("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${n("button.outlined.contrast.border.color")};
    color: ${n("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${n("button.outlined.contrast.hover.background")};
    border-color: ${n("button.outlined.contrast.border.color")};
    color: ${n("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${n("button.outlined.contrast.active.background")};
    border-color: ${n("button.outlined.contrast.border.color")};
    color: ${n("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${n("button.outlined.plain.border.color")};
    color: ${n("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${n("button.outlined.plain.hover.background")};
    border-color: ${n("button.outlined.plain.border.color")};
    color: ${n("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${n("button.outlined.plain.active.background")};
    border-color: ${n("button.outlined.plain.border.color")};
    color: ${n("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${n("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${n("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${n("button.text.primary.active.background")};
    border-color: transparent;
    color: ${n("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${n("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${n("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${n("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${n("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${n("button.text.success.hover.background")};
    border-color: transparent;
    color: ${n("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${n("button.text.success.active.background")};
    border-color: transparent;
    color: ${n("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${n("button.text.info.hover.background")};
    border-color: transparent;
    color: ${n("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${n("button.text.info.active.background")};
    border-color: transparent;
    color: ${n("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${n("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${n("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${n("button.text.warn.active.background")};
    border-color: transparent;
    color: ${n("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${n("button.text.help.hover.background")};
    border-color: transparent;
    color: ${n("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${n("button.text.help.active.background")};
    border-color: transparent;
    color: ${n("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${n("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${n("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${n("button.text.danger.active.background")};
    border-color: transparent;
    color: ${n("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${n("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${n("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${n("button.text.plain.active.background")};
    border-color: transparent;
    color: ${n("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${n("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${n("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${n("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${n("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${n("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${n("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${n("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${n("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,xw={root:({instance:n,props:t})=>["p-button p-component",{"p-button-icon-only":n.hasIcon&&!t.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading,"p-button-link":t.link,[`p-button-${t.severity}`]:t.severity,"p-button-raised":t.raised,"p-button-rounded":t.rounded,"p-button-text":t.text,"p-button-outlined":t.outlined,"p-button-sm":t.size==="small","p-button-lg":t.size==="large","p-button-plain":t.plain,"p-button-fluid":t.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:n})=>["p-button-icon",{[`p-button-icon-${n.iconPos}`]:n.label}],label:"p-button-label"},Tr=(()=>{class n extends Wt{name="button";theme=_w;classes=xw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var Sw=["content"],ww=["loading"],Mw=["icon"],Cw=["*"],by=n=>({class:n});function Tw(n,t){n&1&&tn(0)}function Ew(n,t){if(n&1&&Je(0,"span",8),n&2){let e=ie(3);H("ngClass",e.iconClass()),Fe("aria-hidden",!0)("data-pc-section","loadingicon")}}function Rw(n,t){if(n&1&&Je(0,"SpinnerIcon",9),n&2){let e=ie(3);H("styleClass",e.spinnerIconClass())("spin",!0),Fe("aria-hidden",!0)("data-pc-section","loadingicon")}}function Iw(n,t){if(n&1&&(yn(0),we(1,Ew,1,3,"span",6)(2,Rw,1,4,"SpinnerIcon",7),bn()),n&2){let e=ie(2);Q(),H("ngIf",e.loadingIcon),Q(),H("ngIf",!e.loadingIcon)}}function Dw(n,t){}function Pw(n,t){if(n&1&&we(0,Dw,0,0,"ng-template",10),n&2){let e=ie(2);H("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Lw(n,t){if(n&1&&(yn(0),we(1,Iw,3,2,"ng-container",2)(2,Pw,1,1,null,5),bn()),n&2){let e=ie();Q(),H("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),Q(),H("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",kn(3,by,e.iconClass()))}}function kw(n,t){if(n&1&&Je(0,"span",8),n&2){let e=ie(2);zt(e.icon),H("ngClass",e.iconClass()),Fe("data-pc-section","icon")}}function Ow(n,t){}function Nw(n,t){if(n&1&&we(0,Ow,0,0,"ng-template",10),n&2){let e=ie(2);H("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Fw(n,t){if(n&1&&(yn(0),we(1,kw,1,4,"span",11)(2,Nw,1,1,null,5),bn()),n&2){let e=ie();Q(),H("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),Q(),H("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",kn(3,by,e.iconClass()))}}function Bw(n,t){if(n&1&&(se(0,"span",12),pt(1),ae()),n&2){let e=ie();Fe("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),Q(),An(e.label)}}function Uw(n,t){if(n&1&&Je(0,"p-badge",13),n&2){let e=ie();H("value",e.badge)("severity",e.badgeSeverity)}}var Cr={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},vy=(()=>{class n extends qt{_componentStyle=$(Tr);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=gt({type:n,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(i,r){i&2&&Ki("p-button-label",!0)},features:[Mt([Tr]),$e]})}return n})(),yy=(()=>{class n extends qt{_componentStyle=$(Tr);static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=gt({type:n,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(i,r){i&2&&Ki("p-button-icon",!0)},features:[Mt([Tr]),$e]})}return n})(),Sc=(()=>{class n extends qt{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=zu(yy);labelSignal=zu(vy);isIconOnly=ii(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,r])=>this[`_${i}`]!==r&&(this[`_${i}`]=r))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Cr);isTextButton=ii(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=$(Tr);ngAfterViewInit(){super.ngAfterViewInit(),_r(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let r=i.currentValue;for(let o in r)this[o]=r[o]}}getStyleClass(){let e=[Cr.button,Cr.component];return this.icon&&!this.label&&En(this.htmlElement.textContent)&&e.push(Cr.iconOnly),this.loading&&(e.push(Cr.disabled,Cr.loading),!this.icon&&this.label&&e.push(Cr.labelOnly),this.icon&&!this.label&&!En(this.htmlElement.textContent)&&e.push(Cr.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return En(this.fluid)?!!i:this.fluid}setStyleClass(){let e=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}createLabel(){if(!ri(this.htmlElement,".p-button-label")&&this.label){let i=this.document.createElement("span");this.icon&&!this.label&&i.setAttribute("aria-hidden","true"),i.className="p-button-label",i.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(i)}}createIcon(){if(!ri(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let i=this.document.createElement("span");i.className="p-button-icon",i.setAttribute("aria-hidden","true");let r=this.label?"p-button-icon-"+this.iconPos:null;r&&_r(i,r);let o=this.getIconClass();o&&_r(i,o),!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let e=ri(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=ri(this.htmlElement,".p-button-icon"),i=ri(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(i?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=gt({type:n,selectors:[["","pButton",""]],contentQueries:function(i,r,o){i&1&&(Gu(o,r.iconSignal,yy,5),Gu(o,r.labelSignal,vy,5)),i&2&&Am(2)},hostVars:4,hostBindings:function(i,r){i&2&&Ki("p-button-icon-only",r.isIconOnly())("p-button-text",r.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",Be],rounded:[2,"rounded","rounded",Be],text:[2,"text","text",Be],outlined:[2,"outlined","outlined",Be],size:"size",plain:[2,"plain","plain",Be],fluid:[2,"fluid","fluid",Be],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[Mt([Tr]),fn,$e,an]})}return n})(),uo=(()=>{class n extends qt{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new Et;onFocus=new Et;onBlur=new Et;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,r])=>this[`_${i}`]!==r&&(this[`_${i}`]=r))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return En(this.fluid)?!!i:this.fluid}_componentStyle=$(Tr);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let r=i.currentValue;for(let o in r)this[o]=r[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["p-button"]],contentQueries:function(i,r,o){if(i&1&&(Rt(o,Sw,5),Rt(o,ww,5),Rt(o,Mw,5),Rt(o,ki,4)),i&2){let s;ut(s=ht())&&(r.contentTemplate=s.first),ut(s=ht())&&(r.loadingIconTemplate=s.first),ut(s=ht())&&(r.iconTemplate=s.first),ut(s=ht())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",Be],loading:[2,"loading","loading",Be],loadingIcon:"loadingIcon",raised:[2,"raised","raised",Be],rounded:[2,"rounded","rounded",Be],text:[2,"text","text",Be],plain:[2,"plain","plain",Be],severity:"severity",outlined:[2,"outlined","outlined",Be],link:[2,"link","link",Be],tabindex:[2,"tabindex","tabindex",Hn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",Be],fluid:[2,"fluid","fluid",Be],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Mt([Tr]),fn,$e,an],ngContentSelectors:Cw,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,r){i&1&&(zn(),se(0,"button",0),nt("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),Tn(1),we(2,Tw,1,0,"ng-container",1)(3,Lw,3,5,"ng-container",2)(4,Fw,3,5,"ng-container",2)(5,Bw,2,3,"span",3)(6,Uw,1,2,"p-badge",4),ae()),i&2&&(H("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),Fe("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),Q(2),H("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),Q(),H("ngIf",r.loading),Q(),H("ngIf",!r.loading),Q(),H("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),Q(),H("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[$t,gi,Wn,yi,vi,xc,dy,py,Fa,Na,Ut],encapsulation:2,changeDetection:0})}return n})(),Er=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({imports:[$t,uo,Ut,Ut]})}return n})();var Vw=({dt:n})=>`
.p-card {
    background: ${n("card.background")};
    color: ${n("card.color")};
    box-shadow: ${n("card.shadow")};
    border-radius: ${n("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${n("card.caption.gap")};
}

.p-card-body {
    padding: ${n("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${n("card.body.gap")};
}

.p-card-title {
    font-size: ${n("card.title.font.size")};
    font-weight: ${n("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${n("card.subtitle.color")};
}
`,zw={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ay=(()=>{class n extends Wt{name="card";theme=Vw;classes=zw;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var Hw=["header"],Ww=["title"],Gw=["subtitle"],qw=["content"],Xw=["footer"],jw=["*",[["p-header"]],[["p-footer"]]],Kw=["*","p-header","p-footer"];function Zw(n,t){n&1&&tn(0)}function $w(n,t){if(n&1&&(se(0,"div",8),Tn(1,1),we(2,Zw,1,0,"ng-container",6),ae()),n&2){let e=ie();Q(2),H("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Jw(n,t){if(n&1&&(yn(0),pt(1),bn()),n&2){let e=ie(2);Q(),An(e.header)}}function Yw(n,t){n&1&&tn(0)}function Qw(n,t){if(n&1&&(se(0,"div",9),we(1,Jw,2,1,"ng-container",10)(2,Yw,1,0,"ng-container",6),ae()),n&2){let e=ie();Q(),H("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),Q(),H("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function eM(n,t){if(n&1&&(yn(0),pt(1),bn()),n&2){let e=ie(2);Q(),An(e.subheader)}}function tM(n,t){n&1&&tn(0)}function nM(n,t){if(n&1&&(se(0,"div",11),we(1,eM,2,1,"ng-container",10)(2,tM,1,0,"ng-container",6),ae()),n&2){let e=ie();Q(),H("ngIf",e.subheader&&!e._subtitleTemplate&&e.subtitleTemplate),Q(),H("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function iM(n,t){n&1&&tn(0)}function rM(n,t){n&1&&tn(0)}function oM(n,t){if(n&1&&(se(0,"div",12),Tn(1,2),we(2,rM,1,0,"ng-container",6),ae()),n&2){let e=ie();Q(2),H("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var sM=(()=>{class n extends qt{header;subheader;set style(e){mh(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=pn(null);_componentStyle=$(Ay);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["p-card"]],contentQueries:function(i,r,o){if(i&1&&(Rt(o,Ag,5),Rt(o,_g,5),Rt(o,Hw,4),Rt(o,Ww,4),Rt(o,Gw,4),Rt(o,qw,4),Rt(o,Xw,4),Rt(o,ki,4)),i&2){let s;ut(s=ht())&&(r.headerFacet=s.first),ut(s=ht())&&(r.footerFacet=s.first),ut(s=ht())&&(r.headerTemplate=s.first),ut(s=ht())&&(r.titleTemplate=s.first),ut(s=ht())&&(r.subtitleTemplate=s.first),ut(s=ht())&&(r.contentTemplate=s.first),ut(s=ht())&&(r.footerTemplate=s.first),ut(s=ht())&&(r.templates=s)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[Mt([Ay]),$e],ngContentSelectors:Kw,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,r){i&1&&(zn(jw),se(0,"div",0),we(1,$w,3,1,"div",1),se(2,"div",2),we(3,Qw,3,2,"div",3)(4,nM,3,2,"div",4),se(5,"div",5),Tn(6),we(7,iM,1,0,"ng-container",6),ae(),we(8,oM,3,1,"div",7),ae()()),i&2&&(zt(r.styleClass),H("ngClass","p-card p-component")("ngStyle",r._style()),Fe("data-pc-name","card"),Q(),H("ngIf",r.headerFacet||r.headerTemplate||r._headerTemplate),Q(2),H("ngIf",r.header||r.titleTemplate||r._titleTemplate),Q(),H("ngIf",r.subheader||r.subtitleTemplate||r._subtitleTemplate),Q(3),H("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),Q(),H("ngIf",r.footerFacet||r.footerTemplate||r._footerTemplate))},dependencies:[$t,gi,Wn,yi,vi,Ut],encapsulation:2,changeDetection:0})}return n})(),_y=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({imports:[sM,Ut,Ut]})}return n})();function aM(){let n=[],t=(o,s)=>{let a=n.length>0?n[n.length-1]:{key:o,value:s},l=a.value+(a.key===o?0:s)+2;return n.push({key:o,value:l}),l},e=o=>{n=n.filter(s=>s.value!==o)},i=()=>n.length>0?n[n.length-1].value:0,r=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:r,set:(o,s,a)=>{s&&(s.style.zIndex=String(t(o,a)))},clear:o=>{o&&(e(r(o)),o.style.zIndex="")},getCurrent:()=>i()}}var jn=aM();var lM=({dt:n})=>`

.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: ${n("drawer.background")};
    color: ${n("drawer.color")};
    border: 1px solid ${n("drawer.border.color")};
    box-shadow: ${n("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${n("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${n("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${n("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${n("drawer.title.font.weight")};
    font-size: ${n("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

/* PrimeVue animations

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
*/

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {

    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}
`,cM={mask:({instance:n})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:n.position==="top"?"flex-start":n.position==="bottom"?"flex-end":"center"})},dM={mask:({instance:n})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":n.modal,"p-drawer-open":n.containerVisible,"p-drawer-full":n.fullScreen,[`p-drawer-${n.position}`]:!!n.position}),root:({instance:n})=>({"p-drawer p-component":!0,"p-drawer-full":n.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},xy=(()=>{class n extends Wt{name="drawer";theme=lM;classes=dM;inlineStyles=cM;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})(),uM=["maskRef"],hM=["container"],pM=["closeButton"],fM=["*"],mM=(n,t)=>({transform:n,transition:t}),gM=n=>({value:"visible",params:n});function vM(n,t){n&1&&tn(0)}function yM(n,t){if(n&1&&we(0,vM,1,0,"ng-container",4),n&2){let e=ie(2);H("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function bM(n,t){n&1&&tn(0)}function AM(n,t){n&1&&Je(0,"TimesIcon"),n&2&&Fe("data-pc-section","closeicon")}function _M(n,t){}function xM(n,t){n&1&&we(0,_M,0,0,"ng-template")}function SM(n,t){if(n&1&&(se(0,"span",10),we(1,xM,1,0,null,4),ae()),n&2){let e=ie(4);Fe("data-pc-section","closeicon"),Q(),H("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function wM(n,t){if(n&1){let e=ln();se(0,"p-button",8),nt("onClick",function(r){At(e);let o=ie(3);return _t(o.close(r))})("keydown.enter",function(r){At(e);let o=ie(3);return _t(o.close(r))}),we(1,AM,1,1,"TimesIcon",7)(2,SM,2,2,"span",9),ae()}if(n&2){let e=ie(3);H("ngClass",e.cx("closeButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),Fe("data-pc-section","closebutton")("data-pc-group-section","iconcontainer"),Q(),H("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),Q(),H("ngIf",e.closeIconTemplate||e._closeIconTemplate)}}function MM(n,t){n&1&&tn(0)}function CM(n,t){n&1&&tn(0)}function TM(n,t){if(n&1&&(yn(0),se(1,"div",5),we(2,CM,1,0,"ng-container",4),ae(),bn()),n&2){let e=ie(3);Q(),H("ngClass",e.cx("footer")),Fe("data-pc-section","footer"),Q(),H("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function EM(n,t){if(n&1&&(se(0,"div",5),we(1,bM,1,0,"ng-container",4)(2,wM,3,7,"p-button",6),ae(),se(3,"div",5),Tn(4),we(5,MM,1,0,"ng-container",4),ae(),we(6,TM,3,3,"ng-container",7)),n&2){let e=ie(2);H("ngClass",e.cx("header")),Fe("data-pc-section","header"),Q(),H("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),Q(),H("ngIf",e.showCloseIcon),Q(),H("ngClass",e.cx("content")),Fe("data-pc-section","content"),Q(2),H("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),Q(),H("ngIf",e.footerTemplate||e._footerTemplate)}}function RM(n,t){if(n&1){let e=ln();se(0,"div",2,0),nt("@panelState.start",function(r){At(e);let o=ie();return _t(o.onAnimationStart(r))})("@panelState.done",function(r){At(e);let o=ie();return _t(o.onAnimationEnd(r))})("click",function(r){At(e);let o=ie();return _t(o.maskClickListener(r))}),se(2,"div",3),nt("keydown",function(r){At(e);let o=ie();return _t(o.onKeyDown(r))}),we(3,yM,1,1,"ng-container")(4,EM,7,8),ae()()}if(n&2){let e=ie();mr(e.maskStyle),H("ngClass",e.cx("mask"))("ngStyle",e.sx("mask"))("@panelState",kn(15,gM,Wo(12,mM,e.transformOptions,e.transitionOptions))),Fe("data-pc-name","mask")("data-pc-section","mask"),Q(2),zt(e.styleClass),H("ngClass",e.cx("root")),Fe("data-pc-section","root"),Q(),ym(e.headlessTemplate||e._headlessTemplate?3:4)}}var IM=qu([Zo({transform:"{{transform}}",opacity:0}),Ko("{{transition}}")]),DM=qu([Ko("{{transition}}",Zo({transform:"{{transform}}",opacity:0}))]),rp=(()=>{class n extends qt{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps;dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){switch(this._position=e,e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}maskStyle;onShow=new Et;onHide=new Et;visibleChange=new Et;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;documentEscapeListener;_componentStyle=$(xy);headerTemplate;footerTemplate;closeIconTemplate;headlessTemplate;contentTemplate;templates;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let i=Object.keys(e).find(r=>r.includes("Template"));i&&(this[`_${i}`]=e[i].currentValue)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&jn.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({})}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}maskClickListener(e){this.dismissible&&this.close(e),this.blockScroll&&ig()}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),jn.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){if(this.appendTo)return this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):oo(this.appendTo,this.container)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===jn.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindGlobalListeners(){this.unbindDocumentEscapeListener()}ngOnDestroy(){this.initialized=!1,this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&jn.clear(this.container),this.container=null,this.unbindGlobalListeners(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["p-sidebar"]],contentQueries:function(i,r,o){if(i&1&&Rt(o,ki,4),i&2){let s;ut(s=ht())&&(r.templates=s)}},viewQuery:function(i,r){if(i&1&&(no(uM,5),no(hM,5),no(pM,5)),i&2){let o;ut(o=ht())&&(r.maskRef=o.first),ut(o=ht())&&(r.containerViewChild=o.first),ut(o=ht())&&(r.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",Be],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",Be],baseZIndex:[2,"baseZIndex","baseZIndex",Hn],modal:[2,"modal","modal",Be],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",Be],showCloseIcon:[2,"showCloseIcon","showCloseIcon",Be],closeOnEscape:[2,"closeOnEscape","closeOnEscape",Be],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",maskStyle:"maskStyle",headerTemplate:"headerTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",headlessTemplate:"headlessTemplate",contentTemplate:"contentTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[Mt([xy]),fn,$e,an],ngContentSelectors:fM,decls:1,vars:1,consts:[["maskRef",""],[3,"ngClass","ngStyle","style","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],[3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["class","p-sidebar-close-icon",4,"ngIf"],[1,"p-sidebar-close-icon"]],template:function(i,r){i&1&&(zn(),we(0,RM,5,17,"div",1)),i&2&&H("ngIf",r.visible)},dependencies:[$t,gi,Wn,yi,vi,Ut,fy,Er,uo],encapsulation:2,data:{animation:[zl("panelState",[$o("void => visible",[Xu(IM)]),$o("visible => void",[Xu(DM)])])]},changeDetection:0})}return n})(),Sy=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({imports:[rp,Ut,Ut]})}return n})();var LM=({dt:n})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${n("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${n("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${n("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${n("tooltip.background")};
    color: ${n("tooltip.color")};
    padding: ${n("tooltip.padding")};
    box-shadow: ${n("tooltip.shadow")};
    border-radius: ${n("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${n("tooltip.gutter")});
    border-width: ${n("tooltip.gutter")} ${n("tooltip.gutter")} ${n("tooltip.gutter")} 0;
    border-right-color: ${n("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${n("tooltip.gutter")});
    border-width: ${n("tooltip.gutter")} 0 ${n("tooltip.gutter")} ${n("tooltip.gutter")};
    border-left-color: ${n("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${n("tooltip.gutter")});
    border-width: ${n("tooltip.gutter")} ${n("tooltip.gutter")} 0 ${n("tooltip.gutter")};
    border-top-color: ${n("tooltip.background")};
    border-bottom-color: ${n("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${n("tooltip.gutter")});
    border-width: 0 ${n("tooltip.gutter")} ${n("tooltip.gutter")} ${n("tooltip.gutter")};
    border-top-color: ${n("tooltip.background")};
    border-bottom-color: ${n("tooltip.background")};
}
`,kM={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},wy=(()=>{class n extends Wt{name="tooltip";theme=LM;classes=kM;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var My=(()=>{class n extends qt{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:bi("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=$(wy);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),_n(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=te(te({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(ro(e.relatedTarget,"p-tooltip")||ro(e.relatedTarget,"p-tooltip-text")||ro(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?oo(this.container,this.el.nativeElement):oo(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),lg(this.container,250),this.getOption("tooltipZIndex")==="auto"?jn.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&jn.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof Il){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(r=>this.tooltipText.appendChild(r))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[r,o]of i[e].entries())if(r===0)o.call(this);else if(this.isOutOfBounds())o.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+lh(),r=e.top+ch();return{left:i,top:r}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?ri(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,i=Pi(e),r=(Li(e)-Li(this.container))/2;this.alignTooltip(i,r)}alignLeft(){this.preAlign("left");let e=Pi(this.container),i=(Li(this.el.nativeElement)-Li(this.container))/2;this.alignTooltip(-e,i)}alignTop(){this.preAlign("top");let e=(Pi(this.el.nativeElement)-Pi(this.container))/2,i=Li(this.container);this.alignTooltip(e,-i)}alignBottom(){this.preAlign("bottom");let e=(Pi(this.el.nativeElement)-Pi(this.container))/2,i=Li(this.el.nativeElement);this.alignTooltip(e,i)}alignTooltip(e,i){let r=this.getHostOffset(),o=r.left+e,s=r.top+i;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=te(te({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return ro(e,"p-inputwrapper")?ri(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,r=e.left,o=Pi(this.container),s=Li(this.container),a=$l();return r+o>a.width||r<0||i<0||i+s>a.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new hs(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):hg(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&jn.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||n)(ke(vn),ke(Pl))};static \u0275dir=gt({type:n,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",Be],showDelay:[2,"showDelay","showDelay",Hn],hideDelay:[2,"hideDelay","hideDelay",Hn],life:[2,"life","life",Hn],positionTop:[2,"positionTop","positionTop",Hn],positionLeft:[2,"positionLeft","positionLeft",Hn],autoHide:[2,"autoHide","autoHide",Be],fitContent:[2,"fitContent","fitContent",Be],hideOnEscape:[2,"hideOnEscape","hideOnEscape",Be],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[Mt([wy]),fn,$e,an]})}return n})(),op=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({})}return n})();var NM=({dt:n})=>`
.p-menu {
    background: ${n("menu.background")};
    color: ${n("menu.color")};
    border: 1px solid ${n("menu.border.color")};
    border-radius: ${n("menu.border.radius")};
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: ${n("menu.list.padding")};
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${n("menu.list.gap")};
}

.p-menu-item-content {
    transition: background ${n("menu.transition.duration")}, color ${n("menu.transition.duration")};
    border-radius: ${n("menu.item.border.radius")};
    color: ${n("menu.item.color")};
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${n("menu.item.padding")};
    gap: ${n("menu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: ${n("menu.item.icon.color")};
}

.p-menu-item.p-focus .p-menu-item-content {
    color: ${n("menu.item.focus.color")};
    background: ${n("menu.item.focus.background")};
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: ${n("menu.item.icon.focus.color")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: ${n("menu.item.focus.color")};
    background: ${n("menu.item.focus.background")};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: ${n("menu.item.icon.focus.color")};
}

.p-menu-overlay {
    box-shadow: ${n("menu.shadow")};
}

.p-menu-submenu-label {
    background: ${n("menu.submenu.label.background")};
    padding: ${n("menu.submenu.label.padding")};
    color: ${n("menu.submenu.label.color")};
    font-weight: ${n("menu.submenu.label.font.weight")};
}

.p-menu-separator {
    border-top: 1px solid ${n("menu.separator.border.color")};
}

/* For PrimeNG */
.p-menu-overlay {
    position: absolute;
}
`,FM={root:({props:n})=>["p-menu p-component",{"p-menu-overlay":n.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:n})=>["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Cy=(()=>{class n extends Wt{name="menu";theme=NM;classes=FM;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var BM=["pMenuItemContent",""],Ty=n=>({"p-disabled":n}),Mc=n=>({$implicit:n}),UM=()=>({exact:!1});function VM(n,t){n&1&&tn(0)}function zM(n,t){if(n&1&&(se(0,"a",6),we(1,VM,1,0,"ng-container",7),ae()),n&2){let e=ie(2),i=io(4);H("target",e.item.target)("ngClass",kn(9,Ty,e.item.disabled)),Fe("title",e.item.title)("href",e.item.url||null,zo)("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action"),Q(),H("ngTemplateOutlet",i)("ngTemplateOutletContext",kn(11,Mc,e.item))}}function HM(n,t){n&1&&tn(0)}function WM(n,t){if(n&1&&(se(0,"a",8),we(1,HM,1,0,"ng-container",7),ae()),n&2){let e=ie(2),i=io(4);H("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||Ho(17,UM))("target",e.item.target)("ngClass",kn(18,Ty,e.item.disabled))("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state),Fe("data-automationid",e.item.automationId)("tabindex",-1)("data-pc-section","action")("title",e.item.title),Q(),H("ngTemplateOutlet",i)("ngTemplateOutletContext",kn(20,Mc,e.item))}}function GM(n,t){if(n&1&&(yn(0),we(1,zM,2,13,"a",4)(2,WM,2,22,"a",5),bn()),n&2){let e=ie();Q(),H("ngIf",!(e.item!=null&&e.item.routerLink)),Q(),H("ngIf",e.item==null?null:e.item.routerLink)}}function qM(n,t){}function XM(n,t){n&1&&we(0,qM,0,0,"ng-template")}function jM(n,t){if(n&1&&(yn(0),we(1,XM,1,0,null,7),bn()),n&2){let e=ie();Q(),H("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",kn(2,Mc,e.item))}}function KM(n,t){if(n&1&&Je(0,"span",12),n&2){let e=ie(2);zt(e.item.iconClass),H("ngClass",e.item.icon)("ngStyle",e.item.iconStyle)}}function ZM(n,t){if(n&1&&(se(0,"span",13),pt(1),ae()),n&2){let e=ie(2);Q(),An(e.item.label)}}function $M(n,t){if(n&1&&(Je(0,"span",14),Js(1,"safeHtml")),n&2){let e=ie(2);H("innerHTML",Ys(1,1,e.item.label),Vu)}}function JM(n,t){if(n&1&&Je(0,"p-badge",15),n&2){let e=ie(2);H("styleClass",e.item.badgeStyleClass)("value",e.item.badge)}}function YM(n,t){if(n&1&&we(0,KM,1,4,"span",9)(1,ZM,2,1,"span",10)(2,$M,2,3,"ng-template",null,1,Go)(4,JM,1,2,"p-badge",11),n&2){let e=io(3),i=ie();H("ngIf",i.item.icon),Q(),H("ngIf",i.item.escape!==!1)("ngIfElse",e),Q(3),H("ngIf",i.item.badge)}}var QM=["start"],e1=["end"],t1=["header"],n1=["item"],i1=["submenuheader"],r1=["list"],o1=["container"],s1=n=>({"p-menu p-component":!0,"p-menu-overlay":n}),a1=(n,t)=>({showTransitionParams:n,hideTransitionParams:t}),l1=n=>({value:"visible",params:n}),c1=(n,t)=>({"p-hidden":n,flex:t}),d1=(n,t,e)=>({"p-hidden":n,"p-focus":t,"p-disabled":e}),u1=(n,t)=>({"p-focus":n,"p-disabled":t});function h1(n,t){n&1&&tn(0)}function p1(n,t){if(n&1&&(se(0,"div",9),we(1,h1,1,0,"ng-container",10),ae()),n&2){let e,i=ie(2);Fe("data-pc-section","start"),Q(),H("ngTemplateOutlet",(e=i.startTemplate)!==null&&e!==void 0?e:i._startTemplate)}}function f1(n,t){n&1&&Je(0,"li",14)}function m1(n,t){if(n&1&&(se(0,"span"),pt(1),ae()),n&2){let e=ie(3).$implicit;Q(),An(e.label)}}function g1(n,t){if(n&1&&(Je(0,"span",18),Js(1,"safeHtml")),n&2){let e=ie(3).$implicit;H("innerHTML",Ys(1,1,e.label),Vu)}}function v1(n,t){if(n&1&&(yn(0),we(1,m1,2,1,"span",17)(2,g1,2,3,"ng-template",null,2,Go),bn()),n&2){let e=io(3),i=ie(2).$implicit;Q(),H("ngIf",i.escape!==!1)("ngIfElse",e)}}function y1(n,t){n&1&&tn(0)}function b1(n,t){if(n&1&&(se(0,"li",15),we(1,v1,4,2,"ng-container",7)(2,y1,1,0,"ng-container",16),ae()),n&2){let e,i=ie(),r=i.$implicit,o=i.index,s=ie(3);H("ngClass",Wo(7,c1,r.visible===!1,r.visible))("tooltipOptions",r.tooltipOptions),Fe("data-automationid",r.automationId)("id",s.menuitemId(r,s.id,o)),Q(),H("ngIf",!s.submenuHeaderTemplate&&!s._submenuHeaderTemplate),Q(),H("ngTemplateOutlet",(e=s.submenuHeaderTemplate)!==null&&e!==void 0?e:s._submenuHeaderTemplate)("ngTemplateOutletContext",kn(10,Mc,r))}}function A1(n,t){n&1&&Je(0,"li",14)}function _1(n,t){if(n&1){let e=ln();se(0,"li",20),nt("onMenuItemClick",function(r){At(e);let o=ie(),s=o.$implicit,a=o.index,l=ie().index,c=ie(3);return _t(c.itemClick(r,c.menuitemId(s,c.id,l,a)))}),ae()}if(n&2){let e,i=ie(),r=i.$implicit,o=i.index,s=ie(),a=s.$implicit,l=s.index,c=ie(3);zt(r.styleClass),H("pMenuItemContent",r)("itemTemplate",(e=c.itemTemplate)!==null&&e!==void 0?e:c._itemTemplate)("ngClass",xm(13,d1,r.visible===!1||a.visible===!1,c.focusedOptionId()&&c.menuitemId(r,c.id,l,o)===c.focusedOptionId(),c.disabled(r.disabled)))("ngStyle",r.style)("tooltipOptions",r.tooltipOptions),Fe("data-pc-section","menuitem")("aria-label",c.label(r.label))("data-p-focused",c.isItemFocused(c.menuitemId(r,c.id,l,o)))("data-p-disabled",c.disabled(r.disabled))("aria-disabled",c.disabled(r.disabled))("id",c.menuitemId(r,c.id,l,o))}}function x1(n,t){if(n&1&&we(0,A1,1,0,"li",12)(1,_1,1,17,"li",19),n&2){let e=t.$implicit,i=ie().$implicit;H("ngIf",e.separator&&(e.visible!==!1||i.visible!==!1)),Q(),H("ngIf",!e.separator&&(e.visible!==!1||i.visible!==!1))}}function S1(n,t){if(n&1&&we(0,f1,1,0,"li",12)(1,b1,3,12,"li",13)(2,x1,2,2,"ng-template",11),n&2){let e=t.$implicit;H("ngIf",e.separator&&e.visible!==!1),Q(),H("ngIf",!e.separator),Q(),H("ngForOf",e.items)}}function w1(n,t){if(n&1&&we(0,S1,3,3,"ng-template",11),n&2){let e=ie(2);H("ngForOf",e.model)}}function M1(n,t){n&1&&Je(0,"li",14)}function C1(n,t){if(n&1){let e=ln();se(0,"li",20),nt("onMenuItemClick",function(r){At(e);let o=ie(),s=o.$implicit,a=o.index,l=ie(3);return _t(l.itemClick(r,l.menuitemId(s,l.id,a)))}),ae()}if(n&2){let e,i=ie(),r=i.$implicit,o=i.index,s=ie(3);zt(r.styleClass),H("pMenuItemContent",r)("itemTemplate",(e=s.itemTemplate)!==null&&e!==void 0?e:s._itemTemplate)("ngClass",Wo(13,u1,s.focusedOptionId()&&s.menuitemId(r,s.id,o)===s.focusedOptionId(),s.disabled(r.disabled)))("ngStyle",r.style)("tooltipOptions",r.tooltipOptions),Fe("data-pc-section","menuitem")("aria-label",s.label(r.label))("data-p-focused",s.isItemFocused(s.menuitemId(r,s.id,o)))("data-p-disabled",s.disabled(r.disabled))("aria-disabled",s.disabled(r.disabled))("id",s.menuitemId(r,s.id,o))}}function T1(n,t){if(n&1&&we(0,M1,1,0,"li",12)(1,C1,1,16,"li",19),n&2){let e=t.$implicit;H("ngIf",e.separator&&e.visible!==!1),Q(),H("ngIf",!e.separator&&e.visible!==!1)}}function E1(n,t){if(n&1&&we(0,T1,2,2,"ng-template",11),n&2){let e=ie(2);H("ngForOf",e.model)}}function R1(n,t){n&1&&tn(0)}function I1(n,t){if(n&1&&(se(0,"div",21),we(1,R1,1,0,"ng-container",10),ae()),n&2){let e,i=ie(2);Fe("data-pc-section","end"),Q(),H("ngTemplateOutlet",(e=i.endTemplate)!==null&&e!==void 0?e:i._endTemplate)}}function D1(n,t){if(n&1){let e=ln();se(0,"div",4,0),nt("click",function(r){At(e);let o=ie();return _t(o.onOverlayClick(r))})("@overlayAnimation.start",function(r){At(e);let o=ie();return _t(o.onOverlayAnimationStart(r))})("@overlayAnimation.done",function(r){At(e);let o=ie();return _t(o.onOverlayAnimationEnd(r))}),we(2,p1,2,2,"div",5),se(3,"ul",6,1),nt("focus",function(r){At(e);let o=ie();return _t(o.onListFocus(r))})("blur",function(r){At(e);let o=ie();return _t(o.onListBlur(r))})("keydown",function(r){At(e);let o=ie();return _t(o.onListKeyDown(r))}),we(5,w1,1,1,null,7)(6,E1,1,1,null,7),ae(),we(7,I1,2,2,"div",8),ae()}if(n&2){let e,i,r=ie();zt(r.styleClass),H("ngClass",kn(18,s1,r.popup))("ngStyle",r.style)("@overlayAnimation",kn(23,l1,Wo(20,a1,r.showTransitionOptions,r.hideTransitionOptions)))("@.disabled",r.popup!==!0),Fe("data-pc-name","menu")("id",r.id),Q(2),H("ngIf",(e=r.startTemplate)!==null&&e!==void 0?e:r._startTemplate),Q(),Fe("id",r.id+"_list")("tabindex",r.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",r.activedescendant())("aria-label",r.ariaLabel)("aria-labelledBy",r.ariaLabelledBy),Q(2),H("ngIf",r.hasSubMenu()),Q(),H("ngIf",!r.hasSubMenu()),Q(),H("ngIf",(i=r.endTemplate)!==null&&i!==void 0?i:r._endTemplate)}}var Ey=(()=>{class n{platformId;sanitizer;constructor(e,i){this.platformId=e,this.sanitizer=i}transform(e){return!e||!_n(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(i){return new(i||n)(ke(en,16),ke(sh,16))};static \u0275pipe=gm({name:"safeHtml",type:n,pure:!0})}return n})(),P1=(()=>{class n{item;itemTemplate;onMenuItemClick=new Et;menu;constructor(e){this.menu=e}onItemClick(e,i){this.onMenuItemClick.emit({originalEvent:e,item:i})}static \u0275fac=function(i){return new(i||n)(ke(fr(()=>Cc)))};static \u0275cmp=st({type:n,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate"},outputs:{onMenuItemClick:"onMenuItemClick"},attrs:BM,decls:5,vars:3,consts:[["itemContent",""],["htmlLabel",""],[1,"p-menu-item-content",3,"click"],[4,"ngIf"],["class","p-menu-item-link","pRipple","",3,"target","ngClass",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","class","p-menu-item-link","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",1,"p-menu-item-link",3,"target","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",1,"p-menu-item-link",3,"routerLink","queryParams","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menu-item-icon",3,"ngClass","class","ngStyle",4,"ngIf"],["class","p-menu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menu-item-icon",3,"ngClass","ngStyle"],[1,"p-menu-item-label"],[1,"p-menu-item-label",3,"innerHTML"],[3,"styleClass","value"]],template:function(i,r){if(i&1){let o=ln();se(0,"div",2),nt("click",function(a){return At(o),_t(r.onItemClick(a,r.item))}),we(1,GM,3,2,"ng-container",3)(2,jM,2,4,"ng-container",3)(3,YM,5,4,"ng-template",null,0,Go),ae()}i&2&&(Fe("data-pc-section","content"),Q(),H("ngIf",!r.itemTemplate),Q(),H("ngIf",r.itemTemplate))},dependencies:[$t,gi,Wn,yi,vi,Oa,yc,ty,xc,op,Fa,Na,Ut,Ey],encapsulation:2})}return n})(),Cc=(()=>{class n extends qt{overlayService;model;popup;style;styleClass;appendTo;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;onShow=new Et;onHide=new Et;onBlur=new Et;onFocus=new Et;listViewChild;containerViewChild;container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=ii(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=pn(-1);selectedOptionIndex=pn(-1);focused=!1;overlayVisible=!1;relativeAlign;_componentStyle=$(Cy);constructor(e){super(),this.overlayService=e,this.id=this.id||bi("pn_id_")}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.target=e.currentTarget,this.relativeAlign=e.relativeAlign,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}ngOnInit(){super.ngOnInit(),this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.popup&&(this.container=e.element,this.moveOnTop(),this.onShow.emit({}),this.appendOverlay(),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),ha(this.listViewChild.nativeElement));break;case"void":this.onOverlayHide(),this.onHide.emit({});break}}onOverlayAnimationEnd(e){switch(e.toState){case"void":this.autoZIndex&&jn.clear(e.element);break}}alignOverlay(){this.relativeAlign?sg(this.container,this.target):og(this.container,this.target)}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):oo(this.appendTo,this.container))}restoreOverlayAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&jn.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.relativeAlign=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!dg()&&this.hide()}menuitemId(e,i,r,o){return e?.id??`${i}_${r}${o!==void 0?"_"+o:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(ha(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let i=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)ha(this.target),this.hide(),e.preventDefault();else{let i=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(i),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(ua(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let i=ri(this.containerViewChild.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),r=i&&ri(i,'a[data-pc-section="action"]');this.popup&&ha(this.target),r?r.click():i&&i.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let r=[...ua(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return r>-1?r+1:0}findPrevOptionIndex(e){let r=[...ua(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(o=>o.id===e);return r>-1?r-1:0}changeFocusedOptionIndex(e){let i=ua(this.containerViewChild.nativeElement,'li[data-pc-section="menuitem"][data-p-disabled="false"]');if(i.length>0){let r=e>=i.length?i.length-1:e<0?0:e;r>-1&&this.focusedOptionIndex.set(i[r].getAttribute("id"))}}itemClick(e,i){let{originalEvent:r,item:o}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),o.disabled){r.preventDefault();return}!o.url&&!o.routerLink&&r.preventDefault(),o.command&&o.command({originalEvent:r,item:o}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==i&&this.focusedOptionIndex.set(i)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&_n(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",i=>{let r=this.containerViewChild?.nativeElement&&!this.containerViewChild?.nativeElement.contains(i.target),o=!(this.target&&(this.target===i.target||this.target.contains(i.target)));!this.popup&&r&&o&&this.onListBlur(i),this.preventDocumentDefault&&this.overlayVisible&&r&&o&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&_n(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&_n(this.platformId)&&(this.scrollHandler=new hs(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null)}ngOnDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&jn.clear(this.container),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener(),super.ngOnDestroy()}hasSubMenu(){if(this.model){for(var e of this.model)if(e.items)return!0}return!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(i=>i.visible!==!1):e.visible===!1}static \u0275fac=function(i){return new(i||n)(ke(yg))};static \u0275cmp=st({type:n,selectors:[["p-menu"]],contentQueries:function(i,r,o){if(i&1&&(Rt(o,QM,4),Rt(o,e1,4),Rt(o,t1,4),Rt(o,n1,4),Rt(o,i1,4),Rt(o,ki,4)),i&2){let s;ut(s=ht())&&(r.startTemplate=s.first),ut(s=ht())&&(r.endTemplate=s.first),ut(s=ht())&&(r.headerTemplate=s.first),ut(s=ht())&&(r.itemTemplate=s.first),ut(s=ht())&&(r.submenuHeaderTemplate=s.first),ut(s=ht())&&(r.templates=s)}},viewQuery:function(i,r){if(i&1&&(no(r1,5),no(o1,5)),i&2){let o;ut(o=ht())&&(r.listViewChild=o.first),ut(o=ht())&&(r.containerViewChild=o.first)}},inputs:{model:"model",popup:[2,"popup","popup",Be],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",Be],baseZIndex:[2,"baseZIndex","baseZIndex",Hn],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",Hn]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[Mt([Cy]),fn,$e],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"ngClass","class","ngStyle","click",4,"ngIf"],[3,"click","ngClass","ngStyle"],["class","p-menu-start",4,"ngIf"],["role","menu",1,"p-menu-list","p-reset",3,"focus","blur","keydown"],[4,"ngIf"],["class","p-menu-end",4,"ngIf"],[1,"p-menu-start"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["class","p-menu-separator","role","separator",4,"ngIf"],["class","p-menu-submenu-label","pTooltip","","role","none",3,"ngClass","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menu-separator"],["pTooltip","","role","none",1,"p-menu-submenu-label",3,"ngClass","tooltipOptions"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["class","p-menu-item","pTooltip","","role","menuitem",3,"pMenuItemContent","itemTemplate","ngClass","ngStyle","class","tooltipOptions","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",1,"p-menu-item",3,"onMenuItemClick","pMenuItemContent","itemTemplate","ngClass","ngStyle","tooltipOptions"],[1,"p-menu-end"]],template:function(i,r){i&1&&we(0,D1,8,25,"div",3),i&2&&H("ngIf",!r.popup||r.visible)},dependencies:[$t,gi,Xo,Wn,yi,vi,Oa,P1,op,My,Fa,Ut,Ey],encapsulation:2,data:{animation:[zl("overlayAnimation",[$o(":enter",[Zo({opacity:0,transform:"scaleY(0.8)"}),Ko("{{showTransitionParams}}")]),$o(":leave",[Ko("{{hideTransitionParams}}",Zo({opacity:0}))])])]},changeDetection:0})}return n})(),Ry=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({imports:[Cc,Ut,Ut]})}return n})();var k1=()=>({width:"250px"});function O1(n,t){n&1&&(se(0,"h1"),pt(1,"SH"),ae())}function N1(n,t){if(n&1){let e=ln();se(0,"p-button",11),nt("click",function(){let r=At(e).$implicit;return _t(r.command())}),ae()}if(n&2){let e=t.$implicit;H("label",e.label)("icon",e.icon)}}function F1(n,t){if(n&1&&(se(0,"div",9),we(1,N1,1,2,"p-button",10),ae()),n&2){let e=ie();Q(),H("ngForOf",e.menuItems)}}var Tc=class n{constructor(t){this.platformId=t}sidebarVisible=!1;isMobile=!1;_router=$(On);menuItems=[{label:"Inicio",icon:"pi pi-home",command:()=>this.navigateToHome()},{label:"Colecci\xF3n",icon:"pi pi-cog",command:()=>this.navigateToSettings()},{label:"About Me",icon:"pi pi-sign-out",command:()=>this.navigateToAboutMe()}];ngOnInit(){this.detectScreenSize()}ngOnDestroy(){_n(this.platformId)&&window.removeEventListener("resize",this.onResize)}logout(){console.log("Cerrando sesi\xF3n")}navigateToAboutMe(){this._router.navigate(["/about-me"])}navigateToHome(){this._router.navigate(["/home"])}navigateToSettings(){console.log("Navegando a Configuraciones")}detectScreenSize(){if(_n(this.platformId)){let t=window.innerWidth;this.isMobile=t<=768,console.log("Es m\xF3vil:",this.isMobile)}}onResize(t){this.detectScreenSize()}toggleSidebar(){this.sidebarVisible=!this.sidebarVisible}static \u0275fac=function(e){return new(e||n)(ke(en))};static \u0275cmp=st({type:n,selectors:[["app-layout"]],hostBindings:function(e,i){e&1&&nt("resize",function(o){return i.onResize(o)},!1,fm)},decls:14,vars:7,consts:[[1,"layout-wrapper"],["position","left",3,"visibleChange","visible"],[3,"model"],[1,"layout-header"],["pButton","","label","\u2630","icon","pi pi-bars",3,"click"],[4,"ngIf"],["class","header-menu",4,"ngIf"],[1,"layout-content"],[1,"layout-footer"],[1,"header-menu"],["class","p-1 p-button-outlined",3,"label","icon","click",4,"ngFor","ngForOf"],[1,"p-1","p-button-outlined",3,"click","label","icon"]],template:function(e,i){e&1&&(se(0,"div",0)(1,"p-sidebar",1),$s("visibleChange",function(o){return Zs(i.sidebarVisible,o)||(i.sidebarVisible=o),o}),se(2,"h3"),pt(3,"Men\xFA"),ae(),Je(4,"p-menu",2),ae(),se(5,"header",3)(6,"button",4),nt("click",function(){return i.toggleSidebar()}),ae(),we(7,O1,2,0,"h1",5)(8,F1,2,1,"div",6),ae(),se(9,"main",7),Je(10,"router-outlet"),ae(),se(11,"footer",8)(12,"p"),pt(13,"\xA9 2024 StreetHoodz. Todos los derechos reservados."),ae()()()),e&2&&(Q(),mr(Ho(6,k1)),Ks("visible",i.sidebarVisible),Q(3),H("model",i.menuItems),Q(3),H("ngIf",!i.isMobile),Q(),H("ngIf",!i.sidebarVisible&&!i.isMobile))},dependencies:[$t,Xo,Wn,Oa,Da,Er,Sc,uo,_y,Sy,rp,Ry,Cc],styles:['@charset "UTF-8";.layout-wrapper[_ngcontent-%COMP%]{display:flex;height:100vh;flex-direction:column;background-color:#f4f7fa}.layout-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#f5f5f5;color:#000;padding:1rem;box-shadow:0 4px 6px #0000001a}.layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem;font-weight:700;text-align:center;flex-grow:1}.layout-sidebar[_ngcontent-%COMP%]{width:250px;background-color:#292929;color:#fff;padding:2rem}.layout-content[_ngcontent-%COMP%]{flex-grow:1;background-color:#fff;color:#333}.layout-footer[_ngcontent-%COMP%]{background-color:#000;color:#fff;text-align:center;padding:1rem;position:relative}@media (max-width: 768px){.layout-wrapper[_ngcontent-%COMP%]{flex-direction:column}.layout-header[_ngcontent-%COMP%]{justify-content:left}.layout-content[_ngcontent-%COMP%], .layout-footer[_ngcontent-%COMP%]{padding:1rem}.p-sidebar[_ngcontent-%COMP%]{width:200px}.p-sidebar[_ngcontent-%COMP%]   .p-menu[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{color:#fff}.layout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:none}}@media (min-width: 769px){.layout-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}}']})};var Ec=class n{_router=$(On);navigateToColeccion(){this._router.navigate(["/coleccion"])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=st({type:n,selectors:[["app-inicio"]],decls:8,vars:0,consts:[[1,"inicio-container"],[1,"inicio-content"],[1,"headline"],["src","https://png.pngtree.com/background/20230513/original/pngtree-cold-weather-down-jackets-in-a-store-picture-image_2507153.jpg","alt","Imagen destacada de los hoodies",1,"featured-image"],["label","Explorar colecci\xF3n",1,"explore-button",3,"onClick"]],template:function(e,i){e&1&&(se(0,"div",0)(1,"div",1)(2,"h1",2),pt(3,"StreetHoodz"),ae(),Je(4,"img",3),se(5,"h2",2),pt(6,"Street Style Made Simple."),ae(),se(7,"p-button",4),nt("onClick",function(){return i.navigateToColeccion()}),ae()()())},dependencies:[Er,uo],styles:[".inicio-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh;background-color:#000;color:#fff}.inicio-content[_ngcontent-%COMP%]{text-align:center;max-width:600px;padding:20px}.featured-image[_ngcontent-%COMP%]{width:100%;max-width:400px;margin-bottom:20px;border:4px solid #ffffff;box-shadow:10px 10px #333}.headline[_ngcontent-%COMP%]{font-size:32px;font-weight:700;margin-bottom:15px}.explore-button[_ngcontent-%COMP%]{border-color:#fff!important}"]})};var gd="172",qr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ky=0,kp=1,Zy=2;var Op=1,$y=2,Vi=3,ar=0,In=1,zi=2,lr=0,yo=1,Np=2,Fp=3,Bp=4,Jy=5,Fr=100,Yy=101,Qy=102,eb=103,tb=104,nb=200,ib=201,rb=202,ob=203,Kc=204,Zc=205,sb=206,ab=207,lb=208,cb=209,db=210,ub=211,hb=212,pb=213,fb=214,vd=0,yd=1,bd=2,bo=3,Ad=4,_d=5,xd=6,Sd=7,Up=0,mb=1,gb=2,cr=0,vb=1,yb=2,bb=3,Ab=4,_b=5,xb=6,Sb=7;var Tp=300,wo=301,Mo=302,wd=303,Md=304,dl=306,$c=1e3,Nr=1001,Jc=1002,di=1003,wb=1004;var ul=1005;var Ti=1006,Cd=1007;var jr=1008;var Hi=1009,Vp=1010,zp=1011,Ps=1012,Td=1013,Kr=1014,Wi=1015,Ls=1016,Ed=1017,Rd=1018,Co=1020,Hp=35902,Wp=1021,Gp=1022,pi=1023,qp=1024,Xp=1025,vo=1026,Ao=1027,jp=1028,Id=1029,Kp=1030,Dd=1031;var Pd=1033,hl=33776,pl=33777,fl=33778,ml=33779,Ld=35840,kd=35841,Od=35842,Nd=35843,Fd=36196,Bd=37492,Ud=37496,Vd=37808,zd=37809,Hd=37810,Wd=37811,Gd=37812,qd=37813,Xd=37814,jd=37815,Kd=37816,Zd=37817,$d=37818,Jd=37819,Yd=37820,Qd=37821,gl=36492,eu=36494,tu=36495,Zp=36283,nu=36284,iu=36285,ru=36286;var Ga=2300,Yc=2301,jc=2302,Ep=2400,Rp=2401,Ip=2402;var Mb=3200,Cb=3201;var $p=0,Tb=1,dr="",$n="srgb",_o="srgb-linear",qa="linear",Ct="srgb";var go=7680;var Dp=519,Eb=512,Rb=513,Ib=514,Jp=515,Db=516,Pb=517,Lb=518,kb=519,Pp=35044;var Yp="300 es",Ni=2e3,Xa=2001,Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iy=1234567,Ha=Math.PI/180,Es=180/Math.PI;function ks(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Ye(n,t,e){return Math.max(t,Math.min(e,n))}function Qp(n,t){return(n%t+t)%t}function B1(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function U1(n,t,e){return n!==t?(e-n)/(t-n):0}function Wa(n,t,e){return(1-e)*n+e*t}function V1(n,t,e,i){return Wa(n,t,1-Math.exp(-e*i))}function z1(n,t=1){return t-Math.abs(Qp(n,t*2)-t)}function H1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function W1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function G1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function q1(n,t){return n+Math.random()*(t-n)}function X1(n){return n*(.5-Math.random())}function j1(n){n!==void 0&&(Iy=n);let t=Iy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function K1(n){return n*Ha}function Z1(n){return n*Es}function $1(n){return(n&n-1)===0&&n!==0}function J1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Y1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Q1(n,t,e,i,r){let o=Math.cos,s=Math.sin,a=o(e/2),l=s(e/2),c=o((t+i)/2),d=s((t+i)/2),u=o((t-i)/2),h=s((t-i)/2),f=o((i-t)/2),g=s((i-t)/2);switch(r){case"XYX":n.set(a*d,l*u,l*h,a*c);break;case"YZY":n.set(l*h,a*d,l*u,a*c);break;case"ZXZ":n.set(l*u,l*h,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ef={DEG2RAD:Ha,RAD2DEG:Es,generateUUID:ks,clamp:Ye,euclideanModulo:Qp,mapLinear:B1,inverseLerp:U1,lerp:Wa,damp:V1,pingpong:z1,smoothstep:H1,smootherstep:W1,randInt:G1,randFloat:q1,randFloatSpread:X1,seededRandom:j1,degToRad:K1,radToDeg:Z1,isPowerOfTwo:$1,ceilPowerOfTwo:J1,floorPowerOfTwo:Y1,setQuaternionFromProperEuler:Q1,normalize:Rn,denormalize:Cs},Xe=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ye(this.x,t.x,e.x),this.y=Ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ye(this.x,t,e),this.y=Ye(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*i-s*r+t.x,this.y=o*r+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(t,e,i,r,o,s,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,s,a,l,c)}set(t,e,i,r,o,s,a,l,c){let d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],M=r[1],w=r[4],_=r[7],D=r[2],R=r[5],T=r[8];return o[0]=s*v+a*M+l*D,o[3]=s*m+a*w+l*R,o[6]=s*p+a*_+l*T,o[1]=c*v+d*M+u*D,o[4]=c*m+d*w+u*R,o[7]=c*p+d*_+u*T,o[2]=h*v+f*M+g*D,o[5]=h*m+f*w+g*R,o[8]=h*p+f*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*s*d-e*a*c-i*o*d+i*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=d*s-a*c,h=a*l-d*o,f=c*o-s*l,g=e*u+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(r*c-d*i)*v,t[2]=(a*i-r*s)*v,t[3]=h*v,t[4]=(d*e-r*l)*v,t[5]=(r*o-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(s*e-i*o)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ap.makeScale(t,e)),this}rotate(t){return this.premultiply(ap.makeRotation(-t)),this}translate(t,e){return this.premultiply(ap.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ap=new We;function tf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ob(){let n=ja("canvas");return n.style.display="block",n}var Dy={};function To(n){n in Dy||(Dy[n]=!0,console.warn(n))}function Nb(n,t,e){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Fb(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bb(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Py=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ly=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eC(){let n={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Ct&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ct&&(r.r=Ts(r.r),r.g=Ts(r.g),r.b=Ts(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?qa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_o]:{primaries:t,whitePoint:i,transfer:qa,toXYZ:Py,fromXYZ:Ly,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:i,transfer:Ct,toXYZ:Py,fromXYZ:Ly,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),n}var ft=eC();function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fs,Qc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=ja("canvas")),fs.width=t.width,fs.height=t.height;let i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ja("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=sr(o[s]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(sr(e[i]/255)*255):e[i]=sr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tC=0,Ka=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tC++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(lp(r[s].image)):o.push(lp(r[s]))}else o=lp(r);i.url=o}return e||(t.images[this.uuid]=i),i}};function lp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nC=0,Zr=(()=>{class n extends Bi{constructor(e=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Nr,o=Nr,s=Ti,a=jr,l=pi,c=Hi,d=n.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=ks(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $c:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $c:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Tp,n.DEFAULT_ANISOTROPY=1,n})(),Zt=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*i+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(f+1)/2,D=(p+1)/2,R=(d+h)/4,T=(u+v)/4,k=(g+m)/4;return w>_&&w>D?w<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(w),r=R/i,o=T/i):_>D?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=R/r,o=k/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=T/o,r=k/o),this.set(i,r,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(h-d)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ye(this.x,t.x,e.x),this.y=Ye(this.y,t.y,e.y),this.z=Ye(this.z,t.z,e.z),this.w=Ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ye(this.x,t,e),this.y=Ye(this.y,t,e),this.z=Ye(this.z,t,e),this.w=Ye(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ed=class extends Bi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);let r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let o=new Zr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let e=Object.assign({},t.texture.image);return this.texture.source=new Ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends ed{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Za=class extends Zr{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var td=class extends Zr{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,s,a){let l=i[r+0],c=i[r+1],d=i[r+2],u=i[r+3],h=o[s+0],f=o[s+1],g=o[s+2],v=o[s+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==h||c!==f||d!==g){let m=1-a,p=l*h+c*f+d*g+u*v,M=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let D=Math.sqrt(w),R=Math.atan2(D,p*M);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}let _=a*M;if(l=l*m+h*_,c=c*m+f*_,d=d*m+g*_,u=u*m+v*_,m===1-a){let D=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=D,c*=D,d*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,o,s){let a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],u=o[s],h=o[s+1],f=o[s+2],g=o[s+3];return t[e]=a*g+d*u+l*f-c*h,t[e+1]=l*g+d*h+c*u-a*f,t[e+2]=c*g+d*f+a*h-l*u,t[e+3]=d*g-a*u-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),u=a(o/2),h=l(i/2),f=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=i+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(o-c)*f,this._z=(s-r)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+s)/f,this._z=(o+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(o-c)/f,this._x=(r+s)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(s-r)/f,this._x=(o+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=i*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-i*c,this._z=o*d+s*c+i*l-r*a,this._w=s*d-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,o=this._z,s=this._w,a=s*t._w+i*t._x+r*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*s+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-e)*d)/c,h=Math.sin(e*d)/c;return this._w=s*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=o*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ky.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ky.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*i),d=2*(a*e-o*r),u=2*(o*i-s*e);return this.x=e+l*c+s*u-a*d,this.y=i+l*d+a*c-o*u,this.z=r+l*u+o*d-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ye(this.x,t.x,e.x),this.y=Ye(this.y,t.y,e.y),this.z=Ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ye(this.x,t,e),this.y=Ye(this.y,t,e),this.z=Ye(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cp.copy(this).projectOnVector(t),this.sub(cp)}reflect(t){return this.sub(cp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cp=new N,ky=new ui,Br=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,wi):wi.fromBufferAttribute(o,s),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rc.copy(i.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ba),Ic.subVectors(this.max,Ba),ms.subVectors(t.a,Ba),gs.subVectors(t.b,Ba),vs.subVectors(t.c,Ba),Rr.subVectors(gs,ms),Ir.subVectors(vs,gs),ho.subVectors(ms,vs);let e=[0,-Rr.z,Rr.y,0,-Ir.z,Ir.y,0,-ho.z,ho.y,Rr.z,0,-Rr.x,Ir.z,0,-Ir.x,ho.z,0,-ho.x,-Rr.y,Rr.x,0,-Ir.y,Ir.x,0,-ho.y,ho.x,0];return!dp(e,ms,gs,vs,Ic)||(e=[1,0,0,0,1,0,0,0,1],!dp(e,ms,gs,vs,Ic))?!1:(Dc.crossVectors(Rr,Ir),e=[Dc.x,Dc.y,Dc.z],dp(e,ms,gs,vs,Ic))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},tr=[new N,new N,new N,new N,new N,new N,new N,new N],wi=new N,Rc=new Br,ms=new N,gs=new N,vs=new N,Rr=new N,Ir=new N,ho=new N,Ba=new N,Ic=new N,Dc=new N,po=new N;function dp(n,t,e,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){po.fromArray(n,o);let a=r.x*Math.abs(po.x)+r.y*Math.abs(po.y)+r.z*Math.abs(po.z),l=t.dot(po),c=e.dot(po),d=i.dot(po);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var iC=new Br,Ua=new N,up=new N,Rs=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):iC.setFromPoints(t).getCenter(i);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ua.subVectors(t,this.center);let e=Ua.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ua,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(up.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ua.copy(t.center).add(up)),this.expandByPoint(Ua.copy(t.center).sub(up))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},nr=new N,hp=new N,Pc=new N,Dr=new N,pp=new N,Lc=new N,fp=new N,Is=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=nr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nr.copy(this.origin).addScaledVector(this.direction,e),nr.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){hp.copy(t).add(e).multiplyScalar(.5),Pc.copy(e).sub(t).normalize(),Dr.copy(this.origin).sub(hp);let o=t.distanceTo(e)*.5,s=-this.direction.dot(Pc),a=Dr.dot(this.direction),l=-Dr.dot(Pc),c=Dr.lengthSq(),d=Math.abs(1-s*s),u,h,f,g;if(d>0)if(u=s*l-a,h=s*a-l,g=o*d,u>=0)if(h>=-g)if(h<=g){let v=1/d;u*=v,h*=v,f=u*(u+s*h+2*a)+h*(s*u+h+2*l)+c}else h=o,u=Math.max(0,-(s*h+a)),f=-u*u+h*(h+2*l)+c;else h=-o,u=Math.max(0,-(s*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-s*o+a)),h=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-o,-l),o),f=h*(h+2*l)+c):(u=Math.max(0,-(s*o+a)),h=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+h*(h+2*l)+c);else h=s>0?-o:o,u=Math.max(0,-(s*h+a)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(hp).addScaledVector(Pc,h),f}intersectSphere(t,e){nr.subVectors(t.center,this.origin);let i=nr.dot(this.direction),r=nr.dot(nr)-i*i,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,s,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),d>=0?(o=(t.min.y-h.y)*d,s=(t.max.y-h.y)*d):(o=(t.max.y-h.y)*d,s=(t.min.y-h.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,nr)!==null}intersectTriangle(t,e,i,r,o){pp.subVectors(e,t),Lc.subVectors(i,t),fp.crossVectors(pp,Lc);let s=this.direction.dot(fp),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Dr.subVectors(this.origin,t);let l=a*this.direction.dot(Lc.crossVectors(Dr,Lc));if(l<0)return null;let c=a*this.direction.dot(pp.cross(Dr));if(c<0||l+c>s)return null;let d=-a*Dr.dot(fp);return d<0?null:this.at(d/s,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class n{constructor(t,e,i,r,o,s,a,l,c,d,u,h,f,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,s,a,l,c,d,u,h,f,g,v,m)}set(t,e,i,r,o,s,a,l,c,d,u,h,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/ys.setFromMatrixColumn(t,0).length(),o=1/ys.setFromMatrixColumn(t,1).length(),s=1/ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*s,e[9]=i[9]*s,e[10]=i[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let h=s*d,f=s*u,g=a*d,v=a*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=g+f*c,e[10]=s*l}else if(t.order==="YXZ"){let h=l*d,f=l*u,g=c*d,v=c*u;e[0]=h+v*a,e[4]=g*a-f,e[8]=s*c,e[1]=s*u,e[5]=s*d,e[9]=-a,e[2]=f*a-g,e[6]=v+h*a,e[10]=s*l}else if(t.order==="ZXY"){let h=l*d,f=l*u,g=c*d,v=c*u;e[0]=h-v*a,e[4]=-s*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=s*d,e[9]=v-h*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let h=s*d,f=s*u,g=a*d,v=a*u;e[0]=l*d,e[4]=g*c-f,e[8]=h*c+v,e[1]=l*u,e[5]=v*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let h=s*l,f=s*c,g=a*l,v=a*c;e[0]=l*d,e[4]=v-h*u,e[8]=g*u+f,e[1]=u,e[5]=s*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*u+g,e[10]=h-v*u}else if(t.order==="XZY"){let h=s*l,f=s*c,g=a*l,v=a*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+v,e[5]=s*d,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rC,t,oC)}lookAt(t,e,i){let r=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Pr.crossVectors(i,Kn),Pr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Pr.crossVectors(i,Kn)),Pr.normalize(),kc.crossVectors(Kn,Pr),r[0]=Pr.x,r[4]=kc.x,r[8]=Kn.x,r[1]=Pr.y,r[5]=kc.y,r[9]=Kn.y,r[2]=Pr.z,r[6]=kc.z,r[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],w=i[7],_=i[11],D=i[15],R=r[0],T=r[4],k=r[8],x=r[12],A=r[1],E=r[5],W=r[9],U=r[13],K=r[2],J=r[6],q=r[10],Y=r[14],V=r[3],le=r[7],me=r[11],Me=r[15];return o[0]=s*R+a*A+l*K+c*V,o[4]=s*T+a*E+l*J+c*le,o[8]=s*k+a*W+l*q+c*me,o[12]=s*x+a*U+l*Y+c*Me,o[1]=d*R+u*A+h*K+f*V,o[5]=d*T+u*E+h*J+f*le,o[9]=d*k+u*W+h*q+f*me,o[13]=d*x+u*U+h*Y+f*Me,o[2]=g*R+v*A+m*K+p*V,o[6]=g*T+v*E+m*J+p*le,o[10]=g*k+v*W+m*q+p*me,o[14]=g*x+v*U+m*Y+p*Me,o[3]=M*R+w*A+_*K+D*V,o[7]=M*T+w*E+_*J+D*le,o[11]=M*k+w*W+_*q+D*me,o[15]=M*x+w*U+_*Y+D*Me,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+o*l*u-r*c*u-o*a*h+i*c*h+r*a*f-i*l*f)+v*(+e*l*f-e*c*h+o*s*h-r*s*f+r*c*d-o*l*d)+m*(+e*c*u-e*a*f-o*s*u+i*s*f+o*a*d-i*c*d)+p*(-r*a*d-e*l*u+e*a*h+r*s*u-i*s*h+i*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=u*m*c-v*h*c+v*l*f-a*m*f-u*l*p+a*h*p,w=g*h*c-d*m*c-g*l*f+s*m*f+d*l*p-s*h*p,_=d*v*c-g*u*c+g*a*f-s*v*f-d*a*p+s*u*p,D=g*u*l-d*v*l-g*a*h+s*v*h+d*a*m-s*u*m,R=e*M+i*w+r*_+o*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=M*T,t[1]=(v*h*o-u*m*o-v*r*f+i*m*f+u*r*p-i*h*p)*T,t[2]=(a*m*o-v*l*o+v*r*c-i*m*c-a*r*p+i*l*p)*T,t[3]=(u*l*o-a*h*o-u*r*c+i*h*c+a*r*f-i*l*f)*T,t[4]=w*T,t[5]=(d*m*o-g*h*o+g*r*f-e*m*f-d*r*p+e*h*p)*T,t[6]=(g*l*o-s*m*o-g*r*c+e*m*c+s*r*p-e*l*p)*T,t[7]=(s*h*o-d*l*o+d*r*c-e*h*c-s*r*f+e*l*f)*T,t[8]=_*T,t[9]=(g*u*o-d*v*o-g*i*f+e*v*f+d*i*p-e*u*p)*T,t[10]=(s*v*o-g*a*o+g*i*c-e*v*c-s*i*p+e*a*p)*T,t[11]=(d*a*o-s*u*o-d*i*c+e*u*c+s*i*f-e*a*f)*T,t[12]=D*T,t[13]=(d*v*r-g*u*r+g*i*h-e*v*h-d*i*m+e*u*m)*T,t[14]=(g*a*r-s*v*r-g*i*l+e*v*l+s*i*m-e*a*m)*T,t[15]=(s*u*r-d*a*r+d*i*l-e*u*l-s*i*h+e*a*h)*T,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,s=t.x,a=t.y,l=t.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,s){return this.set(1,i,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,d=s+s,u=a+a,h=o*c,f=o*d,g=o*u,v=s*d,m=s*u,p=a*u,M=l*c,w=l*d,_=l*u,D=i.x,R=i.y,T=i.z;return r[0]=(1-(v+p))*D,r[1]=(f+_)*D,r[2]=(g-w)*D,r[3]=0,r[4]=(f-_)*R,r[5]=(1-(h+p))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+w)*T,r[9]=(m-M)*T,r[10]=(1-(h+v))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,o=ys.set(r[0],r[1],r[2]).length(),s=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Mi.copy(this);let c=1/o,d=1/s,u=1/a;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=d,Mi.elements[5]*=d,Mi.elements[6]*=d,Mi.elements[8]*=u,Mi.elements[9]*=u,Mi.elements[10]*=u,e.setFromRotationMatrix(Mi),i.x=o,i.y=s,i.z=a,this}makePerspective(t,e,i,r,o,s,a=Ni){let l=this.elements,c=2*o/(e-t),d=2*o/(i-r),u=(e+t)/(e-t),h=(i+r)/(i-r),f,g;if(a===Ni)f=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Xa)f=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,o,s,a=Ni){let l=this.elements,c=1/(e-t),d=1/(i-r),u=1/(s-o),h=(e+t)*c,f=(i+r)*d,g,v;if(a===Ni)g=(s+o)*u,v=-2*u;else if(a===Xa)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ys=new N,Mi=new Qt,rC=new N(0,0,0),oC=new N(1,1,1),Pr=new N,kc=new N,Kn=new N,Oy=new Qt,Ny=new ui,Ur=(()=>{class n{constructor(e=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){let o=e.elements,s=o[0],a=o[4],l=o[8],c=o[1],d=o[5],u=o[9],h=o[2],f=o[6],g=o[10];switch(i){case"XYZ":this._y=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Oy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oy,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ny.setFromEuler(this),this.setFromQuaternion(Ny,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),$a=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sC=0,Fy=new N,bs=new ui,ir=new Qt,Oc=new N,Va=new N,aC=new N,lC=new ui,By=new N(1,0,0),Uy=new N(0,1,0),Vy=new N(0,0,1),zy={type:"added"},cC={type:"removed"},As={type:"childadded",child:null},mp={type:"childremoved",child:null},$r=(()=>{class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sC++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,i=new Ur,r=new ui,o=new N(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new We}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,i){return bs.setFromAxisAngle(e,i),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(By,e)}rotateY(e){return this.rotateOnAxis(Uy,e)}rotateZ(e){return this.rotateOnAxis(Vy,e)}translateOnAxis(e,i){return Fy.copy(e).applyQuaternion(this.quaternion),this.position.add(Fy.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(By,e)}translateY(e){return this.translateOnAxis(Uy,e)}translateZ(e){return this.translateOnAxis(Vy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Oc.copy(e):Oc.set(e,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Va,Oc,this.up):ir.lookAt(Oc,Va,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),bs.setFromRotationMatrix(ir),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zy),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cC),mp.child=e,this.dispatchEvent(mp),mp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zy),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let a=this.children[r].getObjectByProperty(e,i);if(a!==void 0)return a}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,aC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,lC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(e){let i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){let h=c[d];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(s(e.materials,this.material[c]));o.material=l}else o.material=s(e.materials,this.material);if(this.children.length>0){o.children=[];for(let l=0;l<this.children.length;l++)o.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];o.animations.push(s(e.animations,c))}}if(i){let l=a(e.geometries),c=a(e.materials),d=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),g=a(e.animations),v=a(e.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),d.length>0&&(r.textures=d),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=o,r;function a(l){let c=[];for(let d in l){let u=l[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){let o=e.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new N(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Ci=new N,rr=new N,gp=new N,or=new N,_s=new N,xs=new N,Hy=new N,vp=new N,yp=new N,bp=new N,Ap=new Zt,_p=new Zt,xp=new Zt,Or=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ci.subVectors(t,e),r.cross(Ci);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){Ci.subVectors(r,e),rr.subVectors(i,e),gp.subVectors(t,e);let s=Ci.dot(Ci),a=Ci.dot(rr),l=Ci.dot(gp),c=rr.dot(rr),d=rr.dot(gp),u=s*c-a*a;if(u===0)return o.set(0,0,0),null;let h=1/u,f=(c*l-a*d)*h,g=(s*d-a*l)*h;return o.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(t,e,i,r,o,s,a,l){return this.getBarycoord(t,e,i,r,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,or.x),l.addScaledVector(s,or.y),l.addScaledVector(a,or.z),l)}static getInterpolatedAttribute(t,e,i,r,o,s){return Ap.setScalar(0),_p.setScalar(0),xp.setScalar(0),Ap.fromBufferAttribute(t,e),_p.fromBufferAttribute(t,i),xp.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(Ap,o.x),s.addScaledVector(_p,o.y),s.addScaledVector(xp,o.z),s}static isFrontFacing(t,e,i,r){return Ci.subVectors(i,e),rr.subVectors(t,e),Ci.cross(rr).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ci.cross(rr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,s,a;_s.subVectors(r,i),xs.subVectors(o,i),vp.subVectors(t,i);let l=_s.dot(vp),c=xs.dot(vp);if(l<=0&&c<=0)return e.copy(i);yp.subVectors(t,r);let d=_s.dot(yp),u=xs.dot(yp);if(d>=0&&u<=d)return e.copy(r);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),e.copy(i).addScaledVector(_s,s);bp.subVectors(t,o);let f=_s.dot(bp),g=xs.dot(bp);if(g>=0&&f<=g)return e.copy(o);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(xs,a);let m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Hy.subVectors(o,r),a=(u-d)/(u-d+(f-g)),e.copy(r).addScaledVector(Hy,a);let p=1/(m+v+h);return s=v*p,a=h*p,e.copy(i).addScaledVector(_s,s).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ub={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Sp(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var at=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ft.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ft.workingColorSpace){return this.r=t,this.g=e,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ft.workingColorSpace){if(t=Qp(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,s=2*i-o;this.r=Sp(s,o,t+1/3),this.g=Sp(s,o,t),this.b=Sp(s,o,t-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(t,e=$n){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$n){let i=Ub[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return ft.fromWorkingColorSpace(Sn.copy(this),t),Math.round(Ye(Sn.r*255,0,255))*65536+Math.round(Ye(Sn.g*255,0,255))*256+Math.round(Ye(Sn.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ft.workingColorSpace){ft.fromWorkingColorSpace(Sn.copy(this),e);let i=Sn.r,r=Sn.g,o=Sn.b,s=Math.max(i,r,o),a=Math.min(i,r,o),l,c,d=(a+s)/2;if(a===s)l=0,c=0;else{let u=s-a;switch(c=d<=.5?u/(s+a):u/(2-s-a),s){case i:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-i)/u+2;break;case o:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ft.workingColorSpace){return ft.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=$n){ft.fromWorkingColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,r=Sn.b;return t!==$n?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Lr),this.setHSL(Lr.h+t,Lr.s+e,Lr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Lr),t.getHSL(Nc);let i=Wa(Lr.h,Nc.h,e),r=Wa(Lr.s,Nc.s,e),o=Wa(Lr.l,Nc.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new at;at.NAMES=Ub;var dC=0,Vr=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dC++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=yo,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kc&&(i.blendSrc=this.blendSrc),this.blendDst!==Zc&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ja=class extends Vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Yt=new N,Fc=new Xe,Jn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Pp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fc.fromBufferAttribute(this,e),Fc.applyMatrix3(t),this.setXY(e,Fc.x,Fc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix3(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix4(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Yt.fromBufferAttribute(this,e),Yt.applyNormalMatrix(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Yt.fromBufferAttribute(this,e),Yt.transformDirection(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=Rn(e,this.array),i=Rn(i,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pp&&(t.usage=this.usage),t}};var Ya=class extends Jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Qa=class extends Jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Fi=class extends Jn{constructor(t,e,i){super(new Float32Array(t),e,i)}},uC=0,li=new Qt,wp=new $r,Ss=new N,Zn=new Br,za=new Br,dn=new N,zr=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?Qa:Ya)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new We().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,e,i){return li.makeTranslation(t,e,i),this.applyMatrix4(li),this}scale(t,e,i){return li.makeScale(t,e,i),this.applyMatrix4(li),this}lookAt(t){return wp.lookAt(t),wp.updateMatrix(),this.applyMatrix4(wp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Fi(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];Zn.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];za.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Zn.min,za.min),Zn.expandByPoint(dn),dn.addVectors(Zn.max,za.max),Zn.expandByPoint(dn)):(Zn.expandByPoint(za.min),Zn.expandByPoint(za.max))}Zn.getCenter(i);let r=0;for(let o=0,s=t.count;o<s;o++)dn.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(dn));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)dn.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),dn.add(Ss)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new N,l[k]=new N;let c=new N,d=new N,u=new N,h=new Xe,f=new Xe,g=new Xe,v=new N,m=new N;function p(k,x,A){c.fromBufferAttribute(i,k),d.fromBufferAttribute(i,x),u.fromBufferAttribute(i,A),h.fromBufferAttribute(o,k),f.fromBufferAttribute(o,x),g.fromBufferAttribute(o,A),d.sub(c),u.sub(c),f.sub(h),g.sub(h);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(E),a[k].add(v),a[x].add(v),a[A].add(v),l[k].add(m),l[x].add(m),l[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let k=0,x=M.length;k<x;++k){let A=M[k],E=A.start,W=A.count;for(let U=E,K=E+W;U<K;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let w=new N,_=new N,D=new N,R=new N;function T(k){D.fromBufferAttribute(r,k),R.copy(D);let x=a[k];w.copy(x),w.sub(D.multiplyScalar(D.dot(x))).normalize(),_.crossVectors(R,x);let E=_.dot(l[k])<0?-1:1;s.setXYZW(k,w.x,w.y,w.z,E)}for(let k=0,x=M.length;k<x;++k){let A=M[k],E=A.start,W=A.count;for(let U=E,K=E+W;U<K;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let r=new N,o=new N,s=new N,a=new N,l=new N,c=new N,d=new N,u=new N;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),s.fromBufferAttribute(e,m),d.subVectors(s,o),u.subVectors(r,o),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),d.subVectors(s,o),u.subVectors(r,o),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new Jn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,i);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=t(h,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(t.data))}d.length>0&&(r[l]=d,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(e))}let o=t.morphAttributes;for(let c in o){let d=[],u=o[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,d=s.length;c<d;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wy=new Qt,fo=new Is,Bc=new Rs,Gy=new N,Uc=new N,Vc=new N,zc=new N,Mp=new N,Hc=new N,qy=new N,Wc=new N,Nn=class extends $r{constructor(t=new zr,e=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){Hc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let d=a[l],u=o[l];d!==0&&(Mp.fromBufferAttribute(u,t),s?Hc.addScaledVector(Mp,d):Hc.addScaledVector(Mp.sub(e),d))}e.add(Hc)}return e}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(o),fo.copy(t.ray).recast(t.near),!(Bc.containsPoint(fo.origin)===!1&&(fo.intersectSphere(Bc,Gy)===null||fo.origin.distanceToSquared(Gy)>(t.far-t.near)**2))&&(Wy.copy(o).invert(),fo.copy(t.ray).applyMatrix4(Wy),!(i.boundingBox!==null&&fo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fo)))}_computeIntersections(t,e,i){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,u=o.attributes.normal,h=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=s[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,D=w;_<D;_+=3){let R=a.getX(_),T=a.getX(_+1),k=a.getX(_+2);r=Gc(this,p,t,i,c,d,u,R,T,k),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);r=Gc(this,s,t,i,c,d,u,M,w,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=s[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,D=w;_<D;_+=3){let R=_,T=_+1,k=_+2;r=Gc(this,p,t,i,c,d,u,R,T,k),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,w=m+1,_=m+2;r=Gc(this,s,t,i,c,d,u,M,w,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function hC(n,t,e,i,r,o,s,a){let l;if(t.side===In?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,t.side===ar,a),l===null)return null;Wc.copy(a),Wc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wc);return c<e.near||c>e.far?null:{distance:c,point:Wc.clone(),object:n}}function Gc(n,t,e,i,r,o,s,a,l,c){n.getVertexPosition(a,Uc),n.getVertexPosition(l,Vc),n.getVertexPosition(c,zc);let d=hC(n,t,e,i,Uc,Vc,zc,qy);if(d){let u=new N;Or.getBarycoord(qy,Uc,Vc,zc,u),r&&(d.uv=Or.getInterpolatedAttribute(r,a,l,c,u,new Xe)),o&&(d.uv1=Or.getInterpolatedAttribute(o,a,l,c,u,new Xe)),s&&(d.normal=Or.getInterpolatedAttribute(s,a,l,c,u,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new N,materialIndex:0};Or.getNormal(Uc,Vc,zc,h.normal),d.face=h,d.barycoord=u}return d}var Hr=class n extends zr{constructor(t=1,e=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],d=[],u=[],h=0,f=0;g("z","y","x",-1,-1,i,e,t,s,o,0),g("z","y","x",1,-1,i,e,-t,s,o,1),g("x","z","y",1,1,t,i,e,r,s,2),g("x","z","y",1,-1,t,i,-e,r,s,3),g("x","y","z",1,-1,t,e,i,r,o,4),g("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Fi(c,3)),this.setAttribute("normal",new Fi(d,3)),this.setAttribute("uv",new Fi(u,2));function g(v,m,p,M,w,_,D,R,T,k,x){let A=_/T,E=D/k,W=_/2,U=D/2,K=R/2,J=T+1,q=k+1,Y=0,V=0,le=new N;for(let me=0;me<q;me++){let Me=me*E-U;for(let He=0;He<J;He++){let vt=He*A-W;le[v]=vt*M,le[m]=Me*w,le[p]=K,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=R>0?1:-1,d.push(le.x,le.y,le.z),u.push(He/T),u.push(1-me/k),Y+=1}}for(let me=0;me<k;me++)for(let Me=0;Me<T;Me++){let He=h+Me+J*me,vt=h+Me+J*(me+1),G=h+(Me+1)+J*(me+1),oe=h+(Me+1)+J*me;l.push(He,vt,oe),l.push(vt,G,oe),V+=6}a.addGroup(f,V,x),f+=V,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Eo(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Mn(n){let t={};for(let e=0;e<n.length;e++){let i=Eo(n[e]);for(let r in i)t[r]=i[r]}return t}function pC(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ft.workingColorSpace}var Vb={clone:Eo,merge:Mn},fC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends Vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fC,this.fragmentShader=mC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=pC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},el=class extends $r{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kr=new N,Xy=new Xe,jy=new Xe,wn=class extends el{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kr.x,kr.y).multiplyScalar(-t/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kr.x,kr.y).multiplyScalar(-t/kr.z)}getViewSize(t,e){return this.getViewBounds(t,Xy,jy),e.subVectors(jy,Xy)}setViewOffset(t,e,i,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ws=-90,Ms=1,nd=class extends $r{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wn(ws,Ms,t,e);r.layers=this.layers,this.add(r);let o=new wn(ws,Ms,t,e);o.layers=this.layers,this.add(o);let s=new wn(ws,Ms,t,e);s.layers=this.layers,this.add(s);let a=new wn(ws,Ms,t,e);a.layers=this.layers,this.add(a);let l=new wn(ws,Ms,t,e);l.layers=this.layers,this.add(l);let c=new wn(ws,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,o),t.setRenderTarget(i,1,r),t.render(e,s),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},tl=class extends Zr{constructor(t,e,i,r,o,s,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:wo,super(t,e,i,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},id=class extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new tl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hr(5,5,5),o=new Ei({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:lr});o.uniforms.tEquirect.value=e;let s=new Nn(r,o),a=e.minFilter;return e.minFilter===jr&&(e.minFilter=Ti),new nd(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,i,r){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,i,r);t.setRenderTarget(o)}};var nl=class extends $r{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Cp=new N,gC=new N,vC=new We,ci=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Cp.subVectors(i,e).cross(gC.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Cp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||vC.getNormalMatrix(t),r=this.coplanarPoint(Cp).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mo=new Rs,qc=new N,il=class{constructor(t=new ci,e=new ci,i=new ci,r=new ci,o=new ci,s=new ci){this.planes=[t,e,i,r,o,s]}set(t,e,i,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni){let i=this.planes,r=t.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],u=r[6],h=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],M=r[13],w=r[14],_=r[15];if(i[0].setComponents(l-o,h-c,m-f,_-p).normalize(),i[1].setComponents(l+o,h+c,m+f,_+p).normalize(),i[2].setComponents(l+s,h+d,m+g,_+M).normalize(),i[3].setComponents(l-s,h-d,m-g,_-M).normalize(),i[4].setComponents(l-a,h-u,m-v,_-w).normalize(),e===Ni)i[5].setComponents(l+a,h+u,m+v,_+w).normalize();else if(e===Xa)i[5].setComponents(a,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mo)}intersectsSprite(t){return mo.center.set(0,0,0),mo.radius=.7071067811865476,mo.applyMatrix4(t.matrixWorld),this.intersectsSphere(mo)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(qc.x=r.normal.x>0?t.max.x:t.min.x,qc.y=r.normal.y>0?t.max.y:t.min.y,qc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xo=class extends $r{constructor(){super(),this.isGroup=!0,this.type="Group"}};var rl=class extends Zr{constructor(t,e,i,r,o,s,a,l,c,d=vo){if(d!==vo&&d!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===vo&&(i=Kr),i===void 0&&d===Ao&&(i=Co),super(null,r,o,s,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};var ol=class n extends zr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,u=t/a,h=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){let M=p*h-s;for(let w=0;w<c;w++){let _=w*u-o;g.push(_,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let w=M+c*p,_=M+c*(p+1),D=M+1+c*(p+1),R=M+1+c*p;f.push(w,_,R),f.push(_,D,R)}this.setIndex(f),this.setAttribute("position",new Fi(g,3)),this.setAttribute("normal",new Fi(v,3)),this.setAttribute("uv",new Fi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var sl=class extends Vr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var rd=class extends Vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},od=class extends Vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xc(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function yC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var So=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];n:{e:{let s;t:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(o=r,r=e[++i],t<r)break e}s=e.length;break t}if(!(t>=o)){let a=e[1];t<a&&(i=2,o=a);for(let l=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=o,o=e[--i-1],t>=o)break e}s=i,i=0;break t}break n}for(;i<s;){let a=i+s>>>1;t<e[a]?s=a:i=a+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=i[o+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sd=class extends So{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ep,endingEnd:Ep}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Rp:o=t,a=2*e-i;break;case Ip:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rp:s=t,l=2*i-e;break;case Ip:s=1,l=i+r[1]-r[0];break;default:s=t-1,l=e}let c=(i-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=o*d,this._offsetNext=s*d}interpolate_(t,e,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-e)/(r-e),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,M=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let D=0;D!==a;++D)o[D]=p*s[d+D]+M*s[c+D]+w*s[l+D]+_*s[u+D];return o}},ad=class extends So{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(i-e)/(r-e),u=1-d;for(let h=0;h!==a;++h)o[h]=s[c+h]*u+s[l+h]*d;return o}},ld=class extends So{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},hi=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xc(e,this.TimeBufferType),this.values=Xc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Xc(t.times,Array),values:Xc(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ld(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ad(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ga:e=this.InterpolantFactoryMethodDiscrete;break;case Yc:e=this.InterpolantFactoryMethodLinear;break;case jc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return Yc;case this.InterpolantFactoryMethodSmooth:return jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,o=0,s=r-1;for(;o!==r&&i[o]<t;)++o;for(;s!==-1&&i[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=i.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&yC(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===jc,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*i,h=u-i,f=u+i;for(let g=0;g!==i;++g){let v=e[u+g];if(v!==e[h+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let u=a*i,h=s*i;for(let f=0;f!==i;++f)e[h+f]=e[u+f]}++s}}if(o>0){t[s]=t[o];for(let a=o*i,l=s*i,c=0;c!==i;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Yc;var Wr=class extends hi{constructor(t,e,i){super(t,e,i)}};Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=Ga;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var cd=class extends hi{};cd.prototype.ValueTypeName="color";var dd=class extends hi{};dd.prototype.ValueTypeName="number";var ud=class extends So{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(i-e)/(r-e),c=t*a;for(let d=c+a;c!==d;c+=4)ui.slerpFlat(o,0,s,c-a,s,c,l);return o}},al=class extends hi{InterpolantFactoryMethodLinear(t){return new ud(this.times,this.values,this.getValueSize(),t)}};al.prototype.ValueTypeName="quaternion";al.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends hi{constructor(t,e,i){super(t,e,i)}};Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Ga;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends hi{};hd.prototype.ValueTypeName="vector";var pd=class extends $r{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var fd=class extends el{constructor(t=-1,e=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,s=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ll=class extends pd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var md=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}};var rf="\\[\\]\\.:\\/",bC=new RegExp("["+rf+"]","g"),of="[^"+rf+"]",AC="[^"+rf.replace("\\.","")+"]",_C=/((?:WC+[\/:])*)/.source.replace("WC",of),xC=/(WCOD+)?/.source.replace("WCOD",AC),SC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",of),wC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",of),MC=new RegExp("^"+_C+xC+SC+wC+"$"),CC=["material","materials","bones","map"],Lp=class{constructor(t,e,i){let r=i||Kt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Kt=(()=>{class n{constructor(e,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,r){return e&&e.isAnimationObjectGroup?new n.Composite(e,i,r):new n(e,i,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bC,"")}static parseTrackName(e){let i=MC.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=r.nodeName.substring(o+1);CC.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(i);if(r!==void 0)return r}if(e.children){let r=function(s){for(let a=0;a<s.length;a++){let l=s[a];if(l.name===i||l.uuid===i)return l;let c=r(l.children);if(c)return c}return null},o=r(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)e[i++]=r[o]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let r=this.resolvedProperty;for(let o=0,s=r.length;o!==s;++o)r[o]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,s=i.propertyIndex;if(e||(e=n.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let d=i.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===d){d=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}let a=e[o];if(a===void 0){let d=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=o;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Lp,n})();Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qB=new Float32Array(1);var Ds=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var cl=class extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};function sf(n,t,e,i){let r=TC(i);switch(e){case Wp:return n*t;case qp:return n*t;case Xp:return n*t*2;case jp:return n*t/r.components*r.byteLength;case Id:return n*t/r.components*r.byteLength;case Kp:return n*t*2/r.components*r.byteLength;case Dd:return n*t*2/r.components*r.byteLength;case Gp:return n*t*3/r.components*r.byteLength;case pi:return n*t*4/r.components*r.byteLength;case Pd:return n*t*4/r.components*r.byteLength;case hl:case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fl:case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kd:case Nd:return Math.max(n,16)*Math.max(t,8)/4;case Ld:case Od:return Math.max(n,8)*Math.max(t,8)/2;case Fd:case Bd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ud:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case qd:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case jd:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case $d:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case gl:case eu:case tu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Zp:case nu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case iu:case ru:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function TC(n){switch(n){case Hi:case Vp:return{byteLength:1,components:1};case Ps:case zp:case Ls:return{byteLength:2,components:1};case Ed:case Rd:return{byteLength:2,components:4};case Kr:case Td:case Wi:return{byteLength:4,components:1};case Hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);function dA(){let n=null,t=!1,e=null,i=null;function r(o,s){e(o,s),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function EC(n){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){let g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var RC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$C=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",sT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_T=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ST=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ET=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,EE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:RC,alphahash_pars_fragment:IC,alphamap_fragment:DC,alphamap_pars_fragment:PC,alphatest_fragment:LC,alphatest_pars_fragment:kC,aomap_fragment:OC,aomap_pars_fragment:NC,batching_pars_vertex:FC,batching_vertex:BC,begin_vertex:UC,beginnormal_vertex:VC,bsdfs:zC,iridescence_fragment:HC,bumpmap_pars_fragment:WC,clipping_planes_fragment:GC,clipping_planes_pars_fragment:qC,clipping_planes_pars_vertex:XC,clipping_planes_vertex:jC,color_fragment:KC,color_pars_fragment:ZC,color_pars_vertex:$C,color_vertex:JC,common:YC,cube_uv_reflection_fragment:QC,defaultnormal_vertex:eT,displacementmap_pars_vertex:tT,displacementmap_vertex:nT,emissivemap_fragment:iT,emissivemap_pars_fragment:rT,colorspace_fragment:oT,colorspace_pars_fragment:sT,envmap_fragment:aT,envmap_common_pars_fragment:lT,envmap_pars_fragment:cT,envmap_pars_vertex:dT,envmap_physical_pars_fragment:_T,envmap_vertex:uT,fog_vertex:hT,fog_pars_vertex:pT,fog_fragment:fT,fog_pars_fragment:mT,gradientmap_pars_fragment:gT,lightmap_pars_fragment:vT,lights_lambert_fragment:yT,lights_lambert_pars_fragment:bT,lights_pars_begin:AT,lights_toon_fragment:xT,lights_toon_pars_fragment:ST,lights_phong_fragment:wT,lights_phong_pars_fragment:MT,lights_physical_fragment:CT,lights_physical_pars_fragment:TT,lights_fragment_begin:ET,lights_fragment_maps:RT,lights_fragment_end:IT,logdepthbuf_fragment:DT,logdepthbuf_pars_fragment:PT,logdepthbuf_pars_vertex:LT,logdepthbuf_vertex:kT,map_fragment:OT,map_pars_fragment:NT,map_particle_fragment:FT,map_particle_pars_fragment:BT,metalnessmap_fragment:UT,metalnessmap_pars_fragment:VT,morphinstance_vertex:zT,morphcolor_vertex:HT,morphnormal_vertex:WT,morphtarget_pars_vertex:GT,morphtarget_vertex:qT,normal_fragment_begin:XT,normal_fragment_maps:jT,normal_pars_fragment:KT,normal_pars_vertex:ZT,normal_vertex:$T,normalmap_pars_fragment:JT,clearcoat_normal_fragment_begin:YT,clearcoat_normal_fragment_maps:QT,clearcoat_pars_fragment:eE,iridescence_pars_fragment:tE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:rE,project_vertex:oE,dithering_fragment:sE,dithering_pars_fragment:aE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:uE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:fE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:vE,specularmap_fragment:yE,specularmap_pars_fragment:bE,tonemapping_fragment:AE,tonemapping_pars_fragment:_E,transmission_fragment:xE,transmission_pars_fragment:SE,uv_pars_fragment:wE,uv_pars_vertex:ME,uv_vertex:CE,worldpos_vertex:TE,background_vert:EE,background_frag:RE,backgroundCube_vert:IE,backgroundCube_frag:DE,cube_vert:PE,cube_frag:LE,depth_vert:kE,depth_frag:OE,distanceRGBA_vert:NE,distanceRGBA_frag:FE,equirect_vert:BE,equirect_frag:UE,linedashed_vert:VE,linedashed_frag:zE,meshbasic_vert:HE,meshbasic_frag:WE,meshlambert_vert:GE,meshlambert_frag:qE,meshmatcap_vert:XE,meshmatcap_frag:jE,meshnormal_vert:KE,meshnormal_frag:ZE,meshphong_vert:$E,meshphong_frag:JE,meshphysical_vert:YE,meshphysical_frag:QE,meshtoon_vert:eR,meshtoon_frag:tR,points_vert:nR,points_frag:iR,shadow_vert:rR,shadow_frag:oR,sprite_vert:sR,sprite_frag:aR},ce={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Gi={basic:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new at(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Mn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Mn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new at(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Mn([ce.points,ce.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Mn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Mn([ce.common,ce.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Mn([ce.sprite,ce.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Mn([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Mn([ce.lights,ce.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Gi.physical={uniforms:Mn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var ou={r:0,b:0,g:0},Ro=new Ur,lR=new Qt;function cR(n,t,e,i,r,o,s){let a=new at(0),l=o===!0?0:1,c,d,u=null,h=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function v(w){let _=!1,D=g(w);D===null?p(a,l):D&&D.isColor&&(p(D,1),_=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,_){let D=g(_);D&&(D.isCubeTexture||D.mapping===dl)?(d===void 0&&(d=new Nn(new Hr(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Eo(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,T,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ro.copy(_.backgroundRotation),Ro.x*=-1,Ro.y*=-1,Ro.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ro.y*=-1,Ro.z*=-1),d.material.uniforms.envMap.value=D,d.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(lR.makeRotationFromEuler(Ro)),d.material.toneMapped=ft.getTransfer(D.colorSpace)!==Ct,(u!==D||h!==D.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=D,h=D.version,f=n.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Nn(new ol(2,2),new Ei({name:"BackgroundMaterial",uniforms:Eo(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(D.colorSpace)!==Ct,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||h!==D.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=D,h=D.version,f=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,_){w.getRGB(ou,nf(n)),i.buffers.color.setClear(ou.r,ou.g,ou.b,_,s)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:v,addToRenderList:m,dispose:M}}function dR(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),o=r,s=!1;function a(A,E,W,U,K){let J=!1,q=u(U,W,E);o!==q&&(o=q,c(o.object)),J=f(A,U,W,K),J&&g(A,U,W,K),K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,_(A,E,W,U),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function d(A){return n.deleteVertexArray(A)}function u(A,E,W){let U=W.wireframe===!0,K=i[A.id];K===void 0&&(K={},i[A.id]=K);let J=K[E.id];J===void 0&&(J={},K[E.id]=J);let q=J[U];return q===void 0&&(q=h(l()),J[U]=q),q}function h(A){let E=[],W=[],U=[];for(let K=0;K<e;K++)E[K]=0,W[K]=0,U[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:U,object:A,attributes:{},index:null}}function f(A,E,W,U){let K=o.attributes,J=E.attributes,q=0,Y=W.getAttributes();for(let V in Y)if(Y[V].location>=0){let me=K[V],Me=J[V];if(Me===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;q++}return o.attributesNum!==q||o.index!==U}function g(A,E,W,U){let K={},J=E.attributes,q=0,Y=W.getAttributes();for(let V in Y)if(Y[V].location>=0){let me=J[V];me===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(me=A.instanceColor));let Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),K[V]=Me,q++}o.attributes=K,o.attributesNum=q,o.index=U}function v(){let A=o.newAttributes;for(let E=0,W=A.length;E<W;E++)A[E]=0}function m(A){p(A,0)}function p(A,E){let W=o.newAttributes,U=o.enabledAttributes,K=o.attributeDivisors;W[A]=1,U[A]===0&&(n.enableVertexAttribArray(A),U[A]=1),K[A]!==E&&(n.vertexAttribDivisor(A,E),K[A]=E)}function M(){let A=o.newAttributes,E=o.enabledAttributes;for(let W=0,U=E.length;W<U;W++)E[W]!==A[W]&&(n.disableVertexAttribArray(W),E[W]=0)}function w(A,E,W,U,K,J,q){q===!0?n.vertexAttribIPointer(A,E,W,K,J):n.vertexAttribPointer(A,E,W,U,K,J)}function _(A,E,W,U){v();let K=U.attributes,J=W.getAttributes(),q=E.defaultAttributeValues;for(let Y in J){let V=J[Y];if(V.location>=0){let le=K[Y];if(le===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){let me=le.normalized,Me=le.itemSize,He=t.get(le);if(He===void 0)continue;let vt=He.buffer,G=He.type,oe=He.bytesPerElement,Se=G===n.INT||G===n.UNSIGNED_INT||le.gpuType===Td;if(le.isInterleavedBufferAttribute){let de=le.data,De=de.stride,Oe=le.offset;if(de.isInstancedInterleavedBuffer){for(let Ze=0;Ze<V.locationSize;Ze++)p(V.location+Ze,de.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ze=0;Ze<V.locationSize;Ze++)m(V.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Ze=0;Ze<V.locationSize;Ze++)w(V.location+Ze,Me/V.locationSize,G,me,De*oe,(Oe+Me/V.locationSize*Ze)*oe,Se)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)p(V.location+de,le.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let de=0;de<V.locationSize;de++)w(V.location+de,Me/V.locationSize,G,me,Me*oe,Me/V.locationSize*de*oe,Se)}}else if(q!==void 0){let me=q[Y];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(V.location,me);break;case 3:n.vertexAttrib3fv(V.location,me);break;case 4:n.vertexAttrib4fv(V.location,me);break;default:n.vertexAttrib1fv(V.location,me)}}}}M()}function D(){k();for(let A in i){let E=i[A];for(let W in E){let U=E[W];for(let K in U)d(U[K].object),delete U[K];delete E[W]}delete i[A]}}function R(A){if(i[A.id]===void 0)return;let E=i[A.id];for(let W in E){let U=E[W];for(let K in U)d(U[K].object),delete U[K];delete E[W]}delete i[A.id]}function T(A){for(let E in i){let W=i[E];if(W[A.id]===void 0)continue;let U=W[A.id];for(let K in U)d(U[K].object),delete U[K];delete W[A.id]}}function k(){x(),s=!0,o!==r&&(o=r,c(o.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:x,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function uR(n,t,e){let i;function r(c){i=c}function o(c,d){n.drawArrays(i,c,d),e.update(d,i,1)}function s(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),e.update(d,i,u))}function a(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];e.update(f,i,1)}function l(c,d,u,h){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)s(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*h[v];e.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hR(n,t,e,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==pi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let k=T===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Hi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Wi&&!k)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:D,maxSamples:R}}function pR(n){let t=this,e=null,i=0,r=!1,o=!1,s=new ci,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||i!==0||r;return r=h,i=u.length,f},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||o&&!m)o?d(null):c();else{let M=o?0:i,w=M*4,_=p.clippingState||null;l.value=_,_=d(g,h,w,f);for(let D=0;D!==w;++D)_[D]=e[D];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(u,h,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)s.copy(u[w]).applyMatrix4(M,a),s.normal.toArray(m,_),m[_+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function fR(n){let t=new WeakMap;function e(s,a){return a===wd?s.mapping=wo:a===Md&&(s.mapping=Mo),s}function i(s){if(s&&s.isTexture){let a=s.mapping;if(a===wd||a===Md)if(t.has(s)){let l=t.get(s).texture;return e(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=new id(l.height);return c.fromEquirectangularTexture(n,s),t.set(s,c),s.addEventListener("dispose",r),e(c.texture,s.mapping)}else return null}}return s}function r(s){let a=s.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var Ns=4,zb=[.125,.215,.35,.446,.526,.582],Po=20,af=new fd,Hb=new at,lf=null,cf=0,df=0,uf=!1,Do=(1+Math.sqrt(5))/2,Os=1/Do,Wb=[new N(-Do,Os,0),new N(Do,Os,0),new N(-Os,0,Do),new N(Os,0,Do),new N(0,Do,-Os),new N(0,Do,Os),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],lu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lf,cf,df),this._renderer.xr.enabled=uf,t.scissorTest=!1,su(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wo||t.mapping===Mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ls,format:pi,colorSpace:_o,depthBuffer:!1},r=Gb(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gb(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mR(o)),this._blurMaterial=gR(o,t,e)}return r}_compileMaterial(t){let e=new Nn(this._lodPlanes[0],t);this._renderer.compile(e,af)}_sceneToCubeUV(t,e,i,r){let a=new wn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Hb),d.toneMapping=cr,d.autoClear=!1;let f=new Ja({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),g=new Nn(new Hr,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Hb),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let w=this._cubeSize;su(r,M*w,p>2?w:0,w,w),d.setRenderTarget(r),v&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===wo||t.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qb());let o=r?this._cubemapMaterial:this._equirectMaterial,s=new Nn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;su(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(s,af)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let o=1;o<r;o++){let s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Wb[(r-o-1)%Wb.length];this._blur(t,o-1,o,s,a)}e.autoClear=i}_blur(t,e,i,r,o){let s=this._pingPongRenderTarget;this._halfBlur(t,s,e,i,r,"latitudinal",o),this._halfBlur(s,t,i,i,r,"longitudinal",o)}_halfBlur(t,e,i,r,o,s,a){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new Nn(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Po-1),v=o/g,m=isFinite(o)?1+Math.floor(d*v):Po;m>Po&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Po}`);let p=[],M=0;for(let T=0;T<Po;++T){let k=T/v,x=Math.exp(-k*k/2);p.push(x),T===0?M+=x:T<m&&(M+=2*x)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;let _=this._sizeLods[r],D=3*_*(r>w-Ns?r-w+Ns:0),R=4*(this._cubeSize-_);su(e,D,R,3*_,2*_),l.setRenderTarget(e),l.render(u,af)}};function mR(n){let t=[],e=[],i=[],r=n,o=n-Ns+1+zb.length;for(let s=0;s<o;s++){let a=Math.pow(2,r);e.push(a);let l=1/a;s>n-Ns?l=zb[s-n+Ns-1]:s===0&&(l=0),i.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),w=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let R=0;R<f;R++){let T=R%3*2/3-1,k=R>2?0:-1,x=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];M.set(x,v*g*R),w.set(h,m*g*R);let A=[R,R,R,R,R,R];_.set(A,p*g*R)}let D=new zr;D.setAttribute("position",new Jn(M,v)),D.setAttribute("uv",new Jn(w,m)),D.setAttribute("faceIndex",new Jn(_,p)),t.push(D),r>Ns&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gb(n,t,e){let i=new Ui(n,t,e);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function su(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function gR(n,t,e){let i=new Float32Array(Po),r=new N(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Po,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function qb(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Xb(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function _f(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vR(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===wd||l===Md,d=l===wo||l===Mo;if(c||d){let u=t.get(a),h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new lu(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||d&&f&&r(f)?(e===null&&(e=new lu(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:s}}function yR(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&To("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bR(n,t,e,i){let r={},o=new WeakMap;function s(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete r[h.id];let f=o.get(h);f&&(t.remove(f),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,e.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let w=0,_=M.length;w<_;w+=3){let D=M[w+0],R=M[w+1],T=M[w+2];h.push(D,R,R,T,T,D)}}else if(g!==void 0){let M=g.array;v=g.version;for(let w=0,_=M.length/3-1;w<_;w+=3){let D=w+0,R=w+1,T=w+2;h.push(D,R,R,T,T,D)}}else return;let m=new(tf(h)?Qa:Ya)(h,1);m.version=v;let p=o.get(u);p&&t.remove(p),o.set(u,m)}function d(u){let h=o.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function AR(n,t,e){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,f){n.drawElements(i,f,o,h*s),e.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,o,h*s,g),e.update(f,i,g))}function d(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(h,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/s,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,h,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function _R(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function xR(n,t,e){let i=new WeakMap,r=new Zt;function o(s,a,l){let c=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=i.get(a);if(h===void 0||h.count!==u){let A=function(){k.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var f=A;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],_=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let D=a.attributes.position.count*_,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let T=new Float32Array(D*R*4*u),k=new Za(T,D,R,u);k.type=Wi,k.needsUpdate=!0;let x=_*4;for(let E=0;E<u;E++){let W=p[E],U=M[E],K=w[E],J=D*R*4*E;for(let q=0;q<W.count;q++){let Y=q*x;g===!0&&(r.fromBufferAttribute(W,q),T[J+Y+0]=r.x,T[J+Y+1]=r.y,T[J+Y+2]=r.z,T[J+Y+3]=0),v===!0&&(r.fromBufferAttribute(U,q),T[J+Y+4]=r.x,T[J+Y+5]=r.y,T[J+Y+6]=r.z,T[J+Y+7]=0),m===!0&&(r.fromBufferAttribute(K,q),T[J+Y+8]=r.x,T[J+Y+9]=r.y,T[J+Y+10]=r.z,T[J+Y+11]=K.itemSize===4?r.w:1)}}h={count:u,texture:k,size:new Xe(D,R)},i.set(a,h),a.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:o}}function SR(n,t,e,i){let r=new WeakMap;function o(l){let c=i.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function s(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:s}}var uA=new Zr,jb=new rl(1,1),hA=new Za,pA=new td,fA=new tl,Kb=[],Zb=[],$b=new Float32Array(16),Jb=new Float32Array(9),Yb=new Float32Array(4);function Bs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=Kb[r];if(o===void 0&&(o=new Float32Array(r),Kb[r]=o),t!==0){i.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,n[s].toArray(o,a)}return o}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function rn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function du(n,t){let e=Zb[t];e===void 0&&(e=new Int32Array(t),Zb[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function wR(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function MR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),rn(e,t)}}function CR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),rn(e,t)}}function TR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),rn(e,t)}}function ER(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;Yb.set(i),n.uniformMatrix2fv(this.addr,!1,Yb),rn(e,i)}}function RR(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;Jb.set(i),n.uniformMatrix3fv(this.addr,!1,Jb),rn(e,i)}}function IR(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,i))return;$b.set(i),n.uniformMatrix4fv(this.addr,!1,$b),rn(e,i)}}function DR(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function PR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),rn(e,t)}}function LR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),rn(e,t)}}function kR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),rn(e,t)}}function OR(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function NR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),rn(e,t)}}function FR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),rn(e,t)}}function BR(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),rn(e,t)}}function UR(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(jb.compareFunction=Jp,o=jb):o=uA,e.setTexture2D(t||o,r)}function VR(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||pA,r)}function zR(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||fA,r)}function HR(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||hA,r)}function WR(n){switch(n){case 5126:return wR;case 35664:return MR;case 35665:return CR;case 35666:return TR;case 35674:return ER;case 35675:return RR;case 35676:return IR;case 5124:case 35670:return DR;case 35667:case 35671:return PR;case 35668:case 35672:return LR;case 35669:case 35673:return kR;case 5125:return OR;case 36294:return NR;case 36295:return FR;case 36296:return BR;case 35678:case 36198:case 36298:case 36306:case 35682:return UR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return HR}}function GR(n,t){n.uniform1fv(this.addr,t)}function qR(n,t){let e=Bs(t,this.size,2);n.uniform2fv(this.addr,e)}function XR(n,t){let e=Bs(t,this.size,3);n.uniform3fv(this.addr,e)}function jR(n,t){let e=Bs(t,this.size,4);n.uniform4fv(this.addr,e)}function KR(n,t){let e=Bs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ZR(n,t){let e=Bs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function $R(n,t){let e=Bs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function JR(n,t){n.uniform1iv(this.addr,t)}function YR(n,t){n.uniform2iv(this.addr,t)}function QR(n,t){n.uniform3iv(this.addr,t)}function eI(n,t){n.uniform4iv(this.addr,t)}function tI(n,t){n.uniform1uiv(this.addr,t)}function nI(n,t){n.uniform2uiv(this.addr,t)}function iI(n,t){n.uniform3uiv(this.addr,t)}function rI(n,t){n.uniform4uiv(this.addr,t)}function oI(n,t,e){let i=this.cache,r=t.length,o=du(e,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let s=0;s!==r;++s)e.setTexture2D(t[s]||uA,o[s])}function sI(n,t,e){let i=this.cache,r=t.length,o=du(e,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||pA,o[s])}function aI(n,t,e){let i=this.cache,r=t.length,o=du(e,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||fA,o[s])}function lI(n,t,e){let i=this.cache,r=t.length,o=du(e,r);nn(i,o)||(n.uniform1iv(this.addr,o),rn(i,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||hA,o[s])}function cI(n){switch(n){case 5126:return GR;case 35664:return qR;case 35665:return XR;case 35666:return jR;case 35674:return KR;case 35675:return ZR;case 35676:return $R;case 5124:case 35670:return JR;case 35667:case 35671:return YR;case 35668:case 35672:return QR;case 35669:case 35673:return eI;case 5125:return tI;case 36294:return nI;case 36295:return iI;case 36296:return rI;case 35678:case 36198:case 36298:case 36306:case 35682:return oI;case 35679:case 36299:case 36307:return sI;case 35680:case 36300:case 36308:case 36293:return aI;case 36289:case 36303:case 36311:case 36292:return lI}}var pf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=WR(e.type)}},ff=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cI(e.type)}},mf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],i)}}},hf=/(\w+)(\])?(\[|\.)?/g;function Qb(n,t){n.seq.push(t),n.map[t.id]=t}function dI(n,t,e){let i=n.name,r=i.length;for(hf.lastIndex=0;;){let o=hf.exec(i),s=hf.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Qb(e,c===void 0?new pf(a,n,t):new ff(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new mf(a),Qb(e,u)),e=u}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(e,r),s=t.getUniformLocation(e,o.name);dI(o,s,this)}}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&i.push(s)}return i}};function eA(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var uI=37297,hI=0;function pI(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return i.join(`
`)}var tA=new We;function fI(n){ft._getMatrix(tA,ft.workingColorSpace,n);let t=`mat3( ${tA.elements.map(e=>e.toFixed(4))} )`;switch(ft.getTransfer(n)){case qa:return[t,"LinearTransferOETF"];case Ct:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nA(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let s=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+pI(n.getShaderSource(t),s)}else return r}function mI(n,t){let e=fI(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gI(n,t){let e;switch(t){case vb:e="Linear";break;case yb:e="Reinhard";break;case bb:e="Cineon";break;case Ab:e="ACESFilmic";break;case xb:e="AgX";break;case Sb:e="Neutral";break;case _b:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var au=new N;function vI(){ft.getLuminanceCoefficients(au);let n=au.x.toFixed(4),t=au.y.toFixed(4),e=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function bI(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function AI(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:n.getAttribLocation(t,s),locationSize:a}}return e}function vl(n){return n!==""}function iA(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rA(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _I=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(n){return n.replace(_I,SI)}var xI=new Map;function SI(n,t){let e=Ke[t];if(e===void 0){let i=xI.get(t);if(i!==void 0)e=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return gf(e)}var wI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oA(n){return n.replace(wI,MI)}function MI(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function sA(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function CI(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Op?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===$y?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vi&&(t="SHADOWMAP_TYPE_VSM"),t}function TI(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case Mo:t="ENVMAP_TYPE_CUBE";break;case dl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function EI(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mo:t="ENVMAP_MODE_REFRACTION";break}return t}function RI(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Up:t="ENVMAP_BLENDING_MULTIPLY";break;case mb:t="ENVMAP_BLENDING_MIX";break;case gb:t="ENVMAP_BLENDING_ADD";break}return t}function II(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function DI(n,t,e,i){let r=n.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=CI(e),c=TI(e),d=EI(e),u=RI(e),h=II(e),f=yI(e),g=bI(o),v=r.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vl).join(`
`),p.length>0&&(p+=`
`)):(m=[sA(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),p=[sA(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?Ke.tonemapping_pars_fragment:"",e.toneMapping!==cr?gI("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,mI("linearToOutputTexel",e.outputColorSpace),vI(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vl).join(`
`)),s=gf(s),s=iA(s,e),s=rA(s,e),a=gf(a),a=iA(a,e),a=rA(a,e),s=oA(s),a=oA(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+s,_=M+p+a,D=eA(r,r.VERTEX_SHADER,w),R=eA(r,r.FRAGMENT_SHADER,_);r.attachShader(v,D),r.attachShader(v,R),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(E){if(n.debug.checkShaderErrors){let W=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(D).trim(),K=r.getShaderInfoLog(R).trim(),J=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,R);else{let Y=nA(r,D,"vertex"),V=nA(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+Y+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||K==="")&&(q=!1);q&&(E.diagnostics={runnable:J,programLog:W,vertexShader:{log:U,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(D),r.deleteShader(R),k=new Fs(r,v),x=AI(r,v)}let k;this.getUniforms=function(){return k===void 0&&T(this),k};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(v,uI)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hI++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}var PI=0,vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new yf(t),e.set(t,i)),i}},yf=class{constructor(t){this.id=PI++,this.code=t,this.usedTimes=0}};function LI(n,t,e,i,r,o,s){let a=new $a,l=new vf,c=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,A,E,W,U){let K=W.fog,J=U.geometry,q=x.isMeshStandardMaterial?W.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),V=Y&&Y.mapping===dl?Y.image.height:null,le=g[x.type];x.precision!==null&&(f=r.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Me=me!==void 0?me.length:0,He=0;J.morphAttributes.position!==void 0&&(He=1),J.morphAttributes.normal!==void 0&&(He=2),J.morphAttributes.color!==void 0&&(He=3);let vt,G,oe,Se;if(le){let St=Gi[le];vt=St.vertexShader,G=St.fragmentShader}else vt=x.vertexShader,G=x.fragmentShader,l.update(x),oe=l.getVertexShaderID(x),Se=l.getFragmentShaderID(x);let de=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Ze=U.isBatchedMesh===!0,Ot=!!x.map,it=!!x.matcap,Gt=!!Y,C=!!x.aoMap,Dn=!!x.lightMap,et=!!x.bumpMap,tt=!!x.normalMap,Ee=!!x.displacementMap,Dt=!!x.emissiveMap,Ce=!!x.metalnessMap,S=!!x.roughnessMap,y=x.anisotropy>0,O=x.clearcoat>0,j=x.dispersion>0,ee=x.iridescence>0,X=x.sheen>0,Te=x.transmission>0,pe=y&&!!x.anisotropyMap,be=O&&!!x.clearcoatMap,lt=O&&!!x.clearcoatNormalMap,re=O&&!!x.clearcoatRoughnessMap,Ae=ee&&!!x.iridescenceMap,Le=ee&&!!x.iridescenceThicknessMap,Ue=X&&!!x.sheenColorMap,_e=X&&!!x.sheenRoughnessMap,rt=!!x.specularMap,je=!!x.specularColorMap,Pt=!!x.specularIntensityMap,I=Te&&!!x.transmissionMap,ue=Te&&!!x.thicknessMap,z=!!x.gradientMap,Z=!!x.alphaMap,ge=x.alphaTest>0,fe=!!x.alphaHash,Ge=!!x.extensions,Xt=cr;x.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Xt=n.toneMapping);let gn={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:vt,fragmentShader:G,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ze,batchingColor:Ze&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:_o,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:it,envMap:Gt,envMapMode:Gt&&Y.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:Dn,bumpMap:et,normalMap:tt,displacementMap:h&&Ee,emissiveMap:Dt,normalMapObjectSpace:tt&&x.normalMapType===Tb,normalMapTangentSpace:tt&&x.normalMapType===$p,metalnessMap:Ce,roughnessMap:S,anisotropy:y,anisotropyMap:pe,clearcoat:O,clearcoatMap:be,clearcoatNormalMap:lt,clearcoatRoughnessMap:re,dispersion:j,iridescence:ee,iridescenceMap:Ae,iridescenceThicknessMap:Le,sheen:X,sheenColorMap:Ue,sheenRoughnessMap:_e,specularMap:rt,specularColorMap:je,specularIntensityMap:Pt,transmission:Te,transmissionMap:I,thicknessMap:ue,gradientMap:z,opaque:x.transparent===!1&&x.blending===yo&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:ge,alphaHash:fe,combine:x.combine,mapUv:Ot&&v(x.map.channel),aoMapUv:C&&v(x.aoMap.channel),lightMapUv:Dn&&v(x.lightMap.channel),bumpMapUv:et&&v(x.bumpMap.channel),normalMapUv:tt&&v(x.normalMap.channel),displacementMapUv:Ee&&v(x.displacementMap.channel),emissiveMapUv:Dt&&v(x.emissiveMap.channel),metalnessMapUv:Ce&&v(x.metalnessMap.channel),roughnessMapUv:S&&v(x.roughnessMap.channel),anisotropyMapUv:pe&&v(x.anisotropyMap.channel),clearcoatMapUv:be&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:lt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(x.sheenRoughnessMap.channel),specularMapUv:rt&&v(x.specularMap.channel),specularColorMapUv:je&&v(x.specularColorMap.channel),specularIntensityMapUv:Pt&&v(x.specularIntensityMap.channel),transmissionMapUv:I&&v(x.transmissionMap.channel),thicknessMapUv:ue&&v(x.thicknessMap.channel),alphaMapUv:Z&&v(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(tt||y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!J.attributes.uv&&(Ot||Z),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:U.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:He,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===Ct,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zi,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ge&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&x.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gn.vertexUv1s=c.has(1),gn.vertexUv2s=c.has(2),gn.vertexUv3s=c.has(3),c.clear(),gn}function p(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let E in x.defines)A.push(E),A.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(M(A,x),w(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function M(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function w(x,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),x.push(a.mask)}function _(x){let A=g[x.type],E;if(A){let W=Gi[A];E=Vb.clone(W.uniforms)}else E=x.uniforms;return E}function D(x,A){let E;for(let W=0,U=d.length;W<U;W++){let K=d[W];if(K.cacheKey===A){E=K,++E.usedTimes;break}}return E===void 0&&(E=new DI(n,A,x,o),d.push(E)),E}function R(x){if(--x.usedTimes===0){let A=d.indexOf(x);d[A]=d[d.length-1],d.pop(),x.destroy()}}function T(x){l.remove(x)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:R,releaseShaderCache:T,programs:d,dispose:k}}function kI(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,l){n.get(s)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:o}}function OI(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function aA(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function lA(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function s(u,h,f,g,v,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,h,f,g,v,m){let p=s(u,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):e.push(p)}function l(u,h,f,g,v,m){let p=s(u,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,h){e.length>1&&e.sort(u||OI),i.length>1&&i.sort(h||aA),r.length>1&&r.sort(h||aA)}function d(){for(let u=t,h=n.length;u<h;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function NI(){let n=new WeakMap;function t(i,r){let o=n.get(i),s;return o===void 0?(s=new lA,n.set(i,[s])):r>=o.length?(s=new lA,o.push(s)):s=o[r],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function FI(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new at};break;case"SpotLight":e={position:new N,direction:new N,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function BI(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var UI=0;function VI(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zI(n){let t=new FI,e=BI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);let r=new N,o=new Qt,s=new Qt;function a(c){let d=0,u=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,w=0,_=0,D=0,R=0,T=0;c.sort(VI);for(let x=0,A=c.length;x<A;x++){let E=c[x],W=E.color,U=E.intensity,K=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=W.r*U,u+=W.g*U,h+=W.b*U;else if(E.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(E.sh.coefficients[q],U);T++}else if(E.isDirectionalLight){let q=t.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Y=E.shadow,V=e.get(E);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=E.shadow.matrix,M++}i.directional[f]=q,f++}else if(E.isSpotLight){let q=t.get(E);q.position.setFromMatrixPosition(E.matrixWorld),q.color.copy(W).multiplyScalar(U),q.distance=K,q.coneCos=Math.cos(E.angle),q.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),q.decay=E.decay,i.spot[v]=q;let Y=E.shadow;if(E.map&&(i.spotLightMap[D]=E.map,D++,Y.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[v]=Y.matrix,E.castShadow){let V=e.get(E);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=J,_++}v++}else if(E.isRectAreaLight){let q=t.get(E);q.color.copy(W).multiplyScalar(U),q.halfWidth.set(E.width*.5,0,0),q.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=q,m++}else if(E.isPointLight){let q=t.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),q.distance=E.distance,q.decay=E.decay,E.castShadow){let Y=E.shadow,V=e.get(E);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=E.shadow.matrix,w++}i.point[g]=q,g++}else if(E.isHemisphereLight){let q=t.get(E);q.skyColor.copy(E.color).multiplyScalar(U),q.groundColor.copy(E.groundColor).multiplyScalar(U),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;let k=i.hash;(k.directionalLength!==f||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==M||k.numPointShadows!==w||k.numSpotShadows!==_||k.numSpotMaps!==D||k.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,k.directionalLength=f,k.pointLength=g,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=M,k.numPointShadows=w,k.numSpotShadows=_,k.numSpotMaps=D,k.numLightProbes=T,i.version=UI++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0,m=d.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let w=c[p];if(w.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),u++}else if(w.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),s.identity(),o.copy(w.matrixWorld),o.premultiply(m),s.extractRotation(o),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),g++}else if(w.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){let _=i.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function cA(n){let t=new zI(n),e=[],i=[];function r(d){c.camera=d,e.length=0,i.length=0}function o(d){e.push(d)}function s(d){i.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function HI(n){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new cA(n),t.set(r,[a])):o>=s.length?(a=new cA(n),s.push(a)):a=s[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var WI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qI(n,t,e){let i=new il,r=new Xe,o=new Xe,s=new Zt,a=new rd({depthPacking:Cb}),l=new od,c={},d=e.maxTextureSize,u={[ar]:In,[In]:ar,[zi]:zi},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:WI,fragmentShader:GI}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new zr;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Nn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op;let p=this.type;this.render=function(R,T,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let x=n.getRenderTarget(),A=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),W=n.state;W.setBlending(lr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let U=p!==Vi&&this.type===Vi,K=p===Vi&&this.type!==Vi;for(let J=0,q=R.length;J<q;J++){let Y=R[J],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let le=V.getFrameExtents();if(r.multiply(le),o.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/le.x),r.x=o.x*le.x,V.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/le.y),r.y=o.y*le.y,V.mapSize.y=o.y)),V.map===null||U===!0||K===!0){let Me=this.type!==Vi?{minFilter:di,magFilter:di}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(r.x,r.y,Me),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let me=V.getViewportCount();for(let Me=0;Me<me;Me++){let He=V.getViewport(Me);s.set(o.x*He.x,o.y*He.y,o.x*He.z,o.y*He.w),W.viewport(s),V.updateMatrices(Y,Me),i=V.getFrustum(),_(T,k,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Vi&&M(V,k),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,A,E)};function M(R,T){let k=t.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ui(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,k,h,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,k,f,v,null)}function w(R,T,k,x){let A=null,E=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)A=E;else if(A=k.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=A.uuid,U=T.uuid,K=c[W];K===void 0&&(K={},c[W]=K);let J=K[U];J===void 0&&(J=A.clone(),K[U]=J,T.addEventListener("dispose",D)),A=J}if(A.visible=T.visible,A.wireframe=T.wireframe,x===Vi?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let W=n.properties.get(A);W.light=k}return A}function _(R,T,k,x,A){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===Vi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);let U=t.update(R),K=R.material;if(Array.isArray(K)){let J=U.groups;for(let q=0,Y=J.length;q<Y;q++){let V=J[q],le=K[V.materialIndex];if(le&&le.visible){let me=w(R,le,x,A);R.onBeforeShadow(n,R,T,k,U,me,V),n.renderBufferDirect(k,null,U,me,R,V),R.onAfterShadow(n,R,T,k,U,me,V)}}}else if(K.visible){let J=w(R,K,x,A);R.onBeforeShadow(n,R,T,k,U,J,null),n.renderBufferDirect(k,null,U,J,R,null),R.onAfterShadow(n,R,T,k,U,J,null)}}let W=R.children;for(let U=0,K=W.length;U<K;U++)_(W[U],T,k,x,A)}function D(R){R.target.removeEventListener("dispose",D);for(let k in c){let x=c[k],A=R.target.uuid;A in x&&(x[A].dispose(),delete x[A])}}}var XI={[vd]:yd,[bd]:xd,[Ad]:Sd,[bo]:_d,[yd]:vd,[xd]:bd,[Sd]:Ad,[_d]:bo};function jI(n,t){function e(){let I=!1,ue=new Zt,z=null,Z=new Zt(0,0,0,0);return{setMask:function(ge){z!==ge&&!I&&(n.colorMask(ge,ge,ge,ge),z=ge)},setLocked:function(ge){I=ge},setClear:function(ge,fe,Ge,Xt,gn){gn===!0&&(ge*=Xt,fe*=Xt,Ge*=Xt),ue.set(ge,fe,Ge,Xt),Z.equals(ue)===!1&&(n.clearColor(ge,fe,Ge,Xt),Z.copy(ue))},reset:function(){I=!1,z=null,Z.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,z=null,Z=null,ge=null;return{setReversed:function(fe){if(ue!==fe){let Ge=t.get("EXT_clip_control");ue?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let Xt=ge;ge=null,this.setClear(Xt)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?de(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(fe){z!==fe&&!I&&(n.depthMask(fe),z=fe)},setFunc:function(fe){if(ue&&(fe=XI[fe]),Z!==fe){switch(fe){case vd:n.depthFunc(n.NEVER);break;case yd:n.depthFunc(n.ALWAYS);break;case bd:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case Ad:n.depthFunc(n.EQUAL);break;case _d:n.depthFunc(n.GEQUAL);break;case xd:n.depthFunc(n.GREATER);break;case Sd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=fe}},setLocked:function(fe){I=fe},setClear:function(fe){ge!==fe&&(ue&&(fe=1-fe),n.clearDepth(fe),ge=fe)},reset:function(){I=!1,z=null,Z=null,ge=null,ue=!1}}}function r(){let I=!1,ue=null,z=null,Z=null,ge=null,fe=null,Ge=null,Xt=null,gn=null;return{setTest:function(St){I||(St?de(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(St){ue!==St&&!I&&(n.stencilMask(St),ue=St)},setFunc:function(St,fi,qi){(z!==St||Z!==fi||ge!==qi)&&(n.stencilFunc(St,fi,qi),z=St,Z=fi,ge=qi)},setOp:function(St,fi,qi){(fe!==St||Ge!==fi||Xt!==qi)&&(n.stencilOp(St,fi,qi),fe=St,Ge=fi,Xt=qi)},setLocked:function(St){I=St},setClear:function(St){gn!==St&&(n.clearStencil(St),gn=St)},reset:function(){I=!1,ue=null,z=null,Z=null,ge=null,fe=null,Ge=null,Xt=null,gn=null}}}let o=new e,s=new i,a=new r,l=new WeakMap,c=new WeakMap,d={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,w=null,_=null,D=null,R=null,T=new at(0,0,0),k=0,x=!1,A=null,E=null,W=null,U=null,K=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Y>=2);let le=null,me={},Me=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),vt=new Zt().fromArray(Me),G=new Zt().fromArray(He);function oe(I,ue,z,Z){let ge=new Uint8Array(4),fe=n.createTexture();n.bindTexture(I,fe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<z;Ge++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ue+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return fe}let Se={};Se[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(n.DEPTH_TEST),s.setFunc(bo),et(!1),tt(kp),de(n.CULL_FACE),C(lr);function de(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function De(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Oe(I,ue){return u[I]!==ue?(n.bindFramebuffer(I,ue),u[I]=ue,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ze(I,ue){let z=f,Z=!1;if(I){z=h.get(ue),z===void 0&&(z=[],h.set(ue,z));let ge=I.textures;if(z.length!==ge.length||z[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Ge=ge.length;fe<Ge;fe++)z[fe]=n.COLOR_ATTACHMENT0+fe;z.length=ge.length,Z=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,Z=!0);Z&&n.drawBuffers(z)}function Ot(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let it={[Fr]:n.FUNC_ADD,[Yy]:n.FUNC_SUBTRACT,[Qy]:n.FUNC_REVERSE_SUBTRACT};it[eb]=n.MIN,it[tb]=n.MAX;let Gt={[nb]:n.ZERO,[ib]:n.ONE,[rb]:n.SRC_COLOR,[Kc]:n.SRC_ALPHA,[db]:n.SRC_ALPHA_SATURATE,[lb]:n.DST_COLOR,[sb]:n.DST_ALPHA,[ob]:n.ONE_MINUS_SRC_COLOR,[Zc]:n.ONE_MINUS_SRC_ALPHA,[cb]:n.ONE_MINUS_DST_COLOR,[ab]:n.ONE_MINUS_DST_ALPHA,[ub]:n.CONSTANT_COLOR,[hb]:n.ONE_MINUS_CONSTANT_COLOR,[pb]:n.CONSTANT_ALPHA,[fb]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,ue,z,Z,ge,fe,Ge,Xt,gn,St){if(I===lr){v===!0&&(De(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),I!==Jy){if(I!==m||St!==x){if((p!==Fr||_!==Fr)&&(n.blendEquation(n.FUNC_ADD),p=Fr,_=Fr),St)switch(I){case yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Np:n.blendFunc(n.ONE,n.ONE);break;case Fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Np:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,w=null,D=null,R=null,T.set(0,0,0),k=0,m=I,x=St}return}ge=ge||ue,fe=fe||z,Ge=Ge||Z,(ue!==p||ge!==_)&&(n.blendEquationSeparate(it[ue],it[ge]),p=ue,_=ge),(z!==M||Z!==w||fe!==D||Ge!==R)&&(n.blendFuncSeparate(Gt[z],Gt[Z],Gt[fe],Gt[Ge]),M=z,w=Z,D=fe,R=Ge),(Xt.equals(T)===!1||gn!==k)&&(n.blendColor(Xt.r,Xt.g,Xt.b,gn),T.copy(Xt),k=gn),m=I,x=!1}function Dn(I,ue){I.side===zi?De(n.CULL_FACE):de(n.CULL_FACE);let z=I.side===In;ue&&(z=!z),et(z),I.blending===yo&&I.transparent===!1?C(lr):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),o.setMask(I.colorWrite);let Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){A!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),A=I)}function tt(I){I!==Ky?(de(n.CULL_FACE),I!==E&&(I===kp?n.cullFace(n.BACK):I===Zy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),E=I}function Ee(I){I!==W&&(q&&n.lineWidth(I),W=I)}function Dt(I,ue,z){I?(de(n.POLYGON_OFFSET_FILL),(U!==ue||K!==z)&&(n.polygonOffset(ue,z),U=ue,K=z)):De(n.POLYGON_OFFSET_FILL)}function Ce(I){I?de(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function S(I){I===void 0&&(I=n.TEXTURE0+J-1),le!==I&&(n.activeTexture(I),le=I)}function y(I,ue,z){z===void 0&&(le===null?z=n.TEXTURE0+J-1:z=le);let Z=me[z];Z===void 0&&(Z={type:void 0,texture:void 0},me[z]=Z),(Z.type!==I||Z.texture!==ue)&&(le!==z&&(n.activeTexture(z),le=z),n.bindTexture(I,ue||Se[I]),Z.type=I,Z.texture=ue)}function O(){let I=me[le];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(I){vt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),vt.copy(I))}function _e(I){G.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),G.copy(I))}function rt(I,ue){let z=c.get(ue);z===void 0&&(z=new WeakMap,c.set(ue,z));let Z=z.get(I);Z===void 0&&(Z=n.getUniformBlockIndex(ue,I.name),z.set(I,Z))}function je(I,ue){let Z=c.get(ue).get(I);l.get(ue)!==Z&&(n.uniformBlockBinding(ue,Z,I.__bindingPointIndex),l.set(ue,Z))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},le=null,me={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,w=null,_=null,D=null,R=null,T=new at(0,0,0),k=0,x=!1,A=null,E=null,W=null,U=null,K=null,vt.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:de,disable:De,bindFramebuffer:Oe,drawBuffers:Ze,useProgram:Ot,setBlending:C,setMaterial:Dn,setFlipSided:et,setCullFace:tt,setLineWidth:Ee,setPolygonOffset:Dt,setScissorTest:Ce,activeTexture:S,bindTexture:y,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:ee,texImage2D:Ae,texImage3D:Le,updateUBOMapping:rt,uniformBlockBinding:je,texStorage2D:lt,texStorage3D:re,texSubImage2D:X,texSubImage3D:Te,compressedTexSubImage2D:pe,compressedTexSubImage3D:be,scissor:Ue,viewport:_e,reset:Pt}}function KI(n,t,e,i,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):ja("canvas")}function v(S,y,O){let j=1,ee=Ce(S);if((ee.width>O||ee.height>O)&&(j=O/Math.max(ee.width,ee.height)),j<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let X=Math.floor(j*ee.width),Te=Math.floor(j*ee.height);u===void 0&&(u=g(X,Te));let pe=y?g(X,Te):u;return pe.width=X,pe.height=Te,pe.getContext("2d").drawImage(S,0,0,X,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+Te+")."),pe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,y,O,j,ee=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=y;if(y===n.RED&&(O===n.FLOAT&&(X=n.R32F),O===n.HALF_FLOAT&&(X=n.R16F),O===n.UNSIGNED_BYTE&&(X=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.R8UI),O===n.UNSIGNED_SHORT&&(X=n.R16UI),O===n.UNSIGNED_INT&&(X=n.R32UI),O===n.BYTE&&(X=n.R8I),O===n.SHORT&&(X=n.R16I),O===n.INT&&(X=n.R32I)),y===n.RG&&(O===n.FLOAT&&(X=n.RG32F),O===n.HALF_FLOAT&&(X=n.RG16F),O===n.UNSIGNED_BYTE&&(X=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RG8UI),O===n.UNSIGNED_SHORT&&(X=n.RG16UI),O===n.UNSIGNED_INT&&(X=n.RG32UI),O===n.BYTE&&(X=n.RG8I),O===n.SHORT&&(X=n.RG16I),O===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGB8UI),O===n.UNSIGNED_SHORT&&(X=n.RGB16UI),O===n.UNSIGNED_INT&&(X=n.RGB32UI),O===n.BYTE&&(X=n.RGB8I),O===n.SHORT&&(X=n.RGB16I),O===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),O===n.UNSIGNED_INT&&(X=n.RGBA32UI),O===n.BYTE&&(X=n.RGBA8I),O===n.SHORT&&(X=n.RGBA16I),O===n.INT&&(X=n.RGBA32I)),y===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),y===n.RGBA){let Te=ee?qa:ft.getTransfer(j);O===n.FLOAT&&(X=n.RGBA32F),O===n.HALF_FLOAT&&(X=n.RGBA16F),O===n.UNSIGNED_BYTE&&(X=Te===Ct?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function _(S,y){let O;return S?y===null||y===Kr||y===Co?O=n.DEPTH24_STENCIL8:y===Wi?O=n.DEPTH32F_STENCIL8:y===Ps&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Kr||y===Co?O=n.DEPTH_COMPONENT24:y===Wi?O=n.DEPTH_COMPONENT32F:y===Ps&&(O=n.DEPTH_COMPONENT16),O}function D(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==di&&S.minFilter!==Ti?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function R(S){let y=S.target;y.removeEventListener("dispose",R),k(y),y.isVideoTexture&&d.delete(y)}function T(S){let y=S.target;y.removeEventListener("dispose",T),A(y)}function k(S){let y=i.get(S);if(y.__webglInit===void 0)return;let O=S.source,j=h.get(O);if(j){let ee=j[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&x(S),Object.keys(j).length===0&&h.delete(O)}i.remove(S)}function x(S){let y=i.get(S);n.deleteTexture(y.__webglTexture);let O=S.source,j=h.get(O);delete j[y.__cacheKey],s.memory.textures--}function A(S){let y=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let ee=0;ee<y.__webglFramebuffer[j].length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[j][ee]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=S.textures;for(let j=0,ee=O.length;j<ee;j++){let X=i.get(O[j]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(O[j])}i.remove(S)}let E=0;function W(){E=0}function U(){let S=E;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),E+=1,S}function K(S){let y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function J(S,y){let O=i.get(S);if(S.isVideoTexture&&Ee(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(O,S,y);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function q(S,y){let O=i.get(S);if(S.version>0&&O.__version!==S.version){G(O,S,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function Y(S,y){let O=i.get(S);if(S.version>0&&O.__version!==S.version){G(O,S,y);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function V(S,y){let O=i.get(S);if(S.version>0&&O.__version!==S.version){oe(O,S,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}let le={[$c]:n.REPEAT,[Nr]:n.CLAMP_TO_EDGE,[Jc]:n.MIRRORED_REPEAT},me={[di]:n.NEAREST,[wb]:n.NEAREST_MIPMAP_NEAREST,[ul]:n.NEAREST_MIPMAP_LINEAR,[Ti]:n.LINEAR,[Cd]:n.LINEAR_MIPMAP_NEAREST,[jr]:n.LINEAR_MIPMAP_LINEAR},Me={[Eb]:n.NEVER,[kb]:n.ALWAYS,[Rb]:n.LESS,[Jp]:n.LEQUAL,[Ib]:n.EQUAL,[Lb]:n.GEQUAL,[Db]:n.GREATER,[Pb]:n.NOTEQUAL};function He(S,y){if(y.type===Wi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ti||y.magFilter===Cd||y.magFilter===ul||y.magFilter===jr||y.minFilter===Ti||y.minFilter===Cd||y.minFilter===ul||y.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,le[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,le[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,le[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,me[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,me[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===di||y.minFilter!==ul&&y.minFilter!==jr||y.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function vt(S,y){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",R));let j=y.source,ee=h.get(j);ee===void 0&&(ee={},h.set(j,ee));let X=K(y);if(X!==S.__cacheKey){ee[X]===void 0&&(ee[X]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,O=!0),ee[X].usedTimes++;let Te=ee[S.__cacheKey];Te!==void 0&&(ee[S.__cacheKey].usedTimes--,Te.usedTimes===0&&x(y)),S.__cacheKey=X,S.__webglTexture=ee[X].texture}return O}function G(S,y,O){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);let ee=vt(S,y),X=y.source;e.bindTexture(j,S.__webglTexture,n.TEXTURE0+O);let Te=i.get(X);if(X.version!==Te.__version||ee===!0){e.activeTexture(n.TEXTURE0+O);let pe=ft.getPrimaries(ft.workingColorSpace),be=y.colorSpace===dr?null:ft.getPrimaries(y.colorSpace),lt=y.colorSpace===dr||pe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let re=v(y.image,!1,r.maxTextureSize);re=Dt(y,re);let Ae=o.convert(y.format,y.colorSpace),Le=o.convert(y.type),Ue=w(y.internalFormat,Ae,Le,y.colorSpace,y.isVideoTexture);He(j,y);let _e,rt=y.mipmaps,je=y.isVideoTexture!==!0,Pt=Te.__version===void 0||ee===!0,I=X.dataReady,ue=D(y,re);if(y.isDepthTexture)Ue=_(y.format===Ao,y.type),Pt&&(je?e.texStorage2D(n.TEXTURE_2D,1,Ue,re.width,re.height):e.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,Ae,Le,null));else if(y.isDataTexture)if(rt.length>0){je&&Pt&&e.texStorage2D(n.TEXTURE_2D,ue,Ue,rt[0].width,rt[0].height);for(let z=0,Z=rt.length;z<Z;z++)_e=rt[z],je?I&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,_e.width,_e.height,Ae,Le,_e.data):e.texImage2D(n.TEXTURE_2D,z,Ue,_e.width,_e.height,0,Ae,Le,_e.data);y.generateMipmaps=!1}else je?(Pt&&e.texStorage2D(n.TEXTURE_2D,ue,Ue,re.width,re.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Ae,Le,re.data)):e.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,Ae,Le,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){je&&Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ue,rt[0].width,rt[0].height,re.depth);for(let z=0,Z=rt.length;z<Z;z++)if(_e=rt[z],y.format!==pi)if(Ae!==null)if(je){if(I)if(y.layerUpdates.size>0){let ge=sf(_e.width,_e.height,y.format,y.type);for(let fe of y.layerUpdates){let Ge=_e.data.subarray(fe*ge/_e.data.BYTES_PER_ELEMENT,(fe+1)*ge/_e.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,fe,_e.width,_e.height,1,Ae,Ge)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,re.depth,Ae,_e.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,Ue,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,_e.width,_e.height,re.depth,Ae,Le,_e.data):e.texImage3D(n.TEXTURE_2D_ARRAY,z,Ue,_e.width,_e.height,re.depth,0,Ae,Le,_e.data)}else{je&&Pt&&e.texStorage2D(n.TEXTURE_2D,ue,Ue,rt[0].width,rt[0].height);for(let z=0,Z=rt.length;z<Z;z++)_e=rt[z],y.format!==pi?Ae!==null?je?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,_e.width,_e.height,Ae,_e.data):e.compressedTexImage2D(n.TEXTURE_2D,z,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?I&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,_e.width,_e.height,Ae,Le,_e.data):e.texImage2D(n.TEXTURE_2D,z,Ue,_e.width,_e.height,0,Ae,Le,_e.data)}else if(y.isDataArrayTexture)if(je){if(Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ue,re.width,re.height,re.depth),I)if(y.layerUpdates.size>0){let z=sf(re.width,re.height,y.format,y.type);for(let Z of y.layerUpdates){let ge=re.data.subarray(Z*z/re.data.BYTES_PER_ELEMENT,(Z+1)*z/re.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,Ae,Le,ge)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ae,Le,re.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,Ae,Le,re.data);else if(y.isData3DTexture)je?(Pt&&e.texStorage3D(n.TEXTURE_3D,ue,Ue,re.width,re.height,re.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ae,Le,re.data)):e.texImage3D(n.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,Ae,Le,re.data);else if(y.isFramebufferTexture){if(Pt)if(je)e.texStorage2D(n.TEXTURE_2D,ue,Ue,re.width,re.height);else{let z=re.width,Z=re.height;for(let ge=0;ge<ue;ge++)e.texImage2D(n.TEXTURE_2D,ge,Ue,z,Z,0,Ae,Le,null),z>>=1,Z>>=1}}else if(rt.length>0){if(je&&Pt){let z=Ce(rt[0]);e.texStorage2D(n.TEXTURE_2D,ue,Ue,z.width,z.height)}for(let z=0,Z=rt.length;z<Z;z++)_e=rt[z],je?I&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,Ae,Le,_e):e.texImage2D(n.TEXTURE_2D,z,Ue,Ae,Le,_e);y.generateMipmaps=!1}else if(je){if(Pt){let z=Ce(re);e.texStorage2D(n.TEXTURE_2D,ue,Ue,z.width,z.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Le,re)}else e.texImage2D(n.TEXTURE_2D,0,Ue,Ae,Le,re);m(y)&&p(j),Te.__version=X.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function oe(S,y,O){if(y.image.length!==6)return;let j=vt(S,y),ee=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);let X=i.get(ee);if(ee.version!==X.__version||j===!0){e.activeTexture(n.TEXTURE0+O);let Te=ft.getPrimaries(ft.workingColorSpace),pe=y.colorSpace===dr?null:ft.getPrimaries(y.colorSpace),be=y.colorSpace===dr||Te===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let lt=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,Ae=[];for(let Z=0;Z<6;Z++)!lt&&!re?Ae[Z]=v(y.image[Z],!0,r.maxCubemapSize):Ae[Z]=re?y.image[Z].image:y.image[Z],Ae[Z]=Dt(y,Ae[Z]);let Le=Ae[0],Ue=o.convert(y.format,y.colorSpace),_e=o.convert(y.type),rt=w(y.internalFormat,Ue,_e,y.colorSpace),je=y.isVideoTexture!==!0,Pt=X.__version===void 0||j===!0,I=ee.dataReady,ue=D(y,Le);He(n.TEXTURE_CUBE_MAP,y);let z;if(lt){je&&Pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ue,rt,Le.width,Le.height);for(let Z=0;Z<6;Z++){z=Ae[Z].mipmaps;for(let ge=0;ge<z.length;ge++){let fe=z[ge];y.format!==pi?Ue!==null?je?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,fe.width,fe.height,Ue,fe.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,rt,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,0,0,fe.width,fe.height,Ue,_e,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge,rt,fe.width,fe.height,0,Ue,_e,fe.data)}}}else{if(z=y.mipmaps,je&&Pt){z.length>0&&ue++;let Z=Ce(Ae[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ue,rt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){je?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae[Z].width,Ae[Z].height,Ue,_e,Ae[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,rt,Ae[Z].width,Ae[Z].height,0,Ue,_e,Ae[Z].data);for(let ge=0;ge<z.length;ge++){let Ge=z[ge].image[Z].image;je?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Ge.width,Ge.height,Ue,_e,Ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,rt,Ge.width,Ge.height,0,Ue,_e,Ge.data)}}else{je?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ue,_e,Ae[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,rt,Ue,_e,Ae[Z]);for(let ge=0;ge<z.length;ge++){let fe=z[ge];je?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,0,0,Ue,_e,fe.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge+1,rt,Ue,_e,fe.image[Z])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),X.__version=ee.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Se(S,y,O,j,ee,X){let Te=o.convert(O.format,O.colorSpace),pe=o.convert(O.type),be=w(O.internalFormat,Te,pe,O.colorSpace),lt=i.get(y),re=i.get(O);if(re.__renderTarget=y,!lt.__hasExternalTextures){let Ae=Math.max(1,y.width>>X),Le=Math.max(1,y.height>>X);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?e.texImage3D(ee,X,be,Ae,Le,y.depth,0,Te,pe,null):e.texImage2D(ee,X,be,Ae,Le,0,Te,pe,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),tt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ee,re.__webglTexture,0,et(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ee,re.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function de(S,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){let j=y.depthTexture,ee=j&&j.isDepthTexture?j.type:null,X=_(y.stencilBuffer,ee),Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=et(y);tt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,X,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,S)}else{let j=y.textures;for(let ee=0;ee<j.length;ee++){let X=j[ee],Te=o.convert(X.format,X.colorSpace),pe=o.convert(X.type),be=w(X.internalFormat,Te,pe,X.colorSpace),lt=et(y);O&&tt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,be,y.width,y.height):tt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,be,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,be,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);let ee=j.__webglTexture,X=et(y);if(y.depthTexture.format===vo)tt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(y.depthTexture.format===Ao)tt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Oe(S){let y=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){let j=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",ee)};j.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=j}if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(y.__webglFramebuffer,S)}else if(O){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),de(y.__webglDepthbuffer[j],S,!1);else{let ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,X)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),de(y.__webglDepthbuffer,S,!1);else{let j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ee)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(S,y,O){let j=i.get(S);y!==void 0&&Se(j.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Oe(S)}function Ot(S){let y=S.texture,O=i.get(S),j=i.get(y);S.addEventListener("dispose",T);let ee=S.textures,X=S.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,s.memory.textures++),X){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let be=0;be<y.mipmaps.length;be++)O.__webglFramebuffer[pe][be]=n.createFramebuffer()}else O.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)O.__webglFramebuffer[pe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Te)for(let pe=0,be=ee.length;pe<be;pe++){let lt=i.get(ee[pe]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),s.memory.textures++)}if(S.samples>0&&tt(S)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){let be=ee[pe];O.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);let lt=o.convert(be.format,be.colorSpace),re=o.convert(be.type),Ae=w(be.internalFormat,lt,re,be.colorSpace,S.isXRRenderTarget===!0),Le=et(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ae,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),de(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),He(n.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)Se(O.__webglFramebuffer[pe][be],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,be);else Se(O.__webglFramebuffer[pe],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Te){for(let pe=0,be=ee.length;pe<be;pe++){let lt=ee[pe],re=i.get(lt);e.bindTexture(n.TEXTURE_2D,re.__webglTexture),He(n.TEXTURE_2D,lt),Se(O.__webglFramebuffer,S,lt,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(lt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let pe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(pe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pe,j.__webglTexture),He(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)Se(O.__webglFramebuffer[be],S,y,n.COLOR_ATTACHMENT0,pe,be);else Se(O.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,pe,0);m(y)&&p(pe),e.unbindTexture()}S.depthBuffer&&Oe(S)}function it(S){let y=S.textures;for(let O=0,j=y.length;O<j;O++){let ee=y[O];if(m(ee)){let X=M(S),Te=i.get(ee).__webglTexture;e.bindTexture(X,Te),p(X),e.unbindTexture()}}}let Gt=[],C=[];function Dn(S){if(S.samples>0){if(tt(S)===!1){let y=S.textures,O=S.width,j=S.height,ee=n.COLOR_BUFFER_BIT,X=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(S),pe=y.length>1;if(pe)for(let be=0;be<y.length;be++)e.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<y.length;be++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);let lt=i.get(y[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,ee,n.NEAREST),l===!0&&(Gt.length=0,C.length=0,Gt.push(n.COLOR_ATTACHMENT0+be),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Gt.push(X),C.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let be=0;be<y.length;be++){e.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);let lt=i.get(y[be]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function et(S){return Math.min(r.maxSamples,S.samples)}function tt(S){let y=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ee(S){let y=s.render.frame;d.get(S)!==y&&(d.set(S,y),S.update())}function Dt(S,y){let O=S.colorSpace,j=S.format,ee=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==_o&&O!==dr&&(ft.getTransfer(O)===Ct?(j!==pi||ee!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ce(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ze,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=tt}function ZI(n,t){function e(i,r=dr){let o,s=ft.getTransfer(r);if(i===Hi)return n.UNSIGNED_BYTE;if(i===Ed)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vp)return n.BYTE;if(i===zp)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===Td)return n.INT;if(i===Kr)return n.UNSIGNED_INT;if(i===Wi)return n.FLOAT;if(i===Ls)return n.HALF_FLOAT;if(i===Wp)return n.ALPHA;if(i===Gp)return n.RGB;if(i===pi)return n.RGBA;if(i===qp)return n.LUMINANCE;if(i===Xp)return n.LUMINANCE_ALPHA;if(i===vo)return n.DEPTH_COMPONENT;if(i===Ao)return n.DEPTH_STENCIL;if(i===jp)return n.RED;if(i===Id)return n.RED_INTEGER;if(i===Kp)return n.RG;if(i===Dd)return n.RG_INTEGER;if(i===Pd)return n.RGBA_INTEGER;if(i===hl||i===pl||i===fl||i===ml)if(s===Ct)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===hl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===hl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ml)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ld||i===kd||i===Od||i===Nd)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ld)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fd||i===Bd||i===Ud)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Fd||i===Bd)return s===Ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ud)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vd||i===zd||i===Hd||i===Wd||i===Gd||i===qd||i===Xd||i===jd||i===Kd||i===Zd||i===$d||i===Jd||i===Yd||i===Qd)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Vd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$d)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qd)return s===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gl||i===eu||i===tu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===gl)return s===Ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zp||i===nu||i===iu||i===ru)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===gl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===nu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===iu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ru)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Co?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var $I={type:"move"},yl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($I)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new xo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},JI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let r=new Zr,o=t.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ei({vertexShader:JI,fragmentShader:YI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new ol(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Af=class extends Bi{constructor(t,e){super();let i=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null,v=new bf,m=e.getContextAttributes(),p=null,M=null,w=[],_=[],D=new Xe,R=null,T=new wn;T.viewport=new Zt;let k=new wn;k.viewport=new Zt;let x=[T,k],A=new md,E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let oe=w[G];return oe===void 0&&(oe=new yl,w[G]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(G){let oe=w[G];return oe===void 0&&(oe=new yl,w[G]=oe),oe.getGripSpace()},this.getHand=function(G){let oe=w[G];return oe===void 0&&(oe=new yl,w[G]=oe),oe.getHandSpace()};function U(G){let oe=_.indexOf(G.inputSource);if(oe===-1)return;let Se=w[oe];Se!==void 0&&(Se.update(G.inputSource,G.frame,c||s),Se.dispatchEvent({type:G.type,data:G.inputSource}))}function K(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",J);for(let G=0;G<w.length;G++){let oe=_[G];oe!==null&&(_[G]=null,w[G].disconnect(oe))}E=null,W=null,v.reset(),t.setRenderTarget(p),f=null,h=null,u=null,r=null,M=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return Qr(this,null,function*(){if(r=G,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",K),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&(yield e.makeXRCompatible()),R=t.getPixelRatio(),t.getSize(D),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Se=null,de=null,De=null;m.depth&&(De=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Se=m.stencil?Ao:vo,de=m.stencil?Co:Kr);let Oe={colorFormat:e.RGBA8,depthFormat:De,scaleFactor:o};u=new XRWebGLBinding(r,e),h=u.createProjectionLayer(Oe),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Ui(h.textureWidth,h.textureHeight,{format:pi,type:Hi,depthTexture:new rl(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{let Se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(r,e,Se),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ui(f.framebufferWidth,f.framebufferHeight,{format:pi,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=yield r.requestReferenceSpace(a),vt.setContext(r),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(G){for(let oe=0;oe<G.removed.length;oe++){let Se=G.removed[oe],de=_.indexOf(Se);de>=0&&(_[de]=null,w[de].disconnect(Se))}for(let oe=0;oe<G.added.length;oe++){let Se=G.added[oe],de=_.indexOf(Se);if(de===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=_.length){_.push(Se),de=Oe;break}else if(_[Oe]===null){_[Oe]=Se,de=Oe;break}if(de===-1)break}let De=w[de];De&&De.connect(Se)}}let q=new N,Y=new N;function V(G,oe,Se){q.setFromMatrixPosition(oe.matrixWorld),Y.setFromMatrixPosition(Se.matrixWorld);let de=q.distanceTo(Y),De=oe.projectionMatrix.elements,Oe=Se.projectionMatrix.elements,Ze=De[14]/(De[10]-1),Ot=De[14]/(De[10]+1),it=(De[9]+1)/De[5],Gt=(De[9]-1)/De[5],C=(De[8]-1)/De[0],Dn=(Oe[8]+1)/Oe[0],et=Ze*C,tt=Ze*Dn,Ee=de/(-C+Dn),Dt=Ee*-C;if(oe.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Dt),G.translateZ(Ee),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),De[10]===-1)G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Ce=Ze+Ee,S=Ot+Ee,y=et-Dt,O=tt+(de-Dt),j=it*Ot/S*Ce,ee=Gt*Ot/S*Ce;G.projectionMatrix.makePerspective(y,O,j,ee,Ce,S),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function le(G,oe){oe===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(oe.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let oe=G.near,Se=G.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),A.near=k.near=T.near=oe,A.far=k.far=T.far=Se,(E!==A.near||W!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),E=A.near,W=A.far),T.layers.mask=G.layers.mask|2,k.layers.mask=G.layers.mask|4,A.layers.mask=T.layers.mask|k.layers.mask;let de=G.parent,De=A.cameras;le(A,de);for(let Oe=0;Oe<De.length;Oe++)le(De[Oe],de);De.length===2?V(A,T,k):A.projectionMatrix.copy(T.projectionMatrix),me(G,A,de)};function me(G,oe,Se){Se===null?G.matrix.copy(oe.matrixWorld):(G.matrix.copy(Se.matrixWorld),G.matrix.invert(),G.matrix.multiply(oe.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Es*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(A)};let Me=null;function He(G,oe){if(d=oe.getViewerPose(c||s),g=oe,d!==null){let Se=d.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let de=!1;Se.length!==A.cameras.length&&(A.cameras.length=0,de=!0);for(let Oe=0;Oe<Se.length;Oe++){let Ze=Se[Oe],Ot=null;if(f!==null)Ot=f.getViewport(Ze);else{let Gt=u.getViewSubImage(h,Ze);Ot=Gt.viewport,Oe===0&&(t.setRenderTargetTextures(M,Gt.colorTexture,h.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(M))}let it=x[Oe];it===void 0&&(it=new wn,it.layers.enable(Oe),it.viewport=new Zt,x[Oe]=it),it.matrix.fromArray(Ze.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Ze.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Oe===0&&(A.matrix.copy(it.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),de===!0&&A.cameras.push(it)}let De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){let Oe=u.getDepthInformation(Se[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(t,Oe,r.renderState)}}for(let Se=0;Se<w.length;Se++){let de=_[Se],De=w[Se];de!==null&&De!==void 0&&De.update(de,oe,c||s)}Me&&Me(G,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let vt=new dA;vt.setAnimationLoop(He),this.setAnimationLoop=function(G){Me=G},this.dispose=function(){}}},Io=new Ur,QI=new Qt;function e2(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),d(m,p)):p.isMeshStandardMaterial?(o(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),w=M.envMap,_=M.envMapRotation;w&&(m.envMap.value=w,Io.copy(_),Io.x*=-1,Io.y*=-1,Io.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Io.y*=-1,Io.z*=-1),m.envMapRotation.value.setFromMatrix4(QI.makeRotationFromEuler(Io)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function t2(n,t,e,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let _=w.program;i.uniformBlockBinding(M,_)}function c(M,w){let _=r[M.id];_===void 0&&(g(M),_=d(M),r[M.id]=_,M.addEventListener("dispose",m));let D=w.program;i.updateUBOMapping(M,D);let R=t.render.frame;o[M.id]!==R&&(h(M),o[M.id]=R)}function d(M){let w=u();M.__bindingPointIndex=w;let _=n.createBuffer(),D=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function u(){for(let M=0;M<a;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let w=r[M.id],_=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let R=0,T=_.length;R<T;R++){let k=Array.isArray(_[R])?_[R]:[_[R]];for(let x=0,A=k.length;x<A;x++){let E=k[x];if(f(E,R,x,D)===!0){let W=E.__offset,U=Array.isArray(E.value)?E.value:[E.value],K=0;for(let J=0;J<U.length;J++){let q=U[J],Y=v(q);typeof q=="number"||typeof q=="boolean"?(E.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,W+K,E.__data)):q.isMatrix3?(E.__data[0]=q.elements[0],E.__data[1]=q.elements[1],E.__data[2]=q.elements[2],E.__data[3]=0,E.__data[4]=q.elements[3],E.__data[5]=q.elements[4],E.__data[6]=q.elements[5],E.__data[7]=0,E.__data[8]=q.elements[6],E.__data[9]=q.elements[7],E.__data[10]=q.elements[8],E.__data[11]=0):(q.toArray(E.__data,K),K+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,w,_,D){let R=M.value,T=w+"_"+_;if(D[T]===void 0)return typeof R=="number"||typeof R=="boolean"?D[T]=R:D[T]=R.clone(),!0;{let k=D[T];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return D[T]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function g(M){let w=M.uniforms,_=0,D=16;for(let T=0,k=w.length;T<k;T++){let x=Array.isArray(w[T])?w[T]:[w[T]];for(let A=0,E=x.length;A<E;A++){let W=x[A],U=Array.isArray(W.value)?W.value:[W.value];for(let K=0,J=U.length;K<J;K++){let q=U[K],Y=v(q),V=_%D,le=V%Y.boundary,me=V+le;_+=le,me!==0&&D-me<Y.storage&&(_+=D-me),W.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=Y.storage}}}let R=_%D;return R>0&&(_+=D-R),M.__size=_,M.__cache={},this}function v(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let _=s.indexOf(w.__bindingPointIndex);s.splice(_,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}var cu=class{constructor(t={}){let{canvas:e=Ob(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=cr,this.toneMappingExposure=1;let _=this,D=!1,R=0,T=0,k=null,x=-1,A=null,E=new Zt,W=new Zt,U=null,K=new at(0),J=0,q=e.width,Y=e.height,V=1,le=null,me=null,Me=new Zt(0,0,q,Y),He=new Zt(0,0,q,Y),vt=!1,G=new il,oe=!1,Se=!1;this.transmissionResolutionScale=1;let de=new Qt,De=new Qt,Oe=new N,Ze=new Zt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function Gt(){return k===null?V:1}let C=i;function Dn(b,P){return e.getContext(b,P)}try{let b={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gd}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",fe,!1),C===null){let P="webgl2";if(C=Dn(P,b),C===null)throw Dn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let et,tt,Ee,Dt,Ce,S,y,O,j,ee,X,Te,pe,be,lt,re,Ae,Le,Ue,_e,rt,je,Pt,I;function ue(){et=new yR(C),et.init(),je=new ZI(C,et),tt=new hR(C,et,t,je),Ee=new jI(C,et),tt.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),Dt=new _R(C),Ce=new kI,S=new KI(C,et,Ee,Ce,tt,je,Dt),y=new fR(_),O=new vR(_),j=new EC(C),Pt=new dR(C,j),ee=new bR(C,j,Dt,Pt),X=new SR(C,ee,j,Dt),Ue=new xR(C,tt,S),re=new pR(Ce),Te=new LI(_,y,O,et,tt,Pt,re),pe=new e2(_,Ce),be=new NI,lt=new HI(et),Le=new cR(_,y,O,Ee,X,f,l),Ae=new qI(_,X,tt),I=new t2(C,Dt,tt,Ee),_e=new uR(C,et,Dt),rt=new AR(C,et,Dt),Dt.programs=Te.programs,_.capabilities=tt,_.extensions=et,_.properties=Ce,_.renderLists=be,_.shadowMap=Ae,_.state=Ee,_.info=Dt}ue();let z=new Af(_,C);this.xr=z,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(q,Y,!1))},this.getSize=function(b){return b.set(q,Y)},this.setSize=function(b,P,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,Y=P,e.width=Math.floor(b*V),e.height=Math.floor(P*V),F===!0&&(e.style.width=b+"px",e.style.height=P+"px"),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(q*V,Y*V).floor()},this.setDrawingBufferSize=function(b,P,F){q=b,Y=P,V=F,e.width=Math.floor(b*F),e.height=Math.floor(P*F),this.setViewport(0,0,b,P)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,P,F,B){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,P,F,B),Ee.viewport(E.copy(Me).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(He)},this.setScissor=function(b,P,F,B){b.isVector4?He.set(b.x,b.y,b.z,b.w):He.set(b,P,F,B),Ee.scissor(W.copy(He).multiplyScalar(V).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(b){Ee.setScissorTest(vt=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(b=!0,P=!0,F=!0){let B=0;if(b){let L=!1;if(k!==null){let ne=k.texture.format;L=ne===Pd||ne===Dd||ne===Id}if(L){let ne=k.texture.type,he=ne===Hi||ne===Kr||ne===Ps||ne===Co||ne===Ed||ne===Rd,ve=Le.getClearColor(),xe=Le.getClearAlpha(),Ve=ve.r,ze=ve.g,Re=ve.b;he?(g[0]=Ve,g[1]=ze,g[2]=Re,g[3]=xe,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Ve,v[1]=ze,v[2]=Re,v[3]=xe,C.clearBufferiv(C.COLOR,0,v))}else B|=C.COLOR_BUFFER_BIT}P&&(B|=C.DEPTH_BUFFER_BIT),F&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Le.dispose(),be.dispose(),lt.dispose(),Ce.dispose(),y.dispose(),O.dispose(),X.dispose(),Pt.dispose(),I.dispose(),Te.dispose(),z.dispose(),z.removeEventListener("sessionstart",Lf),z.removeEventListener("sessionend",kf),Jr.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let b=Dt.autoReset,P=Ae.enabled,F=Ae.autoUpdate,B=Ae.needsUpdate,L=Ae.type;ue(),Dt.autoReset=b,Ae.enabled=P,Ae.autoUpdate=F,Ae.needsUpdate=B,Ae.type=L}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ge(b){let P=b.target;P.removeEventListener("dispose",Ge),Xt(P)}function Xt(b){gn(b),Ce.remove(b)}function gn(b){let P=Ce.get(b).programs;P!==void 0&&(P.forEach(function(F){Te.releaseProgram(F)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,F,B,L,ne){P===null&&(P=Ot);let he=L.isMesh&&L.matrixWorld.determinant()<0,ve=YA(b,P,F,B,L);Ee.setMaterial(B,he);let xe=F.index,Ve=1;if(B.wireframe===!0){if(xe=ee.getWireframeAttribute(F),xe===void 0)return;Ve=2}let ze=F.drawRange,Re=F.attributes.position,ct=ze.start*Ve,yt=(ze.start+ze.count)*Ve;ne!==null&&(ct=Math.max(ct,ne.start*Ve),yt=Math.min(yt,(ne.start+ne.count)*Ve)),xe!==null?(ct=Math.max(ct,0),yt=Math.min(yt,xe.count)):Re!=null&&(ct=Math.max(ct,0),yt=Math.min(yt,Re.count));let Jt=yt-ct;if(Jt<0||Jt===1/0)return;Pt.setup(L,B,ve,F,xe);let jt,mt=_e;if(xe!==null&&(jt=j.get(xe),mt=rt,mt.setIndex(jt)),L.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*Gt()),mt.setMode(C.LINES)):mt.setMode(C.TRIANGLES);else if(L.isLine){let Ie=B.linewidth;Ie===void 0&&(Ie=1),Ee.setLineWidth(Ie*Gt()),L.isLineSegments?mt.setMode(C.LINES):L.isLineLoop?mt.setMode(C.LINE_LOOP):mt.setMode(C.LINE_STRIP)}else L.isPoints?mt.setMode(C.POINTS):L.isSprite&&mt.setMode(C.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)mt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))mt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ie=L._multiDrawStarts,un=L._multiDrawCounts,bt=L._multiDrawCount,mi=xe?j.get(xe).bytesPerElement:1,Lo=Ce.get(B).currentProgram.getUniforms();for(let Bn=0;Bn<bt;Bn++)Lo.setValue(C,"_gl_DrawID",Bn),mt.render(Ie[Bn]/mi,un[Bn])}else if(L.isInstancedMesh)mt.renderInstances(ct,Jt,L.count);else if(F.isInstancedBufferGeometry){let Ie=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,un=Math.min(F.instanceCount,Ie);mt.renderInstances(ct,Jt,un)}else mt.render(ct,Jt)};function St(b,P,F){b.transparent===!0&&b.side===zi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Cl(b,P,F),b.side=ar,b.needsUpdate=!0,Cl(b,P,F),b.side=zi):Cl(b,P,F)}this.compile=function(b,P,F=null){F===null&&(F=b),p=lt.get(F),p.init(P),w.push(p),F.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),b!==F&&b.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();let B=new Set;return b.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let ne=L.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){let ve=ne[he];St(ve,F,L),B.add(ve)}else St(ne,F,L),B.add(ne)}),w.pop(),p=null,B},this.compileAsync=function(b,P,F=null){let B=this.compile(b,P,F);return new Promise(L=>{function ne(){if(B.forEach(function(he){Ce.get(he).currentProgram.isReady()&&B.delete(he)}),B.size===0){L(b);return}setTimeout(ne,10)}et.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let fi=null;function qi(b){fi&&fi(b)}function Lf(){Jr.stop()}function kf(){Jr.start()}let Jr=new dA;Jr.setAnimationLoop(qi),typeof self<"u"&&Jr.setContext(self),this.setAnimationLoop=function(b){fi=b,z.setAnimationLoop(b),b===null?Jr.stop():Jr.start()},z.addEventListener("sessionstart",Lf),z.addEventListener("sessionend",kf),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,P,k),p=lt.get(b,w.length),p.init(P),w.push(p),De.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),G.setFromProjectionMatrix(De),Se=this.localClippingEnabled,oe=re.init(this.clippingPlanes,Se),m=be.get(b,M.length),m.init(),M.push(m),z.enabled===!0&&z.isPresenting===!0){let ne=_.xr.getDepthSensingMesh();ne!==null&&Cu(ne,P,-1/0,_.sortObjects)}Cu(b,P,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(le,me),it=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,it&&Le.addToRenderList(m,b),this.info.render.frame++,oe===!0&&re.beginShadows();let F=p.state.shadowsArray;Ae.render(F,b,P),oe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,L=m.transmissive;if(p.setupLights(),P.isArrayCamera){let ne=P.cameras;if(L.length>0)for(let he=0,ve=ne.length;he<ve;he++){let xe=ne[he];Nf(B,L,b,xe)}it&&Le.render(b);for(let he=0,ve=ne.length;he<ve;he++){let xe=ne[he];Of(m,b,xe,xe.viewport)}}else L.length>0&&Nf(B,L,b,P),it&&Le.render(b),Of(m,b,P);k!==null&&T===0&&(S.updateMultisampleRenderTarget(k),S.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(_,b,P),Pt.resetDefaultState(),x=-1,A=null,w.pop(),w.length>0?(p=w[w.length-1],oe===!0&&re.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Cu(b,P,F,B){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||G.intersectsSprite(b)){B&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(De);let he=X.update(b),ve=b.material;ve.visible&&m.push(b,he,ve,F,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||G.intersectsObject(b))){let he=X.update(b),ve=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ze.copy(he.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(De)),Array.isArray(ve)){let xe=he.groups;for(let Ve=0,ze=xe.length;Ve<ze;Ve++){let Re=xe[Ve],ct=ve[Re.materialIndex];ct&&ct.visible&&m.push(b,he,ct,F,Ze.z,Re)}}else ve.visible&&m.push(b,he,ve,F,Ze.z,null)}}let ne=b.children;for(let he=0,ve=ne.length;he<ve;he++)Cu(ne[he],P,F,B)}function Of(b,P,F,B){let L=b.opaque,ne=b.transmissive,he=b.transparent;p.setupLightsView(F),oe===!0&&re.setGlobalState(_.clippingPlanes,F),B&&Ee.viewport(E.copy(B)),L.length>0&&Ml(L,P,F),ne.length>0&&Ml(ne,P,F),he.length>0&&Ml(he,P,F),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Nf(b,P,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Ui(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ls:Hi,minFilter:jr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let ne=p.state.transmissionRenderTarget[B.id],he=B.viewport||E;ne.setSize(he.z*_.transmissionResolutionScale,he.w*_.transmissionResolutionScale);let ve=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(K),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),it&&Le.render(F);let xe=_.toneMapping;_.toneMapping=cr;let Ve=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),oe===!0&&re.setGlobalState(_.clippingPlanes,B),Ml(b,F,B),S.updateMultisampleRenderTarget(ne),S.updateRenderTargetMipmap(ne),et.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Re=0,ct=P.length;Re<ct;Re++){let yt=P[Re],Jt=yt.object,jt=yt.geometry,mt=yt.material,Ie=yt.group;if(mt.side===zi&&Jt.layers.test(B.layers)){let un=mt.side;mt.side=In,mt.needsUpdate=!0,Ff(Jt,F,B,jt,mt,Ie),mt.side=un,mt.needsUpdate=!0,ze=!0}}ze===!0&&(S.updateMultisampleRenderTarget(ne),S.updateRenderTargetMipmap(ne))}_.setRenderTarget(ve),_.setClearColor(K,J),Ve!==void 0&&(B.viewport=Ve),_.toneMapping=xe}function Ml(b,P,F){let B=P.isScene===!0?P.overrideMaterial:null;for(let L=0,ne=b.length;L<ne;L++){let he=b[L],ve=he.object,xe=he.geometry,Ve=B===null?he.material:B,ze=he.group;ve.layers.test(F.layers)&&Ff(ve,P,F,xe,Ve,ze)}}function Ff(b,P,F,B,L,ne){b.onBeforeRender(_,P,F,B,L,ne),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),L.onBeforeRender(_,P,F,B,b,ne),L.transparent===!0&&L.side===zi&&L.forceSinglePass===!1?(L.side=In,L.needsUpdate=!0,_.renderBufferDirect(F,P,B,L,b,ne),L.side=ar,L.needsUpdate=!0,_.renderBufferDirect(F,P,B,L,b,ne),L.side=zi):_.renderBufferDirect(F,P,B,L,b,ne),b.onAfterRender(_,P,F,B,L,ne)}function Cl(b,P,F){P.isScene!==!0&&(P=Ot);let B=Ce.get(b),L=p.state.lights,ne=p.state.shadowsArray,he=L.state.version,ve=Te.getParameters(b,L.state,ne,P,F),xe=Te.getProgramCacheKey(ve),Ve=B.programs;B.environment=b.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(b.isMeshStandardMaterial?O:y).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",Ge),Ve=new Map,B.programs=Ve);let ze=Ve.get(xe);if(ze!==void 0){if(B.currentProgram===ze&&B.lightsStateVersion===he)return Uf(b,ve),ze}else ve.uniforms=Te.getUniforms(b),b.onBeforeCompile(ve,_),ze=Te.acquireProgram(ve,xe),Ve.set(xe,ze),B.uniforms=ve.uniforms;let Re=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=re.uniform),Uf(b,ve),B.needsLights=e_(b),B.lightsStateVersion=he,B.needsLights&&(Re.ambientLightColor.value=L.state.ambient,Re.lightProbe.value=L.state.probe,Re.directionalLights.value=L.state.directional,Re.directionalLightShadows.value=L.state.directionalShadow,Re.spotLights.value=L.state.spot,Re.spotLightShadows.value=L.state.spotShadow,Re.rectAreaLights.value=L.state.rectArea,Re.ltc_1.value=L.state.rectAreaLTC1,Re.ltc_2.value=L.state.rectAreaLTC2,Re.pointLights.value=L.state.point,Re.pointLightShadows.value=L.state.pointShadow,Re.hemisphereLights.value=L.state.hemi,Re.directionalShadowMap.value=L.state.directionalShadowMap,Re.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Re.spotShadowMap.value=L.state.spotShadowMap,Re.spotLightMatrix.value=L.state.spotLightMatrix,Re.spotLightMap.value=L.state.spotLightMap,Re.pointShadowMap.value=L.state.pointShadowMap,Re.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=ze,B.uniformsList=null,ze}function Bf(b){if(b.uniformsList===null){let P=b.currentProgram.getUniforms();b.uniformsList=Fs.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function Uf(b,P){let F=Ce.get(b);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function YA(b,P,F,B,L){P.isScene!==!0&&(P=Ot),S.resetTextureUnits();let ne=P.fog,he=B.isMeshStandardMaterial?P.environment:null,ve=k===null?_.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:_o,xe=(B.isMeshStandardMaterial?O:y).get(B.envMap||he),Ve=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ze=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!F.morphAttributes.position,ct=!!F.morphAttributes.normal,yt=!!F.morphAttributes.color,Jt=cr;B.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Jt=_.toneMapping);let jt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,mt=jt!==void 0?jt.length:0,Ie=Ce.get(B),un=p.state.lights;if(oe===!0&&(Se===!0||b!==A)){let Cn=b===A&&B.id===x;re.setState(B,b,Cn)}let bt=!1;B.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==un.state.version||Ie.outputColorSpace!==ve||L.isBatchedMesh&&Ie.batching===!1||!L.isBatchedMesh&&Ie.batching===!0||L.isBatchedMesh&&Ie.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ie.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ie.instancing===!1||!L.isInstancedMesh&&Ie.instancing===!0||L.isSkinnedMesh&&Ie.skinning===!1||!L.isSkinnedMesh&&Ie.skinning===!0||L.isInstancedMesh&&Ie.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ie.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ie.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ie.instancingMorph===!1&&L.morphTexture!==null||Ie.envMap!==xe||B.fog===!0&&Ie.fog!==ne||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==re.numPlanes||Ie.numIntersection!==re.numIntersection)||Ie.vertexAlphas!==Ve||Ie.vertexTangents!==ze||Ie.morphTargets!==Re||Ie.morphNormals!==ct||Ie.morphColors!==yt||Ie.toneMapping!==Jt||Ie.morphTargetsCount!==mt)&&(bt=!0):(bt=!0,Ie.__version=B.version);let mi=Ie.currentProgram;bt===!0&&(mi=Cl(B,P,L));let Lo=!1,Bn=!1,Ws=!1,Vt=mi.getUniforms(),Yn=Ie.uniforms;if(Ee.useProgram(mi.program)&&(Lo=!0,Bn=!0,Ws=!0),B.id!==x&&(x=B.id,Bn=!0),Lo||A!==b){Ee.buffers.depth.getReversed()?(de.copy(b.projectionMatrix),Fb(de),Bb(de),Vt.setValue(C,"projectionMatrix",de)):Vt.setValue(C,"projectionMatrix",b.projectionMatrix),Vt.setValue(C,"viewMatrix",b.matrixWorldInverse);let Pn=Vt.map.cameraPosition;Pn!==void 0&&Pn.setValue(C,Oe.setFromMatrixPosition(b.matrixWorld)),tt.logarithmicDepthBuffer&&Vt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Vt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Bn=!0,Ws=!0)}if(L.isSkinnedMesh){Vt.setOptional(C,L,"bindMatrix"),Vt.setOptional(C,L,"bindMatrixInverse");let Cn=L.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Vt.setValue(C,"boneTexture",Cn.boneTexture,S))}L.isBatchedMesh&&(Vt.setOptional(C,L,"batchingTexture"),Vt.setValue(C,"batchingTexture",L._matricesTexture,S),Vt.setOptional(C,L,"batchingIdTexture"),Vt.setValue(C,"batchingIdTexture",L._indirectTexture,S),Vt.setOptional(C,L,"batchingColorTexture"),L._colorsTexture!==null&&Vt.setValue(C,"batchingColorTexture",L._colorsTexture,S));let Qn=F.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&Ue.update(L,F,mi),(Bn||Ie.receiveShadow!==L.receiveShadow)&&(Ie.receiveShadow=L.receiveShadow,Vt.setValue(C,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Yn.envMap.value=xe,Yn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&(Yn.envMapIntensity.value=P.environmentIntensity),Bn&&(Vt.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ie.needsLights&&QA(Yn,Ws),ne&&B.fog===!0&&pe.refreshFogUniforms(Yn,ne),pe.refreshMaterialUniforms(Yn,B,V,Y,p.state.transmissionRenderTarget[b.id]),Fs.upload(C,Bf(Ie),Yn,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Fs.upload(C,Bf(Ie),Yn,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Vt.setValue(C,"center",L.center),Vt.setValue(C,"modelViewMatrix",L.modelViewMatrix),Vt.setValue(C,"normalMatrix",L.normalMatrix),Vt.setValue(C,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Cn=B.uniformsGroups;for(let Pn=0,Tu=Cn.length;Pn<Tu;Pn++){let Yr=Cn[Pn];I.update(Yr,mi),I.bind(Yr,mi)}}return mi}function QA(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function e_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,P,F){Ce.get(b.texture).__webglTexture=P,Ce.get(b.depthTexture).__webglTexture=F;let B=Ce.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,P){let F=Ce.get(b);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0};let t_=C.createFramebuffer();this.setRenderTarget=function(b,P=0,F=0){k=b,R=P,T=F;let B=!0,L=null,ne=!1,he=!1;if(b){let xe=Ce.get(b);if(xe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(xe.__webglFramebuffer===void 0)S.setupRenderTarget(b);else if(xe.__hasExternalTextures)S.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Re=b.depthTexture;if(xe.__boundDepthTexture!==Re){if(Re!==null&&Ce.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(b)}}let Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(he=!0);let ze=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[P])?L=ze[P][F]:L=ze[P],ne=!0):b.samples>0&&S.useMultisampledRTT(b)===!1?L=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?L=ze[F]:L=ze,E.copy(b.viewport),W.copy(b.scissor),U=b.scissorTest}else E.copy(Me).multiplyScalar(V).floor(),W.copy(He).multiplyScalar(V).floor(),U=vt;if(F!==0&&(L=t_),Ee.bindFramebuffer(C.FRAMEBUFFER,L)&&B&&Ee.drawBuffers(b,L),Ee.viewport(E),Ee.scissor(W),Ee.setScissorTest(U),ne){let xe=Ce.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+P,xe.__webglTexture,F)}else if(he){let xe=Ce.get(b.texture),Ve=P;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,xe.__webglTexture,F,Ve)}else if(b!==null&&F!==0){let xe=Ce.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xe.__webglTexture,F)}x=-1},this.readRenderTargetPixels=function(b,P,F,B,L,ne,he){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){Ee.bindFramebuffer(C.FRAMEBUFFER,ve);try{let xe=b.texture,Ve=xe.format,ze=xe.type;if(!tt.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-B&&F>=0&&F<=b.height-L&&C.readPixels(P,F,B,L,je.convert(Ve),je.convert(ze),ne)}finally{let xe=k!==null?Ce.get(k).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=function(b,P,F,B,L,ne,he){return Qr(this,null,function*(){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){let xe=b.texture,Ve=xe.format,ze=xe.type;if(!tt.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=b.width-B&&F>=0&&F<=b.height-L){Ee.bindFramebuffer(C.FRAMEBUFFER,ve);let Re=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Re),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),C.readPixels(P,F,B,L,je.convert(Ve),je.convert(ze),0);let ct=k!==null?Ce.get(k).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,ct);let yt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield Nb(C,yt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Re),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne),C.deleteBuffer(Re),C.deleteSync(yt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(b,P=null,F=0){b.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,b=arguments[1]);let B=Math.pow(2,-F),L=Math.floor(b.image.width*B),ne=Math.floor(b.image.height*B),he=P!==null?P.x:0,ve=P!==null?P.y:0;S.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,he,ve,L,ne),Ee.unbindTexture()};let n_=C.createFramebuffer(),i_=C.createFramebuffer();this.copyTextureToTexture=function(b,P,F=null,B=null,L=0,ne=null){b.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],P=arguments[2],ne=arguments[3]||0,F=null),ne===null&&(L!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=L,L=0):ne=0);let he,ve,xe,Ve,ze,Re,ct,yt,Jt,jt=b.isCompressedTexture?b.mipmaps[ne]:b.image;if(F!==null)he=F.max.x-F.min.x,ve=F.max.y-F.min.y,xe=F.isBox3?F.max.z-F.min.z:1,Ve=F.min.x,ze=F.min.y,Re=F.isBox3?F.min.z:0;else{let Qn=Math.pow(2,-L);he=Math.floor(jt.width*Qn),ve=Math.floor(jt.height*Qn),b.isDataArrayTexture?xe=jt.depth:b.isData3DTexture?xe=Math.floor(jt.depth*Qn):xe=1,Ve=0,ze=0,Re=0}B!==null?(ct=B.x,yt=B.y,Jt=B.z):(ct=0,yt=0,Jt=0);let mt=je.convert(P.format),Ie=je.convert(P.type),un;P.isData3DTexture?(S.setTexture3D(P,0),un=C.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(S.setTexture2DArray(P,0),un=C.TEXTURE_2D_ARRAY):(S.setTexture2D(P,0),un=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,P.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,P.unpackAlignment);let bt=C.getParameter(C.UNPACK_ROW_LENGTH),mi=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Lo=C.getParameter(C.UNPACK_SKIP_PIXELS),Bn=C.getParameter(C.UNPACK_SKIP_ROWS),Ws=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,jt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,jt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),C.pixelStorei(C.UNPACK_SKIP_ROWS,ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Re);let Vt=b.isDataArrayTexture||b.isData3DTexture,Yn=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){let Qn=Ce.get(b),Cn=Ce.get(P),Pn=Ce.get(Qn.__renderTarget),Tu=Ce.get(Cn.__renderTarget);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,Tu.__webglFramebuffer);for(let Yr=0;Yr<xe;Yr++)Vt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ce.get(b).__webglTexture,L,Re+Yr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ce.get(P).__webglTexture,ne,Jt+Yr)),C.blitFramebuffer(Ve,ze,he,ve,ct,yt,he,ve,C.DEPTH_BUFFER_BIT,C.NEAREST);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(L!==0||b.isRenderTargetTexture||Ce.has(b)){let Qn=Ce.get(b),Cn=Ce.get(P);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,n_),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,i_);for(let Pn=0;Pn<xe;Pn++)Vt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Qn.__webglTexture,L,Re+Pn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Qn.__webglTexture,L),Yn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Cn.__webglTexture,ne,Jt+Pn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Cn.__webglTexture,ne),L!==0?C.blitFramebuffer(Ve,ze,he,ve,ct,yt,he,ve,C.COLOR_BUFFER_BIT,C.NEAREST):Yn?C.copyTexSubImage3D(un,ne,ct,yt,Jt+Pn,Ve,ze,he,ve):C.copyTexSubImage2D(un,ne,ct,yt,Ve,ze,he,ve);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Yn?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(un,ne,ct,yt,Jt,he,ve,xe,mt,Ie,jt.data):P.isCompressedArrayTexture?C.compressedTexSubImage3D(un,ne,ct,yt,Jt,he,ve,xe,mt,jt.data):C.texSubImage3D(un,ne,ct,yt,Jt,he,ve,xe,mt,Ie,jt):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ne,ct,yt,he,ve,mt,Ie,jt.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ne,ct,yt,jt.width,jt.height,mt,jt.data):C.texSubImage2D(C.TEXTURE_2D,ne,ct,yt,he,ve,mt,Ie,jt);C.pixelStorei(C.UNPACK_ROW_LENGTH,bt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,mi),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lo),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ws),ne===0&&P.generateMipmaps&&C.generateMipmap(un),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,P,F=null,B=null,L=0){return b.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,b=arguments[2],P=arguments[3],L=arguments[4]||0),To('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,P,F,B,L)},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&S.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){R=0,T=0,k=null,Ee.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ft._getDrawingBufferColorSpace(t),e.unpackColorSpace=ft._getUnpackColorSpace()}};var mA={type:"change"},Sf={type:"start"},vA={type:"end"},uu=new Is,gA=new ci,i2=Math.cos(70*ef.DEG2RAD),on=new N,Fn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xf=1e-6,hu=class extends cl{constructor(t,e=null){super(t,e),this.state=It.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ui,this._lastTargetPosition=new N,this._quat=new ui().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ds,this._sphericalDelta=new Ds,this._scale=1,this._panOffset=new N,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new N,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o2.bind(this),this._onPointerDown=r2.bind(this),this._onPointerUp=s2.bind(this),this._onContextMenu=p2.bind(this),this._onMouseWheel=c2.bind(this),this._onKeyDown=d2.bind(this),this._onTouchStart=u2.bind(this),this._onTouchMove=h2.bind(this),this._onMouseDown=a2.bind(this),this._onMouseMove=l2.bind(this),this._interceptControlDown=f2.bind(this),this._interceptControlUp=m2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mA),this.update(),this.state=It.NONE}update(t=null){let e=this.object.position;on.copy(e).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Fn:i>Math.PI&&(i-=Fn),r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),e.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){let a=on.length();s=this._clampDistance(a*this._scale);let l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(uu.origin.copy(this.object.position),uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uu.direction))<i2?this.object.lookAt(this.target):(gA.setFromNormalAndCoplanarPoint(this.object.up,this.target),uu.intersectPlane(gA,this.target))))}else if(this.object.isOrthographicCamera){let s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>xf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xf||this._lastTargetPosition.distanceToSquared(this.target)>xf?(this.dispatchEvent(mA),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){on.setFromMatrixColumn(e,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,e){this.screenSpacePanning===!0?on.setFromMatrixColumn(e,1):(on.setFromMatrixColumn(e,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;on.copy(r).sub(this.target);let o=on.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,o=e-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let s=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xe,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function r2(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function o2(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function s2(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vA),this.state=It.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function a2(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=It.DOLLY;break;case qr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}break;case qr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Sf)}function l2(n){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function c2(n){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(n.preventDefault(),this.dispatchEvent(Sf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(vA))}function d2(n){this.enabled!==!1&&this._handleKeyDown(n)}function u2(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=It.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=It.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Sf)}function h2(n){switch(this._trackPointer(n),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=It.NONE}}function p2(n){this.enabled!==!1&&n.preventDefault()}function f2(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m2(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var CA=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||n)(ke(Ii),ke(ni))};static \u0275dir=gt({type:n})}return n})(),Mf=(()=>{class n extends CA{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=gt({type:n,features:[$e]})}return n})(),Au=new ot("");var g2={provide:Au,useExisting:fr(()=>_u),multi:!0};function v2(){let n=qo()?qo().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var y2=new ot(""),_u=(()=>{class n extends CA{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!v2())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||n)(ke(Ii),ke(ni),ke(y2,8))};static \u0275dir=gt({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&nt("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Mt([g2]),$e]})}return n})();var TA=new ot(""),EA=new ot("");function RA(n){return n!=null}function IA(n){return kl(n)?sn(n):n}function DA(n){let t={};return n.forEach(e=>{t=e!=null?te(te({},t),e):t}),Object.keys(t).length===0?null:t}function PA(n,t){return t.map(e=>e(n))}function b2(n){return!n.validate}function LA(n){return n.map(t=>b2(t)?t:e=>t.validate(e))}function A2(n){if(!n)return null;let t=n.filter(RA);return t.length==0?null:function(e){return DA(PA(e,t))}}function Cf(n){return n!=null?A2(LA(n)):null}function _2(n){if(!n)return null;let t=n.filter(RA);return t.length==0?null:function(e){let i=PA(e,t).map(IA);return qf(i).pipe(dt(DA))}}function Tf(n){return n!=null?_2(LA(n)):null}function yA(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function x2(n){return n._rawValidators}function S2(n){return n._rawAsyncValidators}function wf(n){return n?Array.isArray(n)?n:[n]:[]}function fu(n,t){return Array.isArray(n)?n.includes(t):n===t}function bA(n,t){let e=wf(t);return wf(n).forEach(r=>{fu(e,r)||e.push(r)}),e}function AA(n,t){return wf(t).filter(e=>!fu(n,e))}var mu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Cf(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Tf(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},zs=class extends mu{name;get formDirective(){return null}get path(){return null}},wl=class extends mu{_parent=null;name=null;valueAccessor=null},gu=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},w2={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},N4=Tt(te({},w2),{"[class.ng-submitted]":"isSubmitted"}),kA=(()=>{class n extends gu{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(ke(wl,2))};static \u0275dir=gt({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&Ki("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[$e]})}return n})(),OA=(()=>{class n extends gu{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(ke(zs,10))};static \u0275dir=gt({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&Ki("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[$e]})}return n})();var bl="VALID",pu="INVALID",Us="PENDING",Al="DISABLED",Hs=class{},vu=class extends Hs{value;source;constructor(t,e){super(),this.value=t,this.source=e}},xl=class extends Hs{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},Sl=class extends Hs{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},Vs=class extends Hs{status;source;constructor(t,e){super(),this.status=t,this.source=e}};function NA(n){return(xu(n)?n.validators:n)||null}function M2(n){return Array.isArray(n)?Cf(n):n||null}function FA(n,t){return(xu(t)?t.asyncValidators:n)||null}function C2(n){return Array.isArray(n)?Tf(n):n||null}function xu(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function T2(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new wt(1e3,"");if(!i[e])throw new wt(1001,"")}function E2(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new wt(1002,"")})}var yu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Di(this.statusReactive)}set status(t){Di(()=>this.statusReactive.set(t))}_status=ii(()=>this.statusReactive());statusReactive=pn(void 0);get valid(){return this.status===bl}get invalid(){return this.status===pu}get pending(){return this.status==Us}get disabled(){return this.status===Al}get enabled(){return this.status!==Al}errors;get pristine(){return Di(this.pristineReactive)}set pristine(t){Di(()=>this.pristineReactive.set(t))}_pristine=ii(()=>this.pristineReactive());pristineReactive=pn(!0);get dirty(){return!this.pristine}get touched(){return Di(this.touchedReactive)}set touched(t){Di(()=>this.touchedReactive.set(t))}_touched=ii(()=>this.touchedReactive());touchedReactive=pn(!1);get untouched(){return!this.touched}_events=new Ln;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(bA(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(bA(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(AA(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(AA(t,this._rawAsyncValidators))}hasValidator(t){return fu(this._rawValidators,t)}hasAsyncValidator(t){return fu(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(Tt(te({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new Sl(!0,i))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new Sl(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(Tt(te({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new xl(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new xl(!0,i))}markAsPending(t={}){this.status=Us;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Vs(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(Tt(te({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Al,this.errors=null,this._forEachChild(r=>{r.disable(Tt(te({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new vu(this.value,i)),this._events.next(new Vs(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Tt(te({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=bl,this._forEachChild(i=>{i.enable(Tt(te({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Tt(te({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===bl||this.status===Us)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new vu(this.value,e)),this._events.next(new Vs(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(Tt(te({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Al:bl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=Us,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let i=IA(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new Vs(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new Et,this.statusChanges=new Et}_calculateStatus(){return this._allControlsDisabled()?Al:this.errors?pu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Us)?Us:this._anyControlsHaveStatus(pu)?pu:bl}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new xl(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Sl(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){xu(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=M2(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=C2(this._rawAsyncValidators)}},bu=class extends yu{constructor(t,e,i){super(NA(e),FA(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){E2(this,!0,t),Object.keys(t).forEach(i=>{T2(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this.controls[i];r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var Ef=new ot("CallSetDisabledState",{providedIn:"root",factory:()=>Rf}),Rf="always";function R2(n,t){return[...t.path,n]}function BA(n,t,e=Rf){UA(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),D2(n,t),L2(n,t),P2(n,t),I2(n,t)}function _A(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function I2(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function UA(n,t){let e=x2(n);t.validator!==null?n.setValidators(yA(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=S2(n);t.asyncValidator!==null?n.setAsyncValidators(yA(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();_A(t._rawValidators,r),_A(t._rawAsyncValidators,r)}function D2(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&VA(n,t)})}function P2(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&VA(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function VA(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function L2(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function k2(n,t){n==null,UA(n,t)}function O2(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function N2(n){return Object.getPrototypeOf(n.constructor)===Mf}function F2(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function B2(n,t){if(!t)return null;Array.isArray(t);let e,i,r;return t.forEach(o=>{o.constructor===_u?e=o:N2(o)?i=o:r=o}),r||i||e||null}var U2={provide:zs,useExisting:fr(()=>If)},_l=Promise.resolve(),If=(()=>{class n extends zs{callSetDisabledState;get submitted(){return Di(this.submittedReactive)}_submitted=ii(()=>this.submittedReactive());submittedReactive=pn(!1);_directives=new Set;form;ngSubmit=new Et;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new bu({},Cf(e),Tf(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){_l.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),BA(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){_l.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){_l.then(()=>{let i=this._findContainer(e.path),r=new bu({});k2(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){_l.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){_l.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),F2(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(ke(TA,10),ke(EA,10),ke(Ef,8))};static \u0275dir=gt({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&nt("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Mt([U2]),$e]})}return n})();function xA(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function SA(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var V2=class extends yu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(NA(e),FA(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),xu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(SA(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){xA(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){xA(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){SA(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var z2={provide:wl,useExisting:fr(()=>Df)},wA=Promise.resolve(),Df=(()=>{class n extends wl{_changeDetectorRef;callSetDisabledState;control=new V2;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Et;constructor(e,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=B2(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),O2(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){BA(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){wA.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&Be(i);wA.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?R2(e,this._parent):[e]}static \u0275fac=function(i){return new(i||n)(ke(zs,9),ke(TA,10),ke(EA,10),ke(Au,10),ke(gr,8),ke(Ef,8))};static \u0275dir=gt({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Mt([z2]),$e,an]})}return n})(),zA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=gt({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var H2={provide:Au,useExisting:fr(()=>Su),multi:!0};function HA(n,t){return n==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${n}: ${t}`.slice(0,50))}function W2(n){return n.split(":")[0]}var Su=(()=>{class n extends Mf{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let i=this._getOptionId(e),r=HA(i,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){let i=W2(e);return this._optionMap.has(i)?this._optionMap.get(i):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=gt({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,r){i&1&&nt("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[Mt([H2]),$e]})}return n})(),WA=(()=>{class n{_element;_renderer;_select;id;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(HA(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||n)(ke(ni),ke(Ii),ke(Su,9))};static \u0275dir=gt({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return n})(),G2={provide:Au,useExisting:fr(()=>GA),multi:!0};function MA(n,t){return n==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${n}: ${t}`.slice(0,50))}function q2(n){return n.split(":")[0]}var GA=(()=>{class n extends Mf{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let i;if(Array.isArray(e)){let r=e.map(o=>this._getOptionId(o));i=(o,s)=>{o._setSelected(r.indexOf(s.toString())>-1)}}else i=(r,o)=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let s=o;for(let a=0;a<s.length;a++){let l=s[a],c=this._getOptionValue(l.value);r.push(c)}}else{let s=i.options;for(let a=0;a<s.length;a++){let l=s[a];if(l.selected){let c=this._getOptionValue(l.value);r.push(c)}}}this.value=r,e(r)}}_registerOption(e){let i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){let i=q2(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275dir=gt({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,r){i&1&&nt("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[Mt([G2]),$e]})}return n})(),qA=(()=>{class n{_element;_renderer;_select;id;_value;constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(MA(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(MA(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(i){return new(i||n)(ke(ni),ke(Ii),ke(GA,9))};static \u0275dir=gt({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return n})();var X2=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({})}return n})();var XA=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ef,useValue:e.callSetDisabledState??Rf}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({imports:[X2]})}return n})();var jA=[{id:1,name:"Sudadera StreetHoodz",price:45.99,image:"data:image/jpeg;base64,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",category:"Sudaderas",description:"Sudadera c\xF3moda y moderna.",tallas:["S","M","L","XL"]},{id:2,name:"Camiseta Classic",price:19.99,image:"data:image/jpeg;base64,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",category:"Camisetas",description:"Camiseta cl\xE1sica de alta calidad.",tallas:["S","M"]},{id:20,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["XL"]},{id:22,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["M","L"]},{id:20,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["S","M","L","XL"]},{id:20,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["S","M","L","XL"]},{id:20,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["S","M","L","XL"]},{id:20,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["S","M","L","XL"]},{id:20,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["S","M","L","XL"]},{id:20,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["S","M","L","XL"]},{id:20,name:"Pantal\xF3n Deportivo",price:35.99,image:"data:image/jpeg;base64,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",category:"Pantalones",description:"Pantal\xF3n c\xF3modo para actividades diarias.",tallas:["S","M","L","XL"]}];var K2=({dt:n})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${n("chip.background")};
    color: ${n("chip.color")};
    border-radius: ${n("chip.border.radius")};
    padding: ${n("chip.padding.y")} ${n("chip.padding.x")};
    gap: ${n("chip.gap")};
}

.p-chip-icon {
    color: ${n("chip.icon.color")};
    font-size: ${n("chip.icon.font.size")};
    width: ${n("chip.icon.size")};
    height: ${n("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${n("chip.image.width")};
    height: ${n("chip.image.height")};
    margin-left: calc(-1 * ${n("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${n("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${n("chip.padding.y")} / 2);
    padding-bottom: calc(${n("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${n("chip.remove.icon.font.size")};
    width: ${n("chip.remove.icon.size")};
    height: ${n("chip.remove.icon.size")};
    color: ${n("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${n("chip.transition.duration")}, box-shadow ${n("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${n("chip.remove.icon.focus.ring.shadow")};
    outline: ${n("chip.remove.icon.focus.ring.width")} ${n("chip.remove.icon.focus.ring.style")} ${n("chip.remove.icon.focus.ring.color")};
    outline-offset: ${n("chip.remove.icon.focus.ring.offset")};
}
`,Z2={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},KA=(()=>{class n extends Wt{name="chip";theme=K2;classes=Z2;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275prov=ye({token:n,factory:n.\u0275fac})}return n})();var $2=["removeicon"],J2=["*"];function Y2(n,t){if(n&1){let e=ln();se(0,"img",4),nt("error",function(r){At(e);let o=ie();return _t(o.imageError(r))}),ae()}if(n&2){let e=ie();H("src",e.image,zo)("alt",e.alt)}}function Q2(n,t){if(n&1&&Je(0,"span",6),n&2){let e=ie(2);zt(e.icon),H("ngClass","p-chip-icon"),Fe("data-pc-section","icon")}}function eD(n,t){if(n&1&&we(0,Q2,1,4,"span",5),n&2){let e=ie();H("ngIf",e.icon)}}function tD(n,t){if(n&1&&(se(0,"div",7),pt(1),ae()),n&2){let e=ie();Fe("data-pc-section","label"),Q(),An(e.label)}}function nD(n,t){if(n&1){let e=ln();se(0,"span",11),nt("click",function(r){At(e);let o=ie(3);return _t(o.close(r))})("keydown",function(r){At(e);let o=ie(3);return _t(o.onKeydown(r))}),ae()}if(n&2){let e=ie(3);zt(e.removeIcon),H("ngClass","p-chip-remove-icon"),Fe("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function iD(n,t){if(n&1){let e=ln();se(0,"TimesCircleIcon",12),nt("click",function(r){At(e);let o=ie(3);return _t(o.close(r))})("keydown",function(r){At(e);let o=ie(3);return _t(o.onKeydown(r))}),ae()}if(n&2){let e=ie(3);zt("p-chip-remove-icon"),Fe("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function rD(n,t){if(n&1&&(yn(0),we(1,nD,1,5,"span",9)(2,iD,1,4,"TimesCircleIcon",10),bn()),n&2){let e=ie(2);Q(),H("ngIf",e.removeIcon),Q(),H("ngIf",!e.removeIcon)}}function oD(n,t){}function sD(n,t){n&1&&we(0,oD,0,0,"ng-template")}function aD(n,t){if(n&1){let e=ln();se(0,"span",13),nt("click",function(r){At(e);let o=ie(2);return _t(o.close(r))})("keydown",function(r){At(e);let o=ie(2);return _t(o.onKeydown(r))}),we(1,sD,1,0,null,14),ae()}if(n&2){let e=ie(2);Fe("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),Q(),H("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function lD(n,t){if(n&1&&(yn(0),we(1,rD,3,2,"ng-container",3)(2,aD,2,3,"span",8),bn()),n&2){let e=ie();Q(),H("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),Q(),H("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Pf=(()=>{class n extends qt{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new Et;onImageError=new Et;visible=!0;get removeAriaLabel(){return this.config.getTranslation(xg.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,r])=>this[`_${i}`]!==r&&(this[`_${i}`]=r))}_chipProps;_componentStyle=$(KA);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ne(n)))(r||n)}})();static \u0275cmp=st({type:n,selectors:[["p-chip"]],contentQueries:function(i,r,o){if(i&1&&(Rt(o,$2,4),Rt(o,ki,4)),i&2){let s;ut(s=ht())&&(r.removeIconTemplate=s.first),ut(s=ht())&&(r.templates=s)}},hostVars:9,hostBindings:function(i,r){i&2&&(Fe("data-pc-name","chip")("aria-label",r.label)("data-pc-section","root"),mr(r.style),zt(r.containerClass()),Fl("display",!r.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",Be],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[Mt([KA]),fn,$e,an],ngContentSelectors:J2,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,r){if(i&1&&(zn(),Tn(0),we(1,Y2,1,2,"img",1)(2,eD,1,1,"ng-template",null,0,Go)(4,tD,2,2,"div",2)(5,lD,3,2,"ng-container",3)),i&2){let o=io(3);Q(),H("ngIf",r.image)("ngIfElse",o),Q(3),H("ngIf",r.label),Q(),H("ngIf",r.removable)}},dependencies:[$t,gi,Wn,yi,my,Ut],encapsulation:2,changeDetection:0})}return n})(),ZA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ft({type:n});static \u0275inj=Nt({imports:[Pf,Ut,Ut]})}return n})();var dD=()=>({"margin-left":"8rem"});function uD(n,t){if(n&1&&Je(0,"p-chip",26),n&2){let e=t.$implicit;bm("label",e)}}function hD(n,t){if(n&1){let e=ln();se(0,"div",19),Je(1,"img",20),se(2,"span",21),pt(3),ae(),se(4,"p",22),pt(5),ae(),se(6,"strong"),pt(7),Js(8,"currency"),ae(),se(9,"p"),we(10,uD,1,1,"p-chip",23),ae(),se(11,"form",24)(12,"button",25),nt("click",function(){let r=At(e).$implicit,o=ie();return _t(o.abrirWhatsApp(r))}),pt(13,"Comprar"),ae()()()}if(n&2){let e=t.$implicit;Q(),H("src",e.image,zo)("alt",e.name),Q(2),An(e.name),Q(2),An(e.description),Q(2),An(Ys(8,7,e.price)),Q(3),H("ngForOf",e.tallas),Q(2),H("ngStyle",Ho(9,dD))}}function pD(n,t){if(n&1){let e=ln();se(0,"button",27),nt("click",function(){let r=At(e).index,o=ie();return _t(o.changePage(r+1))}),pt(1),ae()}if(n&2){let e=t.index,i=ie();Ki("active",e+1===i.currentPage),Q(),_m(" ",e+1," ")}}var wu=class n{constructor(t,e){this.platformId=t;this.http=e}products=[];filteredProducts=[];searchQuery="";sortOption="asc";pageSize=8;currentPage=1;ngAfterViewInit(){_n(this.platformId)&&this.init3DModel()}ngOnInit(){this.products=jA,this.filteredProducts=this.products}init3DModel(){if(typeof document>"u"){console.warn("El entorno actual no tiene acceso al DOM.");return}let t=document.getElementById("model-container");if(!t){console.warn("No se encontr\xF3 el contenedor para el modelo 3D.");return}let e=new nl,i=new wn(75,t.clientWidth/t.clientHeight,.1,1e3),r=new cu({antialias:!0});r.setSize(t.clientWidth,t.clientHeight),t.appendChild(r.domElement);let o=new hu(i,r.domElement);o.enableDamping=!0;let s=new ll(16777215,.8);e.add(s);let a=new Hr,l=new sl({color:65280}),c=new Nn(a,l);e.add(c),i.position.z=5;let d=()=>{requestAnimationFrame(d),o.update(),r.render(e,i)};d()}abrirWhatsApp(t){let e="\xA1Hola! Estoy interesado en hacer un pedido. \xBFPodr\xEDas darme m\xE1s informaci\xF3n sobre el producto "+t.name+"?";window.open(`https://wa.me/524771356122?text=${encodeURIComponent(e)}`,"_blank")}searchProducts(){this.filteredProducts=this.products.filter(t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase()))}sortProducts(){let t=this.sortOption==="asc"?1:-1;this.filteredProducts.sort((e,i)=>(e.price-i.price)*t)}getPaginatedProducts(){let t=(this.currentPage-1)*this.pageSize;return this.filteredProducts.slice(t,t+this.pageSize)}changePage(t){this.currentPage=t}getTotalPages(){return Array(Math.ceil(this.filteredProducts.length/this.pageSize)).fill(0).map((t,e)=>e+1)}static \u0275fac=function(e){return new(e||n)(ke(en),ke(Yu))};static \u0275cmp=st({type:n,selectors:[["app-coleccion"]],decls:32,vars:4,consts:[[1,"coleccion"],[1,"modelado-3d","modeladoback"],[1,"model-container-wrapper"],["id","model-container",1,"model-container"],[1,"product-info"],["pButton","","label","Comprar ahora","icon","pi pi-shopping-cart",3,"click"],[1,"text-center"],[1,"container"],[1,"filters"],[1,"brutalist-container"],["type","text","placeholder","Buscar producto...",1,"brutalist-input","smooth-type",3,"ngModelChange","input","ngModel"],[1,"brutalist-label"],[3,"ngModelChange","change","ngModel"],["value","asc"],["value","desc"],[1,"product-grid"],["class","product-card card",4,"ngFor","ngForOf"],[1,"pagination"],[3,"active","click",4,"ngFor","ngForOf"],[1,"product-card","card"],[2,"width","200px","height","200px",3,"src","alt"],[1,"card__title"],[1,"card__content"],["image","https://cdn.shopify.com/s/files/1/0360/0809/9977/files/Captura_de_pantalla_2021-10-15_a_las_20.32.28.png?v=1634322764",3,"label",4,"ngFor","ngForOf"],[1,"card__form"],["label","Comprar",1,"card__button",3,"click","ngStyle"],["image","https://cdn.shopify.com/s/files/1/0360/0809/9977/files/Captura_de_pantalla_2021-10-15_a_las_20.32.28.png?v=1634322764",3,"label"],[3,"click"]],template:function(e,i){e&1&&(se(0,"div",0)(1,"div",1)(2,"h2"),pt(3,"Producto Destacado"),ae(),se(4,"div",2),Je(5,"div",3),se(6,"div",4)(7,"h3")(8,"strong"),pt(9,"Hoodie Popular"),ae()(),se(10,"p"),pt(11,"Talla: M, L, XL"),ae(),se(12,"p"),pt(13,"Precio: $49.99"),ae(),se(14,"button",5),nt("click",function(){return i.abrirWhatsApp({})}),ae()()()(),se(15,"h2",6),pt(16,"Colecci\xF3n"),ae(),se(17,"div",7)(18,"div",8)(19,"div",9)(20,"input",10),$s("ngModelChange",function(o){return Zs(i.searchQuery,o)||(i.searchQuery=o),o}),nt("input",function(){return i.searchProducts()}),ae(),se(21,"label",11),pt(22,"SEARCH"),ae()(),se(23,"select",12),$s("ngModelChange",function(o){return Zs(i.sortOption,o)||(i.sortOption=o),o}),nt("change",function(){return i.sortProducts()}),se(24,"option",13),pt(25,"Precio: Menor a Mayor"),ae(),se(26,"option",14),pt(27,"Precio: Mayor a Menor"),ae()()(),se(28,"div",15),we(29,hD,14,10,"div",16),ae(),se(30,"div",17),we(31,pD,2,3,"button",18),ae()()()),e&2&&(Q(20),Ks("ngModel",i.searchQuery),Q(3),Ks("ngModel",i.sortOption),Q(6),H("ngForOf",i.getPaginatedProducts()),Q(2),H("ngForOf",i.getTotalPages()))},dependencies:[Er,Sc,$t,Xo,vi,Im,XA,zA,WA,qA,_u,Su,kA,OA,Df,If,ZA,Pf],styles:['@charset "UTF-8";.coleccion[_ngcontent-%COMP%]{padding:2rem}.modelado-3d[_ngcontent-%COMP%]{text-align:center;padding:20px}.model-container-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row;gap:20px;margin:20px 0}.model-container[_ngcontent-%COMP%]{width:50%;height:400px;background-color:#f0f0f0;color:#000}.product-info[_ngcontent-%COMP%]{width:30%;text-align:left;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.product-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:24px}.product-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0;font-size:18px}button[_ngcontent-%COMP%]{margin-top:20px}.catalogo[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem}.producto[_ngcontent-%COMP%]{flex:1 1 calc(33.33% - 1rem);border:1px solid #ccc;border-radius:8px;padding:1rem;text-align:center}.container[_ngcontent-%COMP%]{width:80%;margin:0 auto}.product-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}.product-card[_ngcontent-%COMP%]{border:1px solid #ccc;padding:10px;text-align:center}.product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 5px;padding:5px 10px}.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{font-weight:700;background-color:#007bff;color:#fff}.filters[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;padding:1rem;margin-bottom:1rem}.brutalist-container[_ngcontent-%COMP%]{flex:1}.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-left:auto}@media (max-width: 768px){.filters[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.brutalist-container[_ngcontent-%COMP%]{margin-bottom:1rem}.filters[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{order:1;margin-top:.5rem}.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{order:2}.product-grid[_ngcontent-%COMP%]{justify-content:left;margin-left:-50px}}.modeladoback[_ngcontent-%COMP%]{width:100%;height:100%;background:#000;color:#fff!important}[_nghost-%COMP%]     .p-chip{display:inline-block;margin:0 .25rem .25rem 0;padding:.5rem 1rem;border-radius:1rem;background-color:#f0f0f0;color:#000;font-size:.8rem;font-weight:500;line-height:1.5;cursor:default;transition:background-color .3s}[_nghost-%COMP%]     .p-chip img{width:1.5rem;height:1.5rem;border-radius:50%;background-color:#f0f0f0;display:block;margin:0 auto}.p-chip[_ngcontent-%COMP%]:hover{background-color:#e0e0e0;border-color:#e0e0e0;box-shadow:0 0 0 1px #e0e0e0}']})};var $A=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"coleccion",component:Tc,children:[{path:"",component:wu}]},{path:"home",component:Ec}];var JA={providers:[ng(),Ig({theme:{preset:hv}}),iy($A),Wm()]};var Mu=class n{title="street-hoodz";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=st({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&Je(0,"router-outlet")},dependencies:[Da],encapsulation:2})};Qm(Mu,JA).catch(n=>console.error(n));
