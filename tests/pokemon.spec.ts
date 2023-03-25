import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('heading', { name: 'Pokemon' });
  await page.getByText('20 pokemons in the list');

  // Load more pokemons
  await page.getByRole('button', { name: 'Load More' }).click();
  await page.getByText('40 pokemons in the list');

  // Add favorites
  await page.locator('.v-card-actions > .v-btn').first().click();
  await page.locator('div:nth-child(2) > .v-card > .v-card-actions > .v-btn').click();

  // Open favorites view
  await page.getByRole('button', { name: 'Favorites' }).click();
  await page.getByText('2 pokemons in favorites');

  // Back to the general list
  await page.getByRole('button', { name: 'Pokemons' }).click();
  await page.getByText('40 pokemons in the list');
});
