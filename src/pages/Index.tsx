import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TemplateGrid from "@/components/TemplateGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TemplateGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
