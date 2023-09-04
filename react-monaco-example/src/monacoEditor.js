import Monaco from '@monaco-editor/react'
import { React, useState, useRef } from 'react';

const[conteudoMonaco,setConteudoMonaco] = useState('function exercicio(){\n//Teste\n}')
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

  const Editor = () => {
    <Monaco
    height='90vh'
    theme='vs'
    defaultLanguage='javascript'
    value = {conteudoMonaco}
    onChange={(textoDigitado => setConteudoMonaco(textoDigitado))}
    onMount={handleEditorOldMout}
    onValidate={handleEditorValidation}
   />
  }
export default Editor;
