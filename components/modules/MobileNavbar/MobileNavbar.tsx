import { useLang } from "@/hooks/useLang"
import Link from "@/node_modules/next/link"

const MobileNavbar = () => {
    const {lang, translation} = useLang()

    return (
        <div className="mobile-navbar">
            <Link href='/' className="mobile-navbar__btn">
                {translation[lang].breadcrumbs.main}
            </Link>
            <button className="btn-reset mobile-navbar__btn">
                [translation[lang].breadcrumbs.catalog]
            </button>
            <Link href='/favorites' className="btn-reset mobile-navbar__btn">
                {translation[lang].breadcrumbs.favorites}
            </Link>
            <Link href='/cart' className="btn-reset mobile-navbar__btn">
                {translation[lang].breadcrumbs.cart}
            </Link>
            <button className="btn-reset mobile-navbar__btn">
                [translation[lang].common.more]
            </button>
        </div>
    )
}

export default MobileNavbar
