import { GetStaticProps, GetStaticPaths } from 'next';
import { cardData, Card } from '../data/cardData'; // cardData 가져오기
import { useRouter } from 'next/router';

interface DetailProps {
  card: Card;
}

export default function Detail({ card }: DetailProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <img src={card.img} alt={card.title} style={{ width: '100%' }} />
      <p>{card.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cardData.map((card) => ({
    params: { id: card.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const card = cardData.find((item) => item.id === id);

  if (!card) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      card,
    },
  };
};
