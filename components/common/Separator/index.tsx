import cn from 'classnames';
import styles from './index.module.scss';

type SeparatorProps = {
    top?: boolean;
    bottom?: boolean;
    className?: string;
}

const Separator = ({top=true, bottom=true, className=''}: SeparatorProps) => {
    return (
        <div className={
            cn(
              styles['separator'],
              {
                  [styles['separator--top']]: top,
                  [styles['separator--bottom']]: bottom,
                  [className]: className
              }
            )} />
    );
};

export default Separator;