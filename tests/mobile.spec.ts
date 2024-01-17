import { test, expect, _android as android } from "@playwright/test";

test("has title", async ({ page }) => {
  //Connect to the device.
  const [device] = await android.devices();
  await test.step(`Get Device Details`, async () => {
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
  });
  await test.step(`take a screenshot`, async () => {
    await device.screenshot({ path: "./device.png" });
  });
  await test.step(`Launch Chrome browser.`, async () => {
    await device.shell("am force-stop com.android.chrome");
    const context = await device.launchBrowser();
  });
  await test.step(`Launch Chrome browser.`, async () => {
    await page.goto("https://webkit.org/");
    console.log(await page.evaluate(() => window.location.href));
    await page.screenshot({ path: "page.png" });
  });
});
