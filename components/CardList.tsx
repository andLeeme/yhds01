import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, Grid, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

interface Card {
  id: string;
  img: string;
  tag: string;
  title: string;
  description: string;
  authors: { name: string; avatar: string }[];
}

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

export default function CardList({ data }: { data: Card[] }) {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/detail/${id}`); // 상세 페이지로 이동
  };

  return (
    <Grid container spacing={2} columns={12}>
      {data.map((item) => (
        <Grid item xs={12} md={6} key={item.id}>
          <SyledCard
            variant="outlined"
            onClick={() => handleCardClick(item.id)} // item.id를 사용하여 해당 id로 이동
            tabIndex={0}
          >
            <CardMedia
              component="img"
              alt={item.title}
              image={item.img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {item.tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {item.description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={item.authors} />
          </SyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
