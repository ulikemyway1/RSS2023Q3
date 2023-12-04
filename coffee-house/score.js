console.log(`
1. The layout of the pages aligns the design at a screen width of 1440px: +14
2. The layout of the pages aligns the design at a screen width of 768px: +14
3. The layout of the pages aligns the design at a screen width of 380px: +14
4. There is no horizontal scrollbar at all screen width up to 380px inclusive. All page content remains as per the design: it is not cropped, removed, or shifted to the side: +20
5. During smooth resizing of the browser window from 1440px to 380px, the layout occupies the full width of the window (including specified margins), elements adjust their sizes and positions appropriately without full scaling, no elements overlap, and images maintain their correct aspect ratios: +8
6. At screen widths of 768px and below, the menu and navigation buttons in the header are concealed on both pages, and a burger menu icon is displayed: +4
7. Hover effects are active on desktop devices (as per the Desktop device type in DevTools) and are disabled for mobile devices (as per the Mobile device type in DevTools) on both pages: +4
8. The layout for both pages is validated and error-free according to the W3C Validator (https://validator.w3.org/): +12

    Total: 90 points
`)