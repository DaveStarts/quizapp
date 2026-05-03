export type Question = {
  q: string;
  a: string[];
  correct: number;
};

export const ALL_QUESTIONS: Record<string, Question[]> = {
  'Anatomie & Physiologie': [
    {
      q: 'Welches Organ produziert das Hormon Insulin?',
      a: ['Leber', 'Bauchspeicheldrüse (Pankreas)', 'Niere', 'Milz'],
      correct: 1,
    },
    {
      q: 'Wie viele Lungenlappen hat der rechte Lungenflügel?',
      a: ['Einen', 'Zwei', 'Drei', 'Vier'],
      correct: 2,
    },
    {
      q: 'Was ist die Hauptaufgabe der Erythrozyten?',
      a: [
        'Infektionsabwehr',
        'Blutgerinnung',
        'Sauerstofftransport',
        'Nährstoffaufnahme',
      ],
      correct: 2,
    },
    {
      q: 'Welcher Teil des Herzens pumpt sauerstoffreiches Blut in den Körperkreislauf?',
      a: [
        'Rechter Vorhof',
        'Rechte Herzkammer',
        'Linker Vorhof',
        'Linke Herzkammer',
      ],
      correct: 3,
    },
  ],
  'Spezielle Pflege': [
    {
      q: 'Welches ist ein typisches Symptom der Linksherzinsuffizienz?',
      a: [
        'Beinödeme',
        'Lungenödem (Atemnot)',
        'Aszites (Bauchwassersucht)',
        'Halsvenenstauung',
      ],
      correct: 1,
    },
    {
      q: 'Welche Maßnahme gehört primär zur Dekubitusprophylaxe?',
      a: [
        'Flüssigkeitsrestriktion',
        'Mikrolagerung',
        'Dauerkatheter legen',
        'Enge Kleidung tragen',
      ],
      correct: 1,
    },
    {
      q: 'Was versteht man unter einer Aspiration?',
      a: [
        'Einatmen von Fremdkörpern/Flüssigkeit',
        'Ausatmen von CO2',
        'Übergeben von Mageninhalt',
        'Verschlucken in die Speiseröhre',
      ],
      correct: 0,
    },
    {
      q: 'Welcher Nüchtern-Blutzuckerwert spricht am ehesten für einen Diabetes mellitus?',
      a: ['70 mg/dl', '90 mg/dl', '105 mg/dl', '130 mg/dl'],
      correct: 3,
    },
  ],
  Arzneimittellehre: [
    {
      q: 'Welche Medikamentengruppe wirkt primär blutdrucksenkend?',
      a: ['Analgetika', 'Antazida', 'ACE-Hemmer', 'Antiemetika'],
      correct: 2,
    },
    {
      q: 'Was ist bei der Gabe von Diuretika pflegerisch besonders zu beachten?',
      a: [
        'Flüssigkeitsbilanz & Gewichtskontrolle',
        'Nur abends verabreichen',
        'Immer vor dem Essen geben',
        'Strenge Temperaturkontrolle',
      ],
      correct: 0,
    },
    {
      q: 'Wie wird Insulin im Standardfall injiziert?',
      a: [
        'Intramuskulär (i.m.)',
        'Intravenös (i.v.)',
        'Subkutan (s.c.)',
        'Intrakutan (i.c.)',
      ],
      correct: 2,
    },
    {
      q: 'Welches Schmerzmittel wirkt auch stark entzündungshemmend (NSAR)?',
      a: ['Paracetamol', 'Ibuprofen', 'Novaminsulfon', 'Tramadol'],
      correct: 1,
    },
  ],
  'Recht & Hygiene': [
    {
      q: 'Welches Wirkspektrum des Desinfektionsmittels ist bei Clostridium difficile zwingend erforderlich?',
      a: ['Eingeschränkt viruzid', 'Sporizid', 'Bakterizid', 'Fungizid'],
      correct: 1,
    },
    {
      q: 'Wer darf freiheitsentziehende Maßnahmen (FEM) im Regelfall anordnen bzw. genehmigen?',
      a: [
        'Pflegedienstleitung',
        'Heimleitung',
        'Betreuungsgericht',
        'Angehörige ohne Vollmacht',
      ],
      correct: 2,
    },
    {
      q: 'Wie lange ist die hygienische Händedesinfektion laut Standard mindestens durchzuführen?',
      a: ['15 Sekunden', '30 Sekunden', '60 Sekunden', '2 Minuten'],
      correct: 1,
    },
    {
      q: 'Was ist das oberste Ziel der Prophylaxen in der Pflege?',
      a: [
        'Kosten sparen',
        'Dokumentationspflicht erfüllen',
        'Krankheiten/Komplikationen vorbeugen',
        'Medikamente reduzieren',
      ],
      correct: 2,
    },
  ],
};
