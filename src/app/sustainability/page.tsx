import styles from '../info-page.module.css';

export default function SustainabilityPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Hållbarhet</h1>
        <p className={styles.description}>
          Hållbarhet är inte bara ett modeord för oss - det är en grundläggande del av vår affärsstrategi och vårt engagemang för framtiden.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vårt Hållbarhetsåtagande</h2>
          <p className={styles.text}>
            På SHEIN förstår vi att modeindustrin har en betydande påverkan på miljön. Det är därför vi har åtagit oss att göra vår verksamhet mer hållbar och ansvarsfull. Vi arbetar aktivt för att minska vår miljöpåverkan, förbättra arbetsförhållanden i vår leveranskedja och bidra till en mer cirkulär ekonomi.
          </p>
          <p className={styles.text}>
            Vår hållbarhetsresa är en kontinuerlig process. Vi sätter ambitiösa mål, mäter våra framsteg och är transparenta om både våra framgångar och utmaningar.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Miljöinitiativ</h2>
          
          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Cirkulär Ekonomi</h3>
          <p className={styles.text}>
            Vi arbetar mot en cirkulär affärsmodell där produkter designas för att vara hållbara, återanvändbara och återvinningsbara. Detta inkluderar:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Design för långlivade produkter</li>
            <li className={styles.listItem}>Återvinningsprogram för gamla kläder</li>
            <li className={styles.listItem}>Användning av återvunna material i nya produkter</li>
            <li className={styles.listItem}>Minimering av avfall i produktionen</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Hållbara Material</h3>
          <p className={styles.text}>
            Vi ökar användningen av ekologiska och återvunna material i våra kollektioner:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Ekologisk Bomull:</strong> Odlad utan skadliga bekämpningsmedel och konstgödsel
            </li>
            <li className={styles.listItem}>
              <strong>Återvunnen Polyester:</strong> Tillverkad från återvunna plastflaskor och textilier
            </li>
            <li className={styles.listItem}>
              <strong>Tencel/Lyocell:</strong> Hållbart cellulosabaserat material från certifierade skogar
            </li>
            <li className={styles.listItem}>
              <strong>Återvunnen Bomull:</strong> Tillverkad från textilrester och gamla kläder
            </li>
            <li className={styles.listItem}>
              <strong>Innovativa Textilier:</strong> Forskning om nya hållbara material som svamplä der och alglä der
            </li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Energieffektivitet</h3>
          <p className={styles.text}>
            Vi arbetar för att minska vår energiförbrukning och övergå till förnybar energi:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Installation av solpaneler på våra anläggningar</li>
            <li className={styles.listItem}>Övergång till LED-belysning i alla kontor och lager</li>
            <li className={styles.listItem}>Energieffektiva maskiner och utrustning</li>
            <li className={styles.listItem}>Samarbete med leverantörer som använder förnybar energi</li>
            <li className={styles.listItem}>Mål att bli koldioxidneutrala senast 2030</li>
          </ul>

          <h3 style={{fontSize: '20px', fontWeight: '600', marginTop: '25px', marginBottom: '15px'}}>Vattenhantering</h3>
          <p className={styles.text}>
            Textilproduktion är vattenintensiv. Vi arbetar för att minska vattenförbrukningen:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Implementering av vattensparande teknologier i färgning och tvätt</li>
            <li className={styles.listItem}>Återvinning och återanvändning av vatten i produktionen</li>
            <li className={styles.listItem}>Behandling av avloppsvatten för att förhindra förorening</li>
            <li className={styles.listItem}>Övergång till vattenlösa färgningstekniker där möjligt</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Avfallshantering</h2>
          <p className={styles.text}>
            Vi har implementerat omfattande program för att minimera avfall i hela vår verksamhet:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Återvinning:</strong> Återvinning av förpackningsmaterial, papper, plast och metall
            </li>
            <li className={styles.listItem}>
              <strong>Minskning av Överproduktion:</strong> AI-driven efterfrågeprognostisering för att undvika överproduktion
            </li>
            <li className={styles.listItem}>
              <strong>Donationer:</strong> Överskottsprodukter doneras till välgörenhetsorganisationer
            </li>
            <li className={styles.listItem}>
              <strong>Textilåtervinning:</strong> Program för att samla in och återvinna gamla kläder
            </li>
            <li className={styles.listItem}>
              <strong>Hållbar Förpackning:</strong> Övergång till återvinningsbara och biologiskt nedbrytbara förpackningsmaterial
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ansvarsfull Produktion</h2>
          <p className={styles.text}>
            Vi arbetar endast med leverantörer som delar vårt engagemang för ansvarsfull produktion:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Arbetarnas Rättigheter:</strong> Säkra arbetsförhållanden, rättvisa löner och respekt för arbetarnas rättigheter
            </li>
            <li className={styles.listItem}>
              <strong>Nolltolerans:</strong> Mot barnarbete, tvångsarbete och diskriminering
            </li>
            <li className={styles.listItem}>
              <strong>Regelbundna Inspektioner:</strong> Oberoende revisioner av alla fabriker
            </li>
            <li className={styles.listItem}>
              <strong>Utbildning:</strong> Utbildningsprogram för leverantörer om hållbarhet och arbetsnormer
            </li>
            <li className={styles.listItem}>
              <strong>Certifieringar:</strong> Samarbete med certifierade fabriker (BSCI, WRAP, SA8000)
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Koldioxidavtryck</h2>
          <p className={styles.text}>
            Vi arbetar aktivt för att minska vårt koldioxidavtryck:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Mätning av koldioxidutsläpp i hela värdekedjan</li>
            <li className={styles.listItem}>Optimering av logistik för att minska transporter</li>
            <li className={styles.listItem}>Investering i koldioxidkompensationsprojekt</li>
            <li className={styles.listItem}>Övergång till elfordon för lokala leveranser</li>
            <li className={styles.listItem}>Mål att minska utsläppen med 50% senast 2030</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Transparens och Rapportering</h2>
          <p className={styles.text}>
            Vi tror på öppenhet och ansvarsskyldighet:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Årliga Hållbarhetsrapporter:</strong> Detaljerad rapportering av våra framsteg och utmaningar
            </li>
            <li className={styles.listItem}>
              <strong>Leverantörslistor:</strong> Publicering av information om våra leverantörer
            </li>
            <li className={styles.listItem}>
              <strong>Produktinformation:</strong> Tydlig märkning av hållbara produkter
            </li>
            <li className={styles.listItem}>
              <strong>Öppen Dialog:</strong> Välkomnar feedback från kunder och intressenter
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Samarbeten och Partnerskap</h2>
          <p className={styles.text}>
            Vi samarbetar med organisationer och experter för att driva innovation inom hållbart mode:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Partnerskap med miljöorganisationer</li>
            <li className={styles.listItem}>Medlemskap i branschinitiativ för hållbarhet</li>
            <li className={styles.listItem}>Samarbete med forskningsinstitutioner</li>
            <li className={styles.listItem}>Deltagande i globala hållbarhetsforum</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Våra Hållbarhetsmål</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>2025</strong>
              <p>50% av kollektionen tillverkad av hållbara material</p>
            </div>
            <div className={styles.card}>
              <strong>2027</strong>
              <p>100% förnybar energi i alla egna anläggningar</p>
            </div>
            <div className={styles.card}>
              <strong>2030</strong>
              <p>Koldioxidneutral verksamhet</p>
            </div>
            <div className={styles.card}>
              <strong>2030</strong>
              <p>Noll avfall till deponi</p>
            </div>
            <div className={styles.card}>
              <strong>2035</strong>
              <p>100% cirkulär affärsmodell</p>
            </div>
            <div className={styles.card}>
              <strong>Löpande</strong>
              <p>Kontinuerlig förbättring av arbetsförhållanden</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vad Kan Du Göra?</h2>
          <p className={styles.text}>
            Hållbarhet är ett gemensamt ansvar. Här är några sätt du kan bidra:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Välj produkter märkta som hållbara</li>
            <li className={styles.listItem}>Ta hand om dina kläder för att förlänga deras livslängd</li>
            <li className={styles.listItem}>Återvinn gamla kläder genom vårt återvinningsprogram</li>
            <li className={styles.listItem}>Köp mindre men bättre kvalitet</li>
            <li className={styles.listItem}>Dela och inspirera andra att göra hållbara val</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontakt</h2>
          <p className={styles.text}>
            Har du frågor om vårt hållbarhetsarbete? Kontakta oss:
          </p>
          <p className={styles.text}>
            E-post: sustainability@shein.com<br />
            Telefon: +46 8 123 456 78
          </p>
          <p className={styles.text}>
            Tillsammans skapar vi en mer hållbar framtid för mode.
          </p>
        </section>
      </div>
    </div>
  );
}
