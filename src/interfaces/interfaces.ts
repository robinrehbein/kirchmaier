
export interface Content {
    navbar: Navbar,
    body: Body,
    legal: Legal
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
    ourServices: OurServices,
    about: About,
    contact: Contact
}

export interface LandingPage {
    heading: string,
    statements: Array<string>
}

export interface OurServices {
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

export interface Legal {
    imprint: LegalSection,
    dataProtection: LegalSection,
    disclaimer: LegalSection
}
export interface LegalSection {
    title: string,
    content: LegalContentEntry[]
}

export interface LegalContentEntry {
    heading: string,
    text: string
}
