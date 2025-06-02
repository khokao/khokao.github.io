import { type CertificationItem, certificationItems } from "@/components/profile/certification-items";
import { type EducationItem, educationItems } from "@/components/profile/education-items";
import { engineeringPhilosophyItems } from "@/components/profile/engineering-philosophy-items";
import { type ExperienceItem, experienceItems } from "@/components/profile/experience-items";
import { type HonorsAwardsItem, honorsAwardsItems } from "@/components/profile/honors-awards-items";
import { type PortfolioItem, portfolioItems } from "@/components/profile/portfolio-items";
import { type PublicationItem, publicationItems } from "@/components/profile/publication-items";
import { type SocialItem, socialItems } from "@/components/profile/social-items";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Profile = () => {
  const formatDate = (date: Date | null): string => {
    if (!date) return "Present";
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  return (
    <div className="font-quicksand p-6 pt-0 space-y-6">
      {/* Who am I */}
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-extrabold">Koki Hokao</h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
          Software Engineer
        </p>
      </div>

      <Separator />

      {/* Experience */}
      <section className="px-1">
        <h2 className="text-xl font-bold pb-2">Experience</h2>

        {experienceItems.map((item: ExperienceItem, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: array is static and not reordered
          <div key={index} className="p-2">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <div className="p-1 space-y-1">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                {formatDate(item.from)} - {formatDate(item.to)} ・ {item.employmentType}
              </p>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Education */}
      <section className="px-1">
        <h2 className="text-xl font-bold pb-2">Education</h2>

        {educationItems.map((item: EducationItem, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: array is static and not reordered
          <div key={index} className="p-2">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <div className="p-1 space-y-1">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                {formatDate(item.from)} - {formatDate(item.to)}
              </p>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Publication */}
      <section className="px-1">
        <h2 className="text-xl font-bold pb-2">Publication</h2>

        {publicationItems.map((item: PublicationItem, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: array is static and not reordered
          <div key={index} className="p-2">
            <h3 className="text-base font-semibold">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer" className="underline hover:opacity-80">
                  {item.title}
                </a>
              ) : (
                <span>{item.title}</span>
              )}
            </h3>
            <div className="p-1 space-y-1">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                {formatDate(item.date)}
              </p>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Portfolio */}
      <section className="px-1">
        <h2 className="text-xl font-bold pb-2">Portfolio</h2>

        {portfolioItems.map((item: PortfolioItem, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: array is static and not reordered
          <div key={index} className="p-2">
            <h3 className="text-base font-semibold">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer" className="underline hover:opacity-80">
                  {item.title}
                </a>
              ) : (
                <span>{item.title}</span>
              )}
            </h3>
            <div className="p-1 space-y-1">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                {formatDate(item.date)}
              </p>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Honors & Awards */}
      <section className="px-1">
        <h2 className="text-xl font-bold pb-2">Honors & Awards</h2>

        {honorsAwardsItems.map((item: HonorsAwardsItem, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: array is static and not reordered
          <div key={index} className="p-2">
            <div className="flex flex-row items-center space-x-4">
              <h3 className="text-base font-semibold">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="underline hover:opacity-80">
                    {item.title}
                  </a>
                ) : (
                  <span>{item.title}</span>
                )}
              </h3>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                {formatDate(item.date)}
              </p>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Certification */}
      <section className="px-1">
        <h2 className="text-xl font-bold pb-2">Certification</h2>

        {certificationItems.map((item: CertificationItem, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: array is static and not reordered
          <div key={index} className="p-2">
            <div className="flex flex-row items-center space-x-4">
              <h3 className="text-base font-semibold">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="underline hover:opacity-80">
                    {item.title}
                  </a>
                ) : (
                  <span>{item.title}</span>
                )}
              </h3>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                {formatDate(item.date)}
              </p>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Philosophy */}
      <section className="px-1">
        <h2 className="text-xl font-bold pb-2">Engineering Philosophy</h2>

        {engineeringPhilosophyItems.map((item: string, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: array is static and not reordered
          <div key={index} className="p-2">
            <div className="text-base flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Social */}
      <TooltipProvider>
        <div className="flex flex-row justify-start space-x-2 px-1">
          {socialItems.map((item: SocialItem, index: number) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: array is static and not reordered
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 [&_svg:not([class*='size-'])]:size-8 cursor-pointer"
                  >
                    {item.icon()}
                  </Button>
                </a>
              </TooltipTrigger>
              {/* `fill-primary` style is fixed, so override it */}
              <TooltipContent className="[&_svg]:fill-neutral-900 dark:[&_svg]:fill-neutral-50">
                <p>{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};
