export function getBrowser() {
  try {
    const browser = typeof eval("window") !== "undefined";
    return browser;
  } catch (err) {
    return false;
  }
}