interface ProjectProps {
  id: number;
  title: string;
  slug: string;
  website_link?: string;
  work_scope?: string[];
  description?: string;
  overview?: string;
  link?: string;
  imgSrc?: string;
  backgroundClass?: string;
}

interface ProjectListProps {
  project: ProjectProps[];
  limit?: number;
}