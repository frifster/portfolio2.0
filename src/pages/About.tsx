//@ts-ignore
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import CTA from "../components/CTA";
import {
    useQuery,
} from '@tanstack/react-query'


import "react-vertical-timeline-component/style.min.css";
import getCredentials from "../graphql/credentials.ts";
import Car from "../assets/icons/car.svg";
import Estate from "../assets/icons/estate.svg";
import PriceWise from "../assets/icons/pricewise.svg";
import Snapgram from "../assets/icons/snapgram.svg";

type WorkData = {
    id: string;
    workTitle: string;
    companyName: string;
    workLocation: string;
    startYear: string;
    endYear: string;
    workDescription?: string;
    workDetails?: string[];
};

const verticalTimelineIcons = [
    {
        icon: Car,
        bg: "#3498db",
    },
    {
        icon: Estate,
        bg: "#2ecc71",
    },
    {
        icon: PriceWise,
        bg: "#f1c40f",
    },
    {
        icon: Snapgram,
        bg: "#e67e22",
    },
];

const About = () => {

    const credentials = useQuery({
        queryKey: ['credentials'],
        queryFn: async () => {
            const {academics, businesses, projects, workExperiences}: any = await getCredentials;

            return {
                academics,
                businesses,
                projects,
                workExperiences
            }
        },
    })

    const data = credentials.data;

    if (credentials.isLoading) return <div>Loading...</div>

    if (credentials.isError) return <div>Error: {credentials.error.message}</div>

    const experiences = data?.workExperiences as WorkData[]

    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I'm{" "}
                <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
                    Eugene
        </span>{" "}
                👋
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                    Software Engineer based in the Philippines, specializing in React JS and React Native. I have six
                    (6) years of professional experience developing websites and mobile applications. I have helped
                    local and international clients design systems that will optimize their business operation
                    processes. Applications that automate tasks and generate reports are my forte.
                </p>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Work Experience.</h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        I've worked with all sorts of companies, leveling up my skills and
                        teaming up with smart people. Here's the rundown:
                    </p>
                </div>

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={experience.id}
                                date={experience.startYear + " - " + experience.endYear}
                                iconStyle={{background: verticalTimelineIcons[index % 4].bg}}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={verticalTimelineIcons[index % 4].icon}
                                            alt={experience.companyName}
                                            className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: verticalTimelineIcons[index % 4].bg,
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.workTitle}
                                    </h3>
                                    <p
                                        className='text-black-500 font-medium text-base'
                                        style={{margin: 0}}
                                    >
                                        {experience.companyName}
                                    </p>
                                    <p>
                                        {experience.workLocation}
                                    </p>
                                </div>
                                <p className='text-black-500/50 font-normal text-sm'>
                                    {experience.workDescription}
                                </p>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.workDetails?.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-black-500/50 font-normal pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className='border-slate-200'/>

            <CTA/>
        </section>
    );
};

export default About;