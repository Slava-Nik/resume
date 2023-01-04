import cn from 'classnames';
import styles from './index.module.scss';

type SeparatorProps = {
    top?: boolean;
    bottom?: boolean;
}

const Separator = ({top=true, bottom=true}: SeparatorProps) => {
    return (
        <div className={cn(styles['separator'], {[styles['separator--top']]: top, [styles['separator--bottom']]: bottom})} />
    );
};

export default Separator;