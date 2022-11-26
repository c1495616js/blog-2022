import { visit } from 'unist-util-visit';

function videoPlugin(options?: any | undefined): any | void {
  const youtubeSearch = RegExp(
    /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/
  );
  function transformer(tree: any) {
    visit(tree, 'paragraph', function (paragraphNode) {
      const { children } = paragraphNode;
      const node = children[0];

      if (node.type === 'link') {
        const matches = youtubeSearch.exec(node.url);
        if (
          matches &&
          node.children &&
          node.children[0].type === 'text' &&
          node.children[0].value === node.url
        ) {
          const videoId = matches[1];
          node.type = 'html';
          node.value = `<iframe width="320" height="240" src="https://www.youtube.com/embed/${videoId}?&autoplay=1" frameborder="0" allowfullscreen style="margin: 0 auto;"></iframe>`;
        }
      }
    });
  }

  return transformer;
}

export default videoPlugin;
