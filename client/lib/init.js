// Web3インスタンスの生成
web3 = new Web3();

// RPCプロバイダを設定
if(!web3.currentProvider)
    webs3.setProvider(new web3.providers.HttpsProvider("http://localhost:8545"));

// EthAccounts 初期化
EthAccounts.init();

// EthBlocks 初期化
EthBlocks.init();