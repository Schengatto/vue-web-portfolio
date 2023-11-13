/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
  // launch browser for LHCI
  const page = await browser.newPage();
  await page.goto(context.url);
  await page.setCookie({ name: "cookie-policy-accepted", value: "1" });
  // close session for next run
  await page.close();
};
