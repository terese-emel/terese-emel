# Quality Gates Demo

A focused Playwright example for a critical appointment workflow. The project demonstrates how I approach reliable end-to-end automation: test the user journey, make failures diagnosable and keep the suite suitable for CI.

## Coverage approach

- Happy-path appointment booking
- Required-field validation
- API failure shown as a user-friendly error
- Keyboard navigation through the booking form
- Stable role- and label-based locators
- Trace and screenshot capture on failure

## Example command

```bash
npx playwright test --project=chromium
```

The tests are intentionally small and readable. They describe behaviour rather than implementation details.
