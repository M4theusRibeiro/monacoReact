import Monaco, { useMonaco } from '@monaco-editor/react';
import { useState, useRef, useEffect } from 'react';
import "monaco-themes/themes/Monokai Bright.json";
import Amy from './themes/Amy.json';
import MonokaiBrightTheme from './themes/Monokai Bright.json';
import Monokai from './themes/Monokai.json';
import './monaco.css';

function MonacoEditor() {
  const monaco = useMonaco();
  const [conteudoMonaco, setConteudoMonaco] = useState(`function exercicio(){\n    for(var i = 0; i < 10; i++){\n        console.log('MAt')\n    }\n}`);
  const [theme, setTheme] = useState('vs-dark'); // Initialize with vs-dark theme
  const [errorMessages, setErrorMessages] = useState([]);


  const editorRef = useRef(null);

  const handleSave = () => {
    //Salvar no banco assim
    console.log(editorRef.current.getValue())
  }

  const handleEditorOldMout = (editor, monaco) => {
    editorRef.current = editor;
  }

  function handleEditorValidation(markers) {
    // Filtra apenas os marcadores de erro
    const errorMarkers = markers.filter((marker) => marker.severity === monaco.MarkerSeverity.Error);

    // Obtém as mensagens de erro dos marcadores
    const errorMessages = errorMarkers.map((marker) => marker.message);

    // Atualiza o estado com as mensagens de erro
    setErrorMessages(errorMessages);
  }

  function validar(){
    console.log("AA")
    var conteudo = editorRef.current.getValue(); 
    conteudo = conteudo.replace("function exercicio(){", "");
    conteudo = conteudo.replace("}", "");
    console.log(conteudo)
    eval(conteudo);
    var monaco = document.getElementById("console");
    monaco.innerHTML +="Asssssssss"
  }

  

  const listaTemas = ['vs', 'vs-dark', 'hc-black', Amy, MonokaiBrightTheme, Monokai]
  const handleThemeChange = (event) => {
    if (event.target.value == 0) {
      monaco.editor.setTheme('vs');

    } else if (event.target.value == 1) {
      monaco.editor.setTheme('vs-dark');

    } else if (event.target.value == 2) {
      monaco.editor.setTheme('hc-black');

    } else {
      monaco.editor.defineTheme('meu-tema', listaTemas[event.target.value]);
      monaco.editor.setTheme('meu-tema');
    }

  };

  return (
    <div>
      <select id='selectTemas' onChange={handleThemeChange} >
        <option value='0'>Visual Studio</option>
        <option value='1'>Visual Studio Dark</option>
        <option value='2'>High Contrast Black</option>
        <option value='3'>Amy</option>
        <option value='4'>MonokaiBrightTheme</option>
        <option value='5'>Monokai</option>
      </select>
      <span className='monacoContainer'>

        <div className='monaco'>
          <Monaco
            height='100vh'
            width='50vw'
            theme={theme}
            defaultLanguage='javascript'
            value={conteudoMonaco}
            onChange={(textoDigitado) => setConteudoMonaco(textoDigitado)}
            onMount={handleEditorOldMout}
            onValidate={handleEditorValidation}
          />
        </div>

        <div id='console' className='console'>
        <button className='botao' onClick={validar}>Verificar</button>
        <button className='botao' onClick={handleSave}>Salvar</button>
      {/* Exibe mensagens de erro */}
      {errorMessages.length > 0 && (
        <div>
          <h2>Mensagens de Erro:</h2>
          <ul>
            {errorMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      )}
        </div>
      </span>




    </div>
  )
}

export default MonacoEditor;
