app.controller('homeConstoller', ['$scope', function($scope){

	$scope.musics = [{
		name:"白衣沽酒",
		img:"./imgs/shijiancheng.jpg"
	},
	{
		name:"武破血胆",
		img:"./imgs/wupo.jpg"
	},
	{
		name:"江山快手",
		img:"./imgs/hill1.jpg"
	},
	{
		name:"刀饮江山",
		img:"./imgs/daoyinjiangshan.jpg"
	}];
	$scope.items = [{
		name:"刀剑心",
		img:"./imgs/daojianxin.jpg"
	},
	{
		name:"醉寒江",
		img:"./imgs/zuihanjiang.jpg"
	},
	{
		name:"琅华光阴",
		img:"./imgs/qiluoguangyin.jpg"
	}];
	$scope.topBg = './imgs/public/2.jpg';
	// $scope.goDefault = function(){
	// 	$('.cover-bg').css('background', 'none');
	// 	alert('111')
	// 	$('.wrap-top').css({
	// 		background: '#2b2b2b!important',
	// 		opcity: '1!important'
	// 	});
	// }
	// $(function(){
		
	// })
	
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
		img:"./imgs/qi.jpg"
	},
	{
		name:"05期 《绮罗·情》2014年01月 绮罗生官方后援会电子月刊",
		url:"./files/qiluoyuekan/05.exe",
		img:"./imgs/qi.jpg"
	},{
		name:"07期 《绮罗·情》2014年03月 绮罗生官方后援会电子月刊",
		url:"./files/qiluoyuekan/07.exe",
		img:"./imgs/qi.jpg"
	},
	{
		name:"09期 《绮罗·情》2014年05月 绮罗生官方后援会电子月刊",
		url:"./files/qiluoyuekan/09.exe",
		img:"./imgs/qi.jpg"
	}]
}])