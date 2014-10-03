//var singlerestaurant = '{"restaurant":"Tamper Cafe", "restaurantid":"0075", "star":"5", "fit":"88", "address":"340 Boston Ave", "distance":"0.3", "phone":"617-800-1234", "recommend":[{"dishid":"1234", "title":"Salmon Sushi","type":"sushi","fit":"97","description":"This is not bad","price":"15"}, {"dishid":"1235", "title":"Yellowtail","type":"sushi","fit":"93","description":"This is not bad, too","price":"13"}, {"dishid":"1236", "title":"Udon","type":"Noodle","fit":"71","description":"LOL udon","price":"11"} ] "menu":[{"dishid":"1234", "title":"Salmon Sushi","type":"sushi","fit":"97","description":"This is not bad","price":"15"}, {"dishid":"1235", "title":"Yellowtail","type":"sushi","fit":"93","description":"This is not bad, too","price":"13"}, {"dishid":"1236", "title":"Udon","type":"Noodle","fit":"71","description":"LOL udon","price":"11"} ] } '
//var singlerestaurant = '{"restaurant": "Tamper Cafe", "restaurantid": "0075", "star": "5", "fit": "88", "address": "340 Boston Ave", "distance": "0.3", "phone": "617-800-1234", "recommend": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ], "menu": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ] }'// Initialize your app
var single_restaurant_array =""
var toprec_index=0
var currentorder = ''
//var multiplerestaurant = '[{"restaurant": "Tampee Cafe", "restaurantid": "abcd", "star": "5", "fit": "88", "address": "340 Boston Ave", "distance": "0.3", "phone": "617-800-1234", "recommend": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ], "menu": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ] }, {"restaurant": "Tamper Cafe", "restaurantid": "abce", "star": "5", "fit": "88", "address": "340 Boston Ave", "distance": "0.3", "phone": "617-800-1234", "recommend": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ], "menu": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ] } ]'
var multiplerestaurant = '{"status": "success", "http_status": 200, "venues": [{"locu_id": "006c651feb434affb3a7", "name": "The Hideout", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "nightlife", "name": "Nightlife"}, {"str_id": "pubs", "name": "Pubs"}]}, {"name": "Bistro 5", "open_hours": {"tuesday": [["17:00", "22:00"]], "friday": [["17:00", "22:00"]], "saturday": [["17:00", "22:00"]], "thursday": [["17:00", "22:00"]], "wednesday": [["17:00", "22:00"]]}, "locu_id": "00a5e98b8536c95f37ae", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "french", "name": "French"}]}, {"locu_id": "00aecdec64ae0cad364d", "name": "Crazy Dough\'s Pizza", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "pizza", "name": "Pizza"}]}, {"name": "Wet Paint Nail Spa", "open_hours": {"sunday": [["12:00", "18:00"]], "monday": [["14:00", "20:00"]], "tuesday": [["11:00", "20:00"]], "friday": [["10:00", "19:00"]], "wednesday": [["10:00", "19:00"]], "thursday": [["10:00", "19:00"]], "saturday": [["10:00", "16:00"]]}, "locu_id": "00da445483aa635f000c", "categories": [{"str_id": "spas", "name": "Day Spas"}, {"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"name": "Good Food Cafe", "open_hours": {"sunday": [["08:00", "14:00"]], "tuesday": [["06:00", "14:00"]], "friday": [["06:00", "14:00"]], "wednesday": [["06:00", "14:00"]], "thursday": [["06:00", "14:00"]], "saturday": [["07:00", "14:00"]]}, "locu_id": "010717df18f8a9c82c87", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "food", "name": "Food"}]}, {"locu_id": "013eedec51353f9ea3b9", "name": "The Painted Burro", "categories": [{"str_id": "mexican", "name": "Mexican"}, {"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "0153014354ee1e232418", "name": "The western front", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "divebars", "name": "Dive Bars"}, {"str_id": "nightlife", "name": "Nightlife"}]}, {"locu_id": "0162c81b75b56b1e5a2a", "name": "Mix Flavor Brazilian Grill", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "brazilian", "name": "Brazilian"}]}, {"name": "Precinct", "open_hours": {"sunday": [["11:30", "01:00"]], "monday": [["16:00", "01:00"]], "tuesday": [["16:00", "01:00"]], "friday": [["16:00", "02:00"]], "wednesday": [["16:00", "01:00"]], "thursday": [["16:00", "01:00"]], "saturday": [["11:30", "02:00"]]}, "locu_id": "01e46fc0d651a11f50d5", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "pubs", "name": "Pubs"}, {"str_id": "nightlife", "name": "Nightlife"}]}, {"locu_id": "020a51b770fe1ef36db0", "name": "Brunello Bistro", "categories": [{"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "02120f7addb1dda387d0", "name": "Tavern", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "tradamerican", "name": "Traditional American"}]}, {"name": "Taipei Tokyo Cafe", "open_hours": {"sunday": [["12:00", "09:00"]], "monday": [["11:00", "21:30"]], "tuesday": [["11:00", "21:30"]], "friday": [["11:00", "22:00"]], "wednesday": [["11:00", "21:30"]], "thursday": [["11:00", "21:30"]], "saturday": [["11:00", "22:00"]]}, "locu_id": "023a607fd75c6aac6589", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "japanese", "name": "Japanese"}]}, {"locu_id": "02d2ac37bf2c353f090f", "name": "Cafe Deia", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "coffee", "name": "Coffee & Tea"}, {"str_id": "food", "name": "Food"}, {"str_id": "breakfast_brunch", "name": "Breakfast & Brunch"}]}, {"locu_id": "031a574209edf1e0ccc2", "name": "Tenoch Mexican Taqueria", "categories": [{"str_id": "mexican", "name": "Mexican"}, {"str_id": "restaurants", "name": "Restaurants"}]}, {"name": "Starbucks", "open_hours": {"sunday": [["06:00", "21:00"]], "monday": [["05:30", "21:00"]], "tuesday": [["05:30", "21:00"]], "friday": [["05:30", "21:00"]], "wednesday": [["05:30", "21:00"]], "thursday": [["05:30", "21:00"]], "saturday": [["06:00", "21:00"]]}, "locu_id": "036334e8fff0c1fddc72", "categories": [{"str_id": "coffee", "name": "Coffee & Tea"}, {"str_id": "food", "name": "Food"}]}, {"locu_id": "03926df0bf70ec18c4d9", "name": "Sarma", "categories": [{"str_id": "other", "name": "Other"}]}, {"locu_id": "03998286559a065bbe52", "name": "Nick\'s Kitchen", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "hotdog", "name": "Hot Dogs"}]}, {"locu_id": "03cc11c0207197c9a896", "name": "Prime Turbine", "categories": [{"str_id": "appliances", "name": "Appliances"}, {"str_id": "shopping", "name": "Shopping"}, {"str_id": "homeandgarden", "name": "Home & Garden"}]}, {"name": "Nails & Co", "open_hours": {"sunday": [["10:00", "16:00"]], "monday": [["10:00", "20:00"]], "tuesday": [["10:00", "20:00"]], "friday": [["10:00", "20:00"]], "wednesday": [["10:00", "20:00"]], "thursday": [["10:00", "20:00"]], "saturday": [["09:00", "19:00"]]}, "locu_id": "03f549e535e818749eb7", "categories": [{"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"locu_id": "03fed3765a31aea48dbc", "name": "Chipotle Mexican Grill", "categories": [{"str_id": "other", "name": "Other"}]}, {"locu_id": "04018e63b6f2a5eb300a", "name": "Brazilian Ipanema Hair Salon", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "brazilian", "name": "Brazilian"}]}, {"name": "Asmara", "open_hours": {"sunday": [["17:00", "22:30"]], "friday": [["11:30", "15:00"], ["17:00", "23:30"]], "thursday": [["17:00", "22:30"]], "saturday": [["11:30", "23:30"]], "monday": [["11:30", "15:00"], ["17:00", "22:30"]]}, "locu_id": "04057d9e97ddcf762636", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "ethiopian", "name": "Ethiopian"}]}, {"locu_id": "04701ec2d80e374ace0b", "name": "Sal\'s Beauty Salon", "categories": [{"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"locu_id": "04747545f9fa08932c3e", "name": "A Taste of Sahara", "categories": [{"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "047ae97bc0458970f1c1", "name": "Greenhouse Cafe", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "food", "name": "Food"}]}]}'
var prepage_id = ""
var currentpage_id = "login_page"
var sorted_menu= ""
var login_number=0
//var myApp = new Framework7();
var myApp = new Framework7({
    swipePanel: 'right',
    pushState: true, 
    swipebackPage: true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// // Callbacks to run specific code for specific pages, for example for About page:
// myApp.onPageInit('about', function (page) {
//     // run createContentPage func after link was clicked
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });

/*************************************
**                                  **
**      Here comes the login page   **
**                                  **
*************************************/

function login() {
    // turn on the waiting icon
    document.getElementById("login-content-prompt").style.visibility = "visible"
    document.getElementById("login-content-prompt").innerHTML = '<span style="width:35px; height:35px" class="preloader preloader-white"></span>'

    //get email address
    var email = document.getElementById("username-input").value
    var pw = document.getElementById("pw-input").value
    credentials = {
        "email": email,
        "pw":pw
    }
    //$.post('http://lit-sands-2824.herokuapp.com/',credentials);


    var request = new XMLHttpRequest();
    request.open("GET", 'http://lit-sands-2824.herokuapp.com/', true);
    request.send(null);
    // once there is a feedback, switch page
    request.onreadystatechange = function(){
        if (request.readyState == 4 && request.status == 200) {
            switchpage("home")
    }
}


}
function checkpassword(request){
    if (request.readyState == 4 && request.status == 200) {
        switchpage("home")
    }
}

function wrongpassword() {
    document.getElementById("login-content-prompt").style.visibility = "visible"
}

/*************************************
**                                  **
**          Universal shit          **
**                                  **
*************************************/


function back(){
    switchpage(prepage_id.substring(0, prepage_id.length - 5))
}
function switchpage(page) {
    //set pageid
    prepage_id = currentpage_id
    currentpage_id = page+"_page"
    //display previous page and show current one
    document.getElementById(prepage_id).style.display = "none"
    document.getElementById(currentpage_id).style.display = "block"
    //close the panel if it's open
    myApp.closePanel()
    //load data! 
    loaddata()
}



function loaddata() {
    if (currentpage_id == "restaurant_page"){
        console.log(single_restaurant_array)
        //console.log(restaurant_array)
        // Get restaurant name on navbar
        document.getElementById("navbartitle").innerHTML='<a href="#" class="color-white">'+
        single_restaurant_array["restaurant"]+
        '</a>'
        //load restaurant info card
        loadrestaurantcard(single_restaurant_array)
        //load top three
        loadtopthree(single_restaurant_array["menu"])
        //load menu
        loadmenu(single_restaurant_array["menu"])
    }
    if (currentpage_id == "home_page") {
        query = '{'+
'              "api_key" : "ecc4cdde72c7e50c9f859a71d3408cfa2db8eb8f",'+
'              "fields" : [ "name", "location", "contact" ],'+
'              "venue_queries" : ['+
'                {'+
'                  "location" : {'+
'                    "geo" : {'+
'                      "$in_lat_lng_radius" : [42.4069, -71.1198, 5000]'+
'                    }'+
'                  }'+
'                }'+
'              ]'+
'        }'
        //console.log(query)
        


        rest_list = JSON.parse(multiplerestaurant)
        console.log(rest_list["venues"])

        loadrestaurantlist(rest_list["venues"])
    }
}

/*************************************
**                                  **
**      Here comes the home page    **
**                                  **
*************************************/

function viewrestaurant(id){

    //currentpage_id = "restaurant_page"
    restaurant_list = JSON.parse(multiplerestaurant)

    single_restaurant_array = restaurant_list[id]

    switchpage("restaurant")
}
//
/*** This function loads the restaurant list on home page ***/
//
function loadrestaurantlist(restaurant_array) {
    document.getElementById("restaurant_list").getElementsByTagName("ul")[0].innerHTML=""
    for (i in restaurant_array) {
        id = restaurant_array[i]["restaurantid"]
        document.getElementById("restaurant_list").getElementsByTagName("ul")[0].innerHTML+=""+
        '<li onclick="viewrestaurant('+ i +')"> ' +
            '<a class="item-link item-content"> ' +
                '<div class = "row">' + 
                    '<div class = "col-25">' + 
                        '<img src="..." width="70">' + 
                    '</div>' + 
                    '<div class = "col-75">' +
                        '<div class = "row font-size16">'+ 
                            restaurant_array[i]["name"] + 
                        '</div>' +
                        '<div class = "row font-size12">'+ 
                            restaurant_array[i]["name"] + 
                        '</div>' +
                        '<div class = "row font-size12"">'+ 
                            restaurant_array[i]["name"] + 
                        '</div>' +     
                        '<div class = "row font-size12"">'+ 
                            restaurant_array[i]["name"] + 
                        '</div>' +                       
                    '</div>' +
                '</div>' + 
            '</a>' + 
        '</li>'



     // //    '<div class="item-media"><img src="..." width="60"></div> ' +
     //     '<div class="item-inner"> ' +
     //       '<div class="item-title-row"> ' +
     //         '<div class="item-title font-size14">' + 
     //            restaurant_array[i]["name"] + 
     //         '</div> ' +
     //         '<div class="item-after">$ ' + 
     //            "lol" +
     //         '</div> ' +
     //       '</div> ' +
           
     //        '<div class="item-subtitle font-size12">' + restaurant_array[i]["categories"][0]["name"] + '</div> ' +
     //        '<div class="item-after font-size12">' + restaurant_array[i]["fit"] + "%" + '</div> ' +
     //       '</div> ' +
     //      '</div> ' +
     //    '</div> ' +
     //   '</li> '
    }
}
/*************************************
**                                  **
**  Here comes the restaurant page  **
**                                  **
*************************************/



//
/*** This function loads the restaurant info on restaurant page ***/
//
function loadrestaurantcard(restaurantarray) { 
    document.getElementById("restaurantcard").innerHTML=""
    console.log(document.getElementById("restaurantcard").innerHTML)
    document.getElementById("restaurantcard").innerHTML+="" +
'                <div class="content-block-inner">' +
'                  <div class="row">' +
'                    <div class="col-25">' +
'                      <img class="content-block-inner-pic" src = "logo.jpg"/>' +
'                    </div>' +
'                    <div class="col-75 left-padding-10">' +
'                      <div class="row">' +
'                        <div class="font-bold font-size16">' + restaurantarray["restaurant"]+
'                        </div>' +
'                      </div>' +
'                      <div class="row">' +
'                        <div class="col-50">' +
'                          <img width="80" height="16" src = "new_result.png"/ >' +
'                        </div>' +
'                        <div class="col-50 text-right color-red font-bold"> Score: ' + restaurantarray["fit"]+
'                        </div>' +
'                      </div>' +
'                      <div class="row  color-gray">' +
'                        <div class="col-67 color-gray">' + restaurantarray["address"] +
'                        </div>' +
'                        <div class="col-33 color-gray text-right">' + restaurantarray["distance"] +" mi"+
'                        </div>' +
'                      </div>' +
'                      <div class="row">' +
'                        <div class="text-right color-gray">' + restaurantarray["phone"] +
'                        </div>' +
'                      </div>' +
'                    </div>' +
'                  </div>' +
'                </div>' 


}

//
/*** This function should load next dish if users did not like it ***/
//
function nextdish(id){

     
}

//
/*** This function load the top 3 recommendation ***/
//
function loadtopthree(menuArray) {
    menuArray.sort(function(a,b) {return (a.fit > b.fit) ? -1 : ((b.fit > a.fit) ? 1 : 0);})
    sorted_menu = menuArray
    ul_list = document.getElementById("recommendationlist").getElementsByTagName("ul")[0].innerHTML
    ul_list = ""
    for (toprec_index = 0; toprec_index < 2; toprec_index++) {
        ul_list +=    '<li class="swipeout"> ' +
                        '<div class="swipeout-content item-content" id = "recommend' + toprec_index+'"> ' +
                         '<div class="item-media"><img src="..." width="80"></div> ' +
                         '<div class="item-inner"> ' +
                           '<div class="item-title-row"> ' +
                             '<div class="item-title">' + menuArray[toprec_index]["title"] + '</div> ' +
                            '<div class="item-after">$ ' + menuArray[toprec_index]["price"] +'</div> ' +
                            '</div> ' +
                            '<div class="item-title-row"> ' +
                              '<div class="item-subtitle">' + menuArray[toprec_index]["type"] + '</div> ' +
                              '<div class="item-after">' + menuArray[toprec_index]["fit"] + "%" + '</div> ' +
                            '</div> ' +
                            '<div class="item-text">' + menuArray[toprec_index]["description"] + '</div> ' +
                          '</div> ' +
                        '</div> ' +
                        '<div class="swipeout-actions-right"> ' +
                         '<a href="#"  class="action1 bg-red"></a> ' +
                          '<a href="#"  class="swipeout-delete swipeout-overswipe nextdish">Nope! </a>'
                        '</div> ' +
                        '<div class="swipeout-actions-left"> ' +
                          '<a href="#"  class="action1 bg-green">hmmm</a> ' +
                        '</div> ' +
                      '</li> '
    }
    document.getElementById("recommendationlist").getElementsByTagName("ul")[0].innerHTML = ul_list
}

//
/*** This function load the menu ***/
//

function loadmenu(menuArray){
    var style = {}
    var list = []
    index = 0
    for ( i in menuArray ) {
        if ( !(menuArray[i]["type"] in style)) {
            style[menuArray[i]["type"]]=[]
        }
        style[menuArray[i]["type"]].push(menuArray[i])
    }
    document.getElementById("menulist").getElementsByTagName("ul")[0].innerHTML=""
    for ( i in style ) {
        //
        // Single food style
        //
        ul_list = document.getElementById("menulist").getElementsByTagName("ul")[0]
 
        var li_list = createHTMLElement(li_list, 'li', "accordion-item", ul_list)
        
        var a_style_title = createHTMLElement(a_style_title, 'a', "item-content item-link", li_list)
        a_style_title.id = i
        list.push(i)
        // // solution 
        // // http://developer.appcelerator.com/question/84241/dynamically-assign-listener-to-button
        // document.getElementById(i).addEventListener('click', 
        //     function(i) {
        //         console.log(i.y)
        //         window.scroll(0, -i.y)
        //     }, false);

        var div_item_inner = createHTMLElement(div_item_inner, 'div', "item-inner", a_style_title)
        var div_item_title = createHTMLElement(div_item_title, 'div', "item-title", div_item_inner)
        div_item_title.innerHTML = i
        var div_accordion_item_content = createHTMLElement(div_accordion_item_content, 'div', "accordion-item-content", li_list)
        var div_list_block = createHTMLElement(div_list_block, 'div', "list-block media-list", div_accordion_item_content)
        var ul_list_2 = createHTMLElement(ul_list_2, 'ul', "" , div_list_block)
        for ( j in style[i] ) {
            //
            // Single dish
            //
            var li_swipe_out = createHTMLElement(li_swipe_out, 'li', "swipeout", ul_list_2)
            var div_swipe_out = createHTMLElement(div_swipe_out, 'div', "swipeout-content item-content", li_swipe_out)
            var div_picture = createHTMLElement(div_picture, 'div', "item-media border-round", div_swipe_out)
            div_picture.innerHTML = '<img src'+ '"..."' + ' width="80" height="80">'
            var div_item_inner = createHTMLElement(div_item_inner, 'div', "item-inner", div_swipe_out)
            var div_item_title_row = createHTMLElement(div_item_title_row, 'div', "item-title-row", div_item_inner)
            var div_item_title_dish = createHTMLElement(div_item_title_dish, 'div', "item-title", div_item_title_row)
            div_item_title_dish.innerHTML = "Salmon"
            var div_item_after = createHTMLElement(div_item_after, 'div', "item-after", div_item_title_row)
            div_item_after.innerHTML = '$' + style[i][j]["price"]
            var div_item_subtitle = createHTMLElement(div_item_subtitle, 'div', "item-subtitle", div_item_inner)
            div_item_subtitle.innerHTML = i
            var div_item_text = createHTMLElement(div_item_text, 'div', "item-text", div_item_inner)
            div_item_text.innerHTML = style[i][j]["description"]
            //
            // Swipe action
            //
            var div_swipe_out_right = createHTMLElement(div_swipe_out_right, 'div', "swipeout-actions-right", li_swipe_out)
            var addaction = createHTMLElement(addaction, 'a', "action1 bg-green", div_swipe_out_right)
            addaction.innerHTML = "Add"
            addaction.href = "#"
            var div_swipe_out_left = createHTMLElement(div_swipe_out_left, 'div', "swipeout-actions-left", li_swipe_out)
            var nextaction = createHTMLElement(nextaction, 'a', "action1 bg-red",div_swipe_out_left)
            nextaction.innerHTML = "Nope..."
            nextaction.href = "#"
        }   
    }
}
// Use JS to create HTML element
function createHTMLElement (name, element, classname, parent){
    var name = document.createElement(element)
    name.className = classname
    parent.appendChild(name)
    return name
}


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

$$('.swipeout-delete').on('click', function () {
    console.log(sorted_menu)
    elem = document.getElementById("recommend"+id)
    console.log(document.getElementById("recommendationlist").getElementsByTagName("ul")[0].innerHTML)
    ul_list = document.getElementById("recommendationlist").getElementsByTagName("ul")[0].innerHTML
    ul_list += '<li class="swipeout"> ' +
                        '<div class="swipeout-content item-content" id = "recommend' + toprec_index+'"> ' +
                         '<div class="item-media"><img src="..." width="80"></div> ' +
                         '<div class="item-inner"> ' +
                           '<div class="item-title-row"> ' +
                             '<div class="item-title">' + sorted_menu[toprec_index]["title"] + '</div> ' +
                            '<div class="item-after">$ ' + sorted_menu[toprec_index]["price"] +'</div> ' +
                            '</div> ' +
                            '<div class="item-title-row"> ' +
                              '<div class="item-subtitle">' + sorted_menu[toprec_index]["type"] + '</div> ' +
                              '<div class="item-after">' + sorted_menu[toprec_index]["fit"] + "%" + '</div> ' +
                            '</div> ' +
                            '<div class="item-text">' + sorted_menu[toprec_index]["description"] + '</div> ' +
                          '</div> ' +
                        '</div> ' +
                        '<div class="swipeout-actions-right"> ' +
                         '<a href="#"  class="action1 bg-red"></a> ' +
                          '<a href="#"  class="swipeout-delete swipeout-overswipe nextdish">Nope! </a>'
                        '</div> ' +
                        '<div class="swipeout-actions-left"> ' +
                          '<a href="#"  class="action1 bg-green">hmmm</a> ' +
                        '</div> ' +
                      '</li> '
    document.getElementById("recommendationlist").getElementsByTagName("ul")[0].innerHTML = ul_list  
    toprec_index++     
});
