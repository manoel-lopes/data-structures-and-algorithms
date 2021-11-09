module.exports = function(api) {
    api.cache(true)
    return {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathSuffix: 'src'
          }
        ]
      ]
    }
  }
  