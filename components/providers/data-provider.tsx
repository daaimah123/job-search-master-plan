"use client"

import React, { createContext, useContext, type ReactNode } from "react"

// Define types for accomplishments and metrics
type CaseStudyBucket =
  | "Technical Curriculum Development"
  | "Curriculum Standardization"
  | "Project Management"
  | "Adult Learning"
  | "Cross-Functional Collaboration"
  | "Learning Culture Development"
  | "Learning Experience Design"
  | "Adult Learning Application"
  | "Measurement & Evaluation"
  | "Program Management"
  | "Learning Technology Implementation"
  | "Technical Knowledge"

type Accomplishment = {
  id: number
  title: string
  buckets: CaseStudyBucket[]
  challenge: string
  importance: string
  solution: string
  strengths: string
  consequences: string
  resources: string
}

// Define the shape of our context data
type UserData = {
  name: string
  accomplishments: Accomplishment[]
  metrics: { [key: string]: string }
  problemSolvingInsights: {
    energizingProblems: string[]
    easyTasks: string[]
  }
  selfReflection: {
    obstacles: {
      title: string
      situation: string
      strengths: string
      learned: string
      benefits: string
    }[]
    joys: {
      sources: string[]
      explanation: string[]
    }
  }
  skills: string[]
  goals: string[]
}

// User data with actual accomplishments and metrics
const defaultUserData: UserData = {
  name: "Daaimah Tibrey",
  accomplishments: [
    {
      id: 1,
      title: "Raspberry Pi Curriculum at Hack the Hood",
      buckets: ["Technical Curriculum Development", "Curriculum Standardization"],
      challenge:
        "The challenge was to rapidly develop and implement a comprehensive Raspberry Pi curriculum for virtual delivery during the pandemic. I needed to create technical content that was accessible to beginners, train instructors who may not have had deep Raspberry Pi experience, and ensure the curriculum could be effectively delivered in a virtual environment when most technical education relied on in-person instruction.",
      importance:
        "This mattered tremendously because without a virtual solution, Hack the Hood's educational programs would have been completely disrupted by the pandemic. The organization's mission to provide technical education to underserved youth would have been compromised, potentially resulting in lost funding, decreased community impact, and damaged organizational reputation.",
      solution:
        "I developed a comprehensive virtual curriculum for Raspberry Pi, created instructor training programs, established partnerships with Wix & TechExchange for technical resources, and implemented software installation processes for donated PCs. I adapted hands-on exercises for virtual completion and created robust documentation to support both instructors and students in the new learning environment.",
      strengths:
        "I leveraged my technical expertise, curriculum development skills, adaptability in crisis, cross-functional collaboration abilities, and empathy for both instructors and learners. my ability to quickly pivot strategies while maintaining educational quality was particularly crucial.",
      consequences:
        "If this problem remained unsolved, Hack the Hood would have had to suspend its technical education programs during the pandemic, resulting in: Loss of educational opportunities for underserved youth, potential funding cuts due to inability to deliver promised programs, disengagement of instructors and students, damaged organizational reputation and community relationships.",
      resources:
        "My solution preserved: Time: Prevented months of program disruption, Money: Maintained funding streams by continuing to deliver on grant commitments, Opportunity: Kept educational pathways open for underserved youth during a critical time, Talent: Retained instructors who might have sought other opportunities, Relationships: Maintained and strengthened partnerships with technical organizations.",
    },
    {
      id: 2,
      title: "Apprenticeship Program at Bridging Tech",
      buckets: ["Project Management", "Adult Learning"],
      challenge:
        "The challenge was to create and manage a technical education platform for homeless grade-school youth while simultaneously providing mentorship to learning technical apprentices building the platform. I needed to balance the educational needs of the apprentices with the technical project requirements of the platform, all while ensuring the final product would effectively serve homeless grade-school youth users.",
      importance:
        "This mattered because it represented Bridging Tech's core mission of both developing underrepresented technical talent through apprenticeships and creating educational resources for homeless grade-school youth. Success would demonstrate the organization's effectiveness, potentially attract more funding and partnerships, and providing an accessible platform for homeless grade-school youth to consume literacy resources. While failure would undermine its fundamental purpose and showed that the apprentice technologists were not acclimated to a real-world development setting.",
      solution:
        "I implemented a structured project management approach that incorporated both educational opportunities and technical objectives. I provided direct technical mentorship, facilitated code reviews, established clear milestones and deliverables, facilitated liaison communication between the client and apprentice negineers, mitigated risks, and created a feedback system that supported apprentice growth while ensuring platform quality. I also implemented collaborative problem-solving approaches and scaffolded learning experiences.",
      strengths:
        "I leveraged my technical expertise, mentorship skills, project management abilities, patience, communication skills, and ability to balance competing priorities. My experience in both software development and non-traditional adult education was particularly valuable.",
      consequences:
        "If this problem remained unsolved: Apprentices would have missed valuable skill development opportunities, the technical education platform would have been incomplete or ineffective, homeless grade-school youth users would not have received the educational resources they needed, Bridging Tech's reputation and ability to secure future funding would have been damaged, the partnership between Bridging Tech and Code Tenderloin might have deteriorated.",
      resources:
        "My solution preserved: Time: Efficient project management prevented delays and rework, Money: Effective mentorship reduced the need for external consultants, Opportunity: Created learning pathways for both apprentices and youth users, Relationships: Strengthened the partnership between Bridging Tech and Code Tenderloin, Talent: Developed apprentices who could contribute to future projects.",
    },
    {
      id: 3,
      title: "Blacks In Tech (BIT) at SurveyMonkey",
      buckets: ["Cross-Functional Collaboration", "Learning Culture Development"],
      challenge:
        "The challenge was to establish a community that would support Black technologists at SurveyMonkey, addressing issues of representation, inclusion, retention, internal opportunity, and professional development in an industry with significant diversity disparities. I needed to create structures and programs that would foster community, provide networking opportunities, and guide the organization's leaders and changing agents on issues affecting Black engineers.",
      importance:
        "This mattered because it addressed critical issues of diversity, equity, and inclusion that impact both company culture and business outcomes. Research consistently shows that diverse teams produce better results, and improving the experience of Black technologists would help SurveyMonkey attract and retain diverse talent, enhance innovation, and better serve diverse customers.",
      solution:
        "I co-founded and co-led BIT, established governance structures, organized regular community meetings, implemented mentorship and professional development programs, coordinated networking events, and represented BIT in discussions with organizational leadership. I created an active sustainable community model that could continue beyond my direct involvement.",
      strengths:
        "I leveraged my leadership abilities, community-building skills, cultural competence, strategic thinking, persistence, and ability to navigate organizational politics. my personal experience as a Black technologist provided valuable insight and authenticity.",
      consequences:
        "If this problem remained unsolved: Black technologists at SurveyMonkey would have continued to feel isolated, unsupported, systemic inequities in hiring and promotion would persist, and churn would persist. The organization would have struggled to attract and retain diverse talent. Innovation would have been limited by homogeneous perspectives. SurveyMonkey would have missed opportunities to address issues affecting a significant portion of its workforce. The company's DEI initiatives would have lacked authenticity and impact.",
      resources:
        "My solution preserved: Time: Reduced time spent on individual DEI initiatives by creating a coordinated approach, Money: Improved retention of Black talent, reducing recruitment and onboarding costs, Opportunity: Created pathways for Black technologists to advance and contribute more fully, Reputation: Enhanced SurveyMonkey's standing as an inclusive employer, Talent: Helped attract and develop diverse technical talent.",
    },
    {
      id: 4,
      title: "Rebranding Material Delivery at SurveyMonkey",
      buckets: ["Cross-Functional Collaboration", "Technical Knowledge"],
      challenge:
        "The challenge was to coordinate the delivery of rebranding materials across various stakeholders under out-of-process and time-sensitive deadlines. I needed to manage complex cross-functional dependencies, align technical implementation with marketing and design requirements, and ensure consistent implementation across different platforms and touchpoints, all while working with classified knowledge outside normal processes.",
      importance:
        "This mattered because rebranding represents a critical strategic initiative with high visibility both internally and externally. Successful implementation would reinforce SurveyMonkey's market position and brand identity, while failures or inconsistencies would damage brand perception, confuse customers, and potentially impact revenue. The time-sensitive nature meant delays could disrupt coordinated marketing campaigns and announcements.",
      solution:
        "I led cross-functional meetings to coordinate efforts, managed technical implementation using TypeScript, React, and GraphQL, facilitated clear communication between technical and non-technical teams, and coordinated parallel development efforts to accelerate delivery. I implemented process improvements to facilitate out-of-process delivery while maintaining quality standards and ensuring consistent implementation across platforms.",
      strengths:
        "I leveraged my technical expertise, project management skills, cross-functional communication abilities, calm under pressure, attention to detail, and diplomatic skills in managing stakeholder expectations. My ability to translate between technical and non-technical stakeholders was particularly valuable.",
      consequences:
        "If this problem remained unsolved: The rebranding would have been inconsistently implemented, damaging brand perception. Time-sensitive marketing campaigns would have been disrupted. Cross-functional tensions would have increased due to missed deadlines. Leadership confidence in the technical team's ability to deliver on strategic initiatives would have diminished. Future cross-functional projects would have faced increased resistance and skepticism.",
      resources:
        "My solution preserved: Time: Accelerated delivery through efficient coordination and parallel workstreams, Money: Prevented costly delays in marketing campaigns and announcements, Opportunity: Enabled successful launch of rebranding initiative on schedule, Relationships: Strengthened cross-functional collaboration despite pressure, Reputation: Enhanced the technical team's standing as reliable partners in strategic initiatives.",
    },
    {
      id: 5,
      title: "Curriculum for Adult Learners at Women Helping All People Inc",
      buckets: ["Learning Experience Design", "Adult Learning Application", "Technical Curriculum Development"],
      challenge:
        "The challenge was to develop and deliver an effective programming curriculum for adult beginners with diverse backgrounds and no prior technical experience. I needed to create engaging learning experiences that would demystify web development, accommodate different learning styles and technical aptitudes, and provide sufficient support for learners facing various barriers to technical education.",
      importance:
        "This mattered because it directly fulfilled Women Helping All People's mission to empower community members through education and skill development. Successful technical education would open new career pathways for participants, potentially transforming their economic opportunities. The organization's reputation, funding, and ability to serve its community depended on delivering effective educational programs.",
      solution:
        "I developed comprehensive learning materials tailored to adult learners with varying technical backgrounds, created interactive workshops to demystify web development basics, implemented hands-on exercises and projects to reinforce theoretical concepts, and conducted weekly office hours for personalized student support. I adapted teaching approaches based on observed learning needs and maintained a supportive environment that encouraged exploration.",
      strengths:
        "I leveraged my technical knowledge, curriculum development skills, empathy, patience, adaptability, and ability to explain complex concepts in accessible ways. My commitment to creating an inclusive learning environment and responsiveness to diverse learning needs were particularly important.",
      consequences:
        "If this problem remained unsolved: Participants would have missed opportunities to develop valuable technical skills. The organization would have failed to deliver on its educational mission. Community members would have continued to face barriers to technical careers. The organization's reputation for effective programming would have suffered. Future funding for technical education programs might have been jeopardized.",
      resources:
        "My solution preserved: Time: Efficient curriculum design prevented wasted learning time, Money: Effective teaching reduced the need for additional remedial support, Opportunity: Created new career pathways for community members, Confidence: Built participants' belief in their ability to learn technical skills, Community trust: Strengthened the organization's standing as an educational resource.",
    },
    {
      id: 6,
      title: "KPI Tracking at Project HIRED",
      buckets: ["Measurement & Evaluation", "Program Management"],
      challenge:
        "The challenge was to enhance site independence and operational efficiency for a team of 9 people, that could be interpreted by senior leadership. I needed to develop comprehensive onboarding and role-based documentation, implement effective KPI tracking systems, build team cohesion, and strengthen stakeholder relationships with the host site, all while maintaining day-to-day operations.",
      importance:
        "This mattered because operational efficiency directly impacted Project HIRED's ability to fulfill its mission of providing competitive employment services for adults with disabilities. Improved site independence would reduce reliance on central management, allowing the organization to scale more effectively. Strong performance metrics would demonstrate program effectiveness to funders and partners, prospective for contract extensions, and improved stakeholder relationships would enhance service delivery.",
      solution:
        "I developed comprehensive onboarding and role-based documentation, implemented team building activities to enhance collaboration, established KPI tracking systems with clear metrics and reporting processes, created incentive structures to motivate performance improvement, and built strong relationships with host site stakeholders. I maintained a focus on efficiency and independence goals while supporting team members through adaptation to new processes.",
      strengths:
        "I leveraged my organizational skills, systems thinking, leadership abilities, data analysis capabilities, relationship-building strengths, and ability to motivate others. My capacity to see the business relation needs, the big picture of organizational effectiveness, and the detailed processes needed to achieve it was particularly valuable.",
      consequences:
        "If this problem remained unsolved: The site would have continued to depend heavily on central management. Operational inefficiencies would have limited service capacity. New team members would have faced steep learning curves without proper documentation. Performance would have varied widely without clear metrics and incentives. Relationships with the host site might have deteriorated, affecting service delivery, and contract preservation.",
      resources:
        "My solution preserved: Time: Reduced management oversight needed through increased site independence, Money: Improved operational efficiency maximized impact of limited resources, Opportunity: Enhanced capacity to serve clients effectively, Talent: Improved onboarding and clear expectations helped retain team members, Partnerships: Strengthened relationship with the host site created additional opportunities.",
    },
    {
      id: 7,
      title: "Virtual Course Transition at Hack the Hood",
      buckets: ["Learning Technology Implementation", "Learning Experience Design"],
      challenge:
        "The challenge was to rapidly transition in-person technical courses to virtual delivery during the pandemic. I needed to select and implement appropriate virtual learning technologies, adapt curriculum and teaching methods for online delivery, train instructors who were accustomed to in-person teaching, and ensure technical access for students who might face digital divide issues.",
      importance:
        "This mattered because without a successful virtual transition, Hack the Hood would have been unable to continue its educational mission during pandemic restrictions. Program disruption would have meant lost opportunities for students, potential funding issues, and organizational instability. The ability to adapt quickly to changing circumstances was essential for organizational survival and continued impact.",
      solution:
        "I implemented selected virtual learning platforms and tools, conducted instructor training sessions on virtual teaching methods, adapted curriculum materials for effective virtual delivery, coordinated technical setup and testing of virtual learning environments, managed software installation processes for donated PCs, and supported instructors through initial virtual teaching experiences. I maintained focus on learning objectives despite delivery changes.",
      strengths:
        "I leveraged my technical adaptability, crisis management skills, training abilities, problem-solving creativity, persistence, and empathy for both instructors and students facing a challenging transition. my ability to quickly evaluate and implement new technologies while supporting others through change was particularly valuable.",
      consequences:
        "If this problem remained unsolved: Educational programs would have been suspended during pandemic restrictions. Students would have lost critical learning opportunities and momentum. Instructors might have become disengaged or sought other opportunities. Funding tied to program delivery might have been jeopardized. The organization's reputation for resilience and innovation would have suffered.",
      resources:
        "my solution preserved: Time: Prevented months of program disruption, Money: Maintained funding streams by continuing to deliver programs, Opportunity: Kept educational pathways open for students during the pandemic, Talent: Retained instructors by providing them with new skills and continued employment, Organizational momentum: Allowed Hack the Hood to continue advancing its mission despite external challenges.",
    },
    {
      id: 8,
      title: "School Plan for Student Achievement at Cambridge Elementary",
      buckets: ["Measurement & Evaluation", "Cross-Functional Collaboration"],
      challenge:
        "The challenge was to develop a comprehensive School Plan for Student Achievement (SPSA) that effectively addressed student needs, aligned with district accountability plans, and met Title I program requirements. I needed to analyze complex data, identify key areas for improvement, develop measurable goals, and create a strategic plan that would gain approval from diverse stakeholders.",
      importance:
        "This mattered because the SPSA is a critical document that guides resource allocation, instructional focus, and improvement efforts at the school. It directly impacts student learning outcomes, determines how Title I funds are used, and serves as an accountability mechanism for the school. A well-developed plan would enhance educational effectiveness, while a poor plan could misdirect resources and fail to address critical student needs.",
      solution:
        "I conducted a comprehensive needs assessment alongside a team of 4 other community members using verifiable state and local data, provided recommendations related to the school's Title I program, participated in the development of specific and measurable goals, and helped align the SPSA with the local educational agency's accountability plans. I contributed to creating continuous cycles of action, reflection, and improvement.",
      strengths:
        "I leveraged my data analysis skills, strategic planning abilities, educational knowledge, collaborative approach, and ability to translate complex information into actionable plans. My experience with measurement and evaluation was particularly valuable in developing meaningful goals and metrics.",
      consequences:
        "If this problem remained unsolved: The school might have lost Title I funding due to inadequate planning. Resources would have been allocated ineffectively, failing to address critical student needs. Student achievement gaps might have persisted or widened. The school would have lacked clear direction for improvement efforts. Stakeholders would have become frustrated with the lack of coherent strategy.",
      resources:
        "My solution preserved: Time: Created an efficient framework for improvement efforts, Money: Ensured appropriate and strategic use of Title I funds, Opportunity: Enhanced educational opportunities for students, particularly those most in need, Focus: Aligned efforts across the school toward common goals, Accountability: Established clear metrics for measuring progress and success.",
    },
    {
      id: 9,
      title: "Technical Education Platform at Bridging Tech",
      buckets: ["Learning Technology Implementation", "Learning Experience Design"],
      challenge:
        "The challenge was to implement appropriate technology choices for an education platform serving homeless grade-school youth while ensuring accessibility, usability, and effective technical feedback mechanisms. I needed to select technologies that would support both remote collaboration among apprentices and effective learning for homeless grade-school youth users, many of whom might have limited technical resources or experience.",
      importance:
        "This mattered because the technical platform was the primary vehicle for delivering Bridging Tech's educational mission. The technology choices would directly impact the organization's ability to serve homeless grade-school youth effectively, the apprentices' learning experience, and the sustainability of the platform. Poor technology decisions would result in accessibility barriers, maintenance challenges, or ineffective learning experiences.",
      solution:
        "I implemented and advised on technology choices that balanced functionality with accessibility, ensured usability across different devices and technical environments, integrated tools for code reviews and technical feedback, and selected appropriate technologies for remote collaboration and learning. I prioritized technologies that would be sustainable and adaptable to evolving needs.",
      strengths:
        "I leveraged my technical expertise, user experience understanding, accessibility knowledge, forward-thinking approach, and ability to balance competing priorities. My experience working with diverse user populations and understanding of technical barriers was particularly valuable.",
      consequences:
        "If this problem remained unsolved: The platform would have failed to reach many intended youth users due to accessibility barriers. Apprentices would have struggled with collaboration and feedback processes. Technical debt would have accumulated, making the platform difficult to maintain. User engagement would have suffered due to poor usability. The organization's impact and reach would have been significantly limited.",
      resources:
        "My solution preserved: Time: Prevented future rework by making sustainable technology choices, Money: Avoided costly technology changes or adaptations later, Opportunity: Ensured the platform could reach diverse youth populations, Effort: Created efficient collaboration and feedback mechanisms for apprentices, Scalability: Built a foundation that could grow with the organization's needs.",
    },
    {
      id: 10,
      title: "Content Management Tools at SurveyMonkey",
      buckets: ["Learning Technology Implementation", "Technical Knowledge"],
      challenge:
        "The challenge was to deliver enhanced content management tools and refactored components for the marketing team. I needed to improve user experience, enhance site and browser security, and create efficient tooling while working within existing technical constraints and ensuring backward compatibility.",
      importance:
        "This mattered because effective content management directly impacted SurveyMonkey's marketing capabilities, brand consistency, and operational efficiency. Improved tools would enable faster content updates, reduce errors, and allow the marketing team to respond more quickly to market opportunities. Security enhancements would protect user data and maintain trust in the platform.",
      solution:
        "I worked on agile sprints to deliver enhanced content management tools, refactored components using SCSS, React, JSS, Node, and some PHP, updated and implemented new feature functionalities, improved client experience through error handling UI/UX, enhanced site and browser security by updating cookies and permissions, and built and managed tooling for the content management team.",
      strengths:
        "I leveraged my technical expertise, user-centered design thinking, security awareness, collaborative approach, and ability to understand the needs of non-technical users. My capacity to refactor complex components while maintaining functionality and improving usability was particularly valuable.",
      consequences:
        "If this problem remained unsolved: The marketing team would have continued to struggle with inefficient content management processes. Security vulnerabilities might have exposed user data or damaged brand trust. Content errors or inconsistencies would have affected brand perception. Marketing agility would have been limited by technical constraints. Cross-functional friction might have increased due to unmet marketing needs.",
      resources:
        "My solution preserved: Time: Reduced the effort required for content management tasks, Security: Protected user data and organizational reputation, Agility: Enhanced the marketing team's ability to respond quickly to opportunities, Quality: Reduced errors and inconsistencies in content, Collaboration: Improved relationships between technical and marketing teams.",
    },
    {
      id: 11,
      title: "Curriculum Development at Hack the Hood",
      buckets: ["Curriculum Standardization", "Adult Learning"],
      challenge:
        "The challenge was to develop unique content-based curricula that addressed both the technical and social aspects of transitioning into the technology space through nontraditional pathways. I needed to create standardized approaches that would be effective across different cohorts while accommodating diverse learning needs and backgrounds.",
      importance:
        "This mattered because curriculum is the foundation of Hack the Hood's educational mission. Effective curriculum would directly impact student outcomes, instructor effectiveness, and organizational reputation. By addressing both technical skills and social context, the curriculum would prepare students more holistically for the challenges of entering the tech industry.",
      solution:
        "I developed comprehensive curricula that integrated technical skills with social context, created standardized learning objectives and assessment methods, established consistent approaches that could be implemented across different cohorts, and designed materials that acknowledged and addressed the unique challenges faced by individuals entering tech through nontraditional pathways.",
      strengths:
        "I leveraged my technical knowledge, curriculum development expertise, cultural competence, empathy, and understanding of industry barriers. my ability to see beyond technical skills to the social and emotional aspects of career transitions was particularly valuable.",
      consequences:
        "If this problem remained unsolved: Students would have been technically trained but unprepared for the social challenges of the tech industry. Instructors would have lacked consistent guidance and standards. Program quality would have varied widely across different cohorts. Students from nontraditional backgrounds would have faced additional barriers to success. The organization's impact on diversifying the tech industry would have been limited.",
      resources:
        "my solution preserved: Time: Standardized curriculum reduced preparation time for instructors, Effectiveness: Holistic approach increased student success rates, Consistency: Standardized quality across different cohorts and instructors, Relevance: Curriculum addressed real-world challenges beyond technical skills, Mission alignment: Directly supported the goal of creating pathways into tech.",
    },
    {
      id: 12,
      title: "Mentorship Program Manager at Techtonica",
      buckets: ["Learning Culture Development"],
      challenge:
        "The challenge was to foster a culture of continuous learning and improvement within Techtonica's training programs. I needed to implement effective mentorship structures, create safe spaces for experimentation, and develop recognition systems that would motivate and support learners from diverse backgrounds.",
      importance:
        "This mattered because Techtonica's mission goes beyond technical training to creating a supportive community that enables underrepresented adults to thrive in tech careers. A strong learning culture would enhance program effectiveness, improve completion rates, and better prepare participants for the collaborative nature of the tech industry.",
      solution:
        "I fostered a culture of continuous learning and improvement, implemented peer mentorship and knowledge-sharing practices, created safe spaces for experimentation and learning from failure, and developed recognition systems for learning achievements. I modeled a growth mindset and encouraged collaborative problem-solving.",
      strengths:
        "I leveraged my community-building skills, emotional intelligence, coaching abilities, recognition of diverse strengths, and personal experience navigating the tech industry. My ability to create psychological safety while maintaining high standards was particularly valuable.",
      consequences:
        "If this problem remained unsolved: Participants would have developed technical skills but lacked the collaborative abilities needed in industry. Fear of failure might have limited experimentation and deep learning. Diverse strengths and contributions would have gone unrecognized. Completion rates might have suffered, particularly for those facing additional barriers. Graduates would have been less prepared for the continuous learning demanded by tech careers.",
      resources:
        "my solution preserved: Talent: Retained participants who might otherwise have dropped out, Potential: Helped participants recognize and develop their unique strengths, Community: Built lasting professional networks that extend beyond the program, Resilience: Developed participants' ability to learn from failure, Growth: Created self-sustaining learning communities that continue beyond formal training.",
    },
    {
      id: 13,
      title: "/dev/color A* Program Participation",
      buckets: ["Learning Culture Development"],
      challenge:
        "While this was a program I participated in rather than led, a challenge I likely addressed was how to create mutual support systems for Black technologists across different organizations and career stages. The program needed to facilitate meaningful knowledge sharing and professional advancement in an industry where Black professionals are significantly underrepresented.",
      importance:
        "This mattered to /dev/color because their mission is to maximize the impact of Black software engineers. Effective peer support and knowledge sharing directly contributes to career advancement, leadership development, and ultimately increasing Black representation in technical roles and leadership positions across the industry.",
      solution:
        "I actively participated in monthly squad meetings with peers at similar career stages, engaged in cross-functional collaboration and knowledge sharing, accessed and potentially provided mentorship and career guidance, participated in discussions on industry trends and emerging technologies, and contributed to a supportive environment for Black technologists.",
      strengths:
        "I leveraged my collaborative nature, willingness to both give and receive support, technical knowledge, career navigation experience, and commitment to community building. my ability to build authentic relationships and share vulnerable experiences was likely particularly valuable.",
      consequences:
        "If effective peer support systems weren't established: Black technologists would have continued to face isolation in their respective organizations. Career advancement would have been more challenging without peer insights and support. Knowledge sharing across organizations would have been limited. The collective influence of Black technologists would have been diminished. Retention of Black talent in the tech industry would have suffered.",
      resources:
        "My participation and contribution helped preserve: Talent: Supported retention of Black professionals in the tech industry, Knowledge: Facilitated sharing of insights and experiences across organizations, Opportunity: Created visibility into career paths and advancement strategies, Community: Strengthened connections among Black technologists, Influence: Enhanced the collective impact of Black professionals in tech.",
    },
    {
      id: 14,
      title: "Lead to Senior Employee Training Guide at Project HIRED",
      buckets: ["Curriculum Standardization", "Technical Knowledge"],
      challenge:
        "The challenge was to standardize and improve the onboarding and training process for lead to Senior employees across the organization. I needed to capture best practices, create consistent expectations and procedures, and develop a comprehensive guide that would be effective across different locations and contexts.",
      importance:
        "This mattered because inconsistent training led to variable performance, operational inefficiencies, and potential service quality issues. A standardized training guide would ensure all lead to senior employees had the knowledge and skills needed to perform effectively, reduce management overhead, and improve service consistency across locations.",
      solution:
        "I successfully developed and implemented a company-wide lead employee training guide, capturing best practices and standardized procedures. I likely gathered input from experienced leads, documented key processes and responsibilities, created assessment tools to measure learning, and developed a implementation plan for rolling out the guide across the organization.",
      strengths:
        "I leveraged my organizational skills, attention to detail, ability to identify best practices, clear communication, and understanding of operational needs. My capacity to translate tacit knowledge into explicit, teachable content was particularly valuable.",
      consequences:
        "If this problem remained unsolved: New lead employees would have continued to receive inconsistent training. Performance would have varied widely across locations. More management oversight would have been required to ensure quality. Operational inefficiencies would have persisted. Knowledge would have been lost when experienced leads departed.",
      resources:
        "My solution preserved: Time: Reduced training time and management oversight, Consistency: Standardized performance expectations and procedures, Knowledge: Captured and preserved organizational best practices, Quality: Ensured consistent service delivery across locations, Efficiency: Streamlined operations through standardized procedures.",
    },
    {
      id: 15,
      title: "Software Engineering Training Program at Techtonica",
      buckets: [
        "Learning Culture Development",
        "Program Management",
        "Curriculum Standardization",
        "Technical Curriculum Development",
        "Adult Learning Application",
      ],
      challenge:
        "The challenge was to develop and manage a comprehensive software engineering training program for women and non-binary adults, many from underrepresented backgrounds. I needed to create a curriculum that balanced technical depth with accessibility, manage a diverse team of instructors and mentors, coordinate with industry partners, and ensure participants developed both technical skills and professional capabilities.",
      importance:
        "This mattered because it was Techtonica's core mission to increase diversity in tech by providing pathways for underrepresented adults. The success of the training program directly impacted the organization's reputation, funding, and ability to place graduates in industry positions. Effective training would transform participants' career trajectories and contribute to diversifying the tech industry.",
      solution:
        'I oversaw the development of comprehensive learning materials, coordinated instructor assignments and preparation, implemented technical learning environments and tools, managed the day-to-day operations of the training program, adapted teaching methodologies based on participant needs, and coordinated with industry partners for mentorship and project opportunities. I maintained program focus on both technical excellence and career readiness. Coordinated with industry partners for mentorship and project opportunities. Successfully placed 16 graduates at Sony. Maintained program "overall experience" ratings exceeding 3.5 expectation (3.66 average). Pivoted to a 5-month program with integrated AI curriculum. Streamlined application, project, and knowledge check rubrics with more specific questions.',
      strengths:
        "I leveraged my technical expertise, program management skills, curriculum development experience, understanding of industry needs, empathy for diverse learners, and ability to build supportive learning communities. my experience across both technical and educational domains was particularly valuable.",
      consequences:
        "If this problem remained unsolved: Participants would have received inadequate preparation for tech careers. Placement rates would have suffered, affecting both participants and organizational reputation. Funding might have been jeopardized due to poor outcomes. The organization would have failed to fulfill its mission of increasing diversity in tech. Industry partners would have lost confidence in the program's ability to produce qualified candidates.",
      resources:
        "My solution preserved: Opportunity: Created viable career paths for participants, Reputation: Maintained Techtonica's standing as an effective training provider, Funding: Justified continued investment through successful outcomes, Partnerships: Strengthened relationships with industry partners, Diversity: Contributed to increasing representation in the tech industry.",
    },
    {
      id: 16,
      title: "Mystery Shopping Quality Audits",
      buckets: ["Measurement & Evaluation"],
      challenge:
        "While not a traditional project management role, the challenge was to manage complex multi-location audits and special projects that required meticulous planning, execution, and reporting. I needed to understand detailed client guidelines, adapt to various environments, maintain objectivity, and deliver accurate, actionable feedback.",
      importance:
        "This mattered to the client organizations because mystery shopping provides unbiased insights into customer experience, service quality, and compliance with standards. These insights directly impact business performance, customer satisfaction, and brand reputation. For the mystery shopping company, delivering high-quality audits was essential to maintaining client relationships and business continuity.",
      solution:
        "I studied client guideline scopes to ensure accurate information was reported, discreetly visited retail stores, banks, casinos, hotels, and restaurants to conduct evaluations, assessed employees, facility maintenance, and other criteria as directed, submitted detailed written reports, utilized interpersonal skills to adapt to fast-paced environments while maintaining professionalism, and managed multiple accounts across various projects and platforms.",
      strengths:
        "I leveraged my attention to detail, objectivity, adaptability, written communication skills, time management, and ability to work independently. my capacity to quickly understand different business environments and evaluation criteria was particularly valuable.",
      consequences:
        "If this problem remained unsolved: Client organizations would have lacked accurate insights into their customer experience. Service quality issues would have gone unidentified and unaddressed. Compliance risks might have persisted without detection. Resources might have been misdirected to the wrong improvement areas. Customer satisfaction and business performance could have suffered.",
      resources:
        "my solution preserved: Insight: Provided valuable data on customer experience and service quality, Quality: Helped maintain service standards through accountability, Compliance: Identified and addressed potential compliance issues, Reputation: Protected brand image through service improvements, Investment: Helped direct resources to the most impactful improvement areas.",
    },
    {
      id: 17,
      title: "civichub.us Development at Civic Hub",
      buckets: [
        "Cross-Functional Collaboration",
        "Program Management",
        "Technical Knowledge",
        "Learning Technology Implementation",
      ],
      challenge:
        "The challenge was to pioneer the initial development of civichub.us, a vital resource for San Francisco residents and municipal workers. I needed to create a user-friendly platform that would effectively serve diverse stakeholders, implement appropriate technologies, and establish a foundation that could be maintained and expanded over time.",
      importance:
        "This mattered because the platform would serve as a critical interface between municipal services and residents. An effective platform would improve access to services, increase efficiency for municipal workers, and enhance civic engagement. As a Microsoft Fellow project, it also represented an important partnership and demonstration of technology for public good.",
      solution:
        "I pioneered the initial development using PHP, JavaScript, HTML, and SQL, managed full-stack development and client engagement, demonstrated strong project management skills, ensured seamless implementation and support, and coordinated effectively with external partners and internal stakeholders. I likely balanced technical requirements with user needs to create an accessible and functional platform.",
      strengths:
        "I leveraged my technical skills, project management abilities, stakeholder management experience, civic-minded perspective, and ability to translate between technical and non-technical domains. my capacity to understand both municipal worker and resident needs was particularly valuable.",
      consequences:
        "If this problem remained unsolved: San Francisco residents would have continued to face barriers accessing municipal services. Municipal workers would have lacked efficient tools to serve residents. The partnership between Civic Hub and Microsoft might have been damaged. Opportunities for improved civic engagement would have been missed. Resources would have been wasted on an unsuccessful initiative.",
      resources:
        "my solution preserved: Access: Improved resident access to municipal services, Efficiency: Enhanced municipal worker productivity, Partnership: Strengthened the relationship with Microsoft, Engagement: Created new channels for civic participation, Foundation: Established a platform that could be expanded over time.",
    },
    {
      id: 18,
      title: "Training Program Evaluation at Techtonica",
      buckets: ["Measurement & Evaluation"],
      challenge:
        "The challenge was to develop and implement effective evaluation methods for Techtonica's training programs. I needed to create metrics that would accurately assess program effectiveness, track participant progress, implement feedback mechanisms, and use data to drive continuous improvement.",
      importance:
        "This mattered because without effective evaluation, Techtonica would lack insight into program effectiveness, struggle to demonstrate impact to funders, and miss opportunities for improvement. Data-driven decision making would enhance program quality, improve participant outcomes, and strengthen the organization's case for support.",
      solution:
        "I developed metrics to assess training effectiveness, tracked participant progress and outcomes, implemented feedback mechanisms for continuous improvement, and used data to refine curriculum and delivery methods. I likely created both quantitative and qualitative assessment tools, established regular evaluation cycles, and created systems for translating findings into program improvements.",
      strengths:
        "I leveraged my analytical skills, understanding of learning objectives, systems thinking, attention to detail, and ability to translate data into actionable insights. my experience across both educational and technical domains helped I develop meaningful metrics that captured both technical skill development and career readiness.",
      consequences:
        "If this problem remained unsolved: Program effectiveness would have been based on anecdotal rather than systematic evidence. Opportunities for improvement would have been missed or delayed. Funding proposals would have lacked compelling impact data. Resources might have been misdirected to less effective program elements. Participant needs might have gone unrecognized and unaddressed.",
      resources:
        "My solution preserved: Effectiveness: Ensured resources were directed to the most impactful program elements, Evidence: Provided data to support funding requests and program decisions, Improvement: Created mechanisms for continuous program enhancement, Responsiveness: Enabled quick adaptation to participant needs and feedback, Credibility: Strengthened Techtonica's reputation through demonstrated impact.",
    },
  ],
  metrics: {
    "Techtonica Program Rating": "3.66/3.5 expected average",
    "Sony Placements": "16 graduates placed",
    "Program Transition": "Successfully pivoted to 5-month program with AI curriculum",
    "Process Improvement": "Streamlined application, project, and knowledge check rubrics",
    "Cross-Functional Leadership": "Led teams of up to 9 people across multiple sites",
    "Curriculum Development": "Created comprehensive materials for 3+ technical programs",
    "Virtual Transition": "100% successful transition of in-person programs to virtual delivery",
  },
  problemSolvingInsights: {
    energizingProblems: [
      "Creating systems and structures that enable others to succeed",
      "Bridging gaps between technical and non-technical domains",
      "Developing standardized approaches that can be consistently implemented",
      "Building inclusive communities and support networks",
      "Translating complex concepts into accessible learning experiences",
      "Improving efficiency through thoughtful process design",
      "Creating pathways for underrepresented individuals to enter and thrive in tech",
      "Creating systems that generate actionable insights and drive improvement",
      "Developing resources that serve diverse stakeholders and bridge access gaps",
      "Building evaluation frameworks that measure both technical and human outcomes",
      "Managing complex projects that require balancing multiple perspectives and needs",
      "Creating foundations that others can build upon and expand",
    ],
    easyTasks: [
      "Seeing both the big picture and the detailed implementation steps",
      "Adapting quickly to new technologies and contexts",
      "Creating documentation that captures complex processes clearly",
      "Building bridges between different organizational cultures and functions",
      "Balancing standardization with flexibility to meet diverse needs",
      "Identifying and implementing process improvements",
      "Creating inclusive environments where diverse individuals can thrive",
      "Developing metrics that capture both quantitative and qualitative aspects of success",
      "Managing projects that serve diverse stakeholders with different needs and expectations",
      "Creating technical solutions that are accessible to non-technical users",
      "Balancing immediate deliverables with long-term sustainability",
      "Translating between civic, educational, and technical domains",
    ],
  },
  selfReflection: {
    obstacles: [
      {
        title: "Career Stagnation as a Site Supervisor",
        situation:
          "I found myself in a role as a site supervisor where I had hit a ceiling. Despite my dedication and capabilities, there were no opportunities for growth or advancement within the organization. I felt my skills and potential were being underutilized, and my career had plateaued.",
        strengths:
          "I developed self-awareness to recognize when a situation was no longer serving my growth. I cultivated the courage to consider alternatives rather than accepting stagnation. I also strengthened my ability to objectively evaluate my career trajectory and make difficult decisions about my professional future.",
        learned:
          "I learned that comfort can sometimes be the enemy of growth. I gained perspective on the importance of working in environments that value development and advancement. I also learned to recognize my own worth and the importance of being in spaces that acknowledge my potential.",
        benefits:
          "This experience pushed me to expand my vision of what was possible in my career. It ultimately led me to consider paths I might not have otherwise explored, including my eventual transition into tech. The frustration became fuel for a much more fulfilling career direction.",
      },
      {
        title: "Housing Insecurity in San Francisco",
        situation:
          "I relocated to San Francisco with the promise of higher pay, only to discover that the cost of living far exceeded what I had projected. When my employer couldn't increase my compensation to match the reality of living expenses, I found myself in an impossible financial situation. This led to a period of homelessness while single-handedly caring for my two young children under five—a one-month-old and a four-year-old. During this incredibly stressful time, I also had to manage my bipolar condition, which was exacerbated by the constant uncertainty and pressure of our housing situation. I found myself navigating San Francisco's fragmented and often disconnected social service resources, experiencing firsthand how difficult these systems can be for those in crisis to access effectively.",
        strengths:
          "I developed extraordinary resilience and resourcefulness during this period. As a single parent managing a mental health condition, I found reserves of strength I didn't know I had, putting my children's needs first while navigating an extremely challenging situation. I strengthened my problem-solving abilities and learned to advocate for myself and my family in systems that weren't designed to support us. I also developed expertise in navigating complex bureaucratic systems and identifying gaps in service delivery—skills that would later prove valuable in unexpected ways.",
        learned:
          "I gained perspective on the fragility of financial security and the systemic challenges that can quickly lead to housing insecurity despite one's best efforts. I learned about the importance of community support and the value of having contingency plans. I developed a deep understanding of how mental health challenges intersect with housing insecurity, and how poorly designed systems can create additional barriers for those already struggling. Most importantly, I learned that circumstances don't define my worth or capabilities as a person or parent.",
        benefits:
          "This experience gave me profound empathy for others facing housing insecurity and a deeper understanding of economic inequality. It also showed me my own strength and determination in ways nothing else could have. The resilience I developed during this time has served me in every subsequent challenge I've faced. Perhaps most significantly, my firsthand experience with disconnected resources in San Francisco eventually informed my work as a software engineer on Civic Hub, where I could apply my technical skills to help solve the very problems I had experienced. This full-circle moment allowed me to transform a painful chapter of my life into meaningful work that could potentially help others avoid similar struggles—creating purpose from pain and technical solutions from lived experience.",
      },
      {
        title: "Career Transition to Software Engineering",
        situation:
          "I made the decision to transition from my established career as a non-profit program specialist to pursue a completely different path as a full stack software engineer. This meant starting over in many ways—learning entirely new skills, entering an unfamiliar industry, and proving myself in a field where I had no prior experience.",
        strengths:
          "I demonstrated adaptability and a growth mindset by embracing the challenge of learning complex technical skills. I developed perseverance through the inevitable struggles of mastering programming concepts. I also strengthened my ability to take calculated risks and believe in my capacity to reinvent myself professionally.",
        learned:
          "I learned that it's never too late to pivot and pursue a new direction. I gained perspective on how transferable skills from my previous career—like problem-solving, communication, and project management—could be valuable assets in tech. I also learned to embrace being a beginner again and find joy in the learning process itself.",
        benefits:
          "This transition opened doors to greater financial stability and career opportunities. It also connected me with new communities and mentors who have enriched my professional life. The confidence gained from successfully navigating such a significant career change has empowered me to take on other challenges I might previously have considered beyond my reach.",
      },
    ],
    joys: {
      sources: [
        "Reading historical fiction, sci-fi, and Black literature, connected to my exploration of Black genealogy",
        "Painting as a practice of overcoming struggle and defeatism",
        "Gardening as a path to self-sufficiency and reclaiming control",
      ],
      explanation: [
        "My love for Black literature is deeply intertwined with my passion for exploring Black genealogy. As a Black woman, these complementary interests bring me profound joy because they connect me to my heritage in ways that mainstream education and culture often fail to provide. When I read works by Black authors—whether they're exploring historical experiences, imagining new futures, or examining contemporary life—I'm engaging with a literary tradition that helps illuminate the contexts my ancestors lived through. This literary exploration complements my genealogical research, where I piece together my family's story across generations. There's an indescribable feeling that comes with discovering names, dates, and places that belong to my lineage—especially knowing how deliberately Black family histories were disrupted and erased through slavery and its aftermath. Each discovered ancestor represents a triumph over historical forces that attempted to sever these connections. Together, Black literature and genealogy research provide me with a more complete sense of identity and belonging. They help me understand not just who I am individually, but how I'm connected to a broader historical continuum of Black resilience, creativity, and survival. This work of reclaiming and celebrating my heritage brings a deep sense of joy and purpose, allowing me to pass down both stories and factual knowledge to my children that I wish I had received earlier in life.",

        "Painting brings me joy as a powerful metaphor for my life's journey. With each stroke of the brush, I engage in a constant dance of overcoming struggle—making mistakes, adjusting, and gradually improving. As a self-described \"novice of novices,\" I face the blank canvas with the same uncertainty I've faced in challenging life transitions. Yet each completed painting, regardless of its technical merit, represents a victory over imposter syndrome and defeatism. The act of creating something from nothing reminds me of how I've rebuilt my life multiple times. When negative thoughts tell me \"you can't do this\" or \"you don't belong here\"—whether in art or in tech—each painting stands as evidence that persistence matters more than perfection. This practice of creative resilience brings me joy precisely because it's challenging, making each small improvement all the more meaningful.",

        "Gardening brings me deep joy because it represents reclaimed agency after a period when I felt completely at the mercy of my external environment. During homelessness with my young children, so many basic aspects of life were beyond my control—where we would sleep, when we would eat, how we would stay safe. In stark contrast, my garden is a space where I exercise direct influence over outcomes. The simple act of planting seeds, nurturing them, and eventually harvesting food creates a profound sense of self-sufficiency that heals old wounds of dependency and uncertainty. Each vegetable I grow represents food security that can't be taken away; each flowering plant represents beauty I've created in a world that once seemed only harsh. This connection to the earth grounds me in the present while building confidence in my ability to provide—a joy born from the contrast with times when provision seemed impossible.",
      ],
    },
  },
  skills: [
    "Curriculum Development",
    "Technical Education",
    "Cross-functional Leadership",
    "Program Management",
    "Adult Learning Principles",
    "Measurement & Evaluation",
    "Learning Experience Design",
    "Full Stack Development",
    "Resilience",
    "Adaptability",
  ],
  goals: [
    "Transition to technical curriculum development role",
    "Develop expertise in educational content creation",
    "Apply technical skills to meaningful educational initiatives",
  ],
}

// Create the context with default values
const DataContext = createContext<{
  userData: UserData
  setUserData?: React.Dispatch<React.SetStateAction<UserData>>
}>({
  userData: defaultUserData,
})

// Provider component
export function DataProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = React.useState<UserData>(defaultUserData)

  return <DataContext.Provider value={{ userData, setUserData }}>{children}</DataContext.Provider>
}

// Custom hook to use the data context
export function useUserData() {
  return useContext(DataContext)
}
