import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgress, breadcrumbsClasses } from '@mui/material';
import { useGetTodosQuery } from '../../store/apis/todosApi';
import { useDispatch } from 'react-redux';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardComponent(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [breedFavorite, setBreedFavorite] = React.useState(false)

  const handleBreedFavorite = (e) => {
    if (!breedFavorite) {
      setBreedFavorite(!breedFavorite)
      alert('You have add the breed to favorite')
    }else{
      setBreedFavorite(!breedFavorite)
      alert('Do you want delete this breed of your favorite list?')
    }
  }

  return (
    <>
      <Card sx={{ minWidth: 255 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {props.name}
          </Typography>
          <CardMedia
            component="img"
            height="218"
            image={props.image}
            alt={props.id}
          />
        </CardContent>
        <CardActions>
          <IconButton color={breedFavorite ? "primary" : "defauld"} aria-label="add to favorites" onClick={handleBreedFavorite}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  )
}