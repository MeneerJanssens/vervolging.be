// Met build.format 'file' is Astro.url.pathname tijdens de build bv. "/agenda.html"
// of "/index.html". Netlify serveert die pagina's als "/agenda" en "/".
// Deze functie geeft altijd het nette adres terug.
export const nettePad = (pathname: string) =>
  pathname.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/(.)\/$/, '$1') || '/';
