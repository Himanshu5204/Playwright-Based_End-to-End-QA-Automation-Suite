# Playwright Assignment

This repository contains a set of Playwright practice exercises for browser automation. The test suite is organized as 20 numbered scenarios (`Q1` to `Q20`) covering common UI interactions such as login flows, radio buttons, file upload, screenshots, videos, forms, alerts, tables, keyboard actions, and drag-and-drop style interactions.

## Project Structure

- `tests/` - Playwright test files for each assignment question
- `playwright.config.js` - Playwright configuration for Chromium, Firefox, and WebKit
- `playwright-report/` - HTML test report output
- `test-results/` - Artifacts from failed tests, traces, screenshots, and videos
- `screenshots/` - Saved screenshots used by some exercises or validation steps
- `package.json` - Project metadata and dependencies

## Prerequisites

- Node.js installed on your machine
- npm installed with Node.js
- Playwright browsers installed locally

## Setup

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

If you want to install only the browsers used in the config, you can also run:

```bash
npx playwright install chromium firefox webkit
```

## Running Tests

Run the full suite:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/Q1.spec.js
```

Run tests with the HTML report:

```bash
npx playwright test --reporter=html
```

Open the latest HTML report:

```bash
npx playwright show-report
```

## Notes

- The configuration is set to run tests in all three major browsers: Chromium, Firefox, and WebKit.
- Some test files use `page.pause()` for debugging, so you may want to remove or comment those lines when running unattended.
- A few tests reference local files for upload scenarios. Update those file paths to match your machine before running them.
- The tests rely on live demo sites, so an active internet connection is required.

## Output

After running the suite, Playwright generates artifacts in `test-results/` and an HTML summary in `playwright-report/`.
