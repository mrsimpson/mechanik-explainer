---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Keep all four keys.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit. Change the value line below, never this comment.
phase: code
# prePushFailures: written by the pre-push hook. Never change it.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks. Never change it.
failedChecks: { checks-pass: 4 }
---

# Plan: Körper und Messen (Arbeitstitel), first version

<!--
For you, the assistant.
1. Path: `.vibe/plans/01-<short name>.md`. Every later change gets its own plan from the increment template.
2. Read this plan before each step. One phase at a time, tasks in order.
3. Task done → tick `[x]` at once and move it to "Completed" of its phase. An unticked box counts as not done.
4. New task found → add it.
5. Each phase names its skills. Load a skill when its task comes, not before. Read it in full, from its file.
6. Checkpoint: stop, ask, wait for the creator's answer. A message sent before the question is no yes.
7. At most 2 questions per message, one topic each. No questions inside drafts or lists.
8. Work on the branch `work` until the first publish; push only `work`. Commit brings it into `main`.
9. Rules of the workflow, with their ids: `@lernapps/tooling/guidance/workflow-rules.md`.
10. Plan in the creator's language. Keep headings and front matter keys. Delete a comment once its part is filled.
-->

*Started 2026-10-20. Explore, Plan, Code, Commit.*

## Goal

Lernende schätzen, messen und rechnen Größen um (Länge, Volumen, Masse …) und lernen so Körper und ihre Eigenschaften kennen. Ein Kapitel, gründlich, Klasse 7 (Arbeitsstand).

## Key decisions

- Scope geändert (Creator): nicht nur Gravitation, sondern App "Körperphysik"/Mechanik von vorn; erste Version ein Kapitel gründlich: erstes Inhaltsfeld des Hessen-Kerncurriculums, "Haus der Naturwissenschaften" (Körper und Eigenschaften; physikalische Größen und ihre Messung).
- Seite "Ablesen" als Vue-Komponente geplant (gezogene Skalen), Rückfall auf feste SVG-Bilder (Creator: Komponenten sind möglich).
- Archetyp explainer (guess, Creator hat nicht gewählt): Seiten erklären und üben; `generated`-Aufgaben liefern beliebig viele Aufgaben zum Schätzen/Umrechnen aus gezogenen Werten (laut lernapps-explainer-plan).
- Lehrplan: Hessen (Gymnasium) als Orientierung; Klasse 7 ist Wunsch des Creators, im Lehrplan nicht belegt.

## Notes

### Curriculum orientation

- Hessisches Kultusministerium: "Bildungsstandards und Inhaltsfelder – Das neue Kerncurriculum für Hessen, Sekundarstufe I – Gymnasium, Physik". Jahr: unbestätigt (Dateiname deutet auf 2011). https://kultus.hessen.de/sites/kultus.hessen.de/files/2024-02/kc_physik_uesekii_201102-uea.pdf (gelesen).
- Inhaltsfeld "Haus der Naturwissenschaften", Schwerpunkte "Körper und deren Eigenschaften" und "Physikalische Größen und ihre Messung" (Kap. 7.2, S. 29; Beschreibung Kap. 6, S. 22). Das Dokument ordnet Gymnasium nicht nach Klasse 6/8 (Kap. 7.1); Klasse 7 ist daher nicht belegt.
- Nicht gelesen: Fassungen für Haupt- und Realschule.
- KMK-Bildungsstandards Physik (MSA, 2004) gelesen: nur Jahrgangsstufe 10, keine Gliederung nach Klasse 7.

### Competencies

Kapitel 1: Körper und Größen (Entwurf; Wortlaut ist von mir abgeleitet, nicht aus dem Lehrplan zitiert)

1. Ich kann Körper anhand messbarer Eigenschaften (Länge, Volumen, Masse) beschreiben.
2. Ich kann eine Größe als Messwert mit Zahlenwert und Einheit angeben.
3. Ich kann Länge, Volumen und Masse mit einem passenden Messgerät ablesen.
4. Ich kann Einheiten derselben Größe umrechnen (mm, cm, m, km; ml, l, cm³; g, kg, t).
5. Ich kann eine Größe schätzen und mit einem Vergleichswert begründen.
6. Ich kann eine Beobachtung von einer Deutung unterscheiden.

Wie Lernende dahin kommen, und welche Fehlvorstellung die Rückmeldung auffängt (alles guess):

1. Eigenschaften eines Körpers sammeln und Größen zuordnen; fängt "Farbe/Form ist eine Größe" und Verwechslung von Volumen und Masse.
2. Messwerte aus Bild und Skala zu Zahlenwert und Einheit zusammensetzen; fängt fehlende Einheit.
3. Skala ablesen, auch mit anderem Skalenteilungswert (generated); fängt falsches Ablesen der Strichabstände.
4. Umrechnen durch Stellenwertschritte herleiten (generated); fängt verschobene Zehnerpotenzen und cm³/ml-Verwechslung.
5. Schätzen mit Vergleichswerten (z. B. Fläche Saarland gegen Portugal, nach Primärquelle) (generated); fängt Schätzwerte um Zehnerpotenzen daneben.
6. Sätze sortieren: Beobachtung oder Deutung; fängt "Ich sehe, dass es schwerer ist" als Messergebnis.

### Sources (opened and read)

- serlo.org, "Umrechnen von Einheiten" (Länge, Volumen, Masse), https://de.serlo.org/mathe/1603/umrechnen-von-einheiten, CC BY-SA 4.0 – verified (Kompetenz 4).
- serlo.org, "Volumeneinheiten", https://de.serlo.org/mathe/zahlen-gr%C3%B6%C3%9Fen/gr%C3%B6%C3%9Fen-einheiten/volumeneinheiten, CC BY-SA 4.0 – verified (Kompetenz 4, ml/cm³/l). CC BY-SA verlangt Weitergabe unter gleichen Bedingungen: nur Fakten übernehmen, keine Sätze.
- Statistisches Amt Saarland, "Saarland heute 2021", Tab. 1: Fläche 2 571,1 km² (2019), Bevölkerung 987 Tsd. (2019) – verified (Seite 2 als Bild gelesen). https://www.statistischebibliothek.de/mir/servlets/MCRFileNodeServlet/SLHeft_derivate_00008045/SL%20Saarland%20heute%202021.pdf
- INE, "Portugal em números 2021": Fläche Portugal 92 225,20 km², Quelle dort: Direção-Geral do Território, CC BY 4.0 – verified; geöffnet wurde eine Kopie auf observatorio-lisboa.eapn.pt (https://observatorio-lisboa.eapn.pt/wp-content/uploads/PtNumeros2021_c.pdf), die INE-Originaladresse nicht (unchecked). Vor dem Veröffentlichen die INE-Adresse suchen.
- Rechenbeispiel: 92 225,20 / 2 571,1 ≈ 35,9 → rund 36 Saarländer-Flächen in Portugal (Fläche, nicht Einwohner; Jahre verschieden: 2019 und 2021).
- Serlo hat laut Suche keine Physik-Seiten zu Messen/Messfehlern; für Kompetenzen 1, 3, 5, 6 ist noch keine Zweitquelle verifiziert (unchecked; ggf. weglassen).
- Nicht geprüft: Lehrplan-Jahr, Hessen Haupt-/Realschule, Klasse-7-Zuordnung.

### Scope

- In: Körper und messbare Eigenschaften (Länge, Volumen, Masse), Messwert mit Einheit, Ablesen, Umrechnen innerhalb einer Größe, Schätzen, Beobachtung vs. Deutung.
- Out (spätere Kapitel): Dichte, Zeit und Geschwindigkeit, Kraft/Gewichtskraft, Beschleunigung, Gravitation; Messfehler und Messreihen (Lehrplan: zweite Stufe, Klasse 9/10); Umrechnen von Flächen- und Rauminhalten höherer Potenzen nur Volumen.
- Datenbereich: Länge mm–km, Volumen ml–m³, Masse mg–t, jeweils komplett.
- Sprache: Deutsch.

## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. All content questions belong here; Plan only
  maps the answers onto the archetype.
- Ask. Write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". Never tick a topic you assumed.
- Skills: `lernapps-app`, `lernapps-content-research`.
-->

### Tasks



### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

- Goal: what learners do in the app, what they learn. → "Schätzen, messen, umrechnen." Thema: erstes Inhaltsfeld des Lehrplans (Körper, Größen, Messen) – "passt".
- Learners: subject, school year, prior knowledge. Land and Schulform only if the creator names a school or class,
  at most once; none → KMK-Bildungsstandards. → Physik, Klasse 7 zuerst; Hessen gewünscht, Bayern oder Baden-Württemberg auch ok. Vorwissen: noch offen.
- Model and focus: an app of the catalog (read https://lernapps.net/apps/llms.txt) as model; what matters most
  (exercises, visualisations, game feel).
- Hurdles: misconceptions and mistakes of the learners; the creator's examples and experiments. → Creator: "das kannst Du Dir selbst denken" (guess: Einheiten verwechseln, z. B. cm³/ml, g/kg; Zehnerpotenzen beim Umrechnen; Skala falsch ablesen; Schätzwerte um Zehnerpotenzen daneben).
- Content: who writes it (creator, you, from sources); own material (worksheets, tests); how it is made (sources,
  research, a data format). → Assistant schreibt; kein eigenes Material. Wo es reale Bezüge gibt, Primärquellen verlinken (Beispiel des Creators: "Wie viele Saarländer passen in Portugal?").
- Amount: how much content per level or chapter in the first version (e.g. "one text per school year"); what comes
  later. → Creator: Explainer erzeugt Aufgaben aus der Notation, keine feste Zahl nötig. Ein Kapitel gründlich; später weitere Inhaltsfelder (guess: Weg/Zeit/Geschwindigkeit, Kraft, Dichte, Gravitation).
- Languages: German only, or more (texts, code). → (guess) nur Deutsch.
- Look and feel: calm like a worksheet, or like a game (colours, praise, effects); dark mode. → Creator: kommt aus der Vorlage des Archetyps (guess: Vorlage unverändert, ruhig wie Arbeitsblatt, Dunkelmodus der Vorlage).
- Terms: the creator's words for the main things in the app, used everywhere. → (guess) Begriffe des Lehrplans: Körper, physikalische Größe, Messung, Einheit, Messwert.

### Entry draft

<!-- YAML valid against the entry schema, with its property names. Only known values, never invented. -->

```yaml
title: Körper und Größen
subject: Physik
grades: [7]
summary: >-
  Du schätzt, misst und rechnest um: Länge, Volumen und Masse von Körpern.
  Auf jeder Seite bekommst du neue Aufgaben mit Rückmeldung zu typischen Fehlern.
keywords:
  - Messen
  - Einheiten umrechnen
  - Schätzen
  - Größen
  - Länge
  - Volumen
  - Masse
creator:
  name: Eduard Explainer
# url, source and topics (paths) follow after the build; not yet known.
fitness:
  account: false
  install: false
  storage: device   # (guess) Fortschritt auf dem Gerät; vor dem Eintrag mit lernapps check --report messen
  thirdParty: none
  checked: false
```

### Completed

- [x] Install the skills, if missing (the app commits them): `npx --yes skills add
      lernapps/tooling#exp/compact-guidance -y -s lernapps-app lernapps-content-research lernapps-exercise-patterns
      lernapps-content-growth lernapps-check lernapps-github-setup lernapps-content-questions lernapps-github
      lernapps-listing`.
- [x] Load skill `lernapps-app`. Tell the creator in two sentences what a lernapps app is and where it will live: in
      their own GitHub repo, free, public, at their own address. Offer to explain GitHub; they need not know it.
      Example: "Deine App wird über GitHub veröffentlicht, kostenlos und öffentlich, unter deiner eigenen Adresse.
      Soll ich dir kurz erklären, was GitHub ist?"
- [x] Interview: ask the topics of "Answers" in order. Skip a topic only when an earlier answer covers it; note
      which. No answer → ask once more; still none → write your assumption with "(guess)". Done when every topic
      has an answer or a guess.
- [x] Load skill `lernapps-content-research`. Research as it says. Under "Notes": curriculum orientation,
      competencies by chapter as "Ich kann …", verified sources. No competencies → not done.
- [x] Under "Notes", one line per competency: how learners get there (derive, not only read off; e.g. a tree diagram
      shows how a probability comes about), which misconception the feedback catches.
- [x] Under "Notes", the scope: what is in, what is out and why, the data range (e.g. "all main-group elements",
      never a silent "1–20"), the languages.
- [x] Fetch https://lernapps.net/apps/schemas/entry.v1.schema.json and read each property's description. Ask what
      helps teachers and parents find the app. Fill "Entry draft". Search words: one or two words each, as people
      type them.
- [x] Choose the archetype with skill `lernapps-app`. Write it and its reason under "Key decisions". Set
      `archetype`.
- [x] **Checkpoint:** research. Show in plain words: curriculum orientation, competencies by chapter, didactic
      approach, scope, every "(guess)", sources and how you checked them, what is unchecked, archetype and reason.
      Stop and wait. Changes → change, ask again.
- [x] Install the archetype's skills: `npx --yes skills add lernapps/tooling#exp/compact-guidance -y -s
      lernapps-<archetype>-plan lernapps-<archetype>`.
- [x] Set `phase: plan`: change the value line (`grep '^phase:'` prints `phase: plan`).


## Plan

<!--
- Map the confirmed content onto the archetype: structure, screens or pages, exercise patterns, data files,
  components.
- No new content questions. A content gap → back to Explore; say so.
- Confirmable in one read. After the yes, work on your own: at most 3 creator turns until the listing.
- Skills: `lernapps-<archetype>-plan`, `lernapps-exercise-patterns`.
-->

### Tasks

### Content method

Archetyp explainer; ein Kapitel "Körper und Größen" mit 6 Seiten, jede Seite mit denselben Abschnitten `Erklärung`, `Beispiel`, `Übung` (feste ids). Keine Vue-Komponenten (`prefer-built-in-block`): alle Muster gehen mit eingebauten Blöcken und Aufgaben.

- **Muster "zuordnen"** (Kompetenz 1, 2): Paare zuordnen bzw. aus gleichartigen Dingen wählen. Fest: Frage und Rückmeldung mit Grund; variiert: Körper (Stein, Wasserglas, Buch …) und Eigenschaften. Beispiel: "Welche Eigenschaft ist messbar: Farbe, Länge, Geruch?" Daten: `src/data/koerper.yaml` (Körper mit Eigenschaften und Größe).
- **Muster "ablesen"** (Kompetenz 3): bevorzugt eine interaktive Vue-Komponente (Creator-Hinweis: Komponenten sind möglich): Skala mit gezogenem Füllstand/Zeigerwert und gezogenem Strichabstand, Text-Alternative für Lesende ohne JavaScript; Begründung nach `prefer-built-in-block`: kein Block zeichnet gezogene Skalen. Details aus `references/components.md` in Code; geht das nicht, Rückfall auf: Bild einer Skala (feste SVG-Bilder in `images/`, Quelle und Lizenz dabei: selbst gezeichnet), gefragt wird Zahlenwert und Einheit. Fest: Skala, Rückmeldung zum Strichabstand. Es werden nur wenige feste Skalen verwendet; gezogene Skalen nur, wenn `references/exercises.md` es für `generated` erlaubt (in Code prüfen, sonst bleibt es bei festen Bildern; im Zweifel unter "Where I had to guess"). Die Aufgabe zeigt die Skala, nie die Antwort (`explainer-figure-hides-answer`).
- **Muster "umrechnen"** (Kompetenz 4): `generated`-Aufgabe mit gezogenem Wert und Einheitenpaar derselben Größe; Zahl mit Einheit; Rundung gesagt; typische Fehler mit Meldung ("34 cm: zwei Stellen nach rechts, nicht eine"; Volumen: Faktor 1000 statt 10). Daten: `src/data/einheiten.yaml` (Einheit, Größe, Faktor zur Basiseinheit, je einmal). Plausible Werte je Größe (z. B. Länge 0,5 mm bis 5 km, nur Werte mit höchstens zwei Nachkommastellen).
- **Muster "schätzen"** (Kompetenz 5): `generated`-Aufgabe mit gezogenem Vergleichsdatensatz; gefragt "wie oft passt A in B?", Antwort in Toleranzbereich (Faktor 2 gut, Zehnerpotenz daneben mit eigener Rückmeldung); danach Wert und Primärquelle. Daten: `src/data/vergleiche.yaml` (Name, Fläche oder Masse, Einheit, Jahr, Quelle als Adresse, Lizenz). Start: Saarland 2 571,1 km² (2019) und Portugal 92 225,20 km² (2021).
- **Muster "wahr/falsch mit Grund"** (Kompetenz 6): Aussage wählen: Beobachtung oder Deutung; Grund in der Rückmeldung. Daten: Aussagenliste in der Seite.
- **Figuren:** Stellenwerttafel als `table`; Skalen als SVG mit Textalternative und 360 px; Flächenvergleich als `bar` oder eigenes Rechteck-SVG ohne Zahlen.
- **Prüfen (nach `success.md`):** Geprüft wird die Eigenschaft, nicht eine Musterlösung. Umrechnen: akzeptiert Komma und Punkt als Dezimalzeichen und Schreibweisen wie 340 oder 340,0; abgelehnt mit Meldung: Stellenverschiebung falsch (34; 3 400), Faktor 10 statt 1000 bei Volumen, Einheit vertauscht (cm³ und ml sind gleich: beide Einheiten akzeptiert, wenn nach Volumen in cm³ oder ml gefragt ist). Schätzen: akzeptiert jeder Wert im Faktor 2 um die richtige Zahl; "Zehnerpotenz daneben" eigene Meldung. Ablesen: akzeptiert Zahl mit passender Einheit (ml; auch cm³); abgelehnt: Strichabstand falsch gezählt. Jede Aufgabe bekommt akzeptierte und abgelehnte Beispiele (`examples`, `mistakes`) als Test.
- **Weitere Kapitel später:** neue Ordner `chapter.yaml` unter `src/`, Seiten in `chapter.yaml` und `src/app.yaml`; Muster aus dieser Liste wiederverwenden.
- **Grenzen:** prüft Zahl und Einheit, nicht den Rechenweg; Schätzen nur mit Toleranzbereich; keine echten Messversuche am Gerät.

Skizzen: `.vibe/plans/sketches/seite-ablesen.svg`, `seite-umrechnen.svg`, `seite-schaetzen.svg`. Pro Seite die Schritte:

1. Seite "Körper und ihre Eigenschaften": Text mit Beispielen; Übung: Eigenschaften den Größen zuordnen; Rückmeldung nennt den Grund.
2. Seite "Messwert und Einheit": Erklärung Zahlenwert plus Einheit; Übung: fehlende Einheit zu Aussage wählen.
3. Seite "Ablesen": Skizze `seite-ablesen.svg`; nach "Prüfen" Rückmeldung zum Strichabstand.
4. Seite "Einheiten umrechnen": Skizze `seite-umrechnen.svg`; neue Aufgabe per Knopf "Neue Aufgabe".
5. Seite "Schätzen": Skizze `seite-schaetzen.svg`; nach Eingabe Rückmeldung, dann Wert und Quelle als Link.
6. Seite "Beobachtung oder Deutung": Aussagen einzeln wählen; Rückmeldung mit Grund.

### Completed

- [x] Show the creator, short: goal, competencies by chapter, entry draft, tasks, sketches; the content method in
      plain words (what learners see and do, what it cannot do). At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method, with the sketches shown. Stop and wait for an
      explicit yes. Changes → change, ask again. No `create` before the yes.
- [x] Set `phase: code`: change the value line (`grep '^phase:'` prints `phase: code`).

- [x] Load skill `lernapps-<archetype>-plan`. Map the content as it says.
- [x] Load skill `lernapps-exercise-patterns`. Choose a pattern per competency. Write "Content method".
- [x] Write the Code tasks under "Code": pages or screens, their content, what each shows. Each ends in a commit.
- [x] Each screen, component or interactive exercise: a sketch (static SVG or image, or the steps with what
      learners see after each). Words alone are not enough.


## Code

<!--
- Build the app from the archetype and the confirmed plan. Work on your own.
- Commit after each task; the hooks check. A check fails → skill `lernapps-check`. Fix from the message; never
  bypass a hook.
- Undecidable → choose, mark "(guess)" under "Key decisions", go on.
- Creator asks for a change → first say your reading in one sentence ("Ich nehme alle 44 Hauptgruppenelemente
  auf."); never narrow it silently. Content change → update "Notes" too.
- Skills: `lernapps-check`, `lernapps-github-setup`, `lernapps-<archetype>`, `lernapps-content-questions`, and the
  app's content guide `app-content`.
-->

### Tasks

- [ ] Load skill `lernapps-check`. Create the app in this plan's folder as it says. `create` keeps this plan. Never
      write the app by hand.
- [ ] Load skill `lernapps-github-setup`. Put the app on GitHub as it says: repo, branches, Pages, the app committed
      on `work`, the preview pull request. Give the creator the preview link once.
- [ ] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method"
      (`app-content-guide`). `grep -c "FILL IN" .agents/skills/app-content/SKILL.md` prints 0. Commit it before
      any content.
- [ ] Load skill `lernapps-<archetype>` and the content guide. Questions with options and feedback: also skill
      `lernapps-content-questions`.
- [ ] Seite 1 "Körper und ihre Eigenschaften" schreiben; commit, push `work`.
- [ ] Seite 2 "Messwert und Einheit"; commit, push `work`.
- [ ] Seite 3 "Ablesen" mit den festen Skalen-SVGs; commit, push `work`.
- [ ] Seite 4 "Einheiten umrechnen" mit `einheiten.yaml` und generierten Aufgaben; commit, push `work`.
- [ ] Seite 5 "Schätzen" mit `vergleiche.yaml`, Quellenlinks und Rechenbeispiel; commit, push `work`.
- [ ] Seite 6 "Beobachtung oder Deutung"; commit, push `work`.
- [ ] The content guide matches what was built (`app-content-matches`).
- [ ] `npx lernapps check` passes.
- [ ] Look at a screenshot of every screen and state (start, each mode, pause, end), desktop and 360 px. Compare
      each with the confirmed sketches.
- [ ] Every box of Explore, Plan and Code ticked.
- [ ] Set `phase: commit`: change the value line (`grep '^phase:'` prints `phase: commit`).

### Completed

## Commit

<!--
- Publish with the creator's yes, then list the app. A push to `main` publishes.
- Skills: `lernapps-github`, `lernapps-listing`.
-->

### Tasks

- [ ] Load skill `lernapps-github`. Push `work` and see the pull request's checks to green as it says.
- [ ] Verify the default branch and Pages as the skill says. Note each click only the creator can make.
- [ ] **Checkpoint:** publish. Show the preview link; ask before the app goes online; put the noted clicks into the
      same question. Wait for the yes.
- [ ] Publish as skill `lernapps-github` says: `work` into `main`, the run of `Pages` watched to the end.
- [ ] Open the address the job `deploy` printed; confirm the app shows. Use that address, never a derived one.
- [ ] Load skill `lernapps-listing`. Complete the entry draft (e.g. the address).
- [ ] **Checkpoint:** list. Ask before opening the listing pull request; wait for the yes.
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] Open the listing pull request as the skill says; see it to "bestanden".
- [ ] Plan changed since its last push → commit it on `main`, push again.

### Completed

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->
