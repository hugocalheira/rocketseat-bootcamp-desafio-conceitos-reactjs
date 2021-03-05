import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([])

  async function handleAddRepository() {
    const repository = {
      title: `Projeto ${Date.now()}`,
      techs: ['React','Python','ActionScript 3'],
      owner: 'Hugo'
    }
    const response = await api.post('/repositories', repository)
    setRepositories([ ...repositories, response.data])
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  async function getRepositories() {
    try {
      const response = await api.get('/repositories')
      if (response.status === 200) {
        setRepositories(response.data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getRepositories()
  },[])

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
