export interface Question {
    name: string
    answer: string
    results: ResultItem[]
    peopleAlsoAsks: PeopleAlsoAsk[]
    rightSideDetail?: RightSideDetail
    grids?: GridItemsMainDetail
    peopleAlsoAskTitle?: string
}

export interface GridItemsMainDetail {
    title: string
    sub: string
    items: GridItem[]
}

interface GridItem {
    title: string
    detail: string
    image: string
}

export interface ResultItem {
    websiteTitle?: string
    url?: string
    image: string
    title: string
    description: string
    links?: LinkItem[]
    imageType ?: boolean
}

interface LinkItem {
    title: string
    desc: string
    link: string
}

export interface RightSideDetail {
    name: string
    images: string[]
    subName: string
    description: string
    descriptionTitle : string
    subDetails: SubDetail[]
}

interface SubDetail {
    name: string
    value: string
}

export interface PeopleAlsoAsk {
    name: string
    detail: string
}

// link list , people who ask , right 

export const questions: Question[] = [
    {
        name: "Who am I",
        answer: "",
        results: [
            {
                websiteTitle: "Profile",
                url: "https://www.portgo.github.io",
                title: "Top vilasone",
                description: `Hello, I'm Vilasone Phoungmixay, a React developer with two years of experience in frontend development. I've worked on numerous side projects, and you can review them by visiting the links below.`,
                image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
                links: [
                    {
                        title: "Download Resume",
                        desc: "Click this link to download resume",
                        link: ""
                    },
                    {
                        title: "Linkedin",
                        desc: "Check about my linkedin profile here",
                        link: ""
                    },
                    {
                        title: "Facebook",
                        desc: "Check about my Facebook profile here",
                        link: ""
                    }
                ]
            }
        ],
        rightSideDetail: {
            name: "Vilasone Phoungmixay",
            descriptionTitle : "About me",
            subDetails: [
                { name: "Birth date : ", value: "17 , June 2000" },
                { name: "Gender :", value: "Male" },
                { name: "Location :", value: "Sokham Village" },
                { name: "Work experince :", value: "2 year" },
            ],
            images : [],
            // images: ["https://scontent.fvte5-1.fna.fbcdn.net/v/t1.6435-9/133066269_1544165279306893_2889225793573942981_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH0crNZwTsftFvkTEpdZTIk0we91EcMnDjTB73URwycOGl3RPFP4FiRsHjMTo0bdbrfDGEpZ0IdsT25j89xHugP&_nc_ohc=uvyddAvDbrwAX8LT045&_nc_ht=scontent.fvte5-1.fna&oh=00_AfBHj3nfcYSXJgV3S8jEF58bNmuCOZ3RwLeqv11L6kYs1A&oe=6523B56B"],
            subName: "Programmer",
            description: "Vilasone Phoungmixay was born in Chanthaboluy village, Phontonsavah. He began his career in 2020 after graduating and has been working as a frontend developer at Infrasolt for the past two years. He recently left his job in search of new opportunities and hopes to find a position that aligns with his skills and interests"
        },
        peopleAlsoAsks: [{ name: "Who is you hobby", detail: "" }, { name: "What is your faviorate game", detail: "" }, { name: "Did you single", detail: "Yes" }],

    },
    {
        name: "What is your skills",
        results: [
            {
                title: "React",
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            },
            {
                title: "Vue",
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
            },
            {
                title: "Angular",
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTPfVizMrc5R7F4Nm_1A4HOguc2YtRI-IHA31kw8hf5OEi-OkPOJTFrwY&s=0"
            },
            {
                title: "Html",
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
            },
            {
                title: "GrahpQL",
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png"
            },
            {
                title: "Mysql",
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                image: "https://i.ibb.co/CBfP8Zd/74-744138-mysql-logo-png-mysql-transparent-png.jpg"
            },
            {
                title: "Typescript",
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            },
        ],
        grids: {
            title: "Skills development",
            sub: "Top 9 Skills",
            items: [
                {
                    title: "React",
                    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                },
                {
                    title: "Vue",
                    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
                },
                {
                    title: "Angular",
                    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTPfVizMrc5R7F4Nm_1A4HOguc2YtRI-IHA31kw8hf5OEi-OkPOJTFrwY&s=0"
                },
                {
                    title: "Html",
                    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
                },
                {
                    title: "GrahpQL",
                    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png"
                },
                {
                    title: "Mysql",
                    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                    image: "https://i.ibb.co/CBfP8Zd/74-744138-mysql-logo-png-mysql-transparent-png.jpg"
                },
                {
                    title: "Typescript",
                    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                },
                {
                    title: "Nodejs",
                    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                    image: `https://upload.wikimedia.org/wikipedia/commons/archive/d/d9/20160518085101%21Node.js_logo.svg`
                },
                // {
                //     title : "Tailwind",
                //     detail : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
                //     image : ""
                // }
            ]
        },
        answer: "",
        peopleAlsoAsks: [

        ]
    },
    {
        name: "What is your experince",
        answer: "",
        results: [
            {
                title: "Infrasol",
                url : "https://www.infrasole.com",
                description: `I began my employment with this company in September 2022 as a Front-End Developer and concluded my tenure in November 2023, resulting in approximately two years of service.`,
                image: "https://scontent.fvte5-1.fna.fbcdn.net/v/t39.30808-6/244219428_285564450056952_1316277782105143586_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFFz9KGykTo3z-IGgSPS0tTYTZP6CfUnyphNk_oJ9SfKv_sFNNfayZnjLzzzc2Dv6faQLsOIGK9knRo9q_K0g_Z&_nc_ohc=u8VudxixsMQAX8LLNip&_nc_ht=scontent.fvte5-1.fna&oh=00_AfA6xp5X2qfelZTbLtzoHz2osU-dqiAhEV4VL_MdtNfgGg&oe=65021A0F"
            },
            {
                title: "Lao It dev",
                url : "https://laoitdev.com",
                description: `I commenced my association with this company in September 2020 as a Web Developer. During my internship, I was engaged in Golang and React projects, and my internship concluded in November 2020, equating to a three-month duration of employment`,
                image: "https://scontent.fvte5-1.fna.fbcdn.net/v/t39.30808-6/302439121_481120720691287_6261529866668431804_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHiCS3xI2Najj56-rJTrsYkSsSo2HPxFHhKxKjYc_EUeFUrvBP5V0SiAwS6FbT_cLnYvJdsLKApltpLtPoBShtZ&_nc_ohc=6IqWpbbZgJwAX8swRnj&_nc_ht=scontent.fvte5-1.fna&oh=00_AfB_jDFtEF1us9-sSWE37XctYsJqhOscmKxem7fKuHK-mA&oe=6502450A"
            },
            {
                title: "Lao-top colleage",
                url : "https://laotop.net",
                description: `I enrolled as a student at this college in October 2019, pursuing an IT program. I successfully completed my studies and graduated in September 2021, completing approximately three years of education with a GPA of 3.4`,
                image: "https://scontent.fvte5-1.fna.fbcdn.net/v/t39.30808-6/326691447_525246689587578_27526407411968800_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGfXi89PPWHcqP9df3h3C6a6Awt6K1zuazoDC3orXO5rOv2pVwXWdq60T4dggbOpci2YyY0rG1gox84L9Q7HiyC&_nc_ohc=RdpCDncvHP4AX9mUktH&_nc_ht=scontent.fvte5-1.fna&oh=00_AfB5fUkEpe6HuNaB2QbbytbTX-rcaQXh8RREIfnEv8V6OQ&oe=6501B6BD"
            },
        ],

        peopleAlsoAsks: []
    },
    {
        name: "What is your projects",
        answer: "",
        rightSideDetail : {
            name : "Toper - Database Drawer",
            descriptionTitle : "About project",

            images : ["https://i.ibb.co/1GCZvnD/Screenshot-from-2023-09-06-15-07-58.png"],
            description : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore in eveniet ex repudiandae odit iste, facere quia voluptates rem animi, hic nemo doloribus corrupti, natus accusantium. Recusandae cupiditate doloribus a?
            `,
            subName : "Vilasone",
            subDetails : []
        },
        results: [
            // {
            //     imageType : true,
            //     title: "Toper - Database Drawer",
            //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived",
            //     image: "https://i.ibb.co/1GCZvnD/Screenshot-from-2023-09-06-15-07-58.png",
            // },
            {
                imageType : true,

                title: "ChatGPT Prompt Plus",
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        `,
                image: `https://i.ibb.co/0V32xgd/Screenshot-from-2023-09-06-15-11-42.png`,
            },

            {
                imageType : true,

                title: "Json Visualizer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr",
                image: "https://i.ibb.co/cJ4PnW9/Screenshot-from-2023-09-07-07-39-45.png",
            },
            {
                imageType : true,

                title: "Mac tab",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr",
                image: "https://i.ibb.co/PNzG6vN/Screenshot-from-2023-08-28-09-37-13.png",
            },
            {
                imageType : true,

                title: "Ps4 tab",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr",
                image: "https://i.ibb.co/F61qsRY/Screenshot-from-2023-09-02-18-49-09.png",
            },
            {
                imageType : true,

                title: "Pomobocker",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr",
                image: "https://i.ibb.co/Zz0bbQ8/Screenshot-from-2023-08-30-23-05-38.png",
            }
        ],

        peopleAlsoAsks: []
    },
    {
        name: "What is your strongest skill",
        answer: "",
        results: [],

        peopleAlsoAsks: []
    },
    {
        name: "What is your hardest project",
        answer: "",
        results: [],

        peopleAlsoAsks: []
    },
]

export const suggestions = ["Who am I", "What is your skills",
    "What is your experince", "What is your projects", "What is your strongest skill", "What is your hardest project"]