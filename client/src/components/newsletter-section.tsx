import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "Successfully subscribed!",
        description: "Welcome to the Sugandh Sanduka family.",
      });
    },
    onError: () => {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <section
      className="py-16 lg:py-24 bg-primary text-primary-foreground"
      data-testid="section-newsletter"
    >
      <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
        {isSubscribed ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold">
              You&apos;re on the list!
            </h2>
            <p className="opacity-90">
              Thanks for subscribing. Check your inbox for a special welcome offer.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Get 10% Off Your First Order
            </h2>
            <p className="opacity-90 mb-8 max-w-lg mx-auto">
              Join our mailing list for exclusive discounts, new product
              launches, and fragrance tips delivered straight to your inbox.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                required
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                variant="secondary"
                disabled={subscribeMutation.isPending}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                data-testid="button-subscribe"
              >
                {subscribeMutation.isPending ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs opacity-70 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
