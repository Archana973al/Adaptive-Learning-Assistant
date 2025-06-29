import { Question } from '../types/quiz';

export const QUESTIONS: Record<string, Question[]> = {
  math: [
    {
      id: '1',
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      topic: 'math',
      explanation: 'Basic addition'
    },
    // Add more math questions...
  ],
  science: [
    {
      id: '1',
      question: 'What is H2O?',
      options: ['Water', 'Salt', 'Oxygen', 'Carbon Dioxide'],
      correctAnswer: 0,
      topic: 'science',
      explanation: 'Chemical formula for water'
    }
    // Add more science questions...
  ]
  // Add other topics...
};