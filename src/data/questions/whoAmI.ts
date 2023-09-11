import { Question } from "../../interface/Question";

export const whoAmI : Question = {
    name: "Who am I",
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
        },
        {
            title: "My skill",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
            image: "https://i.ibb.co/DGTQBZ3/future.png"
        },
        {
            title: "My projects",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
            image: "https://i.ibb.co/jkcT49p/verified.png"
        },
        {
            title: "My experince",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa molestiae officiis fuga nam consequatur sint voluptatum porro, doloremque vel, ullam nostrum quod! Reprehenderit, eius corporis eveniet adipisci aspernatur dolorum?`,
            image: "https://i.ibb.co/Y81tLD0/view.png"
        },
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

    questionSection : {
        title : "",
        questions : [{ name: "Who is you hobby", detail: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eaque modi, quo suscipit dolorem assumenda, obcaecati error quisquam recusandae ducimus sint nihil culpa consequatur reiciendis est? Velit rem laborum sapiente.
        
        ` }, { name: "What is your faviorate game", detail: "" }, { name: "Did you single", detail: "Yes" }]
        
    }
}