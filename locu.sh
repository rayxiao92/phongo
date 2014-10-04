# while read line
# do
  curl -X POST https://api.locu.com/v2/venue/search -d '{
    "api_key" : "ecc4cdde72c7e50c9f859a71d3408cfa2db8eb8f",
    "fields" : [ "name", "location", "menus", "categories"  ],
    "venue_queries" : [
        { "locu_id" : "00a5e98b8536c95f37ae"},  
        { "locu_id" : "00da445483aa635f000c"},  
        { "locu_id" : "010717df18f8a9c82c87"},  
        { "locu_id" : "013eedec51353f9ea3b9"},  
        { "locu_id" : "0153014354ee1e232418"},  
        { "locu_id" : "0162c81b75b56b1e5a2a"},  
        { "locu_id" : "01e46fc0d651a11f50d5"},  
        { "locu_id" : "023a607fd75c6aac6589"},  
        { "locu_id" : "02d2ac37bf2c353f090f"},  
        { "locu_id" : "031a574209edf1e0ccc2"},  
        { "locu_id" : "03f549e535e818749eb7"},  
        { "locu_id" : "04018e63b6f2a5eb300a"},  
        { "locu_id" : "04057d9e97ddcf762636"},  
        { "locu_id" : "04747545f9fa08932c3e"},  
        { "locu_id" : "04b1357b922e1570765a"},  
        { "locu_id" : "04baf2376de710379255"},  
        { "locu_id" : "04dc24d5b9fad456fa98"},  
        { "locu_id" : "0627be25c87889ee030c"},  
        { "locu_id" : "0778307e56a13198f685"},  
        { "locu_id" : "07ad1ed4651f4d4bd3e0"},  
        { "locu_id" : "07c15d06ae55fbef124c"},  
        { "locu_id" : "07f56a71304ca1c5c090"},  
        { "locu_id" : "08672e26f5a9df648090"},  
        { "locu_id" : "08677992f576d34a9e2b"},  
        { "locu_id" : "08b8ef0f97a4511b2b8a"} 
    ]
  }' 
#   sleep 2
# done < $1

  # curl -X POST https://api.locu.com/v2/venue/search -d '{
  #   "api_key" : "ecc4cdde72c7e50c9f859a71d3408cfa2db8eb8f",
  #   "fields" : [ "locu_id", "location", "menus"  ],
  #   "venue_queries" : [
  #     { "locu_id":"013eedec51353f9ea3b9" }
  #   ]
  # }' 
