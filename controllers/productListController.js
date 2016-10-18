/**
 * Created by sukumar on 10/18/2016.
 */
angular.module('sportsStore')
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller('productListController', function ($scope, $filter,
                                                   productListActiveClass, productListPageCount) {
        var selectedCategory = null;
        $scope.selectCategory = function (category) {
            selectedCategory = category
        }
        $scope.categoryFilterFn = function (product) {
            return product.category == selectedCategory || selectedCategory == null;
        }
        $scope.getActiveClass = function (category) {
            return category == selectedCategory ? productListActiveClass : "";
        }
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;
        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
    });