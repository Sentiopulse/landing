"use client";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { TrendingUp } from "lucide-react";

function onClickHandler(){
    return;
}
function onViewHandler(){
    return;
}

export default function HeroButton() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 font-sans">
      <Button
        className="text-lg bg-background hover:bg-[linear-gradient(135deg,var(--custom-green)_0%,var(--custom-blue)_40%,var(--custom-purple)_90%)] text-foreground"
        size="lg" onClick={onClickHandler}
      >
        Start Free Trial{" "}
        <span>
          <ArrowRight />
        </span>
      </Button>
      <Button className="text-lg bg-background text-foreground hover:bg-background" size="lg" onClick={onViewHandler}>
        View Live Demo{" "}
        <span>
          <TrendingUp />
        </span>
      </Button>
    </div>
  );
}
