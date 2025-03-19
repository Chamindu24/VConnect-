import { SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <main className="flex flex-row items-center justify-center min-h-screen p-8 gap-24 animate-fade-in bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Logo and Heading Section */}
      <section className="flex flex-col items-start space-y-8 max-w-md">
        <Image
          src="/assets/logo.svg"
          width={200}
          height={200}
          alt="Logo"
          className="mb-4"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Connect, <br />
          Communicate, <br />
          Collaborate in Real-Time
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Join our platform to connect with your team, communicate seamlessly, and collaborate in real-time.
        </p>
      </section>

      {/* Sign-Up Form Section */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 w-full max-w-md">
        <SignUp
          appearance={{
            baseTheme: neobrutalism,
            variables: {
              colorPrimary: "#6366f1", // Custom primary color
            },
          }}
        />
      </div>
    </main>
  );
};

export default RegisterPage;