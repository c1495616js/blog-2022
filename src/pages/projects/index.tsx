import React from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '@/pages/_app';
import ProjectLayout from '@/components/ProjectLayout';
import Card from '@/components/projects/ProjectCard';
import { projectConfigs as datas, Stack } from '@/configs/projectConfigs';

const Project: NextPageWithLayout = ({ filter }: any) => {
  return (
    <div className="col-span-full flex items-start justify-center overflow-y-auto p-4 scrollbar-none md:col-span-9 md:p-8 lg:col-span-10 lg:p-16">
      <div className="grid h-max w-full grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {filter === 'all' ? (
          datas.projects.map((data, index) => {
            return <Card data={data} key={index} />;
          })
        ) : datas.projects.filter((tech) => tech.stacks.includes(filter))
            .length === 0 ? (
          <div className="col-span-4 flex h-full w-full items-center justify-center text-white">
            Not yet, comeback again later!
          </div>
        ) : (
          datas.projects
            .filter((tech) => tech.stacks.includes(filter))
            .map((data, index) => {
              return <Card data={data} key={index} />;
            })
        )}
      </div>
    </div>
  );
};

Project.getLayout = function getLayout(page: ReactElement) {
  return <ProjectLayout>{page}</ProjectLayout>;
};

export default Project;
