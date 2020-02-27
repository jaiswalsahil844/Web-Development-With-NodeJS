$(function () {

    let productList = $('#product-list')
    
    fetchProducts(function (products) {
        productList.empty() 

        for(let product of products){
            productList.append(creatProductCard(product))
        }
    })
})