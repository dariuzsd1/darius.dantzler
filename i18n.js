/* i18n.js — tiny translation engine. Load BEFORE site-chrome.js on every page.
   Mark translatable text with data-i18n="key" (textContent is swapped).
   window.ddsI18n.setLang('de'|'fr'|'es'|'en') switches + persists + fires 'ddslangchange'.
   Add a language: add its column to DICT. Add a string: add a key to every column. */
(function () {
  var DICT = {
    en: {
      "nav.home": "Home", "nav.experience": "Experience", "nav.education": "Education",
      "nav.projects": "Projects", "nav.personal": "Personal", "nav.contact": "Contact",
      "footer.explore": "Explore", "footer.elsewhere": "Elsewhere",
      "tagline": "Space Security, Sustainability & Policy",
      "home.viewcv": "View CV",
      "home.lede": "I'm working toward a career at the intersection of space security, sustainability, and policy, the work that decides which capabilities get built, who gets to use them, and under what rules.",
      "home.body": "I hold a Master's in Space Studies (Space Business, Policy & Entrepreneurship) from the International Space University, completed in June 2026, on top of a background in political science and business law. Four internships across the U.S. European Command gave me high-level working knowledge of policy, security, and international relations.",
      "home.quote": "\u201cI want to make space more accessible, enabling those who <em>can</em> do in space to be <em>able</em> to do in space.\u201d", "facts.degree.l": "Degree", "facts.degree.v": "M.S. Space Studies, ISU (2026)", "facts.based.l": "Based", "facts.based.v": "Stuttgart, Germany", "facts.status.l": "Status", "facts.status.v": "U.S. citizen, open to relocation", "facts.avail.l": "Available", "facts.avail.v": "Now",
      "crumb.home": "Home", "crumb.personal": "Personal", "open": "Open",
      "personal.title": "The person behind the work",
      "personal.dek": "A slower read. The timeline, the hobbies, the music, the films, and the lines I keep coming back to. Same me, off the clock.",
      "personal.intro": "The rest of this site is the record of what I've built. This part is context: where I come from, what I do on my own time, and the things that shaped how I think. Pick a door.",
      "card.chrono.num": "01 \u00b7 Life so far", "card.chrono.title": "Chronology", "card.chrono.desc": "A scrolling walk through the milestones (where I've lived, studied, and worked) set against the places they happened.",
      "card.effects.num": "02 \u00b7 Off the clock", "card.effects.title": "Personal Effects", "card.effects.desc": "The hobbies and small obsessions, told in pictures.",
      "card.music.num": "03 \u00b7 On repeat", "card.music.title": "Music Room", "card.music.desc": "Favorite songs, albums, and artists, three ways. Spin a record, slide one from its sleeve, or read the liner notes.",
      "card.screening.num": "04 \u00b7 Watching", "card.screening.title": "Screening Room", "card.screening.desc": "Films and shows worth your time, in a line or two.",
      "card.quotes.num": "05 \u00b7 Words that stuck", "card.quotes.title": "Quotes", "card.quotes.desc": "Lines I hold close, and the people I keep learning from.",
      "back.personal": "Back to Personal", "crumb.contact": "Contact", "scan.hint": "Tap a song to hear thirty seconds \u00b7 scan any code to open in Spotify",
      "contact.title": "Let\u2019s talk",
      "contact.intro": "If you\u2019re working on something in space policy, security, or sustainability, I\u2019d like to hear about it. A role, a project, or just a good conversation, the fastest ways to reach me are right here.",
      "contact.email": "Email me", "contact.schedule": "Schedule a call", "contact.schedule.sub": "Pick a time", "contact.cv": "View CV", "contact.cv.sub": "Preview & download", "cv.opentab": "Open in tab", "cv.download": "Download",
      "chrono.title": "The story so far", "chrono.dek": "A walk through the milestones, in order. Where I\u2019ve lived, what I studied, and the work that pointed me toward space. Scroll to move through it.", "chrono.scrollcue": "Scroll to begin",
      "effects.title": "The stuff, off the clock", "effects.dek": "The hobbies and small obsessions, told in pictures. Hover or tap a tile to read the line behind it.",
      "music.title": "The Music Room", "music.dek": "My favorite songs, albums, and artists, laid out three ways. Spin a record, slide one out of its sleeve, or read up on the people behind the sound.",
      "quotes.title": "Lines I keep coming back to", "quotes.dek": "The sentences I\u2019ve tacked up over the years, from books, speeches, films, and people who taught me something. Tap a card to see who said it.", "quotes.hint": "Tap any card to flip it", "quotes.saidby": "Said by", "quotes.from": "from", "quotes.aria.reveal": "show who said this", "quotes.aria.hide": "show quote",
      "ex.title": "My professional record", "ex.dek": "Roles, scope, and the work that came out of them, in order.", "ex.viewcv": "View CV", "ex.keyrole": "Key role", "ex.more": "More", "ex.less": "Less", "ex.backhome": "Back home",
      "ed.title": "My academic career", "ed.dek": "Degrees, programs, and research.", "ed.inprogress": "In progress", "ed.moredetail": "More detail", "ed.less": "Less", "ed.gallery": "Photo gallery",
      "sr.title": "Films and shows worth your time", "sr.dek": "A running shelf of what I keep coming back to, favorites first within each group. Flip any poster for a line or two on why it made the list.", "sr.hint": "Hover to flip \u00b7 tap on touch", "sr.films": "Films", "sr.tv": "TV & Series", "sr.titles": "titles", "sr.whyhere": "Why it's here", "sr.flipback": "Tap or hover to flip back",
      "pr.title": "Things I've shipped", "pr.dek": "Work I've designed and built, laid out on a timeline. Pick any one to read the full case.", "pr.readmore": "Read more", "pr.featured": "Featured project", "pr.status.in-progress": "In progress", "pr.status.shipped": "Shipped", "pr.status.concept": "Concept",
      "gl.gallery": "Gallery", "gl.backedu": "Back to Education",
      "mr.songs": "Favorite Songs", "mr.songs.sub": "On the deck. Tap the record to spin it and hear a clip.", "mr.albums": "Favorite Albums", "mr.albums.sub": "Hover or tap a sleeve to slide the record out.", "mr.artists": "Favorite Artists", "mr.artists.sub": "The people I keep coming back to.", "mr.loading.songs": "Loading the crate\u2026", "mr.loading.albums": "Loading the shelf\u2026", "mr.loading.artists": "Loading the liner notes\u2026", "mr.empty.songs": "No songs yet. Add entries to music.manifest.json.", "mr.empty.albums": "No albums yet. Add entries to music.manifest.json.", "mr.empty.artists": "No artists yet. Add entries to music.manifest.json.", "mr.playfull": "Play full", "mr.listen": "Listen", "mr.openalbum": "Open album", "mr.openartist": "Open artist", "mr.noclip": "No clip \u00b7 listen on Spotify", "mr.famous": "Most famous songs", "mr.entry": "entry", "mr.entries": "entries"
    },
    de: {
      "nav.home": "Start", "nav.experience": "Erfahrung", "nav.education": "Ausbildung",
      "nav.projects": "Projekte", "nav.personal": "Pers\u00f6nliches", "nav.contact": "Kontakt",
      "footer.explore": "Entdecken", "footer.elsewhere": "Anderswo",
      "tagline": "Weltraumsicherheit, Nachhaltigkeit & Politik",
      "home.viewcv": "Lebenslauf ansehen",
      "home.lede": "Ich strebe eine Laufbahn an der Schnittstelle von Weltraumsicherheit, Nachhaltigkeit und Politik an, also dort, wo entschieden wird, welche F\u00e4higkeiten gebaut werden, wer sie nutzen darf und nach welchen Regeln.",
      "home.body": "Ich habe einen Master in Space Studies (Space Business, Policy & Entrepreneurship) der International Space University, abgeschlossen im Juni 2026, aufbauend auf einem Hintergrund in Politikwissenschaft und Wirtschaftsrecht. Vier Praktika beim U.S. European Command haben mir fundierte Kenntnisse in Politik, Sicherheit und internationalen Beziehungen vermittelt.",
      "home.quote": "\u201eIch m\u00f6chte den Weltraum zug\u00e4nglicher machen und denjenigen, die im Weltraum etwas leisten <em>k\u00f6nnen</em>, erm\u00f6glichen, dies auch zu <em>tun</em>.\u201c", "facts.degree.l": "Abschluss", "facts.degree.v": "M.S. Space Studies, ISU (2026)", "facts.based.l": "Standort", "facts.based.v": "Stuttgart, Deutschland", "facts.status.l": "Status", "facts.status.v": "US-Staatsb\u00fcrger, umzugsbereit", "facts.avail.l": "Verf\u00fcgbar", "facts.avail.v": "Ab sofort",
      "crumb.home": "Start", "crumb.personal": "Pers\u00f6nliches", "open": "\u00d6ffnen",
      "personal.title": "Der Mensch hinter der Arbeit",
      "personal.dek": "Zum langsamen Lesen. Die Zeitleiste, die Hobbys, die Musik, die Filme und die S\u00e4tze, zu denen ich immer wieder zur\u00fcckkehre. Derselbe Mensch, nach Feierabend.",
      "personal.intro": "Der Rest dieser Seite ist die Aufzeichnung dessen, was ich aufgebaut habe. Dieser Teil ist der Kontext: woher ich komme, was ich in meiner Freizeit tue und was mein Denken gepr\u00e4gt hat. W\u00e4hle eine T\u00fcr.",
      "card.chrono.num": "01 \u00b7 Bisheriges Leben", "card.chrono.title": "Chronologie", "card.chrono.desc": "Ein scrollender Gang durch die Meilensteine (wo ich gelebt, studiert und gearbeitet habe), vor den Orten, an denen sie geschahen.",
      "card.effects.num": "02 \u00b7 Nach Feierabend", "card.effects.title": "Pers\u00f6nliche Dinge", "card.effects.desc": "Die Hobbys und kleinen Leidenschaften, in Bildern erz\u00e4hlt.",
      "card.music.num": "03 \u00b7 In Dauerschleife", "card.music.title": "Musikzimmer", "card.music.desc": "Lieblingssongs, -alben und -k\u00fcnstler, auf drei Arten. Dreh eine Platte, zieh eine aus der H\u00fclle oder lies die Liner Notes.",
      "card.screening.num": "04 \u00b7 Angeschaut", "card.screening.title": "Kinosaal", "card.screening.desc": "Filme und Serien, die deine Zeit wert sind, in ein, zwei Zeilen.",
      "card.quotes.num": "05 \u00b7 Worte, die blieben", "card.quotes.title": "Zitate", "card.quotes.desc": "S\u00e4tze, die mir wichtig sind, und die Menschen, von denen ich immer weiter lerne.",
      "back.personal": "Zur\u00fcck zu Pers\u00f6nliches", "crumb.contact": "Kontakt", "scan.hint": "Tippe auf einen Song f\u00fcr drei\u00dfig Sekunden \u00b7 scanne einen Code, um ihn in Spotify zu \u00f6ffnen",
      "contact.title": "Sprechen wir",
      "contact.intro": "Wenn Sie an etwas im Bereich Weltraumpolitik, -sicherheit oder Nachhaltigkeit arbeiten, h\u00f6re ich gerne davon. Ob eine Stelle, ein Projekt oder einfach ein gutes Gespr\u00e4ch, die schnellsten Wege, mich zu erreichen, finden Sie hier.",
      "contact.email": "Schreiben Sie mir", "contact.schedule": "Anruf vereinbaren", "contact.schedule.sub": "Zeit w\u00e4hlen", "contact.cv": "Lebenslauf ansehen", "contact.cv.sub": "Ansehen und herunterladen", "cv.opentab": "Im Tab \u00f6ffnen", "cv.download": "Herunterladen",
      "chrono.title": "Die bisherige Geschichte", "chrono.dek": "Ein Gang durch die Meilensteine, der Reihe nach. Wo ich gelebt habe, was ich studiert habe und die Arbeit, die mich zum Weltraum gef\u00fchrt hat. Scrollen Sie, um sich hindurchzubewegen.", "chrono.scrollcue": "Zum Beginnen scrollen",
      "effects.title": "Die Dinge, nach Feierabend", "effects.dek": "Die Hobbys und kleinen Leidenschaften, in Bildern erz\u00e4hlt. Fahren Sie \u00fcber eine Kachel oder tippen Sie darauf, um die Zeile dahinter zu lesen.",
      "music.title": "Das Musikzimmer", "music.dek": "Meine Lieblingssongs, -alben und -k\u00fcnstler, auf drei Arten pr\u00e4sentiert. Dreh eine Platte, zieh eine aus der H\u00fclle oder lies \u00fcber die Menschen hinter dem Klang.",
      "quotes.title": "S\u00e4tze, zu denen ich immer wieder zur\u00fcckkehre", "quotes.dek": "Die S\u00e4tze, die ich \u00fcber die Jahre aufgeh\u00e4ngt habe, aus B\u00fcchern, Reden, Filmen und von Menschen, die mich etwas gelehrt haben. Tippe auf eine Karte, um zu sehen, wer es gesagt hat.", "quotes.hint": "Tippe auf eine Karte, um sie umzudrehen", "quotes.saidby": "Gesagt von", "quotes.from": "aus", "quotes.aria.reveal": "anzeigen, wer das gesagt hat", "quotes.aria.hide": "Zitat anzeigen",
      "ex.title": "Mein beruflicher Werdegang", "ex.dek": "Positionen, Aufgabenbereich und die daraus entstandene Arbeit, der Reihe nach.", "ex.viewcv": "Lebenslauf ansehen", "ex.keyrole": "Schl\u00fcsselposition", "ex.more": "Mehr", "ex.less": "Weniger", "ex.backhome": "Zur\u00fcck zur Startseite",
      "ed.title": "Mein akademischer Werdegang", "ed.dek": "Abschl\u00fcsse, Studieng\u00e4nge und Forschung.", "ed.inprogress": "Laufend", "ed.moredetail": "Mehr Details", "ed.less": "Weniger", "ed.gallery": "Fotogalerie",
      "sr.title": "Filme und Serien, die deine Zeit wert sind", "sr.dek": "Ein laufendes Regal dessen, wozu ich immer wieder zur\u00fcckkehre, Favoriten zuerst in jeder Gruppe. Dreh ein Plakat um f\u00fcr ein, zwei Zeilen dazu, warum es auf die Liste kam.", "sr.hint": "Zum Umdrehen mit der Maus dar\u00fcberfahren \u00b7 auf Touch antippen", "sr.films": "Filme", "sr.tv": "TV & Serien", "sr.titles": "Titel", "sr.whyhere": "Warum es hier ist", "sr.flipback": "Antippen oder dar\u00fcberfahren zum Zur\u00fcckdrehen",
      "pr.title": "Was ich umgesetzt habe", "pr.dek": "Arbeiten, die ich entworfen und gebaut habe, auf einer Zeitleiste. W\u00e4hle eine aus, um den vollst\u00e4ndigen Fall zu lesen.", "pr.readmore": "Mehr lesen", "pr.featured": "Ausgew\u00e4hltes Projekt", "pr.status.in-progress": "Laufend", "pr.status.shipped": "Ver\u00f6ffentlicht", "pr.status.concept": "Konzept",
      "gl.gallery": "Galerie", "gl.backedu": "Zur\u00fcck zur Ausbildung",
      "mr.songs": "Lieblingssongs", "mr.songs.sub": "Auf dem Plattenteller. Tippe auf die Platte, um sie zu drehen und einen Ausschnitt zu h\u00f6ren.", "mr.albums": "Lieblingsalben", "mr.albums.sub": "Fahre \u00fcber eine H\u00fclle oder tippe darauf, um die Platte herauszuziehen.", "mr.artists": "Lieblingsk\u00fcnstler", "mr.artists.sub": "Die Menschen, zu denen ich immer wieder zur\u00fcckkehre.", "mr.loading.songs": "Kiste wird geladen\u2026", "mr.loading.albums": "Regal wird geladen\u2026", "mr.loading.artists": "Liner Notes werden geladen\u2026", "mr.empty.songs": "Noch keine Songs. F\u00fcge Eintr\u00e4ge in music.manifest.json hinzu.", "mr.empty.albums": "Noch keine Alben. F\u00fcge Eintr\u00e4ge in music.manifest.json hinzu.", "mr.empty.artists": "Noch keine K\u00fcnstler. F\u00fcge Eintr\u00e4ge in music.manifest.json hinzu.", "mr.playfull": "Ganz abspielen", "mr.listen": "Anh\u00f6ren", "mr.openalbum": "Album \u00f6ffnen", "mr.openartist": "K\u00fcnstler \u00f6ffnen", "mr.noclip": "Kein Ausschnitt \u00b7 auf Spotify anh\u00f6ren", "mr.famous": "Bekannteste Songs", "mr.entry": "Eintrag", "mr.entries": "Eintr\u00e4ge",
      "rail.early": "Anfang", "rail.next": "Weiter", "chrono.drag": "Ziehen oder wischen",
      "ch.y1": "Vor alledem", "ch.t1": "Die fr\u00fchen Jahre", "ch.y2": "Bis 2023", "ch.t2": "Politikwissenschaft, dann Recht", "ch.b2": "Ein B.Sc. in Politikwissenschaft und Wirtschaftsrecht. Hier wurde aus dem Interesse daran, wie Regeln entstehen und wen sie sch\u00fctzen, etwas, worauf ich eine Laufbahn aufbauen wollte.",
      "ch.t3": "Den Betrieb f\u00fchren", "ch.b3": "Programmassistent f\u00fcr ein 20-k\u00f6pfiges Team. Die Stelle, die mich lehrte, dass ein gutes System mehr Zeit spart als jeder noch so gro\u00dfe Einzeleinsatz und dass die unscheinbare Arbeit meist die entscheidende ist.",
      "ch.t4": "Im Inneren des Kommandos", "ch.b4": "Praktika in drei Direktoraten und eine Planungsrolle f\u00fcr die Chiefs of Mission. Hier lernte ich, wie sich Politik tats\u00e4chlich durch ein Kommando bewegt, von der Zusammenarbeit mit dem Kongress \u00fcber das Einsatzrecht bis zur beh\u00f6rden\u00fcbergreifenden Koordination.",
      "ch.t5": "Hinauf ins All", "ch.b5": "Ein Master in Space Studies (Business, Policy & Entrepreneurship). Der Wechsel davon, wie Macht am Boden wirkt, hin dazu, wie sie im Orbit wirken wird und wer bei den Regeln dort oben mitreden darf.",
      "ch.y6": "Seit 2026", "ch.t6": "Aufbauen in Europa", "ch.b6": "Leitung des Praktikantenbetriebs und der Finanzen bei einer europ\u00e4ischen Innovationsplattform f\u00fcr Raumfahrt und Luftfahrt sowie Aufbau einer neuen Niederlassung in Frankreich. Beweis daf\u00fcr, dass ich lieber baue, als darauf zu warten, gefragt zu werden.",
      "ch.y7": "Was kommt", "ch.t7": "Der Raum, in dem entschieden wird", "pe.hobbies": "Hobbys", "pe.games": "Spiele",
      "pe.h1.t": "Analogfotografie", "pe.h1.c": "Mit einer ramponierten 35-mm-Kamera fotografieren und hoffen, dass das Licht stimmte.",
      "pe.h2.t": "Brot", "pe.h2.c": "Zwei Jahre Sauerteig und immer noch am Lernen des Teigs.",
      "pe.h3.t": "Trailrunning", "pe.h3.c": "Erste Kilometer, bevor die Stadt erwacht.",
      "pe.h4.t": "Schallplatten", "pe.h4.c": "Langsam wird das Regal zu klein daf\u00fcr.",
      "pe.h5.t": "Holzarbeiten", "pe.h5.c": "Kleine Tischlerprojekte, meist f\u00fcrs Haus.",
      "pe.h6.t": "Schach", "pe.h6.c": "Besser in Er\u00f6ffnungen als in Endspielen.",
      "pe.h7.t": "Radfahren", "pe.h7.c": "Lange Wochenendrunden hinaus \u00fcber den H\u00f6henzug.",
      "pe.h8.t": "Skizzieren", "pe.h8.c": "Ein Taschennotizbuch, das nie ganz voll wird.",
      "pe.g1.c": "Das eine, das ich gern noch einmal zum ersten Mal spielen w\u00fcrde.",
      "pe.g2.c": "Wundersch\u00f6n, brutal und irgendwie beruhigend.",
      "pe.g3.c": "Das Spiel f\u00fcr immer. Immer noch auf dem Handy.",
      "pe.g4.c": "Mehr Roman als Spiel, und das meine ich anerkennend.",
      "pe.g5.c": "Ein Plattformer, bei dem es um viel mehr ging.",
      "pe.g6.c": "Die n\u00e4chtliche Blitz-Gewohnheit, die ich nicht ablegen kann.",
      "pe.g7.c": "Neunzig wortlose Minuten, an die ich oft denke.",
      "pe.g8.c": "Trost f\u00fcr Regentage, in Spielform."
    },
    fr: {
      "nav.home": "Accueil", "nav.experience": "Exp\u00e9rience", "nav.education": "Formation",
      "nav.projects": "Projets", "nav.personal": "Personnel", "nav.contact": "Contact",
      "footer.explore": "Explorer", "footer.elsewhere": "Ailleurs",
      "tagline": "S\u00e9curit\u00e9 spatiale, durabilit\u00e9 et politique",
      "home.viewcv": "Voir le CV",
      "home.lede": "Je m'oriente vers une carri\u00e8re \u00e0 l'intersection de la s\u00e9curit\u00e9 spatiale, de la durabilit\u00e9 et de la politique, l\u00e0 o\u00f9 se d\u00e9cide quelles capacit\u00e9s sont d\u00e9velopp\u00e9es, qui peut les utiliser et selon quelles r\u00e8gles.",
      "home.body": "Je suis titulaire d'un master en \u00e9tudes spatiales (Space Business, Policy & Entrepreneurship) de l'International Space University, obtenu en juin 2026, en m'appuyant sur une formation en science politique et en droit des affaires. Quatre stages au sein du U.S. European Command m'ont donn\u00e9 une solide connaissance pratique de la politique, de la s\u00e9curit\u00e9 et des relations internationales.",
      "home.quote": "\u00ab\u00a0Je veux rendre l'espace plus accessible, permettre \u00e0 celles et ceux qui <em>peuvent</em> agir dans l'espace de <em>pouvoir</em> le faire.\u00a0\u00bb", "facts.degree.l": "Dipl\u00f4me", "facts.degree.v": "M.S. Space Studies, ISU (2026)", "facts.based.l": "Bas\u00e9 \u00e0", "facts.based.v": "Stuttgart, Allemagne", "facts.status.l": "Statut", "facts.status.v": "Citoyen am\u00e9ricain, mobile", "facts.avail.l": "Disponible", "facts.avail.v": "Imm\u00e9diatement",
      "crumb.home": "Accueil", "crumb.personal": "Personnel", "open": "Ouvrir",
      "personal.title": "La personne derri\u00e8re le travail",
      "personal.dek": "Une lecture plus lente. La chronologie, les loisirs, la musique, les films et les phrases qui me reviennent sans cesse. Le m\u00eame moi, en dehors du travail.",
      "personal.intro": "Le reste de ce site est le r\u00e9cit de ce que j'ai construit. Cette partie, c'est le contexte : d'o\u00f9 je viens, ce que je fais de mon temps libre et ce qui a fa\u00e7onn\u00e9 ma fa\u00e7on de penser. Choisissez une porte.",
      "card.chrono.num": "01 \u00b7 Le parcours", "card.chrono.title": "Chronologie", "card.chrono.desc": "Une promenade d\u00e9filante \u00e0 travers les \u00e9tapes cl\u00e9s (o\u00f9 j'ai v\u00e9cu, \u00e9tudi\u00e9 et travaill\u00e9), sur fond des lieux o\u00f9 elles se sont produites.",
      "card.effects.num": "02 \u00b7 En dehors du travail", "card.effects.title": "Effets personnels", "card.effects.desc": "Les loisirs et petites obsessions, racont\u00e9s en images.",
      "card.music.num": "03 \u00b7 En boucle", "card.music.title": "Salle de musique", "card.music.desc": "Chansons, albums et artistes pr\u00e9f\u00e9r\u00e9s, de trois fa\u00e7ons. Faites tourner un disque, sortez-en un de sa pochette ou lisez les notes.",
      "card.screening.num": "04 \u00b7 \u00c0 regarder", "card.screening.title": "Salle de projection", "card.screening.desc": "Films et s\u00e9ries qui valent votre temps, en une ligne ou deux.",
      "card.quotes.num": "05 \u00b7 Les mots qui restent", "card.quotes.title": "Citations", "card.quotes.desc": "Des phrases qui me sont ch\u00e8res, et les personnes dont je continue d'apprendre.",
      "back.personal": "Retour \u00e0 Personnel", "crumb.contact": "Contact", "scan.hint": "Touchez un titre pour \u00e9couter trente secondes \u00b7 scannez un code pour l'ouvrir dans Spotify",
      "contact.title": "Parlons-en",
      "contact.intro": "Si vous travaillez sur un sujet li\u00e9 \u00e0 la politique, la s\u00e9curit\u00e9 ou la durabilit\u00e9 spatiales, j'aimerais en entendre parler. Un poste, un projet ou simplement une bonne conversation, les moyens les plus rapides de me joindre sont ici.",
      "contact.email": "\u00c9crivez-moi", "contact.schedule": "Planifier un appel", "contact.schedule.sub": "Choisir un horaire", "contact.cv": "Voir le CV", "contact.cv.sub": "Aper\u00e7u et t\u00e9l\u00e9chargement", "cv.opentab": "Ouvrir dans un onglet", "cv.download": "T\u00e9l\u00e9charger",
      "chrono.title": "L'histoire jusqu'ici", "chrono.dek": "Une promenade \u00e0 travers les \u00e9tapes cl\u00e9s, dans l'ordre. O\u00f9 j'ai v\u00e9cu, ce que j'ai \u00e9tudi\u00e9 et le travail qui m'a orient\u00e9 vers l'espace. Faites d\u00e9filer pour avancer.", "chrono.scrollcue": "Faites d\u00e9filer pour commencer",
      "effects.title": "Les objets, hors du travail", "effects.dek": "Les loisirs et petites obsessions, racont\u00e9s en images. Survolez une tuile ou touchez-la pour lire la phrase qui se cache derri\u00e8re.",
      "music.title": "La salle de musique", "music.dek": "Mes chansons, albums et artistes pr\u00e9f\u00e9r\u00e9s, pr\u00e9sent\u00e9s de trois fa\u00e7ons. Faites tourner un disque, sortez-en un de sa pochette ou d\u00e9couvrez les personnes derri\u00e8re le son.",
      "quotes.title": "Les phrases qui me reviennent sans cesse", "quotes.dek": "Les phrases que j'ai \u00e9pingl\u00e9es au fil des ann\u00e9es, tir\u00e9es de livres, de discours, de films et de personnes qui m'ont appris quelque chose. Touchez une carte pour voir qui l'a dite.", "quotes.hint": "Touchez une carte pour la retourner", "quotes.saidby": "Dit par", "quotes.from": "tir\u00e9 de", "quotes.aria.reveal": "montrer qui a dit cela", "quotes.aria.hide": "montrer la citation",
      "ex.title": "Mon parcours professionnel", "ex.dek": "Les postes, leur p\u00e9rim\u00e8tre et le travail qui en a d\u00e9coul\u00e9, dans l'ordre.", "ex.viewcv": "Voir le CV", "ex.keyrole": "Poste cl\u00e9", "ex.more": "Plus", "ex.less": "Moins", "ex.backhome": "Retour \u00e0 l'accueil",
      "ed.title": "Mon parcours acad\u00e9mique", "ed.dek": "Dipl\u00f4mes, programmes et recherche.", "ed.inprogress": "En cours", "ed.moredetail": "Plus de d\u00e9tails", "ed.less": "Moins", "ed.gallery": "Galerie photo",
      "sr.title": "Films et s\u00e9ries qui valent votre temps", "sr.dek": "Une \u00e9tag\u00e8re \u00e9volutive de ce vers quoi je reviens sans cesse, les favoris en premier dans chaque groupe. Retournez une affiche pour une ligne ou deux sur ce qui l'a fait entrer dans la liste.", "sr.hint": "Survolez pour retourner \u00b7 touchez sur \u00e9cran tactile", "sr.films": "Films", "sr.tv": "TV & S\u00e9ries", "sr.titles": "titres", "sr.whyhere": "Pourquoi c'est ici", "sr.flipback": "Touchez ou survolez pour revenir",
      "pr.title": "Ce que j'ai r\u00e9alis\u00e9", "pr.dek": "Des travaux que j'ai con\u00e7us et construits, pr\u00e9sent\u00e9s sur une frise chronologique. Choisissez-en un pour lire le dossier complet.", "pr.readmore": "En savoir plus", "pr.featured": "Projet phare", "pr.status.in-progress": "En cours", "pr.status.shipped": "Livr\u00e9", "pr.status.concept": "Concept",
      "gl.gallery": "Galerie", "gl.backedu": "Retour \u00e0 la formation",
      "mr.songs": "Chansons pr\u00e9f\u00e9r\u00e9es", "mr.songs.sub": "Sur la platine. Touchez le disque pour le faire tourner et \u00e9couter un extrait.", "mr.albums": "Albums pr\u00e9f\u00e9r\u00e9s", "mr.albums.sub": "Survolez une pochette ou touchez-la pour faire glisser le disque.", "mr.artists": "Artistes pr\u00e9f\u00e9r\u00e9s", "mr.artists.sub": "Les personnes vers qui je reviens sans cesse.", "mr.loading.songs": "Chargement de la caisse\u2026", "mr.loading.albums": "Chargement de l'\u00e9tag\u00e8re\u2026", "mr.loading.artists": "Chargement des notes\u2026", "mr.empty.songs": "Pas encore de chansons. Ajoutez des entr\u00e9es dans music.manifest.json.", "mr.empty.albums": "Pas encore d'albums. Ajoutez des entr\u00e9es dans music.manifest.json.", "mr.empty.artists": "Pas encore d'artistes. Ajoutez des entr\u00e9es dans music.manifest.json.", "mr.playfull": "\u00c9couter en entier", "mr.listen": "\u00c9couter", "mr.openalbum": "Ouvrir l'album", "mr.openartist": "Ouvrir l'artiste", "mr.noclip": "Pas d'extrait \u00b7 \u00e9couter sur Spotify", "mr.famous": "Chansons les plus c\u00e9l\u00e8bres", "mr.entry": "entr\u00e9e", "mr.entries": "entr\u00e9es",
      "rail.early": "D\u00e9but", "rail.next": "Suite", "chrono.drag": "Glissez ou balayez",
      "ch.y1": "Avant tout cela", "ch.t1": "Les premi\u00e8res ann\u00e9es", "ch.y2": "Jusqu'en 2023", "ch.t2": "Science politique, puis droit", "ch.b2": "Une licence en science politique et droit des affaires. C'est l\u00e0 que l'int\u00e9r\u00eat pour la fa\u00e7on dont les r\u00e8gles se font, et pour qui elles prot\u00e8gent, est devenu quelque chose sur quoi je voulais b\u00e2tir une carri\u00e8re.",
      "ch.t3": "Faire tourner l'op\u00e9ration", "ch.b3": "Assistant de programme pour une \u00e9quipe de 20 personnes. Le poste qui m'a appris qu'un bon syst\u00e8me fait gagner plus de temps que n'importe quel effort individuel, et que le travail ingrat est souvent celui qui compte.",
      "ch.t4": "Au c\u0153ur du commandement", "ch.b4": "Des stages dans trois directions et un r\u00f4le de planification aupr\u00e8s des Chiefs of Mission. L\u00e0 o\u00f9 j'ai appris comment la politique circule r\u00e9ellement dans un commandement, de l'engagement aupr\u00e8s du Congr\u00e8s au droit op\u00e9rationnel jusqu'\u00e0 la coordination interinstitutionnelle.",
      "ch.t5": "Vers l'espace", "ch.b5": "Un master en \u00e9tudes spatiales (Business, Policy & Entrepreneurship). Le passage de la fa\u00e7on dont le pouvoir s'exerce au sol \u00e0 la fa\u00e7on dont il s'exercera en orbite, et \u00e0 qui aura voix au chapitre sur les r\u00e8gles l\u00e0-haut.",
      "ch.y6": "Depuis 2026", "ch.t6": "B\u00e2tir en Europe", "ch.b6": "Gestion des op\u00e9rations et des finances des stagiaires au sein d'une plateforme europ\u00e9enne d'innovation spatiale et a\u00e9ronautique, et cr\u00e9ation d'une nouvelle antenne en France. La preuve que je pr\u00e9f\u00e8re construire la chose plut\u00f4t que d'attendre qu'on me le demande.",
      "ch.y7": "La suite", "ch.t7": "La salle o\u00f9 cela se d\u00e9cide", "pe.hobbies": "loisirs", "pe.games": "jeux",
      "pe.h1.t": "Photographie argentique", "pe.h1.c": "Photographier avec un 35 mm cabossé en esp\u00e9rant que la lumi\u00e8re \u00e9tait bonne.",
      "pe.h2.t": "Pain", "pe.h2.c": "Deux ans de levain et j'apprends encore la p\u00e2te.",
      "pe.h3.t": "Trail", "pe.h3.c": "Les premiers kilom\u00e8tres avant que la ville ne s'\u00e9veille.",
      "pe.h4.t": "Vinyles", "pe.h4.c": "L'\u00e9tag\u00e8re devient peu \u00e0 peu trop petite.",
      "pe.h5.t": "Travail du bois", "pe.h5.c": "De petits projets d'assemblage, surtout pour la maison.",
      "pe.h6.t": "\u00c9checs", "pe.h6.c": "Meilleur aux ouvertures qu'aux finales.",
      "pe.h7.t": "Cyclisme", "pe.h7.c": "De longues boucles le week-end au-del\u00e0 de la cr\u00eate.",
      "pe.h8.t": "Croquis", "pe.h8.c": "Un carnet de poche qui ne se remplit jamais tout \u00e0 fait.",
      "pe.g1.c": "Celui que j'aimerais pouvoir red\u00e9couvrir pour la premi\u00e8re fois.",
      "pe.g2.c": "Magnifique, brutal et pourtant apaisant.",
      "pe.g3.c": "Le jeu de toujours. Encore sur le t\u00e9l\u00e9phone.",
      "pe.g4.c": "Plus roman que jeu, et je le dis avec affection.",
      "pe.g5.c": "Un jeu de plateforme qui parlait finalement de bien plus.",
      "pe.g6.c": "L'habitude de blitz nocturne dont je n'arrive pas \u00e0 me d\u00e9faire.",
      "pe.g7.c": "Quatre-vingt-dix minutes sans mots auxquelles je pense souvent.",
      "pe.g8.c": "R\u00e9confort des jours de pluie, sous forme de jeu."
    },
    es: {
      "nav.home": "Inicio", "nav.experience": "Experiencia", "nav.education": "Formaci\u00f3n",
      "nav.projects": "Proyectos", "nav.personal": "Personal", "nav.contact": "Contacto",
      "footer.explore": "Explorar", "footer.elsewhere": "En otros sitios",
      "tagline": "Seguridad espacial, sostenibilidad y pol\u00edtica",
      "home.viewcv": "Ver CV",
      "home.lede": "Me encamino hacia una carrera en la intersecci\u00f3n de la seguridad espacial, la sostenibilidad y la pol\u00edtica, el \u00e1mbito donde se decide qu\u00e9 capacidades se construyen, qui\u00e9n puede usarlas y bajo qu\u00e9 reglas.",
      "home.body": "Tengo un m\u00e1ster en Estudios Espaciales (Space Business, Policy & Entrepreneurship) por la International Space University, finalizado en junio de 2026, sobre una base de ciencia pol\u00edtica y derecho mercantil. Cuatro pr\u00e1cticas en el U.S. European Command me dieron un s\u00f3lido conocimiento pr\u00e1ctico de pol\u00edtica, seguridad y relaciones internacionales.",
      "home.quote": "\u00abQuiero hacer el espacio m\u00e1s accesible, permitir que quienes <em>pueden</em> actuar en el espacio <em>puedan</em> hacerlo.\u00bb", "facts.degree.l": "Titulaci\u00f3n", "facts.degree.v": "M.S. Space Studies, ISU (2026)", "facts.based.l": "Ubicaci\u00f3n", "facts.based.v": "Stuttgart, Alemania", "facts.status.l": "Situaci\u00f3n", "facts.status.v": "Ciudadano estadounidense, dispuesto a mudarse", "facts.avail.l": "Disponible", "facts.avail.v": "De inmediato",
      "crumb.home": "Inicio", "crumb.personal": "Personal", "open": "Abrir",
      "personal.title": "La persona detr\u00e1s del trabajo",
      "personal.dek": "Una lectura m\u00e1s pausada. La cronolog\u00eda, las aficiones, la m\u00fasica, las pel\u00edculas y las frases a las que siempre vuelvo. El mismo yo, fuera del trabajo.",
      "personal.intro": "El resto de este sitio es el registro de lo que he construido. Esta parte es el contexto: de d\u00f3nde vengo, qu\u00e9 hago en mi tiempo libre y las cosas que moldearon mi forma de pensar. Elige una puerta.",
      "card.chrono.num": "01 \u00b7 Hasta ahora", "card.chrono.title": "Cronolog\u00eda", "card.chrono.desc": "Un recorrido, al desplazarse, por los hitos (d\u00f3nde he vivido, estudiado y trabajado), sobre el fondo de los lugares donde ocurrieron.",
      "card.effects.num": "02 \u00b7 Fuera del trabajo", "card.effects.title": "Efectos personales", "card.effects.desc": "Las aficiones y peque\u00f1as obsesiones, contadas en im\u00e1genes.",
      "card.music.num": "03 \u00b7 En bucle", "card.music.title": "Sala de m\u00fasica", "card.music.desc": "Canciones, \u00e1lbumes y artistas favoritos, de tres formas. Haz girar un disco, saca uno de su funda o lee las notas.",
      "card.screening.num": "04 \u00b7 Viendo", "card.screening.title": "Sala de proyecci\u00f3n", "card.screening.desc": "Pel\u00edculas y series que valen tu tiempo, en una l\u00ednea o dos.",
      "card.quotes.num": "05 \u00b7 Palabras que quedaron", "card.quotes.title": "Citas", "card.quotes.desc": "Frases que aprecio, y las personas de las que sigo aprendiendo.",
      "back.personal": "Volver a Personal", "crumb.contact": "Contacto", "scan.hint": "Toca una canci\u00f3n para escuchar treinta segundos \u00b7 escanea cualquier c\u00f3digo para abrirlo en Spotify",
      "contact.title": "Hablemos",
      "contact.intro": "Si est\u00e1s trabajando en algo de pol\u00edtica, seguridad o sostenibilidad espacial, me gustar\u00eda saberlo. Un puesto, un proyecto o simplemente una buena conversaci\u00f3n, las formas m\u00e1s r\u00e1pidas de contactarme est\u00e1n aqu\u00ed.",
      "contact.email": "Escr\u00edbeme", "contact.schedule": "Agendar una llamada", "contact.schedule.sub": "Elegir una hora", "contact.cv": "Ver CV", "contact.cv.sub": "Ver y descargar", "cv.opentab": "Abrir en pesta\u00f1a", "cv.download": "Descargar",
      "chrono.title": "La historia hasta ahora", "chrono.dek": "Un recorrido por los hitos, en orden. D\u00f3nde he vivido, qu\u00e9 estudi\u00e9 y el trabajo que me orient\u00f3 hacia el espacio. Despl\u00e1zate para avanzar.", "chrono.scrollcue": "Despl\u00e1zate para empezar",
      "effects.title": "Las cosas, fuera del trabajo", "effects.dek": "Las aficiones y peque\u00f1as obsesiones, contadas en im\u00e1genes. Pasa el cursor o toca una casilla para leer la l\u00ednea que hay detr\u00e1s.",
      "music.title": "La sala de m\u00fasica", "music.dek": "Mis canciones, \u00e1lbumes y artistas favoritos, presentados de tres formas. Haz girar un disco, saca uno de su funda o conoce a las personas detr\u00e1s del sonido.",
      "quotes.title": "Frases a las que siempre vuelvo", "quotes.dek": "Las frases que he ido colgando con los a\u00f1os, de libros, discursos, pel\u00edculas y personas que me ense\u00f1aron algo. Toca una tarjeta para ver qui\u00e9n la dijo.", "quotes.hint": "Toca cualquier tarjeta para darle la vuelta", "quotes.saidby": "Dicho por", "quotes.from": "de", "quotes.aria.reveal": "mostrar qui\u00e9n dijo esto", "quotes.aria.hide": "mostrar la cita",
      "ex.title": "Mi trayectoria profesional", "ex.dek": "Los puestos, su alcance y el trabajo que surgi\u00f3 de ellos, en orden.", "ex.viewcv": "Ver CV", "ex.keyrole": "Puesto clave", "ex.more": "M\u00e1s", "ex.less": "Menos", "ex.backhome": "Volver al inicio",
      "ed.title": "Mi trayectoria acad\u00e9mica", "ed.dek": "T\u00edtulos, programas e investigaci\u00f3n.", "ed.inprogress": "En curso", "ed.moredetail": "M\u00e1s detalles", "ed.less": "Menos", "ed.gallery": "Galer\u00eda de fotos",
      "sr.title": "Pel\u00edculas y series que valen tu tiempo", "sr.dek": "Una estanter\u00eda en marcha de aquello a lo que siempre vuelvo, los favoritos primero en cada grupo. Dale la vuelta a cualquier cartel para leer una l\u00ednea o dos sobre por qu\u00e9 entr\u00f3 en la lista.", "sr.hint": "Pasa el cursor para girar \u00b7 toca en pantalla t\u00e1ctil", "sr.films": "Pel\u00edculas", "sr.tv": "TV y series", "sr.titles": "t\u00edtulos", "sr.whyhere": "Por qu\u00e9 est\u00e1 aqu\u00ed", "sr.flipback": "Toca o pasa el cursor para volver",
      "pr.title": "Lo que he realizado", "pr.dek": "Trabajos que he dise\u00f1ado y construido, presentados en una l\u00ednea de tiempo. Elige cualquiera para leer el caso completo.", "pr.readmore": "Leer m\u00e1s", "pr.featured": "Proyecto destacado", "pr.status.in-progress": "En curso", "pr.status.shipped": "Publicado", "pr.status.concept": "Concepto",
      "gl.gallery": "Galer\u00eda", "gl.backedu": "Volver a Formaci\u00f3n",
      "mr.songs": "Canciones favoritas", "mr.songs.sub": "En la mesa. Toca el disco para hacerlo girar y escuchar un fragmento.", "mr.albums": "\u00c1lbumes favoritos", "mr.albums.sub": "Pasa el cursor sobre una funda o t\u00f3cala para deslizar el disco.", "mr.artists": "Artistas favoritos", "mr.artists.sub": "Las personas a las que siempre vuelvo.", "mr.loading.songs": "Cargando la caja\u2026", "mr.loading.albums": "Cargando la estanter\u00eda\u2026", "mr.loading.artists": "Cargando las notas\u2026", "mr.empty.songs": "A\u00fan no hay canciones. A\u00f1ade entradas a music.manifest.json.", "mr.empty.albums": "A\u00fan no hay \u00e1lbumes. A\u00f1ade entradas a music.manifest.json.", "mr.empty.artists": "A\u00fan no hay artistas. A\u00f1ade entradas a music.manifest.json.", "mr.playfull": "Reproducir completa", "mr.listen": "Escuchar", "mr.openalbum": "Abrir \u00e1lbum", "mr.openartist": "Abrir artista", "mr.noclip": "Sin fragmento \u00b7 escuchar en Spotify", "mr.famous": "Canciones m\u00e1s conocidas", "mr.entry": "entrada", "mr.entries": "entradas",
      "rail.early": "Inicio", "rail.next": "Siguiente", "chrono.drag": "Arrastra o desliza",
      "ch.y1": "Antes de todo esto", "ch.t1": "Los primeros a\u00f1os", "ch.y2": "Hasta 2023", "ch.t2": "Ciencia pol\u00edtica, luego derecho", "ch.b2": "Una licenciatura en Ciencia Pol\u00edtica y Derecho Mercantil. Aqu\u00ed el inter\u00e9s por c\u00f3mo se hacen las reglas, y a qui\u00e9n protegen, se convirti\u00f3 en algo sobre lo que quer\u00eda construir una carrera.",
      "ch.t3": "Llevar la operaci\u00f3n", "ch.b3": "Asistente de programa para un equipo de 20 personas. El puesto que me ense\u00f1\u00f3 que un buen sistema ahorra m\u00e1s tiempo que cualquier esfuerzo individual, y que el trabajo tedioso suele ser el que importa.",
      "ch.t4": "Dentro del mando", "ch.b4": "Pr\u00e1cticas en tres direcciones y un papel de planificaci\u00f3n para los Chiefs of Mission. Donde aprend\u00ed c\u00f3mo se mueve realmente la pol\u00edtica a trav\u00e9s de un mando, desde la relaci\u00f3n con el Congreso hasta el derecho operativo y la coordinaci\u00f3n interinstitucional.",
      "ch.t5": "Hacia el espacio", "ch.b5": "Un m\u00e1ster en Estudios Espaciales (Business, Policy & Entrepreneurship). El giro de c\u00f3mo funciona el poder en tierra a c\u00f3mo funcionar\u00e1 en \u00f3rbita, y qui\u00e9n tiene voz en las reglas de all\u00e1 arriba.",
      "ch.y6": "Desde 2026", "ch.t6": "Construir en Europa", "ch.b6": "Gesti\u00f3n de las operaciones y las finanzas de los becarios en una plataforma europea de innovaci\u00f3n espacial y aeron\u00e1utica, y puesta en marcha de una nueva sede en Francia. La prueba de que prefiero construir la cosa antes que esperar a que me lo pidan.",
      "ch.y7": "Lo que viene", "ch.t7": "La sala donde se decide", "pe.hobbies": "aficiones", "pe.games": "juegos",
      "pe.h1.t": "Fotograf\u00eda anal\u00f3gica", "pe.h1.c": "Disparar con una 35 mm maltrecha y esperar que la luz fuera la buena.",
      "pe.h2.t": "Pan", "pe.h2.c": "Dos a\u00f1os de masa madre y a\u00fan aprendiendo la masa.",
      "pe.h3.t": "Trail running", "pe.h3.c": "Los primeros kil\u00f3metros antes de que la ciudad despierte.",
      "pe.h4.t": "Vinilos", "pe.h4.c": "Poco a poco se le queda peque\u00f1a la estanter\u00eda.",
      "pe.h5.t": "Carpinter\u00eda", "pe.h5.c": "Peque\u00f1os proyectos de ensamblaje, casi siempre para la casa.",
      "pe.h6.t": "Ajedrez", "pe.h6.c": "Mejor en las aperturas que en los finales.",
      "pe.h7.t": "Ciclismo", "pe.h7.c": "Largas vueltas de fin de semana m\u00e1s all\u00e1 de la loma.",
      "pe.h8.t": "Dibujo", "pe.h8.c": "Una libreta de bolsillo que nunca acaba de llenarse.",
      "pe.g1.c": "El que ojal\u00e1 pudiera jugar de nuevo por primera vez.",
      "pe.g2.c": "Hermoso, brutal y de alg\u00fan modo relajante.",
      "pe.g3.c": "El juego de siempre. Todav\u00eda en el tel\u00e9fono.",
      "pe.g4.c": "M\u00e1s novela que juego, y lo digo con cari\u00f1o.",
      "pe.g5.c": "Un plataformas que result\u00f3 tratar de mucho m\u00e1s.",
      "pe.g6.c": "El h\u00e1bito de blitz nocturno que no logro dejar.",
      "pe.g7.c": "Noventa minutos sin palabras en los que pienso a menudo.",
      "pe.g8.c": "Consuelo para d\u00edas de lluvia, en forma de juego."
    }
  };

  var SUPPORTED = { en: 1, de: 1, fr: 1, es: 1 };
  var LANG = localStorage.getItem("ddsLang");
  if (!SUPPORTED[LANG]) LANG = "en";

  var ORIG = {}; // first-seen (English) textContent per key — restores when a translation is absent
  function t(key) {
    var d = DICT[LANG] || DICT.en;
    if (d[key] != null) return d[key];
    if (DICT.en[key] != null) return DICT.en[key];
    if (ORIG[key] != null) return ORIG[key];
    return null;
  }
  function apply(root) {
    var scope = root || document;
    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      // data-i18n-html keeps inline markup (e.g. <em>) that textContent would flatten.
      // Values come from the static DICT below, never from user input.
      var asHTML = el.hasAttribute("data-i18n-html");
      if (ORIG[key] == null) ORIG[key] = asHTML ? el.innerHTML : el.textContent;
      var v = t(key);
      if (v != null) { if (asHTML) el.innerHTML = v; else el.textContent = v; }
    });
    document.documentElement.lang = LANG;
  }
  function setLang(code) {
    if (!SUPPORTED[code]) return;
    LANG = code;
    localStorage.setItem("ddsLang", code);
    apply(document);
    window.dispatchEvent(new CustomEvent("ddslangchange", { detail: code }));
  }
  window.ddsI18n = { t: t, apply: apply, setLang: setLang, DICT: DICT, get lang() { return LANG; } };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { apply(document); });
  else apply(document);
})();
