import React from 'react';
import './App.css'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'cep',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'rua',
    type: 'text'
  },
  {
    id: 'numero',
    label: 'numero',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'bairro',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'estado',
    type: 'text'
  },
]


const App = () => {

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(form),
    }).then(response => {
      setResponse(response);
    })
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }  

  return (
    <div className="App">
      
      <form onSubmit={handleSubmit}>

        {formFields.map(field => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label> <br/>
            <input
              type={field.type}
              id={field.id}
              value={form[field.id]}
              onChange={handleChange}
            /> <br/> <br/>
          </div>
        ))}
        {response && response.ok && <p>Formulário enviado</p>}
        <button>Enviar</button>
      </form>

    </div>
  );
}

export default App;
