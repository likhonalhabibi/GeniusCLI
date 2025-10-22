import { test, expect } from '@playwright/test';

test('New Chat button clears the chat history', async ({ page }) => {
  await page.goto('/');

  // Enter a prompt and generate a response
  await page.fill('textarea', 'Hello, world!');
  await page.click('button[type="submit"]');

  // Wait for the AI response to appear
  await page.waitForSelector('div:has-text("AI:")');

  // Click the "New Chat" button
  await page.click('button:has-text("New Chat")');

  // Verify that the chat history is cleared
  const aiMessage = await page.$('div:has-text("AI:")');
  expect(aiMessage).toBeNull();
});
