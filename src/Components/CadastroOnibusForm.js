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
/*
  const listaMarca = popularListaMarca();
  const listaModelos = popularListaModelo();
  const listModeloFiltrado = [];
  */

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
                  <label htmlFor="renavan"className='label'>Renavan *</label>
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
                  <label htmlFor="chassi"className='label'>Chassi *</label>
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
                    <label htmlFor="marca"className='label'>Marca *</label>
                      <input
                        type="text"
                        id="marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value) }
                        placeholder="Digite a Marca"
                      />
                    </td>
                    <td className="label label-left">
                    
                    </td>
                    <td className="input-wrapper">
                    <label htmlFor="modelo"className='label'>Modelo</label>
                      <input
                        type="text"
                        id="Modelo"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value) }
                        placeholder="Digite a Modelo"
                      />
                    </td>


                </tr>
                <tr>
                </tr>
                <tr>
                  <td className="label label-left">
                    
                  </td>
                  <td className="input-wrapper">
                  <label htmlFor="anoFabricacao" className='label'>Ano de Fabricação *</label>
                    <input
                      type="text"
                      id="anoFabricacao"
                      maxLength={4}
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
        
        
        </form>

        <div className="button-wrapper">
        <div className="button-wrapper">
  <Button
    type="button"
    variant="contained"
    color="primary"
    className="button"
    onClick={limparCampos} // Adiciona o evento onClick para chamar a função limparCampos
  >
    Cadastrar
  </Button>
</div>

</div>


        {mensagem && <p className={`mensagem ${mensagemCor === 'error' ? 'error' : ''}`}>{mensagem}</p>}
      </div>
    </div>
  );
}
/*
function popularListaMarca() {
  const lista = [
    {
      id: "1",
      marca: "Mercedes-Benz",
    },
    {
      id: "2",
      marca: "Volvo",
    },
    {
      id: "3",
      marca: "MAN",
    },
    {
      id: "4",
      marca: "Scania",
    },
    {
      id: "5",
      marca: "Iveco",
    },
    {
      id: "6",
      marca: "Neoplan",
    },
    {
      id: "7",
      marca: "Marcopolo",
    },
    {
      id: "8",
      marca: "Van Hool",
    },
    {
      id: "9",
      marca: "DAF",
    },
    {
      id: "10",
      marca: "Solaris",
    },
    {
      id: "11",
      marca: "Setra",
    },
    {
      id: "12",
      marca: "Temsa",
    },
    {
      id: "13",
      marca: "Higer",
    },
    {
      id: "14",
      marca: "Yutong",
    },
    {
      id: "15",
      marca: "Zhongtong",
    },
    {
      id: "16",
      marca: "King Long",
    },
    {
      id: "17",
      marca: "Hyundai",
    },
    {
      id: "18",
      marca: "Tata Motors",
    },
    {
      id: "19",
      marca: "Ashok Leyland",
    },
    {
      id: "20",
      marca: "MCI (Motor Coach Industries)",
    },
    {
      id: "21",
      marca: "Blue Bird",
    },
    {
      id: "22",
      marca: "Prevost",
    },
    {
      id: "23",
      marca: "Gillig",
    },
    {
      id: "24",
      marca: "New Flyer",
    },
    {
      id: "25",
      marca: "Alexander Dennis",
    },
    {
      id: "26",
      marca: "Optare",
    },
    {
      id: "27",
      marca: "VDL",
    },
    {
      id: "28",
      marca: "Wrightbus",
    },
    {
      id: "29",
      marca: "BYD",
    },
    {
      id: "30",
      marca: "JAC Motors",
    }
  ];
  return lista;
}

function popularListaModelo() {
  const list = [
    {
      id: "1",
      modelo: "O 500",
      idMarca: "1"
    },
    {
      id: "2",
      modelo: "O 400",
      idMarca: "1"
    },
    {
      id: "3",
      modelo: "O 371",
      idMarca: "1"
    },
    {
      id: "4",
      modelo: "O 321",
      idMarca: "1"
    },
    {
      id: "5",
      modelo: "O 302",
      idMarca: "1"
    },
  ];
  return list;
}

function popularModelo(idMarca) {
  const lista = [];

  for(const i = 0; i < this.listaModelos; i++) {
    if(this.listaModelos[i].idMarca === idMarca) {
      lista.push(lista[i]);
    }
  }
  this.listModeloFiltrado = lista;
}
*/

export default CadastroOnibusForm;