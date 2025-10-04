import TemplateCard from "./TemplateCard";
import templateEmail from "@/assets/template-email.png";
import templateCrm from "@/assets/template-crm.png";
import templateSocial from "@/assets/template-social.png";
import templateAnalytics from "@/assets/template-analytics.png";

const templates = [
  {
    id: "1",
    name: "Automação de E-mail Marketing",
    price: 97.00,
    image: templateEmail,
    category: "Marketing",
    description: "Automatize campanhas de e-mail, segmentação e follow-ups.",
    fullDescription: "Template completo para automação de e-mail marketing integrado com as principais plataformas. Inclui fluxos de boas-vindas, nutrição de leads, recuperação de carrinho abandonado e muito mais. Compatível com Mailchimp, SendGrid e outras ferramentas populares.",
  },
  {
    id: "2",
    name: "Integração CRM Completa",
    price: 147.00,
    image: templateCrm,
    category: "Vendas",
    description: "Sincronize leads e clientes entre múltiplas plataformas automaticamente.",
    fullDescription: "Integre seu CRM com todas as ferramentas de vendas e marketing. Sincronização bidirecional de dados, criação automática de oportunidades, atualização de status e pipeline. Funciona com Pipedrive, HubSpot, Salesforce e mais.",
  },
  {
    id: "3",
    name: "Gestão de Redes Sociais",
    price: 127.00,
    image: templateSocial,
    category: "Marketing",
    description: "Publique e gerencie conteúdo em todas as suas redes sociais de forma automática.",
    fullDescription: "Automatize completamente sua presença nas redes sociais. Agendamento inteligente de posts, resposta automática a comentários, coleta de métricas e geração de relatórios. Suporta Instagram, Facebook, Twitter, LinkedIn e TikTok.",
  },
  {
    id: "4",
    name: "Dashboard de Analytics",
    price: 167.00,
    image: templateAnalytics,
    category: "Analytics",
    description: "Consolide dados de múltiplas fontes em dashboards interativos.",
    fullDescription: "Crie dashboards personalizados unificando dados do Google Analytics, Facebook Ads, Instagram Insights e mais. Inclui relatórios automáticos por e-mail, alertas de performance e visualizações interativas. Perfeito para agências e empresas data-driven.",
  },
  {
    id: "5",
    name: "Automação de Atendimento ao Cliente",
    price: 117.00,
    image: templateEmail,
    category: "Suporte",
    description: "Automatize respostas, tickets e follow-ups de atendimento.",
    fullDescription: "Sistema completo de automação de atendimento integrado com WhatsApp, e-mail e chat. Classificação automática de tickets, respostas inteligentes com IA, escalação de prioridades e métricas de satisfação do cliente.",
  },
  {
    id: "6",
    name: "E-commerce Total",
    price: 197.00,
    image: templateCrm,
    category: "E-commerce",
    description: "Automatize todo o seu processo de vendas online.",
    fullDescription: "Solução completa para e-commerce com integração de pedidos, estoque, faturamento e logística. Sincroniza automaticamente com marketplaces, atualiza inventário em tempo real, gera notas fiscais e envia notificações de rastreamento aos clientes.",
  },
];

const TemplateGrid = () => {
  return (
    <section id="templates" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Templates Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha entre dezenas de templates prontos para transformar seus processos
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard key={template.id} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateGrid;
