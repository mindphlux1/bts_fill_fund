 var cbLog = function(err,msg){
    console.log("LOG",err,msg);
  };

var graphene  = require('../lib'),
co = require('co');

class BTSPoolFund {

	constructor() {
		
		
	}

	main() {
		
		co(function*(){
			var client = yield graphene.wallet.createWalletClient("ws://127.0.0.1:8099");
			
			var balances = yield client.list_account_balances("mindphlux.poolfund");
			var balance = balances[0].amount / 100000;
			console.log("balance: " + balance);
			if (balance > 10000) {
				console.log("Funding..");
				var result = yield client.fund_asset_fee_pool("mindphlux.poolfund", "CNY", "3000", true);
				var result = yield client.fund_asset_fee_pool("mindphlux.poolfund", "USD", "4000", true);
				var result = yield client.fund_asset_fee_pool("mindphlux.poolfund", "EUR", "1000", true);
				var result = yield client.fund_asset_fee_pool("mindphlux.poolfund", "GOLD", "1000", true);
				var result = yield client.fund_asset_fee_pool("mindphlux.poolfund", "SILVER", "1000", true);
			}
			
			yield client.close();
			return info;
 			
		}).then(function(result) {

		},
		function(err){
    		//console.log(err);
		}

		);		
	}



}


let b = new BTSPoolFund();
b.main();
