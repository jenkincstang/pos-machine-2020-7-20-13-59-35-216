## 分解任务Tasking
*** 输入输出变量定义，数据格式定义  方法名称定义 ***
1. 获取商品对应的数量 getItemCount
输入：barcodes:String[]
输出：cartItems:[{barcode:"",count:""}]
2. 获取每种商品的信息 getItemDetailInfo
输入：cartItems:[{barcode:"",count:""}]
输出：cartItemDetails:[{barcode:"",count:"",name:"",unitPrice:""}]
3. 获取每种商品的小计价钱 getItemSubtotalPrice
输入：cartItemDetails:[{barcode:"",count:"",name:"",unitPrice:""}]
输出：itemReceipts:[{barcode:"",count:"",name:"",unitPrice:"",subtotal:""}]
4. 获取所有商品的总价钱 getAllItemsTotalPrice
输入：itemReceipts:[{barcode:"",count:"",name:"",unitPrice:"",subtotal:""}]
输出：totalPriceOfAllItems:int
5. 获取发票信息 getReceiptInfo
输入：itemReceipts:[{barcode:"",count:"",name:"",unitPrice:"",subtotal:""}]
totalPriceOfAllItems:int
输出：receiptInfo:String
6. 打印发票信息 printReceiptInfo
输入：receiptInfo:String
输出：控制台输出发票信息


## Context Map
*** 独立 *** 每个模块应该相互独立，只在输入输出上有一定联系，但是不能互相嵌套
*** 穷尽 ***  是否列出了所有输入输出数据流
*** 细小 ***  模块划分尽量细小，避免把几个功能挤进一个模块里，每个模块应该职责单一
*** 参数明确 ***  参数名称和数据格式要明确，清晰，可读，可理解
*** 方法明确 ***  方法名称要明确，清晰，可读，可理解（可读可理解：他人无需经过作者讲解即可在短时间内读懂代码）




## PDCA:plan>do>check>action
//TODO 可量化问题的PDAC，不是大问题不可量化问题的PDCA 
//写代码之前做PDAC，而不是代码之后
获取商品对应的数量 getItemCount
Plan:
5min
Do：
10min
Check：
对js去重方法不熟悉，查了一下资料
Action：
熟悉js常见方法，并加以练习

PDCA->问题足够小->反映问题足够精确->聚焦解决小问题->查漏补缺->解决大问题
plan > do: 可能有潜在问题没有发现，应该主动查漏补缺
plan = do：有没有什么地方可以优化？
plan < do: 已经出现问题，赶紧解决




