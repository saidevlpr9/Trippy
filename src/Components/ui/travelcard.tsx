import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

interface TravelPackage {
  title: string;
  location: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  discount?: string;
}

export function TravelCard({
  title,
  location,
  price,
  duration,
  image,
  description,
  discount,
}: TravelPackage) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        {discount && (
          <Badge className="absolute right-2 top-2 bg-red-500">
            {discount} OFF
          </Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <span className="text-lg font-bold text-primary">{price}</span>
        </div>
        <CardDescription className="flex items-center gap-2">
          <span>{location}</span>
          <span>•</span>
          <span>{duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Package</Button>
      </CardFooter>
    </Card>
  );
}
