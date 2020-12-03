export default [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "minter", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "sender", "type": "address" }, { "name": "recipient", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "BASE_MARKET_FEE_PERCENTAGE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "amount", "type": "uint256" }, { "name": "feePercentage", "type": "uint256" }], "name": "calculateFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "cap", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isInitialized", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "account", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newMinter", "type": "address" }], "name": "proposeMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "orderTxId", "type": "bytes32" }, { "name": "consumer", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "serviceId", "type": "uint256" }], "name": "finishOrder", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "minterAddress", "type": "address" }, { "name": "cap", "type": "uint256" }, { "name": "blob", "type": "string" }, { "name": "feeCollector", "type": "address" }], "name": "initialize", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "recipient", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "isMinter", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "consumer", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "serviceId", "type": "uint256" }, { "name": "mrktFeeCollector", "type": "address" }], "name": "startOrder", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "BASE_COMMUNITY_FEE_PERCENTAGE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "approveMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "BASE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "blob", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "minterAddress", "type": "address" }, { "name": "cap", "type": "uint256" }, { "name": "blob", "type": "string" }, { "name": "feeCollector", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "consumer", "type": "address" }, { "indexed": true, "name": "payer", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "serviceId", "type": "uint256" }, { "indexed": false, "name": "timestamp", "type": "uint256" }, { "indexed": true, "name": "mrktFeeCollector", "type": "address" }, { "indexed": false, "name": "marketFee", "type": "uint256" }], "name": "OrderStarted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "orderTxId", "type": "bytes32" }, { "indexed": true, "name": "consumer", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "serviceId", "type": "uint256" }, { "indexed": true, "name": "provider", "type": "address" }, { "indexed": false, "name": "timestamp", "type": "uint256" }], "name": "OrderFinished", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "currentMinter", "type": "address" }, { "indexed": false, "name": "newMinter", "type": "address" }], "name": "MinterProposed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "currentMinter", "type": "address" }, { "indexed": false, "name": "newMinter", "type": "address" }], "name": "MinterApproved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }]