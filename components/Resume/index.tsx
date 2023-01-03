import AuthorInfo from "./AuthorInfo";
import Skills from "./Skills";
import Separator from "../common/Separator";
import WorkExperience from "./WorkExperience";

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