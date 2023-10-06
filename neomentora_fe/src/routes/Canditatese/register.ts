import axios from "axios";

interface MentorProps {
    name: string
    email: string,
    ddd: number,
    phone: number,
    specialty: "FINANCE" | "MARKETING" | "TECHNOLOGY",
    photo_url: string,
    password?: string
}

interface InvestorProps {
    name: string
    email: string,
    ddd: number,
    phone: number,
    areas_of_interest: string,
    amount_available_for_investment: number
}

interface SmallBusinessProps {
    name: string
    email: string,
    ddd: number,
    phone: number,
    type_of_document: "CPF" | "CNPJ"
    document: string,
    activity_sector: string,
    problem_or_challenge: string
    photo_url: string
}


const urlMentor = "http://localhost:8080/neomentora/user/mentor"
const urlInvestor = "http://localhost:8080/neomentora/user/investor"
const urlSmallBusiness = "http://localhost:8080/neomentora/user/smallBusiness"

const headers = {
    'Content-Type': 'application/json'
}

const registerMentor = async ({name, email, ddd, phone, specialty, photo_url}: MentorProps) => {
    return await axios.post<MentorProps>(urlMentor, {
        name,
        email,
        ddd,
        phone,
        specialty,
        photo_url
    }, {headers})
}

const registerInvestor = async (
    {
        name,
        email,
        ddd,
        phone,
        areas_of_interest,
        amount_available_for_investment
    }: InvestorProps) => {

    return await axios.post<InvestorProps>(urlInvestor, {
        name,
        email,
        ddd,
        phone,
        areas_of_interest,
        amount_available_for_investment
    }, {headers})
}

const registerSmallBusiness = async (
    {
        name,
        email,
        ddd,
        phone,
        type_of_document,
        document,
        activity_sector,
        problem_or_challenge,
        photo_url
    }: SmallBusinessProps) => {

    return await axios.post<SmallBusinessProps>(urlSmallBusiness, {
        name,
        email,
        ddd,
        phone,
        type_of_document,
        document,
        activity_sector,
        problem_or_challenge,
        photo_url
    }, {headers})
}


export {registerMentor, registerInvestor, registerSmallBusiness};
export type {MentorProps, InvestorProps, SmallBusinessProps};

