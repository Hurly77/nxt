import CLUBS from '../../DATA';
import styles from './club-list.module.css';
import Image from 'next/image';

export default function ClubList() {
	const checkForEvent = (event, bool) => {
		if (bool) {
			return (
				<>
					<p>{event.dj}</p>
					<p>{event.genre}</p>
				</>
			);
		} else {
			return (
				<>
					<p>Juke Box Music</p>
					<p>Customer Favorite</p>
				</>
			);
		}
	};

	return (
		<div className={styles}>
			{CLUBS.map((club) => {
				return (
					<div>
						<div className={styles.clubHead}>
							<img
								src={club.img}
								width={100}
								height={100}
							/>
							<h1>{club.name}</h1>
						</div>
						<p>{club.hours}</p>
						{checkForEvent(club.event, club.isEvent)}
					</div>
				);
			})}
		</div>
	);
}
