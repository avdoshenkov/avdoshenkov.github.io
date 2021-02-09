const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('base-layout', '_includes/baseLayout.11ty.js');
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPlugin(pluginTailwindCSS, { src: "_includes/**/*.css", keepFolderStructure: false, })
};
