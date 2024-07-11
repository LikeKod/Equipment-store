import {useLang} from '@/hooks/useLang'

const SearchModal = () => {
    const {lang, translation} = useLang()

    return (
        <div className="search-modal">
            <button className="btn-reset search-modal__close"/>
            <h3 className="search-modal__title">{translation[lang].header.search_products}</h3>
            <div className="search-modal__top">
                <label className="search-modal__label">
                    <input type="text" className="search-modal__input"/>
                    <span className="search-modal__floating_label">
                    {translation[lang].header.search_infos}
                    </span>
                </label>
            </div>
        </div>
    )
}

export default SearchModal;