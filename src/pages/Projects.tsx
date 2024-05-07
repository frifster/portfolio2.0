import {Link} from "react-router-dom";

import CTA from "../components/CTA";
import Arrow from "../assets/icons/arrow.svg";
import {useQuery} from "@tanstack/react-query";
import getCredentials from "../graphql/credentials.ts";
import Car from "../assets/icons/car.svg";
import Estate from "../assets/icons/estate.svg";
import PriceWise from "../assets/icons/pricewise.svg";
import Snapgram from "../assets/icons/snapgram.svg";
import Summiz from "../assets/icons/summiz.svg";
import ReactSVG from "../assets/icons/react.svg";

type ProjectData = {
    id: string,
    title: string,
    role: string,
    company: string,
    link: string,
    image?: string,
    codeRepo?: {
        githubLink: string,
        private: boolean
    },
    projectDesc?: string[],
    techstack?: string[]
}

const timeLineIcons = [
    {
        icon: Car,
        bg: "#3498db",
        theme: "btn-back-red"
    },
    {
        icon: Estate,
        bg: "#2ecc71",
        theme: "btn-back-blue"
    },
    {
        icon: PriceWise,
        bg: "#f1c40f",
        theme: "btn-back-black"
    },
    {
        icon: Snapgram,
        bg: "#e67e22",
        theme: "btn-back-orange"
    },
    {
        icon: ReactSVG,
        bg: "#e74c3c",
        theme: "btn-back-yellow"
    },
    {
        icon: Summiz,
        bg: "#8e44ad",
        theme: "btn-back-green"
    }
]


const Projects = () => {
    const credentials = useQuery({
        queryKey: ['credentials'],
        queryFn: async () => {
            const {projects}: any = await getCredentials;

            return {
                projects
            }
        },
    })

    const data = credentials.data;

    if (credentials.isLoading) return <div>Loading...</div>

    if (credentials.isError) return <div>Error: {credentials.error.message}</div>

    const projects = data?.projects as ProjectData[]

    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My{" "}
                <span className='green-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
            </h1>

            <p className='text-slate-500 mt-2 leading-relaxed'>
                I've embarked on numerous projects throughout the years, but these are
                the ones I hold closest to my heart. Many of them are open-source, so if
                you come across something that piques your interest, feel free to
                explore the codebase and contribute your ideas for further enhancements.
                Your collaboration is highly valued!
            </p>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects?.map((project, index) => (
                    <div className='lg:w-[400px] w-full' key={project.title}>
                        <div className='block-container w-12 h-12'>
                            <div
                                className={`btn-back rounded-xl ${timeLineIcons[index % timeLineIcons.length].theme}`}/>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={timeLineIcons[index % timeLineIcons.length].icon}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.title}
                            </h4>
                            <p className='mt-2 text-slate-500'>{project.projectDesc || ""}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-green-600'
                                >
                                    Live Link
                                </Link>
                                <img
                                    src={Arrow}
                                    alt='arrow'
                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200'/>

            <CTA/>
        </section>
    );
};

export default Projects;