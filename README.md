# testbnb

## Install

```sh
npm install
```
## Test localhost

```sh
npx hardhat node
npx hardhat test --network localhost
```
## Deploy testnet

```sh
 npx hardhat run --network testnet scripts/deploy.js
```

### Add mnemonic
```text
create .env file and add MNEMONIC=ecc like .env_test
```

test contract address deployed : 0x0ee5A69D8F632d1215D21789A6f40b90FD15450a
