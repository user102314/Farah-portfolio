import Navbar from "@/components/Navbar";
import Composer from "@/components/Composer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Composer />
      <Footer />
    </div>
  );
};

export default Index;
