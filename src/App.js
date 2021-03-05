import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([])

  async function handleAddRepository() {
    // TODO
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
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
