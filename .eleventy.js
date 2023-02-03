module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPassthroughCopy("src/assets/");

  // Filters
  eleventyConfig.addFilter("centsToDollars", (cents) => {
    return (cents / 100).toFixed(2);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
