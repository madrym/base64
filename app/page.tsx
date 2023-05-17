import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Effortlessly encode and decode Base64 data.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          A simple, single-use website which live updates as you type, in either text box.
        </p>
      </div>
    </section>
  )
}
