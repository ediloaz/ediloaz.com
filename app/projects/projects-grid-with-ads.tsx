"use client";

import { Fragment } from "react";
import AdSenseInFeed from "@/components/adsense/AdSenseInFeed";
import ProjectCard from "./project-card";
import { PROJECTS } from "./projects-data";

export default function ProjectsGridWithAds() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const slotList = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_LIST;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, index) => (
        <Fragment key={project.slug}>
          <ProjectCard project={project} index={index} />
          {index === 1 && clientId && slotList && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <AdSenseInFeed clientId={clientId} slot={slotList} className="my-2" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
