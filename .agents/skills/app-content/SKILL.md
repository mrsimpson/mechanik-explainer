---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

## Curriculum

- Hessen, Gymnasium, Klasse 7 (Wunsch des Creators; der Lehrplan ordnet Klasse 6/8 nicht zu und ist auch nicht danach gegliedert).
- Orientation: Hessisches Kultusministerium, "Bildungsstandards und Inhaltsfelder – Das neue Kerncurriculum für Hessen, Sekundarstufe I – Gymnasium, Physik" (Jahr unbestätigt, Dateiname deutet auf 2011), https://kultus.hessen.de/sites/kultus.hessen.de/files/2024-02/kc_physik_uesekii_201102-uea.pdf. Inhaltsfeld "Haus der Naturwissenschaften", Schwerpunkte "Körper und deren Eigenschaften" und "Physikalische Größen und ihre Messung" (Kap. 7.2, S. 29; Beschreibung Kap. 6, S. 22).
- Kein eigenes Material des Creators; die Inhalte schreibt der Assistent aus dem Lehrplan und geprüften Quellen.

## Competencies

Kapitel `koerper` ("Körper und Größen"), Seiten in dieser Reihenfolge:

1. `eigenschaften`: Ich kann Körper anhand messbarer Eigenschaften (Länge, Volumen, Masse) beschreiben.
2. `messwert`: Ich kann eine Größe als Messwert mit Zahlenwert und Einheit angeben.
3. `ablesen`: Ich kann Länge, Volumen und Masse mit einem passenden Messgerät ablesen. Übungen `ablesen-zahl` (number) und `skala-ablesen` (Komponente `Skala`).
4. `umrechnen`: Ich kann Einheiten derselben Größe umrechnen (mm, cm, dm, m, km; mg, g, kg, t; ml, cm³, dm³, l, m³). Übung `umrechnen-ueben`.
5. `schaetzen`: Ich kann eine Größe schätzen und mit einem Vergleichswert begründen. Übung `schaetzen-ueben`.
6. `deutung`: Ich kann eine Beobachtung von einer Deutung unterscheiden.

Übungs-ids der übrigen Seiten: `eigenschaften-stein`, `eigenschaften-masse` (Seite 1); `messwert-vollstaendig`, `messwert-zahlenwert` (Seite 2); `deutung-waage`, `deutung-eisen` (Seite 6).

## Content structure

- Jede Seite: Abschnitte `warum`, `regel`, `beispiel`, `uebung` in dieser Reihenfolge, Titel Warum, Regel, Beispiel, Übung. Der Abschnitt `uebung` ist der letzte.
- Eine Seite hat etwa 100 bis 200 Wörter Text, ein Beispiel (`example`) und mindestens eine Übung.
- Merkhilfen als `note` in `regel`.
- Seitenadressen: `koerper/<seite>/`, ids stabil lassen.

## Terminology

- Begriffe des Lehrplans: Körper, physikalische Größe, Messung, Messwert, Einheit, Umrechnungszahl.
- Einheitensymbole wie im SI: mm, cm, dm, m, km, mg, g, kg, t, ml, l, cm³, dm³, m³. Dezimalkomma im Text, in YAML-Zahlen Punkt.
- Lernende werden mit "du" angesprochen, kurze Sätze, Aktiv.
- Neue Begriffe als `definition` (kommen ins Glossar).

## Exercise patterns

- **zuordnen** (Seite 1, 2): `multiple-choice`, `single-choice`, `true-false` und `number` mit `info` je Option. Fest: Frage; variiert: Körper und Eigenschaften.
- **ablesen** (Seite 3): Vue-Komponente `Skala` (`src/components/Skala.vue`, Logik und Tests in `Skala.ts`, `Skala.test.ts`): Messzylinder mit gezogenem Teilstrichwert (2, 5, 10 oder 20 ml), beschriftet jeder fünfte Strich, Wasserstand nie auf einem beschrifteten Strich; Antwort eine Zahl in ml; Fehler: Teilstriche gezählt, nur beschrifteten Strich gelesen. Die Seite hat zusätzlich eine feste `number`-Aufgabe, weil jede Seite eine Quiz- oder `generated`-Übung braucht (eine Komponente zählt nicht).
- **umrechnen** (Seite 4): `generated` `umrechnen-ueben`, Daten `src/data/einheiten.yaml` (`faktor` = so viele der kleinsten Einheit der Größe, ganzzahlig). Fest: Aufgabentext, Fehlerliste (falsche Richtung, Komma eine Stelle zu weit nach rechts oder links); variiert: Einheitenpaar derselben Größe, Zahl x.
- **schätzen** (Seite 5): `generated` `schaetzen-ueben`, Daten `src/data/vergleiche.yaml` (Fläche in km², Jahr, Herausgeber, Quelle). Fest: Aufgabentext; variiert: Paar a, b mit 10 < b/a ≤ 60; Antwort ganze Zahl mit absoluter Toleranz 5; Fehler: Faktor 10 zu klein oder zu groß.
- **wahr/falsch mit Grund** (Seite 6): Aussage wählen: Beobachtung oder Deutung; Grund in der Rückmeldung.
- Jede Rückmeldung nennt den Grund; Beispiel ("accepted"/"rejected") je Aufgabe.

## Figures

- Tabellen für Stellenwerttafeln (`table`, keine leeren Zellen: "0" eintragen).
- Skala: von der Komponente `Skala` als SVG gezeichnet; die Beschreibung (`describe`) nennt die Skala und den Abstand zum beschrifteten Strich, nicht den Messwert.
- Figur zeigt das Gegebene, nie die Antwort.

## Sources

- Serlo, "Umrechnen von Einheiten" (https://de.serlo.org/mathe/1603/umrechnen-von-einheiten) und "Volumeneinheiten" (https://de.serlo.org/mathe/zahlen-gr%C3%B6%C3%9Fen/gr%C3%B6%C3%9Fen-einheiten/volumeneinheiten), CC BY-SA 4.0, geöffnet und gelesen; nur Fakten übernommen.
- Statistisches Bundesamt (Destatis), "Bundesländer mit Hauptstädten nach Fläche, Bevölkerung und Bevölkerungsdichte am 31.12.2024" (Tabelle geöffnet, Flächen übernommen; Vervielfältigung mit Quellenangabe gestattet).
- Instituto Nacional de Estatística, "Portugal em números 2021": Fläche 92 225,20 km² (CC BY 4.0), geöffnet wurde eine Kopie auf observatorio-lisboa.eapn.pt, nicht die INE-Adresse.
- Wikipedia (nur Weiterlesen-Links, geöffnet): Physikalische Größe, Messwert, Beobachtung, Messzylinder. Der Artikel "Ablesen" ist Lippenlesen und nicht verwendet.
- Nicht geprüft: Jahr des Lehrplans, Klasse-7-Zuordnung, Zweitquellen zu den Kompetenzen 1, 3, 5, 6.

## Adding a chapter or round

1. Kompetenzen als "Ich kann …" unter Notes des Plans und hier eintragen.
2. Ordner `src/<kapitel>/` mit `chapter.yaml` (vollständige Seitenliste), Kapitel in `src/app.yaml` eintragen.
3. Seiten mit den Abschnitten `warum`, `regel`, `beispiel`, `uebung`; Übungen aus den Mustern oben; Daten je Fakt einmal in `src/data/`.
4. Einträge (topics) mit Seitenpfaden im Katalogeintrag ergänzen.
5. `npx lernapps check`, dann committen.

## Rules learned from mistakes

- Eine Komponente übernimmt den Stil der Vorlage nur, wenn ihr Markup in `div.explainer-exercise` steckt und die Klassen `quiz-form`, `quiz-text`, `quiz-number`, `quiz-actions`, `quiz-check` nutzt.
- Tausenderzahlen im Text mit geschütztem Leerzeichen (U+00A0) schreiben, damit sie auf dem Handy nicht umbrechen.
- Jede Seite braucht mindestens eine Quiz- oder `generated`-Übung; eine Exercise-Komponente allein reicht nicht.
- `about` einer Komponente: bei einer Sprache einfache Texte und eine Liste für `mistakes`, keine Sprach-Map.
- Zufallszahlen aus aufeinanderfolgenden Seeds sehen gleich aus: Seed vor dem Ziehen mischen (`Math.imul(seed, 2654435761)`).
- Zahlentoleranz bei `number` ist absolut: eine Schätzaufgabe mit Verhältnissen über mehr als einer Größenordnung lässt einen Fehler (Faktor 10) als richtig gelten; deshalb 10 < b/a ≤ 60 und Toleranz 5.
- Eine Aufgabe, die nur zwei Datensätze hat, ändert nie ihre Aufgabe (Test "the exercise's task changes"): immer genug Datensätze anlegen.
