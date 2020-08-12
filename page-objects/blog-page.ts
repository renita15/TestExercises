import { Selector, t } from "testcafe";

class BlogPage {
  blogs: Selector = Selector(".posts-wrap .post-bg");

  async getBlogsCount() {
    return this.blogs.count;
  }

  async clickBlog(index: number) {
    await t.click(this.blogs.nth(index));
  }
}

export default new BlogPage();
