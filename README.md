# Erc20-Token-Mint-Transfer
**Deploy erc20 contract, mint and transfer erc20 tokens.**



**Setup**

1. npm install truffle

2. Setup .env file acordingly to your settings

3. Compile and Deploy Contract

   git clone https://github.com/patelvishal1401/Erc20-Token-Mint-Transfer.git

   cd Erc20-Token-Mint-Transfer

   npm install

   truffle compile

   truffle migrate --network rinkeby (change network accordingly like matic, matictest)

4. Trasfer token ( set receivers account in scripts/transfer-token.js )

   truffle exec scripts/transfer-token.js --network rinkeby (change network accordingly like matic, matictest)

