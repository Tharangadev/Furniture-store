less: {
    production: {
    options: {
      paths: ["assets/css"],
      plugins: [
        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
        new (require('less-plugin-clean-css'))(cleanCssOptions)
      ],
      modifyVars: {
        imgPath: '"http://mycdn.com/path/to/images"',
        bgColor: 'red'
      }
    },
    files: {
      "css/css.css": "css/css.less"
    }
  }
}


grunt.loadNpmTasks('grunt-contrib-less');