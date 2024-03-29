---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Using GPT-3 to Pitch My Startup"
date: "January 3, 2023"
image: "/images/blog/post-4/seed-ui.png"
description: "It all started when I first pitched my startup, Hypershelter, a solar-powered tent for typhoon victims, in front of investors to receive funding. Leading up to demo day, my co-founders and I worked tirelessly on our pitch deck and presentation. Fortunately, our pitch was successful and we received grant funding to build a prototype. However, this experience made me realize that there must be a way to streamline"
---

It all started when I first pitched my startup, Hypershelter, a solar-powered tent for typhoon victims, in front of investors to receive funding. Leading up to demo day, my co-founders and I worked tirelessly on our pitch deck and presentation. Fortunately, our pitch was successful and we received grant funding to build a prototype. However, this experience made me realize that there must be a way to streamline the process of preparing a pitch. What if we make it easier for us to become effective storytellers? Seed is a website I built to generate scripts for your startup pitch. Just fill up the form and AI will do the rest.

This was also when I began my journey into the world of AI and machine learning, reading research papers and experimenting with models. So, it is only a matter of time for me to eventually build stuff with it. I ultimately decided to use <a href="https://openai.com/blog/gpt-3-apps/" target="_blank">GPT-3</a> through OpenAI’s API, as it is both accessible and high-performing, and I built Seed using <a href="https://nextjs.org/" target="_blank">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.

<video src="/videos/blog/post-4/demo.mp4" controls></video>

Here, I wanted to generate a pitch for a food delivery startup as an example. Seed follows a format you would usually see in pre-seed pitches, including sections on the problem being addressed, the proposed solution, timing, market size, business model, traction, team, competition, and go-to-market strategy. I turned these into super simple questions in the input fields of the UI. Simply fill out the form with this information, and you will be ready to generate your pitch. You can also edit the pitch after it is generated.

While I don't have any plans to continue working on Seed, the project has been a great opportunity for me to see firsthand the potential of language models. Generative AI is a truly revolutionary technology, and it's exciting to see companies like OpenAI making it more accessible through their API.
