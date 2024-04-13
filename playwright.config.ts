import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  use: {
    actionTimeout: 0,
    baseURL: "https://www.nopcommerce.com/en",
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "android-emulator",
    },
  ],
  testDir: "./tests",
  testMatch: ["mobile.spec.ts"],
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
});
