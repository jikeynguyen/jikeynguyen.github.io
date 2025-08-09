import { MyStacks } from "@/components/common/my-stacks";
import StackOrbit from "@/components/common/stack-orbit";
import { HackathonCard } from "@/components/hackathon-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import WordRotate from "@/components/magicui/word-rotate";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen space-y-10">
      <section id="hero" className="w-full">
        <div className="mx-auto w-full max-w-screen-xl px-4 md:px-8 lg:px-16 mt-12">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="size-28 md:size-32 border-4 border-orange-400 shadow-lg">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>

              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold sm:text-6xl tracking-tight"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
            </div>

            <AnimatedShinyText className="text-lg text-muted-foreground">
              I'm focused on 3 things:
            </AnimatedShinyText>

            <WordRotate
              className="text-3xl sm:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500"
              words={["Global Engineer", "Performance", "Innovative"]}
            />

            <BlurFadeText
              className="max-w-[600px] text-base text-muted-foreground"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <div className="px-4 md:px-8 lg:px-16 max-w-screen-md mx-auto space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-none text-muted-foreground leading-relaxed dark:prose-invert bg-white/80 dark:bg-neutral-900/60 p-4 rounded-xl shadow-md">
              {DATA.summary}
            </Markdown>
          </BlurFade>
          <div className="relative flex w-full flex-col items-center justify-center gap-12">
            <ShootingStars />
            <StarsBackground />
            <StackOrbit />
          </div>
        </div>
      </section>
      <section id="work" className="px-4 md:px-8 lg:px-16">
        <div className="space-y-6 max-w-screen-md mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-semibold tracking-tight">
              Work Experience
            </h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education" className="px-4 md:px-8 lg:px-16">
        <div className="space-y-6 max-w-screen-md mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4">
            {DATA.education.map((edu, id) => (
              <BlurFade
                key={edu.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  href={edu.href}
                  logoUrl={edu.logoUrl}
                  altText={edu.school}
                  title={edu.school}
                  subtitle={edu.degree}
                  period={`${edu.start} - ${edu.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="px-4 md:px-8 lg:px-16">
        <div className="space-y-6 max-w-screen-md mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          </BlurFade>
          <div className="relative flex w-full flex-col items-center justify-center gap-12">
            <MyStacks />
          </div>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm rounded-full border-muted-foreground text-muted-foreground hover:bg-muted"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="bg-neutral-100 dark:bg-neutral-900 py-16 px-4"
      >
        <div className="space-y-12 max-w-screen-lg mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  I've worked on a variety of projects, from simple websites to
                  complex web applications.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons" className="px-4 py-16">
        <div className="space-y-12 max-w-screen-lg mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  During university, I attended {DATA.hackathons.length}+
                  hackathons and collaborated with people from across the
                  country.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact" className="py-16 px-4">
        <div className="grid items-center justify-center gap-4 text-center max-w-screen-md mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  on LinkedIn
                </Link>{" "}
                and I'll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
