export const company = {
  name: 'Axis CNC Technologies',
  short: 'AXIS CNC',
  tagline: 'Tool room and precision engineering, Pune',
  iso: 'ISO 9001:2015',
  phones: [
    { name: 'Kishor B. Khuspe', tel: '+919011045510', label: '+91 90110 45510' },
    { name: 'Mayur K. Khuspe', tel: '+919689144662', label: '+91 96891 44662' },
  ],
  emails: ['axiscnc@rediffmail.com', 'mayurkhuspe@axistechcnc.com', 'sales@axistechcnc.com'],
  units: [
    'Plot No 267, Sector No-7, PCNTDA, Bhosari, Pune-411026, Maharashtra, India',
    'Plot No 249, Sector No-10, Bhosari, Pune-411026, Maharashtra, India',
  ],
  gstin: '27AALFA0308A1Z6',
  pan: 'AALFA0308A',
  map: 'https://www.google.com/maps/search/?api=1&query=Axis+CNC+Technologies+PCNTDA+Bhosari+Pune',
}

export const directors = [
  { name: 'Kishor B. Khuspe', role: 'Director', img: 'kishor', tel: '+919011045510', label: '+91 90110 45510' },
  { name: 'Mayur K. Khuspe', role: 'Director', img: 'mayur', tel: '+919689144662', label: '+91 96891 44662' },
]

const imgs = (p, n) => Array.from({ length: n }, (_, i) => `${p}${i + 1}`)

export const services = [
  { slug: 'plastic-injection-molds', group: 'Tooling and molds', title: 'Plastic injection molds', short: 'Single and multi-cavity molds, or core, cavity and mold base machining only.',
    intro: 'We design and build plastic injection molds in house, from 3D design in CATIA and NX to CNC machining, EDM and fitting. You can also send us only the core, cavity or mold base for machining.',
    points: ['Single and multi-cavity molds', 'Core, cavity and mold base machining', 'Design in CATIA and NX', 'Mold production and batch supply', 'Reverse engineering of plastic parts'], images: ['pl1', 'rb3', 'rb5'] },
  { slug: 'rubber-molds', group: 'Tooling and molds', title: 'Rubber molds', short: 'Molds for molded rubber hoses, bushes and automotive rubber parts.',
    intro: 'Rubber molds and molded rubber products for automotive and industrial use, including air intake hoses and vibration dampers. We supply the mold, and batch production when needed.',
    points: ['Compression and transfer molds', 'Molded rubber hoses', 'Dampers and rubber bushes', 'Mold design and trial support', 'Batch production'], images: imgs('rb', 5) },
  { slug: 'pdc-gdc-casting-dies', group: 'Tooling and molds', title: 'PDC and GDC casting dies', short: 'Pressure and gravity die casting dies for aluminium components.',
    intro: 'Pressure die casting (PDC) and gravity die casting (GDC) dies for aluminium housings, covers, manifolds and impellers. We also supply the cast and machined components.',
    points: ['Pressure die casting dies', 'Gravity die casting dies', 'Aluminium casting component supply', 'Die machining on large VMC and gantry machines', 'Prototype and low volume castings'], images: [...imgs('die', 10), ...imgs('dc', 10)] },
  { slug: 'sand-casting-patterns', group: 'Tooling and molds', title: 'Sand casting tooling', short: 'Patterns and core boxes for cast iron and aluminium parts.',
    intro: 'Sand casting tooling and cast components for automotive, tractor and engineering customers, including brackets, flanges, manifolds and housings.',
    points: ['Patterns and core boxes', 'CI and aluminium casting', 'Manifold and housing castings', 'Machined casting supply', 'Prototype and low volume runs'], images: imgs('cc', 11) },
  { slug: 'investment-casting-dies', group: 'Tooling and molds', title: 'Investment casting dies', short: 'Wax injection dies with brass inserts for precision lost-wax parts.',
    intro: 'Multi-cavity investment casting dies for small, intricate steel and alloy parts, made with accurate cavities and brass inserts.',
    points: ['Multi-cavity wax injection dies', 'Brass and steel inserts', 'Tight cavity tolerances', 'Sample casting support'], images: ['inv1', 'inv2', 'inv3'] },
  { slug: 'press-tools', group: 'Machining and fixtures', title: 'Press tools and progressive dies', short: 'Stamping dies and batch production of sheet metal parts.',
    intro: 'We design and manufacture stamping dies, progressive dies and press tools, and run batch production on presses up to 500 tons.',
    points: ['Progressive and compound dies', 'Draw, trim and pierce dies', 'Presses up to 500 tons', 'Batch and production runs', 'Sheet metal reverse engineering'], images: imgs('pr', 8) },
  { slug: 'jigs-fixtures-gauges', group: 'Machining and fixtures', title: 'Jigs, fixtures and gauges', short: 'Machining and welding fixtures, inspection gauges, hydraulic and pneumatic fixtures.',
    intro: 'Jigs, fixtures and inspection gauges for machining, welding and assembly lines, including hydraulic and pneumatic clamping fixtures and special purpose machines.',
    points: ['Machining and welding fixtures', 'Inspection gauges', 'Hydraulic and pneumatic fixtures', 'Special purpose machines (SPM)', 'Automation systems'], images: ['mc7', 'mc9', 'mc10', 'mc2'] },
  { slug: 'cnc-machining', group: 'Machining and fixtures', title: 'CNC machining and 5-axis carving', short: 'VMC, HMC, turning, jig boring, EDM, wirecut and gantry machining.',
    intro: 'Precision machined components in aluminium, steel and cast iron, from prototype to batch. Our machine shop runs VMCs, an HMC, CNC turning, a double column gantry, a VTL, jig boring, EDM and wirecut.',
    points: ['Vertical and horizontal machining centers', 'Double column gantry up to 2100 x 1600 mm travel', 'CNC turning and conventional machining', 'EDM, wirecut and jig boring', 'WorkNC, CATIA and NX programming', 'Accuracy to 0.01 mm'], images: imgs('mc', 10) },
  { slug: 'laser-cutting-bending', group: 'Sheet and tube', title: 'Laser cutting and CNC pipe bending', short: '2D and 5-axis laser cutting, and 5-axis CNC tube bending up to 65 mm.',
    intro: 'In-house 2D and 5-axis laser cutting on a 3000 x 1500 mm table, and a 5-axis CNC pipe bending machine for round, square and rectangular sections.',
    points: ['5-axis head with C 360° and A ±90°', '2D laser, up to 20 mm thickness', '5-axis laser, up to 10 mm thickness', 'Tube OD 16 to 65 mm, wall up to 5 mm', 'Up to 15 bends programmed per part'], images: ['m-laser5', 'm-laser2d', 'm-bend'] },
  { slug: 'reverse-engineering-gears', group: 'Sheet and tube', title: 'Reverse engineering and gears', short: 'Scan-to-CAD, redesign and development of gear components.',
    intro: 'We reverse engineer plastic, sheet metal and engineering parts, rebuild the 3D model, and develop tooling or machined parts from it. We also develop all types of gear components.',
    points: ['Reverse engineering of plastic and sheet metal parts', 'Redesign and optimization', 'Gear component development', 'Prototype to production', 'Defence and aerospace R&D support'], images: ['mc3', 'pr6', 'mc7', 'mc5'] },
]

export const serviceGroups = ['Tooling and molds', 'Machining and fixtures', 'Sheet and tube']

export const machines = [
  { cat: 'Machining centers', name: 'Pinnacle QV 117 VMC', img: 'm-vmc', specs: [['Bed', '1300 x 700 mm'], ['Travel', '1100 x 710 x 610 mm'], ['Spindle', '10,000 rpm'], ['Control', 'Mitsubishi'], ['Table load', '1,000 kg']] },
  { cat: 'Machining centers', name: 'Pinnacle LV 105 VMC', img: 'm-vmc', specs: [['Bed', '1250 x 510 mm'], ['Travel', '1020 x 560 x 560 mm'], ['Spindle', '10,000 rpm'], ['Control', 'Mitsubishi M70'], ['Table load', '1,000 kg']] },
  { cat: 'Machining centers', name: 'AMS MCV-700NL VMC', img: 'm-vmc', specs: [['Bed', '1650 x 700 mm'], ['Travel', '1500 x 700 x 600 mm'], ['Spindle', '60 to 6,000 rpm'], ['Control', 'Mitsubishi M80'], ['Accuracy', '0.01 mm']] },
  { cat: 'Large format', name: 'Double column gantry VMC (model 2116)', img: 'm-gantry', specs: [['Bed', '2150 x 1600 x 900 mm'], ['Travel', '2100 x 1600 x 800 mm'], ['Spindle', '6,000 rpm'], ['Control', 'Siemens'], ['Table load', '4 to 6 tons']] },
  { cat: 'Large format', name: 'Vertical turret lathe (VTL)', img: 'm-vtl', specs: [['Use', 'Large dies, rings, housings'], ['Type', 'Conventional VTL']] },
  { cat: 'Turning', name: 'Haas SL-10 CNC turning center (2 nos)', img: 'm-haas', specs: [['Spindle bore', '50 mm'], ['Speed', '3,200 rpm'], ['Rapid feed', '15 m/min'], ['Tailstock', 'Yes'], ['Control', 'Haas']] },
  { cat: 'Sheet and tube', name: '5-axis laser cutting machine', img: 'm-laser5', specs: [['Head', '5-axis, C 360°, A ±90°'], ['Control', 'Siemens 840D'], ['Thickness', 'Up to 10 mm'], ['Table', '3000 x 1500 mm']] },
  { cat: 'Sheet and tube', name: '2D laser cutting machine (Trumpf)', img: 'm-laser2d', specs: [['Make', 'Trumpf'], ['Control', 'Bosch'], ['Thickness', 'Up to 20 mm'], ['Table', '3000 x 1500 mm']] },
  { cat: 'Sheet and tube', name: '5-axis CNC pipe bending, CNC 65 PTX-R3X', img: 'm-bend', specs: [['Tube OD', '16 to 65 mm'], ['Wall', 'Up to 5 mm'], ['Bend radius (CLR)', '30 to 250 mm'], ['Mandrel length', '3,000 mm'], ['Programs', '15 bends (32 optional)']] },
  { cat: 'Conventional', name: 'Dufour 250 milling machine', img: 'm-dufour', specs: [['Table', '1300 x 400 mm'], ['Spindle', '24 to 1,500 rpm'], ['Motor', '12 CV'], ['Weight', '3,000 kg']] },
  { cat: 'Conventional', name: 'Vernier and M1TR8 turret milling', img: 'm-mill', specs: [['Vernier bed', '1000 x 500 mm'], ['Turret table', '1370 x 254 mm'], ['Turret spindle', 'ISO30, 16 speed']] },
  { cat: 'Conventional', name: 'Lathe and radial drilling machine', img: 'm-lathe', specs: [['Lathe bed', '7 ft'], ['Spindle bore', '3 1/8 in'], ['Motor', '5 HP'], ['Radial drill', 'Z3040x13, 40 mm']] },
]
export const machineCats = ['All', 'Machining centers', 'Large format', 'Turning', 'Sheet and tube', 'Conventional']

export const facilities = [
  ['5', 'Vertical machining centers'], ['1', 'HMC machine'], ['2', 'CNC turning centers'], ['500 t', 'Press capacity'],
]

export const clients = ['Indian Railways (Mumbai)', 'Bharat Forge (Defence, Aerospace, KCMI, KSSL, Sarlova)', 'Tata Motors (Pimpri, Jamshedpur, Uttarakhand)', 'Bajaj Electricals', 'Godrej & Boyce', 'Mahindra & Mahindra (Heavy Vehicles, Tractor, EV, Truck)', 'Sinter Comp India', 'Mahindra Forgings', 'Uni Klinger', 'Aeroflex Industries', 'Spark Plasto Mech', 'TTB Tooling', 'Vega Auto Accessories']

export const process = ['Analysis and design', 'Material planning', 'CNC machining and tooling', 'Conventional machining', 'Assembly and fitment', 'Quality inspection', 'Finishing and surface treatment', 'Testing and validation', 'Packing and dispatch']

export const gallery = [
  ...['dc1', 'dc2', 'dc3', 'dc4', 'dc5', 'dc6', 'dc9'].map(i => ({ img: i, tag: 'Die casting' })),
  ...['die1', 'die3', 'die5', 'die6', 'die8', 'inv1'].map(i => ({ img: i, tag: 'Dies and molds' })),
  ...['mc1', 'mc2', 'mc3', 'mc5', 'mc7', 'mc8'].map(i => ({ img: i, tag: 'Machined parts' })),
  ...['pr1', 'pr2', 'pr3', 'pr4', 'pr5'].map(i => ({ img: i, tag: 'Press parts' })),
  ...['rb1', 'rb2', 'rb4', 'pl1'].map(i => ({ img: i, tag: 'Rubber and plastic' })),
  ...['cc1', 'cc3', 'cc5', 'cc8', 'cc10'].map(i => ({ img: i, tag: 'Cast parts' })),
]
export const galleryTags = ['All', 'Die casting', 'Dies and molds', 'Machined parts', 'Press parts', 'Rubber and plastic', 'Cast parts']
