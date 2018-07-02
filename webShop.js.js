function calculateTotal(){

  var niz=fromString2numberArray(getCookie());
  var totalF = 0;

if(niz!=null){
  for (var i = 0; i < niz.length; i++) {

  var price = parseInt($("#hiddd" +niz[i]).text().trim(), 10);
  var quantity = $("#quantity"+niz[i]).val();

  totalF = totalF + (price*quantity);
  }

  $(".calculateTotal").remove();
  $(".basketholderr").append('<div class="calculateTotal">'+
  		'<h3>IN TOTAL</h3>'+
  		'<h4>$'+totalF+'</h4>'+
  		'<input onclick="preOrderFunction()" type="submit" value="ORDER">'+
  		'</div>');
}
}

function preOrderFunction(){
  $(".basketholderr").hide();
  $(".logbox").show();
  $(".loging").show();
}
function orderFunction(){	

  var result = "";
  var niz=fromString2numberArray(getCookie());
  var userName = $("#fname").val();
  var userLastName = $("#lname").val();
  var userAdress = $("#uadress").val();
  var userPhoneNumber = $("#phoneNumber").val();

  if(niz!=null){
  		for (var i = 0; i < niz.length; i++) {

  		var price = parseInt($("#hiddd" +niz[i]).text().trim(), 10);
  		var quantity = $("#quantity"+niz[i]).val();

  		result = result + "id:" + niz[i] + " , quantity:" + quantity + " , " + "\n";
  		}
		result += userName + " " +userLastName+" , "+ userAdress + " , "+userPhoneNumber;
	}
}
//calculateRow
function calc(inputid, basketPrice) {

 var quantity = $("#quantity"+inputid);
 var result = quantity.val() * basketPrice;
 
 $("#total_price_hidden" +inputid).remove();
 $("#baskettotal" +inputid).append('<h6 id="total_price_hidden'+inputid+'">$'+result+'</h6>');
 $("#total_price" +inputid).hide();

 calculateTotal();

}
//calculateTotal
function hideRow(id){
   $("#basketwrapp"+id).fadeOut("slow");
}
function setCookie(cvalue) {

    var d = new Date();

    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "wwwnoacom666" + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {

    var name = "wwwnoacom666=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        	if(c.substring(name.length, c.length) == 'null'){
        		return null;
        	} else {
        		return c.substring(name.length, c.length);
        	}
        }
    }
    return null;
}

function fromString2numberArray(mm){
	if(mm!=null){                                           
	} else {
		return null;						      
	}
}

function add2basket(id){
	if(getCookie() != null) {                               
		var cookieString = getCookie();
    // console.log(cookieString);
		var arr = fromString2numberArray(cookieString);     
		if(arr.indexOf(id) == -1) {							
			arr.push(id);									
			setCookie(arr);	                                
		}
	} else {
		setCookie(id);                                      
}

function removeFromBasket(id){

	var cookieString = getCookie();
	if(getCookie() != null){                                
		var arr = fromString2numberArray(cookieString);     
		var index = arr.indexOf(id);
		if (index !== -1) {                                 
			arr.splice(index, 1);                           
		}
		if(arr.length === 0){                               
			setCookie(null);	                            
		} else {
			setCookie(arr);                                 
		}
	}
  	hideRow(id);
    calculateTotal();
}
//cookie

// Json
var jsonObj =
[
{"id":1, "ime":"neke cizme1", "cena": 1000, "opis":"bla nablala sa", "kategorija":"wild_at_heart"},
{"id":2, "ime":"neke cizme2", "cena": 2000, "opis":"bla aas sa", "kategorija":"wild_at_heart"},
{"id":3, "ime":"neke cizme3", "cena": 3000, "opis":"bla nblala sa", "kategorija":"wild_at_heart"},
{"id":4, "ime":"neke cizme4", "cena": 4000, "opis":"bla nblasaasasala sa", "kategorija":"amazon_soul"},
{"id":5, "ime":"neke cizme5", "cena": 5000, "opis":"bla nblalsssssssa sa", "kategorija":"amazon_soul"},
{"id":6, "ime":"neke cizme6", "cena": 6000, "opis":"bla nblasalwwqqa sa", "kategorija":"amazon_soul"},
{"id":7, "ime":"neke cizme7", "cena": 7000, "opis":"bla nblala sa", "kategorija":"infinite_soul"},
{"id":8, "ime":"neke cizme8", "cena": 8000, "opis":"bla nblaassaa sa", "kategorija":"infinite_soul"},
{"id":9, "ime":"neke cizme8", "cena": 9000, "opis":"bla nblala sa", "kategorija":"infinite_soul"},
{"id":10, "ime":"neke cizme8", "cena": 10000, "opis":"bla nblasasasssla sa", "kategorija":"ovo_ono"},
{"id":11, "ime":"neke cizme8", "cena": 11000, "opis":"bla nblala sa", "kategorija":"ovo_ono"},
{"id":12, "ime":"neke cizme8", "cena": 12000, "opis":"bla nblasssla sa", "kategorija":"ovo_ono"}
] ;


// Json
$(document).ready(function(){

$(jsonObj).each(function (index, boots) {

if(boots.kategorija === "wild_at_heart"){

$(".picwraper1").append('<div class="responsive">'+
                '<div class="gallery">'+
                 '<a target="_blank" href="description.html">'+
                 '<img class="frontpic" src="web500x400/_MG_6509.jpg" alt="Trolltunga Norway" width="200" height="200">'+
        		 '<img class="backpic" src="web500x400/DSC01776.jpg" alt="Trolltunga Norway" width="200" height="200">'+
                 '</a>'+
                 '<div class="desc">'+boots.opis+'</br>'+
                 +boots.cena+'</br>'+
                 '<p onclick="add2basket('+boots.id+')">Add to chart</p>'+
                 '</div>'+
        		 '</div>'+
            	'</div>');//append
}
else if(boots.kategorija === "amazon_soul"){

$(".picwraper2").append('<div class="responsive">'+
                '<div class="gallery">'+
                 '<a target="_blank" href="description.html">'+
                 '<img class="frontpic" src="web500x400/_MG_6509.jpg" alt="Trolltunga Norway" width="200" height="200">'+
         		 '<img class="backpic" src="web500x400/DSC01776.jpg" alt="Trolltunga Norway" width="200" height="200">'+
                 '</a>'+
                 '<div class="desc">'+boots.opis+'</br>'+
                 +boots.cena+'</br>'+
                 '<p onclick="add2basket('+boots.id+')">Add to chart</p>'+
                 '</div>'+
                 '</div>'+
                 '</div>');//append
}
else if(boots.kategorija === "infinite_soul"){

$(".picwraper3").append('<div class="responsive">'+
                '<div class="gallery">'+
                 '<a target="_blank" href="description.html">'+
                 '<img class="frontpic" src="web500x400/_MG_6509.jpg" alt="Trolltunga Norway" width="200" height="200">'+
         '<img class="backpic" src="web500x400/DSC01776.jpg" alt="Trolltunga Norway" width="200" height="200">'+
                 '</a>'+
                 '<div class="desc">'+boots.opis+'</br>'+
                 +boots.cena+'</br>'+
                 '<p onclick="add2basket('+boots.id+')">Add to chart</p>'+
                 '</div>'+
         '</div>'+
            '</div>');//append
}
else{
	
$(".picwraper4").append('<div class="responsive">'+
                '<div class="gallery">'+
                 '<a target="_blank" href="description.html">'+
                 '<img class="frontpic" src="web500x400/_MG_6509.jpg" alt="Trolltunga Norway" width="200" height="200">'+
         '<img class="backpic" src="web500x400/DSC01776.jpg" alt="Trolltunga Norway" width="200" height="200">'+
                 '</a>'+
                 '<div class="desc">'+boots.opis+'</br>'+
                 +boots.cena+'</br>'+
                 '<p onclick="add2basket('+boots.id+')">Add to chart</p>'+
                 '</div>'+
         '</div>'+
            '</div>');//append
}
});
//each append

//append to basket
var basketArray = fromString2numberArray(getCookie());
if(basketArray!=null){
$(jsonObj).each(function (index, BasketBoots) {
  if(basketArray.includes(BasketBoots.id)){
$(".basketholderr").append('<div class="basketwrapp" id="basketwrapp'+BasketBoots.id+'">'+
      '<div class="basketproductt">'+
      '<img src="web500x400/IMG_7504.jpg">'+
    '</div>'+
    '<div class="basketname">'+
      '<h6>'+BasketBoots.ime+'</h6>'+
      '<p>Price: $'+BasketBoots.cena+'</p>'+
      '<p id="hiddd'+BasketBoots.id+'" style="display:none" >'+BasketBoots.cena+'</p>'+
      '<p class="remm" id="remm'+BasketBoots.id+'"onclick="removeFromBasket('+BasketBoots.id+')">remove item</p>'+
    '</div>'+
    '<div class="basketquantity">'+
    '<div class="qhold">'+
      '<div class="quantity">'+
             '<input onchange="calc('+BasketBoots.id +','+BasketBoots.cena+')" id="quantity'+BasketBoots.id+'" type="number" min="1" max="9" step="1" value="1">'+
            '</div>'+
      '</div>'+
    '</div>'+
    '<div class="baskettotal" id="baskettotal'+BasketBoots.id+'">'+
      '<h6 id="total_price'+BasketBoots.id+'">$'+BasketBoots.cena+'</h6>'+
    '</div>'+
  '</div>');
  //append
}//if includes in array
});//each append to basket
}
//append to basket

calculateTotal();
});  //document ready