import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";

interface TemplateCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  fullDescription: string;
  category: string;
}

const TemplateCard = ({ id, name, price, image, description, fullDescription, category }: TemplateCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] bg-[var(--gradient-card)]">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-2">{name}</CardTitle>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardDescription className={expanded ? "" : "line-clamp-2"}>
          {expanded ? fullDescription : description}
        </CardDescription>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-primary hover:underline mt-2"
        >
          {expanded ? (
            <>
              Ver menos <ChevronUp className="h-3 w-3" />
            </>
          ) : (
            <>
              Ler mais <ChevronDown className="h-3 w-3" />
            </>
          )}
        </button>
      </CardHeader>

      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">pagamento único</span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button asChild className="flex-1">
          <Link to={`/template/${id}`}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Comprar Agora
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to={`/template/${id}`}>Detalhes</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
