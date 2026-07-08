const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const languageButtons = document.querySelectorAll("[data-lang-option]");

const translations = {
  gu: {
    "Patidar Enterprise": "પાટીદાર એન્ટરપ્રાઇઝ",
    "Solar Energy Solutions": "સૌર ઊર્જા સોલ્યુશન્સ",
    "About": "અમારા વિશે",
    "Services": "સેવાઓ",
    "Process": "પ્રક્રિયા",
    "Brands": "બ્રાન્ડ્સ",
    "Gallery": "ગેલેરી",
    "Contact": "સંપર્ક",
    "Call Now": "હમણાં જ કોલ કરો",
    "Open menu": "મેનુ ખોલો",
    "Close menu": "મેનુ બંધ કરો",
    "Language switcher": "ભાષા પસંદગી",
    "Established 2025 • Serving Aravalli and all Gujarat": "સ્થાપના 2025 • અરવલ્લી અને સમગ્ર ગુજરાતમાં સેવા",
    "Power Your Home with Clean & Affordable Solar Energy": "તમારા ઘર માટે સ્વચ્છ અને સસ્તી સૌર ઊર્જા",
    "Patidar Enterprise provides complete solar energy solutions across Gujarat, from consultation and installation to maintenance and government subsidy assistance.": "પાટીદાર એન્ટરપ્રાઇઝ ગુજરાતભરમાં ઘરેલુ અને વ્યાવસાયિક સોલાર સિસ્ટમ માટે સંપૂર્ણ સેવા પ્રદાન કરે છે—કન્સલ્ટેશન, ડિઝાઇન, ઇન્સ્ટોલેશન, સરકારી સબસિડી માર્ગદર્શન, નેટ મીટરિંગ અને મેન્ટેનન્સ સહિત.",
    "Get Free Quote": "મફત ક્વોટ મેળવો",
    "Quality Panels": "ગુણવત્તાયુક્ત પેનલ્સ",
    "Net Metering": "નેટ મીટરિંગ",
    "Subsidy Guidance": "સબસિડી માર્ગદર્શન",
    "Lower Bills": "ઓછા બિલ",
    "Clean power designed for long-term savings": "લાંબા ગાળાની બચત માટે રચાયેલ સ્વચ્છ ઊર્જા",
    "About Us": "અમારા વિશે",
    "About Patidar Enterprise": "પાટીદાર એન્ટરપ્રાઇઝ વિશે",
    "Patidar Enterprise was established in 2025 with the vision of making clean and renewable energy accessible to every home and business in Gujarat. We specialize in complete solar energy solutions, offering everything from consultation and system design to installation, maintenance, and after-sales support.": "પાટીદાર એન્ટરપ્રાઇઝની સ્થાપના 2025માં ગુજરાતના દરેક ઘર અને વ્યવસાય સુધી સ્વચ્છ અને નવીનીકરણીય ઊર્જા પહોંચાડવાના વિઝન સાથે થઈ હતી. અમે સંપૂર્ણ સૌર ઊર્જા સોલ્યુશન્સમાં નિષ્ણાત છીએ, જેમાં કન્સલ્ટેશન, સિસ્ટમ ડિઝાઇન, ઇન્સ્ટોલેશન, મેન્ટેનન્સ અને વેચાણ પછીની સેવા સામેલ છે.",
    "Our experienced team focuses on quality workmanship, reliable products, customer satisfaction, and long-term energy savings. We proudly serve customers throughout Aravalli District and across Gujarat.": "અમારી અનુભવી ટીમ ગુણવત્તાયુક્ત કામ, વિશ્વસનીય પ્રોડક્ટ્સ, ગ્રાહક સંતોષ અને લાંબા ગાળાની ઊર્જા બચત પર ધ્યાન આપે છે. અમે ગર્વથી અરવલ્લી જિલ્લા અને સમગ્ર ગુજરાતમાં ગ્રાહકોને સેવા આપીએ છીએ.",
    "Established": "સ્થાપના",
    "Gujarat": "ગુજરાત",
    "Service Area": "સેવા વિસ્તાર",
    "End-to-End": "શરૂઆતથી અંત સુધી",
    "Solar Support": "સોલાર સપોર્ટ",
    "Our Services": "અમારી સેવાઓ",
    "Complete Solar Solutions for Homes and Businesses": "ઘર અને વ્યવસાય માટે સંપૂર્ણ સોલાર સોલ્યુશન્સ",
    "Plan, install, maintain, and optimize your solar system with one dependable local partner.": "એક વિશ્વસનીય સ્થાનિક ભાગીદાર સાથે તમારી સોલાર સિસ્ટમનું આયોજન, ઇન્સ્ટોલેશન, જાળવણી અને ઑપ્ટિમાઇઝેશન કરો.",
    "Residential Solar Installation": "ઘરેલુ સોલાર ઇન્સ્ટોલેશન",
    "Rooftop solar systems designed for daily home energy savings.": "દૈનિક ઘરેલુ ઊર્જા બચત માટે બનાવેલી રૂફટોપ સોલાર સિસ્ટમ.",
    "Commercial Solar Installation": "વ્યાવસાયિક સોલાર ઇન્સ્ટોલેશન",
    "Reliable solar capacity for shops, offices, factories, and institutions.": "દુકાનો, ઓફિસો, ફેક્ટરીઓ અને સંસ્થાઓ માટે વિશ્વસનીય સોલાર ક્ષમતા.",
    "Complete Solar System Setup": "સંપૂર્ણ સોલાર સિસ્ટમ સેટઅપ",
    "Design, procurement, installation, testing, and handover in one flow.": "ડિઝાઇન, ખરીદી, ઇન્સ્ટોલેશન, ટેસ્ટિંગ અને હેન્ડઓવર એક જ પ્રક્રિયામાં.",
    "Solar Water Heater Installation": "સોલાર વોટર હીટર ઇન્સ્ટોલેશન",
    "Efficient water heating solutions for homes and commercial properties.": "ઘર અને વ્યાવસાયિક મિલકતો માટે કાર્યક્ષમ પાણી ગરમ કરવાની સોલ્યુશન્સ.",
    "Solar Maintenance": "સોલાર મેન્ટેનન્સ",
    "Scheduled care that keeps your system performing smoothly.": "તમારી સિસ્ટમને સારી રીતે કાર્યરત રાખતી નિયમિત જાળવણી.",
    "Solar Cleaning": "સોલાર ક્લીનિંગ",
    "Panel cleaning services that help protect generation efficiency.": "વીજ ઉત્પાદન કાર્યક્ષમતા જાળવવામાં મદદરૂપ પેનલ ક્લીનિંગ સેવા.",
    "Solar Repair": "સોલાર રિપેર",
    "Diagnosis and repair for wiring, inverter, panel, and output issues.": "વાયરિંગ, ઇન્વર્ટર, પેનલ અને આઉટપુટ સમસ્યાઓનું નિદાન અને સમારકામ.",
    "Solar Consultation": "સોલાર કન્સલ્ટેશન",
    "Clear guidance on capacity, cost, payback, and installation choices.": "ક્ષમતા, ખર્ચ, પેબેક અને ઇન્સ્ટોલેશન વિકલ્પો વિશે સ્પષ્ટ માર્ગદર્શન.",
    "Government Subsidy Assistance": "સરકારી સબસિડી સહાય",
    "Support with subsidy eligibility, documents, and application steps.": "સબસિડી પાત્રતા, દસ્તાવેજો અને અરજી પગલાંમાં સહાય.",
    "Net Metering Support": "નેટ મીટરિંગ સપોર્ટ",
    "Practical help for grid connection and net metering coordination.": "ગ્રીડ કનેક્શન અને નેટ મીટરિંગ પ્રક્રિયામાં પ્રાયોગિક મદદ.",
    "Annual Maintenance Contracts": "વાર્ષિક મેન્ટેનન્સ કરાર",
    "AMC plans for dependable long-term care and peace of mind.": "વિશ્વસનીય લાંબા ગાળાની સંભાળ અને નિશ્ચિતતા માટે AMC યોજના.",
    "System Inspection & Performance Check": "સિસ્ટમ નિરીક્ષણ અને કામગીરી ચેક",
    "Performance reviews to identify output losses and improvement areas.": "આઉટપુટ ઘટાડા અને સુધારા ક્ષેત્રો ઓળખવા માટે કામગીરી સમીક્ષા.",
    "Learn More": "વધુ જાણો",
    "Why Choose Us": "અમને કેમ પસંદ કરશો",
    "Trusted Solar Guidance from First Call to After-Sales Support": "પ્રથમ કોલથી વેચાણ પછીના સપોર્ટ સુધી વિશ્વસનીય સોલાર માર્ગદર્શન",
    "Expert Installation Team": "નિષ્ણાત ઇન્સ્ટોલેશન ટીમ",
    "Complete End-to-End Solar Solutions": "શરૂઆતથી અંત સુધી સંપૂર્ણ સોલાર સોલ્યુશન્સ",
    "Affordable Pricing": "વાજબી ભાવ",
    "High Quality Materials": "ઉચ્ચ ગુણવત્તાની સામગ્રી",
    "Government Subsidy Guidance": "સરકારી સબસિડી માર્ગદર્શન",
    "Net Metering Assistance": "નેટ મીટરિંગ સહાય",
    "Professional Maintenance Services": "વ્યાવસાયિક મેન્ટેનન્સ સેવાઓ",
    "Fast Installation": "ઝડપી ઇન્સ્ટોલેશન",
    "Reliable Customer Support": "વિશ્વસનીય ગ્રાહક સપોર્ટ",
    "Energy Saving Solutions": "ઊર્જા બચત સોલ્યુશન્સ",
    "Our Process": "અમારી પ્રક્રિયા",
    "Simple, Clear, and Managed End to End": "સરળ, સ્પષ્ટ અને સંપૂર્ણ રીતે સંચાલિત",
    "Free Consultation": "મફત કન્સલ્ટેશન",
    "Site Survey": "સાઇટ સર્વે",
    "Custom Solar Design": "કસ્ટમ સોલાર ડિઝાઇન",
    "Quotation & Approval": "ક્વોટેશન અને મંજૂરી",
    "Installation": "ઇન્સ્ટોલેશન",
    "Testing & Commissioning": "ટેસ્ટિંગ અને કમિશનિંગ",
    "Maintenance & After-Sales Support": "મેન્ટેનન્સ અને વેચાણ પછીનો સપોર્ટ",
    "Benefits": "લાભો",
    "Why Solar Energy Makes Sense": "સોલાર ઊર્જા કેમ યોગ્ય પસંદગી છે",
    "Save Electricity Bills": "વીજળીના બિલમાં બચત",
    "Generate your own power and reduce monthly energy expenses.": "તમારી પોતાની વીજળી બનાવો અને માસિક ઊર્જા ખર્ચ ઘટાડો.",
    "Eco-Friendly Energy": "પર્યાવરણમૈત્રી ઊર્જા",
    "Use clean renewable power and reduce your carbon footprint.": "સ્વચ્છ નવીનીકરણીય ઊર્જાનો ઉપયોગ કરો અને કાર્બન ફૂટપ્રિન્ટ ઘટાડો.",
    "Government Subsidies": "સરકારી સબસિડી",
    "Eligible residential customers can benefit from available schemes.": "પાત્ર ઘરેલુ ગ્રાહકો ઉપલબ્ધ યોજનાઓનો લાભ લઈ શકે છે.",
    "Low Maintenance": "ઓછી જાળવણી",
    "Modern solar systems need simple periodic care.": "આધુનિક સોલાર સિસ્ટમને સરળ સમયાંતરે સંભાળની જરૂર પડે છે.",
    "Increase Property Value": "મિલકતનું મૂલ્ય વધારો",
    "A well-installed solar system adds practical long-term value.": "સારી રીતે ઇન્સ્ટોલ કરેલી સોલાર સિસ્ટમ લાંબા ગાળાનું મૂલ્ય ઉમેરે છે.",
    "Long-Term Investment": "લાંબા ગાળાનું રોકાણ",
    "Solar panels are built for decades of productive use.": "સોલાર પેનલ્સ દાયકાઓ સુધી ઉપયોગી રહેવા માટે બનાવાય છે.",
    "Reliable Power Supply": "વિશ્વસનીય વીજ પુરવઠો",
    "Improve energy confidence with smart system planning.": "સ્માર્ટ સિસ્ટમ પ્લાનિંગથી ઊર્જા વિશ્વસનીયતા વધારો.",
    "3.5 Brands We Install": "3.5 અમે ઇન્સ્ટોલ કરતી બ્રાન્ડ્સ",
    "Trusted Solar Brands": "વિશ્વસનીય સોલાર બ્રાન્ડ્સ",
    "We partner with India's leading solar manufacturers to deliver reliable, high-performance, and long-lasting solar energy solutions for residential and commercial customers.": "અમે ભારતના અગ્રણી સોલાર ઉત્પાદકો સાથે કામ કરીને ઘરેલુ અને વ્યાવસાયિક ગ્રાહકો માટે વિશ્વસનીય, ઉચ્ચ કામગીરીવાળી અને લાંબા સમય ચાલતી સૌર ઊર્જા સોલ્યુશન્સ આપીએ છીએ.",
    "High Efficiency": "ઉચ્ચ કાર્યક્ષમતા",
    "Tata Power Solar": "ટાટા પાવર સોલાર",
    "Trusted solar modules and complete energy solutions backed by one of India's established power brands.": "ભારતની સ્થાપિત પાવર બ્રાન્ડ્સમાંથી એકના સમર્થનવાળા વિશ્વસનીય સોલાર મોડ્યુલ્સ અને સંપૂર્ણ ઊર્જા સોલ્યુશન્સ.",
    "Waaree": "વારી",
    "Popular Indian solar panels known for dependable performance, wide availability, and strong warranty support.": "વિશ્વસનીય કામગીરી, સરળ ઉપલબ્ધતા અને મજબૂત વોરંટી સપોર્ટ માટે જાણીતી લોકપ્રિય ભારતીય સોલાર પેનલ્સ.",
    "Adani Solar": "અદાણી સોલાર",
    "High-quality solar modules from a leading renewable energy manufacturer for residential and commercial use.": "ઘરેલુ અને વ્યાવસાયિક ઉપયોગ માટે અગ્રણી નવીનીકરણીય ઊર્જા ઉત્પાદકના ઉચ્ચ ગુણવત્તાવાળા સોલાર મોડ્યુલ્સ.",
    "Vikram Solar": "વિક્રમ સોલાર",
    "Performance-focused solar technology suitable for efficient rooftop and larger capacity solar installations.": "કાર્યક્ષમ રૂફટોપ અને મોટી ક્ષમતાના સોલાર ઇન્સ્ટોલેશન માટે યોગ્ય કામગીરીકેન્દ્રિત સોલાર ટેકનોલોજી.",
    "Loom Solar": "લૂમ સોલાર",
    "Modern solar products for homes, shops, and small businesses with practical energy-saving configurations.": "ઘરો, દુકાનો અને નાના વ્યવસાયો માટે પ્રાયોગિક ઊર્જા બચત ગોઠવણોવાળા આધુનિક સોલાર પ્રોડક્ટ્સ.",
    "Havells": "હેવેલ્સ",
    "Reliable electrical and solar components that support safe, durable, and professionally installed systems.": "સુરક્ષિત, ટકાઉ અને વ્યાવસાયિક રીતે ઇન્સ્ટોલ કરેલી સિસ્ટમને સપોર્ટ કરતા વિશ્વસનીય ઇલેક્ટ્રિકલ અને સોલાર ઘટકો.",
    "At Patidar Enterprise, we use only trusted and certified solar brands to ensure maximum efficiency, durability, and long-term savings for our customers.": "પાટીદાર એન્ટરપ્રાઇઝમાં અમે ગ્રાહકો માટે મહત્તમ કાર્યક્ષમતા, ટકાઉપણું અને લાંબા ગાળાની બચત સુનિશ્ચિત કરવા માટે માત્ર વિશ્વસનીય અને પ્રમાણિત સોલાર બ્રાન્ડ્સનો ઉપયોગ કરીએ છીએ.",
    "Project Gallery": "પ્રોજેક્ટ ગેલેરી",
    "Solar Work Across Residential and Commercial Spaces": "ઘરેલુ અને વ્યાવસાયિક જગ્યાઓમાં સોલાર કામ",
    "Residential Installations": "ઘરેલુ ઇન્સ્ટોલેશન",
    "Commercial Installations": "વ્યાવસાયિક ઇન્સ્ટોલેશન",
    "Solar Water Heaters": "સોલાર વોટર હીટર",
    "Maintenance Projects": "મેન્ટેનન્સ પ્રોજેક્ટ્સ",
    "Large Rooftop Installations": "મોટા રૂફટોપ ઇન્સ્ટોલેશન",
    "Testimonials": "ગ્રાહક પ્રતિભાવ",
    "Customers Appreciate a Smooth Solar Journey": "ગ્રાહકો સરળ સોલાર અનુભવની પ્રશંસા કરે છે",
    "Patidar Enterprise completed our rooftop solar installation professionally. The entire process was smooth, and they also helped us with the government subsidy.": "પાટીદાર એન્ટરપ્રાઇઝે અમારું રૂફટોપ સોલાર ઇન્સ્ટોલેશન વ્યાવસાયિક રીતે પૂર્ણ કર્યું. સમગ્ર પ્રક્રિયા સરળ હતી અને તેમણે સરકારી સબસિડીમાં પણ મદદ કરી.",
    "Residential Customer": "ઘરેલુ ગ્રાહક",
    "The team explained the system clearly and completed the installation on time. Our electricity bill has already started reducing.": "ટીમે સિસ્ટમ સ્પષ્ટ રીતે સમજાવી અને સમયસર ઇન્સ્ટોલેશન પૂર્ણ કર્યું. અમારું વીજળી બિલ પહેલેથી જ ઓછું થવા લાગ્યું છે.",
    "Homeowner, Aravalli": "ઘરમાલિક, અરવલ્લી",
    "Good workmanship, neat wiring, and responsive support. They handled the survey, quotation, and setup very well.": "સારું કામ, સ્વચ્છ વાયરિંગ અને ઝડપી સપોર્ટ. તેમણે સર્વે, ક્વોટેશન અને સેટઅપ ખૂબ સારી રીતે સંભાળ્યું.",
    "Commercial Customer": "વ્યાવસાયિક ગ્રાહક",
    "We contacted them for maintenance and cleaning. The system output improved after the service visit.": "અમે મેન્ટેનન્સ અને ક્લીનિંગ માટે સંપર્ક કર્યો. સર્વિસ પછી સિસ્ટમ આઉટપુટમાં સુધારો થયો.",
    "Solar AMC Customer": "સોલાર AMC ગ્રાહક",
    "They guided us through net metering documentation and kept the process simple for our family.": "તેમણે નેટ મીટરિંગ દસ્તાવેજીકરણમાં માર્ગદર્શન આપ્યું અને અમારી પરિવાર માટે પ્રક્રિયા સરળ રાખી.",
    "Affordable quote, professional installation, and helpful after-sales support. Recommended for solar work in Gujarat.": "વાજબી ક્વોટ, વ્યાવસાયિક ઇન્સ્ટોલેશન અને ઉપયોગી વેચાણ પછીનો સપોર્ટ. ગુજરાતમાં સોલાર કામ માટે ભલામણ કરું છું.",
    "Business Owner": "વ્યવસાય માલિક",
    "FAQ": "વારંવાર પૂછાતા પ્રશ્નો",
    "Questions Before You Go Solar?": "સોલાર અપનાવતા પહેલાં પ્રશ્નો છે?",
    "Here are quick answers to common questions about solar installation, subsidy, and maintenance.": "સોલાર ઇન્સ્ટોલેશન, સબસિડી અને મેન્ટેનન્સ વિશે સામાન્ય પ્રશ્નોના ઝડપી જવાબો અહીં છે.",
    "How much does a solar system cost?": "સોલાર સિસ્ટમનો ખર્ચ કેટલો થાય છે?",
    "Cost depends on system size, roof condition, panel quality, inverter type, and subsidy eligibility. Contact us for a site-based quote.": "ખર્ચ સિસ્ટમ સાઇઝ, છતની સ્થિતિ, પેનલ ગુણવત્તા, ઇન્વર્ટર પ્રકાર અને સબસિડી પાત્રતા પર આધારિત છે. સાઇટ આધારિત ક્વોટ માટે અમારો સંપર્ક કરો.",
    "How much electricity can I save?": "હું કેટલી વીજળી બચાવી શકું?",
    "Savings depend on your usage, sanctioned load, system capacity, sunlight, and billing pattern.": "બચત તમારા ઉપયોગ, મંજૂર લોડ, સિસ્ટમ ક્ષમતા, સૂર્યપ્રકાશ અને બિલિંગ પદ્ધતિ પર આધારિત છે.",
    "How long does installation take?": "ઇન્સ્ટોલેશનમાં કેટલો સમય લાગે છે?",
    "Most residential installations can be completed quickly after survey, approval, materials, and documentation are ready.": "સર્વે, મંજૂરી, સામગ્રી અને દસ્તાવેજો તૈયાર થયા પછી મોટા ભાગના ઘરેલુ ઇન્સ્ટોલેશન ઝડપથી પૂર્ણ થઈ શકે છે.",
    "Is government subsidy available?": "સરકારી સબસિડી ઉપલબ્ધ છે?",
    "Government subsidy may be available for eligible residential customers under applicable schemes. We help with guidance and documentation.": "લાગુ યોજનાઓ હેઠળ પાત્ર ઘરેલુ ગ્રાહકો માટે સરકારી સબસિડી ઉપલબ્ધ હોઈ શકે છે. અમે માર્ગદર્શન અને દસ્તાવેજીકરણમાં મદદ કરીએ છીએ.",
    "What is Net Metering?": "નેટ મીટરિંગ શું છે?",
    "Net metering lets eligible solar customers export extra electricity to the grid and receive billing adjustment as per utility rules.": "નેટ મીટરિંગ પાત્ર સોલાર ગ્રાહકોને વધારાની વીજળી ગ્રીડમાં મોકલવા અને યુટિલિટી નિયમો મુજબ બિલ એડજસ્ટમેન્ટ મેળવવાની સુવિધા આપે છે.",
    "How long do solar panels last?": "સોલાર પેનલ્સ કેટલા વર્ષ ચાલે છે?",
    "Quality solar panels are commonly designed for long-term use, often with performance warranties from manufacturers.": "ગુણવત્તાયુક્ત સોલાર પેનલ્સ સામાન્ય રીતે લાંબા ગાળાના ઉપયોગ માટે બનાવાય છે અને ઉત્પાદકો તરફથી કામગીરી વોરંટી સાથે આવે છે.",
    "Do you provide maintenance?": "શું તમે મેન્ટેનન્સ આપો છો?",
    "Yes. We provide cleaning, inspection, repair, performance checks, and annual maintenance contracts.": "હા. અમે ક્લીનિંગ, નિરીક્ષણ, રિપેર, કામગીરી ચેક અને વાર્ષિક મેન્ટેનન્સ કરાર પ્રદાન કરીએ છીએ.",
    "Which areas do you serve?": "તમે કયા વિસ્તારોમાં સેવા આપો છો?",
    "We serve Aravalli District and customers all across Gujarat, India.": "અમે અરવલ્લી જિલ્લા અને સમગ્ર ગુજરાત, ભારતમાં ગ્રાહકોને સેવા આપીએ છીએ.",
    "Request a Free Solar Quote": "મફત સોલાર ક્વોટ માટે વિનંતી કરો",
    "Speak with Patidar Enterprise for solar installation, maintenance, water heaters, subsidy assistance, and net metering support.": "સોલાર ઇન્સ્ટોલેશન, મેન્ટેનન્સ, વોટર હીટર, સબસિડી સહાય અને નેટ મીટરિંગ સપોર્ટ માટે પાટીદાર એન્ટરપ્રાઇઝ સાથે વાત કરો.",
    "Company": "કંપની",
    "Owner": "માલિક",
    "Phone": "ફોન",
    "Hitesh Patel": "હિતેશ પટેલ",
    "Aravalli District and all over Gujarat": "અરવલ્લી જિલ્લા અને સમગ્ર ગુજરાત",
    "Business Hours": "વ્યવસાય સમય",
    "Monday-Saturday, 9:00 AM-6:00 PM": "સોમવાર-શનિવાર, સવારે 9:00 થી સાંજે 6:00",
    "WhatsApp": "વોટ્સએપ પર સંપર્ક કરો",
    "Name": "નામ",
    "Service Needed": "જરૂરી સેવા",
    "Select a service": "સેવા પસંદ કરો",
    "Maintenance or Repair": "મેન્ટેનન્સ અથવા રિપેર",
    "Subsidy or Net Metering Help": "સબસિડી અથવા નેટ મીટરિંગ મદદ",
    "Message": "સંદેશ",
    "Tell us about your roof, electricity bill, or requirement": "તમારી છત, વીજળી બિલ અથવા જરૂરિયાત વિશે જણાવો",
    "Send Enquiry": "ઇન્ક્વાયરી મોકલો",
    "Google Maps": "ગૂગલ મેપ્સ",
    "Aravalli District, Gujarat": "અરવલ્લી જિલ્લા, ગુજરાત",
    "Quick Links": "ઝડપી લિંક્સ",
    "Contact Details": "સંપર્ક વિગતો",
    "Modern solar energy solutions for residential and commercial customers across Gujarat.": "ગુજરાતભરના ઘરેલુ અને વ્યાવસાયિક ગ્રાહકો માટે આધુનિક સૌર ઊર્જા સોલ્યુશન્સ.",
    "Solar Installation": "સોલાર ઇન્સ્ટોલેશન",
    "Subsidy Assistance": "સબસિડી સહાય",
    "Solar Water Heater": "સોલાર વોટર હીટર",
    "Social media placeholders": "સોશિયલ મીડિયા પ્લેસહોલ્ડર્સ",
    "© 2026 Patidar Enterprise. All rights reserved.": "© 2026 પાટીદાર એન્ટરપ્રાઇઝ. સર્વ અધિકારો અનામત.",
    "Call": "કોલ",
    "WA": "WA",
    "Rooftop solar panels installed under bright sunlight": "તેજસ્વી સૂર્યપ્રકાશ હેઠળ ઇન્સ્ટોલ કરેલી રૂફટોપ સોલાર પેનલ્સ",
    "Technician inspecting a solar panel installation": "સોલાર પેનલ ઇન્સ્ટોલેશનનું નિરીક્ષણ કરતો ટેક્નિશિયન",
    "Residential solar panels on a roof": "છત પર ઘરેલુ સોલાર પેનલ્સ",
    "Commercial solar farm panels": "વ્યાવસાયિક સોલાર પેનલ્સ",
    "Solar water heating equipment on roof": "છત પર સોલાર વોટર હીટિંગ સાધન",
    "Technician maintaining solar equipment": "સોલાર સાધનોનું મેન્ટેનન્સ કરતો ટેક્નિશિયન",
    "Large rooftop solar installation": "મોટું રૂફટોપ સોલાર ઇન્સ્ટોલેશન",
    "Patidar Enterprise home": "પાટીદાર એન્ટરપ્રાઇઝ હોમ",
    "Patidar Enterprise logo": "પાટીદાર એન્ટરપ્રાઇઝ લોગો",
    "Primary navigation": "મુખ્ય નેવિગેશન",
    "Company highlights": "કંપની હાઇલાઇટ્સ",
    "Business stats": "વ્યવસાય આંકડા",
    "Google Maps placeholder for Patidar Enterprise service area in Gujarat": "ગુજરાતમાં પાટીદાર એન્ટરપ્રાઇઝના સેવા વિસ્તાર માટે ગૂગલ મેપ્સ પ્લેસહોલ્ડર",
    "Call Patidar Enterprise": "પાટીદાર એન્ટરપ્રાઇઝને કોલ કરો",
    "WhatsApp Patidar Enterprise": "પાટીદાર એન્ટરપ્રાઇઝને વોટ્સએપ કરો",
    "Please contact me with more details.": "કૃપા કરીને વધુ વિગતો સાથે મારો સંપર્ક કરો.",
    "Hello Patidar Enterprise, I want a free solar quote.": "નમસ્તે પાટીદાર એન્ટરપ્રાઇઝ, મને મફત સોલાર ક્વોટ જોઈએ છે.",
    "Opening WhatsApp with your enquiry...": "તમારી ઇન્ક્વાયરી સાથે વોટ્સએપ ખૂલી રહ્યું છે..."
  }
};

const seoContent = {
  en: {
    title: "Patidar Enterprise | Solar Panel Installation Gujarat",
    description:
      "Patidar Enterprise provides residential and commercial solar panel installation, maintenance, net metering, and government subsidy assistance across Aravalli District and Gujarat.",
    keywords:
      "Solar Panel Installation Gujarat, Residential Solar Installation, Commercial Solar Installation, Solar Company Gujarat, Solar Maintenance Gujarat, Solar Water Heater, Government Subsidy for Solar, Net Metering Gujarat, Solar Energy Solutions, Rooftop Solar Gujarat"
  },
  gu: {
    title: "પાટીદાર એન્ટરપ્રાઇઝ | ગુજરાતમાં સોલાર પેનલ ઇન્સ્ટોલેશન",
    description:
      "પાટીદાર એન્ટરપ્રાઇઝ અરવલ્લી જિલ્લા અને સમગ્ર ગુજરાતમાં ઘરેલુ અને વ્યાવસાયિક સોલાર પેનલ ઇન્સ્ટોલેશન, મેન્ટેનન્સ, નેટ મીટરિંગ અને સરકારી સબસિડી માર્ગદર્શન આપે છે.",
    keywords:
      "ગુજરાત સોલાર પેનલ ઇન્સ્ટોલેશન, ઘરેલુ સોલાર ઇન્સ્ટોલેશન, વ્યાવસાયિક સોલાર ઇન્સ્ટોલેશન, ગુજરાત સોલાર કંપની, સોલાર મેન્ટેનન્સ ગુજરાત, સોલાર વોટર હીટર, સોલાર સરકારી સબસિડી, નેટ મીટરિંગ ગુજરાત, સૌર ઊર્જા સોલ્યુશન્સ, રૂફટોપ સોલાર ગુજરાત"
  }
};

let currentLanguage = localStorage.getItem("patidar-language") || "en";
const defaultLanguage = "en";
const normalizedText = (value) => value.replace(/\s+/g, " ").trim();
const canonicalText = new Map();

Object.entries(translations).forEach(([, languageMap]) => {
  Object.entries(languageMap).forEach(([english, translated]) => {
    canonicalText.set(normalizedText(english), english);
    canonicalText.set(normalizedText(translated), english);
  });
});

const getTranslation = (english, language = currentLanguage) => {
  if (language === defaultLanguage) return english;
  return translations[language]?.[english] || english;
};

const translatableTextNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const parent = node.parentElement;
    const key = canonicalText.get(normalizedText(node.nodeValue));
    if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName) || !key) {
      return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  }
});

while (walker.nextNode()) {
  const node = walker.currentNode;
  translatableTextNodes.push({
    node,
    key: canonicalText.get(normalizedText(node.nodeValue)),
    leading: node.nodeValue.match(/^\s*/)?.[0] || "",
    trailing: node.nodeValue.match(/\s*$/)?.[0] || ""
  });
}

const translatableAttributes = [];
document.querySelectorAll("[alt], [aria-label], [placeholder]").forEach((element) => {
  ["alt", "aria-label", "placeholder"].forEach((attribute) => {
    const value = element.getAttribute(attribute);
    const key = value ? canonicalText.get(normalizedText(value)) : null;
    if (key) translatableAttributes.push({ element, attribute, key });
  });
});

const applyLanguage = (language) => {
  currentLanguage = language === defaultLanguage || translations[language] ? language : defaultLanguage;
  document.documentElement.lang = currentLanguage;
  localStorage.setItem("patidar-language", currentLanguage);

  translatableTextNodes.forEach(({ node, key, leading, trailing }) => {
    node.nodeValue = `${leading}${getTranslation(key)}${trailing}`;
  });

  translatableAttributes.forEach(({ element, attribute, key }) => {
    element.setAttribute(attribute, getTranslation(key));
  });

  const seo = seoContent[currentLanguage] || seoContent.en;
  document.title = seo.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
  document.querySelector('meta[name="keywords"]')?.setAttribute("content", seo.keywords);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
});

applyLanguage(currentLanguage);

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  header.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", getTranslation(isOpen ? "Close menu" : "Open menu"));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", getTranslation("Open menu"));
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll("details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name");
  const phone = data.get("phone");
  const service = data.get("service");
  const message = data.get("message") || getTranslation("Please contact me with more details.");
  const text = `${encodeURIComponent(getTranslation("Hello Patidar Enterprise, I want a free solar quote."))}%0A%0A${encodeURIComponent(
    getTranslation("Name")
  )}: ${encodeURIComponent(
    name
  )}%0A${encodeURIComponent(getTranslation("Phone"))}: ${encodeURIComponent(phone)}%0A${encodeURIComponent(
    getTranslation("Service Needed")
  )}: ${encodeURIComponent(service)}%0A${encodeURIComponent(getTranslation("Message"))}: ${encodeURIComponent(
    message
  )}`;

  formNote.textContent = getTranslation("Opening WhatsApp with your enquiry...");
  window.open(`https://wa.me/918989676889?text=${text}`, "_blank", "noopener");
});
