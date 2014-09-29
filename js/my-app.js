//var singlerestaurant = '{"restaurant":"Tamper Cafe", "restaurantid":"0075", "star":"5", "fit":"88", "address":"340 Boston Ave", "distance":"0.3", "phone":"617-800-1234", "recommend":[{"dishid":"1234", "title":"Salmon Sushi","type":"sushi","fit":"97","description":"This is not bad","price":"15"}, {"dishid":"1235", "title":"Yellowtail","type":"sushi","fit":"93","description":"This is not bad, too","price":"13"}, {"dishid":"1236", "title":"Udon","type":"Noodle","fit":"71","description":"LOL udon","price":"11"} ] "menu":[{"dishid":"1234", "title":"Salmon Sushi","type":"sushi","fit":"97","description":"This is not bad","price":"15"}, {"dishid":"1235", "title":"Yellowtail","type":"sushi","fit":"93","description":"This is not bad, too","price":"13"}, {"dishid":"1236", "title":"Udon","type":"Noodle","fit":"71","description":"LOL udon","price":"11"} ] } '
//var singlerestaurant = '{"restaurant": "Tamper Cafe", "restaurantid": "0075", "star": "5", "fit": "88", "address": "340 Boston Ave", "distance": "0.3", "phone": "617-800-1234", "recommend": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ], "menu": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ] }'// Initialize your app
var single_restaurant_array =""
var toprec_index=0
var currentorder = ''
var multiplerestaurant = '[{"restaurant": "Tampee Cafe", "restaurantid": "abcd", "star": "5", "fit": "88", "address": "340 Boston Ave", "distance": "0.3", "phone": "617-800-1234", "recommend": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ], "menu": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ] }, {"restaurant": "Tamper Cafe", "restaurantid": "abce", "star": "5", "fit": "88", "address": "340 Boston Ave", "distance": "0.3", "phone": "617-800-1234", "recommend": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ], "menu": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ] } ]'
var prepage_id = ""
var currentpage_id = "home_page"
var sorted_menu= ""
//var myApp = new Framework7();
var myApp = new Framework7({
    swipePanel: 'left',
    pushState: true
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

//add order

function removeClass(className, e) {
    var classes = className.split(' ');
    console.log(e.classList)
    for (var i = 0; i < classes.length; i++) {
        e.classList.remove(classes[i]);
    }
    return e;
}
function addClass(className, e) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i++) {
        e.classList.remove(classes[i]);
    }
    return e;
}

function back(){
    switchpage(prepage_id.substring(0, prepage_id.length - 5))
}
function switchpage(page) {
        prepage_id = currentpage_id
    currentpage_id = page+"_page"
    document.getElementById(prepage_id).style.display = "none"
    document.getElementById(currentpage_id).style.display = "block"
    myApp.closePanel()
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
        rest_list = JSON.parse(multiplerestaurant)
        loadrestaurantlist(rest_list)
    }
}
function viewrestaurant(id){

    //currentpage_id = "restaurant_page"
    restaurant_list = JSON.parse(multiplerestaurant)

    single_restaurant_array = restaurant_list[id]

    switchpage("restaurant")
}
function loadrestaurantlist(restaurant_array) {
    document.getElementById("restaurant_list").getElementsByTagName("ul")[0].innerHTML=""
    for (i in restaurant_array) {
        id = restaurant_array[i]["restaurantid"]
        document.getElementById("restaurant_list").getElementsByTagName("ul")[0].innerHTML+=""+
       '<li onclick="viewrestaurant('+ i +')"> ' +
        '<div class="swipeout-content item-content"> ' +
         '<div class="item-media"><img src="..." width="80"></div> ' +
         '<div class="item-inner"> ' +
           '<div class="item-title-row"> ' +
             '<div class="item-title">' + 
                restaurant_array[i]["restaurant"] + 
             '</div> ' +
             '<div class="item-after">$ ' + 
                "lol" +
             '</div> ' +
           '</div> ' +
           '<div class="item-title-row"> ' +
             '<div class="item-subtitle">' + restaurant_array[i]["styl"] + '</div> ' +
             '<div class="item-after">' + restaurant_array[i]["fit"] + "%" + '</div> ' +
           '</div> ' +
           '<div class="item-text">' + 
                "lol" + 
           '</div> ' +
          '</div> ' +
        '</div> ' +
       '</li> '
    }
}
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
function nextdish(id){

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
                          '<a href="#" onclick="nextdish('+toprec_index+')" class="action1 bg-red">nah</a> ' +
                          '<a href="#" onclick="nextdish('+toprec_index+')" class="swipeout-delete swipeout-overswipe">Nope! </a>'
                        '</div> ' +
                        '<div class="swipeout-actions-left"> ' +
                          '<a href="#" onclick="order('+toprec_index+')" class="action1 bg-green">hmmm</a> ' +
                        '</div> ' +
                      '</li> '
    document.getElementById("recommendationlist").getElementsByTagName("ul")[0].innerHTML = ul_list  
        toprec_index++          
}
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
                //          '<a href="#" onclick="nextdish('+toprec_index+')" class="action1 bg-red">nah</a> ' +
                          '<a href="#" onclick="nextdish('+toprec_index+')" class="swipeout-delete swipeout-overswipe">Nope! </a>'
                        '</div> ' +
                        '<div class="swipeout-actions-left"> ' +
                          '<a href="#" onclick="order('+toprec_index+')" class="action1 bg-green">hmmm</a> ' +
                        '</div> ' +
                      '</li> '
    }
    document.getElementById("recommendationlist").getElementsByTagName("ul")[0].innerHTML = ul_list
}
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