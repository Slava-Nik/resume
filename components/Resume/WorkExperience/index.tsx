import cn from 'classnames';
import styles from './index.module.scss';
import List from '../../common/List';

const WorkExperience = () => {
    return (
        <div className={cn('section', 'work-experience')}>
            <h3 className='section__title'>Work experience / Oct 2015 — present</h3>

            <div className={styles['jobs']}>
                <div className={styles['job']}>
                    <h4 className={styles['job__heading']}>
                        <b>Startup: Acroplia</b>
                        <span> / United States (Remote) </span>
                        <span> / March 2022 - Nov 2022</span>
                    </h4>
                    <p className={styles['job__position']}>Position: Front-end technical lead & Node.js developer</p>
                    <p className={styles['job__description']}>Acroplia is an extensive and feature-rich communication, collaboration, and community platform for teams, families, and online learning.<br/>
                        For more information about the project, follow the link: <a href="https://slava-nik.github.io#recent_projects" target="_blank" rel="noreferrer">https://slava-nik.github.io#recent_projects</a>.
                    </p>
                    <List>
                        <li>Frontend tech lead responsibilities (Described below);</li>
                        <li>Re-writing the existing monolith Kotlin backend to a new micro-services Node.js backend with the usage of Nest.js framework and TypeScript;</li>
                        <li>Integration of the new micro-services backend to the existing frontend;</li>
                    </List>
                </div>

                <div className={styles['job']}>
                    <h4 className={styles['job__heading']}>
                        <b>Startup: Acroplia</b>
                        <span> / United States (Remote) </span>
                        <span> / May 2021 - March 2022</span>
                    </h4>
                    <p className={styles['job__position']}>Position: Front-end technical lead</p>
                    <List>
                        <li>Working on the entire frontend part of the platform (all Acroplia modules). Was responsible for: performance optimizations, refactoring, new features, bug fixes, and technical solutions;</li>
                        <li>Leading a team of 6 software engineers to ensure project milestones are achieved on time;</li>
                        <li>Code review and help to team members;</li>
                        <li>Tasks estimation and assistance to managers in the preparation of sprints;</li>
                        <li>Collaboration with the design team, QA team, Kotlin backend team, and DevOps engineers;</li>
                        <li>Conducting technical interviews with front-end and Node.js candidates. Conducted over 10 technical interviews;</li>
                    </List>
                </div>

                <div className={cn(styles['job'], styles['job--underlined'])}>
                    <h4 className={styles['job__heading']}>
                        <b>Startup: Acroplia</b>
                        <span> / United States (Remote) </span>
                        <span> / Sept 2020 - May 2021</span>
                    </h4>
                    <p className={styles['job__position']}>Position: Senior Front-end developer (React.js)</p>
                    <List>
                        <li>Delivered a large number of features to Acroplia modules: notes, task manager, calls, chats, connect-scene, Acroplia drive, and idea boards;</li>
                        <li>Resolved an extensive amount of different-level bugs across the entire platform;</li>
                        <li>Re-factored a decent part of the code base;</li>
                        <li>Integrated Sentry logging system to the project;</li>
                        <li>Integrated Storybook UI tool for reusable components;</li>
                        <li>Worked on critical rendering path to improve the loading performance of the platform. Significantly reduced the web-pack bundle size of the platform (down to 6 times); Lazy-loaded not-urgent components, libraries, data, and resources across the platform;</li>
                        <li>Spotted performantly in-efficient parts in crucial Acroplia modules (collaborative notes, video calls, chats), significantly improved their rendering performance;</li>
                        <li>Actively worked with the profiling tools (Chrome performance, React Profiler, wdyr, LightHouse, Memory leaks tools) to detect issues and improve the performance;</li>
                        <li>Improved the rendering performance almost in every Acroplia module: connect-scene, notes, task manager, idea boards, chat, video calls, quests, and Acroplia drive;</li>
                    </List>
                    <p className={styles['job__stack']}>
                        <b className={styles['job__stack-heading']}>Project stack: </b>
                        <span className={styles['job__stack-description']}>React.js, Redux, Webpack, Node.js (SSR), Redis, Web-sockets, AWS, Docker, Jitsi (Video conferencing), Quill.js (Notes), Konva.js (Canvas idea-board), MaterialUI, Storybook, etc; <br/> Acroplia Drive backend: Node.js, Mongo.db (Mongoose); <br/> Micro-services Node.js backend: Nest.js + TypeScript, GRPC, RabbitMQ, TypeORM, PostgreSQL;</span>
                    </p>
                </div>

                <div className={cn(styles['job'], styles['job--underlined'])}>
                    <h4 className={styles['job__heading']}>
                        <b>Startup: Nomad Calendar</b>
                        <span> / United States (Remote) </span>
                        <span> / April 2020 - Sept 2020</span>
                    </h4>
                    <p className={styles['job__position']}>Position: Full-stack web developer (Vue.js, Node.js)</p>
                    <p className={styles['job__description']}>Nomad Calendar is a progressive web application for travelers.<br/>
                        For more information about the project, follow the link: <a href="https://slava-nik.github.io#recent_projects" target="_blank" rel="noreferrer">https://slava-nik.github.io#recent_projects</a>.
                    </p>
                    <p className={styles['job__task-list-title']}>
                        Successfully developed and released the crucial part of Nomad Calendar PWA:
                    </p>
                    <List>
                        <li>Welcome screen view for initial PWA load;</li>
                        <li>Main screen view: travel slider, friends on a trip, travel plans functionality, notifications, bottom menu;</li>
                        <li>Group view: background images, group members, events calendar timeline share;</li>
                        <li>Map view: events calendar, core google map integration logic (pinpoints, encounters);</li>
                        <li>My Groups view;</li>
                        <li>Profile view: travel plans;</li>
                        <li>My timeline view;</li>
                        <li>Share timeline view;</li>
                        <li>Google Calendar integration;</li>
                        <li>Destination view: travel advisories (travel.state.gov) Node.js parser and API, Coronavirus statistics Node.js parser and API;</li>
                        <li>Generation of custom OG social image for every timeline share link via Selenium;</li>
                    </List>
                    <p className={styles['job__stack']}>
                        <b className={styles['job__stack-heading']}>Project stack: </b>
                        <span className={styles['job__stack-description']}>
                            PWA, Vue.js, Vuex, responsive web, Node.js + Express.js, MongoDB, AWS (S3), Docker, Google OAuth, Google Calendar API;
                        </span>
                    </p>
                </div>

                <div className={cn(styles['job'], styles['job--underlined'])}>
                    <h4 className={styles['job__heading']}>
                        <b>Startup: Good Gantt</b>
                        <span> / Dec 2018 - April 2020</span>
                    </h4>
                    <p className={styles['job__position']}>Position: Full-stack web developer (React.js, Node.js)</p>
                    <p className={styles['job__description']}>GoodGantt is a planning tool for Trello, that was created to simplify the process of project planning.<br/>
                        For more information about the project, follow the link: <a href="https://slava-nik.github.io#recent_projects" target="_blank" rel="noreferrer">https://slava-nik.github.io#recent_projects</a>.
                    </p>
                    <List>
                        <li>Investigated and resolved multiple crucial performance issues in the existing codebase of Good Gantt;</li>
                        <li>Successfully delivered the major part of Good Gantt functionality: real-time collaboration, milestones, groups (creation and sorting), etc;</li>
                        <li>Delivered crucial E2E tests for core functionality using Cypress;</li>
                        <li>Successfully implemented and delivered the monetization part of Good Gantt:
                            <List isNested>
                                <li>Tariff plans functionality;</li>
                                <li>Teams functionality (The project manager can pay for places in his team, and add different users to the team. Only the users will get access to Gantt App);</li>
                                <li>Billing history page;</li>
                                <li>Promo functionality;</li>
                            </List>
                        </li>
                        <li>Accomplished a custom integration with the Payture payment system (Custom widget, email cheques, recurrent payments for subscriptions);</li>

                    </List>
                    <p className={styles['job__stack']}>
                        <b className={styles['job__stack-heading']}>Project stack: </b>
                        <span className={styles['job__stack-description']}>
                            React.js, Redux, Firebase, Node.js + Express.js, MongoDB, Web-sockets, RabbitMQ, Docker, Payture payment system, Trello API;
                        </span>
                    </p>
                </div>

                <div className={cn(styles['job'], styles['job--underlined'])}>
                    <h4 className={styles['job__heading']}>
                        <b>Project: HR Network</b>
                        <span> / Sept 2018 - Dec 2018</span>
                    </h4>
                    <p className={styles['job__position']}>Position: Full-stack web developer</p>
                    <p className={styles['job__description']}>HR Network Platform helps enterprise clients find IT specialists.<br/>
                        For more information about the project, follow the link: <a href="https://slava-nik.github.io#recent_projects" target="_blank" rel="noreferrer">https://slava-nik.github.io#recent_projects</a>.
                    </p>
                    <List>
                        <li>Re-built the server-side part of the application using Node.js, Express, and MongoDB;</li>
                        <li>Implemented Multilingual Support;</li>
                        <li>Re-factored the front-end part of the website;</li>
                        <li>Implemented mobile responsive layout;</li>
                        <li>Implemented dynamic radar animation;</li>
                        <li>Implemented email layouts, and set up automatic mailing to users via Amazon Email Service (AWS SES) integration;</li>
                        <li>Deployed the project to AWS EC2 instance;</li>
                    </List>
                    <p className={styles['job__stack']}>
                        <b className={styles['job__stack-heading']}>Project stack: </b>
                        <span className={styles['job__stack-description']}>
                            JavaScript, SCSS, responsive web, Node.js + express, Mongo.db, AWS (EC2, Amazon SES);
                        </span>
                    </p>
                </div>

                <div className={cn(styles['job'], styles['job--underlined'])}>
                    <h4 className={styles['job__heading']}>
                        <b>Work experience</b>
                        <span> / Oct 2015 - Sept 2018</span>
                    </h4>
                    <p className={styles['job__position']}>Position: Full-stack web developer</p>
                    <p className={styles['job__description']}>
                        I{"'"}ve been developing front-end and back-end for web applications. <br/>
                        My projects are available via the link:{' '}
                        <a href="https://slava-nik.github.io#recent_projects" target="_blank" rel="noreferrer">https://slava-nik.github.io#recent_projects</a>.
                    </p>
                    <p className={styles['job__stack']}>
                        <b className={styles['job__stack-heading']}>Stack: </b>
                        <span className={styles['job__stack-description']}>
                            Javascript, TypeScript, React.js, Redux, Material UI, SCSS, Node.js, Express, MongoDb, PostgreSQL, Docker
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );

};

export default WorkExperience;