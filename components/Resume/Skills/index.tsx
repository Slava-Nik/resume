import cn from 'classnames';
import styles from './index.module.scss';
import List from '../../common/List';


const Skills = () => {
    return (
        <div className={cn(styles.skills, 'section')}>
            <h3 className="section__title">Description of key skills</h3>

            <div className={styles['skills-module']}>
                <h4 className={styles['skills-module__title']}>Front-end:</h4>
                <List>
                    <li>Responsive, adaptive, cross-browser, PixelPerfect layout by using BEM methodology;</li>
                    <li>I use SСSS/Stylus with Flexbox, CSS grid, Styled components, CSS modules, Material UI, Bootstrap;</li>
                    <li>Storybook;</li>
                    <li>Adapting websites for mobile devices;</li>
                    <li>Email layout;</li>
                    <li>PWA;</li>
                    <li>SPA development with React.js + Redux (thunk, saga), GraphQL, including SSR (Next.js);</li>
                    <li>SPA development with Vue.js + Vuex;</li>
                    <li>Desktop apps development with Electron (electron-vite);</li>
                    <li>Javascript (ES5-ES2021), TypeScript, JQuery;</li>
                    <li>Javascript third party libraries (sliders, validation, navigation, animation etc.);</li>
                    <li>Loading and rendering performance optimizations & smooth interfaces;</li>
                    <li>Web security (OWASP best practices, security testing tools);</li>
                    <li>Unit testing: React testing library, Enzyme + Jest;</li>
                    <li>E2E testing: Cypress, Puppeteer;</li>
                    <li>CanvasJS;</li>
                    <li>json, xml, ajax;</li>
                    <li>svg / png sprites;</li>
                    <li>Task runner: Gulp. Bundler: Webpack;</li>
                    <li>Graphics preparation (cutting, editing and optimization of images);</li>
                    <li>Basic Figma & Sketch & Photoshop skills;</li>

                </List>
            </div>

            <div className={styles['skills-module']}>
                <h4 className={styles['skills-module__title']}>Back-end:</h4>
                <List>
                    <li>Node.js: Express.js, Nest.js, Koa.js, pure Node.js;</li>
                    <li>Monolith and micro-services architectures (GRPC and RabbitMQ communication);</li>
                    <li>Data management: Mongo.db (ORM: Mongoose), PostgreSQL (ORM: Sequelize), Firebase, MySQL, GraphQL, Memcached;</li>
                    <li>Integration with payment systems (Payture, PayPal, Tinkoff, Yandex.kassa);</li>
                    <li>CRM integration: Bitrix24;</li>
                    <li>Web-scrapers development: Complex scrapers using a headless browser (Puppeteer) and usual URL based ones;</li>
                    <li>Integration with third party services (trello api, vk api, slack api, telegram api, yandex metrika, google analytics, etc);</li>
                    <li>Cloud Platforms: AWS (EC2, S3, Lambda, SES), Heroku;</li>
                    <li>Containerization: Docker;</li>
                    <li>CI/CD: GitlabCI, CircleCI, Jenkins;</li>
                    <li>Logging & Monitoring: Sentry;</li>
                    <li>PHP: Laravel, Wordpress; (I had experience with PHP in the past, but now I prefer to work with Node.js);</li>
                </List>
            </div>

            <div className={styles['skills-module']}>
                <h4 className={styles['skills-module__title']}>Communicativeness:</h4>
                <List>
                    <li>Languages: English (Fluent/C1), Russian (Native);</li>
                    <li>Evaluation of cost and time;</li>
                    <li>Teamwork experience using gitflow (Github, Bitbucket, Gitlab);</li>
                    <li>Team leading experience (Front-end CTO ~1.5 years);</li>
                    <li>Project management in Jira, Trello;</li>
                </List>
            </div>
        </div>
    );

};

export default Skills;