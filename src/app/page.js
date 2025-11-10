"use client";
import { useState } from "react";
import estilos from "./page.module.css";

export default function Home() {
  const [corDeFundo, setCorDeFundo] = useState(estilos.bg_vermelho);

  function alterarEstilo() {
    setCorDeFundo(estilos.bg_azul);
  }

  return (
    <main className={estilos.main}>
      <div className={estilos.container}>
        <h2>Alterando o estilo do elemento</h2>
        <div className={corDeFundo}></div>
        <p>Clique no botão para alterar o estilo</p>
        <button onClick={alterarEstilo}>Alterar</button>
      </div>
    </main>
  );
}
