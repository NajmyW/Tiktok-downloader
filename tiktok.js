const axios = require('axios')

async function tiktok(url) {
  try {
    const { data } = await axios.post('https://lovetik.com/api/ajax/search', {
      query: url
    }, {
      headers: {
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
    return data
  } catch (e) {
    return e.message
  }
}
// tiktok('https://www.tiktok.com/@senimanbocah/video/7242518494003072262?is_from_webapp=1')
