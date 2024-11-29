"use client";

import { useUser } from "@clerk/nextjs";

export default function HomePage() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {user && (
        <p className="text-2xl font-medium mb-4">
          Hello{" "}
          <span className="text-blue-500">
            {user.firstName} {user.lastName}
          </span>
        </p>
      )}
      <h1 className="text-4xl font-bold">Welcome to Starlight Nails!</h1>
    </div>
  );
}
