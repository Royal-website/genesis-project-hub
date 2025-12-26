import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Hand } from "lucide-react";

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
  compact?: boolean;
}

export function QuoteForm({ variant = "hero", className = "", compact = false }: QuoteFormProps) {
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


  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className={compact ? "space-y-2" : "space-y-3"}>
        <div>
          <Input
            placeholder="Full Name"
            {...register("fullName")}
            className="bg-white text-foreground border-border"
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
            className="bg-white text-foreground border-border"
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
            className="bg-white text-foreground border-border"
          />
          {errors.email && (
            <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Textarea
            placeholder="What type and size of signage do you need?"
            rows={compact ? 2 : 4}
            {...register("message")}
            className={`bg-white text-foreground border-border resize-none ${compact ? "text-sm" : ""}`}
          />
          {errors.message && (
            <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold ${compact ? "py-2 text-sm" : "py-3"}`}
        >
          {isSubmitting ? "Sending..." : "Request My Quote"}
          <Hand className={compact ? "ml-1 h-4 w-4" : "ml-2 h-5 w-5"} />
        </Button>
      </form>
    </div>
  );
}