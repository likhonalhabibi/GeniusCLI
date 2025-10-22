
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:3000")

        # 1. Enter text and generate a response
        page.get_by_placeholder("Enter your prompt here...").fill("Hello, world!")
        page.get_by_role("button", name="Generate").click()

        # 2. Wait for the AI response to appear
        expect(page.get_by_text("AI")).to_be_visible(timeout=30000)
        expect(page.get_by_text("Hello, world!")).to_be_visible()

        # 3. Take a screenshot to confirm the response is visible
        page.screenshot(path="jules-scratch/verification/response_visible.png")

        # 4. Click the "New Chat" button
        page.get_by_role("button", name="New Chat").click()

        # 5. Verify that the chat is cleared
        expect(page.get_by_text("AI")).not_to_be_visible()
        expect(page.get_by_text("Hello, world!")).not_to_be_visible()

        # 6. Take a final screenshot to confirm the chat is cleared
        page.screenshot(path="jules-scratch/verification/chat_cleared.png")

    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
