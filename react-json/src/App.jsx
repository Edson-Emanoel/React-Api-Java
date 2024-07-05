import "./App.css"
import axios from "axios";
import { useEffect, useState } from "react"

function App() {

  const url = "http://localhost:8080/api/alunos"

  const [idState, setIdState] = useState()

  const [nomeState, setNomeState] = useState("")
  const [serieState, setSerieState] = useState("")
  const [sexoState, setSexoState] = useState("")

  const [classInserir, setClassInserir] = useState("")
  const [classAlterar, setClassAlterar] = useState("sumir")
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get(url  + "/todos")
    .then(res => setData(res.data))
  }, [data, setData])

  const Inserir = () => {
    axios.post(url + "/cadastrar", {
      nomeState,
      serieState,
      sexoState
    })
  }

  const Cadastrar = (e) => {
    e.preventDefault()

    if(nomeState === ""){
      alert("Preencha o campo de NomeState do Aluno")
    } else if (serieState === ""){
      alert("Preencha o campo de SerieState do Aluno")
    } else if (sexoState === ""){
      alert("Preencha o campo de SexoState do Aluno")
    } else {
      alert("Aluno cadastrado com Sucesso!")
      Inserir()
      setNomeState('')
      setSerieState('')
      setSexoState('')
    }
  }

  const Carregar = (id, nome, serie, sexo) => {

    setClassInserir("sumir")
    setClassAlterar("")

    setIdState(id)
    setNomeState(nome)
    setSerieState(serie)
    setSexoState(sexo)
  }

  const Editar = (e) => {  
    e.preventDefault()

    axios.put( `${url}/alterar/${idState}`, {
      nomeState,
      
    })
    .then( () => {
      alert("Alterado com sucesso " + nome)
      setNomeState(''), setIdState('');

      setClassBtnInserir('')
          setClassBtnAlterar('sumir')
      }
    )
  .catch( (error) => {
      console.log('erro: ' + error)
  })

  }

  const Remover = (id) => {
    axios.delete(`${url}/remover/${id}`)
  }

  return (
    <div className="container">
      
      <h1 className="mt-5 mb-5 text-center">Cadastro de Produtos</h1>

      <form className="mb-5">
        <div className="row mb-3">
          <div className="col">
            <input 
              type="text"
              value={nomeState}
              placeholder="Nome do Aluno"
              className="form-control nome"
              onChange={(e) => setNomeState(e.target.value)}
            />
          </div>
          <div className="col">
            <input 
              type="text"
              value={serieState}
              placeholder="Serie do Aluno"
              className="form-control serie"
              onChange={(e) => setSerieState(e.target.value)}
            />
          </div>
          <div className="col">
            <input 
              type="text"
              value={sexoState}
              placeholder="Sexo do Aluno. Obs: use M e F"
              className="form-control sexo"
              onChange={(e) => setSexoState(e.target.value)}
            />
          </div>
        </div>

        <button className={`btn btn-success ${classInserir}`} onClick={() => Cadastrar}>Inserir</button>
        <button className={`btn btn-primary ${classAlterar}`} onClick={() => Editar}>Salvar</button>
      </form>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome do Aluno</th>
            <th scope="col">Serie</th>
            <th scope="col">Sexo</th>
            <th scope="col text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td scope="row">{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.serie}</td>
              <td>{item.sexo}</td>
              <td>
                <div className="btn-group d-flex gap-3">
                  <button className="btn btn-warning" onClick={() => Carregar( item.id, item.nome, item.serie, item.sexo)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn btn-danger" onClick={() => Remover(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App
