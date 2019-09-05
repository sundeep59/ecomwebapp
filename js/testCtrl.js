angular.module("testApp", [])
    .controller("TestCtrl", ['$scope', function ($scope) {
        var productData = {
            "products": [
                {
                    "image": "images/iwatch.jpg",
                    "description": "Smart-watch Sweatproof SmartWatch Phone /bluetooth 4.0/Easyconnection/ for Apple Iphone...",
                    "topRated": false,
                    "outOfStock": true,
                    "freeShipping": false,
                    "price": 250.98,
                    "offerPrice": 185
                },
                {
                    "image": "images/samsung.jpg",
                    "description": "MisFit Swarovski Shine Slake SetActivity & Sleep Monitor (Various…",
                    "topRated": true,
                    "outOfStock": false,
                    "freeShipping": true,
                    "price": 250.98,
                    "offerPrice": 185
                },
                {
                    "image": "images/misfit.jpg",
                    "description": "MisFit Swarovski Shine Slake SetActivity & Sleep Monitor (Various…",
                    "topRated": true,
                    "outOfStock": false,
                    "freeShipping": false,
                    "price": 250.98,
                    "offerPrice": 185,
                    "quantity":1
                },
                {
                    "image": "images/moto-360.jpg",
                    "description": "Motorola Moto 360 - Black LeatherSmart Watch",
                    "topRated": false,
                    "outOfStock": true,
                    "freeShipping": false,
                    "price": 250.98,
                    "offerPrice": 185
                },
                {
                    "image": "images/iwatch.jpg",
                    "description": "Samsung Gear 2 Neo Smart Watch -Assorted Colors",
                    "topRated": false,
                    "outOfStock": false,
                    "freeShipping": true,
                    "price": 430.99,
                    "offerPrice": 242.98
                },
                {
                    "image": "images/lg.jpg",
                    "description": "LG Watch Urbane Wearable Smart Watch - Pink Gold",
                    "topRated": true,
                    "outOfStock": false,
                    "freeShipping": false,
                    "price": 480.5,
                    "offerPrice": 270.8
                }
            ]
        }
        var trendData = {
            "trendAnalysis": [
                {
                    "description": "Moto 360",
                    "trendValue": 20
                },
                {
                    "description": "iWatch",
                    "trendValue": 30
                },
                {
                    "description": "Samsung",
                    "trendValue": 10
                },
                {
                    "description": "LG",
                    "trendValue": 5
                }
            ]
        }
        var refineData = {
            "Refine": {
                "Departments": [
                    {
                        "name": "Fitness Watches Monitors",
                        "count": 20
                    },
                    {
                        "name": "Cell Phone Watches",
                        "count": 12
                    },
                    {
                        "name": "Elliptical Machines",
                        "count": 15
                    },
                    {
                        "name": "Treadmills",
                        "count": 5
                    },
                    {
                        "name": "Exercise Bikes",
                        "count": 3
                    },
                    {
                        "name": "Weight Scales",
                        "count": 2
                    },
                    {
                        "name": "iPod MP3 Accessories",
                        "count": 25
                    }
                ],
                "Brand": [
                    {
                        "name": "FitBit",
                        "count": 2
                    },
                    {
                        "name": "ProForm",
                        "count": 3
                    },
                    {
                        "name": "iFit",
                        "count": 3
                    },
                    {
                        "name": "MAGELLAN",
                        "count": 3
                    },
                    {
                        "name": "Pebble",
                        "count": 3
                    },
                    {
                        "name": "Apple",
                        "count": 3
                    }
                ]
            }
        }
        $scope.refineDataBrand = refineData.Refine.Brand;
        $scope.refineDataDept = refineData.Refine.Departments;
        $scope.productData = productData.products;
        $scope.trendData = trendData.trendAnalysis;
    }]);