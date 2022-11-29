import styles from './ExampleGrid.module.css';

type ExampleGridProps = {
	children: React.ReactNode;
};

export function ExampleGrid(props: ExampleGridProps): JSX.Element {
	return <div className={styles.grid}>{props.children}</div>;
}

