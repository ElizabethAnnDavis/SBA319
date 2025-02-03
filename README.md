
# SBA 319: MongoDB Database Application ✔

### Documentation:
#### USERS
##### GET all users:
[All users (localhost:3000/users)]

##### POST new user:
[NEW user (localhost:3000/users)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "name": "Users Name" (required field),
* &nbsp;&nbsp;&nbsp;&nbsp; "email": "Users email@email.com",
* &nbsp;&nbsp;&nbsp;&nbsp; "favBooks": Array
* }


##### GET specific user:
[SPECIFIC user (localhost:3000/users/:id)]

##### PATCH specific user:
[SPECIFIC user (localhost:3000/users/:id)]
###### INCLUDE(any desired):
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "name": "Users Name",
* &nbsp;&nbsp;&nbsp;&nbsp; "email": "Users email@email.com"
* &nbsp;&nbsp;&nbsp;&nbsp; "favBooks": Array
* }

##### DELETE specific user:
[SPECIFIC user (localhost:3000/users/:id)]

#### BOOKS
##### GET all books:
[All posts (localhost:3000/books)]

##### POST new book:
[NEW post (localhost:3000/books)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "name": "Book Title", (required field),
* &nbsp;&nbsp;&nbsp;&nbsp; "author": "Author's Name",
* &nbsp;&nbsp;&nbsp;&nbsp; "inSeries": "Boolean"
* }

#### SERIES
##### GET all series:
[All comments (localhost:3000/series)]

##### POST new series:
[NEW comment (localhost:3000/series)]
###### INCLUDE:
* {
* &nbsp;&nbsp;&nbsp;&nbsp; "name": "Series Title", (required field),
* &nbsp;&nbsp;&nbsp;&nbsp; "author": "Author's Name",
* &nbsp;&nbsp;&nbsp;&nbsp; "books": "Array" (required field, min length 2)
* }





## Reflection (NOT Optional):
 * What could you have done differently during the planning stages of your project to make the execution easier?
 * --> Read through the requirements more thoroughly to ensure I created all the necessary files at the start of the process.

 * Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
 * --> The "include sensible indexes" requirement didn't make much sense to me as I was under the impresssion that indexes were used on much larger data sets.

 * What would you add to or change about your application if given more time?
 * --> I would have added more routes and made the collections link to eachother if given more time.

 * Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again:
 * --> 1. Make sure exports are in the schemas
 * --> 2. It gets confusing when there's multiple files with the same names
 * --> 3. Things don't work when spelled incorrectly





### Objectives:
 * Create a server application with Node, Express, and MongoDB.
 * Create a CRUD API using Express and MongoDB.
 * Create MongoDB indexes.
 * Use MongoDB indexing to make efficient queries.
 * Create MongoDB validation rules.
 * Use MongoDB validation to ensure data consistency.


### Instructions:
 * You will create a small Node, Express, and MongoDB server application. 


### Requirements:
 *   ✔  5%  --> Use at least three different data collections within the database (such as users, posts, or comments).

 *   ✔ 10%  --> Utilize reasonable data modeling practices.

 *   ✔ 10%  --> Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.

 *   ✔ 10%  --> Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.

 *   ✔ 10%  --> Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.

 *   ✔ 10%  --> Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.

 *   ✔  5%  --> Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.

 *   ✔  5%  --> Include sensible MongoDB data validation rules for at least one data collection.
 *              Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error.

 *   ✔  5%  --> Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
 *              Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents).

 *   ✔  5%  --> Utilize reasonable code organization practices.

 *   ✔ 10%  --> Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

 *   ✔  5%  --> Commit frequently to the git repository.

 *   ✔  5%  --> Include a README file that contains a description of your application. This README must include a description of your API's available routes and their corresponding CRUD operations for reference.

 *   ✔  5%  --> Level of effort displayed in creativity and user experience.

##### Bonus Objectives:
 *   ✔ +1%  --> Use Mongoose to implement your application.
 *              Note: The validation requirements above must still be implemented database-side, but should also be implemented application-side within your Mongoose schema(s).