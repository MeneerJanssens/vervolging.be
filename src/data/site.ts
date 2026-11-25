// Centrale gegevens van HVK. Pas hier aan, dan verandert het overal op de site.

export const site = {
  naam: 'Hulp aan de Verdrukte Kerk',
  kort: 'HVK',
  rechtsvorm: 'vzw',
  tagline: 'De stem van vervolgde christenen',
  email: 'info@hvk-aem.be',
  adres: {
    straat: 'Romboutsstraat 7',
    postcode: '1932',
    gemeente: 'Zaventem',
  },
  // TODO: ondernemingsnummer aanvullen (verplicht op de website van een vzw)
  ondernemingsnummer: '',
  iban: 'BE28 4162 0287 8120',
  bic: 'KREDBBEB',
  kofi: 'https://ko-fi.com/hulpaandeverdruktekerk',
  facebook: 'https://www.facebook.com/HVKAEM/',
  // TODO: YouTube-kanaal-URL aanvullen
  youtube: '',
  fransVersie: 'https://www.persecution.be',
  goatcounter: 'https://hvk.goatcounter.com/count',
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const navigatie: NavItem[] = [
  {
    label: 'Over ons',
    href: '/over-ons',
    children: [
      { label: 'Wie we zijn', href: '/over-ons' },
      { label: 'Ons verhaal', href: '/over-ons/ons-verhaal' },
      { label: 'Vrijwilliger worden', href: '/over-ons/vrijwilliger-worden' },
    ],
  },
  { label: 'Ons werk', href: '/ons-werk' },
  {
    label: 'Doe mee',
    href: '/doe-mee',
    children: [
      { label: 'Bid mee', href: '/doe-mee/bid-mee' },
      { label: 'Schrijf een kaart', href: '/doe-mee/bemoedig-iemand' },
      { label: 'Iedereen een Bijbel', href: '/doe-mee/iedereen-een-bijbel' },
      { label: 'Gratis boek', href: '/doe-mee/gratis-boek' },
      { label: 'Nodig ons uit', href: '/doe-mee/nodig-ons-uit' },
    ],
  },
  { label: 'Getuigenissen', href: '/getuigenissen' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'De Stem', href: '/de-stem' },
];
