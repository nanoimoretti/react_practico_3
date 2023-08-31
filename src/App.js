import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Tareas Pendientes de Hedy Lamarr</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         class="photo"
//       >
//       <ul>
//         <li>Inventar nuevo semáforo
//         <li>Ensayar la escena de la película
//         <li>Mejorar la tecnología del espectro
//       </ul>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hola Mundo con React.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Tareas Pendientes de Hedy Lamarr</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
      <ul>
        <li>Inventar nuevo semáforo</li>
        <li>Ensayar la escena de la película</li>
        <li>Mejorar la tecnología del espectro</li>
      </ul>
      </header>
    </div>
  );
}

export default App;
