---
title: 2. Pomysły na projekty
date: "2022-10-22T12:00:00.000Z"
description: "Zdecydowałeś już z jakiego zestawu narzędzi chcesz skorzystać, ale nie masz pomysłu na projekt? Zawsze możesz skorzystać z jednego z polecanych standardowych projektów... albo zamiast klepania kolejnej listy todo lub uproszczonego sklepu, możesz zrobić coś ciekawszego. Przygotowałem listę mniej oklepanych pomysłów na projekty, które mogą cię zainspirować do zrobienia czegoś ciekawego."
---

Zdecydowałeś już z jakiego zestawu narzędzi chcesz skorzystać, ale nie masz pomysłu na projekt? Zawsze możesz skorzystać z jednego z polecanych standardowych projektów... albo zamiast klepania kolejnej listy todo lub uproszczonego sklepu, możesz zrobić coś ciekawszego. Przygotowałem listę mniej oklepanych pomysłów na projekty, które mogą cię zainspirować do zrobienia czegoś ciekawego.

Jeśli masz pomysł co mógłbym do niej dodać - <a target="_blank" rel="noreferrer" href="https://github.com/Marcin99b/faqprogramisty.pl/issues">Dodaj issue na githubie projektu</a>

#### Planer podróży/wycieczek

Jako leniwa osoba, nie lubię spędzać czasu na dokładnym planowaniu wyjazdów, szczególnie jeśli to ma być kolejny standardowy wyjazd z punktu A do punktu B. Nie chce mi się przeglądać hoteli, porównywać ich ze sobą, sprawdzać który jest w jakiej lokalizacji, czy spełniają moje wymagania. Nie chce mi się również przeglądać miejsc gdzie można coś zjeść, ani planować dojazdów do różnych miejsc. Nie chce mi się ustalać planów dnia, o której godzinie powinienem co zrobić, żeby zdążyć z czymś na którąś godzinę. Bardzo przydatna byłaby aplikacja, która zrobiłaby to wszystko za mnie. Podałbym jej miejsce do którego jadę, podstawowe wymagania (budżet, miejsca które muszę odwiedzić, ewentualne sztywne terminy, różnego rodzaju preferencje itp) i wygenerowałaby mi cały plan wyjazdu. Dodatkowo część preferencji byłaby taka sama dla większości wyjazdów, więc przy kolejnych wyjazdach uzupełniałbym tylko małą część informacji.

#### Samoobsługowa rezerwacja czasu

Pewnie każdy przez to przechodził, chcesz spotkać się ze znajomym (albo jeszcze lepiej, grupą znajomych) i próbujecie dogadać się na wspólny termin... i oczywiście nikt nie ma czasu wtedy kiedy inni mają, trwają długie dyskusje z propozycjami. Lepszym rozwiązaniem byłaby aplikacja, w której każdy zaznacza kiedy ma czas i tworzy się lista sugestii - z terminami, w których na pewno każdy będzie wolny. Takie rozwiązania już istnieją w biznesie, przykładowo outlook pozwala na sprawdzenie kiedy kto ma wolny czas w kalendarzu. Problemem jest tutaj jednak trudność, przecież nie będą sugerował grupie znajomych stworzenie własnej grupy mailowej, w której każdy będzie musiał zaznaczyć kiedy jest zajęty. Lepszą opcją jest prosta aplikacja, niewymagająca nawet zakładania konta, w której grupka osób może zaznaczyć tylko te terminy które akceptują.

#### Lista todo oparta na zdarzeniach

Tak, wiem, listy todo to są typowe projekty na start, są pokazywane w większości poradników i zazwyczaj są nudne. No chyba że dodamy do nich trochę złożonych mechanizmów, wtedy już mogą być ciekawe w tworzeniu i użyteczne. Załóżmy aktywności w obrębie zadań tworzą "zdarzenia" w naszym systemie. Przykładowo wykonanie zadania, zmiana priorytetu, zmiana osoby itd. Ciekawą funkcjonalnością byłaby możliwość podpięcia dowolnej akcji, pod dowolne zdarzenie, jako użytkownik. Przykładowo żeby zawsze tworzyło się jakieś zadanie, jeśli obniże priorytet zadania z konkretnej kategorii, albo żeby zawsze tworzyło się jakieś zadanie, po zakończeniu innego. Przykładowo żeby zawsze po zadaniu "zjedz obiad" tworzyło się zadanie "umyj zęby" (bardzo prosty przykład, ale mechanizm sam w sobie ma duży potencjał i można stworzyć dzięki niemu ciekawe konfiguracje).

#### Silnik do automatyzacji

Podobna sytuacja jak z wyżej opisaną listą todo, ale dotycząca integracji z różnymi aplikacjami/systemami/itp zamiast wewnętrznych zadań. Mam tu na myśli stworzenie własnej alternatywy do aplikacji typu <a target="_blank" rel="noreferrer" href="https://zapier.com/">Zapier</a>. To nie jest rewolucyjny pomysł, tylko robienie czegoś co już jest stworzone... ale jest ciekawe z punktu widzenia rozwoju, poza robieniem aplikacji która powinna mieć ciekawe problemy sama w sobie, to jeszcze nauczysz się integrowania jej z wieloma różnymi aplikacjami. Niektóre z integracji mogą być problematyczne, a rozwiązanie takich problemów podniesie twoje umiejętności.

#### Api do zwracania rzeczywistego dystansu

Wiele aplikacji które są oparte na dystansie między dwoma miejscami, przykładowo aplikacje randkowe albo do zamawiania jedzenia, opierają się na ilości kilometrów w linii prostej. Niestety ale drogi są poprowadzone w różny sposób, ograniczenia prędkości też są różne... no i gęstość ruchu też jest różna. Powoduje to taki efekt, że często dojechanie do miejsca oddalonego o 50km w linii prostej, jest dużo szybsze, niż dojechanie do miejsca oddalonego o 40km w linii prostej. Bo łączna droga jest dużo krótsza, albo ograniczenia prędkości są dużo wyższe, albo nie trzeba się przedzierać przez najbardziej zakorkowane ulice. Użyteczne byłoby tutaj api, które podaje informacje tak jak to robi m.in google maps, czyli po podaniu dwóch punktów pokazuje nam realny dystans do pokonania i przewidywany czas dojazdu. Takie api byłoby użyteczne z perspektywy tworzenia jednego z portali o których wspomniałem w pierwszym zdaniu - jako użytkownika dużo bardziej interesuje mnie rzeczywista odległość, niż odległość w linii prostej.
