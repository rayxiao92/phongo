//var singlerestaurant = '{"restaurant":"Tamper Cafe", "restaurantid":"0075", "star":"5", "fit":"88", "address":"340 Boston Ave", "distance":"0.3", "phone":"617-800-1234", "recommend":[{"dishid":"1234", "title":"Salmon Sushi","type":"sushi","fit":"97","description":"This is not bad","price":"15"}, {"dishid":"1235", "title":"Yellowtail","type":"sushi","fit":"93","description":"This is not bad, too","price":"13"}, {"dishid":"1236", "title":"Udon","type":"Noodle","fit":"71","description":"LOL udon","price":"11"} ] "menu":[{"dishid":"1234", "title":"Salmon Sushi","type":"sushi","fit":"97","description":"This is not bad","price":"15"}, {"dishid":"1235", "title":"Yellowtail","type":"sushi","fit":"93","description":"This is not bad, too","price":"13"}, {"dishid":"1236", "title":"Udon","type":"Noodle","fit":"71","description":"LOL udon","price":"11"} ] } '
var singlerestaurant = '{"restaurant": "Tamper Cafe", "restaurantid": "0075", "star": "5", "fit": "88", "address": "340 Boston Ave", "distance": "0.3", "phone": "617-800-1234", "recommend": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ], "menu": [{"dishid": "1234", "title": "Salmon Sushi", "type": "sushi", "fit": "97", "description": "This is not bad", "price": "15"}, {"dishid": "1235", "title": "Yellowtail", "type": "sushi", "fit": "93", "description": "This is not bad, too", "price": "13"}, {"dishid": "1236", "title": "Udon", "type": "Noodle", "fit": "71", "description": "LOL udon", "price": "11"} ] }'// Initialize your app
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


function loaddata() {
    restaurant_array=JSON.parse(singlerestaurant)
    console.log(restaurant_array)
    // Get restaurant name on navbar
    document.getElementById("navbartitle").innerHTML='<a href="#" class="color-white">'+
    restaurant_array["restaurant"]+
    '</a>'

    //load top three

    //load menu
    loadmenu(restaurant_array["menu"])
}

function loadmenu(menuArray){
    var style = {}
    console.log(menuArray)
    for ( i in menuArray ) {
        if ( !(menuArray[i]["type"] in style)) {
            style[menuArray[i]["type"]]=[]
        }
        style[menuArray[i]["type"]].push(menuArray[i])
    }
    console.log(style)
    for ( i in style ) {
        ul_list = document.getElementById("menulist").getElementsByTagName("ul")[0]
        var li_list = createHTMLElement(li_list, 'li', "accordion-item", ul_list)
        var a_style_title = createHTMLElement(a_style_title, 'a', "item-content item-link", li_list)
        a_style_title.href = "#"
        var div_item_inner = createHTMLElement(div_item_inner, 'div', "item-inner", a_style_title)
        var div_item_title = createHTMLElement(div_item_title, 'div', "item-title", div_item_inner)
        div_item_title.innerHTML = i
        var div_accordion_item_content = createHTMLElement(div_accordion_item_content, 'div', "accordion-item-content", li_list)
        var div_list_block = createHTMLElement(div_list_block, 'div', "list-block media-list", div_accordion_item_content)
        var ul_list_2 = createHTMLElement(ul_list_2, 'ul', "" , div_list_block)
        for ( j in style[i] ) {
            var li_swipe_out = createHTMLElement(li_swipe_out, 'li', "swipeout", ul_list_2)
            var div_swipe_out = createHTMLElement(div_swipe_out, 'div', "swipeout-content item-content", li_swipe_out)
            var div_picture = createHTMLElement(div_picture, 'div', "item-media", div_swipe_out)
            div_picture.innerHTML = '<img src'+ style[i][j]["picture"] + ' width="80" >'
            var div_item_inner = createHTMLElement(div_item_inner, 'div', "item-inner", div_swipe_out)
            var div_item_title_row = createHTMLElement(div_item_title_row, 'div', "item-title-row", div_item_inner)
            var div_item_title_dish = createHTMLElement(div_item_title_dish, 'div', "item-title", div_item_title_row)
            div_item_title_dish.innerHTML = "Salmon"
            var div_item_after = createHTMLElement(div_item_after, 'div', "item-after", div_item_title_row)
            div_item_after.innerHTML = '$' + style[i][j]["price"]
            var div_item_subtitle = createHTMLElement(div_item_subtitle, 'div', "item-subtitle", div_item_inner)
            div_item_subtitle.innerHTML = i
            var div_item_text = createHTMLElement(div_item_text, 'div', "item-text", div_item_inner)
            div_item_text.innerHTML = "lol"

            var div_swipe_out_right = createHTMLElement(div_swipe_out_right, 'div', "swipeout-actions-right", div_swipe_out)
            var addaction = createHTMLElement(addaction, 'a', "action1 bg-green", div_swipe_out_right)
            addaction.innerHTML = "Add"
            var div_swipe_out_left = createHTMLElement(div_swipe_out_left, 'div', "swipeout-actions-left", div_swipe_out)
            var nextaction = createHTMLElement(nextaction, 'a', "action1 bg-red",div_swipe_out_left)
            nextaction.innerHTML = "Nope..."
        }   
    }
    console.log(menulist)
}

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