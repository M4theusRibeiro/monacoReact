import * as monaco from 'monaco-editor';

export function definirTema() {
  console.log("oi")
  monaco.editor.defineTheme('meu-tema', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      // Comentários em azul e itálico
      { token: 'comment', foreground: '#0000FF', fontStyle: 'italic' },
      // Palavras-chave em verde
      { token: 'keyword', foreground: '#008000' },
      // Strings em laranja
      { token: 'string', foreground: '#FFA500' },
      // Números em roxo
      { token: 'number', foreground: '#800080' },
      // Variáveis e Identificadores em amarelo
      { token: 'variable', foreground: '#FFFF00' },
      // Operadores em vermelho
      { token: 'operator', foreground: '#FF0000' },
      // Funções em ciano
      { token: 'function', foreground: '#00FFFF' },
      // Constantes em rosa
      { token: 'constant', foreground: '#FF1493' },
    ],
    colors: {
      'editor.background': '#2E2E2E', // Fundo escuro
      'editor.foreground': '#FFFFFF', // Texto em branco
      'editor.selectionBackground': '#008080', // Fundo da seleção em verde escuro
    },
  });
}
