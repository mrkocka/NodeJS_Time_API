# NodeJs TIME API

Ez egy egyszerű API, amely több időzónában is visszaadja az aktuális időt. Az API célja az API-technológiával való gyakorlás és ismerkedés. Használd kedved szerint, kísérletezz vele, és építsd be bármelyik projektedbe!

## Telepítés

Az API használatához a következő függőségek telepítése szükséges:

```bash
 npm init -y
 npm install express moment
 npm install moment-timezone
```

Egy példa arra, hogyan bővítheted az időzónákat:

![image](https://github.com/mrkocka/NodeJS_Time_API/blob/main/K%C3%A9perny%C5%91fot%C3%B3%202024-12-08%20-%2022.43.51.png)

Itt találsz néhány időzónát a kísérletezéshez:
| Időzóna | Description |
| :-------- | :------------------------- |
| UTC |Koordinált világidő (alapértelmezett időzóna)|
| America/Los_Angeles| Los Angeles, USA (Csendes-óceáni időzóna - PST PDT.|
| Asia/Tokyo |Tokió, Japán. |
| Australia/Sydney | Sydney, Ausztrália. |
| Africa/Johannesburg |Johannesburg, Dél-Afrika. |
| Europe/Paris|Párizs, Franciaország. |
| Asia/Hong_Kong|Hongkong. |

#### API végpont minták:

A következő végpontokon érheted el az API-t, ha lokálisan futtatod:

```http
  http://localhost:3000/time
```

```http
  http://localhost:3000/time/london
```

```http
  http://localhost:3000/time/newyork
```

```http
  http://localhost:3000/time/example
```
