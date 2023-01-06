import cn from 'classnames';
import Image from 'next/image';
import styles from './index.module.scss';
import {getPublicURL} from '../../../utils/common';
import {EmailIcon, GithubIcon, LinkedinIcon, TelegramIcon} from '../../../common/icons/Social';


const Contacts = ({className}: {className?: string}) => {

    return (
        <div className={cn(styles.contacts, className)}>
            <p className={styles.contacts__social}>
                <a href="https://github.com/Slava-Nik" target="_blank" rel="noreferrer">
                    <GithubIcon className={styles['contacts__link-icon']} width={18} height={18}/>
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/slava-nik" target="_blank" rel="noreferrer">
                    <LinkedinIcon className={styles['contacts__link-icon']} width={18} height={18}/>
                    <span>LinkedIn</span>
                </a>
                <a href="https://t.me/slava_nik96" target="_blank" rel="noreferrer">
                    <TelegramIcon className={styles['contacts__link-icon']} width={18} height={18}/>
                    <span>Telegram</span>
                </a>
                <a href="mailto:slavanik.dev@gmail.com" rel="noreferrer">
                    <EmailIcon className={styles['contacts__link-icon']} width={18} height={18}/>
                    <span>Email</span>
                </a>
            </p>
            <p className={styles['contacts__portfolio']}>Portfolio site: <a href="https://slava-nik.github.io/" target="_blank" rel="noreferrer">https://slava-nik.github.io</a></p>
            <a className={styles['contacts__download-pdf']} href={getPublicURL('/resume.pdf')} download="SlavaNikolaevich_CV.pdf">Download resume in PDF</a>
        </div>
    );
};


const AuthorInfo = () => {
    return (
        <div className={styles['author-wrapper']}>
            <div className={styles.author}>
                <div className={styles.author__image}>
                    <Image
                        src={getPublicURL('/author.jpg')}
                        alt="Slava Nikolaevich, year 2017"
                        width={140}
                        height={125}
                        priority
                    />
                </div>
                <div className={styles['author-details']}>
                    <h2 className={styles.author__name}>Slava Nikolaevich</h2>
                    <p className={styles.author__info}>Senior Front-end & Back-end Engineer, 26 y.o</p>
                    <p className={styles.author__education}>Education: B.S in Information systems and technologies</p>
                    <p className={styles.author__location}>Location: Georgia, Tbilisi (GMT+4)</p>
                    <Contacts className={styles['contacts--details']} />
                </div>
            </div>
            <Contacts className={styles['contacts--separated']} />
        </div>
    );

};

export default AuthorInfo;