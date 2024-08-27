import './App.css';

function App() {
  const name = 'Vanessa'
  const newName = name.toLocaleUpperCase()

  function soma(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  return (
    <div className = "App">
      <h1>Olá react</h1>
      <p>teste</p>
      <p>Olá,{newName}</p>
      <p>Soma: {soma(1, 2)}</p>
      <img scr= {url} alt = 'minha imagem'></img>
    </div>
  )

}
export default App;
