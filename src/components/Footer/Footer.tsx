'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { VisaIcon, MastercardIcon, DHLIcon, PostNordIcon, DBSchenkerIcon } from '../BrandIcons';
import { FacebookIcon, InstagramIcon, TwitterIcon, TikTokIcon, YouTubeIcon } from '../SocialIcons';
import { useLocale } from '@/context/LocaleContext';
import { getFooterTranslation } from '@/translations/footer';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [mounted, setMounted] = useState(false);
  const { country } = useLocale();

  // Get translation with fallback
  const t = getFooterTranslation(country.code) || {} as any;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscriptionMessage(t.subscribeSuccess || 'Tack!');
      setEmail('');
      setTimeout(() => setSubscriptionMessage(''), 3000);
    } else {
      setSubscriptionMessage(t.subscribeError || 'Felaktig e-post.');
    }
  };

  return (
    <footer className={styles.footer} id="main-footer">
      <div className={styles.container}>
        {/* Company Info Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>{t.companyInfo || 'INFORMATION'}</h3>
          <ul className={styles.links}>
            <li><Link href="/about">{t.aboutShein || 'Om SHEIN'}</Link></li>
            <li><Link href="/social-responsibility">{t.socialResponsibility || 'Socialt ansvar'}</Link></li>
            <li><Link href="/fashion-blogger">{t.fashionBlogger || 'Modebloggare'}</Link></li>
            <li><Link href="/supply-chain">{t.supplyChain || 'Försörjningskedja'}</Link></li>
            <li><Link href="/careers">{t.careers || 'Karriärer'}</Link></li>
            <li><Link href="/sustainability">{t.sustainability || 'Hållbarhet'}</Link></li>
            <li><Link href="/press">{t.press || 'Press & Nyheter'}</Link></li>
          </ul>
        </div>

        {/* Help & Support Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>{t.helpSupport || 'SUPPORT'}</h3>
          <ul className={styles.links}>
            <li><Link href="/shipping">{t.shippingInfo || 'Fraktinformation'}</Link></li>
            <li><Link href="/returns">{t.returns || 'Retur'}</Link></li>
            <li><Link href="/how-to-order">{t.howToOrder || 'Hur man beställer'}</Link></li>
            <li><Link href="/track-order">{t.trackOrder || 'Hur man spårar'}</Link></li>
            <li><Link href="/size-guide">{t.sizeGuide || 'Storleksguide'}</Link></li>
            <li><Link href="/shein-vip">{t.sheinVip || 'SHEIN VIP'}</Link></li>
            <li><Link href="/faq">{t.faq || 'Vanliga frågor'}</Link></li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>{t.customerService || 'KUNDSERVICE'}</h3>
          <ul className={styles.links}>
            <li><Link href="/contact">{t.contactUs || 'Kontakta oss'}</Link></li>
            <li><Link href="/payment-method">{t.paymentMethod || 'Betalningsmetod'}</Link></li>
            <li><Link href="/bonus-points">{t.bonusPoints || 'Bonuspunkter'}</Link></li>
          </ul>
        </div>

        {/* Shopping Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>{t.shopping || 'SHOPPING'}</h3>
          <ul className={styles.links}>
            <li><Link href="/new-arrivals">{t.newArrivals || 'Nyheter'}</Link></li>
            <li><Link href="/sale">{t.sale || 'Rea'}</Link></li>
            <li><Link href="/trending">{t.trending || 'Trendigt nu'}</Link></li>
            <li><Link href="/gift-cards">{t.giftCards || 'Presentkort'}</Link></li>
            <li><Link href="/student-discount">{t.studentDiscount || 'Studentrabatt'}</Link></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>{t.legal || 'POLICYS'}</h3>
          <ul className={styles.links}>
            <li><Link href="/terms">{t.terms || 'Användarvillkor'}</Link></li>
            <li><Link href="/privacy">{t.privacy || 'Integritetspolicy'}</Link></li>
            <li><Link href="/cookies">{t.cookies || 'Cookiepolicy'}</Link></li>
            <li><Link href="/disclaimer">{t.disclaimer || 'Ansvarsfriskrivning'}</Link></li>
          </ul>
        </div>
      </div>

      {/* Middle Bar: Newsletter & Social */}
      <div className={styles.middleRow}>
        <div className={styles.middleContainer}>
          <div className={styles.newsletterSection}>
            <h3 className={styles.sectionTitle}>{t.newsletter || 'NYHETSBREV'}</h3>
            <p className={styles.newsletterText}>{t.newsletterText || 'Prenumerera för exklusiva erbjudanden!'}</p>
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder || 'Din e-postadress'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                  aria-label="Email for newsletter"
                />
                <button type="submit" className={styles.subscribeButton}>
                  {t.subscribe || 'Prenumerera'}
                </button>
              </div>
            </form>
            {subscriptionMessage && <p className={styles.message}>{subscriptionMessage}</p>}
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>{t.followUs || 'FÖLJ OSS'}</h3>
            <div className={styles.socialMedia}>
              <a href="https://facebook.com/shein" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/shein" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com/shein" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://tiktok.com/@shein" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="https://youtube.com/@shein" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Payment & Delivery Methods */}
      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <div className={styles.methodsRow}>
            <div className={styles.methodGroup}>
              <h4 className={styles.methodTitle}>{t.payment || 'BETALNING'}</h4>
              <div className={styles.icons}>
                <VisaIcon className={styles.brandIcon} />
                <MastercardIcon className={styles.brandIcon} />
              </div>
            </div>
            <div className={styles.methodGroup}>
              <h4 className={styles.methodTitle}>{t.delivery || 'LEVERANS'}</h4>
              <div className={styles.icons}>
                <PostNordIcon className={styles.brandIcon} />
                <DBSchenkerIcon className={styles.brandIcon} />
                <DHLIcon className={styles.brandIcon} />
              </div>
            </div>
          </div>

          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>© {mounted ? currentYear : '2024'} VIRELUNA. {t.copyright || 'Alla rättigheter förbehållna.'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


