import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    minHeight: 180,
  },
  cardStyle: {
    minHeight: 100,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant='outlined'>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image={props.imageSource}
            title='Contemplative Reptile'
          /> */}
          <CardContent>
            <Typography
              //   gutterBottom
              className={classes.cardStyle}
              variant='h6'
              component='h2'
              style={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {props.categoryTitle}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {props.categoryDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
