export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Brown Cafe',
          weight: 'bold',
          size: 'xl',
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '分類',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: 'Flex Tower, 7-7-4 Midori-ku, Tokyo',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5,
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '地址',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: 'Flex Tower, 7-7-4 Midori-ku, Tokyo',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5,
                },
              ],
            },
          ],
        },
      ],
    },
  }
}
