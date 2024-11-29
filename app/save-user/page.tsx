"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SaveUserPage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // Send user information to the save-user API
      const saveUserToDB = async () => {
        try {
          await fetch("/api/save-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.primaryEmailAddress?.emailAddress,
              phone: user.primaryPhoneNumber?.phoneNumber || null,
              role: user.unsafeMetadata?.role || "C", // Default to "C" if role is missing
            }),
          });

          // Redirect to a welcome page or home after saving
          router.push("/");
        } catch (error) {
          console.error("Error saving user:", error);
        }
      };

      saveUserToDB();
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center h-full">
      <p>Saving your information...</p>
    </div>
  );
}
