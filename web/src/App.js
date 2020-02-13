import React, { useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
          </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
        <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/12644707?v=4" alt="Helton"/>
                <div className="user-info">
                  <strong>Helton</strong>
                  <span>React, React Native</span>
                  <p>Dev na advise</p>
                  <a href="https://github.com/helton-mori-dev">Acessar perfil do github</a>
                </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/12644707?v=4" alt="Helton"/>
                <div className="user-info">
                  <strong>Helton</strong>
                  <span>React, React Native</span>
                  <p>Dev na advise</p>
                  <a href="https://github.com/helton-mori-dev">Acessar perfil do github</a>
                </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/12644707?v=4" alt="Helton"/>
                <div className="user-info">
                  <strong>Helton</strong>
                  <span>React, React Native</span>
                  <p>Dev na advise</p>
                  <a href="https://github.com/helton-mori-dev">Acessar perfil do github</a>
                </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/12644707?v=4" alt="Helton"/>
                <div className="user-info">
                  <strong>Helton</strong>
                  <span>React, React Native</span>
                  <p>Dev na advise</p>
                  <a href="https://github.com/helton-mori-dev">Acessar perfil do github</a>
                </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
