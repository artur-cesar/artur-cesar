import type { ExperienceData } from "@/types"
import type { BlogPost } from '@/types'

export class Service {

    getExperiences(): ExperienceData[] {
        return [
            {
                title: "Senior Software Engineer",
                employer: "Zé Delivery",
                startDate: new Date("2022-06-01"),
                endDate:  null,
                isCurrentPosition: true,
                state: "Remote",
                country: "United States",
                city: "Remote",
                description: `
                    <p class='my-5'>At Zé Delivery, I operate as a Senior Software Engineer, driving the design and development of scalable, cloud-native back-end solutions. I work primarily with Python and Node.js (NestJS), while also owning infrastructure responsibilities across AWS in the absence of dedicated DevOps or SRE teams. This hands-on approach has strengthened my ability to lead initiatives from architecture through deployment, ensuring high availability and performance in production.</p>

                    <div class='my-5'>
                        <p class='my-5 text-gray-700'>Key contributions:</p>
                        <ul>
                            <li>- Led the implementation of the NuPay payment method using serverless architecture, enabling BRL 250k in transactions within the first month and surpassing BRL 1.5M/mo to date.</li>
                            <li>- Delivered end-to-end solutions using AWS services such as DynamoDB, RDS, SQS, SNS, EC2, and Lambda, ensuring reliability and scalability.</li>
                            <li>- Acted as the technical owner of cloud infrastructure, managing deployment pipelines, monitoring, and incident response without a dedicated DevOps/SRE team.</li>
                            <li>- Developed and maintained robust back-end systems in Python and Node.js, contributing to the platform’s growth and stability.</li>
                        </ul>
                    </div>
                `,
                skills: ["RESTful", " Backend", "Serverless", "AWS", "Desenvolvimento de back-end", "Node.js", "TypeScript", "Python"]
            },
            {
                title: "Software Engineer Lead",
                employer: "Rede Vistorias",
                startDate: new Date("2020-07-01"),
                endDate:  new Date("2022-06-30"),
                isCurrentPosition: false,
                state: "Santa Catarina",
                country: "Brasil",
                city: "Florianópolis",
                description: `
                    <p class='my-5'>This is where my career as a back-end specialist began, focusing on microservices architecture and implementing messaging with RabbitMQ. Developed professionally with Python and PHP, contributing to a globally-reaching digital product. Collaborated on advanced architecture and gained expertise in back-end technologies.</p>

                    <div class='my-5'>
                        <p class='my-5 text-gray-700'>Key contributions:</p>
                        <ul>
                            <li>- I was the technical reference for the back-end team, providing guidance and support across multiple projects.</li>
                            <li>- Scaled the system's microservices from 8 to 19, designing and developing 8 new services independently using both Python and PHP.</li>
                            <li>- Implemented and optimized messaging patterns using RabbitMQ to enable efficient inter-service communication.</li>
                            <li>- Contributed to a digital product with global reach, ensuring high standards of code quality, testing, and documentation.</li>
                        </ul>
                    </div>
                `,
                skills: ["PHP", "Desenvolvimento de back-end", "Microsserviços", "Python", "API REST", "RESTful", "Backend", "PostgreSQL"]
            },
            {
                title: "Software Engineer Lead",
                employer: "Mesha Tecnologia",
                startDate: new Date("2017-09-01"),
                endDate:  new Date("2020-06-30"),
                isCurrentPosition: false,
                state: "Alagoas",
                country: "Brasil",
                city: "Alagoas",
                description: `
                    <p class='my-5'>At Mesha, I worked as a full-stack developer across both internal products and consultancy projects for external clients. I was involved in the design and development of web applications using PHP and Node.js on the back end, and Angular and VueJS on the front end. My role also included significant work with Microsoft SQL Server, where I created and maintained complex views and stored procedures.<p>

                    <div class='my-5'>
                        <p class='my-5 text-gray-700'>Key contributions:</p>
                        <ul>
                            <li>- Served as the technical reference for initiating new internal and external web projects, helping define architecture and tech stack.</li>
                            <li>- Delivered robust full-stack solutions using PHP, Node.js, Angular, and VueJS, tailored to both proprietary systems and client needs.</li>
                            <li>- Developed and optimized SQL Server queries, including views and stored procedures, improving performance and maintainability.</li>
                            <li>- Shared technical knowledge with the team through internal talks on unit testing practices and the Node.js ecosystem.</li>
                        </ul>
                    </div>
                `,
                skills: ["JavaScript", "AngularJS", "HTML", "RESTful", "Microsoft SQL Server", "React.js", "Desenvolvimento fullStack", "CSS", "Node.js", "PHP", "Stored Procedures de T-SQL", "Node.js", "VueJS"]
            },
            {
                title: "Web developer",
                employer: "Mam.bo",
                startDate: new Date("2016-05-31"),
                endDate:  new Date("2017-09-30"),
                isCurrentPosition: false,
                state: "Alagoas",
                country: "Brasil",
                city: "Alagoas",
                description:  `
                    <p class='my-5'>At Mam.bo, a software house, I took a significant step in my career, competing for a Junior Developer position with over a year of experience.<p> 

                    <p class='my-5'>During my one year and five months there, I worked on management systems, gathered requirements directly from clients, and adopted agile methodologies. I had the opportunity to develop and maintain applications using one of the most comprehensive frameworks I know, Laravel, alongside VueJS.<p>

                    <div class='my-5'>
                        <p class='my-5 text-gray-700'>Key contributions:</p>
                        <ul>
                            <li>- Delivered and maintained business-critical features in Laravel and VueJS across multiple management systems for clients in diverse sectors.</li>
                            <li>- Collaborated directly with clients to gather requirements, helping to shape solutions that aligned with real business needs.</li>
                            <li>- Embraced agile practices early in my career, participating in planning, stand-ups, and retrospectives to improve team delivery.</li>
                            <li>- Strengthened my full-stack development skills and gained solid experience with one of the most powerful PHP frameworks available.</li>
                        </ul>
                    </div>
                    `,
                skills: ["HTML5", "Bootstrap", "RESTful", "Desenvolvimento fullStack", "Laravel Lumen", "Laravel", "PHP", "Node.js", "Vue.js", "JavaScript", "CSS", "PostgreSQL", "MySQL"]
            },
            {
                title: "Web developer",
                employer: "Global Tecnologia",
                startDate: new Date("2015-02-01"),
                endDate:  new Date("2016-05-31"),
                isCurrentPosition: false,
                state: "Alagoas",
                country: "Brasil",
                city: "Alagoas",
                description: "At Global Tecnologia, I worked as an apprentice while gaining initial experience in the tech field. My responsibilities included developing a management system for internet service providers using PHP, HTML, CSS, AngularJS, and PostgreSQL.",
                skills: ["HTML5", "JavaScript", "AngularJS", "PostgreSQL", "CSS", "PHP", "Bootstrap"]
            },
            {
                title: "Web developer",
                employer: "Meu Tutor",
                startDate: new Date("2015-01-06"),
                endDate:  new Date("2015-05-31"),
                isCurrentPosition: false,
                state: "Alagoas",
                country: "Brasil",
                city: "Alagoas",
                description: "At Meu Tutor, my first professional experience, I worked as a CNPq research fellow on a tutoring-based learning system, part of a project at the Federal University of Alagoas. My role involved developing and maintaining web applications using PHP, HTML, and CSS.",
                skills: ["HTML5", "JavaScript", "Css", "jQuery", "PHP", "Bootstrap"]
            }
        ]
    }

    // generated by https://microlink.io
    getBlogs(): BlogPost[] {
        return [
            {
                "title": "Outbox pattern: with Flask + RabbitMQ + PostgreSQL",
                "description": "At a recent architecture event with some great fellows, we had a casual but deep discussion about resilience. The informal theme?...",
                "image": "https://static.licdn.com/aero-v1/sc/h/c45fy346jw096z9pbphyyhdz7",
                "url": "https://www.linkedin.com/posts/artur-cesar-de-melo-jacinto_github-artur-cesarflask-outbox-pattern-activity-7335460064675217409-MWF4?utm_source=share\u0026utm_medium=member_desktop\u0026rcm=ACoAABzFce4BWrHUm7nU7BgOZnlcQjSMNalEMe8"
            },
            {
                "title": "When Serverless Becomes a Mess",
                "description": "My Experience with the Overuse of Lambdas in Microservices",
                "image": "https://miro.medium.com/v2/da:true/resize:fit:1200/0*PMtX2dsE2ecAwcob",
                "url": "https://medium.com/@arturcesar.melo/when-serverless-becomes-a-mess-aadae6d2510e"
            },
            {
                "title": "How Metadata Saved Us From the Flames of a Messaging Disaster",
                "description": "In 2020, I was starting my first experience as a backend specialist—and like many of us during the pandemic, I was working remotely…",
                "image": "https://miro.medium.com/v2/resize:fit:448/1*6g4yz7TV5E59WWfMNRaNQw.png",
                "url": "https://medium.com/@arturcesar.melo/how-metadata-saved-us-from-the-flames-of-a-messaging-disaster-c1e0149e9f33"
            },
            {
                "title": "Tutorial: Laravel 11.x com Dev Container",
                "description": "Na minha carreira como desenvolvedor (que não foi nada convencional), eu sempre tive muitos problemas com setups e configuração de…",
                "image": "https://miro.medium.com/v2/da:true/resize:fit:1200/0*0IuXRwWh8WrZoIxh",
                "url": "https://medium.com/@arturcesar.melo/tutorial-laravel-11-x-com-dev-container-811966d87b20"
            },
            {
                "title": "Autenticação com Laravel Sanctum (Laravel 11.x)",
                "description": "Introdução",
                "image": "https://miro.medium.com/v2/da:true/resize:fit:1200/0*KYKiY2cs4rmavYO2",
                "url": "https://medium.com/@arturcesar.melo/autentica%C3%A7%C3%A3o-com-laravel-sanctum-laravel-11-x-4999782add5d"
            }
        ]
    }
}