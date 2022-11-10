import { RefObject, useEffect, useState } from 'react';
import { Orientations } from '@projectTypes/index';
import { useContainerWidth } from './useContainerWidth';

export const useTrueSizes = (
  images: string[],
  orientation: Orientations,
  ref: RefObject<HTMLDivElement>
) => {
  const [w, setW] = useState<number[]>([]);
  const [h, setH] = useState<number[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [notResized, setNotResized] = useState(true);
  const maxWidth = useContainerWidth(ref);

  const widths: number[] = [...w];
  const heights: number[] = [...h];

  useEffect(() => {
    if (!imagesLoaded) {
      images.forEach((image, i) => {
        var img = new Image();
        img.src = image;
        img.onload = function () {
          widths[i] = img.width;
          heights[i] = img.height;
          if (i === images.length - 1) {
            setImagesLoaded(true);
            setW(widths);
            setH(heights);
          }
        };
      });
    }
  }, [images]);

  if (imagesLoaded && notResized) {
    const minWidth = Math.min.apply(Math, w);
    const minHeight = Math.min.apply(Math, h);
    const sumWidth = w.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    const sumHeight = h.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    const sumWidthResized =
      sumWidth * ((minHeight * images.length) / sumHeight);
    const sumHeightResized =
      sumHeight * ((minWidth * images.length) / sumWidth);

    if (orientation === 'single') {
      w.forEach((x, i) => {
        widths[i] = maxWidth;
        heights[i] = (maxWidth * h[i]) / x;
      });
    }

    if (orientation == 'horizontal') {
      w.forEach((x, i) => {
        widths[i] = (minHeight / heights[i]) * x;
        heights[i] = minHeight;
      });
    } else if (orientation == 'vertical' || orientation == 'grid') {
      h.forEach((y, i) => {
        let newHeight = 0;
        if (orientation == 'grid') {
          newHeight = (minWidth / widths[i]) * y;
          widths[i] = minWidth;
        } else {
          newHeight = (minWidth / widths[i]) * y;
          widths[i] = minWidth;
        }
        heights[i] = newHeight;
      });
    }

    setNotResized(false);
    setW(widths);
    setH(heights);
    setImagesLoaded(false);
    setNotResized(true);
  }

  return { widths: w, heights: h };
};
