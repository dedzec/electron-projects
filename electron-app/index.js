const electron = require('electron');
 
// Módulo utilizado para controlar o ciclo de vida da aplicação
const app = electron.app;
 
// Módulo para criar uma janela nativa do seu sistema operacional 
const BrowserWindow = electron.BrowserWindow;
 
// ATENÇÃO: Se não existir uma referência global para a janela da aplicação,
// ela será fechada automaticamente quando o objeto for pego pelo Garbage Collector
let mainWindow;

// Sai quando todas as janelas estão fechadas.
app.on('window-all-closed', () => {
    // No OS X, é comum para aplicativos e sua barra de menu
    // para permanecer ativo até que o usuário saia explicitamente com Cmd + Q
    if (process.platform != 'darwin') {
      app.quit();
    }
  });

app.on('ready', () => {
 
    // Uma das opções que é possível definir ao criar uma janela, é o seu tamanho
    mainWindow = new BrowserWindow({width: 800, height: 600});
 
    // Depois apontamos a janela para o HTML que criamos anteriormente
    mainWindow.loadURL('file://' + __dirname + '/index.html');
 
    // Escutamos para quando a janela for fechada
    mainWindow.on('closed', function() {
        // Remove a referência que criamos no começo do arquivo
        mainWindow = null
    });
});