import { useRef } from "react";
import { useStore } from "@store/useStore";
import Image from "next/image";

import { ImageInputWrapper, StyledTextArea } from "./styled";

export const ImageWithText = ({ src, i, w = 250, h = 250 }) => {
  const [fontSize] = useStore((store) => store.fontSize);
  const [texts, setStore] = useStore((store) => store.texts);
  const topArea = useRef(null);
  const bottomArea = useRef(null);
  const textsChanged = {
    ...texts,
  };

  const onChange = (position: number, i: number) => {
    if (position === 0) {
      textsChanged[i][0] = topArea.current.value;
    } else {
      textsChanged[i][1] = bottomArea.current.value;
    }

    setStore({ texts: textsChanged });
  };

  return (
    <ImageInputWrapper>
      <StyledTextArea
        ref={topArea}
        placeholder={"ENTER TXT"}
        top={true}
        fontSize={fontSize}
        onChange={(e) => {
          onChange(0, i);
        }}
      />
      <Image src={src} width={w} height={h} alt="uploaded image" />
      <StyledTextArea
        ref={bottomArea}
        placeholder={"ENTER TXT"}
        onChange={(e) => {
          onChange(1, i);
        }}
        top={false}
        fontSize={fontSize}
      />
    </ImageInputWrapper>
  );
};
