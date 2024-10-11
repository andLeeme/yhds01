// 데이터 타입 정의
export interface Card {
  id: string;
  img: string;
  tag: string;
  title: string;
  description: string;
  authors: { name: string; avatar: string }[];
}

export const cardData = [
  {
    id: "1",
    img: "https://picsum.photos/800/450?random=1",
    tag: "Engineering",
    title: "Revolutionizing software development with cutting-edge tools",
    description:
      "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.",
    authors: [
      { name: "Remy Sharp", avatar: "https://picsum.photos/800/450?random=1" },
      {
        name: "Travis Howard",
        avatar: "https://picsum.photos/800/450?random=1",
      },
    ],
  },
  {
    id: "2",
    img: "https://picsum.photos/800/450?random=2",
    tag: "Product",
    title: "Innovative product features that drive success",
    description:
      "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.",
    authors: [
      { name: "Erica Johns", avatar: "https://picsum.photos/800/450?random=1" },
    ],
  },
  {
    id: "3",
    img: "https://picsum.photos/800/450?random=3",
    tag: "Design",
    title: "Designing for the future: trends and insights",
    description:
      "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.",
    authors: [
      {
        name: "Kate Morrison",
        avatar: "https://picsum.photos/800/450?random=1",
      },
    ],
  },
  {
    id: "4",
    img: "https://picsum.photos/800/450?random=4",
    tag: "Company",
    title: "Our company's journey: milestones and achievements",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [
      { name: "Cindy Baker", avatar: "https://picsum.photos/800/450?random=1" },
    ],
  },
  {
    id: "5",
    img: "https://picsum.photos/800/450?random=45",
    tag: "Engineering",
    title: "Pioneering sustainable engineering solutions",
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      {
        name: "Agnes Walker",
        avatar: "https://picsum.photos/800/450?random=1",
      },
      {
        name: "Trevor Henderson",
        avatar: "https://picsum.photos/800/450?random=1",
      },
    ],
  },
  {
    id: "6",
    img: "https://picsum.photos/800/450?random=6",
    tag: "Product",
    title: "Maximizing efficiency with our latest product updates",
    description:
      "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.",
    authors: [
      {
        name: "Travis Howard",
        avatar: "https://picsum.photos/800/450?random=1",
      },
    ],
  },
];
