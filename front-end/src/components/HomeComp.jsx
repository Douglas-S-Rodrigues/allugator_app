import React from "react";
import waves from "../images/green_waves.d3509b5b.png";
import smile from "../images/smile_woman.71fa85e6.png";
import check from "../images/okIcon.png";
import { Link } from "react-router-dom";
import titleBlue from "../images/titleBlue.png";
import "../styles/components/HomeComp.css";

export default function HomeComp() {
  return (
    <div>
      <main>
        <div className="image-wrapper">
          <img alt="ondas verdes" src={waves} className="image-wave" />
          <img alt="mulher sorrindo" src={smile} className="image-smile" />
        </div>
        <div className="text-wrapper">
          <h2>
            Por que comprar <br /> o celular que não quer, <br /> se você pode
            assinar <br />o que quer?
          </h2>
          <p>
            Assine o iPhone que sempre <br /> sonhou e tenha mais benefícios,{" "}
            <br /> pagando menos.
          </p>

          <Link to="/products" className="nav-home">
            FAÇA SUA ASSINATURA
          </Link>
        </div>
        <div>
          <img alt="icone" src={titleBlue} />
          <h3>Quem assina, tem mais.</h3>
        </div>
        <div>
          <p>
            Além de receber o iPhone novo, lacrado e com <br /> frete grátis,
            você ainda tem vários mimos e <br /> serviços exclusivos. Olha só!
          </p>
        </div>
        <div>
          <img
            id="capinha"
            alt="icone"
            src={check}
            height="15px"
            width="15px"
          />
          <label htmlFor="capinha" /> Capinha
          <img
            id="pelicula"
            alt="icone"
            src={check}
            height="15px"
            width="15px"
          />
          <label htmlFor="pelicula" /> Película
          <img
            id="carregador"
            alt="icone"
            src={check}
            height="15px"
            width="15px"
          />
          <label htmlFor="carregador" /> Carregador
          <img id="atm" alt="icone" src={check} height="15px" width="15px" />
          <label htmlFor="atm" /> Atendimento humanizado
          <img id="troca" alt="icone" src={check} height="15px" width="15px" />
          <label htmlFor="troca" /> Possibilidade de troca todo ano
          <img
            id="desconto"
            alt="icone"
            src={check}
            height="15px"
            width="15px"
          />
          <label htmlFor="desconto" /> 80% de cobertura contra roubo e furto
          qualificado
          <img
            id="reserva"
            alt="icone"
            src={check}
            height="15px"
            width="15px"
          />
          <label htmlFor="reserva" /> Celular reserva em caso de assistência
          técnica
        </div>
      </main>
    </div>
  );
}
