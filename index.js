window.addEventListener('load', () => {
    hasI18n()
})

// {lang}/page | page.{lang}
let mode = '{lang}/page'

function hasI18n() {
    let i18nType = ['i18n-c', 'i18n-k', 'i18n-p', 'i18n-s']
    let i18nPath = document.querySelector('[i18n-path]')
    let _path = i18nPath !== null
        ? i18nPath.attributes['i18n-path'].value
        : mode.replace('/page', location.pathname.split('.')[0])
        
    // console.log(_path)
    console.log(_path.replace('{lang}', 'cn'))

    i18nType.some(i => {
        if(document.querySelectorAll(`[${i}]`).length>0) {
            if(i==='i18n-p') {
                fetch('./i18n/cn/index.json')
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            }
        }

    })
}
