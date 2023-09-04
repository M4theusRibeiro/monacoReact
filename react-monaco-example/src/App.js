import Monaco from '@monaco-editor/react';
import { useState, useRef, useEffect } from 'react';
import { definirTema } from './meuTema'; // Importe o arquivo do seu tema aqui

function App() {
  const [conteudoMonaco, setConteudoMonaco] = useState('function exercicio(){\n//Teste\n}');
  const editorRef = useRef(null);

  const handleEditorOldMout = (editor, monaco) => {
    editorRef.current = editor;
  }

  const handleSave = () => {
    console.log(editorRef.current.getValue())
  }

  function handleEditorValidation(markers) {
    // model markers
    markers.forEach((marker) => console.log('onValidate:', marker.message));
  }

  return (
    <div>
      <button onClick={handleSave}>Salvar</button>
      <select >
        <option value = 'vs'>1</option>
        <option value = 'meu-tema' onChange={definirTema()}>2</option>
        <option value = 'vs'>3</option>
      </select>
      <Monaco
        height='90vh'
        theme='meu-tema'
        defaultLanguage='javascript'
        value={conteudoMonaco}
        onChange={(textoDigitado) => setConteudoMonaco(textoDigitado)}
        onMount={handleEditorOldMout}
        onValidate={handleEditorValidation}
      />
    </div>
  );
}

export default App;
