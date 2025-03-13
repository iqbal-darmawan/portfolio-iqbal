"use client";

import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  SchoolIcon,
  BriefcaseBusiness,
  ExternalLinkIcon,
  Code,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import "./custom.css";
import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { setTheme } = useTheme();
  setTheme("light");
  const words = ["Fullstack-Developer", "Designer", "Digital-Creative"];

  const count = useMotionValue(0);
  const countProject = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const roundedProject = useTransform(countProject, Math.round);

  useEffect(() => {
    const controls = animate(count, 3, { duration: 1, ease: "linear" });
    const controlsProject = animate(countProject, 20, {
      duration: 1,
      ease: "linear",
    });
    return () => {
      controls.stop();
      controlsProject.stop();
    };
  }, [count, countProject]);

  return (
    <main className="grid grid-cols-4 p-10 md:p-24 gap-x-10 w-100">
      {/* sidebar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="sticky top-[96px] h-min col-span-1 max-md:col-span-4 max-md:static"
      >
        <div className="flex flex-col gap-4 w-50">
          <div className="flex flex-col gap-4 border-2 border-dashed border-slate-500 rounded-3xl p-6 justify-center items-center ">
            <div className="flex justify-center w-full">
              <h1 className="text-2xl font-bold">Iqbal Darmawan</h1>
            </div>
            <Image
              src={"/profile.jpg"}
              alt="profile"
              width={250}
              height={150}
              className="rounded-3xl object-cover w-full h-80"
              priority={true}
            />
            <div className="flex justify-center w-full">
              <h1 className="text-base font-medium text-center">
                Fullstack Developer | Designer | Digital Creative
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <a
                href="https://docs.google.com/document/d/1qCzzwc7U1jeWVPABt7hS9EdsOpnvah8soBqyMVJwH70/edit?usp=sharinghttps://drive.google.com/file/d/1QKS6YJH70dFSs9ol9F4hkYHie4mKfdCO/view?usp=sharing"
                target="_blank"
                className=" text-center mr-1 flex gap-2 items-center hover:underline"
              >
                Download Resume <ExternalLinkIcon width={20} />
              </a>
            </div>
            <div className="flex justify-center align-center gap-4 w-full">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, duration: 1 }}
                className="p-2 text-gray-500 hover:text-black hover:bg-white hover:rounded-full hover:shadow-lg flex justify-center items-center"
              >
                <a
                  href="https://www.linkedin.com/in/iqbal-darmawan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo-linkedin.png"
                    width={30}
                    height={30}
                    alt="linkedin"
                  />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, duration: 1 }}
                className="p-2 text-gray-500 hover:text-black hover:bg-white hover:rounded-full hover:shadow-lg flex justify-center items-center"
              >
                <a
                  href="https://www.instagram.com/iqbaldarmawan27/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo-instagram.png"
                    width={22}
                    height={22}
                    alt="instagram"
                  />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, duration: 1 }}
                className="p-2 text-gray-500 hover:text-black hover:bg-white hover:rounded-full hover:shadow-lg flex justify-center items-center"
              >
                <a
                  href="https://github.com/iqbal-darmawan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo-github.png"
                    width={20}
                    height={20}
                    alt="github"
                  />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, duration: 1 }}
                className="p-2 text-gray-500 hover:text-black hover:bg-white hover:rounded-full hover:shadow-lg flex justify-center items-center"
              >
                <a
                  href="https://www.tiktok.com/@iqbal_it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logo-tiktok.svg"
                    width={20}
                    height={20}
                    alt="tiktok"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* end sidebar */}

      <div className="col-span-3 max-md:col-span-4">
        {/* hero section */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#CB6040"
        />
        <div className="overview h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl leading-relaxed tracking-wide flex "
          >
            Hello, I{"'"}m{" "}
            <motion.div
              initial={{ scale: 1, x: 10 }}
              whileHover={{ scale: 1.1, x: 34 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-deep-teal font-bold"
            >
              Iqbal Darmawan.
            </motion.div>
          </motion.div>
          <div className="text-6xl leading-relaxed tracking-wide">
            Welcome to my journey as a{" "}
          </div>
          <FlipWords
            words={words}
            className="text-6xl leading-relaxed tracking-wide mb-5 text-terra-cotta font-bold"
          />
          <p className="text-2xl text-gray-500 mt-5">
            Starting with simple code, now going further in creating digital
            solutions.
          </p>
          <div className="flex gap-10 mt-10">
            <div>
              <motion.div className="text-6xl font-bold text-terra-cotta flex">
                <motion.pre>{rounded}</motion.pre>
                <motion.div>+</motion.div>
              </motion.div>
              <h6 className="mt-2">Year of Experience</h6>
            </div>
            <div>
              <motion.div className="text-6xl font-bold text-terra-cotta flex">
                <motion.pre>{roundedProject}</motion.pre>
                <motion.div>+</motion.div>
              </motion.div>
              <h6 className="mt-2">Projects Completed</h6>
            </div>
          </div>
        </div>
        {/* END HERO SECTION */}

        {/* ABOUT SECTION */}
        <div className="flex flex-col gap-4 mb-[128px]">
          <h1 className="text-6xl font-bold text-white dark:text-sky-500 relative inline-block before:z-[-1] before:absolute before:-top-6 before:-bottom-6 before:-inset-x-1 before:-skew-y-6 before:bg-terra-cotta before:shadow-lg before:rounded-lg w-fit px-4">
            About Us
          </h1>
          <h4 className="text-2xl text-gray-500 mt-16 italic">
            ”I believe that every big idea starts from a small dream that
            continues to grow.”
          </h4>
          <p className="text-xl leading-relaxed text-justify">
            I have always been fascinated by the world of computers and
            technology. Although I did not have an IT education background in
            high school, the desire to create software that is useful for
            society never faded. With that determination, I decided to continue
            my studies in Information Technology. There, I began to explore the
            world of software development, gain knowledge, and hone my skills.
            My experience continued to grow as I worked on various projects,
            including my greatest achievement in developing IT solutions for a
            bank that included residence management, such as electricity bill
            payment systems and others. This journey led me to finally found
            Texio.id, a company that focuses on creating millennial applications
            and websites with the latest concepts.
          </p>
          {/* <ThreeDCardDemo /> */}
        </div>
        {/* END ABOUT SECTION */}

        {/* EDUCATION SECTION */}
        <div className="flex flex-col gap-4 mb-[128px]">
          <h1 className="text-6xl font-bold text-terra-cotta relative inline-block before:z-[-1] before:absolute before:-top-6 before:-bottom-6 before:-inset-x-1 before:-skew-y-6 before:bg-white w-fit px-4">
            Education
          </h1>
          <VerticalTimeline layout="1-column">
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#CB6040", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #CB6040",
              }}
              date="August 2022 - January 2024"
              iconStyle={{ background: "#CB6040", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">
                Bachelor of Computer Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Politeknik Elektronika Negeri Surabaya
              </h4>
              <ul className="list-disc list-inside mt-2">
                <li>Cumulative GPA: 3.69/4.0.</li>
                <li>
                  My Final Project is make a classification of clothing types
                  for lamalama.id with machine learning, python, and flask
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#CB6040", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #CB6040",
              }}
              date="May 2019 - August 2022"
              iconStyle={{ background: "#CB6040", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">
                Advanced Diploma of Computer Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Politeknik Elektronika Negeri Surabaya
              </h4>
              <ul className="list-disc list-inside mt-2">
                <li>Cumulative GPA: 3.71/4.0.</li>
                <li>
                  My Final Project is PENS budget realization information system
                  with PHP and MySQL
                </li>
                <li>
                  Complete the Competency Certification for creating dynamic web
                  applications.
                </li>
                <li>
                  Contributed in ENT (Eepis News and Network Team) organitation
                  supervised by public relations PENS.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        {/* END EDUCATION SECTION */}
        <div className="flex gap-4 w-full mb-[128px]">
          <Card className="w-full border-4 border-slate-500 bg-white">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-terra-cotta">
                Experience
              </CardTitle>
              <CardDescription className="text-xl mt-2 text-neutral-400 italic">
                Every project I work on is a step forward in the journey of
                building meaningful digital solutions.
              </CardDescription>
            </CardHeader>
            <div className="flex gap-4 w-full justify-around flex-wrap p-8">
              <div className="w-1/3">
                <CardContent>
                  <div className="flex gap-4">
                    <BriefcaseBusiness size={48} />
                    <div>
                      <h4 className="text-2xl font-bold text-terra-cotta">
                        Fullstack Developer
                      </h4>
                      <h5 className="text-l font-bold text-neutral-500 mb-4">
                        PT. Vascomm Solusi Teknologi
                      </h5>
                      <p>September 2022 - Present</p>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <div className="flex gap-4">
                    <BriefcaseBusiness size={48} />
                    <div>
                      <h4 className="text-2xl font-bold text-terra-cotta">
                        CO-Founder
                      </h4>
                      <h5 className="text-l font-bold text-neutral-500 mb-4">
                        PT. Texio Mitra Digitalisasi Indonesia
                      </h5>
                      <p>August 2023 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </div>
              <div className="border border-slate-500"></div>
              <div className="w-1/3">
                <CardContent>
                  <div className="flex gap-4">
                    <BriefcaseBusiness size={48} />
                    <div>
                      <h4 className="text-2xl font-bold text-terra-cotta">
                        Web Developer
                      </h4>
                      <h5 className="text-l font-bold text-neutral-500 mb-4">
                        LamaLama.id
                      </h5>
                      <p>June 2022 - Dec 2022</p>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <div className="flex gap-4">
                    <BriefcaseBusiness size={48} />
                    <div>
                      <h4 className="text-2xl font-bold text-terra-cotta">
                        Frontend Developer
                      </h4>
                      <h5 className="text-l font-bold text-neutral-500 mb-4">
                        PT. Otak Kanan
                      </h5>
                      <p>June 2021 - September 2021</p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
        {/* END EXPERIENCE SECTION */}
        {/* START SKILL SECTION */}
        <div className="flex gap-4 w-full mb-[128px]">
          <h1 className="text-6xl font-bold text-terra-cotta dark:text-sky-500 relative inline-block before:z-[-1] before:absolute before:-top-6 before:-bottom-6 before:-inset-x-1 before:-skew-y-6 before:bg-white before:shadow-lg before:rounded-lg w-fit px-4">
            My Expertise
          </h1>
        </div>
        <div className="flex gap-4 w-full mb-[128px]">
          <Card className="w-full border-4 border-slate-500 bg-white">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-terra-cotta">
                Skills
              </CardTitle>
              <CardDescription className="text-xl mt-2 text-neutral-400 italic">
                Every project I work on is a step forward in the journey of
                building meaningful digital solutions.
              </CardDescription>
            </CardHeader>
            <div className="flex gap-4 w-full justify-around flex-wrap p-8">
              <div className="w-full">
                <CardContent>
                  <div className="grid grid-cols-2">
                    <div className="flex gap-4">
                      <Code size={48} />
                      <div>
                        <h4 className="text-2xl font-bold text-terra-cotta">
                          Frontend
                        </h4>
                        <h5 className="text-l font-bold text-neutral-500 mb-4">
                          React, Next.js, Tailwind CSS, Bootstrap
                        </h5>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Code size={48} />
                      <div>
                        <h4 className="text-2xl font-bold text-terra-cotta">
                          Backend
                        </h4>
                        <h5 className="text-l font-bold text-neutral-500 mb-4">
                          Laravel, Node.js, Express.js, NestJS, NextJs, Python, C,
                          Web Socket
                        </h5>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Code size={48} />
                      <div>
                        <h4 className="text-2xl font-bold text-terra-cotta">
                          Database
                        </h4>
                        <h5 className="text-l font-bold text-neutral-500 mb-4">
                          MySQL, MongoDB, Redis
                        </h5>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Code size={48} />
                      <div>
                        <h4 className="text-2xl font-bold text-terra-cotta">
                          Project Management
                        </h4>
                        <h5 className="text-l font-bold text-neutral-500 mb-4">
                          Jira, Trello, Redmine, Agile Methodologies, Scrum,
                          Waterfall
                        </h5>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Code size={48} />
                      <div>
                        <h4 className="text-2xl font-bold text-terra-cotta">
                          Creative
                        </h4>
                        <h5 className="text-l font-bold text-neutral-500 mb-4">
                          Figma, Adobe Illustrator, Adobe Photoshop, Adobe XD
                        </h5>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Code size={48} />
                      <div>
                        <h4 className="text-2xl font-bold text-terra-cotta">
                          SoftSkill
                        </h4>
                        <h5 className="text-l font-bold text-neutral-500 mb-4">
                          Communication, Problem Solving, Critical Thinking
                        </h5>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
        {/* END SKILL SECTION */}
        {/* START PROJECT SECTION */}
        <div className="flex gap-4 w-full mb-[128px]">
          <h1 className="text-6xl font-bold text-terra-cotta dark:text-sky-500 relative inline-block before:z-[-1] before:absolute before:-top-6 before:-bottom-6 before:-inset-x-1 before:-skew-y-6 before:bg-white before:shadow-lg before:rounded-lg w-fit px-4">
            My Project
          </h1>
        </div>
        <div className="flex flex-col gap-4 w-full space-y-16">
          <div className="h-[20rem] w-full flex items-center">
            <PinContainer
              title="smartresidence"
              href="https://smartresidence.btn.co.id/"
              className="bg-white"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-auto ">
                <Image src="/projects/1.png" alt="" width={500} height={500} />
              </div>
            </PinContainer>
            <Card className="h-[20rem] p-4 border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-terra-cotta">
                  Smart Residence
                  <div className="flex items-center gap-2 my-2">
                    <Badge className="text-sm">Mobile</Badge>
                    <Badge className="text-sm">Website</Badge>
                  </div>
                </CardTitle>
                <CardDescription className="text-xl mt-2 text-neutral-800 italic">
                  Mobile Platform Application and Website for bill payments such
                  as Air, Electricity, and Telephone by Bank BTN. This
                  application uses nodeJS technology for the backend and laravel
                  for the frontend.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Code size={48} />
                  <div>
                    <h4 className="text-2xl font-bold text-terra-cotta">
                      Fullstack Developer
                    </h4>
                    <h5 className="text-l font-bold text-neutral-500 mb-4">
                      Node.js, Express.js, Laravel, Sequelize, MySQL, MongoDB,
                      Redis
                    </h5>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[20rem] w-full flex items-center">
            <PinContainer
              title="Media Reaksi Surindo"
              href="https://play.google.com/store/apps/details?id=com.puk.dunlop.texio.id&hl=id"
              className="bg-white"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-auto ">
                <Image src="/projects/2.png" alt="" width={500} height={500} />
              </div>
            </PinContainer>
            <Card className="h-[20rem] p-4 border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-terra-cotta">
                  Media Reaksi Surindo
                  <div className="flex items-center gap-2 my-2">
                    <Badge className="text-sm">Mobile</Badge>
                    <Badge className="text-sm">Website</Badge>
                  </div>
                </CardTitle>
                <CardDescription className="text-xl mt-2 text-neutral-800 italic">
                  Application and mobile platform for internal employee and
                  public information regarding PUK Dunlop activities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Code size={48} />
                  <div>
                    <h4 className="text-2xl font-bold text-terra-cotta">
                      Fullstack Developer
                    </h4>
                    <h5 className="text-l font-bold text-neutral-500 mb-4">
                      Laravel, MySQL
                    </h5>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[20rem] w-full flex items-center">
            <PinContainer
              title="Saim Kelola Penjemputan Sekolah"
              href="https://saimfinder.saim.sch.id/login?callbackUrl=https%3A%2F%2Fsaimfinder.saim.sch.id%2F"
              className="bg-white"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-auto ">
                <Image src="/projects/3.png" alt="" width={500} height={500} />
              </div>
            </PinContainer>
            <Card className="h-[20rem] p-4 border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-terra-cotta">
                  Saim School
                  <div className="flex items-center gap-2 my-2">
                    <Badge className="text-sm">Website</Badge>
                  </div>
                </CardTitle>
                <CardDescription className="text-xl mt-2 text-neutral-800 italic">
                  The Website Platform uses the PWA system to make it easier to
                  find school pick-ups.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Code size={48} />
                  <div>
                    <h4 className="text-2xl font-bold text-terra-cotta">
                      Fullstack Developer
                    </h4>
                    <h5 className="text-l font-bold text-neutral-500 mb-4">
                      NextJS, MySQL, MongoDB
                    </h5>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[20rem] w-full flex items-center">
            <PinContainer title="Ez Recruit" href="#" className="bg-white">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-auto ">
                <Image src="/projects/4.png" alt="" width={500} height={500} />
              </div>
            </PinContainer>
            <Card className="h-[20rem] p-4 border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-terra-cotta">
                  Ez Recruit
                  <div className="flex items-center gap-2 my-2">
                    <Badge className="text-sm">Website</Badge>
                  </div>
                </CardTitle>
                <CardDescription className="text-xl mt-2 text-neutral-800 italic">
                  Website platform for searching job vacancies for companies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Code size={48} />
                  <div>
                    <h4 className="text-2xl font-bold text-terra-cotta">
                      Frontend Developer
                    </h4>
                    <h5 className="text-l font-bold text-neutral-500 mb-4">
                      NextJS, NestJS, MySQL
                    </h5>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[20rem] w-full flex items-center">
            <PinContainer
              title="Luxspace"
              href="https://luxpace-vascomm-training.netlify.app/"
              className="bg-white"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-auto ">
                <Image src="/projects/5.png" alt="" width={500} height={500} />
              </div>
            </PinContainer>
            <Card className="h-[20rem] p-4 border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-terra-cotta">
                  Luxspace
                  <div className="flex items-center gap-2 my-2">
                    <Badge className="text-sm">Website</Badge>
                  </div>
                </CardTitle>
                <CardDescription className="text-xl mt-2 text-neutral-800 italic">
                  website platform which is a personal project using react.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Code size={48} />
                  <div>
                    <h4 className="text-2xl font-bold text-terra-cotta">
                      Frontend Developer
                    </h4>
                    <h5 className="text-l font-bold text-neutral-500 mb-4">
                      ReactJS
                    </h5>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[20rem] w-full flex items-center">
            <PinContainer
              title="Texio Indonesia"
              href="https://texio.id/"
              className="bg-white"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-auto ">
                <Image src="/projects/6.png" alt="" width={500} height={500} />
              </div>
            </PinContainer>
            <Card className="h-[20rem] p-4 border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-terra-cotta">
                  Texio Indonesia
                  <div className="flex items-center gap-2 my-2">
                    <Badge className="text-sm">Website</Badge>
                  </div>
                </CardTitle>
                <CardDescription className="text-xl mt-2 text-neutral-800 italic">
                  Website platform for company profile. Texio is a company
                  founded by students who often work on projects and then try to
                  create their own company and survive until now.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Code size={48} />
                  <div>
                    <h4 className="text-2xl font-bold text-terra-cotta">
                      Fullstack Developer
                    </h4>
                    <h5 className="text-l font-bold text-neutral-500 mb-4">
                      Wordpress
                    </h5>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
