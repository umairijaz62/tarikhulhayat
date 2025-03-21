import { ArrowRight } from "lucide-react";

export default function AnimatedButton({ text, className = "", ...props }) {
  return (
    <button className={`${className}`} {...props}>
      {text}
      <span className="inline-block max-w-0 opacity-0 ml-0 group-hover:max-w-[16px] group-hover:ml-2 group-hover:opacity-100 transition-all duration-300">
        <ArrowRight className="h-4 w-4" />
      </span>
    </button>
  );
}
