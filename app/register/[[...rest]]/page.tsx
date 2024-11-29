// app/register/[[...rest]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
        <main className="login-page">
          <SignUp 
            routing="path" 
            path="/register" 
            unsafeMetadata={{role:"C"}} 
            forceRedirectUrl="/save-user" // Always redirect to the save-user page="/save-user"
          />;
          </main>);
}
