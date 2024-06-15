export type Cards = {
  id: number;
  image: any;
  title: string;
  description: string;
};

export const data: Cards[] = [
  {
    id: 1,
    title: "Monitor & Improve Your Credit",
    image: require("@/assets/images/img1.png"),
    description: "Securely trak and imporve your credit score effortlessly",
  },
  {
    id: 2,
    title: "Test title just for test",
    image: require("@/assets/images/img1.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "the 2 title just for test",
    image: require("@/assets/images/img1.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
