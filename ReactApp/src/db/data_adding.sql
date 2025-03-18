INSERT INTO person (id, first_name, last_name, date_of_birth, PESEL, phone_no, email, address, winch_perm, login, password, admin_perm, timekeeper_perm, active, block_account, www_access, balance)
VALUES 
	(1, "Jan", "Kowalski", date("1977-04-03"), 77040359385, "554-245-236", "jkow@gmail.com", "ul. Lotnicza 5, 39-400, Tarnobrzeg", 1, "jkow77", "31454fdf", 0, 1, 1, 0, 1, 1074.54),
	(2, "Zbigniew", "Nowak", date("1975-08-22"), 75082209932, "586-453-677", "znowak@onet.pl", "ul. Kramarska 12a, 27-600, Sandomierz", 1, "znow75!", "fgg5gdbsb", 1, 1, 1, 0, 1, 845.34),
	(3, "Marcin", "Banaś", date("1981-12-03"), 81120301123, "603-223-049", "mbanas@gmail.com", "ul. Marynarska 333, 39-432, Gorzyce", 1, "mban81$", "3243dfdcf$", 0, 0, 1, 0, 0, 663.98),
	(4, "Damian", "Jaskuła", date("1969-10-03"), 69100390123, "698-124-111", "djask@o2.pl", "ul. Anonimowa 99, 22-494, Koniecświata", 0, "djask69", "erp##fevv!", 0, 1, 1, 0, 1, 1092.42),
	(5, "Adam", "Jagiełło", date("1977-06-21"), 77062115203, "882-341-324", "ajag1@gmail.com", "ul. Laskowa 1, 33-444, Puszczowo", 1, "ajag77#", "efkrwherouty359", 1, 1, 1, 0, 1, 1503.89);

INSERT INTO club (id, name, address, phone_no, email, website)
VALUES 
	(1, "Aeroklub Podkarpacki Szkoła Lotnicza", "ul. Żwirki i Wigury 8, 38-400 Krosno", "602-769-433", "biuro@aeroklub-podkarpacki.pl", "https://www.aeroklub-podkarpacki.pl/"),
	(2, "Aeroklub Mielecki im. Braci Działowskich", "ul. Lotniskowa 14 (lotnisko), 39-300 Mielec", "17-788-76-95", "biuro@aeroklub.mielec.pl", "https://aeroklub.mielec.pl/"),
	(3, "Aeroklub Kielecki", "ul. Jana Pawła II 9, 26-001 Masłów", "41-311-07-06", "info@aeroklubkielecki.pl", "https://aeroklubkielecki.pl/"),
	(4, "Aeroklub Elbląski", "ul. Lotnicza 1H, 82-300 Elbląg", "518-363-103", "biuro@aeroklubelblaski.pl", "http://aeroklubelblaski.pl/"),
	(5, "Aeroklub Jeleniogórski", "ul. Łomnicka-Lotnisko, 58-500 Jelenia Góra", "75-75-26-020", "aeroklubjg@jg.home.pl", "https://aeroklub.jelenia.pl/"),
	(6, "Aeroklub Stalowowolski", "Turbia ul. Lotników 15, 37-415 Zaleszany", "15-844-01-18", "biuro@aeroklubstalowowolski.pl", "https://www.aeroklubstalowowolski.pl/index.php");
	
INSERT INTO aircraft (id, kind, type, identification_mark, club_id, hours_flown, one_seat, active)
VALUES
	(1, "szybowiec", "Bocian", "SP-2667", 1, "2413:44", 1, 1),
	(2, "szybowiec", "Foka 5", "D-2297", 2, "2333:21", 0, 1),
	(3, "szybowiec", "Jantar 1", "SP-2892", 6, "2532:44", 1, 1),
	(4, "szybowiec", "Jantar 2B", "SP-3389", 3, "1245:23", 1, 1),
	(5, "szybowiec", "Jantar std 2", "SP-3220", 4, "1452:53", 0, 1),
	(6, "szybowiec", "Jantar std 3", "SP-3452", 5, "2942:33", 1, 0),
	(7, "szybowiec", "Jantar std 3", "SP-3261", 3, "2114:21", 1, 1);	
	
INSERT INTO flight (id, pilot_id, instructor_passenger_id, aircraft_id, task, exercise, training, takeoff_type, start_time, landing_time, airfield, tow_plane_pilot_or_winch_operator_id)
VALUES 
	(1, 1, 3, 1, "A/VI", 2, 1, "W", time("14:50"), time("14:58"), "Turbia (EPST)", 2),
	(2, 1, 4, 2, "A/VI", 2, 0, "W", time("15:10"), time("15:15"), "Turbia (EPST)", 5),
	(3, 3, NULL, 5, "A/VI", 2, 1, "W", time("15:24"), time("19:10"), "Turbia (EPST)", 1),
	(4, 5, NULL, 4, "A/VI", 2, 1, "W", time("15:24"), time("19:10"), "Turbia (EPST)", 2),
	(5, 2, 3, 6, "A/VI", 2, 0, "W", time("15:24"), time("19:10"), "Turbia (EPST)", 1);

