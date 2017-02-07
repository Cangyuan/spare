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
	}]
}])