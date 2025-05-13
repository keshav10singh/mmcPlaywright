// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Mitsubishi Outlander PHEV 2025 - Build & Price Tool', () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    // Navigate to the Mitsubishi Canada website
    await page.goto('https://www.mitsubishi-motors.ca/en?rd=true');
    // Accept cookies if a cookie banner appears
    try {
      const cookieAccept = page.getByRole('button', { name: /accept/i });
      if (await cookieAccept.isVisible({ timeout: 5000 })) {
        await cookieAccept.click();
      }
    } catch (e) {
      // Cookie banner might not appear, continue with the test
    }
  });

  test('Complete Build & Price flow for 2025 Outlander PHEV', async () => {
    // Step 1: Navigate to the Build & Price section
    await test.step('Navigate to Build & Price', async () => {
      const buildPriceLink = page.locator('#KeyBuyingAction_1_0_0_10').getByRole('link', { name: 'Build & Price' });
      await buildPriceLink.click();
      
       await page.getByRole('button', { name: 'OK', exact: true }).click();
       await page.locator('.location-prompt__closeBtn___kyyBB').click();
      // Verify we're on the Build & Price landing page
    //  await expect(page).toHaveURL(/.*build-and-price.*/);
    });

    // Step 2: Select the 2025 Outlander PHEV model
    await test.step('Select 2025 Outlander PHEV', async () => {
      // This selector might need to be adjusted based on the actual website structure
      //const outlanderPhev = page.getByText(/Outlander PHEV/i).filter({ hasText: /2025/i });
      const outlanderPhev= page.getByRole('link', { name: '2025 Outlander PHEV 2025' });
      await outlanderPhev.click();
      
      // Verify Outlander PHEV page loaded
      await expect(page.locator('text=Choose your 2025 OUTLANDER')).toBeVisible();
      //await expect(page).toHaveTitle(/Outlander PHEV.*2025/i);
    });

    // Step 3: Select a trim level
    await test.step('Select trim level', async () => {
      // Assuming there's a list of trim levels, select one (e.g., SEL)
      const selTrim = page.getByText('LE S-AWC• Includes all the');
      await selTrim.click();
      
      // Verify trim selection is reflected
      const trimConfirmation = page.getByText(/You selected.*SEL/i);
      await expect(trimConfirmation).toBeVisible();
      
      // Continue to next step
      const nextButton = page.getByRole('button', { name: /next|continue/i });
      await nextButton.click();
    });

    // Step 4: Select exterior color
    await test.step('Select exterior color', async () => {
      // Select a color (e.g., Diamond White)
      const whiteColor = page.getByLabel(/Diamond White/i);
      await whiteColor.click();
      
      // Verify color selection is reflected in the price summary
      const colorSelected = page.getByText(/Diamond White/i).filter({ hasText: /selected/i });
      await expect(colorSelected).toBeVisible();
      
      await page.getByRole('button', { name: /next|continue/i }).click();
    });
    
    // Step 5: Select interior options
    await test.step('Select interior options', async () => {
      // Select an interior color/material
      const leatherInterior = page.getByLabel(/Black Leather/i);
      await leatherInterior.click();
      
      // Add an interior accessory like all-weather floor mats
      const floorMats = page.getByLabel(/All-Weather Floor Mats/i);
      await floorMats.click();
      
      // Verify floor mats added to summary
      const matsInSummary = page.getByText(/All-Weather Floor Mats/i).filter({ hasText: /\$/ });
      await expect(matsInSummary).toBeVisible();
      
      await page.getByRole('button', { name: /next|continue/i }).click();
    });
    
    // Step 6: Select packages and options
    await test.step('Select packages and options', async () => {
      // Select a package (e.g., Convenience Package)
      const conveniencePackage = page.getByLabel(/Convenience Package/i);
      await conveniencePackage.click();
      
      // Verify package is added to the summary
      const packageInSummary = page.getByText(/Convenience Package/i).filter({ hasText: /\$/ });
      await expect(packageInSummary).toBeVisible();
      
      await page.getByRole('button', { name: /next|continue/i }).click();
    });
    
    // Step 7: Verify price summary
    await test.step('Verify price summary', async () => {
      // Check for the base price
      const basePrice = page.getByText(/Base MSRP/i);
      await expect(basePrice).toBeVisible();
      
      // Check for options price
      const optionsPrice = page.getByText(/Options/i).filter({ hasText: /\$/ });
      await expect(optionsPrice).toBeVisible();
      
      // Check for total price
      const totalPrice = page.getByText(/Total Price/i).filter({ hasText: /\$/ });
      await expect(totalPrice).toBeVisible();
    });
    
    // Step 8: Test dealer selection
    await test.step('Select dealer', async () => {
      // Locate dealer selection field
      const dealerSelect = page.getByLabel(/Select Dealer/i);
      await dealerSelect.click();
      
      // Enter postal code to find nearby dealers
      const postalCodeInput = page.getByLabel(/Postal Code/i);
      await postalCodeInput.fill('M5V 2H1'); // Toronto postal code
      
      // Click search
      await page.getByRole('button', { name: /search/i }).click();
      
      // Select the first dealer in the results
      const firstDealer = page.getByRole('radio').first();
      await firstDealer.click();
      
      // Confirm dealer selection
      await page.getByRole('button', { name: /confirm|select/i }).click();
      
      // Verify dealer is selected
      const dealerConfirmation = page.getByText(/Your selected dealer/i);
      await expect(dealerConfirmation).toBeVisible();
    });
    
    // Step 9: Test save configuration
    await test.step('Save configuration', async () => {
      // Click save configuration button
      const saveButton = page.getByRole('button', { name: /save|save configuration/i });
      await saveButton.click();
      
      // Enter email to save configuration
      const emailInput = page.getByLabel(/Email/i);
      await emailInput.fill('test@example.com');
      
      // Submit the save request
      await page.getByRole('button', { name: /submit|save/i }).click();
      
      // Verify confirmation message
      const saveConfirmation = page.getByText(/configuration (has been|was) saved/i);
      await expect(saveConfirmation).toBeVisible({ timeout: 10000 });
    });
    
    // Step 10: Test the request a quote functionality
    await test.step('Request a quote', async () => {
      // Click request quote button
      const quoteButton = page.getByRole('button', { name: /request (a )?quote/i });
      await quoteButton.click();
      
      // Fill in the form
      await page.getByLabel(/First Name/i).fill('Test');
      await page.getByLabel(/Last Name/i).fill('User');
      await page.getByLabel(/Email/i).fill('test@example.com');
      await page.getByLabel(/Phone/i).fill('5551234567');
      
      // Submit the form
      await page.getByRole('button', { name: /submit|send/i }).click();
      
      // Verify confirmation message
      const quoteConfirmation = page.getByText(/thank you|request received/i);
      await expect(quoteConfirmation).toBeVisible({ timeout: 10000 });
    });
  });
  
  test('Verify price updates when adding and removing options', async () => {
    // Navigate to Build & Price and select 2025 Outlander PHEV
    // (Code similar to the steps above to get to the options page)
    
    // Step 1: Navigate to Build & Price
    await page.getByRole('link', { name: /build (&|and) price/i }).click();
    await expect(page).toHaveURL(/.*build-and-price.*/);
    
    // Step 2: Select 2025 Outlander PHEV
    await page.getByText(/Outlander PHEV/i).filter({ hasText: /2025/i }).click();
    
    // Step 3: Select a trim and proceed to options
    await page.getByText(/SEL/i).first().click();
    await page.getByRole('button', { name: /next|continue/i }).click();
    
    // Get initial price
    const initialPriceElement = page.getByText(/Total Price/i).filter({ hasText: /\$/ });
    const initialPriceText = await initialPriceElement.textContent();
    const initialPrice = extractPrice(initialPriceText || '');
    
    // Add an expensive option
    const towingPackage = page.getByLabel(/Towing Package/i);
    await towingPackage.click();
    
    // Verify price increased
    const updatedPriceElement = page.getByText(/Total Price/i).filter({ hasText: /\$/ });
    const updatedPriceText = await updatedPriceElement.textContent();
    const updatedPrice = extractPrice(updatedPriceText || '');
    
    expect(updatedPrice).toBeGreaterThan(initialPrice);
    
    // Remove the option
    await towingPackage.click();
    
    // Verify price returned to initial value
    const finalPriceElement = page.getByText(/Total Price/i).filter({ hasText: /\$/ });
    const finalPriceText = await finalPriceElement.textContent();
    const finalPrice = extractPrice(finalPriceText || '');
    
    expect(finalPrice).toEqual(initialPrice);
  });
  
  test.afterEach(async () => {
    await page.close();
  });
});

/**
 * Helper function to extract numeric price from string
 * @param {string} priceString - The string containing a price value
 * @returns {number} The extracted price as a number
 */
function extractPrice(priceString) {
  const priceMatch = priceString.match(/\$[\d,]+(\.\d{2})?/);
  if (priceMatch) {
    return parseFloat(priceMatch[0].replace(/[$,]/g, ''));
  }
  return 0;
}