'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css';
import { UserIcon, PackageIcon, HeartIcon, MapPinIcon, TicketIcon, LockIcon, LogOutIcon } from '@/components/Icons/AccountIcons';

const MOCK_ORDERS = [
    {
        id: 'SE12345678',
        date: '2024-02-01',
        status: 'Levererad',
        total: 899,
        items: [
            {
                id: '1',
                name: 'Elegant Röd Klänning',
                image: 'https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=100',
                price: 299,
                quantity: 1,
                size: 'M',
                color: 'Röd'
            },
            {
                id: '3',
                name: 'Skinny Jeans',
                image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=100',
                price: 600,
                quantity: 1,
                size: '38',
                color: 'Blå'
            }
        ]
    },
    {
        id: 'SE12345679',
        date: '2024-02-05',
        status: 'Skickad',
        total: 299,
        items: [
            {
                id: '4',
                name: 'Sportiga Sneakers',
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100',
                price: 299,
                quantity: 1,
                size: '40',
                color: 'Vit'
            }
        ]
    }
];

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState('orders');

    return (
        <div className={styles.accountPage}>
            <div className={styles.container}>
                <div className={styles.accountLayout}>
                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.userInfo}>
                            <div className={styles.avatar}>A</div>
                            <div>
                                <h3 className={styles.userName}>Användare</h3>
                                <p className={styles.memberSince}>Medlem sedan 2024</p>
                            </div>
                        </div>

                        <nav className={styles.nav}>
                            <Link href="/account" className={styles.navItem}>
                                <span><UserIcon /></span> Personuppgifter
                            </Link>
                            <Link href="/account/orders" className={`${styles.navItem} ${styles.active}`}>
                                <span><PackageIcon /></span> Mina beställningar
                            </Link>
                            <Link href="/wishlist" className={styles.navItem}>
                                <span><HeartIcon /></span> Önskelista
                            </Link>
                            <Link href="/account/messages" className={styles.navItem}>
                                <span><MapPinIcon /></span> Adresser
                            </Link>
                            <Link href="/account/coupons" className={styles.navItem}>
                                <span><TicketIcon /></span> Kuponger
                            </Link>
                            <Link href="/account/points" className={styles.navItem}>
                                <span><LockIcon /></span> Byt lösenord
                            </Link>
                            <Link href="/auth/login" className={styles.navItem} style={{ color: '#e60012' }}>
                                <span><LogOutIcon /></span> Logga ut
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className={styles.content}>
                        <h1 className={styles.sectionTitle}>Mina beställningar</h1>

                        <div className={styles.ordersList}>
                            {MOCK_ORDERS.map((order) => (
                                <div key={order.id} className={styles.orderCard}>
                                    <div className={styles.orderHeader}>
                                        <div>
                                            <span className={styles.orderId}>Order #{order.id}</span>
                                            <span className={styles.orderDate}>{order.date}</span>
                                        </div>
                                        <span className={styles.orderStatus}>{order.status}</span>
                                    </div>

                                    <div className={styles.orderItems}>
                                        {order.items.map((item) => (
                                            <div key={item.id} className={styles.orderItem}>
                                                <div style={{ position: 'relative', width: '60px', height: '75px' }}>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div>
                                                    <span>{item.name}</span>
                                                    <small>Storlek: {item.size} | Färg: {item.color}</small>
                                                    <small>{item.price} kr x {item.quantity}</small>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={styles.orderFooter}>
                                        <span className={styles.orderTotal}>Totalt: {order.total} kr</span>
                                        <Link href={`/account/orders/${order.id}`} className={styles.viewOrderBtn}>
                                            Visa orderdetaljer
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
