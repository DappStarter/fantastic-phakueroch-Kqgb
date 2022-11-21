require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million puppy half area tail skirt'; 
let testAccounts = [
"0x3f564449bd33d5cd44e9005a19da8122a82d48a0ea9497bf33b3ed587671d45c",
"0x87807b9824672f461aa41a7bf68dbed99d2f9a55f8d86b280d8d886ffaa2b489",
"0xda2575fef70fd2dc0f6aef4aed19bc56cc421c25d86d707ba399d7cda3856a64",
"0x460e6dedb8acea12ee50738852a76524a87fc037c2017882d06e6ef720874618",
"0xac880258cb80c866ef0fe1c4e8615a617a3f2b962bc5a13556a91066ed880148",
"0x8f7833cea94ba9858eb2a118aa4c0b22cd1ffdbcb00f017c2ecbc2ec43fa0b79",
"0xf053e07fa97b3741bfb6afaa1ffef846c0a34e3f258c13360258a2793c891b61",
"0xa899a7a247f249c116f7df21c909f7751c7e72058030c60e1120ce8187f1d566",
"0x800c8ca5726e24879d1fa8af7cbbad31459c3c37c50f357775101acbb8e7143b",
"0x7c8f24b130e2fc9b7afea958b711404273721cb4c413b7667a6ec8c6c291a900"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

