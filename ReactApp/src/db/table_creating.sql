CREATE TABLE aircraft (--table containing all neccessary info on the aircrafts
	id	INTEGER NOT NULL,   
	kind	TEXT NOT NULL, --either a glider or an airplane (ultimately more "kinds" will be available)                                    
	type	TEXT NOT NULL, --a type (model) of an aircraft
	identification_mark	TEXT NOT NULL UNIQUE, --a unique id mark of an aircraft (similar to a license plate of a car)
	club_id	INTEGER NOT NULL, --id of a club that a specific aircraft belongs to
	hours_flown	TEXT NOT NULL, --amount of hours that an aircraft have flown
	one_seat	INTEGER, --a checkbox indicating if an aircraft is a 1-seat or not
	active	INTEGER, --a checkbox indicating if an aircraft is active or not
	remarks	TEXT, --additional info
    PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("club_id") REFERENCES "club"("id"),
	CHECK("kind" LIKE 'szybowiec' OR "kind" LIKE 'samolot')
)

CREATE TABLE airplane_technical (
	id	INTEGER NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("id") REFERENCES "aircraft"("id")
)

CREATE TABLE bulletin (
	id	INTEGER NOT NULL,
	aircraft_id	INTEGER NOT NULL,
	link	TEXT NOT NULL,
	hours_flown	TEXT,
	date	TEXT,
	done	INTEGER,
	PRIMARY KEY("id"),
	FOREIGN KEY("aircraft_id") REFERENCES "aircraft"("id")
)

CREATE TABLE club (--table containing info about the clubs in the database
	id	INTEGER NOT NULL,
	name	TEXT NOT NULL,                      
	address	TEXT NOT NULL,
	phone_no	TEXT,
	email	TEXT,
	website	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
)

CREATE TABLE document_aircraft (--table containing documents of the aircrafts in the database
	id	INTEGER NOT NULL UNIQUE,
	type	TEXT NOT NULL, --a type of a document (insurance, technical inspections, etc.)
	doc_no	TEXT, --document number
	class	TEXT, --similar to a technical inspection
	aircraft_id	INTEGER NOT NULL, --id of an aircraft
	valid_till	TEXT NOT NULL, --validity date of a document
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("aircraft_id") REFERENCES "aircraft"("id")
)

CREATE TABLE document_pilot (--table containing info about the documents of all pilots in the database
	id	INTEGER NOT NULL,
	type	TEXT NOT NULL, --a type of a document (an insurance policy, a license, medical examinations etc.)
	doc_no	TEXT, --document number
	class	INTEGER, --class of a med. exam. (1, 2, 3 depending on the type of an aircraft that those examinations concern)
	pilot_id	INTEGER NOT NULL,
	valid_till	TEXT NOT NULL, --valididy date of a document
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("pilot_id") REFERENCES "person"("id")
)

CREATE TABLE fee_payment (--table containing all the payments
	id	INTEGER NOT NULL UNIQUE,
	pilot_id	INTEGER NOT NULL, --an id of a person connected to a specific payment
    club_member INTEGER, --checkbox indicating if a person is a club member or not
	membership_fee_valid	TEXT NOT NULL, --expiration date of a membership fee
	factor	REAL NOT NULL, --a factor that differs the payment value depending on a person making it (to be specified)
	amount	REAL,                                       
	description	TEXT, --additional info on a payment
	service_life_fee	INTEGER, --a checkbox indicating if a payment is a "service_life" (resurs) one or not
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("pilot_id") REFERENCES "person"("id")
)

CREATE TABLE flight (--table containing info about flights
	id	INTEGER NOT NULL,
	pilot_id	INTEGER NOT NULL, --id of a pilot making the flight
	instructor_passenger_id	INTEGER, --id of an instructor or a passenger taking the flight
	aircraft_id	INTEGER NOT NULL,
	task	TEXT NOT NULL, --type of task of the flight
	exercise	INTEGER NOT NULL, 
	training	INTEGER, --checkbox indicating if a flight is a training one or not
	takeoff_type	TEXT NOT NULL,
	start_time	TEXT NOT NULL,
	landing_time	TEXT NOT NULL,
	airfield	TEXT NOT NULL,
	tow_plane_pilot_or_winch_operator_id	INTEGER,
	tow_plane_id	INTEGER,
	tow_plane_time_of_flight	TEXT,
    tow_plane_time_on_ground	TEXT,
	remarks	TEXT, --additional info
    timekeeper	TEXT, --info about the person who added certain flight to the flight list
	PRIMARY KEY("id"),
	FOREIGN KEY("aircraft_id") REFERENCES "aircraft"("id"),
	FOREIGN KEY("instructor_passenger_id") REFERENCES "person"("id"),
	FOREIGN KEY("pilot_id") REFERENCES "person"("id"),
	FOREIGN KEY("tow_plane_id") REFERENCES "aircraft"("id"),
	FOREIGN KEY("tow_plane_pilot_or_winch_operator_id") REFERENCES "person"("id"),
	CHECK("takeoff_type" LIKE 'W' OR "takeoff_type" LIKE 'S')
)

CREATE TABLE glider_technical (--table containig technical data of an aircraft
	id	INTEGER NOT NULL,
	towing_hitch	TEXT NOT NULL, --date of next inspection of a towiing hitch
	straps	TEXT NOT NULL, --date of next inspection of straps
	ciegla	TEXT NOT NULL, --???
	platowiec	TEXT NOT NULL, --???
	FOREIGN KEY("id") REFERENCES "aircraft"("id")
)

CREATE TABLE person (--table containing all the info about pilots, instructors, etc.
	id	INTEGER NOT NULL,
	first_name	TEXT NOT NULL,
	last_name	INTEGER NOT NULL,
	date_of_birth	TEXT NOT NULL,
	PESEL	INTEGER NOT NULL UNIQUE,
	phone_no	TEXT NOT NULL UNIQUE,
	email	TEXT NOT NULL UNIQUE,
	address	TEXT,
	winch_perm	INTEGER, --a checkbox indicating if a person has a winch operator permission or not
	login	TEXT,                                   
	password	TEXT,
	admin_perm	INTEGER, --a checkbox indicating if a person has admin privileges or not 
	timekeeper_perm	INTEGER, --a checkbox indicating if a person has timekeeper privileges or not
	active	INTEGER, --a checkbox indicating if a person is active or not
	block_account	INTEGER, --a checkbox indicating if a person's account is blocked or not
	www_access	INTEGER, --a checkbox indicating if a person has access to the web app
	remarks	TEXT, --additional information
	balance	REAL, --financial information
	PRIMARY KEY("id" AUTOINCREMENT),
	CHECK(length("PESEL") = 11)
)

CREATE TABLE person_club (
	pilot_id	INTEGER NOT NULL,
	club_id	INTEGER,
	FOREIGN KEY("club_id") REFERENCES "club"("id"),
	FOREIGN KEY("pilot_id") REFERENCES "person"("id")
)

CREATE TABLE pilot_airplane (
	pilot_id	INTEGER NOT NULL,
	permision	TEXT NOT NULL,
	FOREIGN KEY("pilot_id") REFERENCES "person"("id")
)

CREATE TABLE pilot_glider (
	pilot_id	INTEGER NOT NULL,
	permission	TEXT NOT NULL,
	hours_flown_total	TEXT NOT NULL, --total amount of hours flown by a pilot
	hours_flown_alone	TEXT NOT NULL, --the time amount of a pilot's solo flights
	FOREIGN KEY("pilot_id") REFERENCES "person"("id")
)

CREATE TABLE pilot_permission (
	id	INTEGER NOT NULL,
	pilot_id	INTEGER NOT NULL,
	name	TEXT NOT NULL,
	date	TEXT NOT NULL,
	perm_no	TEXT NOT NULL,
	PRIMARY KEY("id"),
	FOREIGN KEY("pilot_id") REFERENCES "person"("id")
)

CREATE TABLE task_exercise (
	task	TEXT NOT NULL,
	exercise	TEXT NOT NULL,
	training	TEXT NOT NULL
)