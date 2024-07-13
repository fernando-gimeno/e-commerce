export interface Popular {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
}

export interface Latest {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
}

export interface FooterLinks {
  title: string;
  links: string[];
}

export interface FooterContactInfo {
  title: string;
  links: Link[];
}

export interface Socials {
  title: string;
  links: string[];
}

interface Link {
  label: string;
  value: string;
}
