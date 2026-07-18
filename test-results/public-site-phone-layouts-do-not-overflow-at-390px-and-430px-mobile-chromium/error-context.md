# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: public-site.spec.ts >> phone layouts do not overflow at 390px and 430px
- Location: tests\e2e\public-site.spec.ts:96:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: page.goto: Test timeout of 120000ms exceeded.
Call log:
  - navigating to "http://localhost:3001/products", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e3]:
    - generic [ref=e6]:
      - link "YUVAAN INTERNATIONAL" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "YUVAAN INTERNATIONAL logo" [ref=e9]
      - generic [ref=e10]:
        - link "Request a Quote" [ref=e11] [cursor=pointer]:
          - /url: /contact#inquiry-form
          - text: Request a Quote
          - img [ref=e12]
        - button "Open menu" [ref=e14] [cursor=pointer]:
          - img [ref=e15]
  - main [ref=e16]:
    - generic [ref=e17]:
      - generic [ref=e22]:
        - generic [ref=e23]: Product Catalog
        - heading "Professional Solutions for Commercial & Trade Partners" [level=1] [ref=e24]
        - paragraph [ref=e25]: Browse our floor-safety system and trade categories. Each card opens a focused product page with applications, technical information pathways, and quote options.
      - generic [ref=e29]:
        - img "Safe Solution floor safety application context" [ref=e31]
        - generic [ref=e32]:
          - generic [ref=e33]: Featured New Product
          - heading "Safe Solution® Floor Safety System" [level=2] [ref=e34]
          - paragraph [ref=e35]: A complete commercial and industrial floor-safety system combining invisible anti-slip treatment, low-residue cleaning, scheduled inspection, and traction rejuvenation.
          - generic [ref=e36]:
            - link "Learn More" [ref=e37] [cursor=pointer]:
              - /url: /products/new-products/safe-solution-floor-safety-system
              - text: Learn More
              - img [ref=e38]
            - button "Request a Quote" [ref=e40] [cursor=pointer]
      - generic [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e44]:
            - img [ref=e45]
            - searchbox "Search products" [ref=e48]
          - generic [ref=e49]:
            - button "All" [ref=e50] [cursor=pointer]
            - button "Energy Solutions" [ref=e51] [cursor=pointer]
            - button "Trade & Sourcing" [ref=e52] [cursor=pointer]
            - button "Business Development" [ref=e53] [cursor=pointer]
            - button "Infrastructure" [ref=e54] [cursor=pointer]
            - button "Industrial Machinery" [ref=e55] [cursor=pointer]
            - button "Wholesale Products" [ref=e56] [cursor=pointer]
            - button "Agriculture" [ref=e57] [cursor=pointer]
            - button "Custom Sourcing" [ref=e58] [cursor=pointer]
        - generic [ref=e59]:
          - article [ref=e61]:
            - link "Battery Energy Storage Energy Solutions" [ref=e62] [cursor=pointer]:
              - /url: /products/battery-energy-storage
              - img "Battery Energy Storage" [ref=e63]
              - generic [ref=e64]: Energy Solutions
            - generic [ref=e65]:
              - link "Battery Energy Storage" [ref=e66] [cursor=pointer]:
                - /url: /products/battery-energy-storage
                - heading "Battery Energy Storage" [level=3] [ref=e67]
              - paragraph [ref=e68]: Residential, commercial, industrial, microgrid, and utility-scale battery-energy-storage solutions, subject to supplier availability and project requirements.
              - generic [ref=e69]:
                - img [ref=e70]
                - generic [ref=e75]: Utilities, Industrial Operators, Real Estate Developers, Government Projects, Energy Investors
              - generic [ref=e76]:
                - link "Learn More" [ref=e77] [cursor=pointer]:
                  - /url: /products/battery-energy-storage
                - button "Request a Quote" [ref=e78] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e79]
          - article [ref=e82]:
            - link "EV Charging Infrastructure Energy Solutions" [ref=e83] [cursor=pointer]:
              - /url: /products/ev-charging-infrastructure
              - img "EV Charging Infrastructure" [ref=e84]
              - generic [ref=e85]: Energy Solutions
            - generic [ref=e86]:
              - link "EV Charging Infrastructure" [ref=e87] [cursor=pointer]:
                - /url: /products/ev-charging-infrastructure
                - heading "EV Charging Infrastructure" [level=3] [ref=e88]
              - paragraph [ref=e89]: Fast charging networks, portable emergency EV charging systems, and comprehensive charging infrastructure deployment.
              - generic [ref=e90]:
                - img [ref=e91]
                - generic [ref=e96]: Municipalities, Commercial Real Estate, Fleet Operators, Transportation Companies, Energy Developers
              - generic [ref=e97]:
                - link "Learn More" [ref=e98] [cursor=pointer]:
                  - /url: /products/ev-charging-infrastructure
                - button "Request a Quote" [ref=e99] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e100]
          - article [ref=e103]:
            - link "Hydrogen Energy R&D Energy Solutions" [ref=e104] [cursor=pointer]:
              - /url: /products/hydrogen-energy
              - img "Hydrogen Energy R&D" [ref=e105]
              - generic [ref=e106]: Energy Solutions
            - generic [ref=e107]:
              - link "Hydrogen Energy R&D" [ref=e108] [cursor=pointer]:
                - /url: /products/hydrogen-energy
                - heading "Hydrogen Energy R&D" [level=3] [ref=e109]
              - paragraph [ref=e110]: Advancing hydrogen energy research, development, and commercialization for next-generation clean energy solutions.
              - generic [ref=e111]:
                - img [ref=e112]
                - generic [ref=e117]: Energy Companies, Research Institutions, Government Agencies, Industrial Processors, Investors
              - generic [ref=e118]:
                - link "Learn More" [ref=e119] [cursor=pointer]:
                  - /url: /products/hydrogen-energy
                - button "Request a Quote" [ref=e120] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e121]
          - article [ref=e124]:
            - link "Smart Grid & Power Management Energy Solutions" [ref=e125] [cursor=pointer]:
              - /url: /products/smart-grid-power-management
              - img "Smart Grid & Power Management" [ref=e126]
              - generic [ref=e127]: Energy Solutions
            - generic [ref=e128]:
              - link "Smart Grid & Power Management" [ref=e129] [cursor=pointer]:
                - /url: /products/smart-grid-power-management
                - heading "Smart Grid & Power Management" [level=3] [ref=e130]
              - paragraph [ref=e131]: Smart grid technologies, renewable energy integration, power management systems, and energy efficiency solutions.
              - generic [ref=e132]:
                - img [ref=e133]
                - generic [ref=e138]: Utilities, Government Agencies, Industrial Operators, Energy Developers, Smart City Projects
              - generic [ref=e139]:
                - link "Learn More" [ref=e140] [cursor=pointer]:
                  - /url: /products/smart-grid-power-management
                - button "Request a Quote" [ref=e141] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e142]
          - article [ref=e145]:
            - link "Global Trading Trade & Sourcing" [ref=e146] [cursor=pointer]:
              - /url: /products/global-trading
              - img "Global Trading" [ref=e147]
              - generic [ref=e148]: Trade & Sourcing
            - generic [ref=e149]:
              - link "Global Trading" [ref=e150] [cursor=pointer]:
                - /url: /products/global-trading
                - heading "Global Trading" [level=3] [ref=e151]
              - paragraph [ref=e152]: International sourcing, import/export review, strategic procurement, and supply chain coordination across target markets.
              - generic [ref=e153]:
                - img [ref=e154]
                - generic [ref=e159]: Manufacturers, Importers, Exporters, Distributors, Trading Companies
              - generic [ref=e160]:
                - link "Learn More" [ref=e161] [cursor=pointer]:
                  - /url: /products/global-trading
                - button "Request a Quote" [ref=e162] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e163]
          - article [ref=e166]:
            - link "Strategic Business Development Business Development" [ref=e167] [cursor=pointer]:
              - /url: /products/strategic-business-development
              - img "Strategic Business Development" [ref=e168]
              - generic [ref=e169]: Business Development
            - generic [ref=e170]:
              - link "Strategic Business Development" [ref=e171] [cursor=pointer]:
                - /url: /products/strategic-business-development
                - heading "Strategic Business Development" [level=3] [ref=e172]
              - paragraph [ref=e173]: Joint ventures, strategic alliances, business matchmaking, cross-border partnerships, technology transfer, and government relations.
              - generic [ref=e174]:
                - img [ref=e175]
                - generic [ref=e180]: Manufacturers, Investors, Government Agencies, Technology Companies, Growing Businesses
              - generic [ref=e181]:
                - link "Learn More" [ref=e182] [cursor=pointer]:
                  - /url: /products/strategic-business-development
                - button "Request a Quote" [ref=e183] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e184]
          - article [ref=e187]:
            - link "International Project Development Infrastructure" [ref=e188] [cursor=pointer]:
              - /url: /products/infrastructure-project-development
              - img "International Project Development" [ref=e189]
              - generic [ref=e190]: Infrastructure
            - generic [ref=e191]:
              - link "International Project Development" [ref=e192] [cursor=pointer]:
                - /url: /products/infrastructure-project-development
                - heading "International Project Development" [level=3] [ref=e193]
              - paragraph [ref=e194]: Infrastructure projects, renewable energy, public-private partnerships, investment facilitation, project financing coordination, and engineering partnerships.
              - generic [ref=e195]:
                - img [ref=e196]
                - generic [ref=e201]: Government Agencies, Project Developers, Infrastructure Investors, Engineering Firms, Development Banks
              - generic [ref=e202]:
                - link "Learn More" [ref=e203] [cursor=pointer]:
                  - /url: /products/infrastructure-project-development
                - button "Request a Quote" [ref=e204] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e205]
          - article [ref=e208]:
            - link "Industrial Machinery Industrial Machinery" [ref=e209] [cursor=pointer]:
              - /url: /products/industrial-machinery
              - img "Industrial Machinery" [ref=e210]
              - generic [ref=e211]: Industrial Machinery
            - generic [ref=e212]:
              - link "Industrial Machinery" [ref=e213] [cursor=pointer]:
                - /url: /products/industrial-machinery
                - heading "Industrial Machinery" [level=3] [ref=e214]
              - paragraph [ref=e215]: Heavy-duty industrial machinery for manufacturing, processing, and production operations across various industries.
              - generic [ref=e216]:
                - img [ref=e217]
                - generic [ref=e222]: Manufacturers, Industrial Buyers, Equipment Distributors, Engineering Companies, Factory Operators
              - generic [ref=e223]:
                - link "Learn More" [ref=e224] [cursor=pointer]:
                  - /url: /products/industrial-machinery
                - button "Request a Quote" [ref=e225] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e226]
          - article [ref=e229]:
            - link "Wholesale Consumer Products Wholesale Products" [ref=e230] [cursor=pointer]:
              - /url: /products/wholesale-consumer-products
              - img "Wholesale Consumer Products" [ref=e231]
              - generic [ref=e232]: Wholesale Products
            - generic [ref=e233]:
              - link "Wholesale Consumer Products" [ref=e234] [cursor=pointer]:
                - /url: /products/wholesale-consumer-products
                - heading "Wholesale Consumer Products" [level=3] [ref=e235]
              - paragraph [ref=e236]: Bulk consumer goods for wholesale distribution across retail and commercial channels internationally.
              - generic [ref=e237]:
                - img [ref=e238]
                - generic [ref=e243]: Wholesalers, Distributors, Retailers, E-commerce Businesses, Trading Companies
              - generic [ref=e244]:
                - link "Learn More" [ref=e245] [cursor=pointer]:
                  - /url: /products/wholesale-consumer-products
                - button "Request a Quote" [ref=e246] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e247]
          - article [ref=e250]:
            - link "Agricultural & Food Trade Agriculture" [ref=e251] [cursor=pointer]:
              - /url: /products/agricultural-food-trade-products
              - img "Agricultural & Food Trade" [ref=e252]
              - generic [ref=e253]: Agriculture
            - generic [ref=e254]:
              - link "Agricultural & Food Trade" [ref=e255] [cursor=pointer]:
                - /url: /products/agricultural-food-trade-products
                - heading "Agricultural & Food Trade" [level=3] [ref=e256]
              - paragraph [ref=e257]: Agricultural commodities, food products, and agri-trade goods for international market distribution.
              - generic [ref=e258]:
                - img [ref=e259]
                - generic [ref=e264]: Importers, Exporters, Food Distributors, Grocery Chains, Agri-Business Companies
              - generic [ref=e265]:
                - link "Learn More" [ref=e266] [cursor=pointer]:
                  - /url: /products/agricultural-food-trade-products
                - button "Request a Quote" [ref=e267] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e268]
          - article [ref=e271]:
            - link "Custom Product Sourcing Custom Sourcing" [ref=e272] [cursor=pointer]:
              - /url: /products/custom-product-sourcing
              - img "Custom Product Sourcing" [ref=e273]
              - generic [ref=e274]: Custom Sourcing
            - generic [ref=e275]:
              - link "Custom Product Sourcing" [ref=e276] [cursor=pointer]:
                - /url: /products/custom-product-sourcing
                - heading "Custom Product Sourcing" [level=3] [ref=e277]
              - paragraph [ref=e278]: Tailored product sourcing and supplier-buyer matching for specific trade requirements across any industry.
              - generic [ref=e279]:
                - img [ref=e280]
                - generic [ref=e285]: All Business Types, Project Partners, Entrepreneurs, Startups, Established Importers
              - generic [ref=e286]:
                - link "Learn More" [ref=e287] [cursor=pointer]:
                  - /url: /products/custom-product-sourcing
                - button "Request a Quote" [ref=e288] [cursor=pointer]:
                  - text: Request a Quote
                  - img [ref=e289]
  - contentinfo [ref=e291]:
    - generic [ref=e292]:
      - generic [ref=e293]:
        - generic [ref=e294]:
          - link "YUVAAN INTERNATIONAL YUVAAN International" [ref=e295] [cursor=pointer]:
            - /url: /
            - img "YUVAAN INTERNATIONAL" [ref=e297]
            - generic [ref=e298]:
              - paragraph [ref=e299]: YUVAAN
              - paragraph [ref=e300]: International
          - paragraph [ref=e301]: Professional cleaning, floor-safety, sourcing, and international partnership support from British Columbia, Canada.
          - generic [ref=e302]:
            - link "+1 778 828 3610" [ref=e303] [cursor=pointer]:
              - /url: tel:+17788283610
              - img [ref=e304]
              - text: +1 778 828 3610
            - link "pacifictrade2010@gmail.com" [ref=e306] [cursor=pointer]:
              - /url: mailto:pacifictrade2010@gmail.com
              - img [ref=e307]
              - text: pacifictrade2010@gmail.com
            - paragraph [ref=e310]:
              - img [ref=e311]
              - text: British Columbia, Canada
        - generic [ref=e314]:
          - heading "Quick Links" [level=3] [ref=e315]
          - list [ref=e316]:
            - listitem [ref=e317]:
              - link "Home" [ref=e318] [cursor=pointer]:
                - /url: /
            - listitem [ref=e319]:
              - link "Products" [ref=e320] [cursor=pointer]:
                - /url: /products
            - listitem [ref=e321]:
              - link "Industries" [ref=e322] [cursor=pointer]:
                - /url: /industries
            - listitem [ref=e323]:
              - link "About" [ref=e324] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e325]:
              - link "Resources" [ref=e326] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e327]:
              - link "Contact" [ref=e328] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e329]:
          - heading "Products" [level=3] [ref=e330]
          - list [ref=e331]:
            - listitem [ref=e332]:
              - link "New Products" [ref=e333] [cursor=pointer]:
                - /url: /products/new-products
            - listitem [ref=e334]:
              - link "Safe Solution®" [ref=e335] [cursor=pointer]:
                - /url: /products/new-products/safe-solution-floor-safety-system
            - listitem [ref=e336]:
              - link "Energy Solutions" [ref=e337] [cursor=pointer]:
                - /url: /products?category=Energy%20Solutions
            - listitem [ref=e338]:
              - link "Industrial Machinery" [ref=e339] [cursor=pointer]:
                - /url: /products/industrial-machinery
            - listitem [ref=e340]:
              - link "Custom Product Sourcing" [ref=e341] [cursor=pointer]:
                - /url: /products/custom-product-sourcing
        - generic [ref=e342]:
          - heading "Resources" [level=3] [ref=e343]
          - list [ref=e344]:
            - listitem [ref=e345]:
              - link "Global Markets" [ref=e346] [cursor=pointer]:
                - /url: /global-markets
            - listitem [ref=e347]:
              - link "Partnerships" [ref=e348] [cursor=pointer]:
                - /url: /partnerships
            - listitem [ref=e349]:
              - link "Distributors Wanted" [ref=e350] [cursor=pointer]:
                - /url: /partnerships/distributors-wanted
            - listitem [ref=e351]:
              - link "Investments" [ref=e352] [cursor=pointer]:
                - /url: /investments
            - listitem [ref=e353]:
              - link "Privacy Policy" [ref=e354] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e355]:
              - link "Terms of Use" [ref=e356] [cursor=pointer]:
                - /url: /terms-of-use
      - generic [ref=e357]:
        - paragraph [ref=e358]: © 2026 Yuvaan International. All rights reserved.
        - paragraph [ref=e359]: Product names and trademarks remain the property of their respective owners.
  - button "Open Next.js Dev Tools" [ref=e365] [cursor=pointer]:
    - img [ref=e366]
```

# Test source

```ts
  13  |   '/global-markets',
  14  |   '/investments',
  15  |   '/industries',
  16  |   '/resources',
  17  |   '/contact',
  18  |   '/privacy-policy',
  19  |   '/terms-of-use',
  20  | ];
  21  | 
  22  | const prohibited = [
  23  |   '11' + '++',
  24  |   'Professional Visual ' + 'Placeholder',
  25  |   'System Placeholder ' + 'Visual',
  26  |   'Client' + '-supplied',
  27  |   'Only ' + 'publish',
  28  |   'should clearly ' + 'explain',
  29  |   'where supported by ' + 'documentation',
  30  |   'Download buttons are not ' + 'shown',
  31  |   'Uploads are not ' + 'supported',
  32  |   'Distributor ' + 'CTA',
  33  |   'Product ' + 'Detail',
  34  |   'lorem ' + 'ipsum',
  35  |   'Ready to submit a ' + 'EV',
  36  |   'Ready to submit a ' + 'International',
  37  |   'Ready to submit a ' + 'Industrial',
  38  | ];
  39  | 
  40  | test.beforeEach(async ({ page }) => {
  41  |   const errors: string[] = [];
  42  |   page.on('console', (msg) => {
  43  |     if (msg.type() === 'error') errors.push(msg.text());
  44  |   });
  45  |   test.info().annotations.push({ type: 'console-errors', description: errors.join('\n') });
  46  | });
  47  | 
  48  | for (const route of requiredRoutes) {
  49  |   test(`${route} loads with one h1 and no prohibited wording`, async ({ page }) => {
  50  |     await page.goto(route);
  51  |     await expect(page.locator('h1')).toHaveCount(1);
  52  |     await expect(page.locator('body')).not.toContainText(new RegExp(prohibited.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')));
  53  |   });
  54  | }
  55  | 
  56  | test('critical navigation and redirects work', async ({ page }) => {
  57  |   test.setTimeout(60_000);
  58  |   await page.goto('/');
  59  |   await expect(page.getByRole('heading', { name: /Professional Cleaning & Floor Safety Solutions/i })).toBeVisible();
  60  |   await expect(page.getByRole('heading', { name: /Safe Solution® Floor Safety System/i }).first()).toBeVisible();
  61  |   await page.goto('/resources');
  62  |   await expect(page.getByRole('heading', { name: /Markets, Partnerships/i })).toBeVisible();
  63  |   await page.goto('/products/new-products');
  64  |   await expect(page.getByRole('heading', { name: /New Products/i })).toBeVisible();
  65  |   await page.goto('/partnership');
  66  |   await expect(page).toHaveURL(/\/partnerships/);
  67  |   await page.goto('/partnerships#manufacturer-partnerships');
  68  |   await expect(page.locator('#manufacturer-partnerships')).toBeVisible();
  69  | });
  70  | 
  71  | test('mobile menu opens and closes', async ({ page, isMobile }) => {
  72  |   test.skip(!isMobile, 'mobile-only coverage');
  73  |   await page.goto('/');
  74  |   await page.getByRole('button', { name: /open menu/i }).click();
  75  |   const mobileNav = page.getByLabel('Mobile Navigation');
  76  |   await expect(mobileNav).toBeVisible();
  77  |   await expect(mobileNav.getByRole('link', { name: 'Home' })).toBeVisible();
  78  |   await page.keyboard.press('Escape');
  79  |   await expect(mobileNav).not.toBeVisible();
  80  | });
  81  | 
  82  | test('contact query parameters preselect form options', async ({ page }) => {
  83  |   await page.goto('/contact?inquiry=floor-assessment&product=safe-solution#inquiry-form');
  84  |   await expect(page.locator('select[name="inquiryCategory"]')).toHaveValue('Request a Floor Assessment');
  85  |   await expect(page.locator('input[name="productOrServiceNeeded"]')).toHaveValue('Safe Solution® Floor Safety System');
  86  | });
  87  | 
  88  | test('form validation appears and submit disables while submitting', async ({ page }) => {
  89  |   test.setTimeout(60_000);
  90  |   await page.goto('/contact#inquiry-form');
  91  |   const submit = page.getByRole('button', { name: /submit inquiry/i });
  92  |   await submit.click();
  93  |   await expect(page.getByText(/Full name is required/i)).toBeVisible();
  94  | });
  95  | 
  96  | test('phone layouts do not overflow at 390px and 430px', async ({ page }) => {
  97  |   test.setTimeout(120_000);
  98  |   const phoneRoutes = [
  99  |     '/',
  100 |     '/products',
  101 |     '/products/battery-energy-storage',
  102 |     '/products/new-products/safe-solution-floor-safety-system',
  103 |     '/industries',
  104 |     '/industries/healthcare',
  105 |     '/resources',
  106 |     '/contact',
  107 |     '/partnerships/distributors-wanted',
  108 |   ];
  109 | 
  110 |   for (const width of [390, 430]) {
  111 |     await page.setViewportSize({ width, height: 844 });
  112 |     for (const route of phoneRoutes) {
> 113 |       await page.goto(route);
      |                  ^ Error: page.goto: Test timeout of 120000ms exceeded.
  114 |       const overflow = await page.evaluate(() => {
  115 |         const viewportWidth = document.documentElement.clientWidth;
  116 |         const offenders = [...document.querySelectorAll<HTMLElement>('body *')]
  117 |           .map((element) => {
  118 |             const rect = element.getBoundingClientRect();
  119 |             return {
  120 |               tag: element.tagName.toLowerCase(),
  121 |               className: typeof element.className === 'string' ? element.className : '',
  122 |               left: Math.round(rect.left),
  123 |               right: Math.round(rect.right),
  124 |               width: Math.round(rect.width),
  125 |             };
  126 |           })
  127 |           .filter(({ left, right, width: elementWidth }) => elementWidth > 0 && (left < -1 || right > viewportWidth + 1))
  128 |           .slice(0, 8);
  129 |         return {
  130 |           documentWidth: document.documentElement.scrollWidth,
  131 |           viewportWidth,
  132 |           offenders,
  133 |         };
  134 |       });
  135 |       expect(
  136 |         overflow.documentWidth,
  137 |         `${route} overflows at ${width}px: ${JSON.stringify(overflow.offenders)}`
  138 |       ).toBeLessThanOrEqual(overflow.viewportWidth);
  139 |     }
  140 |   }
  141 | });
  142 | 
  143 | test('product inquiry modal fits a phone viewport', async ({ page }) => {
  144 |   await page.setViewportSize({ width: 390, height: 844 });
  145 |   await page.goto('/products');
  146 |   await page.getByRole('button', { name: /request a quote/i }).first().click();
  147 |   const dialog = page.getByRole('dialog');
  148 |   await expect(dialog).toBeVisible();
  149 |   const bounds = await dialog.locator('> div').boundingBox();
  150 |   expect(bounds).not.toBeNull();
  151 |   expect(bounds!.width).toBeLessThanOrEqual(390);
  152 |   expect(bounds!.height).toBeLessThanOrEqual(844);
  153 |   await page.getByRole('button', { name: /close modal/i }).click();
  154 |   await expect(dialog).not.toBeVisible();
  155 | });
  156 | 
  157 | test('screenshots for client review', async ({ page, isMobile }) => {
  158 |   test.setTimeout(120_000);
  159 |   const screenshotDir = path.join(process.cwd(), 'docs', 'review-screenshots');
  160 |   await fs.mkdir(screenshotDir, { recursive: true });
  161 |   const shots = isMobile
  162 |     ? [
  163 |         ['homepage-mobile.png', '/'],
  164 |         ['safe-solution-mobile.png', '/products/new-products/safe-solution-floor-safety-system'],
  165 |         ['distributor-form-mobile.png', '/partnerships/distributors-wanted#distributor-application'],
  166 |       ]
  167 |       : [
  168 |         ['homepage-desktop.png', '/'],
  169 |         ['products-desktop.png', '/products'],
  170 |         ['new-products-desktop.png', '/products/new-products'],
  171 |         ['safe-solution-desktop.png', '/products/new-products/safe-solution-floor-safety-system'],
  172 |         ['industries-desktop.png', '/industries'],
  173 |         ['resources-desktop.png', '/resources'],
  174 |         ['distributors-desktop.png', '/partnerships/distributors-wanted'],
  175 |         ['global-markets-desktop.png', '/global-markets'],
  176 |         ['contact-form-desktop.png', '/contact#inquiry-form'],
  177 |       ];
  178 | 
  179 |   for (const [filename, route] of shots) {
  180 |     await page.goto(route);
  181 |     await page.screenshot({ path: path.join(screenshotDir, filename), fullPage: true });
  182 |   }
  183 | });
  184 | 
```