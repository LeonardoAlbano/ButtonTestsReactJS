// Importando o componente "Container" de um arquivo chamado "style"
import { Container } from "./style";

// Importando o componente "Button" do diretório "../../components/Button"
import { Button } from "../../components/Button";

// Definindo um componente funcional chamado "Details"
export function Details() {
  
  // Retornando JSX, que é uma extensão de sintaxe para JavaScript recomendada pelo React
  return (
    // Renderizando o componente "Container"
    <Container>
      {/* Renderizando um elemento h1 (título) com o texto "Salve familia, uma boa" */}
      <h1>Salve familia, uma boa</h1>

      {/* Renderizando um elemento p (parágrafo) com o texto "SALVEADO MEU TRUTA" */}
      <p>SALVEADO MEU TRUTA</p>

      {/* Renderizando três botões usando o componente "Button" */}
      {/* 
        1. Botão com título "Entrar" e propriedade "loading" definida como true.
        2. Botão com título "Salve" e nenhum estado de "loading" (valor padrão é false).
        3. Botão com título "Comprar" e nenhum estado de "loading".
        4. Botão com título numérico "10".
      */}
      <Button title="Entrar" loading />
      <Button title="Salve"/>
      <Button title="Comprar"/>
      <Button title={10}/>
    </Container>
  );
}
