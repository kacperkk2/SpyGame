export interface LocationBase {
    name: string;
    roles: string[];
}

export class AppSettings {
    public static LOCATIONS_AND_ROLES: LocationBase[] = [
        {name: 'Samolot', roles: ['Pasażer pierwszej klasy', 'Agent ochrony', 'Mechanik', 'Pasażer klasy ekonomicznej', 'Stewardessa', 'Pierwszy oficer', 'Kapitan']},
        {name: 'Bank', roles: ['Kierowca samochodu opancerzonego', 'Menadżer', 'Konsultant', 'Klient', 'Rabuś', 'Ochroniarz', 'Kasjer']},
        {name: 'Plaża', roles: ['Kelnerka', 'Surfer', 'Ratownik', 'Złodziej', 'Plażowicz', 'Fotograf', 'Kierowca furgonetki z lodami', 'Zboczeniec']},
        {name: 'Teatr', roles: ['Szatniarka', 'Sufler', 'Kasjer', 'Gość', 'Dyrektor', 'Aktor', 'Członek ekipy']},
        {name: 'Kasyno', roles: ['Barman', 'Szef ochrony', 'Bramkarz', 'Menadżer', 'Kanciarz', 'Krupier', 'Hazardzista']},
        {name: 'Katedra', roles: ['Ksiądz', 'Żebrak', 'Grzesznik', 'Parafianin', 'Turysta', 'Sponsor', 'Chórzysta']},
        {name: 'Cyrk', roles: ['Akrobata', 'Treser zwierząt', 'Magik', 'Gość', 'Połykacz ogni', 'Klaun', 'Żongler']},
        {name: 'Impreza firmowa', roles: ['Artysta', 'Menadżer', 'Niechciany gość', 'Właściciel', 'Sekretarka', 'Księgowy', 'Kurier']},
        {name: 'Spa', roles: ['Klient', 'Stylista', 'Masażysta', 'Manicurzysta', 'Makijażysta', 'Kosmetyczna']},
        {name: 'Ambasada', roles: ['Ochroniarz', 'Sekretarka', 'Ambasador', 'Oficjel rządowy', 'Turysta', 'Uchodźca', 'Dyplomata']},
        {name: 'Szpital', roles: ['Pielęgniarka', 'Doktor', 'Anestezjolog', 'Stażysta', 'Pacjent', 'Terapeuta', 'Chirurg']},
        {name: 'Hotel', roles: ['Portier', 'Ochroniarz', 'Menadżer', 'Sprzątaczka', 'Klient', 'Barman']},
        {name: 'Baza wojskowa', roles: ['Dezerter', 'Pułkownik', 'Medyk', 'Żołnierz', 'Snajper', 'Oficer', 'Inżynier czołgowy']},
        {name: 'Studio filmowe', roles: ['Kaskader', 'Dźwiękowiec', 'Kamerzysta', 'Reżyser', 'Kostriumograf', 'Aktor', 'Producent']},
        {name: 'Statek rejsowy', roles: ['Bogaty pasażer', 'Kapitan', 'Barman', 'Muzyk', 'Kelner', 'Mechanik']},
        {name: 'Pociąg pasażerski', roles: ['Maszynista', 'Straż Graniczna', 'Konduktor', 'Pasażer', 'Szef kuchni', 'Palacz']},
        {name: 'Statek piracki', roles: ['Marynarz', 'Niewolnik', 'Kanonier', 'Związany jeniec', 'Chłopiec kabinowy', 'Odważny kapitan']},
        {name: 'Stacja polarna', roles: ['Medyk', 'Geolog', 'Dowódca wyprawy', 'Biolog', 'Radiooperator', 'Hydrolog', 'Meteorolog']},
        {name: 'Posterunek policji', roles: ['Detektyw', 'Prawnik', 'Dziennikarz', 'Kryminalista', 'Archiwista', 'Funkcjonariusz patrolu', 'Przestępca']},
        {name: 'Restauracja', roles: ['Muzyk', 'Klient', 'Bramkarz', 'Kelnerka', 'Szef kuchni', 'Krytyk kulinarny']},
        {name: 'Szkoła', roles: ['Nauczyciel', 'Uczeń', 'Dyrektor', 'Ochroniarz', 'Woźny', 'Kucharka']},
        {name: 'Stacja kosmiczna', roles: ['Inżynier', 'Obcy', 'Kosmiczny turysta', 'Pilot', 'Dowódca', 'Naukowiec', 'Doktor']},
        {name: 'Łódź podwodna', roles: ['Dowódca', 'Technik sonarowy', 'Technik elektroniki', 'Marynarz', 'Radiooperator', 'Nawigator']},
        {name: 'Super market', roles: ['Klient', 'Kasjer', 'Rzeźnik', 'Woźny', 'Ochroniarz', 'Demonstator próbek jedzenia', 'Układający na półkach']},
        {name: 'Uniwersytet', roles: ['Absolwent', 'Profesor', 'Dziekan', 'Psycholog', 'Obsługa techniczna', 'Student', 'Woźny']},
        {name: 'Park Rozrywki', roles: ['Operator karuzeli', 'Rodzic', 'Sprzedawca jedzenia', 'Kasjer', 'Szczęśliwe dziecko', 'Wkurzające dziecko', 'Nastolatek']},
        {name: 'Muzeum sztuki', roles: ['Sprzedawca biletów', 'Gość', 'Ochroniarz', 'Malarz', 'Kolekcjoner sztuki', 'Krytyk', 'Fotograf', 'Turysta']},
        {name: 'Cmentarz', roles: ['Ksiądz', 'Hiena Cmentarna', 'Poeta', 'Osoba w żałobie', 'Trup', 'Sprzedawca Kwiatów', 'Grabarz']},
        {name: 'Plac Budowlany', roles: ['Dziecko bez nadzoru', 'Operator dźwigu', 'Oficer Bezpieczeństwa', 'Elektryk', 'Inżynier', 'Architekt', 'Pracownik Budowy']},
        {name: 'Konwent Gier', roles: ['Blogger', 'Cosplayer', 'Gracz', 'Wystawca', 'Kolekcjoner', 'Dziecko', 'Ochroniarz', 'Geek', 'Znana osobowość']},
        {name: 'Więzienie', roles: ['Niesłusznie oskarżona osoba', 'Operator kamer ochrony', 'Strażnik więzienny', 'Gość', 'Prawnik', 'Woźny', 'Dozorca', 'Przestępca']},
        {name: 'Biblioteka', roles: ['Staruszek', 'Student', 'Pisarz', 'Bibliotekarz', 'Gaduła', 'Fanatyk książek']},
        {name: 'Klub nocny', roles: ['Bywalec', 'Barman', 'Ochroniarz', 'Tancerka', 'Podrywacz', 'Imprezowiczka', 'Modelka', 'Pijany']},
        {name: 'Koncert', roles: ['Tancerz', 'Wokalista', 'Fan', 'Gitarzysta', 'Perkusista', 'Obsługa techniczna', 'Ochroniarz']},
        {name: 'Autobus krajoznawczy', roles: ['Staruszek', 'Samotny turysta', 'Kierowca', 'Irytujący dzieciak', 'Turysta', 'Przewodnik', 'Fotograf', 'Turysta', 'Zagubiona osoba']},
        {name: 'Stadion', roles: ['Sanitariusz', 'Młociarz', 'Atleta', 'Komentator', 'Widz', 'Ochroniarz', 'Sędzia', 'Sprzedawca jedzenia', 'Tyczkarz']},
        {name: 'Metro', roles: ['Turysta', 'Maszynista', 'Kontroler biletów', 'Ciężarna kobieta', 'Kieszonkowiec', 'Biznesman', 'Staruszka']},
        {name: 'Wesele', roles: ['Pan młody', 'Panna młoda', 'Fotograf', 'Ojciec panny młodej', 'Nieproszony gość', 'Świadek', 'Najebany wujek', 'DJ']},
        {name: 'Zoo', roles: ['Opiekun zwierząt', 'Zwiedzający', 'Fotograf', 'Dziecko', 'Weterynarz', 'Turysta', 'Sprzedawca jedzenia', 'Kasjer', 'Opiekun zwierząt']}
    ]

    public static IMAGE_FOR_LOCATION = {
        'default': 'assets/default.jpg',
        'Samolot': 'assets/samolot.jpg',
        'Bank': 'assets/bank.jpg',
        'Plaża': 'assets/plaza.jpg',
        'Teatr': 'assets/teatr.jpg',
        'Kasyno': 'assets/kasyno.jpg',
        'Katedra': 'assets/katedra.jpg',
        'Cyrk': 'assets/cyrk.jpg',
        'Impreza firmowa': 'assets/impreza_firmowa.jpg',
        'Spa': 'assets/spa.jpg',
        'Ambasada': 'assets/ambasada.jpg',
        'Szpital': 'assets/szpital.jpg',
        'Hotel': 'assets/hotel.jpg',
        'Baza wojskowa': 'assets/baza_wojskowa.jpg',
        'Szkoła': 'assets/szkola.jpg',
        'Uniwersytet': 'assets/uniwersytet.jpg',
        'Łódź podwodna': 'assets/lodz_podwodna.jpg',
        'Super market': 'assets/supermarket.jpg',
        'Biblioteka': 'assets/biblioteka.jpg',
        'Plac Budowlany': 'assets/plac_budowy.jpg',
        'Park Rozrywki': 'assets/park_rozrywki.jpg',
        'Cmentarz': 'assets/cmentarz.jpg',
        'Muzeum sztuki': 'assets/muzeum.jpg',
        'Klub nocny': 'assets/klub_nocny.jpg',
        'Konwent Gier': 'assets/konwent_gier.jpg',
        'Koncert': 'assets/koncert.jpg',
        'Autobus krajoznawczy': 'assets/autobus.jpg',
        'Stadion': 'assets/stadion.jpg',
        'Metro': 'assets/metro.jpg',
        'Wesele': 'assets/wesele.jpg',
        'Zoo': 'assets/zoo.jpg',
        'Statek rejsowy': 'assets/statek_rejsowy.jpg',
        'Posterunek policji': 'assets/policja.jpg',
        'Restauracja': 'assets/restauracja.jpg',
        'Statek piracki': 'assets/statek_piracki.jpg',
        'Stacja polarna': 'assets/polarny.jpg',
        'Stacja kosmiczna': 'assets/statek_kosmiczny.jpg',
        'Więzienie': 'assets/wiezienie.jpg',
        'Pociąg pasażerski': 'assets/pociag.jpg',
        'Studio filmowe': 'assets/studio_filmowe.jpg',
        'Szpieg1': 'assets/spy1.jpg',
        'Szpieg2': 'assets/spy2.jpg',
        'Szpieg3': 'assets/spy3.jpg',
        'Szpieg4': 'assets/spy4.jpg',
    }
    public static SPY_IMAGES = 4;
    public static CARD_FADEIN_TIME = 600;
    public static LOCATIONS_ENDPOINT = "https://spy-game-backend.herokuapp.com/locations";
 }