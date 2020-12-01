export type Course = {
  id: number,
  courseName: string,
  image: string,
  shortDescription: string,
  description: string,
  benefit: string,
  price: number,
  totalSlot: number,
  status: number
} | null;

export type Courses = Course[] | null;
