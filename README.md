# htd-qraphql-api
### Zadanie 1
Inicjalizacja projektu (`npm init`)  
Zainstalowanie (`npm i --save`)  
`graphql-yoga`  
`nodemon`


### Zadanie 2
Zdefiniowanie schemy (pierwsze query)  
Uruchomienie serwera 

### Zadanie 3 
Pierwsze query (helloWorld)  
Pierwsze query z parametrem (helloWorldWithParameter)  
Pierwsza mutacja (increseCounter)

### Zadanie 4
Mutacja ze złożonymi danymi przechowywanymi na serwerze (addTweet)
Query do pobierania listy danych z serwera (getTweets)  
Quwery do pobierania pojedynczych danych z serwera (getTweet)  

### Zadanie 5 
Podłączenie bazy danych 
Zaintalowanie (`npm i --save`)  
`pg`  
`DATABASE_URL = "postgresql://admin321:admin123@htdacademy.cuh9o35zdbq1.eu-west-1.rds.amazonaws.com/graphql";`  
Zamienienie danych trzymanych na serwerze na dane przechowywane w bazie danych.  

### Zadanie 5 
Do mutacji dodającej nowego tweeta dopisz logikę, która:  
1. Sprawdzi, czy użytkownik o podanych w parametrze `username` istnieje już w aplikacji  
  a. jeśli tak - zasocjuje nowego tweeta do istniejącego już w bazie użytownika  
  b. jeśli nie - stworzy nowego użytkownika w bazie danych o zasocjuje go z nowym tweetem 

Dodaj też mutację do usuwania tweeta (removeTweet)  

### Zadanie 6 
Stwórz mutację do 'serduszkowania' tweeta (pole `likes` w tabeli `Tweet`). 
Przy każdym wywołaniu mutacji zwiększaj liczbę lajków posta o jeden. 

### Zadanie 7 
Stwórz query dla użytkownika i użytkowników.  

### zadanie 8 
Dodaj funkcjonalność komentarzy do tweetów.
Komentarze powinny być powiązane z użytkownikami.
Nie zapomnij dopisać resolverów do istenijących już modeli.

### Zadanie 9 
Dodaj paginację do query 'getTweets' (https://www.postgresql.org/docs/9.3/queries-limit.html)
