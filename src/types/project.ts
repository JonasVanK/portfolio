export interface project {
  title: string;
  image: string;
  inProgress: boolean;
  date: Date;
  description: string;
  technologies: string[];
  gitUrl: string | null;
}
