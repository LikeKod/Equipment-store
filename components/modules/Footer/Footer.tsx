import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Link from '@/node_modules/next/link'
import FooterLinks from './FooterLinks'
import FooterMobileLink from './FooterMobileLink'

const Footer = () => {
  const { lang, translation } = useLang()
  const isMedia950 = useMediaQuery(950)
  const isMedia640 = useMediaQuery(6400)

  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='container footer__top__container'>
          <div className='footer__logo'>
            <Logo />
          </div>
          <div className='footer__contacts'>
            <span>
              <a href='tel:+88005553535'>+8 (800) 555-35-35</a>
            </span>
            <span>
              <a href='mailto:rostelecom@yandex.ru'>rostelecom@yandex.ru</a>
            </span>
            {isMedia950 && <FooterLinks />}
          </div>
          {!isMedia950 && <FooterLinks />}
          <ul className='list-reset footer__socials'>
            <li className='footer__socials__item'>
              <a
                href='https://t.me/dvejer'
                className='footer__socials__item__link'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                href='https://vk.com'
                className='footer__socials__item__link'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                href='https://youtube.com'
                className='footer__socials__item__link'
              />
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container footer__bottom__container'>
          <div className='footer__copyright'>
            © 2023 ПАО {translation[lang].footer.copyright}
            <br />
            (18+)
          </div>
          <div className='footer__policy'>
            <div className='footer__policy__inner'>
              <Link href='/personal-data-policy'>
                {translation[lang].footer.policy}
              </Link>
              <Link href='/privacy-policy'>
                {translation[lang].footer.privacy}
              </Link>
            </div>
            {isMedia640 && (
              <FooterMobileLink text={translation[lang].footer.full_version} />
            )}
          </div>
          {!isMedia640 && (
            <FooterMobileLink text={translation[lang].footer.mobile_version} />
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
