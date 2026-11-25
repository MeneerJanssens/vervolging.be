// Datums uit de content (bv. "2027-10-02") zijn middernacht UTC.
// We rekenen daarom met dagen als tekst ("JJJJ-MM-DD") en formatteren in UTC.

/** De dag van een datum als "JJJJ-MM-DD". */
export const isoDag = (d: Date) => d.toISOString().slice(0, 10);

/** Vandaag in België als "JJJJ-MM-DD". */
export const vandaagIso = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Brussels' });

/** Laatste dag van een evenement als "JJJJ-MM-DD". */
export const eindIso = (e: { data: { datum: Date; einddatum?: Date } }) => isoDag(e.data.einddatum ?? e.data.datum);

const fmt = new Intl.DateTimeFormat('nl-BE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** "2 oktober 2027", "2–3 oktober 2027" of "30 september – 2 oktober 2027". */
export const periode = (van: Date, tot?: Date) => (tot && isoDag(tot) !== isoDag(van) ? fmt.formatRange(van, tot) : fmt.format(van));
