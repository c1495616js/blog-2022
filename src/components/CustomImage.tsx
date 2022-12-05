import Image, { ImageProps } from 'next/image';
import Zoom from 'next-image-zoom';

type Props = ImageProps & { base64?: string };

export default function CustomImage({
  src,
  height,
  width,
  base64,
  alt,
  ...otherProps
}: Props) {
  console.log(width, height);
  if (!src) return null;
  if (typeof src === 'string' && (!height || !width)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} height={height} width={width} alt={alt} {...otherProps} />
    );
  }
  return (
    <Zoom
      backgroundOpacity={1}
      zoomPercentage={100}
      backgroundColor={'black'}
      layout="responsive"
      src={src}
      alt={alt}
      height={height}
      width={width}
      placeholder={base64 ? 'blur' : 'empty'}
      blurDataURL={base64}
      {...otherProps}
    />
  );
}
