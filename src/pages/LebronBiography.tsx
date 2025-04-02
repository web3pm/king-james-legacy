
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import TimelineEvent from "@/components/TimelineEvent";
import StatsCard from "@/components/StatsCard";

const timelineEvents = [
  {
    year: "1984",
    title: "Born in Akron, Ohio",
    description: "LeBron Raymone James was born on December 30, 1984, in Akron, Ohio to Gloria James."
  },
  {
    year: "1999-2003",
    title: "St. Vincent-St. Mary High School",
    description: "LeBron led the Fighting Irish to three state championships. By his senior year, he was already being called 'The Chosen One' and appeared on the cover of Sports Illustrated."
  },
  {
    year: "2003",
    title: "NBA Draft - 1st Overall Pick",
    description: "Selected first overall by his hometown Cleveland Cavaliers in the 2003 NBA Draft."
  },
  {
    year: "2003-2004",
    title: "Rookie Season",
    description: "Won NBA Rookie of the Year, averaging 20.9 points, 5.5 rebounds, and 5.9 assists per game."
  },
  {
    year: "2010",
    title: "The Decision",
    description: "In a televised special, announced his decision to leave Cleveland and 'take his talents to South Beach' to join the Miami Heat."
  },
  {
    year: "2010-2014",
    title: "Miami Heat Era",
    description: "Reached the NBA Finals four consecutive times with the Heat, winning championships in 2012 and 2013. Won NBA MVP in 2012 and 2013."
  },
  {
    year: "2014",
    title: "Return to Cleveland",
    description: "Returned to the Cavaliers with the stated goal of bringing a championship to Cleveland."
  },
  {
    year: "2016",
    title: "Cleveland's First Championship",
    description: "Led the Cavaliers to their first NBA Championship, coming back from a 3-1 deficit against the Golden State Warriors."
  },
  {
    year: "2018",
    title: "Joined the Los Angeles Lakers",
    description: "Signed with the Los Angeles Lakers, continuing his legacy on one of the NBA's most storied franchises."
  },
  {
    year: "2020",
    title: "Fourth NBA Championship",
    description: "Led the Lakers to the NBA Championship in the Orlando bubble, winning Finals MVP for the fourth time."
  },
  {
    year: "2023",
    title: "All-Time Scoring Leader",
    description: "Surpassed Kareem Abdul-Jabbar to become the NBA's all-time leading scorer."
  },
  {
    year: "Present",
    title: "Continuing Legacy",
    description: "Continues to play at an elite level while expanding his business ventures and social activism."
  }
];

const LebronBiography = () => {
  const [activeTab, setActiveTab] = useState("biography");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#552583]/90 to-[#FDB927]/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">LeBron James</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">From Akron to NBA Legend: The Extraordinary Journey of King James</p>
        </div>
        <Link to="/" className="absolute top-4 left-4 z-20">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="biography" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="biography">Biography</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="achievements">Stats & Achievements</TabsTrigger>
          </TabsList>
          
          {/* Biography Tab */}
          <TabsContent value="biography" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="LeBron James" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold">The King's Story</h2>
                <p className="text-lg text-gray-700">
                  LeBron Raymone James Sr. was born on December 30, 1984, in Akron, Ohio. Raised by a single mother, Gloria James, 
                  LeBron faced significant challenges early in life. Despite these hardships, his extraordinary athletic talents became 
                  evident at a young age.
                </p>
                <p className="text-lg text-gray-700">
                  By high school, LeBron was already a national sensation. At St. Vincent-St. Mary High School, he was featured on the 
                  cover of Sports Illustrated with the headline "The Chosen One" - a nickname that would follow him throughout his career. 
                  His games were nationally televised and moved to larger venues to accommodate growing crowds.
                </p>
                <p className="text-lg text-gray-700">
                  In 2003, LeBron bypassed college and was selected as the first overall pick in the NBA Draft by his hometown Cleveland Cavaliers. 
                  His professional career has spanned three teams: the Cleveland Cavaliers (2003-2010, 2014-2018), the Miami Heat (2010-2014), 
                  and the Los Angeles Lakers (2018-present).
                </p>
                <p className="text-lg text-gray-700">
                  Beyond basketball, LeBron has become a significant cultural figure and businessman. He has been outspoken on social and political issues, 
                  established the LeBron James Family Foundation to help children in his hometown, and opened the I PROMISE School, a public school in Akron 
                  for at-risk children.
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* Timeline Tab */}
          <TabsContent value="timeline">
            <div className="timeline-container pb-12 pt-6">
              {timelineEvents.map((event, index) => (
                <TimelineEvent 
                  key={index}
                  year={event.year}
                  title={event.title}
                  description={event.description}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          
          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Career Statistics & Achievements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatsCard 
                    title="NBA Championships" 
                    value="4" 
                    description="2012, 2013, 2016, 2020" 
                  />
                  <StatsCard 
                    title="MVP Awards" 
                    value="4" 
                    description="2009, 2010, 2012, 2013" 
                    gradientClass="cavs-gradient"
                  />
                  <StatsCard 
                    title="Finals MVP Awards" 
                    value="4" 
                    description="2012, 2013, 2016, 2020" 
                    gradientClass="heat-gradient"
                  />
                  <StatsCard 
                    title="All-Star Selections" 
                    value="19" 
                    description="2005-2023" 
                  />
                  <StatsCard 
                    title="Points" 
                    value="38,652+" 
                    description="NBA All-Time Leading Scorer" 
                    gradientClass="lakers-gradient"
                  />
                  <StatsCard 
                    title="Assists" 
                    value="10,800+" 
                    description="Top 5 All-Time" 
                    gradientClass="cavs-gradient"
                  />
                  <StatsCard 
                    title="Rebounds" 
                    value="10,500+" 
                    description="Career Total" 
                    gradientClass="heat-gradient"
                  />
                  <StatsCard 
                    title="Olympic Medals" 
                    value="3" 
                    description="2 Gold, 1 Bronze" 
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Off-Court Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-4">Philanthropic Work</h3>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>Founded the LeBron James Family Foundation in 2004</li>
                      <li>Opened I PROMISE School in Akron in 2018 for at-risk children</li>
                      <li>Pledged $41 million to provide scholarships for Akron students</li>
                      <li>Developed the "I PROMISE Village" to provide transitional housing</li>
                      <li>Created the "More Than A Vote" initiative to combat voter suppression</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-4">Business Ventures</h3>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>Co-founder of production company SpringHill Entertainment</li>
                      <li>Co-founder of media company UNINTERRUPTED</li>
                      <li>Part owner of Fenway Sports Group (Liverpool FC, Boston Red Sox)</li>
                      <li>Lifetime deal with Nike reportedly worth over $1 billion</li>
                      <li>Investments in Blaze Pizza, Beats by Dre, and various tech companies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">King James Legacy - Celebrating the Career of LeBron James</p>
          <p className="text-sm text-gray-400">This site is for educational purposes only. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default LebronBiography;
