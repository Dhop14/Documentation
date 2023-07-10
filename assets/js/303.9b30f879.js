(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{597:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"anatomy-of-an-etomic-swap-atomic-swap-with-eth-erc20-tokens-using-mmv1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anatomy-of-an-etomic-swap-atomic-swap-with-eth-erc20-tokens-using-mmv1"}},[e._v("#")]),e._v(" Anatomy of an ETOMIC swap (Atomic swap with ETH/ERC20 tokens using mmV1)")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("ETOMIC is an independent Blockchain started by the Komodo Team to facilitate Atomic-swaps between Bitcoin/Bitcoin compatibles (UTXO based coins) and Ethereum/ERC20 tokens.")]),e._v(" "),t("p",[e._v("At a higher level, Ethereum is balance based and Bitcoin comapatible coins are UTXO based. With the introduction of ETOMIC, we can simulate UTXO like behaviour for the ETH/ERC20 token so that the existing UTXO based atomic-swap protocol that has been coded into BarterDEX can be used right away to swap between Bitcoin comapatible coins and ETH/ERC20 tokens trustlessly in an Atomic process that has been tested to work for several hundred different pairs of Bitcoin comapatible coins.")]),e._v(" "),t("p",[e._v("Also, Ethereum lacks blockchain enforced multisig and HTLC, so smart contracts need to handle their functions. That is we need to depend on the Ethereum smart contract for the actual atomicity where the swap either completes or is unwound as if neither side started it. (Unless the protocol ensures that both sides of the swap or neither side completes, it isnt atomic.)")]),e._v(" "),t("p",[e._v("To minimize the chance of bugs in the ETH smart contract causing mishaps, the design for the BarterDEX support of ETH is to reduce the requirement on the ETH side to that of a gateway, with a few extra features, like automatic refund on expiration of time.")]),e._v(" "),t("p",[e._v("The bulk of the atomic swap is done via the Bitcoin protocol using the ETOMIC chain. When a swap is negotiated, the exact price of the ETH/ERC20 is agreed to and this spawns a special lock/unlock of ETOMIC for ETH/ERC20.")]),e._v(" "),t("p",[e._v("At the high level, the concept is to swap the ETOMIC first and then have an extra step of redeeming the ETOMIC for the ETH/ERC20 to complete the swap.")]),e._v(" "),t("p",[e._v("The ETOMIC used in the swap will be colored so only the exact specific txid involved will be able to be used to redeem. This solves the problem of other unrelated ETOMIC from stealing the locked ETH/ERC20 token.")]),e._v(" "),t("p",[e._v("All ETOMIC transactions need to be signed to avoid MITM (Man In The Middle) attacks. The nodes doing an etomic-swap will need to monitor the corresponding blockchains and post signed transactions after confirmation of key events.")]),e._v(" "),t("p",[e._v("In the current implementation, ETOMIC is distributed through a faucet. Marketmaker app (Backend of BarterDEX and HyperDEX) makes a request to the faucet when the ETOMIC coin is enabled. The Faucet is programmed to send 100 ETOMIC to every new address. The Mechanics are handled by etomic-swap smart contracts "),t("a",{attrs:{href:"https://github.com/artemii235/etomic-swap",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/artemii235/etomic-swap"),t("OutboundLink")],1),e._v(" and marketmaker app.")]),e._v(" "),t("p",[e._v("When a swap between BTC and ETH is performed it's a BTC and ETOMIC swap in reality. The ETH transaction is sent using ETOMIC txid and the redeem script parameters.")]),e._v(" "),t("h2",{attrs:{id:"the-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-details"}},[e._v("#")]),e._v(" The Details")]),e._v(" "),t("p",[e._v("The normal Atomic-swap protocol:")]),e._v(" "),t("ol",[t("li",[e._v("trade negotiation")]),e._v(" "),t("li",[e._v("dexfee by alice")]),e._v(" "),t("li",[e._v("bobdeposit")]),e._v(" "),t("li",[e._v("alicepayment")]),e._v(" "),t("li",[e._v("bobpayment")]),e._v(" "),t("li",[e._v("alicespend")]),e._v(" "),t("li",[e._v("bobspend")]),e._v(" "),t("li",[e._v("bobrefund")])]),e._v(" "),t("p",[e._v("In the case where a swap completes, bob gets bobspend (of alicepayment) and alice gets alicespend or alice gets the bobdeposit and bob gets the alicepayment.")]),e._v(" "),t("p",[e._v("In all cases where the swap doesn't complete, alice is unable to spend bobpayment and bobdeposit and bob doesnt get alicepayment.")]),e._v(" "),t("p",[e._v("This leads to the ETH side granting a refund in the case for bob when alice doesnt submit either bobpayment or bobdeposit being spent OR for alice when bob doesnt submit a spent alicepayment.")]),e._v(" "),t("p",[e._v("The ETOMIC blockchain works as a proxy (using a colored coins concept) where ETOMIC transactions are sent when ETH/ERC20 swap is happening. ETH/ERC20 are getting locked by etomic-swap smart contracts using same conditions as ETOMIC transactions.")]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),t("p",[e._v("Bob deposit ETOMIC transaction: "),t("a",{attrs:{href:"http://etomic.explorer.dexstats.info/tx/285bc713a4d6a8215c930eaa85a2b46482bc292ddf3d55eba39631bf3d840492",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://etomic.explorer.dexstats.info/tx/285bc713a4d6a8215c930eaa85a2b46482bc292ddf3d55eba39631bf3d840492"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Corresponding ETH deposit: "),t("a",{attrs:{href:"https://etherscan.io/tx/0x09e245b0e1e0ebf90f5b73bb26b1f48908a87cde548fc4b61f543578a7adc59b",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://etherscan.io/tx/0x09e245b0e1e0ebf90f5b73bb26b1f48908a87cde548fc4b61f543578a7adc59b"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("As can be seen in the transaction (tx) details, it uses the ETOMIC txid and other parameters (from ETOMIC tx redeem script) to lock the ETH:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Function: bobMakesEthDeposit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("bytes32 _txId, address _alice, bytes20 _secretHash, uint64 _lockTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nMethodID: 0xdd23795f\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":  285bc713a4d6a8215c930eaa85a2b46482bc292ddf3d55eba39631bf3d840492\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":  000000000000000000000000078a1db84a2995c22cb72a390c3d279448dbfbf2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":  49a0f4e29e49cc78b60dcf062026e8d8def636f3000000000000000000000000\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":  000000000000000000000000000000000000000000000000000000005ab4cdf8\n")])])]),t("p",[e._v("ETOMIC bob deposit spending transaction : "),t("a",{attrs:{href:"http://etomic.explorer.dexstats.info/tx/f4f23a0c746da4bb0de870d4f1b8f365fd7c436c950dcef74558632fe5fe55c0",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://etomic.explorer.dexstats.info/tx/f4f23a0c746da4bb0de870d4f1b8f365fd7c436c950dcef74558632fe5fe55c0"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("It's redeem script is:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("OP_IF "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1521798648")]),e._v("\nOP_NOP2\nOP_DROP\nOP_SIZE "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v("\nOP_EQUALVERIFY\nOP_HASH160 4773d9f9c4d46830f3fcc68e4a7b3707058fd298\nOP_EQUALVERIFY 020394b1d0c4f83710b2044fbdf062ffb132243ac89f33f71a47711a53defc4278\nOP_CHECKSIG\nOP_ELSE\nOP_SIZE "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v("\nOP_EQUALVERIFY\nOP_HASH160 de738c0c3d433b68cafbe0e5c4dd4ba9e2a90d07\nOP_EQUALVERIFY 039d321ddbb2d9e2a3a629cbaedd958f154f389da62487eec818dd98cfd7fc6416\nOP_CHECKSIG\nOP_ENDIF\n")])])]),t("ul",[t("li",[e._v("The pushed data is:")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("30440220122a4969c6b49179dcd0058887d0f7ab8a3524330e5074dd5294c465c5b79a50022026d2408e6769517b789377deb9eb086d26052d3af42adb1010ce8f3c65a4bdcc01 cc21cff653931156deb8961d64e368710c63879174c576081c735604c4a34fe4\n")])])]),t("ul",[t("li",[e._v("Bob refund on ETH side: "),t("a",{attrs:{href:"https://etherscan.io/tx/0x64c434db95905cbcc14d9ce6172915218fbd5c49840c948a416dc44828ca6499",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://etherscan.io/tx/0x64c434db95905cbcc14d9ce6172915218fbd5c49840c948a416dc44828ca6499"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Function: bobClaimsDeposit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("bytes32 _txId, uint256 _amount, bytes32 _secret, address _alice, address _tokenAddress"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nMethodID: 0x1f7a72f7\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": 285bc713a4d6a8215c930eaa85a2b46482bc292ddf3d55eba39631bf3d840492\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": 0000000000000000000000000000000000000000000000000028ac9ad102f800\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": e44fa3c40456731c0876c5749187630c7168e3641d96b8de56119353f6cf21cc\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": 000000000000000000000000078a1db84a2995c22cb72a390c3d279448dbfbf2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(": 0000000000000000000000000000000000000000000000000000000000000000\n")])])]),t("ul",[t("li",[t("p",[e._v("When Bob refunded the deposit he revealed his bob privn: "),t("code",[e._v("cc21cff653931156deb8961d64e368710c63879174c576081c735604c4a34fe4")])])]),e._v(" "),t("li",[t("p",[e._v("On ETH side he revealed the same key but in reverted bytes order: "),t("code",[e._v("e44fa3c40456731c0876c5749187630c7168e3641d96b8de56119353f6cf21cc")])])]),e._v(" "),t("li",[t("p",[e._v("On ETOMIC side, bob privn ends with "),t("code",[e._v("4f")]),e._v(" and "),t("code",[e._v("e4")]),e._v(" bytes while it starts with "),t("code",[e._v("e4")]),e._v(" and "),t("code",[e._v("4f")]),e._v(" on ETH side etc.")])]),e._v(" "),t("li",[t("p",[e._v("It also uses the same timelock hex "),t("code",[e._v("5ab4cdf8")]),e._v(", which is equal to decimal "),t("code",[e._v("1521798648")]),e._v(".")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);