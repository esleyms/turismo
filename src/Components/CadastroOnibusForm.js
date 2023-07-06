import React, { useState } from 'react';
import './CadastroOnibusForm.css';
import Button from '@mui/material/Button';
import axios from 'axios';
import tituloImage from '../Img/titulo.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CadastroOnibusForm() {
  const [placa, setPlaca] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [chassi, setChassi] = useState('');
  const [modelo, setModelo] = useState('');
  const [renavan, setRenavan] = useState('');
  const [marca, setMarca] = useState('');
  const [dataCompraSelecionada, setDataCompraSelecionada] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [mensagemCor, setMensagemCor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (placa && quilometragem && anoFabricacao && chassi && modelo && renavan && marca && dataCompraSelecionada) {
      try {
        const dataFormatada = dataCompraSelecionada.toLocaleDateString('pt-BR');

        const response = await axios.post('http://localhost:3000/api/cadastro-onibus', {
          placa,
          quilometragem,
          anoFabricacao,
          chassi,
          modelo,
          renavan,
          marca,
          dataCompra: dataFormatada,
        });

        if (response.status === 200) {
          setMensagem('Cadastro Efetuado com Sucesso.');
          setMensagemCor('success');
          limparCampos();
        } else {
          setMensagem('Erro ao cadastrar. Por favor, tente novamente.');
          setMensagemCor('error');
        }
      } catch (error) {
        setMensagem('Erro ao cadastrar. Por favor, tente novamente.');
        setMensagemCor('error');
        console.log(error);
      }
    } else {
      setMensagem('Por favor, preencha todos os campos.');
      setMensagemCor('error');
    }
  };

  const limparCampos = () => {
    setPlaca('');
    setQuilometragem('');
    setAnoFabricacao('');
    setChassi('');
    setModelo('');
    setRenavan('');
    setMarca('');
    setDataCompraSelecionada(null);
  };

  return (
    <div className="page-wrapper">
      <div className="form-wrapper">
        <div className="titulo" style={{ backgroundImage: `url(${tituloImage})` }}>
          Cadastro de Ônibus
          <div className="barra-vertical"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Informações do Ônibus</legend>

            <table className="table-form">
              <tbody>
                <tr>
                  <td className="label label-left">
                    
                  </td>
                  <td className="input-wrapper">
                  <label htmlFor="renavan"className='label'>Renavan</label>
                    <input
                      type="text"
                      id="renavan"
                      value={renavan}
                      onChange={(e) => setRenavan(e.target.value)}
                      placeholder="Digite o Renavan"
                    />
                  </td>
                  <td className="label label-left">
                    
                  </td>
                  <td className="input-wrapper">
                  <label htmlFor="chassi"className='label'>Chassi</label>
                    <input
                      type="text"
                      id="chassi"
                      value={chassi}
                      onChange={(e) => setChassi(e.target.value)}
                      placeholder="Digite o Chassi"
                    />
                  </td>
                  <td className="label label-left">
                    
                    </td>
                    <td className="input-wrapper">
                    <label htmlFor="marca"className='label'>Marca</label>
                      <input
                        type="text"
                        id="marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        placeholder="Digite a Marca"
                      />
                    </td>
                    <td className="label label-left">
                    
                    </td>
                    <td className="input-wrapper">
                    <label htmlFor="modelo"className='label'>Modelo</label>
                      <input
                        type="text"
                        id="modelo"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        placeholder="Digite o Modelo"
                      />
                    </td>


                </tr>
                <tr>
                  
                  
                </tr>
                <tr>
                  <td className="label label-left">
                    
                  </td>
                  <td className="input-wrapper">
                  <label htmlFor="anoFabricacao" className='label'>Ano de Fabricação</label>
                    <input
                      type="text"
                      id="anoFabricacao"
                      value={anoFabricacao}
                      onChange={(e) => setAnoFabricacao(e.target.value)}
                      placeholder="Digite o Ano de Fabricação"
                    />
                  </td>
                  <td className="label label-left">
                    
                  </td>
                  <td className="input-wrapper">
                  <label htmlFor="placa"className='label'>Placa</label>
                    <input
                      type="text"
                      id="placa"
                      value={placa}
                      onChange={(e) => setPlaca(e.target.value)}
                      placeholder="Digite a Placa"
                    />
                  </td>

                  <td className="label label-left">
                    
                  </td>
                  <td className="input-wrapper">
                  <label htmlFor="quilometragem"className='label'>Quilometragem</label>
                    <input
                      type="text"
                      id="quilometragem"
                      value={quilometragem}
                      onChange={(e) => setQuilometragem(e.target.value)}
                      placeholder="Digite a Quilometragem"
                    />
                  </td>
                  <td className="label label-left">
                    
                    </td>
                    <td className="input-wrapper">
                    <label htmlFor="dataCompra"className='label'>Data da Compra</label>
                      <DatePicker
                        id="dataCompra"
                        selected={dataCompraSelecionada}
                        onChange={(date) => setDataCompraSelecionada(date)}
                        placeholderText="Selecione a Data da Compra"
                        dateFormat="dd/MM/yyyy"
                      />
                    </td>


                </tr>
                
                  
                  
            
              </tbody>
            </table>
          </fieldset>
        
          <div className="button-wrapper">
            <Button type="submit" variant="contained" color="primary" className="button">
              Cadastrar
            </Button>
          </div>
        
        </form>

        {mensagem && <p className={`mensagem ${mensagemCor === 'error' ? 'error' : ''}`}>{mensagem}</p>}
      </div>
    </div>
  );
}

export default CadastroOnibusForm;












