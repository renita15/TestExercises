import { Selector } from "testcafe";

import utils from "./utils";
import header from "./page-objects/header";
import blogPage from "./page-objects/blog-page";
import blogDetailsPage from "./page-objects/blog-details-page";

// page objects concept: https://www.martinfowler.com/bliki/PageObject.html

fixture(`Exercise`).page(
  // declare the fixture
  `https:///www.propelleraero.com/`
); // specify the start page

test("Practice", async (t) => {
  await utils.maximizeWindow();
  await utils.clickAcceptCookies();

  await header.clickBlog();

  var blogCount = await blogPage.getBlogsCount();
  console.log("Total number of blogCount/s are " + blogCount);

  var maxCount = 0;
  var maxTitle = "";

  for (var i = 0; i < blogCount; i++) {
    await blogPage.clickBlog(i);

    var title = await blogDetailsPage.getTitle();
    var content = await blogDetailsPage.getContent();

    var wordsInBlog = wordCount(content);
    console.log("Words in blog: " + wordsInBlog);
    console.log("Blog Title" + title);

    if (wordsInBlog > maxCount) {
      maxCount = wordsInBlog;
      maxTitle = title;
    }

    await header.clickBlog();
  }

  console.log("Blog with highest number of words: " + maxCount);
  console.log("Blog Title with highest number of words: " + maxTitle);
});

function wordCount(words) {
  words = words.replace(/(^\s*)|(\s*$)/gi, "");
  words = words.replace(/[ ]{2,}/gi, " ");
  words = words.replace(/\n /, "\n");
  return words.split(" ").length;
}
