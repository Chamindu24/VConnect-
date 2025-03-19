import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

const LoginPage = () => {
  return (
    <main className="flex flex-row items-center justify-center min-h-screen p-10 gap-26 animate-fade-in bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Left Section: Logo and Text */}
      <section className="flex flex-col items-start space-y-8 max-w-md">
        <Image
          src="/assets/logo.svg"
          width={200}
          height={200}
          alt="Logo"
          className="mb-6"
        />
        <h1 className="text-4xl font-extrabold tracking-wider text-gray-900 leading-tight">
          Connect, <br />
          Communicate, <br />
          Collaborate in Real-Time
        </h1>
        <p className="text-lg text-gray-700">
          Join our platform to connect with your team, communicate seamlessly, and collaborate in real-time.
        </p>
      </section>

      {/* Right Section: Login Form */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
        <SignIn
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

export default LoginPage;