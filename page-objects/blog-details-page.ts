import { Selector } from "testcafe";

class BlogDetailsPage {
  title: Selector = Selector(".entry-title");
  content: Selector = Selector(".entry-content");

  async getTitle() {
    return await this.title.textContent;
  }

  async getContent() {
    return await this.content.textContent;
  }
}

export default new BlogDetailsPage();
