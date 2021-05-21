# TUI Stay Challenge

Rest API Developed to find best/cheapest hotel offers.

## Structure

This project it's a simplified version of an hotel search engine. It was developed using some techniques like Repository pattern, Functional Programming, OOP and based on MVC Architecture. Follows the main folders description

-   `/src/index.ts`: It's the application bootstrap. It starts express server;

-   `/collections`: Used collections to develop this API;

-   `/src/api/`: Controller classes for each one of routes;

-   `/src/config/`: Application configs. Currently, only have a file to connect with mongodb;

-   `/src/middlewares/`: Middlewares to be used with _express_ ;

-   `/src/models/`: MongoDB models to access database;

-   `/src/repositories/`: Repositories that exports an interface to user be able to manipulate database data;

-   `/src/routers/`: Express routers to expose api access;

-   `/src/utils/`: Some helper functions;

-   `/tests/`: Test files;

-   `/tools/`: Some script tools like ParserData, that get api data and convert it to be inserted in database;

**Overview:**

```

.
├── collections
│   ├── hotel-offer.json
│   └── hotel.json
├── src
│   ├── api
│   │   ├── HotelApi.ts
│   |   └── HotelOfferApi.ts
│   ├── config
│   |   └── database.ts
│   ├── middlewares
│   |   └── LogAccessMiddleware.ts
│   ├── models
│   │   ├── Hotel.ts
│   │   ├── HotelOffer.ts
│   |   └── Weather.ts
│   ├── models
│   │   ├── HotelOfferRepository.ts
│   |   └── HotelRepository.ts
│   ├── routers
│   │   ├── hotelOfferRouter.ts
│   |   └── hotelRouter.ts
│   ├── utils
│   |   └── omitUndefined.ts
│   └── index.ts
├── tests
│   ├── integration
│   |   ├── HotelApi.test.ts
│   |   └── HotelOfferApi.test.ts
│   └── setupTests.test.ts
├── tools
│   ├── parserData
│   │   ├── hotelsData
│   │   ├── output
│   │   ├── pojos
│   │   │   ├── HotelOffer.ts
│   │   │   └── Hotel.ts
│   │   ├── transformer
│   │   │   ├── HotelOfferTransformer.ts
│   │   │   └── HotelTransformer.ts
│   │   ├── weatherData
│   │   ├── ParserData.ts
│   │   ├── readme.md
│   |   └── utils.ts
│   └── initDatabase
│       └── InitDatabase.ts
├── .git/
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── jest.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Settings

**Requirements:**

-   Git - https://git-scm.com/downloads

-   Docker - https://docs.docker.com/engine/install/

-   Docker Compose - https://docs.docker.com/compose/install/

-   NodeJS - https://nodejs.org/en/download/

-   Yarn - https://yarnpkg.com/

After you already have these requirements:

1. Clone this repository: `git clone https://github.com/daltroedu/framework-challenge.git`
2. Access directory: `cd tuigroup/`
3. Install node_modules: `yarn install`
4. Copy .env.example and fill with your data
5. Start mongodb container: `docker-compese up`
6. Create database with default data: `yarn db:make`
6. Run api: `yarn start`

## API

Default endpoint: `http://localhost:4000/...`

? ahead of property, means that it's optional.

### Hotel

-   **[GET]** `/hotels`

    List Hotels.

    Query Params:

    ```JSON
    {
        "id?": "RTSAOPCT",
        "name?": "Mercure Sao Paulo Central Towers Hotel",
        "cityCode?": "SAO",
        "rating?": "4"
    }
    ```

    Response:

    ```JSON
        [
            {
                "_id": "60a7fd1233395c78ca1b014a",
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4,
                "offers": [
                    {
                        "adults": 1,
                        "id": "TR4MD42FL5",
                        "available": true,
                        "roomQuantity": 1,
                        "total": 1065
                    },
                    {
                        "adults": 1,
                        "id": "8K991VVB7Y",
                        "available": true,
                        "roomQuantity": 1,
                        "total": 1595
                    },
                    {
                        "adults": 1,
                        "id": "0FASXOZY5Z",
                        "available": true,
                        "roomQuantity": 1,
                        "total": 183.8
                    },
                    {
                        "adults": 1,
                        "id": "RDXHWIUUGQ",
                        "available": true,
                        "roomQuantity": 1,
                        "total": 178.8
                    },
                    {
                        "adults": 1,
                        "id": "2YN56IPYUP",
                        "available": true,
                        "roomQuantity": 1,
                        "total": 375.95
                    },
                    {
                        "adults": 1,
                        "id": "DORAT33UOX",
                        "available": true,
                        "roomQuantity": 1,
                        "total": 370.95
                    },
                    {
                        "adults": 1,
                        "id": "AJAMEYGG29",
                        "available": true,
                        "roomQuantity": 1,
                        "total": 1065
                    },
                    {
                        "adults": 1,
                        "id": "87DO9J9Z9S",
                        "available": true,
                        "roomQuantity": 1,
                        "total": 1595
                    }
                ]
            }
        ]
    ```

### Hotel Offers

-   **[GET]** `/offers`

    List all hotel offers

    Query Params:

    ```JSON
    {
        "adults?": 1,
        "available?": true,
        "roomQuantity?": 1,
        "cityCode?": "SAO"
    }
    ```

    Response:

    ```JSON
    [
        {
            "hotel": {
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4
            },
            "_id": "60a7fd1233395c78ca1b015b",
            "adults": 1,
            "id": "TR4MD42FL5",
            "available": true,
            "roomQuantity": 1,
            "total": 1065
        },
        {
            "hotel": {
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4
            },
            "_id": "60a7fd1233395c78ca1b015c",
            "adults": 1,
            "id": "8K991VVB7Y",
            "available": true,
            "roomQuantity": 1,
            "total": 1595
        },
        {
            "hotel": {
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4
            },
            "_id": "60a7fd1233395c78ca1b015d",
            "adults": 1,
            "id": "0FASXOZY5Z",
            "available": true,
            "roomQuantity": 1,
            "total": 183.8
        },
        {
            "hotel": {
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4
            },
            "_id": "60a7fd1233395c78ca1b015e",
            "adults": 1,
            "id": "RDXHWIUUGQ",
            "available": true,
            "roomQuantity": 1,
            "total": 178.8
        },
        {
            "hotel": {
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4
            },
            "_id": "60a7fd1233395c78ca1b015f",
            "adults": 1,
            "id": "2YN56IPYUP",
            "available": true,
            "roomQuantity": 1,
            "total": 375.95
        },
        {
            "hotel": {
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4
            },
            "_id": "60a7fd1233395c78ca1b0160",
            "adults": 1,
            "id": "DORAT33UOX",
            "available": true,
            "roomQuantity": 1,
            "total": 370.95
        },
        {
            "hotel": {
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4
            },
            "_id": "60a7fd1233395c78ca1b0161",
            "adults": 1,
            "id": "AJAMEYGG29",
            "available": true,
            "roomQuantity": 1,
            "total": 1065
        },
        {
            "hotel": {
                "id": "RTSAOPCT",
                "cityCode": "SAO",
                "name": "Mercure Sao Paulo Central Towers Hotel",
                "rating": 4
            },
            "_id": "60a7fd1233395c78ca1b0162",
            "adults": 1,
            "id": "87DO9J9Z9S",
            "available": true,
            "roomQuantity": 1,
            "total": 1595
        }
    ]
    ```

-   **[GET]** `/offers/:id`

    View details of a specific hotel offer

    :id - Offer Id

    Request `/offers/:TR4MD42FL5`

    Response:

    ```JSON
    {
        "hotel": {
            "id": "RTSAOPCT",
            "cityCode": "SAO",
            "name": "Mercure Sao Paulo Central Towers Hotel",
            "rating": 4
        },
        "_id": "60a7fd1233395c78ca1b015b",
        "adults": 1,
        "id": "TR4MD42FL5",
        "available": true,
        "roomQuantity": 1,
        "total": 1065
    }
    ```



-   **[GET]** `/offers/by-hotel/:id`

    List all offers from a specific hotel.

    :id - Hotel Id

    Request `/offers/by-hotel/HSCBPAAC`

    Response:

    ```JSON
    [
        {
            "hotel": {
                "id": "HSCBPAAC",
                "cityCode": "CBP",
                "name": "Oslo",
                "rating": 3
            },
            "_id": "60a7fd1233395c78ca1b016d",
            "adults": 2,
            "id": "56IWNKPAD3",
            "available": true,
            "roomQuantity": 1,
            "total": 108.3
        },
        {
            "hotel": {
                "id": "HSCBPAAC",
                "cityCode": "CBP",
                "name": "Oslo",
                "rating": 3
            },
            "_id": "60a7fd1233395c78ca1b016e",
            "adults": 2,
            "id": "CUOHX3OG1D",
            "available": true,
            "roomQuantity": 1,
            "total": 114
        }
    ]
    ```

### Tests

1. Remind of fill .env db test variables
2. You can run application tests by run following command: `yarn test`

### Further Improvements

1. Search hotels by address instead City Code (Maybe using Google Geolocation API); 
2. Provide more search options; 
3. Improve database data; 
4. Route to find hotels near of user, by getting user geolocation;
5. Block multiple requests in short time space from same IP to prevent DDoS attacks;
6. Store cityCode: cityName to be able to put weather and offers data together more easily.