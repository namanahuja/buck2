"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1846],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){return function(t){var n=s(t.components);return a.createElement(e,i({},t,{components:n}))}},s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,u=m["".concat(d,".").concat(c)]||m[c]||x[c]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,d[1]=l;for(var p=2;p<i;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"dict"},d="dict type",l={unversionedId:"api/starlark/dict",id:"api/starlark/dict",title:"dict type",description:"dict.clear",source:"@site/../docs/api/starlark/dict.generated.md",sourceDirName:"api/starlark",slug:"/api/starlark/dict",permalink:"/docs/api/starlark/dict",draft:!1,tags:[],version:"current",frontMatter:{id:"dict"},sidebar:"manualSidebar",previous:{title:"globals",permalink:"/docs/api/starlark/globals"},next:{title:"list type",permalink:"/docs/api/starlark/list"}},o={},p=[{value:"dict.clear",id:"dictclear",level:2},{value:"dict.get",id:"dictget",level:2},{value:"dict.items",id:"dictitems",level:2},{value:"dict.keys",id:"dictkeys",level:2},{value:"dict.pop",id:"dictpop",level:2},{value:"dict.popitem",id:"dictpopitem",level:2},{value:"dict.setdefault",id:"dictsetdefault",level:2},{value:"dict.update",id:"dictupdate",level:2},{value:"dict.values",id:"dictvalues",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"dict-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"dict")," type"),(0,r.mdx)("h2",{id:"dictclear"},"dict.clear"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.clear() -> None\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7clear"},"dict.clear"),": clear a dictionary"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.clear()")," removes all the entries of dictionary D and returns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),".\nIt fails if the dictionary is frozen or if there are active iterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {"one": 1, "two": 2}\nx.clear()\nx == {}\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"dictget"},"dict.get"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.get(key, default = _, /)\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7get"},"dict.get"),": return an element from the dictionary."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.get(key[, default])")," returns the dictionary value corresponding to\nthe given key. If the dictionary contains no such value, ",(0,r.mdx)("inlineCode",{parentName:"p"},"get"),"\nreturns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),", or the value of the optional ",(0,r.mdx)("inlineCode",{parentName:"p"},"default")," parameter if\npresent."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"get")," fails if ",(0,r.mdx)("inlineCode",{parentName:"p"},"key")," is unhashable."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {"one": 1, "two": 2}\nx.get("one") == 1\nx.get("three") == None\nx.get("three", 0) == 0\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"dictitems"},"dict.items"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.items() -> list[(typing.Any, typing.Any)]\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7items"},"dict.items"),": get list of (key, value) pairs."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.items()")," returns a new list of key/value pairs, one per element in\ndictionary D, in the same order as they would be returned by a ",(0,r.mdx)("inlineCode",{parentName:"p"},"for"),"\nloop."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {"one": 1, "two": 2}\nx.items() == [("one", 1), ("two", 2)]\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"dictkeys"},"dict.keys"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.keys() -> list[typing.Any]\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7keys"},"dict.keys"),": get the list of keys of the dictionary."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.keys()")," returns a new list containing the keys of dictionary D, in\nthe same order as they would be returned by a ",(0,r.mdx)("inlineCode",{parentName:"p"},"for")," loop."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {"one": 1, "two": 2}\nx.keys() == ["one", "two"]\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"dictpop"},"dict.pop"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.pop(key, default = _, /)\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7pop"},"dict.pop"),": return an element and remove it from a dictionary."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.pop(key[, default])")," returns the value corresponding to the specified\nkey, and removes it from the dictionary.  If the dictionary contains no\nsuch value, and the optional ",(0,r.mdx)("inlineCode",{parentName:"p"},"default")," parameter is present, ",(0,r.mdx)("inlineCode",{parentName:"p"},"pop"),"\nreturns that value; otherwise, it fails."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"pop")," fails if ",(0,r.mdx)("inlineCode",{parentName:"p"},"key")," is unhashable, or the dictionary is frozen or has\nactive iterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {"one": 1, "two": 2}\nx.pop("one") == 1\nx == {"two": 2}\nx.pop("three", 0) == 0\nx.pop("three", None) == None\n')),(0,r.mdx)("p",null,"Failure:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"{'one': 1}.pop('four')   # error: not found\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"dictpopitem"},"dict.popitem"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.popitem() -> (typing.Any, typing.Any)\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7popitem"},"dict.popitem"),": returns and removes the first key/value pair of a dictionary."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.popitem()")," returns the first key/value pair, removing it from the\ndictionary."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"popitem")," fails if the dictionary is empty, frozen, or has active\niterators."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {"one": 1, "two": 2}\nx.popitem() == ("one", 1)\nx.popitem() == ("two", 2)\nx == {}\n')),(0,r.mdx)("p",null,"Failure:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"{}.popitem()   # error: empty dict\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"dictsetdefault"},"dict.setdefault"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.setdefault(key, default = _, /)\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7setdefault"},"dict.setdefault"),": get a value from a dictionary, setting it to a new value if not present."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.setdefault(key[, default])")," returns the dictionary value\ncorresponding to the given key. If the dictionary contains no such\nvalue, ",(0,r.mdx)("inlineCode",{parentName:"p"},"setdefault"),", like ",(0,r.mdx)("inlineCode",{parentName:"p"},"get"),", returns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None")," or the value of the\noptional ",(0,r.mdx)("inlineCode",{parentName:"p"},"default")," parameter if present; ",(0,r.mdx)("inlineCode",{parentName:"p"},"setdefault")," additionally\ninserts the new key/value entry into the dictionary."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"setdefault")," fails if the key is unhashable or if the dictionary is\nfrozen."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {"one": 1, "two": 2}\nx.setdefault("one") == 1\nx.setdefault("three", 0) == 0\nx == {"one": 1, "two": 2, "three": 0}\nx.setdefault("four") == None\nx == {"one": 1, "two": 2, "three": 0, "four": None}\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"dictupdate"},"dict.update"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.update(pairs = _, /, **kwargs) -> None\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7update"},"dict.update"),": update values in the dictionary."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.update([pairs][, name=value[, ...])")," makes a sequence of key/value\ninsertions into dictionary D, then returns ",(0,r.mdx)("inlineCode",{parentName:"p"},"None.")),(0,r.mdx)("p",null,"If the positional argument ",(0,r.mdx)("inlineCode",{parentName:"p"},"pairs")," is present, it must be ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),",\nanother ",(0,r.mdx)("inlineCode",{parentName:"p"},"dict"),", or some other iterable.\nIf it is another ",(0,r.mdx)("inlineCode",{parentName:"p"},"dict"),", then its key/value pairs are inserted into D.\nIf it is an iterable, it must provide a sequence of pairs (or other\niterables of length 2), each of which is treated as a key/value pair\nto be inserted into D."),(0,r.mdx)("p",null,"For each ",(0,r.mdx)("inlineCode",{parentName:"p"},"name=value")," argument present, the name is converted to a\nstring and used as the key for an insertion into D, with its\ncorresponding value being ",(0,r.mdx)("inlineCode",{parentName:"p"},"value"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"update")," fails if the dictionary is frozen."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {}\nx.update([("a", 1), ("b", 2)], c=3)\nx.update({"d": 4})\nx.update(e=5)\nx == {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"dictvalues"},"dict.values"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def dict.values() -> list[typing.Any]\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/bazelbuild/starlark/blob/master/spec.md#dict%C2%B7values"},"dict.values"),": get the list of values of the dictionary."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"D.values()")," returns a new list containing the dictionary's values, in\nthe same order as they would be returned by a ",(0,r.mdx)("inlineCode",{parentName:"p"},"for")," loop over the\ndictionary."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'x = {"one": 1, "two": 2}\nx.values() == [1, 2]\n')))}s.isMDXComponent=!0}}]);