
export interface Content {
    navbar: Navbar,
    body: Body,
    legal: LegalSection[]
}

export interface Navbar {
    logo: NavbarLogo,
    items: NavbarItem[]
}

export interface NavbarLogo {
    imgUrl: string
}

export interface NavbarItem {
    name: string,
    url: string
}

export interface Body {
    landingPage: LandingPage,
    services: Services,
    about: About,
    references: References,
    contact: Contact
}

export interface LandingPage {
    heading: string,
    statements: Array<string>
}

export interface Services {
    headline: string,
    subHeadline: string,
    boxes: Box[]
}

export interface About {
    headline: string,
    subHeadline: string,
    boxes: Box[],
    numbers: NumberBox[]
}

export interface NumberBox {
    boxNumber: string,
    boxMetric: string
}

export interface References {
    headline: string,
    subHeadline: string,
    projects: Project[]
}

export interface Project {
    projectName: string,
    text: string,
    mainPictureName: string,
    galleryPictureNames: string
}

export interface Contact {
    headline: string,
    subHeadline: string,
    buttonText: string,
    mapText: string,
    mailAddress: string,
    contactData: ContactData[]
}

export interface Box {
    imgUrl: string,
    boxHeadline: string,
    boxText: string
}

export interface ContactData {
    text: string,
    icon: string,
    value: string
}

export interface LegalSection {
    title: string,
    content: LegalContentEntry[]
}

export interface LegalContentEntry {
    heading: string,
    text: string
}
