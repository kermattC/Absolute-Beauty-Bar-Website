Start database:
	- Open terminal. Type in:			mongod
	- Open another terminal. Type in:		mongo
Start Website:
	- Open another terminal. Type in:		npm start
Database:
	- switch to bookings database			use bookings
	- find database info:			 	db.bookingInfo.find()
	- manual insert (after 'use bookings')		db.insertOne({<key>:'<item>'}) (use db.insertMany for more items)
	- manual delete (after 'use bookings')		db.deleteOne({<key>:'<item>'}) (use db.deleteMany for more items)

View database as a JSON:
	- localhost:3000/database_read

Export database:
	- mongoexport --db bookings --collection bookingInfo --out public/data/bookings.json
	
The web page should be able to update the database by itself when submitting info for the booking. If it doesn't work, try exporting the database manually using the above command. 

This webpage is based off of a friend's eyelash service, containing information about the service, an "about me" section, an instagram gallery and a booking service.  The home page is strictly displaying content, as it is mainly for showcasing the design put into the project, including a gradient background and parallax effect while scroling through the page. The booking page implements what we've learned about databases, DHTML, javascript/jquery. This page is where the creating, reading and updating of data happens. We attempted to implement an "admin" session to include the delete part of the CRUD operations as well as restrictions of webpages but weren't able to due to time constraints. 
