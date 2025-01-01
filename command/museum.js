import axios from 'axios'
import { distance } from '../utils/distance.js'
import museumTemplate from '../templates/museumTemplate.js'

export default async (event) => {
  try {
    const { data } = await axios.get(
      'https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJson&typeId=H'
    )
    const museums = data
      .map((museum) => {
        museum.distance = distance(
          museum.latitude,
          museum.longitude,
          event.message.latitude,
          event.message.longitude,
          'k'
        )
        return museum
      })
      .sort((a, b) => {
        return a.distance - b.distance
      })
      .slice(0, 5)
      .map((museum) => {
        const template = museumTemplate()
        template.body.contents[0].text = museum.name
        template.body.contents[1].contents[0].contents[1].text = museum.type
        template.body.contents[1].contents[1].contents[1].text = museum.address
        return template
      })

    const result = await event.reply({
      type: 'flex',
      altText: '鄰近的博物館們',
      contents: {
        type: 'carousel',
        contents: museums,
      },
    })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
