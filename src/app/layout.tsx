import { ReactNode } from 'react'
import c from 'classnames'
import { lato, montserrat, montserratBold } from '@/styles/fonts'
import Header from '@/modules/Header'
import Footer from '@/modules/Footer'
import MainWrapper from '@/modules/MainWrapper'
import '../styles/global.scss'
import ReduxProvider from '@/redux/ReduxProvider'

interface IRootLayout {
    children: ReactNode
}

const RootLayout = ({ children }: IRootLayout) => {
    return (
        <html
            lang='en'
            className={c(
                lato.variable,
                montserrat.variable,
                montserratBold.variable
            )}
        >
            <body>
                <ReduxProvider>
                    <Header />
                    <MainWrapper>{children}</MainWrapper>
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    )
}

export default RootLayout