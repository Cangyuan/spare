app.directive('headTop', function(){
    return {
        restrict: 'EAC',
        replace: true,
        templateUrl: 'tpls/directive/head-top.html'
    }
});
app.directive('footerEnd', function(){
    return {
        restrict: 'EAC',
        replace: true,
        templateUrl: 'tpls/directive/footer.html'
    }
});