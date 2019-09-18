import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faStackOverflow, faLinkedinIn, faDev, faMediumM } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = true;
library.add(faGithub, faTwitter, faStackOverflow, faLinkedinIn, faDev, faMediumM, faMapPin)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}