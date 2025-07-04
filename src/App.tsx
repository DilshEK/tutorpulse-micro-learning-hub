import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome to TutorPulse
        </h1>
        <p className="text-lg text-muted-foreground">
          Your micro-learning hub is ready to go!
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default App;