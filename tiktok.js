const axios = require('axios')

async function tiktok(url) {
  try {
  const { data } = await axios.post('https://lovetik.com/api/ajax/search',{
    query: url
  },{
    headers:{
      'Content-Type':"application/x-www-form-urlencoded; charset=UTF-8"
    }
  })
  const res = {
    author: data.author,
    author_name: data.author_name,
    caption: data.desc,
    no_watermark: (data.links.filter(i => i.s === 'NO watermark'))[0].a,
    watermark: (data.links.filter(i => i.s == 'Watermarked'))[0].a,
    audio: (data.links.filter(i => i.t.includes('MP3')))[0].a,
    thumb: data.cover
  }
return res
  } catch (e) {
  return 404
  }
}
// tiktok('https://www.tiktok.com/@senimanbocah/video/7242518494003072262?is_from_webapp=1&sender_device=pc')
