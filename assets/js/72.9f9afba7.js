(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{363:function(t,s,e){"use strict";e.r(s);var a=e(10),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"get-current-mtp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-current-mtp"}},[t._v("#")]),t._v(" get_current_mtp")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("get_current_mtp")]),t._v(" method returns the Median Time Past (MTP) from electrum servers for UTXO coins. This information is useful for debugging, specifically in cases where an electrum server has been misconfigured.")]),t._v(" "),s("h4",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("A compatible (UTXO) coin's ticker")])]),t._v(" "),s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("integer")]),t._v(" "),s("td",[t._v("Optional. Identifies a request to allow matching it with a response. Defaults to "),s("code",[t._v("null")])])])])]),t._v(" "),s("h4",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mtp")]),t._v(" "),s("td",[t._v("integer")]),t._v(" "),s("td",[t._v("Unix timestamp")])]),t._v(" "),s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("integer")]),t._v(" "),s("td",[t._v("Identifies a response to allow matching it with a request. Defaults to "),s("code",[t._v("null")]),t._v(" if "),s("code",[t._v("id")]),t._v(" not provided in request")])])])]),t._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),s("h4",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n    '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("get_current_mtp"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("USERPASS"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("mmrpc"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2.0"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 42,\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n        "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RICK"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n    }\n}\n"')]),t._v("\n")])])]),s("div",{staticStyle:{"margin-top":"0.5rem"}},[s("collapse-text",{attrs:{hidden:"",title:"Response"}},[s("h4",{attrs:{id:"response-success"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-success"}},[t._v("#")]),t._v(" Response (success)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mtp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1658746383")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);s.default=r.exports}}]);