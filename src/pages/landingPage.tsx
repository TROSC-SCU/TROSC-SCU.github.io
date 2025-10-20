import Navbar from "../components/navbar";
import WhoWeAre from "../components/WhoWeAre";
import Divider from "../components/Divider";
import Tracks from './../components/Tracks';
import Events from './../components/Events';
import UpcomingEvents from './../components/UpComingEvents';
import Footer from './../components/Footer';

function LandingPage() {
    return (
    <div className="min-h-screen bg-gradient-to-br from-[#190A05] to-[#7E0101]">
        <Navbar />   
        <WhoWeAre />
        <Divider />
        <Tracks />
        <Divider />
        <Events />
        <Divider />
        <UpcomingEvents />
        <Divider />
        <Footer />
    </div>
    )
}
export default LandingPage;