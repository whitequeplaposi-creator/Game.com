'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, Review } from '@/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductDetail.module.css';

interface ProductDetailProps {
  product: Product;
  reviews?: Review[];
  relatedProducts?: Product[];
}

export default function ProductDetail({ product, reviews = [], relatedProducts = [] }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.image || product.images[0] || '/placeholder.jpg');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'shipping' | 'reviews'>('details');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [imageZoom, setImageZoom] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const inWishlist = isInWishlist(parseInt(product.id));

  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => setAddedToCart(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const getColorName = (color: string | { name: string; hex: string }) =>
    typeof color === 'string' ? color : color.name;

  const getColorHex = (color: string | { name: string; hex: string }) =>
    typeof color === 'string' ? '#000' : color.hex;

  const handleAddToCart = () => {
    const needsColorSelection = product.colors.length > 1;
    if (!selectedSize || (needsColorSelection && !selectedColor)) {
      alert('Vänligen välj storlek och färg');
      return;
    }
    const finalColor = needsColorSelection ? selectedColor : getColorName(product.colors[0]);
    addToCart(product, quantity, selectedSize, finalColor);
    setAddedToCart(true);
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(parseInt(product.id));
    } else {
      addToWishlist({
        id: parseInt(product.id),
        name: product.name,
        price: product.price,
        image: product.image || product.images[0],
        category: product.category,
        rating: product.rating,
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Image Gallery Section */}
        <div className={styles.imageSection}>
          <div className={styles.thumbnailList}>
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${selectedImage === image ? styles.activeThumbnail : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  width={80}
                  height={106}
                  className={styles.thumbnailImage}
                />
              </div>
            ))}
          </div>
          <div 
            className={styles.mainImageContainer}
            onMouseEnter={() => setImageZoom(true)}
            onMouseLeave={() => setImageZoom(false)}
          >
            <Image
              src={selectedImage}
              alt={product.name}
              width={800}
              height={1066}
              className={`${styles.mainImage} ${imageZoom ? styles.zoomedImage : ''}`}
              priority
            />
            {imageZoom && (
              <div className={styles.zoomHint}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                Hovra för att zooma
              </div>
            )}
          </div>
        </div>

        {/* Product Info Section */}
        <div className={styles.infoSection}>
          <div className={styles.stickyInfo}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
              <Link href="/">Hem</Link>
              <span>/</span>
              <Link href="/catalog">{product.category}</Link>
              <span>/</span>
              <span>{product.name}</span>
            </div>

            {/* Product Title & SKU */}
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.skuRow}>
              <span className={styles.skuLabel}>Art.nr:</span>
              <span className={styles.skuValue}>SW{product.id}0{Math.floor(Math.random() * 1000)}</span>
            </div>

            {/* Rating & Reviews */}
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className={styles.ratingNumber}>{product.rating}</span>
              <span className={styles.reviewCount}>({product.reviewCount} recensioner)</span>
            </div>

            {/* Price Section */}
            <div className={styles.priceSection}>
              <div className={styles.priceRow}>
                <span className={styles.currentPrice}>{product.price} kr</span>
                {product.originalPrice && (
                  <>
                    <span className={styles.originalPrice}>{product.originalPrice} kr</span>
                    <span className={styles.discountBadge}>-{discountPercentage}%</span>
                  </>
                )}
              </div>
              <div className={styles.taxInfo}>Inkl. moms</div>
            </div>

            {/* Color Selector */}
            {product.colors.length > 1 && (
              <div className={styles.optionGroup}>
                <div className={styles.optionHeader}>
                  <span className={styles.optionLabel}>Färg:</span>
                  {selectedColor && <span className={styles.selectedValue}>{selectedColor}</span>}
                </div>
                <div className={styles.colorGrid}>
                  {product.colors.map((color) => {
                    const colorName = getColorName(color);
                    const colorHex = getColorHex(color);
                    return (
                      <button
                        key={colorName}
                        className={`${styles.colorSwatch} ${selectedColor === colorName ? styles.selectedColor : ''}`}
                        onClick={() => setSelectedColor(colorName)}
                        title={colorName}
                        style={{ backgroundColor: colorHex }}
                      >
                        {selectedColor === colorName && (
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="white" stroke="white" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className={styles.optionGroup}>
              <div className={styles.optionHeader}>
                <span className={styles.optionLabel}>Storlek:</span>
                {selectedSize && <span className={styles.selectedValue}>{selectedSize}</span>}
                <button 
                  className={styles.sizeGuide}
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                  </svg>
                  Storleksguide
                </button>
              </div>
              <div className={styles.sizeGrid}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${selectedSize === size ? styles.selectedOption : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {showSizeGuide && (
                <div className={styles.sizeGuideTable}>
                  <table>
                    <thead>
                      <tr>
                        <th>Storlek</th>
                        <th>Byst (cm)</th>
                        <th>Midja (cm)</th>
                        <th>Höft (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>XS</td><td>78-82</td><td>60-64</td><td>84-88</td></tr>
                      <tr><td>S</td><td>82-86</td><td>64-68</td><td>88-92</td></tr>
                      <tr><td>M</td><td>86-90</td><td>68-72</td><td>92-96</td></tr>
                      <tr><td>L</td><td>90-94</td><td>72-76</td><td>96-100</td></tr>
                      <tr><td>XL</td><td>94-98</td><td>76-80</td><td>100-104</td></tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Antal:</span>
              <div className={styles.quantityControl}>
                <button 
                  className={styles.quantityBtn}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  −
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className={styles.quantityInput}
                />
                <button 
                  className={styles.quantityBtn}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <button
                className={`${styles.addToCartBtn} ${addedToCart ? styles.addedToCart : ''}`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {addedToCart ? (
                  <>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    TILLAGD I VARUKORG
                  </>
                ) : product.inStock ? 'LÄGG I VARUKORG' : 'SLUT I LAGER'}
              </button>
              <button
                className={`${styles.wishlistBtn} ${inWishlist ? styles.inWishlist : ''}`}
                onClick={handleWishlistToggle}
                aria-label={inWishlist ? 'Ta bort från favoriter' : 'Lägg till i favoriter'}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {/* Delivery Info */}
            <div className={styles.deliveryInfo}>
              <div className={styles.deliveryItem}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <div>
                  <strong>Fri frakt</strong>
                  <span>över 499 kr</span>
                </div>
              </div>
              <div className={styles.deliveryItem}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <div>
                  <strong>Fri retur</strong>
                  <span>inom 30 dagar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className={styles.detailsSection}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'details' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Produktdetaljer
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'shipping' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            Leverans & Retur
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'reviews' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Recensioner ({product.reviewCount})
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'details' && (
            <div className={styles.detailsContent}>
              <h3>Produktbeskrivning</h3>
              <p>{product.description}</p>
              
              <h3>Produktdetaljer</h3>
              <div className={styles.detailsGrid}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Kategori:</span>
                  <span className={styles.detailValue}>{product.category}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Material:</span>
                  <span className={styles.detailValue}>95% Polyester, 5% Elastan</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Mönster:</span>
                  <span className={styles.detailValue}>Enfärgad</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Passform:</span>
                  <span className={styles.detailValue}>Normal passform</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Längd:</span>
                  <span className={styles.detailValue}>Knälång</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Tillgängliga storlekar:</span>
                  <span className={styles.detailValue}>{product.sizes.join(', ')}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Tillgängliga färger:</span>
                  <span className={styles.detailValue}>{product.colors.map(c => getColorName(c)).join(', ')}</span>
                </div>
              </div>

              <h3>Vårdanvisningar</h3>
              <ul className={styles.careInstructions}>
                <li>Maskintvätt i 30°C</li>
                <li>Använd milt tvättmedel</li>
                <li>Tvätta med liknande färger</li>
                <li>Häng upp för torkning</li>
                <li>Stryk på låg temperatur vid behov</li>
                <li>Kemtvätt ej tillåten</li>
              </ul>
            </div>
          )}
          {activeTab === 'shipping' && (
            <div className={styles.shippingContent}>
              <h3>Leveransinformation</h3>
              <p>Fri frakt på beställningar över 499 kr</p>
              <p>Leveranstid: 3-5 arbetsdagar</p>
              <h3>Returpolicy</h3>
              <p>Fri retur inom 30 dagar från leveransdatum</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className={styles.reviewsContent}>
              <h3>Kundrecensioner</h3>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.id} className={styles.review}>
                    <div className={styles.reviewHeader}>
                      <span className={styles.reviewerName}>{review.reviewer}</span>
                      <span className={styles.reviewRating}>{'★'.repeat(review.rating)}</span>
                    </div>
                    <p className={styles.reviewText}>{review.text}</p>
                  </div>
                ))
              ) : (
                <p>Inga recensioner än</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>Du kanske också gillar</h2>
          <div className={styles.relatedGrid}>
            {relatedProducts.slice(0, 4).map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
