import{_ as n,c as s,o as a,d as p}from"./app.26afa5f0.js";const t='{"title":"Mixin","description":"","frontmatter":{},"headers":[{"level":2,"title":"清除浮动","slug":"清除浮动"},{"level":2,"title":"文本省略","slug":"文本省略"}],"relativePath":"scss/mixin/index.md","lastUpdated":1632544186517}',e={},o=[p('<h1 id="mixin" tabindex="-1">Mixin <a class="header-anchor" href="#mixin" aria-hidden="true">#</a></h1><h2 id="清除浮动" tabindex="-1">清除浮动 <a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token keyword">@mixin</span> <span class="token selector">clearfix </span><span class="token punctuation">{</span>\n  <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>\n    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="文本省略" tabindex="-1">文本省略 <a class="header-anchor" href="#文本省略" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token comment">// 单行文本省略</span>\n<span class="token keyword">@mixin</span> <span class="token function">single-text</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token property">-o-text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>\n  <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 多行文本省略</span>\n<span class="token keyword">@mixin</span> <span class="token function">multi-text</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">,</span> <span class="token variable">$row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>\n  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> <span class="token variable">$row</span><span class="token punctuation">;</span>\n  <span class="token comment">/*! autoprefixer: off */</span>\n  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',5)];var c=n(e,[["render",function(n,p,t,e,c,l){return a(),s("div",null,o)}]]);export{t as __pageData,c as default};