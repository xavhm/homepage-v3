<template>
  <section
    id="about"
    class="scroll-mt-22.75 overflow-clip rounded-[20px] border border-[#ededf0] bg-white px-6 py-9 sm:px-9.75 sm:pt-12 sm:pb-10.5"
  >
    <h2 class="text-muted mb-5.5 text-[13px] font-normal">About</h2>
    <p class="text-muted max-w-152.5 text-[17px] leading-[1.48] tracking-[-0.04em]">
      <strong class="text-ink font-medium"
        >I’m Xavier, a frontend engineer and technical owner based in La Rochelle.</strong
      >
      At Raccourci Agency, I shape frontend architecture and build TypeScript and Vue.js
      applications for tourism teams. I work across reusable components, accessibility, performance,
      testing, API contracts, and product decisions.
    </p>
    <p class="text-muted mt-5 max-w-152.5 text-sm leading-relaxed">
      My earlier decade at Winamax taught me to weigh user behavior, operational constraints, and
      commercial outcomes alongside the code. I’m interested in roles where I can help shape both
      the product and its technical direction, including AI-powered experiences. My applied AI work
      includes interfaces for classification features; I’m continuing to develop my expertise in
      agentic systems and UX.
    </p>
    <div class="mt-7.25 flex flex-wrap items-center gap-2.5">
      <CopyButton
        label="xhernan.martinez@gmail.com"
        value="xhernan.martinez@gmail.com"
        icon="i-lucide-mail"
        copy-label="Copy email address"
      />
      <CopyButton
        label="+33 6 26 09 19 66"
        value="+33626091966"
        icon="i-lucide-smartphone"
        copy-label="Copy phone number"
      />
      <a
        class="bg-surface text-muted focus-visible:outline-ink hover:bg-line inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.8125rem] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
        href="/cv.pdf"
        download
      >
        <UIcon name="i-lucide-download" class="size-4 shrink-0" aria-hidden="true" />
        Download CV
      </a>
    </div>
    <div class="grid grid-cols-1 gap-x-5 gap-y-6.5 pt-10 sm:grid-cols-3 sm:pt-11.25">
      <div class="grid gap-2">
        <strong class="text-[25px] font-medium tracking-[-0.06em]">Nearly 5 years</strong
        ><span class="text-muted text-[11px]">Building production web applications</span>
      </div>
      <div class="grid gap-2">
        <strong class="text-[25px] font-medium tracking-[-0.06em]">10 years</strong
        ><span class="text-muted text-[11px]">In product operations at Winamax</span>
      </div>
      <div class="grid gap-2">
        <strong class="text-[25px] font-medium tracking-[-0.06em]">10+ destinations</strong
        ><span class="text-muted text-[11px]">Use the Youbook product</span>
      </div>
    </div>
  </section>
</template>
