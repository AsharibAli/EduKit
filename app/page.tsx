"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Star, Twitter, Download, ArrowBigUp } from "lucide-react";

export default function Component() {
  const [dappName, setDappName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCreate = () => {
    const command = `npx create-edu-dapp ${dappName || "<your-dapp-name>"}`;
    navigator.clipboard.writeText(command);
    setCopied(true);
    setShowAlert(true);
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const openTwitter = () => {
    window.open(
      "https://x.com/opencampus_xyz/status/1820415072319189198",
      "_blank"
    );
  };

  const openNpm = () => {
    window.open("https://www.npmjs.com/package/create-edu-dapp", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://raw.githubusercontent.com/AsharibAli/eduhub/refs/heads/main/public/eduhub.png"
            alt="EduHub Logo"
            className="h-8 w-8 mr-2"
            width={100}
            height={100}
          />
          <span className="text-lg font-bold">EduKit | create-edu-dapp</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#getting-started"
          >
            Getting Started
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="https://app.eduhub.dev/"
            target="_blank"
          >
            Try Live Application
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-2 md:py-4 lg:py-8 xl:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div
                onClick={openTwitter}
                className="cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center space-x-2 mb-8 animate-pulse"
              >
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="font-semibold">
                  Appreciated by Open Campus Team on
                </span>
                <Twitter className="h-5 w-5" />
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build dApps on EduChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  A starter-kit featuring React & NextJS, Vue & NuxtJS, and Vite
                  & RemixJS with Hardhat or Foundry for building dApps on the
                  Open Campus L3 (EduChain).
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
                  <Input
                    className="flex-1 text-black"
                    placeholder="your-dapp-name"
                    value={dappName}
                    onChange={(e) => setDappName(e.target.value)}
                  />
                  <Button
                    className={`bg-teal-500 text-white ${
                      copied ? "bg-green-500" : ""
                    }`}
                    onClick={handleCreate}
                  >
                    {copied ? "Copied!" : "Create"}
                  </Button>
                </div>
                <p className="text-xl text-gray-400 p-5">
                  npx create-edu-dapp {dappName || "<dapp-name>"}
                </p>
              </div>

              {showAlert && (
                <Alert className="mt-4 bg-teal-500 text-white">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Command copied!</AlertTitle>
                  <AlertDescription>
                    Now open your terminal, command prompt, or bash, and simply
                    paste the command. and then follow the instructions to
                    create a full-stack dapp on EduChain.
                  </AlertDescription>
                </Alert>
              )}
              <div
                onClick={openNpm}
                className="cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center space-x-2 animate-pulse"
              >
                <Download className="h-5 w-5 text-yellow-300" />
                <span className="font-semibold">1k+ npm downloads</span>
                <Download className="h-5 w-5 text-yellow-300" />
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-10 w-10 text-teal-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <h3 className="text-xl font-bold">Frontend Frameworks</h3>
                <p className="text-sm text-gray-400 text-center">
                  Choose between React & NextJS, Vue & NuxtJS, and Vite &
                  RemixJS for your frontend development environment.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-10 w-10 text-teal-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                  <line x1="16" x2="2" y1="8" y2="22" />
                  <line x1="17.5" x2="9" y1="15" y2="15" />
                </svg>
                <h3 className="text-xl font-bold">
                  Pre-installed Configuration
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  Includes TypeScript, Tailwind CSS, shadcn-ui, web3.js, ocid,
                  and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-10 w-10 text-teal-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                <h3 className="text-xl font-bold">Backend Development</h3>
                <p className="text-sm text-gray-400 text-center">
                  Choose between Hardhat or Foundry for your smart contract
                  development, deployment, testing, and verification
                  environment.
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-10 w-10 text-teal-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <h3 className="text-xl font-bold">Six Example Dapps</h3>
                <p className="text-sm text-gray-400 text-center">
                  Six full-stack dapps with education-based usecases to help you
                  get started.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-10 w-10 text-teal-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                  <line x1="16" x2="2" y1="8" y2="22" />
                  <line x1="17.5" x2="9" y1="15" y2="15" />
                </svg>
                <h3 className="text-xl font-bold">Connect with OCID</h3>
                <p className="text-sm text-gray-400 text-center">
                  The implementation of open campus ID SDK to connect your
                  community with OC Ecosystem.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-10 w-10 text-teal-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                <h3 className="text-xl font-bold">Command Line Interface</h3>
                <p className="text-sm text-gray-400 text-center">
                  A working create-edu-dapp (CLI) to help you build and ship
                  fast on EduChain.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="getting-started"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Getting Started
            </h2>
            <Tabs defaultValue="hardhat" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="hardhat">Hardhat</TabsTrigger>
                <TabsTrigger value="foundry">Foundry</TabsTrigger>
              </TabsList>
              <TabsContent value="hardhat" className="mt-4">
                <ol className="list-decimal list-inside space-y-4 text-gray-300">
                  <li>
                    Run{" "}
                    <code className="bg-gray-800 p-1 rounded">
                      npx create-edu-dapp your-dapp-name
                    </code>
                  </li>
                  <li>Select Frontend Framework</li>
                  <li>Select Hardhat option</li>
                  <li>
                    cd into the directory:{" "}
                    <code className="bg-gray-800 p-1 rounded">
                      cd your-dapp-name
                    </code>
                  </li>
                  <li>Install dependencies in the backend folder</li>
                  <li>Set up your private key in the .env file</li>
                  <li>Compile, test, and deploy your smart contracts</li>
                  <li>Start the Next.js app in the frontend folder</li>
                </ol>
              </TabsContent>
              <TabsContent value="foundry" className="mt-4">
                <ol className="list-decimal list-inside space-y-4 text-gray-300">
                  <li>
                    Run{" "}
                    <code className="bg-gray-800 p-1 rounded">
                      npx create-edu-dapp your-dapp-name
                    </code>
                  </li>
                  <li>Select Frontend Framework</li>
                  <li>Select Foundry option</li>
                  <li>
                    cd into the directory:{" "}
                    <code className="bg-gray-800 p-1 rounded">
                      cd your-dapp-name
                    </code>
                  </li>
                  <li>Set up your private key in the .env file</li>
                  <li>Compile, test, and deploy your smart contracts</li>
                  <li>Start the Next.js app in the frontend folder</li>
                </ol>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section
          id="demo"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              <a href="https://app.eduhub.dev/" target="_blank">
                <strong>(Click Here to Try Live Application)</strong>
              </a>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Image
                src="https://github.com/AsharibAli/create-edu-dapp/blob/main/frontend/react-nextjs/public/create-edu-dapp-before-login.png?raw=true"
                alt="create-edu-dapp Before Auth"
                className="w-full rounded-lg"
                width={100}
                height={100}
              />
              <Image
                src="https://github.com/AsharibAli/create-edu-dapp/blob/main/frontend/react-nextjs/public/create-edu-dapp-after-login.png?raw=true"
                alt="create-edu-dapp After Auth"
                className="w-full rounded-lg"
                width={100}
                height={100}
              />
              <Image
                src="https://github.com/AsharibAli/create-edu-dapp/blob/main/frontend/react-nextjs/public/connect-with-ocid-before-login.png?raw=true"
                alt="connect-with-ocid Before Auth"
                className="w-full rounded-lg"
                width={100}
                height={100}
              />
              <Image
                src="https://github.com/AsharibAli/create-edu-dapp/blob/main/frontend/react-nextjs/public/connect-with-ocid-after-login.png?raw=true"
                alt="connect-with-ocid After Auth"
                className="w-full rounded-lg"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} EduKit |{" "}
          <strong>
            <a href="https://eduhub.dev" target="_blank">
              EduHub.
            </a>
          </strong>{" "}
          All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/AsharibAli/create-edu-dapp/blob/main/CONTRIBUTING.md"
            target="_blank"
          >
            Contribute
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/AsharibAli/create-edu-dapp/blob/main/LICENSE.md"
            target="_blank"
          >
            License
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/EduHub-dev"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://www.npmjs.com/package/create-edu-dapp"
            target="_blank"
          >
            Npm
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://x.com/eduhub__"
            target="_blank"
          >
            X
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://t.me/+2LHHeOdkZvJmZWJk"
            target="_blank"
          >
            Telegram
          </Link>
        </nav>
      </footer>
    </div>
  );
}
