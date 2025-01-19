import ChatFloating from "./components/ChatFloating";
import ExploreCategories from "./components/ExploreCategories";
import ExploreMoreProducts from "./components/ExploreMoreProducts";
import Footer from "./components/Footer";
import { FreshFruits } from "./components/FreshFruits";
import { FreshVegetables } from "./components/FreshVegetables";
import HeaderComponent from "./components/HeaderComponent";
import { HealthyGreens } from "./components/HealthyGreens";
import { MasalaItems } from "./components/MasalaItems";
import { PoojaEssentials } from "./components/PoojaEssentials";
import { TodaySpecialDeals } from "./components/TodaySpecialDeals";
import WhatsAppFloating from "./components/WhatsAppFloating";
import { Banner } from "./components/Banner";
import Navigation from "./components/Navigation";

const App = () => {
  return (
   <>   
   <HeaderComponent />
   <Navigation />
   <Banner />
   <ExploreCategories />
   <TodaySpecialDeals />
   <FreshVegetables />
   <HealthyGreens />
   <FreshFruits />
   <MasalaItems />
   <PoojaEssentials />
   <ExploreMoreProducts />
   <Footer />
   <ChatFloating />
   <WhatsAppFloating />
   </>
  );
}

export default App;
