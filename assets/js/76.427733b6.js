(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{367:function(t,s,a){"use strict";a.r(s);var r=a(10),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"max-maker-vol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-maker-vol"}},[t._v("#")]),t._v(" max_maker_vol")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("max_maker_vol")]),t._v(" method returns the maximum volume of a coin which can be used to create a maker order (taking into account estimated fees). If the coin is not activated, a "),s("code",[t._v("NoSuchCoin")]),t._v(" error will be returned.")]),t._v(" "),s("h4",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("The ticker of the coin you want to query.")])])])]),t._v(" "),s("h4",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("The ticker of the coin you queried.")])]),t._v(" "),s("tr",[s("td",[t._v("volume")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("An object cointaining the tradable maker volume in decimal, fraction and rational formats.")])]),t._v(" "),s("tr",[s("td",[t._v("volume.decimal")]),t._v(" "),s("td",[t._v("numeric string")]),t._v(" "),s("td",[t._v("The tradable maker volume in "),s("a",{attrs:{href:"https://www.mathsisfun.com/definitions/decimal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("decimal format"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("volume.rational")]),t._v(" "),s("td",[t._v("rational object")]),t._v(" "),s("td",[t._v("The tradable maker volume in "),s("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-legacy/rational_number_note.html"}},[t._v("rational format")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[t._v("volume.fraction")]),t._v(" "),s("td",[t._v("fraction object")]),t._v(" "),s("td",[t._v("The tradable maker volume in "),s("a",{attrs:{href:"https://www.mathsisfun.com/definitions/fraction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fraction format"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("balance")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("An object cointaining the locked amount in decimal, fraction and rational formats.")])]),t._v(" "),s("tr",[s("td",[t._v("balance.decimal")]),t._v(" "),s("td",[t._v("numeric string")]),t._v(" "),s("td",[t._v("The coin balance in "),s("a",{attrs:{href:"https://www.mathsisfun.com/definitions/decimal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("decimal format"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("balance.rational")]),t._v(" "),s("td",[t._v("rational object")]),t._v(" "),s("td",[t._v("The coin balance in "),s("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-legacy/rational_number_note.html"}},[t._v("rational format")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[t._v("balance.fraction")]),t._v(" "),s("td",[t._v("fraction object")]),t._v(" "),s("td",[t._v("The coin balance in "),s("a",{attrs:{href:"https://www.mathsisfun.com/definitions/fraction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fraction format"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("locked_by_swaps")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("An object cointaining the volume of a coin's balance which is locked by swaps in progress in decimal, fraction and rational formats.")])]),t._v(" "),s("tr",[s("td",[t._v("locked_by_swaps.decimal")]),t._v(" "),s("td",[t._v("numeric string")]),t._v(" "),s("td",[t._v("The locked by swaps amount in "),s("a",{attrs:{href:"https://www.mathsisfun.com/definitions/decimal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("decimal format"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("locked_by_swaps.rational")]),t._v(" "),s("td",[t._v("rational object")]),t._v(" "),s("td",[t._v("The locked by swaps amount in "),s("RouterLink",{attrs:{to:"/basic-docs/atomicdex-api-legacy/rational_number_note.html"}},[t._v("rational format")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[t._v("locked_by_swaps.fraction")]),t._v(" "),s("td",[t._v("fraction object")]),t._v(" "),s("td",[t._v("The locked by swaps amount in "),s("a",{attrs:{href:"https://www.mathsisfun.com/definitions/fraction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fraction format"),s("OutboundLink")],1),t._v(".")])])])]),t._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),s("h4",{attrs:{id:"command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[t._v("#")]),t._v(" Command")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_RPCPASSWORD"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("mmrpc"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2.0"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("max_maker_vol"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("params"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n    "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("coin"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("RICK"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),s("div",{staticStyle:{"margin-top":"0.5rem"}},[s("collapse-text",{attrs:{hidden:"",title:"Response"}},[s("h4",{attrs:{id:"response-success"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-success"}},[t._v("#")]),t._v(" Response (success)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MORTY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"volume"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"decimal"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4.489763268712998712998712998712998712998712998712998712998712998712998712998712998712998712998712999"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rational"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("962255003")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("390588672")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fraction"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numer"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"348854605979"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"77700000000"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"balance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"decimal"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5.49110027"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rational"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("549110027")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fraction"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numer"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"549110027"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100000000"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"locked_by_swaps"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"decimal"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.001317001287001287001287001287001287001287001287001287001287001287001287001287001287001287001287001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rational"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("77802331")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("77700000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fraction"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"numer"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"77802331"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"denom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"77700000"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-error"}},[t._v("#")]),t._v(" Response (error)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No such coin TIME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_maker_vol_rpc.lp_coins"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_trace"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_maker_vol_rpc:140] lp_coins:2894]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NoSuchCoin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TIME"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-balance-too-low"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-balance-too-low"}},[t._v("#")]),t._v(" Response (balance too low)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not enough QTUM for swap: available 0, required at least 0.000728, locked by swaps None"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_maker_vol_rpc.maker_swap.utxo_common"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_trace"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max_maker_vol_rpc:148] maker_swap:2203] utxo_common:3327] utxo_common:892]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NotSufficientBalance"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QTUM"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"available"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"required"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.000728"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-transport-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-transport-error"}},[t._v("#")]),t._v(" Response (Transport error)")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mmrpc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Transport error: JsonRpcError { client_info: 'coin: tBTC', request: JsonRpcRequest { jsonrpc: '2.0', id: '31', method: 'blockchain.estimatefee', params: [Number(1), String('ECONOMICAL')] }, error: Transport('rpc_clients:1237] rpc_clients:1239] ['rpc_clients:2047] common:1385] future timed out']') }\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"taker_swap.utxo_common"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_trace"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"taker_swap:1599] utxo_common:1990] utxo_common:166]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Transport"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"JsonRpcError { client_info: 'coin: tBTC', request: JsonRpcRequest { jsonrpc: '2.0', id: '31', method: 'blockchain.estimatefee', params: [Number(1), String('ECONOMICAL')] }, error: Transport('rpc_clients:1237] rpc_clients:1239] ['rpc_clients:2047] common:1385] future timed out']') }\"")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);