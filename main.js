function printReceipt(barcodes) {
    const databaseRecords = [
	   {
	      barcode: 'ITEM000000',
	      name: 'Coca-Cola',
	      price: 3
	    },
	    {
	      barcode: 'ITEM000001',
	      name: 'Sprite',
	      price: 3
	    },
	    {
	      barcode: 'ITEM000002',
	      name: 'Apple',
	      price: 5
	    },
	    {
	      barcode: 'ITEM000003',
	      name: 'Litchi',
	      price: 15
	    },
	    {
	      barcode: 'ITEM000004',
	      name: 'Battery',
	      price: 2
	    },
	    {
	      barcode: 'ITEM000005',
	      name: 'Instant Noodles',
	      price: 4
	    }
	];

	//printReceipt(barcodes);
	//getNoRepectBarcodeArray(barcodes);
	var cartItems = getItemCountByBarcode(barcodes);
	var cartItemDetails = getItemInfoByBarcode(cartItems,databaseRecords);
	var itemReceipts = getItemSubtotalPrice(cartItemDetails);
	var totalPrice = getAllItemTotalPrice(itemReceipts);
	var receiptInfo = getReceiptInfo(itemReceipts,totalPrice);
    console.log(receiptInfo);
}

function getNoRepectBarcodeArray(array){
    array.sort(); 
    var re=[array[0]];
    for(var i = 1; i < array.length; i++){
   		if( array[i] !== re[re.length-1])
   		{
     		re.push(array[i]);
   		}
    }
	//console.log(re);
    return re;
}

function getItemCountByBarcode(barcodes){
	var cartItems = [];
	var noRepectBarcodeArray = getNoRepectBarcodeArray(barcodes);
	for (var i = 0; i < noRepectBarcodeArray.length; i++) {
		var count = 0;
		for (var j = barcodes.length - 1; j >= 0; j--) {
			if(barcodes[j]==noRepectBarcodeArray[i]){
				count++;
			}
		}
		var cartItem = {barcode:noRepectBarcodeArray[i],quantity:count};
		cartItems.push(cartItem);
	}
	return cartItems;
	//console.log(cartItems);
}

function getItemInfoByBarcode(cartItems,databaseRecords){
	for (var i = 0; i < cartItems.length; i++) {
		for (var j = databaseRecords.length - 1; j >= 0; j--) {
			if(databaseRecords[j].barcode == cartItems[i].barcode){
				cartItems[i].price = databaseRecords[j].price;
				cartItems[i].name = databaseRecords[j].name;
			}
		}
	}
	//console.log(cartItems);
	return cartItems;
}

function getItemSubtotalPrice(cartItemDetails){
	for (var i = 0; i < cartItemDetails.length; i++) {
		cartItemDetails[i].subtotal = cartItemDetails[i].quantity * cartItemDetails[i].price;
	}

	//console.log(cartItemDetails);
	return cartItemDetails;
}

function getAllItemTotalPrice(itemReceipts){
	var totalPrice = 0;
	for (var i = 0; i < itemReceipts.length; i++) {
		totalPrice += itemReceipts[i].subtotal;
	}
	//console.log(totalPrice);
	return totalPrice;
}

function getReceiptInfo(itemReceipts,totalPrice){
	var receiptInfo = "\n***<store earning no money>Receipt ***\n";
	var itemReceiptInfo = "";
	for (var i = 0; i < itemReceipts.length; i++) {
		itemReceiptInfo += "Name: " + itemReceipts[i].name + ", Quantity: "+ itemReceipts[i].quantity + ", Unit price: " + 
		itemReceipts[i].price + " (yuan), Subtotal: " + itemReceipts[i].subtotal + " (yuan)\n";
	}
	receiptInfo += itemReceiptInfo;
	receiptInfo +=  "----------------------\n";
	receiptInfo +=  "Total: " + totalPrice + " (yuan)\n";
	receiptInfo += "**********************";

	//console.log(receiptInfo);
	return receiptInfo;
}


module.exports = {
    printReceipt
};


/*const barcodes = [
                'ITEM000000',
                'ITEM000000',
                'ITEM000000',
                'ITEM000000',
                'ITEM000000',
                'ITEM000001',
                'ITEM000001',
                'ITEM000004'
            ];

const databaseRecords = [
   {
      barcode: 'ITEM000000',
      name: 'Coca-Cola',
      price: 3
    },
    {
      barcode: 'ITEM000001',
      name: 'Sprite',
      price: 3
    },
    {
      barcode: 'ITEM000002',
      name: 'Apple',
      price: 5
    },
    {
      barcode: 'ITEM000003',
      name: 'Litchi',
      price: 15
    },
    {
      barcode: 'ITEM000004',
      name: 'Battery',
      price: 2
    },
    {
      barcode: 'ITEM000005',
      name: 'Instant Noodles',
      price: 4
    }
];

//printReceipt(barcodes);
//getNoRepectBarcodeArray(barcodes);
var cartItems = getItemCountByBarcode(barcodes);
var cartItemDetails = getItemInfoByBarcode(cartItems,databaseRecords);
var itemReceipts = getItemSubtotalPrice(cartItemDetails);
var totalPrice = getAllItemTotalPrice(itemReceipts);
var receiptInfo = getReceiptInfo(itemReceipts,totalPrice);*/