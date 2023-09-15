import './App.css';
import OutraLista from './components/OutraLista';

function App() {
  const meusItens = ['React', 'Angular', 'Vue']


  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista Itens={meusItens} />


    </div>
  )
}

export default App;
