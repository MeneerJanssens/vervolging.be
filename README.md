# vervolging.be

Website van Hulp aan de Verdrukte Kerk (HVK), gebouwd met [Astro](https://astro.build), gehost op Netlify, met bezoekersstatistieken via [GoatCounter](https://hvk.goatcounter.com).

## Lokaal werken

```powershell
npm install
npm run dev      # http://localhost:4321
npm run build    # bouwt de site naar dist/
```

## Waar staat wat?

| Wat | Waar |
|---|---|
| Algemene gegevens (e-mail, IBAN, adres, Ko-fi, menu) | `src/data/site.ts` |
| Pagina's en hun teksten | `src/pages/` |
| Projecten (lopend en afgerond) | `src/content/projecten/` |
| Agenda | `src/content/evenementen/` (`concept: true` = verborgen) |
| De Stem en het kinderblad (archief) | `src/content/tijdschriften/` + covers in `src/assets/maandblad/` |
| Video's | `src/content/videos/` + miniaturen in `src/assets/video/` |
| Gratis boeken | `src/content/boeken/` |
| Foto's | `src/assets/foto/` |
| Kleuren en lettertypes | `src/styles/global.css` |
| Doorverwijzingen van de oude Google Site | `netlify.toml` |

### Een nieuw nummer van De Stem toevoegen
1. Upload de pdf naar Heyzine en kopieer de link.
2. Sla de cover op als `src/assets/maandblad/<code>.jpg`.
3. Kopieer een bestand in `src/content/tijdschriften/` en pas titel, editie, datum, cover en flipbook aan.
Het nieuwste nummer verschijnt automatisch op de homepage en bovenaan de pagina De Stem.

### Een project toevoegen of afsluiten
Kopieer een bestand in `src/content/projecten/`. Zet `status: afgerond` en het juiste `jaar` om het naar het archief te verplaatsen.

## Formulieren (Netlify Forms)
De zeven formulieren worden bij de eerste deploy automatisch herkend. In Netlify: **Project configuration → Notifications → Emails and webhooks → Form submission notifications** om inzendingen naar info@hvk-aem.be te laten sturen. Het gratis plan dekt 100 inzendingen per maand.

## Franse versie
Komt later onder `src/pages/fr/`. In `netlify.toml` staat al de (uitgeschakelde) regel die persecution.be naar `/fr/` laat wijzen.
