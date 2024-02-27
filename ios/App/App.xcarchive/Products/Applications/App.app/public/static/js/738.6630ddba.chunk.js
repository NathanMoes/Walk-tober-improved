/*! For license information please see 738.6630ddba.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalktober=self.webpackChunkwalktober||[]).push([[738],{738:function(t,e,r){r.r(e),r.d(e,{scopeCss:function(){return A}});var n=r(2982),c="-shadowcsshost",o="-shadowcssslotted",s="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",i=new RegExp("("+c+a,"gim"),u=new RegExp("("+s+a,"gim"),l=new RegExp("("+o+a,"gim"),h=c+"-no-combinator",p=/-shadowcsshost-no-combinator([^\s]*)/,f=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,v=/::slotted/gim,m=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S=/(^.*?[^\\])??((:+)(.*)|$)/,k="%BLOCK%",W=function(t,e){var r=O(t),n=0;return r.escapedString.replace(_,(function(){var t=arguments.length<=2?void 0:arguments[2],c="",o=arguments.length<=4?void 0:arguments[4],s="";o&&o.startsWith("{"+k)&&(c=r.blocks[n++],o=o.substring(k.length+1),s="{");var a={selector:t,content:c},i=e(a);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(i.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(i.content).concat(o)}))},O=function(t){for(var e=t.split(b),r=[],n=[],c=0,o=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&c--,c>0?o.push(a):(o.length>0&&(n.push(o.join("")),r.push(k),o=[]),r.push(a)),"{"===a&&c++}return o.length>0&&(n.push(o.join("")),r.push(k)),{escapedString:r.join(""),blocks:n}},j=function(t,e,r){return t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){for(var c=e[2].split(","),o=[],s=0;s<c.length;s++){var a=c[s].trim();if(!a)break;o.push(r(h,a,e[3]))}return o.join(",")}return h+e[3]}))},E=function(t,e,r){return t+e.replace(c,"")+r},R=function(t,e,r){return e.indexOf(c)>-1?E(t,e,r):t+e+r+", "+e+" "+t+r},C=function(t,e){var r=function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e);return!r.test(t)},T=function(t,e){return t.replace(S,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return r+e+n+c}))},L=function(t,e,r){e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}));for(var n,c="."+e,o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(h)>-1)n=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n=".".concat(r);return t.replace(p,(function(t,e){return T(e,n)})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var o=t.replace(g,"");o.length>0&&(n=T(o,c))}return n},s=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var c="__ph-".concat(r,"__");return e.push(n),r++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,c){var o="__ph-".concat(r,"__");return e.push(c),r++,n+o})),placeholders:e}}(t),a="",i=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=s.content).indexOf(h)>-1);null!==(n=u.exec(t));){var f=n[1],d=t.slice(i,n.index).trim(),v=(l=l||d.indexOf(h)>-1)?o(d):d;a+="".concat(v," ").concat(f," "),i=u.lastIndex}var m,x=t.substring(i);return a+=(l=l||x.indexOf(h)>-1)?o(x):x,m=s.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,e){return m[+e]}))},$=function t(e,r,n,c,o){return W(e,(function(e){var o=e.selector,s=e.content;return"@"!==e.selector[0]?o=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():C(t,e)?L(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,c):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=t(e.content,r,n,c)),{selector:o.replace(/\s{2,}/g," ").trim(),content:s}}))},y=function(t,e,r,n,a){var p=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(l,(function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];if(e[2]){for(var o=e[2].trim(),s=e[3],a=r+o+s,i="",u=e[4]-1;u>=0;u--){var l=e[5][u];if("}"===l||","===l)break;i=l+i}var p=i+a,f="".concat(i.trimRight()).concat(a.trim());if(p.trim()!==f.trim()){var g="".concat(f,", ").concat(p);n.push({orgSelector:p,updatedSelector:g})}return a}return h+e[3]})),{selectors:n,cssText:t}}(t=function(t){return j(t,u,R)}(t=function(t){return j(t,i,E)}(t=t.replace(m,s).replace(d,c).replace(v,o))),n);return t=function(t){return f.reduce((function(t,e){return t.replace(e," ")}),t)}(t=p.cssText),e&&(t=$(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(r))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}},A=function(t,e,r){var c=e+"-h",o=e+"-s",s=t.match(w)||[];t=function(t){return t.replace(x,"")}(t);var a=[];if(r){var i=function(t){var e="/*!@___".concat(a.length,"___*/"),r="/*!@".concat(t.selector,"*/");return a.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=W(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,i),t):t}))}var u=y(t,e,c,o);return t=[u.cssText].concat((0,n.Z)(s)).join("\n"),r&&a.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUtSLFFBQVVULEVBQWFpQixFQUFLUixRQUFTdUcsR0FDbkMvRixHQUVKQSxDQUNYLEdBQ0osQ0FDQSxJQUFNa0csRUFBUy9CLEVBQWF2RCxFQUFTd0QsRUFBU0MsRUFBYUMsR0FVM0QsT0FUQTFELEVBQVUsQ0FBQ3NGLEVBQU90RixTQUFPLGVBQUsrRSxJQUFrQmpGLEtBQUssTUFDakRzRCxHQUNBOEIsRUFBYUssU0FBUSxZQUE4QixJQUEzQkgsRUFBVyxFQUFYQSxZQUFhQyxFQUFPLEVBQVBBLFFBQ2pDckYsRUFBVUEsRUFBUXRCLFFBQVEwRyxFQUFhQyxFQUMzQyxJQUVKQyxFQUFPVCxpQkFBaUJVLFNBQVEsU0FBQ3hCLEdBQzdCL0QsRUFBVUEsRUFBUXRCLFFBQVFxRixFQUFnQkcsWUFBYUgsRUFBZ0JNLGdCQUMzRSxJQUNPckUsQ0FDWCIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L3NoYWRvdy1jc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiBTdGVuY2lsIENsaWVudCBQbGF0Zm9ybSB2Mi4yMi4yIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKlxuICogVGhpcyBmaWxlIGlzIGEgcG9ydCBvZiBzaGFkb3dDU1MgZnJvbSB3ZWJjb21wb25lbnRzLmpzIHRvIFR5cGVTY3JpcHQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvYmxvYi80ZWZlY2Q3ZTBlL3NyYy9TaGFkb3dDU1MvU2hhZG93Q1NTLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzXG4gKi9cbmNvbnN0IHNhZmVTZWxlY3RvciA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVycyA9IFtdO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgLy8gUmVwbGFjZXMgYXR0cmlidXRlIHNlbGVjdG9ycyB3aXRoIHBsYWNlaG9sZGVycy5cbiAgICAvLyBUaGUgV1MgaW4gW2F0dHI9XCJ2YSBsdWVcIl0gd291bGQgb3RoZXJ3aXNlIGJlIGludGVycHJldGVkIGFzIGEgc2VsZWN0b3Igc2VwYXJhdG9yLlxuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvKFxcW1teXFxdXSpcXF0pL2csIChfLCBrZWVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VCeSA9IGBfX3BoLSR7aW5kZXh9X19gO1xuICAgICAgICBwbGFjZWhvbGRlcnMucHVzaChrZWVwKTtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VCeTtcbiAgICB9KTtcbiAgICAvLyBSZXBsYWNlcyB0aGUgZXhwcmVzc2lvbiBpbiBgOm50aC1jaGlsZCgybiArIDEpYCB3aXRoIGEgcGxhY2Vob2xkZXIuXG4gICAgLy8gV1MgYW5kIFwiK1wiIHdvdWxkIG90aGVyd2lzZSBiZSBpbnRlcnByZXRlZCBhcyBzZWxlY3RvciBzZXBhcmF0b3JzLlxuICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3Rvci5yZXBsYWNlKC8oOm50aC1bLVxcd10rKShcXChbXildK1xcKSkvZywgKF8sIHBzZXVkbywgZXhwKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VCeSA9IGBfX3BoLSR7aW5kZXh9X19gO1xuICAgICAgICBwbGFjZWhvbGRlcnMucHVzaChleHApO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICByZXR1cm4gcHNldWRvICsgcmVwbGFjZUJ5O1xuICAgIH0pO1xuICAgIGNvbnN0IHNzID0ge1xuICAgICAgICBjb250ZW50LFxuICAgICAgICBwbGFjZWhvbGRlcnMsXG4gICAgfTtcbiAgICByZXR1cm4gc3M7XG59O1xuY29uc3QgcmVzdG9yZVNhZmVTZWxlY3RvciA9IChwbGFjZWhvbGRlcnMsIGNvbnRlbnQpID0+IHtcbiAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9fX3BoLShcXGQrKV9fL2csIChfLCBpbmRleCkgPT4gcGxhY2Vob2xkZXJzWytpbmRleF0pO1xufTtcbmNvbnN0IF9wb2x5ZmlsbEhvc3QgPSAnLXNoYWRvd2Nzc2hvc3QnO1xuY29uc3QgX3BvbHlmaWxsU2xvdHRlZCA9ICctc2hhZG93Y3Nzc2xvdHRlZCc7XG4vLyBub3RlOiA6aG9zdC1jb250ZXh0IHByZS1wcm9jZXNzZWQgdG8gLXNoYWRvd2Nzc2hvc3Rjb250ZXh0LlxuY29uc3QgX3BvbHlmaWxsSG9zdENvbnRleHQgPSAnLXNoYWRvd2Nzc2NvbnRleHQnO1xuY29uc3QgX3BhcmVuU3VmZml4ID0gJykoPzpcXFxcKCgnICsgJyg/OlxcXFwoW14pKF0qXFxcXCl8W14pKF0qKSs/JyArICcpXFxcXCkpPyhbXix7XSopJztcbmNvbnN0IF9jc3NDb2xvbkhvc3RSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsSG9zdCArIF9wYXJlblN1ZmZpeCwgJ2dpbScpO1xuY29uc3QgX2Nzc0NvbG9uSG9zdENvbnRleHRSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsSG9zdENvbnRleHQgKyBfcGFyZW5TdWZmaXgsICdnaW0nKTtcbmNvbnN0IF9jc3NDb2xvblNsb3R0ZWRSZSA9IG5ldyBSZWdFeHAoJygnICsgX3BvbHlmaWxsU2xvdHRlZCArIF9wYXJlblN1ZmZpeCwgJ2dpbScpO1xuY29uc3QgX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciA9IF9wb2x5ZmlsbEhvc3QgKyAnLW5vLWNvbWJpbmF0b3InO1xuY29uc3QgX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvclJlID0gLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IoW15cXHNdKikvO1xuY29uc3QgX3NoYWRvd0RPTVNlbGVjdG9yc1JlID0gWy86OnNoYWRvdy9nLCAvOjpjb250ZW50L2ddO1xuY29uc3QgX3NlbGVjdG9yUmVTdWZmaXggPSAnKFs+XFxcXHN+K1suLHs6XVtcXFxcc1xcXFxTXSopPyQnO1xuY29uc3QgX3BvbHlmaWxsSG9zdFJlID0gLy1zaGFkb3djc3Nob3N0L2dpbTtcbmNvbnN0IF9jb2xvbkhvc3RSZSA9IC86aG9zdC9naW07XG5jb25zdCBfY29sb25TbG90dGVkUmUgPSAvOjpzbG90dGVkL2dpbTtcbmNvbnN0IF9jb2xvbkhvc3RDb250ZXh0UmUgPSAvOmhvc3QtY29udGV4dC9naW07XG5jb25zdCBfY29tbWVudFJlID0gL1xcL1xcKlxccypbXFxzXFxTXSo/XFwqXFwvL2c7XG5jb25zdCBzdHJpcENvbW1lbnRzID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoX2NvbW1lbnRSZSwgJycpO1xufTtcbmNvbnN0IF9jb21tZW50V2l0aEhhc2hSZSA9IC9cXC9cXCpcXHMqI1xccypzb3VyY2UoTWFwcGluZyk/VVJMPVtcXHNcXFNdKz9cXCpcXC8vZztcbmNvbnN0IGV4dHJhY3RDb21tZW50c1dpdGhIYXNoID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIGlucHV0Lm1hdGNoKF9jb21tZW50V2l0aEhhc2hSZSkgfHwgW107XG59O1xuY29uc3QgX3J1bGVSZSA9IC8oXFxzKikoW147XFx7XFx9XSs/KShcXHMqKSgoPzp7JUJMT0NLJX0/XFxzKjs/KXwoPzpcXHMqOykpL2c7XG5jb25zdCBfY3VybHlSZSA9IC8oW3t9XSkvZztcbmNvbnN0IF9zZWxlY3RvclBhcnRzUmUgPSAvKF4uKj9bXlxcXFxdKT8/KCg6KykoLiopfCQpLztcbmNvbnN0IE9QRU5fQ1VSTFkgPSAneyc7XG5jb25zdCBDTE9TRV9DVVJMWSA9ICd9JztcbmNvbnN0IEJMT0NLX1BMQUNFSE9MREVSID0gJyVCTE9DSyUnO1xuY29uc3QgcHJvY2Vzc1J1bGVzID0gKGlucHV0LCBydWxlQ2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBpbnB1dFdpdGhFc2NhcGVkQmxvY2tzID0gZXNjYXBlQmxvY2tzKGlucHV0KTtcbiAgICBsZXQgbmV4dEJsb2NrSW5kZXggPSAwO1xuICAgIHJldHVybiBpbnB1dFdpdGhFc2NhcGVkQmxvY2tzLmVzY2FwZWRTdHJpbmcucmVwbGFjZShfcnVsZVJlLCAoLi4ubSkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IG1bMl07XG4gICAgICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgICAgIGxldCBzdWZmaXggPSBtWzRdO1xuICAgICAgICBsZXQgY29udGVudFByZWZpeCA9ICcnO1xuICAgICAgICBpZiAoc3VmZml4ICYmIHN1ZmZpeC5zdGFydHNXaXRoKCd7JyArIEJMT0NLX1BMQUNFSE9MREVSKSkge1xuICAgICAgICAgICAgY29udGVudCA9IGlucHV0V2l0aEVzY2FwZWRCbG9ja3MuYmxvY2tzW25leHRCbG9ja0luZGV4KytdO1xuICAgICAgICAgICAgc3VmZml4ID0gc3VmZml4LnN1YnN0cmluZyhCTE9DS19QTEFDRUhPTERFUi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIGNvbnRlbnRQcmVmaXggPSAneyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3NzUnVsZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVDYWxsYmFjayhjc3NSdWxlKTtcbiAgICAgICAgcmV0dXJuIGAke21bMV19JHtydWxlLnNlbGVjdG9yfSR7bVszXX0ke2NvbnRlbnRQcmVmaXh9JHtydWxlLmNvbnRlbnR9JHtzdWZmaXh9YDtcbiAgICB9KTtcbn07XG5jb25zdCBlc2NhcGVCbG9ja3MgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBpbnB1dFBhcnRzID0gaW5wdXQuc3BsaXQoX2N1cmx5UmUpO1xuICAgIGNvbnN0IHJlc3VsdFBhcnRzID0gW107XG4gICAgY29uc3QgZXNjYXBlZEJsb2NrcyA9IFtdO1xuICAgIGxldCBicmFja2V0Q291bnQgPSAwO1xuICAgIGxldCBjdXJyZW50QmxvY2tQYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IHBhcnRJbmRleCA9IDA7IHBhcnRJbmRleCA8IGlucHV0UGFydHMubGVuZ3RoOyBwYXJ0SW5kZXgrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gaW5wdXRQYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICBpZiAocGFydCA9PT0gQ0xPU0VfQ1VSTFkpIHtcbiAgICAgICAgICAgIGJyYWNrZXRDb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChicmFja2V0Q291bnQgPiAwKSB7XG4gICAgICAgICAgICBjdXJyZW50QmxvY2tQYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRCbG9ja1BhcnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlc2NhcGVkQmxvY2tzLnB1c2goY3VycmVudEJsb2NrUGFydHMuam9pbignJykpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFBhcnRzLnB1c2goQkxPQ0tfUExBQ0VIT0xERVIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCbG9ja1BhcnRzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRQYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0ID09PSBPUEVOX0NVUkxZKSB7XG4gICAgICAgICAgICBicmFja2V0Q291bnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudEJsb2NrUGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICBlc2NhcGVkQmxvY2tzLnB1c2goY3VycmVudEJsb2NrUGFydHMuam9pbignJykpO1xuICAgICAgICByZXN1bHRQYXJ0cy5wdXNoKEJMT0NLX1BMQUNFSE9MREVSKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyRXNjYXBlZEJsb2NrcyA9IHtcbiAgICAgICAgZXNjYXBlZFN0cmluZzogcmVzdWx0UGFydHMuam9pbignJyksXG4gICAgICAgIGJsb2NrczogZXNjYXBlZEJsb2NrcyxcbiAgICB9O1xuICAgIHJldHVybiBzdHJFc2NhcGVkQmxvY2tzO1xufTtcbmNvbnN0IGluc2VydFBvbHlmaWxsSG9zdEluQ3NzVGV4dCA9IChzZWxlY3RvcikgPT4ge1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgLnJlcGxhY2UoX2NvbG9uSG9zdENvbnRleHRSZSwgX3BvbHlmaWxsSG9zdENvbnRleHQpXG4gICAgICAgIC5yZXBsYWNlKF9jb2xvbkhvc3RSZSwgX3BvbHlmaWxsSG9zdClcbiAgICAgICAgLnJlcGxhY2UoX2NvbG9uU2xvdHRlZFJlLCBfcG9seWZpbGxTbG90dGVkKTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG59O1xuY29uc3QgY29udmVydENvbG9uUnVsZSA9IChjc3NUZXh0LCByZWdFeHAsIHBhcnRSZXBsYWNlcikgPT4ge1xuICAgIC8vIG1bMV0gPSA6aG9zdCgtY29udGV4dCksIG1bMl0gPSBjb250ZW50cyBvZiAoKSwgbVszXSByZXN0IG9mIHJ1bGVcbiAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKHJlZ0V4cCwgKC4uLm0pID0+IHtcbiAgICAgICAgaWYgKG1bMl0pIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbVsyXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgY29uc3QgciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwYXJ0c1tpXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFwKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICByLnB1c2gocGFydFJlcGxhY2VyKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IsIHAsIG1bM10pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByLmpvaW4oJywnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yICsgbVszXTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmNvbnN0IGNvbG9uSG9zdFBhcnRSZXBsYWNlciA9IChob3N0LCBwYXJ0LCBzdWZmaXgpID0+IHtcbiAgICByZXR1cm4gaG9zdCArIHBhcnQucmVwbGFjZShfcG9seWZpbGxIb3N0LCAnJykgKyBzdWZmaXg7XG59O1xuY29uc3QgY29udmVydENvbG9uSG9zdCA9IChjc3NUZXh0KSA9PiB7XG4gICAgcmV0dXJuIGNvbnZlcnRDb2xvblJ1bGUoY3NzVGV4dCwgX2Nzc0NvbG9uSG9zdFJlLCBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIpO1xufTtcbmNvbnN0IGNvbG9uSG9zdENvbnRleHRQYXJ0UmVwbGFjZXIgPSAoaG9zdCwgcGFydCwgc3VmZml4KSA9PiB7XG4gICAgaWYgKHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0KSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIoaG9zdCwgcGFydCwgc3VmZml4KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBob3N0ICsgcGFydCArIHN1ZmZpeCArICcsICcgKyBwYXJ0ICsgJyAnICsgaG9zdCArIHN1ZmZpeDtcbiAgICB9XG59O1xuY29uc3QgY29udmVydENvbG9uU2xvdHRlZCA9IChjc3NUZXh0LCBzbG90U2NvcGVJZCkgPT4ge1xuICAgIGNvbnN0IHNsb3RDbGFzcyA9ICcuJyArIHNsb3RTY29wZUlkICsgJyA+ICc7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gW107XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShfY3NzQ29sb25TbG90dGVkUmUsICguLi5tKSA9PiB7XG4gICAgICAgIGlmIChtWzJdKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb3VuZCA9IG1bMl0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gbVszXTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3R0ZWRTZWxlY3RvciA9IHNsb3RDbGFzcyArIGNvbXBvdW5kICsgc3VmZml4O1xuICAgICAgICAgICAgbGV0IHByZWZpeFNlbGVjdG9yID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbVs0XSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhciA9IG1bNV1baV07XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd9JyB8fCBjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZWZpeFNlbGVjdG9yID0gY2hhciArIHByZWZpeFNlbGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3JnU2VsZWN0b3IgPSBwcmVmaXhTZWxlY3RvciArIHNsb3R0ZWRTZWxlY3RvcjtcbiAgICAgICAgICAgIGNvbnN0IGFkZGVkU2VsZWN0b3IgPSBgJHtwcmVmaXhTZWxlY3Rvci50cmltUmlnaHQoKX0ke3Nsb3R0ZWRTZWxlY3Rvci50cmltKCl9YDtcbiAgICAgICAgICAgIGlmIChvcmdTZWxlY3Rvci50cmltKCkgIT09IGFkZGVkU2VsZWN0b3IudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdG9yID0gYCR7YWRkZWRTZWxlY3Rvcn0sICR7b3JnU2VsZWN0b3J9YDtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG9yZ1NlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2xvdHRlZFNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IgKyBtWzNdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3JzLFxuICAgICAgICBjc3NUZXh0LFxuICAgIH07XG59O1xuY29uc3QgY29udmVydENvbG9uSG9zdENvbnRleHQgPSAoY3NzVGV4dCkgPT4ge1xuICAgIHJldHVybiBjb252ZXJ0Q29sb25SdWxlKGNzc1RleHQsIF9jc3NDb2xvbkhvc3RDb250ZXh0UmUsIGNvbG9uSG9zdENvbnRleHRQYXJ0UmVwbGFjZXIpO1xufTtcbmNvbnN0IGNvbnZlcnRTaGFkb3dET01TZWxlY3RvcnMgPSAoY3NzVGV4dCkgPT4ge1xuICAgIHJldHVybiBfc2hhZG93RE9NU2VsZWN0b3JzUmUucmVkdWNlKChyZXN1bHQsIHBhdHRlcm4pID0+IHJlc3VsdC5yZXBsYWNlKHBhdHRlcm4sICcgJyksIGNzc1RleHQpO1xufTtcbmNvbnN0IG1ha2VTY29wZU1hdGNoZXIgPSAoc2NvcGVTZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IGxyZSA9IC9cXFsvZztcbiAgICBjb25zdCBycmUgPSAvXFxdL2c7XG4gICAgc2NvcGVTZWxlY3RvciA9IHNjb3BlU2VsZWN0b3IucmVwbGFjZShscmUsICdcXFxcWycpLnJlcGxhY2UocnJlLCAnXFxcXF0nKTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgc2NvcGVTZWxlY3RvciArICcpJyArIF9zZWxlY3RvclJlU3VmZml4LCAnbScpO1xufTtcbmNvbnN0IHNlbGVjdG9yTmVlZHNTY29waW5nID0gKHNlbGVjdG9yLCBzY29wZVNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgcmUgPSBtYWtlU2NvcGVNYXRjaGVyKHNjb3BlU2VsZWN0b3IpO1xuICAgIHJldHVybiAhcmUudGVzdChzZWxlY3Rvcik7XG59O1xuY29uc3QgaW5qZWN0U2NvcGluZ1NlbGVjdG9yID0gKHNlbGVjdG9yLCBzY29waW5nU2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gc2VsZWN0b3IucmVwbGFjZShfc2VsZWN0b3JQYXJ0c1JlLCAoXywgYmVmb3JlID0gJycsIF9jb2xvbkdyb3VwLCBjb2xvbiA9ICcnLCBhZnRlciA9ICcnKSA9PiB7XG4gICAgICAgIHJldHVybiBiZWZvcmUgKyBzY29waW5nU2VsZWN0b3IgKyBjb2xvbiArIGFmdGVyO1xuICAgIH0pO1xufTtcbmNvbnN0IGFwcGx5U2ltcGxlU2VsZWN0b3JTY29wZSA9IChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKSA9PiB7XG4gICAgLy8gSW4gQW5kcm9pZCBicm93c2VyLCB0aGUgbGFzdEluZGV4IGlzIG5vdCByZXNldCB3aGVuIHRoZSByZWdleCBpcyB1c2VkIGluIFN0cmluZy5yZXBsYWNlKClcbiAgICBfcG9seWZpbGxIb3N0UmUubGFzdEluZGV4ID0gMDtcbiAgICBpZiAoX3BvbHlmaWxsSG9zdFJlLnRlc3Qoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VCeSA9IGAuJHtob3N0U2VsZWN0b3J9YDtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yXG4gICAgICAgICAgICAucmVwbGFjZShfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yUmUsIChfLCBzZWxlY3RvcikgPT4gaW5qZWN0U2NvcGluZ1NlbGVjdG9yKHNlbGVjdG9yLCByZXBsYWNlQnkpKVxuICAgICAgICAgICAgLnJlcGxhY2UoX3BvbHlmaWxsSG9zdFJlLCByZXBsYWNlQnkgKyAnICcpO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcGVTZWxlY3RvciArICcgJyArIHNlbGVjdG9yO1xufTtcbmNvbnN0IGFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZSA9IChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvciwgaG9zdFNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgaXNSZSA9IC9cXFtpcz0oW15cXF1dKilcXF0vZztcbiAgICBzY29wZVNlbGVjdG9yID0gc2NvcGVTZWxlY3Rvci5yZXBsYWNlKGlzUmUsIChfLCAuLi5wYXJ0cykgPT4gcGFydHNbMF0pO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICcuJyArIHNjb3BlU2VsZWN0b3I7XG4gICAgY29uc3QgX3Njb3BlU2VsZWN0b3JQYXJ0ID0gKHApID0+IHtcbiAgICAgICAgbGV0IHNjb3BlZFAgPSBwLnRyaW0oKTtcbiAgICAgICAgaWYgKCFzY29wZWRQKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xKSB7XG4gICAgICAgICAgICBzY29wZWRQID0gYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlKHAsIHNjb3BlU2VsZWN0b3IsIGhvc3RTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgOmhvc3Qgc2luY2UgaXQgc2hvdWxkIGJlIHVubmVjZXNzYXJ5XG4gICAgICAgICAgICBjb25zdCB0ID0gcC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3RSZSwgJycpO1xuICAgICAgICAgICAgaWYgKHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNjb3BlZFAgPSBpbmplY3RTY29waW5nU2VsZWN0b3IodCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcGVkUDtcbiAgICB9O1xuICAgIGNvbnN0IHNhZmVDb250ZW50ID0gc2FmZVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBzZWxlY3RvciA9IHNhZmVDb250ZW50LmNvbnRlbnQ7XG4gICAgbGV0IHNjb3BlZFNlbGVjdG9yID0gJyc7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xuICAgIGxldCByZXM7XG4gICAgY29uc3Qgc2VwID0gLyggfD58XFwrfH4oPyE9KSlcXHMqL2c7XG4gICAgLy8gSWYgYSBzZWxlY3RvciBhcHBlYXJzIGJlZm9yZSA6aG9zdCBpdCBzaG91bGQgbm90IGJlIHNoaW1tZWQgYXMgaXRcbiAgICAvLyBtYXRjaGVzIG9uIGFuY2VzdG9yIGVsZW1lbnRzIGFuZCBub3Qgb24gZWxlbWVudHMgaW4gdGhlIGhvc3QncyBzaGFkb3dcbiAgICAvLyBgOmhvc3QtY29udGV4dChkaXYpYCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAgIC8vIGAtc2hhZG93Y3NzaG9zdC1uby1jb21iaW5hdG9yZGl2LCBkaXYgLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcmBcbiAgICAvLyB0aGUgYGRpdmAgaXMgbm90IHBhcnQgb2YgdGhlIGNvbXBvbmVudCBpbiB0aGUgMm5kIHNlbGVjdG9ycyBhbmQgc2hvdWxkIG5vdCBiZSBzY29wZWQuXG4gICAgLy8gSGlzdG9yaWNhbGx5IGBjb21wb25lbnQtdGFnOmhvc3RgIHdhcyBtYXRjaGluZyB0aGUgY29tcG9uZW50IHNvIHdlIGFsc28gd2FudCB0byBwcmVzZXJ2ZVxuICAgIC8vIHRoaXMgYmVoYXZpb3IgdG8gYXZvaWQgYnJlYWtpbmcgbGVnYWN5IGFwcHMgKGl0IHNob3VsZCBub3QgbWF0Y2gpLlxuICAgIC8vIFRoZSBiZWhhdmlvciBzaG91bGQgYmU6XG4gICAgLy8gLSBgdGFnOmhvc3RgIC0+IGB0YWdbaF1gICh0aGlzIGlzIHRvIGF2b2lkIGJyZWFraW5nIGxlZ2FjeSBhcHBzLCBzaG91bGQgbm90IG1hdGNoIGFueXRoaW5nKVxuICAgIC8vIC0gYHRhZyA6aG9zdGAgLT4gYHRhZyBbaF1gIChgdGFnYCBpcyBub3Qgc2NvcGVkIGJlY2F1c2UgaXQncyBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgIC8vICAgYDpob3N0LWNvbnRleHQodGFnKWApXG4gICAgY29uc3QgaGFzSG9zdCA9IHNlbGVjdG9yLmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMTtcbiAgICAvLyBPbmx5IHNjb3BlIHBhcnRzIGFmdGVyIHRoZSBmaXJzdCBgLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcmAgd2hlbiBpdCBpcyBwcmVzZW50XG4gICAgbGV0IHNob3VsZFNjb3BlID0gIWhhc0hvc3Q7XG4gICAgd2hpbGUgKChyZXMgPSBzZXAuZXhlYyhzZWxlY3RvcikpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHJlc1sxXTtcbiAgICAgICAgY29uc3QgcGFydCA9IHNlbGVjdG9yLnNsaWNlKHN0YXJ0SW5kZXgsIHJlcy5pbmRleCkudHJpbSgpO1xuICAgICAgICBzaG91bGRTY29wZSA9IHNob3VsZFNjb3BlIHx8IHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xO1xuICAgICAgICBjb25zdCBzY29wZWRQYXJ0ID0gc2hvdWxkU2NvcGUgPyBfc2NvcGVTZWxlY3RvclBhcnQocGFydCkgOiBwYXJ0O1xuICAgICAgICBzY29wZWRTZWxlY3RvciArPSBgJHtzY29wZWRQYXJ0fSAke3NlcGFyYXRvcn0gYDtcbiAgICAgICAgc3RhcnRJbmRleCA9IHNlcC5sYXN0SW5kZXg7XG4gICAgfVxuICAgIGNvbnN0IHBhcnQgPSBzZWxlY3Rvci5zdWJzdHJpbmcoc3RhcnRJbmRleCk7XG4gICAgc2hvdWxkU2NvcGUgPSBzaG91bGRTY29wZSB8fCBwYXJ0LmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMTtcbiAgICBzY29wZWRTZWxlY3RvciArPSBzaG91bGRTY29wZSA/IF9zY29wZVNlbGVjdG9yUGFydChwYXJ0KSA6IHBhcnQ7XG4gICAgLy8gcmVwbGFjZSB0aGUgcGxhY2Vob2xkZXJzIHdpdGggdGhlaXIgb3JpZ2luYWwgdmFsdWVzXG4gICAgcmV0dXJuIHJlc3RvcmVTYWZlU2VsZWN0b3Ioc2FmZUNvbnRlbnQucGxhY2Vob2xkZXJzLCBzY29wZWRTZWxlY3Rvcik7XG59O1xuY29uc3Qgc2NvcGVTZWxlY3RvciA9IChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIHNlbGVjdG9yXG4gICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgIC5tYXAoKHNoYWxsb3dQYXJ0KSA9PiB7XG4gICAgICAgIGlmIChzbG90U2VsZWN0b3IgJiYgc2hhbGxvd1BhcnQuaW5kZXhPZignLicgKyBzbG90U2VsZWN0b3IpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFsbG93UGFydC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdG9yTmVlZHNTY29waW5nKHNoYWxsb3dQYXJ0LCBzY29wZVNlbGVjdG9yVGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHBseVN0cmljdFNlbGVjdG9yU2NvcGUoc2hhbGxvd1BhcnQsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IpLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFsbG93UGFydC50cmltKCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuam9pbignLCAnKTtcbn07XG5jb25zdCBzY29wZVNlbGVjdG9ycyA9IChjc3NUZXh0LCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSA9PiB7XG4gICAgcmV0dXJuIHByb2Nlc3NSdWxlcyhjc3NUZXh0LCAocnVsZSkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yO1xuICAgICAgICBsZXQgY29udGVudCA9IHJ1bGUuY29udGVudDtcbiAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JbMF0gIT09ICdAJykge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yKHJ1bGUuc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAbWVkaWEnKSB8fFxuICAgICAgICAgICAgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAc3VwcG9ydHMnKSB8fFxuICAgICAgICAgICAgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAcGFnZScpIHx8XG4gICAgICAgICAgICBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0Bkb2N1bWVudCcpKSB7XG4gICAgICAgICAgICBjb250ZW50ID0gc2NvcGVTZWxlY3RvcnMocnVsZS5jb250ZW50LCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yLCBzbG90U2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNzc1J1bGUgPSB7XG4gICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRyaW0oKSxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjc3NSdWxlO1xuICAgIH0pO1xufTtcbmNvbnN0IHNjb3BlQ3NzVGV4dCA9IChjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSA9PiB7XG4gICAgY3NzVGV4dCA9IGluc2VydFBvbHlmaWxsSG9zdEluQ3NzVGV4dChjc3NUZXh0KTtcbiAgICBjc3NUZXh0ID0gY29udmVydENvbG9uSG9zdChjc3NUZXh0KTtcbiAgICBjc3NUZXh0ID0gY29udmVydENvbG9uSG9zdENvbnRleHQoY3NzVGV4dCk7XG4gICAgY29uc3Qgc2xvdHRlZCA9IGNvbnZlcnRDb2xvblNsb3R0ZWQoY3NzVGV4dCwgc2xvdFNjb3BlSWQpO1xuICAgIGNzc1RleHQgPSBzbG90dGVkLmNzc1RleHQ7XG4gICAgY3NzVGV4dCA9IGNvbnZlcnRTaGFkb3dET01TZWxlY3RvcnMoY3NzVGV4dCk7XG4gICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgY3NzVGV4dCA9IHNjb3BlU2VsZWN0b3JzKGNzc1RleHQsIHNjb3BlSWQsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCk7XG4gICAgfVxuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoLy1zaGFkb3djc3Nob3N0LW5vLWNvbWJpbmF0b3IvZywgYC4ke2hvc3RTY29wZUlkfWApO1xuICAgIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoLz5cXHMqXFwqXFxzKyhbXnssIF0rKS9nbSwgJyAkMSAnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjc3NUZXh0OiBjc3NUZXh0LnRyaW0oKSxcbiAgICAgICAgc2xvdHRlZFNlbGVjdG9yczogc2xvdHRlZC5zZWxlY3RvcnMsXG4gICAgfTtcbn07XG5jb25zdCBzY29wZUNzcyA9IChjc3NUZXh0LCBzY29wZUlkLCBjb21tZW50T3JpZ2luYWxTZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IGhvc3RTY29wZUlkID0gc2NvcGVJZCArICctaCc7XG4gICAgY29uc3Qgc2xvdFNjb3BlSWQgPSBzY29wZUlkICsgJy1zJztcbiAgICBjb25zdCBjb21tZW50c1dpdGhIYXNoID0gZXh0cmFjdENvbW1lbnRzV2l0aEhhc2goY3NzVGV4dCk7XG4gICAgY3NzVGV4dCA9IHN0cmlwQ29tbWVudHMoY3NzVGV4dCk7XG4gICAgY29uc3Qgb3JnU2VsZWN0b3JzID0gW107XG4gICAgaWYgKGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NDb21tZW50ZWRTZWxlY3RvciA9IChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGAvKiFAX19fJHtvcmdTZWxlY3RvcnMubGVuZ3RofV9fXyovYDtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBgLyohQCR7cnVsZS5zZWxlY3Rvcn0qL2A7XG4gICAgICAgICAgICBvcmdTZWxlY3RvcnMucHVzaCh7IHBsYWNlaG9sZGVyLCBjb21tZW50IH0pO1xuICAgICAgICAgICAgcnVsZS5zZWxlY3RvciA9IHBsYWNlaG9sZGVyICsgcnVsZS5zZWxlY3RvcjtcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9O1xuICAgICAgICBjc3NUZXh0ID0gcHJvY2Vzc1J1bGVzKGNzc1RleHQsIChydWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAocnVsZS5zZWxlY3RvclswXSAhPT0gJ0AnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NDb21tZW50ZWRTZWxlY3RvcihydWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aCgnQG1lZGlhJykgfHxcbiAgICAgICAgICAgICAgICBydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoJ0BzdXBwb3J0cycpIHx8XG4gICAgICAgICAgICAgICAgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAcGFnZScpIHx8XG4gICAgICAgICAgICAgICAgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKCdAZG9jdW1lbnQnKSkge1xuICAgICAgICAgICAgICAgIHJ1bGUuY29udGVudCA9IHByb2Nlc3NSdWxlcyhydWxlLmNvbnRlbnQsIHByb2Nlc3NDb21tZW50ZWRTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHNjb3BlZCA9IHNjb3BlQ3NzVGV4dChjc3NUZXh0LCBzY29wZUlkLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQpO1xuICAgIGNzc1RleHQgPSBbc2NvcGVkLmNzc1RleHQsIC4uLmNvbW1lbnRzV2l0aEhhc2hdLmpvaW4oJ1xcbicpO1xuICAgIGlmIChjb21tZW50T3JpZ2luYWxTZWxlY3Rvcikge1xuICAgICAgICBvcmdTZWxlY3RvcnMuZm9yRWFjaCgoeyBwbGFjZWhvbGRlciwgY29tbWVudCB9KSA9PiB7XG4gICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHBsYWNlaG9sZGVyLCBjb21tZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNjb3BlZC5zbG90dGVkU2VsZWN0b3JzLmZvckVhY2goKHNsb3R0ZWRTZWxlY3RvcikgPT4ge1xuICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHNsb3R0ZWRTZWxlY3Rvci5vcmdTZWxlY3Rvciwgc2xvdHRlZFNlbGVjdG9yLnVwZGF0ZWRTZWxlY3Rvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzc1RleHQ7XG59O1xuXG5leHBvcnQgeyBzY29wZUNzcyB9O1xuIl0sIm5hbWVzIjpbIl9wb2x5ZmlsbEhvc3QiLCJfcG9seWZpbGxTbG90dGVkIiwiX3BvbHlmaWxsSG9zdENvbnRleHQiLCJfcGFyZW5TdWZmaXgiLCJfY3NzQ29sb25Ib3N0UmUiLCJSZWdFeHAiLCJfY3NzQ29sb25Ib3N0Q29udGV4dFJlIiwiX2Nzc0NvbG9uU2xvdHRlZFJlIiwiX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciIsIl9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3JSZSIsIl9zaGFkb3dET01TZWxlY3RvcnNSZSIsIl9wb2x5ZmlsbEhvc3RSZSIsIl9jb2xvbkhvc3RSZSIsIl9jb2xvblNsb3R0ZWRSZSIsIl9jb2xvbkhvc3RDb250ZXh0UmUiLCJfY29tbWVudFJlIiwiX2NvbW1lbnRXaXRoSGFzaFJlIiwiX3J1bGVSZSIsIl9jdXJseVJlIiwiX3NlbGVjdG9yUGFydHNSZSIsIkJMT0NLX1BMQUNFSE9MREVSIiwicHJvY2Vzc1J1bGVzIiwiaW5wdXQiLCJydWxlQ2FsbGJhY2siLCJpbnB1dFdpdGhFc2NhcGVkQmxvY2tzIiwiZXNjYXBlQmxvY2tzIiwibmV4dEJsb2NrSW5kZXgiLCJlc2NhcGVkU3RyaW5nIiwicmVwbGFjZSIsInNlbGVjdG9yIiwiY29udGVudCIsInN1ZmZpeCIsImNvbnRlbnRQcmVmaXgiLCJzdGFydHNXaXRoIiwiYmxvY2tzIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiY3NzUnVsZSIsInJ1bGUiLCJpbnB1dFBhcnRzIiwic3BsaXQiLCJyZXN1bHRQYXJ0cyIsImVzY2FwZWRCbG9ja3MiLCJicmFja2V0Q291bnQiLCJjdXJyZW50QmxvY2tQYXJ0cyIsInBhcnRJbmRleCIsInBhcnQiLCJwdXNoIiwiam9pbiIsImNvbnZlcnRDb2xvblJ1bGUiLCJjc3NUZXh0IiwicmVnRXhwIiwicGFydFJlcGxhY2VyIiwibSIsInBhcnRzIiwiciIsImkiLCJwIiwidHJpbSIsImNvbG9uSG9zdFBhcnRSZXBsYWNlciIsImhvc3QiLCJjb2xvbkhvc3RDb250ZXh0UGFydFJlcGxhY2VyIiwiaW5kZXhPZiIsInNlbGVjdG9yTmVlZHNTY29waW5nIiwic2NvcGVTZWxlY3RvciIsInJlIiwibWFrZVNjb3BlTWF0Y2hlciIsInRlc3QiLCJpbmplY3RTY29waW5nU2VsZWN0b3IiLCJzY29waW5nU2VsZWN0b3IiLCJfIiwiYmVmb3JlIiwiY29sb24iLCJhZnRlciIsImFwcGx5U3RyaWN0U2VsZWN0b3JTY29wZSIsImhvc3RTZWxlY3RvciIsInJlcyIsImNsYXNzTmFtZSIsIl9zY29wZVNlbGVjdG9yUGFydCIsInNjb3BlZFAiLCJsYXN0SW5kZXgiLCJyZXBsYWNlQnkiLCJhcHBseVNpbXBsZVNlbGVjdG9yU2NvcGUiLCJ0Iiwic2FmZUNvbnRlbnQiLCJwbGFjZWhvbGRlcnMiLCJpbmRleCIsImtlZXAiLCJwc2V1ZG8iLCJleHAiLCJzYWZlU2VsZWN0b3IiLCJzY29wZWRTZWxlY3RvciIsInN0YXJ0SW5kZXgiLCJzZXAiLCJzaG91bGRTY29wZSIsImV4ZWMiLCJzZXBhcmF0b3IiLCJzbGljZSIsInNjb3BlZFBhcnQiLCJzY29wZVNlbGVjdG9ycyIsInNjb3BlU2VsZWN0b3JUZXh0Iiwic2xvdFNlbGVjdG9yIiwiY29tbWVudE9yaWdpbmFsU2VsZWN0b3IiLCJtYXAiLCJzaGFsbG93UGFydCIsInNjb3BlQ3NzVGV4dCIsInNjb3BlSWQiLCJob3N0U2NvcGVJZCIsInNsb3RTY29wZUlkIiwic2xvdHRlZCIsInNsb3RDbGFzcyIsInNlbGVjdG9ycyIsImNvbXBvdW5kIiwic2xvdHRlZFNlbGVjdG9yIiwicHJlZml4U2VsZWN0b3IiLCJjaGFyIiwib3JnU2VsZWN0b3IiLCJhZGRlZFNlbGVjdG9yIiwidHJpbVJpZ2h0IiwidXBkYXRlZFNlbGVjdG9yIiwiY29udmVydENvbG9uU2xvdHRlZCIsImNvbnZlcnRDb2xvbkhvc3RDb250ZXh0IiwiY29udmVydENvbG9uSG9zdCIsInJlZHVjZSIsInJlc3VsdCIsInBhdHRlcm4iLCJjb252ZXJ0U2hhZG93RE9NU2VsZWN0b3JzIiwic2xvdHRlZFNlbGVjdG9ycyIsInNjb3BlQ3NzIiwiY29tbWVudHNXaXRoSGFzaCIsIm1hdGNoIiwic3RyaXBDb21tZW50cyIsIm9yZ1NlbGVjdG9ycyIsInByb2Nlc3NDb21tZW50ZWRTZWxlY3RvciIsInBsYWNlaG9sZGVyIiwiY29tbWVudCIsInNjb3BlZCIsImZvckVhY2giXSwic291cmNlUm9vdCI6IiJ9