export type Question = {
  q: string;
  a: string[];
  correct: number;
};

export const ALL_QUESTIONS: Record<string, Question[]> = {
  'Anatomie & Physiologie': [
    {
      q: 'Welches Organ produziert Insulin?',
      a: ['Leber', 'Pankreas', 'Niere', 'Milz'],
      correct: 1,
    },
    {
      q: 'Wie viele Lungenlappen hat der rechte Lungenflügel?',
      a: ['1', '2', '3', '4'],
      correct: 2,
    },
    {
      q: 'Was ist die Hauptaufgabe der Erythrozyten?',
      a: [
        'Immunabwehr',
        'Blutgerinnung',
        'Sauerstofftransport',
        'Hormonbildung',
      ],
      correct: 2,
    },
    {
      q: 'Wie heißt die größte Schlagader des Körpers?',
      a: ['Vena Cava', 'Aorta', 'Arteria femoralis', 'Halsschlagader'],
      correct: 1,
    },
    {
      q: 'Wo findet der Gasaustausch in der Lunge statt?',
      a: ['Bronchien', 'Trachea', 'Alveolen', 'Pleura'],
      correct: 2,
    },
    {
      q: 'Welcher Herzteil pumpt sauerstoffreiches Blut in den Körper?',
      a: ['Rechter Vorhof', 'Rechte Kammer', 'Linker Vorhof', 'Linke Kammer'],
      correct: 3,
    },
    {
      q: 'Wie nennt man die oberste Hautschicht?',
      a: ['Dermis', 'Epidermis', 'Subkutis', 'Lederhaut'],
      correct: 1,
    },
    {
      q: 'Welches Hormon ist der Gegenspieler von Insulin?',
      a: ['Östrogen', 'Adrenalin', 'Glukagon', 'Thyroxin'],
      correct: 2,
    },
    {
      q: 'Wo wird die Galle produziert?',
      a: ['Gallenblase', 'Leber', 'Bauchspeicheldrüse', 'Zwölffingerdarm'],
      correct: 1,
    },
    {
      q: 'Was gehört zum Zentralnervensystem (ZNS)?',
      a: ['Ischiasnerv', 'Gehirn & Rückenmark', 'Reflexe', 'Vagusnerv'],
      correct: 1,
    },
    {
      q: 'Wie viele Wirbel hat die Lendenwirbelsäule (LWS)?',
      a: ['5', '7', '12', '4'],
      correct: 0,
    },
    {
      q: 'Welches Gefäß führt Blut zum Herzen hin?',
      a: ['Arterie', 'Vene', 'Kapillare', 'Aorta'],
      correct: 1,
    },
    {
      q: 'Was ist die Aufgabe der Thrombozyten?',
      a: [
        'Sauerstofftransport',
        'Infektabwehr',
        'Blutgerinnung',
        'Nährstofftransport',
      ],
      correct: 2,
    },
    {
      q: 'Wie heißt der Fachbegriff für den Kehlkopf?',
      a: ['Pharynx', 'Larynx', 'Trachea', 'Esophagus'],
      correct: 1,
    },
    {
      q: 'Welches Organ filtert das Blut und produziert Urin?',
      a: ['Leber', 'Milz', 'Niere', 'Harnblase'],
      correct: 2,
    },
    {
      q: 'Wo befindet sich der Sinusknoten?',
      a: [
        'Im Gehirn',
        'In der Niere',
        'Im rechten Vorhof des Herzens',
        'In der Lunge',
      ],
      correct: 2,
    },
    {
      q: 'Welcher Knochen ist der längste im menschlichen Körper?',
      a: ['Oberarmknochen', 'Schienbein', 'Oberschenkelknochen', 'Wirbelsäule'],
      correct: 2,
    },
    {
      q: 'Was ist die Aufgabe der Leukozyten?',
      a: [
        'Energiebereitstellung',
        'Immunabwehr',
        'Sauerstoffbindung',
        'Wärmeregulierung',
      ],
      correct: 1,
    },
    {
      q: 'Wie heißt die Verbindung zwischen zwei Neuronen?',
      a: ['Axon', 'Dendrit', 'Synapse', 'Myelinscheide'],
      correct: 2,
    },
    {
      q: 'Wo wird das Hormon Cortisol gebildet?',
      a: ['Schilddrüse', 'Nebennierenrinde', 'Hypophyse', 'Hoden'],
      correct: 1,
    },
    {
      q: 'Wie nennt man den Verschluss der Luftröhre beim Schlucken?',
      a: [
        'Gaumensegel',
        'Kehldeckel (Epiglottis)',
        'Stimmritze',
        'Speiseröhre',
      ],
      correct: 1,
    },
    {
      q: 'Welcher Hirnteil steuert lebenswichtige Funktionen wie Atmung?',
      a: [
        'Großhirn',
        'Kleinhirn',
        'Nachhirn (Medulla oblongata)',
        'Zwischenhirn',
      ],
      correct: 2,
    },
    {
      q: 'Was ist das größte Gelenk des Körpers?',
      a: ['Hüftgelenk', 'Schultergelenk', 'Kniegelenk', 'Sprunggelenk'],
      correct: 2,
    },
    {
      q: 'In welchem Abschnitt des Verdauungstrakts wird am meisten Wasser resorbiert?',
      a: ['Magen', 'Dünndarm', 'Dickdarm', 'Speiseröhre'],
      correct: 2,
    },
    {
      q: 'Welche Klappe liegt zwischen linkem Vorhof und linker Kammer?',
      a: [
        'Trikuspidalklappe',
        'Mitralklappe',
        'Aortenklappe',
        'Pulmonalklappe',
      ],
      correct: 1,
    },
    {
      q: 'Wie heißt die Flüssigkeit im Inneren von Gelenken?',
      a: ['Blut', 'Lymphe', 'Synovia', 'Liquor'],
      correct: 2,
    },
    {
      q: 'Welcher Botenstoff wird bei Stress ausgeschüttet?',
      a: ['Melatonin', 'Serotonin', 'Adrenalin', 'Oxytocin'],
      correct: 2,
    },
    {
      q: 'Wo findet die Befruchtung der Eizelle meistens statt?',
      a: ['Uterus', 'Vagina', 'Eileiter', 'Eierstock'],
      correct: 2,
    },
    {
      q: 'Was ist die Pleura?',
      a: ['Herzbeutel', 'Brustfell', 'Bauchfell', 'Hirnhaut'],
      correct: 1,
    },
    {
      q: 'Welcher Nährstoff beginnt die Verdauung bereits im Mund?',
      a: ['Proteine', 'Fette', 'Kohlenhydrate', 'Vitamine'],
      correct: 2,
    },
    {
      q: 'Wie heißt der Fachbegriff für die Speiseröhre?',
      a: ['Trachea', 'Larynx', 'Esophagus', 'Colon'],
      correct: 2,
    },
    {
      q: 'Was ist die Aufgabe der Lymphe?',
      a: [
        'Nährstofftransport',
        'Abtransport von Abfallstoffen & Immunabwehr',
        'Sauerstofftransport',
        'Blutdruckregulation',
      ],
      correct: 1,
    },
    {
      q: 'Welches Mineral ist hauptverantwortlich für die Knochenfestigkeit?',
      a: ['Eisen', 'Magnesium', 'Kalzium', 'Kalium'],
      correct: 2,
    },
    {
      q: 'Wie nennt man den Zustand der Anspannung des Herzmuskels?',
      a: ['Diastole', 'Systole', 'Extrasystole', 'Arrhythmie'],
      correct: 1,
    },
    {
      q: 'Welcher Teil des Auges ist für das Farbsehen zuständig?',
      a: ['Stäbchen', 'Zapfen', 'Hornhaut', 'Linse'],
      correct: 1,
    },
    {
      q: 'Wo werden die roten Blutkörperchen gebildet?',
      a: [
        'In der Milz',
        'In der Leber',
        'Im roten Knochenmark',
        'In den Lymphknoten',
      ],
      correct: 2,
    },
    {
      q: 'Welche Aufgabe hat das Zwerchfell?',
      a: [
        'Verdauung unterstützen',
        'Wichtigster Atemmuskel',
        'Harnentleerung',
        'Schutz der Leber',
      ],
      correct: 1,
    },
    {
      q: 'Wie heißt die kleinste funktionelle Einheit der Niere?',
      a: ['Neuron', 'Nephron', 'Alveole', 'Osteon'],
      correct: 1,
    },
    {
      q: 'Was produziert die Schilddrüse?',
      a: ['Insulin', 'Thyroxin', 'Kortison', 'Testosteron'],
      correct: 1,
    },
    {
      q: 'Wo befindet sich der Amboss?',
      a: ['Im Knie', 'Im Ohr (Mittelohr)', 'Im Fuß', 'Im Schädel'],
      correct: 1,
    },
    {
      q: 'Wie viele Zähne hat ein bleibendes Gebiss normalerweise?',
      a: ['28', '30', '32', '34'],
      correct: 2,
    },
    {
      q: 'Welches Vitamin wird durch Sonnenlicht in der Haut gebildet?',
      a: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
      correct: 2,
    },
    {
      q: 'Was trennt den Brustraum vom Bauchraum?',
      a: ['Die Wirbelsäule', 'Das Zwerchfell', 'Der Magen', 'Die Pleura'],
      correct: 1,
    },
    {
      q: 'Welcher Nerv ist der "Hörnerve"?',
      a: [
        'Nervus Opticus',
        'Nervus Vestibulocochlearis',
        'Nervus Vagus',
        'Nervus Facialis',
      ],
      correct: 1,
    },
    {
      q: 'Wie nennt man die Blutflüssigkeit ohne Blutzellen?',
      a: ['Serum', 'Hämoglobin', 'Plasma', 'Lymphe'],
      correct: 2,
    },
    {
      q: 'Was ist die Aufgabe des Kleinhirns?',
      a: ['Denken', 'Gleichgewicht & Koordination', 'Hören', 'Sehen'],
      correct: 1,
    },
    {
      q: 'Welche Blutgruppe gilt als Universalspender (Erythrozyten)?',
      a: ['A negativ', 'B positiv', 'AB positiv', '0 negativ'],
      correct: 3,
    },
    {
      q: 'Wie heißt der flüssige Inhalt des Magens?',
      a: ['Speichel', 'Chymus', 'Galle', 'Sekret'],
      correct: 1,
    },
    {
      q: 'Wo liegen die Nebennieren?',
      a: ['Über der Niere', 'Neben der Leber', 'Hinter dem Magen', 'Im Becken'],
      correct: 0,
    },
    {
      q: 'Wie nennt man den Abbau von Knochensubstanz?',
      a: ['Osteosynthese', 'Osteoporose', 'Osteolyse', 'Ossifikation'],
      correct: 2,
    },
  ],
  'Spezielle Pflege': [
    {
      q: 'Was ist das Hauptziel der Dekubitusprophylaxe?',
      a: [
        'Hautreinigung',
        'Druckentlastung',
        'Durchblutungsstopp',
        'Flüssigkeitszufuhr',
      ],
      correct: 1,
    },
    {
      q: 'Welches Symptom deutet auf eine Linksherzinsuffizienz hin?',
      a: ['Beinödeme', 'Lungenödem (Atemnot)', 'Halsvenenstau', 'Aszites'],
      correct: 1,
    },
    {
      q: 'Was ist eine Aspiration?',
      a: [
        'Einatmen von Fremdkörpern/Flüssigkeit',
        'Gasgehalt im Blut',
        'Herzrhythmusstörung',
        'Harnwegsinfekt',
      ],
      correct: 0,
    },
    {
      q: 'Wie wird ein Insulin-Pen vor der Injektion vorbereitet?',
      a: [
        'Schütteln',
        'Entlüften (Spritzprobe)',
        'Einfrieren',
        'Desinfizieren der Nadel',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet die Abkürzung "p.v.K."?',
      a: [
        'pulsierender Venenknoten',
        'peripherer Venenkatheter',
        'partielle Venenkontraktion',
        'privater Venenkontakt',
      ],
      correct: 1,
    },
    {
      q: 'Welche Lagerung eignet sich bei Atemnot (Dyspnoe)?',
      a: [
        'Flachlagerung',
        'Oberkörperhochlagerung',
        'Beinhochlagerung',
        'Bauchlage',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein typisches Zeichen einer Dehydration?',
      a: [
        'Erhöhte Hautspannung',
        'Stehende Hautfalten',
        'Bluthochdruck',
        'Starker Harndrang',
      ],
      correct: 1,
    },
    {
      q: 'Wie lautet die korrekte Reihenfolge beim Ausziehen von Schutzkleidung?',
      a: [
        'Kittel, Maske, Handschuhe',
        'Handschuhe, Kittel, Maske',
        'Maske, Handschuhe, Kittel',
        'Egal',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine Thrombose?',
      a: [
        'Gefäßverengung',
        'Blutgerinnsel in einem Gefäß',
        'Bluthochdruck',
        'Herzinfarkt',
      ],
      correct: 1,
    },
    {
      q: 'Welcher Wert wird beim "Quick-Wert" gemessen?',
      a: ['Blutgerinnung', 'Blutzucker', 'Blutdruck', 'Blutfett'],
      correct: 0,
    },
    {
      q: 'Was ist das Ziel der Kontrakturenprophylaxe?',
      a: [
        'Muskelaufbau',
        'Vermeidung von Gelenkversteifung',
        'Schmerzlinderung',
        'Sturzvermeidung',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Nüchternheit" vor einer OP meistens?',
      a: [
        '6h kein Essen, 2h kein Wasser',
        '12h gar nichts',
        'Kein Kaffee, aber Tee',
        'Kein Rauchen',
      ],
      correct: 0,
    },
    {
      q: 'Woran erkennt man eine beginnende Hypoglykämie (Unterzuckerung)?',
      a: [
        'Durst & Harndrang',
        'Zittern & Kaltschweißigkeit',
        'Euphorie',
        'Roter Kopf',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Sondenintermittierende" Gabe?',
      a: [
        'Dauerinfusion',
        'Gabe in Portionen über den Tag',
        'Gabe nur nachts',
        'Injektion',
      ],
      correct: 1,
    },
    {
      q: 'Wie oft sollte eine Mundpflege bei sterbenden Patienten durchgeführt werden?',
      a: [
        'Einmal täglich',
        'Nach Bedarf (mehrmals stündlich)',
        'Nur morgens',
        'Garnicht',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Hauptmerkmal eines Ulcus cruris venosum?',
      a: [
        'Starke Schmerzen',
        'Ödeme & bräunliche Hautverfärbung',
        'Kalte Füße',
        'Fehlende Pulse',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Asepsis"?',
      a: ['Keimarmut', 'Keimfreiheit', 'Verschmutzung', 'Desinfektion'],
      correct: 1,
    },
    {
      q: 'Wozu dient ein Kompressionsverband?',
      a: [
        'Wundschutz',
        'Unterstützung des venösen Rückflusses',
        'Kühlung',
        'Fixierung',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Zyanose"?',
      a: [
        'Gelbfärbung der Haut',
        'Blaufärbung (O2-Mangel)',
        'Rötung',
        'Blässe',
      ],
      correct: 1,
    },
    {
      q: 'Welche Skala wird oft zur Dekubitus-Einschätzung genutzt?',
      a: ['Glasgow-Scale', 'Braden-Skala', 'Apgar-Score', 'Tinetti-Test'],
      correct: 1,
    },
    {
      q: 'Was ist eine Stenose?',
      a: [
        'Erweiterung',
        'Verengung eines Hohlorgans',
        'Verschluss',
        'Entzündung',
      ],
      correct: 1,
    },
    {
      q: 'Wie hoch ist der normale Blutdruck (Normotonie)?',
      a: ['120/80 mmHg', '150/90 mmHg', '100/60 mmHg', '180/100 mmHg'],
      correct: 0,
    },
    {
      q: 'Was ist bei der Pflege eines Blasenkatheters wichtig?',
      a: [
        'Beutel über Blasenniveau',
        'Beutel unter Blasenniveau',
        'Täglicher Wechsel',
        'Katheter spülen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine Apoplexie?',
      a: ['Herzinfarkt', 'Schlaganfall', 'Lungenembolie', 'Nierenversagen'],
      correct: 1,
    },
    {
      q: 'Wofür steht die Abkürzung "MRSA"?',
      a: [
        'Multi-Resistenter Staphylokokkus Aureus',
        'Magen-Resistente-Säure',
        'Milch-Resistenz-Syndrom',
        'Mobiler Rettungs-Assistent',
      ],
      correct: 0,
    },
    {
      q: 'Was ist eine "PEG-Sonde"?',
      a: [
        'Magensonde durch die Bauchwand',
        'Sonde durch die Nase',
        'Darmsonde',
        'Blasenkatheter',
      ],
      correct: 0,
    },
    {
      q: 'Welche Symptome sind typisch für einen Myokardinfarkt?',
      a: [
        'Kopfschmerz',
        'Brustschmerz (Angina Pectoris)',
        'Beinödem',
        'Bauchschmerz',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "postoperativ"?',
      a: [
        'Vor der Operation',
        'Nach der Operation',
        'Während der Operation',
        'Ohne Operation',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine Embolie?',
      a: [
        'Gefäßplatzen',
        'Verschluss durch ein verschlepptes Blutgerinnsel',
        'Aussackung',
        'Entzündung',
      ],
      correct: 1,
    },
    {
      q: 'Wie lagert man einen Patienten mit Verdacht auf Schock?',
      a: [
        'Oberkörper hoch',
        'Schocklagerung (Beine hoch)',
        'Stabile Seitenlage',
        'Flach',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Anurie"?',
      a: [
        'Viel Urin',
        'Wenig Urin (< 100ml/24h)',
        'Normaler Urin',
        'Blut im Urin',
      ],
      correct: 1,
    },
    {
      q: 'Welche Prophylaxe wird durch Mobilisation am besten unterstützt?',
      a: [
        'Soor- und Parotitis',
        'Fast alle (Thrombose, Dekubitus, etc.)',
        'Nur Obstipation',
        'Keine',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "subkutan" (s.c.)?',
      a: [
        'In den Muskel',
        'Unter die Haut (Fettgewebe)',
        'In die Vene',
        'In den Darm',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Ziel der basalen Stimulation?',
      a: [
        'Heilung von Koma',
        'Förderung der Wahrnehmung',
        'Muskelaufbau',
        'Schlafmittelersatz',
      ],
      correct: 1,
    },
    {
      q: 'Wie erkennt man eine Phlebitis (Venenentzündung)?',
      a: [
        'Blässe',
        'Rötung, Schwellung, Schmerz am Gefäß',
        'Kältegefühl',
        'Taubheit',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein Stoma?',
      a: [
        'Ein Tumor',
        'Künstlicher Körperausgang',
        'Eine Wunde',
        'Ein Katheter',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Hemi-Plegie"?',
      a: [
        'Vollständige Halbseitenlähmung',
        'Leichte Schwäche',
        'Beinlähmung',
        'Sprachstörung',
      ],
      correct: 0,
    },
    {
      q: 'Wozu dient das "V-Lagerungskissen"?',
      a: [
        'Druckentlastung Sakrum',
        'Atemunterstützung',
        'Lagerung bei Fraktur',
        'Schlafkomfort',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Pneumonie"?',
      a: [
        'Herzbeutelentzündung',
        'Lungenentzündung',
        'Rippenfellentzündung',
        'Bronchitis',
      ],
      correct: 1,
    },
    {
      q: 'Woran erkennt man einen Harnwegsinfekt (HWI)?',
      a: [
        'Polyurie',
        'Algurie (Schmerzen beim Wasserlassen)',
        'Blässe',
        'Heißhunger',
      ],
      correct: 1,
    },
    {
      q: 'Was ist die "Verschlusszeit" bei einer Händedesinfektion?',
      a: ['10 Sekunden', '30 Sekunden', '60 Sekunden', '5 Minuten'],
      correct: 1,
    },
    {
      q: 'Was bedeutet "protrahiert"?',
      a: ['Plötzlich', 'Verzögert/Verlängert', 'Geheilt', 'Tödlich'],
      correct: 1,
    },
    {
      q: 'Wofür nutzt man eine "Antidekubitusmatratze"?',
      a: [
        'Besserer Schlaf',
        'Druckverteilung bei Immobilität',
        'Wärmespeicherung',
        'Vermeidung von Schwitzen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Bradykardie"?',
      a: [
        'Schneller Puls',
        'Langsamer Puls (< 60/min)',
        'Unregelmäßiger Puls',
        'Hoher Blutdruck',
      ],
      correct: 1,
    },
    {
      q: 'Was ist bei der Pflege von Demenzpatienten besonders wichtig?',
      a: [
        'Viel Logik',
        'Biografiearbeit & Validierung',
        'Strenge Regeln',
        'Isolation',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Insuffizienz"?',
      a: [
        'Überfunktion',
        'Funktionsschwäche/Versagen',
        'Entzündung',
        'Wachstum',
      ],
      correct: 1,
    },
    {
      q: 'Wie lautet die 6-R-Regel bei Medikamenten?',
      a: [
        'Richtiger Patient, Medikament, Dosis, Applikation, Zeitpunkt, Dokumentation',
        'Richtiges Regal, Preis, Name, Farbe, Größe, Ort',
        'Egal',
        'Rezept, Rechnung, Rat, Ruhe, Recht, Regel',
      ],
      correct: 0,
    },
    {
      q: 'Was ist eine "Oedem"?',
      a: [
        'Bluterguss',
        'Wasseransammlung im Gewebe',
        'Eiteransammlung',
        'Tumor',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Orthopnoe"?',
      a: [
        'Normale Atmung',
        'Schwerste Atemnot (nur im Sitzen möglich)',
        'Atemstillstand',
        'Schnelle Atmung',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das "S" in der ABCDE-Regel der Ersten Hilfe (manchmal genutzt)?',
      a: ['Safety (Sicherheit)', 'Schmerz', 'Sauerstoff', 'Spritze'],
      correct: 0,
    },
  ],
  Arzneimittellehre: [
    {
      q: 'Was bedeutet die Abkürzung "p.o." bei der Medikamentengabe?',
      a: [
        'per Oksygen',
        'per os (durch den Mund)',
        'per operativ',
        'per oculus (Auge)',
      ],
      correct: 1,
    },
    {
      q: 'Welche Wirkstoffgruppe wird zur Behandlung von bakteriellen Infektionen eingesetzt?',
      a: ['Analgetika', 'Antibiotika', 'Antihypertonika', 'Antidiabetika'],
      correct: 1,
    },
    {
      q: 'Wo werden subkutane (s.c.) Injektionen meistens verabreicht?',
      a: [
        'In die Vene',
        'In das Unterhautfettgewebe',
        'In den Muskel',
        'In die Hautoberfläche',
      ],
      correct: 1,
    },
    {
      q: 'Was ist die Hauptwirkung von Diuretika?',
      a: [
        'Schmerzlinderung',
        'Ausschwemmung von Wasser (Harnfördernd)',
        'Blutzuckersenkung',
        'Beruhigung',
      ],
      correct: 1,
    },
    {
      q: 'Wie wirkt ein Antihypertonikum?',
      a: ['Fiebersenkend', 'Blutdrucksenkend', 'Blutverdünnend', 'Abführend'],
      correct: 1,
    },
    {
      q: 'Was ist bei der Gabe von Digitalis-Präparaten (Herzglykoside) vorab zu prüfen?',
      a: [
        'Körpergewicht',
        'Puls (Bradykardie-Gefahr)',
        'Sehvermögen',
        'Hautfarbe',
      ],
      correct: 1,
    },
    {
      q: 'Welche Medikamente hemmen die Blutgerinnung?',
      a: ['Antikoagulanzien', 'Antipyretika', 'Antiemetika', 'Antitussiva'],
      correct: 0,
    },
    {
      q: 'Was bedeutet "sublingual"?',
      a: [
        'Verschlucken',
        'Unter die Zunge legen',
        'In die Backentasche',
        'Auf die Haut kleben',
      ],
      correct: 1,
    },
    {
      q: 'Welches Vitamin ist wichtig für die Blutgerinnung und ist Gegenspieler von Marcumar?',
      a: ['Vitamin C', 'Vitamin D', 'Vitamin K', 'Vitamin B12'],
      correct: 2,
    },
    {
      q: 'Was ist ein "Generikum"?',
      a: [
        'Ein Schlafmittel',
        'Ein Nachahmerpräparat mit gleichem Wirkstoff',
        'Ein pflanzliches Mittel',
        'Ein giftiges Medikament',
      ],
      correct: 1,
    },
    {
      q: 'Wozu dienen Antiemetika?',
      a: [
        'Gegen Husten',
        'Gegen Übelkeit und Erbrechen',
        'Gegen Durchfall',
        'Gegen Schmerzen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine häufige Nebenwirkung von starken Opioiden?',
      a: [
        'Durchfall',
        'Obstipation (Verstopfung)',
        'Bluthochdruck',
        'Heißhunger',
      ],
      correct: 1,
    },
    {
      q: 'Wie müssen Betäubungsmittel (BtM) gelagert werden?',
      a: [
        'Im normalen Medikamentenschrank',
        'In einem separat verschlossenen Stahlschrank',
        'Im Kühlschrank',
        'Im Schwesternzimmer',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Applikation"?',
      a: [
        'Herstellung eines Mittels',
        'Verabreichung eines Medikaments',
        'Lagerung',
        'Entsorgung',
      ],
      correct: 1,
    },
    {
      q: 'Wann sollte ein "vor dem Essen" (a.c.) verordnetes Medikament gegeben werden?',
      a: [
        'Direkt zum ersten Bissen',
        'Ca. 30–60 Min. vor der Mahlzeit',
        '2 Stunden vorher',
        'Sofort nach dem Aufstehen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Suppositorium"?',
      a: ['Eine Tablette', 'Ein Zäpfchen', 'Ein Saft', 'Eine Salbe'],
      correct: 1,
    },
    {
      q: 'Welche Wirkung haben Bronchospasmolytika?',
      a: [
        'Blutdrucksenkung',
        'Erweiterung der Atemwege',
        'Hustenreizdämpfung',
        'Entwässerung',
      ],
      correct: 1,
    },
    {
      q: 'Wie wird Insulin bei Raumtemperatur gelagert (angebrochen)?',
      a: [
        'Maximal 4 Wochen',
        'Unbegrenzt',
        'Nur im Kühlschrank',
        'Maximal 24 Stunden',
      ],
      correct: 0,
    },
    {
      q: 'Was ist eine "Anaphylaxie"?',
      a: [
        'Eine leichte Nebenwirkung',
        'Eine schwere allergische Reaktion',
        'Eine Überdosierung',
        'Ein Gewöhnungseffekt',
      ],
      correct: 1,
    },
    {
      q: 'Welche Medikamente dämpfen den Hustenreiz?',
      a: ['Expektoranzien', 'Antitussiva', 'Antibiotika', 'Antimykotika'],
      correct: 1,
    },
    {
      q: 'Was bedeutet "i.m."?',
      a: ['intramuskulär', 'intravenös', 'intraarteriell', 'intramedullär'],
      correct: 0,
    },
    {
      q: 'Was ist der First-Pass-Effekt?',
      a: [
        'Wirkung im Herz',
        'Erste Leberpassage nach Aufnahme im Magen-Darm-Trakt',
        'Ausscheidung über die Niere',
        'Aufnahme über die Haut',
      ],
      correct: 1,
    },
    {
      q: 'Welche Wirkstoffgruppe wird bei Magengeschwüren eingesetzt (Magenschutz)?',
      a: [
        'Laxanzien',
        'Protonenpumpenhemmer (PPI)',
        'Neuroleptika',
        'Zytostatika',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Indikation"?',
      a: [
        'Gegenanzeige',
        'Heilanzeige (Grund der Anwendung)',
        'Nebenwirkung',
        'Wechselwirkung',
      ],
      correct: 1,
    },
    {
      q: 'Was sind Laxanzien?',
      a: [
        'Beruhigungsmittel',
        'Abführmittel',
        'Mittel gegen Pilze',
        'Blutdruckmittel',
      ],
      correct: 1,
    },
    {
      q: 'Warum dürfen magensaftresistente Tabletten nicht mörserst werden?',
      a: [
        'Sie schmecken bitter',
        'Der Wirkstoff würde im Magen zerstört/Magen reizen',
        'Sie werden zu staubig',
        'Sie wirken dann zu schnell',
      ],
      correct: 1,
    },
    {
      q: 'Welches Schmerzmittel wirkt auch entzündungshemmend (NSAR)?',
      a: ['Paracetamol', 'Ibuprofen', 'Novalgin', 'Pantoprazol'],
      correct: 1,
    },
    {
      q: 'Was ist eine "Kontraindikation"?',
      a: [
        'Anwendungsgrund',
        'Gegenanzeige (wann man es nicht geben darf)',
        'Zusatzwirkung',
        'Lagerungsvorschrift',
      ],
      correct: 1,
    },
    {
      q: 'Wofür werden Neuroleptika primär eingesetzt?',
      a: [
        'Gegen Schmerzen',
        'Zur Behandlung von Psychosen/Unruhe',
        'Gegen Infektionen',
        'Zur Entwässerung',
      ],
      correct: 1,
    },
    {
      q: 'Wie nennt man die Lehre von der Wirkung des Arzneistoffs auf den Körper?',
      a: ['Pharmakokinetik', 'Pharmakodynamik', 'Toxikologie', 'Anatomie'],
      correct: 1,
    },
    {
      q: 'Was bedeutet "rektal"?',
      a: [
        'Über den Mund',
        'Über den Mastdarm',
        'Über die Haut',
        'Über die Scheide',
      ],
      correct: 1,
    },
    {
      q: 'Welche Farbe hat ein Insulin-Pen für kurzwirksames Insulin oft (Herstellerabhängig, aber Regel)?',
      a: ['Gelb', 'Orange/Klar (Code beachten!)', 'Blau', 'Grün'],
      correct: 1,
    },
    {
      q: 'Was ist ein "Antidot"?',
      a: ['Ein Vitamin', 'Ein Gegengift', 'Ein Wirkverstärker', 'Ein Placebo'],
      correct: 1,
    },
    {
      q: 'Was sind Zytostatika?',
      a: [
        'Virostatika',
        'Zellwachstumshemmende Mittel (Chemotherapie)',
        'Hormone',
        'Aufbaustoffe',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Kumulation"?',
      a: [
        'Schnelle Ausscheidung',
        'Anhäufung des Wirkstoffs im Körper',
        'Sofortige Wirkung',
        'Allergie',
      ],
      correct: 1,
    },
    {
      q: 'Wie lautet die korrekte Abkürzung für "nach dem Essen"?',
      a: ['a.c.', 'p.c. (post cenam)', 's.c.', 'm.d.s.'],
      correct: 1,
    },
    {
      q: 'Was ist bei der Anwendung von Nitrospray zu beachten?',
      a: [
        'Patient muss stehen',
        'Patient sollte sitzen/liegen (Blutdruckabfall)',
        'Danach viel essen',
        'Spray tief einatmen',
      ],
      correct: 1,
    },
    {
      q: 'Welche Medikamente bekämpfen Pilzinfektionen?',
      a: ['Antibiotika', 'Antimykotika', 'Virostatika', 'Antidiabetika'],
      correct: 1,
    },
    {
      q: 'Was ist eine "transdermale" Applikation?',
      a: [
        'Spritze',
        'Pflaster (Wirkstoff über die Haut)',
        'Tablette',
        'Aerosol',
      ],
      correct: 1,
    },
    {
      q: 'Warum wird bei einer Marcumar-Therapie der INR-Wert gemessen?',
      a: [
        'Um den Zucker zu prüfen',
        'Um die Stärke der Gerinnungshemmung zu überwachen',
        'Wegen der Niere',
        'Wegen des Pulses',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Placebo"?',
      a: [
        'Starkes Gift',
        'Scheinmedikament ohne Wirkstoff',
        'Beruhigungsmittel',
        'Spritze',
      ],
      correct: 1,
    },
    {
      q: 'Welche Gefahr besteht bei zu schneller intravenöser Gabe von Kalium?',
      a: ['Hautausschlag', 'Herzstillstand', 'Husten', 'Heißhunger'],
      correct: 1,
    },
    {
      q: 'Was sind Glukokortikoide?',
      a: [
        'Zuckerersatz',
        'Kortison-Präparate (Entzündungshemmer)',
        'Schlafmittel',
        'Vitaminsäfte',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Toxizität"?',
      a: ['Wirksamkeit', 'Giftigkeit', 'Löslichkeit', 'Haltbarkeit'],
      correct: 1,
    },
    {
      q: 'Wofür werden Antihistaminika eingesetzt?',
      a: [
        'Bei Magenbeschwerden',
        'Bei allergischen Reaktionen',
        'Bei Knochenbrüchen',
        'Bei Verstopfung',
      ],
      correct: 1,
    },
    {
      q: 'Wie nennt man Medikamente, die die Bronchien erweitern?',
      a: ['Betablocker', 'Beta-2-Sympathomimetika', 'ACE-Hemmer', 'Diuretika'],
      correct: 1,
    },
    {
      q: 'Was ist bei Brausetabletten vor der Gabe wichtig?',
      a: [
        'Mörsern',
        'Vollständig in Wasser auflösen',
        'Im Ganzen schlucken',
        'Mit Milch einnehmen',
      ],
      correct: 1,
    },
    {
      q: 'Welche Arzneimittelform wirkt am schnellsten?',
      a: ['Tablette', 'Intravenöse Injektion (i.v.)', 'Pflaster', 'Salbe'],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Sedierung"?',
      a: [
        'Anregung',
        'Beruhigung/Dämpfung von Funktionen',
        'Schmerzsteigerung',
        'Muskelkrampf',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das "Verfalldatum"?',
      a: [
        'Herstellungsdatum',
        'Zeitpunkt, nach dem das Mittel nicht mehr verwendet werden darf',
        'Lieferdatum',
        'Öffnungsdatum',
      ],
      correct: 1,
    },
  ],
  Recht: [
    {
      q: 'Was bedeutet die "Schweigepflicht" primär?',
      a: [
        'Nur gegenüber Fremden schweigen',
        'Verschwiegenheit über alle Patientengeheimnisse',
        'Reden nur mit Erlaubnis des Arztes',
        'Gilt nur für examinierte Kräfte',
      ],
      correct: 1,
    },
    {
      q: 'Wann darf die Schweigepflicht gebrochen werden?',
      a: [
        'Wenn die Angehörigen fragen',
        'Bei mutmaßlicher Einwilligung oder rechtfertigendem Notstand',
        'Wenn der Patient unsympathisch ist',
        'Gar nicht, unter keinen Umständen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Vorsorgevollmacht"?',
      a: [
        'Ein Sparkonto für das Alter',
        'Übertragung der Entscheidungsgewalt auf eine Vertrauensperson',
        'Ein Testament',
        'Ein Versicherungsvertrag',
      ],
      correct: 1,
    },
    {
      q: 'Wer darf eine "Freiheitsentziehende Maßnahme" (FEM) dauerhaft anordnen?',
      a: [
        'Die Pflegekraft',
        'Der Betreuer allein',
        'Das Betreuungsgericht',
        'Die Heimleitung',
      ],
      correct: 2,
    },
    {
      q: 'Was ist das Ziel des Pflegeberufegesetzes (PflBG)?',
      a: [
        'Regelung der Arbeitszeiten',
        'Generalistische Ausbildung zur Pflegefachperson',
        'Festlegung der Gehälter',
        'Vorschriften zur Dienstkleidung',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Körperverletzung" im Pflegealltag theoretisch?',
      a: [
        'Nur Schläge',
        'Jeder Heileingriff (auch Spritzen) ohne Einwilligung',
        'Nur grobe Behandlungsfehler',
        'Beleidigung des Patienten',
      ],
      correct: 1,
    },
    {
      q: 'Ab welchem Alter ist man in Deutschland bedingt strafmündig?',
      a: ['12 Jahre', '14 Jahre', '16 Jahre', '18 Jahre'],
      correct: 1,
    },
    {
      q: 'Was ist eine "Patientenverfügung"?',
      a: [
        'Ein Dokument zur Regelung des Erbes',
        'Schriftliche Festlegung für medizinische Situationen (Wille)',
        'Ein ärztliches Rezept',
        'Ein Vertrag mit dem Pflegedienst',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Garantenstellung" in der Pflege?',
      a: [
        'Garantie auf Heilung',
        'Rechtliche Pflicht zum Schutz des Patienten vor Schaden',
        'Zusage eines Heimplatzes',
        'Lohnfortzahlung im Krankheitsfall',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Unterschied zwischen Diebstahl und Unterschlagung?',
      a: [
        'Es gibt keinen',
        'Wegnahme einer Sache vs. Einbehalten einer bereits besessenen Sache',
        'Nur der Wert der Sache zählt',
        'Diebstahl ist immer nachts',
      ],
      correct: 1,
    },
    {
      q: 'Darf eine Pflegekraft ärztliche Tätigkeiten (z.B. Injektionen) verweigern?',
      a: [
        'Nein, niemals',
        'Ja, bei mangelnder Fachkenntnis (Remonstrationspflicht)',
        'Nur wenn sie keine Lust hat',
        'Nur am Wochenende',
      ],
      correct: 1,
    },
    {
      q: 'Was regelt das Betreuungsgesetz?',
      a: [
        'Die Erziehung von Kindern',
        'Die rechtliche Vertretung hilfsbedürftiger Erwachsener',
        'Den Kündigungsschutz',
        'Die Vergabe von Pflegegraden',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter "Delegation" in der Pflege?',
      a: [
        'Kündigung eines Mitarbeiters',
        'Übertragung von Aufgaben auf andere (z.B. Hilfskräfte)',
        'Urlaubsplanung',
        'Fortbildung',
      ],
      correct: 1,
    },
    {
      q: 'Welches Gericht ist für Streitigkeiten aus dem Arbeitsverhältnis zuständig?',
      a: [
        'Amtsgericht',
        'Arbeitsgericht',
        'Sozialgericht',
        'Verwaltungsgericht',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Gefährdungsanzeige"?',
      a: [
        'Anzeige bei der Polizei',
        'Schriftlicher Hinweis an den AG bei drohenden Fehlern durch Überlastung',
        'Meldung eines Brandes',
        'Beschwerde über das Essen',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Mutmaßlicher Wille"?',
      a: [
        'Was der Patient wahrscheinlich entscheiden würde',
        'Was die Angehörigen wollen',
        'Was der Arzt für richtig hält',
        'Was im Gesetz steht',
      ],
      correct: 0,
    },
    {
      q: 'Wie lange müssen Pflegedokumentationen mindestens aufbewahrt werden (meistens)?',
      a: ['1 Jahr', '5 Jahre', '10 Jahre', '30 Jahre'],
      correct: 2,
    },
    {
      q: 'Was ist "Unterlassene Hilfeleistung"?',
      a: [
        'Zu spätes Kommen zum Dienst',
        'Nicht helfen bei Unglücksfällen trotz Zumutbarkeit',
        'Vergessen eines Medikaments',
        'Kein Wasser reichen',
      ],
      correct: 1,
    },
    {
      q: 'Wer ist Träger der gesetzlichen Unfallversicherung?',
      a: [
        'Die Krankenkasse',
        'Die Berufsgenossenschaft (BG)',
        'Die Rentenversicherung',
        'Das Arbeitsamt',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Rechtfertigender Notstand"?',
      a: [
        'Man darf Recht brechen, um ein höheres Gut (Leben) zu retten',
        'Man hat immer Recht',
        'Überstunden sind Pflicht',
        'Notwehr gegen Kollegen',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das Leitbild der "Charta der Rechte für pflegebedürftige Menschen"?',
      a: [
        'Schnelle Pflege',
        'Selbstbestimmung und Teilhabe',
        'Kosteneinsparung',
        'Gehorsam gegenüber Ärzten',
      ],
      correct: 1,
    },
    {
      q: 'Welche Versicherung zahlt bei Berufsunfähigkeit durch Krankheit?',
      a: [
        'Haftpflicht',
        'Rentenversicherung (Erwerbsminderungsrente)',
        'Unfallversicherung',
        'Krankenversicherung',
      ],
      correct: 1,
    },
    {
      q: 'Darf man Geschenke von Patienten annehmen?',
      a: [
        'Ja, immer',
        'Meistens verboten (Dienstanweisung beachten!)',
        'Nur Geld',
        'Nur über 100 Euro',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "aktive Sterbehilfe" in Deutschland?',
      a: [
        'Erlaubt',
        'Verboten (Strafbar)',
        'Nur bei Ärzten erlaubt',
        'Wunschgemäß immer möglich',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "passive Sterbehilfe"?',
      a: [
        'Gabe von Giftspritzen',
        'Verzicht auf lebensverlängernde Maßnahmen (Wille beachten)',
        'Töten durch Unterlassen ohne Grund',
        'Beihilfe zum Suizid',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Betriebsrat"?',
      a: [
        'Die Geschäftsführung',
        'Interessenvertretung der Arbeitnehmer',
        'Ein Treffen aller Chefs',
        'Die Kantinenaufsicht',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das SGB XI?',
      a: [
        'Krankenversicherung',
        'Pflegeversicherung',
        'Rentenversicherung',
        'Arbeitslosenversicherung',
      ],
      correct: 1,
    },
    {
      q: 'Welches Gesetz regelt den Mindesturlaub?',
      a: [
        'Bürgerliches Gesetzbuch',
        'Bundesurlaubsgesetz',
        'Arbeitszeitgesetz',
        'Infektionsschutzgesetz',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Fixierung"?',
      a: [
        'Einstellen eines Bildes',
        'Einschränkung der Bewegungsfreiheit (z.B. Bettgitter)',
        'Terminabsprache',
        'Wundversorgung',
      ],
      correct: 1,
    },
    {
      q: 'Was regelt das Infektionsschutzgesetz (IfSG)?',
      a: [
        'Gehälter im Labor',
        'Prävention und Meldung übertragbarer Krankheiten',
        'Bau von Krankenhäusern',
        'Abfallentsorgung',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Aufsichtspflicht" gegenüber Demenzkranken?',
      a: [
        'Einsperren',
        'Schutz vor Selbst- und Fremdgefährdung',
        'Ständige Beobachtung per Kamera',
        'Garnichts',
      ],
      correct: 1,
    },
    {
      q: 'Darf ein Arbeitgeber den Inhalt eines privaten ärztlichen Attests wissen?',
      a: [
        'Ja, alles',
        'Nur die Dauer der Arbeitsunfähigkeit (nicht die Diagnose)',
        'Nur bei Kündigung',
        'Nur wenn er fragt',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Abmahnung"?',
      a: [
        'Eine Kündigung',
        'Hinweis auf Vertragsverstoß mit Androhung von Konsequenzen',
        'Ein Lob',
        'Eine Gehaltserhöhung',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "brutto" beim Gehalt?',
      a: [
        'Das Geld, das aufs Konto kommt',
        'Gehalt vor Abzug von Steuern und Sozialversicherung',
        'Gehalt inklusive Trinkgeld',
        'Gehalt nach der Steuer',
      ],
      correct: 1,
    },
    {
      q: 'Was ist Schmerzensgeld?',
      a: [
        'Zusatzlohn für anstrengende Arbeit',
        'Ausgleich für immaterielle Schäden (Verletzungen)',
        'Bezahlung von Medikamenten',
        'Lohnfortzahlung',
      ],
      correct: 1,
    },
    {
      q: 'Wer entscheidet über die Unterbringung in einer geschlossenen Abteilung?',
      a: [
        'Die Angehörigen',
        'Das Gericht (nach PsychKG oder BetrG)',
        'Der Hausarzt',
        'Die Polizei allein',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Datenschutz" nach DSGVO?',
      a: [
        'Zettel wegschmeißen',
        'Schutz personenbezogener Daten vor Missbrauch',
        'Passwörter aufschreiben',
        'Verschließen des Büros',
      ],
      correct: 1,
    },
    {
      q: 'Welches Gesetz schützt werdende Mütter am Arbeitsplatz?',
      a: [
        'Elterngeldgesetz',
        'Mutterschutzgesetz (MuSchG)',
        'Frauenfördergesetz',
        'Arbeitsschutzgesetz',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Mobbing"?',
      a: [
        'Einmaliges Streiten',
        'Systematisches Schikanieren über längeren Zeitraum',
        'Kritik vom Chef',
        'Viel Arbeit',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Euthanasie" im historischen Kontext des Nationalsozialismus?',
      a: [
        'Gute Pflege',
        'Systematischer Mord an kranken Menschen',
        'Krankenhaushilfe',
        'Forschung',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Sorgfaltspflicht"?',
      a: [
        'Pflicht zur ordentlichen Dokumentation',
        'Pflicht zur gewissenhaften Ausführung der Pflege',
        'Pflicht zum Aufräumen',
        'Pflicht zum Sparen',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Deliktsfähigkeit"?',
      a: [
        'Fähigkeit, Verträge zu schließen',
        'Fähigkeit, für begangene Schäden verantwortlich zu sein',
        'Strafmündigkeit',
        'Geschäftsfähigkeit',
      ],
      correct: 1,
    },
    {
      q: 'Darf der AG Überstunden einseitig anordnen?',
      a: [
        'Immer',
        'Nur bei Notfällen oder wenn im Vertrag geregelt',
        'Nie',
        'Nur wenn er nett fragt',
      ],
      correct: 1,
    },
    {
      q: 'Was regelt das Heimgesetz (bzw. Landesheimgesetze)?',
      a: [
        'Preise für Strom',
        'Rechte und Schutz von Bewohnern in Heimen',
        'Bauvorschriften für Garagen',
        'Urlaub für Mitarbeiter',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Betreuungsverfügung"?',
      a: [
        'Wunsch, wer im Ernstfall Betreuer werden soll',
        'Anweisung an den Pflegedienst',
        'Kündigung des Heims',
        'Vollmacht für die Bank',
      ],
      correct: 0,
    },
    {
      q: 'Wer haftet bei einem Pflegefehler primär?',
      a: [
        'Nur die Pflegekraft',
        'Der Träger (Organisationsverschulden) und die Pflegekraft (Handlungs-)',
        'Niemand',
        'Der Patient selbst',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Remonstration"?',
      a: [
        'Kündigung',
        'Bedenken gegen eine Anordnung dem Vorgesetzten melden',
        'Urlaub beantragen',
        'Streiken',
      ],
      correct: 1,
    },
    {
      q: 'Welche Versicherung ist eine Pflichtversicherung für alle Arbeitnehmer?',
      a: [
        'Hausrat',
        'Krankenversicherung',
        'Lebensversicherung',
        'Rechtsschutz',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Diskriminierung"?',
      a: [
        'Gleichbehandlung',
        'Benachteiligung wegen Herkunft, Geschlecht, Religion etc.',
        'Freundlichkeit',
        'Kritik',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Grundgesetz" für die Pflege?',
      a: [
        'Nichts',
        'Schutz der Menschenwürde (Art. 1) als oberstes Gebot',
        'Regeln für den Verkehr',
        'Vorgaben für die Mülltrennung',
      ],
      correct: 1,
    },
  ],
  Hygiene: [
    {
      q: 'Was ist die wichtigste Maßnahme zur Vermeidung von Krankenhausinfektionen?',
      a: [
        'Handschuhe tragen',
        'Händedesinfektion',
        'Flächendesinfektion',
        'Mundschutz',
      ],
      correct: 1,
    },
    {
      q: 'Wie lange ist die Standard-Einwirkzeit für eine hygienische Händedesinfektion?',
      a: ['10 Sekunden', '30 Sekunden', '60 Sekunden', '2 Minuten'],
      correct: 1,
    },
    {
      q: 'Was bedeutet der Begriff "Antisepsis"?',
      a: [
        'Keimfreiheit',
        'Keimreduktion/Keimarmut',
        'Verschmutzung',
        'Reinigung',
      ],
      correct: 1,
    },
    {
      q: 'Welche Keime sind besonders schwer abzutöten?',
      a: ['Bakterien', 'Viren', 'Bakteriensporen', 'Pilze'],
      correct: 2,
    },
    {
      q: 'Wann müssen Handschuhe gewechselt werden?',
      a: [
        'Einmal pro Schicht',
        'Nach jedem Patienten/Tätigkeitswechsel',
        'Nur bei sichtbarer Verschmutzung',
        'Nie',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "nosokomiale Infektion"?',
      a: [
        'Eine Erbkrankheit',
        'Im Krankenhaus erworbene Infektion',
        'Eine Kinderkrankheit',
        'Eine Pilzinfektion',
      ],
      correct: 1,
    },
    {
      q: 'Welche Farbe hat der Kanülenabwurfbehälter meistens?',
      a: ['Blau', 'Gelb', 'Rot', 'Grün'],
      correct: 1,
    },
    {
      q: 'Wie lautet die korrekte Reihenfolge beim Anlegen der Schutzkleidung?',
      a: [
        'Handschuhe, Kittel, Maske',
        'Kittel, Maske, Handschuhe',
        'Maske, Kittel, Handschuhe',
        'Egal',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Unterschied zwischen Reinigung und Desinfektion?',
      a: [
        'Gibt keinen',
        'Reinigung entfernt Schmutz, Desinfektion tötet Keime ab',
        'Reinigung ist teurer',
        'Desinfektion ist nur für Hände',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "aseptisches Arbeiten"?',
      a: [
        'Keimarmes Arbeiten',
        'Arbeiten unter Keimfreiheit',
        'Arbeiten mit Handschuhen',
        'Schnelles Arbeiten',
      ],
      correct: 1,
    },
    {
      q: 'Wie oft sollte eine Flächendesinfektion auf Nachtschränken erfolgen?',
      a: [
        'Wöchentlich',
        'Täglich und bei Bedarf',
        'Nur bei Entlassung',
        'Garnicht',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Remanenzwirkung"?',
      a: [
        'Sofortwirkung',
        'Anhaltende Wirkung eines Desinfektionsmittels',
        'Geruch des Mittels',
        'Hautverträglichkeit',
      ],
      correct: 1,
    },
    {
      q: 'Welche Schutzausrüstung ist bei MRSA im Zimmer Pflicht?',
      a: [
        'Nur Maske',
        'Kittel, Handschuhe, ggf. Maske',
        'Nur Handschuhe',
        'Vollschutzanzug',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Wischdesinfektion"?',
      a: [
        'Sprühen und warten',
        'Mechanisches Verreiben des Mittels auf der Fläche',
        'Nur mit Wasser wischen',
        'Staubwischen',
      ],
      correct: 1,
    },
    {
      q: 'Warum ist Schmuck an den Händen in der Pflege verboten?',
      a: [
        'Verlustgefahr',
        'Keimreservoir und Behinderung der Desinfektion',
        'Verletzungsgefahr',
        'Sieht unschön aus',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Sterilisationsindikator"?',
      a: [
        'Ein Messgerät',
        'Farbumschlag auf der Packung zur Kontrolle',
        'Ein Warnschild',
        'Ein Timer',
      ],
      correct: 1,
    },
    {
      q: 'Wie nennt man die Entwesung von Ungeziefer?',
      a: [
        'Desinfektion',
        'Deinfestation/Schädlingsbekämpfung',
        'Sterilisation',
        'Reinigung',
      ],
      correct: 1,
    },
    {
      q: 'Welches Gesetz regelt den Umgang mit meldepflichtigen Krankheiten?',
      a: [
        'Pflegegesetz',
        'Infektionsschutzgesetz (IfSG)',
        'Grundgesetz',
        'Haftpflichtgesetz',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Ausscheidungshygiene"?',
      a: [
        'Händewaschen nach dem WC',
        'Hygiene beim Umgang mit Urin/Stuhl/Beuteln',
        'Bodenreinigung',
        'Zähneputzen',
      ],
      correct: 1,
    },
    {
      q: 'Welcher Müll gehört in den "schwarzen Sack"?',
      a: [
        'Infektiöser Müll',
        'Restmüll (Hausmüllähnlich)',
        'Spritzen',
        'Papier',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Ziel der "chirurgischen Händedesinfektion"?',
      a: [
        'Sauberkeit',
        'Weitgehende Keimfreiheit für OPs',
        'Hautpflege',
        'Geruchsbeseitigung',
      ],
      correct: 1,
    },
    {
      q: 'Wie erkennt man eine sterile Verpackung?',
      a: [
        'Ist immer aus Plastik',
        'Unbeschädigt, trocken, Haltbarkeitsdatum okay',
        'Ist schwer',
        'Ist durchsichtig',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Tröpfcheninfektion"?',
      a: [
        'Übertragung durch Blut',
        'Übertragung durch feine Sekrettröpfchen (Husten/Niesen)',
        'Übertragung durch Insekten',
        'Übertragung durch Wasser',
      ],
      correct: 1,
    },
    {
      q: 'Wann muss eine hygienische Händedesinfektion erfolgen (WHO)?',
      a: [
        'Vor Patientenkontakt',
        'Nach Patientenkontakt',
        'Nach Kontakt mit Patientenumgebung',
        'In allen genannten Fällen',
      ],
      correct: 3,
    },
    {
      q: 'Was bedeutet "residente Hautflora"?',
      a: [
        'Fremde Keime auf der Haut',
        'Körpereigene, schützende Keimbesiedlung',
        'Pilzbefall',
        'Schmutzschicht',
      ],
      correct: 1,
    },
    {
      q: 'Warum darf Desinfektionsmittel nicht in Wunden gelangen (außer spezielles)?',
      a: [
        'Brennt nur',
        'Zellgiftig, verzögert Wundheilung',
        'Verfärbt die Haut',
        'Kein Grund',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Vakuumsterilisation"?',
      a: [
        'Kochen in Wasser',
        'Sterilisation mit Wasserdampf unter Luftentzug',
        'Bestrahlung',
        'Chemische Reinigung',
      ],
      correct: 1,
    },
    {
      q: 'Welche Maske schützt vor kleinsten Partikeln (z.B. Tuberkulose)?',
      a: ['OP-Maske', 'FFP2- oder FFP3-Maske', 'Stoffmaske', 'Visier'],
      correct: 1,
    },
    {
      q: 'Was ist bei der Aufbereitung von Medizinprodukten wichtig?',
      a: [
        'Nur abspülen',
        'Validierte Verfahren nutzen',
        'In der Sonne trocknen',
        'Egal',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Kontamination"?',
      a: [
        'Heilung',
        'Verunreinigung von Flächen/Gegenständen mit Keimen',
        'Sauberkeit',
        'Isolierung',
      ],
      correct: 1,
    },
    {
      q: 'Wie entsorgt man Skalpellklingen korrekt?',
      a: [
        'In den Müllsack',
        'In den durchstichsicheren Abwurfbehälter',
        'In die Hosentasche',
        'In den Waschbecken',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "transiente Hautflora"?',
      a: [
        'Eigene Keime',
        'Anfluggene, potenziell krankmachende Keime',
        'Darmflora',
        'Mundflora',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht die Abkürzung "RKI"?',
      a: [
        'Rettungs-Kurs-Institut',
        'Robert Koch-Institut',
        'Regional-Krankenhaus-Info',
        'Rechts-Kontroll-Instanz',
      ],
      correct: 1,
    },
    {
      q: 'Warum ist Händewaschen seltener besser für die Haut als Desinfektion?',
      a: [
        'Desinfektion fettet nach, Wasser entzieht Fett',
        'Wasser ist teurer',
        'Seife riecht strenger',
        'Stimmt nicht',
      ],
      correct: 0,
    },
    {
      q: 'Was ist eine "Standzeit" bei Desinfektionsmittellösungen?',
      a: [
        'Haltbarkeit der angesetzten Lösung',
        'Dauer des Stehens im Regal',
        'Einwirkzeit',
        'Lagerzeit',
      ],
      correct: 0,
    },
    {
      q: 'Was bedeutet "Kohortenisolierung"?',
      a: [
        'Alleine im Zimmer',
        'Zusammenlegung von Patienten mit dem gleichen Keim',
        'Isolierung im Keller',
        'Besuchsverbot',
      ],
      correct: 1,
    },
    {
      q: 'Was ist bei der Reinigung des Patientenzimmers zu beachten?',
      a: [
        'Von schmutzig nach sauber',
        'Von sauber nach schmutzig (oben nach unten)',
        'Egal',
        'Nur den Boden wischen',
      ],
      correct: 1,
    },
    {
      q: 'Wie nennt man die Vernichtung aller vermehrungsfähigen Keime?',
      a: ['Desinfektion', 'Sterilisation', 'Reinigung', 'Lüften'],
      correct: 1,
    },
    {
      q: 'Welches Instrument gehört in den Autoklaven?',
      a: [
        'Plastikschüssel',
        'OP-Besteck aus Metall',
        'Verbandmaterial aus Papier',
        'Elektrogeräte',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Schmierinfektion"?',
      a: [
        'Husten',
        'Übertragung durch Berührung kontaminierter Objekte/Personen',
        'Insektenstich',
        'Essen',
      ],
      correct: 1,
    },
    {
      q: 'Darf Desinfektionsmittel umgefüllt werden?',
      a: [
        'Ja, immer',
        'Nein (Verwechslungsgefahr/Verkeimung)',
        'Nur in Glasflaschen',
        'Nur wenn beschriftet',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "multiresistent"?',
      a: [
        'Keim ist gegen viele Antibiotika unempfindlich',
        'Keim ist sehr schwach',
        'Keim stirbt bei Seife',
        'Keim ist nur im Wasser',
      ],
      correct: 0,
    },
    {
      q: 'Wann ist eine Händewaschung in der Pflege zwingend?',
      a: [
        'Nie',
        'Bei sichtbarer Verschmutzung/nach Arbeitsende',
        'Vor jeder Spritze',
        'Jede Stunde',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Schutzzone" im OP?',
      a: [
        'Kantine',
        'Bereiche mit unterschiedlichen Keimanforderungen',
        'Parkplatz',
        'Patientenzimmer',
      ],
      correct: 1,
    },
    {
      q: 'Wie lautet die Faustformel für die Einwirkzeit bei Flächendesinfektion?',
      a: [
        'Immer 1 Stunde',
        'Angaben des Herstellers beachten (oft bis zur Trocknung)',
        'Gibt keine',
        'Immer 5 Minuten',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "alkoholisches Händedesinfektionsmittel"?',
      a: [
        'Trinkalkohol',
        'Präparat auf Ethanol/Isopropanol-Basis',
        'Seife',
        'Parfüm',
      ],
      correct: 1,
    },
    {
      q: 'Was muss auf einem angebrochenen Desinfektionsmittelgebinde stehen?',
      a: ['Name der Pflegekraft', 'Anbruchsdatum', 'Preis', 'Stationsname'],
      correct: 1,
    },
    {
      q: 'Warum müssen Haare in bestimmten Bereichen (OP) abgedeckt sein?',
      a: [
        'Mode',
        'Haare sind Keimträger und können in Wunden fallen',
        'Damit sie nicht nass werden',
        'Vorschrift vom Chef',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Desinfektionsplan"?',
      a: [
        'Urlaubsplan',
        'Vorgabe: Was, Wann, Womit, Wer desinfiziert',
        'Einkaufsliste',
        'Speiseplan',
      ],
      correct: 1,
    },
    {
      q: 'Dürfen Einmalartikel (z.B. Einmalkatheter) aufbereitet werden?',
      a: [
        'Ja, durch Abkochen',
        'Nein, sie sind für den Einmalgebrauch bestimmt',
        'Nur im Notfall',
        'Wenn sie noch sauber aussehen',
      ],
      correct: 1,
    },
  ],
};
