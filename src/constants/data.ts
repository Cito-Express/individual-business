import { UserRound, Bike, Building2, Utensils } from "lucide-react";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];


export const accountTypes = [
  {
      title: "Personal Account",
      description: "Create an account as an Individual or a business to start making and receiving orders.",
      icon: UserRound,
      path: "https://cito-customer.netlify.app"
  },
  {
      title: "Rider",
      description: "Start earning as you take and deliver orders.",
      icon: Bike,
       path: "https://cito-rider.netlify.app"
  },
  {
      title: "Company",
      description: "Optimize and power your delivery company with cito multi-tenant feature.",
      icon: Building2,
       path: "https://cito-company.netlify.app"
  },
  {
      title: "Restaurant",
      description: "Supply users with your best meals. We will handle the rest.",
      icon: Utensils,
       path: "https://cito-restaurant.netlify.app"
  },
]
