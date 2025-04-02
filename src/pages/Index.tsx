
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <Card className="w-full max-w-lg shadow-xl">
        <CardContent className="pt-6 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent lakers-gradient">King James Legacy</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">Explore the legendary journey of LeBron James from Akron to NBA greatness</p>
          <Link to="/lebron-james">
            <Button className="lakers-gradient text-white hover:opacity-90 transition-opacity">
              View LeBron's Biography
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
