export interface Button {
  text: string;
  link: string;
}
export interface Project {
  organization: string;
  name: string;
  description: string;
  photo: string;
  skills: string[];
  button1: Button;
  button2: Button;
}
