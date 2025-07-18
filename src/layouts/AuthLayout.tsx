import { Header } from "@/components/auth";

export default function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <>
      <div className="bg-gradient-to-t from-transparent via-primary-1/10 to-transparent">
        <Header />
        <main className="w-[90%] md:w-[400px] mx-auto space-y-6 mt-10 pb-10">
          <div data-aos="fade-down" className="">
            <h2 className="text-3xl font-extrabold font-space">{title}</h2>
            <p className="text-muted text-sm">{description}</p>
          </div>

          {children}
          <div className="center">
            <p className="text-muted text-sm">
              &copy; {new Date().getFullYear()} Cito Express. All rights
              reserved.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
