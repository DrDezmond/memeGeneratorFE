import { useCallback, useEffect, useState } from "react";
import { WarningAmber } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useStore } from "@store/useStore";

import { ImageWithText } from "./ImageWithText";
import { ImagePreviewWrapper, NoImagePreview } from "./styled";

const orientations = { single: 1, horizontal: 2, vertical: 2, grid: 4 };

const useTrueSizes = (images, orientation) => {
  const [w, setW] = useState<number[]>([]);
  const [h, setH] = useState<number[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [notResized, setNotResized] = useState(true);
  const maxWidth = 830;

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
    if (orientation == "horizontal") {
      w.forEach((x, i) => {
        const newWidth = (minHeight / heights[i]) * x;
        widths[i] = newWidth;
        heights[i] = minHeight;
      });
    } else if (orientation == "vertical" || orientation == "grid") {
      h.forEach((y, i) => {
        const newHeight = (minWidth / widths[i]) * y;
        widths[i] = minWidth;
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

export const ImagePreview = () => {
  const [orientation] = useStore((store) => store.orientation);
  const [images, setStore] = useStore((store) => store.images);
  const texts = {};
  const { widths, heights } = useTrueSizes(images, orientation);
  images.forEach((_, i) => {
    texts[i] = ["", ""];
  });

  useEffect(() => {
    setStore({
      texts,
    });
  }, [texts]);

  return (
    <ImagePreviewWrapper orientation={orientation}>
      {images.length === 0 &&
        Array.from({ length: orientations[orientation] }, (_, i) => (
          <NoImagePreview key={i}>
            <WarningAmber sx={{ fontSize: 128 }} color="error" />
            <Typography variant="body1">No images uploaded yet</Typography>
          </NoImagePreview>
        ))}
      {images.length > 0 &&
        images.map((el, i) => (
          <ImageWithText key={el} src={el} i={i} w={widths[i]} h={heights[i]} />
        ))}
    </ImagePreviewWrapper>
  );
};
