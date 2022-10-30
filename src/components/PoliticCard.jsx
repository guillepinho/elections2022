import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Typography,
  Avatar,
  LinearProgress,
} from '@mui/material';
import bolso from '../images/bolsonaro.jpeg';
import lula from '../images/lula.jpg';

function PoliticCard({ name, data }) {
  const setToNumber = (value) => Number(value).toLocaleString('pt-BR');

  const pct = parseFloat(data.pvap.replace(/,/g, '.'));

  return (
    <Card className="politic-card">
      <div className="avatar-n-title">
        <Avatar
          alt={ name }
          src={ name === 'Bolsonaro' ? bolso : lula }
          sx={ { width: 80, height: 80 } }
        />
        <Typography variant="h4" component="div">
          {name}
        </Typography>
      </div>
      <LinearProgress
        variant="determinate"
        value={ pct }
        color={ name === 'Bolsonaro' ? 'success' : 'error' }
      />
      <Typography variant="body3" color="text.secondary">
        { `Percentual de Votos: ${data.pvap}%`}
        <br />
        { `Número de Votos: ${setToNumber(data.vap)}`}
      </Typography>
    </Card>
  );
}

PoliticCard.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default PoliticCard;
