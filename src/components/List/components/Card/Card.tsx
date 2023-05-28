import React from "react";
import {
  ButtonDetails,
  ImageChampion,
  InfoChampion,
  NameChampion,
  TypeChampion,
  WrapperCard,
  WrapperImage,
  WrapperInfo
} from "./styles";

import { AntDesign } from '@expo/vector-icons';
import { CardProps } from "../../../../interfaces/interfaces";

const Card: React.FC<CardProps> = ({ imgChampion, nameChampion, typeChampionPtBr, onPress }: CardProps) => {
  return (
    <WrapperCard>

      <WrapperImage>
        <ImageChampion source={imgChampion} resizeMode='cover' />
      </WrapperImage>

      <WrapperInfo>
        <InfoChampion>
          <NameChampion>{nameChampion}</NameChampion>
          <TypeChampion>{typeChampionPtBr}</TypeChampion>
        </InfoChampion>

        <ButtonDetails onPress={onPress}>
          <AntDesign name="right" size={13} color="#ffffff" />
        </ButtonDetails>
      </WrapperInfo>

    </WrapperCard>
  )
}

export default Card;