import { NextResponse } from "next/server";

let products = [
    // --- LIVING ROOM ---
    { id: 1, category: "Living Room", subcategory: "Seating", title: "Luxury Sofa Set", desc: "Premium fabric finish with high-density foam.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80", rate: "$899" },
    { id: 2, category: "Living Room", subcategory: "Seating", title: "Velvet Armchair", desc: "Soft velvet with gold-plated legs for a royal touch.", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80", rate: "$250" },
    { id: 3, category: "Living Room", subcategory: "Tables", title: "Marble Coffee Table", desc: "Natural white marble top with a sturdy steel frame.", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80", rate: "$180" },
    { id: 4, category: "Living Room", subcategory: "Storage", title: "Minimalist TV Stand", desc: "Clean lines and oak finish with cable management.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80", rate: "$320" },
    { id: 5, category: "Living Room", subcategory: "Seating", title: "Leather Sectional", desc: "Top-grain Italian leather in chocolate brown.", image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800&q=80", rate: "$1,200" },
    { id: 6, category: "Living Room", subcategory: "Seating", title: "Ottoman Pouf", desc: "Hand-knitted cotton floor pouf for extra seating.", image: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&w=800&q=80", rate: "$45" },
    { id: 7, category: "Living Room", subcategory: "Storage", title: "Modern Bookshelf", desc: "Geometric design bookshelf in matte black metal.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80", rate: "$210" },
    { id: 8, category: "Living Room", subcategory: "Seating", title: "Recliner Chair", desc: "Adjustable backrest with plush microfiber padding.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80", rate: "$380" },
    { id: 9, category: "Living Room", subcategory: "Tables", title: "Accent Side Table", desc: "Industrial style wood and iron circular table.", image: "https://images.unsplash.com/photo-1565412850130-3164a6d46001?auto=format&fit=crop&w=800&q=80", rate: "$65" },
    { id: 10, category: "Living Room", subcategory: "Seating", title: "Chesterfield Sofa", desc: "Classic tufted back design with rolled arms.", image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80", rate: "$950" },
    { id: 11, category: "Living Room", subcategory: "Storage", title: "Media Console", desc: "Mid-century modern walnut wood media unit.", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80", rate: "$410" },
    { id: 12, category: "Living Room", subcategory: "Seating", title: "Lounge Daybed", desc: "Sleek low-profile daybed for relaxation.", image: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&w=800&q=80", rate: "$550" },
    { id: 13, category: "Living Room", subcategory: "Tables", title: "Glass End Table", desc: "Tempered glass top with a geometric base.", image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=800&q=80", rate: "$120" },
    { id: 14, category: "Living Room", subcategory: "Seating", title: "Chaise Longue", desc: "Elegant curved chaise upholstered in linen.", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=800&q=80", rate: "$420" },
    { id: 15, category: "Living Room", subcategory: "Decor", title: "Fireplace Mantel", desc: "Faux wood decorative mantel for home coziness.", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80", rate: "$280" },
    { id: 16, category: "Living Room", subcategory: "Storage", title: "Floating Shelves", desc: "Set of 3 rustic pine wood floating shelves.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80", rate: "$55" },
    { id: 17, category: "Living Room", subcategory: "Seating", title: "Swing Egg Chair", desc: "Indoor rattan swing chair with stand.", image: "https://images.unsplash.com/photo-1581337563121-722a57173155?auto=format&fit=crop&w=800&q=80", rate: "$290" },
    { id: 18, category: "Living Room", subcategory: "Seating", title: "Corner Sofa", desc: "Space-saving L-shaped sofa for small apartments.", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80", rate: "$780" },
    { id: 19, category: "Living Room", subcategory: "Tables", title: "Nest of Tables", desc: "Trio of stackable tables for versatile use.", image: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?auto=format&fit=crop&w=800&q=80", rate: "$140" },
    { id: 20, category: "Living Room", subcategory: "Seating", title: "Sling Chair", desc: "Canvas and leather mid-century sling chair.", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80", rate: "$195" },
    { id: 21, category: "Living Room", subcategory: "Decor", title: "Floor Lamp Base", desc: "Solid marble base for designer floor lighting.", image: "https://images.unsplash.com/photo-1507473885765-e6ed657f78ea?auto=format&fit=crop&w=800&q=80", rate: "$80" },

    // --- BEDROOM ---
    { id: 22, category: "Bedroom", subcategory: "Beds", title: "King Size Bed", desc: "Strong oak wood frame with upholstered headboard.", image: "https://images.unsplash.com/photo-1505693419148-1834283da3e3?auto=format&fit=crop&w=800&q=80", rate: "$650" },
    { id: 23, category: "Bedroom", subcategory: "Storage", title: "Nightstand Duo", desc: "Minimalist two-drawer side tables.", image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=800&q=80", rate: "$180" },
    { id: 24, category: "Bedroom", subcategory: "Storage", title: "6-Drawer Dresser", desc: "Spacious storage with soft-close drawers.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80", rate: "$450" },
    { id: 25, category: "Bedroom", subcategory: "Mattresses", title: "Memory Foam Mattress", desc: "Cooling gel technology for a better sleep.", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80", rate: "$500" },
    { id: 26, category: "Bedroom", subcategory: "Storage", title: "Wardrobe Closet", desc: "Triple door wardrobe with mirror and hanging rod.", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80", rate: "$720" },
    { id: 27, category: "Bedroom", subcategory: "Storage", title: "Vanity Table", desc: "Modern makeup desk with LED lighted mirror.", image: "https://images.unsplash.com/photo-1616137422495-1e902b72174c?auto=format&fit=crop&w=800&q=80", rate: "$310" },
    { id: 28, category: "Bedroom", subcategory: "Beds", title: "Bedside Bench", desc: "Tufted velvet bench for the foot of the bed.", image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=800&q=80", rate: "$150" },
    { id: 29, category: "Bedroom", subcategory: "Beds", title: "Canopy Bed", desc: "Romantic black iron frame canopy bed.", image: "https://images.unsplash.com/photo-1617325252241-8b13691d9ed5?auto=format&fit=crop&w=800&q=80", rate: "$850" },
    { id: 30, category: "Bedroom", subcategory: "Accessories", title: "Floor Mirror", desc: "Full-length leaning mirror with gold frame.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80", rate: "$210" },
    { id: 31, category: "Bedroom", subcategory: "Storage", title: "Floating Nightstand", desc: "Wall-mounted walnut shelf for modern rooms.", image: "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&w=800&q=80", rate: "$95" },
    { id: 32, category: "Bedroom", subcategory: "Beds", title: "Adjustable Base", desc: "Motorized bed base with remote control.", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80", rate: "$480" },
    { id: 33, category: "Bedroom", subcategory: "Storage", title: "Jewelry Armoire", desc: "Slim standing cabinet with velvet lining.", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80", rate: "$165" },
    { id: 34, category: "Bedroom", subcategory: "Beds", title: "Linen Headboard", desc: "Detachable padded headboard for any bed frame.", image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80", rate: "$110" },
    { id: 35, category: "Bedroom", subcategory: "Storage", title: "Storage Trunk", desc: "Woven rattan trunk for blanket storage.", image: "https://images.unsplash.com/photo-1594420324534-f4f0390f7798?auto=format&fit=crop&w=800&q=80", rate: "$130" },
    { id: 36, category: "Bedroom", subcategory: "Beds", title: "Twin Daybed", desc: "Versatile bed with trundle for guests.", image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=80", rate: "$390" },
    { id: 37, category: "Bedroom", subcategory: "Accessories", title: "Reading Sconce", desc: "Wall-mounted swing arm lamp in brass.", image: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&w=800&q=80", rate: "$75" },
    { id: 38, category: "Bedroom", subcategory: "Accessories", title: "Quilt Rack", desc: "Solid cherry wood standing blanket ladder.", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80", rate: "$60" },
    { id: 39, category: "Bedroom", subcategory: "Accessories", title: "Valet Stand", desc: "Executive suit hanger and organizer.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80", rate: "$120" },
    { id: 40, category: "Bedroom", subcategory: "Accessories", title: "Daylight Alarm", desc: "Smart sunrise simulation alarm clock.", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80", rate: "$50" },
    { id: 41, category: "Bedroom", subcategory: "Beds", title: "Bunk Bed", desc: "Solid pine wood bunk bed for kids' room.", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80", rate: "$580" },

    // --- OFFICE ---
    { id: 42, category: "Office", subcategory: "Desks", title: "Executive Desk", desc: "L-shaped mahogany desk with built-in drawers.", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80", rate: "$450" },
    { id: 43, category: "Office", subcategory: "Chairs", title: "Ergonomic Chair", desc: "Mesh back with lumbar support and 4D armrests.", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80", rate: "$280" },
    { id: 44, category: "Office", subcategory: "Desks", title: "Standing Desk", desc: "Electric height-adjustable desk with memory presets.", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80", rate: "$390" },
    { id: 45, category: "Office", subcategory: "Organization", title: "Filing Cabinet", desc: "Mobile 3-drawer metal filing unit with locks.", image: "https://images.unsplash.com/photo-1595844737474-29dec4442118?auto=format&fit=crop&w=800&q=80", rate: "$140" },
    { id: 46, category: "Office", subcategory: "Desks", title: "Meeting Table", desc: "Circular conference table for collaborative spaces.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", rate: "$300" },
    { id: 47, category: "Office", subcategory: "Chairs", title: "Guest Office Chair", desc: "Sleek cantilever base chair in black leather.", image: "https://images.unsplash.com/photo-1505797149-43b0076649d6?auto=format&fit=crop&w=800&q=80", rate: "$110" },
    { id: 48, category: "Office", subcategory: "Organization", title: "Desk Organizer", desc: "Sustainable bamboo multi-tier desk tray.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80", rate: "$35" },
    { id: 49, category: "Office", subcategory: "Accessories", title: "Monitor Arm", desc: "Dual-screen gas spring monitor mount.", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80", rate: "$85" },
    { id: 50, category: "Office", subcategory: "Organization", title: "Whiteboard", desc: "Magnetic tempered glass dry-erase board.", image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80", rate: "$120" },
    { id: 51, category: "Office", subcategory: "Desks", title: "Writing Desk", desc: "Compact oak desk for small home offices.", image: "https://images.unsplash.com/photo-1518644730709-0835104d9daa?auto=format&fit=crop&w=800&q=80", rate: "$175" },
    { id: 52, category: "Office", subcategory: "Accessories", title: "Floor Protector", desc: "Transparent mat for rolling office chairs.", image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&w=800&q=80", rate: "$40" },
    { id: 53, category: "Office", subcategory: "Accessories", title: "Task Light", desc: "LED desk lamp with wireless charging base.", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=800&q=80", rate: "$65" },
    { id: 54, category: "Office", subcategory: "Accessories", title: "CPU Holder", desc: "Under-desk adjustable computer mount.", image: "https://images.unsplash.com/photo-1587614382346-4ec70a388b28?auto=format&fit=crop&w=800&q=80", rate: "$45" },
    { id: 55, category: "Office", subcategory: "Organization", title: "Wall Grid", desc: "Wire wall grid for notes and photos.", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", rate: "$25" },
    { id: 56, category: "Office", subcategory: "Organization", title: "Privacy Screen", desc: "Acoustic desk divider for focus.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", rate: "$90" },
    { id: 57, category: "Office", subcategory: "Organization", title: "Credenza", desc: "Modern storage credenza for office supplies.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80", rate: "$480" },
    { id: 58, category: "Office", subcategory: "Chairs", title: "Drafting Stool", desc: "Height-adjustable stool with foot ring.", image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80", rate: "$160" },
    { id: 59, category: "Office", subcategory: "Accessories", title: "Waste Bin", desc: "Brushed stainless steel office trash can.", image: "https://images.unsplash.com/photo-1591193680104-6814d9300635?auto=format&fit=crop&w=800&q=80", rate: "$30" },
    { id: 60, category: "Office", subcategory: "Accessories", title: "Keyboard Tray", desc: "Under-desk sliding ergonomic tray.", image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&w=800&q=80", rate: "$55" },
    { id: 61, category: "Office", subcategory: "Organization", title: "Bookcase", desc: "Ladder style bookcase with white finish.", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80", rate: "$135" },
    { id: 62, category: "Office", subcategory: "Accessories", title: "Cable Tray", desc: "Wire management tray for clean setup.", image: "https://images.unsplash.com/photo-1616464916356-3a777b2b59b1?auto=format&fit=crop&w=800&q=80", rate: "$20" },

    // --- DINING ---
    { id: 63, category: "Dining", subcategory: "Tables", title: "Dining Table", desc: "Solid oak table seats 6 comfortably.", image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80", rate: "$550" },
    { id: 64, category: "Dining", subcategory: "Seating", title: "Velvet Chairs", desc: "Set of 4 upholstered dining chairs.", image: "https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?auto=format&fit=crop&w=800&q=80", rate: "$320" },
    { id: 65, category: "Dining", subcategory: "Storage", title: "Kitchen Island", desc: "Mobile island with butcher block top.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", rate: "$410" },
    { id: 66, category: "Dining", subcategory: "Seating", title: "Bar Stools", desc: "Industrial metal stools with wooden seats.", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80", rate: "$150" },
    { id: 67, category: "Dining", subcategory: "Storage", title: "Sideboard", desc: "Buffet cabinet for dinnerware storage.", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80", rate: "$480" },
    { id: 68, category: "Dining", subcategory: "Storage", title: "Wine Rack", desc: "Wall-mounted wood and iron wine holder.", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80", rate: "$65" },
    { id: 69, category: "Dining", subcategory: "Tables", title: "Pub Table", desc: "High-top table for small dining corners.", image: "https://images.unsplash.com/photo-1530018607912-eff2df114fbe?auto=format&fit=crop&w=800&q=80", rate: "$210" },
    { id: 70, category: "Dining", subcategory: "Seating", title: "Dining Bench", desc: "Farmhouse style wooden bench.", image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=800&q=80", rate: "$180" },
    { id: 71, category: "Dining", subcategory: "Tables", title: "Glass Table", desc: "Modern glass top with chrome legs.", image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=800&q=80", rate: "$340" },
    { id: 72, category: "Dining", subcategory: "Storage", title: "China Cabinet", desc: "Display cabinet with glass doors and lights.", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80", rate: "$890" },
    { id: 73, category: "Dining", subcategory: "Seating", title: "Rattan Chairs", desc: "Set of 2 bohemian style dining chairs.", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80", rate: "$240" },
    { id: 74, category: "Dining", subcategory: "Kitchenware", title: "Lazy Susan", desc: "Rotating marble tray for the table center.", image: "https://images.unsplash.com/photo-1591814468923-accb572d1350?auto=format&fit=crop&w=800&q=80", rate: "$45" },
    { id: 75, category: "Dining", subcategory: "Storage", title: "Serving Cart", desc: "Gold bar cart with glass shelves.", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80", rate: "$190" },
    { id: 76, category: "Dining", subcategory: "Tables", title: "Expandable Table", desc: "Table with leaf extension for extra guests.", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80", rate: "$620" },
    { id: 77, category: "Dining", subcategory: "Storage", title: "Baker's Rack", desc: "Wrought iron rack for kitchen storage.", image: "https://images.unsplash.com/photo-1595844737474-29dec4442118?auto=format&fit=crop&w=800&q=80", rate: "$175" },
    { id: 78, category: "Dining", subcategory: "Kitchenware", title: "Dining Rug", desc: "Easy-clean low pile rug for under tables.", image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=80", rate: "$120" },
    { id: 79, category: "Dining", subcategory: "Kitchenware", title: "Napkin Holder", desc: "Acacia wood luxury napkin organizer.", image: "https://images.unsplash.com/photo-1594913785162-e678ac052429?auto=format&fit=crop&w=800&q=80", rate: "$25" },
    { id: 80, category: "Dining", subcategory: "Tables", title: "Trestle Table", desc: "Rustic farmhouse trestle dining table.", image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80", rate: "$740" },
    { id: 81, category: "Dining", subcategory: "Seating", title: "Breakfast Nook", desc: "Corner L-shaped bench set for breakfast.", image: "https://images.unsplash.com/photo-1616137422495-1e902b72174c?auto=format&fit=crop&w=800&q=80", rate: "$520" },
    { id: 82, category: "Dining", subcategory: "Kitchenware", title: "Pendant Light", desc: "Modern geometric lighting for dining area.", image: "https://images.unsplash.com/photo-1507473885765-e6ed657f78ea?auto=format&fit=crop&w=800&q=80", rate: "$110" },
];

// CORS helper
function cors(res) {
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
}

export async function OPTIONS() {
    return cors(new NextResponse(null, { status: 200 }));
}

//
// ✅ GET PRODUCTS (with filters)
//  /api/products?category=Living Room
//  /api/products?subcategory=Sofas
//
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const subcategory = searchParams.get("subcategory");

    let filtered = products;

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    if (subcategory) {
        filtered = filtered.filter(p => p.subcategory === subcategory);
    }

    return cors(NextResponse.json(filtered));
}

//
// ✅ ADD PRODUCT
//
export async function POST(req) {
    try {
        const body = await req.json();

        const newProduct = {
            id: Date.now(),
            name: body.name,
            description: body.description,
            price: Number(body.price),
            stock: Number(body.stock),
            category: body.category,
            subcategory: body.subcategory,   // 👈 NEW FIELD
            imageUrl: body.imageUrl || ""
        };

        products.push(newProduct);

        return cors(NextResponse.json(newProduct, { status: 201 }));
    } catch {
        return cors(
            NextResponse.json({ error: "Failed to create product" }, { status: 400 })
        );
    }
}

//
// ✅ DELETE PRODUCT
//
export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));

    products = products.filter(p => p.id !== id);

    return cors(NextResponse.json({ success: true }));
}
