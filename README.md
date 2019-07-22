# Search-and-Nav-Bar



### About
Home De-pott is a product page clone of the home depot website. This site was created using micro services and deployed separately. This component is the Search and NavBar component. A user can search for any item in on the site and be given a list of matches with a picture. If the user clicks the item, it will render the product. The user can also login which will bring up any previous cart items saved under that user or cookie. The user can also hover on the dropdown items and choose items from a category which will load pictures of all items in that category.

Search and NavBar component has its own database to keep track of items, recently viewed items, login information -- passwords hashed using bcrypt.

Contributors: 

For this component
[Michael Bergeron](https://github.com/Michael-Bergeron) - Search and NavBar

### Tech Stack 
*Search and NavBar* was built primarily with ReactJS on the front end and Node/Express on the backend. Other key technologies used are listed below: 

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://lh3.googleusercontent.com/xcong6Yn8NoueMYWPhEfO76dw0Nt70kiDVOCOygTFEQWpysHxcT-5jYzq9XWIgD3lvCGnGrjlhddm7WEOw9V1FlHivqFjZCXF9IDsfd7uQ2SxlI80roSJcnHvb0O7POvlYOPNvRG" width="100" />
<img src="https://lh5.googleusercontent.com/_RcI-sgNRX5J0olXzRycjQN3tysoTXbH8kXRfE0AtBY8KkDrINApsrfZGAkczZYGwKTPZlYdJXQyKmWO4zFzvON9Op6Ovcu0GQxwabxWfGJH__oRB6YCC-qD_3b2yj_efkprD8UP" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://lh5.googleusercontent.com/pqPRWyCMu39CU4GAERH3XI0fri2uJzMteIV5t-4qAG566IJWdXRABxLjV1jwdVvID-NvFw3USgyM8FXC5w_yAimYz4FY1gVEm96Yd2JQZh-pYl33lHpbOI7-3-uTixqgX1XHRker" width="100" />

### Technical Challenges/Research

Some of the challenges of this project were:
- Figuring out how to combine separatly deployed services into one main service using a microservice model.
- Scraping data from a site that does not allow scraping from checking their robot.txt file

# Client Deliverables
Our team strived to meet the expectations of a user on the home depot website

#### User Stories
For this particular component:

Users will be able to search for items and see a list of matching items

Users will be able to hover on the nav bar in order to see further options as well as categories of items. From those categories, the user will be able to see images of each item and click to render that item to the main page

Users will be able to create a login that will keep track of their cart if they were to change computers or come back another day

Users will be able to login and see previously viewed items 

Users will be able to checkout and clear their cart
