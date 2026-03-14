import ProjectCard from './ProjectCard';
import '../styles/Work.scss';

const allImages = import.meta.glob(
    [
        '../assets/Project/**/*.png',
        '../assets/Project/**/*.jpg'
    ],
    {
        eager: true,
        import: 'default'
    }
);

function loadImages(folderName) {
    const paths = Object.keys(allImages);

    return paths
        .filter(path => path.includes(`/Project/${folderName}/`))
        .map(path => allImages[path]);
}

const Work = () => {

    const projects = [
        {
            id: 1,
            number: '01',
            title: 'Boundary Mark: A Game to Improve Mathematical Skills',
            description:
                'Boundary Mark is a server-based educational game developed as a senior project in collaboration with the Faculty of Education at Naresuan University. The project focuses on improving students’ mathematical abilities, specifically fraction addition skills, through engaging gameplay and interactive learning mechanics.',
            images: loadImages("Pro1"),
            link: 'https://iqern.itch.io/boundary-mark',
            tags: ['Educational Game', 'Game Development', 'Mathematics Learning', 'Server-based System', 'Research Project', 'Godot', 'collaboration'],
            delay: '0.3s'
        },
        {
            id: 2,
            number: '02',
            title: 'Boundary Mark New Era: A Game to Improve Mathematical Skills',
            description:
                'Boundary Mark New Era is a server-based educational game developed as a senior project in collaboration with the Faculty of Education at Naresuan University. The game focuses on improving students’ fraction addition skills through interactive gameplay. In this new version, the game mechanics were simplified by reducing unnecessary features to make it easier for children to play, while keeping the core learning objective of fraction addition and enhancing supportive elements to improve the learning experience for students.',
            images: loadImages("Pro2"),
            link: 'https://iqern.itch.io/boundary-mark-new-era',
            tags: ['Educational Game', 'Game Development', 'Server-based System', 'Mathematics Learning', 'Research Project', 'Godot', 'collaboration'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 3,
            number: '03',
            title: 'Math Runner',
            description:
                'Math Runner is an experimental educational game project that introduces a new way of improving mathematical skills through gameplay. The game combines problem-solving with survival mechanics, where players must solve math problems to survive and fight monsters. Inspired by roguelike and deck-building elements, the game creates a dynamic learning experience that encourages strategic thinking and continuous practice of mathematical skills.',
            images: loadImages("Pro3"),
            link: 'https://iqern.itch.io/math-runner',
            tags: ['Educational Game', 'Roguelike', 'Deck-building', 'Game Design', 'Mathematics Learning', 'Godot'],
            delay: '0.3s'
        },
        {
            id: 4,
            number: '04',
            title: 'Google Cybersecurity Certificate',
            description:
                'Completed the Google Cybersecurity Certificate, a professional training program focused on building foundational knowledge and practical skills in cybersecurity. The program covers key topics such as security principles, network security, threat detection, incident response, risk management, and security operations. It also introduces industry tools and frameworks used in real-world cybersecurity environments, helping develop skills in analyzing security incidents, identifying vulnerabilities, and applying security best practices to protect systems and data.',
            images: loadImages("Pro4"),
            tags: ['Cybersecurity', 'Network Security', 'Threat Detection', 'Incident Response', 'Risk Management', 'Security Operations'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 5,
            number: '05',
            title: 'AI Cooking Hackathon',
            description:
                'AI Cooking Hackathon is a project developed during a hackathon that explored the use of Thai Large Language Models (LLMs) for cooking assistance. The project focused on applying Thai language AI to understand user input and generate cooking guidance, recipe suggestions, and ingredient recommendations. The goal was to demonstrate how LLM technology can be adapted for Thai-language applications and used to support everyday activities such as cooking.',
            images: loadImages("Pro5"),
            tags: ['Hackathon', 'Artificial Intelligence', 'LLM', 'Thai Language Processing', 'AI Application'],
            delay: '0.3s',
        },
        {
            id: 6,
            number: '06',
            title: 'NU Hackathon and Pitching 2024 Boot Camp',
            description:
                'Participated in the NU Hackathon and Pitching 2024 Boot Camp, where participants were trained in performance testing and system analysis for web applications. The program involved hands-on practice with performance testing concepts, analyzing system performance metrics, and presenting technical solutions through pitching sessions. This experience enhanced skills in system evaluation, teamwork, and technical presentation.',
            images: loadImages("Pro6"),
            tags: ['Hackathon', 'Performance Testing', 'System Analysis', 'Teamwork', 'Pitching'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 7,
            number: '07',
            title: 'Pitching P1 Startup Competition',
            description:
                'Participated in the P1 Startup Pitching Competition, where teams presented innovative business ideas to a panel of judges. Our team proposed a game concept focused on promoting tourism in Thailand by integrating cultural and travel experiences into interactive gameplay. The project emphasized business idea development, market analysis, and pitching skills.',
            images: loadImages("Pro7"),
            tags: ['Startup Pitch', 'Business Idea', 'Game Concept', 'Tourism', 'Team Project'],
            delay: '0.3s'
        },
        {
            id: 8,
            number: '08',
            title: 'GE Appreciation Day',
            description:
                'Participated in the GE Appreciation Day Innovation Competition, an event organized for core course students at Naresuan University to present innovative ideas and projects. Our team developed a sports arm sleeve designed to help reduce the risk of injuries during physical activities. The project was awarded 1st place in the competition.',
            images: loadImages("Pro8"),
            tags: ['Innovation Competition', 'Product Design', 'Sports Innovation', 'Team Project', '1st Place'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 9,
            number: '09',
            title: 'Idea Pitch Day',
            description:
                'Participated in Idea Pitch Day, a business idea competition where participants presented innovative startup concepts. Our team pitched Math Runner, an educational game that improves mathematical skills through roguelike-inspired gameplay mechanics. The project was recognized with an Honorable Mention award.',
            images: loadImages("Pro9"),
            tags: ['Business Pitch', 'Startup Idea', 'Educational Game', 'Game Concept', 'Honorable Mention'],
            delay: '0.3s'
        },
        {
            id: 10,
            number: '10',
            title: 'FIFA 2022 Dataset Dashboard',
            description:
                'FIFA 2022 Dataset Dashboard is a web-based data visualization project that presents player statistics from the FIFA 2022 dataset. The application allows users to search, filter, and analyze player data through interactive dashboards and visualizations. The project focuses on transforming raw sports data into meaningful insights using a structured database and web interface.',
            images: loadImages("Pro10"),
            tags: ['Data Visualization', 'Web Application', 'Dashboard', 'Data Analysis', 'Sports Data'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 11,
            number: '11',
            title: 'Line Following Robot',
            description:
                'Line Following Robot is a robotics project that involved designing and building a robot capable of autonomously following a predefined path. The project included hardware assembly, sensor integration, and programming the control logic to detect and track a line accurately. This project helped develop practical experience in robotics systems, sensor-based navigation, and embedded programming.',
            images: loadImages("Pro11"),
            tags: ['Robotics', 'Embedded Systems', 'Sensors', 'Programming', 'Hardware Project'],
            delay: '0.3s'
        },
        {
            id: 12,
            number: '12',
            title: 'Saisong',
            description:
                'Saisong is an application designed to calculate the appropriate monetary gift for various social events. By considering factors such as the type of event (e.g., weddings or ceremonies) and the relationship between the guest and the host, the system provides recommended contribution amounts. The goal of the project is to simplify social decision-making and provide practical guidance for users attending events.',
            images: loadImages("Pro12"),
            tags: ['Application', 'Calculator Tool', 'Social Utility', 'User Experience'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 13,
            number: '13',
            title: 'Wealth-Home',
            description:
                'Wealth-Home is a furniture e-commerce website developed during my internship at BP Luxury Travel and BP Online Groups. The website was built using WordPress, where I contributed to the design and development of the site, including layout customization, product presentation, and content management to create a functional and user-friendly online furniture store.',
            images: loadImages("w1"),
            tags: ['WordPress', 'Web Development', 'E-commerce', 'Internship', 'Website Design'],
            delay: '0.3s'
        },
        {
            id: 14,
            number: '14',
            title: 'Intense-Tech',
            description:
                'IntenseTech is an electronics e-commerce website developed during my internship at BP Luxury Travel and BP Online Groups. The website was built using WordPress, where I contributed to the design and development of the online store, including product presentation, website layout customization, and content management to create a functional and user-friendly shopping experience.',
            images: loadImages("w2"),
            tags: ['WordPress', 'Web Development', 'E-commerce', 'Website Design', 'Internship'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 15,
            number: '15',
            title: 'Luowei-TH',
            description:
                'Luowei-TH is an electronics e-commerce website developed during my internship at BP Luxury Travel and BP Online Groups. The website was built using WordPress, where I contributed to the design and development of the online store, including customizing the website layout, organizing product information, and managing content to create a clear and user-friendly shopping experience.',
            images: loadImages("w3"),
            tags: ['WordPress', 'Web Development', 'E-commerce', 'Website Design', 'Internship'],
            delay: '0.3s'
        },
        {
            id: 16,
            number: '16',
            title: 'smewitsawa-tech',
            description:
                'Smewitsawa Tech is a company information website developed during my internship at BP Luxury Travel and BP Online Groups. The website was built using WordPress to present information about the company’s services in importing and supplying water pumps. I contributed to the website design, layout customization, and content management to create a clear and informative platform for customers seeking product and service information.',
            images: loadImages("w4"),
            tags: ['WordPress', 'Web Development', 'Corporate Website', 'Website Design', 'Internship'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 17,
            number: '17',
            title: 'CenterPower',
            description:
                'CenterPower is a corporate website developed during my internship at BP Luxury Travel and BP Online Groups. The website was built using WordPress to present information about industrial electrical measuring instruments and control panel equipment. I contributed to the website design, layout customization, and content management to provide clear product and service information for customers.',
            images: loadImages("w5"),
            tags: ['WordPress', 'Web Development', 'Corporate Website', 'Industrial Equipment', 'Internship'],
            delay: '0.3s'
        },
        {
            id: 18,
            number: '18',
            title: 'Uone-Package',
            description:
                'Uone-package.com is a corporate website developed during my internship at BP Luxury Travel and BP Online Groups. The website was built using WordPress to present information about the company’s products, including PP, PE, and PET plastic bottles. I contributed to the website design, layout customization, and content management to create a clear and informative platform for showcasing the company’s manufacturing and distribution services.',
            images: loadImages("w6"),
            tags: ['WordPress', 'Web Development', 'Corporate Website', 'Manufacturing', 'Internship'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 19,
            number: '19',
            title: 'New Relaxation',
            description:
                'NewRelaxationMassage.com is a service website developed during my internship at BP Luxury Travel and BP Online Groups. The website was built using WordPress to present information about massage and relaxation services, including service details, pricing, and contact information. I contributed to the website design, layout customization, and content management to create a welcoming and user-friendly platform for customers seeking relaxation services.',
            images: loadImages("w7"),
            tags: ['WordPress', 'Web Development', 'Service Website', 'Website Design', 'Internship'],
            delay: '0.3s'
        },
        {
            id: 20,
            number: '20',
            title: 'DZenith Engineering',
            description:
                'DZenithEngineering.com is an industrial product website developed during my internship at BP Luxury Travel and BP Online Groups. The website was built using WordPress to present information about transformer spare parts and related electrical equipment. I contributed to the website design, layout customization, and content management to create a clear and informative platform for customers searching for industrial electrical components.',
            images: loadImages("w8"),
            tags: ['WordPress', 'Web Development', 'Industrial Website', 'Electrical Equipment', 'Internship'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 21,
            number: '21',
            title: 'Customer Beverage Preference Dashboard',
            description:
                'A data visualization dashboard built with Tableau to analyze customer beverage preferences and identify key insights for café business planning. The project uses interactive visualizations and basic forecasting to recommend core menu items based on customer demand patterns. ',
            images: loadImages("D1"),
            link: 'https://public.tableau.com/app/profile/sansern.saewa/viz/CustomerBeveragePreferenceDashboard/Dashboard1',
            tags: ['Data Visualization', 'Tableau', 'Business Analytics', 'Customer Behavior Analysis', 'Forecasting'],
            delay: '0.3s'
        },
        {
            id: 22,
            number: '22',
            title: 'Cybersecurity Awareness - DGA & TDGA',
            description:
                'This certificate was awarded by the Digital Government Development Agency (DGA) and Thailand Digital Government Academy (TDGA) for completing the online course "Cybersecurity Awareness." The training focused on fundamental cybersecurity concepts, safe digital practices, and awareness of cyber threats in the digital era. The program aims to strengthen cybersecurity understanding for individuals working in digital environments.',
            images: loadImages("c1"),
            tags: ['Cybersecurity', 'Digital Security', 'Online Training', 'DGA', 'TDGA'],
            delay: '0.3s',
            reversed: true
        },
        {
            id: 23,
            number: '23',
            title: 'System and Network Management - Thai MOOC',
            description:
                'This certificate was issued through the Thai MOOC learning platform for successfully completing the course "System and Network Management." The course covered fundamental concepts of computer systems, network management, and system administration, providing knowledge about how modern computer networks operate and how they are maintained in organizational environments.',
            images: loadImages("c2"),
            tags: ['Networking', 'System Administration', 'IT Infrastructure', 'Thai MOOC', 'Computer Networks'],
            delay: '0.4s'
        },
        {
            id: 24,
            number: '24',
            title: 'Basic Cybersecurity - TPQI',
            description:
                'This certificate was awarded by the Thailand Professional Qualification Institute (TPQI) for completing the Basic Cybersecurity training program. The course introduced essential cybersecurity principles, risk awareness, and digital safety practices aligned with professional skill standards to help individuals understand common cyber threats and protection methods.',
            images: loadImages("c3"),
            tags: ['Cybersecurity', 'Information Security', 'Digital Safety', 'TPQI', 'Professional Training'],
            delay: '0.5s',
            reversed: true
        },
        {
            id: 25,
            number: '25',
            title: 'Basic Cybersecurity - Department of Skill Development',
            description:
                'This certificate was issued by the Department of Skill Development, Ministry of Labour, Thailand, for completing the online training course "Basic Cybersecurity." The training introduced the fundamental concepts of cybersecurity, including safe internet usage, awareness of cyber risks, and basic methods for protecting digital information.',
            images: loadImages("c4"),
            tags: ['Cybersecurity', 'Digital Skills', 'Ministry of Labour', 'IT Security', 'Online Training'],
            delay: '0.6s'
        }
    ];

    return (
        <section id="work" className="work">
            <div className="work-container">
                <h2 className="animate-in" style={{ animationDelay: '0.2s' }}>
                    My Work
                </h2>

                <div className="projects-grid">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;