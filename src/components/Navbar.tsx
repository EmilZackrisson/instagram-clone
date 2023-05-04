import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

export default function Navbar() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  return (
    <nav className="mb-3 border-b-2 border-gray-400 bg-white">
      <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        {/* Left */}
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <img src="https://links.papareact.com/ocw" alt="" />
        </div>
        <div className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <img src="https://links.papareact.com/jjm" alt="" />
        </div>
        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3"></div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <p>
            {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
          </p>
        </div>
      </div>
    </nav>
  );
}
