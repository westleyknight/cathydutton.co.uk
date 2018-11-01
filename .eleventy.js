module.exports = function(config) {

  // Add a date formatter filter to Nunjucks
  config.addFilter("dateDisplay", require("./filters/dates.js") );
  config.addFilter("timestamp", require("./filters/timestamp.js") );
  config.addFilter("squash", require("./filters/squash.js") );

  // Blog post collection
  config.addCollection("posts", function(collection) {
    return collection.getFilteredByGlob("**/posts/**.njk").reverse();
  });

  // Latest posts include
   config.addCollection("latestPosts", function(collection) {
    return collection.getFilteredByGlob("**/posts/**.njk").reverse().slice(-3);
  });

  // PostCSS plugin collection
  config.addCollection("postcss", function(collection) {
    return collection.getFilteredByGlob("**/postcss/**.njk").reverse();
  });


  // Filter using `Array.filter`
  config.addCollection("projects", function(collection) {
    return collection.getFilteredByGlob("**/projects/**.njk").reverse().filter(function(item) {
      // Side-step tags and do your own filtering
      return "projectTags" in item.data;
    });
  });



  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };


};








