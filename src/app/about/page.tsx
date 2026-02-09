import styles from '../info-page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Om SHEIN</h1>
        <p className={styles.description}>
          SHEIN är en global e-handelsplattform som grundades 2008 med visionen att göra mode tillgängligt för alla. Vi tror på att skönhet kommer i alla former och storlekar, och vår mission är att erbjuda trendiga, prisvärda kläder och accessoarer till modeälskare över hela världen.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vår Historia</h2>
          <p className={styles.text}>
            SHEIN grundades 2008 som en liten online-butik med en stor dröm - att demokratisera mode och göra de senaste trenderna tillgängliga för alla, oavsett budget eller plats. Från våra blygsamma början har vi vuxit till att bli en av världens ledande modedestinationer.
          </p>
          <p className={styles.text}>
            Under åren har vi expanderat från en enda marknad till över 150 länder, och från ett litet team till tusentals dedikerade medarbetare världen över. Vår tillväxt har drivits av vår passion för mode, innovation och vårt engagemang för kundnöjdhet.
          </p>
          <p className={styles.text}>
            Idag betjänar vi miljontals kunder varje månad och lanserar tusentals nya produkter varje vecka. Men trots vår tillväxt har vi aldrig tappat fokus på vad som är viktigast - att erbjuda fantastiska produkter till fantastiska priser.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vår Mission</h2>
          <p className={styles.text}>
            Vår mission är enkel men kraftfull: att göra mode tillgängligt för alla. Vi tror att alla förtjänar att känna sig självsäkra och vackra i sina kläder, oavsett budget.
          </p>
          <p className={styles.text}>
            Vi arbetar hårt för att erbjuda de senaste trenderna till överkomliga priser utan att kompromissa med kvalitet. Genom att optimera vår leveranskedja, investera i teknologi och arbeta direkt med tillverkare kan vi hålla priserna låga samtidigt som vi upprätthåller höga standarder.
          </p>
          <p className={styles.text}>
            Men vår mission går längre än bara att sälja kläder. Vi vill inspirera människor att uttrycka sin unika stil, bygga en global community av modeälskare och göra en positiv påverkan på världen genom hållbara och ansvarsfulla affärsmetoder.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vår Vision</h2>
          <p className={styles.text}>
            Vi ser en framtid där mode är inkluderande, hållbart och tillgängligt för alla. En värld där människor kan uttrycka sin individualitet genom sina kläder utan att oroa sig för kostnaden eller miljöpåverkan.
          </p>
          <p className={styles.text}>
            Vi strävar efter att vara ledande inom hållbart mode, att sätta nya standarder för etisk produktion och att inspirera andra i branschen att följa efter. Vi vill vara mer än bara en klädbutik - vi vill vara en kraft för positiv förändring.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Våra Värderingar</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Innovation</strong>
              <p>Vi omfamnar ny teknologi och nya idéer för att ständigt förbättra vår verksamhet och kundupplevelse.</p>
            </div>
            <div className={styles.card}>
              <strong>Kvalitet</strong>
              <p>Vi kompromissar aldrig med kvalitet. Varje produkt genomgår rigorösa kontroller för att säkerställa att den uppfyller våra höga standarder.</p>
            </div>
            <div className={styles.card}>
              <strong>Inkludering</strong>
              <p>Vi tror på mångfald och inkludering. Mode är för alla, oavsett storlek, ålder, kön eller bakgrund.</p>
            </div>
            <div className={styles.card}>
              <strong>Hållbarhet</strong>
              <p>Vi tar vårt ansvar för planeten på allvar och arbetar kontinuerligt för att minska vår miljöpåverkan.</p>
            </div>
            <div className={styles.card}>
              <strong>Kundnöjdhet</strong>
              <p>Våra kunder är hjärtat av vår verksamhet. Vi strävar efter att överträffa deras förväntningar i varje interaktion.</p>
            </div>
            <div className={styles.card}>
              <strong>Transparens</strong>
              <p>Vi tror på öppenhet och ärlighet i allt vi gör, från produktion till prissättning.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vad Gör Oss Unika?</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Snabb Mode-Cykel:</strong> Vi lanserar tusentals nya produkter varje vecka, så du har alltid tillgång till de senaste trenderna.
            </li>
            <li className={styles.listItem}>
              <strong>Överkomliga Priser:</strong> Genom att optimera vår leveranskedja kan vi erbjuda fantastiska priser utan att kompromissa med kvalitet.
            </li>
            <li className={styles.listItem}>
              <strong>Global Räckvidd:</strong> Vi levererar till över 150 länder och betjänar miljontals kunder världen över.
            </li>
            <li className={styles.listItem}>
              <strong>Teknologidriven:</strong> Vi använder AI och maskininlärning för att personalisera din shoppingupplevelse och förutse trender.
            </li>
            <li className={styles.listItem}>
              <strong>Community-Fokuserad:</strong> Vi är mer än en butik - vi är en community av modeälskare som inspirerar varandra.
            </li>
            <li className={styles.listItem}>
              <strong>Omfattande Sortiment:</strong> Från vardagskläder till festkläder, från accessoarer till skönhetsprodukter - vi har allt du behöver.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vårt Team</h2>
          <p className={styles.text}>
            Bakom SHEIN finns ett passionerat team av designers, teknologer, logistikexperter och kundservicespecialister som arbetar dygnet runt för att ge dig den bästa möjliga upplevelsen.
          </p>
          <p className={styles.text}>
            Vårt designteam följer noga modeveckorna i Paris, Milano, London och New York för att snabbt kunna översätta catwalktrender till prisvärda produkter. Vårt teknikteam utvecklar innovativa lösningar för att förbättra din shoppingupplevelse. Och vårt kundserviceteam finns alltid här för att hjälpa dig.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Framtiden</h2>
          <p className={styles.text}>
            Vi är stolta över vad vi har uppnått, men vi är ännu mer entusiastiska över framtiden. Vi fortsätter att investera i hållbarhet, teknologi och kundupplevelse.
          </p>
          <p className={styles.text}>
            Vi utforskar nya material, nya produktionsmetoder och nya sätt att minska vår miljöpåverkan. Vi utvecklar nya teknologier för att göra shopping ännu enklare och roligare. Och vi expanderar till nya marknader för att göra mode tillgängligt för ännu fler människor.
          </p>
          <p className={styles.text}>
            Tack för att du är en del av vår resa. Tillsammans skapar vi framtidens mode.
          </p>
        </section>
      </div>
    </div>
  );
}
