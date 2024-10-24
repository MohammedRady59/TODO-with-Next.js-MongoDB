import { ModeToggle } from "./ModeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="flex items-center justify-between container mt-4">
      <ModeToggle />
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton showName />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </nav>
  );
}

export default Navbar;
