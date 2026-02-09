'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './messages.module.css';
import { UserIcon, PackageIcon, HeartIcon, MessageIcon, TicketIcon, StarIcon, EyeIcon, GiftIcon, MailIcon, SettingsIcon, ShoppingBagIcon } from '@/components/Icons/AccountIcons';

const MOCK_MESSAGES = [
    {
        id: '1',
        type: 'order',
        title: 'Din beställning har skickats',
        message: 'Din beställning #SE12345678 har skickats och är på väg till dig. Förväntad leverans: 2024-02-15',
        date: '2024-02-10 14:30',
        read: false,
        image: 'https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=100',
        link: '/account/orders/SE12345678'
    },
    {
        id: '2',
        type: 'promotion',
        title: '🎉 Exklusiv rabatt bara för dig!',
        message: 'Få 20% rabatt på hela sortimentet med koden SPECIAL20. Erbjudandet gäller till 2024-02-20.',
        date: '2024-02-09 10:15',
        read: false,
        image: null,
        link: '/catalog'
    },
    {
        id: '3',
        type: 'order',
        title: 'Beställning levererad',
        message: 'Din beställning #SE12345677 har levererats. Tack för ditt köp! Lämna gärna en recension.',
        date: '2024-02-08 16:45',
        read: true,
        image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=100',
        link: '/account/orders/SE12345677'
    },
    {
        id: '4',
        type: 'points',
        title: 'Du har fått 89 poäng!',
        message: 'Grattis! Du har tjänat 89 poäng från ditt senaste köp. Använd dina poäng för att få rabatter.',
        date: '2024-02-07 12:20',
        read: true,
        image: null,
        link: '/account/points'
    },
    {
        id: '5',
        type: 'wishlist',
        title: 'Produkt från din önskelista är nu på rea!',
        message: 'Elegant Röd Klänning från din önskelista har nu 40% rabatt. Passa på innan det tar slut!',
        date: '2024-02-06 09:00',
        read: true,
        image: 'https://images.unsplash.com/photo-1595777707802-221b42c0bbb2?w=100',
        link: '/product/1'
    },
    {
        id: '6',
        type: 'system',
        title: 'Uppdatering av användarvillkor',
        message: 'Vi har uppdaterat våra användarvillkor. Läs igenom de nya villkoren för att fortsätta använda våra tjänster.',
        date: '2024-02-05 08:30',
        read: true,
        image: null,
        link: '/terms'
    },
    {
        id: '7',
        type: 'promotion',
        title: 'Ny kollektion släppt!',
        message: 'Upptäck vår nya vårkollektionen med över 500 nya produkter. Shoppa nu och få fri frakt!',
        date: '2024-02-04 11:00',
        read: true,
        image: null,
        link: '/catalog?collection=spring'
    }
];

export default function MessagesPage() {
    const [messages, setMessages] = useState(MOCK_MESSAGES);
    const [filter, setFilter] = useState<'all' | 'unread'>('all');

    const unreadCount = messages.filter(m => !m.read).length;
    const filteredMessages = filter === 'unread' 
        ? messages.filter(m => !m.read)
        : messages;

    const handleMarkAsRead = (id: string) => {
        setMessages(messages.map(m => 
            m.id === id ? { ...m, read: true } : m
        ));
    };

    const handleMarkAllAsRead = () => {
        setMessages(messages.map(m => ({ ...m, read: true })));
    };

    const handleDelete = (id: string) => {
        setMessages(messages.filter(m => m.id !== id));
    };

    const getMessageIcon = (type: string) => {
        switch (type) {
            case 'order': return <PackageIcon />;
            case 'promotion': return <GiftIcon />;
            case 'points': return <StarIcon />;
            case 'wishlist': return <HeartIcon />;
            case 'system': return <SettingsIcon />;
            default: return <MailIcon />;
        }
    };

    return (
        <div className={styles.messagesPage}>
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
                            <Link href="/account/orders" className={styles.navItem}>
                                <span><PackageIcon /></span> Mina beställningar
                            </Link>
                            <Link href="/account/messages" className={`${styles.navItem} ${styles.active}`}>
                                <span><MessageIcon /></span> Mina Meddelanden
                                {unreadCount > 0 && (
                                    <span className={styles.badge}>{unreadCount}</span>
                                )}
                            </Link>
                            <Link href="/wishlist" className={styles.navItem}>
                                <span><HeartIcon /></span> Önskelista
                            </Link>
                            <Link href="/account/coupons" className={styles.navItem}>
                                <span><TicketIcon /></span> Kuponger
                            </Link>
                            <Link href="/account/points" className={styles.navItem}>
                                <span><StarIcon /></span> Mina Poäng
                            </Link>
                            <Link href="/account/recently-viewed" className={styles.navItem}>
                                <span><EyeIcon /></span> Nyligen Visat
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className={styles.content}>
                        <div className={styles.header}>
                            <h1 className={styles.pageTitle}>
                                Mina Meddelanden
                                {unreadCount > 0 && (
                                    <span className={styles.unreadBadge}>{unreadCount} olästa</span>
                                )}
                            </h1>
                            {unreadCount > 0 && (
                                <button className={styles.markAllBtn} onClick={handleMarkAllAsRead}>
                                    Markera alla som lästa
                                </button>
                            )}
                        </div>

                        <div className={styles.filters}>
                            <button 
                                className={`${styles.filterBtn} ${filter === 'all' ? styles.activeFilter : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                Alla ({messages.length})
                            </button>
                            <button 
                                className={`${styles.filterBtn} ${filter === 'unread' ? styles.activeFilter : ''}`}
                                onClick={() => setFilter('unread')}
                            >
                                Olästa ({unreadCount})
                            </button>
                        </div>

                        {filteredMessages.length === 0 ? (
                            <div className={styles.emptyState}>
                                <div className={styles.emptyIcon}><MailIcon /></div>
                                <h2>Inga meddelanden</h2>
                                <p>
                                    {filter === 'unread' 
                                        ? 'Du har inga olästa meddelanden' 
                                        : 'Du har inga meddelanden ännu'}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.messagesList}>
                                {filteredMessages.map((message) => (
                                    <div 
                                        key={message.id} 
                                        className={`${styles.messageCard} ${!message.read ? styles.unread : ''}`}
                                    >
                                        <div className={styles.messageIcon}>
                                            {getMessageIcon(message.type)}
                                        </div>
                                        
                                        {message.image && (
                                            <div className={styles.messageImage}>
                                                <Image
                                                    src={message.image}
                                                    alt=""
                                                    width={60}
                                                    height={75}
                                                    style={{ objectFit: 'cover', borderRadius: '4px' }}
                                                />
                                            </div>
                                        )}

                                        <div className={styles.messageContent}>
                                            <div className={styles.messageHeader}>
                                                <h3 className={styles.messageTitle}>
                                                    {message.title}
                                                    {!message.read && (
                                                        <span className={styles.newBadge}>NY</span>
                                                    )}
                                                </h3>
                                                <span className={styles.messageDate}>{message.date}</span>
                                            </div>
                                            <p className={styles.messageText}>{message.message}</p>
                                            <div className={styles.messageActions}>
                                                {message.link && (
                                                    <Link 
                                                        href={message.link} 
                                                        className={styles.viewBtn}
                                                        onClick={() => handleMarkAsRead(message.id)}
                                                    >
                                                        Visa mer
                                                    </Link>
                                                )}
                                                {!message.read && (
                                                    <button 
                                                        className={styles.markReadBtn}
                                                        onClick={() => handleMarkAsRead(message.id)}
                                                    >
                                                        Markera som läst
                                                    </button>
                                                )}
                                                <button 
                                                    className={styles.deleteBtn}
                                                    onClick={() => handleDelete(message.id)}
                                                >
                                                    Ta bort
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
