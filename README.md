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
* Return all races
```
/api/v1/races
```
* Return one specified race
```
/api/v1/races/${insert_country}
```
