'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import OrderConfirmation from '@/components/Checkout/OrderConfirmation';

function ConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState<string>('');
  const [orderNumber, setOrderNumber] = useState<string>('');

  useEffect(() => {
    const id = searchParams.get('orderId');
    const number = searchParams.get('orderNumber');

    if (!id || !number) {
      router.push('/cart');
      return;
    }

    setOrderId(id);
    setOrderNumber(number);
  }, [searchParams, router]);

  if (!orderId || !orderNumber) {
    return null;
  }

  return <OrderConfirmation orderId={orderId} orderNumber={orderNumber} />;
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div>Laddar...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
