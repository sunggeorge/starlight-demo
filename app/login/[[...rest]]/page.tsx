// app/login/[[...rest]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="flex justify-center min-h-screen">
      <SignIn routing="path" path="/login" signUpUrl="/register" />
    </section>
  );
}
