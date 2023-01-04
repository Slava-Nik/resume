import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

type ListProps = {
    children: React.ReactNode,
    isNested?: boolean,
}

function List({children, isNested = false}: ListProps) {
    return (
        <ul className={cn({[styles.list]:!isNested,[styles['list--nested']]: isNested})}>
            {children}
        </ul>
    );
}

export default List;