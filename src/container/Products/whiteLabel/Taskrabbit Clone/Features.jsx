'use client';

import React, { useState } from 'react';
import {
    Users, MessageCircle, CalendarClock, MapPin, ShieldCheck,
    DollarSign, Star, BellRing, ClipboardList, Repeat
} from 'lucide-react';
import Paragraph from '@/Layout/Paragraph';
import WrapperContainer from '@/Layout/WrapperContainer';
import Image from 'next/image';

const features = [
    {
        title: 'Post Tasks Easily',
        description: 'Users can post tasks with clear details including category, time, location, and budget.',
        icon: ClipboardList,
    },
    {
        title: 'Browse Tasker Profiles',
        description: 'View taskers with verified reviews, hourly rates, and skill tags.',
        icon: Users,
    },
    {
        title: 'Real-Time Messaging',
        description: 'Communicate with taskers in real-time before finalizing bookings.',
        icon: MessageCircle,
    },
    {
        title: 'Schedule & Book',
        description: 'Set specific time slots for task execution with calendar integration.',
        icon: CalendarClock,
    },
    {
        title: 'Map-Based Search',
        description: 'Find nearby taskers based on your location using interactive maps.',
        icon: MapPin,
    },
    {
        title: 'Secure Payments',
        description: 'All transactions are encrypted and processed via trusted gateways.',
        icon: DollarSign,
    },
    {
        title: 'Ratings & Reviews',
        description: 'Rate taskers and leave feedback after task completion.',
        icon: Star,
    },
    {
        title: 'Smart Notifications',
        description: 'Stay updated with task confirmations, reminders, and promos.',
        icon: BellRing,
    },
    {
        title: 'Recurring Tasks',
        description: 'Setup regular tasks like cleaning or maintenance automatically.',
        icon: Repeat,
    },
    {
        title: 'Verified & Safe',
        description: 'All taskers undergo background verification for your safety.',
        icon: ShieldCheck,
    },
];

const images = [
    'https://i.pinimg.com/736x/09/76/72/097672bb3ec1f9dfc8705dab906c7cde.jpg',
    'https://cdn.dribbble.com/users/725875/screenshots/14151398/media/fb4d61ecae008fb572ced523f9fe73f7.jpg?resize=1000x750&vertical=center',
    'https://cdn.dribbble.com/users/452995/screenshots/4816937/report-800.png?resize=768x576&vertical=center',
    'https://cdn.dribbble.com/users/452995/screenshots/4816937/report-800.png?resize=768x576&vertical=center',
    'https://s3.amazonaws.com/media.nngroup.com/media/editor/2014/02/21/taskrabbit.png',
    'https://oyelabs.com/wp-content/uploads/2024/11/TaskRabbit-clone-service-preview-and-payment-successful-feature.png',
    'https://i.pinimg.com/736x/90/6a/ef/906aeffaca00e3d9635970be2aeb4ec9.jpg',
    'https://cdn.dribbble.com/users/910876/screenshots/4882727/notifications.gif',
    'https://ewzduhvhjkj.exactdn.com/wp-content/uploads/2020/12/15205110/How_TaskRabbit_Works.svg',
    'https://images.milledcdn.com/2023-10-05/pIlJxiLYz1zomrGg/c@2x.jpg',
];

const TaskRabbitFeatures = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalGroups = Math.ceil(features.length / 2);

    const handleNext = () => {
        if (currentIndex < totalGroups - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const leftFeature = features[currentIndex * 2];
    const rightFeature = features[currentIndex * 2 + 1];
    const image = images[currentIndex];
    const isImageLeft = currentIndex % 2 === 0;

    return (
        <WrapperContainer>
            <div className="flex flex-col items-center justify-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-center">Why Choose Our TaskRabbit Clone?</h2>
                <Paragraph className="text-center mb-6">
                    Empower users with the best-in-class task outsourcing features built for convenience, security, and speed.
                </Paragraph>

                {/* Top Navigation Button */}
                <div className="mb-6">
                    <button
                        onClick={handlePrevious}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
                        disabled={currentIndex === 0}
                    >
                        Previous
                    </button>
                </div>

                {/* Feature Block */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Image left */}
                    {isImageLeft && (
                        <div className="relative w-full md:w-1/3 h-[120px]">
                            <Image
                                src={image}
                                alt="Feature Image"
                                fill
                                className="rounded-xl object-cover shadow-md"
                            />
                        </div>
                    )}

                    {/* Left Feature */}
                    {leftFeature && (() => {
                        const LeftIcon = leftFeature.icon;
                        return (
                            <div className="w-full md:w-1/3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-center shadow-lg transition-all duration-300">
                                <LeftIcon size={48} className="mx-auto text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{leftFeature.title}</h3>
                                <p className="text-gray-500">{leftFeature.description}</p>
                            </div>
                        );
                    })()}

                    {/* Right Feature */}
                    {rightFeature && (() => {
                        const RightIcon = rightFeature.icon;
                        return (
                            <div className="w-full md:w-1/3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-center shadow-lg transition-all duration-300">
                                <RightIcon size={48} className="mx-auto text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{rightFeature.title}</h3>
                                <p className="text-gray-500">{rightFeature.description}</p>
                            </div>
                        );
                    })()}

                    {/* Image right */}
                    {!isImageLeft && (
                        <div className="relative w-full md:w-1/3 h-[120px]">
                            <Image
                                src={image}
                                alt="Feature Image"
                                fill
                                className="rounded-xl object-cover shadow-md"
                            />
                        </div>
                    )}
                </div>

                {/* Bottom Navigation Button */}
                <div className="mt-6">
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
                        disabled={currentIndex >= totalGroups - 1}
                    >
                        Next
                    </button>
                </div>
            </div>
        </WrapperContainer>
    );
};

export default TaskRabbitFeatures;
