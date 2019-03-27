Start Website:
	- Open terminal. Type in:			npm start
Database:

	Start Mongo
	- open terminal. 		 		mongo
	- switch to bookings database			use bookings
	- find database info:			 	db.bookingInfo.find()
	- manual insert (after 'use bookings')		db.insertOne({<key>:'<item>'}) (use db.insertMany for more items)
	- manual delete (after 'use bookings')		db.deleteOne({<key>:'<item>'}) (use db.deleteMany for more items)

Database page: 
	- localhost:3000/database_read

Export database:
	- mongoexport --db bookings --collection bookingInfo --out public/data/bookings.json