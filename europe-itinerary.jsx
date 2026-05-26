import { useState } from "react";

const TAG = {
  motorsport: { bg: "#E6F1FB", color: "#185FA5", border: "#B5D4F4" },
  nature:     { bg: "#EAF3DE", color: "#3B6D11", border: "#C0DD97" },
  food:       { bg: "#FAEEDA", color: "#854F0B", border: "#FAC775" },
  thrill:     { bg: "#FCEBEB", color: "#A32D2D", border: "#F7C1C1" },
  culture:    { bg: "#EEEDFE", color: "#534AB7", border: "#CECBF6" },
  canal:      { bg: "#E1F5EE", color: "#0F6E56", border: "#9FE1CB" },
  village:    { bg: "#EAF3DE", color: "#3B6D11", border: "#C0DD97" },
  beer:       { bg: "#FAEEDA", color: "#854F0B", border: "#FAC775" },
  chocolate:  { bg: "#FAECE7", color: "#993C1D", border: "#F5C4B3" },
  daytrip:    { bg: "#FBEAF0", color: "#993556", border: "#F4C0D1" },
  travel:     { bg: "#F1EFE8", color: "#5F5E5A", border: "#D3D1C7" },
};

const DATA = [
  {
    id: "munich", name: "Munich", country: "Germany", days: "Days 1–3",
    tagline: "BMW · Bavaria · The Alps",
    accent: "#BA7517", light: "#FAEEDA", border: "#FAC775",
    intro: "Bavaria's capital is where Germany's soul lives — beer gardens older than most nations, the world's greatest car brand headquartered here, and the Alps literally one hour from the city door.",
    highlights: ["BMW Welt & Museum", "Eisbach River Surfers", "Zugspitze Cable Car"],
    days_data: [
      {
        day: 1, label: "Arrive & Feel the City",
        slots: [
          { time: "Morning", icon: "ti-train", tag: "travel", title: "Frankfurt → Munich", body: "Land Frankfurt. Board the ICE high-speed train to Munich (3 hrs smooth, no luggage chaos — just sit and watch Germany roll by). Check in around midday. Schwabing or Maxvorstadt area hotels are ideal for the group." },
          { time: "Afternoon", icon: "ti-trees", tag: "nature", title: "Englischer Garten + Eisbach Surfers", body: "World's largest urban park — bigger than Central Park. Walk toward the Eisbach channel where surfers ride a permanent standing river wave in the middle of the park. One of Europe's most unexpected, genuinely jaw-dropping sights. Kids will watch for an hour without being asked." },
          { time: "Evening", icon: "ti-basket", tag: "food", title: "Viktualienmarkt", body: "Munich's beloved 200-year-old gourmet street market. Try Weisswurst with sweet mustard, fresh pretzels, Obatzda cheese spread. Sit at the beer garden in the market's center as the evening light comes through. The heartbeat of Munich food culture." },
        ]
      },
      {
        day: 2, label: "BMW Day — The Full Experience",
        slots: [
          { time: "Morning", icon: "ti-car", tag: "motorsport", title: "BMW Welt", body: "Free to enter. A piece of futuristic architecture where cars are suspended from the ceiling, concept vehicles sit on open display, and children can climb inside cars. It's a cultural pavilion, not a showroom. Pair it with a walk through the adjacent Olympic Park grounds." },
          { time: "Afternoon", icon: "ti-trophy", tag: "motorsport", title: "BMW Museum", body: "Formula 1 cars, vintage motorcycles from the 1920s, Andy Warhol and Roy Lichtenstein Art Cars, every defining era of BMW design and racing. Budget 2–3 hours. Even people who don't follow motorsport come out converted. One of the world's best automotive museums, full stop." },
          { time: "Evening", icon: "ti-beer", tag: "beer", title: "Augustiner Keller Beer Garden", body: "Not the tourist Hofbräuhaus — this is where Munich actually goes. A 5,000-seat garden under 200-year-old chestnut trees. Steins of Augustiner Lager, roasted chicken, pretzels. The evening light filtering through the canopy at golden hour is genuinely something else." },
        ]
      },
      {
        day: 3, label: "Into the Alps",
        slots: [
          { time: "Full Day", icon: "ti-mountain", tag: "nature", title: "Zugspitze — Germany's Highest Peak", body: "Train to Garmisch-Partenkirchen (1.5 hrs), then cable car to 2,962m. Snow in summer. Views across Germany, Austria, Switzerland, and Italy — four countries at once from one cable car platform. The scale of the Alps cannot be described. Children will remember this for the rest of their lives." },
          { time: "Alternative", icon: "ti-sailboat", tag: "nature", title: "Starnberger See (Gentler Option)", body: "If the group wants a calmer day — train 30 min from Munich to a stunning lake surrounded by royal villas. Boat rides, lakeside lunch cafés, Alpine panorama backdrop. Equally memorable." },
        ]
      },
    ]
  },
  {
    id: "cologne", name: "Cologne + Rhine", country: "Germany", days: "Days 4–6",
    tagline: "Kölsch · Phantasialand · River Valley",
    accent: "#993C1D", light: "#FAECE7", border: "#F5C4B3",
    intro: "Germany's most cinematic river corridor — UNESCO-listed cliffs, vine-covered hillsides, and one of Europe's highest-rated theme parks 30 minutes from a city famous for its unique beer ritual.",
    highlights: ["Phantasialand Full Day", "Rhine Valley Boat Cruise", "Kölsch Beer Ritual"],
    days_data: [
      {
        day: 4, label: "Arrive Cologne",
        slots: [
          { time: "Morning", icon: "ti-train", tag: "travel", title: "Munich → Cologne by ICE", body: "4.5 hours. Comfortable, scenic — great time for the group to rest after Munich. Arrive early afternoon." },
          { time: "Afternoon", icon: "ti-lock", tag: "culture", title: "Hohenzollern Bridge — Love Locks", body: "500,000+ padlocks covering every railing — couples from all over the world attach them and throw the key in the Rhine. The bridge spans the river with the Cathedral skyline behind you. Bring a lock, write names on it, attach it together as a group. Free, crowd-free, genuinely moving." },
          { time: "Evening", icon: "ti-beer", tag: "beer", title: "Kölsch Beer Ritual", body: "Kölsch is served only in tiny 200ml glasses called Stangen. The waiter (Köbes) keeps bringing fresh ones automatically until you place a coaster on top to say you're done. This is a real, serious Cologne tradition. Kids find it hilarious. Go to Brauerei zur Malzmühle or Früh Kölsch am Dom." },
        ]
      },
      {
        day: 5, label: "Phantasialand — Full Day",
        slots: [
          { time: "Full Day", icon: "ti-roller-skating", tag: "thrill", title: "Phantasialand — One of Europe's Best Theme Parks", body: "30 minutes from Cologne. The rides: Taron (Europe's longest launched coaster — 0 to 117 km/h in 2.5 seconds), Black Mamba (inverted loop coaster), Raik (family steel coaster for kids), Mystery Castle (drop tower). Beautifully designed themed worlds — ancient China, old Berlin, Wild West. Full day easily filled. Rated above most Disney parks by European thrill seekers." },
        ]
      },
      {
        day: 6, label: "Rhine Valley Day",
        slots: [
          { time: "Morning", icon: "ti-ship", tag: "nature", title: "Rhine Gorge Boat Cruise", body: "Drive or train to the Rhine Gorge (UNESCO World Heritage). Board a KD Rhine cruise between Rüdesheim and Boppard. 90 minutes drifting through one of Europe's most dramatic river valleys — vineyard-covered cliffs, castle silhouettes, small villages. No queues, no rushing. Just the group on a boat watching Germany's most beautiful landscape scroll by." },
          { time: "Afternoon", icon: "ti-windsock", tag: "culture", title: "Rüdesheim + Vineyard Cable Car", body: "Disembark at Rüdesheim am Rhein. Take the Seilbahn cable car over golden vineyards — Rhine valley panorama below. Walk Drosselgasse, a 144m alley packed with wine taverns, live accordion music, and locals. Try Riesling straight from the glass in the street. This is the Germany nobody imagines but everybody loves." },
        ]
      },
    ]
  },
  {
    id: "amsterdam", name: "Amsterdam", country: "Netherlands", days: "Days 7–9",
    tagline: "Canals · Windmills · Bikes",
    accent: "#0F6E56", light: "#E1F5EE", border: "#9FE1CB",
    intro: "The world's most liveable city — 800km of canals, 900,000 bicycles, windmills still grinding grain 20 minutes from the centre. Amsterdam is best felt from a boat seat, a saddle, or a canal-side café chair.",
    highlights: ["Zaanse Schans Windmill Village", "Group Cycling Tour", "Canal Boat + Dinner"],
    days_data: [
      {
        day: 7, label: "Arrive & First Impressions",
        slots: [
          { time: "Morning", icon: "ti-car", tag: "travel", title: "Cologne → Amsterdam", body: "2.5 hrs by car or direct intercity train. Arrive midday. Hotel in the Jordaan or De Pijp area places you in the most authentic parts of the city." },
          { time: "Afternoon", icon: "ti-sailboat", tag: "canal", title: "Private Canal Boat Tour", body: "Do this the moment you arrive. Seeing Amsterdam from water level — bridges arching overhead, 17th-century houses leaning at impossible angles, houseboats, cyclists crossing bridges above you — is unlike experiencing any other city. Book a private boat for the group of 12. 75 minutes, with drinks." },
          { time: "Evening", icon: "ti-bowl-chopsticks", tag: "food", title: "Indonesian Rijsttafel Dinner", body: "Amsterdam's unofficial cuisine from its colonial history. 'Rice table' means 15–25 small dishes served together: rendang, satay, gado-gado, tempeh, multiple sambals. Perfect format for a group — communal, generous, layered with flavour. Try Tempo Doeloe or Blauw." },
        ]
      },
      {
        day: 8, label: "Dutch Countryside",
        slots: [
          { time: "Morning", icon: "ti-windmill", tag: "village", title: "Zaanse Schans — Real Windmill Village", body: "20 minutes from Amsterdam. A functioning 17th-century Dutch windmill village. Green wooden houses, working windmills still grinding spices and oil, cheese farms where you watch production happen, a clog-making workshop. Not a reconstruction — these are operational historical sites. Children and adults find it equally absorbing." },
          { time: "Afternoon", icon: "ti-anchor", tag: "village", title: "Volendam Fishing Village", body: "15 minutes further. Traditional Dutch fishing harbour on Markermeer lake. Coloured wooden boats, waterfront cafés, smoked eel for the adventurous, traditional costumes available for group photos. Small, unhurried, charming." },
          { time: "Evening", icon: "ti-road", tag: "culture", title: "Jordaan Neighborhood Walk", body: "The most beautiful neighbourhood in Amsterdam. Narrow canals with humpback bridges, 17th-century warehouses turned to apartments, flower-box windows, brown cafés. Have a Jenever (Dutch gin) at a proeflokaal tasting room. This is how Amsterdam actually feels to live in." },
        ]
      },
      {
        day: 9, label: "Cycling + Science",
        slots: [
          { time: "Morning", icon: "ti-bike", tag: "culture", title: "Group Bicycle Ride", body: "Rent bikes for the whole group — Amsterdam's cycling infrastructure is arguably the world's best. Dedicated lanes everywhere, traffic-calmed, safe even for children. Cycle through Vondelpark, along the historic canal ring, past the flower market. This is HOW Amsterdam is lived — not as tourists, but as residents." },
          { time: "Afternoon", icon: "ti-microscope", tag: "nature", title: "NEMO Science Museum Rooftop", body: "The building alone — shaped like the prow of a ship by Renzo Piano — is worth the visit. The ROOFTOP is free and offers one of the best panoramic views of Amsterdam's canal rings and waterfront. Inside, hands-on science exhibits adults genuinely enjoy alongside kids. Give it 2 hours." },
          { time: "Evening", icon: "ti-sailboat", tag: "canal", title: "Sunset Canal Dinner Cruise", body: "Close Amsterdam the right way — on the water. Private dinner cruise for the group as the city lights up at dusk. Some operators accommodate Indian dietary preferences — worth requesting in advance." },
        ]
      },
    ]
  },
  {
    id: "bruges", name: "Bruges", country: "Belgium", days: "Days 10–12",
    tagline: "Medieval · Chocolate · Paris by Train",
    accent: "#534AB7", light: "#EEEDFE", border: "#CECBF6",
    intro: "Europe's best-preserved medieval city — entirely intact, entirely alive. The soul of Belgium in one city: 200 styles of beer, world-class chocolate, canals, horse-drawn carriages, and a 2-hour direct train to Paris for a full day sprint to the Eiffel Tower.",
    highlights: ["Paris Day Trip by Thalys", "Belgian Chocolate Workshop", "De Halve Maan Brewery"],
    days_data: [
      {
        day: 10, label: "Medieval First Day",
        slots: [
          { time: "Morning", icon: "ti-train", tag: "travel", title: "Amsterdam → Bruges", body: "3 hrs by train (via Brussels). The journey through the Netherlands and into Belgium is itself scenic. Arrive early afternoon. Stay inside the medieval canal ring — everything is walking distance." },
          { time: "Afternoon", icon: "ti-building-arch", tag: "culture", title: "Markt Square — Just Sit and Be Here", body: "The great medieval market square. Belfry tower above, horse-drawn carriages below, Belgian café terraces on all sides. Order a Duvel or a Bruges Zot. Eat a proper Liège waffle with cream and strawberries. Watch the square. Don't go inside anything — just let Bruges arrive." },
          { time: "Evening", icon: "ti-beer", tag: "beer", title: "Belgian Beer Ritual at 't Brugs Beertje", body: "One of the world's truly great beer bars. Belgium has 1,500+ beers — each legally required to be served in its own specific glass. Let the bar guide you through 5 styles as a group: Trappist, Lambic, Dubbel, Tripel, and local Brugse Zot. A tasting ritual unlike anything in India." },
        ]
      },
      {
        day: 11, label: "Paris Day Trip",
        slots: [
          { time: "Early Morning", icon: "ti-train", tag: "daytrip", title: "Bruges → Brussels → Paris (Thalys)", body: "Quick train to Brussels Midi (30 min), then Thalys to Paris Gare du Nord (1h20). Arrive Paris by 9–10am. A full day waits." },
          { time: "Morning", icon: "ti-stairs-up", tag: "culture", title: "Montmartre — The Real Paris", body: "Climb the hill to Sacré-Cœur. Don't queue to go inside — the view over Paris from the steps IS the attraction. Walk Place du Tertre where artists paint live. Narrow cobbled streets, accordion music echoing, the Paris of every film is real here and surprisingly unhurried in the morning." },
          { time: "Afternoon", icon: "ti-tower", tag: "culture", title: "Trocadéro → Eiffel Tower View → Seine Walk", body: "Walk down from Montmartre. Take the metro to Trocadéro — the best unobstructed view of the Eiffel Tower in the world, zero queues, zero cost. Stand in the gardens and take the photo Paris exists for. Walk the Champs-Élysées. Crepes from a street stand. Espresso standing at a zinc bar. Seine riverbank stroll." },
          { time: "Evening", icon: "ti-train", tag: "travel", title: "Back to Bruges by Evening Train", body: "Evening Thalys back. You have done Paris. In one day. No hotel night. No airport. No queue for the lift. Just the best of it — and everyone is back in Bruges for dinner." },
        ]
      },
      {
        day: 12, label: "Final Day — Pure Experience",
        slots: [
          { time: "Morning", icon: "ti-tools-kitchen", tag: "chocolate", title: "Belgian Chocolate Workshop", body: "Interactive session at a Bruges chocolate atelier. Learn to temper, pour your own moulds, create your own box. Kids and adults equally obsessed. Take home what you made. Book ahead for a group of 12 — Sukerbuyc or The Chocolate Line both offer group sessions." },
          { time: "Afternoon", icon: "ti-beer", tag: "culture", title: "De Halve Maan Brewery Tour", body: "The only family brewery still operating inside Bruges city centre since 1856. Famous for building a 2km underground pipeline beneath the city to pump beer from the brewery to the bottling plant without disturbing the medieval streets. Guided tour, rooftop view over the skyline, full tasting. A story and an experience." },
          { time: "Evening", icon: "ti-sailboat", tag: "canal", title: "Farewell Canal Cruise + Moules-Frites Dinner", body: "Bruges by water at dusk — swans, medieval stone bridges, weeping willows, silence. Then moules-frites for the table: Belgian mussels steamed in white wine with crispy fries. Belgian waffles after. A perfect goodbye." },
        ]
      },
    ]
  },
];

const STATS = [
  { icon: "ti-calendar", label: "Duration", value: "12 days" },
  { icon: "ti-map-pin", label: "Cities", value: "4 + Paris" },
  { icon: "ti-users", label: "Group", value: "12+ people" },
  { icon: "ti-flag", label: "Countries", value: "3 + France" },
];

export default function Itinerary() {
  const [active, setActive] = useState(0);
  const city = DATA[active];

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 680, margin: "0 auto", padding: "1.5rem 1rem" }}>
      <h2 className="sr-only">12-Day Europe Schengen Itinerary: Munich, Cologne, Amsterdam, Bruges, Paris Day Trip</h2>

      {/* Trip Header */}
      <div style={{ marginBottom: "1.25rem" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-text-tertiary)", margin: "0 0 6px" }}>Delhi → Frankfurt · Schengen · 12 days</p>
        <h1 style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 6px" }}>Europe Family Itinerary</h1>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>Relaxed · Culture-first · Unforgettable · Group of 12+</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: "1.25rem" }}>
        {STATS.map(s => (
          <div key={s.label} style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "10px 12px" }}>
            <p style={{ fontSize: 11, color: "var(--color-text-tertiary)", margin: "0 0 4px", display: "flex", alignItems: "center", gap: 5 }}>
              <i className={`ti ${s.icon}`} style={{ fontSize: 13 }} aria-hidden="true" />{s.label}
            </p>
            <p style={{ fontSize: 15, fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Route Visual */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: "1.25rem", overflowX: "auto", padding: "4px 0" }}>
        {DATA.map((c, i) => (
          <div key={c.id} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <button
              onClick={() => setActive(i)}
              style={{
                padding: "6px 13px",
                borderRadius: "var(--border-radius-md)",
                border: active === i ? `2px solid ${c.accent}` : "0.5px solid var(--color-border-tertiary)",
                background: active === i ? c.light : "var(--color-background-primary)",
                color: active === i ? c.accent : "var(--color-text-secondary)",
                fontSize: 13, fontWeight: active === i ? 500 : 400,
                cursor: "pointer", whiteSpace: "nowrap",
              }}
            >
              {c.name}
              <span style={{ fontSize: 11, opacity: 0.7, marginLeft: 5 }}>{c.days}</span>
            </button>
            {i < DATA.length - 1 && (
              <span style={{ padding: "0 4px", color: "var(--color-text-tertiary)", fontSize: 13 }}>
                <i className="ti ti-arrow-right" aria-hidden="true" />
              </span>
            )}
          </div>
        ))}
        <span style={{ padding: "0 4px", color: "var(--color-text-tertiary)", fontSize: 13 }}>
          <i className="ti ti-arrow-right" aria-hidden="true" />
        </span>
        <div style={{ padding: "6px 13px", borderRadius: "var(--border-radius-md)", border: "0.5px dashed var(--color-border-secondary)", color: "var(--color-text-tertiary)", fontSize: 13, whiteSpace: "nowrap", flexShrink: 0 }}>
          Paris · Day 11
        </div>
      </div>

      {/* City Hero */}
      <div style={{
        background: city.light, border: `0.5px solid ${city.border}`,
        borderRadius: "var(--border-radius-lg)", padding: "1.25rem", marginBottom: "1.25rem",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", color: city.accent, margin: "0 0 3px", fontWeight: 500 }}>{city.days} · {city.country}</p>
            <h2 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 3px", color: "var(--color-text-primary)" }}>{city.name}</h2>
            <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>{city.tagline}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}>
            {city.highlights.map(h => (
              <span key={h} style={{
                fontSize: 11, padding: "3px 10px", borderRadius: 20,
                background: "white", border: `0.5px solid ${city.border}`,
                color: city.accent, fontWeight: 500, whiteSpace: "nowrap",
              }}>{h}</span>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "1rem 0 0", lineHeight: 1.7 }}>{city.intro}</p>
      </div>

      {/* Days */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {city.days_data.map(day => (
          <div key={day.day} style={{ border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden", background: "var(--color-background-primary)" }}>
            <div style={{
              padding: "10px 16px", borderBottom: "0.5px solid var(--color-border-tertiary)",
              display: "flex", alignItems: "center", gap: 10, background: "var(--color-background-secondary)",
            }}>
              <span style={{
                fontSize: 11, padding: "2px 9px", borderRadius: 10,
                background: city.light, color: city.accent, fontWeight: 500, border: `0.5px solid ${city.border}`,
              }}>Day {day.day}</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{day.label}</span>
            </div>
            <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {day.slots.map((slot, si) => (
                <div key={si} style={{ display: "flex", gap: 14 }}>
                  <div style={{ flexShrink: 0, width: 85 }}>
                    <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", lineHeight: 1.5 }}>{slot.time}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5, flexWrap: "wrap" }}>
                      <i className={`ti ${slot.icon}`} style={{ fontSize: 15, color: TAG[slot.tag].color }} aria-hidden="true" />
                      <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>{slot.title}</span>
                      <span style={{
                        fontSize: 10, padding: "2px 7px", borderRadius: 8,
                        background: TAG[slot.tag].bg, color: TAG[slot.tag].color,
                        border: `0.5px solid ${TAG[slot.tag].border}`,
                        textTransform: "uppercase", letterSpacing: "0.06em",
                      }}>{slot.tag}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.7 }}>{slot.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* City Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
        <button
          onClick={() => setActive(Math.max(0, active - 1))}
          disabled={active === 0}
          style={{ opacity: active === 0 ? 0.3 : 1 }}
        >
          <i className="ti ti-arrow-left" aria-hidden="true" /> Prev city
        </button>
        <span style={{ fontSize: 12, color: "var(--color-text-tertiary)", alignSelf: "center" }}>{active + 1} of {DATA.length}</span>
        <button
          onClick={() => setActive(Math.min(DATA.length - 1, active + 1))}
          disabled={active === DATA.length - 1}
          style={{ opacity: active === DATA.length - 1 ? 0.3 : 1 }}
        >
          Next city <i className="ti ti-arrow-right" aria-hidden="true" />
        </button>
      </div>

      {/* Logistics Footer */}
      <div style={{ marginTop: "2rem", borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: "1.25rem" }}>
        <p style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-secondary)", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Logistics Quick Reference</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { icon: "ti-train", label: "Frankfurt → Munich", note: "ICE · 3 hrs · Day 1" },
            { icon: "ti-train", label: "Munich → Cologne", note: "ICE · 4.5 hrs · Day 4" },
            { icon: "ti-car", label: "Cologne → Amsterdam", note: "Drive or train · 2.5 hrs · Day 7" },
            { icon: "ti-train", label: "Amsterdam → Bruges", note: "Train via Brussels · 3 hrs · Day 10" },
            { icon: "ti-train", label: "Paris Day Trip", note: "Thalys from Brussels · 1h20 · Day 11" },
            { icon: "ti-plane", label: "Departure", note: "Brussels Airport or Frankfurt" },
          ].map(r => (
            <div key={r.label} style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 10px", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)" }}>
              <i className={`ti ${r.icon}`} style={{ fontSize: 14, color: "var(--color-text-tertiary)", marginTop: 1, flexShrink: 0 }} aria-hidden="true" />
              <div>
                <p style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>{r.label}</p>
                <p style={{ fontSize: 11, color: "var(--color-text-tertiary)", margin: 0 }}>{r.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
