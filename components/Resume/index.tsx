import AuthorInfo from './AuthorInfo';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import Separator from '../common/Separator';

const Resume = () => {
    return (
        <div className="resume">
            <AuthorInfo />
            <Separator top={false} />
            <Skills />
            <Separator />
            <WorkExperience/>
        </div>
    );
};

export default Resume;