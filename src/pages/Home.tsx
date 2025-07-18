import { Hero } from "../components/main";
import { RootLayout } from "../layouts";

export default function Home() {
  return (
    <>
      <RootLayout>
        <Hero />
      </RootLayout>
    </>
  );
}
