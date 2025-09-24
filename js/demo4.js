const url = 'http://127.0.0.1:5500/data/product.json';
fetch(url).then(rs=>rs.json())
.then(function(data){
    
});


//var sp = {
//    name: "Iphone 17 Air",
//    price: 32000000,
//    image: "images/michel.jpg",
//    description: "Dong san pham",
//    stock: {
//        qty: 9
//    },
//reviews: [
//    {
//        rate: 5,
//        review: "nhindepphed"
//    },
//    {
//        rate: 4,
 //       review: "9riejrieg"
 //   }
//]
//}

var sp = data;
var spname= document.getElementById("p-name");
spname.innerText = sp.name;

document.getElementById("p-price").innertext = sp.price;
document.getElementById("p-img").src = sp.image;
document.getElementById("p-desc").innertext = sp.description;
document.getElementById("p-qty").innertext = sp.stock.qty;

var rvHtml ="";
for(var i=0; i<sp.reviews.length;i++){
    var rate = sp.reviews[i].rate;
    var review = sp.reviews[i].review;
    rvHtml +=`<li>${rate} sao - ${review}</li>`;
}

document.getElementById("rv").innerHTML = rvHtml;