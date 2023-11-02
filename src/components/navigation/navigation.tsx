import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './navigation.module.scss';
import { ReactComponent as IconNavService } from '../../assets/icons/icon_nav_service.svg';
import { ReactComponent as IconNavCalc } from '../../assets/icons/icon_nav_calc.svg';
import { ReactComponent as IconNavMusic } from '../../assets/icons/icon_nav_music.svg';
import { ReactComponent as IconNavReport } from '../../assets/icons/icon_nav_report.svg';
import { ReactComponent as IconNavMypage } from '../../assets/icons/icon_nav_mypage.svg';

const navList = [
    {
        link: '/page/service',
        page: '서비스 소개',
        icon: IconNavService,
    },
    {
        link: '/page/calculator',
        page: '수면 리듬 계산기',
        icon: IconNavCalc,
    },
    {
        link: '/page/music',
        page: '수면 유도 음악',
        icon: IconNavMusic,
    },
    {
        link: '/page/report',
        page: '수면 기록',
        icon: IconNavReport,
    },
    {
        link: '/page/mypage',
        page: '마이페이지',
        icon: IconNavMypage,
    },
];

const Navigation = () => {
    const location = useLocation();
    const [iconFill, setIconFill] = useState('#6B6B6B');

    useEffect(() => {
        console.log(location.pathname);
    }, []);

    const changeIconFill = (e:any) => {
        console.log(e);
        setIconFill('#A3E4BC');
    }

    return (
        <nav className={style.navBox}>
            {navList.map((nav, index) => (
                <Link to={nav.link} key={index}>
                    <nav.icon
                        fill={iconFill}
                        onClick={(e) => changeIconFill(e)}
                    />
                    <span>{nav.page}</span>
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
