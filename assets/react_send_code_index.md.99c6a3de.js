import{_ as n,c as s,o as a,d as t}from"./app.26afa5f0.js";const p='{"title":"发送验证码","description":"","frontmatter":{},"headers":[{"level":2,"title":"✍️ 实现","slug":"✍️-实现"},{"level":2,"title":"🔗 参考","slug":"🔗-参考"}],"relativePath":"react/send_code/index.md","lastUpdated":1632544186513}',o={},e=[t('<h1 id="发送验证码" tabindex="-1">发送验证码 <a class="header-anchor" href="#发送验证码" aria-hidden="true">#</a></h1><h2 id="✍️-实现" tabindex="-1">✍️ 实现 <a class="header-anchor" href="#✍️-实现" aria-hidden="true">#</a></h2><p><code>SendCode.tsx</code></p><div class="language-tsx"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token constant">FC</span><span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">useInterval</span><span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span> delay<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> savedCallback <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  savedCallback<span class="token punctuation">.</span>current <span class="token operator">=</span> callback<span class="token punctuation">;</span>\n\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      savedCallback<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>delay <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span>tick<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>delay<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SendCodeProps</span> <span class="token punctuation">{</span>\n  time<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  onSend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  initText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  runText<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  endText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> SendCode<span class="token operator">:</span> <span class="token constant">FC</span><span class="token operator">&lt;</span>SendCodeProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> time<span class="token punctuation">,</span> onSend<span class="token punctuation">,</span> initText<span class="token punctuation">,</span> runText<span class="token punctuation">,</span> endText <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>second<span class="token punctuation">,</span> setSecond<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>isRunning<span class="token punctuation">,</span> setRunning<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">handleSend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setRunning</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setText</span><span class="token punctuation">(</span><span class="token function">runText</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    onSend <span class="token operator">&amp;&amp;</span> <span class="token function">onSend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">useInterval</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> val <span class="token operator">=</span> second <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setSecond</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setRunning</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setText</span><span class="token punctuation">(</span>endText<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">setSecond</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setText</span><span class="token punctuation">(</span><span class="token function">runText</span><span class="token punctuation">(</span>time <span class="token operator">-</span> val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    isRunning <span class="token operator">?</span> <span class="token number">1000</span> <span class="token operator">:</span> <span class="token keyword">null</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isRunning<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSend<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sendcode-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nSendCode<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n  time<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>\n  initText<span class="token operator">:</span> <span class="token string">&#39;获取验证码&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">runText</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">v<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>v<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">秒后重发</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  endText<span class="token operator">:</span> <span class="token string">&#39;重新获取验证码&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> SendCode<span class="token punctuation">;</span>\n</code></pre></div><hr><h2 id="🔗-参考" tabindex="-1">🔗 参考 <a class="header-anchor" href="#🔗-参考" aria-hidden="true">#</a></h2><ul><li><a href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/" target="_blank" rel="noopener noreferrer">Making setInterval Declarative with React Hooks</a></li></ul>',7)];var c=n(o,[["render",function(n,t,p,o,c,u){return a(),s("div",null,e)}]]);export{p as __pageData,c as default};
