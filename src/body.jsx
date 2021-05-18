import React from 'react';
import './App.css';

function body() {
  return <div className="body">
     <div className="form-group">
         <div className="form">
             <input type="text" placeholder="Email ou Telefone" />
             <input type="text" placeholder="Senha" />
             <button id="butao">Entrar</button>
             <small>Esqueceu a senha?</small>
         </div>
            <hr />
         <footer className="footer">
             <button >Criar nova conta</button>
         </footer>

     </div>

      <div className="rodape">
         <p><strong>Criar uma Página</strong> para uma celebridade, banda ou empresa.</p>
     </div>     
  </div>;
}
export default body;
