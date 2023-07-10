(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{567:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"access-komodod-s-json-rpc-interface-using-python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-komodod-s-json-rpc-interface-using-python"}},[t._v("#")]),t._v(" Access "),s("code",[t._v("komodod")]),t._v("'s JSON-RPC interface using Python")]),t._v(" "),s("p",[t._v("We use the package "),s("a",{attrs:{href:"https://github.com/barjomet/slick-bitcoinrpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("slick-bitcoinrpc"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("Installing the module "),s("code",[t._v("slick-bitcoinrpc")]),t._v(" and its dependencies.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" ppa:deadsnakes/ppa\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python3.6 python3.6-dev python3-pip libgnutls28-dev libssl-dev\npython3.6 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" setuptools wheel slick-bitcoinrpc\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("ul",[s("li",[t._v("Once the "),s("code",[t._v("Proxy")]),t._v(" method is called, the object it returns can be used to access "),s("code",[t._v("komodod")]),t._v("'s methods any number of times.")]),t._v(" "),s("li",[t._v("In general, there is no need to convert arguments to strings before they are passed in. But for the "),s("RouterLink",{attrs:{to:"/basic-docs/komodo-api/cclib.html"}},[t._v("cclib")]),t._v(" methods, all the arguments need to be passed in as strings.")],1),t._v(" "),s("li",[t._v("Find the rpcuser, rpcpassword, rpcport from the coin's "),s("code",[t._v(".conf")]),t._v(" file")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python3.6")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" slickrpc "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Proxy\n\nrpcuser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user784657926501740916"')]),t._v("\nrpcpassword "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pass893458925237490234890t1941289369215692521238971040172t012039760782t5712d"')]),t._v("\nrpcport "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8881"')]),t._v("\n\nkomodo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://{}:{}@127.0.0.1:{}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rpcuser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rpcpassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rpcport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print the best block")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("komodo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getblock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("komodo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getbestblockhash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Using a CC Lib method")]),t._v("\npubkeys "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0225f1cbbda1a0c406bb8f6dc7a589d88b2f9e28cd4fdb3f59139f8aff1f5d270a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'02d3431950c2f0f9654217b6ce3d44468d3a9ca7255741767fdeee7c5ec6b47567'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("komodo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cclib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"combine"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pubkeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);