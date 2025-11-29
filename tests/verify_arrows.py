from playwright.sync_api import Page, expect, sync_playwright
import os

def verify_gui_arrows(page: Page):
    # 1. Arrange: Go to the local test page.
    page.goto(f"file://{os.getcwd()}/tests/test_page.html")

    # 2. Act: Inject the tt.js userscript.
    with open('tt.js', 'r') as f:
        tt_js_content = f.read()
    page.evaluate(tt_js_content)

    # 3. Assert & Screenshot: Wait for the GUI to appear and take a screenshot.
    expect(page.locator("#otk-tracker-gui-wrapper")).to_be_visible()
    page.screenshot(path="tests/screenshot.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_gui_arrows(page)
        finally:
            browser.close()
