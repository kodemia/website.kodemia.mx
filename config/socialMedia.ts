import { FooterLinkName } from 'lib/tracker'

interface SocialMediaElement {
  name: FooterLinkName
  href: string
  icon: string
}
const socialMedia: SocialMediaElement[] = [
  {
    "name": "Facebook",
    "href": "https://www.facebook.com/kodemiamx",
    "icon": "/icons/social-media-fb.svg"
  },
  {
    "name": "Instagram",
    "href": "https://www.instagram.com/kodemiamx",
    "icon": "/icons/social-media-insta.svg"
  },
  {
    "name": "Twitter",
    "href": "https://twitter.com/kodemiamx",
    "icon": "/icons/social-media-tw.svg"
  },
  {
    "name": "GitHub",
    "href": "https://github.com/kodemia",
    "icon": "/icons/social-media-gh.svg"
  },
  {
    "name": "Medium",
    "href": "https://medium.com/kodemia",
    "icon": "/icons/social-media-medium.svg"
  },
  {
    "name": "YouTube",
    "href": "https://www.youtube.com/channel/UCjCo9gdMQdebs95zcufryaQ",
    "icon": "/icons/social-media-yt.svg"
  },
  {
    "name": "LinkedIn",
    "href": "https://www.linkedin.com/company/kodemiamx",
    "icon": "/icons/social-media-in.svg"
  }
]

export default socialMedia
