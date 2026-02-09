'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './order-details.module.css';

// Mock order data - in a real app, this would come from an API
const mockOrders: Record<string, any> = {};

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;

  // In a real app, fetch order details from API
  const order = mockOrders[orderId] || {
    id: orderId,
    orderNumber: '#123456',
    date: new Date().toLocaleDateString('sv-SE'),
    status: 'processing',
    items: [],
    shippingAddress: {
      firstName: 'Anna',
      lastName: 'Andersson',
      addressLine1: 'Storgatan 1',
      postalCode: '111 22',
      city: 'Stockholm',
      email: 'anna@example.com',
      phone: '+46 70 123 45 67',
    },
    shippingMethod: {
      name: 'Standard frakt',
      estimatedDays: '3-5',
    },
    paymentMethod: {
      type: 'credit_card',
      cardBrand: 'Visa',
      cardLast4: '4242',
    },
    pricing: {
      subtotal: 599,
      discount: 0,
      shipping: 0,
      tax: 149.75,
      total: 748.75,
    },
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'Behandlas';
      case 'shipped':
        return 'Skickad';
      case 'delivered':
        return 'Levererad';
      case 'cancelled':
        return 'Avbruten';
      default:
        return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'processing':
        return styles.statusProcessing;
      case 'shipped':
        return styles.statusShipped;
      case 'delivered':
        return styles.statusDelivered;
      case 'cancelled':
        return styles.statusCancelled;
      default:
        return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/account/orders" className={styles.backLink}>
          ← Tillbaka till beställningar
        </Link>
        <h1 className={styles.title}>Orderdetaljer</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.orderInfo}>
          <div className={styles.infoRow}>
            <span className={styles.label}>Ordernummer:</span>
            <span className={styles.value}>{order.orderNumber}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Datum:</span>
            <span className={styles.value}>{order.date}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>Status:</span>
            <span className={`${styles.status} ${getStatusClass(order.status)}`}>
              {getStatusText(order.status)}
            </span>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Produkter</h2>
          {order.items.length === 0 ? (
            <p className={styles.emptyText}>Inga produkter i denna order</p>
          ) : (
            <div className={styles.productsList}>
              {order.items.map((item: any) => (
                <div key={item.id} className={styles.productItem}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{item.product.name}</h3>
                    <p className={styles.productVariant}>
                      Storlek: {item.selectedSize} | Färg: {item.selectedColor}
                    </p>
                    <p className={styles.productQuantity}>Antal: {item.quantity}</p>
                  </div>
                  <div className={styles.productPrice}>
                    {item.price * item.quantity} kr
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Leveransadress</h2>
          <div className={styles.addressBox}>
            <p className={styles.addressName}>
              {order.shippingAddress.firstName} {order.shippingAddress.lastName}
            </p>
            <p>{order.shippingAddress.addressLine1}</p>
            <p>
              {order.shippingAddress.postalCode} {order.shippingAddress.city}
            </p>
            <p className={styles.addressContact}>
              E-post: {order.shippingAddress.email}
            </p>
            <p className={styles.addressContact}>
              Telefon: {order.shippingAddress.phone}
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Leveransmetod</h2>
          <p>{order.shippingMethod.name}</p>
          <p className={styles.detailText}>
            Beräknad leveranstid: {order.shippingMethod.estimatedDays} arbetsdagar
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Betalningsmetod</h2>
          <p>
            {order.paymentMethod.type === 'credit_card' && 'Kreditkort'}
            {order.paymentMethod.type === 'paypal' && 'PayPal'}
            {order.paymentMethod.type === 'klarna' && 'Klarna'}
            {order.paymentMethod.type === 'swish' && 'Swish'}
          </p>
          {order.paymentMethod.cardLast4 && (
            <p className={styles.detailText}>
              {order.paymentMethod.cardBrand} ****{order.paymentMethod.cardLast4}
            </p>
          )}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Ordersammanfattning</h2>
          <div className={styles.summaryBox}>
            <div className={styles.summaryRow}>
              <span>Delsumma</span>
              <span>{order.pricing.subtotal.toFixed(2)} kr</span>
            </div>
            {order.pricing.discount > 0 && (
              <div className={`${styles.summaryRow} ${styles.discount}`}>
                <span>Rabatt</span>
                <span>-{order.pricing.discount.toFixed(2)} kr</span>
              </div>
            )}
            <div className={styles.summaryRow}>
              <span>Frakt</span>
              <span>
                {order.pricing.shipping === 0
                  ? 'Gratis'
                  : `${order.pricing.shipping.toFixed(2)} kr`}
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span>Moms (25%)</span>
              <span>{order.pricing.tax.toFixed(2)} kr</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Totalt</span>
              <span>{order.pricing.total.toFixed(2)} kr</span>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.button}>
            Kontakta kundservice
          </Link>
        </div>
      </div>
    </div>
  );
}
