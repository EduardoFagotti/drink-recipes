import { Content } from "./styles";

import Img1 from "../../images/Coffee-especiarias.jpg";
import Img2 from "../../images/café-passado-a-frio.jpg";
import Img3 from "../../images/bulletproof.webp";
import Img4 from "../../images/cafe-com-leite-condensado.jpg";
import Img5 from "../../images/café-com-paçoca.jpg";
import Img6 from "../../images/Cafe-Mocha.jpg";
function Card() {
  return (
    <Content>
      <ul>
        <li>
          <img src={Img1} alt="Café com especiarias"></img>
          <div>
            <h1> Café com especiarias </h1>
            <p>
              Adicionar especiarias ao café deixa tudo ainda mais saboroso.
              Experimente canela ou gengibre, por exemplo, que além de darem
              sabor, trazem benefícios para a saúde, pois são termogênicos. O
              gengibre pode ser ralado e acrescentado ao pó antes de filtrar o
              café.
            </p>
          </div>
        </li>
        <li>
          <img src={Img2} alt="Café passado a frio"></img>
          <div>
            <h1> Café passado a frio </h1>
            <p>
              O chamado cold brew é famoso nos Estados Unidos e fica delicioso!
              Você pode preparar e guardar na geladeira, dura até uma semana. A
              receita leva apenas café moído e água. Para servir, adicione leite
              ou extrato de baunilha conforme sua preferência.
            </p>
          </div>
        </li>
        <li>
          <img src={Img3} alt="Bulletproof"></img>
          <div>
            <h1> Bulletproof </h1>
            <p>
              Já pensou em tomar seu cafezinho e ainda ficar em forma? Pois essa
              é a promessa do “café à prova de balas”. Essa versão é o café
              filtrado com óleo de coco e manteiga, baseado em uma dieta com o
              consumo de gorduras saudáveis.
            </p>
          </div>
        </li>
        <li>
          <img src={Img4} alt="Café com leite condensado e cravo"></img>
          <div>
            <h1> Café com leite condensado e cravo </h1>
            <p>
              essa receita é para adoçar e esquentar aqueles dias mais frios.
              Além do leite condensado, o cravo também dá aquele ar “encorpado”
              para o seu café.
            </p>
          </div>
        </li>
        <li>
          <img src={Img5} alt="Café com paçoca e cacau em pó"></img>
          <div>
            <h1> Café com paçoca e cacau em pó </h1>
            <p>
              Um café delicioso e com ingredientes saudáveis, já que não leva
              açúcar. O segredo para ficar cremoso é bater alguns ingredientes,
              como mostra o vídeo, e acrescentar paçoquinha moída no final.
            </p>
          </div>
        </li>
        <li>
          <img src={Img6} alt="Café Mocha"></img>
          <div>
            <h1> Café Mocha </h1>
            <p>
              essa variação do capuccino leva expresso, leite e chocolate. Você
              pode utilizar o expresso da sua máquina de café e apenas
              acrescentar leite e chocolate derretido. Simples e delicioso!
            </p>
          </div>
        </li>
      </ul>
    </Content>
  );
}

export default Card;
