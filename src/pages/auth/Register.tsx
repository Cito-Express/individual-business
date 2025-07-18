import { InputWithIcon, ButtonWithLoader, Box } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { User, Mail, Lock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <AuthLayout
        title="Create a personal account"
        description="Join Cito Express and get real-time updates on all your shipments."
      >
        <Box>

        <form className="space-y-4 p-6 dark:bg-foreground bg-background">
          <InputWithIcon
            icon={<User size={20} />}
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            className="bg-secondary dark:bg-[#313131]"
          />
          <InputWithIcon
            icon={<Mail size={20} />}
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            className="bg-secondary dark:bg-[#313131]"
          />
          <InputWithIcon
            icon={<Phone size={20} />}
            label="Phone Number"
            type="text"
            placeholder="Enter your phone number"
            className="bg-secondary dark:bg-[#313131]"
          />
          <InputWithIcon
            icon={<Lock size={20} />}
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="bg-secondary dark:bg-[#313131]"
          />
            <div className="flex gap-2">
             <p className="text-sm text-muted">By creating an account, you agree to our <Link to="/terms" className="text-primary font-medium ">Terms of Service</Link> and <Link to="/privacy" className="text-primary font-medium ">Privacy Policy</Link></p>
            </div>
          <ButtonWithLoader
            initialText="Create account"
            loadingText="Creating account..."
            loading={false}
            className="w-full bg-primary-1 text-white font-semibold mt-6 h-10 rounded-lg"
          />
          <div className="center">
            <p className="text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium ">
                Login
              </Link>
            </p>
          </div>
        </form>
        </Box>
      </AuthLayout>
    </>
  );
}

export default Register;
