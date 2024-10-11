// MainContent.tsx
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { cardData } from '../data/cardData'; // 수정된 경로로 데이터 import
import CardList from './CardList'; // 새로 만든 CardList 컴포넌트 import

export default function MainContent() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Blog
        </Typography>
        <Typography>Stay in the loop with the latest about our products</Typography>
      </div>
      {/* 데이터에 따라 동적으로 카드 렌더링 */}
      <CardList data={cardData} />
    </Box>
  );
}
