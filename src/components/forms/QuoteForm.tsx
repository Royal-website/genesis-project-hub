import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Hand, Star } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Please describe what type of signage you need"),
});

type FormData = z.infer<typeof formSchema>;

interface QuoteFormProps {
  variant?: "hero" | "sidebar" | "inline";
  className?: string;
}

export function QuoteForm({ variant = "hero", className = "" }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // TODO: Submit to database when Lovable Cloud is enabled
    console.log("Form submitted:", data);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const isHero = variant === "hero";

  return (
    <div className={`${isHero ? "bg-primary p-6 rounded-lg" : ""} ${className}`}>
      {isHero && (
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-4">
          GET A FREE QUOTE
        </h2>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <Input
            placeholder="Full Name"
            {...register("fullName")}
            className={isHero ? "bg-card text-foreground" : ""}
          />
          {errors.fullName && (
            <p className="text-destructive text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Best Phone"
            {...register("phone")}
            className={isHero ? "bg-card text-foreground" : ""}
          />
          {errors.phone && (
            <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            {...register("email")}
            className={isHero ? "bg-card text-foreground" : ""}
          />
          {errors.email && (
            <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Textarea
            placeholder="What type and size of signage do you need?"
            rows={4}
            {...register("message")}
            className={isHero ? "bg-card text-foreground resize-none" : "resize-none"}
          />
          {errors.message && (
            <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3"
        >
          {isSubmitting ? "Sending..." : "Request My Quote"}
          <Hand className="ml-2 h-5 w-5" />
        </Button>
      </form>
      
      {isHero && (
        <div className="mt-4 text-center">
          <p className="text-primary-foreground font-semibold">RATED 5.0 STARS</p>
          <div className="flex justify-center gap-1 my-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 text-accent fill-accent" />
            ))}
          </div>
          <p className="text-primary-foreground/80 text-sm">(Based on 54 Client Reviews)</p>
        </div>
      )}
    </div>
  );
}