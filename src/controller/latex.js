import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

function App() {
  const latexString = "E = mc^2"; // Yahan apna LaTeX formula likho

  return (
    <div>
      <h2>LaTeX Rendered Output:</h2>
      <Latex>{`$${latexString}$`}</Latex>
    </div>
  );
}

export default App;