import { ArrowRightIcon, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Box } from "../ui";

export default function Hero() {
  return (
    <section className="py-10">
      <div className="main grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div data-aos="fade-up" className="border border-line bg-secondary rounded-full inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted">
            🚀 <p>All in one logistics platform</p>
          </div>
          <div data-aos="fade-up" className="space-y-2">
            <h1 className="text-4xl md:text-6xl md:leading-tight leading-[45px] font-extrabold font-space">
              Delivering the Future of Logistics in Nigeria
            </h1>
            <p className="text-muted">
              Cito connects individuals, businesses, restaurants, and logistics
              companies with fast, reliable delivery across the country.
            </p>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-2">
            <Link to="/app">
              <button className="btn-primary h-12 px-4 rounded-lg font-semibold">
                Get Started <ArrowRightIcon size={20} />
              </button>
            </Link>
            <button className=" h-12 px-4 rounded-lg font-semibold bg-foreground">
              <MapPin size={20} /> Track Order
            </button>
          </div>
        </div>

        <Box>
          <div className="h-[350px] w-full overflow-hidden bg-gradient-to-br from-transparent via-primary-1/10 to-transparent rounded-lg center">
         <p>Reserved for Image</p>
          </div>
        </Box>
      </div>
    </section>
  );
}
