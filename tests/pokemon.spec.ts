import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  page.getByRole('heading', { name: 'Pokemon' });
  page.getByText('20 pokemons in the list');

  // Load more pokemons
  await page.getByRole('button', { name: 'Load More' }).click();
  // Replace with expect
  expect(page.getByText('40 pokemons in the list')).toBeTruthy();

  // Add favorites
  await page.locator('.v-card-actions > .v-btn').first().click();
  await page
    .locator('div:nth-child(2) > .v-card > .v-card-actions > .v-btn')
    .click();

  // Open favorites view
  await page.getByRole('button', { name: 'Favorites' }).click();
  // Await update
  await page.waitForSelector('div:nth-child(2) > .v-card');
  expect(page.getByText('2 pokemons in favorites')).toBeTruthy();

  // Back to the general list
  await page.getByRole('button', { name: 'Pokemons' }).click();
  expect(page.getByText('2 pokemons in favorites')).toBeTruthy();
});
