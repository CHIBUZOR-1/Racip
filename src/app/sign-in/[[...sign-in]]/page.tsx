import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Login • Racip",
  description: "Racip Login page.",
};

export default function Page() {
    return (
        <div className="flex items-center justify-center h-screen">
           <SignIn/> 
        </div>
    )
}