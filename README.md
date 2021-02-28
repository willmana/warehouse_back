# Backend proxy for warehouse application

Application is running in [http://incredible-warehouse.herokuapp.com/](http://incredible-warehouse.herokuapp.com/).

Source code for the front end is in [this repository](https://github.com/willmana/SekalaistaSettii/tree/master/warehouse).

## How it works?

Libraries/packages that I used:
- Axios
- Cors
- Express
- React Bootstrap
- React Router

Application fetches the required data using Axios. When the application is opened in the browser, it fetches all the item-data on startup with the help of Effect-hook. When the user wishes to seek availability of an item, applications sends a GET-request to API to fetch availability information. If there is failure in the API while fetching the data, the application will let you know. 

We needed to create a proxy to avoid getting 'Access-Control-Allow-Origin' -error. Our proxy is run with the help of Express and allows communication with the frontend with the use of Cors. All the item-data is categorized with respect to item-types and React Router is used for us to be able to display them easily. Finally, for styling the application I used React Bootstrap, an old friend of mine. 
