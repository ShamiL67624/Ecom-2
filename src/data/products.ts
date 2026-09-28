import { Product, Review } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1XTNnqVEULKnssBmDvxTZQIxkaksTDodRmNN1bEgkpkE_F5aVVzrCEBMoTeOf67L4xyeeS08lG6rKDQNxRPfvsoAMCIxrJZnpr-LmuuWep7mHpg0tCT_UiwSMEQ8X-T_R9mOCYm0Cwo2LE2JcVvVtdwQcVGrZYoYZOqnLvc9ntUcRAFBlQ_NxiAMBz1A1Vdt3KxDt1IueTUPE5HyhBiDTftNUqyG4Q0r6SaeFz91g-Bff13-JLzd5dnNKM";
export const PROFILE_AVATAR_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuA3o0ulM7c5ccTFwPrjQ_BNlzhoGcnYodPdSXnMg_c6VccChfyTGL2kJMnBq9yrVXIe1QH3riDHolrrFeSIH5WdJIoYLkttcr8NUlSbal488wlbzOJtTKO2SWXvoXRyG4ylpfpKp4NTQPOS_p40KeRZjoIwDXaaxerCO128BH-1YGzVZeqHWj36vZR4dt7-zaYYVgXQX1pTw3jP3W-cHkYS2Gzc1lQOXjtRNfYakHvcDiTPi--eIM9_0g";
export const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuA4aqRpk1ZTvAeAKC3eVz2Lqy2DDC8HN1ejKxdMQu66BES8eNx19-2Bol5sF4zCyRBfsaKcTV9eaIqnaWDGdQHqbfgViwC1TJHB7vD9tF3LTqX7J9C_ieKcdNrKsVfrR_kYoW08BG1_i01nw4CpgedOFy9QTiPU9d7mZf0B2npiO3W2-w8J6kkZ0OmbxhCZ4FqggrD-23c_YgNDAYHDrJlizrGTGhUck0uXh9P69mOwjwlqCO51CTYW5g";
export const VOGUE_CRITIC_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDZx-4SZHElRCP0KLV_ChlT4X56pFjAfL2X7cQWiiSDmAtBUJgOGrIARv4M69Sl1jujAJMPkH7hiXej7319IuuItoZ5MJuvTJ51f6483VfhNjBcKipwgo5He3FY3lnnht6hqIjd9E8O4gfck20WkNilhxRmEKBExKn8pMp32d07mV8SG3VADSjJle8B-UG70sfXbBo2vFuczESDiDItdOV1HF0J_3ryAr-gU7AsnbfyvBBflcySufURTQ";

export const CATEGORIES = [
  {
    id: 'all',
    label: 'All Garments',
    count: 148,
  },
  {
    id: 'streetwear',
    label: 'Streetwear',
    sublabel: '01 // ESSENTIALS',
    count: 32,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bn6FF-clfnjDV78fkXh1F2zFjhaLFMW7rH9YxR8LhL9CqimvXy0JqoscEpp9FBAxjA2tuUvcBGI9jtz_8zQPkthnb2nM-dTth9IppvheCq6tEJpO3VdXp6Z5vscV2H2BSkFR6Dg7WrRG5VRLYivBOQta-9vZ68_lwFn0nlNBzwqJ5nGvlp2zbO4nWbOvTEeVc9uXFDhHBG7s6XrddLj-wI-VSwZhAt7dgKPOPzx8OdDUuxyvBAJL8A',
  },
  {
    id: 'outerwear',
    label: 'Outerwear',
    sublabel: '02 // HEAVY COATS',
    count: 24,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKOjdlvUFHwDMH0N8A8c56otofEhsWq1FRty1Ab9IW5Q5wWewHsjSV0W23RjaqnTjqXhlg1SWM8ZQsx2xygs1ACDXpZjvKAqE-MB4SWoWx7TRB21IZEsdrXbRPTGGg-fy0HiB_AZZFGc7ZObLGHLF1QZ258Fz3rKmL44DFnbJ9-nsWhHnCZtqTjfJr4jMOAhU_6-N7zxmtZMCkV-AVDxY8gx006EH2cRAv71BaNw9JA-PL1dGCHq66Fg',
  },
  {
    id: 'tailored',
    label: 'Tailored',
    sublabel: '03 // SUITING',
    count: 28,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1G-puOeS8zJABGWse8n1wdK9Fuy7CKf-mvGahRqCSUzgLjM2MsfhJMo1YwIn3fjFdfp8Qq_i2loR7oTsjYmwdjCJtvfKuxlkp7M7Qr7j-Jkl3t5RPHNUwUdoIDBDvM7KmbxPCqzU4Ea202Hqiq_ehagwAME6uDSbM5Ict9C8mRXGunxUdWsRbRSbQCf7Lf7n9zojCLS5ZwjGBTHjHlPrYRrKlNGpGmbYAj_o0cwPPHFVecRCa4yg5Lw',
  },
  {
    id: 'footwear',
    label: 'Footwear',
    sublabel: '04 // FOOTWEAR',
    count: 15,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-xKQ41x8JPrtcicRdJOtpkD7Uke6cJlGUXWx57-r-Vie9rECg1xzsfZBHXGGuHTeVOOvj9OEkmC3inkz4W8YSx_-SFq1jtCR-ESM0r1CciS6mh-qhMvLGJPWcYKgy2u5U7QX_JBWnZ_qjbNMO3dX2xDA8dS6eDJzIHB4mtPME5643H_0pGXMhwWHCMoGdXBPQjXcv1O66KPINwjIPlRakiMSF4fajp8hyc7g-T7OeDca7da8NKfXUQQ',
  },
  {
    id: 'accessories',
    label: 'Accessories',
    sublabel: '05 // OBJECTS',
    count: 30,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMGHCd04rXl1xWFV4qTdZXgKHYFPmL7LqOH6Ld9e6SCRw_tChYwp_VySX1lN5t3S-SyzTWvAHawrbBdNxQGARl0eKUEzk-U0_VOUvtaZhzr3bbAKh8tY9sC64BL-FSJ0NtXXnNxlO2DYsEoQaL36kzIckVuU2LEOqUlo1lCShU7-bNP1qRAPLI8F8_USZkffHbXuibdXFziWPc3-_BMjXfmFt0s9j2c_9Xfvhuie7fgxB0ZEYKHDx3kA',
  },
  {
    id: 'knitwear',
    label: 'Knitwear & Mohair',
    sublabel: '06 // CAPSULE',
    count: 19,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz1ul_CHLDBxdf_tkE87aG4aqPVYyNR0y3fJVBVs6MruB3PDIQkeo5okbiCc0EDY4gjkOT_6U5DzvTRNwz3RQeCOHVyzKiDR47tjons3DJ7nwJWd90KPcS0eFpHOti8r1AlZQNJWeDMy57v9ym3455PRGtE7xELCjiWNkOA1dZPzj1vlAikQE1woRqpfhOY3nkrB7M8uCk-2j5dAxRkmUEma8uqNFGMBhjrAnH19T1Yb7KYQzWWFw0dQ',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-coat-01',
    title: 'Oversized Double-Breasted Wool Coat',
    subtitle: 'Melton Wool • Charcoal Tint & Camel Melange',
    category: 'outerwear',
    categoryLabel: 'Outerwear',
    price: 14999,
    originalPrice: 18500,
    rating: 4.9,
    reviewCount: 142,
    badge: 'BEST SELLER',
    badgeType: 'primary',
    edition: 'EDITION NO. 09 / ARCHIVAL DROP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDvd5iEoOeMBe1u6UL3WPz4dgKTa9bctLod7ljp5Ny3KWjKOmE_E5rCeySUmS85UcKqvxiV38ZBjbJ-RMGVNPQ7KSNPm-hkebTFCue1-4E28kxABoGA_WMO0MZRVJGIjGFT09G0DpRLRkXHClzXNdFXwkTGhXBe-PstldV_5L_qvc3FcJm3F7f5wQ4FxE7qJH6YiKD262OhBEnrGRb_icQei4PIYa7lFxUyEJHt6eLVPq4VOBES1q0wA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDvd5iEoOeMBe1u6UL3WPz4dgKTa9bctLod7ljp5Ny3KWjKOmE_E5rCeySUmS85UcKqvxiV38ZBjbJ-RMGVNPQ7KSNPm-hkebTFCue1-4E28kxABoGA_WMO0MZRVJGIjGFT09G0DpRLRkXHClzXNdFXwkTGhXBe-PstldV_5L_qvc3FcJm3F7f5wQ4FxE7qJH6YiKD262OhBEnrGRb_icQei4PIYa7lFxUyEJHt6eLVPq4VOBES1q0wA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKOjdlvUFHwDMH0N8A8c56otofEhsWq1FRty1Ab9IW5Q5wWewHsjSV0W23RjaqnTjqXhlg1SWM8ZQsx2xygs1ACDXpZjvKAqE-MB4SWoWx7TRB21IZEsdrXbRPTGGg-fy0HiB_AZZFGc7ZObLGHLF1QZ258Fz3rKmL44DFnbJ9-nsWhHnCZtqTjfJr4jMOAhU_6-N7zxmtZMCkV-AVDxY8gx006EH2cRAv71BaNw9JA-PL1dGCHq66Fg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bn6FF-clfnjDV78fkXh1F2zFjhaLFMW7rH9YxR8LhL9CqimvXy0JqoscEpp9FBAxjA2tuUvcBGI9jtz_8zQPkthnb2nM-dTth9IppvheCq6tEJpO3VdXp6Z5vscV2H2BSkFR6Dg7WrRG5VRLYivBOQta-9vZ68_lwFn0nlNBzwqJ5nGvlp2zbO4nWbOvTEeVc9uXFDhHBG7s6XrddLj-wI-VSwZhAt7dgKPOPzx8OdDUuxyvBAJL8A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4aqRpk1ZTvAeAKC3eVz2Lqy2DDC8HN1ejKxdMQu66BES8eNx19-2Bol5sF4zCyRBfsaKcTV9eaIqnaWDGdQHqbfgViwC1TJHB7vD9tF3LTqX7J9C_ieKcdNrKsVfrR_kYoW08BG1_i01nw4CpgedOFy9QTiPU9d7mZf0B2npiO3W2-w8J6kkZ0OmbxhCZ4FqggrD-23c_YgNDAYHDrJlizrGTGhUck0uXh9P69mOwjwlqCO51CTYW5g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAz1ul_CHLDBxdf_tkE87aG4aqPVYyNR0y3fJVBVs6MruB3PDIQkeo5okbiCc0EDY4gjkOT_6U5DzvTRNwz3RQeCOHVyzKiDR47tjons3DJ7nwJWd90KPcS0eFpHOti8r1AlZQNJWeDMy57v9ym3455PRGtE7xELCjiWNkOA1dZPzj1vlAikQE1woRqpfhOY3nkrB7M8uCk-2j5dAxRkmUEma8uqNFGMBhjrAnH19T1Yb7KYQzWWFw0dQ'
    ],
    colors: [
      { name: 'Camel Melange', hex: '#b39167' },
      { name: 'Noir', hex: '#1c1b1b' },
      { name: 'Raw Ivory', hex: '#ece6d8' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStockSizes: ['S', 'M', 'L', 'XL'],
    description: 'A flagship garment within the ATELIER IX Archival Wardrobe. Tailored from full-bodied 100% Virgin Italian Melton Wool, this overcoat introduces relaxed dropped shoulders paired with razor-sharp peaked lapels.',
    details: [
      'Deep slash side pockets lined in brushed thermal moleskin',
      'Concealed interior passport pocket with Raccagni zipper',
      'Back center vent with interior stay-tab',
      'Drop: 6 inches generous room; select your standard size for editorial drape'
    ],
    specs: {
      silhouette: 'Oversized Drop-Shoulder',
      closure: 'Bespoke Horn Buttons',
      lining: '100% Cupro Silk Blend',
      origin: 'Biella, Northern Italy',
      fabricDensity: '680 GSM Heavyweight',
      sku: 'AT-9842-CAM'
    },
    materialsCare: [
      '100% Extra-fine Virgin Melton Wool (Biella, Italy)',
      '100% Cupro Bemberg lining for anti-static glide',
      'Dry clean only by luxury garment specialists',
      'Steam gently; never iron directly over wool pile'
    ],
    shippingInfo: [
      'Complimentary express courier delivery worldwide on all orders over ₹15,000',
      'Dispatched in bespoke moisture-sealed garment box with solid cedar hanger',
      '30-Day complimentary home trial and door-to-door courier returns'
    ],
    fitScale: 'True Oversized',
    fabricWeight: 'Substantial (680G)'
  },
  {
    id: 'prod-hoodie-02',
    title: 'Heavy French Terry Hoodie',
    subtitle: 'Custom Loopback Knit • Pitch Black & Bone White',
    category: 'streetwear',
    categoryLabel: 'Streetwear',
    price: 6499,
    rating: 4.8,
    reviewCount: 94,
    badge: 'NEW DROP',
    badgeType: 'secondary',
    edition: 'DROP IX • LIMITED RUN',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW8_6jQa0m8sugkPt8xR9mxw48y36FqctbDsbSeIzLtutzApGFbaB6JGcyYxh81IHlMn00A6VP_zwJgMVpCwlo1xNommWEdhibRjdzcJrVMLcMAN1fyL3qkD7UGf4_Z33a5WAIm7OTAvmpw1kof9BOjEBU5xeuNsZp6Q77yC9zDwYeK-rNP_P7TqJnLVPyGK9pU0Csov4UP-1IAF4VYZvpla-eAXksXPqjq3NJa3aExUCGoAg5JlWrPQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAW8_6jQa0m8sugkPt8xR9mxw48y36FqctbDsbSeIzLtutzApGFbaB6JGcyYxh81IHlMn00A6VP_zwJgMVpCwlo1xNommWEdhibRjdzcJrVMLcMAN1fyL3qkD7UGf4_Z33a5WAIm7OTAvmpw1kof9BOjEBU5xeuNsZp6Q77yC9zDwYeK-rNP_P7TqJnLVPyGK9pU0Csov4UP-1IAF4VYZvpla-eAXksXPqjq3NJa3aExUCGoAg5JlWrPQ'
    ],
    colors: [
      { name: 'Bone White', hex: '#f2eee6' },
      { name: 'Pitch Black', hex: '#141414' },
      { name: 'Washed Charcoal', hex: '#3d3c3a' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStockSizes: ['S', 'M', 'L', 'XL'],
    description: 'Constructed from 480 GSM Japanese combed cotton loopback fleece. Engineered with seamless double-layered hood construction that holds its sculptural posture without drawstrings.',
    details: [
      '480 GSM double-twisted warp loopback terry',
      'Hidden rib-knit thumbhole cuffs for thermal retention',
      'Kangaroo pocket reinforced with bartack stitching'
    ],
    specs: {
      silhouette: 'Boxy Drop Shoulder',
      closure: 'Pullover Dual Layer Hood',
      lining: 'Loopback Cotton',
      origin: 'Wakayama, Japan',
      fabricDensity: '480 GSM Heavyweight',
      sku: 'AT-480-HOD'
    },
    materialsCare: [
      '100% Combed Organic Cotton',
      'Machine wash cold inside out with like colors',
      'Flat dry in shade; do not tumble dry'
    ],
    shippingInfo: [
      'Dispatched in recycled archival kraft sleeve',
      'Free exchanges within 14 days'
    ],
    fitScale: 'Boxy Relaxed',
    fabricWeight: 'Heavyweight (480G)'
  },
  {
    id: 'prod-trousers-03',
    title: 'Relaxed Pleated Trousers',
    subtitle: 'Raw Wool Twill • Charcoal & Obsidian',
    category: 'tailored',
    categoryLabel: 'Tailored',
    price: 7200,
    originalPrice: 8999,
    rating: 4.7,
    reviewCount: 52,
    badge: 'ARCHIVE SALE',
    badgeType: 'outline',
    edition: 'EDITION NO. 08',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-HameaUKIqvlQ3g7Gwrq-639lr-opFnHz477v8TF2W6bljvI5Kvf4B4J5y4-vOK2CSgHNpSH9DmWRi_6fb5l7_ZU8ce5LBv6O3bKAV9nc0_6H5gLTmdJMVHClfw2yPZ3Ua-kzvStTZA_v3ud98WX0wVS0VSI-nsPz-dTOUPdG2Kt5nFZ64HXfEWAR2143NfAYDFLTYPy3rIoYoprtPXiZDVtho1BL7ijSsDXp0u6tZzMMDBEg20P8AQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-HameaUKIqvlQ3g7Gwrq-639lr-opFnHz477v8TF2W6bljvI5Kvf4B4J5y4-vOK2CSgHNpSH9DmWRi_6fb5l7_ZU8ce5LBv6O3bKAV9nc0_6H5gLTmdJMVHClfw2yPZ3Ua-kzvStTZA_v3ud98WX0wVS0VSI-nsPz-dTOUPdG2Kt5nFZ64HXfEWAR2143NfAYDFLTYPy3rIoYoprtPXiZDVtho1BL7ijSsDXp0u6tZzMMDBEg20P8AQ'
    ],
    colors: [
      { name: 'Charcoal', hex: '#2f2e2d' },
      { name: 'Raw Ivory', hex: '#ebe7de' },
      { name: 'Noir', hex: '#111110' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStockSizes: ['M', 'L', 'XL'],
    description: 'Double inward front pleats allow structural volume through the thigh that tapers gracefully toward a wide cuff pooling effortlessly over sneakers or platform boots.',
    details: [
      'Side waist adjusters with brushed nickel hardware',
      'Extended tab waistband closure with Corozo buttons',
      'Deep trouser pockets with bar-tack reinforcement'
    ],
    specs: {
      silhouette: 'High-Rise Wide Leg Pleated',
      closure: 'Zip Fly with Extended Tab',
      lining: 'Viscose half-lining',
      origin: 'Osaka, Japan',
      sku: 'AT-PLT-TRS'
    },
    materialsCare: [
      '70% Virgin Wool, 30% Mulberry Silk Blend',
      'Dry clean only'
    ],
    shippingInfo: ['Free express shipping worldwide over ₹15,000'],
    fitScale: 'Wide Leg Drape',
    fabricWeight: 'Midweight (340G)'
  },
  {
    id: 'prod-sneaker-04',
    title: 'Monolith Chunky Sneaker',
    subtitle: 'Calfskin & Sculpted Vibram • Bone & Matte Black',
    category: 'footwear',
    categoryLabel: 'Footwear',
    price: 12800,
    rating: 5.0,
    reviewCount: 210,
    badge: 'LIMITED RUN',
    badgeType: 'error',
    edition: 'EDITION: 100 PIECES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb8vPDaB5F1kl5rN6q6wz5urLXsP-GHpVeU7Q2JvX_umZ157yJ28aSLGQPcO4ae49dsT444e_8CspQutb_fE64su5sSs776AzhU5-OgRmaTraTROvqaC9i8kF9fK20Ap80kjEvKXEmiLTFJeBM3yBY0YLLHuWZAwhs-G9dosdPRMeBGPQ21Lw9hIRTCkjcNWZSldsLU2A0uppnM-bJK4IDJVVEUjcq22sRgWyfBUNrAHfsRonwaR3cZg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDb8vPDaB5F1kl5rN6q6wz5urLXsP-GHpVeU7Q2JvX_umZ157yJ28aSLGQPcO4ae49dsT444e_8CspQutb_fE64su5sSs776AzhU5-OgRmaTraTROvqaC9i8kF9fK20Ap80kjEvKXEmiLTFJeBM3yBY0YLLHuWZAwhs-G9dosdPRMeBGPQ21Lw9hIRTCkjcNWZSldsLU2A0uppnM-bJK4IDJVVEUjcq22sRgWyfBUNrAHfsRonwaR3cZg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-xKQ41x8JPrtcicRdJOtpkD7Uke6cJlGUXWx57-r-Vie9rECg1xzsfZBHXGGuHTeVOOvj9OEkmC3inkz4W8YSx_-SFq1jtCR-ESM0r1CciS6mh-qhMvLGJPWcYKgy2u5U7QX_JBWnZ_qjbNMO3dX2xDA8dS6eDJzIHB4mtPME5643H_0pGXMhwWHCMoGdXBPQjXcv1O66KPINwjIPlRakiMSF4fajp8hyc7g-T7OeDca7da8NKfXUQQ'
    ],
    colors: [
      { name: 'Matte Black', hex: '#151515' },
      { name: 'Bone White', hex: '#e9e6df' }
    ],
    sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44'],
    inStockSizes: ['EU 41', 'EU 42', 'EU 43'],
    description: 'Sculptural architectural sole engineered with proprietary shock-absorption chambers and Italian full-grain calfskin uppers with tactical speed-lacing.',
    details: [
      'Sculpted 55mm platform Vibram rubber sole unit',
      'Full grain Italian calf leather with micro-perforated toe box',
      'Memory foam anatomic footbed with leather lining'
    ],
    specs: {
      silhouette: 'Chunky Brutalist Trainer',
      closure: 'Waxed Cotton Speed Lace',
      lining: 'Soft Calf Leather',
      origin: 'Civitanova Marche, Italy',
      sku: 'AT-MNL-SNK'
    },
    materialsCare: [
      '100% Calf Leather Upper, 100% Vibram Sole',
      'Wipe clean with soft damp cloth; treat with leather balm'
    ],
    shippingInfo: ['Dispatched in rigid numbered collector box with dust bags'],
    fitScale: 'True to Size',
    fabricWeight: 'Hefty Architectural Footwear'
  },
  {
    id: 'prod-jacket-05',
    title: 'Raw Edge Boxy Jacket',
    subtitle: 'Melton Wool • Charcoal Tint',
    category: 'outerwear',
    categoryLabel: 'Jackets & Coats',
    price: 8499,
    originalPrice: 10200,
    rating: 4.8,
    reviewCount: 38,
    badge: 'SALE -17%',
    badgeType: 'primary',
    edition: 'ATELIER CRAFT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bn6FF-clfnjDV78fkXh1F2zFjhaLFMW7rH9YxR8LhL9CqimvXy0JqoscEpp9FBAxjA2tuUvcBGI9jtz_8zQPkthnb2nM-dTth9IppvheCq6tEJpO3VdXp6Z5vscV2H2BSkFR6Dg7WrRG5VRLYivBOQta-9vZ68_lwFn0nlNBzwqJ5nGvlp2zbO4nWbOvTEeVc9uXFDhHBG7s6XrddLj-wI-VSwZhAt7dgKPOPzx8OdDUuxyvBAJL8A',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bn6FF-clfnjDV78fkXh1F2zFjhaLFMW7rH9YxR8LhL9CqimvXy0JqoscEpp9FBAxjA2tuUvcBGI9jtz_8zQPkthnb2nM-dTth9IppvheCq6tEJpO3VdXp6Z5vscV2H2BSkFR6Dg7WrRG5VRLYivBOQta-9vZ68_lwFn0nlNBzwqJ5nGvlp2zbO4nWbOvTEeVc9uXFDhHBG7s6XrddLj-wI-VSwZhAt7dgKPOPzx8OdDUuxyvBAJL8A'
    ],
    colors: [
      { name: 'Charcoal Tint', hex: '#2b2a29' },
      { name: 'Raw Umber', hex: '#635343' },
      { name: 'Alabaster', hex: '#d9d3c7' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStockSizes: ['S', 'M', 'L'],
    description: 'Boxy silhouette jacket with unhemmed raw edge perimeter and oversized chest cargo pockets. Hand-cut and pre-washed for organic fray stabilization.',
    details: [
      'Exposed raw edge details across lapel and hem',
      'Heavy-gauge two-way matte black zipper',
      'Dual bellow pockets with hidden snap closures'
    ],
    specs: {
      silhouette: 'Boxy Cropped Over-shirt',
      closure: 'Two-Way Metal Zip',
      lining: 'Unlined / Clean Bound Seams',
      origin: 'Tokyo, Japan',
      sku: 'AT-BX-JCK'
    },
    materialsCare: ['100% Virgin Melton Wool', 'Spot clean or specialist dry clean'],
    shippingInfo: ['Express dispatch within 24 hours'],
    fitScale: 'Boxy Fit',
    fabricWeight: 'Substantial (520G)'
  },
  {
    id: 'prod-cargo-06',
    title: 'Structured Cargo Pant',
    subtitle: 'Combed Cotton Twill • Olive & Pitch',
    category: 'tailored',
    categoryLabel: 'Trousers & Denim',
    price: 6999,
    rating: 4.9,
    reviewCount: 65,
    badge: 'NEW IN',
    badgeType: 'secondary',
    edition: 'DROP 09',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1G-puOeS8zJABGWse8n1wdK9Fuy7CKf-mvGahRqCSUzgLjM2MsfhJMo1YwIn3fjFdfp8Qq_i2loR7oTsjYmwdjCJtvfKuxlkp7M7Qr7j-Jkl3t5RPHNUwUdoIDBDvM7KmbxPCqzU4Ea202Hqiq_ehagwAME6uDSbM5Ict9C8mRXGunxUdWsRbRSbQCf7Lf7n9zojCLS5ZwjGBTHjHlPrYRrKlNGpGmbYAj_o0cwPPHFVecRCa4yg5Lw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1G-puOeS8zJABGWse8n1wdK9Fuy7CKf-mvGahRqCSUzgLjM2MsfhJMo1YwIn3fjFdfp8Qq_i2loR7oTsjYmwdjCJtvfKuxlkp7M7Qr7j-Jkl3t5RPHNUwUdoIDBDvM7KmbxPCqzU4Ea202Hqiq_ehagwAME6uDSbM5Ict9C8mRXGunxUdWsRbRSbQCf7Lf7n9zojCLS5ZwjGBTHjHlPrYRrKlNGpGmbYAj_o0cwPPHFVecRCa4yg5Lw'
    ],
    colors: [
      { name: 'Olive Green', hex: '#484b3f' },
      { name: 'Black Twill', hex: '#191919' },
      { name: 'Sand Taupe', hex: '#a89f91' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStockSizes: ['S', 'M', 'L', 'XL'],
    description: 'Constructed from Japanese high-density combed cotton twill with articulated knee darts and hidden magnetic flap cargo compartments.',
    details: [
      'Articulated knee seams for natural leg drape',
      'Dual flush cargo pockets with magnetic closures',
      'Bungee hem cord to adjust taper'
    ],
    specs: {
      silhouette: 'Relaxed Tapered Cargo',
      closure: 'Button & Zip Fly',
      lining: 'Self-lined pockets',
      origin: 'Wakayama, Japan',
      sku: 'AT-CRG-PNT'
    },
    materialsCare: ['100% Combed Cotton Twill', 'Machine wash cold; hang dry'],
    shippingInfo: ['Free worldwide express delivery over ₹15,000'],
    fitScale: 'Relaxed Taper',
    fabricWeight: 'Heavy Twill (400G)'
  },
  {
    id: 'prod-knit-07',
    title: 'Mohair Blend Knit Sweater',
    subtitle: 'Brushed Kid Mohair • Camel Intarsia',
    category: 'knitwear',
    categoryLabel: 'Knitwear & Mohair',
    price: 9200,
    rating: 4.7,
    reviewCount: 41,
    badge: 'TRENDING',
    badgeType: 'secondary',
    edition: 'KNIT LAB',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz1ul_CHLDBxdf_tkE87aG4aqPVYyNR0y3fJVBVs6MruB3PDIQkeo5okbiCc0EDY4gjkOT_6U5DzvTRNwz3RQeCOHVyzKiDR47tjons3DJ7nwJWd90KPcS0eFpHOti8r1AlZQNJWeDMy57v9ym3455PRGtE7xELCjiWNkOA1dZPzj1vlAikQE1woRqpfhOY3nkrB7M8uCk-2j5dAxRkmUEma8uqNFGMBhjrAnH19T1Yb7KYQzWWFw0dQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAz1ul_CHLDBxdf_tkE87aG4aqPVYyNR0y3fJVBVs6MruB3PDIQkeo5okbiCc0EDY4gjkOT_6U5DzvTRNwz3RQeCOHVyzKiDR47tjons3DJ7nwJWd90KPcS0eFpHOti8r1AlZQNJWeDMy57v9ym3455PRGtE7xELCjiWNkOA1dZPzj1vlAikQE1woRqpfhOY3nkrB7M8uCk-2j5dAxRkmUEma8uqNFGMBhjrAnH19T1Yb7KYQzWWFw0dQ'
    ],
    colors: [
      { name: 'Camel Intarsia', hex: '#9d7c58' },
      { name: 'Graphite', hex: '#2c2b29' }
    ],
    sizes: ['S', 'M', 'L'],
    inStockSizes: ['S', 'M', 'L'],
    description: 'Hand-brushed South African kid mohair blended with fine merino wool for lightweight ethereal loft and cloud-like warmth.',
    details: [
      'Custom gradient dip-dye process',
      'Thick ribbed collar and cuffs with natural stretch',
      'Extremely soft tactile handfeel with zero scratchiness'
    ],
    specs: {
      silhouette: 'Relaxed Drop Knit',
      closure: 'Crewneck Pullover',
      lining: 'Unlined Knit',
      origin: 'Perugia, Italy',
      sku: 'AT-MHR-SWT'
    },
    materialsCare: ['60% Kid Mohair, 30% Merino Wool, 10% Polyamide', 'Hand wash cold or dry clean'],
    shippingInfo: ['Dispatched in sealed archival dust bag'],
    fitScale: 'Relaxed Fit',
    fabricWeight: 'Fluffy Loft (320G)'
  },
  {
    id: 'prod-bag-08',
    title: 'Minimalist Leather Crossbody',
    subtitle: 'Full Grain Nappa • Noir with Bronze Hardware',
    category: 'accessories',
    categoryLabel: 'Leather Accessories',
    price: 5499,
    originalPrice: 6800,
    rating: 4.9,
    reviewCount: 88,
    badge: 'ACCESSORY',
    badgeType: 'outline',
    edition: 'CUIR ATELIER',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMGHCd04rXl1xWFV4qTdZXgKHYFPmL7LqOH6Ld9e6SCRw_tChYwp_VySX1lN5t3S-SyzTWvAHawrbBdNxQGARl0eKUEzk-U0_VOUvtaZhzr3bbAKh8tY9sC64BL-FSJ0NtXXnNxlO2DYsEoQaL36kzIckVuU2LEOqUlo1lCShU7-bNP1qRAPLI8F8_USZkffHbXuibdXFziWPc3-_BMjXfmFt0s9j2c_9Xfvhuie7fgxB0ZEYKHDx3kA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMGHCd04rXl1xWFV4qTdZXgKHYFPmL7LqOH6Ld9e6SCRw_tChYwp_VySX1lN5t3S-SyzTWvAHawrbBdNxQGARl0eKUEzk-U0_VOUvtaZhzr3bbAKh8tY9sC64BL-FSJ0NtXXnNxlO2DYsEoQaL36kzIckVuU2LEOqUlo1lCShU7-bNP1qRAPLI8F8_USZkffHbXuibdXFziWPc3-_BMjXfmFt0s9j2c_9Xfvhuie7fgxB0ZEYKHDx3kA'
    ],
    colors: [
      { name: 'Noir', hex: '#161616' },
      { name: 'Cognac', hex: '#774726' }
    ],
    sizes: ['ONE SIZE'],
    inStockSizes: ['ONE SIZE'],
    description: 'Sculptural camera bag silhouette handcrafted from supple full-grain Italian Nappa leather. Finished with custom brushed bronze quick-release clasp.',
    details: [
      'Adjustable seatbelt webbing strap with leather shoulder pad',
      'Inner phone sleeve and card holder with embossed serial number',
      'Weather-resistant YKK Excella zippers'
    ],
    specs: {
      silhouette: 'Structured Crossbody Bag',
      closure: 'Bronze Clasp & Top Zip',
      lining: 'Cotton Twill Lining',
      origin: 'Florence, Italy',
      sku: 'AT-LBR-BAG'
    },
    materialsCare: ['100% Full Grain Italian Nappa Leather', 'Condition annually with beeswax balm'],
    shippingInfo: ['Includes linen storage dust bag and authentication card'],
    fitScale: 'One Size (24cm x 16cm x 7cm)',
    fabricWeight: 'Full Grain Nappa Leather'
  },
  {
    id: 'prod-tee-09',
    title: 'Vintage Washed Atelier Heavy Tee',
    subtitle: 'Combed Organic Cotton • Washed Charcoal',
    category: 'streetwear',
    categoryLabel: 'Hoodies & Sweats',
    price: 3299,
    rating: 4.6,
    reviewCount: 76,
    badge: '310 GSM',
    badgeType: 'outline',
    edition: 'CORE ARCHIVE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bn6FF-clfnjDV78fkXh1F2zFjhaLFMW7rH9YxR8LhL9CqimvXy0JqoscEpp9FBAxjA2tuUvcBGI9jtz_8zQPkthnb2nM-dTth9IppvheCq6tEJpO3VdXp6Z5vscV2H2BSkFR6Dg7WrRG5VRLYivBOQta-9vZ68_lwFn0nlNBzwqJ5nGvlp2zbO4nWbOvTEeVc9uXFDhHBG7s6XrddLj-wI-VSwZhAt7dgKPOPzx8OdDUuxyvBAJL8A',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bn6FF-clfnjDV78fkXh1F2zFjhaLFMW7rH9YxR8LhL9CqimvXy0JqoscEpp9FBAxjA2tuUvcBGI9jtz_8zQPkthnb2nM-dTth9IppvheCq6tEJpO3VdXp6Z5vscV2H2BSkFR6Dg7WrRG5VRLYivBOQta-9vZ68_lwFn0nlNBzwqJ5nGvlp2zbO4nWbOvTEeVc9uXFDhHBG7s6XrddLj-wI-VSwZhAt7dgKPOPzx8OdDUuxyvBAJL8A'
    ],
    colors: [
      { name: 'Washed Charcoal', hex: '#2f2e2d' },
      { name: 'Ecru', hex: '#ede9e1' },
      { name: 'Washed Clay', hex: '#7a5a4a' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStockSizes: ['S', 'M', 'L', 'XL'],
    description: 'Cut from heavyweight 310 GSM combed cotton jersey, enzyme mineral-washed for a vintage patina. Features a bound high-rib neckline that never sags.',
    details: [
      '310 GSM custom milled open-ended jersey',
      'Blind stitched sleeves and hem',
      'Subtle tonal screenprint archival coordinates'
    ],
    specs: {
      silhouette: 'Boxy Oversized Tee',
      closure: 'Slip-on Ribbed Neck',
      lining: 'Unlined',
      origin: 'Tokyo, Japan',
      fabricDensity: '310 GSM',
      sku: 'AT-VNT-TEE'
    },
    materialsCare: ['100% Organic Cotton', 'Wash cold, line dry in shade'],
    shippingInfo: ['Express dispatch within 24 hours'],
    fitScale: 'Boxy Oversized',
    fabricWeight: 'Heavyweight Tee (310G)'
  },
  {
    id: 'prod-car-coat-10',
    title: 'Brushed Wool Car Coat',
    subtitle: '100% Merino Wool • Deep Camel',
    category: 'outerwear',
    categoryLabel: 'Jackets & Coats',
    price: 16500,
    rating: 5.0,
    reviewCount: 39,
    badge: 'BEST SELLER',
    badgeType: 'primary',
    edition: 'HAUTE OUTERWEAR',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKOjdlvUFHwDMH0N8A8c56otofEhsWq1FRty1Ab9IW5Q5wWewHsjSV0W23RjaqnTjqXhlg1SWM8ZQsx2xygs1ACDXpZjvKAqE-MB4SWoWx7TRB21IZEsdrXbRPTGGg-fy0HiB_AZZFGc7ZObLGHLF1QZ258Fz3rKmL44DFnbJ9-nsWhHnCZtqTjfJr4jMOAhU_6-N7zxmtZMCkV-AVDxY8gx006EH2cRAv71BaNw9JA-PL1dGCHq66Fg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKOjdlvUFHwDMH0N8A8c56otofEhsWq1FRty1Ab9IW5Q5wWewHsjSV0W23RjaqnTjqXhlg1SWM8ZQsx2xygs1ACDXpZjvKAqE-MB4SWoWx7TRB21IZEsdrXbRPTGGg-fy0HiB_AZZFGc7ZObLGHLF1QZ258Fz3rKmL44DFnbJ9-nsWhHnCZtqTjfJr4jMOAhU_6-N7zxmtZMCkV-AVDxY8gx006EH2cRAv71BaNw9JA-PL1dGCHq66Fg'
    ],
    colors: [
      { name: 'Deep Camel', hex: '#957149' },
      { name: 'Black', hex: '#161616' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStockSizes: ['S', 'M', 'L'],
    description: 'Mid-length car coat tailored from premium brushed Italian merino wool. Minimalist concealed front placket with genuine horn buttons and storm collar tab.',
    details: [
      'Brushed tactile surface finish with natural rain resistance',
      'Concealed horn button front placket',
      'Dual deep welt hand-warmer pockets'
    ],
    specs: {
      silhouette: 'Mid-length Tailored Car Coat',
      closure: 'Concealed Horn Buttons',
      lining: '100% Cupro',
      origin: 'Biella, Italy',
      fabricDensity: '620 GSM',
      sku: 'AT-BRS-CAR'
    },
    materialsCare: ['100% Merino Wool', 'Dry clean only'],
    shippingInfo: ['Includes luxury wooden hanger and dust cover'],
    fitScale: 'Tailored Clean',
    fabricWeight: 'Heavyweight (620G)'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    author: 'Marcus V.',
    verified: true,
    edition: 'EDITION #09',
    rating: 5,
    date: 'Reviewed 3 days ago',
    content: 'The weight of this virgin wool is astonishing. It holds its silhouette like architectural armor while moving with incredible fluidity. The custom horn buttons have a satisfying heft. Atelier IX delivers quality on par with Savile Row with a Tokyo brutalist cut.',
    sizePurchased: 'M',
    height: "6'1\""
  },
  {
    id: 'rev-02',
    author: 'Elena R.',
    verified: true,
    edition: 'EDITION #09',
    rating: 5,
    date: 'Reviewed 1 week ago',
    content: 'Worth every single rupee. The Camel Melange colorway is deeply nuanced in natural light—neither too warm nor too flat. The cupro lining slips over chunky knitwear effortlessly. Arrived in Mumbai within 48 hours in museum-grade packaging.',
    sizePurchased: 'S',
    height: "5'9\""
  },
  {
    id: 'rev-03',
    author: 'Vikram K.',
    verified: true,
    edition: 'EDITION #09',
    rating: 5,
    date: 'Oct 12',
    content: 'The weight and drape of the virgin melton wool rival Savile Row bespoke coats. The dropped shoulder gives it just enough contemporary edge without sacrificing poise.',
    sizePurchased: 'L',
    height: "6'2\""
  }
];

export const COMPLETE_THE_LOOK_ITEMS = [
  {
    id: 'ctl-1',
    title: 'Pleated Wide Architectural Trousers',
    category: 'TROUSERS',
    edition: 'EDITION 09',
    price: 7499,
    subtitle: '3 Colors Available',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1G-puOeS8zJABGWse8n1wdK9Fuy7CKf-mvGahRqCSUzgLjM2MsfhJMo1YwIn3fjFdfp8Qq_i2loR7oTsjYmwdjCJtvfKuxlkp7M7Qr7j-Jkl3t5RPHNUwUdoIDBDvM7KmbxPCqzU4Ea202Hqiq_ehagwAME6uDSbM5Ict9C8mRXGunxUdWsRbRSbQCf7Lf7n9zojCLS5ZwjGBTHjHlPrYRrKlNGpGmbYAj_o0cwPPHFVecRCa4yg5Lw'
  },
  {
    id: 'ctl-2',
    title: 'Ribbed Mock Neck Cashmere Blend',
    category: 'KNITWEAR',
    edition: 'CORE LINE',
    price: 6800,
    subtitle: 'Raw Ecru / Noir',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz1ul_CHLDBxdf_tkE87aG4aqPVYyNR0y3fJVBVs6MruB3PDIQkeo5okbiCc0EDY4gjkOT_6U5DzvTRNwz3RQeCOHVyzKiDR47tjons3DJ7nwJWd90KPcS0eFpHOti8r1AlZQNJWeDMy57v9ym3455PRGtE7xELCjiWNkOA1dZPzj1vlAikQE1woRqpfhOY3nkrB7M8uCk-2j5dAxRkmUEma8uqNFGMBhjrAnH19T1Yb7KYQzWWFw0dQ'
  },
  {
    id: 'ctl-3',
    title: 'Brutalist Platform Chelsea Boots',
    category: 'FOOTWEAR',
    edition: 'LIMITED DROP',
    price: 11200,
    subtitle: 'Vibram® Sole',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb8vPDaB5F1kl5rN6q6wz5urLXsP-GHpVeU7Q2JvX_umZ157yJ28aSLGQPcO4ae49dsT444e_8CspQutb_fE64su5sSs776AzhU5-OgRmaTraTROvqaC9i8kF9fK20Ap80kjEvKXEmiLTFJeBM3yBY0YLLHuWZAwhs-G9dosdPRMeBGPQ21Lw9hIRTCkjcNWZSldsLU2A0uppnM-bJK4IDJVVEUjcq22sRgWyfBUNrAHfsRonwaR3cZg'
  }
];
