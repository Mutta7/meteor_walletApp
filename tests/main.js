import assert from "assert";

describe("simple-ether-wallet", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "simple-ether-wallet");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});

Template.nodeStatusComponent.helpers({
  // 接続先ノードの取得
  currentProvider: function(){
    return web3.currentProvider.host;
  },

  // 接続先ノードのマイニング状態の取得
  isMining: function(){
    return web3.eth.mining;
  },

  // 接続先ノードのマイニングのハッシュレートを取得
  currentHashrate: function(){
    return web3.eth.hashrate;
  },

  // 接続先ノードのピア数の取得
  currentPeerCount: function(){
    return web3.net.peerCount;
  }
});