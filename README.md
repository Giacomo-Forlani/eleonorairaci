# Vite + React

Struttura base per un progetto React con Vite, hot reload e configurazione ESLint pronta.

## Requisiti

- Node.js installato
- npm (incluso con Node.js)

## A cosa serve Vite

Vite e il tool di sviluppo: avvia il server dev con HMR, gestisce l'import dei moduli e costruisce la build di produzione ottimizzata.

## A cosa serve ESLint

ESLint controlla il codice per individuare errori, problemi di stile e potenziali bug. Aiuta a mantenere una base di codice coerente.

## Installazione dipendenze

```bash
npm install
```

## Avvio in modalita dev

```bash
npm run dev
```

Avvia il server di sviluppo con HMR. L'URL viene mostrata in console.

## Build di produzione

```bash
npm run build
```

Compila il progetto nella cartella `dist`.

## Preview della build

```bash
npm run preview
```

Esegue un server locale che serve la build da `dist`.

## Lint con ESLint

```bash
npm run lint
```

Esegue ESLint su tutto il progetto.

## Struttura essenziale

- `index.html`: entry HTML principale per Vite
- `src/main.jsx`: bootstrap dell'app React
- `src/App.jsx`: componente principale
- `public/`: asset statici
- `vite.config.js`: configurazione Vite
- `eslint.config.js`: regole ESLint

## Albero dei file

```
app
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```
