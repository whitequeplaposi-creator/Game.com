import styles from '../info-page.module.css';

export default function SocialResponsibilityPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Socialt Ansvar</h1>
        <p className={styles.description}>
          På SHEIN tar vi vårt sociala ansvar på största allvar. Vi förstår att mode inte bara handlar om stil - det handlar också om att göra rätt för människor och planeten.
        </p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Arbetarnas Rättigheter</h2>
          <p className={styles.text}>
            Vi arbetar endast med leverantörer som följer internationella arbetsnormer och respekterar arbetarnas rättigheter. Alla våra fabriker genomgår regelbundna inspektioner för att säkerställa säkra och rättvisa arbetsförhållanden.
          </p>
          <p className={styles.text}>
            Vårt engagemang inkluderar rättvisa löner, säkra arbetsmiljöer, rimliga arbetstider och respekt för arbetarnas rätt att organisera sig. Vi har nolltolerans mot barnarbete och tvångsarbete.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hållbar Produktion</h2>
          <p className={styles.text}>
            Vi strävar efter att minimera vår miljöpåverkan genom att implementera hållbara produktionsmetoder. Detta inkluderar användning av miljövänliga material, minskning av vattenförbrukning och optimering av vår leveranskedja.
          </p>
          <p className={styles.text}>
            Vi investerar i ny teknologi för att minska avfall, återvinna material och använda förnybar energi i våra produktionsanläggningar.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Välgörenhet och Samhällsengagemang</h2>
          <p className={styles.text}>
            SHEIN stödjer olika välgörenhetsorganisationer och samhällsprojekt runt om i världen. Vi donerar regelbundet till utbildningsprogram, katastrofhjälp och initiativ som stärker kvinnors rättigheter.
          </p>
          <p className={styles.text}>
            Vi tror på att ge tillbaka till de samhällen där vi verkar och arbetar aktivt för att skapa positiv förändring.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Transparens</h2>
          <p className={styles.text}>
            Vi tror på öppenhet och transparens i vår verksamhet. Våra kunder har rätt att veta var och hur våra produkter tillverkas, och vi arbetar kontinuerligt för att förbättra vår rapportering.
          </p>
          <p className={styles.text}>
            Vi publicerar årliga hållbarhetsrapporter och välkomnar dialog med våra intressenter om hur vi kan förbättra vårt sociala ansvar.
          </p>
        </section>
      </div>
    </div>
  );
}
