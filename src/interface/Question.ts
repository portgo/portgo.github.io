import { chatgptPP } from "../data/questions/about-project/chatgpt-pp"
import { hardestProject } from "../data/questions/about-project/toper"
import { strongestSkill } from "../data/questions/about-skill/react"
import { experiences } from "../data/questions/experiences"
import { projects } from "../data/questions/projects"
import { skills } from "../data/questions/skills"
import { whoAmI } from "../data/questions/whoAmI"

export interface Question {
    name: string
    results: ResultItem[]
    questionSection  ?: QuestionSection
    rightSideDetail?: RightSideDetail
    grids?: GridItemsMainDetail
    imageSection  ?: ImageSection
}

interface QuestionSection{
    questions : PeopleAlsoAsk[]
    order ?: number
    title : string
}

interface ImageSection{
    title : string
    images : string[]
}

export interface GridItemsMainDetail {
    title: string
    sub: string
    items: GridItem[]
}

export interface GridItem {
    title: string
    detail: string
    image: string
}


export interface ResultItem {
    websiteTitle?: string
    url?: string
    image: string
    images ?: string[]
    title: string
    description: string
    links?: LinkItem[]
    lineLimit ?: number
    renderType ?: "IMAGE" | "FIRST_PAGE" | "DEFAULT"

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

export const questions: Question[] = [
    {...whoAmI},
    {...skills},
    {...experiences},
    {...projects},
    {...strongestSkill},
    {...hardestProject},
    {...chatgptPP}
]

export const suggestions = ["Who am I", "What is your skills",
    "What is your experience", "What is your projects", "What is your strongest skill", "What is your hardest project" , "What is ChatGPT Prompt Plus"]