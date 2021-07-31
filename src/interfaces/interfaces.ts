
export interface Content {
    navbar: Navbar,
    body: Body
} 

export interface Navbar {
    logo: NavbarLogo,
    items: NavbarItem []
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
    ourServices: OurServices
}

export interface LandingPage {
    imgUrl: string
}

export interface OurServices {
    headline: string,
    subHeadline: string,
    boxes: Box[]
}

export interface Box {
    imgUrl: string,
    boxHeadline: string,
    boxText: string
}
