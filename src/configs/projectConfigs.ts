export type Stack = 'NextJS' | 'ReactJS';

export interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  stacks: Stack[];
}

type ProjectConfigs = {
  projects: Project[];
};

export const projectConfigs: ProjectConfigs = {
  projects: [
    {
      title: 'NextJS Website',
      description: 'Wonderful feature',
      stacks: ['NextJS'],
      image:
        'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      link: '',
      github: '',
    },
  ],
};
