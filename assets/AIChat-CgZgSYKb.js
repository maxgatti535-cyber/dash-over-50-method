import{r as A,g as C,j as h,m as ve}from"./index-D6RZ-zdp.js";var K;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(K||(K={}));/**
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
 */var q;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(q||(q={}));var V;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(V||(V={}));/**
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
 */const J=["user","model","function","system"];var W;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(W||(W={}));var X;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(X||(X={}));var Q;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(Q||(Q={}));var z;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(z||(z={}));var j;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(j||(j={}));var Z;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(Z||(Z={}));var ee;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(ee||(ee={}));var te;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(te||(te={}));/**
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
 */class m extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class M extends m{constructor(t,n){super(t),this.response=n}}class de extends m{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class T extends m{}class ue extends m{}/**
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
 */const _e="https://generativelanguage.googleapis.com",ye="v1beta",Ie="0.24.1",Oe="genai-js";var x;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(x||(x={}));class Re{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||ye;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||_e}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function Ae(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${Oe}/${Ie}`),t.join(" ")}async function we(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",Ae(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new T(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new T(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new T(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function Se(e,t,n,s,o,i){const a=new Re(e,t,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},xe(i)),{method:"POST",headers:await we(a),body:o})}}async function k(e,t,n,s,o,i={},a=fetch){const{url:r,fetchOptions:u}=await Se(e,t,n,s,o,i);return be(r,u,a)}async function be(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){Te(o,e)}return s.ok||await Ne(s,e),s}function Te(e,t){let n=e;throw n.name==="AbortError"?(n=new ue(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof de||e instanceof T||(n=new m(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function Ne(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new de(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function xe(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
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
 */function P(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new M(`${b(e)}`,e);return Me(e)}else if(e.promptFeedback)throw new M(`Text not available. ${b(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new M(`${b(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),ne(e)[0]}else if(e.promptFeedback)throw new M(`Function call not available. ${b(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new M(`${b(e)}`,e);return ne(e)}else if(e.promptFeedback)throw new M(`Function call not available. ${b(e)}`,e)},e}function Me(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function ne(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Le=[j.RECITATION,j.SAFETY,j.LANGUAGE];function H(e){return!!e.finishReason&&Le.includes(e.finishReason)}function b(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];H(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function G(e){return this instanceof G?(this.v=e,this):new G(e)}function De(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(f){s[f]&&(o[f]=function(d){return new Promise(function(E,w){i.push([f,d,E,w])>1||r(f,d)})})}function r(f,d){try{u(s[f](d))}catch(E){y(i[0][3],E)}}function u(f){f.value instanceof G?Promise.resolve(f.value.v).then(v,O):y(i[0][2],f)}function v(f){r("next",f)}function O(f){r("throw",f)}function y(f,d){f(d),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
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
 */const se=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function je(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=ke(t),[s,o]=n.tee();return{stream:$e(s),response:Ge(o)}}async function Ge(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return P(He(t));t.push(o)}}function $e(e){return De(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield G(n.read());if(o)break;yield yield G(P(s))}})}function ke(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new m("Failed to parse stream"));return}s.close();return}o+=a;let u=o.match(se),v;for(;u;){try{v=JSON.parse(u[1])}catch{s.error(new m(`Error parsing JSON response: "${u[1]}"`));return}s.enqueue(v),o=o.substring(u[0].length),u=o.match(se)}return i()}).catch(a=>{let r=a;throw r.stack=a.stack,r.name==="AbortError"?r=new ue("Request aborted when reading from the stream"):r=new m("Error reading from the stream"),r})}}})}function He(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates){let o=0;for(const i of s.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=i.citationMetadata,n.candidates[o].groundingMetadata=i.groundingMetadata,n.candidates[o].finishReason=i.finishReason,n.candidates[o].finishMessage=i.finishMessage,n.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[o].content||(n.candidates[o].content={role:i.content.role||"user",parts:[]});const a={};for(const r of i.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[o].content.parts.push(a)}o++}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
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
 */async function fe(e,t,n,s){const o=await k(t,x.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return je(o)}async function he(e,t,n,s){const i=await(await k(t,x.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:P(i)}}/**
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
 */function ge(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function $(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return Ue(t)}function Ue(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new m("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new m("No content is provided for sending chat message.");return s?t:n}function Pe(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new T("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=$(e);s.contents=[i]}return{generateContentRequest:s}}function oe(e){let t;return e.contents?t=e:t={contents:[$(e)]},e.systemInstruction&&(t.systemInstruction=ge(e.systemInstruction)),t}function Fe(e){return typeof e=="string"||Array.isArray(e)?{content:$(e)}:e}/**
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
 */const ie=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ye={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Be(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new m(`First content should be with role 'user', got ${s}`);if(!J.includes(s))throw new m(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(J)}`);if(!Array.isArray(o))throw new m("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new m("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const u of ie)u in r&&(i[u]+=1);const a=Ye[s];for(const r of ie)if(!a.includes(r)&&i[r]>0)throw new m(`Content with role '${s}' can't contain '${r}' part`);t=!0}}function ae(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const s of n.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
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
 */const re="SILENT_ERROR";class Ke{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(Be(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,a,r,u;await this._sendPromise;const v=$(t),O={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,v]},y=Object.assign(Object.assign({},this._requestOptions),n);let f;return this._sendPromise=this._sendPromise.then(()=>he(this._apiKey,this.model,O,y)).then(d=>{var E;if(ae(d.response)){this._history.push(v);const w=Object.assign({parts:[],role:"model"},(E=d.response.candidates)===null||E===void 0?void 0:E[0].content);this._history.push(w)}else{const w=b(d.response);w&&console.warn(`sendMessage() was unsuccessful. ${w}. Inspect response object for details.`)}f=d}).catch(d=>{throw this._sendPromise=Promise.resolve(),d}),await this._sendPromise,f}async sendMessageStream(t,n={}){var s,o,i,a,r,u;await this._sendPromise;const v=$(t),O={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,v]},y=Object.assign(Object.assign({},this._requestOptions),n),f=fe(this._apiKey,this.model,O,y);return this._sendPromise=this._sendPromise.then(()=>f).catch(d=>{throw new Error(re)}).then(d=>d.response).then(d=>{if(ae(d)){this._history.push(v);const E=Object.assign({},d.candidates[0].content);E.role||(E.role="model"),this._history.push(E)}else{const E=b(d);E&&console.warn(`sendMessageStream() was unsuccessful. ${E}. Inspect response object for details.`)}}).catch(d=>{d.message!==re&&console.error(d)}),f}}/**
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
 */async function qe(e,t,n,s){return(await k(t,x.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
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
 */async function Ve(e,t,n,s){return(await k(t,x.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function Je(e,t,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:t}));return(await k(t,x.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class ce{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=ge(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=oe(t),i=Object.assign(Object.assign({},this._requestOptions),n);return he(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=oe(t),i=Object.assign(Object.assign({},this._requestOptions),n);return fe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new Ke(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Pe(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return qe(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=Fe(t),o=Object.assign(Object.assign({},this._requestOptions),n);return Ve(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return Je(this.apiKey,this.model,t,s)}}/**
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
 */class We{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new m("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ce(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new T("Cached content must contain a `name` field.");if(!t.model)throw new T("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&t[a]&&(n==null?void 0:n[a])!==t[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(r===u)continue}throw new T(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${t[a]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new ce(this.apiKey,i,s)}}const le={checkin:"Daily Check-In",plan3d:"3-Day DASH Plan (~1,800 mg sodium/day)",labels:"Read Food Labels (sodium)",movement:"Gentle Movement (20 min/day)",eatout:"Eat Out Low Sodium"},ze=({initialPrompt:e,clearInitialPrompt:t})=>{const[n,s]=A.useState([{text:"Hello! I'm your DASH Coach. How can I help you today?",sender:"ai"}]),[o,i]=A.useState(""),[a,r]=A.useState(!1),[u,v]=A.useState([]),O=A.useRef(null),y=A.useRef(null);A.useEffect(()=>{const l=()=>{const S=C("preferences.coachQuickActions",{checkin:!0,plan3d:!0,labels:!0,movement:!0,eatout:!0}),N=Object.keys(le).filter(_=>S[_]).map(_=>le[_]);v(N)};return l(),window.addEventListener("settings-changed",l),()=>{window.removeEventListener("settings-changed",l)}},[]),A.useEffect(()=>{var l;(l=O.current)==null||l.scrollIntoView({behavior:"smooth"})},[n]),A.useEffect(()=>{e&&(d(e),t&&t())},[e]);const f=()=>{var _,L;let l=C("dash_bp_readings",[]);if(l.length===0){i(c=>`CONTEXT: I have no BP readings logged yet.

`+c.trim()),(_=y.current)==null||_.focus();return}l.sort((c,p)=>new Date(p.date+"T"+p.time).getTime()-new Date(c.date+"T"+c.time).getTime());const S=l.slice(0,5);let N=`Here are my most recent blood pressure readings for context:
`;S.forEach(c=>{const p=new Date(c.date+"T"+c.time).toLocaleDateString("en-US",{month:"short",day:"numeric"});N+=`- ${p}: ${c.systolic}/${c.diastolic} mmHg
`}),i(c=>N+`
`+c.trim()),(L=y.current)==null||L.focus()},d=async l=>{var _,L;if(!l.trim())return!0;const S={text:l,sender:"user"};s(c=>[...c,S]),r(!0);let N=!1;try{const c={name:C("profile.name",""),age:C("profile.age",""),sex:C("profile.sex",""),heightFt:C("profile.heightFt",""),heightIn:C("profile.heightIn",""),heightCm:C("profile.heightCm",""),weight:C("profile.weight",""),medicalConditions:C("profile.medicalConditions",""),units:C("preferences.units","us"),sodiumTarget:C("preferences.sodiumTargetMg",1800),exerciseLevel:C("preferences.exerciseLevelDefault","beginner")},p=C("dash_medications_v2",[]);let g=`

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
`,p.length>0?(g+=`
Medications:
`,p.forEach(R=>{g+=`- ${R.name} ${R.dose}${R.unit}
`})):g+=`
Medications: None listed.
`,g+=`----------------------------
`;const Ee=`IDENTITY & ROLE
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
Include a brief disclaimer if answering medical or drug-related topics.`,D="AIzaSyAw1A_9HNtnBCqm1l1kTa0WORMMN_Y79jM";console.log("DEBUG: API Key present?",!!D,D?`Length: ${D.length}`:"Missing");const me=new We(D),Ce=`${Ee}

${g}

${l}`,F=["gemini-2.5-flash","gemini-2.0-flash","gemini-1.5-flash"];console.log("AIChat attempting models:",F);let U;for(const R of F)try{const B=(L=(_=(await me.getGenerativeModel({model:R}).generateContent(Ce)).response)==null?void 0:_.text)==null?void 0:L.call(_);if(B){console.log(`Model ${R} succeeded.`),U=B;break}}catch(Y){console.warn(`Model ${R} failed:`,Y)}if(!U)throw new Error("All models failed to generate a response.");const pe={text:U,sender:"ai"};s(R=>[...R,pe]),N=!0}catch(c){console.error("Gemini API error:",c);let p="Sorry, I'm having trouble connecting right now. Please try again later.";if(c instanceof Error){const I=c.message.toLowerCase();I.includes("permission")||I.includes("denied")?p="It looks like there's a permission issue with the AI service. Please contact support.":I.includes("quota")?p="The AI service usage limit has been reached. Please try again later.":I.includes("model")&&(I.includes("not found")||I.includes("unavailable"))?p="The AI model is currently unavailable. Please try again later.":I.includes("api key")&&(p="System Error: API Key configuration is missing. Please check your environment settings.")}const g={text:p,sender:"ai"};s(I=>[...I,g])}finally{r(!1)}return N},E=async()=>{const l=o;if(!l.trim())return;i(""),await d(l)||i(l)},w=l=>{d(l)};return h.jsxs("div",{className:"flex flex-col bg-surface h-full",children:[h.jsxs("div",{className:"flex-grow p-2 space-y-4 overflow-y-auto",children:[n.map((l,S)=>h.jsx("div",{className:`flex ${l.sender==="user"?"justify-end":"justify-start"}`,children:h.jsx("div",{className:`p-3 rounded-2xl max-w-xs md:max-w-md shadow-sm ${l.sender==="user"?"bg-brandPrimary text-white rounded-br-none":"bg-brandPrimaryTint text-textPrimary rounded-bl-none"}`,children:h.jsx("div",{className:"prose text-lg",dangerouslySetInnerHTML:{__html:ve(l.text)}})})},S)),a&&h.jsx("div",{className:"flex justify-start",children:h.jsx("div",{className:"p-3 rounded-2xl bg-brandPrimaryTint text-textPrimary rounded-bl-none",children:h.jsx("span",{className:"animate-pulse text-lg",children:"● ● ●"})})}),h.jsx("div",{ref:O})]}),h.jsxs("div",{className:"p-2 bg-surface border-t border-border",children:[h.jsx("div",{className:"px-2 pb-2",children:h.jsx("button",{onClick:f,className:"w-full text-left text-accentBlue font-semibold text-lg py-2 px-3 rounded-lg border-2 border-dashed border-accentBlue hover:bg-accentBlue/10 transition-colors",children:"+ Include Recent BP Readings in Message"})}),h.jsx("div",{className:"flex overflow-x-auto whitespace-nowrap gap-2 mb-3 pb-2",children:u.map(l=>h.jsx("button",{onClick:()=>w(l),className:"flex-shrink-0 px-4 py-3 bg-brandPrimaryTint text-brandPrimary rounded-full text-base font-medium hover:bg-brandAccent/50 transition-colors min-h-[48px]",children:l},l))}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("input",{ref:y,type:"text",value:o,onChange:l=>i(l.target.value),onKeyPress:l=>l.key==="Enter"&&E(),className:"flex-grow p-3 border border-border bg-surface rounded-lg h-12 text-lg focus:border-transparent focus:ring-2 focus:ring-brandPrimary",placeholder:"Type your message...",disabled:a}),h.jsx("button",{onClick:E,disabled:a||!o.trim(),className:"bg-brandPrimary text-white rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 disabled:bg-textMuted transition-colors","aria-label":"Send message",children:h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})]})]})};export{ze as default};
