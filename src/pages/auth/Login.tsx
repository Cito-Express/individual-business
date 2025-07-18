import { Box, ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function page() {
  return (
    <>
      <AuthLayout
        title="Welcome Back"
        description="Sign in to access your packages history and get real-time updates on all your shipments."
      >
        <Box>
          <form className="space-y-4 p-6 dark:bg-foreground bg-background">
            <InputWithIcon
              icon={<Mail size={20} />}
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              className="bg-secondary dark:bg-[#313131]"
            />
            <InputWithIcon
              icon={<Lock size={20} />}
              label="Password"
              type="password"
              placeholder="Enter your password"
                className="bg-secondary dark:bg-[#313131]"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="accent-primary"
                />
                <label htmlFor="remember" className="text-muted">
                  Remember me
                </label>
              </div>

              <Link to="/forgot-password" className="text-primary font-medium">
                Forgot password?
              </Link>
            </div>
            <ButtonWithLoader
              initialText="Login"
              loadingText="Logging in..."
              loading={false}
              className="w-full bg-primary-1 text-white font-semibold mt-6 h-10 rounded-lg"
            />
            <div className="center">
              <p className="text-muted">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="text-primary font-medium ">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </Box>
      </AuthLayout>
    </>
  );
}
