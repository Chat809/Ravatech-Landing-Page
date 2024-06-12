import React from "react";
import "./index.css";
import ServiceCard from "./components/ServiceCard";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TeamCard from "./components/TeamCard";
// @ts-ignore
import SoftwareDevelopment from "./IMGS/software-development.png";
// @ts-ignore
import SoftwareMaintenance from "./IMGS/maintenance.png";
// @ts-ignore
import SoftwareSecurity from "./IMGS/cyber-security.png";
// @ts-ignore
import SaaS from "./IMGS/saas.png";
// @ts-ignore
import SocialMedia from "./IMGS/social-media.png";
// @ts-ignore
import UXUI from "./IMGS/ux-ui.png";
// @ts-ignore
import khalilImg from "./IMGS/img_khalil.jpeg";
import FAQCard from "./components/FAQCard";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HomeContent />
      <div className="box-content-services-portfolio">
        <div className="title-content alegreya">Nossos Serviços</div>
        <div className="box-cards-services">
          <ServiceCard
            imgCard={SoftwareDevelopment}
            alt="Icon SoftwareDevelopment"
            serviceName="Software Development"
            serviceDescription="Soluções de software personalizadas para atender às necessidades específicas do seu negócio, garantindo eficiência e escalabilidade. Nossa equipe utiliza metodologias ágeis para entregar produtos de alta qualidade, adaptáveis e inovadores."
          />
          <ServiceCard
            imgCard={SoftwareMaintenance}
            alt="Icon SoftwareMaintenance"
            serviceName="Software Maintenance"
            serviceDescription="Garantimos que suas aplicações permaneçam atualizadas e livres de bugs. Proporcionamos suporte contínuo e melhorias incrementais para que seu sistema funcione de maneira eficiente e confiável ao longo do tempo."
          />
          <ServiceCard
            imgCard={SoftwareSecurity}
            alt="Icon SoftwareSecurity"
            serviceName="Software Security"
            serviceDescription="Proteção contra ameaças cibernéticas. Realizamos auditorias, testes de penetração e implementamos medidas de segurança avançadas para garantir a integridade e confidencialidade dos seus dados."
          />
          <ServiceCard
            imgCard={SaaS}
            alt="Icon SaaS"
            serviceName="SaaS"
            serviceDescription="Software como Serviço utilizando a nuvem. Nossas soluções SaaS são escaláveis, seguras e acessíveis, proporcionando conveniência e redução de custos operacionais."
          />
          <ServiceCard
            imgCard={SocialMedia}
            alt="Icon SocialMedia"
            serviceName="Social Media"
            serviceDescription="Oferecemos estratégias e gerenciamento de mídias sociais para aumentar a presença online da sua marca. Criamos conteúdo envolvente, gerenciamos campanhas e analisamos métricas para garantir o engajamento e crescimento do seu público-alvo."
          />
          <ServiceCard
            imgCard={UXUI}
            alt="Icon UX/UI"
            serviceName="UX/UI"
            serviceDescription="Desenhamos experiências de usuário (UX) e interfaces de usuário (UI) intuitivas, atraentes e funcionais. Nosso foco é criar designs que proporcionem uma navegação agradável e eficiente, melhorando a satisfação e retenção dos usuários."
          />
        </div>
      </div>
      <div className="box-content-team">
        <div className="title-content alegreya">Desenvolvedores</div>
        <div className="box-cards-team">
          <TeamCard
            avatarName="Khalil Salomão"
            avatarDescription="Fullstack Developer"
            avatarImg={khalilImg}
          />
          <TeamCard
            avatarName="Khalil Salomão"
            avatarDescription="Fullstack Developer"
            avatarImg={khalilImg}
          />
          <TeamCard
            avatarName="Khalil Salomão"
            avatarDescription="Fullstack Developer"
            avatarImg={khalilImg}
          />
        </div>
      </div>
      <div className="box-content-FAQs">
        <div className="title-content alegreya">Dúvidas?</div>
        <div className="box-cards-FAQs">
          <FAQCard
            name="Qual garantia a ravatech oferece?"
            description="Nós oferecemos garantia com multa prevista no contrato, além da entrega gratuita do que for desenvolvido até então"
          />
          <FAQCard
            name="Como funciona o aluguel de sites?"
            description="Nosso serviço de aluguel de sites permite que você utilize um site profissional sem a necessidade de investir em um próprio. Você paga uma taxa mensal e nós adaptamos de acordo com sua necessidade"
          />
          <FAQCard
            name="Qual o prazo estimado da entrega?"
            description="O prazo estimado de entrega varia de acordo com o serviço contratado e a complexidade do projeto. Para landing pages, de modo geral entregamos em até uma semana."
          />
          <FAQCard
            name="Quais as formas de pagamento?"
            description="Aceitamos várias formas de pagamento, incluindo cartão de crédito, transferência bancária e PayPal. Entre em contato conosco para mais informações sobre formas de pagamento disponíveis."
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
