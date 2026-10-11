# API Integration Checks

A compact API-testing example for service integrations. It shows how to validate response contracts, error handling and traceable behaviour without coupling tests to internal implementation details.

## Checks included

- Successful appointment creation returns an ID and `confirmed` status
- Missing required fields return a useful client error
- Unknown appointment slots do not create partial records
- Response shapes are checked explicitly
- Request and response data can be logged safely for CI diagnosis

## Example test shape

```ts
const response = await request.post("/appointments", {
  data: { slotId: "slot-10", patientId: "patient-123" },
});

expect(response.ok()).toBeTruthy();
expect(await response.json()).toMatchObject({ status: "confirmed" });
```

The example is deliberately domain-focused and can be connected to a real service or a local mock server.
