import{c as E,a as Te,b as ne,o as re,u as he,i as w,d as F,e as g,t as S,f as Ne,g as O,h as m,s as ie,S as R,L as Me,N as Ue,j as oe,k as se,F as De,l as Qe,m as Pe,n as Ve,I as Ge,p as Be,q as He,r as Je}from"./index-BBF3HWx9.js";let o;function H(n){const e=o.__externref_table_alloc();return o.__wbindgen_export_2.set(e,n),e}function z(n,e){try{return n.apply(this,e)}catch(t){const r=H(t);o.__wbindgen_exn_store(r)}}const ke=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&ke.decode();let J=null;function Y(){return(J===null||J.byteLength===0)&&(J=new Uint8Array(o.memory.buffer)),J}function q(n,e){return n=n>>>0,ke.decode(Y().subarray(n,n+e))}let N=0;const Z=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Ke=typeof Z.encodeInto=="function"?function(n,e){return Z.encodeInto(n,e)}:function(n,e){const t=Z.encode(n);return e.set(t),{read:n.length,written:t.length}};function K(n,e,t){if(t===void 0){const b=Z.encode(n),p=e(b.length,1)>>>0;return Y().subarray(p,p+b.length).set(b),N=b.length,p}let r=n.length,i=e(r,1)>>>0;const a=Y();let s=0;for(;s<r;s++){const b=n.charCodeAt(s);if(b>127)break;a[i+s]=b}if(s!==r){s!==0&&(n=n.slice(s)),i=t(i,r,r=s+n.length*3,1)>>>0;const b=Y().subarray(i+s,i+r),p=Ke(n,b);s+=p.written,i=t(i,r,s,1)>>>0}return N=s,i}let T=null;function j(){return(T===null||T.buffer.detached===!0||T.buffer.detached===void 0&&T.buffer!==o.memory.buffer)&&(T=new DataView(o.memory.buffer)),T}function V(n){return n==null}const pe=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>{o.__wbindgen_export_5.get(n.dtor)(n.a,n.b)});function Xe(n,e,t,r){const i={a:n,b:e,cnt:1,dtor:t},a=(...s)=>{i.cnt++;const b=i.a;i.a=0;try{return r(b,i.b,...s)}finally{--i.cnt===0?(o.__wbindgen_export_5.get(i.dtor)(b,i.b),pe.unregister(i)):i.a=b}};return a.original=i,pe.register(a,i,i),a}function _e(n){const e=typeof n;if(e=="number"||e=="boolean"||n==null)return`${n}`;if(e=="string")return`"${n}"`;if(e=="symbol"){const i=n.description;return i==null?"Symbol":`Symbol(${i})`}if(e=="function"){const i=n.name;return typeof i=="string"&&i.length>0?`Function(${i})`:"Function"}if(Array.isArray(n)){const i=n.length;let a="[";i>0&&(a+=_e(n[0]));for(let s=1;s<i;s++)a+=", "+_e(n[s]);return a+="]",a}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(t&&t.length>1)r=t[1];else return toString.call(n);if(r=="Object")try{return"Object("+JSON.stringify(n)+")"}catch{return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:r}function Ye(n,e){if(!(n instanceof e))throw new Error(`expected instance of ${e.name}`)}function xe(n){const e=o.__wbindgen_export_2.get(n);return o.__externref_table_dealloc(n),e}function Le(n,e){n=n>>>0;const t=j(),r=[];for(let i=n;i<n+4*e;i+=4)r.push(o.__wbindgen_export_2.get(t.getUint32(i,!0)));return o.__externref_drop_slice(n,e),r}function Ze(n,e,t){o.closure50_externref_shim(n,e,t)}function et(n,e,t,r){o.closure26_externref_shim(n,e,t,r)}const ve=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_currentquestion_free(n>>>0,1));class ce{static __wrap(e){e=e>>>0;const t=Object.create(ce.prototype);return t.__wbg_ptr=e,ve.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ve.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_currentquestion_free(e,0)}get answered(){return o.__wbg_get_currentquestion_answered(this.__wbg_ptr)!==0}get index(){return o.__wbg_get_currentquestion_index(this.__wbg_ptr)>>>0}get is_last(){return o.__wbg_get_currentquestion_is_last(this.__wbg_ptr)!==0}}const qe=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_question_free(n>>>0,1));class ae{static __wrap(e){e=e>>>0;const t=Object.create(ae.prototype);return t.__wbg_ptr=e,qe.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,qe.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_question_free(e,0)}get title(){let e,t;try{const r=o.__wbg_get_question_title(this.__wbg_ptr);return e=r[0],t=r[1],q(r[0],r[1])}finally{o.__wbindgen_free(e,t,1)}}get options(){const e=o.__wbg_get_question_options(this.__wbg_ptr);var t=Le(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),t}}const $e=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_questionoption_free(n>>>0,1));class ue{static __wrap(e){e=e>>>0;const t=Object.create(ue.prototype);return t.__wbg_ptr=e,$e.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,$e.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_questionoption_free(e,0)}get item(){let e,t;try{const r=o.__wbg_get_questionoption_item(this.__wbg_ptr);return e=r[0],t=r[1],q(r[0],r[1])}finally{o.__wbindgen_free(e,t,1)}}get category(){const e=o.__wbg_get_questionoption_category(this.__wbg_ptr);let t;return e[0]!==0&&(t=q(e[0],e[1]).slice(),o.__wbindgen_free(e[0],e[1]*1,1)),t}get subcategory(){const e=o.__wbg_get_questionoption_subcategory(this.__wbg_ptr);let t;return e[0]!==0&&(t=q(e[0],e[1]).slice(),o.__wbindgen_free(e[0],e[1]*1,1)),t}get correct(){return o.__wbg_get_questionoption_correct(this.__wbg_ptr)!==0}}const ze=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_quiz_free(n>>>0,1));class ee{static __wrap(e){e=e>>>0;const t=Object.create(ee.prototype);return t.__wbg_ptr=e,ze.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,ze.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_quiz_free(e,0)}constructor(e){let t=0;return V(e)||(Ye(e,Ae),t=e.__destroy_into_raw()),o.quiz_new(t)}check_player_guess(e){const t=o.quiz_check_player_guess(this.__wbg_ptr,e);if(t[2])throw xe(t[1]);return X.__wrap(t[0])}next_question(){const e=o.quiz_next_question(this.__wbg_ptr);if(e[2])throw xe(e[1]);return X.__wrap(e[0])}questions(){const e=o.quiz_questions(this.__wbg_ptr);var t=Le(e[0],e[1]).slice();return o.__wbindgen_free(e[0],e[1]*4,4),t}state(){const e=o.quiz_state(this.__wbg_ptr);return X.__wrap(e)}}const Se=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_quizoptions_free(n>>>0,1));class Ae{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Se.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_quizoptions_free(e,0)}constructor(e){const t=K(e,o.__wbindgen_malloc,o.__wbindgen_realloc),r=N,i=o.quizoptions_new(t,r);return this.__wbg_ptr=i>>>0,Se.register(this,this.__wbg_ptr,this),this}}const Ce=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_score_free(n>>>0,1));class le{static __wrap(e){e=e>>>0;const t=Object.create(le.prototype);return t.__wbg_ptr=e,Ce.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Ce.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_score_free(e,0)}get correct(){return o.__wbg_get_currentquestion_index(this.__wbg_ptr)>>>0}get wrong(){return o.__wbg_get_score_wrong(this.__wbg_ptr)>>>0}}const Re=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>o.__wbg_state_free(n>>>0,1));class X{static __wrap(e){e=e>>>0;const t=Object.create(X.prototype);return t.__wbg_ptr=e,Re.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Re.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_state_free(e,0)}get current_question(){const e=o.__wbg_get_state_current_question(this.__wbg_ptr);return ce.__wrap(e)}get game_over(){return o.__wbg_get_state_game_over(this.__wbg_ptr)!==0}get score(){const e=o.__wbg_get_state_score(this.__wbg_ptr);return le.__wrap(e)}}async function tt(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(r){if(n.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}function nt(){const n={};return n.wbg={},n.wbg.__wbg_buffer_61b7ce01341d7f88=function(e){return e.buffer},n.wbg.__wbg_call_500db948e69c7330=function(){return z(function(e,t,r){return e.call(t,r)},arguments)},n.wbg.__wbg_call_b0d8e36992d9900d=function(){return z(function(e,t){return e.call(t)},arguments)},n.wbg.__wbg_crypto_ed58b8e10a292839=function(e){return e.crypto},n.wbg.__wbg_fetch_a9bc66c159c18e19=function(e){return fetch(e)},n.wbg.__wbg_getRandomValues_bcb4912f16000dc4=function(){return z(function(e,t){e.getRandomValues(t)},arguments)},n.wbg.__wbg_instanceof_Error_2b29c5b4afac4e22=function(e){let t;try{t=e instanceof Error}catch{t=!1}return t},n.wbg.__wbg_instanceof_Response_d3453657e10c4300=function(e){let t;try{t=e instanceof Response}catch{t=!1}return t},n.wbg.__wbg_message_7bde112094278773=function(e){return e.message},n.wbg.__wbg_msCrypto_0a36e2ec3a343d26=function(e){return e.msCrypto},n.wbg.__wbg_name_ae6b09babb81aa7d=function(e){return e.name},n.wbg.__wbg_new_17f755666e48d1d8=function(){return z(function(e,t){return new URL(q(e,t))},arguments)},n.wbg.__wbg_new_35d748855c4620b9=function(){return z(function(){return new Headers},arguments)},n.wbg.__wbg_new_3d446df9155128ef=function(e,t){try{var r={a:e,b:t},i=(s,b)=>{const p=r.a;r.a=0;try{return et(p,r.b,s,b)}finally{r.a=p}};return new Promise(i)}finally{r.a=r.b=0}},n.wbg.__wbg_new_3ff5b33b1ce712df=function(e){return new Uint8Array(e)},n.wbg.__wbg_new_688846f374351c92=function(){return new Object},n.wbg.__wbg_new_a3eaec3587e1fb84=function(){return z(function(){return new URLSearchParams},arguments)},n.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d=function(e,t){return new Function(q(e,t))},n.wbg.__wbg_newwithbyteoffsetandlength_ba35896968751d91=function(e,t,r){return new Uint8Array(e,t>>>0,r>>>0)},n.wbg.__wbg_newwithlength_34ce8f1051e74449=function(e){return new Uint8Array(e>>>0)},n.wbg.__wbg_newwithstr_6dc08c9fc8762dbd=function(){return z(function(e,t){return new Request(q(e,t))},arguments)},n.wbg.__wbg_newwithstrandinit_a1f6583f20e4faff=function(){return z(function(e,t,r){return new Request(q(e,t),r)},arguments)},n.wbg.__wbg_node_02999533c4ea02e3=function(e){return e.node},n.wbg.__wbg_process_5c1d670bc53614b8=function(e){return e.process},n.wbg.__wbg_question_new=function(e){return ae.__wrap(e)},n.wbg.__wbg_questionoption_new=function(e){return ue.__wrap(e)},n.wbg.__wbg_queueMicrotask_2181040e064c0dc8=function(e){queueMicrotask(e)},n.wbg.__wbg_queueMicrotask_ef9ac43769cbcc4f=function(e){return e.queueMicrotask},n.wbg.__wbg_quiz_new=function(e){return ee.__wrap(e)},n.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740=function(){return z(function(e,t){e.randomFillSync(t)},arguments)},n.wbg.__wbg_require_79b1e9274cde3c87=function(){return z(function(){return module.require},arguments)},n.wbg.__wbg_resolve_0bf7c44d641804f9=function(e){return Promise.resolve(e)},n.wbg.__wbg_search_a8f6890ada3d686f=function(e,t){const r=t.search,i=K(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=N;j().setInt32(e+4*1,a,!0),j().setInt32(e+4*0,i,!0)},n.wbg.__wbg_set_23d69db4e5c66a6e=function(e,t,r){e.set(t,r>>>0)},n.wbg.__wbg_setheaders_4c921e8e226bdfa7=function(e,t){e.headers=t},n.wbg.__wbg_setmethod_cfc7f688ba46a6be=function(e,t,r){e.method=q(t,r)},n.wbg.__wbg_setsearch_420bbd8d2dbd92aa=function(e,t,r){e.search=q(t,r)},n.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3=function(){const e=typeof global>"u"?null:global;return V(e)?0:H(e)},n.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb=function(){const e=typeof globalThis>"u"?null:globalThis;return V(e)?0:H(e)},n.wbg.__wbg_static_accessor_SELF_1dc398a895c82351=function(){const e=typeof self>"u"?null:self;return V(e)?0:H(e)},n.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a=function(){const e=typeof window>"u"?null:window;return V(e)?0:H(e)},n.wbg.__wbg_status_317f53bc4c7638df=function(e){return e.status},n.wbg.__wbg_subarray_46adeb9b86949d12=function(e,t,r){return e.subarray(t>>>0,r>>>0)},n.wbg.__wbg_text_dfc4cb7631d2eb34=function(){return z(function(e){return e.text()},arguments)},n.wbg.__wbg_then_0438fad860fe38e1=function(e,t){return e.then(t)},n.wbg.__wbg_then_0ffafeddf0e182a4=function(e,t,r){return e.then(t,r)},n.wbg.__wbg_toString_a491ccf7be1ca5c9=function(e){return e.toString()},n.wbg.__wbg_toString_cbcf95f260c441ae=function(e){return e.toString()},n.wbg.__wbg_url_0287fc8f8dd185b7=function(e,t){const r=t.url,i=K(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=N;j().setInt32(e+4*1,a,!0),j().setInt32(e+4*0,i,!0)},n.wbg.__wbg_versions_c71aa1626a93e0a1=function(e){return e.versions},n.wbg.__wbindgen_cb_drop=function(e){const t=e.original;return t.cnt--==1?(t.a=0,!0):!1},n.wbg.__wbindgen_closure_wrapper881=function(e,t,r){return Xe(e,t,51,Ze)},n.wbg.__wbindgen_debug_string=function(e,t){const r=_e(t),i=K(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=N;j().setInt32(e+4*1,a,!0),j().setInt32(e+4*0,i,!0)},n.wbg.__wbindgen_init_externref_table=function(){const e=o.__wbindgen_export_2,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)},n.wbg.__wbindgen_is_function=function(e){return typeof e=="function"},n.wbg.__wbindgen_is_object=function(e){const t=e;return typeof t=="object"&&t!==null},n.wbg.__wbindgen_is_string=function(e){return typeof e=="string"},n.wbg.__wbindgen_is_undefined=function(e){return e===void 0},n.wbg.__wbindgen_memory=function(){return o.memory},n.wbg.__wbindgen_string_get=function(e,t){const r=t,i=typeof r=="string"?r:void 0;var a=V(i)?0:K(i,o.__wbindgen_malloc,o.__wbindgen_realloc),s=N;j().setInt32(e+4*1,s,!0),j().setInt32(e+4*0,a,!0)},n.wbg.__wbindgen_string_new=function(e,t){return q(e,t)},n.wbg.__wbindgen_throw=function(e,t){throw new Error(q(e,t))},n}function rt(n,e){return o=n.exports,We.__wbindgen_wasm_module=e,T=null,J=null,o.__wbindgen_start(),o}async function We(n){if(o!==void 0)return o;typeof n<"u"&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof n>"u"&&(n=new URL(""+new URL("landscape2_quiz_bg-CQLFi583.wasm",import.meta.url).href,import.meta.url));const e=nt();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:r}=await tt(await n,e);return rt(t,r)}const Fe=""+new URL("pattern_quiz-IlvSA3ko.png",import.meta.url).href,it="_wrapper_oi1xy_1",ot="_startBtn_oi1xy_6",st="_header_oi1xy_11",_t="_dot_oi1xy_16",ct="_dotCorrect_oi1xy_23",at="_dotWrong_oi1xy_27",ut="_game_oi1xy_31",lt="_quizContent_oi1xy_39",gt="_title_oi1xy_43",bt="_btn_oi1xy_53",dt="_option_oi1xy_57",ft="_selected_oi1xy_65",wt="_answered_oi1xy_69",yt="_logoContent_oi1xy_73",mt="_logoWrapper_oi1xy_77",ht="_logo_oi1xy_73",pt="_item_oi1xy_87",xt="_itemName_oi1xy_92",vt="_correct_oi1xy_96",qt="_wrong_oi1xy_100",$t="_questionLabel_oi1xy_104",zt="_buttons_oi1xy_108",_={wrapper:it,startBtn:ot,header:st,dot:_t,dotCorrect:ct,dotWrong:at,game:ut,quizContent:lt,title:gt,btn:bt,option:dt,selected:ft,answered:wt,logoContent:yt,logoWrapper:mt,logo:ht,item:pt,itemName:xt,correct:vt,wrong:qt,questionLabel:$t,buttons:zt},St="_container_n6oll_1",Ct="_text_n6oll_6",je={container:St,text:Ct};var Rt=S("<div><div>");const Ft=n=>{const e=()=>n.content,[t,r]=E(),[i,a]=E(),[s,b]=E(100),p=Te(),te=()=>p.width,M=()=>{i()&&t()&&i().offsetHeight>t().offsetHeight&&b(s()-5)};return ne(re(s,()=>{M()})),ne(re(te,()=>{M()})),ne(re(e,()=>{b(100),M()})),(()=>{var k=Rt(),I=k.firstChild;return he(r,k),he(a,I),w(I,e),F(x=>{var v=`position-relative w-100 h-100 ${je.container}`,L=`position-absolute w-100 text-center ${je.text}`,U=`${s()}%`;return v!==x.e&&g(k,x.e=v),L!==x.t&&g(I,x.t=L),U!==x.a&&((x.a=U)!=null?I.style.setProperty("font-size",U):I.style.removeProperty("font-size")),x},{e:void 0,t:void 0,a:void 0}),k})()};var jt=S('<div class="d-flex flex-row justify-content-between justify-content-xl-start text-light"><div class=fw-semibold> / </div><div class="d-flex flex-row align-items-center ms-4 ms-xl-5"><div></div><div></div><div></div><div>'),kt=S('<button aria-label="Start new game">New game'),Lt=S('<div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center h-100 w-100">'),At=S('<div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center h-100 w-100"><button aria-label="Start game">New game'),Wt=S('<div class="d-block d-xl-none"><button aria-label="Start new game">New game'),Ot=S('<div class="w-100 text-center"><button aria-label="Play again">Play again'),Et=S('<div class=ms-auto><button aria-label="Next question">Next'),It=S('<div class="d-flex flex-column h-100"><div><div></div><div class="d-flex flex-column flex-lg-row flex-wrap justify-content-center mt-0 mt-lg-3"></div></div><div>'),Tt=S('<div aria-relevant=all aria-live=assertive><div><div><div class="fw-semibold text-light text-uppercase">Landscape Quiz</div></div><div><div class=col></div><div class="col d-none d-xl-block text-center"><div class="fw-semibold text-light text-uppercase">Landscape Quiz</div></div><div class="d-none d-xl-block col text-end">'),Nt=S("<div role=button><div><div></div></div><div><div>");const Ut=()=>{const[n,e]=E(!1),[t,r]=E(null),[i,a]=E(),[s,b]=E(null),[p,te]=E(),M=async x=>{const v=new Ae(location.origin),L=await new ee(v);r(L),x&&a(L.state())},k=()=>{a(void 0),b(null),M(!0)},I=async()=>{if(Je())await We(),e(!0),M();else return te("This game requires WebAssembly, but your browser doesn't seem to support it"),e(!0),Promise.reject("WebAssembly is not supported in this browser")};return Ne(()=>{O(window.baseDS.games_available)||I()}),(()=>{var x=Tt(),v=x.firstChild,L=v.firstChild,U=L.nextSibling,ge=U.firstChild,Oe=ge.nextSibling,Ee=Oe.nextSibling;return`url(${Fe})`!=null?v.style.setProperty("background-image",`url(${Fe})`):v.style.removeProperty("background-image"),w(ge,m(R,{get when(){return!O(i())},get children(){var l=jt(),h=l.firstChild,A=h.firstChild,D=h.nextSibling,C=D.firstChild,c=C.nextSibling,f=c.nextSibling,d=f.nextSibling;return w(h,()=>i().current_question.index+1,A),w(h,()=>t().questions().length,null),w(c,()=>i().score.correct),w(d,()=>i().score.wrong),F(u=>{var $=`question ${i().current_question.index+1} of ${t().questions().length}`,W=`border border-2 border-light ${_.dot} ${_.dotCorrect}`,Q=`ms-2 fw-semibold ${_.score}`,G=`${i().score.correct} correct guesses`,P=`ms-3 ms-xl-4 border border-2 border-light ${_.dot} ${_.dotWrong}`,B=`ms-2 fw-semibold ${_.score}`,y=`${i().score.correct} wrong guesses`;return $!==u.e&&ie(h,"aria-label",u.e=$),W!==u.t&&g(C,u.t=W),Q!==u.a&&g(c,u.a=Q),G!==u.o&&ie(c,"aria-label",u.o=G),P!==u.i&&g(f,u.i=P),B!==u.n&&g(d,u.n=B),y!==u.s&&ie(d,"aria-label",u.s=y),u},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),l}})),w(Ee,m(R,{get when(){return!O(i())},get children(){var l=kt();return l.$$click=k,F(()=>g(l,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`)),l}})),w(v,m(R,{get when(){return!n()},get children(){return m(Me,{})}}),null),w(v,m(R,{get when(){return!O(p())},get children(){var l=Lt();return w(l,m(Ue,{class:"bg-light fs-5",get children(){return p()}})),l}}),null),w(v,m(R,{get when(){return oe(()=>!se(t()))()&&O(i())},get children(){var l=At(),h=l.firstChild;return h.$$click=()=>a(t().state()),F(()=>g(h,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`)),l}}),null),w(v,m(R,{get when(){return oe(()=>!O(i()))()&&!se(i())},get children(){var l=It(),h=l.firstChild,A=h.firstChild,D=A.nextSibling,C=h.nextSibling;return w(A,m(Ft,{get content(){return t().questions()[i().current_question.index].title}})),w(D,m(De,{get each(){return t().questions()[i().current_question.index].options},children:(c,f)=>{const d=Qe.getLogoItem(c.item,c.category,c.subcategory);if(se(d))return null;const u=()=>i().current_question.answered&&c.correct,$=()=>i().current_question.answered&&!c.correct&&s()===f();return(()=>{var W=Nt(),Q=W.firstChild,G=Q.firstChild,P=Q.nextSibling,B=P.firstChild;return W.$$click=()=>{i().current_question.answered||(b(f()),a(t().check_player_guess(f())))},w(G,m(R,{get when(){return!O(d)},get fallback(){return m(Pe,{get kind(){return Ve.NotImage},get class(){return`opacity-25 m-auto w-100 ${_.logo}`}})},get children(){return m(Ge,{logo:d,get class(){return`m-auto w-100 ${_.logo}`},ariaHidden:!0})}})),w(B,()=>c.item),F(y=>{var be=`d-flex flex-row flex-lg-column border border-4 border-dark bg-white mx-auto mx-lg-4 my-2 my-md-3 ${_.option}`,Ie={[_.answered]:i().current_question.answered,[_.selected]:s()===f(),[_.correct]:u(),[_.wrong]:$()},de=`d-flex align-items-center ${_.logoContent}`,fe=`position-relative d-flex align-items-center m-auto p-1 p-xl-3 ${_.logoWrapper}`,we=`d-flex align-items-center justify-content-start justify-content-lg-center fw-semibold px-3 px-lg-2 py-2 py-md-3 py-lg-2 ${_.item}`,ye=!!(u()||$()),me=`w-100 text-lg-center text-truncate ${_.itemName}`;return be!==y.e&&g(W,y.e=be),y.t=Be(W,Ie,y.t),de!==y.a&&g(Q,y.a=de),fe!==y.o&&g(G,y.o=fe),we!==y.i&&g(P,y.i=we),ye!==y.n&&P.classList.toggle("text-white",y.n=ye),me!==y.s&&g(B,y.s=me),y},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),W})()}})),w(C,m(R,{get when(){return oe(()=>!O(i()))()&&!i().current_question.is_last},get children(){var c=Wt(),f=c.firstChild;return f.$$click=k,F(()=>g(f,`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`)),c}}),null),w(C,m(R,{get when(){return i().game_over},get children(){var c=Ot(),f=c.firstChild;return f.$$click=k,F(d=>{var u=`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`,$=!i().current_question.answered;return u!==d.e&&g(f,d.e=u),$!==d.t&&(f.disabled=d.t=$),d},{e:void 0,t:void 0}),c}}),null),w(C,m(R,{get when(){return!i().current_question.is_last},get children(){var c=Et(),f=c.firstChild;return f.$$click=()=>{b(null),a(t().next_question())},F(d=>{var u=`btn btn-secondary rounded-0 text-uppercase border border-4 border-light ${_.btn}`,$=!i().current_question.answered;return u!==d.e&&g(f,d.e=u),$!==d.t&&(f.disabled=d.t=$),d},{e:void 0,t:void 0}),c}}),null),F(c=>{var f=`flex-grow-1 d-flex flex-column mx-auto py-4 ${_.quizContent}`,d=`d-flex align-items-center justify-content-center border border-4 border-dark text-center mb-3 mb-xl-5 bg-white ${_.title}`,u=`position-relative d-flex flex-row justify-content-between mt-auto py-2 py-xl-4 ${_.buttons}`;return f!==c.e&&g(h,c.e=f),d!==c.t&&g(A,c.t=d),u!==c.a&&g(C,c.a=u),c},{e:void 0,t:void 0,a:void 0}),l}}),null),F(l=>{var h=`d-flex flex-column h-100 ${_.wrapper}`,A=`d-flex flex-column border flex-grow-1 mt-3 ${_.game}`,D=`d-block d-xl-none text-center ${_.header}`,C=`row mt-2 mt-lg-0 mb-0 mb-xl-5 ${_.header}`;return h!==l.e&&g(x,l.e=h),A!==l.t&&g(v,l.t=A),D!==l.a&&g(L,l.a=D),C!==l.o&&g(U,l.o=C),l},{e:void 0,t:void 0,a:void 0,o:void 0}),x})()};He(["click"]);export{Ut as default};