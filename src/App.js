import React, {useState, useEffect} from 'react';
import api from './services/api';

import './styles.css';

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    });
  }, []);  

  async function handleAddRepository() {
    const repoFakeData = {
        "title": "ReactJS",
        "url": "https://github.com/Andersoonalves",
        "techs": ["Nodejs", "AngularJs"]
    };
    const response = await api.post('repositories', repoFakeData);

    setRepositories([...repositories, response.data]);
    
  }

  async function handleRemoveRepository(id) {
    
    // TODO

  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(rep => 
          <li key={rep.id}>
            {rep.title}
            <button onClick={() => handleRemoveRepository(rep.id)}>
              Remover
            </button>
          </li> )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
