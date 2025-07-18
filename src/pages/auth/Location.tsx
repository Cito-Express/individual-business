
import { Box, ButtonWithLoader, SelectWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Map, MapPin } from "lucide-react";

export default function Location() {
  return (
    <AuthLayout
      title="Set your location"
      description="Please enter your location to get started with Cito Express"
    >
      <div className="space-y-4">
        <div className="dark:bg-foreground bg-background shadow-sm p-4 rounded-2xl border border-line flex items-center justify-between">
          <p className="text-sm font-medium">Country</p>
          <div className="flex items-center gap-2">
            <img src="/nigeria.svg" alt="nigeria" width={20} height={20} />
            <p className=" font-semibold">Nigeria</p>
          </div>
        </div>

        <Box>

        <form className="space-y-4 p-6 dark:bg-foreground bg-background">
          <SelectWithIcon
            icon={<Map size={20} />}
            label="Residential State"
            options={[]}
            defaultValue="Select your state"
            className="w-full bg-secondary dark:bg-[#313131]"
          />
          <SelectWithIcon
            icon={<MapPin size={20} />}
            label="Residential City"
            options={[]}
            defaultValue="Select your city"
            className="w-full bg-secondary dark:bg-[#313131]"
          />
          <ButtonWithLoader
            initialText="Continue"
            loadingText="Continuing..."
            loading={false}
            className="w-full bg-primary-1 text-white font-semibold mt-6 h-10 rounded-lg"
          />
        </form>
        </Box>
      </div>
    </AuthLayout>
  );
}
