import{r as g,g as w,j as h,m as Te}from"./index-CLSSUA5X.js";var J;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(J||(J={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(X||(X={}));var Q;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Q||(Q={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=["user","model","function","system"];var ee;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(ee||(ee={}));var te;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(te||(te={}));var ne;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(ne||(ne={}));var se;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(se||(se={}));var D;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(D||(D={}));var oe;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(oe||(oe={}));var ie;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(ie||(ie={}));var re;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(re||(re={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class k extends v{constructor(t,n){super(t),this.response=n}}class me extends v{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class M extends v{}class Ee extends v{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="https://generativelanguage.googleapis.com",Le="v1beta",ke="0.24.1",je="genai-js";var L;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(L||(L={}));class De{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||Le;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||Me}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function $e(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${je}/${ke}`),t.join(" ")}async function Ge(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",$e(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new M(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new M(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new M(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function Ue(e,t,n,s,o,i){const r=new De(e,t,n,s,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},Be(i)),{method:"POST",headers:await Ge(r),body:o})}}async function U(e,t,n,s,o,i={},r=fetch){const{url:c,fetchOptions:f}=await Ue(e,t,n,s,o,i);return He(c,f,r)}async function He(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){Pe(o,e)}return s.ok||await Fe(s,e),s}function Pe(e,t){let n=e;throw n.name==="AbortError"?(n=new Ee(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof me||e instanceof M||(n=new v(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Fe(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new me(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function Be(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new k(`${T(e)}`,e);return Ye(e)}else if(e.promptFeedback)throw new k(`Text not available. ${T(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new k(`${T(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),ae(e)[0]}else if(e.promptFeedback)throw new k(`Function call not available. ${T(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new k(`${T(e)}`,e);return ae(e)}else if(e.promptFeedback)throw new k(`Function call not available. ${T(e)}`,e)},e}function Ye(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)r.text&&i.push(r.text),r.executableCode&&i.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&i.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function ae(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)r.functionCall&&i.push(r.functionCall);if(i.length>0)return i}const Ke=[D.RECITATION,D.SAFETY,D.LANGUAGE];function H(e){return!!e.finishReason&&Ke.includes(e.finishReason)}function T(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];H(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function $(e){return this instanceof $?(this.v=e,this):new $(e)}function qe(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(d){s[d]&&(o[d]=function(u){return new Promise(function(m,O){i.push([d,u,m,O])>1||c(d,u)})})}function c(d,u){try{f(s[d](u))}catch(m){S(i[0][3],m)}}function f(d){d.value instanceof $?Promise.resolve(d.value.v).then(_,I):S(i[0][2],d)}function _(d){c("next",d)}function I(d){c("throw",d)}function S(d,u){d(u),i.shift(),i.length&&c(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ve(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Je(t),[s,o]=n.tee();return{stream:ze(s),response:We(o)}}async function We(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return Y(Xe(t));t.push(o)}}function ze(e){return qe(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield $(n.read());if(o)break;yield yield $(Y(s))}})}function Je(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:r,done:c})=>{if(c){if(o.trim()){s.error(new v("Failed to parse stream"));return}s.close();return}o+=r;let f=o.match(ce),_;for(;f;){try{_=JSON.parse(f[1])}catch{s.error(new v(`Error parsing JSON response: "${f[1]}"`));return}s.enqueue(_),o=o.substring(f[0].length),f=o.match(ce)}return i()}).catch(r=>{let c=r;throw c.stack=r.stack,c.name==="AbortError"?c=new Ee("Request aborted when reading from the stream"):c=new v("Error reading from the stream"),c})}}})}function Xe(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates){let o=0;for(const i of s.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=i.citationMetadata,n.candidates[o].groundingMetadata=i.groundingMetadata,n.candidates[o].finishReason=i.finishReason,n.candidates[o].finishMessage=i.finishMessage,n.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[o].content||(n.candidates[o].content={role:i.content.role||"user",parts:[]});const r={};for(const c of i.content.parts)c.text&&(r.text=c.text),c.functionCall&&(r.functionCall=c.functionCall),c.executableCode&&(r.executableCode=c.executableCode),c.codeExecutionResult&&(r.codeExecutionResult=c.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[o].content.parts.push(r)}o++}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(e,t,n,s){const o=await U(t,L.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return Ve(o)}async function ye(e,t,n,s){const i=await(await U(t,L.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:Y(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function G(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Qe(t)}function Qe(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new v("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new v("No content is provided for sending chat message.");return s?t:n}function Ze(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new M("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=G(e);s.contents=[i]}return{generateContentRequest:s}}function le(e){let t;return e.contents?t=e:t={contents:[G(e)]},e.systemInstruction&&(t.systemInstruction=ve(e.systemInstruction)),t}function et(e){return typeof e=="string"||Array.isArray(e)?{content:G(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],tt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function nt(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new v(`First content should be with role 'user', got ${s}`);if(!Z.includes(s))throw new v(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Z)}`);if(!Array.isArray(o))throw new v("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new v("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const c of o)for(const f of de)f in c&&(i[f]+=1);const r=tt[s];for(const c of de)if(!r.includes(c)&&i[c]>0)throw new v(`Content with role '${s}' can't contain '${c}' part`);t=!0}}function ue(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const s of n.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="SILENT_ERROR";class st{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(nt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,r,c,f;await this._sendPromise;const _=G(t),I={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,_]},S=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>ye(this._apiKey,this.model,I,S)).then(u=>{var m;if(ue(u.response)){this._history.push(_);const O=Object.assign({parts:[],role:"model"},(m=u.response.candidates)===null||m===void 0?void 0:m[0].content);this._history.push(O)}else{const O=T(u.response);O&&console.warn(`sendMessage() was unsuccessful. ${O}. Inspect response object for details.`)}d=u}).catch(u=>{throw this._sendPromise=Promise.resolve(),u}),await this._sendPromise,d}async sendMessageStream(t,n={}){var s,o,i,r,c,f;await this._sendPromise;const _=G(t),I={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,_]},S=Object.assign(Object.assign({},this._requestOptions),n),d=Ce(this._apiKey,this.model,I,S);return this._sendPromise=this._sendPromise.then(()=>d).catch(u=>{throw new Error(fe)}).then(u=>u.response).then(u=>{if(ue(u)){this._history.push(_);const m=Object.assign({},u.candidates[0].content);m.role||(m.role="model"),this._history.push(m)}else{const m=T(u);m&&console.warn(`sendMessageStream() was unsuccessful. ${m}. Inspect response object for details.`)}}).catch(u=>{u.message!==fe&&console.error(u)}),d}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n,s){return(await U(t,L.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n,s){return(await U(t,L.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function rt(e,t,n,s){const o=n.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await U(t,L.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=ve(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=le(t),i=Object.assign(Object.assign({},this._requestOptions),n);return ye(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=le(t),i=Object.assign(Object.assign({},this._requestOptions),n);return Ce(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new st(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Ze(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return ot(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=et(t),o=Object.assign(Object.assign({},this._requestOptions),n);return it(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return rt(this.apiKey,this.model,t,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new v("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new he(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new M("Cached content must contain a `name` field.");if(!t.model)throw new M("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const r of o)if(n!=null&&n[r]&&t[r]&&(n==null?void 0:n[r])!==t[r]){if(r==="model"){const c=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,f=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(c===f)continue}throw new M(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${t[r]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new he(this.apiKey,i,s)}}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lt=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),ge=e=>{const t=lt(e);return t.charAt(0).toUpperCase()+t.slice(1)},_e=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),dt=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=g.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:i,iconNode:r,...c},f)=>g.createElement("svg",{ref:f,...ut,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:_e("lucide",o),...!i&&!dt(c)&&{"aria-hidden":"true"},...c},[...r.map(([_,I])=>g.createElement(_,I)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,t)=>{const n=g.forwardRef(({className:s,...o},i)=>g.createElement(ft,{ref:i,iconNode:t,className:_e(`lucide-${ct(ge(e))}`,`lucide-${e}`,s),...o}));return n.displayName=ge(e),n};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],gt=j("circle-stop",ht);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],mt=j("loader-circle",pt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Ct=j("mic",Et);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],vt=j("send",yt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],wt=j("volume-2",_t);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Rt=j("volume-x",It),pe={checkin:"Daily Check-In",plan3d:"3-Day DASH Plan (~1,800 mg sodium/day)",labels:"Read Food Labels (sodium)",movement:"Gentle Movement (20 min/day)",eatout:"Eat Out Low Sodium"},Ot=({initialPrompt:e,clearInitialPrompt:t})=>{const[n,s]=g.useState([{text:"Hello! I'm your DASH Coach. How can I help you today?",sender:"ai"}]),[o,i]=g.useState(""),[r,c]=g.useState(!1),[f,_]=g.useState([]),[I,S]=g.useState(!1),[d,u]=g.useState(!1),m=g.useRef(null),O=g.useRef(null),K=g.useRef(""),A=g.useRef(null),P=g.useRef(window.speechSynthesis);g.useEffect(()=>{const l=()=>{const R=w("preferences.coachQuickActions",{checkin:!0,plan3d:!0,labels:!0,movement:!0,eatout:!0}),E=Object.keys(pe).filter(y=>R[y]).map(y=>pe[y]);_(E)};if(l(),window.addEventListener("settings-changed",l),"webkitSpeechRecognition"in window||"SpeechRecognition"in window){const R=window.SpeechRecognition||window.webkitSpeechRecognition;A.current=new R,A.current.continuous=!0,A.current.interimResults=!0,A.current.lang="en-US",A.current.onresult=E=>{let y="";for(let C=0;C<E.results.length;C++)y+=E.results[C][0].transcript;const b=K.current;i(b+(b&&y?" ":"")+y)},A.current.onerror=E=>{console.error("Speech recognition error",E.error),S(!1)},A.current.onend=()=>{S(!1)}}return()=>{window.removeEventListener("settings-changed",l),d&&P.current.cancel()}},[]),g.useEffect(()=>{var l;(l=m.current)==null||l.scrollIntoView({behavior:"smooth"})},[n]),g.useEffect(()=>{e&&(F(e),t&&t())},[e]);const we=()=>{if(!A.current){alert("Speech recognition is not supported in this browser.");return}I?(A.current.stop(),S(!1)):(K.current=o,A.current.start(),S(!0))},Ie=l=>{if(d){P.current.cancel(),u(!1);return}const R=l.replace(/[*#_]/g,""),E=new SpeechSynthesisUtterance(R);E.lang="en-US";const b=window.speechSynthesis.getVoices().find(a=>a.name.includes("Google")&&a.lang.startsWith("en")||a.name.includes("Natural")&&a.lang.startsWith("en")||a.lang==="en-US");b&&(E.voice=b),E.onend=()=>u(!1),u(!0),P.current.speak(E)},Re=()=>{var y,b;let l=w("dash_bp_readings",[]);if(l.length===0){i(a=>`CONTEXT: I have no BP readings logged yet.

`+a.trim()),(y=O.current)==null||y.focus();return}l.sort((a,C)=>new Date(C.date+"T"+C.time).getTime()-new Date(a.date+"T"+a.time).getTime());const R=l.slice(0,5);let E=`Here are my most recent blood pressure readings for context:
`;R.forEach(a=>{const C=new Date(a.date+"T"+a.time).toLocaleDateString("en-US",{month:"short",day:"numeric"});E+=`- ${C}: ${a.systolic}/${a.diastolic} mmHg
`}),i(a=>E+`
`+a.trim()),(b=O.current)==null||b.focus()},F=async l=>{var y,b;if(!l.trim())return!0;const R={text:l,sender:"user"};s(a=>[...a,R]),c(!0);let E=!1;try{const a={name:w("profile.name",""),age:w("profile.age",""),sex:w("profile.sex",""),heightFt:w("profile.heightFt",""),heightIn:w("profile.heightIn",""),heightCm:w("profile.heightCm",""),weight:w("profile.weight",""),medicalConditions:w("profile.medicalConditions",""),units:w("preferences.units","us"),sodiumTarget:w("preferences.sodiumTargetMg",1800),exerciseLevel:w("preferences.exerciseLevelDefault","beginner")},C=w("dash_medications_v2",[]);let p=`

--- USER PROFILE & CONTEXT ---
`;a.name&&(p+=`Name: ${a.name}
`),a.age&&(p+=`Age: ${a.age}
`),a.sex&&(p+=`Sex: ${a.sex}
`),a.units==="us"?(a.heightFt&&a.heightIn&&(p+=`Height: ${a.heightFt}' ${a.heightIn}"
`),a.weight&&(p+=`Weight: ${a.weight} lbs
`)):(a.heightCm&&(p+=`Height: ${a.heightCm} cm
`),a.weight&&(p+=`Weight: ${a.weight} kg
`)),p+=`Sodium Target: ${a.sodiumTarget} mg/day
`,p+=`Activity Level: ${a.exerciseLevel}
`,a.medicalConditions?p+=`Medical Conditions: ${a.medicalConditions}
`:p+=`Medical Conditions: None listed.
`,C.length>0?(p+=`
Medications:
`,C.forEach(N=>{p+=`- ${N.name} ${N.dose}${N.unit}
`})):p+=`
Medications: None listed.
`,p+=`----------------------------
`;const be=`IDENTITY & ROLE
You are “DASH Coach,” a digital assistant specialized in DASH eating and cardiovascular health for adults over 50. You help with nutrition, physical activity, blood pressure management, and motivation — always with empathy, clarity, and within wellness limits.

CRITICAL LIMITATIONS
You are NOT a doctor — no medical diagnoses.
You do NOT change medication dosages.
You do NOT handle emergencies — direct user to call 911 in serious cases.
Always encourage consulting a healthcare professional for important decisions.

COMMUNICATION STYLE
Empathetic, reassuring, simple (avoid complex medical jargon).
Positive, encouraging, actionable.
Brief responses (3–5 sentences), unless user asks for more detail.
Use markdown for formatting, especially for lists (* item) and bold text (**bold**).

RESPONSE DIRECTIVES
Be actionable and concrete — always include a practical suggestion.
Use the user profile actively — reference their targets like sodium, activity, preferences.
Include a brief disclaimer if answering medical or drug-related topics.`,V="AIzaSyASG6xI0ys4wwRUZhvQjpWUm5BoOvo8aNo",Oe=new at(V),Ae=`${be}

${p}

${l}`,xe=["gemini-2.5-flash","gemini-2.0-flash","gemini-1.5-flash"];let B;for(const N of xe)try{const z=(b=(y=(await Oe.getGenerativeModel({model:N}).generateContent(Ae)).response)==null?void 0:y.text)==null?void 0:b.call(y);if(z){B=z;break}}catch(W){console.warn(`Model ${N} failed:`,W)}if(!B)throw new Error("All models failed to generate a response.");const Ne={text:B,sender:"ai"};s(N=>[...N,Ne]),E=!0}catch(a){console.error("Gemini API error:",a);let C="Sorry, I'm having trouble connecting right now. Please try again later.";if(a instanceof Error){const x=a.message.toLowerCase();x.includes("permission")||x.includes("denied")?C="It looks like there's a permission issue with the AI service. Please contact support.":x.includes("quota")?C="The AI service usage limit has been reached. Please try again later.":x.includes("model")&&(x.includes("not found")||x.includes("unavailable"))?C="The AI model is currently unavailable. Please try again later.":x.includes("api key")&&(C="System Error: API Key configuration is missing. Please check your environment settings.")}const p={text:C,sender:"ai"};s(x=>[...x,p])}finally{c(!1)}return E},q=async()=>{const l=o;if(!l.trim())return;i(""),await F(l)||i(l)},Se=l=>{F(l)};return h.jsxs("div",{className:"flex flex-col bg-surface h-full",children:[h.jsxs("div",{className:"flex-grow p-2 space-y-4 overflow-y-auto",children:[n.map((l,R)=>h.jsx("div",{className:`flex ${l.sender==="user"?"justify-end":"justify-start"}`,children:h.jsxs("div",{className:`p-3 rounded-2xl max-w-xs md:max-w-md shadow-sm ${l.sender==="user"?"bg-brandPrimary text-white rounded-br-none":"bg-brandPrimaryTint text-textPrimary rounded-bl-none"}`,children:[h.jsx("div",{className:"prose text-lg",dangerouslySetInnerHTML:{__html:Te(l.text)}}),l.sender==="ai"&&h.jsxs("button",{onClick:()=>Ie(l.text),className:"mt-2 text-brandPrimary/70 hover:text-brandPrimary transition-colors flex items-center gap-1 text-sm",title:"Read aloud",children:[d?h.jsx(Rt,{size:16}):h.jsx(wt,{size:16}),d?"Stop":"Listen"]})]})},R)),r&&h.jsx("div",{className:"flex justify-start",children:h.jsx("div",{className:"p-3 rounded-2xl bg-brandPrimaryTint text-textPrimary rounded-bl-none",children:h.jsx("span",{className:"animate-pulse text-lg",children:"● ● ●"})})}),h.jsx("div",{ref:m})]}),h.jsxs("div",{className:"p-2 bg-surface border-t border-border",children:[h.jsx("div",{className:"px-2 pb-2",children:h.jsx("button",{onClick:Re,className:"w-full text-left text-accentBlue font-semibold text-lg py-2 px-3 rounded-lg border-2 border-dashed border-accentBlue hover:bg-accentBlue/10 transition-colors",children:"+ Include Recent BP Readings in Message"})}),h.jsx("div",{className:"flex overflow-x-auto whitespace-nowrap gap-2 mb-3 pb-2",children:f.map(l=>h.jsx("button",{onClick:()=>Se(l),className:"flex-shrink-0 px-4 py-3 bg-brandPrimaryTint text-brandPrimary rounded-full text-base font-medium hover:bg-brandAccent/50 transition-colors min-h-[48px]",children:l},l))}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("button",{onClick:we,className:`p-3 rounded-full transition-colors ${I?"bg-red-100 text-red-600 animate-pulse border border-red-200":"bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"}`,title:"Speak now",children:I?h.jsx(gt,{size:24}):h.jsx(Ct,{size:24})}),h.jsx("input",{ref:O,type:"text",value:o,onChange:l=>i(l.target.value),onKeyPress:l=>l.key==="Enter"&&q(),className:"flex-grow p-3 border border-border bg-surface rounded-lg h-12 text-lg focus:border-transparent focus:ring-2 focus:ring-brandPrimary",placeholder:I?"Listening...":"Type or speak...",disabled:r}),h.jsx("button",{onClick:q,disabled:r||!o.trim(),className:"bg-brandPrimary text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 disabled:bg-textMuted transition-colors","aria-label":"Send message",children:r?h.jsx(mt,{className:"animate-spin",size:24}):h.jsx(vt,{size:24})})]})]})]})};export{Ot as default};
