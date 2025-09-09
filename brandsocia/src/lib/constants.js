import { TwitterOutlined } from "@ant-design/icons";
// import { LinkedInOutlined } from "@ant-design/icons";
import {  FacebookOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
]

export const SERVICES = [
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/digital-marketing', label: 'Digital Marketing' },
  { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
  { href: '/services/graphic-designing', label: 'Graphic Designing' },
  { href: '/services/logo-designing', label: 'Logo Designing' }
]

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: '#', icon: <TwitterOutlined /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/brand-socia/' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577997013762', icon: <FacebookOutlined /> },
  { name: 'Instagram', href: 'https://www.instagram.com/brandsocia/', icon: <InstagramOutlined /> }
]

export const COMPANY_INFO = {
  logo: '/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png',
  email: 'contact@brandsocia.com',
  phone: '+92 328 3389247',
  address: 'Office # 24, 2nd Floor, ICMAP Tower, ICMAP Head Office, ST-18/C, Block 6, Gulshan-e-Iqbal, Karachi 75300'
}
