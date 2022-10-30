/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AccessTime,
  AnalyticsOutlined,
  PersonAddAlt1Outlined,
  CheckBoxOutlineBlankOutlined,
  CancelOutlined,
  HistoryToggleOff,
} from '@mui/icons-material';

function Data({ info, time }) {
  const { apu, votos, when, branco, nulo } = info;

  return (
    <div className="request-info">
      <List>
        <ListItem disablePadding className="li">
          <ListItemButton>
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText secondary="Horário da Informação:" />
            <ListItemText secondary={ when } className="last-txt" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AnalyticsOutlined />
            </ListItemIcon>
            <ListItemText secondary="Urnas Apuradas:" />
            <ListItemText secondary={ `${apu}%` } className="last-txt" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonAddAlt1Outlined />
            </ListItemIcon>
            <ListItemText secondary="Total de Votos Apurados:" />
            <ListItemText
              secondary={ `${votos.toLocaleString('pt-br')}` }
              className="last-txt"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckBoxOutlineBlankOutlined />
            </ListItemIcon>
            <ListItemText secondary="Votos Brancos:" />
            <ListItemText secondary={ `${branco}%` } className="last-txt" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CancelOutlined />
            </ListItemIcon>
            <ListItemText secondary="Votos Nulos:" />
            <ListItemText secondary={ `${nulo}%` } className="last-txt" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HistoryToggleOff />
            </ListItemIcon>
            <ListItemText secondary="Última Requisição:" />
            <ListItemText
              secondary={ `${time.getHours()}:
         ${time.getMinutes().toLocaleString('pt-BR', { minimumIntegerDigits: 2 })}:
         ${time.getSeconds().toLocaleString('pt-BR', { minimumIntegerDigits: 2 })}` }
              className="last-txt"
            />
          </ListItemButton>
        </ListItem>

      </List>
    </div>
  );
}

Data.propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
};

export default Data;
