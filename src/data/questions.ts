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
  Pflegewissenschaft: [
    {
      q: 'Wer gilt als die Begründerin der modernen Krankenpflege?',
      a: [
        'Hildegard Peplau',
        'Florence Nightingale',
        'Agnes Karll',
        'Dorothea Orem',
      ],
      correct: 1,
    },
    {
      q: 'Was steht im Zentrum der Pflegetheorie von Dorothea Orem?',
      a: [
        'Interpersonale Beziehung',
        'Kulturpflegetheorie',
        'Selbstpflegedefizit',
        'Lebensaktivitäten',
      ],
      correct: 2,
    },
    {
      q: 'Wie viele Schritte umfasst der klassische Pflegeprozess (nach Fiechter/Meier)?',
      a: ['4', '5', '6', '7'],
      correct: 2,
    },
    {
      q: 'Was beschreibt die Theorie von Hildegard Peplau?',
      a: [
        'Die psychodynamische Pflege (Beziehung zwischen Pflegekraft und Patient)',
        'Die 14 Grundbedürfnisse',
        'Aktivitäten des täglichen Lebens',
        'Das Pflegesystem',
      ],
      correct: 0,
    },
    {
      q: 'Wofür steht die Abkürzung "EBN" in der Pflegewissenschaft?',
      a: [
        'Erfahrungsbasierte Notfallpflege',
        'Evidence-based Nursing',
        'Evaluation basierter Netzwerke',
        'European Board of Nursing',
      ],
      correct: 1,
    },
    {
      q: 'Wie viele AEDL (bzw. ABEDL) gibt es im Pflegemodell von Monika Krohwinkel?',
      a: ['10', '12', '13', '14'],
      correct: 2,
    },
    {
      q: 'Was ist das Ziel des Pflegeprozesses?',
      a: [
        'Kosten sparen',
        'Ärztliche Arbeit ersetzen',
        'Zielgerichtete, systematische und geplante Pflege',
        'Nur die Dokumentation erfüllen',
      ],
      correct: 2,
    },
    {
      q: 'Wofür steht das "P" in der PESR-Struktur bei Pflegediagnosen?',
      a: ['Patient', 'Problem', 'Pflegeziel', 'Praxis'],
      correct: 1,
    },
    {
      q: 'Welche Pflege-Klassifikation beschäftigt sich primär mit Pflegediagnosen?',
      a: ['ICD-10', 'NANDA', 'DNQP', 'OPS'],
      correct: 1,
    },
    {
      q: 'Wofür steht das Akronym PIKE bei der systematischen Literaturrecherche?',
      a: [
        'Patient, Intervention, Kontrollintervention, Ergebnismaß',
        'Pflege, Indikation, Kontrolle, Evaluation',
        'Problem, Ist-Zustand, Krankheitsbild, Ergebnis',
        'Praxis, Isolation, Keim, Entzündung',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das Hauptthema des Trajekt-Modells von Corbin und Strauss?',
      a: [
        'Pflege von Frühgeborenen',
        'Verlauf chronischer Krankheiten',
        'Pflegedokumentation',
        'Wundheilung',
      ],
      correct: 1,
    },
    {
      q: 'Welche drei Qualitätsdimensionen beschrieb Avedis Donabedian?',
      a: [
        'Anfang, Mitte, Ende',
        'Patient, Arzt, Pflege',
        'Struktur-, Prozess-, und Ergebnisqualität',
        'Planung, Durchführung, Kontrolle',
      ],
      correct: 2,
    },
    {
      q: 'Wer entwickelt in Deutschland die nationalen Expertenstandards in der Pflege?',
      a: [
        'Das RKI',
        'Das DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege)',
        'Die Ärztekammer',
        'Das Gesundheitsministerium',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein Merkmal "quantitativer Forschung"?',
      a: [
        'Offene Interviews',
        'Interpretation von Texten',
        'Fokus auf Einzelschicksale',
        'Arbeit mit messbaren Daten und Statistiken',
      ],
      correct: 3,
    },
    {
      q: 'Was ist ein Merkmal "qualitativer Forschung"?',
      a: [
        'Fragebögen mit Ja/Nein',
        'Suche nach Ursache-Wirkungs-Zusammenhängen',
        'Erforschung von subjektivem Erleben und Bedeutungen',
        'Große Stichproben',
      ],
      correct: 2,
    },
    {
      q: 'Wofür steht der PDCA-Zyklus im Qualitätsmanagement?',
      a: [
        'Plan, Do, Check, Act',
        'Patient, Doctor, Care, Action',
        'Pflege, Diagnose, Checkliste, Auswertung',
        'Problem, Definition, Control, Audit',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das Kernkonzept der "Salutogenese" nach Aaron Antonovsky?',
      a: [
        'Die Entstehung von Krankheit',
        'Die Entstehung von Gesundheit und das Kohärenzgefühl',
        'Die Pflege von Demenzkranken',
        'Die Klassifikation von Viren',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Coping" in der Gesundheitspsychologie?',
      a: [
        'Kopieren von Verhalten',
        'Bewältigungsstrategien im Umgang mit Krankheit/Stress',
        'Verdrängung von Schmerzen',
        'Eine Pflegediagnose',
      ],
      correct: 1,
    },
    {
      q: 'Welche Pflegetheoretikerin formulierte die 14 Grundbedürfnisse des Menschen?',
      a: [
        'Virginia Henderson',
        'Martha Rogers',
        'Nancy Roper',
        'Monika Krohwinkel',
      ],
      correct: 0,
    },
    {
      q: 'Was unterschiedet eine Pflegediagnose von einer medizinischen Diagnose?',
      a: [
        'Es gibt keinen Unterschied',
        'Med. Diagnose fokussiert auf Krankheit, Pflegediagnose auf die Reaktion des Menschen darauf',
        'Pflegediagnosen stellt der Arzt',
        'Medizinische Diagnosen sind immer chronisch',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Assessmentinstrument" in der Pflege?',
      a: [
        'Ein chirurgisches Werkzeug',
        'Ein standardisiertes Instrument zur Datenerhebung (z.B. Braden-Skala)',
        'Ein Rollstuhl',
        'Ein Medikamentenspender',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Reliabilität" in der Forschung?',
      a: [
        'Gültigkeit',
        'Zuverlässigkeit/Genauigkeit einer Messung',
        'Kostenfaktor',
        'Dauer der Studie',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Validität" in der Forschung?',
      a: [
        'Zuverlässigkeit',
        'Gültigkeit (Misst das Instrument das, was es messen soll?)',
        'Die Anzahl der Teilnehmer',
        'Die Länge des Fragebogens',
      ],
      correct: 1,
    },
    {
      q: 'Wer war Agnes Karll?',
      a: [
        'Eine berühmte Ärztin',
        'Die Erfinderin der Spritze',
        'Eine Reformerin der deutschen Krankenpflege (Gründerin der Berufsorganisation)',
        'Eine amerikanische Forscherin',
      ],
      correct: 2,
    },
    {
      q: 'Was ist "deduktives" Denken in der Forschung?',
      a: [
        'Von einer allgemeinen Theorie auf den Einzelfall schließen',
        'Vom Einzelfall auf eine allgemeine Theorie schließen',
        'Bauchgefühl',
        'Zufälliges Raten',
      ],
      correct: 0,
    },
    {
      q: 'Was ist "induktives" Denken in der Forschung?',
      a: [
        'Von der Theorie zur Praxis',
        'Vom Einzelfall auf die Allgemeinheit schließen',
        'Logisches Ausschließen',
        'Mathematisches Rechnen',
      ],
      correct: 1,
    },
    {
      q: 'Welches Pflegemodell stammt von Roper, Logan und Tierney?',
      a: [
        'Modell des Lebens (Lebensaktivitäten)',
        'Adaptionsmodell',
        'Pflegesystemmodell',
        'Interaktionsmodell',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das Ziel einer "Pflegevisite"?',
      a: [
        'Kaffee trinken mit dem Patienten',
        'Gemeinsame Überprüfung und Anpassung des Pflegeprozesses am Patientenbett',
        'Zimmerkontrolle auf Sauberkeit',
        'Verteilung von Post',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Pflegephänomen"?',
      a: [
        'Ein Wunder',
        'Eine beobachtbare Reaktion eines Menschen auf Gesundheit/Krankheit',
        'Ein seltener Virus',
        'Ein Fehler in der Dokumentation',
      ],
      correct: 1,
    },
    {
      q: 'Welcher Begriff gehört NICHT zur Pflegediagnose (PES-Format)?',
      a: ['Problem', 'Etiology (Ursache)', 'Symptom', 'Therapie'],
      correct: 3,
    },
    {
      q: 'Was beschreibt die Theorie von Jean Watson?',
      a: [
        'Transkulturelle Pflege',
        'Menschliche Fürsorge (Human Caring)',
        'Defizit-Modell',
        'Systemtheorie',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Primary Nursing" (Primärpflege)?',
      a: [
        'Pflege durch Angehörige',
        'Eine Pflegekraft ist von Aufnahme bis Entlassung für die Planung verantwortlich',
        'Pflege nur in der Grundschule',
        'Pflege durch Hilfskräfte',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter "Empirie"?',
      a: [
        'Erfahrungswissen, das auf systematischen Beobachtungen beruht',
        'Eine alte Sprache',
        'Ein Pflegeheim',
        'Eine gesetzliche Vorgabe',
      ],
      correct: 0,
    },
    {
      q: 'Was ist "Peer Review" bei wissenschaftlichen Artikeln?',
      a: [
        'Ein Inhaltsverzeichnis',
        'Bewertung der Arbeit durch unabhängige Fachexperten vor der Veröffentlichung',
        'Die Zusammenfassung (Abstract)',
        'Die Literaturliste',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Pflegebedürftigkeit" laut SGB XI?',
      a: [
        'Man ist alt',
        'Personen, die gesundheitlich bedingte Beeinträchtigungen der Selbstständigkeit aufweisen',
        'Man hat einen gebrochenen Arm',
        'Man wohnt im Pflegeheim',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Bias" in einer Studie?',
      a: [
        'Ein statistischer Fehler oder eine Verzerrung der Ergebnisse',
        'Die Einleitung',
        'Das Fazit',
        'Der Sponsor der Studie',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das Herzstück des Evidence-Based Nursing Prozesses?',
      a: [
        'Die eigene Meinung',
        'Kritische Bewertung der gefundenen Literatur',
        'Den Arzt fragen',
        'Wikipedia-Recherche',
      ],
      correct: 1,
    },
    {
      q: 'Welche Aufgabe hat das MDK (Medizinischer Dienst)?',
      a: [
        'Ausbildung von Pflegekräften',
        'Begutachtung der Pflegebedürftigkeit und Qualitätsprüfungen',
        'Bezahlung der Pflegekräfte',
        'Entwicklung von Pflegetheorien',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Abstract" in einer wissenschaftlichen Arbeit?',
      a: [
        'Das Literaturverzeichnis',
        'Eine kurze, prägnante Zusammenfassung der gesamten Arbeit',
        'Das Vorwort',
        'Der Anhang',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht das "S" in der SMART-Regel für Pflegeziele?',
      a: ['Spezifisch', 'Sicher', 'Schnell', 'Strukturiert'],
      correct: 0,
    },
    {
      q: 'Wie lautet die SMART-Regel zur Formulierung von Zielen?',
      a: [
        'Sauber, Mutig, Aktiv, Real, Toll',
        'Spezifisch, Messbar, Akzeptiert, Realistisch, Terminiert',
        'Spät, Mäßig, Akut, Reaktiv, Tot',
        'Sichtbar, Machbar, Anders, Richtig, Teuer',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter "Triangulation" in der Forschung?',
      a: [
        'Ein Dreieckstuch anlegen',
        'Kombination verschiedener Forschungsmethoden (z.B. qualitativ und quantitativ)',
        'Eine Krankheit mit 3 Symptomen',
        'Ein Krankenhaus mit 3 Flügeln',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Ziel der "Biografiearbeit"?',
      a: [
        'Ein Buch schreiben',
        'Lebensgeschichtliche Hintergründe für eine individuelle Pflege nutzen',
        'Fehler der Patienten finden',
        'Zeitvertreib',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Pflegekonzept"?',
      a: [
        'Ein Entwurf für ein Krankenhaus',
        'Ein theoretischer Baustein, der ein Pflegephänomen beschreibt (z.B. Angst, Schmerz)',
        'Eine Rechnung',
        'Ein Arbeitsvertrag',
      ],
      correct: 1,
    },
    {
      q: 'Welche Forscherin prägte das Konzept der "Transkulturellen Pflege"?',
      a: [
        'Madeleine Leininger',
        'Florence Nightingale',
        'Liliane Juchli',
        'Orem',
      ],
      correct: 0,
    },
    {
      q: 'Was beschreibt die Pflege nach dem "Funktionspflegesystem"?',
      a: [
        'Ganzheitliche Betreuung',
        'Aufteilung der Arbeit in Einzeltätigkeiten (z.B. einer wäscht alle, einer teilt Essen aus)',
        'Pflege nur nach ärztlicher Anweisung',
        'Pflege in der Psychiatrie',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Metaanalyse"?',
      a: [
        'Eine Meinungsumfrage',
        'Eine Studie, die Ergebnisse vieler einzelner Studien statistisch zusammenfasst',
        'Ein Interview mit Experten',
        'Ein Erfahrungsbericht',
      ],
      correct: 1,
    },
    {
      q: 'Welcher Schritt im Pflegeprozess folgt direkt auf die Pflegediagnosestellung?',
      a: [
        'Evaluation',
        'Informationssammlung',
        'Festlegung der Pflegeziele',
        'Durchführung der Maßnahmen',
      ],
      correct: 2,
    },
    {
      q: 'Was bedeutet "Autonomie" in der Pflegeethik?',
      a: [
        'Zwangsernährung',
        'Recht des Patienten auf Selbstbestimmung',
        'Automatische Beatmung',
        'Gehorsam',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Unterschied zwischen einer Leitlinie und einer Richtlinie?',
      a: [
        'Gibt keinen',
        'Leitlinie ist eine Empfehlung, Richtlinie ist rechtlich bindend',
        'Richtlinie ist eine Empfehlung, Leitlinie ist bindend',
        'Beide sind unverbindlich',
      ],
      correct: 1,
    },
  ],
  'Erste Hilfe': [
    {
      q: 'Unter welcher europaweiten Nummer erreichst du den Rettungsdienst?',
      a: ['110', '112', '19222', '911'],
      correct: 1,
    },
    {
      q: 'Was ist der wichtigste Eigenschutz-Grundsatz in der Ersten Hilfe?',
      a: [
        'Schnell sein',
        'Eigenschutz geht vor Fremdschutz',
        'Zuerst den Arzt rufen',
        'Immer Handschuhe tragen',
      ],
      correct: 1,
    },
    {
      q: 'Wie lautet das Verhältnis von Herzdruckmassage zu Beatmung bei Erwachsenen?',
      a: ['15:2', '30:2', '10:1', '5:1'],
      correct: 1,
    },
    {
      q: 'Wie tief sollte der Brustkorb bei der Herzdruckmassage (Erwachsene) eingedrückt werden?',
      a: ['2-3 cm', '5-6 cm', '8-10 cm', 'Maximal 4 cm'],
      correct: 1,
    },
    {
      q: 'Welche Frequenz wird bei der Herzdruckmassage empfohlen?',
      a: [
        '60-80 pro Minute',
        '100-120 pro Minute',
        '140-160 pro Minute',
        '80-100 pro Minute',
      ],
      correct: 1,
    },
    {
      q: 'Wann wendest du die stabile Seitenlage an?',
      a: [
        'Patient ist bewusstlos und atmet nicht',
        'Patient ist bewusstlos, atmet aber normal',
        'Bei Schock',
        'Bei Wirbelsäulenverletzungen',
      ],
      correct: 1,
    },
    {
      q: 'Was überprüfst du mit dem FAST-Schema?',
      a: ['Herzinfarkt', 'Vergiftung', 'Schlaganfall', 'Knochenbrüche'],
      correct: 2,
    },
    {
      q: 'Wofür steht das "S" im FAST-Schema?',
      a: ['Shock', 'Speech (Sprache)', 'Sugar', 'Sensation'],
      correct: 1,
    },
    {
      q: 'Was ist ein AED?',
      a: [
        'Automatisierter Externer Defibrillator',
        'Allgemeiner Erste-Hilfe-Dienst',
        'Atem-Ersatz-Druck',
        'Akuter Epileptischer Daueranfall',
      ],
      correct: 0,
    },
    {
      q: 'Wo werden die Klebeelektroden des AED bei Erwachsenen platziert?',
      a: [
        'Beide auf der Brustmitte',
        'Rechts unter Schlüsselbein, links unter Achselhöhle',
        'Auf den Schultern',
        'Rücken und Bauch',
      ],
      correct: 1,
    },
    {
      q: 'Wie versorgst du eine stark blutende Wunde am Arm zuerst?',
      a: [
        'Abbinden',
        'Druckverband anlegen',
        'Arm nach unten hängen lassen',
        'Wunde auswaschen',
      ],
      correct: 1,
    },
    {
      q: 'Wann darfst du ein Tourniquet (Abbindesystem) verwenden?',
      a: [
        'Bei jedem Nasenbluten',
        'Bei lebensbedrohlichen Blutungen an Extremitäten',
        'Am Hals',
        'Bei kleinen Schnittwunden',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Heimlich-Manöver?',
      a: [
        'Ein Griff zur Befreiung der Atemwege bei Ersticken',
        'Ein Griff zur Rettung aus dem Auto',
        'Eine spezielle Beatmungstechnik',
        'Ein Verband für den Kopf',
      ],
      correct: 0,
    },
    {
      q: 'Wie öffnest du die Atemwege bei einer bewusstlosen Person?',
      a: [
        'Kopf zur Seite drehen',
        'Kopf nackengewärts überstrecken und Kinn anheben',
        'Mund weit aufreißen',
        'Gar nicht',
      ],
      correct: 1,
    },
    {
      q: 'Wie lange darf die Atemkontrolle maximal dauern?',
      a: ['5 Sekunden', '10 Sekunden', '30 Sekunden', '1 Minute'],
      correct: 1,
    },
    {
      q: 'Welche Position ist bei einem Schock (z.B. Blutverlust) oft sinnvoll?',
      a: [
        'Oberkörperhochlagerung',
        'Flachlagerung',
        'Schocklage (Beine hoch)',
        'Bauchlage',
      ],
      correct: 2,
    },
    {
      q: 'Wie lagerst du einen Patienten mit Verdacht auf kardiogenen Schock (Herzproblem)?',
      a: ['Beine hoch', 'Oberkörper hoch', 'Stabile Seitenlage', 'Flach'],
      correct: 1,
    },
    {
      q: 'Was ist die PECH-Regel bei Sportverletzungen?',
      a: [
        'Pause, Eis, Compression, Hochlagern',
        'Puls, Einatmen, Checken, Helfen',
        'Panik, Eile, Call, Hospital',
        'Pusten, Einreiben, Creme, Heftpflaster',
      ],
      correct: 0,
    },
    {
      q: 'Was tust du bei Nasenbluten?',
      a: [
        'Kopf in den Nacken legen',
        'Kopf nach vorne beugen und Nasenflügel zusammendrücken',
        'Nase putzen',
        'Hinlegen',
      ],
      correct: 1,
    },
    {
      q: 'Was tust du als Ersthelfer bei einem epileptischen Anfall?',
      a: [
        'Patienten festhalten',
        'Beißkeil in den Mund stecken',
        'Vor Verletzungen schützen und Anfall abwarten',
        'Sofort beatmen',
      ],
      correct: 2,
    },
    {
      q: 'Wofür steht das "A" im ABCDE-Schema?',
      a: ['Allergien', 'Airway (Atemwege)', 'Action', 'Ambulanz'],
      correct: 1,
    },
    {
      q: 'Wofür steht das "B" im ABCDE-Schema?',
      a: ['Bleeding', 'Bones', 'Breathing (Atmung)', 'Brain'],
      correct: 2,
    },
    {
      q: 'Wofür steht das "C" im ABCDE-Schema?',
      a: ['Circulation (Kreislauf)', 'Call', 'Care', 'Compression'],
      correct: 0,
    },
    {
      q: 'Wofür steht das "D" im ABCDE-Schema?',
      a: [
        'Drugs',
        'Disability (Neurologie/Bewusstsein)',
        'Doctor',
        'Defibrillation',
      ],
      correct: 1,
    },
    {
      q: 'Wie handelst du bei einer Unterzuckerung (Hypoglykämie), wenn der Patient bei Bewusstsein ist?',
      a: [
        'Insulin spritzen',
        'Traubenzucker oder zuckerhaltiges Getränk geben',
        'Nichts zu essen geben',
        'Wasser trinken lassen',
      ],
      correct: 1,
    },
    {
      q: 'Welches Symptom ist NICHT typisch für einen Herzinfarkt?',
      a: [
        'Engegefühl in der Brust',
        'Ausstrahlung in linken Arm/Kiefer',
        'Plötzlicher Juckreiz',
        'Kalter Schweiß und Todesangst',
      ],
      correct: 2,
    },
    {
      q: 'Wie lagerst du eine schwangere Frau (3. Trimester) bei Bewusstlosigkeit?',
      a: [
        'Rechtsseitenlage',
        'Linksseitenlage (Vena-Cava-Kompressionssyndrom verhindern)',
        'Auf dem Rücken',
        'Bauchlage',
      ],
      correct: 1,
    },
    {
      q: 'Was tust du bei einer Vergiftung, wenn der Patient ansprechbar ist?',
      a: [
        'Immer zum Erbrechen bringen',
        'Giftnotruf/112 anrufen und Anweisungen befolgen',
        'Viel Milch trinken lassen',
        'Nichts, abwarten',
      ],
      correct: 1,
    },
    {
      q: 'Wie versorgst du ein Amputat (z.B. abgetrennter Finger)?',
      a: [
        'Direkt in Eiswasser legen',
        'Trocken in einen Beutel, diesen in einen Beutel mit Wasser-Eis-Gemisch',
        'In ein nasses Tuch wickeln',
        'Wegwerfen',
      ],
      correct: 1,
    },
    {
      q: 'Wie kühlt man kleinflächige Verbrennungen optimal?',
      a: [
        'Mit Eiswürfeln',
        'Mit lauwarmem Wasser (ca. 20°C) für max. 10 Minuten',
        'Mit eiskaltem Wasser',
        'Mit Butter einreiben',
      ],
      correct: 1,
    },
    {
      q: 'Warum kühlt man großflächige Verbrennungen NICHT mehr?',
      a: [
        'Es tut weh',
        'Gefahr der lebensbedrohlichen Auskühlung (Hypothermie)',
        'Wasser schadet der Haut',
        'Pflaster halten sonst nicht',
      ],
      correct: 1,
    },
    {
      q: 'Wie rettest du eine Person z.B. aus einem brennenden Auto?',
      a: [
        'Mit dem Heimlich-Manöver',
        'Mit dem Rautek-Rettungsgriff',
        'Am Kopf herausziehen',
        'Beine zuerst',
      ],
      correct: 1,
    },
    {
      q: 'Wann nimmst du bei einem verunfallten Motorradfahrer den Helm ab?',
      a: [
        'Immer, wenn er am Boden liegt',
        'Nur, wenn er bewusstlos ist, zur Atemkontrolle',
        'Niemals',
        'Nur, wenn er darum bittet',
      ],
      correct: 1,
    },
    {
      q: 'Was ist typisch für einen Sonnenstich?',
      a: [
        'Kalter Kopf, roter Körper',
        'Heißer, roter Kopf, kühle Körperhaut, Übelkeit',
        'Schüttelfrost',
        'Bewusstlosigkeit ohne Vorwarnung',
      ],
      correct: 1,
    },
    {
      q: 'Wie hilfst du jemandem, der hyperventiliert (z.B. bei Panik)?',
      a: [
        'In eine Papiertüte rückatmen lassen und beruhigen',
        'Schocklage',
        'Herzmassage',
        'Wasser ins Gesicht schütten',
      ],
      correct: 0,
    },
    {
      q: 'Wie lagerst du einen Patienten mit Verdacht auf Schädel-Hirn-Trauma bei Bewusstsein?',
      a: [
        'Flach auf den Bauch',
        'Beine hoch',
        'Oberkörper ca. 30° erhöht',
        'Stabile Seitenlage',
      ],
      correct: 2,
    },
    {
      q: 'Was misst die Glasgow Coma Scale (GCS)?',
      a: [
        'Blutdruck',
        'Bewusstseinszustand',
        'Blutzucker',
        'Schmerzintensität',
      ],
      correct: 1,
    },
    {
      q: 'Was tust du, wenn Säure in das Auge gelangt ist?',
      a: [
        'Auge reiben',
        'Auge von innen (Nase) nach außen (Ohr) spülen',
        'Auge zukleben',
        'Nichts tun',
      ],
      correct: 1,
    },
    {
      q: 'Woran erkennst du eine arterielle Blutung?',
      a: [
        'Dunkelrotes, langsam sickerndes Blut',
        'Hellrotes, im Pulsschlag spritzendes Blut',
        'Klares Sekret',
        'Wenig Blut',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das SAMPLER-Schema?',
      a: [
        'Ein Beatmungsgerät',
        'Ein strukturiertes Schema zur Notfall-Anamnese',
        'Ein Tragetuch',
        'Eine Schmerzskala',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht das "A" im SAMPLER-Schema?',
      a: ['Alter', 'Allergien', 'Atmung', 'Adresse'],
      correct: 1,
    },
    {
      q: 'Wofür steht das "M" im SAMPLER-Schema?',
      a: ['Medikamente', 'Mahlzeiten', 'Müdigkeit', 'Magen'],
      correct: 0,
    },
    {
      q: 'Was machst du bei einer Pfählungsverletzung (Gegenstand steckt im Körper)?',
      a: [
        'Gegenstand sofort herausziehen',
        'Gegenstand in der Wunde belassen, fixieren, nicht bewegen',
        'Gegenstand tiefer reindrücken',
        'Wunde mit Wasser spülen',
      ],
      correct: 1,
    },
    {
      q: 'Wie erkennst du eine Schock-Symptomatik?',
      a: [
        'Langsamer Puls, hoher Blutdruck',
        'Schneller Puls, niedriger Blutdruck, Blässe, kalter Schweiß',
        'Roter Kopf, normaler Puls',
        'Keine Symptome',
      ],
      correct: 1,
    },
    {
      q: 'Welche erste Maßnahme triffst du, wenn jemand brennt?',
      a: [
        'Weglaufen',
        'Person zu Boden bringen und Flammen ersticken (Decke, Wälzen)',
        'Auf Rettungsdienst warten',
        'Pusten',
      ],
      correct: 1,
    },
    {
      q: 'Was ist die "Rettungskette"?',
      a: [
        'Ein Seil der Feuerwehr',
        'Der Ablauf von Eigenschutz, Notruf, Erster Hilfe bis zum Krankenhaus',
        'Ein Schmuckstück',
        'Eine Kette um das Krankenhaus',
      ],
      correct: 1,
    },
    {
      q: 'Wie hilfst du jemandem bei einem Asthmaanfall?',
      a: [
        'Hinlegen',
        'Beengende Kleidung öffnen, Kutschersitz, Lippenbremse',
        'Beine hoch',
        'Zum Laufen animieren',
      ],
      correct: 1,
    },
    {
      q: 'Was tun, wenn ein Säugling einen Fremdkörper verschluckt hat und nicht atmet?',
      a: [
        'Heimlich-Manöver',
        'Auf den Bauch auf den Unterarm legen, 5 Schläge zwischen die Schulterblätter',
        'Nichts, abwarten',
        'Schütteln',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Zyanose" bei einem Notfallpatienten?',
      a: [
        'Rötung der Haut',
        'Blaufärbung von Lippen/Haut durch Sauerstoffmangel',
        'Gelbsucht',
        'Schweißausbruch',
      ],
      correct: 1,
    },
    {
      q: 'Darfst du als Ersthelfer Medikamente (außer nach ärztlicher Anweisung) verabreichen?',
      a: [
        'Ja, alle',
        'Nein (Ausnahme: Assistenz bei Notfallmedikation des Patienten wie Asthmaspray)',
        'Nur Schmerzmittel',
        'Immer',
      ],
      correct: 1,
    },
    {
      q: 'Woran erkennst du eine Verbrennung 2. Grades?',
      a: [
        'Nur Rötung',
        'Blasenbildung und starke Schmerzen',
        'Verkohlung',
        'Keine Schmerzen',
      ],
      correct: 1,
    },
    {
      q: 'Woran erkennst du eine Verbrennung 3. Grades?',
      a: [
        'Haut ist weißlich/schwarz und oft schmerzfrei (Nerven zerstört)',
        'Leichte Rötung',
        'Große Blasen',
        'Starker Juckreiz',
      ],
      correct: 0,
    },
    {
      q: 'Was ist ein "Polytrauma"?',
      a: [
        'Ein psychologischer Schock',
        'Mehrere Verletzungen, von denen mindestens eine oder die Kombination lebensbedrohlich ist',
        'Ein mehrfacher Armbruch',
        'Eine Vergiftung',
      ],
      correct: 1,
    },
    {
      q: 'Wie erkennst du einen sicheren Knochenbruch (Fraktur)?',
      a: [
        'Schwellung',
        'Schmerz',
        'Fehlstellung oder sichtbare Knochenteile',
        'Bluterguss',
      ],
      correct: 2,
    },
    {
      q: 'Was machst du bei einem offenen Knochenbruch?',
      a: [
        'Knochen wieder reindrücken',
        'Wunde keimfrei abdecken, nicht bewegen, Notruf',
        'Mit Wasser auswaschen',
        'Fest verbinden',
      ],
      correct: 1,
    },
    {
      q: 'Was ist bei der Verwendung einer Rettungsdecke zum Wärmeerhalt zu beachten?',
      a: [
        'Gold nach innen, Silber nach außen',
        'Silber zum Körper (reflektiert Körperwärme), Gold nach außen',
        'Farbe ist egal',
        'Decke vorher anwärmen',
      ],
      correct: 1,
    },
    {
      q: 'Was tust du, wenn eine bewusstlose Person "Schnappatmung" hat?',
      a: [
        'Stabile Seitenlage',
        'Wird wie Atemstillstand gewertet -> Sofort Reanimation beginnen',
        'Abwarten',
        'Sauerstoff geben',
      ],
      correct: 1,
    },
    {
      q: 'Wie lautet das Reanimations-Verhältnis bei Kindern (durch medizinisches Personal oder geschulte Ersthelfer)?',
      a: [
        '30:2',
        '15:2 (nach 5 initialen Beatmungen)',
        '10:1',
        'Nur Herzdruckmassage',
      ],
      correct: 1,
    },
    {
      q: 'Was tust du als Erstes bei einem Stromunfall?',
      a: [
        'Patienten sofort anfassen',
        'Eigenschutz! Stromkreis unterbrechen (Stecker ziehen, Sicherung raus)',
        'Beine hochlegen',
        'Puls fühlen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist die korrekte Maßnahme bei einem Zeckenbiss?',
      a: [
        'Zecke mit Öl ersticken',
        'Mit Pinzette/Zeckenzange hautnah greifen und gerade herausziehen',
        'Zecke herausdrehen',
        'Kleber darauf schmieren',
      ],
      correct: 1,
    },
    {
      q: 'Was tust du bei einem Insektenstich im Mund- oder Rachenraum?',
      a: [
        'Nichts tun',
        'Eis lutschen, Hals von außen kühlen, sofort Notruf 112',
        'Heißes Wasser trinken',
        'Zum Erbrechen bringen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Hitzschlag"?',
      a: [
        'Eine leichte Erschöpfung',
        'Lebensbedrohliche Überhitzung des Körpers (Wärmestau), oft ohne Schwitzen',
        'Ein Sonnenbrand',
        'Eine Allergie',
      ],
      correct: 1,
    },
    {
      q: 'Wie behandelst du eine Verätzung der Haut?',
      a: [
        'Nichts tun',
        'Kontaminierte Kleidung entfernen, mit viel Wasser spülen (Eigenschutz beachten)',
        'Mit Öl abwischen',
        'Puder auftragen',
      ],
      correct: 1,
    },
    {
      q: 'Was tun, wenn jemand eine ätzende Substanz verschluckt hat?',
      a: [
        'Sofort zum Erbrechen bringen',
        'Kein Erbrechen auslösen! In kleinen Schlucken Wasser trinken lassen, Notruf',
        'Viel Milch trinken',
        'Brot essen lassen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das primäre Ziel eines Druckverbandes?',
      a: [
        'Schmerzlinderung',
        'Stoppen einer starken Blutung',
        'Kühlen',
        'Wundreinigung',
      ],
      correct: 1,
    },
    {
      q: 'Aus welchen drei Teilen besteht ein Druckverband?',
      a: [
        'Pflaster, Schere, Klebeband',
        'Wundauflage, Druckpolster, Fixierbinde',
        'Tuch, Eis, Mull',
        'Verbandpäckchen, Wasser, Pinzette',
      ],
      correct: 1,
    },
    {
      q: 'Darf ein angelegtes Tourniquet (Abbindesystem) vom Ersthelfer wieder gelockert werden?',
      a: [
        'Ja, alle 10 Minuten',
        'Nein, nur durch den Arzt im Krankenhaus (Gefahr durch toxisches Blut)',
        'Ja, wenn der Schmerz zu stark wird',
        'Ja, nach 5 Minuten',
      ],
      correct: 1,
    },
    {
      q: 'Was notierst du, wenn du ein Tourniquet anlegst?',
      a: [
        'Den Blutdruck',
        'Die exakte Uhrzeit der Anlage',
        'Den Namen des Patienten',
        'Die Temperatur',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet das "C" bei C-ABCDE (wird im professionellen Bereich oft vorgestellt)?',
      a: [
        'Circulation',
        'Critical Bleeding (Kritische Blutungen zuerst stoppen!)',
        'Call',
        'Care',
      ],
      correct: 1,
    },
    {
      q: 'Woran erkennst du eine Erfrierung (2. bis 3. Grades)?',
      a: [
        'Haut ist rot',
        'Haut ist weiß-grau, hart und gefühllos',
        'Haut blutet',
        'Haut juckt stark',
      ],
      correct: 1,
    },
    {
      q: 'Wie wärmst du eine stark unterkühlte Person auf?',
      a: [
        'Aktiv durch starkes Rubbeln/Massieren',
        'Vorsichtig und passiv, in Decken hüllen (Gefahr des Bergungstodes durch kaltes Blut)',
        'In eine heiße Badewanne legen',
        'Alkohol zu trinken geben',
      ],
      correct: 1,
    },
    {
      q: 'Was deutet auf einen Schädelbasisbruch hin?',
      a: [
        'Bauchschmerzen',
        'Blut- oder Hirnwasseraustritt aus Ohr oder Nase',
        'Nasenbluten',
        'Beinbruch',
      ],
      correct: 1,
    },
    {
      q: 'Wie versorgst du ein blutendes Ohr nach einem Schädel-Trauma?',
      a: [
        'Ohr mit Watte fest verstopfen',
        'Ohr keimfrei abdecken, Blut abfließen lassen, auf die verletzte Seite lagern',
        'Ohr ausspülen',
        'Kopf in den Nacken',
      ],
      correct: 1,
    },
    {
      q: 'Was ist die Gefahr bei einem Ertrinkungsunfall im Winter?',
      a: [
        'Nur das Wasser',
        'Kombination aus Sauerstoffmangel und schwerer Unterkühlung',
        'Vergiftung',
        'Verbrennung',
      ],
      correct: 1,
    },
    {
      q: 'Wie beatmest du bei einer Reanimation nach einem Ertrinkungsunfall (als Geschulter)?',
      a: [
        'Gar nicht',
        'Mit 5 initialen Beatmungen starten, dann 30:2',
        '15:2 von Anfang an',
        'Nur Herzdruckmassage',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "anaphylaktischer Schock"?',
      a: [
        'Herzversagen',
        'Lebensbedrohliche allergische Reaktion (z.B. nach Insektenstich/Medikamenten)',
        'Blutverlust',
        'Panikattacke',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "hypovolämischer Schock"?',
      a: [
        'Ein Schock durch Flüssigkeits- oder Blutverlust',
        'Ein Schock durch Herzversagen',
        'Ein Schock durch Vergiftung',
        'Ein Schock durch Allergie',
      ],
      correct: 0,
    },
    {
      q: 'Was ist ein "kardiogener Schock"?',
      a: [
        'Schock durch Blutung',
        'Schock durch Herzpumpversagen (z.B. Herzinfarkt)',
        'Schock durch Blutvergiftung',
        'Schock durch Allergie',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine Sepsis?',
      a: [
        'Eine allergische Reaktion',
        'Eine lebensbedrohliche Blutvergiftung durch Infektion',
        'Ein Blutgerinnsel',
        'Eine Herzerkrankung',
      ],
      correct: 1,
    },
    {
      q: 'Darf der AED (Defibrillator) auf nasser Haut (z.B. am Schwimmbad) eingesetzt werden?',
      a: [
        'Ja, direkt aufkleben',
        'Nein, Brustkorb muss vorher abgetrocknet werden',
        'Nur mit Handschuhen',
        'Nur halbe Stromstärke',
      ],
      correct: 1,
    },
    {
      q: 'Was beachtest du bei einem AED und einem sichtbaren Herzschrittmacher unter der Haut?',
      a: [
        'Elektrode direkt auf den Schrittmacher kleben',
        'Elektrode mit ca. 8 cm Abstand zum Schrittmacher kleben',
        'AED darf nicht benutzt werden',
        'AED auf den Rücken kleben',
      ],
      correct: 1,
    },
    {
      q: 'Wie überprüfst du das Bewusstsein einer Person?',
      a: [
        'Nur ansprechen',
        'Laut ansprechen und an den Schultern rütteln',
        'Schmerzreiz am Auge setzen',
        'Puls fühlen',
      ],
      correct: 1,
    },
    {
      q: 'Wie verhältst du dich bei einem Gasunfall (z.B. CO-Vergiftung)?',
      a: [
        'Sofort reinrennen und retten',
        'Eigenschutz! Bereich meiden, Feuerwehr rufen. CO ist geruchs- und unsichtbar!',
        'Lichtschalter betätigen',
        'Einatmen und prüfen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Rautek-Rettungsgriff?',
      a: [
        'Ein Griff zum Fixieren',
        'Ein Griff zur schonenden Schnellrettung einer Person aus einer Gefahrenzone (z.B. Auto)',
        'Ein Griff zum Beatmen',
        'Ein Griff zum Abbinden',
      ],
      correct: 1,
    },
    {
      q: 'Wie nimmst du einem verunfallten Motorradfahrer am sichersten den Helm ab?',
      a: [
        'Alleine und schnell',
        'Im Idealfall zu zweit, unter ständiger Zug-Stabilisierung der Halswirbelsäule',
        'Gar nicht',
        'Patienten bitten ihn selbst abzuziehen',
      ],
      correct: 1,
    },
    {
      q: 'Wie lauten die fünf "W-Fragen" beim Notruf?',
      a: [
        'Wo, Was, Wie viele, Welche, Warten auf Rückfragen',
        'Wer, Warum, Wann, Weshalb, Wohin',
        'Wo, Wann, Wer, Waffe, Wunde',
        'Wasser, Wärme, Wunde, Warten, Wagen',
      ],
      correct: 0,
    },
    {
      q: 'Welche Symptome können bei einem Herzinfarkt bei Frauen typisch, aber oft "verkannt" sein?',
      a: [
        'Nur Kopfschmerzen',
        'Übelkeit, Oberbauchbeschwerden, Rückenschmerzen, Müdigkeit',
        'Starkes Schwitzen am Fuß',
        'Hautausschlag',
      ],
      correct: 1,
    },
    {
      q: 'Was machst du bei einem Krampfanfall eines Kindes (Fieberkrampf)?',
      a: [
        'Kind festhalten',
        'Vor Verletzungen schützen, Kleidung lockern, kühlen, Notruf',
        'Etwas zu trinken geben',
        'Sofort beatmen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Pneumothorax"?',
      a: [
        'Ein gebrochener Arm',
        'Lufteintritt in den Pleuraspalt, Lunge kollabiert (lebensbedrohliche Atemnot)',
        'Eine Herzmuskelentzündung',
        'Eine Magenblutung',
      ],
      correct: 1,
    },
    {
      q: 'Wie kann ein Laie eine schwere Atemnot lindern?',
      a: [
        'Beengende Kleidung öffnen, Oberkörper hoch, frische Luft, beruhigen',
        'Hinlegen und Beine hoch',
        'Herzmassage beginnen',
        'Wasser zu trinken geben',
      ],
      correct: 0,
    },
    {
      q: 'Was tust du, wenn ein Zahn ausgeschlagen wurde?',
      a: [
        'Wegwerfen',
        'Zahn an der Krone anfassen und in eine Zahnrettungsbox (oder H-Milch) legen',
        'Zahn abwaschen und trocken lagern',
        'Zahn in Alkohol legen',
      ],
      correct: 1,
    },
    {
      q: 'Wann ist eine Atemkontrolle "normal"?',
      a: [
        'Wenn die Person hörbar röchelt',
        'Wenn 2-3 normale Atemzüge innerhalb von 10 Sekunden sichtbar/spürbar sind',
        'Wenn der Puls schlägt',
        'Wenn die Brust sich gar nicht hebt',
      ],
      correct: 1,
    },
    {
      q: 'Was tun bei Verletzungen im Bauchraum (z.B. Schnitt)?',
      a: [
        'Beine flach ausstrecken',
        'Beine anwinkeln (Bauchdeckenentspannung), Wunde steril abdecken, Notruf',
        'Viel trinken lassen',
        'Auf den Bauch drehen',
      ],
      correct: 1,
    },
    {
      q: 'Wie gehst du bei einem Schlangenbiss (in Deutschland extrem selten) vor?',
      a: [
        'Aussaugen',
        'Abbinden',
        'Bissstelle ruhig stellen, Patient nicht bewegen lassen, Notruf',
        'Einschneiden',
      ],
      correct: 2,
    },
    {
      q: 'Was ist der Unterschied zwischen Herzstillstand und Herzinfarkt?',
      a: [
        'Gibt keinen',
        'Herzinfarkt ist Durchblutungsstörung des Herzens, Herzstillstand ist der komplette Ausfall der Pumpfunktion',
        'Herzstillstand tut mehr weh',
        'Herzinfarkt muss nicht behandelt werden',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "AVPU"-Schema?',
      a: [
        'Ein Bewertungsschema für das Bewusstsein (Alert, Voice, Pain, Unresponsive)',
        'Eine Beatmungsform',
        'Ein Schmerzmittel',
        'Ein Pflaster',
      ],
      correct: 0,
    },
    {
      q: 'Warum soll man bei Erster Hilfe bei Unbekannten nach Möglichkeit Handschuhe tragen?',
      a: [
        'Weil es besser aussieht',
        'Um die Wunde nicht zu kühlen',
        'Eigenschutz vor Infektionen (z.B. HIV, Hepatitis) durch Blut/Körperflüssigkeiten',
        'Damit man keine Fingerabdrücke hinterlässt',
      ],
      correct: 2,
    },
    {
      q: 'Was versteht man unter der "Rückatmung" (z.B. bei Hyperventilation)?',
      a: [
        'Beatmung durch eine zweite Person',
        'Einatmen der eigenen Ausatemluft (z.B. aus einer Tüte) um CO2-Spiegel zu normalisieren',
        'Atem anhalten für 2 Minuten',
        'Schnelles Atmen',
      ],
      correct: 1,
    },
    {
      q: 'Wie nennt man die Seitenlage für Babys/Säuglinge?',
      a: [
        'Kutschersitz',
        'Bauchlage auf dem Unterarm des Helfers mit leicht hängendem Kopf (Fliegergriff-artig)',
        'Normale stabile Seitenlage',
        'Rückenlage',
      ],
      correct: 1,
    },
    {
      q: 'Was ist die absolute Kernbotschaft für Ersthelfer?',
      a: [
        'Man kann nichts falsch machen, außer man tut nichts.',
        'Erst helfen, wenn der Arzt da ist.',
        'Immer zuerst beatmen.',
        'Nur helfen, wenn man sich zu 100% sicher ist.',
      ],
      correct: 0,
    },
  ],
  Pflegetheorie: [
    {
      q: 'Aus welchen vier zentralen Begriffen besteht das Pflege-Metaparadigma?',
      a: [
        'Mensch, Umwelt, Gesundheit, Pflege',
        'Arzt, Patient, Krankheit, Heilung',
        'Körper, Geist, Seele, Gesellschaft',
        'Diagnose, Therapie, Pflege, Entlassung',
      ],
      correct: 0,
    },
    {
      q: 'Wer gilt als die Begründerin der modernen, professionellen Krankenpflege?',
      a: [
        'Liliane Juchli',
        'Florence Nightingale',
        'Agnes Karll',
        'Dorothea Orem',
      ],
      correct: 1,
    },
    {
      q: 'Welches Pflegemodell stammt von Dorothea Orem?',
      a: [
        'Interaktionsmodell',
        'ABEDL-Modell',
        'Selbstpflegedefizit-Modell',
        'Adaptionsmodell',
      ],
      correct: 2,
    },
    {
      q: 'Wie viele Lebensaktivitäten (LA) beschreibt das RLT-Modell (Roper, Logan, Tierney)?',
      a: ['10', '12', '13', '14'],
      correct: 1,
    },
    {
      q: 'Was ist das zentrale Konzept der Pflegetheorie von Hildegard Peplau?',
      a: [
        'Die 14 Grundbedürfnisse',
        'Die Interpersonale Beziehung in der Pflege',
        'Die transkulturelle Pflege',
        'Das Pflegesystem',
      ],
      correct: 1,
    },
    {
      q: 'Welche Pflegetheoretikerin formulierte die 14 Grundbedürfnisse des Menschen?',
      a: [
        'Martha Rogers',
        'Monika Krohwinkel',
        'Hildegard Peplau',
        'Virginia Henderson',
      ],
      correct: 3,
    },
    {
      q: 'Wofür steht die Abkürzung "AEDL" im Modell von Monika Krohwinkel?',
      a: [
        'Aktivitäten des täglichen Lebens',
        'Aktivitäten und existenzielle Erfahrungen des Lebens',
        'Allgemeine Erfassung des Lebens',
        'Aktionen und emotionale Dimensionen des Lebens',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht das "B" in der erweiterten Form ABEDL?',
      a: ['Beziehungen', 'Bewegung', 'Bedürfnisse', 'Bedeutung'],
      correct: 0,
    },
    {
      q: 'Welche Pflegetheoretikerin ist bekannt für das "Sunrise-Modell" (Transkulturelle Pflege)?',
      a: [
        'Jean Watson',
        'Rosemarie Rizzo Parse',
        'Madeleine Leininger',
        'Callista Roy',
      ],
      correct: 2,
    },
    {
      q: 'Was ist "Primary Nursing" (nach Marie Manthey)?',
      a: [
        'Die Erstversorgung im Notfall',
        'Ein Organisationsmodell: Eine Pflegekraft ist von Aufnahme bis Entlassung für die Pflegeplanung verantwortlich',
        'Grundpflege durch Hilfskräfte',
        'Pflege in der Kinderklinik',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Kern der Pflegetheorie von Jean Watson?',
      a: [
        'Das Selbstpflegedefizit',
        'Das Konzept des "Human Caring" (menschliche Zuwendung/Fürsorge)',
        'Die Systemtheorie',
        'Die 12 Lebensaktivitäten',
      ],
      correct: 1,
    },
    {
      q: 'Wie viele Schritte hat der klassische Pflegeprozess im deutschsprachigen Raum nach Fiechter und Meier?',
      a: ['4', '5', '6', '7'],
      correct: 2,
    },
    {
      q: 'Was ist der erste Schritt im 6-stufigen Pflegeprozess?',
      a: [
        'Pflegediagnose stellen',
        'Pflegeziele formulieren',
        'Informationssammlung (Assessment)',
        'Pflegemaßnahmen planen',
      ],
      correct: 2,
    },
    {
      q: 'Was ist ein Pflegekonzept?',
      a: [
        'Ein abstrakter Begriff für ein Pflegephänomen (z.B. Schmerz, Angst, Dekubitus)',
        'Ein Bauplan für ein Krankenhaus',
        'Ein Arbeitsvertrag',
        'Ein ärztliches Rezept',
      ],
      correct: 0,
    },
    {
      q: 'Womit beschäftigt sich die NANDA primär?',
      a: [
        'Gehaltsverhandlungen',
        'Klassifikation von Pflegediagnosen',
        'Entwicklung von Medikamenten',
        'Ausbildung von Ärzten',
      ],
      correct: 1,
    },
    {
      q: 'Wie viele "Pflegesysteme" beschreibt Dorothea Orem, wenn ein Selbstpflegedefizit vorliegt?',
      a: [
        'Zwei',
        'Drei (vollständig kompensatorisch, teilweise komp., unterstützend-erzieherisch)',
        'Fünf',
        'Zehn',
      ],
      correct: 1,
    },
    {
      q: 'Wer verfasste das berühmte Buch "Notes on Nursing" (Bemerkungen zur Krankenpflege)?',
      a: [
        'Virginia Henderson',
        'Liliane Juchli',
        'Florence Nightingale',
        'Agnes Karll',
      ],
      correct: 2,
    },
    {
      q: 'Was ist der Unterschied zwischen einem Pflegephänomen und einer Pflegediagnose?',
      a: [
        'Es gibt keinen',
        'Phänomen ist die Beobachtung, Diagnose ist die klinische Beurteilung dieser Beobachtung',
        'Der Arzt stellt die Diagnose, die Pflegekraft das Phänomen',
        'Phänomene sind immer positiv, Diagnosen negativ',
      ],
      correct: 1,
    },
    {
      q: 'Wie definiert Dorothea Orem "Selbstpflege"?',
      a: [
        'Aktivitäten, die ein Mensch zur Erhaltung von Leben, Gesundheit und Wohlbefinden selbst initiiert und durchführt',
        'Pflege durch Angehörige',
        'Die Körperpflege am Morgen',
        'Sportliche Betätigung',
      ],
      correct: 0,
    },
    {
      q: 'Zu welchem Theorie-Typ gehört das Modell von Hildegard Peplau?',
      a: [
        'Bedürfnistheorie',
        'Interaktionstheorie',
        'Ergebnistheorie',
        'Systemtheorie',
      ],
      correct: 1,
    },
    {
      q: 'Was beeinflusst laut dem RLT-Modell (Roper, Logan, Tierney) die Ausführung der Lebensaktivitäten?',
      a: [
        'Nur das Alter',
        'Fünf Faktoren: Biologische, psychologische, soziokulturelle, umgebungsabhängige und wirtschaftspolitische',
        'Nur die ärztliche Diagnose',
        'Nur das Krankenhausumfeld',
      ],
      correct: 1,
    },
    {
      q: 'Welches ist das 13. AEDL nach Monika Krohwinkel, das ihrem Modell die besondere Tiefe verleiht?',
      a: [
        'Sich pflegen können',
        'Essen und Trinken',
        'Mit existenziellen Erfahrungen des Lebens umgehen',
        'Atmen',
      ],
      correct: 2,
    },
    {
      q: 'Peplau beschreibt vier Phasen in der Beziehung zwischen Pflegekraft und Patient. Welche gehört NICHT dazu?',
      a: [
        'Orientierungsphase',
        'Identifikationsphase',
        'Nutzungsphase',
        'Evaluationsphase',
      ],
      correct: 3,
    },
    {
      q: 'Wer entwickelte das "Adaptionsmodell"?',
      a: ['Callista Roy', 'Nancy Roper', 'Dorothea Orem', 'Martha Rogers'],
      correct: 0,
    },
    {
      q: 'Was steht im Zentrum von Roys Adaptionsmodell?',
      a: [
        'Interaktion',
        'Die Anpassung (Adaption) des Menschen an Umweltreize',
        'Die Grundpflege',
        'Transkulturelle Unterschiede',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Risiko-Pflegediagnose"?',
      a: [
        'Ein Problem ist bereits vorhanden',
        'Es liegen Risikofaktoren vor, das Problem ist aber noch nicht eingetreten',
        'Eine ärztliche Diagnose mit hohem Risiko',
        'Eine Fehldiagnose',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht das "R" im PESR-Format der Pflegediagnosen?',
      a: ['Risiko', 'Ressourcen', 'Reaktion', 'Rehabilitation'],
      correct: 1,
    },
    {
      q: 'Hildegard Peplau beschreibt verschiedene Rollen der Pflegekraft (z.B. Lehrende, Beraterin). Welche Rolle gehört NICHT dazu?',
      a: [
        'Die Rolle der Fremden',
        'Die Rolle der Führenden',
        'Die Rolle der Diktatorin',
        'Die Rolle der Ersatzperson',
      ],
      correct: 2,
    },
    {
      q: 'Welche bekannte psychologische Theorie bildet eine wichtige Grundlage für viele pflegerische Bedürfnistheorien?',
      a: [
        'Die Relativitätstheorie',
        'Die Bedürfnispyramide nach Maslow',
        'Die Psychoanalyse nach Freud',
        'Der Behaviorismus',
      ],
      correct: 1,
    },
    {
      q: 'Welche der folgenden Teiltheorien gehört NICHT zur großen Pflegetheorie von Dorothea Orem?',
      a: [
        'Theorie der Selbstpflege',
        'Theorie des Selbstpflegedefizits',
        'Theorie der transkulturellen Pflege',
        'Theorie der Pflegesysteme',
      ],
      correct: 2,
    },
    {
      q: 'Was bedeutet "Dependenzpflege" nach Orem?',
      a: [
        'Pflege von Demenzkranken',
        'Pflege, die eine abhängige Person von Laien (z.B. Eltern für ihr Kind) erhält',
        'Pflege auf der Intensivstation',
        'Pflege durch examinierte Kräfte',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter einem "Assessment" in der Pflege?',
      a: [
        'Die Evaluation',
        'Die strukturierte Informationssammlung (z.B. durch Skalen und Interviews)',
        'Das Schreiben der Pflegeplanung',
        'Die Durchführung der Körperpflege',
      ],
      correct: 1,
    },
    {
      q: 'Welche Theoretikerin entwickelte die Theorie des "Human Becoming" (Menschwerdung)?',
      a: [
        'Virginia Henderson',
        'Hildegard Peplau',
        'Rosemarie Rizzo Parse',
        'Monika Krohwinkel',
      ],
      correct: 2,
    },
    {
      q: 'In welche Kategorie von Pflegetheorien lässt sich das Modell von Monika Krohwinkel einordnen?',
      a: [
        'Interaktionstheorie',
        'Bedürfnistheorie',
        'Pflegeergebnistheorie',
        'Physikalische Theorie',
      ],
      correct: 1,
    },
    {
      q: 'Wie definiert die WHO den Begriff Gesundheit?',
      a: [
        'Das Fehlen von Krankheit und Gebrechen',
        'Die Fähigkeit, 8 Stunden zu arbeiten',
        'Ein Zustand des völligen körperlichen, geistigen und sozialen Wohlbefindens',
        'Gute Blutwerte',
      ],
      correct: 2,
    },
    {
      q: 'Wer prägte das Konzept der "Salutogenese"?',
      a: [
        'Aaron Antonovsky',
        'Sigmund Freud',
        'Carl Rogers',
        'Friedemann Schulz von Thun',
      ],
      correct: 0,
    },
    {
      q: 'Das "Kohärenzgefühl" (Salutogenese) besteht aus Verstehbarkeit, Handhabbarkeit und...?',
      a: [
        'Sinnhaftigkeit (Bedeutsamkeit)',
        'Sauberkeit',
        'Sicherheit',
        'Schnelligkeit',
      ],
      correct: 0,
    },
    {
      q: 'Was ist ein "Makromodell" (Grand Theory) in der Pflegetheorie?',
      a: [
        'Eine sehr kleine, spezifische Theorie',
        'Eine umfassende Theorie mit hohem Abstraktionsgrad',
        'Ein Modell für Mikroorganismen',
        'Ein Organisationsplan für die Station',
      ],
      correct: 1,
    },
    {
      q: 'Welche Pflege-Theoretikerin hatte einen extrem starken Fokus auf die psychiatrische Pflege?',
      a: [
        'Florence Nightingale',
        'Hildegard Peplau',
        'Dorothea Orem',
        'Nancy Roper',
      ],
      correct: 1,
    },
    {
      q: 'Das RLT-Modell beschreibt eine "Lebensspanne". Von wann bis wann reicht diese laut den Autorinnen?',
      a: [
        'Von der Geburt bis zur Einschulung',
        'Vom 18. bis zum 65. Lebensjahr',
        'Von der Empfängnis bis zum Tod',
        'Vom Krankenhausaufenthalt bis zur Entlassung',
      ],
      correct: 2,
    },
    {
      q: 'Was ist die Kernaussage von Florence Nightingales Theorie?',
      a: [
        'Pflege ist nur Beziehungsarbeit',
        'Die Umwelt (Licht, Luft, Sauberkeit) heilt den Patienten',
        'Menschen heilen sich selbst durch Selbstpflege',
        'Pflege ist reine Assistenz des Arztes',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Verdachts-Pflegediagnose"?',
      a: [
        'Ein Verdacht auf einen ärztlichen Fehler',
        'Es gibt Anzeichen für ein Problem, aber es fehlen noch Daten zur Bestätigung',
        'Eine Diagnose, die der Patient verheimlicht',
        'Ein Verdacht auf Diebstahl',
      ],
      correct: 1,
    },
    {
      q: 'Wie lautet der 6. Schritt im Pflegeprozess (nach Fiechter/Meier)?',
      a: [
        'Informationssammlung',
        'Pflegeziele setzen',
        'Evaluation (Überprüfung der Zielerreichung)',
        'Pflegemaßnahmen durchführen',
      ],
      correct: 2,
    },
    {
      q: 'Was bedeutet "EBN" (Evidence-based Nursing)?',
      a: [
        'Erfahrungsbasierte Notfallpflege',
        'Pflegepraxis, die auf wissenschaftlichen Beweisen (Studien) basiert',
        'Ein neues Dokumentationssystem',
        'Ein Medikamenten-Standard',
      ],
      correct: 1,
    },
    {
      q: 'Welcher Schritt fehlt im 4-stufigen Pflegeprozess (WHO-Modell) im Vergleich zum 6-stufigen?',
      a: [
        'Die Evaluation',
        'Die Pflegediagnose und Zielsetzung sind im 4-stufigen oft als "Planung" zusammengefasst',
        'Die Durchführung',
        'Das Assessment',
      ],
      correct: 1,
    },
    {
      q: 'Wer formulierte: "Die einzigartige Aufgabe der Pflegenden ist es, dem kranken oder gesunden Menschen bei jenen Tätigkeiten zu helfen..."?',
      a: ['Virginia Henderson', 'Orem', 'Krohwinkel', 'Leininger'],
      correct: 0,
    },
    {
      q: 'Was bedeutet "Deduktion" in der Wissenschaft?',
      a: [
        'Vom Allgemeinen auf das Besondere schließen',
        'Vom Besonderen auf das Allgemeine schließen',
        'Raten',
        'Beobachten',
      ],
      correct: 0,
    },
    {
      q: 'Was bedeutet "Induktion" in der Wissenschaft?',
      a: [
        'Vom Allgemeinen auf das Besondere schließen',
        'Vom Besonderen (Einzelfall) auf das Allgemeine schließen',
        'Beweisen durch Mathematik',
        'Abschreiben',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Ziel der Pflegetheoriebildung?',
      a: [
        'Pflegekräften das Leben schwer machen',
        'Die Pflegepraxis zu begründen, professionell zu machen und Pflegequalität zu sichern',
        'Ärzte zu kontrollieren',
        'Geld zu sparen',
      ],
      correct: 1,
    },
    {
      q: 'Welches ist KEIN ABEDL nach Krohwinkel?',
      a: [
        'Ruhen und Schlafen',
        'Sich kleiden',
        'Kommunizieren',
        'Autofahren können',
      ],
      correct: 3,
    },
    {
      q: 'Was bedeutet die Abkürzung NANDA?',
      a: [
        'National Association of Nursing Data',
        'North American Nursing Diagnosis Association',
        'Nurses And National Doctors Association',
        'New Approach to Nursing Diagnoses',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Ziel der NIC (Nursing Interventions Classification)?',
      a: [
        'Abrechnung ärztlicher Leistungen',
        'Klassifikation von Pflegediagnosen',
        'Standardisierte Klassifikation von Pflegeinterventionen (Maßnahmen)',
        'Erfassung von Krankheiten',
      ],
      correct: 2,
    },
    {
      q: 'Was klassifiziert die NOC (Nursing Outcomes Classification)?',
      a: [
        'Pflegeergebnisse (Outcomes)',
        'Medikamente',
        'Patientenzufriedenheit',
        'Pflegefehler',
      ],
      correct: 0,
    },
    {
      q: 'Welches ist KEIN Prinzip der biomedizinischen Ethik nach Beauchamp und Childress?',
      a: [
        'Respekt vor der Autonomie',
        'Pünktlichkeit und Ordnung',
        'Gutes tun (Benefizienz)',
        'Nicht schaden (Non-Malefizienz)',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Non-Malefizienz" in der Pflegeethik?',
      a: [
        'Die Pflicht, Gutes zu tun',
        'Das Prinzip der Gerechtigkeit',
        'Die Schweigepflicht',
        'Das Prinzip des Nicht-Schadens',
      ],
      correct: 3,
    },
    {
      q: 'Was bedeutet "Benefizienz" in der Pflegeethik?',
      a: [
        'Das Prinzip der Fürsorge / Gutes tun',
        'Das Prinzip der Autonomie',
        'Das Einhalten von Gesetzen',
        'Das Vermeiden von Schmerz',
      ],
      correct: 0,
    },
    {
      q: 'Wofür steht die Abkürzung ICN?',
      a: [
        'International Council of Nurses (Weltbund der Krankenschwestern und Krankenpfleger)',
        'Intensive Care Network',
        'International Care Needs',
        'Institute of Clinical Nursing',
      ],
      correct: 0,
    },
    {
      q: 'Was ist ein "Ethik-Konsil" im Krankenhaus?',
      a: [
        'Ein Gericht für Ärzte',
        'Ein Beratungsgremium zur Lösungsfindung bei schweren ethischen Konfliktsituationen',
        'Eine Fortbildung für Pflegekräfte',
        'Ein Treffen der Seelsorger',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der ICN-Ethikkodex?',
      a: [
        'Ein Gehaltstarif',
        'Ein Dienstplanmodell',
        'Ein international anerkannter Leitfaden für ethisches Handeln in der Pflege',
        'Ein Gesetzbuch',
      ],
      correct: 2,
    },
    {
      q: 'Welche Einrichtung entwickelt in Deutschland die "Nationalen Expertenstandards"?',
      a: [
        'Das RKI',
        'Das DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege)',
        'Die Ärztekammer',
        'Das Gesundheitsministerium',
      ],
      correct: 1,
    },
    {
      q: 'Welcher Expertenstandard des DNQP existiert NICHT?',
      a: [
        'Sturzprophylaxe',
        'Schmerzmanagement',
        'Dekubitusprophylaxe in der Pflege',
        'Kopfschmerzprophylaxe',
      ],
      correct: 3,
    },
    {
      q: 'Was ist das Ziel des Expertenstandards "Erhaltung und Förderung der Mobilität"?',
      a: [
        'Patienten im Bett zu halten',
        'Stürze durch Fixierung zu vermeiden',
        'Die Eigenbewegung und Selbstständigkeit der Pflegebedürftigen zu erhalten',
        'Kosten für Rollstühle zu sparen',
      ],
      correct: 2,
    },
    {
      q: 'Was misst der "Barthel-Index"?',
      a: [
        'Das Dekubitusrisiko',
        'Die Schmerzintensität',
        'Die Alltagsfähigkeiten (ADL) und den Grad der Pflegebedürftigkeit',
        'Die Sturzgefahr',
      ],
      correct: 2,
    },
    {
      q: 'Welches Instrument wird häufig zur Einschätzung des Dekubitusrisikos verwendet?',
      a: [
        'Braden-Skala',
        'Glasgow Coma Scale',
        'Mini-Mental-Status-Test',
        'Apgar-Score',
      ],
      correct: 0,
    },
    {
      q: 'Wofür wird die Mini-Mental-State-Examination (MMSE) genutzt?',
      a: [
        'Zur Messung des Blutdrucks',
        'Zur Einschätzung von kognitiven Einschränkungen (z.B. bei Demenz)',
        'Zur Messung der Muskelkraft',
        'Zur Ernährungsbewertung',
      ],
      correct: 1,
    },
    {
      q: 'Welche Assessmentart wird standardmäßig bei der Aufnahme eines Patienten durchgeführt?',
      a: [
        'Fokusassessment',
        'Notfallassessment',
        'Basisassessment',
        'Screening',
      ],
      correct: 2,
    },
    {
      q: 'Was ist ein "Fokusassessment"?',
      a: [
        'Eine kurze Ganzkörperuntersuchung',
        'Eine detaillierte Datenerhebung zu einem bereits identifizierten, spezifischen Pflegeproblem',
        'Ein Test der Augen',
        'Die Erfassung der Biografie',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Unterschied zwischen objektiven und subjektiven Daten im Assessment?',
      a: [
        'Objektiv = vom Arzt, Subjektiv = von der Pflegekraft',
        'Es gibt keinen Unterschied',
        'Objektiv = messbar/beobachtbar (z.B. RR 120/80), Subjektiv = vom Patienten geäußert (z.B. "Mir ist übel")',
        'Objektiv ist immer falsch',
      ],
      correct: 2,
    },
    {
      q: 'Was bedeutet "RCT" in der Pflegeforschung?',
      a: [
        'Randomized Controlled Trial (Randomisierte kontrollierte Studie)',
        'Real Care Testing',
        'Research Center Technology',
        'Registered Clinical Trial',
      ],
      correct: 0,
    },
    {
      q: 'Was gilt als das höchste Evidenzlevel in der Wissenschaft?',
      a: [
        'Expertenmeinung eines Chefarztes',
        'Eine einzelne Fallstudie',
        'Systematische Reviews und Meta-Analysen (Zusammenfassung vieler RCTs)',
        'Ein Zeitungsartikel',
      ],
      correct: 2,
    },
    {
      q: 'Was bedeutet "Randomisierung" in einer Interventionsstudie?',
      a: [
        'Zufälliges Raten der Ergebnisse',
        'Zufällige Zuteilung der Versuchspersonen in Kontroll- und Interventionsgruppe',
        'Auswahl nur gesunder Patienten',
        'Das Weglassen von Daten',
      ],
      correct: 1,
    },
    {
      q: 'Was ist die "Kontrollgruppe" in einer wissenschaftlichen Studie?',
      a: [
        'Die Gruppe der Forscher, die alles kontrolliert',
        'Die Gruppe der Patienten, die die neue Therapie erhält',
        'Die Gruppe der Patienten, die die Standardtherapie oder ein Placebo erhält',
        'Die Geldgeber der Studie',
      ],
      correct: 2,
    },
    {
      q: 'Was ist eine "Hypothese" in der Wissenschaft?',
      a: [
        'Ein bewiesener Fakt',
        'Eine wissenschaftlich begründete Annahme, die durch eine Studie überprüft werden soll',
        'Eine Krankheit',
        'Ein Instrument zur Blutabnahme',
      ],
      correct: 1,
    },
    {
      q: 'Mit welcher Forschungsfrage beschäftigt sich die "Phänomenologie" (qualitative Forschung)?',
      a: [
        'Wie oft tritt Krankheit X auf?',
        'Welches Medikament wirkt schneller?',
        'Wie erleben Menschen ein bestimmtes Phänomen (z.B. chronischen Schmerz)?',
        'Wie viel kostet die Pflege?',
      ],
      correct: 2,
    },
    {
      q: 'Was ist das Ziel der "Grounded Theory" (qualitative Forschung)?',
      a: [
        'Eine neue Theorie aus den gesammelten Daten ("vom Boden auf") zu entwickeln',
        'Hypothesen statistisch zu beweisen',
        'Medikamente zu testen',
        'Patienten zu erden',
      ],
      correct: 0,
    },
    {
      q: 'Was ist eine "Stichprobe" (Sample) in einer Studie?',
      a: [
        'Eine Blutabnahme',
        'Eine Teilmenge der Grundgesamtheit (Population), die an der Studie teilnimmt',
        'Ein Fehler in der Untersuchung',
        'Der Autor der Studie',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter "Signifikanz" in der quantitativen Forschung?',
      a: [
        'Dass die Studie sehr wichtig ist',
        'Die statistische Wahrscheinlichkeit, dass ein Ergebnis NICHT auf Zufall beruht (z.B. p < 0.05)',
        'Dass die Studie viel Geld gekostet hat',
        'Die Anzahl der Teilnehmer',
      ],
      correct: 1,
    },
    {
      q: 'Dorothea Orem unterscheidet drei Arten von Selbstpflegeerfordernissen. Welche gehört NICHT dazu?',
      a: [
        'Universelle Selbstpflegeerfordernisse',
        'Entwicklungsbedingte Selbstpflegeerfordernisse',
        'Finanzielle Selbstpflegeerfordernisse',
        'Gesundheitsbedingte Selbstpflegeerfordernisse',
      ],
      correct: 2,
    },
    {
      q: 'Was sind "Universelle Selbstpflegeerfordernisse" nach Orem?',
      a: [
        'Bedürfnisse, die nur im Universum existieren',
        'Grundbedürfnisse aller Menschen (z.B. ausreichende Zufuhr von Luft, Wasser, Nahrung)',
        'Bedürfnisse nur bei Krankheit',
        'Bedürfnisse nach Luxus',
      ],
      correct: 1,
    },
    {
      q: 'Wie lautet die Kernfrage der Transkulturellen Pflege nach Madeleine Leininger?',
      a: [
        'Wie können Pflegekräfte Fremdsprachen lernen?',
        'Wie können kulturelle Werte und Überzeugungen des Patienten in die Pflege integriert werden?',
        'Wie können Patienten unsere Kultur lernen?',
        'Wie rechnet man Dolmetscher ab?',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das "Adaptionsmodell" von Callista Roy?',
      a: [
        'Ein Modell, das den Menschen als biopsychosoziales System sieht, das sich an Umweltreize anpassen muss',
        'Ein Modell für die Anpassung von Betten',
        'Ein Modell für Kinderpflege',
        'Ein Modell für den Pflegeprozess',
      ],
      correct: 0,
    },
    {
      q: 'Callista Roy beschreibt vier "Anpassungsmodi". Welcher gehört NICHT dazu?',
      a: [
        'Physiologischer Modus',
        'Selbstkonzept-Modus',
        'Automatischer Modus',
        'Rollenfunktions-Modus',
      ],
      correct: 2,
    },
    {
      q: 'Wer war Nancy Roper?',
      a: [
        'Eine Ärztin',
        'Die Erfinderin des Thermometers',
        'Eine schottische Pflegetheoretikerin (Mitentwicklerin der Lebensaktivitäten)',
        'Eine Politikerin',
      ],
      correct: 2,
    },
    {
      q: 'Was ist "Hermeneutik" in der qualitativen Forschung?',
      a: [
        'Das Zählen von Wörtern',
        'Die Lehre vom Verstehen und Interpretieren von Texten und Sinnzusammenhängen',
        'Die Erstellung von Diagrammen',
        'Ein physikalisches Gesetz',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht die "PIKE"-Methode (oft auch PIKO) im Bereich EBN?',
      a: [
        'Patienten, Intrigen, Konflikte, Eskalation',
        'Zur präzisen Formulierung einer klinischen Fragestellung (Patient, Intervention, Kontrollintervention, Ergebnis)',
        'Pflege, Indikation, Kontrolle, Evaluation',
        'Problem, Ist-Zustand, Krankheitsbild, Ergebnis',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Empowerment" in der Pflege?',
      a: [
        'Den Patienten ignorieren',
        'Befähigung und Stärkung des Patienten, um Autonomie und Selbstbestimmung zu fördern',
        'Den Patienten fixieren',
        'Die Macht der Pflegekraft stärken',
      ],
      correct: 1,
    },
    {
      q: 'Was beschreibt der Begriff "Compliance"?',
      a: [
        'Die Therapietreue (wie genau hält sich der Patient an die ärztliche/pflegerische Vorgabe)',
        'Die Beschwerde eines Patienten',
        'Eine Komplikation nach der OP',
        'Die Entlassung',
      ],
      correct: 0,
    },
    {
      q: 'Worin unterscheidet sich "Adhärenz" von "Compliance"?',
      a: [
        'Adhärenz meint die GEMEINSAME Zielvereinbarung (auf Augenhöhe), Compliance eher das brave Befolgen',
        'Compliance ist modern, Adhärenz veraltet',
        'Adhärenz gilt nur für Medikamente',
        'Es gibt keinen Unterschied',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das "Leitbild" einer Pflegeeinrichtung?',
      a: [
        'Ein Foto des Chefs',
        'Eine schriftliche Erklärung der Philosophie, Werte und Ziele der Einrichtung',
        'Der Speiseplan',
        'Die Dienstkleidung',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter "Pflegequalität"?',
      a: [
        'Nur die Freundlichkeit der Pflegekräfte',
        'Den Grad der Übereinstimmung zwischen der tatsächlichen Pflege und den festgelegten Standards/Kriterien',
        'Die Größe der Patientenzimmer',
        'Die Schnelligkeit der Pflege',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Pflegestandard"?',
      a: [
        'Ein Pfleger, der Standardaufgaben übernimmt',
        'Eine allgemein gültige, professionell abgestimmte Richtlinie zur Lösung eines bestimmten Pflegeproblems',
        'Das Mindestgehalt',
        'Das durchschnittliche Alter der Patienten',
      ],
      correct: 1,
    },
    {
      q: 'Wer evaluierte den Pflegeprozess und prägte ihn im deutschsprachigen Raum (6 Schritte) maßgeblich mit?',
      a: [
        'Fiechter und Meier',
        'Henderson und Orem',
        'Nightingale und Karll',
        'Roper und Logan',
      ],
      correct: 0,
    },
    {
      q: 'Was ist eine "Retrospektive Studie"?',
      a: [
        'Eine Studie, die in die Zukunft blickt',
        'Eine Studie, die rückblickend bereits vorhandene Daten analysiert',
        'Eine Studie ohne Patienten',
        'Eine Studie im Weltall',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Prospektive Studie"?',
      a: [
        'Eine Studie, die jetzt geplant wird und Daten in der Zukunft sammelt',
        'Eine Studie, die alte Akten liest',
        'Eine Studie, die fehlgeschlagen ist',
        'Eine Studie, die nur eine Person testet',
      ],
      correct: 0,
    },
    {
      q: 'Wofür steht ENP in der Pflegeklassifikation?',
      a: [
        'European Nursing care Pathways (Europäische Pflegeklassifikation für Diagnosen, Ziele und Maßnahmen)',
        'English Nursing Practice',
        'Emergency Nursing Protocol',
        'Evaluation of Nursing Personnel',
      ],
      correct: 0,
    },
    {
      q: 'Was bedeutet das Prinzip der "Gerechtigkeit" (Justice) in der Pflegeethik?',
      a: [
        'Pflegekräfte bekommen mehr Geld',
        'Faire und gleiche Verteilung von Gesundheitsressourcen und Behandlungen',
        'Der Chefarzt entscheidet alles',
        'Patienten dürfen Pfleger verurteilen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Ziel des "Discharge Management" (Entlassungsmanagement)?',
      a: [
        'Den Patienten schnell loszuwerden',
        'Einen nahtlosen und sicheren Übergang des Patienten vom Krankenhaus in die nächste Versorgungsform zu gewährleisten',
        'Geld zu sparen',
        'Betten zu reinigen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Pflegeleitlinie"?',
      a: [
        'Ein Strich auf dem Boden',
        'Systematisch entwickelte Entscheidungshilfen für angemessenes Vorgehen bei speziellen Gesundheitsproblemen',
        'Ein Dienstplan',
        'Ein Gesetz',
      ],
      correct: 1,
    },
    {
      q: 'Warum ist Pflegewissenschaft für den Berufsstand so wichtig?',
      a: [
        'Damit Pflegekräfte studieren können',
        'Um ärztliche Aufgaben zu übernehmen',
        'Um Pflegehandlungen theoretisch und wissenschaftlich zu begründen und die Professionalisierung voranzutreiben',
        'Um weniger am Patienten arbeiten zu müssen',
      ],
      correct: 2,
    },
    {
      q: 'Was bedeutet "Pflegebedürftigkeit" im Sinne von Orem?',
      a: [
        'Wenn der Patient klingelt',
        'Ein Zustand, in dem der Selbstpflegebedarf die Selbstpflegekompetenz übersteigt (Selbstpflegedefizit)',
        'Wenn man über 80 Jahre alt ist',
        'Wenn man im Krankenhaus liegt',
      ],
      correct: 1,
    },
  ],
  'Kommunikation&Beratung': [
    {
      q: 'Wer prägte den Satz "Man kann nicht nicht kommunizieren"?',
      a: [
        'Friedemann Schulz von Thun',
        'Paul Watzlawick',
        'Carl Rogers',
        'Sigmund Freud',
      ],
      correct: 1,
    },
    {
      q: 'Was besagt das 2. Axiom von Watzlawick?',
      a: [
        'Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt',
        'Kommunikation ist immer symmetrisch',
        'Kommunikation ist digital und analog',
        'Kommunikation ist immer asymmetrisch',
      ],
      correct: 0,
    },
    {
      q: 'Wie nennt Watzlawick eine Kommunikation, die auf Gleichheit der Partner beruht?',
      a: [
        'Komplementäre Kommunikation',
        'Symmetrische Kommunikation',
        'Paradoxe Kommunikation',
        'Kongruente Kommunikation',
      ],
      correct: 1,
    },
    {
      q: 'Wie nennt Watzlawick eine Kommunikation, die auf Unterschiedlichkeit (z.B. Arzt - Patient) beruht?',
      a: [
        'Symmetrische Kommunikation',
        'Kongruente Kommunikation',
        'Metakommunikation',
        'Komplementäre Kommunikation',
      ],
      correct: 3,
    },
    {
      q: 'Was versteht man in der Kommunikationspsychologie unter "Metakommunikation"?',
      a: [
        'Kommunikation ohne Worte',
        'Das Kommunizieren über die Kommunikation (Gespräch über das Gespräch)',
        'Kommunikation mit Demenzkranken',
        'Schriftliche Kommunikation',
      ],
      correct: 1,
    },
    {
      q: 'Wer entwickelte das Kommunikationsquadrat (Vier-Ohren-Modell)?',
      a: [
        'Paul Watzlawick',
        'Naomi Feil',
        'Friedemann Schulz von Thun',
        'Carl Rogers',
      ],
      correct: 2,
    },
    {
      q: 'Welche vier Seiten hat eine Nachricht nach Schulz von Thun?',
      a: [
        'Sender, Empfänger, Kanal, Medium',
        'Sachinhalt, Selbstoffenbarung, Beziehung, Appell',
        'Wahrheit, Lüge, Gefühl, Verstand',
        'Worte, Mimik, Gestik, Haltung',
      ],
      correct: 1,
    },
    {
      q: 'Mit welchem "Ohr" (Schulz von Thun) hört der Empfänger, wenn er sich fragt: "Wie redet der eigentlich mit mir?"',
      a: ['Sachohr', 'Appellohr', 'Beziehungsohr', 'Selbstoffenbarungsohr'],
      correct: 2,
    },
    {
      q: 'Mit welchem "Ohr" fragt sich der Empfänger: "Was will er, dass ich tue?"',
      a: ['Sachohr', 'Beziehungsohr', 'Selbstoffenbarungsohr', 'Appellohr'],
      correct: 3,
    },
    {
      q: 'Was ist "kongruente Kommunikation"?',
      a: [
        'Das Gesagte (verbal) und die Körpersprache (nonverbal) stimmen überein',
        'Man redet aneinander vorbei',
        'Man spricht besonders laut',
        'Man nutzt nur Fachbegriffe',
      ],
      correct: 0,
    },
    {
      q: 'Welche drei Grundhaltungen fordert Carl Rogers in der klientenzentrierten Gesprächsführung?',
      a: [
        'Strenge, Distanz, Fachwissen',
        'Empathie, Akzeptanz (Wertschätzung) und Kongruenz (Echtheit)',
        'Mitleid, Sympathie, Autorität',
        'Schnelligkeit, Effizienz, Zielorientierung',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Empathie" nach Carl Rogers?',
      a: [
        'Mit dem Patienten weinen (Mitleid)',
        'Einfühlendes Verstehen der Welt des anderen, ohne sich darin zu verlieren',
        'Dem Patienten immer recht geben',
        'Dem Patienten Ratschläge erteilen',
      ],
      correct: 1,
    },
    {
      q: 'Welche Fragetechnik eignet sich am besten, um ein Gespräch zu eröffnen und den Patienten erzählen zu lassen?',
      a: [
        'Geschlossene Fragen',
        'Suggestivfragen',
        'Offene Fragen (W-Fragen)',
        'Alternativfragen',
      ],
      correct: 2,
    },
    {
      q: 'Was ist eine "Suggestivfrage"?',
      a: [
        'Eine Frage, die nur mit Ja/Nein beantwortet werden kann',
        'Eine Frage, die dem Befragten die Antwort schon in den Mund legt',
        'Eine Frage nach der Uhrzeit',
        'Eine Frage, die offen formuliert ist',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter "Paraphrasieren" beim aktiven Zuhören?',
      a: [
        'Das genaue Nachsprechen jedes Wortes',
        'Das Zusammenfassen und Wiederholen der sachlichen Aussage mit eigenen Worten',
        'Das Analysieren der Körpersprache',
        'Dem anderen ins Wort fallen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das Ziel des "Verbalisierens emotionaler Erlebnisinhalte" beim aktiven Zuhören?',
      a: [
        'Den Patienten zum Weinen zu bringen',
        'Heraushören und Aussprechen der Gefühle des Gegenübers ("Sie wirken sehr wütend darüber...")',
        'Über eigene Gefühle sprechen',
        'Das Thema wechseln',
      ],
      correct: 1,
    },
    {
      q: 'Was sind "Ich-Botschaften"?',
      a: [
        'Egoistische Aussagen',
        'Aussagen, in denen man eigene Gefühle und Bedürfnisse beschreibt, ohne den anderen anzugreifen',
        'Aussagen, die mit "Ich bin der Chef" beginnen',
        'Vorwürfe',
      ],
      correct: 1,
    },
    {
      q: 'Welche Aussage ist ein Beispiel für eine Killerphrase?',
      a: [
        '"Das haben wir hier schon immer so gemacht!"',
        '"Können Sie das genauer erklären?"',
        '"Ich verstehe, dass Sie verärgert sind."',
        '"Lassen Sie uns gemeinsam eine Lösung finden."',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das "Eisbergmodell" der Kommunikation?',
      a: [
        'Ein Modell für Schiffsrettung',
        'Ein Modell, das besagt, dass nur 20% der Kommunikation sichtbar (Sachebene) und 80% unsichtbar (Beziehungsebene) sind',
        'Ein Modell zur Temperaturmessung',
        'Ein Modell für Konflikte im Winter',
      ],
      correct: 1,
    },
    {
      q: 'Was umfasst die "nonverbale Kommunikation"?',
      a: [
        'Wörter und Sätze',
        'Stimmlage und Lautstärke',
        'Mimik, Gestik, Blickkontakt und Körperhaltung',
        'Schriftliche Nachrichten',
      ],
      correct: 2,
    },
    {
      q: 'Was umfasst die "paraverbale Kommunikation"?',
      a: [
        'Körpersprache',
        'Stimmlage, Sprechtempo, Lautstärke und Pausen',
        'Den Inhalt der Worte',
        'Den Abstand zwischen den Gesprächspartnern',
      ],
      correct: 1,
    },
    {
      q: 'Was beschreibt die "Proxemik" in der Kommunikation?',
      a: [
        'Das räumliche Distanzverhalten (Intim-, Privat-, Gesellschaftsdistanz)',
        'Die Mimik',
        'Das Sprechtempo',
        'Die Wortwahl',
      ],
      correct: 0,
    },
    {
      q: 'Wie groß ist in unserem Kulturkreis etwa die "Intimdistanz"?',
      a: ['Bis ca. 50 cm', '1 bis 2 Meter', 'Über 3 Meter', 'Gibt es nicht'],
      correct: 0,
    },
    {
      q: 'Welche Regel gilt für ein professionelles Feedback?',
      a: [
        'Es sollte bewertend und anklagend sein',
        'Es sollte nur vor versammelter Mannschaft gegeben werden',
        'Es sollte beschreibend, konkret, zeitnah und ich-bezogen sein',
        'Es sollte nur schriftlich erfolgen',
      ],
      correct: 2,
    },
    {
      q: 'Was beschreibt das "Johari-Fenster"?',
      a: [
        'Ein Fenster im Isolationszimmer',
        'Die bewussten und unbewussten Persönlichkeits- und Verhaltensmerkmale (z.B. Blinder Fleck)',
        'Ein Modell zur Wunddokumentation',
        'Ein Modell der Schmerztherapie',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der "Blinde Fleck" im Johari-Fenster?',
      a: [
        'Das, was mir selbst und anderen unbekannt ist',
        'Das, was ich weiß, aber anderen verberge',
        'Das, was andere an mir wahrnehmen, ich selbst aber nicht bemerke',
        'Das, was alle über mich wissen',
      ],
      correct: 2,
    },
    {
      q: 'Wer hat die "Transaktionsanalyse" entwickelt?',
      a: ['Carl Rogers', 'Eric Berne', 'Naomi Feil', 'Sigmund Freud'],
      correct: 1,
    },
    {
      q: 'Welche drei Ich-Zustände kennt die Transaktionsanalyse?',
      a: [
        'Groß-Ich, Klein-Ich, Normal-Ich',
        'Eltern-Ich, Erwachsenen-Ich, Kind-Ich',
        'Krankes-Ich, Gesundes-Ich, Pflege-Ich',
        'Vergangenheits-Ich, Gegenwarts-Ich, Zukunfts-Ich',
      ],
      correct: 1,
    },
    {
      q: 'Was zeichnet das "Erwachsenen-Ich" aus?',
      a: [
        'Trotziges Verhalten',
        'Bevormundendes Verhalten',
        'Sachliches, objektives und realitätsbezogenes Handeln auf Augenhöhe',
        'Fürsorgliches Bemuttern',
      ],
      correct: 2,
    },
    {
      q: 'Was ist "Validation" nach Naomi Feil?',
      a: [
        'Die Überprüfung von Medikamenten',
        'Eine wertschätzende Kommunikationsmethode für Menschen mit Demenz',
        'Ein Zeugnis in der Pflegeausbildung',
        'Die Konfrontation von Patienten mit der Realität',
      ],
      correct: 1,
    },
    {
      q: 'Welcher Satz ist typisch für die Validation?',
      a: [
        '"Ihre Mutter ist doch schon lange tot!"',
        '"Sie sind im Pflegeheim, nicht zuhause!"',
        '"Sie vermissen Ihre Mutter sehr, nicht wahr?"',
        '"Hören Sie auf zu rufen, hier ist niemand."',
      ],
      correct: 2,
    },
    {
      q: 'Was bedeutet der Begriff "Empowerment" in der Pflegeberatung?',
      a: [
        'Den Patienten entmündigen',
        'Die Befähigung des Patienten zur Selbstbestimmung und Eigenverantwortung',
        'Dem Patienten Angst machen',
        'Den Arzt entscheiden lassen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Unterschied zwischen Information und Beratung?',
      a: [
        'Gibt keinen',
        'Information ist einseitige Wissensvermittlung, Beratung ist ein interaktiver Prozess zur Entscheidungsfindung',
        'Beratung geht schneller',
        'Information ist immer schriftlich',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Türangelgespräch"?',
      a: [
        'Ein geplantes Beratungsgespräch',
        'Ein kurzes, oft spontanes Gespräch zwischen Tür und Angel (z.B. beim Verlassen des Zimmers)',
        'Ein Streitgespräch',
        'Ein Gespräch mit dem Hausmeister',
      ],
      correct: 1,
    },
    {
      q: 'Was beschreibt der "Halo-Effekt" (Heiligenschein-Effekt) in der Wahrnehmung?',
      a: [
        'Man sieht Engel',
        'Eine einzelne, markante Eigenschaft überstrahlt alle anderen Eigenschaften einer Person',
        'Man vergisst alles',
        'Man sieht nur das Negative',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der "Pygmalion-Effekt" (Rosenthal-Effekt)?',
      a: [
        'Ein Hautausschlag',
        'Die Vorwegnahme eines Ergebnisses führt dazu, dass es auch eintritt (selbsterfüllende Prophezeiung)',
        'Ein Effekt bei der Blutgerinnung',
        'Ein Kommunikationsfehler im OP',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Pacing" in der Kommunikation?',
      a: [
        'Dem anderen davonlaufen',
        'Sich dem Rhythmus und der Körpersprache des anderen anpassen (Spiegeln), um Rapport aufzubauen',
        'Den anderen ständig unterbrechen',
        'Lautes Sprechen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Double Bind" (Doppelbindung)?',
      a: [
        'Ein sicherer Knoten',
        'Eine paradoxe, unlösbare Kommunikationssituation (zwei widersprüchliche Botschaften gleichzeitig)',
        'Eine Umarmung',
        'Ein Vertrag',
      ],
      correct: 1,
    },
    {
      q: 'Wie viele Eskalationsstufen von Konflikten beschreibt Friedrich Glasl?',
      a: ['3', '5', '9', '12'],
      correct: 2,
    },
    {
      q: 'Was kennzeichnet die letzte Stufe (9) der Konflikteskalation nach Glasl?',
      a: [
        'Win-Win-Situation',
        'Gemeinsam in den Abgrund (Lose-Lose)',
        'Friedliche Trennung',
        'Gerichtsverfahren',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht das Kommunikations-Schema "ISBAR" in der Übergabe/Arztkommunikation?',
      a: [
        'Identity, Situation, Background, Assessment, Recommendation',
        'Interaktion, Symmetrie, Basis, Aktion, Reaktion',
        'Information, Sicherheit, Beweis, Analyse, Rezept',
        'Intensiv, Schnell, Besser, Arzt, Retten',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das Ziel des "Sokratischen Dialogs" in der Beratung?',
      a: [
        'Den Patienten durch gezielte Fragen dazu bringen, eigene Erkenntnisse und Lösungen zu finden',
        'Dem Patienten griechische Philosophie beibringen',
        'Ihn zum Schweigen bringen',
        'Einen Monolog zu halten',
      ],
      correct: 0,
    },
    {
      q: 'Was ist eine "Symmetrische Eskalation" (nach Watzlawick)?',
      a: [
        'Beide werden immer leiser',
        'Beide Partner schaukeln sich in ihrem Verhalten gegenseitig hoch (z.B. Wer schreit lauter?)',
        'Beide weinen',
        'Beide geben nach',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter dem "Rapport" in der Beratung?',
      a: [
        'Einen schriftlichen Bericht',
        'Eine vertrauensvolle, von Akzeptanz geprägte Beziehungsbasis zwischen Berater und Klient',
        'Den Abschluss des Gesprächs',
        'Die Bezahlung',
      ],
      correct: 1,
    },
    {
      q: 'Welche Haltung ist bei der Begleitung Sterbender in der Kommunikation zentral?',
      a: [
        'Ablenkung von der Realität',
        'Aktives, aushaltendes Zuhören und Dasein',
        'Falsche Hoffnungen wecken',
        'Möglichst wenig sprechen',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "direktive Beratung"?',
      a: [
        'Der Berater führt, gibt Ratschläge und Lösungsmöglichkeiten vor',
        'Der Berater sagt gar nichts',
        'Der Klient entscheidet alles allein',
        'Beratung durch eine Maschine',
      ],
      correct: 0,
    },
    {
      q: 'Was bedeutet "Non-direktive Beratung" (nach Rogers)?',
      a: [
        'Der Berater befiehlt',
        'Der Berater hilft dem Klienten durch Spiegelung, EIGENE Lösungen zu finden (Hilfe zur Selbsthilfe)',
        'Es gibt kein Ziel',
        'Der Berater gibt Ratschläge',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Zirkuläre Frage" in der systemischen Beratung?',
      a: [
        'Eine Frage, die sich immer wiederholt',
        'Eine Frage nach der Perspektive eines Dritten (z.B. "Was denken Sie, wie Ihre Frau das sieht?")',
        'Eine Frage nach dem Alter',
        'Eine Frage ohne Sinn',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Asymmetrie" in der Pflegebeziehung?',
      a: [
        'Ein Arm ist länger',
        'Ein Machtgefälle (z.B. durch Wissensvorsprung und Abhängigkeit des Patienten)',
        'Patient und Pfleger sind gleich stark',
        'Gleiches Alter',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht die Abkürzung "NVC" (Nonviolent Communication)?',
      a: [
        'Neue verbale Chancen',
        'Gewaltfreie Kommunikation (nach Marshall Rosenberg)',
        'Nationale Verbands-Kommunikation',
        'Natürliche verbale Chemie',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht das "S" im SPIKES-Modell (Überbringen schlechter Nachrichten)?',
      a: [
        'Schock (Shock)',
        'Setting (Gesprächsrahmen vorbereiten)',
        'Sicherheit (Security)',
        'Sympathie (Sympathy)',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Schritt "Perception" (P) im SPIKES-Modell?',
      a: [
        'Den Puls des Patienten messen',
        'Den Wissensstand und die Wahrnehmung des Patienten erfragen ("Was wissen Sie bereits?")',
        'Ein Rezept ausstellen',
        'Die eigene Meinung sagen',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Invitation" (I) im SPIKES-Modell?',
      a: [
        'Angehörige einladen',
        'Den Patienten fragen, wie viele Details er aktuell wissen möchte',
        'Einen Folgetermin vereinbaren',
        'Eine Überweisung schreiben',
      ],
      correct: 1,
    },
    {
      q: 'Wer entwickelte das Konzept der "Gewaltfreien Kommunikation" (GFK)?',
      a: [
        'Carl Rogers',
        'Paul Watzlawick',
        'Marshall B. Rosenberg',
        'Sigmund Freud',
      ],
      correct: 2,
    },
    {
      q: 'Aus welchen vier Schritten besteht die Gewaltfreie Kommunikation (GFK)?',
      a: [
        'Angriff, Verteidigung, Flucht, Lösung',
        'Beobachtung, Gefühl, Bedürfnis, Bitte',
        'Problem, Ursache, Symptom, Therapie',
        'Zuhören, Nicken, Wiederholen, Fragen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Beobachtung" im Sinne der GFK?',
      a: [
        'Eine klare Bewertung des Verhaltens',
        'Eine wertfreie, objektive Beschreibung der Situation (wie durch eine Kamera)',
        'Eine Diagnose',
        'Eine Vermutung',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der Unterschied zwischen einer Bitte und einer Forderung in der GFK?',
      a: [
        'Gibt keinen',
        'Eine Forderung ist immer laut',
        'Bei einer echten Bitte darf der andere "Nein" sagen, ohne bestraft zu werden',
        'Eine Bitte ist schriftlich',
      ],
      correct: 2,
    },
    {
      q: 'Welches Tier wird in der GFK symbolisch für einfühlsame, gewaltfreie Kommunikation genutzt?',
      a: ['Giraffe', 'Wolf', 'Hund', 'Bär'],
      correct: 0,
    },
    {
      q: 'Welches Tier steht in der GFK für urteilende, angriffslustige Kommunikation?',
      a: ['Adler', 'Fuchs', 'Wolf', 'Schlange'],
      correct: 2,
    },
    {
      q: 'Was ist das wichtigste Prinzip bei der Deeskalation eines aggressiven Patienten?',
      a: [
        'Lauter schreien als der Patient',
        'Eigenschutz, ruhig bleiben und ausreichend Abstand halten',
        'Ihn sofort festhalten',
        'Die Polizei rufen und weglaufen',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter einem "Time-out" in einer eskalierenden Situation?',
      a: [
        'Feierabend machen',
        'Eine bewusste räumliche oder zeitliche Trennung zur Abkühlung der Emotionen',
        'Einen Arzt rufen',
        'Den Patienten ignorieren',
      ],
      correct: 1,
    },
    {
      q: 'Wofür steht das Akronym "SBAR" bei der Übergabe oder Arztkommunikation?',
      a: [
        'Situation, Background, Assessment, Recommendation',
        'Sicherheit, Basis, Antwort, Reaktion',
        'Schnell, Besser, Aktiv, Richtig',
        'Symptome, Befunde, Analyse, Rezept',
      ],
      correct: 0,
    },
    {
      q: 'Was ist das Ziel einer "Supervision"?',
      a: [
        'Die Kontrolle der Arbeitszeiten',
        'Professionelle Beratung zur Reflexion des eigenen beruflichen Handelns',
        'Die Gehaltsverhandlung',
        'Die Übergabe der Schicht',
      ],
      correct: 1,
    },
    {
      q: 'Was unterscheidet die "Intervision" (Kollegiale Fallberatung) von der Supervision?',
      a: [
        'Intervision kostet mehr',
        'Intervision findet unter Gleichgestellten ohne externen Supervisor statt',
        'Intervision ist nur für Chefärzte',
        'Intervision ist schriftlich',
      ],
      correct: 1,
    },
    {
      q: 'Wie kommuniziert man idealerweise mit einem stark schwerhörigen Patienten?',
      a: [
        'Sehr laut ins Ohr schreien',
        'Gesicht zuwenden, normal laut, deutlich und eher tiefer sprechen',
        'Nur noch schriftlich kommunizieren',
        'Schnell sprechen',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Unterstützte Kommunikation" (UK)?',
      a: [
        'Kommunikation mit Dolmetscher',
        'Nutzung von Hilfsmitteln wie Bildtafeln oder Sprachcomputern bei Einschränkungen',
        'Das Festhalten der Hände',
        'Flüstern',
      ],
      correct: 1,
    },
    {
      q: 'Wie reagiert man professionell auf Wahnvorstellungen (z.B. bei Schizophrenie)?',
      a: [
        'Dem Patienten den Wahn konsequent ausreden',
        'Dem Wahn zustimmen, um ihn zu beruhigen',
        'Den Wahn weder bestätigen noch ausreden, sondern auf die Emotionen dahinter eingehen',
        'Den Raum verlassen',
      ],
      correct: 2,
    },
    {
      q: 'Welche 5 Phasen der Krankheitsverarbeitung/Sterbephasen beschrieb Elisabeth Kübler-Ross?',
      a: [
        'Diagnose, Therapie, Heilung, Reha, Entlassung',
        'Nicht-Wahrhaben-Wollen, Zorn, Verhandeln, Depression, Zustimmung',
        'Angst, Schmerz, Wut, Trauer, Tod',
        'Schock, Flucht, Kampf, Erschöpfung, Ende',
      ],
      correct: 1,
    },
    {
      q: 'Was ist typisch für die Phase des "Nicht-Wahrhaben-Wollens" (Verleugnung)?',
      a: [
        'Der Patient schreibt sein Testament',
        'Der Patient sucht viele andere Ärzte auf, in der Hoffnung auf eine andere Diagnose',
        'Der Patient weint ununterbrochen',
        'Der Patient beschimpft die Pflegekraft',
      ],
      correct: 1,
    },
    {
      q: 'Wie sollte eine Pflegekraft reagieren, wenn ein Patient in der Zorn-Phase ungerecht wird?',
      a: [
        'Zurückschreien',
        'Den Raum kommentarlos verlassen',
        'Den Zorn nicht persönlich nehmen und Verständnis für die Überforderung zeigen',
        'Ihm ein Beruhigungsmittel geben',
      ],
      correct: 2,
    },
    {
      q: 'Was ist ein "Trauma" in der Psychologie?',
      a: [
        'Eine Platzwunde',
        'Ein tiefgreifendes Ereignis, das die individuellen Bewältigungsstrategien extrem überfordert',
        'Ein schlechter Traum',
        'Eine leichte Depression',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Resilienz"?',
      a: [
        'Körperliche Schwäche',
        'Psychische Widerstandskraft (Fähigkeit, Krisen ohne dauerhaften Schaden zu meistern)',
        'Ein Kommunikationsfehler',
        'Ein Abwehrmechanismus',
      ],
      correct: 1,
    },
    {
      q: 'Was beschreibt das "Transtheoretische Modell" (TTM)?',
      a: [
        'Ein Modell für Blutkreislauf',
        'Ein Stufenmodell der Verhaltensänderung (z.B. bei Suchtentwöhnung)',
        'Ein Kommunikationsmodell für Gehörlose',
        'Ein Pflegeplanungssystem',
      ],
      correct: 1,
    },
    {
      q: 'Was passiert in der "Precontemplation"-Phase (Absichtslosigkeit) des TTM?',
      a: [
        'Der Patient plant die Veränderung',
        'Der Patient handelt bereits',
        'Der Patient sieht kein Problem und hat nicht die Absicht, etwas zu ändern',
        'Der Patient ist geheilt',
      ],
      correct: 2,
    },
    {
      q: 'Was ist "Motivational Interviewing" (Motivierende Gesprächsführung)?',
      a: [
        'Einen Patienten anschreien, bis er motiviert ist',
        'Ein Ansatz, der durch Empathie die intrinsische (innere) Motivation zur Verhaltensänderung fördert',
        'Eine Belohnung mit Geld',
        'Eine Gruppentherapie',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Psychoedukation"?',
      a: [
        'Eine Psychotherapie',
        'Systematische Vermittlung von Wissen über eine Erkrankung an Patienten/Angehörige',
        'Ein Test für Pflegekräfte',
        'Eine Entspannungstechnik',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter "Selektiver Wahrnehmung"?',
      a: [
        'Dass man alles perfekt sieht',
        'Dass man nur das wahrnimmt, was ins eigene Weltbild passt oder aktuell relevant ist',
        'Dass man farbenblind ist',
        'Dass man Stimmen hört',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der "Primacy-Effekt"?',
      a: [
        'Der letzte Eindruck bleibt',
        'Der erste Eindruck prägt die Wahrnehmung am stärksten',
        'Man merkt sich nur Zahlen',
        'Man vergisst Gesichter',
      ],
      correct: 1,
    },
    {
      q: 'Was ist der "Recency-Effekt"?',
      a: [
        'Der erste Eindruck zählt',
        'Die zuletzt erhaltenen Informationen bleiben am besten im Gedächtnis',
        'Die Stimme ist wichtig',
        'Ein Effekt bei Medikamenten',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Stereotyp"?',
      a: [
        'Eine Audio-Anlage',
        'Eine stark vereinfachende, verallgemeinernde Vorstellung über eine Gruppe von Menschen',
        'Ein seltener Vogel',
        'Eine exakte Beschreibung',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Projektion" als psychologischer Abwehrmechanismus?',
      a: [
        'Filme schauen',
        'Eigene, ungeliebte Eigenschaften oder Gefühle werden anderen Personen zugeschrieben',
        'Man vergisst Traumata',
        'Man verhält sich wieder wie ein Kind',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Kultursensible Pflege"?',
      a: [
        'Dass Pflegekräfte viel reisen',
        'Berücksichtigung der individuellen kulturellen und religiösen Bedürfnisse des Patienten',
        'Nur Ausländer pflegen',
        'Sprachen lernen',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet der Begriff "Ethnozentrismus"?',
      a: [
        'Toleranz gegenüber allen',
        'Die eigene Kultur als überlegen und als alleinigen Maßstab für andere Kulturen betrachten',
        'Ein Fest feiern',
        'Eine Pflegetheorie',
      ],
      correct: 1,
    },
    {
      q: 'Dürfen minderjährige Kinder des Patienten als Dolmetscher für ärztliche Aufklärungen eingesetzt werden?',
      a: [
        'Ja, das ist praktisch',
        'Nein, das ist aus ethischen und haftungsrechtlichen Gründen (Überforderung, Falschübersetzung) abzulehnen',
        'Nur wenn sie gut Deutsch können',
        'Nur am Wochenende',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Rückkopplung" (Feedback) im Sender-Empfänger-Modell?',
      a: [
        'Ein Rauschen im Ohr',
        'Die Reaktion des Empfängers auf die Nachricht, die zeigt, wie sie angekommen ist',
        'Ein Kabelbruch',
        'Das Zurückrufen am Telefon',
      ],
      correct: 1,
    },
    {
      q: 'Wann sind "geschlossene Fragen" in der Pflege besonders sinnvoll?',
      a: [
        'In der Biografiearbeit',
        'In Notfallsituationen oder wenn gezielte, kurze Fakten benötigt werden (Ja/Nein)',
        'Beim Aufnahmegespräch über Gefühle',
        'Bei der Sterbebegleitung',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Kinesik" in der nonverbalen Kommunikation?',
      a: [
        'Die Lehre von Mimik, Gestik und Körperbewegung',
        'Die Lehre vom Sprechtempo',
        'Die Lehre vom Abstand (Distanz)',
        'Die Lehre vom Berühren',
      ],
      correct: 0,
    },
    {
      q: 'Was meint Watzlawicks 3. Axiom ("Interpunktion der Kommunikationsabläufe")?',
      a: [
        'Man muss Punkte am Satzende setzen',
        'Jeder Partner sieht sein eigenes Verhalten oft nur als Reaktion auf das Verhalten des anderen (Teufelskreis)',
        'Kommunikation ist Interaktion',
        'Man darf nicht unterbrechen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Coping"?',
      a: [
        'Das Kopieren von Akten',
        'Der individuelle Umgang (Bewältigungsstrategie) mit einer schwierigen Lebenssituation oder Krankheit',
        'Ein Verband',
        'Eine Pflegediagnose',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter einer "Ich-Botschaft" im Konflikt?',
      a: [
        'Egoismus',
        'Die eigenen Gefühle benennen ohne den anderen zu beschuldigen ("Ich fühle mich gestresst, wenn...")',
        'Sich in den Mittelpunkt stellen',
        '"Ich will, dass du das machst!"',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Compliance" (in Abgrenzung zu Adhärenz)?',
      a: [
        'Gemeinsame Entscheidungsfindung',
        'Das eher passive, arztzentrierte Befolgen von Anordnungen durch den Patienten',
        'Ein Beschwerdemanagement',
        'Eine allergische Reaktion',
      ],
      correct: 1,
    },
    {
      q: 'Was bedeutet "Eskalation"?',
      a: [
        'Beruhigung',
        'Eine stufenweise Steigerung / Verschärfung eines Konflikts',
        'Eine Rolltreppe',
        'Ein Pflegefehler',
      ],
      correct: 1,
    },
    {
      q: 'Wie nennt man die 1. Stufe im Harvard-Konzept des Verhandelns?',
      a: [
        'Gewinnen um jeden Preis',
        'Menschen und Probleme voneinander trennen (Hart in der Sache, weich zum Menschen)',
        'Den anderen bedrohen',
        'Nachgeben',
      ],
      correct: 1,
    },
    {
      q: 'Was ist die "Schweigepflicht" im Kontext der Kommunikation?',
      a: [
        'Man darf nicht reden',
        'Rechtliche und ethische Pflicht, Patientengeheimnisse nicht an unbefugte Dritte weiterzugeben',
        'Nur mit dem Arzt sprechen',
        'Nachts leise sein',
      ],
      correct: 1,
    },
    {
      q: 'Wie verhält man sich bei einem Patienten, der weint?',
      a: [
        'Ihn sofort ablenken',
        'Die Tränen aushalten, Nähe anbieten (falls gewünscht) und Gefühle zulassen',
        'Sagen: "Ist doch nicht so schlimm"',
        'Den Raum verlassen',
      ],
      correct: 1,
    },
    {
      q: 'Was ist "Brainstorming"?',
      a: [
        'Ein epileptischer Anfall',
        'Eine Methode zur Ideenfindung in der Gruppe, bei der in der ersten Phase Kritik verboten ist',
        'Ein Wetterphänomen',
        'Ein Wutausbruch',
      ],
      correct: 1,
    },
    {
      q: 'Was ist das "Pacing und Leading" Konzept?',
      a: [
        'Ein Tanzschritt',
        'Zuerst den Rhythmus des anderen anpassen (Pacing) und dann das Gespräch in eine positive Richtung führen (Leading)',
        'Vorauslaufen und Tempo vorgeben',
        'Eine Beatmungsform',
      ],
      correct: 1,
    },
    {
      q: 'Was ist ein "Rapport" in der Gesprächsführung?',
      a: [
        'Ein militärischer Bericht',
        'Ein Zustand von tiefer Übereinstimmung, Vertrauen und wechselseitiger Aufmerksamkeit',
        'Ein Fehler',
        'Ein Vertrag',
      ],
      correct: 1,
    },
    {
      q: 'Was ist eine "Symmetrische Eskalation" (Watzlawick)?',
      a: [
        'Zwei Personen schaukeln sich in ihrem Verhalten gegenseitig hoch (z.B. immer lauter werden)',
        'Beide Personen beruhigen sich',
        'Nur eine Person schreit',
        'Eine Person weint',
      ],
      correct: 0,
    },
    {
      q: 'Warum sind "Warum-Fragen" in der Pflegeberatung oft problematisch?',
      a: [
        'Weil sie zu kurz sind',
        'Sie drängen den Patienten oft in eine Rechtfertigungsposition oder rufen Abwehr hervor',
        'Weil Patienten sie nicht verstehen',
        'Es gibt kein Problem damit',
      ],
      correct: 1,
    },
  ],
};
