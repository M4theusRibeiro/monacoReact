import React, { useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import "monaco-themes/themes/Monokai Bright.json";

function App() {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log("Aqui está a instância do Monaco:", monaco);
      
      // Carregue o tema Monokai Bright
      import('monaco-themes/themes/Monokai Bright.json').then(data => {
        monaco.editor.defineTheme('monokai-bright', data);
        monaco.editor.setTheme('monokai-bright');
      });
    }
  }, [monaco]);

  return (
    <div className="App">
      <Editor
        theme="monokai-bright"
        language="javascript"
        value=""
        height="500px"
        options={{
          automaticLayout: true,
        }}
      />
    </div>
  );
}

export default App;