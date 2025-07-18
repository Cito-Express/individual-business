
import { Box, ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { ScanBarcode } from "lucide-react";

export default function Verify() {
  return (
    <AuthLayout
      title="Verify your account"
      description="Please enter the code sent to your email address to verify your account"
    >
        <Box>

      <form className="space-y-4 p-6 dark:bg-foreground bg-background">
        <InputWithIcon
          icon={<ScanBarcode size={20} />}
          label="Verification Code"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          placeholder="Enter the 6-digit code"
          className="bg-secondary dark:bg-[#313131]"
        />
        <ButtonWithLoader
          initialText="Verify"
          loadingText="Verifying..."
          loading={false}
          className="w-full bg-primary-1 text-white font-semibold mt-6 h-10 rounded-lg"
        />

        <div className="center gap-2">
          <p className="text-muted">
            Didn&apos;t receive a code?{" "}
          </p>
            <ButtonWithLoader
              type="button"
              initialText="Resend code"
              loadingText="Resending..."
              loading={true}
              className="text-primary font-medium bg-transparent"
            />
        </div>
      </form>
        </Box>
    </AuthLayout>
  );
}
