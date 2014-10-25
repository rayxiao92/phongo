var single_restaurant_array =""
var toprec_index=0
var currentorder = ''
var multiplerestaurant = '{"status": "success", "http_status": 200, "venues": [{"locu_id": "006c651feb434affb3a7", "name": "The Hideout", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "nightlife", "name": "Nightlife"}, {"str_id": "pubs", "name": "Pubs"}]}, {"name": "Bistro 5", "open_hours": {"tuesday": [["17:00", "22:00"]], "friday": [["17:00", "22:00"]], "saturday": [["17:00", "22:00"]], "thursday": [["17:00", "22:00"]], "wednesday": [["17:00", "22:00"]]}, "locu_id": "00a5e98b8536c95f37ae", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "french", "name": "French"}]}, {"locu_id": "00aecdec64ae0cad364d", "name": "Crazy Dough\'s Pizza", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "pizza", "name": "Pizza"}]}, {"name": "Wet Paint Nail Spa", "open_hours": {"sunday": [["12:00", "18:00"]], "monday": [["14:00", "20:00"]], "tuesday": [["11:00", "20:00"]], "friday": [["10:00", "19:00"]], "wednesday": [["10:00", "19:00"]], "thursday": [["10:00", "19:00"]], "saturday": [["10:00", "16:00"]]}, "locu_id": "00da445483aa635f000c", "categories": [{"str_id": "spas", "name": "Day Spas"}, {"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"name": "Good Food Cafe", "open_hours": {"sunday": [["08:00", "14:00"]], "tuesday": [["06:00", "14:00"]], "friday": [["06:00", "14:00"]], "wednesday": [["06:00", "14:00"]], "thursday": [["06:00", "14:00"]], "saturday": [["07:00", "14:00"]]}, "locu_id": "010717df18f8a9c82c87", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "food", "name": "Food"}]}, {"locu_id": "013eedec51353f9ea3b9", "name": "The Painted Burro", "categories": [{"str_id": "mexican", "name": "Mexican"}, {"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "0153014354ee1e232418", "name": "The western front", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "divebars", "name": "Dive Bars"}, {"str_id": "nightlife", "name": "Nightlife"}]}, {"locu_id": "0162c81b75b56b1e5a2a", "name": "Mix Flavor Brazilian Grill", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "brazilian", "name": "Brazilian"}]}, {"name": "Precinct", "open_hours": {"sunday": [["11:30", "01:00"]], "monday": [["16:00", "01:00"]], "tuesday": [["16:00", "01:00"]], "friday": [["16:00", "02:00"]], "wednesday": [["16:00", "01:00"]], "thursday": [["16:00", "01:00"]], "saturday": [["11:30", "02:00"]]}, "locu_id": "01e46fc0d651a11f50d5", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "pubs", "name": "Pubs"}, {"str_id": "nightlife", "name": "Nightlife"}]}, {"locu_id": "020a51b770fe1ef36db0", "name": "Brunello Bistro", "categories": [{"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "02120f7addb1dda387d0", "name": "Tavern", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "tradamerican", "name": "Traditional American"}]}, {"name": "Taipei Tokyo Cafe", "open_hours": {"sunday": [["12:00", "09:00"]], "monday": [["11:00", "21:30"]], "tuesday": [["11:00", "21:30"]], "friday": [["11:00", "22:00"]], "wednesday": [["11:00", "21:30"]], "thursday": [["11:00", "21:30"]], "saturday": [["11:00", "22:00"]]}, "locu_id": "023a607fd75c6aac6589", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "japanese", "name": "Japanese"}]}, {"locu_id": "02d2ac37bf2c353f090f", "name": "Cafe Deia", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "coffee", "name": "Coffee & Tea"}, {"str_id": "food", "name": "Food"}, {"str_id": "breakfast_brunch", "name": "Breakfast & Brunch"}]}, {"locu_id": "031a574209edf1e0ccc2", "name": "Tenoch Mexican Taqueria", "categories": [{"str_id": "mexican", "name": "Mexican"}, {"str_id": "restaurants", "name": "Restaurants"}]}, {"name": "Starbucks", "open_hours": {"sunday": [["06:00", "21:00"]], "monday": [["05:30", "21:00"]], "tuesday": [["05:30", "21:00"]], "friday": [["05:30", "21:00"]], "wednesday": [["05:30", "21:00"]], "thursday": [["05:30", "21:00"]], "saturday": [["06:00", "21:00"]]}, "locu_id": "036334e8fff0c1fddc72", "categories": [{"str_id": "coffee", "name": "Coffee & Tea"}, {"str_id": "food", "name": "Food"}]}, {"locu_id": "03926df0bf70ec18c4d9", "name": "Sarma", "categories": [{"str_id": "other", "name": "Other"}]}, {"locu_id": "03998286559a065bbe52", "name": "Nick\'s Kitchen", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "hotdog", "name": "Hot Dogs"}]}, {"locu_id": "03cc11c0207197c9a896", "name": "Prime Turbine", "categories": [{"str_id": "appliances", "name": "Appliances"}, {"str_id": "shopping", "name": "Shopping"}, {"str_id": "homeandgarden", "name": "Home & Garden"}]}, {"name": "Nails & Co", "open_hours": {"sunday": [["10:00", "16:00"]], "monday": [["10:00", "20:00"]], "tuesday": [["10:00", "20:00"]], "friday": [["10:00", "20:00"]], "wednesday": [["10:00", "20:00"]], "thursday": [["10:00", "20:00"]], "saturday": [["09:00", "19:00"]]}, "locu_id": "03f549e535e818749eb7", "categories": [{"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"locu_id": "03fed3765a31aea48dbc", "name": "Chipotle Mexican Grill", "categories": [{"str_id": "other", "name": "Other"}]}, {"locu_id": "04018e63b6f2a5eb300a", "name": "Brazilian Ipanema Hair Salon", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "brazilian", "name": "Brazilian"}]}, {"name": "Asmara", "open_hours": {"sunday": [["17:00", "22:30"]], "friday": [["11:30", "15:00"], ["17:00", "23:30"]], "thursday": [["17:00", "22:30"]], "saturday": [["11:30", "23:30"]], "monday": [["11:30", "15:00"], ["17:00", "22:30"]]}, "locu_id": "04057d9e97ddcf762636", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "ethiopian", "name": "Ethiopian"}]}, {"locu_id": "04701ec2d80e374ace0b", "name": "Sal\'s Beauty Salon", "categories": [{"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"locu_id": "04747545f9fa08932c3e", "name": "A Taste of Sahara", "categories": [{"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "047ae97bc0458970f1c1", "name": "Greenhouse Cafe", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "food", "name": "Food"}]}]}'
var multiplerestaurant = '{"status": "success", "http_status": 200, "venues": [{"menus": [{"menu_name": "A La Carte", "sections": [{"subsections": [{"subsection_name": "", "contents": [{"text": "Designed to pair perfectly with our house made focaccia bread.", "type": "SECTION_TEXT"}, {"price": "7.00", "type": "ITEM", "name": "Truffled Butter"}, {"price": "6.00", "type": "ITEM", "name": "Marinated Olives"}, {"price": "6.00", "type": "ITEM", "name": "White Anchovies and Fennel-Orange Salad"}, {"price": "6.00", "type": "ITEM", "name": "House-Made Fresh Ricotta, Evoo and Lemon Zest"}, {"price": "8.00", "type": "ITEM", "name": "Salt Cod Arancini with Heirloom Tomato Sauce"}]}], "section_name": "Piattini\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "12.00", "type": "ITEM", "description": "Semolina coated, sweet & spicy tomato chutney pickled chilies and lemon aioli", "name": "Calamari"}, {"price": "15.00", "type": "ITEM", "description": "White asparagus, leeks, lobster reduction and truffled frisee", "name": "Lobster Risotto"}, {"price": "12.00", "type": "ITEM", "description": "Foie gras creme brulee, quince gelee and toasted brioche", "name": "House Cured Duck Prosciutto"}, {"price": "11.00", "type": "ITEM", "description": "Pistachio aillade and spiced cr\u00e9me fra\u00eeche", "name": "Watercress Soup"}, {"price": "10.00", "type": "ITEM", "description": "Black truffle coulis, herbed goat cheese and truffled honey", "name": "Warm Golden Beets"}, {"price": "10.00", "type": "ITEM", "description": "Pickled wright\u200f locke farm vegetables and basil vinaigrette", "name": "Mixed Greens"}]}], "section_name": "Appetizers"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "25.00", "type": "ITEM", "description": "Boar ragu, kalamata olives and ricotta", "name": "Tagliatelle"}, {"price": "25.00", "type": "ITEM", "description": "Squid ink and saffron spaghetti, clams, calamari, baby octopus, capers, green olives and plum tomatoes", "name": "Spaghetti Alla Chitarra"}, {"price": "23.00", "type": "ITEM", "description": "Organic mushrooms, truffled panko and parmigiano", "name": "Gnocchi"}]}], "section_name": "Handmade Pastas\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "27.00", "type": "ITEM", "description": "Ginger-kuri squash pur\u00e9e, braised endive and kumquat vinaigrette", "name": "Faroe Island Salmon"}, {"price": "27.00", "type": "ITEM", "description": "Carrot risotto and proscuitto bits", "name": "Sea Scallops"}, {"price": "29.00", "type": "ITEM", "description": "Confit leg with white bean-fennel ragu; seared loin with speck proscuitto and raddichio", "name": "Rabbit"}, {"price": "23.00", "type": "ITEM", "description": "Meyer lemon sauce, broccoli rabe, carmelized onions and fingerling potatoes", "name": "Free Range Chicken"}, {"price": "32.00", "type": "ITEM", "description": "Pommes dauphinoise,\u200f swiss chard, oyster mushrooms and rosemary demi glace", "name": "Grilled Strip Steak"}, {"price": "29.00", "type": "ITEM", "description": "Pistachio-panko bread crumbs, garlic mashed potatoes, porcini mushroom sauce and zucchini", "name": "Veal Milanese"}]}], "section_name": "Entrees"}], "currency_symbol": "$"}, {"menu_name": "Chef\u0027s Tasting", "sections": [{"subsections": [{"subsection_name": "", "contents": [{"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2012 Pine Ridge, Chenin Blanc, Napa"}]}], "type": "ITEM", "description": "Watercress, pistachio and spiced creme fraiche", "name": "Soup"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2011 Le Salse, Verdiccio, Matelica"}]}], "type": "ITEM", "description": "Poached with haddock and saffron nage", "name": "Oysters"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2012 Domaine Brazilier, Ros\u00e9 (pinot D\u0027aunis), Coteaux Du Vendomois"}]}], "type": "ITEM", "description": "Sardinian couscous, clams, baby squid and heirloom tomatoes", "name": "Fregola"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2009 Jones Family, Cabernet Sauvignon, Washington State"}]}], "type": "ITEM", "description": "Coffee braised shank with bone marrow and spicy panko", "name": "Beef Shank"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2012 Zagara, MoscatD d\u2019asti"}]}], "type": "ITEM", "description": "Greek yogurt and vanilla bean with quince, honey and orange zest", "name": "Panna Cotta"}]}], "section_name": ""}], "currency_symbol": "$"}, {"menu_name": "Dessert", "sections": [{"subsections": [{"subsection_name": "", "contents": [{"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "compote Offley\u2019s 10 Year Old Tawny Port"}]}], "type": "ITEM", "description": "Vanilla-mascarpone custard with blueberry", "name": "Creme Brulee"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2012 Zagara, Moscato D\u2019asti"}]}], "type": "ITEM", "description": "Chocolate ganache & vanilla bean gelato", "name": "Profiteroles"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "Boston Bual \u201cHistoric Series\u201d Madeira"}]}], "type": "ITEM", "description": "Kuri squash gelato, golden raisins & almond crust", "name": "Apple Crisp"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2011 Elio Perrone \u2018Bigar\u00f2\u2019, Brachetto d\u2019Aqui"}]}], "type": "ITEM", "description": "Flourless chocolate cake with ginger-caramel cream; chocolate sorbet with sesame-orange tuille; hot mexican chocolate with mini marshmallow", "name": "Chocolate Trio"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2006 FrescoBaldi, Vin Santo"}]}], "type": "ITEM", "description": "Almond or Chocolate", "name": "Biscotti"}, {"type": "ITEM", "description": "Almond cookie\u200f served with traditional dessert wine", "name": "Biscotti e Vin Santo"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "Pedro Ximenez, Sherry, Barbadillo"}]}], "type": "ITEM", "description": "Selection of three ripe cheeses", "name": "Cheese Plate"}]}], "section_name": "Desserts and Pairings\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "10.00", "type": "ITEM", "name": "2007 Pacific Rim, Riesling, Vin de Glaciere"}, {"price": "12.00", "type": "ITEM", "name": "2006 FrescoBaldi, Vin Santo"}, {"price": "9.00", "type": "ITEM", "name": "2010 Elio Perrone \u2018Bigar\u00f2\u2019, Brachetto d\u2019Aqui"}, {"price": "9.00", "type": "ITEM", "name": "2009 Zagara, Moscato d\u2019Asti"}, {"price": "10.00", "type": "ITEM", "name": "2008 The Stump Jump \u201cSticky Chardonnay\u201d"}, {"price": "12.00", "type": "ITEM", "name": "2003 Castelnau de Suduirant, Sauternes"}]}], "section_name": "Dessert Wines"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "9.00", "type": "ITEM", "name": "Pedro Ximenez, La Cilla, Sherry"}, {"price": "9.00", "type": "ITEM", "name": "Graham\u0027s Six Grape Ruby Port"}, {"price": "10.00", "type": "ITEM", "name": "Offley\u0027s 10-Year Old Tawny Port"}, {"price": "10.00", "type": "ITEM", "name": "2001 Dow\u0027s LBV Ruby Port"}, {"price": "12.00", "type": "ITEM", "name": "Taylor 20-Year Old Tawny Port"}]}], "section_name": "Port, Sherry & Madiera\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"type": "ITEM", "name": "Scotch"}, {"type": "ITEM", "name": "Cordials"}, {"type": "ITEM", "name": "Dewar\u2019s White"}, {"type": "ITEM", "name": "Grappa di Barolo"}, {"type": "ITEM", "name": "Johnnie Walker Black"}, {"type": "ITEM", "name": "Amaro di Montenegro"}, {"type": "ITEM", "name": "Laphroiag 10 year"}, {"type": "ITEM", "name": "Fernet Branca"}, {"type": "ITEM", "name": "Macallan 12 year"}, {"type": "ITEM", "name": "Cynar"}, {"type": "ITEM", "name": "Glenlivet 12 year"}, {"type": "ITEM", "name": "Sambuca (Black or White)"}, {"type": "ITEM", "name": "Bourbon"}, {"type": "ITEM", "name": "Frangelico"}, {"type": "ITEM", "name": "Southern Comfort"}, {"type": "ITEM", "name": "Kahlua"}, {"type": "ITEM", "name": "Maker\u2019s Mark"}, {"type": "ITEM", "name": "Bailey\u2019s"}, {"type": "ITEM", "name": "Bulleit"}, {"type": "ITEM", "name": "Amaretto di Amore"}, {"type": "ITEM", "name": "Blanton\u2019s"}, {"type": "ITEM", "name": "Capucello Chocolate Cream"}, {"type": "ITEM", "name": "Limoncello"}, {"type": "ITEM", "name": "Whiskey & Rye"}, {"type": "ITEM", "name": "Saint Germain"}, {"type": "ITEM", "name": "Crown Royal"}, {"type": "ITEM", "name": "Domaine de Canton"}, {"type": "ITEM", "name": "Jack Daniel\u2019s"}, {"type": "ITEM", "name": "Grand Marnier"}, {"type": "ITEM", "name": "Bulliet Rye"}, {"type": "ITEM", "name": "Grand Marnier 150th Anniversary"}]}], "section_name": "Cordials & More"}], "currency_symbol": "$"}, {"menu_name": "Wines", "sections": [{"subsections": [{"subsection_name": "", "contents": [{"text": "Bottled", "type": "SECTION_TEXT"}, {"price": "5.00", "type": "ITEM", "name": "Amstel Light, Holland"}, {"price": "10.00", "type": "ITEM", "name": "Chimay Rouge, Belgium"}, {"price": "5.00", "type": "ITEM", "name": "Buckler Non-Alcoholic, Holland"}, {"text": "Draught", "type": "SECTION_TEXT"}, {"price": "8.00", "type": "ITEM", "name": "Whale\u0027s Tale Pale Ale, Cisco Brewing, Nantucket"}, {"price": "8.00", "type": "ITEM", "name": "Fisherman\u0027s Ale, Cape Ann"}, {"price": "9.00", "type": "ITEM", "name": "Green Flash IPA, San Diego"}, {"price": "9.00", "type": "ITEM", "name": "Founder\u0027s Outmeal Breakfast Stout, Grand Rapids"}]}], "section_name": "Beer\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "45.00", "type": "ITEM", "name": "2010 Silverado, Cabernet, Napa Valley"}, {"price": "25.00", "type": "ITEM", "name": "2007 Cantina Fratelli Pardi, Montefalco Rosso"}]}], "section_name": "Half Bottles"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "45.00", "type": "ITEM", "description": "Half", "name": "N.V. Nicolas Feuillatte, Champagne"}, {"price": "48.00", "type": "ITEM", "description": "Half", "name": "N.V. Ayala Brut Majeur, Champagne"}, {"price": "30.00", "type": "ITEM", "name": "N.V. Il Faggeto, Prosecco, Veneto"}, {"price": "43.00", "type": "ITEM", "name": "N.V. Carpene Malvolti, Prosecco di Conegliano"}, {"price": "56.00", "type": "ITEM", "name": "2005 Westport Rivers, Sparkling Wine, Westport"}, {"price": "74.00", "type": "ITEM", "name": "N.V. Nicolas Feuillatte"}, {"price": "80.00", "type": "ITEM", "name": "N.V. Ayala Brut Majeur"}, {"price": "85.00", "type": "ITEM", "name": "N.V. Perrier Jouet, Grand Brut"}, {"price": "95.00", "type": "ITEM", "name": "N.V. Taittinger Brut"}, {"price": "120.00", "type": "ITEM", "name": "N.V. Perrier Jouet, Blason Rose"}]}], "section_name": "Sparkling Wines & Champagne\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "32.00", "type": "ITEM", "name": "2012 Domaine Brazilier, C\u00f4teaux du Vend\u00f4mois"}, {"price": "29.00", "type": "ITEM", "name": "2012 Artazuri, Garnacha, Spain"}]}], "section_name": "Rose"}, {"subsections": [{"subsection_name": "Around the World", "contents": [{"price": "29.00", "type": "ITEM", "name": "Huber Hugo, Gr\u00fcner Veltliner, Austria"}, {"price": "32.00", "type": "ITEM", "name": "2013 Montes, Sauvignon Blanc, Chile"}, {"price": "36.00", "type": "ITEM", "name": "2012 Loosen Brother\u0027s, Dr. L, Riesling"}]}, {"subsection_name": "France", "contents": [{"price": "33.00", "type": "ITEM", "name": "2012 Domaine F\u00e9lines Jourdan, Picpoul de Pinet"}, {"price": "36.00", "type": "ITEM", "name": "2011 Larochette Manciat, M\u00e2con Les Morizottes"}, {"price": "42.00", "type": "ITEM", "name": "2011 Domaine du Saint Pierre, Sancerre"}, {"price": "58.00", "type": "ITEM", "name": "2010 Domaine du Vieux Lazaret, Ch\u00e2teauneuf du Pape"}, {"price": "90.00", "type": "ITEM", "name": "2010 Louis Latour, Puligny-Montrachet"}, {"price": "90.00", "type": "ITEM", "name": "2010 Olivier Leflaive, Puligny-Montrachet"}]}, {"subsection_name": "Italy", "contents": [{"price": "29.00", "type": "ITEM", "name": "2010 Ca\u2019 Stella, Pinot Grigio, Fruili"}, {"price": "30.00", "type": "ITEM", "name": "2012 Aragosta, Vermentino, Sardegna"}, {"price": "38.00", "type": "ITEM", "name": "2010 Feudi di San Gregorio, Falanghina, Campania"}, {"price": "38.00", "type": "ITEM", "name": "2010 Le Bruniche, Chardonnay, Toscana"}, {"price": "30.00", "type": "ITEM", "name": "2012 Le Salse, Verdicchio, Matelica"}, {"price": "49.00", "type": "ITEM", "name": "2011 Bruno Giacosa, Arneis, Piemonte"}]}, {"subsection_name": "U.S.", "contents": [{"price": "33.00", "type": "ITEM", "name": "2012 Pine Ridge, Chenin Blanc-Viognier, Napa Valley"}, {"price": "34.00", "type": "ITEM", "name": "2012 Acrobat, Pinot Gris, Oregon"}, {"price": "38.00", "type": "ITEM", "name": "2011 Honig, Sauvignon Blanc, Napa"}, {"price": "44.00", "type": "ITEM", "name": "2007 Bonny Doon \u2018Le Cigare Blanc\u2019, Rhone Blend, Santa Cruz"}, {"price": "47.00", "type": "ITEM", "name": "2009 Starmont, Chardonnay, Napa"}, {"price": "50.00", "type": "ITEM", "name": "2010 Sonoma-Cutrer, Chardonnay, Sonoma"}, {"price": "60.00", "type": "ITEM", "name": "2008 Jordan, Chardonnay, Russian River Valley"}, {"price": "76.00", "type": "ITEM", "name": "2008 Flowers, Chardonnay, Sonoma Coast"}]}], "section_name": "White Wines\u200f"}, {"subsections": [{"subsection_name": "Around The World", "contents": [{"price": "33.00", "type": "ITEM", "name": "2011 Masi, Passo Doble, Malbec, Mendoza, Argentina"}, {"price": "46.00", "type": "ITEM", "name": "2012 Paul Hobb\u2019s \u2018Felino\u2019, Malbec, Mendoza, Argentina"}, {"price": "50.00", "type": "ITEM", "name": "2007 Marqu\u00e9s de Murrieta, Reserva, Rioja, Spain"}, {"price": "39.00", "type": "ITEM", "name": "2010 The Stump Jump, Shiraz, Australia"}]}, {"subsection_name": "France", "contents": []}, {"subsection_name": "Bordeaux", "contents": [{"price": "42.00", "type": "ITEM", "name": "2009 Andr\u00e9 Lurton Ch\u00e2teau Bonnet, Bordeaux"}, {"price": "49.00", "type": "ITEM", "name": "2009 R\u00e9serve du Ch\u00e2teau Reysson, Haut Medoc"}, {"price": "45.00", "type": "ITEM", "name": "2008 Ch\u00e2teau Martinat, C\u00f4tes de Bourg"}, {"price": "65.00", "type": "ITEM", "name": "2007 La Bastide Dauzac, Margaux"}]}, {"subsection_name": "Rhone", "contents": [{"price": "38.00", "type": "ITEM", "name": "2009 La Grange de Piaugier, C\u00f4tes du Rhone"}, {"price": "45.00", "type": "ITEM", "name": "2006 E.Guigal, Crozes Hermitage"}, {"price": "58.00", "type": "ITEM", "name": "2006 Lesec \u2018Pierres Dor\u00e9es\u2019, Ch\u00e2teauneuf du Pape"}, {"price": "65.00", "type": "ITEM", "name": "2007 J.L. Chave \u2018Offerus\u2019, Saint Joseph"}, {"price": "70.00", "type": "ITEM", "name": "2008 Domaine Lazaret, Ch\u00e2teauneuf du Pape"}]}, {"subsection_name": "Burgundy", "contents": [{"price": "58.00", "type": "ITEM", "name": "2009 Domaine de la Monette Mercurey, \u201cLe Saut Muchiau\u201d"}, {"price": "65.00", "type": "ITEM", "name": "2010 Benjamin Leroux, Savigny-Les-Beaune"}, {"price": "98.00", "type": "ITEM", "name": "2009 Oliver Bernstein, Gevrey Chambertin"}]}, {"subsection_name": "U.S.", "contents": []}, {"subsection_name": "Blends and Other", "contents": [{"price": "35.00", "type": "ITEM", "name": "2009 Bonny Doon \u2018Contra\u2019, Carignane Blend, CA"}, {"price": "46.00", "type": "ITEM", "name": "2009 David Bruce, Petite Sirah, Central Coast"}, {"price": "54.00", "type": "ITEM", "name": "NV9 Cain Cuv\u00e9e, Napa Valley"}, {"price": "105.00", "type": "ITEM", "name": "2006 Merryvale, \u2018Profile\u2019, Cabernet Blend, Napa"}]}, {"subsection_name": "Pinot Noir", "contents": [{"price": "39.00", "type": "ITEM", "name": "2012 Five Rivers, California"}, {"price": "45.00", "type": "ITEM", "name": "2011 Stafford Hill by Holloran, Eola-Amity Hills"}, {"price": "60.00", "type": "ITEM", "name": "2011 King Estate, Oregon"}]}, {"subsection_name": "Merlot", "contents": [{"price": "45.00", "type": "ITEM", "name": "2009 Tangley Oaks, Napa"}]}, {"subsection_name": "Cabernet Sauvignon", "contents": [{"price": "38.00", "type": "ITEM", "name": "2011 Kunde Family Estate, Sonoma Valley"}, {"price": "46.00", "type": "ITEM", "name": "2011 Joseph Carr, Cabernet Sauvignon"}, {"price": "38.00", "type": "ITEM", "name": "2009 Jones Family, Cabernet Sauvignon, Washington"}, {"price": "65.00", "type": "ITEM", "name": "2010 Sequoia Grove, Rutherford"}, {"price": "72.00", "type": "ITEM", "name": "2010 Stag\u2019s Leap \u2018Artemis\u2019, Napa Valley"}, {"price": "100.00", "type": "ITEM", "name": "2010 Trefethen \u2018Library Selection\u2019, Napa Valley"}]}, {"subsection_name": "Zinfandel", "contents": [{"price": "74.00", "type": "ITEM", "name": "2011 Turley, Zinfandel"}, {"price": "76.00", "type": "ITEM", "name": "2012 Orin Swift \u2018Prisoner\u2019, Zinfandel Blend, Napa Valley"}]}, {"subsection_name": "Italy", "contents": []}, {"subsection_name": "Piedmonte", "contents": [{"price": "32.00", "type": "ITEM", "name": "2011 Michele Chiarlo, Barbera d\u2019Asti"}, {"price": "35.00", "type": "ITEM", "name": "2012 G.B. Burlotto, Dolcetto d\u2019Alba"}, {"price": "45.00", "type": "ITEM", "name": "2008 Pio Cesare, \u201cOltre\u201d"}, {"price": "48.00", "type": "ITEM", "name": "2011 Mauro Sebaste, Nebbiolo"}, {"price": "62.00", "type": "ITEM", "name": "2007 Montaribaldi, Barbaresco"}, {"price": "62.00", "type": "ITEM", "name": "2009 Giacomo Grimaldi, Barolo"}, {"price": "74.00", "type": "ITEM", "name": "2007 Ceretto \u2018Zonchera\u2019, Barolo"}]}, {"subsection_name": "Veneto", "contents": [{"price": "37.00", "type": "ITEM", "name": "2010 Sartori di Verona, Valpolicella"}, {"price": "46.00", "type": "ITEM", "name": "2009 Allegrini, Palazzo della Torre, Ripasso"}, {"price": "85.00", "type": "ITEM", "name": "2009 Sartori di Verona, Amarone della Valpolicella"}, {"price": "55.00", "type": "ITEM", "name": "2010 Zenato, Valpolicella, Ripasso"}]}, {"subsection_name": "Toscana", "contents": [{"price": "32.00", "type": "ITEM", "name": "2012 Donna Laura, Chianti"}, {"price": "43.00", "type": "ITEM", "name": "2008 Rocca delle Mac\u00ece Riserva, Chianti Classico"}, {"price": "45.00", "type": "ITEM", "name": "2008 Val delle Rose, Morellino di Scansano"}, {"price": "50.00", "type": "ITEM", "name": "2010 Dei, Vino Nobile di Montepulciano"}, {"price": "51.00", "type": "ITEM", "name": "2011 Ornellaia \u2018Le Volte\u2019, Sangiovese Blend"}, {"price": "52.00", "type": "ITEM", "name": "2011 Banfi, Rosso di Montalcino"}, {"price": "58.00", "type": "ITEM", "name": "2009 Campo Al Mare, Bolgheri"}, {"price": "60.00", "type": "ITEM", "name": "2010 Banfi \u2018Cum Laude\u2019, Sangiovese Blend, Montalcino"}, {"price": "70.00", "type": "ITEM", "name": "2010 Montepeloso, Eneo, Super Tuscan Blend"}, {"price": "98.00", "type": "ITEM", "name": "2010 Ornellaia \u2018Le Serre Nuove\u2019, Bolgheri"}, {"price": "100.00", "type": "ITEM", "name": "2007 Frescobaldi Castel Giocondo, Brunello di Montalcino"}, {"price": "100.00", "type": "ITEM", "name": "2007 Banfi, Brunello di Montalcino"}, {"price": "150.00", "type": "ITEM", "name": "2009 Antinori, Tignanello"}]}, {"subsection_name": "Campania", "contents": [{"price": "35.00", "type": "ITEM", "name": "2009 Monte Faliesi, Aglianico"}, {"price": "75.00", "type": "ITEM", "name": "2007 Monte Faliesi, Taurasi"}]}, {"subsection_name": "Abruzzo", "contents": [{"price": "34.00", "type": "ITEM", "name": "2012 Gran Sasso, Montepulciano d\u2019Abruzzo"}]}, {"subsection_name": "Puglia", "contents": [{"price": "32.00", "type": "ITEM", "name": "2010 Maretima, Primitivo"}, {"price": "55.00", "type": "ITEM", "name": "2006 Il Falcone Riserva, Nero di Troia Blend"}]}, {"subsection_name": "Sicilia", "contents": [{"price": "32.00", "type": "ITEM", "name": "2012 Villa Pozzi, Nero d\u2019Avola"}]}], "section_name": "Red Wines"}], "currency_symbol": "$"}], "locu_id": "00a5e98b8536c95f37ae", "name": "Bistro 5", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "french", "name": "French"}], "location": {"postal_code": "02155", "locality": "Medford", "address1": "5 Playstead Rd.", "region": "MA", "country": "United States", "geo": {"type": "Point", "coordinates": [-71.132524, 42.421375]}}}]}'
var playlist = '{"tracks":[{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7n9Q6bXSjm74uCtajkddPt","track_name":"Shake It Off","artist_name":"Taylor Swift","artist_url":"https:\/\/play.spotify.com\/artist\/06HL4z0CvFAxyc27GXpf02","album_name":"Shake It Off","album_url":"https:\/\/play.spotify.com\/album\/2Z51EnLF4Nps4LmulSQPnn","artwork_url":"http:\/\/o.scdn.co\/300\/b7f4de75a197f2d01218d225e438cc39b28250a0","num_streams":1581149,"window_type":"daily","percent_male":46,"percent_age_group_0_17":16,"percent_age_group_18_24":38,"percent_age_group_25_29":15,"percent_age_group_30_34":8,"percent_age_group_35_44":11,"percent_age_group_45_54":6,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7EYWEwJyai7udNmqvRPsZM","track_name":"Blame","artist_name":"Calvin Harris","artist_url":"https:\/\/play.spotify.com\/artist\/7CajNmpbOovFoOoasH2HaY","album_name":"Blame","album_url":"https:\/\/play.spotify.com\/album\/6bJBlSpM6U9efi4HmlNv1a","artwork_url":"http:\/\/o.scdn.co\/300\/1b3d284043805b7363906062f057a21d30abe56a","num_streams":1360938,"window_type":"daily","percent_male":54,"percent_age_group_0_17":15,"percent_age_group_18_24":41,"percent_age_group_25_29":16,"percent_age_group_30_34":8,"percent_age_group_35_44":9,"percent_age_group_45_54":5,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/1q676iYDR3GeJtOHdyggIU","track_name":"All About That Bass","artist_name":"Meghan Trainor","artist_url":"https:\/\/play.spotify.com\/artist\/6JL8zeS1NmiOftqZTRgdTz","album_name":"Title","album_url":"https:\/\/play.spotify.com\/album\/23T52TnvD0UqLRsuRHHAHA","artwork_url":"http:\/\/o.scdn.co\/300\/d6e8722488dd1234290a2085b6f02418fb132e95","num_streams":1318610,"window_type":"daily","percent_male":40,"percent_age_group_0_17":22,"percent_age_group_18_24":37,"percent_age_group_25_29":13,"percent_age_group_30_34":8,"percent_age_group_35_44":10,"percent_age_group_45_54":4,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/4th1RQAelzqgY7wL53UGQt","track_name":"The Days","artist_name":"Avicii","artist_url":"https:\/\/play.spotify.com\/artist\/1vCWHaC5f2uS3yhpwWbIA6","album_name":"The Days","album_url":"https:\/\/play.spotify.com\/album\/3j3cgkuyo015dghNYhHnZJ","artwork_url":"http:\/\/o.scdn.co\/300\/f8717f432506ab213c4de0c66d6ac24cd07ecf72","num_streams":1107596,"window_type":"daily","percent_male":57,"percent_age_group_0_17":16,"percent_age_group_18_24":39,"percent_age_group_25_29":14,"percent_age_group_30_34":7,"percent_age_group_35_44":10,"percent_age_group_45_54":7,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7zrYKlgYQv1ELz7LGyjTd1","track_name":"Bang Bang","artist_name":"Jessie J","artist_url":"https:\/\/play.spotify.com\/artist\/2gsggkzM5R49q6jpPvazou","album_name":"Bang Bang","album_url":"https:\/\/play.spotify.com\/album\/64BkZx3UGRbTlF3VUMxUCi","artwork_url":"http:\/\/o.scdn.co\/300\/21d31137e2440b8881e93de8a81f85c77dd38980","num_streams":1106006,"window_type":"daily","percent_male":40,"percent_age_group_0_17":19,"percent_age_group_18_24":37,"percent_age_group_25_29":14,"percent_age_group_30_34":8,"percent_age_group_35_44":10,"percent_age_group_45_54":5,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7uolkTLavH97itenLjNmx9","track_name":"Animals","artist_name":"Maroon 5","artist_url":"https:\/\/play.spotify.com\/artist\/04gDigrS5kc9YWfZHwBETP","album_name":"V","album_url":"https:\/\/play.spotify.com\/album\/2MNwQ0qxvbMlBeWubrDZzX","artwork_url":"http:\/\/o.scdn.co\/300\/2c1fc6ad60cb8deb5d4842112100c8b11ce30b1e","num_streams":1093930,"window_type":"daily","percent_male":51,"percent_age_group_0_17":15,"percent_age_group_18_24":41,"percent_age_group_25_29":15,"percent_age_group_30_34":8,"percent_age_group_35_44":9,"percent_age_group_45_54":4,"percent_age_group_55_plus":8},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/6zSIjdKCen3LlHfJNTsxpE","track_name":"Chandelier","artist_name":"Sia","artist_url":"https:\/\/play.spotify.com\/artist\/5WUlDfRSoLAfcVSX1WnrxN","album_name":"Chandelier","album_url":"https:\/\/play.spotify.com\/album\/2RHjpxr0NUzs8OKqvVy987","artwork_url":"http:\/\/o.scdn.co\/300\/d176a1c1ceb12f4fbef27ba95ff03df4b8890ce3","num_streams":1054806,"window_type":"daily","percent_male":37,"percent_age_group_0_17":10,"percent_age_group_18_24":32,"percent_age_group_25_29":22,"percent_age_group_30_34":13,"percent_age_group_35_44":13,"percent_age_group_45_54":4,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7IHOIqZUUInxjVkko181PB","track_name":"Stay With Me","artist_name":"Sam Smith","artist_url":"https:\/\/play.spotify.com\/artist\/2wY79sveU1sp5g7SokKOiI","album_name":"In The Lonely Hour","album_url":"https:\/\/play.spotify.com\/album\/7p7RFI5jtwYDknwhnQgmlp","artwork_url":"http:\/\/o.scdn.co\/300\/72d5bd1ecd38f261de6b7987283f35cd13d02fbd","num_streams":1033055,"window_type":"daily","percent_male":47,"percent_age_group_0_17":14,"percent_age_group_18_24":36,"percent_age_group_25_29":16,"percent_age_group_30_34":10,"percent_age_group_35_44":11,"percent_age_group_45_54":6,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7cvxrDu7VIhVSOFRNgPegv","track_name":"Break Free","artist_name":"Ariana Grande","artist_url":"https:\/\/play.spotify.com\/artist\/66CXWjxzNUsdJxJ2JdwvnR","album_name":"Break Free","album_url":"https:\/\/play.spotify.com\/album\/3WXY7HsgHfXopEwlooZg2u","artwork_url":"http:\/\/o.scdn.co\/300\/9b4b4ea70bc8eadaa5e9c189b86110f42775d125","num_streams":981097,"window_type":"daily","percent_male":46,"percent_age_group_0_17":19,"percent_age_group_18_24":39,"percent_age_group_25_29":14,"percent_age_group_30_34":7,"percent_age_group_35_44":10,"percent_age_group_45_54":5,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/6RtPijgfPKROxEzTHNRiDp","track_name":"Rude","artist_name":"MAGIC!","artist_url":"https:\/\/play.spotify.com\/artist\/0DxeaLnv6SyYk2DOqkLO8c","album_name":"Don\u0027t Kill the Magic","album_url":"https:\/\/play.spotify.com\/album\/0RZ4Ct4vegYBmL9g88TBNi","artwork_url":"http:\/\/o.scdn.co\/300\/c36fb878b1a2c0c258a7b2808c0b2ea635978d24","num_streams":943641,"window_type":"daily","percent_male":51,"percent_age_group_0_17":13,"percent_age_group_18_24":39,"percent_age_group_25_29":16,"percent_age_group_30_34":9,"percent_age_group_35_44":10,"percent_age_group_45_54":5,"percent_age_group_55_plus":8},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/6WNqOfvfqmbyCk23ejRBwO","track_name":"I\u0027m Not The Only One","artist_name":"Sam Smith","artist_url":"https:\/\/play.spotify.com\/artist\/2wY79sveU1sp5g7SokKOiI","album_name":"I\u0027m Not The Only One","album_url":"https:\/\/play.spotify.com\/album\/2NLaqj8qH6nKL7aBjrcRRJ","artwork_url":"http:\/\/o.scdn.co\/300\/74e7a3872654d0442a149d0ee4a054ca3443c1e6","num_streams":910235,"window_type":"daily","percent_male":40,"percent_age_group_0_17":11,"percent_age_group_18_24":43,"percent_age_group_25_29":21,"percent_age_group_30_34":9,"percent_age_group_35_44":6,"percent_age_group_45_54":2,"percent_age_group_55_plus":8},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7wDpMiQUBQkVIdwETkZHVy","track_name":"Black Widow","artist_name":"Iggy Azalea","artist_url":"https:\/\/play.spotify.com\/artist\/5yG7ZAZafVaAlMTeBybKAL","album_name":"The New Classic","album_url":"https:\/\/play.spotify.com\/album\/0FhVwWsk2LAVPLyH0cC50J","artwork_url":"http:\/\/o.scdn.co\/300\/20de3cb380496aeee0423a15e1ed22d6c4b7b395","num_streams":846236,"window_type":"daily","percent_male":41,"percent_age_group_0_17":13,"percent_age_group_18_24":36,"percent_age_group_25_29":18,"percent_age_group_30_34":11,"percent_age_group_35_44":10,"percent_age_group_45_54":3,"percent_age_group_55_plus":9},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5ml7wqgv2ZZ5JJ6U8ZLon9","track_name":"Superheroes","artist_name":"The Script","artist_url":"https:\/\/play.spotify.com\/artist\/3AQRLZ9PuTAozP28Skbq8V","album_name":"Superheroes","album_url":"https:\/\/play.spotify.com\/album\/6PbItq7wFLcz5pNlvbGH8D","artwork_url":"http:\/\/o.scdn.co\/300\/f27c57d12cb92666938173f9c80fbd7466ae524d","num_streams":825807,"window_type":"daily","percent_male":45,"percent_age_group_0_17":17,"percent_age_group_18_24":40,"percent_age_group_25_29":15,"percent_age_group_30_34":8,"percent_age_group_35_44":9,"percent_age_group_45_54":4,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/71ywEs45ClmTNRiaJ7YEsr","track_name":"Maps","artist_name":"Maroon 5","artist_url":"https:\/\/play.spotify.com\/artist\/04gDigrS5kc9YWfZHwBETP","album_name":"V","album_url":"https:\/\/play.spotify.com\/album\/2MNwQ0qxvbMlBeWubrDZzX","artwork_url":"http:\/\/o.scdn.co\/300\/2c1fc6ad60cb8deb5d4842112100c8b11ce30b1e","num_streams":818804,"window_type":"daily","percent_male":51,"percent_age_group_0_17":13,"percent_age_group_18_24":41,"percent_age_group_25_29":16,"percent_age_group_30_34":9,"percent_age_group_35_44":10,"percent_age_group_45_54":4,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/34gCuhDGsG4bRPIf9bb02f","track_name":"Thinking Out Loud","artist_name":"Ed Sheeran","artist_url":"https:\/\/play.spotify.com\/artist\/6eUKZXaKkcviH0Ku9w2n3V","album_name":"x","album_url":"https:\/\/play.spotify.com\/album\/1xn54DMo2qIqBuMqHtUsFd","artwork_url":"http:\/\/o.scdn.co\/300\/646e9619750dfa3d1eadbbea959dc6f528a9109e","num_streams":785792,"window_type":"daily","percent_male":41,"percent_age_group_0_17":15,"percent_age_group_18_24":40,"percent_age_group_25_29":15,"percent_age_group_30_34":8,"percent_age_group_35_44":10,"percent_age_group_45_54":6,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/4HgKRAvgmyYojrsgNvUKqH","track_name":"Cool Kids","artist_name":"Echosmith","artist_url":"https:\/\/play.spotify.com\/artist\/1PbBg2aYjWLKRk84zJK15x","album_name":"Cool Kids","album_url":"https:\/\/play.spotify.com\/album\/53stc16orM02iJxrltMc91","artwork_url":"http:\/\/o.scdn.co\/300\/9f9455a3abd9b0e2306c8a0354ab8388a5b2ae6f","num_streams":744280,"window_type":"daily","percent_male":49,"percent_age_group_0_17":14,"percent_age_group_18_24":40,"percent_age_group_25_29":16,"percent_age_group_30_34":10,"percent_age_group_35_44":9,"percent_age_group_45_54":4,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7x7OXP72oUQqw4JVoQa3kT","track_name":"Rather Be (feat. Jess Glynne)","artist_name":"Clean Bandit","artist_url":"https:\/\/play.spotify.com\/artist\/6MDME20pz9RveH9rEXvrOM","album_name":"New Eyes","album_url":"https:\/\/play.spotify.com\/album\/4NyPqCAfsYIvmLfOmIHKul","artwork_url":"http:\/\/o.scdn.co\/300\/2eac2630ec3d596755aa4947f88ed1da3baf243f","num_streams":733390,"window_type":"daily","percent_male":43,"percent_age_group_0_17":12,"percent_age_group_18_24":45,"percent_age_group_25_29":18,"percent_age_group_30_34":9,"percent_age_group_35_44":7,"percent_age_group_45_54":2,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5W2opDlEE4V6azri6kC4aT","track_name":"Don\u0027t","artist_name":"Ed Sheeran","artist_url":"https:\/\/play.spotify.com\/artist\/6eUKZXaKkcviH0Ku9w2n3V","album_name":"Don\u0027t","album_url":"https:\/\/play.spotify.com\/album\/5Tb4ySF7ow5Zskf5xBVqMi","artwork_url":"http:\/\/o.scdn.co\/300\/4964e3ce7bdc7279f006b9833c0b741bf0bdf086","num_streams":713166,"window_type":"daily","percent_male":35,"percent_age_group_0_17":14,"percent_age_group_18_24":40,"percent_age_group_25_29":16,"percent_age_group_30_34":9,"percent_age_group_35_44":9,"percent_age_group_45_54":4,"percent_age_group_55_plus":8},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7yq4Qj7cqayVTp3FF9CWbm","track_name":"Riptide","artist_name":"Vance Joy","artist_url":"https:\/\/play.spotify.com\/artist\/10exVja0key0uqUkk6LJRT","album_name":"Dream Your Life Away","album_url":"https:\/\/play.spotify.com\/album\/6rIbiUMmZJfqJRnXhVxFvg","artwork_url":"http:\/\/o.scdn.co\/300\/0cbd3cf918346f95af5f180e86224943711a2f3a","num_streams":696149,"window_type":"daily","percent_male":47,"percent_age_group_0_17":13,"percent_age_group_18_24":41,"percent_age_group_25_29":17,"percent_age_group_30_34":9,"percent_age_group_35_44":9,"percent_age_group_45_54":4,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/6HFbq7cewJ7rPiffV0ciil","track_name":"A Sky Full Of Stars","artist_name":"Coldplay","artist_url":"https:\/\/play.spotify.com\/artist\/4gzpq5DPGxSnKTe4SA8HAU","album_name":"A Sky Full Of Stars","album_url":"https:\/\/play.spotify.com\/album\/5YErGPYkVAaEV04hVFdmvW","artwork_url":"http:\/\/o.scdn.co\/300\/d7dca648f56a05808908e6d92a1f68fd5cf49315","num_streams":693331,"window_type":"daily","percent_male":50,"percent_age_group_0_17":13,"percent_age_group_18_24":37,"percent_age_group_25_29":17,"percent_age_group_30_34":10,"percent_age_group_35_44":11,"percent_age_group_45_54":5,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5PaqFdIb4vspKAmpCqDuzz","track_name":"Am I Wrong","artist_name":"Nico \u0026 Vinz","artist_url":"https:\/\/play.spotify.com\/artist\/0awl5piYwO0CDTHEkCjUhn","album_name":"Am I Wrong","album_url":"https:\/\/play.spotify.com\/album\/1PDRi4JS3zSulh11l6GcbQ","artwork_url":"http:\/\/o.scdn.co\/300\/c692aa32d143d9d9ad22817816f60c914ff3834b","num_streams":687132,"window_type":"daily","percent_male":54,"percent_age_group_0_17":12,"percent_age_group_18_24":34,"percent_age_group_25_29":14,"percent_age_group_30_34":9,"percent_age_group_35_44":15,"percent_age_group_45_54":10,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/3bTZ9geYjyj9uBIT6gL5N6","track_name":"All of Me","artist_name":"John Legend","artist_url":"https:\/\/play.spotify.com\/artist\/5y2Xq6xcjJb2jVM54GHK3t","album_name":"All of Me","album_url":"https:\/\/play.spotify.com\/album\/1YdXQgntClL3BhIXB0xpgs","artwork_url":"http:\/\/o.scdn.co\/300\/d4b391b75d9f80032fb7124e47ff44291181f63d","num_streams":685103,"window_type":"daily","percent_male":37,"percent_age_group_0_17":10,"percent_age_group_18_24":31,"percent_age_group_25_29":17,"percent_age_group_30_34":13,"percent_age_group_35_44":15,"percent_age_group_45_54":6,"percent_age_group_55_plus":8},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7dS5EaCoMnN7DzlpT6aRn2","track_name":"Take Me To Church","artist_name":"Hozier","artist_url":"https:\/\/play.spotify.com\/artist\/2FXC3k01G6Gw61bmprjgqS","album_name":"Hozier","album_url":"https:\/\/play.spotify.com\/album\/7HW03Zew4rnOhy5uwskRSz","artwork_url":"http:\/\/o.scdn.co\/300\/db920f474952c5f040999af9958993075a99b7a8","num_streams":680559,"window_type":"daily","percent_male":53,"percent_age_group_0_17":16,"percent_age_group_18_24":41,"percent_age_group_25_29":16,"percent_age_group_30_34":8,"percent_age_group_35_44":8,"percent_age_group_45_54":5,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/4pq6q25ckZxU8oVRzLI6YJ","track_name":"Geronimo","artist_name":"Sheppard","artist_url":"https:\/\/play.spotify.com\/artist\/6VxCmtR7S3yz4vnzsJqhSV","album_name":"Geronimo","album_url":"https:\/\/play.spotify.com\/album\/1h6gGhxZ6C5rH3OPwYfjfd","artwork_url":"http:\/\/o.scdn.co\/300\/dfb4e485415d44858c5b8bdf7bbf305966ef74e7","num_streams":647583,"window_type":"daily","percent_male":44,"percent_age_group_0_17":12,"percent_age_group_18_24":31,"percent_age_group_25_29":16,"percent_age_group_30_34":12,"percent_age_group_35_44":17,"percent_age_group_45_54":6,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7vS3Y0IKjde7Xg85LWIEdP","track_name":"Problem","artist_name":"Ariana Grande","artist_url":"https:\/\/play.spotify.com\/artist\/66CXWjxzNUsdJxJ2JdwvnR","album_name":"My Everything","album_url":"https:\/\/play.spotify.com\/album\/6EVYTRG1drKdO8OnIQBeEj","artwork_url":"http:\/\/o.scdn.co\/300\/1f7f2f62999164b6006955286ebec2a58bbbcb81","num_streams":642940,"window_type":"daily","percent_male":40,"percent_age_group_0_17":13,"percent_age_group_18_24":41,"percent_age_group_25_29":18,"percent_age_group_30_34":10,"percent_age_group_35_44":8,"percent_age_group_45_54":2,"percent_age_group_55_plus":8},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/3QEdkjBmbgwTnfvuZL9U97","track_name":"Steal My Girl","artist_name":"One Direction","artist_url":"https:\/\/play.spotify.com\/artist\/4AK6F7OLvEQ5QYCBNiQWHq","album_name":"Steal My Girl","album_url":"https:\/\/play.spotify.com\/album\/70QHsS1TH4LlbFEvnl2IUA","artwork_url":"http:\/\/o.scdn.co\/300\/da9f0f17da449d6be5c6f242df84ae38854eb4b6","num_streams":637261,"window_type":"daily","percent_male":36,"percent_age_group_0_17":20,"percent_age_group_18_24":39,"percent_age_group_25_29":14,"percent_age_group_30_34":7,"percent_age_group_35_44":9,"percent_age_group_45_54":5,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/3DmW6y7wTEYHJZlLo1r6XJ","track_name":"Shower","artist_name":"Becky G","artist_url":"https:\/\/play.spotify.com\/artist\/4obzFoKoKRHIphyHzJ35G3","album_name":"Shower","album_url":"https:\/\/play.spotify.com\/album\/4JlzEvVJqpb62Xwc0EmOHr","artwork_url":"http:\/\/o.scdn.co\/300\/1fb53deadfbd10d6b2562fccd960f49ad06fa783","num_streams":625174,"window_type":"daily","percent_male":43,"percent_age_group_0_17":19,"percent_age_group_18_24":40,"percent_age_group_25_29":14,"percent_age_group_30_34":7,"percent_age_group_35_44":9,"percent_age_group_45_54":5,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7GCElX2eJA5t0AFWw3WzKn","track_name":"This Is How We Do","artist_name":"Katy Perry","artist_url":"https:\/\/play.spotify.com\/artist\/6jJ0s89eD6GaHleKKya26X","album_name":"PRISM","album_url":"https:\/\/play.spotify.com\/album\/3jB9yFDwRe3KhtGnHXJntk","artwork_url":"http:\/\/o.scdn.co\/300\/96fb8b4d972bba2ac566820985437aa39109b512","num_streams":621116,"window_type":"daily","percent_male":30,"percent_age_group_0_17":21,"percent_age_group_18_24":39,"percent_age_group_25_29":14,"percent_age_group_30_34":8,"percent_age_group_35_44":9,"percent_age_group_45_54":2,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/49eplIHvgCLY8HAgcaWrUb","track_name":"Fireball","artist_name":"Pitbull","artist_url":"https:\/\/play.spotify.com\/artist\/0TnOYISbd1XYRBk9myaseg","album_name":"Fireball","album_url":"https:\/\/play.spotify.com\/album\/30gRxZHDWRrAMdnF0TcMSX","artwork_url":"http:\/\/o.scdn.co\/300\/05b30a464698aee8c7e1f3c3ec0c8b62345ea109","num_streams":609494,"window_type":"daily","percent_male":48,"percent_age_group_0_17":14,"percent_age_group_18_24":37,"percent_age_group_25_29":16,"percent_age_group_30_34":9,"percent_age_group_35_44":11,"percent_age_group_45_54":6,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5rph5sObvxskRcb1JLV70r","track_name":"Don\u0027t Tell \u0027Em","artist_name":"Jeremih","artist_url":"https:\/\/play.spotify.com\/artist\/3KV3p5EY4AvKxOlhGHORLg","album_name":"Don\u0027t Tell \u0027Em","album_url":"https:\/\/play.spotify.com\/album\/7drqyneritbCAzwJ7I7hfZ","artwork_url":"http:\/\/o.scdn.co\/300\/1dbed2ecfe657d79ea96d65474f16aac92a2da04","num_streams":604780,"window_type":"daily","percent_male":54,"percent_age_group_0_17":18,"percent_age_group_18_24":43,"percent_age_group_25_29":14,"percent_age_group_30_34":7,"percent_age_group_35_44":8,"percent_age_group_45_54":5,"percent_age_group_55_plus":5},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7398yjipWAaoCGIl7ukaeX","track_name":"Stolen Dance","artist_name":"Milky Chance","artist_url":"https:\/\/play.spotify.com\/artist\/1hzfo8twXdOegF3xireCYs","album_name":"Sadnecessary","album_url":"https:\/\/play.spotify.com\/album\/5jYuoL8huNF3OcrpH9YYHb","artwork_url":"http:\/\/o.scdn.co\/300\/bfcdeb0ebe2fa8eb55514fd391315ed6635d3eac","num_streams":592028,"window_type":"daily","percent_male":56,"percent_age_group_0_17":12,"percent_age_group_18_24":35,"percent_age_group_25_29":18,"percent_age_group_30_34":12,"percent_age_group_35_44":12,"percent_age_group_45_54":4,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7b71WsDLb8gG0cSyDTFAEW","track_name":"Summer","artist_name":"Calvin Harris","artist_url":"https:\/\/play.spotify.com\/artist\/7CajNmpbOovFoOoasH2HaY","album_name":"Summer","album_url":"https:\/\/play.spotify.com\/album\/0IGsZsrvIe5AQKvMmVobYq","artwork_url":"http:\/\/o.scdn.co\/300\/ca67ba1425e4308104ecae9fc493f3ef96ceb72a","num_streams":568763,"window_type":"daily","percent_male":55,"percent_age_group_0_17":13,"percent_age_group_18_24":40,"percent_age_group_25_29":17,"percent_age_group_30_34":9,"percent_age_group_35_44":10,"percent_age_group_45_54":4,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5Sf3GyLEAzJXxZ5mbCPXTu","track_name":"Waves - Robin Schulz Radio Edit","artist_name":"Mr. Probz","artist_url":"https:\/\/play.spotify.com\/artist\/33W1pnW9zScZtYTnAoWnOT","album_name":"Waves","album_url":"https:\/\/play.spotify.com\/album\/7l4LGPXk2mB80WgXy4VeuB","artwork_url":"http:\/\/o.scdn.co\/300\/ccfb05bea829a2dc0c736f591a22eac50c18aa56","num_streams":559831,"window_type":"daily","percent_male":51,"percent_age_group_0_17":10,"percent_age_group_18_24":39,"percent_age_group_25_29":18,"percent_age_group_30_34":10,"percent_age_group_35_44":11,"percent_age_group_45_54":5,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5MVkWRKMBO3r05oihuNbzM","track_name":"Warriors","artist_name":"Imagine Dragons","artist_url":"https:\/\/play.spotify.com\/artist\/53XhwfbYqKCa1cC15pYq2q","album_name":"Warriors","album_url":"https:\/\/play.spotify.com\/album\/6weV9At7YFFxMI0SBoJaqc","artwork_url":"http:\/\/o.scdn.co\/300\/a38d5634a2b74293463216fdb06b660b2f87213f","num_streams":544047,"window_type":"daily","percent_male":67,"percent_age_group_0_17":22,"percent_age_group_18_24":42,"percent_age_group_25_29":11,"percent_age_group_30_34":5,"percent_age_group_35_44":8,"percent_age_group_45_54":6,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/3qqho4PnTn3zlMPBzWhFFD","track_name":"Ugly Heart","artist_name":"G.R.L.","artist_url":"https:\/\/play.spotify.com\/artist\/3Yl4nkmEa8BSuGWbwhdLDq","album_name":"G.R.L.","album_url":"https:\/\/play.spotify.com\/album\/3EnagjeTqe4GvpF3dgVPtF","artwork_url":"http:\/\/o.scdn.co\/300\/367bcda92c49009444cac9a360ae76312b670cf0","num_streams":536741,"window_type":"daily","percent_male":39,"percent_age_group_0_17":15,"percent_age_group_18_24":39,"percent_age_group_25_29":16,"percent_age_group_30_34":8,"percent_age_group_35_44":10,"percent_age_group_45_54":6,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5a5so8nqDGq75MI5WMbBtT","track_name":"Anaconda","artist_name":"Nicki Minaj","artist_url":"https:\/\/play.spotify.com\/artist\/0hCNtLu0JehylgoiP8L4Gh","album_name":"Anaconda","album_url":"https:\/\/play.spotify.com\/album\/1pxED0aW8v0PpojjpJQUkC","artwork_url":"http:\/\/o.scdn.co\/300\/0df79424849f852b77a07df746353764a51f6174","num_streams":528367,"window_type":"daily","percent_male":35,"percent_age_group_0_17":18,"percent_age_group_18_24":44,"percent_age_group_25_29":15,"percent_age_group_30_34":8,"percent_age_group_35_44":7,"percent_age_group_45_54":2,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5wQeCrJTJxGZnILnyCBHjI","track_name":"Lovers on the Sun (feat. Sam Martin)","artist_name":"David Guetta","artist_url":"https:\/\/play.spotify.com\/artist\/1Cs0zKBU1kc0i8ypK3B9ai","album_name":"Lovers on the Sun EP","album_url":"https:\/\/play.spotify.com\/album\/7kGfNb6k7XILgPtIHTFrQL","artwork_url":"http:\/\/o.scdn.co\/300\/7e1a3fb78245a8477312eeaec1621a2849969219","num_streams":525896,"window_type":"daily","percent_male":58,"percent_age_group_0_17":14,"percent_age_group_18_24":38,"percent_age_group_25_29":15,"percent_age_group_30_34":9,"percent_age_group_35_44":11,"percent_age_group_45_54":6,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5TI9vxJAI5K069uic9AmTq","track_name":"Ghost","artist_name":"Ella Henderson","artist_url":"https:\/\/play.spotify.com\/artist\/7nDsS0l5ZAzMedVRKPP8F1","album_name":"Chapter One","album_url":"https:\/\/play.spotify.com\/album\/0KP9GNOxpsKRSA0t0B4ZsL","artwork_url":"http:\/\/o.scdn.co\/300\/703b228b5a046ad1a5877f619dc81ff4b27eddd0","num_streams":520775,"window_type":"daily","percent_male":49,"percent_age_group_0_17":15,"percent_age_group_18_24":40,"percent_age_group_25_29":17,"percent_age_group_30_34":8,"percent_age_group_35_44":9,"percent_age_group_45_54":5,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/3sP10QGbhzgW966egoIjcA","track_name":"Fancy","artist_name":"Iggy Azalea","artist_url":"https:\/\/play.spotify.com\/artist\/5yG7ZAZafVaAlMTeBybKAL","album_name":"Fancy","album_url":"https:\/\/play.spotify.com\/album\/5m2DCr1ME7vsqsmSU4t2Ml","artwork_url":"http:\/\/o.scdn.co\/300\/98662c777fbaf7de0dc3c86c96fc63a766764d3d","num_streams":493658,"window_type":"daily","percent_male":39,"percent_age_group_0_17":18,"percent_age_group_18_24":43,"percent_age_group_25_29":15,"percent_age_group_30_34":7,"percent_age_group_35_44":8,"percent_age_group_45_54":3,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5vLOVP3M0Vg2FaYJnUcrvm","track_name":"Heroes (We Could Be)","artist_name":"Alesso","artist_url":"https:\/\/play.spotify.com\/artist\/4AVFqumd2ogHFlRbKIjp1t","album_name":"Heroes","album_url":"https:\/\/play.spotify.com\/album\/4bRJXWiiUWss77lgEJFUFZ","artwork_url":"http:\/\/o.scdn.co\/300\/0e41e249d636fab9d45366a16d01dc18d99dce80","num_streams":481466,"window_type":"daily","percent_male":53,"percent_age_group_0_17":12,"percent_age_group_18_24":30,"percent_age_group_25_29":13,"percent_age_group_30_34":7,"percent_age_group_35_44":17,"percent_age_group_45_54":13,"percent_age_group_55_plus":8},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7Bt36rJMdiN8edxCEO3KWw","track_name":"Dangerous (feat. Sam Martin)","artist_name":"David Guetta","artist_url":"https:\/\/play.spotify.com\/artist\/1Cs0zKBU1kc0i8ypK3B9ai","album_name":"Dangerous (feat. Sam Martin)","album_url":"https:\/\/play.spotify.com\/album\/1SDGDePATjMpYmXWbnmXre","artwork_url":"http:\/\/o.scdn.co\/300\/4956daa8f52ba99d2a2a5818bdec2d05b3c4e4f6","num_streams":478905,"window_type":"daily","percent_male":52,"percent_age_group_0_17":8,"percent_age_group_18_24":43,"percent_age_group_25_29":23,"percent_age_group_30_34":10,"percent_age_group_35_44":7,"percent_age_group_45_54":2,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5zlC5d5umTrbcX9sLVVxzh","track_name":"Prayer in C - Robin Schulz Radio Edit","artist_name":"Lilly Wood \u0026 The Prick","artist_url":"https:\/\/play.spotify.com\/artist\/50OApTJurDusIo9dGTqSU4","album_name":"Prayer In C","album_url":"https:\/\/play.spotify.com\/album\/2lsnwv4RgOPPwwWV57hTZ9","artwork_url":"http:\/\/o.scdn.co\/300\/0bc99ea137889c196e69bf93908271c87be96ec4","num_streams":465287,"window_type":"daily","percent_male":53,"percent_age_group_0_17":8,"percent_age_group_18_24":37,"percent_age_group_25_29":22,"percent_age_group_30_34":12,"percent_age_group_35_44":11,"percent_age_group_45_54":3,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/7GJClzimvMSghjcrKxuf1M","track_name":"Budapest","artist_name":"George Ezra","artist_url":"https:\/\/play.spotify.com\/artist\/2ysnwxxNtSgbb9t1m2Ur4j","album_name":"Wanted On Voyage","album_url":"https:\/\/play.spotify.com\/album\/5tF2lAa2rh2kU2xIiBzWia","artwork_url":"http:\/\/o.scdn.co\/300\/e35c2b48d3005e3bd2921a366c57ef037f24eb44","num_streams":442044,"window_type":"daily","percent_male":50,"percent_age_group_0_17":12,"percent_age_group_18_24":36,"percent_age_group_25_29":16,"percent_age_group_30_34":10,"percent_age_group_35_44":12,"percent_age_group_45_54":7,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/51ODNNDZm21HU7wI7cccRr","track_name":"Latch","artist_name":"Disclosure","artist_url":"https:\/\/play.spotify.com\/artist\/6nS5roXSAGhTGr34W6n7Et","album_name":"Settle","album_url":"https:\/\/play.spotify.com\/album\/7bdjtx1RTkWoSoOaIl7a8E","artwork_url":"http:\/\/o.scdn.co\/300\/8e8b2b920cc2649b6b16b0fbbe1d2a0692d5079f","num_streams":431809,"window_type":"daily","percent_male":51,"percent_age_group_0_17":13,"percent_age_group_18_24":40,"percent_age_group_25_29":17,"percent_age_group_30_34":9,"percent_age_group_35_44":10,"percent_age_group_45_54":5,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/6sy3LkhNFjJWlaeSMNwQ62","track_name":"Counting Stars","artist_name":"OneRepublic","artist_url":"https:\/\/play.spotify.com\/artist\/5Pwc4xIPtQLFEnJriah9YJ","album_name":"Native","album_url":"https:\/\/play.spotify.com\/album\/2bbhW5ifCwOYM8DMkqoYBF","artwork_url":"http:\/\/o.scdn.co\/300\/a40006687cbe15017c82fa371e168212591c3f92","num_streams":429488,"window_type":"daily","percent_male":49,"percent_age_group_0_17":13,"percent_age_group_18_24":39,"percent_age_group_25_29":17,"percent_age_group_30_34":10,"percent_age_group_35_44":10,"percent_age_group_45_54":3,"percent_age_group_55_plus":8},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5lLWaxERQ4968sWjPyxxLm","track_name":"Wiggle (feat. Snoop Dogg)","artist_name":"Jason Derulo","artist_url":"https:\/\/play.spotify.com\/artist\/07YZf4WDAMNwqr4jfgOZ8y","album_name":"Talk Dirty","album_url":"https:\/\/play.spotify.com\/album\/7w2TdidILAwpT1S8rm8Jpz","artwork_url":"http:\/\/o.scdn.co\/300\/0894b294630570d0e369a1f97dc716a2d4aa32d6","num_streams":428826,"window_type":"daily","percent_male":44,"percent_age_group_0_17":10,"percent_age_group_18_24":42,"percent_age_group_25_29":22,"percent_age_group_30_34":11,"percent_age_group_35_44":7,"percent_age_group_45_54":1,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/6zNRZnb5qsQeZqslRAMcCa","track_name":"Radioactive","artist_name":"Imagine Dragons","artist_url":"https:\/\/play.spotify.com\/artist\/53XhwfbYqKCa1cC15pYq2q","album_name":"Night Visions","album_url":"https:\/\/play.spotify.com\/album\/5wOqcam4sciFijFaCaxDz0","artwork_url":"http:\/\/o.scdn.co\/300\/16b7019d190de47507ec0fed8c7a6076bce2e31a","num_streams":425932,"window_type":"daily","percent_male":67,"percent_age_group_0_17":20,"percent_age_group_18_24":46,"percent_age_group_25_29":15,"percent_age_group_30_34":6,"percent_age_group_35_44":5,"percent_age_group_45_54":2,"percent_age_group_55_plus":6},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/5MhsZlmKJG6X5kTHkdwC4B","track_name":"I\u0027m an Albatraoz","artist_name":"AronChupa","artist_url":"https:\/\/play.spotify.com\/artist\/5vCOdeiQt9LyzdI87kt5Sh","album_name":"I\u0027m an Albatraoz","album_url":"https:\/\/play.spotify.com\/album\/1qHVYbxQ6IS8YRviorKDJI","artwork_url":"http:\/\/o.scdn.co\/300\/41831b1121995e7fd680be2fc16120e481105062","num_streams":419688,"window_type":"daily","percent_male":59,"percent_age_group_0_17":17,"percent_age_group_18_24":38,"percent_age_group_25_29":14,"percent_age_group_30_34":7,"percent_age_group_35_44":11,"percent_age_group_45_54":6,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/6eLrCtqlpjroAkES2EHCx0","track_name":"Sing","artist_name":"Ed Sheeran","artist_url":"https:\/\/play.spotify.com\/artist\/6eUKZXaKkcviH0Ku9w2n3V","album_name":"Sing","album_url":"https:\/\/play.spotify.com\/album\/7FUogAgrnR5AlV9aZosZWe","artwork_url":"http:\/\/o.scdn.co\/300\/646e9619750dfa3d1eadbbea959dc6f528a9109e","num_streams":414048,"window_type":"daily","percent_male":43,"percent_age_group_0_17":15,"percent_age_group_18_24":36,"percent_age_group_25_29":16,"percent_age_group_30_34":10,"percent_age_group_35_44":11,"percent_age_group_45_54":5,"percent_age_group_55_plus":7},{"date":"2014-10-23","country":"global","track_url":"https:\/\/play.spotify.com\/track\/6PtXobrqImYfnpIxNsJApa","track_name":"Bad (feat. Vassy) - Radio Edit","artist_name":"David Guetta","artist_url":"https:\/\/play.spotify.com\/artist\/1Cs0zKBU1kc0i8ypK3B9ai","album_name":"Bad (feat. Vassy)","album_url":"https:\/\/play.spotify.com\/album\/6CvEd1L1KJZ8g3wIwCZYvF","artwork_url":"http:\/\/o.scdn.co\/300\/2591b40c4b58e2b5ef831f4266b4b96b46c0462d","num_streams":413793,"window_type":"daily","percent_male":60,"percent_age_group_0_17":14,"percent_age_group_18_24":43,"percent_age_group_25_29":17,"percent_age_group_30_34":8,"percent_age_group_35_44":8,"percent_age_group_45_54":4,"percent_age_group_55_plus":6}],"prevDate":"2014-10-22"}'
var score = 0
var correct = ""
var interval;
var prepage_id = ""
var currentpage_id = "login_page"
var sorted_menu= ""
var login_number=0
var ithgame = 0
var track_url
var track_list
var d_start
var d_end
var original_color;
//var myApp = new Framework7();
var myApp = new Framework7({
    pushState: true, 
    swipebackPage: true
});

// Export selectors engine
var $$ = Dom7;

// https://api.spotify.com/v1/users/1267003717/playlists/4hOKQuZbraPDIfaGbM3lKI


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
// var restaurantView = myApp.addView('.view-restaurant');




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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// $("#mainplay").click(function(){
// 	alert("here")
// 	var b = new Audio("https://p.scdn.co/mp3-preview/e61cd21ad1a288c033b4fdfb56bb8c7398c4d1a9")
// 	b.play()
// });
function play(){
	
    document.getElementById("login_page").style.display = "none"
    document.getElementById("game_page").style.display = "block"

    loaddata()
}

function playSound(url) {

    var a = new Audio(url);
    a.play();
    setInterval(function(){a.pause()}, 3000);
}
function select_choice (choice){
	select = document.getElementById("button"+choice).innerHTML

	if (select == correct){
		
		clearInterval(interval)
		ithgame ++
		a.pause()
		for (i_ = 0; i_ < 4; i_++){
			document.getElementById("button"+i_).style.backgroundColor = original_color
		}
		a = document.getElementById("audiosupport")
		a.src = track_url[ithgame]
		// a = new Audio(track_url[i])
		a.play()
		d_end = new Date();
		var dif = d_end.getTime() - d_start.getTime()
		console.log("dif "+ dif)
		fake_number = new Array()
		var fake_number1 = getRandomInt(0,49);
		while (ithgame == fake_number1) {
			fake_number1 = getRandomInt(0,49);
		}
		fake_number.push(fake_number1)
		var fake_number2 = getRandomInt(0,49)
		while (fake_number2 == fake_number1 || fake_number2 == ithgame) {
			fake_number2 = getRandomInt(0,49);
		}
		fake_number.push(fake_number2)
		var fake_number3 = getRandomInt(0,49)
		while (fake_number3 == fake_number2 || fake_number3 == fake_number1 || fake_number1 == ithgame) {
			fake_number3 = getRandomInt(0,49)
		}
		fake_number.push(fake_number3)
		fake_number.push(ithgame)
		var correct_number = getRandomInt(0,3)
		array = [1,2,3,0]
		array = shuffleArray(array)
		console.log(array)
		for (j = 0; j < 4 ; j++) {
			document.getElementById("button"+array[j]).innerHTML = track_list[fake_number[j]]["name"]
		}
		correct = track_list[ithgame]["name"]
		console.log(correct)
		once = 1
		score += 10000 - dif
		d_start = d_end
		interval  = setInterval(gameloop, 10000); 
	} else {
		original_color=  document.getElementById("button"+choice).style.backgroundColor
		document.getElementById("button"+choice).style.backgroundColor = "red"
		score *= 0.7

	}
	document.getElementById("scoreboard").innerHTML = "Score: " + score
}
function loaddata() {

	//Use get API of member database here
	// request = new XMLHttpRequest();
	// request.open("GET", 'http://charts.spotify.com/api/tracks/most_streamed/global/daily/latest', true);
	// $.get('http://charts.spotify.com/api/tracks/most_streamed/global/daily/latest')
	// console.log(json)
	var songarray = ""
	array = JSON.parse(playlist)
	for(i = 0; i < 50; i++){
		track_url = array["tracks"][i]["track_url"]
		track_id = track_url.split("https://play.spotify.com/track/")
		console.log(track_id[1])
		songarray += track_id[1]
		if (i < 49){
			songarray += ','
		}
	}
	console.log(songarray)


	request = $.getJSON('https://api.spotify.com/v1/tracks/?ids='+songarray, function(data){
		track_list = JSON.parse(request.responseText)["tracks"]
		track_list = shuffleArray(track_list)
		console.log(track_list)
		track_url = new Array()
		audio_list = new Array()
		for (i = 0; i < 50; i++) {
			var right_answer = "";
			track_url.push(track_list[i]["preview_url"]+".mp3")
			console.log(track_url)
			// playSound(track_url[i])
			console.log(track_list[getRandomInt(0,49)]["name"])
		}
		// for (i = 0; i < 10; i ++){
		// 	var a = new Audio(track_url[i])
		// 	a.play()
		// 	setTimeout(function(){
		// 		console.log("chill")
		// 		a.pause()
		// 	}, 10000)
		// }
		
		
		ithgame = 0
		a = document.getElementById("audiosupport")
		a.src = track_url[ithgame]
		// a = new Audio(track_url[i])
		a.play()
		d_start = new Date()
		//console.log(d_start.getSeconds())
		fake_number = new Array()
		var fake_number1 = getRandomInt(0,49);
		while (ithgame == fake_number1) {
			fake_number1 = getRandomInt(0,49);
		}
		fake_number.push(fake_number1)
		var fake_number2 = getRandomInt(0,49)
		while (fake_number2 == fake_number1 || fake_number2 == ithgame) {
			fake_number2 = getRandomInt(0,49);
		}
		fake_number.push(fake_number2)
		var fake_number3 = getRandomInt(0,49)
		while (fake_number3 == fake_number2 || fake_number3 == fake_number1 || fake_number1 == ithgame) {
			fake_number3 = getRandomInt(0,49)
		}
		fake_number.push(fake_number3)
		fake_number.push(ithgame)
		var correct_number = getRandomInt(0,3)
		array = [1,2,3,0]
		array = shuffleArray(array)
		console.log(array)
		for (j = 0; j < 4 ; j++) {
			document.getElementById("button"+array[j]).innerHTML = track_list[fake_number[j]]["name"]
		}
		correct = track_list[ithgame]["name"]
		console.log(correct)
		once = 1
		interval  = setInterval(gameloop, 10000); 		
		
	});
}


function gameloop(){
					ithgame++
					a.pause()
					d_start = new Date()
					console.log(ithgame)
					console.log("here")
					// a = new Audio(track_url[i])
					a = document.getElementById("audiosupport")
					console.log(ithgame)
					a.src = track_url[ithgame]
					a.play()
					fake_number = new Array()
					var fake_number1 = getRandomInt(0,49);
					while (i == fake_number1) {
						fake_number1 = getRandomInt(0,49);
					}
					fake_number.push(fake_number1)
					var fake_number2 = getRandomInt(0,49)
					while (fake_number2 == fake_number1 || fake_number2 == ithgame) {
						fake_number2 = getRandomInt(0,49);
					}
					fake_number.push(fake_number2)
					var fake_number3 = getRandomInt(0,49)
					while (fake_number3 == fake_number2 || fake_number3 == fake_number1 || fake_number1 == ithgame) {
						fake_number3 = getRandomInt(0,49)
					}
					fake_number.push(fake_number3)
					fake_number.push(ithgame)
					correct_number = getRandomInt(0,3)
					array = [1,2,3,0]
					array = shuffleArray(array)
					console.log(array)
					for (j = 0; j < 4 ; j++) {
						document.getElementById("button"+array[j]).innerHTML = track_list[fake_number[j]]["name"]
					}
					correct = track_list[ithgame]["name"]
					console.log(correct)
				
				// document.getElementById("button0")
	}

/*************************************
**                                  **
**      Here comes the home page    **
**                                  **
*************************************/

function viewrestaurant(id){
    rest_list = JSON.parse(multiplerestaurant)
    single_restaurant_array = rest_list["venues"][id]
    console.log(single_restaurant_array)
    switchpage("restaurant")
}
//
/*** This function loads the restaurant list on home page ***/
//
function loadrestaurantlist(restaurant_array) {

    document.getElementById("restaurant_list").getElementsByTagName("ul")[0].innerHTML=""
    var innertxt =""
    for (i in restaurant_array) {
        randomnumber = Math.random()
        if (randomnumber< 0.1) {
            dollarsign = "$"
        } else if (randomnumber< 0.45){
            dollarsign ="$$"
        } else if (randomnumber< 0.85){
            dollarsign ="$$$"
        } else {
            dollarsign = "$$$$"
        }
        innertxt+=""+
        '<li class="item-content " onclick="viewrestaurant('+ i +')"> ' +
            '<div class="item-inner">'+
                '<div class = "row fullwidth">' + 
                    '<div class = "col-25">' + 
                        '<img src="fake_restaurant_photo/1.jpg"  height = "70"width="70">' + 
                    '</div>' + 
                    '<div class = "col-75 left-padding-10">' +
                        '<div class = "row font-size16 fullwidth">'+ 
                            restaurant_array[i]["name"] + 
                        '</div>' +
                        '<div class = "row font-size12 fullwidth">'+ 
                            '<img class = "item-inner-star" src = "five-stars.png" height="14">' +' | '+  dollarsign +' | ' + Math.round(Math.random()*100,2) + '% return' +
                        '</div>' +
                        '<div class = "row fullwidth font-size12 float-left"><div class = "col-100"><ul class = "padding-left-no">'
                            for (j in restaurant_array[i]["categories"]) {
                                if (j < 3){
                                    innertxt+='<li class = "small-tag bg-pred color-pwhite">'+restaurant_array[i]["categories"][j]["name"]+'</li>'
                                }
                            }
                            innertxt+='</ul></div></div>'+ 
                        '<div class = "row font-size12 fullwidth">'+ 
                            'hell'+ 
                        '</div>' + 
                    '</div>' +
                '</div>' + 
            '</div>'
        '</li>'

    }
    document.getElementById("restaurant_list").getElementsByTagName("ul")[0].innerHTML = innertxt
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
    var innertxt="" +
'                <div class="content-block-inner">' +
                    '<div class = "row fullwidth">' + 
                        '<div class = "col-25">' + 
                            '<img src="fake_restaurant_photo/1.jpg" width="80" height = "80">' + 
                        '</div>' + 
                        '<div class = "col-75 left-padding-10">' +
                            '<div class = "row font-size16 fullwidth">'+ 
                                restaurantarray["name"] + 
                            '</div>' +
                            '<div class = "row font-size14 fullwidth">'+ 
                                '<img class = "item-inner-star" src = "five-stars.png" height="14">' + Math.round(Math.random()*100,2) + '% return' +
                            '</div>' +
                            '<div class = "row fullwidth font-size14 "><div class = "col-100"><ul class = "padding-left-no padding-top-no ul-no-bullet ">'
                                for (j in restaurantarray["categories"]) {
                                    if (j < 3){
                                        innertxt+='<li class = "small-tag bg-pred color-pwhite padding-top-no">'+restaurantarray["categories"][j]["name"]+'</li>'
                                    }
                                }
                                innertxt+='</ul></div></div>'+ 
                            '<div class = "row font-size14 fullwidth">'+ 
                                'hell'+ 
                            '</div>' + 
                        '</div>' +
                    '</div>' + 
'                </div>' 
    document.getElementById("restaurantcard").innerHTML=innertxt




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


function add_dish(){
	//document.getElementById("notificationbar").style.display = inline-block;
	// console.log("~~~")
    myApp.addNotification({
        title: 'Framework7',
        message: 'This is a simple notification message with title and message'
    });

}

function loadmenu(menuArray){
    console.log(menuArray)
    index = 0
    document.getElementById("menulist").getElementsByTagName("ul")[0].innerHTML = ""
    // i for menu
    // j for sections
    // k for subsections
    // l for contents, which starts from 1
    // m for options
    if (menuArray.length > 1) {
        for ( i in menuArray ) {
            flag = 0
            if (i > 0){
                var bordertop = ' border-top-solid'
            }
            
            //console.log(menuArray[i]["menu_name"])
            for (j in menuArray[i]["sections"]){
                var innertxt= ""+
    '                <div class="list-group ' +  bordertop + '  ">'+
    '                    <ul>'+
    '                        <li class="list-group-title">'+menuArray[i]["menu_name"]+' - '+ menuArray[i]["sections"][j]["section_name"]  + '</li>'
                for (k in menuArray[i]["sections"][j]["subsections"]){
                    for (l= 1 ; l < menuArray[i]["sections"][j]["subsections"][k]["contents"].length; l++){
                        // if (l > 2 ){
                        //     break
                        // }
                        var price = menuArray[i]["sections"][j]["subsections"][k]["contents"][l]["price"]
                        var name = menuArray[i]["sections"][j]["subsections"][k]["contents"][l]["name"]
                        var section_name = menuArray[i]["sections"][j]["section_name"] 
                        var subsection_name = menuArray[i]["sections"][j]["subsections"][k]["subsection_name"]
                        var description = menuArray[i]["sections"][j]["subsections"][k]["contents"][l]["description"]
                        if (!name)              {name = ""}
                        if (!price)             {price = ""}
                        if (!section_name)      {section_name = ""}
                        if (!subsection_name)   {subsection_name = ""}
                        if (!description)       {description = ""}
                        innertxt +='<li>'+
    '                                <div class="item-content">'+
    '                                  <div class="item-inner">'+
    '                                    <div class="item-title-row font-size14">'+
    '                                      <div class="item-title font-size14">'+ name+'</div>'+
    '                                      <div class="item-after font-size14">$ '+ price+'</div>'+
    '                                    </div>'+
    '                                    <div class="item-title font-size12">'+ section_name +' '+ subsection_name +'</div>'+
    '                                    <div class="item-title-row font-size12">'+
    '                                      <div class="item-text font-size12">'+ description +'</div>'+
    '                                      <div class="item-after font-size12"> '+ '<a href="#" onclick = "add_dish()" class="button  notification-default">order</a>'+
    '                                    </div>' +
    '                                  </div>'+
    '                                </div>'+
    '                              </li>'       
                    }
                }
                innertxt+="</ul></div>"
                console.log(innertxt.length)
                document.getElementById("menulist").getElementsByTagName("ul")[0].innerHTML+=innertxt
                if (flag == 0){
                    flag =1
                }
                bordertop = ""
            }
 
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
