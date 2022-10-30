import React, { useState, useEffect } from 'react';
import PoliticCard from './PoliticCard';
import Data from './Data';

function Body() {
  const THIRTY_SEC = 30000;

  // Candidatos
  const [bolsonaro, setBolsonaro] = useState({ vap: '0', pvap: '0' });
  const [lula, setLula] = useState({ vap: '0', pvap: '0' });
  // Informações
  const [info, setInfo] = useState({
    when: 0,
    apu: 0,
    votos: 0,
    ben: 0,
  });
  const [reqTime, setReqTime] = useState(new Date());
  // Controle
  const [timer, setTimer] = useState(true);

  const fetchData = async () => {
    const URL = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json';

    const data = await fetch(URL);
    const request = await data.json();
    const { cand } = request;

    const lulaIndex = cand.findIndex(({ nm }) => nm === 'LULA');
    const lulaData = {
      vap: request.cand[lulaIndex].vap,
      pvap: request.cand[lulaIndex].pvap,
    };

    const bolsonaroIndex = cand.findIndex(({ nm }) => nm === 'JAIR BOLSONARO');
    const bolsonaroData = {
      vap: request.cand[bolsonaroIndex].vap,
      pvap: request.cand[bolsonaroIndex].pvap,
    };

    setBolsonaro(bolsonaroData);
    setLula(lulaData);
    setInfo({
      when: request.hg,
      apu: request.pst,
      votos: request.vv,
      branco: request.pvb,
      nulo: request.ptvn,
    });
    setReqTime(new Date());
  };

  useEffect(() => {
    setInterval(() => {
      setTimer(!timer);
    }, THIRTY_SEC);
  }, []);

  useEffect(() => {
    const fetcher = async () => {
      await fetchData();
    };
    fetcher();
  }, [timer]);

  return (
    <div className="politics">
      <PoliticCard
        name="Bolsonaro"
        data={ bolsonaro }
      />
      <PoliticCard
        name="Lula"
        data={ lula }
      />
      <Data info={ info } time={ reqTime } />
    </div>
  );
}

export default Body;
