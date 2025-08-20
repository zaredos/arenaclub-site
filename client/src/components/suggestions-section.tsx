import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const suggestionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  type: z.string().min(1, "Please select a suggestion type"),
  suggestion: z.string().min(10, "Suggestion must be at least 10 characters long"),
});

type SuggestionForm = z.infer<typeof suggestionSchema>;

export default function SuggestionsSection() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<SuggestionForm>({
    resolver: zodResolver(suggestionSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "",
      suggestion: "",
    },
  });

  const suggestionMutation = useMutation({
    mutationFn: async (data: SuggestionForm) => {
      return apiRequest("POST", "/api/suggestions", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your suggestion has been submitted successfully!",
        className: "bg-minecraft-green text-dark-primary",
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit suggestion",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: SuggestionForm) => {
    suggestionMutation.mutate(data);
  };

  const suggestionTypes = [
    { value: "new-class", label: "New Class Idea" },
    { value: "balance", label: "Balance Changes" },
    { value: "feature", label: "New Feature" },
    { value: "bug", label: "Bug Report" },
    { value: "other", label: "Other" },
  ];

  return (
    <section id="suggestions" className="py-20 bg-dark-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-4 minecraft-green">Share Your Ideas</h2>
            <p className="text-xl text-slate-300">Have suggestions for new classes, balance changes, or features? We'd love to hear from you!</p>
          </div>
          
          <div className="bg-dark-secondary p-8 rounded-xl border border-slate-700">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="w-full bg-dark-primary border border-slate-600 rounded-lg px-4 py-3 text-slate-100 focus:border-minecraft-green focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full bg-dark-primary border border-slate-600 rounded-lg px-4 py-3 text-slate-100 focus:border-minecraft-green focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    data-testid="input-email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="suggestion-type" className="block text-sm font-semibold text-slate-300 mb-2">
                  Suggestion Type
                </Label>
                <Select onValueChange={(value) => setValue("type", value)} data-testid="select-type">
                  <SelectTrigger className="w-full bg-dark-primary border border-slate-600 rounded-lg px-4 py-3 text-slate-100 focus:border-minecraft-green focus:outline-none transition-colors">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {suggestionTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="text-red-400 text-sm mt-1">{errors.type.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="suggestion" className="block text-sm font-semibold text-slate-300 mb-2">
                  Your Suggestion
                </Label>
                <Textarea
                  id="suggestion"
                  {...register("suggestion")}
                  rows={6}
                  className="w-full bg-dark-primary border border-slate-600 rounded-lg px-4 py-3 text-slate-100 focus:border-minecraft-green focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell us your ideas, suggestions, or feedback..."
                  data-testid="textarea-suggestion"
                />
                {errors.suggestion && (
                  <p className="text-red-400 text-sm mt-1">{errors.suggestion.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={suggestionMutation.isPending}
                className="w-full bg-minecraft-green hover:bg-emerald-600 text-dark-primary py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
                data-testid="submit-suggestion"
              >
                {suggestionMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Suggestion
                  </>
                )}
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-400 text-center">
                <Mail className="w-4 h-4 mr-2 inline" />
                Suggestions are sent to: <a href="mailto:suggestions@arenaclub.club" className="minecraft-green hover:text-emerald-400">suggestions@arenaclub.club</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
