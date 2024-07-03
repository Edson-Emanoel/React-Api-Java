import "./App.css"
import axios from "axios";
import { useEffect, useState } from "react"

function App() {

  const url = "http://localhost:8080/api/alunos"

  const [id, setId] = useState("");
  const [nome, setNome] = useState("")
  const [serie, setSerie] = useState("")
  const [sexo, setSexo] = useState("")

  const [classInserir, setClassInserir] = useState("")
  const [classAlterar, setClassAlterar] = useState("sumir")
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url  + "/todos")
        .then(res => setData(res.data))
  }, [data, setData])

  const Inserir = () => {
    axios.post(url + "/cadastrar", {
      nome,
      serie,
      sexo
    })
  }

  const Cadastrar = (e) => {
    e.preventDefault()

    if(nome === ""){
      alert("Preencha o campo de Nome do Aluno")
    } else if (serie === ""){
      alert("Preencha o campo de Serie do Aluno")
    } else if (sexo === ""){
      alert("Preencha o campo de Sexo do Aluno")
    } else {
      alert("Aluno cadastrado com Sucesso!")
      Inserir()
      setNome('')
      setSerie('')
      setSexo('')
    }
  }

  return (
    <div className="container">
      
      <h1 className="mt-5 mb-5 text-center">Cadastro de Produtos</h1>

      <form className="mb-5" onSubmit={Cadastrar}>
        <div className="row mb-3">
          <div className="col">
            <input 
              type="text"
              value={nome}
              placeholder="Nome do Aluno"
              className="form-control"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="col">
            <input 
              type="text"
              value={serie}
              placeholder="Serie do Aluno"
              className="form-control"
              onChange={(e) => setSerie(e.target.value)}
            />
          </div>
          <div className="col">
            <input 
              type="text"
              value={sexo}
              placeholder="Sexo do Aluno. Obs: use M e F"
              className="form-control"
              onChange={(e) => setSexo(e.target.value)}
            />
          </div>
        </div>

        <button className={`btn btn-success ${classInserir}`}>Inserir</button>
        <button className={`btn btn-primary ${classAlterar}`}>Salvar</button>
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
                  <button className="btn btn-warning">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="btn btn-danger">
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
