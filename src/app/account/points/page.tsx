'use client';

import React from 'react';
import Link from 'next/link';
import styles from './points.module.css';
import { UserIcon, PackageIcon, HeartIcon, TicketIcon, StarIcon, EyeIcon, ShoppingBagIcon, MailIcon, GiftIcon } from '@/components/Icons/AccountIcons';

const MOCK_POINTS_HISTORY = [
    {
        id: '1',
        date: '2024-02-10',
        description: 'Köp - Order #SE12345678',
        points: 89,
        type: 'earned'
    },
    {
        id: '2',
        date: '2024-02-08',
        description: 'Produktrecension',
        points: 50,
        type: 'earned'
    },
    {
        id: '3',
        date: '2024-02-05',
        description: 'Välkomstbonus',
        points: 100,
        type: 'earned'
    },
    {
        id: '4',
        date: '2024-02-03',
        description: 'Inlöst kupong',
        points: -50,
        type: 'spent'
    },
    {
        id: '5',
        date: '2024-02-01',
        description: 'Köp - Order #SE12345677',
        points: 45,
        type: 'earned'
    }
];

const REWARDS = [
    {
        id: '1',
        title: '50 kr rabatt',
        points: 500,
        description: 'Gäller på köp över 500 kr'
    },
    {
        id: '2',
        title: '100 kr rabatt',
        points: 1000,
        description: 'Gäller på köp över 1000 kr'
    },
    {
        id: '3',
        title: 'Fri frakt',
        points: 300,
        description: 'Fri frakt på din nästa order'
    },
    {
        id: '4',
        title: '17% rabatt',
        points: 800,
        description: 'Gäller på hela sortimentet'
    }
];

export default function PointsPage() {
    const totalPoints = 234;
    const pointsToNextReward = 66;

    return (
        <div className={styles.pointsPage}>
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
                            <Link href="/wishlist" className={styles.navItem}>
                                <span><HeartIcon /></span> Önskelista
                            </Link>
                            <Link href="/account/coupons" className={styles.navItem}>
                                <span><TicketIcon /></span> Kuponger
                            </Link>
                            <Link href="/account/points" className={`${styles.navItem} ${styles.active}`}>
                                <span><StarIcon /></span> Mina Poäng
                            </Link>
                            <Link href="/account/recently-viewed" className={styles.navItem}>
                                <span><EyeIcon /></span> Nyligen Visat
                            </Link>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className={styles.content}>
                        <h1 className={styles.pageTitle}>Mina Poäng</h1>

                        {/* Points Summary */}
                        <div className={styles.pointsSummary}>
                            <div className={styles.pointsCard}>
                                <div className={styles.pointsIcon}><StarIcon /></div>
                                <div>
                                    <h2 className={styles.pointsAmount}>{totalPoints}</h2>
                                    <p className={styles.pointsLabel}>Tillgängliga poäng</p>
                                </div>
                            </div>
                            <div className={styles.progressCard}>
                                <p className={styles.progressText}>
                                    {pointsToNextReward} poäng till nästa belöning
                                </p>
                                <div className={styles.progressBar}>
                                    <div 
                                        className={styles.progressFill} 
                                        style={{ width: `${(totalPoints / 300) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* How to Earn Points */}
                        <div className={styles.earnSection}>
                            <h2 className={styles.sectionTitle}>Tjäna poäng</h2>
                            <div className={styles.earnGrid}>
                                <div className={styles.earnCard}>
                                    <div className={styles.earnIcon}><ShoppingBagIcon /></div>
                                    <h3>Handla</h3>
                                    <p>1 poäng per 10 kr</p>
                                </div>
                                <div className={styles.earnCard}>
                                    <div className={styles.earnIcon}><MailIcon /></div>
                                    <h3>Skriv recension</h3>
                                    <p>50 poäng per recension</p>
                                </div>
                                <div className={styles.earnCard}>
                                    <div className={styles.earnIcon}><GiftIcon /></div>
                                    <h3>Födelsedagsbonus</h3>
                                    <p>100 poäng</p>
                                </div>
                                <div className={styles.earnCard}>
                                    <div className={styles.earnIcon}><UserIcon /></div>
                                    <h3>Bjud in vänner</h3>
                                    <p>200 poäng per vän</p>
                                </div>
                            </div>
                        </div>

                        {/* Available Rewards */}
                        <div className={styles.rewardsSection}>
                            <h2 className={styles.sectionTitle}>Tillgängliga belöningar</h2>
                            <div className={styles.rewardsGrid}>
                                {REWARDS.map((reward) => (
                                    <div key={reward.id} className={styles.rewardCard}>
                                        <div className={styles.rewardHeader}>
                                            <h3 className={styles.rewardTitle}>{reward.title}</h3>
                                            <div className={styles.rewardPoints}>
                                                {reward.points} poäng
                                            </div>
                                        </div>
                                        <p className={styles.rewardDescription}>{reward.description}</p>
                                        <button 
                                            className={styles.redeemBtn}
                                            disabled={totalPoints < reward.points}
                                        >
                                            {totalPoints >= reward.points ? 'Lös in' : 'Inte tillräckligt med poäng'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Points History */}
                        <div className={styles.historySection}>
                            <h2 className={styles.sectionTitle}>Poänghistorik</h2>
                            <div className={styles.historyList}>
                                {MOCK_POINTS_HISTORY.map((item) => (
                                    <div key={item.id} className={styles.historyItem}>
                                        <div className={styles.historyLeft}>
                                            <p className={styles.historyDate}>{item.date}</p>
                                            <p className={styles.historyDescription}>{item.description}</p>
                                        </div>
                                        <div className={`${styles.historyPoints} ${item.type === 'earned' ? styles.earned : styles.spent}`}>
                                            {item.type === 'earned' ? '+' : ''}{item.points}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
