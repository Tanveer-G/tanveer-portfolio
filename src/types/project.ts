// export interface Project {
//     id: number;
//     title: string;
//     image: string;
//     techStack: string;
//     description: string;
//     live?: string;
//     video?: string;
//     github: string;
//   }
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  live?: string;
  video?: string;
  github: string;
  featured?: boolean;
  categories: string[];
}