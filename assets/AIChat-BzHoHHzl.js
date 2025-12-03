import{r as m,g as _,j as h,m as Ne}from"./index-BTil3Nqj.js";var z;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(z||(z={}));/**
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
 */var J;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(J||(J={}));var X;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(X||(X={}));/**
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
 */const Q=["user","model","function","system"];var Z;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Z||(Z={}));var ee;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(ee||(ee={}));var te;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(te||(te={}));var ne;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(ne||(ne={}));var D;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(D||(D={}));var se;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(se||(se={}));var oe;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(oe||(oe={}));var ie;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(ie||(ie={}));/**
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
 */class C extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class k extends C{constructor(t,n){super(t),this.response=n}}class me extends C{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class M extends C{}class pe extends C{}/**
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
 */const Te="https://generativelanguage.googleapis.com",Me="v1beta",Le="0.24.1",ke="genai-js";var L;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(L||(L={}));class je{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||Me;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||Te}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function De(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${ke}/${Le}`),t.join(" ")}async function $e(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",De(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new M(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new M(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new M(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function Ge(e,t,n,s,o,i){const r=new je(e,t,n,s,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},Fe(i)),{method:"POST",headers:await $e(r),body:o})}}async function U(e,t,n,s,o,i={},r=fetch){const{url:a,fetchOptions:f}=await Ge(e,t,n,s,o,i);return Ue(a,f,r)}async function Ue(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){He(o,e)}return s.ok||await Pe(s,e),s}function He(e,t){let n=e;throw n.name==="AbortError"?(n=new pe(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof me||e instanceof M||(n=new C(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Pe(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new me(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function Fe(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
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
 */function Y(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new k(`${T(e)}`,e);return Be(e)}else if(e.promptFeedback)throw new k(`Text not available. ${T(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new k(`${T(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),re(e)[0]}else if(e.promptFeedback)throw new k(`Function call not available. ${T(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new k(`${T(e)}`,e);return re(e)}else if(e.promptFeedback)throw new k(`Function call not available. ${T(e)}`,e)},e}function Be(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)r.text&&i.push(r.text),r.executableCode&&i.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&i.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function re(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)r.functionCall&&i.push(r.functionCall);if(i.length>0)return i}const Ye=[D.RECITATION,D.SAFETY,D.LANGUAGE];function H(e){return!!e.finishReason&&Ye.includes(e.finishReason)}function T(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];H(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function $(e){return this instanceof $?(this.v=e,this):new $(e)}function Ke(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(d){s[d]&&(o[d]=function(u){return new Promise(function(p,O){i.push([d,u,p,O])>1||a(d,u)})})}function a(d,u){try{f(s[d](u))}catch(p){R(i[0][3],p)}}function f(d){d.value instanceof $?Promise.resolve(d.value.v).then(v,w):R(i[0][2],d)}function v(d){a("next",d)}function w(d){a("throw",d)}function R(d,u){d(u),i.shift(),i.length&&a(i[0][0],i[0][1])}}/**
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
 */const ae=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function qe(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=ze(t),[s,o]=n.tee();return{stream:We(s),response:Ve(o)}}async function Ve(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return Y(Je(t));t.push(o)}}function We(e){return Ke(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield $(n.read());if(o)break;yield yield $(Y(s))}})}function ze(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:r,done:a})=>{if(a){if(o.trim()){s.error(new C("Failed to parse stream"));return}s.close();return}o+=r;let f=o.match(ae),v;for(;f;){try{v=JSON.parse(f[1])}catch{s.error(new C(`Error parsing JSON response: "${f[1]}"`));return}s.enqueue(v),o=o.substring(f[0].length),f=o.match(ae)}return i()}).catch(r=>{let a=r;throw a.stack=r.stack,a.name==="AbortError"?a=new pe("Request aborted when reading from the stream"):a=new C("Error reading from the stream"),a})}}})}function Je(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates){let o=0;for(const i of s.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=i.citationMetadata,n.candidates[o].groundingMetadata=i.groundingMetadata,n.candidates[o].finishReason=i.finishReason,n.candidates[o].finishMessage=i.finishMessage,n.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[o].content||(n.candidates[o].content={role:i.content.role||"user",parts:[]});const r={};for(const a of i.content.parts)a.text&&(r.text=a.text),a.functionCall&&(r.functionCall=a.functionCall),a.executableCode&&(r.executableCode=a.executableCode),a.codeExecutionResult&&(r.codeExecutionResult=a.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[o].content.parts.push(r)}o++}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
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
 */async function Ee(e,t,n,s){const o=await U(t,L.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return qe(o)}async function Ce(e,t,n,s){const i=await(await U(t,L.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:Y(i)}}/**
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
 */function ye(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function G(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Xe(t)}function Xe(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new C("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new C("No content is provided for sending chat message.");return s?t:n}function Qe(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new M("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=G(e);s.contents=[i]}return{generateContentRequest:s}}function ce(e){let t;return e.contents?t=e:t={contents:[G(e)]},e.systemInstruction&&(t.systemInstruction=ye(e.systemInstruction)),t}function Ze(e){return typeof e=="string"||Array.isArray(e)?{content:G(e)}:e}/**
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
 */const le=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],et={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function tt(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new C(`First content should be with role 'user', got ${s}`);if(!Q.includes(s))throw new C(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Q)}`);if(!Array.isArray(o))throw new C("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new C("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of o)for(const f of le)f in a&&(i[f]+=1);const r=et[s];for(const a of le)if(!r.includes(a)&&i[a]>0)throw new C(`Content with role '${s}' can't contain '${a}' part`);t=!0}}function de(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const s of n.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
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
 */const ue="SILENT_ERROR";class nt{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(tt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,r,a,f;await this._sendPromise;const v=G(t),w={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,v]},R=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>Ce(this._apiKey,this.model,w,R)).then(u=>{var p;if(de(u.response)){this._history.push(v);const O=Object.assign({parts:[],role:"model"},(p=u.response.candidates)===null||p===void 0?void 0:p[0].content);this._history.push(O)}else{const O=T(u.response);O&&console.warn(`sendMessage() was unsuccessful. ${O}. Inspect response object for details.`)}d=u}).catch(u=>{throw this._sendPromise=Promise.resolve(),u}),await this._sendPromise,d}async sendMessageStream(t,n={}){var s,o,i,r,a,f;await this._sendPromise;const v=G(t),w={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(f=this.params)===null||f===void 0?void 0:f.cachedContent,contents:[...this._history,v]},R=Object.assign(Object.assign({},this._requestOptions),n),d=Ee(this._apiKey,this.model,w,R);return this._sendPromise=this._sendPromise.then(()=>d).catch(u=>{throw new Error(ue)}).then(u=>u.response).then(u=>{if(de(u)){this._history.push(v);const p=Object.assign({},u.candidates[0].content);p.role||(p.role="model"),this._history.push(p)}else{const p=T(u);p&&console.warn(`sendMessageStream() was unsuccessful. ${p}. Inspect response object for details.`)}}).catch(u=>{u.message!==ue&&console.error(u)}),d}}/**
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
 */async function st(e,t,n,s){return(await U(t,L.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
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
 */async function ot(e,t,n,s){return(await U(t,L.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function it(e,t,n,s){const o=n.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await U(t,L.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class fe{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=ye(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=ce(t),i=Object.assign(Object.assign({},this._requestOptions),n);return Ce(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=ce(t),i=Object.assign(Object.assign({},this._requestOptions),n);return Ee(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new nt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Qe(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return st(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=Ze(t),o=Object.assign(Object.assign({},this._requestOptions),n);return ot(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return it(this.apiKey,this.model,t,s)}}/**
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
 */class rt{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new C("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new fe(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new M("Cached content must contain a `name` field.");if(!t.model)throw new M("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const r of o)if(n!=null&&n[r]&&t[r]&&(n==null?void 0:n[r])!==t[r]){if(r==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,f=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(a===f)continue}throw new M(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${t[r]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new fe(this.apiKey,i,s)}}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ct=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),he=e=>{const t=ct(e);return t.charAt(0).toUpperCase()+t.slice(1)},ve=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),lt=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:i,iconNode:r,...a},f)=>m.createElement("svg",{ref:f,...dt,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:ve("lucide",o),...!i&&!lt(a)&&{"aria-hidden":"true"},...a},[...r.map(([v,w])=>m.createElement(v,w)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,t)=>{const n=m.forwardRef(({className:s,...o},i)=>m.createElement(ut,{ref:i,iconNode:t,className:ve(`lucide-${at(he(e))}`,`lucide-${e}`,s),...o}));return n.displayName=he(e),n};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],ht=j("circle-stop",ft);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],mt=j("loader-circle",gt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Et=j("mic",pt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],yt=j("send",Ct);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],_t=j("volume-2",vt);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],It=j("volume-x",wt),ge={checkin:"Daily Check-In",plan3d:"3-Day DASH Plan (~1,800 mg sodium/day)",labels:"Read Food Labels (sodium)",movement:"Gentle Movement (20 min/day)",eatout:"Eat Out Low Sodium"},bt=({initialPrompt:e,clearInitialPrompt:t})=>{const[n,s]=m.useState([{text:"Hello! I'm your DASH Coach. How can I help you today?",sender:"ai"}]),[o,i]=m.useState(""),[r,a]=m.useState(!1),[f,v]=m.useState([]),[w,R]=m.useState(!1),[d,u]=m.useState(!1),p=m.useRef(null),O=m.useRef(null),A=m.useRef(null),P=m.useRef(window.speechSynthesis);m.useEffect(()=>{const l=()=>{const S=_("preferences.coachQuickActions",{checkin:!0,plan3d:!0,labels:!0,movement:!0,eatout:!0}),E=Object.keys(ge).filter(y=>S[y]).map(y=>ge[y]);v(E)};if(l(),window.addEventListener("settings-changed",l),"webkitSpeechRecognition"in window||"SpeechRecognition"in window){const S=window.SpeechRecognition||window.webkitSpeechRecognition;A.current=new S,A.current.continuous=!1,A.current.interimResults=!1,A.current.lang="en-US",A.current.onresult=E=>{const y=E.results[0][0].transcript;i(b=>b?b+" "+y:y),R(!1)},A.current.onerror=E=>{console.error("Speech recognition error",E.error),R(!1)},A.current.onend=()=>{R(!1)}}return()=>{window.removeEventListener("settings-changed",l),d&&P.current.cancel()}},[]),m.useEffect(()=>{var l;(l=p.current)==null||l.scrollIntoView({behavior:"smooth"})},[n]),m.useEffect(()=>{e&&(F(e),t&&t())},[e]);const _e=()=>{if(!A.current){alert("Speech recognition is not supported in this browser.");return}w?(A.current.stop(),R(!1)):(A.current.start(),R(!0))},we=l=>{if(d){P.current.cancel(),u(!1);return}const S=l.replace(/[*#_]/g,""),E=new SpeechSynthesisUtterance(S);E.lang="en-US";const b=window.speechSynthesis.getVoices().find(c=>c.name.includes("Google")&&c.lang.startsWith("en")||c.name.includes("Natural")&&c.lang.startsWith("en")||c.lang==="en-US");b&&(E.voice=b),E.onend=()=>u(!1),u(!0),P.current.speak(E)},Ie=()=>{var y,b;let l=_("dash_bp_readings",[]);if(l.length===0){i(c=>`CONTEXT: I have no BP readings logged yet.

`+c.trim()),(y=O.current)==null||y.focus();return}l.sort((c,I)=>new Date(I.date+"T"+I.time).getTime()-new Date(c.date+"T"+c.time).getTime());const S=l.slice(0,5);let E=`Here are my most recent blood pressure readings for context:
`;S.forEach(c=>{const I=new Date(c.date+"T"+c.time).toLocaleDateString("en-US",{month:"short",day:"numeric"});E+=`- ${I}: ${c.systolic}/${c.diastolic} mmHg
`}),i(c=>E+`
`+c.trim()),(b=O.current)==null||b.focus()},F=async l=>{var y,b;if(!l.trim())return!0;const S={text:l,sender:"user"};s(c=>[...c,S]),a(!0);let E=!1;try{const c={name:_("profile.name",""),age:_("profile.age",""),sex:_("profile.sex",""),heightFt:_("profile.heightFt",""),heightIn:_("profile.heightIn",""),heightCm:_("profile.heightCm",""),weight:_("profile.weight",""),medicalConditions:_("profile.medicalConditions",""),units:_("preferences.units","us"),sodiumTarget:_("preferences.sodiumTargetMg",1800),exerciseLevel:_("preferences.exerciseLevelDefault","beginner")},I=_("dash_medications_v2",[]);let g=`

--- USER PROFILE & CONTEXT ---
`;c.name&&(g+=`Name: ${c.name}
`),c.age&&(g+=`Age: ${c.age}
`),c.sex&&(g+=`Sex: ${c.sex}
`),c.units==="us"?(c.heightFt&&c.heightIn&&(g+=`Height: ${c.heightFt}' ${c.heightIn}"
`),c.weight&&(g+=`Weight: ${c.weight} lbs
`)):(c.heightCm&&(g+=`Height: ${c.heightCm} cm
`),c.weight&&(g+=`Weight: ${c.weight} kg
`)),g+=`Sodium Target: ${c.sodiumTarget} mg/day
`,g+=`Activity Level: ${c.exerciseLevel}
`,c.medicalConditions?g+=`Medical Conditions: ${c.medicalConditions}
`:g+=`Medical Conditions: None listed.
`,I.length>0?(g+=`
Medications:
`,I.forEach(N=>{g+=`- ${N.name} ${N.dose}${N.unit}
`})):g+=`
Medications: None listed.
`,g+=`----------------------------
`;const Se=`IDENTITY & ROLE
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
Include a brief disclaimer if answering medical or drug-related topics.`,q="AIzaSyASG6xI0ys4wwRUZhvQjpWUm5BoOvo8aNo",be=new rt(q),Oe=`${Se}

${g}

${l}`,Ae=["gemini-2.5-flash","gemini-2.0-flash","gemini-1.5-flash"];let B;for(const N of Ae)try{const W=(b=(y=(await be.getGenerativeModel({model:N}).generateContent(Oe)).response)==null?void 0:y.text)==null?void 0:b.call(y);if(W){B=W;break}}catch(V){console.warn(`Model ${N} failed:`,V)}if(!B)throw new Error("All models failed to generate a response.");const xe={text:B,sender:"ai"};s(N=>[...N,xe]),E=!0}catch(c){console.error("Gemini API error:",c);let I="Sorry, I'm having trouble connecting right now. Please try again later.";if(c instanceof Error){const x=c.message.toLowerCase();x.includes("permission")||x.includes("denied")?I="It looks like there's a permission issue with the AI service. Please contact support.":x.includes("quota")?I="The AI service usage limit has been reached. Please try again later.":x.includes("model")&&(x.includes("not found")||x.includes("unavailable"))?I="The AI model is currently unavailable. Please try again later.":x.includes("api key")&&(I="System Error: API Key configuration is missing. Please check your environment settings.")}const g={text:I,sender:"ai"};s(x=>[...x,g])}finally{a(!1)}return E},K=async()=>{const l=o;if(!l.trim())return;i(""),await F(l)||i(l)},Re=l=>{F(l)};return h.jsxs("div",{className:"flex flex-col bg-surface h-full",children:[h.jsxs("div",{className:"flex-grow p-2 space-y-4 overflow-y-auto",children:[n.map((l,S)=>h.jsx("div",{className:`flex ${l.sender==="user"?"justify-end":"justify-start"}`,children:h.jsxs("div",{className:`p-3 rounded-2xl max-w-xs md:max-w-md shadow-sm ${l.sender==="user"?"bg-brandPrimary text-white rounded-br-none":"bg-brandPrimaryTint text-textPrimary rounded-bl-none"}`,children:[h.jsx("div",{className:"prose text-lg",dangerouslySetInnerHTML:{__html:Ne(l.text)}}),l.sender==="ai"&&h.jsxs("button",{onClick:()=>we(l.text),className:"mt-2 text-brandPrimary/70 hover:text-brandPrimary transition-colors flex items-center gap-1 text-sm",title:"Read aloud",children:[d?h.jsx(It,{size:16}):h.jsx(_t,{size:16}),d?"Stop":"Listen"]})]})},S)),r&&h.jsx("div",{className:"flex justify-start",children:h.jsx("div",{className:"p-3 rounded-2xl bg-brandPrimaryTint text-textPrimary rounded-bl-none",children:h.jsx("span",{className:"animate-pulse text-lg",children:"● ● ●"})})}),h.jsx("div",{ref:p})]}),h.jsxs("div",{className:"p-2 bg-surface border-t border-border",children:[h.jsx("div",{className:"px-2 pb-2",children:h.jsx("button",{onClick:Ie,className:"w-full text-left text-accentBlue font-semibold text-lg py-2 px-3 rounded-lg border-2 border-dashed border-accentBlue hover:bg-accentBlue/10 transition-colors",children:"+ Include Recent BP Readings in Message"})}),h.jsx("div",{className:"flex overflow-x-auto whitespace-nowrap gap-2 mb-3 pb-2",children:f.map(l=>h.jsx("button",{onClick:()=>Re(l),className:"flex-shrink-0 px-4 py-3 bg-brandPrimaryTint text-brandPrimary rounded-full text-base font-medium hover:bg-brandAccent/50 transition-colors min-h-[48px]",children:l},l))}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("button",{onClick:_e,className:`p-3 rounded-full transition-colors ${w?"bg-red-100 text-red-600 animate-pulse border border-red-200":"bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"}`,title:"Speak now",children:w?h.jsx(ht,{size:24}):h.jsx(Et,{size:24})}),h.jsx("input",{ref:O,type:"text",value:o,onChange:l=>i(l.target.value),onKeyPress:l=>l.key==="Enter"&&K(),className:"flex-grow p-3 border border-border bg-surface rounded-lg h-12 text-lg focus:border-transparent focus:ring-2 focus:ring-brandPrimary",placeholder:w?"Listening...":"Type or speak...",disabled:r}),h.jsx("button",{onClick:K,disabled:r||!o.trim(),className:"bg-brandPrimary text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 disabled:bg-textMuted transition-colors","aria-label":"Send message",children:r?h.jsx(mt,{className:"animate-spin",size:24}):h.jsx(yt,{size:24})})]})]})]})};export{bt as default};
