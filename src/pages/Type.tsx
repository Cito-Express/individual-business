import { accountTypes } from "@/constants/data";
import { RootLayout } from "@/layouts";
import { Box } from "@/components/ui";
export default function Type() {

    const onSubmit = (path: string) => {
      if (path) {
        window.open(path, "_blank");
      }
    };
  return (
    <>
      <RootLayout>

        <div className="layout py-10 space-y-10 ">
          <div data-aos="fade-down" className="space-y-4 text-center border-b border-line pb-8">
            <p className="text-muted border border-line text-sm inline-flex px-3 p-1 rounded-full bg-secondary">
              Select an Account Type 🚀
            </p>
            <h1 className="md:text-3xl text-3xl font-space font-bold leading-tight">
              What type of account would you love to create with us?
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {accountTypes.map((item, idx) => (
              <Box key={idx} onClick={() => onSubmit(item.path)} className="cursor-pointer">
                <div className="space-y-2 bg-secondary p-4 h-full w-full">
                  <div className="h-11 w-11 rounded-lg bg-primary-1/10 center"><item.icon size={20} className="text-primary-1" /></div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                </div>
              </Box>
            ))}
          </div>
        </div>
      </RootLayout>
    </>
  );
}
