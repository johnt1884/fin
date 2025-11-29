import os
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Read the content of tt.js
    with open('tt.js', 'r') as f:
        script_content = f.read()

    # Go to a blank page
    page.goto('about:blank')

    # Inject the script
    page.add_script_tag(content=script_content)

    # Wait for the GUI to appear
    page.wait_for_selector('#otk-tracker-gui-wrapper', state='visible', timeout=10000)

    # Interact with the GUI
    page.click('#otk-settings-cog')
    page.wait_for_selector('#otk-options-window', state='visible')

    # Take a screenshot
    page.screenshot(path='tests/screenshot.png')
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
