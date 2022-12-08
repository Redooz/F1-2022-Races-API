# F1 2022 API

This API project uses my [F1 scraping project](https://github.com/Redooz/F1-Scraper) and its database, you can check it if you want.

Check the [frontend](https://github.com/Redooz/Formula-1-Frontend) for this API.


## Build and run

*In order to build and run this scraper, you must install [NodeJS](https://nodejs.org/en/), [MySQL or MariaDB](https://www.apachefriends.org/)*

1. Download the source code
```
git clone https://github.com/Redooz/F1-2022-Races-API.git
```
2. Import the database into your pc, which its SQL file is located in *"database"* folder

3. Run the npm script to start
```
npm start
```

## Endpoints
* ### Return all races
```
GET /api/v1/races
```
#### Example Response
```json
[
    {
        "prix": "Bahrain",
        "fecha": "20 Mar 2022",
        "ganador": "Charles Leclerc",
        "equipo": "Ferrari",
        "vueltas": 57,
        "tiempo": "1:37:33.584"
    },
]
```

* ### Return one specified race
```
GET /api/v1/races/${insert_country}
```
#### Example Response
```json
{
    "prix": "Mexico",
    "fecha": "30 Oct 2022",
    "ganador": "Max Verstappen",
    "equipo": "Red Bull Racing RBPT",
    "vueltas": 71,
    "tiempo": "1:38:36.729"
}
```

* ### Create a race
```
POST /api/v1/races/
```
#### Example Request
```json
{
    "prix": "Colombia",
    "fecha": "28 Aug 2022",
    "ganador": "Max Verstappen",
    "equipo": "Red Bull Racing RBPT",
    "vueltas": 50,
    "tiempo": "1:38:36.729"
}
```
* ### Update one specified race
```
PATCH /api/v1/races/${insert_country}
```
#### Example Request
```json
{
    "fecha": "28 Aug 2022",
    "tiempo": "1:38:36.729"
}
```
* ### Delete one specified race
```
DELETE /api/v1/races/${insert_country}
```
