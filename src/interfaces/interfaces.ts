import { NavigationProp } from "@react-navigation/native";
import { ImageSourcePropType } from "react-native";
import { RootStackParamsList } from "../routes/types";

export enum EnumType {
  Assassins = "assassins",
  Fighters = "fighters",
  Mages = "mages",
  Marksmen = "marksmen",
  Supports = "supports",
  Tanks = "tanks",
}

export enum EnumTypeBr {
  Assassinos = "assassinos",
  Lutadores = "lutadores",
  Magos = "magos",
  Atiradores = "atiradores",
  Suportes = "suportes",
  Tanques = "tanques",
}

export enum EnumDifficulty {
  easy = "Baixa",
  medium = "Moderada",
  hard = "Alta",
}

export interface ChampionType {
  id: string;
  image: ImageSourcePropType;
  name: string;
  type: EnumType;
  typeBr: EnumTypeBr;
}

export interface CardProps extends ChampionType {
  navigation?: () => void;
}

export interface Skills {
  nameSkill: string;
  iconSkill: ImageSourcePropType;
  descriptionSkill: string;
}

export interface DetailsChampionType extends ChampionType {
  surname?: string;
  description?: string;
  skills?: Skills[];
  function: string;
  iconFunction: ImageSourcePropType;
  difficulty: EnumDifficulty;
}

export interface OptionRowProps {
  select:
    | "all"
    | "assassins"
    | "fighters"
    | "mages"
    | "marksmen"
    | "supports"
    | "tanks";
  setSelect: (
    select:
      | "all"
      | "assassins"
      | "fighters"
      | "mages"
      | "marksmen"
      | "supports"
      | "tanks"
  ) => void;
  disabled: boolean;
}

export interface SearchProps {
  value: string;
  onChangeText: (text: string) => void;
}

export interface ListType {
  data: CardProps[];
}

export type HomeScreenProps = NavigationProp<RootStackParamsList, "Home">;
