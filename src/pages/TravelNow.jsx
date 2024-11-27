import { Button } from "../Components/ui/button";
import { TravelCard } from "../Components/ui/travelcard";
import { PalmtreeIcon, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
const travelPackages = [
  {
    title: "Maldives Paradise",
    location: "Maldives",
    price: "Rs.59,499",
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80",
    description:
      "Experience crystal clear waters and luxurious overwater bungalows in this tropical paradise.",
    discount: "20%",
  },
  {
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    price: "Rs.79,899",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80",
    description:
      "Discover the breathtaking beauty of the Swiss Alps with guided hiking and scenic train rides.",
  },
  {
    title: "Japanese Cherry Blossoms",
    location: "Japan",
    price: "Rs.1,22,299",
    duration: "8 Days",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80",
    description:
      "Immerse yourself in Japanese culture during the magical cherry blossom season.",
    discount: "15%",
  },
  {
    title: "Greek Island Hopping",
    location: "Greece",
    price: "Rs.90,990",
    duration: "6 Days",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80",
    description:
      "Explore the stunning Cyclades islands, from Santorini to Mykonos.",
  },
];

function TravelNow() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Recommended Travel Packages
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our handpicked selection of seasonal travel packages. Sign
            in to unlock personalized recommendations and exclusive deals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travelPackages.map((pkg) => (
            <TravelCard key={pkg.title} {...pkg} />
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold">
            Want More Personalized Packages?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Sign in to discover travel packages tailored to your preferences and
            unlock exclusive member discounts.
          </p>
          <Link to="/login">
            <Button size="lg" className="gap-2 w-fit">
              <UserCircle className="h-5 w-5" />
              Sign In for Personalized Recommendations
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default TravelNow;
