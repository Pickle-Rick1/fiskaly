import React from 'react'
import { BaseComponentProps } from '@/types';
import { Header, Footer } from '@/components';

export const Layout: React.FC<BaseComponentProps> = (props) => {
    const { children } = props;
    return (
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
