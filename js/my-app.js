var single_restaurant_array =""
var toprec_index=0
var currentorder = ''
var multiplerestaurant = '{"status": "success", "http_status": 200, "venues": [{"locu_id": "006c651feb434affb3a7", "name": "The Hideout", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "nightlife", "name": "Nightlife"}, {"str_id": "pubs", "name": "Pubs"}]}, {"name": "Bistro 5", "open_hours": {"tuesday": [["17:00", "22:00"]], "friday": [["17:00", "22:00"]], "saturday": [["17:00", "22:00"]], "thursday": [["17:00", "22:00"]], "wednesday": [["17:00", "22:00"]]}, "locu_id": "00a5e98b8536c95f37ae", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "french", "name": "French"}]}, {"locu_id": "00aecdec64ae0cad364d", "name": "Crazy Dough\'s Pizza", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "pizza", "name": "Pizza"}]}, {"name": "Wet Paint Nail Spa", "open_hours": {"sunday": [["12:00", "18:00"]], "monday": [["14:00", "20:00"]], "tuesday": [["11:00", "20:00"]], "friday": [["10:00", "19:00"]], "wednesday": [["10:00", "19:00"]], "thursday": [["10:00", "19:00"]], "saturday": [["10:00", "16:00"]]}, "locu_id": "00da445483aa635f000c", "categories": [{"str_id": "spas", "name": "Day Spas"}, {"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"name": "Good Food Cafe", "open_hours": {"sunday": [["08:00", "14:00"]], "tuesday": [["06:00", "14:00"]], "friday": [["06:00", "14:00"]], "wednesday": [["06:00", "14:00"]], "thursday": [["06:00", "14:00"]], "saturday": [["07:00", "14:00"]]}, "locu_id": "010717df18f8a9c82c87", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "food", "name": "Food"}]}, {"locu_id": "013eedec51353f9ea3b9", "name": "The Painted Burro", "categories": [{"str_id": "mexican", "name": "Mexican"}, {"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "0153014354ee1e232418", "name": "The western front", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "divebars", "name": "Dive Bars"}, {"str_id": "nightlife", "name": "Nightlife"}]}, {"locu_id": "0162c81b75b56b1e5a2a", "name": "Mix Flavor Brazilian Grill", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "brazilian", "name": "Brazilian"}]}, {"name": "Precinct", "open_hours": {"sunday": [["11:30", "01:00"]], "monday": [["16:00", "01:00"]], "tuesday": [["16:00", "01:00"]], "friday": [["16:00", "02:00"]], "wednesday": [["16:00", "01:00"]], "thursday": [["16:00", "01:00"]], "saturday": [["11:30", "02:00"]]}, "locu_id": "01e46fc0d651a11f50d5", "categories": [{"str_id": "bars", "name": "Bars"}, {"str_id": "pubs", "name": "Pubs"}, {"str_id": "nightlife", "name": "Nightlife"}]}, {"locu_id": "020a51b770fe1ef36db0", "name": "Brunello Bistro", "categories": [{"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "02120f7addb1dda387d0", "name": "Tavern", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "tradamerican", "name": "Traditional American"}]}, {"name": "Taipei Tokyo Cafe", "open_hours": {"sunday": [["12:00", "09:00"]], "monday": [["11:00", "21:30"]], "tuesday": [["11:00", "21:30"]], "friday": [["11:00", "22:00"]], "wednesday": [["11:00", "21:30"]], "thursday": [["11:00", "21:30"]], "saturday": [["11:00", "22:00"]]}, "locu_id": "023a607fd75c6aac6589", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "japanese", "name": "Japanese"}]}, {"locu_id": "02d2ac37bf2c353f090f", "name": "Cafe Deia", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "coffee", "name": "Coffee & Tea"}, {"str_id": "food", "name": "Food"}, {"str_id": "breakfast_brunch", "name": "Breakfast & Brunch"}]}, {"locu_id": "031a574209edf1e0ccc2", "name": "Tenoch Mexican Taqueria", "categories": [{"str_id": "mexican", "name": "Mexican"}, {"str_id": "restaurants", "name": "Restaurants"}]}, {"name": "Starbucks", "open_hours": {"sunday": [["06:00", "21:00"]], "monday": [["05:30", "21:00"]], "tuesday": [["05:30", "21:00"]], "friday": [["05:30", "21:00"]], "wednesday": [["05:30", "21:00"]], "thursday": [["05:30", "21:00"]], "saturday": [["06:00", "21:00"]]}, "locu_id": "036334e8fff0c1fddc72", "categories": [{"str_id": "coffee", "name": "Coffee & Tea"}, {"str_id": "food", "name": "Food"}]}, {"locu_id": "03926df0bf70ec18c4d9", "name": "Sarma", "categories": [{"str_id": "other", "name": "Other"}]}, {"locu_id": "03998286559a065bbe52", "name": "Nick\'s Kitchen", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "hotdog", "name": "Hot Dogs"}]}, {"locu_id": "03cc11c0207197c9a896", "name": "Prime Turbine", "categories": [{"str_id": "appliances", "name": "Appliances"}, {"str_id": "shopping", "name": "Shopping"}, {"str_id": "homeandgarden", "name": "Home & Garden"}]}, {"name": "Nails & Co", "open_hours": {"sunday": [["10:00", "16:00"]], "monday": [["10:00", "20:00"]], "tuesday": [["10:00", "20:00"]], "friday": [["10:00", "20:00"]], "wednesday": [["10:00", "20:00"]], "thursday": [["10:00", "20:00"]], "saturday": [["09:00", "19:00"]]}, "locu_id": "03f549e535e818749eb7", "categories": [{"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"locu_id": "03fed3765a31aea48dbc", "name": "Chipotle Mexican Grill", "categories": [{"str_id": "other", "name": "Other"}]}, {"locu_id": "04018e63b6f2a5eb300a", "name": "Brazilian Ipanema Hair Salon", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "brazilian", "name": "Brazilian"}]}, {"name": "Asmara", "open_hours": {"sunday": [["17:00", "22:30"]], "friday": [["11:30", "15:00"], ["17:00", "23:30"]], "thursday": [["17:00", "22:30"]], "saturday": [["11:30", "23:30"]], "monday": [["11:30", "15:00"], ["17:00", "22:30"]]}, "locu_id": "04057d9e97ddcf762636", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "ethiopian", "name": "Ethiopian"}]}, {"locu_id": "04701ec2d80e374ace0b", "name": "Sal\'s Beauty Salon", "categories": [{"str_id": "beautysvc", "name": "Beauty & Spas"}]}, {"locu_id": "04747545f9fa08932c3e", "name": "A Taste of Sahara", "categories": [{"str_id": "restaurants", "name": "Restaurants"}]}, {"locu_id": "047ae97bc0458970f1c1", "name": "Greenhouse Cafe", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "food", "name": "Food"}]}]}'
var multiplerestaurant = '{"status": "success", "http_status": 200, "venues": [{"menus": [{"menu_name": "A La Carte", "sections": [{"subsections": [{"subsection_name": "", "contents": [{"text": "Designed to pair perfectly with our house made focaccia bread.", "type": "SECTION_TEXT"}, {"price": "7.00", "type": "ITEM", "name": "Truffled Butter"}, {"price": "6.00", "type": "ITEM", "name": "Marinated Olives"}, {"price": "6.00", "type": "ITEM", "name": "White Anchovies and Fennel-Orange Salad"}, {"price": "6.00", "type": "ITEM", "name": "House-Made Fresh Ricotta, Evoo and Lemon Zest"}, {"price": "8.00", "type": "ITEM", "name": "Salt Cod Arancini with Heirloom Tomato Sauce"}]}], "section_name": "Piattini\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "12.00", "type": "ITEM", "description": "Semolina coated, sweet & spicy tomato chutney pickled chilies and lemon aioli", "name": "Calamari"}, {"price": "15.00", "type": "ITEM", "description": "White asparagus, leeks, lobster reduction and truffled frisee", "name": "Lobster Risotto"}, {"price": "12.00", "type": "ITEM", "description": "Foie gras creme brulee, quince gelee and toasted brioche", "name": "House Cured Duck Prosciutto"}, {"price": "11.00", "type": "ITEM", "description": "Pistachio aillade and spiced cr\u00e9me fra\u00eeche", "name": "Watercress Soup"}, {"price": "10.00", "type": "ITEM", "description": "Black truffle coulis, herbed goat cheese and truffled honey", "name": "Warm Golden Beets"}, {"price": "10.00", "type": "ITEM", "description": "Pickled wright\u200f locke farm vegetables and basil vinaigrette", "name": "Mixed Greens"}]}], "section_name": "Appetizers"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "25.00", "type": "ITEM", "description": "Boar ragu, kalamata olives and ricotta", "name": "Tagliatelle"}, {"price": "25.00", "type": "ITEM", "description": "Squid ink and saffron spaghetti, clams, calamari, baby octopus, capers, green olives and plum tomatoes", "name": "Spaghetti Alla Chitarra"}, {"price": "23.00", "type": "ITEM", "description": "Organic mushrooms, truffled panko and parmigiano", "name": "Gnocchi"}]}], "section_name": "Handmade Pastas\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "27.00", "type": "ITEM", "description": "Ginger-kuri squash pur\u00e9e, braised endive and kumquat vinaigrette", "name": "Faroe Island Salmon"}, {"price": "27.00", "type": "ITEM", "description": "Carrot risotto and proscuitto bits", "name": "Sea Scallops"}, {"price": "29.00", "type": "ITEM", "description": "Confit leg with white bean-fennel ragu; seared loin with speck proscuitto and raddichio", "name": "Rabbit"}, {"price": "23.00", "type": "ITEM", "description": "Meyer lemon sauce, broccoli rabe, carmelized onions and fingerling potatoes", "name": "Free Range Chicken"}, {"price": "32.00", "type": "ITEM", "description": "Pommes dauphinoise,\u200f swiss chard, oyster mushrooms and rosemary demi glace", "name": "Grilled Strip Steak"}, {"price": "29.00", "type": "ITEM", "description": "Pistachio-panko bread crumbs, garlic mashed potatoes, porcini mushroom sauce and zucchini", "name": "Veal Milanese"}]}], "section_name": "Entrees"}], "currency_symbol": "$"}, {"menu_name": "Chef\u0027s Tasting", "sections": [{"subsections": [{"subsection_name": "", "contents": [{"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2012 Pine Ridge, Chenin Blanc, Napa"}]}], "type": "ITEM", "description": "Watercress, pistachio and spiced creme fraiche", "name": "Soup"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2011 Le Salse, Verdiccio, Matelica"}]}], "type": "ITEM", "description": "Poached with haddock and saffron nage", "name": "Oysters"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2012 Domaine Brazilier, Ros\u00e9 (pinot D\u0027aunis), Coteaux Du Vendomois"}]}], "type": "ITEM", "description": "Sardinian couscous, clams, baby squid and heirloom tomatoes", "name": "Fregola"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2009 Jones Family, Cabernet Sauvignon, Washington State"}]}], "type": "ITEM", "description": "Coffee braised shank with bone marrow and spicy panko", "name": "Beef Shank"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2012 Zagara, MoscatD d\u2019asti"}]}], "type": "ITEM", "description": "Greek yogurt and vanilla bean with quince, honey and orange zest", "name": "Panna Cotta"}]}], "section_name": ""}], "currency_symbol": "$"}, {"menu_name": "Dessert", "sections": [{"subsections": [{"subsection_name": "", "contents": [{"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "compote Offley\u2019s 10 Year Old Tawny Port"}]}], "type": "ITEM", "description": "Vanilla-mascarpone custard with blueberry", "name": "Creme Brulee"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2012 Zagara, Moscato D\u2019asti"}]}], "type": "ITEM", "description": "Chocolate ganache & vanilla bean gelato", "name": "Profiteroles"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "Boston Bual \u201cHistoric Series\u201d Madeira"}]}], "type": "ITEM", "description": "Kuri squash gelato, golden raisins & almond crust", "name": "Apple Crisp"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2011 Elio Perrone \u2018Bigar\u00f2\u2019, Brachetto d\u2019Aqui"}]}], "type": "ITEM", "description": "Flourless chocolate cake with ginger-caramel cream; chocolate sorbet with sesame-orange tuille; hot mexican chocolate with mini marshmallow", "name": "Chocolate Trio"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "2006 FrescoBaldi, Vin Santo"}]}], "type": "ITEM", "description": "Almond or Chocolate", "name": "Biscotti"}, {"type": "ITEM", "description": "Almond cookie\u200f served with traditional dessert wine", "name": "Biscotti e Vin Santo"}, {"option_groups": [{"text": "Wine", "type": "OPTION_CHOOSE", "options": [{"name": "Pedro Ximenez, Sherry, Barbadillo"}]}], "type": "ITEM", "description": "Selection of three ripe cheeses", "name": "Cheese Plate"}]}], "section_name": "Desserts and Pairings\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "10.00", "type": "ITEM", "name": "2007 Pacific Rim, Riesling, Vin de Glaciere"}, {"price": "12.00", "type": "ITEM", "name": "2006 FrescoBaldi, Vin Santo"}, {"price": "9.00", "type": "ITEM", "name": "2010 Elio Perrone \u2018Bigar\u00f2\u2019, Brachetto d\u2019Aqui"}, {"price": "9.00", "type": "ITEM", "name": "2009 Zagara, Moscato d\u2019Asti"}, {"price": "10.00", "type": "ITEM", "name": "2008 The Stump Jump \u201cSticky Chardonnay\u201d"}, {"price": "12.00", "type": "ITEM", "name": "2003 Castelnau de Suduirant, Sauternes"}]}], "section_name": "Dessert Wines"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "9.00", "type": "ITEM", "name": "Pedro Ximenez, La Cilla, Sherry"}, {"price": "9.00", "type": "ITEM", "name": "Graham\u0027s Six Grape Ruby Port"}, {"price": "10.00", "type": "ITEM", "name": "Offley\u0027s 10-Year Old Tawny Port"}, {"price": "10.00", "type": "ITEM", "name": "2001 Dow\u0027s LBV Ruby Port"}, {"price": "12.00", "type": "ITEM", "name": "Taylor 20-Year Old Tawny Port"}]}], "section_name": "Port, Sherry & Madiera\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"type": "ITEM", "name": "Scotch"}, {"type": "ITEM", "name": "Cordials"}, {"type": "ITEM", "name": "Dewar\u2019s White"}, {"type": "ITEM", "name": "Grappa di Barolo"}, {"type": "ITEM", "name": "Johnnie Walker Black"}, {"type": "ITEM", "name": "Amaro di Montenegro"}, {"type": "ITEM", "name": "Laphroiag 10 year"}, {"type": "ITEM", "name": "Fernet Branca"}, {"type": "ITEM", "name": "Macallan 12 year"}, {"type": "ITEM", "name": "Cynar"}, {"type": "ITEM", "name": "Glenlivet 12 year"}, {"type": "ITEM", "name": "Sambuca (Black or White)"}, {"type": "ITEM", "name": "Bourbon"}, {"type": "ITEM", "name": "Frangelico"}, {"type": "ITEM", "name": "Southern Comfort"}, {"type": "ITEM", "name": "Kahlua"}, {"type": "ITEM", "name": "Maker\u2019s Mark"}, {"type": "ITEM", "name": "Bailey\u2019s"}, {"type": "ITEM", "name": "Bulleit"}, {"type": "ITEM", "name": "Amaretto di Amore"}, {"type": "ITEM", "name": "Blanton\u2019s"}, {"type": "ITEM", "name": "Capucello Chocolate Cream"}, {"type": "ITEM", "name": "Limoncello"}, {"type": "ITEM", "name": "Whiskey & Rye"}, {"type": "ITEM", "name": "Saint Germain"}, {"type": "ITEM", "name": "Crown Royal"}, {"type": "ITEM", "name": "Domaine de Canton"}, {"type": "ITEM", "name": "Jack Daniel\u2019s"}, {"type": "ITEM", "name": "Grand Marnier"}, {"type": "ITEM", "name": "Bulliet Rye"}, {"type": "ITEM", "name": "Grand Marnier 150th Anniversary"}]}], "section_name": "Cordials & More"}], "currency_symbol": "$"}, {"menu_name": "Wines", "sections": [{"subsections": [{"subsection_name": "", "contents": [{"text": "Bottled", "type": "SECTION_TEXT"}, {"price": "5.00", "type": "ITEM", "name": "Amstel Light, Holland"}, {"price": "10.00", "type": "ITEM", "name": "Chimay Rouge, Belgium"}, {"price": "5.00", "type": "ITEM", "name": "Buckler Non-Alcoholic, Holland"}, {"text": "Draught", "type": "SECTION_TEXT"}, {"price": "8.00", "type": "ITEM", "name": "Whale\u0027s Tale Pale Ale, Cisco Brewing, Nantucket"}, {"price": "8.00", "type": "ITEM", "name": "Fisherman\u0027s Ale, Cape Ann"}, {"price": "9.00", "type": "ITEM", "name": "Green Flash IPA, San Diego"}, {"price": "9.00", "type": "ITEM", "name": "Founder\u0027s Outmeal Breakfast Stout, Grand Rapids"}]}], "section_name": "Beer\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "45.00", "type": "ITEM", "name": "2010 Silverado, Cabernet, Napa Valley"}, {"price": "25.00", "type": "ITEM", "name": "2007 Cantina Fratelli Pardi, Montefalco Rosso"}]}], "section_name": "Half Bottles"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "45.00", "type": "ITEM", "description": "Half", "name": "N.V. Nicolas Feuillatte, Champagne"}, {"price": "48.00", "type": "ITEM", "description": "Half", "name": "N.V. Ayala Brut Majeur, Champagne"}, {"price": "30.00", "type": "ITEM", "name": "N.V. Il Faggeto, Prosecco, Veneto"}, {"price": "43.00", "type": "ITEM", "name": "N.V. Carpene Malvolti, Prosecco di Conegliano"}, {"price": "56.00", "type": "ITEM", "name": "2005 Westport Rivers, Sparkling Wine, Westport"}, {"price": "74.00", "type": "ITEM", "name": "N.V. Nicolas Feuillatte"}, {"price": "80.00", "type": "ITEM", "name": "N.V. Ayala Brut Majeur"}, {"price": "85.00", "type": "ITEM", "name": "N.V. Perrier Jouet, Grand Brut"}, {"price": "95.00", "type": "ITEM", "name": "N.V. Taittinger Brut"}, {"price": "120.00", "type": "ITEM", "name": "N.V. Perrier Jouet, Blason Rose"}]}], "section_name": "Sparkling Wines & Champagne\u200f"}, {"subsections": [{"subsection_name": "", "contents": [{"price": "32.00", "type": "ITEM", "name": "2012 Domaine Brazilier, C\u00f4teaux du Vend\u00f4mois"}, {"price": "29.00", "type": "ITEM", "name": "2012 Artazuri, Garnacha, Spain"}]}], "section_name": "Rose"}, {"subsections": [{"subsection_name": "Around the World", "contents": [{"price": "29.00", "type": "ITEM", "name": "Huber Hugo, Gr\u00fcner Veltliner, Austria"}, {"price": "32.00", "type": "ITEM", "name": "2013 Montes, Sauvignon Blanc, Chile"}, {"price": "36.00", "type": "ITEM", "name": "2012 Loosen Brother\u0027s, Dr. L, Riesling"}]}, {"subsection_name": "France", "contents": [{"price": "33.00", "type": "ITEM", "name": "2012 Domaine F\u00e9lines Jourdan, Picpoul de Pinet"}, {"price": "36.00", "type": "ITEM", "name": "2011 Larochette Manciat, M\u00e2con Les Morizottes"}, {"price": "42.00", "type": "ITEM", "name": "2011 Domaine du Saint Pierre, Sancerre"}, {"price": "58.00", "type": "ITEM", "name": "2010 Domaine du Vieux Lazaret, Ch\u00e2teauneuf du Pape"}, {"price": "90.00", "type": "ITEM", "name": "2010 Louis Latour, Puligny-Montrachet"}, {"price": "90.00", "type": "ITEM", "name": "2010 Olivier Leflaive, Puligny-Montrachet"}]}, {"subsection_name": "Italy", "contents": [{"price": "29.00", "type": "ITEM", "name": "2010 Ca\u2019 Stella, Pinot Grigio, Fruili"}, {"price": "30.00", "type": "ITEM", "name": "2012 Aragosta, Vermentino, Sardegna"}, {"price": "38.00", "type": "ITEM", "name": "2010 Feudi di San Gregorio, Falanghina, Campania"}, {"price": "38.00", "type": "ITEM", "name": "2010 Le Bruniche, Chardonnay, Toscana"}, {"price": "30.00", "type": "ITEM", "name": "2012 Le Salse, Verdicchio, Matelica"}, {"price": "49.00", "type": "ITEM", "name": "2011 Bruno Giacosa, Arneis, Piemonte"}]}, {"subsection_name": "U.S.", "contents": [{"price": "33.00", "type": "ITEM", "name": "2012 Pine Ridge, Chenin Blanc-Viognier, Napa Valley"}, {"price": "34.00", "type": "ITEM", "name": "2012 Acrobat, Pinot Gris, Oregon"}, {"price": "38.00", "type": "ITEM", "name": "2011 Honig, Sauvignon Blanc, Napa"}, {"price": "44.00", "type": "ITEM", "name": "2007 Bonny Doon \u2018Le Cigare Blanc\u2019, Rhone Blend, Santa Cruz"}, {"price": "47.00", "type": "ITEM", "name": "2009 Starmont, Chardonnay, Napa"}, {"price": "50.00", "type": "ITEM", "name": "2010 Sonoma-Cutrer, Chardonnay, Sonoma"}, {"price": "60.00", "type": "ITEM", "name": "2008 Jordan, Chardonnay, Russian River Valley"}, {"price": "76.00", "type": "ITEM", "name": "2008 Flowers, Chardonnay, Sonoma Coast"}]}], "section_name": "White Wines\u200f"}, {"subsections": [{"subsection_name": "Around The World", "contents": [{"price": "33.00", "type": "ITEM", "name": "2011 Masi, Passo Doble, Malbec, Mendoza, Argentina"}, {"price": "46.00", "type": "ITEM", "name": "2012 Paul Hobb\u2019s \u2018Felino\u2019, Malbec, Mendoza, Argentina"}, {"price": "50.00", "type": "ITEM", "name": "2007 Marqu\u00e9s de Murrieta, Reserva, Rioja, Spain"}, {"price": "39.00", "type": "ITEM", "name": "2010 The Stump Jump, Shiraz, Australia"}]}, {"subsection_name": "France", "contents": []}, {"subsection_name": "Bordeaux", "contents": [{"price": "42.00", "type": "ITEM", "name": "2009 Andr\u00e9 Lurton Ch\u00e2teau Bonnet, Bordeaux"}, {"price": "49.00", "type": "ITEM", "name": "2009 R\u00e9serve du Ch\u00e2teau Reysson, Haut Medoc"}, {"price": "45.00", "type": "ITEM", "name": "2008 Ch\u00e2teau Martinat, C\u00f4tes de Bourg"}, {"price": "65.00", "type": "ITEM", "name": "2007 La Bastide Dauzac, Margaux"}]}, {"subsection_name": "Rhone", "contents": [{"price": "38.00", "type": "ITEM", "name": "2009 La Grange de Piaugier, C\u00f4tes du Rhone"}, {"price": "45.00", "type": "ITEM", "name": "2006 E.Guigal, Crozes Hermitage"}, {"price": "58.00", "type": "ITEM", "name": "2006 Lesec \u2018Pierres Dor\u00e9es\u2019, Ch\u00e2teauneuf du Pape"}, {"price": "65.00", "type": "ITEM", "name": "2007 J.L. Chave \u2018Offerus\u2019, Saint Joseph"}, {"price": "70.00", "type": "ITEM", "name": "2008 Domaine Lazaret, Ch\u00e2teauneuf du Pape"}]}, {"subsection_name": "Burgundy", "contents": [{"price": "58.00", "type": "ITEM", "name": "2009 Domaine de la Monette Mercurey, \u201cLe Saut Muchiau\u201d"}, {"price": "65.00", "type": "ITEM", "name": "2010 Benjamin Leroux, Savigny-Les-Beaune"}, {"price": "98.00", "type": "ITEM", "name": "2009 Oliver Bernstein, Gevrey Chambertin"}]}, {"subsection_name": "U.S.", "contents": []}, {"subsection_name": "Blends and Other", "contents": [{"price": "35.00", "type": "ITEM", "name": "2009 Bonny Doon \u2018Contra\u2019, Carignane Blend, CA"}, {"price": "46.00", "type": "ITEM", "name": "2009 David Bruce, Petite Sirah, Central Coast"}, {"price": "54.00", "type": "ITEM", "name": "NV9 Cain Cuv\u00e9e, Napa Valley"}, {"price": "105.00", "type": "ITEM", "name": "2006 Merryvale, \u2018Profile\u2019, Cabernet Blend, Napa"}]}, {"subsection_name": "Pinot Noir", "contents": [{"price": "39.00", "type": "ITEM", "name": "2012 Five Rivers, California"}, {"price": "45.00", "type": "ITEM", "name": "2011 Stafford Hill by Holloran, Eola-Amity Hills"}, {"price": "60.00", "type": "ITEM", "name": "2011 King Estate, Oregon"}]}, {"subsection_name": "Merlot", "contents": [{"price": "45.00", "type": "ITEM", "name": "2009 Tangley Oaks, Napa"}]}, {"subsection_name": "Cabernet Sauvignon", "contents": [{"price": "38.00", "type": "ITEM", "name": "2011 Kunde Family Estate, Sonoma Valley"}, {"price": "46.00", "type": "ITEM", "name": "2011 Joseph Carr, Cabernet Sauvignon"}, {"price": "38.00", "type": "ITEM", "name": "2009 Jones Family, Cabernet Sauvignon, Washington"}, {"price": "65.00", "type": "ITEM", "name": "2010 Sequoia Grove, Rutherford"}, {"price": "72.00", "type": "ITEM", "name": "2010 Stag\u2019s Leap \u2018Artemis\u2019, Napa Valley"}, {"price": "100.00", "type": "ITEM", "name": "2010 Trefethen \u2018Library Selection\u2019, Napa Valley"}]}, {"subsection_name": "Zinfandel", "contents": [{"price": "74.00", "type": "ITEM", "name": "2011 Turley, Zinfandel"}, {"price": "76.00", "type": "ITEM", "name": "2012 Orin Swift \u2018Prisoner\u2019, Zinfandel Blend, Napa Valley"}]}, {"subsection_name": "Italy", "contents": []}, {"subsection_name": "Piedmonte", "contents": [{"price": "32.00", "type": "ITEM", "name": "2011 Michele Chiarlo, Barbera d\u2019Asti"}, {"price": "35.00", "type": "ITEM", "name": "2012 G.B. Burlotto, Dolcetto d\u2019Alba"}, {"price": "45.00", "type": "ITEM", "name": "2008 Pio Cesare, \u201cOltre\u201d"}, {"price": "48.00", "type": "ITEM", "name": "2011 Mauro Sebaste, Nebbiolo"}, {"price": "62.00", "type": "ITEM", "name": "2007 Montaribaldi, Barbaresco"}, {"price": "62.00", "type": "ITEM", "name": "2009 Giacomo Grimaldi, Barolo"}, {"price": "74.00", "type": "ITEM", "name": "2007 Ceretto \u2018Zonchera\u2019, Barolo"}]}, {"subsection_name": "Veneto", "contents": [{"price": "37.00", "type": "ITEM", "name": "2010 Sartori di Verona, Valpolicella"}, {"price": "46.00", "type": "ITEM", "name": "2009 Allegrini, Palazzo della Torre, Ripasso"}, {"price": "85.00", "type": "ITEM", "name": "2009 Sartori di Verona, Amarone della Valpolicella"}, {"price": "55.00", "type": "ITEM", "name": "2010 Zenato, Valpolicella, Ripasso"}]}, {"subsection_name": "Toscana", "contents": [{"price": "32.00", "type": "ITEM", "name": "2012 Donna Laura, Chianti"}, {"price": "43.00", "type": "ITEM", "name": "2008 Rocca delle Mac\u00ece Riserva, Chianti Classico"}, {"price": "45.00", "type": "ITEM", "name": "2008 Val delle Rose, Morellino di Scansano"}, {"price": "50.00", "type": "ITEM", "name": "2010 Dei, Vino Nobile di Montepulciano"}, {"price": "51.00", "type": "ITEM", "name": "2011 Ornellaia \u2018Le Volte\u2019, Sangiovese Blend"}, {"price": "52.00", "type": "ITEM", "name": "2011 Banfi, Rosso di Montalcino"}, {"price": "58.00", "type": "ITEM", "name": "2009 Campo Al Mare, Bolgheri"}, {"price": "60.00", "type": "ITEM", "name": "2010 Banfi \u2018Cum Laude\u2019, Sangiovese Blend, Montalcino"}, {"price": "70.00", "type": "ITEM", "name": "2010 Montepeloso, Eneo, Super Tuscan Blend"}, {"price": "98.00", "type": "ITEM", "name": "2010 Ornellaia \u2018Le Serre Nuove\u2019, Bolgheri"}, {"price": "100.00", "type": "ITEM", "name": "2007 Frescobaldi Castel Giocondo, Brunello di Montalcino"}, {"price": "100.00", "type": "ITEM", "name": "2007 Banfi, Brunello di Montalcino"}, {"price": "150.00", "type": "ITEM", "name": "2009 Antinori, Tignanello"}]}, {"subsection_name": "Campania", "contents": [{"price": "35.00", "type": "ITEM", "name": "2009 Monte Faliesi, Aglianico"}, {"price": "75.00", "type": "ITEM", "name": "2007 Monte Faliesi, Taurasi"}]}, {"subsection_name": "Abruzzo", "contents": [{"price": "34.00", "type": "ITEM", "name": "2012 Gran Sasso, Montepulciano d\u2019Abruzzo"}]}, {"subsection_name": "Puglia", "contents": [{"price": "32.00", "type": "ITEM", "name": "2010 Maretima, Primitivo"}, {"price": "55.00", "type": "ITEM", "name": "2006 Il Falcone Riserva, Nero di Troia Blend"}]}, {"subsection_name": "Sicilia", "contents": [{"price": "32.00", "type": "ITEM", "name": "2012 Villa Pozzi, Nero d\u2019Avola"}]}], "section_name": "Red Wines"}], "currency_symbol": "$"}], "locu_id": "00a5e98b8536c95f37ae", "name": "Bistro 5", "categories": [{"str_id": "restaurants", "name": "Restaurants"}, {"str_id": "french", "name": "French"}], "location": {"postal_code": "02155", "locality": "Medford", "address1": "5 Playstead Rd.", "region": "MA", "country": "United States", "geo": {"type": "Point", "coordinates": [-71.132524, 42.421375]}}}]}'


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
        //console.log(single_restaurant_array)
        //console.log(restaurant_array)
        // Get restaurant name on navbar
        document.getElementById("navbartitle").innerHTML='<a href="#" class="color-white">'+
        single_restaurant_array["name"]+
        '</a>'
        //load restaurant info card
        loadrestaurantcard(single_restaurant_array)
        //load top three
        //loadtopthree(single_restaurant_array["menus"])
        //load menu
        loadmenu(single_restaurant_array["menus"])

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
        
        //console.log(multiplerestaurant)

        rest_list = JSON.parse(multiplerestaurant)

        loadrestaurantlist(rest_list["venues"])
    }
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
                    '<div class = "col-75 ">' +
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
                            '<img src="fake_restaurant_photo/1.jpg" width="70" height = "70">' + 
                        '</div>' + 
                        '<div class = "col-75 ">' +
                            '<div class = "row font-size16 fullwidth">'+ 
                                restaurantarray["name"] + 
                            '</div>' +
                            '<div class = "row font-size12 fullwidth">'+ 
                                '<img class = "item-inner-star" src = "five-stars.png" height="14">' +' | '+  dollarsign +' | ' + Math.round(Math.random()*100,2) + '% return' +
                            '</div>' +
                            '<div class = "row fullwidth font-size12 "><div class = "col-100"><ul class = "padding-left-no padding-top-no ul-no-bullet ">'
                                for (j in restaurantarray["categories"]) {
                                    if (j < 3){
                                        innertxt+='<li class = "small-tag bg-pred color-pwhite padding-top-no">'+restaurantarray["categories"][j]["name"]+'</li>'
                                    }
                                }
                                innertxt+='</ul></div></div>'+ 
                            '<div class = "row font-size12 fullwidth">'+ 
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
    '                <li class="accordion-item">'+
    '                    <a href="#" class="item-content item-link">'+
    '                        <div class="item-inner ' +  bordertop + '  ">'+
    '                            <div class="item-title">'+menuArray[i]["menu_name"]+' - '+ menuArray[i]["sections"][j]["section_name"]  + '</div>'+
    '                            </div>'+
    '                        </a>'+
    '                        <div class="accordion-item-content">'+
    '                         <div class="list-block media-list">'+
    '                            <ul>'
                for (k in menuArray[i]["sections"][j]["subsections"]){
                    for (l= 1 ; l < menuArray[i]["sections"][j]["subsections"][k]["contents"].length; l++){
                        if (l > 2 ){
                            break
                        }
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
                        innertxt +='<li class="swipeout">'+
    '                                <div class="swipeout-content item-content">'+
    '                                  <div class="item-inner">'+
    '                                    <div class="item-title-row">'+
    '                                      <div class="item-title">'+ name+'</div>'+
    '                                      <div class="item-after">$ '+ price+'</div>'+
    '                                    </div>'+
    '                                    <div class="item-subtitle">'+ section_name +' '+ subsection_name +'</div>'+
    '                                    <div class="item-text">'+ description +'</div>'+
    '                                  </div>'+
    '                                </div>'+
    '                                <div class="swipeout-actions-right">'+
    '                                  <a href="#" onclick="addCurrentOrder(1920)" class="action1 bg-green">Add</a>'+
    '                                </div>'+
    '                                <div class="swipeout-actions-left">'+
    '                                  <a href="#" class="action1 bg-red">Nah...next</a>'+
    '                                </div>'+
    '                              </li>'       
                    }
                }
                innertxt+="</ul></div></div></a></li>"  
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
