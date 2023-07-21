

function addToCart(proId) {
    console.log(proId,"proId");
    $.ajax({
        url: '/addToCart/' + proId,
        method: 'get',
        success: (response) => {
            if (response.status) {
                let count = $('#cart-count').html();
                count = parseInt(count) + 1;
                $("#cart-count").html(count);
                console.log("Cart count updated:", count);
            } else {
                if (response.redirect) {
                    window.location.href = response.redirect; // Redirect to login page
                }
            }
        }
    });
}


 function addToWishList(proId){
    $.ajax({
        url:'/addToWishLisT/'+proId,
        method:'get',
        success:(response)=>{
            let count = $('#wish-count').html()
            count = parseInt(count)+1
            $("#wish-count").html(count)
        }
    })
 }
 