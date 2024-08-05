import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Paw, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Paw, Heart, Award } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", image: "https://images.unsplash.com/photo-1579213838058-0a0a0e5a3648?w=500&h=500&fit=crop" },
  { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&h=500&fit=crop" },
  { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop" },
  { name: "French Bulldog", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=500&fit=crop" },
  { name: "Bulldog", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&h=500&fit=crop" },
  { name: "Poodle", image: "https://images.unsplash.com/photo-1616149562385-1d84e79478bb?w=500&h=500&fit=crop" },
  { name: "Beagle", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop" },
  { name: "Rottweiler", image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=500&h=500&fit=crop" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Discover the World of Dogs</h1>
          <p className="text-xl text-gray-600 mb-8">Man's best friend in all their furry glory</p>
          <Button size="lg" onClick={() => setLikes(likes + 1)}>
            <Heart className="mr-2 h-4 w-4" /> Show Some Love ({likes})
          </Button>
        </div>

        <div className="mb-16">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {dogBreeds.map((breed, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div>
                          <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                          <h3 className="font-semibold text-lg text-center">{breed.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Paw className="mr-2 h-5 w-5 text-blue-500" />
                What are Dogs?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-blue-500" />
                Characteristics of Dogs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["Loyal and affectionate", "Highly trainable", "Various sizes and breeds", "Excellent sense of smell", "Understand human emotions"].map((trait, index) => (
                  <li key={index} className="flex items-center">
                    <Badge variant="secondary" className="mr-2">{index + 1}</Badge>
                    {trait}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
            <CardDescription>Here are some of the most popular dog breeds worldwide:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dogBreeds.map((breed, index) => (
                <li key={index} className="flex items-center">
                  <img src={breed.image} alt={breed.name} className="w-8 h-8 rounded-full mr-2 object-cover" />
                  <span>{breed.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
