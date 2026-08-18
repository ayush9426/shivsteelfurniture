// Shiv Steel Furniture - Application Script
// Automatically generated and populated with original datasets

const CONFIG = {
  companyName: "Shiv Steel Furniture",
  shortName: "SSF",
  email: "infoshivsteelfurniture@gmail.com",
  address: "Shop no: 6-7-8, Parvati Nagar Shopping Center, Viratnagar, Ahmedabad, Gujarat-382415",
  mapUrl: "https://www.google.com/maps/place/Shiv+steel+furniture/@23.0278479,72.6391343,642m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e8700149e6787:0xedd44cdec8498eff!8m2!3d23.0278479!4d72.6391343!16s%2Fg%2F11wtc2n1t7?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
  owners: [
    {
      name: "Mr. Govind Purohit",
      phone: "+91 99986 66658",
      whatsapp: "+919998666658"
    },
    {
      name: "Mr. Hitesh Purohit",
      phone: "+91 98983 33365",
      whatsapp: "+919558203813"
    }
  ],
  whatsappSupport: "+919426077429"
};

// Data Models
const PRODUCTS = [{ id: "f1", name: "Luxury Steel Swing", category: "furniture", description: "Premium Outdoor swing with heavy-duty chain and comfortable seating.", image: "/images/f1.jpg", features: ["Heavy Gauge", "Rust Free", "Custom Cushion"] }, { id: "f2", name: "Modern Steel Sofa", category: "furniture", description: "3-seater stainless steel sofa with ergonomic comfort.", image: "/images/f2.jpg", features: ["304 Grade", "Mirror Finish"] }, { id: "f3", name: "Wooden Designer Jula", category: "furniture", description: "Traditional steel jula with Wooden design.", image: "/images/f3.jpg", features: ["Strong Frame", "Indoor Use"] }, { id: "f4", name: "Steel Double Bed Frame", category: "furniture", description: "Heavy-duty steel bed frame for long-lasting use.", image: "/images/f4.jpg", features: ["Load Bearing", "Noise Free", "Rust Resistant"] }, { id: "f5", name: "Steel Single Bed", category: "furniture", description: "Compact steel bed suitable for homes and hostels.", image: "/images/f5.jpg", features: ["Compact Design", "Strong Weld", "Low Maintenance"] }, { id: "f6", name: "Steel Folding Bed", category: "furniture", description: "Space-saving folding steel bed with smooth mechanism.", image: "/images/f6.jpg", features: ["Foldable", "Space Saving", "Easy Storage"] }, { id: "f7", name: "Steel Cradle (Palna)", category: "furniture", description: "Safe and sturdy steel cradle for infants.", image: "/images/f7.jpg", features: ["Smooth Finish", "Child Safe", "Balanced Design"] }, { id: "f8", name: "Steel Dining Table Set", category: "furniture", description: "Modern steel dining table with solid structure.", image: "/images/f8.jpg", features: ["Heavy Base", "Modern Look", "Scratch Resistant"] }, { id: "f9", name: "SS Chair", category: "furniture", description: "Comfortable steel chair with cushioned seat.", image: "/images/f9.jpg", features: ["Comfort Seat", "Strong Legs", "Easy Clean"] }, { id: "f10", name: "Steel Study Table", category: "furniture", description: "Minimal steel study table for home and office.", image: "/images/f10.jpg", features: ["Compact", "Modern Finish", "Durable"] }, { id: "f11", name: "SS Office Chair", category: "furniture", description: "Strong steel office chair with long seating comfort.", image: "/images/f11.jpg", features: ["Ergonomic", "Stable Frame", "Professional Use"] }, { id: "f12", name: "Steel Shoe Rack", category: "furniture", description: "Multi-layer steel shoe rack with modern design.", image: "/images/f12.jpg", features: ["Space Saving", "Rust Proof", "Easy Assembly"] }, { id: "f13", name: "SS Wardrobe", category: "furniture", description: "Spacious steel almirah for secure storage.", image: "/images/f13.jpg", features: ["Lockable", "Spacious", "Heavy Duty"] }, { id: "f14", name: "Steel Bar Stool", category: "furniture", description: "Modern steel bar stool with stable base.", image: "/images/f14.jpg", features: ["Modern Look", "Strong Support", "Anti-Slip"] }, { id: "f15", name: "Steel Center Table", category: "furniture", description: "Minimal steel center table for living room.", image: "/images/f15.jpg", features: ["Stable Base", "Elegant Look", "Scratch Resistant"] }, { id: "f16", name: " Bookshelf", category: "furniture", description: "Vertical steel bookshelf with multiple shelves.", image: "/images/f16.jpg", features: ["High Strength", "Space Efficient", "Modern Finish"] }, { id: "f17", name: "Steel Balcony Chair", category: "furniture", description: "Weather-resistant steel chair for balcony use.", image: "/images/f17.jpg", features: ["Outdoor Safe", "Rust Resistant", "Lightweight"] }, { id: "f18", name: "Steel Garden Bench", category: "furniture", description: "Heavy steel bench suitable for gardens and outdoors.", image: "/images/f18.jpg", features: ["Weather Proof", "Strong Build", "Long Life"] }, { id: "f19", name: "Steel Side Table", category: "furniture", description: "Compact steel side table for multi-purpose use.", image: "/images/f19.jpg", features: ["Lightweight", "Modern Design", "Easy Move"] }, { id: "f20", name: " Storage Rack", category: "furniture", description: "Multi-level steel rack for home and shop storage.", image: "/images/f20.jpg", features: ["High Load", "Adjustable Shelves", "Durable"] }, { id: "f21", name: "Steel Bunk Bed", category: "furniture", description: "Space-efficient steel bunk bed for hostels.", image: "/images/f21.jpg", features: ["Heavy Duty", "Safe Ladder", "Compact"] }, { id: "f22", name: "Designer Hanging Jula", category: "furniture", description: "Contemporary hanging steel jula with premium finish.", image: "/images/f22.jpg", features: ["Designer Look", "Heavy Chain", "Indoor & Outdoor"] }, { id: "f23", name: "Royal Carved  Jula", category: "furniture", description: "Traditional royal-style steel jula with artistic carving.", image: "/images/f23.jpg", features: ["Decorative Design", "Heavy Duty", "Handcrafted Finish"] }, { id: "f24", name: "Modern Single Jula", category: "furniture", description: "Single steel jula for modern homes.", image: "/images/f24.jpg", features: ["Minimal Design", "Strong Frame", "Space Friendly"] }, { id: "f25", name: "Ergonomic Sofa Cum-Bed", category: "furniture", description: "Space-saving steel sofa cum-bed with smooth sofa-to-bed conversion.", image: "/images/f25.jpg", features: ["Easy Open & Close", "Ergonomic Comfort", "Long Life"] }, { id: "f26", name: "Hydraulic Storage Steel Bed", category: "furniture", description: "Steel bed with hydraulic storage for extra space.", image: "/images/f26.jpg", features: ["Hydraulic Lift", "Extra Storage", "Strong Base"] }, { id: "f27", name: " Kitchen Storage Rack", category: "furniture", description: "Multi-purpose steel rack for kitchen storage.", image: "/images/f27.jpg", features: ["Multi Shelf", "Easy Clean", "Heavy Load"] }, { id: "f28", name: "Steel Prayer Mandir", category: "furniture", description: "Compact steel mandir for home prayer space.", image: "/images/f28.jpg", features: ["Decorative Panels", "Compact Size", "Easy Install"] }, { id: "f29", name: " Utility Cabinet", category: "furniture", description: "Multi-purpose steel cabinet for home and shop use.", image: "/images/f29.jpg", features: ["Multi Utility", "Adjustable Shelves", "Long Lasting"] }, { id: "f30", name: "Steel Charpai (Cot)", category: "furniture", description: "Traditional steel charpai with strong woven support for daily use.", image: "/images/f30.jpg", features: ["Heavy Duty Frame", "Comfortable Weave", "Long Lasting"] }, { id: "f31", name: "Steel Folding Charpai", category: "furniture", description: "Space-saving steel folding charpai ideal for easy storage and travel.", image: "/images/f31.jpg", features: ["Foldable Design", "Strong Steel Frame", "Easy Storage"] }, { id: "f32", name: "Single Seater Hanging Jula", category: "furniture", description: "Compact single-seater hanging steel jula perfect for balconies and indoor spaces.", image: "/images/f32.jpg", features: ["Comfortable Seat", "Heavy Chain Support", "Space Saving"] }, { id: "f33", name: "Rocking Stainless Steel Chair", category: "furniture", description: "Comfortable stainless steel rocking chair with smooth curved base for relaxation.", image: "/images/f33.jpg", features: ["Smooth Rocking", "Ergonomic Design", "Strong Frame"] }, { id: "f34", name: "Foldable Stainless Steel Baby Cradle", category: "furniture", description: "Space-saving foldable stainless steel baby cradle with smooth rocking and safety lock.", image: "/images/f34.jpg", features: ["Foldable Design", "Smooth Rocking", "Child Safe Lock"] }, { id: "r1", name: "Frameless Toughened Glass Railing", category: "railing", description: "12mm clear toughened glass with SS 316 side-mounted clamps for balconies.", image: "/images/r1.jpg", features: ["Frameless Design", "SS 316 Grade", "Modern Look"] }, { id: "r2", name: "SS Vertical Slat Stair Railing", category: "railing", description: "Vertical stainless steel slats with matte finish for staircases.", image: "/images/r2.jpg", features: ["Matte Finish", "Child Safe", "Strong Build"] }, { id: "r3", name: "Glass + SS Top Rail Balcony", category: "railing", description: "Toughened glass panels with polished SS round handrail.", image: "/images/r3.jpg", features: ["Polished Finish", "Luxury Feel"] }, { id: "r4", name: "Laser Cut SS Panel Railing", category: "railing", description: "Decorative laser-cut SS panels with modern geometric patterns.", image: "/images/r4.jpg", features: ["Custom Patterns", "Designer Look"] }, { id: "r5", name: "SS Horizontal Pipe Railing", category: "railing", description: "Horizontal SS pipes with brushed finish for balconies.", image: "/images/r5.jpg", features: ["Minimal Style", "Weather Resistant"] }, { id: "r6", name: "Tinted Glass SS Railing", category: "railing", description: "Grey tinted toughened glass with SS posts for modern homes.", image: "/images/r6.jpg", features: ["UV Protection", "Premium Glass"] }, { id: "r7", name: "Curved Glass Staircase Railing", category: "railing", description: "Custom curved toughened glass railing with SS handrail.", image: "/images/r7.jpg", features: ["Custom Shape", "Architectural Design"] }, { id: "r8", name: "SS Cable Railing System", category: "railing", description: "Stainless steel tension cable railing for open view balconies.", image: "/images/r8.jpg", features: ["Open View", "Modern Industrial"] }, { id: "r9", name: "Black SS Matte Glass Railing", category: "railing", description: "Matte black stainless steel frame with clear glass panels.", image: "/images/r9.jpg", features: ["Black Finish", "Contemporary Style"] }, { id: "r10", name: "SS Handrail with Frosted Glass", category: "railing", description: "Frosted glass panels with round SS handrail for privacy.", image: "/images/r10.jpg", features: ["Privacy Glass", "Elegant Look"] }, { id: "r11", name: "Gold PVD SS Glass Railing", category: "railing", description: "Gold PVD coated stainless steel with ultra-clear glass.", image: "/images/r11.jpg", features: ["Luxury Finish", "Rust Resistant"] }, { id: "r12", name: "Minimal SS Bar Railing", category: "railing", description: " SS bars arranged in modern  pattern.", image: "/images/r12.jpg", features: ["Minimal Design", "High Strength"] }, { id: "r13", name: "SS Post Glass Balcony Railing", category: "railing", description: "SS vertical posts with clear toughened glass inserts.", image: "/images/r13.jpg", features: ["Classic Modern", "Easy Maintenance"] }, { id: "r14", name: "Double Height Glass Railing", category: "railing", description: "Extra-height glass railing for duplex and villas.", image: "/images/r14.jpg", features: ["High Safety", "Villa Design"] }, { id: "r15", name: "SS Mesh Panel Railing", category: "railing", description: "Stainless steel wire mesh infill with solid SS frame.", image: "/images/r15.jpg", features: ["Industrial Look", "High Durability"] }, { id: "r16", name: "Smart LED SS Glass Railing", category: "railing", description: "LED integrated SS railing with clear glass panels.", image: "/images/r16.jpg", features: ["LED Lighting", "Night Visibility"] }, { id: "r17", name: "SS Wooden Finish Glass Railing", category: "railing", description: "Wood-textured SS top rail with glass panels.", image: "/images/r17.jpg", features: ["Wood Finish", "Modern Fusion"] }, { id: "r18", name: "Spider Fitting Glass Railing", category: "railing", description: "Glass railing supported by SS spider fittings.", image: "/images/r18.jpg", features: ["Structural Glass", "Premium Engineering"] }, { id: "r19", name: "SS Perforated Sheet Railing", category: "railing", description: "Perforated SS sheets with modern pattern design.", image: "/images/r19.jpg", features: ["Air Flow", "Designer Pattern"] }, { id: "r20", name: "Ultra Clear Glass SS Railing", category: "railing", description: "Low-iron ultra-clear glass with polished SS railing.", image: "/images/r20.jpg", features: ["Crystal Clear", "Luxury Finish"] }, { id: "r21", name: "Floating Glass Edge Railing", category: "railing", description: "Base-mounted floating toughened glass railing with concealed SS channel.", image: "/images/r21.jpg", features: ["Concealed Fixing", "Seamless Finish", "Ultra Modern"] }, { id: "r22", name: "Dual-Tone SS Glass Railing", category: "railing", description: "Dual-tone stainless steel finish combined with clear glass panels.", image: "/images/r22.jpg", features: ["Dual Finish", "Luxury Design", "Contemporary Style"] }, { id: "r23", name: "Wave Pattern SS Designer Railing", category: "railing", description: "Custom wave-pattern stainless steel panels for artistic railing designs.", image: "/images/r23.jpg", features: ["Artistic Design", "Custom Patterns", "High Strength"] }, { id: "r24", name: "SS Fin Blade Architectural Railing", category: "railing", description: "Vertical SS fin blades creating a bold architectural statement.", image: "/images/r24.jpg", features: ["Architectural Style", "Modern Elevation", "Heavy Duty"] }, { id: "r25", name: "SS Twisted Rod Designer Railing", category: "railing", description: "Twisted stainless steel rods arranged in a premium decorative pattern for balconies and staircases.", image: "/images/r25.jpg", features: ["Twisted Rod Design", "Decorative Style", "Heavy Gauge SS"] }, { id: "r26", name: "SS Criss-Cross Frame Railing", category: "railing", description: "Stainless steel flat bars in a criss-cross lattice frame for modern architectural railings.", image: "/images/r26.jpg", features: ["Criss-Cross Pattern", "Architectural Look", "High Strength"] }, { id: "r27", name: "SS Vertical Tube Cluster Railing", category: "railing", description: "Clustered vertical stainless steel tubes with varying spacing for a bold modern appearance.", image: "/images/r27.jpg", features: ["Tube Cluster Design", "Contemporary Style", "Durable Finish"] }];

PRODUCTS.push(
  { id: "f35", name: "Premium Stainless Jula Set", category: "furniture", description: "Heavy stainless steel jula set with smooth finish and comfortable family seating for indoor or covered balcony spaces.", image: "/images/1.jpeg", features: ["Premium Polish", "Heavy Chain", "Family Seating"] },
  { id: "f37", name: "Outdoor Garden Swing", category: "furniture", description: "Weather-friendly garden swing with a durable steel canopy frame and comfortable seating layout.", image: "/images/10.jpeg", features: ["Outdoor Ready", "Canopy Frame", "Long Life"] },
  { id: "f38", name: "Color Woven Steel Charpai", category: "furniture", description: "Traditional charpai with a powder-coated steel structure and colorful woven base for daily home use.", image: "/images/35.jpeg", features: ["Color Weave", "Fold Friendly", "Strong Base"] },
  { id: "f39", name: "Luxury Blue Sofa Set", category: "furniture", description: "Premium stainless steel sofa set with cushioned seating, polished arms, and a bold modern lounge look.", image: "/images/40.jpeg", features: ["Cushioned", "Mirror Polish", "Living Room"] },
  { id: "f40", name: "Royal Steel Sofa Cum Bed", category: "furniture", description: "Space-saving sofa cum bed with a sturdy steel body and easy conversion for guest rooms and homes.", image: "/images/41.jpeg", features: ["Sofa Cum Bed", "Space Saving", "Heavy Duty"] },
  { id: "f41", name: "SS Dining Table With Chairs", category: "furniture", description: "Durable stainless steel dining setup with a compact table profile and easy-clean seating.", image: "/images/48.jpeg", features: ["Dining Set", "Easy Clean", "Stable Frame"] },
  { id: "f42", name: "Outdoor Dining Bench Set", category: "furniture", description: "Long-lasting steel dining and bench arrangement for terraces, gardens, canteens, and outdoor seating.", image: "/images/54.jpeg", features: ["Outdoor Use", "Bench Seating", "Rust Resistant"] },
  { id: "f43", name: "Premium SS Dining Table", category: "furniture", description: "Elegant stainless steel dining table with a polished base and modern tabletop combination.", image: "/images/56.jpeg", features: ["Premium Base", "Modern Dining", "Custom Size"] },
  { id: "f44", name: "Steel Temple Mandir Stand", category: "furniture", description: "Compact stainless steel mandir stand with a neat platform and easy-maintenance polished finish.", image: "/images/65.jpeg", features: ["Mandir Stand", "Compact", "Polished SS"] },
  { id: "f45", name: "Blue Cushion Steel Bed", category: "furniture", description: "Comfortable steel bed design with cushioned surface and a durable frame for long-term use.", image: "/images/67.jpeg", features: ["Cushioned Bed", "Strong Frame", "Daily Use"] },
  { id: "r28", name: "Decorative Main Gate", category: "railing", description: "Designer stainless steel main gate with ornamental patterns and a secure heavy-duty frame.", image: "/images/13.jpeg", features: ["Main Gate", "Decorative", "Secure Frame"] },
  { id: "r29", name: "Modern SS Front Gate", category: "railing", description: "Contemporary stainless steel entrance gate with horizontal slats and clean architectural styling.", image: "/images/18.jpeg", features: ["Horizontal Slats", "Modern Look", "Custom Fit"] },
  { id: "r30", name: "SS Window Safety Grill", category: "railing", description: "Strong stainless steel window grill with a clean geometric design for safety and ventilation.", image: "/images/28.jpeg", features: ["Window Grill", "Safety", "Air Flow"] },
  { id: "r31", name: "Laser Cut SS Panel", category: "railing", description: "Decorative laser-cut stainless steel panel for gates, balcony screens, partitions, and elevation features.", image: "/images/32.jpeg", features: ["Laser Cut", "Decorative", "Custom Pattern"] },
  { id: "r32", name: "Residential Stair Railing", category: "railing", description: "Clean stainless steel staircase railing with balanced spacing and a smooth handrail profile.", image: "/images/80.jpeg", features: ["Staircase", "Smooth Handrail", "Safe Spacing"] },
  { id: "r33", name: "Balcony Glass Railing", category: "railing", description: "Premium balcony railing with glass panels and stainless steel support for an open modern view.", image: "/images/82.jpeg", features: ["Glass Panel", "Open View", "Balcony"] },
  { id: "r34", name: "SS Stair Railing With Glass", category: "railing", description: "Elegant staircase railing combining stainless steel posts, glass inserts, and a polished top rail.", image: "/images/83.jpeg", features: ["Glass Insert", "SS Posts", "Premium Finish"] },
  { id: "r35", name: "Gold Accent Glass Railing", category: "railing", description: "Luxury railing design with gold-tone stainless steel accents and glass panels for premium interiors.", image: "/images/85.jpeg", features: ["Gold Accent", "Glass Panels", "Luxury Look"] },
  { id: "r36", name: "Curved Staircase Railing", category: "railing", description: "Custom curved stainless steel railing built for staircase bends with clean alignment and safety.", image: "/images/87.jpeg", features: ["Curved Fit", "Custom Made", "Safe Rail"] },
  { id: "r37", name: "Exterior Balcony Railing", category: "railing", description: "Weather-resistant balcony railing for building exteriors with strong posts and modern styling.", image: "/images/94.jpeg", features: ["Exterior Use", "Weather Safe", "Strong Posts"] },
  { id: "r38", name: "Black Stair Railing", category: "railing", description: "Bold black staircase railing with stainless steel detailing for modern homes and duplex spaces.", image: "/images/101.jpeg", features: ["Black Finish", "Staircase", "Modern Style"] },
  { id: "r39", name: "Floral Balcony Panel Railing", category: "railing", description: "Designer balcony railing with decorative floral panels and durable stainless steel framing.", image: "/images/106.jpeg", features: ["Floral Panel", "Balcony", "Decorative"] }
);

const FURNITURE_GALLERY_IDS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  25, 27,
  33, 34, 35, 36, 37, 38, 39, 40, 41,
  43, 44, 45, 46,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
  60, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78
];

const RAILING_GALLERY_IDS = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 26, 28, 29, 30, 31, 32,
  42, 47, 59, 61, 79, 80, 81, 82, 83, 84,
  85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
  95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
  105, 106, 107, 108, 109, 110
];

const GALLERY = [
  ...FURNITURE_GALLERY_IDS.map(id => ({ src: `/images/${id}.jpeg`, category: 'furniture' })),
  ...RAILING_GALLERY_IDS.map(id => ({ src: `/images/${id}.jpeg`, category: 'railing' }))
];

// State Machine
const STATE = {
  currentView: 'home',
  catalogueCategory: 'furniture',
  catalogueSearch: '',
  galleryCategory: 'all',
  activeProductModal: null,
  activeImageModal: null
};

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initMobileMenu();
  initCatalogueListeners();
  initGalleryListeners();
  initContactForm();
  initModals();
  updateFooterYear();
  renderDynamicContent();
});

// 1. Simple Client-Side Hash Router
function initRouter() {
  const handleRoute = () => {
    const hash = window.location.hash || '#/';
    let view = 'home';

    if (hash.startsWith('#/catalogue')) {
      view = 'catalogue';
    } else if (hash.startsWith('#/gallery')) {
      view = 'gallery';
    } else if (hash.startsWith('#/about')) {
      view = 'about';
    } else if (hash.startsWith('#/contact')) {
      view = 'contact';
    }

    switchView(view);
  };

  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Run once on load
}

function switchView(viewName) {
  STATE.currentView = viewName;

  // Hide all view screens
  document.querySelectorAll('.view-screen').forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('animate-fade-in');
  });

  // Show active view screen with smooth redirection transition
  const activeView = document.getElementById(`view-${viewName}`);
  if (activeView) {
    activeView.classList.remove('hidden');
    void activeView.offsetWidth; // Trigger reflow to restart animation
    activeView.classList.add('animate-fade-in');
  }

  // Update nav link active states
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isHome = href === '#/' || href === '#';
    const isActive = isHome ? (viewName === 'home') : href.includes(viewName);

    if (isActive) {
      link.classList.add('text-blue-500', 'font-bold');
      link.classList.remove('text-slate-300', 'text-slate-600', 'hover:text-blue-500');
    } else {
      link.classList.remove('text-blue-500', 'font-bold');
      // Home nav has dark bg, others might too. Let's make sure colors match layout
      link.classList.add('text-slate-300', 'hover:text-blue-500');
    }
  });

  // Mobile menu close on route change
  closeMobileMenu();

  if (viewName === 'catalogue') {
    updateCatalogueTabs();
    renderCatalogue();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// 2. Mobile Menu Controller (Right-to-Left Slide Drawer)
function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.remove('active');
    if (!STATE.activeProductModal && !STATE.activeImageModal) {
      document.body.style.overflow = '';
    }
  }
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const mobileLinks = document.querySelectorAll('#mobile-menu-panel a');

  if (menuBtn) menuBtn.addEventListener('click', openMobileMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
  if (backdrop) backdrop.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
      const href = link.getAttribute('href');
      if (href === '#/' || href === '#' || href === '#/home') {
        if (window.location.hash === '#/' || window.location.hash === '' || window.location.hash === '#/home') {
          switchView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });
}

window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;

// 3. Catalogue Controller
function updateCatalogueTabs() {
  const tabFurniture = document.getElementById('tab-furniture');
  const tabRailing = document.getElementById('tab-railing');

  if (tabFurniture && tabRailing) {
    if (STATE.catalogueCategory === 'furniture') {
      tabFurniture.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
      tabFurniture.classList.remove('bg-white', 'text-slate-900', 'border-slate-300');

      tabRailing.classList.remove('bg-slate-900', 'text-white', 'border-slate-900');
      tabRailing.classList.add('bg-white', 'text-slate-900', 'border-slate-300');
    } else {
      tabRailing.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
      tabRailing.classList.remove('bg-white', 'text-slate-900', 'border-slate-300');

      tabFurniture.classList.remove('bg-slate-900', 'text-white', 'border-slate-900');
      tabFurniture.classList.add('bg-white', 'text-slate-900', 'border-slate-300');
    }
  }
}

function setCatalogueCategory(category, scrollToTop = true) {
  STATE.catalogueCategory = category;

  if (window.location.hash !== '#/catalogue') {
    window.location.hash = '#/catalogue';
  } else if (STATE.currentView !== 'catalogue') {
    switchView('catalogue');
  } else {
    updateCatalogueTabs();
    renderCatalogue();
  }

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

window.setCatalogueCategory = setCatalogueCategory;

function initCatalogueListeners() {
  const searchInput = document.getElementById('catalogue-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.catalogueSearch = e.target.value.toLowerCase().trim();
      renderCatalogue();
    });
  }

  // Category tabs
  const tabFurniture = document.getElementById('tab-furniture');
  const tabRailing = document.getElementById('tab-railing');

  if (tabFurniture) {
    tabFurniture.addEventListener('click', () => {
      setCatalogueCategory('furniture', true);
    });
  }

  if (tabRailing) {
    tabRailing.addEventListener('click', () => {
      setCatalogueCategory('railing', true);
    });
  }

  updateCatalogueTabs();
  renderCatalogue(); // Initial render
}

function renderCatalogue() {
  const grid = document.getElementById('catalogue-grid');
  if (!grid) return;

  // Filter products
  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = p.category === STATE.catalogueCategory;
    const matchesSearch = p.name.toLowerCase().includes(STATE.catalogueSearch) ||
      p.description.toLowerCase().includes(STATE.catalogueSearch) ||
      (p.features && p.features.some(f => f.toLowerCase().includes(STATE.catalogueSearch)));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-20 bg-white rounded border border-dashed border-slate-300">
        <p class="text-slate-500 text-lg">No products found matching your search.</p>
        <p class="text-slate-400 text-sm mt-2">Try checking your spelling or selecting another category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const featuresBadges = p.features && p.features.map(f =>
      `<span class="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">${f}</span>`
    ).join('') || '';

    const descId = `desc-${p.id}`;
    const btnId = `desc-btn-${p.id}`;
    // Show Read More only if description is long enough to be clamped
    const isLong = p.description.length > 72;

    return `
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 group">
        <div class="relative overflow-hidden aspect-[4/3] bg-slate-100 cursor-zoom-in" onclick="openImageModal('${p.image}')">
          <img src="${p.image}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src='https://placehold.co/600x450/e2e8f0/1e293b?text=SSF+Product'"/>
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
        <div class="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 class="product-card-title text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">${p.name.trim()}</h3>
          <div class="desc-wrapper mb-3 flex-grow">
            <p id="${descId}" class="product-desc text-slate-600 text-sm leading-relaxed line-clamp-2">${p.description}</p>
            ${isLong ? `<button id="${btnId}" onclick="toggleDesc('${p.id}')" class="read-more-btn mt-1 text-blue-600 text-xs font-semibold hover:text-blue-800 transition-colors focus:outline-none">Read more ▾</button>` : ''}
          </div>
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${featuresBadges}
          </div>
          <div class="mt-auto">
            <a href="https://wa.me/${CONFIG.whatsappSupport.replace('+', '')}?text=Hello%2C%20I%20am%20interested%20in%20your%20product%3A%20${encodeURIComponent(p.name.trim())}%20(ID%3A%20${p.id}).%20Please%20provide%20more%20details." target="_blank" rel="noopener noreferrer" class="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 175.216 175.552">
                <path fill="#fff" d="M87.6 0C39.2 0 0 39.2 0 87.6c0 19.2 6.2 37 16.7 51.5L5.8 175.5l38.2-10.2C57.7 174 72.3 178 87.6 178c48.4 0 87.6-39.2 87.6-87.6S136 0 87.6 0z"/>
                <path fill="#fff" d="M127.7 107.8c-2-1-11.7-5.8-13.5-6.4-1.8-.7-3.1-1-4.4.9-1.3 2-5 6.4-6.2 7.7-1.1 1.3-2.3 1.5-4.2.5-2-.9-8.4-3.1-16-9.9-5.9-5.3-9.9-11.8-11-13.8-1.2-2-.1-3 .9-4 .9-.9 2-2.4 3-3.6 1-1.2 1.3-2 2-3.3.7-1.3.3-2.5-.2-3.5-.5-1-4.4-10.6-6-14.5-1.6-3.8-3.2-3.3-4.4-3.3h-3.8c-1.3 0-3.4.5-5.2 2.5-1.8 2-6.7 6.5-6.7 15.9 0 9.4 6.8 18.5 7.8 19.7 1 1.3 13.4 20.4 32.4 28.6 4.5 1.9 8.1 3.1 10.8 4 4.5 1.4 8.7 1.2 11.9.8 3.6-.5 11.1-4.5 12.7-8.9 1.6-4.4 1.6-8.1 1.1-8.9-.4-.8-1.7-1.3-3.7-2.3z"/>
              </svg>
              Enquiry
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Toggle product description expand / collapse
function toggleDesc(productId) {
  const desc = document.getElementById(`desc-${productId}`);
  const btn  = document.getElementById(`desc-btn-${productId}`);
  if (!desc || !btn) return;

  const expanded = desc.classList.toggle('expanded');
  desc.classList.toggle('line-clamp-2', !expanded);
  btn.textContent = expanded ? 'Show less ▴' : 'Read more ▾';
}
window.toggleDesc = toggleDesc;

// 4. Gallery Controller
function initGalleryListeners() {
  const tabs = document.querySelectorAll('.gallery-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('bg-slate-900', 'text-white', 'border-slate-900'));
      tabs.forEach(t => t.classList.add('bg-white', 'text-slate-900', 'border-slate-300'));

      tab.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
      tab.classList.remove('bg-white', 'text-slate-900', 'border-slate-300');

      STATE.galleryCategory = tab.dataset.category;
      renderGallery();
    });
  });

  renderGallery(); // Initial render
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  // Filter gallery items
  const filtered = GALLERY.filter(item => {
    if (STATE.galleryCategory === 'all') return true;
    return item.category === STATE.galleryCategory;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-20 bg-white rounded border border-dashed border-slate-300">
        <p class="text-slate-500 text-lg">No images found in this category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    return `
      <div class="relative overflow-hidden aspect-square bg-slate-100 border border-slate-200 cursor-zoom-in rounded-xl group" onclick="openImageModal('${item.src}')">
        <img src="${item.src}" alt="Shiv Steel Furniture Work" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src='https://placehold.co/600x600/e2e8f0/1e293b?text=SSF+Work'"/>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <span class="px-5 py-2.5 bg-white/90 backdrop-blur text-slate-900 text-sm font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Image</span>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const statusEl = document.getElementById('form-status');
    const originalBtnText = submitBtn.innerHTML;

    const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[char]));

    const setStatus = (type, message, actionsHTML = '') => {
      if (!statusEl) return;

      statusEl.innerHTML = `<span>${escapeHTML(message)}</span>${actionsHTML}`;
      statusEl.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-700', 'border', 'border-emerald-200', 'bg-red-50', 'text-red-700', 'border-red-200');

      if (type === 'success') {
        statusEl.classList.add('bg-emerald-50', 'text-emerald-700', 'border', 'border-emerald-200');
      } else {
        statusEl.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200');
      }
    };

    // Disable button and show spinner
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending Inquiry...
    `;

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const endpoint = `https://formsubmit.co/ajax/${CONFIG.email}`;

    if (!name || !phone || !message) {
      setStatus('error', 'Please fill your name, phone number, and inquiry details.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error', 'Please enter a complete email address, like name@example.com.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    const subject = `Shiv Steel Furniture - New Query from ${name}`;
    const inquiryText = `New website inquiry for Shiv Steel Furniture

Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}

Inquiry:
${message}`;

    const payload = {
      name,
      phone,
      message,
      _subject: subject,
      _template: 'table',
      _captcha: 'false'
    };

    if (email) {
      payload.email = email;
      payload._replyto = email;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'FormSubmit email request failed');
      }

      setStatus('success', `Thank you! Your inquiry has been sent to ${CONFIG.email}.`);
      form.reset();
    } catch (error) {
      console.error('Email send failed:', error);
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(inquiryText);
      const whatsappUrl = `https://wa.me/${CONFIG.whatsappSupport.replace('+', '')}?text=${encodedBody}`;

      setStatus(
        'error',
        'Email server is unavailable right now. Redirecting this inquiry to WhatsApp so the message is still delivered.',
        `
          <div class="mt-3">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">Open WhatsApp Now</a>
          </div>
        `
      );

      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 900);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// 6. Modal Controller
function initModals() {
  // Setup close events for details modal and zoom modal
  const prodModal = document.getElementById('details-modal');
  const imgModal = document.getElementById('zoom-modal');

  if (prodModal) {
    prodModal.addEventListener('click', (e) => {
      if (e.target === prodModal || e.target.classList.contains('close-btn')) {
        closeProductModal();
      }
    });
  }

  if (imgModal) {
    imgModal.addEventListener('click', (e) => {
      if (e.target === imgModal || e.target.classList.contains('close-btn')) {
        closeImageModal();
      }
    });
  }

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeImageModal();
    }
  });
}

function openProductModal(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  STATE.activeProductModal = p;

  const modal = document.getElementById('details-modal');
  const modalContent = document.getElementById('details-modal-content');
  if (!modal || !modalContent) return;

  const featuresBadges = p.features && p.features.map(f =>
    `<span class="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200">${f}</span>`
  ).join('') || '';

  modalContent.innerHTML = `
    <div class="grid md:grid-cols-2 gap-8">
      <div class="relative rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] border border-slate-200">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://placehold.co/600x450/e2e8f0/1e293b?text=SSF+Product'"/>
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">${p.category} product</span>
          <h2 class="text-3xl font-bold text-slate-900 mb-4">${p.name}</h2>
          <p class="text-slate-600 leading-relaxed mb-6">${p.description}</p>
          
          <h4 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Specifications / Highlights</h4>
          <div class="flex flex-wrap gap-2 mb-8">
            ${featuresBadges}
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100">
          <a href="https://wa.me/${CONFIG.whatsappSupport.replace('+', '')}?text=Hello%2C%20I%20am%20enquiring%20about%20your%20product%3A%20${encodeURIComponent(p.name)}%20(ID%3A%20${p.id}).%20Please%20let%20me%20know%20price%20and%20delivery%20details." target="_blank" rel="noopener noreferrer" class="flex-grow py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.262-3.822l.374.222c1.6.952 3.447 1.454 5.337 1.455 5.725 0 10.383-4.66 10.386-10.387.002-2.774-1.077-5.383-3.039-7.348C17.06 2.158 14.45 1.077 11.678 1.077c-5.731 0-10.39 4.66-10.393 10.389-.001 1.957.514 3.868 1.493 5.568l.244.425-1.01 3.693 3.782-.992z"/>
            </svg>
            Enquiry
          </a>
          <button onclick="closeProductModal()" class="py-3.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-all">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeProductModal() {
  STATE.activeProductModal = null;
  const modal = document.getElementById('details-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function openImageModal(imgSrc) {
  STATE.activeImageModal = imgSrc;
  const modal = document.getElementById('zoom-modal');
  const modalImg = document.getElementById('zoom-modal-img');

  if (modal && modalImg) {
    modalImg.src = imgSrc;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeImageModal() {
  STATE.activeImageModal = null;
  const modal = document.getElementById('zoom-modal');
  if (modal) modal.classList.add('hidden');
  if (!STATE.activeProductModal) {
    document.body.style.overflow = '';
  }
}

// 7. Render dynamic text properties from CONFIG
function renderDynamicContent() {
  // Update texts where needed
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.dataset.config;
    if (CONFIG[key]) {
      el.textContent = CONFIG[key];
      if (el.tagName === 'A' && key === 'email') {
        el.href = `mailto:${CONFIG[key]}`;
      }
    }
  });
}

function updateFooterYear() {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

// Expose modal triggers to window scope
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;

// Mobile-Only Hero Background Swiper Controller (Clean image shuffling in background only)
let mobileHeroSlideIndex = 0;
let mobileHeroTimer = null;

function initMobileHeroSwiper() {
  const slides = document.querySelectorAll('.mobile-slide');
  if (!slides || slides.length === 0) return;

  if (mobileHeroTimer) clearInterval(mobileHeroTimer);
  mobileHeroTimer = setInterval(() => {
    const currentSlides = document.querySelectorAll('.mobile-slide');
    if (!currentSlides || currentSlides.length === 0) return;

    currentSlides[mobileHeroSlideIndex].classList.remove('opacity-100');
    currentSlides[mobileHeroSlideIndex].classList.add('opacity-0');

    mobileHeroSlideIndex = (mobileHeroSlideIndex + 1) % currentSlides.length;

    currentSlides[mobileHeroSlideIndex].classList.remove('opacity-0');
    currentSlides[mobileHeroSlideIndex].classList.add('opacity-100');
  }, 4000);
}

// Initialize Mobile Hero Swiper when document is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileHeroSwiper();
});

