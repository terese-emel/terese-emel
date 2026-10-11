import { test, expect } from "@playwright/test";

test("patient can confirm an appointment", async ({ page }) => {
  await page.goto("/appointments");
  await page.getByRole("button", { name: "Choose 10:00" }).click();
  await page.getByLabel("Patient ID").fill("patient-123");
  await page.getByRole("button", { name: "Confirm appointment" }).click();

  await expect(page.getByRole("status")).toHaveText("Appointment confirmed");
});

test("missing patient ID is explained clearly", async ({ page }) => {
  await page.goto("/appointments");
  await page.getByRole("button", { name: "Choose 10:00" }).click();
  await page.getByRole("button", { name: "Confirm appointment" }).click();

  await expect(page.getByRole("alert")).toHaveText("Enter a patient ID");
});
