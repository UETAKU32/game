import { moves } from "./movesData";

export const teamA = [
  {
    name: "女騎士",
    hp: 8,
    agl: 2,
    move: moves.sword,
    def: 6,
    image: {
      url: './characterImages/womanKnight.png',
      alt: '女騎士',
    },
  },
  {
    name: "ハンター",
    hp: 7,
    agl: 3,
    move: moves.arrow,
    def: 5,
    image: {
      url: './characterImages/Hunter.png',
      alt: 'ハンター',
    },
  },
  {
    name: "ケットシー",
    hp: 6,
    agl: 4,
    move: moves.sword,
    def: 4,
    image: {
      url: './characterImages/CaitSith.png',
      alt: 'ケットシー',
    },
  },
];

export const teamB = [
  {
    name: "デュラハン",
    hp: 10,
    agl: 2,
    move: moves.punch,
    def: 7,
    image: {
      url: './characterImages/Dullahan.png',
      alt: 'デュラハン',
    },
  },
  {
    name: "スケルトンキャスター",
    hp: 7,
    agl: 2,
    move: moves.magic,
    def: 5,
    image: {
      url: './characterImages/SkeletonWizard.png',
      alt: '骸骨魔術師',
    },
  },
  {
    name: "ゾンビハウンド",
    hp: 5,
    agl: 4,
    move: moves.bite,
    def: 4,
    image: {
      url: './characterImages/ZombieDog.png',
      alt: 'ゾンビハウンド',
    },
  },
];