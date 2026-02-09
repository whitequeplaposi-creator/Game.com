import styles from '../info-page.module.css';

export default function CareersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Karriärer på SHEIN</h1>
        <p className={styles.description}>
          Välkommen till SHEIN Careers! Vi söker passionerade, kreativa och drivna individer som vill vara en del av vår resa att förändra modeindustrin.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Varför Arbeta på SHEIN?</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Dynamisk Arbetsmiljö</strong>
              <p>Arbeta i en snabbrörlig, innovativ miljö där varje dag är annorlunda och spännande.</p>
            </div>
            <div className={styles.card}>
              <strong>Karriärutveckling</strong>
              <p>Vi investerar i våra medarbetare med utbildningsprogram, mentorskap och möjligheter till avancemang.</p>
            </div>
            <div className={styles.card}>
              <strong>Konkurrenskraftiga Förmåner</strong>
              <p>Attraktiva löner, bonusar, hälsoförsäkring, pensionsplaner och personalrabatter.</p>
            </div>
            <div className={styles.card}>
              <strong>Flexibilitet</strong>
              <p>Flexibla arbetstider, möjlighet till distansarbete och work-life balance.</p>
            </div>
            <div className={styles.card}>
              <strong>Global Exponering</strong>
              <p>Arbeta med team från hela världen och få internationell erfarenhet.</p>
            </div>
            <div className={styles.card}>
              <strong>Innovation</strong>
              <p>Var med och forma framtidens mode med cutting-edge teknologi och kreativa lösningar.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Lediga Tjänster</h2>
          <p className={styles.text}>
            Vi rekryterar inom flera områden och söker alltid talangfulla individer som delar vår passion för mode och innovation.
          </p>
          
          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>E-handel & Digital Marknadsföring</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Digital Marketing Manager</li>
            <li className={styles.listItem}>Social Media Specialist</li>
            <li className={styles.listItem}>E-commerce Manager</li>
            <li className={styles.listItem}>Content Creator</li>
            <li className={styles.listItem}>SEO/SEM Specialist</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Design & Produktutveckling</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Fashion Designer</li>
            <li className={styles.listItem}>Product Developer</li>
            <li className={styles.listItem}>Trend Forecaster</li>
            <li className={styles.listItem}>Graphic Designer</li>
            <li className={styles.listItem}>UX/UI Designer</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Teknologi & Mjukvaruutveckling</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Full Stack Developer</li>
            <li className={styles.listItem}>Frontend Developer</li>
            <li className={styles.listItem}>Backend Developer</li>
            <li className={styles.listItem}>Mobile App Developer</li>
            <li className={styles.listItem}>Data Scientist</li>
            <li className={styles.listItem}>DevOps Engineer</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Logistik & Supply Chain</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Supply Chain Manager</li>
            <li className={styles.listItem}>Logistics Coordinator</li>
            <li className={styles.listItem}>Warehouse Manager</li>
            <li className={styles.listItem}>Inventory Analyst</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Kundservice & Support</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Customer Service Representative</li>
            <li className={styles.listItem}>Customer Success Manager</li>
            <li className={styles.listItem}>Support Team Lead</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Finans & Affärsutveckling</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Financial Analyst</li>
            <li className={styles.listItem}>Business Development Manager</li>
            <li className={styles.listItem}>Accountant</li>
            <li className={styles.listItem}>Strategic Planner</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>HR & Talangförvaltning</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>HR Manager</li>
            <li className={styles.listItem}>Recruiter</li>
            <li className={styles.listItem}>Training & Development Specialist</li>
            <li className={styles.listItem}>Compensation & Benefits Analyst</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vår Kultur</h2>
          <p className={styles.text}>
            På SHEIN värdesätter vi mångfald, inkludering och innovation. Vi tror att de bästa idéerna kommer från team med olika bakgrunder och perspektiv.
          </p>
          <p className={styles.text}>
            Vår kultur uppmuntrar kreativitet, samarbete och kontinuerligt lärande. Vi ger våra medarbetare frihet att experimentera, ta initiativ och växa i sina roller.
          </p>
          <p className={styles.text}>
            Vi firar framgångar tillsammans, lär av misstag och stöttar varandra genom utmaningar. Hos oss är du inte bara en anställd - du är en del av familjen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Förmåner & Belöningar</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Konkurrenskraftig Lön:</strong> Marknadsmässiga löner med årliga löneöversyn
            </li>
            <li className={styles.listItem}>
              <strong>Bonusprogram:</strong> Prestationsbaserade bonusar och incitament
            </li>
            <li className={styles.listItem}>
              <strong>Hälsoförsäkring:</strong> Omfattande sjuk- och tandvårdsförsäkring
            </li>
            <li className={styles.listItem}>
              <strong>Pensionsplan:</strong> Arbetsgivarbidrag till pensionssparande
            </li>
            <li className={styles.listItem}>
              <strong>Personalrabatt:</strong> Generösa rabatter på alla SHEIN-produkter
            </li>
            <li className={styles.listItem}>
              <strong>Flexibla Arbetstider:</strong> Anpassade scheman för work-life balance
            </li>
            <li className={styles.listItem}>
              <strong>Distansarbete:</strong> Möjlighet till hybrid- eller distansarbete
            </li>
            <li className={styles.listItem}>
              <strong>Utbildning:</strong> Kontinuerlig kompetensutveckling och kurser
            </li>
            <li className={styles.listItem}>
              <strong>Friskvård:</strong> Gym-medlemskap och wellness-program
            </li>
            <li className={styles.listItem}>
              <strong>Semester:</strong> Generösa semesterdagar och ledigheter
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ansökningsprocess</h2>
          <p className={styles.text}>
            Vår rekryteringsprocess är designad för att vara transparent, rättvis och effektiv:
          </p>
          <ol className={styles.list}>
            <li className={styles.listItem}>
              <strong>Ansökan:</strong> Skicka in din ansökan via vår karriärportal med CV och personligt brev
            </li>
            <li className={styles.listItem}>
              <strong>Granskning:</strong> Vårt rekryteringsteam granskar alla ansökningar noggrant
            </li>
            <li className={styles.listItem}>
              <strong>Telefonintervju:</strong> Kvalificerade kandidater kontaktas för en första telefonintervju
            </li>
            <li className={styles.listItem}>
              <strong>Videointervju:</strong> Djupare intervju via video med anställande chef
            </li>
            <li className={styles.listItem}>
              <strong>Kompetenstest:</strong> Beroende på roll kan praktiska tester eller case studies ingå
            </li>
            <li className={styles.listItem}>
              <strong>Slutintervju:</strong> Personligt möte med teamet (på plats eller virtuellt)
            </li>
            <li className={styles.listItem}>
              <strong>Erbjudande:</strong> Framgångsrika kandidater får jobberbjudande
            </li>
            <li className={styles.listItem}>
              <strong>Onboarding:</strong> Omfattande introduktionsprogram för nya medarbetare
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vad Vi Söker</h2>
          <p className={styles.text}>
            Vi söker individer som:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Är passionerade om mode och e-handel</li>
            <li className={styles.listItem}>Har en positiv attityd och är lagspelare</li>
            <li className={styles.listItem}>Är innovativa och inte rädda för att tänka utanför boxen</li>
            <li className={styles.listItem}>Är resultatinriktade och tar ägarskap</li>
            <li className={styles.listItem}>Är anpassningsbara och trivs i en snabbrörlig miljö</li>
            <li className={styles.listItem}>Har stark kommunikationsförmåga</li>
            <li className={styles.listItem}>Är engagerade i kontinuerligt lärande och utveckling</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Praktik & Trainee-program</h2>
          <p className={styles.text}>
            Vi erbjuder praktikplatser och trainee-program för studenter och nyutexaminerade som vill kickstarta sin karriär inom mode och e-handel.
          </p>
          <p className={styles.text}>
            Våra program ger hands-on erfarenhet, mentorskap från erfarna proffs och möjlighet till fast anställning efter avslutad praktik.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontakta Oss</h2>
          <p className={styles.text}>
            Har du frågor om karriärmöjligheter på SHEIN? Kontakta vårt rekryteringsteam:
          </p>
          <p className={styles.text}>
            E-post: careers@shein.com<br />
            Telefon: +46 8 123 456 78<br />
            LinkedIn: SHEIN Careers
          </p>
          <p className={styles.text}>
            Vi ser fram emot att höra från dig och välkomna dig till SHEIN-familjen!
          </p>
        </section>
      </div>
    </div>
  );
}
