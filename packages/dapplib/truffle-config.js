require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift repeat pitch mistake install lobster equal gesture'; 
let testAccounts = [
"0x5eb89f5d84043b927386b746edddcf5e52ae3b3f8c3c1e9cfa5b9783e3073253",
"0x8915b47320e47c6c13d2e821eff6da9a7d530a9ee584b96fde14658b4622f1be",
"0x8566d555c7851ff065d3bf8bf9b78d3a2a90fff09aa888036ca0c61e7cdc66a0",
"0x53e153619b5c6d0d9ac153bb6363ec38aaaef5730f8bbe70c4ca6bfcf8af086a",
"0x4886b58ee8449275a681a155ab70dfcd3f70d28d68523cd0207e22095eca41fb",
"0x1dada41700793e37a7b68242d3b6f932664da11d4958bb4d948f992a5098a22a",
"0xa26ad1b80a5c99f86d808d65cf6e2d633d34db0501c7e42cd2f9adf175b9cf81",
"0x321a73493281650bceb983b26c9dc991743fbacab6701945458f5a60ae415d37",
"0xf88538bf5b4e774966edbeebac4d9e5fc789e70bd8ae40c428cfa2603e480359",
"0x1cceba99f54a2508a2c542ba928323571b6ae98fdc0bbb1b675fe6b3ea221e07"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

