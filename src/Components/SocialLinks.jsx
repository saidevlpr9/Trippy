import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
}
