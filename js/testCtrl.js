angular.module("testApp", [])
    .controller("TestCtrl", ['$scope', '$http', function ($scope, $http) {
        $http.get('C:\\Users\\vethota\\Documents\\Sundeep\\Downloads data\\Walmart-UI-Test\\data\\refineData.json').success(function (data) {
            $scope.refineDataBrand = data.Refine.Brand;
            $scope.refineDataDept = data.Refine.Departments;
        });
        $http.get('C:\\Users\\vethota\\Documents\\Sundeep\\Downloads data\\Walmart-UI-Test\\data\\productData.json').success(function (data) {
            $scope.productData = data.products;
        });
        $http.get('C:\\Users\\vethota\\Documents\\Sundeep\\Downloads data\\Walmart-UI-Test\\data\\trendData.json').success(function (data) {
            $scope.trendData = data.trendAnalysis;
        });
    }]);