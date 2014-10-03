curl -X POST https://api.locu.com/v2/venue/search -d '{
  "api_key" : "fcdadd1aabc9216057f6ce6052719358d6f6c79e",
  "fields": ["name", "categories", "location"],
  "venue_queries" : [
    {
      "location" : {
        "geo" : {
          "$in_lat_lng_radius" : [42.4069,-71.1198, 5000]
        }
      }
    }
  ]
}'
