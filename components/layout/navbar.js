import Link from 'next/link';
import styles from './nav.module.css';

function Navbar() {
	return (
		<div className={styles.nav}>
			<div>
				<Link href="/whatsup">Whats up</Link>
				<Link href="/friends">friends</Link>
				<Link href="/invites">Invites</Link>
				<Link href="/">
					<i id="home" className="fas fa-home"></i>
				</Link>
			</div>
			<div>
				<Link href="/nightplan">night plan</Link>
				<Link href="/nightout">night out</Link>
				<Link href="/previous">previous</Link>
				<i id="settings" className="fas fa-cog"></i>
			</div>
		</div>
	);
}

export default Navbar;
