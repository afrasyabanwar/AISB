
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: 'Student' | 'Instructor' | 'Admin';
}

export interface CourseModule {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  progress: number; // Percentage from 0 to 100
  modules?: CourseModule[];
}

export interface QuizQuestion {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  course: string;
  timeLimit: number; // in minutes
  questions: QuizQuestion[];
}

export type AssistantStatus = 'idle' | 'listening' | 'processing' | 'speaking';

export interface AssistantMessage {
    speaker: 'user' | 'aisu';
    text: string;
}

export interface TimelinePost {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  commentsCount: number;
  upvotes: number;
}

export interface Assignment {
  id: string;
  title: string;
  courseId: string;
  dueDate: string; // e.g., '2024-08-15'
  status: 'Draft' | 'Published' | 'Archived';
}

export interface StudentAssignment {
  id: string; // Corresponds to an Assignment ID
  title: string;
  courseName: string;
  dueDate: string;
  description: string;
  status: 'Not Submitted' | 'Submitted' | 'Graded';
  grade?: string;
  feedback?: string;
  submission?: {
      text?: string;
      fileName?: string;
  };
}
