import { t, Selector } from "testcafe";

class Utils {
  acceptCookiesSelector: Selector = Selector("#cookie_action_close_header");

  async maximizeWindow() {
    await t.maximizeWindow();
  }

  async clickAcceptCookies() {
    await t.click(this.acceptCookiesSelector);
  }
}

export default new Utils();
