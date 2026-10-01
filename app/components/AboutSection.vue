<template>
  <section
    id="about"
    class="scroll-mt-22.75 overflow-clip rounded-[20px] border border-[#ededf0] bg-white px-6 py-9 sm:px-9.75 sm:pt-12 sm:pb-10.5"
  >
    <h2 class="text-muted mb-5.5 text-[13px] font-normal">About me</h2>
    <p class="text-muted max-w-152.5 text-[17px] leading-[1.48] tracking-[-0.04em]">
      <strong class="text-ink font-medium"
        >Hey, I’m Calib Harrison — a strategy-driven product designer</strong
      >
      creating scalable experiences that improve retention, conversions, and business growth.
    </p>
    <div class="mt-7.25 flex flex-wrap items-center gap-2.5">
      <CopyButton
        label="contact@calib.com"
        value="contact@calib.com"
        icon="i-lucide-mail"
        copy-label="Copy email address"
      />
      <CopyButton
        label="+(123) 254 587 00"
        value="+12325458700"
        icon="i-lucide-smartphone"
        copy-label="Copy phone number"
      />
      <a
        class="bg-surface text-muted focus-visible:outline-ink hover:bg-line inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.8125rem] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none"
        href="https://example.com/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UIcon name="i-lucide-download" class="size-4 shrink-0" />Download CV
      </a>
    </div>
    <div
      class="grid grid-cols-2 gap-x-5 gap-y-6.5 pt-10 min-[700px]:grid-cols-4 min-[700px]:pt-11.25"
    >
      <div class="grid gap-2">
        <strong class="text-[25px] font-medium tracking-[-0.06em]">$60M+</strong
        ><span class="text-muted text-[11px]">Client Funding Raised</span>
      </div>
      <div class="grid gap-2">
        <strong class="text-[25px] font-medium tracking-[-0.06em]">35+</strong
        ><span class="text-muted text-[11px]">Startups Supported</span>
      </div>
      <div class="grid gap-2">
        <strong class="text-[25px] font-medium tracking-[-0.06em]">12+</strong
        ><span class="text-muted text-[11px]">Years of experience</span>
      </div>
      <div class="grid gap-2">
        <strong class="text-[25px] font-medium tracking-[-0.06em]">95%</strong
        ><span class="text-muted text-[11px]">Client Satisfaction Rate</span>
      </div>
    </div>
  </section>
</template>
