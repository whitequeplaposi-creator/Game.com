
export const categoryImageMapping: Record<string, string> = {
    'Kvinnor': 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', // Women
    'Män': 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400', // Men
    'Barn': 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400', // Kids
    'Skor': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', // Shoes
    'Väskor': 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400', // Bags
    'Accessoarer': 'https://images.unsplash.com/photo-15356333027efd-8fc49e0a09e1?w=400', // Accessories
    'Underkläder': 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?w=400', // Underwear
    'Sportkläder': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', // Sportswear
    'Skönhet': 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=400', // Beauty
    'Hem': 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400', // Home
    'Elektronik': 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400', // Electronics
    'Smycken': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400', // Jewelry
    'Kurviga storlekar': 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400', // Curve
    'Gravidkläder': 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400', // Maternity (approximation)
    'Bröllop': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', // Wedding
    'Festkläder': 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400', // Party
    'Ytterkläder': 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400', // Outerwear
    'Badkläder': 'https://images.unsplash.com/photo-1575493208761-d70bf52bf017?w=400', // Swimwear (approx)
    'Pyjamas': 'https://images.unsplash.com/photo-1552664683-176d1a9387bb?w=400', // Pajamas (approx)
    'Arbetskläder': 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400', // Workwear
};

export const getCategoryImage = (categoryName: string): string => {
    return categoryImageMapping[categoryName] || 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200'; // Default fallback
};
