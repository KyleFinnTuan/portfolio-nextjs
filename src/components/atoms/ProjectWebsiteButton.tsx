"use client";
import { Button } from "@/components/ui/button";

export default function ProjectWebsiteButton({ website_link }: { website_link: string }) {
  return (
    <Button
      className="text-black font-bold bg-white"
      onClick={() => window.open(website_link, "_blank")}
    >
      View Website
    </Button>
  );
}