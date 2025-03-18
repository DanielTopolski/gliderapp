const db = require('better-sqlite3')('database2.db')


const insertPerson = (first_name, last_name, date_of_birth, PESEL, phone_no, email, address, login, password, admin_perm, timekeeper_perm, active, block_account, www_access, balance) => {
    const sql = `
        INSERT INTO person (first_name, last_name, date_of_birth, PESEL, phone_no, email, address, login, password, admin_perm, timekeeper_perm, active, block_account, www_access, balance)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    db.prepare(sql).run(first_name, last_name, date_of_birth, PESEL, phone_no, email, address, login, password, admin_perm, timekeeper_perm, active, block_account, www_access, balance)
}
insertPerson("Jan", "Kowalski", "1977-04-03", 77040359385, "554-245-236", "jkow@gmail.com", "ul. Lotnicza 5, 39-400, Tarnobrzeg", "jkow77", "31454fdf", 0, 1, 1, 0, 1, 1074.54)
insertPerson("Zbigniew", "Nowak", "1975-08-22", 75082209932, "586-453-677", "znowak@onet.pl", "ul. Kramarska 12a, 27-600, Sandomierz", "znow75!", "fgg5gdbsb", 1, 1, 1, 0, 1, 845.34)
insertPerson("Marcin", "Banaś", "1981-12-03", 81120301123, "603-223-049", "mbanas@gmail.com", "ul. Marynarska 333, 39-432, Gorzyce", "mban81$", "3243dfdcf$", 0, 0, 1, 0, 0, 663.98)
insertPerson("Damian", "Jaskuła", "1969-10-03", 69100390123, "698-124-111", "djask@o2.pl", "ul. Anonimowa 99, 22-494, Koniecświata", "djask69", "erp##fevv!", 0, 1, 1, 0, 1, 1092.42)
insertPerson("Adam", "Jagiełło", "1977-06-21", 77062115203, "882-341-324", "ajag1@gmail.com", "ul. Laskowa 1, 33-444, Puszczowo", "ajag77#", "efkrwherouty359", 1, 1, 1, 0, 1, 1503.89)


const insertClub = (name, address, phone_no, email, website) => {
    const sql = `
        INSERT INTO club (name, address, phone_no, email, website)
        VALUES (?, ?, ?, ?, ?)
    `
    db.prepare(sql).run(name, address, phone_no, email, website)
}    
insertClub("Aeroklub Podkarpacki Szkoła Lotnicza", "ul. Żwirki i Wigury 8, 38-400 Krosno", "602-769-433", "biuro@aeroklub-podkarpacki.pl", "https://www.aeroklub-podkarpacki.pl/")
insertClub("Aeroklub Mielecki im. Braci Działowskich", "ul. Lotniskowa 14 (lotnisko), 39-300 Mielec", "17-788-76-95", "biuro@aeroklub.mielec.pl", "https://aeroklub.mielec.pl/")
insertClub("Aeroklub Kielecki", "ul. Jana Pawła II 9, 26-001 Masłów", "41-311-07-06", "info@aeroklubkielecki.pl", "https://aeroklubkielecki.pl/")
insertClub("Aeroklub Elbląski", "ul. Lotnicza 1H, 82-300 Elbląg", "518-363-103", "biuro@aeroklubelblaski.pl", "http://aeroklubelblaski.pl/")
insertClub("Aeroklub Jeleniogórski", "ul. Łomnicka-Lotnisko, 58-500 Jelenia Góra", "75-75-26-020", "aeroklubjg@jg.home.pl", "https://aeroklub.jelenia.pl/")
insertClub("Aeroklub Stalowowolski", "Turbia ul. Lotników 15, 37-415 Zaleszany", "15-844-01-18", "biuro@aeroklubstalowowolski.pl", "https://www.aeroklubstalowowolski.pl/index.php")


const insertAircraft = (kind, type, identification_mark, club_id, hours_flown, one_seat, active, remarks) => {
    const sql = `
        INSERT INTO aircraft (kind, type, identification_mark, club_id, hours_flown, one_seat, active, remarks)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `
    db.prepare(sql).run(kind, type, identification_mark, club_id, hours_flown, one_seat, active, remarks)
}
insertAircraft("szybowiec", "Bocian", "SP-2667", 1, "2413:44", 1, 1)
insertAircraft("szybowiec", "Foka 5", "D-2297", 2, "2333:21", 0, 1)
insertAircraft("szybowiec", "Jantar 1", "SP-2892", 6, "2532:44", 1, 1)
insertAircraft("szybowiec", "Jantar 2B", "SP-3389", 3, "1245:23", 1, 1)
insertAircraft("szybowiec", "Jantar std 2", "SP-3220", 4, "1452:53", 0, 1)
insertAircraft("szybowiec", "Jantar std 3", "SP-3452", 5, "2942:33", 1, 0)
insertAircraft("szybowiec", "Jantar std 3", "SP-3261", 3, "2114:21", 1, 1)


const insertFlight = (pilot_id, instructor_passenger_id, aircraft_id, task, exercise, training, takeoff_type, start_time, landing_time, airfield, tow_plane_pilot_or_winch_operator_id, tow_plane_id, tow_plane_time_of_flight, tow_plane_time_on_ground, remarks, timekeeper) => {
    const sql = `
        INSERT INTO flight (pilot_id, instructor_passenger_id, aircraft_id, task, exercise, training, takeoff_type, start_time, landing_time, airfield, tow_plane_pilot_or_winch_operator_id, tow_plane_id, tow_plane_time_of_flight, tow_plane_time_on_ground, remarks, timekeeper)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    db.prepare(sql).run(pilot_id, instructor_passenger_id, aircraft_id, task, exercise, training, takeoff_type, start_time, landing_time, airfield, tow_plane_pilot_or_winch_operator_id, tow_plane_id, tow_plane_time_of_flight, tow_plane_time_on_ground, remarks, timekeeper)
}
insertFlight(1, 3, 1, "A/VI", 2, 1, "W", "14:50", "14:58", "Turbia (EPST)", 2, null, "-", "-", "-", "Zenon D.")
insertFlight(1, 4, 2, "A/VI", 2, 0, "W", "15:10", "15:15", "Turbia (EPST)", 5, null, "-", "-", "-", "Kamil G.")
insertFlight(3, null, 5, "A/VI", 2, 1, "W", "15:24", "19:10", "Turbia (EPST)", 1, null, "-", "-", "-", "Maciek U.")
insertFlight(5, null, 4, "A/VI", 2, 1, "W", "15:24", "19:10", "Turbia (EPST)", 2, null, "-", "-", "-", "Rafał W.")
insertFlight(2, 3, 6, "A/VI", 2, 0, "W", "15:24", "19:10", "Turbia (EPST)", 1, null, "-", "-", "-", "Piotr A.")