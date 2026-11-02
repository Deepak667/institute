export type TrackCategory = 'all' | 'ai' | 'fullstack' | 'systems' | 'security';

export interface Lesson {
  id: string;
  title: string;
  type: 'lecture' | 'code-lab' | 'project' | 'peer-review';
  duration: string;
  description: string;
  deliverable?: string;
}

export interface CurriculumModule {
  id: string;
  weekNumber: string;
  title: string;
  phase: string;
  durationHours: number;
  status: 'completed' | 'in-progress' | 'locked';
  tags: string[];
  summary: string;
  lessons: Lesson[];
  capstoneProject: {
    title: string;
    description: string;
    techStack: string[];
  };
}

export interface Track {
  id: string;
  slug: string;
  title: string;
  category: TrackCategory;
  badge: {
    text: string;
    variant: 'cyan' | 'amber' | 'emerald' | 'indigo';
  };
  headline: string;
  description: string;
  rating: number;
  reviewsCount: number;
  durationWeeks: number;
  hoursPerWeek: string;
  avgStartingSalary: string;
  salaryUplift: string;
  nextCohortDate: string;
  seatsLeft: number;
  totalSeats: number;
  tuition: {
    upfront: number;
    monthly: number;
    isaAvailable: boolean;
  };
  techStack: string[];
  curriculum: CurriculumModule[];
  careerRoles: string[];
  featuredProject: {
    title: string;
    description: string;
    image: string;
    demoUrl?: string;
  };
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  trackSpecialty: string;
  experienceYears: number;
  bio: string;
  availableSlots: string[];
  topics: string[];
}

export interface StudentProject {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  cohort: string;
  trackTitle: string;
  tagline: string;
  image: string;
  stars: number;
  tags: string[];
  hiredAt?: string;
}

export interface CodingChallenge {
  id: string;
  trackId: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  language: 'python' | 'typescript' | 'rust';
  scenario: string;
  starterCode: string;
  expectedOutput: string;
  hints: string[];
  tests: {
    name: string;
    passed: boolean;
    assertion: string;
  }[];
}
