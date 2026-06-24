import { InstagramPost, Trainer, Transformation } from '../types';

export const MOCK_POSTS: InstagramPost[] = [
    { id: '1', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&h=600&auto=format&fit=crop', caption: 'Pushing limits every single day at SYRO Kandivali. #FitnessMotivation', likes: '1.2k', comments: '48', type: 'image' },
    { id: '2', imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&h=600&auto=format&fit=crop', caption: 'Our 6AM crew bringing the heat! 🔥 #MorningWorkout', likes: '850', comments: '32', type: 'video' },
    { id: '3', imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=600&h=600&auto=format&fit=crop', caption: "Strength isn't just physical. It's mental. Join the elite. #StrongerTogether", likes: '2.1k', comments: '112', type: 'image' },
    { id: '4', imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2158?q=80&w=600&h=600&auto=format&fit=crop', caption: 'New lifting racks have arrived! Your PR is waiting. #GymLife', likes: '940', comments: '15', type: 'image' }
];

export const COACHES: Trainer[] = [
    { id: '1', name: 'Vikram Singh', role: 'Head of Performance', experience: '12+ Years', image: '/1images/1.jpg', video: '/assets/pillar-conditioning.mp4' },
    { id: '2', name: 'Ananya Rao', role: 'Metabolic Specialist', experience: '8+ Years', image: '/1images/4.jpg', video: '/assets/pillar-metabolic.mp4' },
    { id: '3', name: 'Rohan Mehta', role: 'Elite Strength Coach', experience: '10+ Years', image: '/1images/3.jpg', video: '/assets/pillar-hypertrophy.mp4' }
];

export const TRANSFORMATIONS: Transformation[] = [
    { id: '1', name: 'Amit K.', result: 'Lost 22kg in 6 Months', image: '/1images/amit.png' },
    { id: '2', name: 'Sonal M.', result: '15% Body Fat Reduction', image: '/1images/sonal.png' },
    { id: '3', name: 'Raj P.', result: 'Built 8kg Lean Muscle', image: '/1images/raj.png' }
];
