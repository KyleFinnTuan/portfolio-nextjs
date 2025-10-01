"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function PortfolioFooter() {
  return (
    <footer className="bg-white text-black p-6">
      <div className="mx-auto max-w-6xl">
        {/* Boxed Footer */}
        <div className="border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-8 md:p-12 rounded-sm">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight bg-yellow-300 px-6 py-3 border-4 border-black shadow-[6px_6px_0px_#000]">
              kyle Finn Tuan
            </h2>
            <p className="text-sm font-semibold bg-pink-200 px-4 py-2 border-2 border-black shadow-[4px_4px_0px_#000]">
              Designer • Developer • Creator
            </p>
          </div>
          <div className="my-8 h-3 w-full bg-black"></div>
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
            <nav className="flex flex-wrap gap-4 md:gap-6 text-base font-bold uppercase">
              {/* <Button
                onClick={() => window.location.href = "/about"}
                className="px-3 py-1 border-2 border-black bg-green-200 font-bold"
              >
                ABOUT
              </Button> */}
              <Button
                onClick={() => window.location.href = "/projects"}
                className="px-3 py-1 border-2 border-black bg-blue-200 font-bold"
              >
                PROJECTS
              </Button>
              <Button
                onClick={() => window.location.href = "/skills"}
                className="px-3 py-1 border-2 border-black bg-orange-200 font-bold"
              >
                SKILLS
              </Button>
              {/* <Button
                onClick={() => window.location.href = "/contact"}
                className="px-3 py-1 border-2 border-black bg-purple-200 font-bold"
              >
                CONTACT
              </Button> */}
            </nav>

            {/* Socials */}
            <div className="flex gap-5">
              <Button
                onClick={() => window.open("https://github.com/KyleFinnTuan", "_blank")}
                className="border-2 border-black bg-yellow-200 w-[42px] h-[42px]"
              >
                <Github size={22} />
              </Button>
              <Button
                onClick={() => window.open("https://www.linkedin.com/in/kelvin-tan-6999292b1/", "_blank")}
                className="border-2 border-black bg-red-200 w-[42px] h-[42px]"
              >
                <Linkedin size={22} />
              </Button>
              <Button
                onClick={() => window.location.href = 'mailto:wandinainggolan9@gmail.com'}
                className="border-2 border-black bg-pink-200 w-[42px] h-[42px]"
              >
                <Mail size={22} />
              </Button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 text-center">
            <span className="inline-block px-5 py-2 text-sm font-bold bg-black text-white border-2 border-white shadow-[4px_4px_0px_#000]">
              © {new Date().getFullYear()} Your Name — Built with ❤️ using Next.js + Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
