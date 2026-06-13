// Shiv Steel Furniture - Core Application Controller

const CONFIG = {
  companyName: "Shiv Steel Furniture",
  shortName: "SSF",
  email: "infoshivsteelfurniture@gmail.com",
  address: "Shop no: 6-7-8, Parvati Nagar Shopping Center, Viratnagar, Ahmedabad, Gujarat-382415",
  mapUrl: "https://www.google.com/maps/place/Shiv+steel+furniture/@23.0278479,72.6391343,642m",
  owners: [
    {
      name: "Mr. Govind Purohit",
      phone: "+91 99986 66658",
      whatsapp: "919998666658"
    },
    {
      name: "Mr. Hitesh Purohit",
      phone: "+91 98983 33365",
      whatsapp: "919558203813"
    }
  ],
  whatsappSupport: "919426077429",
  imageBaseUrl: "https://shivsteelfurniture.netlify.app"
};

// 100 Unique Steel Products (55 Furniture Items, 45 Railing & Structural Items)
const PRODUCTS = [
  // Furniture Items (f1 to f55)
  { id: "f1", name: "Luxury Steel Swing", category: "furniture", description: "Premium outdoor swing with heavy-duty chain and comfortable cushion seating.", image: "/images/f1.jpg", features: ["Heavy Gauge", "Rust Free", "Custom Cushion"] },
  { id: "f2", name: "Modern Steel Sofa", category: "furniture", description: "3-seater stainless steel sofa with ergonomic comfort and mirror polish.", image: "/images/f2.jpg", features: ["304 Grade", "Mirror Finish", "Modern Design"] },
  { id: "f3", name: "Wooden Designer Jula", category: "furniture", description: "Traditional steel swing integrated with durable teak wood seats.", image: "/images/f3.jpg", features: ["Strong Frame", "Teak Wood", "Indoor Use"] },
  { id: "f4", name: "Steel Double Bed Frame", category: "furniture", description: "Heavy-duty steel double bed frame for long-lasting comfort and zero noise.", image: "/images/f4.jpg", features: ["Load Bearing", "Noise Free", "Rust Resistant"] },
  { id: "f5", name: "Steel Single Bed", category: "furniture", description: "Compact steel bed suitable for homes, hostels, and staff quarters.", image: "/images/f5.jpg", features: ["Compact Design", "Strong Welds", "Low Maintenance"] },
  { id: "f6", name: "Steel Folding Bed", category: "furniture", description: "Space-saving folding steel bed with smooth springs and easy mechanism.", image: "/images/f6.jpg", features: ["Foldable", "Space Saving", "Easy Storage"] },
  { id: "f7", name: "Steel Cradle (Palna)", category: "furniture", description: "Safe and sturdy steel cradle with smooth rocking hooks for infants.", image: "/images/f7.jpg", features: ["Smooth Finish", "Child Safe", "Balanced Design"] },
  { id: "f8", name: "Steel Dining Table Set", category: "furniture", description: "Modern steel dining table with solid structural legs and matching chairs.", image: "/images/f8.jpg", features: ["Heavy Base", "Modern Look", "Scratch Resistant"] },
  { id: "f9", name: "SS Cushion Chair", category: "furniture", description: "Comfortable steel chair with cushioned seat for dining and study rooms.", image: "/images/f9.jpg", features: ["Comfort Seat", "Strong Legs", "Easy Clean"] },
  { id: "f10", name: "Steel Study Table", category: "furniture", description: "Minimal steel study table with storage drawers for home and office.", image: "/images/f10.jpg", features: ["Compact", "Modern Finish", "Durable"] },
  { id: "f11", name: "SS Office Chair", category: "furniture", description: "Strong steel office chair with ergonomic lumbar support and robust frame.", image: "/images/f11.jpg", features: ["Ergonomic", "Stable Frame", "Professional Use"] },
  { id: "f12", name: "Steel Shoe Rack", category: "furniture", description: "Multi-layer steel shoe rack with open shelves for ventilation and space efficiency.", image: "/images/f12.jpg", features: ["Space Saving", "Rust Proof", "Easy Assembly"] },
  { id: "f13", name: "SS Heavy Wardrobe", category: "furniture", description: "Spacious steel almirah wardrobe with secure multi-point locking system.", image: "/images/f13.jpg", features: ["Lockable", "Spacious", "Heavy Duty"] },
  { id: "f14", name: "Steel Bar Stool", category: "furniture", description: "High-elevation modern steel bar stool with anti-slip bottom ring.", image: "/images/f14.jpg", features: ["Modern Look", "Strong Support", "Anti-Slip"] },
  { id: "f15", name: "Steel Center Table", category: "furniture", description: "Minimal steel center coffee table with tempered glass top support.", image: "/images/f15.jpg", features: ["Stable Base", "Elegant Look", "Scratch Resistant"] },
  { id: "f16", name: "Vertical Bookshelf", category: "furniture", description: "Vertical steel bookshelf with multiple shelves for stores and libraries.", image: "/images/f16.jpg", features: ["High Strength", "Space Efficient", "Modern Finish"] },
  { id: "f17", name: "Steel Balcony Chair", category: "furniture", description: "Weather-resistant steel chair with mesh backing for outdoor balcony use.", image: "/images/f17.jpg", features: ["Outdoor Safe", "Rust Resistant", "Lightweight"] },
  { id: "f18", name: "Steel Garden Bench", category: "furniture", description: "Heavy steel bench suitable for public gardens, terraces, and verandas.", image: "/images/f18.jpg", features: ["Weather Proof", "Strong Build", "Long Life"] },
  { id: "f19", name: "Steel Side Table", category: "furniture", description: "Compact steel side table with a modern round layout for bedrooms.", image: "/images/f19.jpg", features: ["Lightweight", "Modern Design", "Easy Move"] },
  { id: "f20", name: "Multi Utility Storage Rack", category: "furniture", description: "Multi-level steel storage rack for residential pantry and store room storage.", image: "/images/f20.jpg", features: ["High Load", "Adjustable Shelves", "Durable"] },
  { id: "f21", name: "Steel Bunk Bed", category: "furniture", description: "Space-efficient double deck bunk bed with safety ladders and railings.", image: "/images/f21.jpg", features: ["Heavy Duty", "Safe Ladder", "Compact Layout"] },
  { id: "f22", name: "Designer Hanging Jula", category: "furniture", description: "Contemporary hanging steel jula with high-grade chain and support hook.", image: "/images/f22.jpg", features: ["Designer Look", "Heavy Chain", "Indoor & Outdoor"] },
  { id: "f23", name: "Royal Carved Jula", category: "furniture", description: "Traditional royal-style steel swing with decorative carvings and patterns.", image: "/images/f23.jpg", features: ["Decorative Design", "Heavy Duty", "Handcrafted Finish"] },
  { id: "f24", name: "Modern Single Jula", category: "furniture", description: "Single-seater compact steel swing designed for modern apartment verandas.", image: "/images/f24.jpg", features: ["Minimal Design", "Strong Frame", "Space Friendly"] },
  { id: "f25", name: "Ergonomic Sofa-Cum-Bed", category: "furniture", description: "Space-saving steel sofa cum bed with smooth slider wheels for guest rooms.", image: "/images/f25.jpg", features: ["Easy Conversion", "Ergonomic Comfort", "Heavy Frame"] },
  { id: "f26", name: "Hydraulic Storage Steel Bed", category: "furniture", description: "Steel double bed with smooth hydraulic gas lifts for under-bed storage access.", image: "/images/f26.jpg", features: ["Hydraulic Lift", "Extra Storage", "Strong Base"] },
  { id: "f27", name: "Kitchen Storage Rack", category: "furniture", description: "Multi-shelf utility rack for organized kitchen container placement.", image: "/images/f27.jpg", features: ["Multi Shelf", "Easy Clean", "Heavy Load"] },
  { id: "f28", name: "Steel Prayer Mandir", category: "furniture", description: "Compact steel mandir with laser-cut decorative panels and platform.", image: "/images/f28.jpg", features: ["Decorative Panels", "Compact Size", "Easy Install"] },
  { id: "f29", name: "Shop Utility Cabinet", category: "furniture", description: "Heavy-duty double door steel locker cabinet for files and secure records.", image: "/images/f29.jpg", features: ["Multi Utility", "Adjustable Shelves", "Long Lasting"] },
  { id: "f30", name: "Steel Charpai (Cot)", category: "furniture", description: "Traditional steel charpai with strong elastic woven base for daily rest.", image: "/images/f30.jpg", features: ["Heavy Duty Frame", "Comfortable Weave", "Long Lasting"] },
  { id: "f31", name: "Steel Folding Charpai", category: "furniture", description: "Space-saving folding steel charpai for terrace sleeping and easy transit.", image: "/images/f31.jpg", features: ["Foldable Design", "Strong Steel Frame", "Easy Storage"] },
  { id: "f32", name: "Single Hanging Jula", category: "furniture", description: "Compact single hanging steel swing with integrated stand frame.", image: "/images/f32.jpg", features: ["Comfortable Seat", "Stand Supported", "Space Saving"] },
  { id: "f33", name: "Rocking Stainless Steel Chair", category: "furniture", description: "Ergonomic SS rocking chair with curved runners for ultimate relaxation.", image: "/images/f33.jpg", features: ["Smooth Rocking", "Ergonomic Design", "Strong Frame"] },
  { id: "f34", name: "Foldable SS Baby Cradle", category: "furniture", description: "Portable folding baby cradle with breathable mesh side and wheels.", image: "/images/f34.jpg", features: ["Foldable Design", "Smooth Rocking", "Child Safe Lock"] },
  { id: "f35", name: "Premium Stainless Jula Set", category: "furniture", description: "Heavy stainless steel swing frame with polished family seat layouts.", image: "/images/1.jpeg", features: ["Premium Polish", "Heavy Chain", "Family Seating"] },
  { id: "f36", name: "Designer Double Jula", category: "furniture", description: "Decorative steel swing with circular frame supports and refined welds.", image: "/images/2.jpeg", features: ["Designer Frame", "Strong Welds", "Indoor Use"] },
  { id: "f37", name: "Outdoor Garden Swing", category: "furniture", description: "Weatherproof garden swing with steel top canopy framework.", image: "/images/10.jpeg", features: ["Outdoor Ready", "Canopy Frame", "Long Life"] },
  { id: "f38", name: "Color Woven Steel Charpai", category: "furniture", description: "Traditional charpai with powder coated steel frame and colorful threads.", image: "/images/35.jpeg", features: ["Color Weave", "Fold Friendly", "Strong Base"] },
  { id: "f39", name: "Luxury Blue Sofa Set", category: "furniture", description: "Stainless steel sofa lounge set with luxury blue cushions and armrests.", image: "/images/40.jpeg", features: ["Cushioned", "Mirror Polish", "Living Room"] },
  { id: "f40", name: "Royal Steel Sofa Cum Bed", category: "furniture", description: "Convertible steel bed with floral print cushion mattress and sliding frame.", image: "/images/41.jpeg", features: ["Sofa Cum Bed", "Space Saving", "Heavy Duty"] },
  { id: "f41", name: "SS Dining Table With Chairs", category: "furniture", description: "Sturdy steel dining table combined with 4 high-back steel chairs.", image: "/images/48.jpeg", features: ["Dining Set", "Easy Clean", "Stable Frame"] },
  { id: "f42", name: "Outdoor Dining Bench Set", category: "furniture", description: "Heavy metal bench dining setup for garden verandas and open cafeterias.", image: "/images/54.jpeg", features: ["Outdoor Use", "Bench Seating", "Rust Resistant"] },
  { id: "f43", name: "Premium SS Dining Table", category: "furniture", description: "High-end dining table frame made with premium grade 304 steel profile.", image: "/images/56.jpeg", features: ["Premium Base", "Modern Dining", "Custom Size"] },
  { id: "f44", name: "Steel Temple Mandir Stand", category: "furniture", description: "Stainless steel stand structure custom built for home temples and idols.", image: "/images/65.jpeg", features: ["Mandir Stand", "Compact", "Polished SS"] },
  { id: "f45", name: "Blue Cushion Steel Bed", category: "furniture", description: "Sturdy double bed structure finished with high density blue headboard cushion.", image: "/images/67.jpeg", features: ["Cushioned Bed", "Strong Frame", "Daily Use"] },
  { id: "f46", name: "Corner Steel Sofa Set", category: "furniture", description: "L-shaped modular steel sofa framework designed for corner placements.", image: "/images/73.jpeg", features: ["L Shape", "Family Seating", "Custom Build"] },
  { id: "f47", name: "Modular SS Kitchen Rack", category: "furniture", description: "Heavy-duty modular kitchen rack organizer with dedicated plate slots and hooks.", image: "/images/33.jpeg", features: ["304 Grade", "Wall Mounted", "High Capacity"] },
  { id: "f48", name: "Minimalist Steel Bookshelf", category: "furniture", description: "Vertical freestanding book rack with steel plate shelves and dividers.", image: "/images/34.jpeg", features: ["Compact", "Modern Finish", "High Load"] },
  { id: "f49", name: "Heavy-Duty Garage Storage Rack", category: "furniture", description: "Industrial-grade storage rack with thick angle beams and sheet shelves.", image: "/images/35.jpeg", features: ["High Load", "Adjustable Height", "Rust Resistant"] },
  { id: "f50", name: "SS Folding Dining Table", category: "furniture", description: "Space-saving 4-seater dining table with retractable stainless steel leg hinges.", image: "/images/36.jpeg", features: ["Foldable", "Compact", "Mirror Finish"] },
  { id: "f51", name: "SS Ventilated Shoe Cabinet", category: "furniture", description: "Lockable steel shoe locker with mesh doors to prevent moisture buildup.", image: "/images/37.jpeg", features: ["Lockable", "Air Flow", "Rust Proof"] },
  { id: "f52", name: "SS Canopy Garden Swing", category: "furniture", description: "Premium heavy swing with a sunshade canvas and water-resistant cushion covers.", image: "/images/10.jpeg", features: ["Canopy Frame", "Weather Proof", "Heavy Duty"] },
  { id: "f53", name: "Luxury Steel Dressing Table", category: "furniture", description: "Steel dresser console featuring a circular makeup mirror frame and two drawers.", image: "/images/38.jpeg", features: ["Dresser Mirror", "Elegant Look", "Compact"] },
  { id: "f54", name: "SS Ergonomic Study Desk", category: "furniture", description: "Sleek steel frame computer desk with cable management slots and flat finish.", image: "/images/39.jpeg", features: ["Study Desk", "Ergonomic Layout", "Durable"] },
  { id: "f55", name: "Decorative Room Partition Screen", category: "furniture", description: "Laser-cut designer partition partition screen built using polished steel grids.", image: "/images/32.jpeg", features: ["Partition Frame", "Laser Cut", "Premium Finish"] },

  // Railing & Structural Items (r1 to r45)
  { id: "r1", name: "Frameless Toughened Glass Railing", category: "railing", description: "12mm clear toughened glass with side-mounted SS 316 clamps for balcony elevations.", image: "/images/r1.jpg", features: ["Frameless Design", "SS 316 Grade", "Modern Look"] },
  { id: "r2", name: "SS Vertical Slat Stair Railing", category: "railing", description: "Staircase balustrade constructed using close vertical slats and circular handrails.", image: "/images/r2.jpg", features: ["Matte Finish", "Child Safe", "Strong Build"] },
  { id: "r3", name: "Glass + SS Top Rail Balcony", category: "railing", description: "Toughened glass panels held securely by solid SS posts and a round top rail.", image: "/images/r3.jpg", features: ["Polished Finish", "Luxury Feel", "Glass Panels"] },
  { id: "r4", name: "Laser Cut SS Panel Railing", category: "railing", description: "Balcony railing infill featuring custom CNC laser-cut geometric patterns.", image: "/images/r4.jpg", features: ["Custom Patterns", "Designer Look", "Laser Cut"] },
  { id: "r5", name: "SS Horizontal Pipe Railing", category: "railing", description: "Classic horizontal tube balcony railing in brushed satin finish.", image: "/images/r5.jpg", features: ["Minimal Style", "Weather Resistant", "Horizontal Pipes"] },
  { id: "r6", name: "Tinted Glass SS Railing", category: "railing", description: "Balcony railing with grey tinted safety glass and heavy-duty steel posts.", image: "/images/r6.jpg", features: ["UV Protection", "Premium Glass", "Tinted Panels"] },
  { id: "r7", name: "Curved Glass Staircase Railing", category: "railing", description: "Bent toughened glass panels fitted to spiral staircase railings.", image: "/images/r7.jpg", features: ["Custom Shape", "Architectural Design", "Curved Fit"] },
  { id: "r8", name: "SS Cable Railing System", category: "railing", description: "Industrial look balcony railing with high-tension stainless steel cables.", image: "/images/r8.jpg", features: ["Open View", "Modern Industrial", "Cable Tension"] },
  { id: "r9", name: "Black SS Matte Glass Railing", category: "railing", description: "Modern balustrade with matte black powder coated posts and clear glass.", image: "/images/r9.jpg", features: ["Black Finish", "Contemporary Style", "Clear Glass"] },
  { id: "r10", name: "SS Handrail with Frosted Glass", category: "railing", description: "Frosted privacy glass panels framed with polished stainless steel tubes.", image: "/images/r10.jpg", features: ["Privacy Glass", "Elegant Look", "Frosted Panels"] },
  { id: "r11", name: "Gold PVD SS Glass Railing", category: "railing", description: "Luxury railing posts finished in gold PVD coating holding toughened glass sheets.", image: "/images/r11.jpg", features: ["Luxury Finish", "Gold PVD", "Rust Resistant"] },
  { id: "r12", name: "Minimal SS Bar Railing", category: "railing", description: "Thin round SS vertical bars welded to frames for minimalist balcony grills.", image: "/images/r12.jpg", features: ["Minimal Design", "High Strength", "Vertical Bars"] },
  { id: "r13", name: "SS Post Glass Balcony Railing", category: "railing", description: "Vertical stainless steel posts holding premium structural glass panes.", image: "/images/r13.jpg", features: ["Classic Modern", "Easy Maintenance", "SS Posts"] },
  { id: "r14", name: "Double Height Glass Railing", category: "railing", description: "Extra tall glass panels designed for duplex staircases and high verandas.", image: "/images/r14.jpg", features: ["High Safety", "Villa Design", "Double Height"] },
  { id: "r15", name: "SS Mesh Panel Railing", category: "railing", description: "Crimped stainless steel mesh infill panel inside a heavy-duty tube frame.", image: "/images/r15.jpg", features: ["Industrial Look", "High Durability", "Mesh Infill"] },
  { id: "r16", name: "Smart LED SS Glass Railing", category: "railing", description: "Railing system with integrated LED strip lights inside the bottom SS channel.", image: "/images/r16.jpg", features: ["LED Lighting", "Night Visibility", "Illuminated Rail"] },
  { id: "r17", name: "SS Wooden Finish Glass Railing", category: "railing", description: "Balcony railing with wooden-textured powder coated metal top rail.", image: "/images/r17.jpg", features: ["Wood Finish", "Modern Fusion", "Glass Panels"] },
  { id: "r18", name: "Spider Fitting Glass Railing", category: "railing", description: "Frameless structural glass panels anchored by SS spider claws.", image: "/images/r18.jpg", features: ["Structural Glass", "Premium Engineering", "Spider Claws"] },
  { id: "r19", name: "SS Perforated Sheet Railing", category: "railing", description: "Balcony guardrail using perforated steel sheets for ventilation and screening.", image: "/images/r19.jpg", features: ["Air Flow", "Designer Pattern", "Perforated Sheet"] },
  { id: "r20", name: "Ultra Clear Glass SS Railing", category: "railing", description: "Low-iron crystal clear toughened glass combined with high-shine polished SS posts.", image: "/images/r20.jpg", features: ["Crystal Clear", "Luxury Finish", "Low Iron Glass"] },
  { id: "r21", name: "Floating Glass Edge Railing", category: "railing", description: "Seamless glass balcony railing anchored inside a concealed floor channel.", image: "/images/r21.jpg", features: ["Concealed Fixing", "Seamless Finish", "Ultra Modern"] },
  { id: "r22", name: "Dual-Tone SS Glass Railing", category: "railing", description: "Unique railing posts combining gold PVD accents and silver brushed steel.", image: "/images/r22.jpg", features: ["Dual Finish", "Luxury Design", "Contemporary Style"] },
  { id: "r23", name: "Wave Pattern SS Designer Railing", category: "railing", description: "Staircase balustrade featuring undulating wavy steel slats for artistic layouts.", image: "/images/r23.jpg", features: ["Artistic Design", "Custom Patterns", "High Strength"] },
  { id: "r24", name: "SS Fin Blade Architectural Railing", category: "railing", description: "Bold vertical steel fins arranged to create dynamic shadows on building elevations.", image: "/images/r24.jpg", features: ["Architectural Style", "Modern Elevation", "Heavy Duty"] },
  { id: "r25", name: "SS Twisted Rod Designer Railing", category: "railing", description: "Balcony railing using twisted square steel rods in a decorative pattern.", image: "/images/r25.jpg", features: ["Twisted Rod Design", "Decorative Style", "Heavy Gauge SS"] },
  { id: "r26", name: "SS Criss-Cross Frame Railing", category: "railing", description: "X-shaped flat bar frames providing industrial lattice safety parameters.", image: "/images/r26.jpg", features: ["Criss-Cross Pattern", "Architectural Look", "High Strength"] },
  { id: "r27", name: "SS Vertical Tube Cluster Railing", category: "railing", description: "Railing featuring groups of steel tubes welded with varying intervals.", image: "/images/r27.jpg", features: ["Tube Cluster Design", "Contemporary Style", "Durable Finish"] },
  { id: "r28", name: "Decorative Main Gate", category: "railing", description: "Heavy steel main gate with laser-cut decorative shapes and secure latches.", image: "/images/13.jpeg", features: ["Main Gate", "Decorative", "Secure Frame"] },
  { id: "r29", name: "Modern SS Front Gate", category: "railing", description: "Sleek sliding main entrance gate with horizontal steel slats.", image: "/images/18.jpeg", features: ["Horizontal Slats", "Modern Look", "Custom Fit"] },
  { id: "r30", name: "SS Window Safety Grill", category: "railing", description: "Durable steel grill frames custom fitted to home window panels for safety.", image: "/images/28.jpeg", features: ["Window Grill", "Safety", "Air Flow"] },
  { id: "r31", name: "Laser Cut SS Panel Screen", category: "railing", description: "Decorative partition sheet with intricate cnc cuts for facade elevations.", image: "/images/32.jpeg", features: ["Laser Cut", "Decorative", "Custom Pattern"] },
  { id: "r32", name: "Residential Stair Railing", category: "railing", description: "Standard interior stair railing with round handrail and vertical balusters.", image: "/images/80.jpeg", features: ["Staircase", "Smooth Handrail", "Safe Spacing"] },
  { id: "r33", name: "Balcony Glass Railing", category: "railing", description: "Balcony safety railing with glass frames and base anchor bolts.", image: "/images/82.jpeg", features: ["Glass Panel", "Open View", "Balcony"] },
  { id: "r34", name: "SS Stair Railing With Glass", category: "railing", description: "Premium staircase guardrail combining glass templates and metal vertical tubes.", image: "/images/83.jpeg", features: ["Glass Insert", "SS Posts", "Premium Finish"] },
  { id: "r35", name: "Gold Accent Glass Railing", category: "railing", description: "Interior landing railing featuring gold PVD structural columns and glass panels.", image: "/images/85.jpeg", features: ["Gold Accent", "Glass Panels", "Luxury Look"] },
  { id: "r36", name: "Curved Staircase Railing", category: "railing", description: "Custom rolled handrails designed to curve perfectly along spiral stair steps.", image: "/images/87.jpeg", features: ["Curved Fit", "Custom Made", "Safe Rail"] },
  { id: "r37", name: "Exterior Balcony Railing", category: "railing", description: "High-grade SS 316 balcony railing built to withstand monsoon rains.", image: "/images/94.jpeg", features: ["Exterior Use", "Weather Safe", "Strong Posts"] },
  { id: "r38", name: "Black Stair Railing", category: "railing", description: "Textured black powder coated steel posts holding a polished chrome handrail.", image: "/images/101.jpeg", features: ["Black Finish", "Staircase", "Modern Style"] },
  { id: "r39", name: "Floral Balcony Panel Railing", category: "railing", description: "Decorative floral leaf pattern plates welded inside a steel safety frame.", image: "/images/106.jpeg", features: ["Floral Panel", "Balcony", "Decorative"] },
  { id: "r40", name: "SS Balustrade Cable Railing", category: "railing", description: "Industrial-style balcony guardrail featuring high-tension steel tension cables.", image: "/images/42.jpeg", features: ["Tension Cables", "SS 316 Grade", "Open View"] },
  { id: "r41", name: "Curved Spiral Staircase Railing", category: "railing", description: "Continuous helical steel handrail designed for narrow metal spiral stairs.", image: "/images/47.jpeg", features: ["Curved Fit", "Seamless Welds", "Safe Grip"] },
  { id: "r42", name: "Laser-Cut Tree Pattern Balcony Grill", category: "railing", description: "Artistic safety panel grill showing a laser-cut forest landscape outline.", image: "/images/31.jpeg", features: ["Artistic Grill", "Laser Cut", "High Safety"] },
  { id: "r43", name: "Gold Accent Entrance Canopy Frame", category: "railing", description: "Heavy-duty structural framework in gold PVD steel to support glass awnings.", image: "/images/85.jpeg", features: ["Gold PVD", "Entrance Canopy", "Luxury Appeal"] },
  { id: "r44", name: "Close-Slat Staircase Safety Grill", category: "railing", description: "Stair railing with close vertical gaps (less than 4 inches) for child safety.", image: "/images/80.jpeg", features: ["Child Safe", "High Density", "Matte Finish"] },
  { id: "r45", name: "Concealed U-Channel Base Glass Railing", category: "railing", description: "Minimalist frameless glass railing with support channel sunk into concrete floor.", image: "/images/21.jpeg", features: ["Concealed Channel", "Frameless Look", "Ultra Modern"] }
];

// Helper to check and prefix image source with optimized CDN resizing
function getProductImageSrc(imagePath, width = 400, quality = 70) {
  let url = imagePath;
  if (!imagePath.startsWith('http://') && !imagePath.startsWith('https://')) {
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    url = `${CONFIG.imageBaseUrl}/${cleanPath}`;
  }
  // Use images.weserv.nl for dynamic WebP conversion, compression, and resizing
  const cleanUrl = url.replace(/^https?:\/\//, '');
  return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=${width}&q=${quality}&output=webp`;
}

// App State
const STATE = {
  currentView: 'catalogue',
  catalogueCategory: 'furniture', // Match default active tab
  catalogueSearch: '',
  activeProductModal: null,
  activeImageModal: null
};

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initMobileMenu();
  initCatalogueController();
  initContactForm();
  initModals();
  updateFooterYear();
  
  // Set initial product count
  updateProductCount();
});

// Client-Side Router (Lands on Catalogue by default)
function initRouter() {
  const handleRoute = () => {
    const hash = window.location.hash || '#/';
    let view = 'catalogue'; // DEFAULT LANDING VIEW IS CATALOGUE
    
    if (hash.startsWith('#/contact')) {
      view = 'contact';
    } else if (hash.startsWith('#/catalogue')) {
      view = 'catalogue';
    }
    
    switchView(view);
  };
  
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Run once on startup
}

function switchView(viewName) {
  STATE.currentView = viewName;
  
  // Hide all screens
  document.querySelectorAll('.view-screen').forEach(el => el.classList.add('hidden'));
  
  // Show active screen
  const activeView = document.getElementById(`view-${viewName}`);
  if (activeView) {
    activeView.classList.remove('hidden');
  }
  
  // Update nav link active states (Desktop)
  document.querySelectorAll('.nav-link').forEach(link => {
    const id = link.getAttribute('id');
    const isTarget = id === `nav-link-${viewName}`;
    if (isTarget) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update nav link active states (Mobile)
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href.includes(viewName);
    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile menu close on route change
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');
  
  // Scroll straight to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Mobile Menu Controller
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
        mobileMenu.classList.add('hidden');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Catalogue Controller
function initCatalogueController() {
  const searchInput = document.getElementById('catalogue-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.catalogueSearch = e.target.value.toLowerCase().trim();
      renderCatalogue();
    });
  }
  
  // Tabs filters (All, Furniture, Railings)
  const tabs = [
    { id: 'tab-all-products', cat: 'all' },
    { id: 'tab-furniture', cat: 'furniture' },
    { id: 'tab-railing', cat: 'railing' }
  ];

  tabs.forEach(tabData => {
    const tabEl = document.getElementById(tabData.id);
    if (tabEl) {
      tabEl.addEventListener('click', () => {
        tabs.forEach(t => {
          const el = document.getElementById(t.id);
          if (el) el.classList.remove('active');
        });
        tabEl.classList.add('active');
        STATE.catalogueCategory = tabData.cat;
        renderCatalogue();
      });
    }
  });
  
  renderCatalogue(); // Initial render
}

function renderCatalogue() {
  const grid = document.getElementById('catalogue-grid');
  if (!grid) return;
  
  // Filter products
  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = STATE.catalogueCategory === 'all' || p.category === STATE.catalogueCategory;
    const matchesSearch = p.name.toLowerCase().includes(STATE.catalogueSearch) || 
                          p.description.toLowerCase().includes(STATE.catalogueSearch) ||
                          (p.features && p.features.some(f => f.toLowerCase().includes(STATE.catalogueSearch)));
    return matchesCategory && matchesSearch;
  });
  
  updateProductCount(filtered.length);
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 40px; height: 40px; margin: 0 auto 12px auto; color: var(--color-steel-light);">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p style="font-size: 15px; font-weight: 700; color: var(--color-steel-dark);">No items match your search</p>
        <p style="font-size: 12px; margin-top: 4px;">Try searching for other keywords like "Swing", "Gate", "304", or "Glass".</p>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = filtered.map(p => {
    const gridImageSrc = getProductImageSrc(p.image, 400, 75);
    const featuresBadges = p.features && p.features.map(f => 
      `<span class="spec-badge">${f}</span>`
    ).join('') || '';
    
    const waText = encodeURIComponent(`Hello, I am interested in your catalog item: ${p.name} (ID: ${p.id}). Please share estimated pricing details.`);
    const waLink = `https://wa.me/${CONFIG.whatsappSupport}?text=${waText}`;
    
    return `
      <div class="product-card" onclick="openProductModal('${p.id}')">
        <span class="product-badge-cat">${p.category}</span>
        <div class="product-image-box">
          <img src="${gridImageSrc}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/600x450/e2e8f0/0d9488?text=${encodeURIComponent(p.name)}'">
          <div class="image-zoom-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="zoom-icon-svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
        <div class="product-details">
          <h3 class="product-title">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="spec-badges-row">
            ${featuresBadges}
          </div>
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="whatsapp-inquire-btn" onclick="event.stopPropagation();">
            <svg class="whatsapp-icon-svg" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.262-3.822l.374.222c1.6.952 3.447 1.454 5.337 1.455 5.725 0 10.383-4.66 10.386-10.387.002-2.774-1.077-5.383-3.039-7.348C17.06 2.158 14.45 1.077 11.678 1.077c-5.731 0-10.39 4.66-10.393 10.389-.001 1.957.514 3.868 1.493 5.568l.244.425-1.01 3.693 3.782-.992z"/>
            </svg>
            Enquiry on WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function updateProductCount(count = PRODUCTS.length) {
  const el = document.getElementById('product-count');
  if (el) {
    el.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  }
}

// Contact Form Handler with WhatsApp Fallback
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
      statusEl.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-700', 'bg-red-50', 'text-red-700');
      
      if (type === 'success') {
        statusEl.classList.add('bg-emerald-50', 'text-emerald-700');
      } else {
        statusEl.classList.add('bg-red-50', 'text-red-700');
      }
      statusEl.classList.remove('hidden');
    };
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `Sending inquiry...`;
    
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const endpoint = `https://formsubmit.co/ajax/${CONFIG.email}`;

    if (!name || !phone || !message) {
      setStatus('error', 'Please fill in your name, contact phone number, and query details.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    if (phone.length < 8) {
      setStatus('error', 'Please provide a valid contact number.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    const subject = `SSF Catalogue Query from ${name}`;
    const inquiryText = `Inquiry via SSF Catalogue website:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message}`;

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
        throw new Error('Formsubmit error');
      }

      setStatus('success', `Thank you! Your estimate request has been sent successfully to ${CONFIG.email}.`);
      form.reset();
    } catch (error) {
      console.warn('AJAX submission failed, falling back to direct HTML form POST:', error);
      form.submit();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// Modals Controller
function initModals() {
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

  // Escape key close
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
  
  const modalImageSrc = getProductImageSrc(p.image, 800, 80);
  const zoomImageSrc = getProductImageSrc(p.image, 1200, 85);
  const featuresBadges = p.features && p.features.map(f => 
    `<span class="modal-spec-tag">${f}</span>`
  ).join('') || '';
  
  const waText = encodeURIComponent(`Hello, I saw your catalogue and am interested in the product: ${p.name} (ID: ${p.id}). Please let me know price ranges.`);
  const waLink = `https://wa.me/${CONFIG.whatsappSupport}?text=${waText}`;
 
  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-image-container" onclick="openImageModal('${zoomImageSrc}')" style="cursor: zoom-in;">
        <img src="${modalImageSrc}" alt="${p.name}" onerror="this.onerror=null; this.src='https://placehold.co/600x450/e2e8f0/0d9488?text=${encodeURIComponent(p.name)}'">
      </div>
      <div class="modal-info-panel">
        <span class="modal-cat-tag">${p.category} item</span>
        <h2>${p.name}</h2>
        <p class="modal-description">${p.description}</p>
        
        <h4 class="spec-heading">Highlights & Specifications</h4>
        <div class="modal-spec-row">
          ${featuresBadges}
        </div>
        
        <div class="modal-actions-row">
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="whatsapp-inquire-btn" style="flex-grow: 1;">
            <svg class="whatsapp-icon-svg" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.262-3.822l.374.222c1.6.952 3.447 1.454 5.337 1.455 5.725 0 10.383-4.66 10.386-10.387.002-2.774-1.077-5.383-3.039-7.348C17.06 2.158 14.45 1.077 11.678 1.077c-5.731 0-10.39 4.66-10.393 10.389-.001 1.957.514 3.868 1.493 5.568l.244.425-1.01 3.693 3.782-.992z"/>
            </svg>
            Inquire on WhatsApp
          </a>
          <button class="modal-close-action-btn" onclick="closeProductModal()">Close</button>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Lock scrolling
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

function updateFooterYear() {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

// Expose modal functions
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.closeProductModal = closeProductModal;
