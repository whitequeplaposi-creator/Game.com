-- Skapa produkttabell för Proloweel-produkter
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  original_price REAL,
  description TEXT,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  images TEXT NOT NULL, -- JSON array
  sizes TEXT NOT NULL, -- JSON array
  colors TEXT NOT NULL, -- JSON array
  rating REAL DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  in_stock BOOLEAN DEFAULT 1,
  is_hot BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index för snabbare sökningar
CREATE INDEX IF NOT EXISTS idx_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_in_stock ON products(in_stock);
CREATE INDEX IF NOT EXISTS idx_created_at ON products(created_at);

-- Exempel på att lägga till produkter från Proloweel
-- INSERT INTO products (name, price, original_price, description, category, image, images, sizes, colors, rating, review_count, in_stock, is_hot)
-- VALUES 
-- ('Produkt 1', 299.00, 399.00, 'Beskrivning', 'Kläder', '/images/product1.jpg', '["image1.jpg", "image2.jpg"]', '["S", "M", "L"]', '["Svart", "Vit"]', 4.5, 120, 1, 1);
