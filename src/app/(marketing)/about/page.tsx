import { Metadata } from 'next'
import PageContent from '@/modules/PageContent'
import { ABOUT_PAGE_CONTENT } from '@/utils/pageContent'

export const metadata: Metadata = {
    title: 'FxMath - About us',
}

const AboutPage = () => {
    return <PageContent {...ABOUT_PAGE_CONTENT} />
}

export default AboutPage
