import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Collapse } from '@mui/material';

export default function CardInvite({ key, name, id, image, height, weight, temperament }) {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <Card sx={{ height: 330, width: 310 }}>
      <CardActionArea>
        <Typography sx={{ fontSize: 16 , margin:1 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <CardMedia
          sx={{ height: 250, width: 310, objectFit: "cover" }}
          component="img"
          image={image}
          alt={key}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Learn More"}
        </Button>
        <Collapse in={expanded} time="auto" unmountOnExit>
          <CardContent sx={{
            width: 250,
            height: 110,
            display: "flex",       // Activa flexbox
            flexDirection: "column", // Acomoda elementos en columna
            justifyContent: "center", // Centra verticalmente
            alignItems: "center",   // Centra horizontalmente
            textAlign: "justify",    // Centra el texto
          }}>
            <Typography gutterBottom variant="h7">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {name} is a breed whit a weight of {weight} and your height is around of {height}.
              Your temperament is of {temperament}.
            </Typography>
          </CardContent>
        </Collapse>
      </CardActions>
    </Card>
  );
}
