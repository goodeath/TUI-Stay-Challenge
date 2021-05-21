# Parser Data
---
This is a helper tool to get data from https://test.api.amadeus.com/v2/shopping/hotel-offers and 
http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey} endpoints, and split it in many files to be inserted in mongo database.

You can run it using by creating files in folders: hotelsData, weatherData and running the following command:

```sh
$ yarn generate-data
```

NOTE: weatherData files need to have same name of cityCode.
