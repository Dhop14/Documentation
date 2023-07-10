(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{447:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"update-maker-order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-maker-order"}},[t._v("#")]),t._v(" update_maker_order")]),t._v(" "),e("p",[e("strong",[t._v("update_maker_order uuid (new_price volume_delta max base_confs base_nota rel_confs rel_nota min_volume)")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("update_maker_order")]),t._v(" method updates an active order on the orderbook created before by "),e("code",[t._v("setprice")]),t._v(", and it relies on this node acting as a "),e("code",[t._v("maker")]),t._v(", also called a "),e("code",[t._v("Bob")]),t._v(" node.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("To prevent a user from making trades in which the transaction fees may end up costing a significant portion of the value of the trade, we have set a lower limit to the value of a trade. See the description of the "),e("code",[t._v("volume_delta")]),t._v(" and "),e("code",[t._v("min_volume")]),t._v(" arguments for more info.")])]),t._v(" "),e("h4",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Structure")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("uuid")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("the uuid of the order the user desires to update")])]),t._v(" "),e("tr",[e("td",[t._v("new_price")]),t._v(" "),e("td",[t._v("numeric string or rational (optional)")]),t._v(" "),e("td",[t._v("the price in "),e("code",[t._v("rel")]),t._v(" the user is willing to receive per one unit of the "),e("code",[t._v("base")]),t._v(" coin")])]),t._v(" "),e("tr",[e("td",[t._v("volume_delta")]),t._v(" "),e("td",[t._v("numeric string or rational (optional)")]),t._v(" "),e("td",[t._v("volume added to or subtracted from the "),e("code",[t._v("max_base_vol")]),t._v(" of the order to be updated, resulting in the new volume which is the maximum amount of "),e("code",[t._v("base")]),t._v(" coin available for the order, ignored if max is "),e("code",[t._v("true")]),t._v("; the following values must be greater than or equal to the "),e("code",[t._v("min_trading_vol")]),t._v(" of the corresponding coin: "),e("ul",[e("li",[t._v("the new volume which is the "),e("code",[t._v("max_base_vol")]),t._v(" of the order to be updated plus "),e("code",[t._v("volume_delta")])]),e("li",[t._v("the product of the new volume and the argument "),e("code",[t._v("new_price")])])])])]),t._v(" "),e("tr",[e("td",[t._v("min_volume")]),t._v(" "),e("td",[t._v("numeric string or rational (optional)")]),t._v(" "),e("td",[t._v("the minimum amount of "),e("code",[t._v("base")]),t._v(" coin available for the order; it must be less or equal than the new volume; the following values must be greater than or equal to the "),e("code",[t._v("min_trading_vol")]),t._v(" of the corresponding coin: "),e("ul",[e("li",[t._v("the argument "),e("code",[t._v("min_volume")])]),e("li",[t._v("the product of the arguments "),e("code",[t._v("min_volume")]),t._v(" and "),e("code",[t._v("new_price")])])])])]),t._v(" "),e("tr",[e("td",[t._v("max")]),t._v(" "),e("td",[t._v("bool (optional)")]),t._v(" "),e("td",[t._v("Komodo DeFi Framework will use the entire coin balance for the order, taking "),e("code",[t._v("0.001")]),t._v(" coins into reserve to account for fees")])]),t._v(" "),e("tr",[e("td",[t._v("base_confs")]),t._v(" "),e("td",[t._v("number (optional)")]),t._v(" "),e("td",[t._v("number of required blockchain confirmations for base coin atomic swap transaction; default to base coin configuration if not set")])]),t._v(" "),e("tr",[e("td",[t._v("base_nota")]),t._v(" "),e("td",[t._v("bool (optional)")]),t._v(" "),e("td",[t._v("whether dPoW notarization is required for base coin atomic swap transaction; default to base coin configuration if not set")])]),t._v(" "),e("tr",[e("td",[t._v("rel_confs")]),t._v(" "),e("td",[t._v("number (optional)")]),t._v(" "),e("td",[t._v("number of required blockchain confirmations for rel coin atomic swap transaction; default to rel coin configuration if not set")])]),t._v(" "),e("tr",[e("td",[t._v("rel_nota")]),t._v(" "),e("td",[t._v("bool (optional)")]),t._v(" "),e("td",[t._v("whether dPoW notarization is required for rel coin atomic swap transaction; default to rel coin configuration if not set")])])])]),t._v(" "),e("h4",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Structure")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("result")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("the resulting order object")])]),t._v(" "),e("tr",[e("td",[t._v("result.base")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("the base coin of the order")])]),t._v(" "),e("tr",[e("td",[t._v("result.rel")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("the rel coin of the order")])]),t._v(" "),e("tr",[e("td",[t._v("result.price")]),t._v(" "),e("td",[t._v("string (numeric)")]),t._v(" "),e("td",[t._v("the expected amount of "),e("code",[t._v("rel")]),t._v(" coin to be received per 1 unit of "),e("code",[t._v("base")]),t._v(" coin; decimal representation")])]),t._v(" "),e("tr",[e("td",[t._v("result.price_rat")]),t._v(" "),e("td",[t._v("rational")]),t._v(" "),e("td",[t._v("the expected amount of "),e("code",[t._v("rel")]),t._v(" coin to be received per 1 unit of "),e("code",[t._v("base")]),t._v(" coin; rational representation")])]),t._v(" "),e("tr",[e("td",[t._v("result.max_base_vol")]),t._v(" "),e("td",[t._v("string (numeric)")]),t._v(" "),e("td",[t._v("the maximum volume of base coin available to trade; decimal representation")])]),t._v(" "),e("tr",[e("td",[t._v("result.max_base_vol_rat")]),t._v(" "),e("td",[t._v("rational")]),t._v(" "),e("td",[t._v("the maximum volume of base coin available to trade; rational representation")])]),t._v(" "),e("tr",[e("td",[t._v("result.min_base_vol")]),t._v(" "),e("td",[t._v("string (numeric)")]),t._v(" "),e("td",[t._v("Komodo DeFi Framework won't match with other orders that attempt to trade less than "),e("code",[t._v("min_base_vol")]),t._v("; decimal representation")])]),t._v(" "),e("tr",[e("td",[t._v("result.min_base_vol_rat")]),t._v(" "),e("td",[t._v("rational")]),t._v(" "),e("td",[t._v("Komodo DeFi Framework won't match with other orders that attempt to trade less than "),e("code",[t._v("min_base_vol")]),t._v("; rational representation")])]),t._v(" "),e("tr",[e("td",[t._v("result.created_at")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("unix timestamp in milliseconds, indicating the order creation time")])]),t._v(" "),e("tr",[e("td",[t._v("result.updated_at")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("unix timestamp in milliseconds, indicating the order update time")])]),t._v(" "),e("tr",[e("td",[t._v("result.matches")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("contains the map of ongoing matches with other orders, empty as the order was recently created")])]),t._v(" "),e("tr",[e("td",[t._v("result.started_swaps")]),t._v(" "),e("td",[t._v("array of strings")]),t._v(" "),e("td",[t._v("uuids of swaps that were initiated by the order")])]),t._v(" "),e("tr",[e("td",[t._v("result.uuid")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("uuid of the updated order")])]),t._v(" "),e("tr",[e("td",[t._v("result.conf_settings.base_confs")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("number of required blockchain confirmations for base coin atomic swap transaction")])]),t._v(" "),e("tr",[e("td",[t._v("result.conf_settings.base_nota")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("whether dPoW notarization is required for base coin atomic swap transaction")])]),t._v(" "),e("tr",[e("td",[t._v("result.conf_settings.rel_confs")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("number of required blockchain confirmations for rel coin atomic swap transaction")])]),t._v(" "),e("tr",[e("td",[t._v("result.conf_settings.rel_nota")]),t._v(" "),e("td",[t._v("bool")]),t._v(" "),e("td",[t._v("whether dPoW notarization is required for rel coin atomic swap transaction")])])])]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("h4",{attrs:{id:"command-with-volume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-with-volume"}},[t._v("#")]),t._v(" Command (with volume)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("update_maker_order"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("uuid"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("6a242691-6c05-474a-85c1-5b3f42278f41"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("new_price"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("0.9"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("volume_delta"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),e("h4",{attrs:{id:"command-max-true"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-max-true"}},[t._v("#")]),t._v(" Command (max = true)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("update_maker_order"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("uuid"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("6a242691-6c05-474a-85c1-5b3f42278f41"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("new_price"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("0.9"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("max"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(':true}"')]),t._v("\n")])])]),e("h4",{attrs:{id:"command-rational-representation-in-num-rational-crate-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-rational-representation-in-num-rational-crate-format"}},[t._v("#")]),t._v(" Command (rational representation in num-rational crate format)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("update_maker_order"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("uuid"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("6a242691-6c05-474a-85c1-5b3f42278f41"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("volume_delta"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":[[1,[1]],[1,[1]]],\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("new_price"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(':[[1,[1]],[1,[1]]]\n}"')]),t._v("\n")])])]),e("h4",{attrs:{id:"command-rational-representation-as-fraction-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-rational-representation-as-fraction-object"}},[t._v("#")]),t._v(" Command (rational representation as fraction object)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("update_maker_order"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("uuid"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("6a242691-6c05-474a-85c1-5b3f42278f41"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("volume_delta"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("numer"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("3"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("denom"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\n  },\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("new_price"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("numer"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("denom"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),e("h4",{attrs:{id:"command-with-min-volume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-with-min-volume"}},[t._v("#")]),t._v(" Command (with min_volume)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("update_maker_order"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("uuid"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("6a242691-6c05-474a-85c1-5b3f42278f41"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("volume_delta"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("numer"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("3"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("denom"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\n  },\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("new_price"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("numer"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("denom"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\n  },\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("min_volume"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n}"')]),t._v("\n")])])]),e("h4",{attrs:{id:"command-with-confirmations-and-notarization-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-with-confirmations-and-notarization-settings"}},[t._v("#")]),t._v(" Command (with confirmations and notarization settings)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--url")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userpass"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("update_maker_order"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("uuid"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("6a242691-6c05-474a-85c1-5b3f42278f41"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("volume_delta"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("numer"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("3"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("denom"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\n  },\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("new_price"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":{\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("numer"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("denom"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\n  },\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base_confs"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 2,\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("base_nota"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true,\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel_confs"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 5,\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rel_nota"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': false\n}"')]),t._v("\n")])])]),e("div",{staticStyle:{"margin-top":"0.5rem"}},[e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("h4",{attrs:{id:"response-success"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-success"}},[t._v("#")]),t._v(" Response (success)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BASE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rel"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REL"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"max_base_vol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"max_base_vol_rat"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"min_base_vol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"min_base_vol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1559052299258")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1619736650000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"matches"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price_rat"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"started_swaps"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uuid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6a242691-6c05-474a-85c1-5b3f42278f41"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"conf_settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base_confs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base_nota"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rel_confs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rel_nota"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"response-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-error"}},[t._v("#")]),t._v(" Response (error)")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"There is no order with UUID  6a242691-6c05-474a-85c1-5b3f42278f41"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);