---
title: 5. Jaki język programowania wybrać
date: "2022-12-06T12:00:00.000Z"
description: "Troche clickbaitowy tytuł, bo nie wskaże ci tutaj dokładnej instrukcji co zrobić żeby było najlepiej, samemu musisz wybrać co jest dla Ciebie najlepsze... ale nie przez słuchanie złotych porad innych ludzi... bo oni są inni niż ty!"
---

Troche clickbaitowy tytuł, bo nie wskaże ci tutaj dokładnej instrukcji co zrobić żeby było najlepiej, samemu musisz wybrać co jest dla Ciebie najlepsze... ale nie przez słuchanie złotych porad innych ludzi... bo oni są inni niż ty!

Fajnym uzupełnieniem posta jest [Jak w ogóle zacząć](https://faqprogramisty.pl/1-jak-w-ogole-zaczac/)

## Zasada numer jeden - subiektywne opinie są subiektywne

**Osobiście** piszę w C# i **dla mnie** jest najlepszym językiem, bo **spędziłem w nim tyle lat**, że jestem w stanie stworzyć z jego pomocą wszystko co tylko chcę, niekoniecznie do wszystkiego będzie najlepszy, ale nie ma rzeczy które są **dla mnie** niemożliwe do zrobienia. Jak już wspomniałem, nie do wszystkiego jest najlepszy, a projekty przy których pracowałem, w większości były złożone z wielu różnych elementów, dlatego C# używałem jedynie do rzeczy w których jest "**jednym z topowych** języków, do robienia takich rzeczy" - a robiąc inne rzeczy, używałem języków które są topowe, uwaga, w robieniu tych rzeczy.

Nie bez powodu pogrubiłem fragmenty mówiące **o mnie** i że jest **jednym z topowych**, niezależnie jaki rodzaj aplikacji wybierzesz (a to już prościej wybrać... ale i tak warto sprawdzić kilka, żeby ocenić co się lubi na podstawie doświadczeń a nie cudzych opinii), do wszystkiego można znaleźć listę języków które są topowe.

## Pora na wymienienie kilku języków które istnieją

#### Javascript

Ktoś inny mógłby powiedzieć że **Javascript** jest najlepszy, bo on pracuje w javascriptcie i jemu się podoba, ja czasami muszę robić coś w javascriptcie i mi się to nigdy nie podobało i pewnie nigdy nie spodoba.

#### Python

Ktoś inny pewnie powie że **Python** jest najlepszy, bo jest prosty, ja miałem wiele podejść do pythona i za każdym razem brakowało mi w nim mnóstwa funkcjonalności, które są od wielu lat standardem w innych językach (jest prosty - jest mniej do nauki, ale przez te braku dużo trudniej jest zrobić wiele rzeczy... no chyba że skorzystasz z bibliotek, które są zazwyczaj napisane w C).

#### C

Wspomniałem o **C**, no to ktoś może powiedzieć że C jest najlepsze, bo zaczynał od tego na studiach... a jak ktoś zaczynał od innego języka to poleci inny język.

#### C++

Jak jesteśmy przy C to na pewno ktoś wspomni o **C++**, bo jest potężny, ale za to realnie używany tylko w kilku branżach (nastawionych na skrajną wydajność, czyli przy nauce C lub C++ trzeba od razu nastawiać się, na robienie rzeczy ze skrajną wydajnością).

#### Rust

Fajną alternatywą do C++ jest **Rust**, który jest nowszy, zaprojektowany z myślą o współczesnych standardach, ale jest też modny... no i jest alternatywą do C++, więc stosuje się go głównie tam gdzie C++ i z takimi samymi intencjami (ktoś może ci go zaproponować bo jest modny, ale bez zwracania uwagi na zastosowanie).

#### Go

Taka sama sytuacja jest z **Go**, modny język który ma określone zastosowanie na rynku, ale dużo osób uznaje go za idealny, bo jest modny.

#### C#

Żeby odejść od klasyków, mamy mającego lekko ponad 20 lat **C#**, który jest oczywiście idealny bo znam go najlepiej ze wszystkich, innych nie znam tak dobrze więc nie znam ich pełnych możliwości, tak samo jak eksperci od innych języków, nie znają pełnych możliwości C#, wiele razy spotykałem się z sytuacją, gdzie osoby od Pythona mówiły, że C# jest gorszy od Pythona, bo Pythona się uczyli przez długi czas i go dobrze znają, a C# się nie uczyli... i go nie znają, więc jest gorszy.

#### Java, Kotlin, Scala... ogólnie JVM

Na etapie projektowania C#, twórcy wzorowali się na istniejącym już języku **Java**... na który obecnie chyba każdy narzeka, włącznie z programistami Javy, ale Java jako **JVM** jest całkiem bogatym środowiskiem, z któego korzystają takie fajne języki jak **Kotlin** i **Scala** (i sporo innych).

#### PHP

Każdy kto wejdzie w świat programowania, na pewno po pewnym czasie usłyszy o legendarnym **PHP**, które jest znane z tego, że w starych wersjach pisało się w nim brzydki kod, a w nowszych wersjach jest już normalniej. PHP jest znane też z potężnej liczby, jak dużo % internetu na nim działa, ale na to bym nie zwracał uwagi, wartych uwagi projektów jest mniej więcej tyle, co w innych językach, a te potężne statystyki biorą się głównie z drobnych stron, głównie gotowców (wordpress itp), przy których odradzałbym pracowania każdemu, ale pewnie nadal jest dużo osób które wolą taki rodzaj projektów.

## Już mi sie nie chce wymieniać, ale to nie wszystko

Mógłbym pójść dalej i powiedzieć że istnieją takie rzeczy jak **WASM**, który otwiera wiele nowych możliwości, albo że język programowania to nie jest jedyne narzędzie programisty (mimo że główne), tylko jedno z wielu, a gdybym chciał zrobić listę wszystkiego co można wybrać, to pewnie musiałbym pisać tego posta kilka dni.

Warto spróbować przynajmniej w podstawach każdego z nich i samemu zdecydować co się lubi a co nie. Tylko że zawsze trzeba pamiętać, żeby wybierać solidne źródła materiałów, głupio byłoby odrzucić jakiś język, bo wybrało się poradnik z 2010 roku (a dużo osób robi ten błąd).

## Języki mają swoje biblioteki i frameworki

Przy wyborze języka, zazwyczaj decydującym elementem jest jego główne zastosowanie na rynku, bo dodatkowe narzędzia (biblioteki/frameworki) są zazwyczaj tworzone z myślą o tym zastosowaniu.

Przykładowo

- Jeśli jakiś język jest używany głównie do tworzenie gier, bo dobrze się do tego nadaje, to najprawdopodobniej będzie można w nim pisać kod do wielu silników gier, ale za to będzie słabszy do innych rzeczy.
- Jeśli język jest używany głównie do robienia prototypowych rozwiązań, bo dobrze się do tego nadaje, to najprawdopodobniej będzie do niego mnóstwo bibliotek pozwalających na szybkie składanie projektów (robienie w tydzień czegoś, co w innym języku zajęłoby 3 miesiące), ale niestety zawsze tutaj jest efekt "coś kosztem czegoś", jeśli coś jest dobre do prototypów, to jest słabe do dużych projektów i odwrotnie.
- Jak wspomniałem o dużych projektach, to znowu, są języki które mają specyfike, która jest pomocna przy utrzymywaniu dużych rzeczy, ale spowalnia dodawanie nowych, a całe środowisko (biblioteki itd) będzie dostosowane do takiego stylu.

Konkretnych języków i bibliotek już nie wymieniałem, bo łatwo znaleźć je w internecie, a nie chciałem robić z tego ogromnego tekstu. W przypadku każdego typu projektu, mamy kilka języków do wyboru, z czego każdy z nich ma zazwyczaj kilka bibliotek i frameworków do wyboru.

## Dużo rzeczy do wyboru się z tego robi

Dlatego możemy iść drogą sprawdzania i wykluczania, tak jak to opisałem w [Jak w ogóle zacząć](https://faqprogramisty.pl/1-jak-w-ogole-zaczac/). Najpierw możemy sprawdzić czy jakiś typ aplikacji w ogóle nam pasuje, z dowolnym językiem który jest do tego dedykowany. Żeby odrzucić przykładowo tworzenie robotów, nie musimy próbować każdego z języków, które są zalecane do tworzenia robotów, wystarczy sprawdzić czy sam typ aplikacji nam odpowiada, a dopiero później wchodzić głębiej i testować różne możliwości.

**Myślę że na zabawę w eksperymenty warto poświęcić pierwsze mniej więcej pół roku nauki**, po tym czasie powinniście mieć jakiekolwiek zdanie na temat tego co wam się podoba a co nie. Oczywiście to nie jest okres po którym macie zatrzymać się na jednym języku i uczyć się tylko jego, jak wspomniałem na początku, wiele projektów wymaga znajomości więcej niż jednego języka i głupio byłoby się zamykać na znajomość tylko jednego. Lepszym programistą będzie ten z nastawieniem, że poradzi sobie we wszystkich warunkach, niż tylko w wymarzonym i jasno zdefiniowanym środowisku.

Oczywiście to nie będzie stracone pół roku, bo cały czas będziecie się uczyć nowych rzeczy. Dużo funkcjonalności z języków, występuje w wielu innych językach, jeśli nauczysz się czym jest funkcja, to w każdym języku będzie tym samym. Jeśli nauczysz się czym jest asynchroniczność, to w każdym języku będzie tym samym. Niekoniecznie tak samo będą działać te rzeczy pod spodem, co może mieć wpływ na wydajność, bo ich obsługa będzie napisana w troche inny sposób, ale będą miały na celu taki sam efekt końcowy.
