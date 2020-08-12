import { Selector, t } from "testcafe";

class Header {
  menu: Selector = Selector("#menu-item-38");
  aero: Selector = Selector("[data-filter='.aeropoints']");
  all: Selector = Selector("[data-filter='all']");

  async clickBlog() {
    await t.click(this.menu).click(this.aero).click(this.all);
  }
}

export default new Header();
