app.controller('homeConstoller', ['$scope', function($scope){

	$scope.musics = [{
		name:"白衣沽酒",
		url:"./files/mp3/baiyigujiu.m4a",
		img:"./imgs/shijiancheng.jpg"
	},
	{
		name:"武破血胆",
		url:"./files/mp3/wupoxuedan.mp3",
		img:"./imgs/wupo.jpg"
	},
	{
		name:"江山快手",
		url:"./files/mp3/jiangshankuaishou.mp3",
		img:"./imgs/hill1.jpg"
	},
	{
		name:"刀饮江山",
		url:"./files/mp3/daoyinjiangshan.mp3",	
		img:"./imgs/daoyinjiangshan.jpg"
	}];
	$scope.items = [{
		name:"刀剑心",
		url:"./files/mp3/daojianxin.mp3",	
		img:"./imgs/daojianxin.jpg"
	},
	{
		name:"醉寒江",
		url:"./files/mp3/zuihanjiang.mp3",	
		img:"./imgs/zuihanjiang.jpg"
	},
	{
		name:"琅华光阴",
		url:"./files/mp3/langhuaguangyin.mp3",	
		img:"./imgs/qiluoguangyin.jpg"
	}];
	$scope.friends = [{
		name:"意琦行",
		img:"./imgs/yiqixing-link.jpg",
		info:"武道七修好友"
	},{
		name:"一留衣",
		img:"./imgs/yiliuyi-link.jpg",
		info:"武道七修好友"
	},{
		name:"九代师",
		img:"./imgs/jiudaishi-link.jpg",
		info:"武道七修好友"
	},{
		name:"星狼弓",
		img:"./imgs/xinglanggong-link.jpg",
		info:"武道七修好友"
	},{
		name:"最光阴",
		img:"./imgs/zuiguangyin-link.jpg",
		info:"武道七修好友"
	},{
		name:"策梦侯",
		img:"./imgs/cemenghou-link.jpg",
		info:"武道七修好友"
	},{
		name:"天踦爵",
		img:"./imgs/tianqijue-link.jpg",
		info:"武道七修好友"
	},{
		name:"妖绘天华",
		img:"./imgs/yaohuishi-link.jpg",
		info:"武道七修好友"
	},{
		name:"暴雨心奴",
		img:"./imgs/baoyuxinnu-link.jpg",
		info:"武道七修好友"
	}]
	
}])
app.controller('downCon', ['$scope', function($scope){

	$scope.month = [{
		name:"01期 《绮罗·情》2013年09月 绮罗生官方后援会电子月刊",
		url:"./files/qiluoyuekan/01.exe",
		img:"./imgs/qi.jpg"
	},
	{
		name:"04期 《绮罗·情》2013年12月 绮罗生官方后援会电子月刊",
		url:"./files/qiluoyuekan/04.exe",
		img:"./imgs/wupo.jpg"
	},
	{
		name:"05期 《绮罗·情》2014年01月 绮罗生官方后援会电子月刊",
		url:"./files/qiluoyuekan/05.exe",
		img:"./imgs/daoyinjiangshan.jpg"
	},{
		name:"07期 《绮罗·情》2014年03月 绮罗生官方后援会电子月刊",
		url:"./files/qiluoyuekan/07.exe",
		img:"./imgs/shijiancheng.jpg"
	},
	{
		name:"09期 《绮罗·情》2014年05月 绮罗生官方后援会电子月刊",
		url:"./files/qiluoyuekan/09.exe",
		img:"./imgs/3_boad.jpg"
	}]
	$scope.bg = true;
	$scope.topBg = './imgs/public/2.jpg';
}])
app.controller('contactCon', ['$scope', function($scope){
	$scope.bg = true;
	$scope.topBg = './imgs/public/2.jpg';
}])