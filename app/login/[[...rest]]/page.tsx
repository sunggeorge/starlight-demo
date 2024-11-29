// app/login/[[...rest]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="login-page">
      <SignIn routing="path" path="/login" signUpUrl="/register" />
    </main>
  );
}
