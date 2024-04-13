import { test, expect, _android as android } from "@playwright/test";

test("has title", async ({ page }) => {
  //Connect to the device.
  const [device] = await android.devices();
  await test.step(`Get Device Details`, async () => {
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
  });
  await test.step(`Launch Chrome browser.`, async () => {
    await device.shell("am force-stop com.android.chrome");
    const context = await device.launchBrowser();
  });
  await test.step(`Launch Chrome browser.`, async () => {
    await page.goto("https://playwright.dev/");
    console.log(await page.evaluate(() => window.location.href));
    await page.screenshot({ path: "./screenshot/pradeep.png" });
    await expect(page.getByRole("link", { name: "Get started" })).toBeVisible();
    await expect(page.locator("h1")).toContainText(
      "Playwright enables reliable end-to-end testing for modern web apps."
    );
  });
});
