import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { cardData } from '../../data/cardData'; // 데이터 파일 import
import { Container, Box, Typography } from '@mui/material'; // Material UI 컴포넌트 import

interface DetailProps {
  card: {
    id: string;
    title: string;
    img: string;
    description: string;
    tag: string;
    authors: { name: string; avatar: string }[];
  };
}

// 상세 페이지 컴포넌트
export default function Detail({ card }: DetailProps) {
  const router = useRouter();

  // fallback 상태일 때 로딩 처리
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}> {/* 페이지 전체 레이아웃을 조정 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {card.title}
        </Typography>
        <img src={card.img} alt={card.title} style={{ width: '100%', height: 'auto' }} />
        <Typography variant="body1" sx={{ my: 2 }}>
          {card.description}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Category:</strong> {card.tag}
        </Typography>
        <Typography variant="subtitle2">
          <strong>Authors:</strong> {card.authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
    </Container>
  );
}

// getStaticPaths 함수: 동적 경로 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cardData.map((card) => ({
    params: { id: card.id }, // 각 카드의 id를 경로로 설정
  }));

  return {
    paths, // 미리 생성할 경로들
    fallback: 'blocking', // 없는 경로는 차후 요청 시 생성
  };
};

// getStaticProps 함수: 특정 id의 데이터를 가져옴
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!; // 경로의 id 파라미터 추출

  // cardData에서 id에 맞는 데이터를 찾음
  const card = cardData.find((item) => item.id === id);

  if (!card) {
    return {
      notFound: true, // id에 맞는 데이터가 없으면 404 반환
    };
  }

  return {
    props: {
      card, // props로 데이터를 넘김
    },
  };
};
