import remarkEmbedder, { TransformerInfo } from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';
import type { Pluggable } from 'unified';

function handleHTML(html: string, info: TransformerInfo) {
  const { url, transformer } = info;
  if (
    transformer.name === '@remark-embedder/transformer-oembed' ||
    url.includes('youtube.com')
  ) {
    return `<div class="embed-youtube aspect-w-16 aspect-h-9">${html}</div>`;
  }
  return html;
}

const embed: Pluggable<any[]> = [
  remarkEmbedder,
  {
    transformers: [oembedTransformer],
    handleHTML,
  },
];

export default embed;
