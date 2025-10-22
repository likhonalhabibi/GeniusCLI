
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    def log_response(response):
        if "/api/generate" in response.url:
            print(f"<<< Response: {response.status} {response.url}")
            try:
                print(f"<<< Body: {response.json()}")
            except Exception:
                print(f"<<< Body: {response.text()}")

    page.on("response", log_response)

    try:
        page.goto("http://localhost:3000")

        # 1. Enter text and generate a response
        page.get_by_placeholder("Enter your prompt here...").fill("Hello, world!")

        # 2. Click the "Generate" button and wait for the response
        with page.expect_response("**/api/generate") as response_info:
            page.get_by_role("button", name="Generate").click()

        response = response_info.value
        print(f"Response from /api/generate: {response.status}")


        # 3. Wait for the AI response to appear
        expect(page.get_by_text("AI")).to_be_visible(timeout=20000)

        # 4. Take a screenshot
        page.screenshot(path="jules-scratch/verification/generate_screenshot.png")

    finally:
        browser.close()

with sync_playwright() as p:
    run(p)
