import{j as S}from"./jsx-runtime-vNq4Oc-g.js";import{r as M}from"./index-4g5l5LRQ.js";function se(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(t=se(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function pe(){for(var e,r,t=0,o="",i=arguments.length;t<i;t++)(e=arguments[t])&&(r=se(e))&&(o&&(o+=" "),o+=r);return o}const q="-";function fe(e){const r=ge(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function i(s){const l=s.split(q);return l[0]===""&&l.length!==1&&l.shift(),ie(l,r)||be(s)}function n(s,l){const f=t[s]||[];return l&&o[s]?[...f,...o[s]]:f}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function ie(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?ie(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const n=e.join(q);return(s=r.validators.find(({validator:l})=>l(n)))==null?void 0:s.classGroupId}const re=/^\[(.+)\]$/;function be(e){if(re.test(e)){const r=re.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ge(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return he(Object.entries(e.classGroups),t).forEach(([n,s])=>{B(s,o,n,r)}),o}function B(e,r,t,o){e.forEach(i=>{if(typeof i=="string"){const n=i===""?r:te(r,i);n.classGroupId=t;return}if(typeof i=="function"){if(me(i)){B(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([n,s])=>{B(s,te(r,n),t,o)})})}function te(e,r){let t=e;return r.split(q).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function me(e){return e.isThemeGetter}function he(e,r){return r?e.map(([t,o])=>{const i=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[r+s,l])):n);return[t,i]}):e}function ye(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function i(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return i(n,s),s},set(n,s){t.has(n)?t.set(n,s):i(n,s)}}}const ae="!";function xe(e){const r=e.separator,t=r.length===1,o=r[0],i=r.length;return function(s){const l=[];let f=0,c=0,d;for(let g=0;g<s.length;g++){let m=s[g];if(f===0){if(m===o&&(t||s.slice(g,g+i)===r)){l.push(s.slice(c,g)),c=g+i;continue}if(m==="/"){d=g;continue}}m==="["?f++:m==="]"&&f--}const b=l.length===0?s:s.substring(c),h=b.startsWith(ae),y=h?b.substring(1):b,w=d&&d>c?d-c:void 0;return{modifiers:l,hasImportantModifier:h,baseClassName:y,maybePostfixModifierPosition:w}}}function ve(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function we(e){return{cache:ye(e.cacheSize),splitModifiers:xe(e),...fe(e)}}const Ce=/\s+/;function ke(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,n=new Set;return e.trim().split(Ce).map(s=>{const{modifiers:l,hasImportantModifier:f,baseClassName:c,maybePostfixModifierPosition:d}=t(s);let b=o(d?c.substring(0,d):c),h=!!d;if(!b){if(!d)return{isTailwindClass:!1,originalClassName:s};if(b=o(c),!b)return{isTailwindClass:!1,originalClassName:s};h=!1}const y=ve(l).join(":");return{isTailwindClass:!0,modifierId:f?y+ae:y,classGroupId:b,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:l,classGroupId:f,hasPostfixModifier:c}=s,d=l+f;return n.has(d)?!1:(n.add(d),i(f,c).forEach(b=>n.add(l+b)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function ze(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=le(r))&&(o&&(o+=" "),o+=t);return o}function le(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=le(e[o]))&&(t&&(t+=" "),t+=r);return t}function Ae(e,...r){let t,o,i,n=s;function s(f){const c=r.reduce((d,b)=>b(d),e());return t=we(c),o=t.cache.get,i=t.cache.set,n=l,l(f)}function l(f){const c=o(f);if(c)return c;const d=ke(f,t);return i(f,d),d}return function(){return n(ze.apply(null,arguments))}}function u(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const ce=/^\[(?:([a-z-]+):)?(.+)\]$/i,Se=/^\d+\/\d+$/,Me=new Set(["px","full","screen"]),je=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Re=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ne=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ge=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function v(e){return A(e)||Me.has(e)||Se.test(e)}function k(e){return j(e,"length",Oe)}function A(e){return!!e&&!Number.isNaN(Number(e))}function _(e){return j(e,"number",A)}function I(e){return!!e&&Number.isInteger(Number(e))}function Ie(e){return e.endsWith("%")&&A(e.slice(0,-1))}function a(e){return ce.test(e)}function z(e){return je.test(e)}const Pe=new Set(["length","size","percentage"]);function Te(e){return j(e,Pe,de)}function Ee(e){return j(e,"position",de)}const Ve=new Set(["image","url"]);function _e(e){return j(e,Ve,$e)}function Le(e){return j(e,"",We)}function P(){return!0}function j(e,r,t){const o=ce.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Oe(e){return Re.test(e)}function de(){return!1}function We(e){return Ne.test(e)}function $e(e){return Ge.test(e)}function Ue(){const e=u("colors"),r=u("spacing"),t=u("blur"),o=u("brightness"),i=u("borderColor"),n=u("borderRadius"),s=u("borderSpacing"),l=u("borderWidth"),f=u("contrast"),c=u("grayscale"),d=u("hueRotate"),b=u("invert"),h=u("gap"),y=u("gradientColorStops"),w=u("gradientColorStopPositions"),g=u("inset"),m=u("margin"),C=u("opacity"),x=u("padding"),H=u("saturate"),L=u("scale"),J=u("sepia"),K=u("skew"),X=u("space"),Z=u("translate"),O=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],$=()=>["auto",a,r],p=()=>[a,r],Q=()=>["",v,k],T=()=>["auto",A,a],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],D=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],U=()=>["start","end","center","between","around","evenly","stretch"],N=()=>["","0",a],ee=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[A,_],V=()=>[A,a];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[v,k],blur:["none","",z,a],brightness:G(),borderColor:[e],borderRadius:["none","","full",z,a],borderSpacing:p(),borderWidth:Q(),contrast:G(),grayscale:N(),hueRotate:V(),invert:N(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[Ie,k],inset:$(),margin:$(),opacity:G(),padding:p(),saturate:G(),scale:G(),sepia:N(),skew:V(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":ee()}],"break-before":[{"break-before":ee()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),a]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I,a]}],basis:[{basis:$()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",I,a]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",I,a]},a]}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[I,a]},a]}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[X]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[X]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,r]}],"min-w":[{"min-w":[a,r,"min","max","fit"]}],"max-w":[{"max-w":[a,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[a,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",A,_]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",v,k]}],"underline-offset":[{"underline-offset":["auto",v,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Ee]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Te]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},_e]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:E()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[v,a]}],"outline-w":[{outline:[v,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[v,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,Le]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":D()}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",z,a]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[b]}],saturate:[{saturate:[H]}],sepia:[{sepia:[J]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[H]}],"backdrop-sepia":[{"backdrop-sepia":[J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[I,a]}],"translate-x":[{"translate-x":[Z]}],"translate-y":[{"translate-y":[Z]}],"skew-x":[{"skew-x":[K]}],"skew-y":[{"skew-y":[K]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[v,k,_]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Be=Ae(Ue);function R(...e){return Be(pe(e))}function ue(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=ue(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function Fe(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=ue(e))&&(o&&(o+=" "),o+=r);return o}const oe=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,ne=Fe,Ye=(e,r)=>t=>{var o;if((r==null?void 0:r.variants)==null)return ne(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:n}=r,s=Object.keys(i).map(c=>{const d=t==null?void 0:t[c],b=n==null?void 0:n[c];if(d===null)return null;const h=oe(d)||oe(b);return i[c][h]}),l=t&&Object.entries(t).reduce((c,d)=>{let[b,h]=d;return h===void 0||(c[b]=h),c},{}),f=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((c,d)=>{let{class:b,className:h,...y}=d;return Object.entries(y).every(w=>{let[g,m]=w;return Array.isArray(m)?m.includes({...n,...l}[g]):{...n,...l}[g]===m})?[...c,b,h]:c},[]);return ne(e,s,f,t==null?void 0:t.class,t==null?void 0:t.className)},F=M.forwardRef(({className:e,...r},t)=>S.jsx("div",{ref:t,className:R("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));F.displayName="Card";const qe=M.forwardRef(({className:e,...r},t)=>S.jsx("div",{ref:t,className:R("flex flex-col space-y-1.5 p-6",e),...r}));qe.displayName="CardHeader";const He=M.forwardRef(({className:e,...r},t)=>S.jsx("h3",{ref:t,className:R("text-2xl font-semibold leading-none tracking-tight",e),...r}));He.displayName="CardTitle";const Je=M.forwardRef(({className:e,...r},t)=>S.jsx("p",{ref:t,className:R("text-sm text-muted-foreground",e),...r}));Je.displayName="CardDescription";const Ke=M.forwardRef(({className:e,...r},t)=>S.jsx("div",{ref:t,className:R("p-6 pt-0",e),...r}));Ke.displayName="CardContent";const Xe=M.forwardRef(({className:e,...r},t)=>S.jsx("div",{ref:t,className:R("flex items-center p-6 pt-0",e),...r}));Xe.displayName="CardFooter";try{F.displayName="Card",F.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}export{F as C,Ke as a,Ye as b,R as c,qe as d,He as e,Je as f};
