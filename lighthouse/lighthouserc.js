const BASE_URL = process.env.LHCI_BASE_URL || "https://enricoschintu.altervista.org";
const LHCI_NUM_OF_RUNS = process.env.LHCI_NUM_OF_RUNS || 5;

module.exports = {
  ci: {
    collect: {
      puppeteerScript: "./puppeteer.js",
      // https://github.com/GoogleChrome/lighthouse/issues/6512#issuecomment-1212550875
      puppeteerLaunchOptions: {
        args: [
          "--ignore-certificate-errors",
          "--no-sandbox",
          "--headless",
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--no-first-run",
        ],
      },
      numberOfRuns: `${LHCI_NUM_OF_RUNS}`,
      url: [
        `${BASE_URL}`,
      ],
      disableStorageReset: true,
      settings: {
        extraHeaders: JSON.stringify({ Cookie: "cookie-policy-accepted=1" }),
        // exclude "pwa" category
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
        // https://github.com/GoogleChrome/lighthouse-ci/blob/0f5c2ddbc7faedaaf32b5dc8c83678776636460e/packages/utils/src/presets/all.js
        skipAudits: [
          "redirects-http",
          "is-on-https",
          "inspector-issues",
          "uses-http2",
          "color-contrast",
        ],
      },
    },
    /*
      aggregationMethod:
      https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#aggregation-methods
      - optimistic - Use the value that is most likely to pass from all runs
      - pessimistic - Use the value that is least likely to pass from all runs
    */

    assert: {
      assertions: {
        "categories:performance": [
          "error",
          { minScore: 0.8, aggregationMethod: "median-run" },
        ],
        "categories:accessibility": [
          "error",
          { minScore: 1, aggregationMethod: "pessimistic" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 0.8, aggregationMethod: "pessimistic" },
        ],
        "categories:seo": [
          "error",
          { minScore: 0.8, aggregationMethod: "pessimistic" },
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
