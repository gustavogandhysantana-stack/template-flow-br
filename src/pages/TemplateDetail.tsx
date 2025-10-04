import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, ShoppingCart, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";
import templateEmail from "@/assets/template-email.png";
import templateCrm from "@/assets/template-crm.png";
import templateSocial from "@/assets/template-social.png";
import templateAnalytics from "@/assets/template-analytics.png";

// Mock data - em produção isso viria de uma API ou banco de dados
const templatesData: Record<string, any> = {
  "1": {
    id: "1",
    name: "Automação de E-mail Marketing",
    price: 97.00,
    image: templateEmail,
    category: "Marketing",
    description: "Automatize campanhas de e-mail, segmentação e follow-ups.",
    fullDescription: "Template completo para automação de e-mail marketing integrado com as principais plataformas. Inclui fluxos de boas-vindas, nutrição de leads, recuperação de carrinho abandonado e muito mais. Compatível com Mailchimp, SendGrid e outras ferramentas populares.",
    features: [
      "Integração com Mailchimp, SendGrid e ActiveCampaign",
      "Fluxos de boas-vindas automatizados",
      "Segmentação avançada de contatos",
      "Recuperação de carrinho abandonado",
      "A/B testing de campanhas",
      "Relatórios detalhados de performance",
      "Templates de e-mail responsivos",
      "Suporte e atualizações gratuitas",
    ],
    screenshots: [templateEmail, templateEmail, templateEmail],
  },
  "2": {
    id: "2",
    name: "Integração CRM Completa",
    price: 147.00,
    image: templateCrm,
    category: "Vendas",
    description: "Sincronize leads e clientes entre múltiplas plataformas automaticamente.",
    fullDescription: "Integre seu CRM com todas as ferramentas de vendas e marketing. Sincronização bidirecional de dados, criação automática de oportunidades, atualização de status e pipeline. Funciona com Pipedrive, HubSpot, Salesforce e mais.",
    features: [
      "Sincronização bidirecional de dados",
      "Integração com Pipedrive, HubSpot e Salesforce",
      "Criação automática de leads e oportunidades",
      "Atualização de status do pipeline",
      "Notificações em tempo real",
      "Deduplicação inteligente de contatos",
      "Campos personalizados mapeados",
      "Documentação completa incluída",
    ],
    screenshots: [templateCrm, templateCrm, templateCrm],
  },
  "3": {
    id: "3",
    name: "Gestão de Redes Sociais",
    price: 127.00,
    image: templateSocial,
    category: "Marketing",
    description: "Publique e gerencie conteúdo em todas as suas redes sociais de forma automática.",
    fullDescription: "Automatize completamente sua presença nas redes sociais. Agendamento inteligente de posts, resposta automática a comentários, coleta de métricas e geração de relatórios. Suporta Instagram, Facebook, Twitter, LinkedIn e TikTok.",
    features: [
      "Agendamento inteligente de posts",
      "Publicação simultânea em múltiplas redes",
      "Resposta automática a comentários",
      "Coleta de métricas e analytics",
      "Geração automática de relatórios",
      "Suporte para Instagram, Facebook, Twitter, LinkedIn",
      "Biblioteca de hashtags otimizadas",
      "Templates de conteúdo inclusos",
    ],
    screenshots: [templateSocial, templateSocial, templateSocial],
  },
  "4": {
    id: "4",
    name: "Dashboard de Analytics",
    price: 167.00,
    image: templateAnalytics,
    category: "Analytics",
    description: "Consolide dados de múltiplas fontes em dashboards interativos.",
    fullDescription: "Crie dashboards personalizados unificando dados do Google Analytics, Facebook Ads, Instagram Insights e mais. Inclui relatórios automáticos por e-mail, alertas de performance e visualizações interativas. Perfeito para agências e empresas data-driven.",
    features: [
      "Integração com Google Analytics e Google Ads",
      "Conexão com Facebook Ads e Instagram Insights",
      "Dashboards personalizáveis e interativos",
      "Relatórios automáticos por e-mail",
      "Alertas de performance em tempo real",
      "Exportação de dados em múltiplos formatos",
      "Visualizações gráficas avançadas",
      "API para integração customizada",
    ],
    screenshots: [templateAnalytics, templateAnalytics, templateAnalytics],
  },
  "5": {
    id: "5",
    name: "Automação de Atendimento ao Cliente",
    price: 117.00,
    image: templateEmail,
    category: "Suporte",
    description: "Automatize respostas, tickets e follow-ups de atendimento.",
    fullDescription: "Sistema completo de automação de atendimento integrado com WhatsApp, e-mail e chat. Classificação automática de tickets, respostas inteligentes com IA, escalação de prioridades e métricas de satisfação do cliente.",
    features: [
      "Integração com WhatsApp Business",
      "Respostas automáticas inteligentes",
      "Classificação automática de tickets",
      "Escalação por prioridade",
      "SLA tracking e alertas",
      "Pesquisas de satisfação automatizadas",
      "Base de conhecimento integrada",
      "Métricas de atendimento em tempo real",
    ],
    screenshots: [templateEmail, templateEmail, templateEmail],
  },
  "6": {
    id: "6",
    name: "E-commerce Total",
    price: 197.00,
    image: templateCrm,
    category: "E-commerce",
    description: "Automatize todo o seu processo de vendas online.",
    fullDescription: "Solução completa para e-commerce com integração de pedidos, estoque, faturamento e logística. Sincroniza automaticamente com marketplaces, atualiza inventário em tempo real, gera notas fiscais e envia notificações de rastreamento aos clientes.",
    features: [
      "Sincronização com marketplaces (Mercado Livre, Shopee)",
      "Gestão de estoque em tempo real",
      "Emissão automática de notas fiscais",
      "Integração com correios e transportadoras",
      "Notificações de rastreamento para clientes",
      "Reconciliação financeira automatizada",
      "Gestão de devoluções e trocas",
      "Relatórios financeiros detalhados",
    ],
    screenshots: [templateCrm, templateCrm, templateCrm],
  },
};

const relatedTemplates = [
  {
    id: "2",
    name: "Integração CRM Completa",
    price: 147.00,
    image: templateCrm,
    category: "Vendas",
    description: "Sincronize leads e clientes entre múltiplas plataformas automaticamente.",
    fullDescription: "Integre seu CRM com todas as ferramentas de vendas e marketing.",
  },
  {
    id: "3",
    name: "Gestão de Redes Sociais",
    price: 127.00,
    image: templateSocial,
    category: "Marketing",
    description: "Publique e gerencie conteúdo em todas as suas redes sociais de forma automática.",
    fullDescription: "Automatize completamente sua presença nas redes sociais.",
  },
  {
    id: "4",
    name: "Dashboard de Analytics",
    price: 167.00,
    image: templateAnalytics,
    category: "Analytics",
    description: "Consolide dados de múltiplas fontes em dashboards interativos.",
    fullDescription: "Crie dashboards personalizados unificando dados.",
  },
];

const TemplateDetail = () => {
  const { id } = useParams();
  const template = templatesData[id || "1"];

  if (!template) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Template não encontrado</h1>
            <Button asChild>
              <Link to="/">Voltar para o início</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-6">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para templates
            </Link>
          </Button>
        </div>

        {/* Template Details */}
        <div className="container pb-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary shadow-[var(--shadow-card)]">
                <img
                  src={template.image}
                  alt={template.name}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {template.screenshots.map((screenshot: string, index: number) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg bg-secondary cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">{template.category}</Badge>
                <h1 className="text-4xl font-bold mb-4">{template.name}</h1>
                <p className="text-lg text-muted-foreground">{template.fullDescription}</p>
              </div>

              {/* Price */}
              <Card>
                <CardHeader>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      R$ {template.price.toFixed(2)}
                    </span>
                    <span className="text-muted-foreground">pagamento único</span>
                  </div>
                  <CardDescription>
                    Acesso vitalício • Suporte incluído • Atualizações gratuitas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button size="xl" className="w-full" variant="hero">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Comprar Agora
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4" />
                    <span>Garantia de 30 dias ou seu dinheiro de volta</span>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>O que está incluído</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {template.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Templates */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Templates Relacionados</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTemplates
                .filter((t) => t.id !== id)
                .slice(0, 3)
                .map((template) => (
                  <TemplateCard key={template.id} {...template} />
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TemplateDetail;
