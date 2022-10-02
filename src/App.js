import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(true);
  const [bolsonaro, setBolsonaro] = useState({ vap: 0, pvap: 0 });
  const [lula, setLula] = useState({ vap: 0, pvap: 0 });
  const [when, setWhen] = useState(0);
  const [apu, setApu] = useState(0);
  const [reqTime, setReqTime] = useState(new Date())

  const fetchData = async () => {
    const URL = 'https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json';
    const data = await fetch(URL);
    const request = await data.json();
    const { cand } = request;
    let lulaIndex = cand.findIndex(({ nm }) => nm === 'LULA');
    let bolsonaroIndex = cand.findIndex(({ nm }) => nm === 'JAIR BOLSONARO');
    const bolsonaro = {
      vap: request.cand[bolsonaroIndex].vap,
      pvap: request.cand[bolsonaroIndex].pvap,
    };
    const lula = {
      vap: request.cand[lulaIndex].vap,
      pvap: request.cand[lulaIndex].pvap,
    }
    setBolsonaro(bolsonaro);
    setLula(lula);
    setWhen(request.hg);
    setApu(request.pst);
    setReqTime(new Date())
  }

  useEffect(() => {
    setInterval(() => {
      setTimer(!timer)
    }, 60000)
  }, []);

  useEffect(() => {
    const fetcher = async () => {
      await fetchData();
    }
    fetcher();
  }, [timer]);

  const setToNumber = (value) => {
    return Number(value).toLocaleString('pt-BR');
  }

  const difference = bolsonaro.vap - lula.vap;

  return (
    <div className="App">
      <header className="header">
        BOLSONARO OU LULA?
      </header>
        <table>
          <thead>
            <tr>
              <th>
                Candadito
              </th>
              <th>
                Votos válidos
              </th>
              <th>
                Percentual total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Bolsonaro
              </td>
              <td>
                { setToNumber(bolsonaro.vap) }
              </td>
              <td>
                { `${bolsonaro.pvap}%`}
              </td>
            </tr>
            <tr>
              <td>
                Lula
              </td>
              <td>
                { setToNumber(lula.vap) }
              </td>
              <td>
                { `${lula.pvap}%` }
              </td>
            </tr>
            <tr>
              <td>
                -
              </td>
              <td>
                -
              </td>
              <td>
                -
              </td>
            </tr>
            <tr>
              <td>
                Diferenças
              </td>
              <td>
                { setToNumber(difference) }
              </td>
              <td>
              {`${(difference / bolsonaro.vap * 100).toFixed(2)}%`}
              </td>
            </tr>
          </tbody>
        </table>
      <p>
        {`Horário da última informação: ${when}`}
        <br/>
        {`Percentual de apuração: ${apu}%`}
        <br/>
        {`Horário da última requisição ao servidor: ${reqTime.getHours()}:${reqTime.getMinutes().toLocaleString('pt-BR', { minimumIntegerDigits: 2})}:${reqTime.getSeconds().toLocaleString('pt-BR', { minimumIntegerDigits: 2})}`}
      </p>
      <footer className="footer">
        Made by GuillePinho
      </footer>
    </div>
  );
}

export default App;
