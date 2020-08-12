import { Selector, t } from "testcafe";

class Count {
  async wordCount(words) {
    words = words.replace(/(^\s*)|(\s*$)/gi, "");
    words = words.replace(/[ ]{2,}/gi, " ");
    words = words.replace(/\n /, "\n");
    return words.split(" ").length;
  }
}

export default new Count();
